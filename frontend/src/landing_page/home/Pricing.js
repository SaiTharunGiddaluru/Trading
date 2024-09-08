import React from 'react';
function Pricing() {
    return (  
        <>
        
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                <h1 className='mt-5  mb-3'>Unbeatable pricing</h1>
                <p className='text-muted'>
                We pioneered the concept of discount broking and price <br/>
                transparency in India. Flat fees and no hidden charges.
                </p>
                <a style={{ textDecoration: "none", margin: "0", display: "block" }} href='sdsjs/'>
                      See pricing <i className="fa-solid fa-arrow-right"></i>
                </a>
                    </div>
                    <div className='col-2'>
                    </div>
                <div className='col-6 mt-5'>
                  <div className='row text-center'>
                    <div className='col-6 border p-3'>
                        <h1>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col-6 border p-3'>
                    <h1>₹20</h1>
                    <p>Intraday and F&O</p>

                    </div>
                  </div>

                </div>

            </div>

        </div>
         
        </>
    );
}

export default Pricing;