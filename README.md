#  Pizza Shop Billing System

A full-stack web application for a pizza shop to manage products and generate professional customer invoices.

---

##  Project Overview

This system allows the shop to:

- Manage menu items (pizzas, toppings, beverages)
- Create and manage invoices
- Print bills in a clean, professional format
- Ensure responsive design and smooth UI/UX

---

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | React.js, Tailwind CSS  |
| Backend     | Node.js (Express)       |
| Database    | PostgreSQL              |
| Architecture| MVC Pattern             |

---

## Folder Structure

```
root/
│
├── backend/         # Node.js + Express API
├── frontend/        # React + Tailwind frontend
├── database/        # SQL scripts
├── .gitignore
├── package.json     # Root-level scripts and concurrently setup
└── README.md
```

---

## 1. Database Setup

1. Open **pgAdmin** or PostgreSQL CLI.
2. Create a database:

```sql
CREATE DATABASE pizza-shop;
```

3. Run the SQL file located at:

```
database/databaseQuery.sql
```

It includes table creation and seed data for:

- `products`
- `invoices`
- `invoice_items`

---

## 2. Combined Project Setup (Root Level with Concurrently)

This method allows you to start both backend and frontend together using a single command.

### Prerequisites

- Node.js + npm installed
- PostgreSQL installed
- Your `.env` file properly configured in `backend/`

### Steps:

1. Make sure you're in the root project directory.

2. Install root-level dependencies and tools:

```bash
npm install concurrently --save-dev
```

3. In the root `package.json`, add the following script:

```json
"scripts": {
      "start": "concurrently \"npm run start --prefix backend\" \"npm run start --prefix frontend\"",
      "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
   },
```

4. Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=pizza-shop
```

5. Now run the full stack app with:

```bash
npm run start
```

---

## 3. Individual Backend Setup

> Folder: `backend/`

```bash
cd backend
npm install
npx nodemon server.js  or node server.js
```

Runs on `http://localhost:5000/`

---

## 4. Individual Frontend Setup

> Folder: `frontend/`

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:3000/`

---

## Features

- Browse product categories (Pizza, Toppings, Beverages)
- Create and manage customer invoices
- Professional invoice print layout
- Fully responsive for mobile & tablet
- Built with modern full-stack technologies

---

## Contact

Designed & Developed by **Tharindu Dasun Denawaka**  
Email: [tharindudasun1997@gmail.com](mailto:tharindudasun1997@gmail.com)