import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = "info@oasisgolfstudio.com";
const FROM_EMAIL = "Oasis Golf Studio <noreply@oasisgolfstudio.com>";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      console.log("New Contact Submission:", submission);

      // Send notification email
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: data.email,
        subject: `New enquiry from ${data.name} — Oasis Golf Studio`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
            <div style="background: #F37021; padding: 24px 32px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #fff; margin: 0; font-size: 22px;">New Website Enquiry</h1>
              <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Submitted via oasisgolfstudio.com</p>
            </div>
            <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; width: 120px; color: #555;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${data.email}" style="color: #F37021;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; color: #555;">Phone</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${data.phone || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: 600; color: #555; vertical-align: top;">Message</td>
                  <td style="padding: 10px 0; white-space: pre-wrap;">${data.message}</td>
                </tr>
              </table>
              <div style="margin-top: 24px;">
                <a href="mailto:${data.email}" style="background: #F37021; color: #fff; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${data.name}</a>
              </div>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
      } else {
        console.log("Notification email sent to", NOTIFY_EMAIL);
      }

      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", errors: error.errors });
      } else {
        console.error("Contact route error:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
