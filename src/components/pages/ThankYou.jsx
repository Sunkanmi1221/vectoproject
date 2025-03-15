import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
    return (
        <div className='py-[5%] px-[10%] bg-cover bg-center mb-[-10%] text-center' style={{ backgroundImage: `url(/img/Thanks.jpg)`, height: `100vh` }}>
            <img src="" alt="" />
            <div className='bg-white rounded-lg p-[10px] opacity-80'>
                <p className=' text-sm md:text-xl lg:text-xl font-semibold'>Thank you for making your order. A representative will contact you shortly, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore velit in laboriosam ad odit enim ut possimus quam a atque.</p>
                <Link to="/products">
                    <button className='bg-pink-950 p-[5px] md:p-[10px] lg:p-[10px] rounded-lg text-white mt-[20px]'>Back to products</button>

                </Link>
            </div>
        </div>
    )
}

export default ThankYou;