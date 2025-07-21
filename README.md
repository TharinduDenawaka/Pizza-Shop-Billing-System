#  Pizza Shop Billing System

A full-stack web application for a pizza shop to manage Products and generate professional customer invoices.

##  Project Overview

This system allows the shop to:

- Manage menu items (pizzas, toppings, beverages)
- Create and manage invoices
- Print bills in a clean, professional format
- Ensure responsive design and smooth UI/UX


##  Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | React.js, Tailwind CSS  |
| Backend     | Node.js (Express)       |
| Database    | PostgreSQL              |
| Architecture| MVC Pattern             |


##  1. Database Setup

1. Open **pgAdmin** or PostgreSQL CLI.
2. Create a database:

```sql
CREATE DATABASE pizza-shop;
```

3. Run the SQL scripts in the `database\databaseQuery.sql` file to create these tables:

- `products`
- `invoices`
- `invoice_items`

A `.sql` file with all table creation and INSERT queries is included in the `database\databaseQuery.sql` folder.


## 2. Backend Setup (Node.js + Express)

`backend/`

### Prerequisites:

- Node.js and npm installed
- PostgreSQL installed and running

### Steps:

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend root:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=pizza-shop
```

4. Start the backend server:

```bash
npx nodemon server.js
```

> Server runs on: `http://localhost:5000/`


##  3. Frontend Setup (React + Tailwind CSS)

>  Folder: `frontend/`

### Steps:

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

> App runs on: `http://localhost:3000/`


## Features

- View products (pizzas, toppings, beverages)
- Create invoices with Products details, quantity, tax, and total
- Print professional customer bills
- Mobile-friendly, responsive design


## Documentation

See the (`PizzaShop_Documentation.pdf`) 

- UI designs
- Annotated images



## 📌 Notes

- Database backup included in `database\Pizza-shop-Backup.sql`


