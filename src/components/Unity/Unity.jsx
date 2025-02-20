// import React from 'react'
// import GlitchText from '../GlitchText/GlitchText'
// import s from './Unity.module.scss'
// import { Link } from 'react-router-dom';
// import AboutCurses from '../AboutCurses/AboutCurses';
// const Unity = ({price}) => {

//    const scrollToConnectSection = () => {
//       const section = document.getElementById("zapis");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//   return (
//    <>
//   <div className={s.unity}>
//   <GlitchText
//   speed={1}
//   enableShadows={true}
//   enableOnHover={false}
//   className='custom-class'
// >
//   Unity
// </GlitchText>

// <div className={s.inner}>
//               <b>{price} </b>
//               <Link onClick={scrollToConnectSection}> → Курс мечты</Link>
//             </div>

//             <AboutCurses duration="6 месяцев" lessons="64" education="Офлайн" length="1.5/3 часа" />
//   </div>

//    </>
//   )
// }

// export default Unity

import React, { useEffect, useRef } from "react";
import GlitchText from "../GlitchText/GlitchText";
import AboutCurses from "../AboutCurses/AboutCurses";
import s from "./Unity.module.scss";
import { Link } from "react-router-dom";

const Unity = ({ price }) => {
  const noiseRef = useRef(null);

  useEffect(() => {
    const canvas = noiseRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const generateNoise = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas.parentElement;
      canvas.width = w;
      canvas.height = h;
      const imageData = ctx.createImageData(w, h);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const value = Math.random() * 255;
        pixels[i] = pixels[i + 1] = pixels[i + 2] = value;
        pixels[i + 3] = 25; 
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const updateNoise = () => {
      generateNoise();
      animationFrameId = setTimeout(updateNoise, 100); 
    };

    updateNoise();

    return () => clearTimeout(animationFrameId);
  }, []);

  const scrollToConnectSection = () => {
    const section = document.getElementById("zapis");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={s.unity}>
      <canvas ref={noiseRef} className={s.noiseCanvas} />
      <GlitchText speed={1} enableShadows={true} enableOnHover={false} className="custom-class">
        Unity
      </GlitchText>

      <div className={s.inner}>
      <p>Освойте один из лучших игровых движков, изучите C# и создайте свою первую игру – от идеи до релиза!</p>
        <b>{price}</b>
        <Link onClick={scrollToConnectSection}> → Курс мечты</Link>
      </div>

      <AboutCurses duration="6 месяцев" lessons="64" education="Офлайн" length="1.5/3 часа" />
    </div>
  );
};

export default Unity;
