import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Home1 from '@/public/assets/home1.jpg';
import DBD from '@/public/assets/DBD.png';
import TTT from '@/public/assets/ttt.png';
import styles from '@/src/styles/footerStyles.module.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4">Tours from Phuket</h4>
            <ul className="space-y-2">
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
              {/* ... other items */}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4">Tours from other areas</h4>
            <ul className="space-y-2">
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
              {/* ... other items */}
            </ul>
            <h4 className="text-xl font-semibold mt-4 mb-2">See more</h4>
            <ul className="space-y-2">
              {/* Add list items here */}
                        <li><a href="#">Things to do in Phuket</a></li>
                        <li><a href="#">Travel Guides</a></li>
                        <li><a href="#">Recommended</a></li>
                        <li><a href="#">Attractions</a></li>
                        <li><a href="#">Craft YOur Tailor-Made Journey</a></li>
                        <li><a href="#">Phuket Real Estate and Property</a></li>
                        <li><a href="#">Hotels in Phuket</a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
              {/* ... other items */}
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4">Phuket TourZ</h4>
            <ul className="space-y-2">
              {/* Add list items here */}
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">How to Book</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">General Terms and Conditions</a></li>
                        <li><a href="#">Sitemap</a></li>
              {/* ... other items */}
            </ul>
            <ul className={`space-y-2 ${styles.seeNew}`}>
              <Link href="#">
                <li className={`flex items-center space-x-2 ${styles.linkItemCard}`}>
                  <Image src={Home1} width={50} height={60} alt="" className={styles.linkImg} />
                  <div className="link-container">
                    <p className={styles.linkName}>Latest news</p>
                    <p className={styles.linkDes}>
                      Lorem ipsum dollar sit amet
                    </p>
                  </div>
                </li>
              </Link>
              <Link href="#">
                <li className={`flex items-center space-x-2 ${styles.linkItemCard}`}>
                  <Image src={Home1} width={50} height={60} alt="" className={styles.linkImg} />
                  <div className="link-container">
                    <p className={styles.linkName}>Latest news</p>
                    <p className={styles.linkDes}>
                      Lorem ipsum dollar sit amet
                    </p>
                  </div>
                </li>
              </Link>
              <Link href="#">
                <li className={`flex items-center space-x-2 ${styles.linkItemCard}`}>
                  <Image src={Home1} width={50} height={60} alt="" className={styles.linkImg} />
                  <div className="link-container">
                    <p className={styles.linkName}>Latest news</p>
                    <p className={styles.linkDes}>
                      Lorem ipsum dollar sit amet
                    </p>
                  </div>
                </li>
              </Link>
              <Link href="#">
                <li className={`flex items-center space-x-2 ${styles.linkItemCard}`}>
                  <Image src={Home1} width={50} height={60} alt="" className={styles.linkImg} />
                  <div className="link-container">
                    <p className={styles.linkName}>Latest news</p>
                    <p className={styles.linkDes}>
                      Lorem ipsum dollar sit amet
                    </p>
                  </div>
                </li>
              </Link>
              {/* ... other items */}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <Image src={DBD} alt="" />
          <Image src={TTT} width={200} alt="" />
          <span>TAT (Tourism Authority of Thailand) license 34/02819</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
