import { useParams } from 'react-router-dom'
import React from 'react';
import { useGlobalContext } from './Context';
import { NavLink } from 'react-router-dom';

const SingleUser = () => {
  const { user } = useGlobalContext();
  const {id}=useParams();
  const a=id;
  return (
    <section className='user-section'>
      <div className='user-card'>
        <figure>
          <img src={user[a].picture.large} alt="" />
        </figure>
        <div className='card-content'>
          <p className='title'>Full Name: {user[a].name.title} {user[a].name.first} {user[a].name.last}</p>
          <p className='sex'>Gender: {user[a].gender}</p>
          <p className='phone'>Phone No: {user[a].phone}</p>
          <p className='email'>Email Id: {user[a].email}</p>
          <p className='age'>Age: {user[a].dob.age}</p>
          <p className='address'>City: {user[a].location.city}</p>
          <p>State: {user[a].location.state}</p>
          <p>Country: {user[a].location.country}</p>
          <NavLink to='/' className='back-btn'>Go Back</NavLink>

        </div>
      </div>
    </section>
  );
};

export default SingleUser;
