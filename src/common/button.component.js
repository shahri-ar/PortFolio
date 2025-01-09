import React from "react";

function Button({ event, className, text }) {
  return (
    <div>
      <button 
      onClick={event} 
      className={className}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
