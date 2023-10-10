import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Home1 from '@/public/assets/home1.jpg';
import DBD from '@/public/assets/DBD.png';
import TTT from '@/public/assets/ttt.png';
import styles from '@/src/styles/footerStyles.module.css';
const Footer = () => {
    return (
        <footer className="footer flex items-center  ">
        <div className="container   ">
        <div className="row">
            <div className="footer-col">
              <h4>Tours from Phuket</h4>
              <ul className='ul'>
                {/* Add list items here */}
                <li><a href="#">Phi Phi Island Tours</a></li>
                        <li><a href="#">James Bond Island Tours</a></li>
                        <li><a href="#">Phang Nga Bay Tours</a></li>
                        <li><a href="#">Similan Islands</a></li>
                        <li><a href="#">Racha & Coral Island Tours</a></li>
                        <li><a href="#">Khai Islands Tours</a></li>
                        <li><a href="#">Half Day Tour</a></li>
                        <li><a href="#">Full Day TOurs</a></li>
                        <li><a href="#">Sunset Cruise</a></li>
                        <li><a href="#">Premium Tours</a></li>
                        <li><a href="#">White Water Rafting</a></li>
                        <li><a href="#">Water Park</a></li>
                        <li><a href="#">Shows</a></li>
                        <li><a href="#">Thai Boxing</a></li>
                        <li><a href="#">Snorketing</a></li>
                        <li><a href="#">Canoeing</a></li>
                        <li><a href="#">Zipline</a></li>
                        <li><a href="#">ATV</a></li>
                        <li><a href="#">Elephant Sanctuary</a></li>
                        <li><a href="#">Transfer</a></li>
                        <li><a href="#">Private Charter Boat</a></li>
                        <li><a href="#">Recommended</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Tours from other area</h4>
              <ul className='ul'>
                {/* Add list items here */}
                <li><a href="#">Tours from Krabi</a></li>
                        <li><a href="#">Tours from Phi Phi Islands</a></li>
                        <li><a href="#">Tours from Samui</a></li>
                        <li><a href="#">Tours from Bangkok</a></li>
                        <li><a href="#">Tour form Phang Nga</a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
              </ul>
              <h4>See more</h4>
              <ul className='ul'>
                {/* Add list items here */}
                <li><a href="#">Things to do in Phuket</a></li>
                        <li><a href="#">Travel Guildes</a></li>
                        <li><a href="#">Recommended</a></li>
                        <li><a href="#">Attractions</a></li>
                        <li><a href="#">Craft YOur Tailor-Made Journey</a></li>
                        <li><a href="#">Phuket Real Estate and Property</a></li>
                        <li><a href="#">Hotels in Phuket</a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Phuket TourZ</h4>
              <ul className='ul'>
                {/* Add list items here */}
                <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">How to Book</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">General Terms and Conditions</a></li>
                        <li><a href="#">Sitemap</a></li>
              </ul>
              <ul className={styles['see-new']}>
        <Link href="#">
        <li className={styles['link-item-card']}>
          
            <Image src={Home1} width={50} height={60} alt="" className={styles['link-img']} />
            <div className="link-container">
              <p className={styles['link-name']}>Latest news</p>
              <p className={styles['link-des']}>
                Lorem ipsum dollar sit amet
               {/* <span className={styles['link-span']}>
                  <Link href="#">more</Link>
                </span> */} 
       
              </p>
            </div>
          
        </li>
       </Link>
       <Link href="#">
        <li className={styles['link-item-card']}>
          
            <Image src={Home1} width={50} height={60} alt="" className={styles['link-img']} />
            <div className="link-container">
              <p className={styles['link-name']}>Latest news</p>
              <p className={styles['link-des']}>
                Lorem ipsum dollar sit amet
               {/* <span className={styles['link-span']}>
                  <Link href="#">more</Link>
                </span> */} 
       
              </p>
            </div>
          
        </li>
       </Link>
       <Link href="#">
        <li className={styles['link-item-card']}>
          
            <Image src={Home1} width={50} height={60} alt="" className={styles['link-img']} />
            <div className="link-container">
              <p className={styles['link-name']}>Latest news</p>
              <p className={styles['link-des']}>
                Lorem ipsum dollar sit amet
               {/* <span className={styles['link-span']}>
                  <Link href="#">more</Link>
                </span> */} 
       
              </p>
            </div>
          
        </li>
       </Link>
       <Link href="#">
        <li className={styles['link-item-card']}>
          
            <Image src={Home1} width={50} height={60} alt="" className={styles['link-img']} />
            <div className="link-container">
              <p className={styles['link-name']}>Latest news</p>
              <p className={styles['link-des']}>
                Lorem ipsum dollar sit amet
               {/* <span className={styles['link-span']}>
                  <Link href="#">more</Link>
                </span> */} 
       
              </p>
            </div>
          
        </li>
       </Link>
        {/* Add other list items here */}
      </ul>
            </div>
          </div>
          <div className="row copy-right">
            <Image src={DBD} alt="" />
            <Image src={TTT} width={200} alt="" />
            <span>TAT (Tourism Authority of Thailand) license 34/02819</span>
          </div>
        </div>
      </footer>
  
  
    );
  };
  
  export default Footer;