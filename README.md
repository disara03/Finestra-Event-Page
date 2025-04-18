# 🏦 Reimagine Banking - Finastra Event Landing Page

This is a modern, responsive landing page redeveloped for the **Finastra Event** hosted by Cogent Solutions. It is built using **React**, **Tailwind CSS**, and stores form data using **localStorage (JSON format)**.

> ✅ This project is part of the Full Stack Developer Internship Task at Cogent Solutions.

---

## 🔧 Tech Stack

- ⚛️ React (with Vite)
- 🎨 Tailwind CSS (for styling)
- 📦 localStorage (to simulate backend storage using JSON)
- 💻 VS Code (recommended editor)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/finastra-landing.git
cd finastra-landing
# Finestra-Event-Page

 Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm run dev
📍 Open your browser and go to:
http://localhost:5173

✨ Features
Mobile-friendly and fully responsive design

Beautiful hero section and event info layout

Smooth transitions and modern UI with TailwindCSS

Contact/Registration form (Name, Email, Message)

Form submissions are saved locally using browser's localStorage in JSON format

Clean and modular code structure

📂 Project Structure
csharp
Copy
Edit
finastra-landing/
├── public/
├── src/
│   ├── assets/           # Images and logos
│   ├── components/       # Reusable UI components (ContactForm.jsx)
│   ├── pages/            # LandingPage.jsx
│   ├── App.jsx           # Main app
│   └── main.jsx          # Entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
📦 Data Storage
Form data is saved to the browser's local storage like this:

json
Copy
Edit
{
  "registrations": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Looking forward to the event!"
    }
  ]
}
You can view it using browser developer tools > Application > Local Storage.

🌐 Deployment
You can easily deploy this on:

Vercel

Netlify

GitHub Pages (with Vite plugin if needed)

👏 Acknowledgements
Task provided by Cogent Solutions as part of Full Stack Developer Internship.

Inspired by the original landing page:
https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/

