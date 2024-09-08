import React from 'react';
function Teams() {
    return (  
    <div className='container border-bottom'>
 <div className="row mb-5 ">
          <h1 className="text-center mb-5">People</h1>
          <div className="col-6 text-center">
            <img
              style={{ width: "40%", borderRadius: "100%" ,marginTop:"100px"}}
              src="media\images\Saitharun.jpg"
            />
            <h4 className="mt-5 text-muted"> Sai Tharun</h4>
            <h6 className="mt-3 text-muted">
                Web Developer 
            </h6>
          </div>
          <div className="col-6 p-5">
            <p>
              Sai Tharun Giddaluru is an ambitious Computer Science and
              Engineering student with a strong passion for software
              development. He has acquired proficiency in multiple programming
              languages, including Java, C, C++, and Python. Sai Tharun has also
              gained valuable experience in web development, where he has
              successfully built a website as part of his learning journey.
            </p>
            <p>
              {" "}
              In addition to his technical skills, Sai Tharun is currently
              developing a React application focused on trading, reflecting his
              keen interest in the field. He is also an active participant in an
              Academic Learning Program (ALP), where he is committed to
              improving his communication skills, building a global network, and
              fostering a great community.
            </p>
            <p>
              His dedication to learning is evident in his interest in books
              about trading, chart patterns, and intraday trading strategies.
              Sai Tharun's determination to excel is also reflected in his
              academic endeavors, such as applying for scholarships and
              participating in various projects. He is a self-driven individual
              who continually seeks opportunities to grow, learn new things, and
              contribute positively to his field.{" "}
            </p>
          </div>
        </div>
    </div>
    )
}

export default Teams;