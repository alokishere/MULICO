import React from "react";

const GoToWhatsapp = ({ message, children }) => {
  return (
    <div>
      <a
        href={`https://wa.me/+919580908191?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default GoToWhatsapp;
