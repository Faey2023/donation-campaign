const Card = ({ card }) => {
  const { img, title, category, category_BG_color, text_color, card_BG_color } =
    card;
  return (
    <>
      <div
        className="w-[312px] h-[283px] shadow-xl rounded-lg"
        style={{
          backgroundColor: card_BG_color,
        }}
      >
        <img className="w-[312px] h-[194px]" src={img} alt={title} />
        <div
          style={{
            backgroundColor: category_BG_color,
            color: text_color,
            padding: "4px 10px",
            width: "85px",
          }}
          className="ml-4 rounded-lg mt-2 text-center"
        >
          <h3 className=" font-medium  text-sm">{category}</h3>
        </div>
        <div className="container mx-auto">
          <h2
            style={{
              color: text_color,
            }}
            className="text-lg font-semibold ml-4"
          >
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card;
