import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailPage from "./DetailPage";

const CardDetail = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  // console.log(id);
  const cards = useLoaderData();
  // console.log(cards);
  useEffect(() => {
    const findCard = cards?.find((card) => card.id === id);
    setCard(findCard);
  }, [id, cards]);
  return (
    <div>
      <DetailPage card={card}></DetailPage>
    </div>
  );
};

export default CardDetail;
