
# 👗 **WearWell – Full-Stack Fashion E-Commerce Platform**

**WearWell** is a full-stack, scalable **MERN-based e-commerce platform** for clothing brands.
It includes a modern **React + Tailwind frontend**, a secure **Node.js + Express backend**, and a powerful **Admin Dashboard** — all integrated in one repo for seamless deployment and development.

Customers can browse fashion collections, add items to their cart, and checkout securely via **Stripe**, while admins can manage products, orders, and users effortlessly.

---

## 🌐 **Live Links**

* 🛍️ **Frontend (Customer App):** [https://e-commerce-frontend-nine-tan.vercel.app/]
* 🧠 **Admin Panel:** [https://e-commerce-admin-tau-beryl.vercel.app/]

---

## 🧱 **Tech Stack**

| Layer                 | Technology                                                 |
| --------------------- | ---------------------------------------------------------- |
| **Frontend**          | React.js, Redux Toolkit, Tailwind CSS                      |
| **Backend**           | Node.js, Express.js                                        |
| **Database**          | MongoDB (Mongoose ODM)                                     |
| **Payments**          | Stripe API                                                 |
| **Media Storage**     | Cloudinary                                                 |
| **Authentication**    | JWT + bcrypt                                               |
| **State Management**  | Redux Toolkit                                              |
| **Deployment**        | Vercel (Frontend & Admin), Render (Backend), MongoDB Atlas |
| **Security & Config** | Helmet, dotenv, CORS                                       |
| **Validation**        | Express Validator                                          |

---

## ⚙️ **Core Features**

✅ **User Authentication** — Secure signup/login using JWT
✅ **Product Catalog** — Browse latest, top-rated, and best-selling clothing items
✅ **Shopping Cart** — Add, remove, and modify cart items in real-time
✅ **Stripe Payment Integration** — End-to-end secure payments with success tracking
✅ **Order History** — Users can view their past orders with status updates
✅ **Cloudinary Integration** — Optimized media upload for products
✅ **Admin Dashboard** — Manage products, orders, and users
✅ **Responsive UI** — Fully optimized for desktop, tablet, and mobile
✅ **Global State Management** — Centralized control via Redux Toolkit
✅ **Scalable Modular Codebase** — Easy to extend for coupons, wishlists, etc.

---

## 🧭 **Project Structure**

```
wearwell/
 ┣ backend/           → Node.js + Express REST API
 ┃ ┣ controllers/     → Logic for products, orders, users
 ┃ ┣ models/          → Mongoose schemas
 ┃ ┣ routes/          → API route handlers
 ┃ ┣ middleware/      → Auth + error handling
 ┃ ┣ utils/           → Cloudinary, Stripe helpers
 ┃ ┣ config/          → DB connection, environment setup
 ┃ ┗ server.js        → Entry point

 ┣ frontend/          → Customer-facing React app
 ┃ ┣ src/
 ┃ ┃ ┣ components/    → UI components
 ┃ ┃ ┣ pages/         → Home, Product, Cart, Checkout
 ┃ ┃ ┣ redux/         → Slices for user, product, cart
 ┃ ┃ ┣ api/           → Axios instance setup
 ┃ ┃ ┗ App.jsx        → App entry

 ┣ admin/             → Admin Dashboard (React + Tailwind)
 ┃ ┣ src/
 ┃ ┃ ┣ pages/         → Orders, Users, Products
 ┃ ┃ ┣ components/    → Admin UI components
 ┃ ┃ ┗ redux/         → Admin state management
 ┗ README.md
```

---

## 🛠️ **API Overview (Backend)**

### 👤 Auth

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/auth/register` | Register new user          |
| POST   | `/api/auth/login`    | Login and return JWT token |

### 👗 Products

| Method | Endpoint            | Description                                        |
| ------ | ------------------- | -------------------------------------------------- |
| GET    | `/api/products`     | Fetch all products (supports pagination + filters) |
| POST   | `/api/products`     | Add product (Admin only)                           |
| PUT    | `/api/products/:id` | Update product                                     |
| DELETE | `/api/products/:id` | Delete product                                     |

### 🛒 Cart / Orders

| Method | Endpoint              | Description                        |
| ------ | --------------------- | ---------------------------------- |
| POST   | `/api/orders`         | Create new order (Stripe checkout) |
| GET    | `/api/orders/:userId` | Get user orders                    |
| GET    | `/api/orders/:id`     | Get order details by ID            |

### ☁️ Cloudinary

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| POST   | `/api/upload`     | Upload product image         |
| DELETE | `/api/upload/:id` | Delete image from Cloudinary |

---

## ⚙️ **Setup & Installation**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/<your-username>/wearwell.git
cd wearwell

# 2️⃣ Install dependencies for backend, frontend, and admin
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install

# 3️⃣ Add environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
cp admin/.env.example admin/.env

# 4️⃣ Run development servers
# (Run each in separate terminals)
cd backend && npm run dev
cd frontend && npm run dev
cd admin && npm run dev
```

---

## 🔐 **Environment Variables**

| Variable                | Description               |
| ----------------------- | ------------------------- |
| `MONGO_URI`             | MongoDB connection string |
| `JWT_SECRET`            | JWT secret key            |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name     |
| `CLOUDINARY_API_KEY`    | Cloudinary API key        |
| `CLOUDINARY_API_SECRET` | Cloudinary secret         |
| `STRIPE_SECRET_KEY`     | Stripe private API key    |
| `CLIENT_URL`            | Frontend domain for CORS  |

---

## ☁️ **Deployment**

| Service              | Platform      |
| -------------------- | ------------- |
| **Frontend & Admin** | Vercel        |
| **Backend**          | Render        |
| **Database**         | MongoDB Atlas |
| **Media Storage**    | Cloudinary    |
| **Payments**         | Stripe        |

---

## 🧠 **Scalability & Architecture Notes**

* Modular, MVC-based code structure for maintainability
* Decoupled frontend-backend with clean REST interfaces
* Integrated Stripe + Cloudinary SDKs for production reliability
* Reusable UI components and slices with Redux Toolkit
* Centralized error handling and CORS control
* Easy environment switching (local ↔ production)

---

## 📸 **Screenshots**

> 🖼️ *Add here later:
