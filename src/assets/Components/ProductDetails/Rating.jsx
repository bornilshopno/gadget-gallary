import React from 'react';

const Rating = ({rate}) => {
  let intRate=(Math.round(rate))
  console.log(intRate)
  return (
    <div>
      <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked={intRate===1} />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked={intRate===2} />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked={intRate===3}/>
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked={intRate===4}/>
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked={intRate===5}/>
</div>
    </div>
  );
};

export default Rating;