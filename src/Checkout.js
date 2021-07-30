import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
//renders the basket itself

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg' alt=''
                />

                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
{/* 
                    <CheckoutProduct
                        id='1234'
                        title='lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum'
                        image="https://m.media-amazon.com/images/I/81H5GpCx2hL._AC_UL480_FMwebp_QL65_.jpg"
                        alt=""
                        price={199}
                        rating={5}
                    />

                    <CheckoutProduct
                        id='1234'
                        title='lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsumorem ipsum'
                        image="https://m.media-amazon.com/images/I/81H5GpCx2hL._AC_UL480_FMwebp_QL65_.jpg"
                        alt=""
                        price={199}
                        rating={5}
                    /> */}

                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
