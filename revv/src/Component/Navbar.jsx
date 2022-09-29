

import React from "react";
function Navbar(){
    return(
        <>
          <nav className="main-nav">
            {/* first logo div */}
            <div className="logo">
                <img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="" />
                <h4>santisied. Safe</h4>
            </div>

            <div className="nav-link">
                  <ul>
                    <li>
                      <a href="#">
                        
                          <span>Hyundai</span>Subcription
                          
                        
                      </a>
                    </li>

                    <li>
                      <a href="#">
                      <span>Mahindra</span>Subcription
                      </a>
                    </li>

                    <li>
                      <a href="#">FAQs</a>
                    </li>

                    <li>
                        <a href="#">Login or Signup</a>
                    </li>
                  </ul>
            </div>

          </nav>
        </>
    )
}
export default Navbar;