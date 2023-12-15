import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';

function AdminHomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fullscreenImage = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
  };

  return (
    <div className={styles.home}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
      <div className={styles.brand}>
          <Link to="/">BankManagementSystem</Link>
        </div>

         <ul>

         <li>

<Link to="/profile">Profile</Link>

</li> 
<li>

            <Link to="/userAccounts"> User Accounts</Link>
            
           </li> 
           <li>


             <Link to="/transactionHistory">Transaction History</Link>
 </li>


      </ul>

   </nav>
      
      <nav className={styles.navbar}>
        {/* ... */}
      </nav>
      

      {/* Slider */}
      <Slider {...settings}>
        <div>
          <img
            src={'https://cdn.pixabay.com/animation/2022/09/09/21/19/21-19-47-383_512.gif'}
            alt="Slide 1"
            style={fullscreenImage}
          />
        </div>
        <div>
          <img src={'https://miro.medium.com/v2/resize:fit:1358/1*bOC58pekKvwqUhHgRxGxfw.gif'}
               alt="Slide 2"
               style={fullscreenImage}
                />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default AdminHomePage;



