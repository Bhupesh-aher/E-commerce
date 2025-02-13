import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verfiy = () => {

    const {navigate, token, setCartItems, backendUrl} = useContext(ShopContext)
    const [searchParams] = useSearchParams();

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const VerfiyPayment = async() => {
        try{
            if(!token) {
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/verfiyStripe', {success, orderId}, {headers: {token}})
            if(response.data.success){
                setCartItems({})
                navigate('/orders')
            }
            else {
                navigate('/cart')
            }
        }   
        catch(err){
            console.log(err);
            toast.error(err.message)
        }
    }

    useEffect(() => {
        VerfiyPayment();
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Verfiy