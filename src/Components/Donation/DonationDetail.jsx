const DonationDetail = ({ card }) => {
  const {
    img,
    title,
    Price,
    btn_color,
    category_BG_color,
    text_color,
    category,
    card_BG_color,
  } = card || {};
  return (
    <div>
      <div className="flex w-full flex-row rounded-xl max-w-xl"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none 
        " style={{
            backgroundColor: card_BG_color,
          }}>
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </div>
        <div
          className="p-6"
          style={{
            backgroundColor: card_BG_color,
          }}
        >
          <div
            style={{
              backgroundColor: category_BG_color,
              color: text_color,
              padding: "4px 10px",
              width: "85px",
            }}
            className="rounded-lg my-2 text-center"
          >
            <h3 className=" font-medium text-sm">{category}</h3>
          </div>
          <h4 className="mb-2 block   text-2xl font-semibold text-black">
            {title}
          </h4>
          <p className="mb-8 block   text-base font-semibold" style={{
            color: text_color
          }}>
            {Price}
          </p>
          <a className="inline-block" href="#">
            <button
              className="btn text-white"
              style={{
                backgroundColor: btn_color,
              }}
            >
             View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
