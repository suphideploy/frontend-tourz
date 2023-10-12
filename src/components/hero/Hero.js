import React,{useEffect,useState} from "react";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

function Hero() {
    const [active, setActive] = useState(false);

    const controls = useAnimation();

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 1) {
          setActive(true);
          controls.start({ opacity: 1, y: 0 });
        } else {
          setActive(false);
          controls.start({ opacity: 0, y: 100 });
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [controls]);
  
    return (
      <div>
        <section id="roto" className={`relative ${active ? 'active' : ''}`}>
        <motion.div
          id="rotoTransition"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="false"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          <motion.div
            className="carousel-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="carousel-item active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div className="slide">
                {/* Your slide content here */}
               
       
      
            <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" className="mainImage" />
            <div className="roundOuter">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
            <div className="roundInner">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
          <div className="slideText">
            <h1 className="animate__animated animate__fadeInUp">Highlands</h1>
            <p className="animate__animated animate__fadeInUp ">Scotland</p>
            <div className="buttonNav animate__animated animate__fadeInDown">
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev"><i className="fa-solid fa-arrow-left-long"></i></button>
              <span></span>
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next"><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
      
    
      <div className="carousel-item">
        <div className="slide">
        <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" className="mainImage" />
            <div className="roundOuter">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
            <div className="roundInner">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
          <div className="slideText">
            <h1 className="animate__animated animate__fadeInUp">Sahara</h1>
            <p className="animate__animated animate__fadeInUp">Marrakech</p>
            <div className="buttonNav animate__animated animate__fadeInDown">
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev"><i className="fa-solid fa-arrow-left-long"></i></button>
              <span></span>
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next"><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="slide">
        <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" className="mainImage" />
            <div className="roundOuter">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
            <div className="roundInner">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
          <div className="slideText">
            <h1 className="animate__animated animate__fadeInUp">Dolomites</h1>
            <p className="animate__animated animate__fadeInUp">Italy</p>
            <div className="buttonNav animate__animated animate__fadeInDown">
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev"><i className="fa-solid fa-arrow-left-long"></i></button>
              <span></span>
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next"><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="slide">
        <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" className="mainImage" />
            <div className="roundOuter">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
            <div className="roundInner">
              <img src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="slide-1" />
            </div>
          <div className="slideText">
            <h1 className="animate__animated animate__fadeInUp">Maldives</h1>
            <p className="animate__animated animate__fadeInUp">Indian Ocean</p>
            <div className="buttonNav animate__animated animate__fadeInDown">
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev"><i className="fa-solid fa-arrow-left-long"></i></button>
              <span></span>
              <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next"><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
          </div>
        </div>
        </div>
      
         </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
       
      </div>
  );
}

export default Hero
