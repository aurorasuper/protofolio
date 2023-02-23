import React from "react";

function Paragraph({ title, children }) {
  return (
    <div className=' p-01'>
      <h3 className='h4 font-pd py-02 uppercase'>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default Paragraph;
