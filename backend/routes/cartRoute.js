import express from 'express'
import {addToCart, getUsercart, updateCart} from "../controllers/cartController"
import authUser from '../middleware/auth';

const cartRouter = express.Router();

cartRouter.post('/get', authUser, getUsercart)

cartRouter.post('/add',  authUser, addToCart)

cartRouter.post('/update',  authUser, updateCart)

export default cartRouter