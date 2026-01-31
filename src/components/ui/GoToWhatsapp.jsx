import React from "react";

const GoToWhatsapp = ({ message, children }) => {
 const number  = "+918948865331" // Replace with the desired phone number
  return (
    <div>
      <a
        href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default GoToWhatsapp;
