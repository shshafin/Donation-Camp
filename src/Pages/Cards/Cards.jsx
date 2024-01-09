import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const { id } = useParams();
  const idInt = parseInt(id);

  const cardData = useLoaderData();

  useEffect(() => {
    const cardDetailsData = cardData.find((card) => card.id === idInt);
    setCards(cardDetailsData);
  }, [idInt, cardData]);

  return (
    <div>
      <Card card={cards}></Card>
    </div>
  );
};

export default Cards;
