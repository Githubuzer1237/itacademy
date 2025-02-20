import React from 'react';
import s from './Map.module.scss';

const Map = () => {
  return (
   <>
    <h1 style={{textAlign: 'center', marginTop: "200px", fontFamily: "Soyuz Grotesk", fontSize: "45px"}}>Мы здесь!</h1>
   <div className={s.maps}>
      <div className={s.first}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.647792864686!2d69.28139607520163!3d41.316525100388915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5200a480655%3A0xeabc5e2bd1cdaae9!2sIT-Academy!5e0!3m2!1sru!2s!4v1739549528170!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={s.second}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.7205141795835!2d69.20852617519655!3d41.22786070587649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae615333dff2bf%3A0x3e5a47735bd82fd8!2sIT-Academy%20Sergeli!5e0!3m2!1sru!2s!4v1739550010307!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
   </>
  );
};

export default Map;
