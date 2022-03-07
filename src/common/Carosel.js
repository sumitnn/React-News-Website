import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function Carosel({data}) {
   console.log("carosel");
    console.log(data);

  return (
      <Carousel>
          {
             data.map((cur,i) => {
                  return (
                      <div key={i}>

                          <img src={cur.image} alt={cur.title} />
                          <p className="legend">{cur.title}</p>
                      </div>
                  )
              })
          }
          
          
      </Carousel>
  )
}

export default Carosel