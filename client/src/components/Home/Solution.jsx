import React from 'react';
import websiteImg from '../../assets/furniq.JPG';
import '../../styles/solution.css';

function Solution() {


  return (
    <div className="solution-section">
      <figure className="image-container">
        <img
          src={websiteImg}
          alt="website image"
          className="solution-image"
        />
      </figure>
      <div className="solution-text">
        <h3 className="solution-title">Your Customers Are Searching Online</h3>
        <p className="solution-text"> <span className=''>Imagine this: </span><br></br>James just moved into a new apartment in 
          Westlands. His mattress is still on the floor, and he’s tired of balancing his TV on two crates. 
He pulls out his phone and searches “modern sofa set Nairobi.” 

Up pops a furniture shop with a slick website —
 high-quality photos, prices, even a “Buy Now” button. James clicks, loves what he sees, and orders. <br></br>
 <br></br> 
Meanwhile, your store (just 10 minutes away) has the exact sofa James wants… but without a website, you’re invisible. 
By the time you hear about it, James is already posting his new sofa on Instagram with #NewHomeVibes. 
<br></br><br></br>
In Kenya today, people shop with their eyes first — and those eyes are on Google. 
A modern, mobile-friendly website puts you in front of them, builds trust,
 and gets you the sale before they even step into your shop.</p>
      </div>
    </div>
  );
}

export default Solution;
