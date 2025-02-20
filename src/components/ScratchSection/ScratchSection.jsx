
// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import styles from './ScratchSection.module.scss';
// import AboutCurses from '../AboutCurses/AboutCurses';

// const ScratchSection = ({price} ) => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true });





//   const scrollToConnectSection = () => {
//     const section = document.getElementById("zapis");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };




//   return (
//     <div className={styles.scratchSection} ref={sectionRef}>
//       <motion.div
//         className={styles.planeContainer}
//         initial={{ x: '-100vw', opacity: 0 }}
//         animate={isInView ? { x: '-50%', y: '-50%', opacity: 1 } : {}}
//         transition={{ duration: 2 }}
//       >
//         <img src="/plane.png" alt="Самолет" className={styles.plane} />
//         <div className={styles.catInsidePlane}>
//           <img src="/cat.svg" alt="Кот" />
//         </div>
//       </motion.div>
//       <motion.div
//         className={styles.textContainer}
//         initial={{ opacity: 0, y: -50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 2, duration: 0.5 }}
//       >
//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : {}}
//           transition={{ delay: 2.6, duration: 0.5 }}
//         >
//           Курс Scratch: Твое путешествие в программирование!
//         </motion.h1>
//         <motion.p
//           initial={{ y: -50, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : {}}
//           transition={{ delay: 2.6, duration: 0.5 }}
//         >
// Легкий вход в программирование: учитесь кодить, создавая увлекательные проекты без сложного кода!
//         </motion.p>
//         <motion.b className={styles.price}
//         initial={{ opacity: 0, y: -50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 3.3, duration: 0.5 }}
//         >
//           {price} 
//           </motion.b>
//         <br />
//         <motion.a
//           initial={{ opacity: 0, y: -50 }}
//           animate={isInView ? { opacity: 1, y: 30 } : {} }
//           transition={{ delay: 3.3, duration: 0.5 }}
//           className={styles.courseLink}
//           onClick={scrollToConnectSection}
//         >
//           Курс мечты
//         </motion.a>
  
//       </motion.div>
        
//         <div   >
// <AboutCurses duration="3 месяца" lessons="24"  length="1.5/3 часа" />
// </div>      
//     </div>
//   );
// };

// export default ScratchSection;
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ScratchSection.module.scss';
import AboutCurses from '../AboutCurses/AboutCurses';

const ScratchSection = ({ price }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const [animationSpeed, setAnimationSpeed] = useState(2);

  useEffect(() => {
    const updateSpeed = () => {
      setAnimationSpeed(window.innerWidth < 860 ? 0.4 : 2);
    };

    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    return () => window.removeEventListener('resize', updateSpeed);
  }, []);

  const scrollToConnectSection = () => {
    const section = document.getElementById("zapis");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.scratchSection} ref={sectionRef}>
      <motion.div
        className={styles.planeContainer}
        initial={{ x: '-100vw', opacity: 0 }}
        animate={isInView ? { x: '-50%', y: '-50%', opacity: 1 } : {}}
        transition={{ duration: 2 }}
      >
        <img src="/plane.png" alt="Самолет" className={styles.plane} />
        <div className={styles.catInsidePlane}>
          <img src="/cat.svg" alt="Кот" />
        </div>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: animationSpeed }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: animationSpeed }}
        >
          Курс Scratch: Твое путешествие в программирование!
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: animationSpeed }}
        >
          Легкий вход в программирование: учитесь кодить, создавая увлекательные проекты без сложного кода!
        </motion.p>
        <motion.b
          className={styles.price}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: animationSpeed }}
        >
          {price}
        </motion.b>
        <br />
        <motion.a
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 30 } : {}}
          transition={{ delay: 1.6, duration: animationSpeed }}
          className={styles.courseLink}
          onClick={scrollToConnectSection}
        >
          Курс мечты
        </motion.a>
      </motion.div>

      <div>
        <AboutCurses duration="3 месяца" lessons="24" length="1.5/3 часа" />
      </div>
    </div>
  );
};

export default ScratchSection;
