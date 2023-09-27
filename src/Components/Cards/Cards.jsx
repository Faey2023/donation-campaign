import PropTypes from "prop-types";

import Card from "./Card";

const Cards = ({cards}) => {
  // const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setCards(data));
  // }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};
Cards.propTypes = {
  cards: PropTypes.object,
};
export default Cards;
