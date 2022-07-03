import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';
const User = () => {
  const { user } = useGlobalContext();
  return (
    <section className='user-page'>
      <div className='grid grid-2-col'>
        <h1 className='text-center'>InfoBook</h1>
        {user.map((curUser, index) => {
          return (
            <NavLink key={index} to={`user/${index}`}>
              <div className='card'>
              <div className='card__image'> <img key={index} src={curUser.picture.thumbnail} /></div>
                
                <h2 key={index} >{curUser.name.first} </h2>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section >
  );
};

export default User