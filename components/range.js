import React from "react"; 

function SliderComponent({value, handleChange}) {
 return(
  <div>
     <input type="range" defaultValue={value} onChange={handleChange} />
  </div>
 );
 
}
export default SliderComponent

