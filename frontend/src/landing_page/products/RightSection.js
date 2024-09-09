import React from 'react';
function RightSection({
    imgUrl,
    productname,
    productDescription,
    trydemo,
    learnMore,
    Google,
    Appstore,
  }) {
    return ( <>
     <div className="container">
        <div className="row">
         
          <div className="col-6 p-5 mt-5"  >
            <h1 className='mt-5  ' style={{paddingTop:"2rem"}}>{productname}</h1>
            <p>
              {productDescription}
            </p>
            <div className="mb-5">
            <a  href="linkssome" style={{textDecoration:"none"}}> learnMore <i class="fa-solid fa-arrow-right"></i></a>
            </div>

          </div>
          <div className="col-6  ">
            <img src={imgUrl} />
          </div>
        </div>
      </div>
    </>  );
}

export default RightSection;