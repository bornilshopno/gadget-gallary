import React, { useState } from 'react';

const Rating = ({rating}) => {
console.log(rating)
    const [rate, setRate] =useState(rating);
    const handleRating = (rater: number) => {
        setRate(rater)}
    return (
        <div className='App'>
      <Rating
        onClick={handleRating}
       
    
      />
    </div>
    );
};

export default Rating;