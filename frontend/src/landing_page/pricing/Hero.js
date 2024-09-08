import React from 'react';
import OpenAccount from "../OpenAccount"
function Hero() {
    return ( 
    <>
    <div className='container'>
        <div className='text-center '>
        <h1 className='mt-5' style={{fontSize:"2.8rem"}}>Pricing</h1>
        <p className='fs-4  text-muted'>Free equity investments and flat ₹20 intraday and F&O trades</p>
        </div>
        <div className='row p-5 border-bottom'>
            <div className='col-4 p-5'>
                <img src='media/images/pricing0.svg'/>
                <h2 className='mb-3'>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-5'>
            <img src='/media/images/intradayTrades.svg'/>
                <h2 className='mb-3'>Intraday and F&O </h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
           
            </div>
            <div className='col-4 p-5'>
            <img src='media/images/pricing0.svg'/>
                <h2 className='mb-3'> Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
           
            </div>
        </div>
        <OpenAccount/>
       

    </div>
    </>
 );
}

export default Hero;