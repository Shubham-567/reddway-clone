# Reddway Clone

A clone of the Reddway.io homepage. Reddway is a website builder platform that uses AI to help entrepreneurs and businesses create their own e-commerce stores and websites without needing to code.

> **Note:** This project was developed as a technical assessment for an internship application.

---

## Live Demo

- **Live Site (Clone):** [https://reddway.vercel.app/](https://reddway.vercel.app/)
- **Original Website:** [https://reddway.io/](https://reddway.io/)

---

## Features

- **Responsive Design:** The layout is fully responsive and optimized for all screen sizes, from mobile to desktop.

- **Homepage Clone:** This project is a visual and structural clone of the original Reddway.io homepage.

- **Interactive UI:** Includes key interactive elements from the original site, such as the FAQ accordion and testimonial slider.

- **Reusable Components:** Built with a clean component-based structure using React/Next.js.

---

## Tech Stack

- **Next.js** (React)
- **Tailwind CSS** for styling
- **Lucide React** for icons

---

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

You need to have **Node.js** (v14 or higher) installed on your computer.

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Shubham-567/reddway-clone.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd reddway-clone
    ```

3.  **Install the dependencies:**

    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Your application should now be running! Open your browser and go to `http://localhost:3000` (or the address provided by Next.js).

---

## Project Structure

The project follows a standard Next.js application structure.

- `src/app/`: Contains the main application code.
  - `layout.js`: The root layout component that wraps all pages.
  - `page.js`: The main homepage component that assembles all sections.
  - `globals.css`: Global styles for the application.
- `src/components/`: Contains all reusable React components used on the homepage (e.g., `Navbar`, `Footer`, `VideoSection`, `TestimonialsSection`, etc.).

```plaintext
reddway-clone/
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components
│       ├── BusinessSection.jsx
│       ├── ExploreTemplatesSection.jsx
│       ├── FAQSection.jsx
│       ├── FeaturesSection.jsx
│       ├── Footer.jsx
│       ├── HowItWorksSection.jsx
│       ├── Navbar.jsx
│       ├── TestimonialsSection.jsx
│       └── VideoSection.jsx
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
```

## License

This project is licensed under the **MIT License**.
