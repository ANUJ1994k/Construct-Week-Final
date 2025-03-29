# ASOS E-Commerce Web App

## 🚀 Overview
This is a fully functional E-Commerce web application built using **React, Node.js, Express, and MongoDB**. It allows users to browse products, add items to their cart, complete the checkout process, and manage orders.

## 🛠️ Features
- **User Authentication** (Sign Up, Login, Logout)
- **Product Catalog** with filtering & sorting
- **Shopping Cart** functionality
- **Checkout & Payment Integration**
- **Responsive Design** for all devices

## 🏗️ Tech Stack
- **Frontend:** React, Redux, Tailwind CSS, Chakra UI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT

## 🔧 Installation
### Clone the Repository
```sh
git clone https://github.com/ANUJ1994k/Construct-Week-Final.git
cd Construct-Week-Final
```

### Environment Variables
Create a `.env` file in the  directory with the following variables:
```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```
### Run the App
#### Start Backend Server
```sh
cd Backend-Server-Side
npm start
live Link : https://backend-server-side.onrender.com
```
#### Start Frontend Server
```sh
cd FrontEnd-Client
npm start
```

## 📌 API Routes
### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product

### Cart
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get user cart

### Orders
- `POST /api/orders` - Place an order
- `GET /api/orders` - Fetch user orders

An Snip shot :
![image](https://github.com/user-attachments/assets/e5b660d9-800a-4845-a4c3-6ba7fe4f1c61)

---
### 💡 Have Suggestions or Issues?
Feel free to open an issue or contribute to the project!
