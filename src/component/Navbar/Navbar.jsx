import React from 'react'
import { FaFacebook , FaInstagram , FaYoutube} from 'react-icons/fa';



export const Navbar = () => {
  return (
    <><nav className='main-nav'>
          <div className='logo'>
              <h2>
                  <span>R</span>oman
              </h2>
          </div>
          <div className='menu'>
              <ul>
                  <li>
                      <a href="#">Home</a>
                  </li>
                  <li>
                      <a href="#">Portfolio</a>
                  </li>
                  <li>
                      <a href="#">Services</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>
          </div>
          <div className='social-media'>
              <ul>
                  <li>
                      <a href="https://www.facebook.com/roman.pudasaini.9/"> <FaFacebook /></a>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/roman.pudasaini.9/"><FaInstagram /></a>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/roman.pudasaini.9/"><FaYoutube /></a>
                  </li>
              </ul>
          </div>
      </nav>
      <div className='caro'>
        
      <div className='hero-section'>
              <p>Hello I am</p>
              <h1>Roman Pudasaini</h1>
              <h2>Frontend Web Devloper</h2>
          </div>
          <div className='image-section'>
           
          <img src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t1.6435-9/73404057_2330129517114656_6887418686966071296_n.jpg?stp=c0.33.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=hm7J7Zjf-AMAX9275Xs&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfAgmr6WUTw4NdTkWOTbrv5K2zYOQyZSG5vGS6dg_-1gKQ&oe=64FA6942" alt="." />
          </div>
          </div>
          
          </>
    );
};
export default Navbar;