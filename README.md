# Oasis Golf Studio (OGS) Website

A premium marketing website for Oasis Golf Studio in Riyadh, built with React, Vite, and Tailwind CSS.

## How to Run

1.  **Install Dependencies:** `npm install`
2.  **Start Development Server:** `npm run dev`
3.  **Open in Browser:** Visit `http://localhost:5000`

## Project Structure

-   `client/src/pages`: Contains the page components (Home, Rates, Memberships, etc.).
-   `client/src/components`: Reusable UI components.
-   `attached_assets`: Static assets like logos and images.
-   `server`: Backend API (handles contact form submissions).
-   `shared`: Shared types and route definitions.

## Where to Edit Content

Since this is a static-style marketing site, content is embedded directly in the React components.

-   **Home Page:** Edit `client/src/pages/home.tsx` (or similar).
-   **Rates:** Edit `client/src/pages/rates.tsx` to update pricing placeholders.
-   **Memberships:** Edit `client/src/pages/memberships.tsx` for tier details.
-   **Events:** Edit `client/src/pages/events.tsx`.
-   **Contact Info:** Edit `client/src/pages/contact.tsx`.

## What to Replace Later

1.  **Logos:** Replace the placeholder logos in `attached_assets` or update the imports in the components to point to high-resolution versions.
2.  **Booking Links:** Currently, "Book Now" buttons may be placeholders. Connect them to your actual booking system (e.g., MindBody, GolfGenius, or a custom booking URL).
3.  **Prices:** Update "From SAR ___" with actual pricing in `client/src/pages/rates.tsx`.
4.  **Map:** Add a real Google Maps embed in `client/src/pages/contact.tsx`.
5.  **WhatsApp:** Update the WhatsApp link with the real business number.

## Backend

The backend (`server/routes.ts`) currently logs contact form submissions to the server console. For production, you should connect this to an email service (like SendGrid or Resend) or a database.
