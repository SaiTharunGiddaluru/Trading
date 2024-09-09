import React from "react";
function LeftSection({
  imgUrl,
  productname,
  productDescription,
  trydemo,
  learnMore,
  Google,
  Appstore,
}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <img src={imgUrl} />
          </div>
          <div className="col-6 p-5 "  >
            <h1>{productname}</h1>
            <p>
              {productDescription}
            </p>
            <div className="mb-5">
            <a style={{textDecoration:"none"}}href="linkss"> Try demo <i class="fa-solid fa-arrow-right"></i></a>
            <a style={{textDecoration:"none"}}className="mx-5" href="sjjsj"> learnMore <i class="fa-solid fa-arrow-right"></i></a>

            </div>
           <div>
           <a href="somelinks" style={{textDecoration:"none"}}> <img src={Google}/> </a>
           <a className="mx-3" href="somelinks" style={{textDecoration:"none"}}> <img src={ Appstore} /></a>
           </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
