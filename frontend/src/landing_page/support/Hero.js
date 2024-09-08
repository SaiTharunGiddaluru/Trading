import React from "react";
function Hero() {
  return (
    <section className="container-fluid mt-5 mb-5 p-3" id="SupportHero">
      <div className="mt-5 " id="SupportWrapper">
        <h4>Support Portal</h4>
        <a  id="anchorsupport" href="#">
          Track Tickets
        </a>
      </div>

      <div className="row">
        <div className="col-6 p-5">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input st placeholder="Eg: How do I activate F&O" /> <br/>
          <ul>
          <li><a  id="anchorsupport"href="#" >Track account opening </a><br/></li>
          <li><a id="anchorsupport"href="#">Track segment activation</a><br/></li>
          <li><a id="anchorsupport"href="#">Intraday margins </a><br/></li> 
         <li><a id="anchorsupport"href="#">Kite user manual</a><br/> </li>
         </ul>
          
        </div>
        <div className="col-6 p-5">
            <h3 >
            Featured
            </h3>
            <ol style={{lineHeight:"1.5cm"}}>
                <li>
                Surveillance measure on scrips - August 2024 </li>
 
                <li>Latest Intraday leverages and Square-off timings</li>
               
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
