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

      {/* our journey so far */}
      <div className="journey">
        <h1>Our journey so far</h1>

            <div className="so-far">

             <div className="far">
               <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/revvers.png" alt="" />
               <h1>1Mns+</h1>
               <h2>Happy revvers</h2>
             </div>

             <div className="far">
               <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/cities.png" alt="" />
               <h1>22+ Cities</h1>
               <h2>Across India</h2>
             </div>

             <div className="far">
               <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/travel.png" alt="" />
               <h1>50Mns+</h1>
               <h2>Kms travelled</h2>
             </div>

             <div className="far">
               <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/review.png" alt="" />
               <h1>4.8/5</h1>
               <h2>22+ reviewers</h2>
             </div>

            </div>
      </div>

      {/* ours inventor */}
      <div className="investor">
            <h1>Our investoes</h1>
      </div>
      <div className="investor-page">

        <div className="money">
           <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/hyundai.webp" alt="" />
           <h2>Hyundai Motor Company</h2>
        </div>

        <div className="money">
           <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/edelweissFinancialServices.webp" alt="" />
           <h2>Edelweiss Financial Services</h2>
        </div>

        <div className="money">
           <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/dreamIncubator.webp" alt="" />
           <h2>Dream Incubator</h2>
        </div>

        <div className="money">
           <img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/beenext.webp" alt="" />
           <h2>Beenext</h2>
        </div>

      </div>

      {/* Serviceable cities */}
      <div className="cities">
        <h1>Serviceable cities </h1>

        <div className="state">
          <div className="cities-box1">
            <h2>Self Drive Car Rental in Bangalore</h2>
            <h2>Self Drive Car Rental in Hyderabad</h2>
            <h2>Self Drive Car Rental in Mumbai</h2>
            <h2>Self Drive Car Rental in Delhi-NCR</h2>
            <h2>Self Drive Car Rental in Chennai</h2>
            <h2>Self Drive Car Rental in Pune</h2>
            <h2>Self Drive Car Rental in Kolkata</h2>
            <h2>Self Drive Car Rental in Ahmedabad</h2>
          </div>

         
          <div className="cities-box1">
            <h2>Self Drive Car Rental in Bhubaneswar</h2>
            <h2>Self Drive Car Rental in Chandigarh</h2>
            <h2>Self Drive Car Rental in Coimbatore</h2>
            <h2>Self Drive Car Rental in Jaipur</h2>
            <h2>Self Drive Car Rental in Kochi</h2>
            <h2>Self Drive Car Rental in Mangalore</h2>
            <h2>Self Drive Car Rental in Mysore</h2>
            <h2>Self Drive Car Rental in Nagpur</h2>
          </div>

         
          <div className="cities-box1">
            <h2>Self Drive Car Rental in Surat</h2>
            <h2>Self Drive Car Rental in Tirupati</h2>
            <h2>Self Drive Car Rental in Trivandrum</h2>
            <h2>Self Drive Car Rental in Vadodara</h2>
            <h2>Self Drive Car Rental in Vijayawada</h2>
            <h2>Self Drive Car Rental in Vizag</h2>
           
          </div>

        </div>
      </div>
      
      </>
    )
};
export default Middle;