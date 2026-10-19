# 🛒 FreshMart - Online Grocery Shopping Website

FreshMart is a modern, responsive online grocery shopping application built with React and Vite. It provides an intuitive e-commerce experience for browsing fresh fruits, vegetables, and everyday grocery items, with instant search, category filtering, cart management, checkout, and printable invoice generation.

🌐 **Live Demo:** [https://anfal18.github.io/freshmart/](https://anfal18.github.io/freshmart/)  
🛍️ **Products Section:** [https://anfal18.github.io/freshmart/#products](https://anfal18.github.io/freshmart/#products)

---

## ✨ Features

- **🥬 Fresh Product Showcase**: Explore fresh organic fruits, vegetables, and groceries with high-res visuals, unit pricing, and stock details.
- **🔍 Real-Time Search & Category Filters**: Quickly find products by name or category (Fruits, Vegetables, Dairy, Bakery, etc.).
- **🛒 Dynamic Cart Management**: Add or remove items, adjust quantities, and retain cart state via `localStorage`.
- **💳 Smooth Checkout Experience**: Complete customer information form and simulated checkout process.
- **🧾 Instant Invoice / Printable Bill**: Auto-calculated taxes, order summary, and printable receipt.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile browsers with fluid layout and modern UI styling.
- **⚡ Automated GitHub Pages Deployment**: GitHub Actions workflow automatically builds and deploys upon pushing to `main`.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 6, JavaScript (ES6+), CSS3 (Modern Flex/Grid & Glassmorphism)
- **Icons**: Lucide React
- **Backend (Optional / Full-Stack API)**: Express.js, Node.js, MySQL2 (`server.js`, `db.js`)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anfal18/freshmart.git
   cd freshmart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) (or [http://localhost:5173/#products](http://localhost:5173/#products)) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🗄️ Optional Backend Setup (MySQL & Express)

If you wish to run the optional backend server:
1. Ensure MySQL is running and create a database named `freshmart_db`.
2. Configure your environment variables in a `.env` file:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=freshmart_db
   ```
3. Start the backend:
   ```bash
   npm run server
   ```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
