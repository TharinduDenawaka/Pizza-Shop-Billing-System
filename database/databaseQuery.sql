-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(50) NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Invoices table
CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  invoice_number VARCHAR(20) UNIQUE NOT NULL,
  cashier_name VARCHAR(100) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  subtotal DECIMAL(10, 2) NOT NULL,
  tax DECIMAL(10, 2) NOT NULL,
  total DECIMAL(10, 2) NOT NULL
);

-- Invoice items table
CREATE TABLE invoice_items (
  id SERIAL PRIMARY KEY,
  invoice_id INTEGER REFERENCES invoices(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id),
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER NOT NULL,
  total DECIMAL(10, 2) NOT NULL
);


INSERT INTO products (name, category, price, image) VALUES
('Sausage Delight', 'pizza', 2980, '/images/7.png'),
('Crispy Korean Chicken', 'pizza', 4200, '/images/8.png'),
('Teriyaki Chicken', 'pizza', 4300, '/images/9.png'),
('Thai Green Curry Chicken', 'pizza', 3780, '/images/10.png'),
('Middle Eastern Chicken', 'pizza', 3500, '/images/11.png'),
('Veggie Masala Pizza', 'pizza', 2980, '/images/12.png'),
('Chilli Chicken Pizza', 'pizza', 3000, '/images/13.png'),
('Margherita', 'pizza', 2800, '/images/14.png'),
('Iced Chocolate Malt', 'beverages', 550, '/images/15.png'),
('Thick Mango Magic (300ml)', 'beverages', 750, '/images/16.png'),
('Vanilla Milk Shake (300ml)', 'beverages', 980, '/images/17.png'),
('Double Chocolate Milk Shake (300ml)', 'beverages', 980, '/images/18.png'),
('Strawberry Milk Shake (300ml)', 'beverages', 950, '/images/19.png'),
('Pet Coca-Cola', 'beverages', 220, '/images/20.png'),
('Pet Sprite', 'beverages', 220, '/images/21.png'),
('Pet Fanta Orangee', 'beverages', 220, '/images/22.png'),
('Coke Zero 400ml', 'beverages', 200, '/images/23.png'),
('1.5l Coca-Cola', 'beverages', 450, '/images/24.png'),
('1.5l Sprite', 'beverages', 450, '/images/25.png'),
('Mineral Water', 'beverages', 70, '/images/26.png'),
('Pepperoni', 'toppings', 200, '/images/27.png'),
('Ham & Pineapple', 'toppings', 990, '/images/28.png'),
('BBQ', 'toppings', 990, '/images/29.png'),
('Garlic Butter Prawns and Chilli', 'toppings', 990, '/images/30.png'),
('Sausage & Kale', 'toppings', 990, '/images/31.png'),
('Garlic Cheese', 'toppings', 990, '/images/32.png');



select * from products
select * from invoices 
select * from invoice_items 


