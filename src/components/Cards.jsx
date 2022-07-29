import { useState, useEffect } from "react";
import cardData from "../api/cards.json";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardData);
  });
  return (
    <div className="grid grid-cols-3 gap-x-4 rounded-lg w-9/12 container mx-auto mt-8 text-center">
      {cards.map((card, index) => (
        <div className="bg-white p-10 flex-col flex items-center gap-y-4 shadow-xl">
          <img src={card.image} alt="getir" />
          <h6 className="text-primary-color font-semibold text-lg">
            {card.title}
          </h6>
          <p className="text-sm text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
