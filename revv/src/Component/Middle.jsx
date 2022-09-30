import React from "react";
function Middle(){
    return(
      <>
      <div className="top-section">
         <div className="left-image">

          <form className="fill-up">
          <img src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="" />
          <h3>self drive car rental in india</h3>
          <input className="inp" type="text" placeholder="Search City" />
          <label>
          <input className="inp" type="text" placeholder="Start Time" />
          <input className="inp" type="text" placeholder="End Time" />
          </label>
          <button id="sub">Search</button>
        

          </form>
          

         </div>
         <div className="right-image">
           <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp" alt="" />
         </div>
      </div>

      {/* featured section */}

      <div className="featured-section">
        <h1>Featured</h1>
        <div className="featured-pic">
          <img src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/flat_10_off_1.png" alt="" />
          <img src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png" alt="" />
          <img src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png" alt="" />

        </div>
      </div>

      {/* sanitised and safe car */}

      <div className="safe-car">
        <h1>Sanitized and safe cars</h1>
        <div className="car-box">
          <img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png" alt="" />
        </div>
        <div className="car-box">
          <img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg" alt="" />
        </div>
        <div className="car-box">
          <img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg" alt="" />
        </div>
        <div className="car-box">
          <img src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg" alt="" />
        </div>

      </div>

      {/* offers */}
      <div className="offers">
        <h1>offers</h1>
        <img src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/flat_10_off_2.png" alt="" />
      </div>
      
      </>
    )
};
export default Middle;