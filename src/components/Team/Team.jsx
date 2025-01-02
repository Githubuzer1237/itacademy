import React, { useState } from 'react';
import s from './Team.module.scss';

const teamMembers = [
  { name: 'РУСЛАН ГЛАВНЫЙ /', image: '/academy1.jpg' },
  { name: 'АББОС УЧИТЕЛЬ /', image: '/academy8.jpg' },
  { name: 'АЗИМ FRONTEND DEVELOPER /', image: '/academy3.jpg' },
  { name: 'ПОЛИНА КТО-ТО /', image: '/academy1.jpg' },
  { name: 'ДИЕРА АДМИН /', image: '/academy3.jpg' },
  { name: 'БОБУР УЧИТЕЛЬ /', image: '/academy2.jpg' },
  { name: 'ЭРНЕСТ КОВОРКЕР /', image: '/academy7.jpg' },
  { name: 'ЛАЗИЗ УЧИТЕЛЬ /', image: '/academy9.jpg' },
  { name: 'АДМИН /', image: '/academy13.jpg' },
  { name: 'ЮСУФ УЧИТЕЛЬ /', image: '/academy14.jpg' },
  { name: 'РУСЛАН ГЛАВНЫЙ /', image: '/academy4.jpg' },
  { name: 'АББОС УЧИТЕЛЬ /', image: '/academy8.jpg' },
  { name: 'АЗИМ FRONTEND DEVELOPER /', image: '/academy5.jpg' },
  { name: 'ПОЛИНА КТО-ТО /', image: '/academy1.jpg' },
  { name: 'ДИЕРА АДМИН /', image: '/academy11.jpg' },
  { name: 'БОБУР УЧИТЕЛЬ /', image: '/academy9.jpg' },
  { name: 'ЭРНЕСТ КОВОРКЕР /', image: '/academy5.jpg' },
  { name: 'ЛАЗИЗ УЧИТЕЛЬ /', image: '/academy14.jpg' },
  { name: 'АДМИН /', image: '/academy9.jpg' },
  { name: 'ЮСУФ УЧИТЕЛЬ /', image: '/academy4.jpg' },
  { name: 'РУСЛАН ГЛАВНЫЙ /', image: '/academy11.jpg' },
  { name: 'АББОС УЧИТЕЛЬ /', image: '/academy8.jpg' },
  { name: 'АЗИМ FRONTEND DEVELOPER /', image: '/academy12.jpg' },
  { name: 'ПОЛИНА КТО-ТО /', image: '/academy1.jpg' },
  { name: 'ДИЕРА АДМИН /', image: '/academy3.jpg' },
  { name: 'БОБУР УЧИТЕЛЬ /', image: '/academy7.jpg' },
  { name: 'ЭРНЕСТ КОВОРКЕР /', image: '/academy8.jpg' },
  { name: 'ЛАЗИЗ УЧИТЕЛЬ /', image: '/academy10.jpg' },
  { name: 'АДМИН /', image: '/academy3.jpg' },
  { name: 'ЮСУФ УЧИТЕЛЬ /', image: '/academy1.jpg' },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={s.teamContainer}>
      <div className={s.members}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={s.member}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
               color: hoveredIndex === null || hoveredIndex === index ? 'black' : 'gray',
             }}
          >
            {member.name}
            {hoveredIndex === index && (
              <div className={s.imageContainer}>
                <img src={member.image} alt={member.name} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;