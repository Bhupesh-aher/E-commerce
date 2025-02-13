import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe} from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router();

// Admin apis 
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


// payment apis
orderRouter.post('/place', authUser ,placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)



// User apis to get all order details
orderRouter.post('/userorders', authUser, userOrders)



// verify payment
orderRouter.post('/verfiyStripe', authUser, verifyStripe)


export default orderRouter