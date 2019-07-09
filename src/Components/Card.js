import React from 'react';
import './Card.css';

const Card = (props) => {
  const {id, name, email} = props;
  return (
    <div className='tc bg-light-gray dib br3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?500/500`}/>
      <div>
        <h3>{name}</h3>
        <h5>{email}</h5>
      </div>
    </div>
  );
}

export default Card;
