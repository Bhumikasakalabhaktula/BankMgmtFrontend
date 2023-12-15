import React from 'react';
import { Link,  } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';


function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fullscreenImage = {
    width: '100vw',
    height: '130vh',
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

             <Link to="/">Logout</Link> 
            
           </li>

          <li>

            <Link to="/profile">Profile</Link>
            
           </li> 

           <li>


             <Link to="/transaction">Transaction</Link>
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
            src={'https://media.licdn.com/dms/image/D4E12AQEIsuHm2EWJuA/article-cover_image-shrink_720_1280/0/1681389923030?e=2147483647&v=beta&t=qwk9LFgKUkEHZAZbUEsc4as7C-CIQtNlj4h_WRlDT5k'}
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

export default HomePage;



























