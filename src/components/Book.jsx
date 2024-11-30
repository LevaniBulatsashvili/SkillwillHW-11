import React from "react";

export const Book = ({ image, title, description, characters, logFn }) => {
  return (
    <div className="book">
      <div className="cover">
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Starring</h2>
      <div className="chars">
        {characters.map((char) => (
          <h3 key={title + char}>{char}</h3>
        ))}
      </div>
      <button onClick={() => logFn(title, characters)}>Log Book</button>
    </div>
  );
};
