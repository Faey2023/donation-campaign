const DetailPage = ({ card }) => {
  const { img, title, Price, btn_color, Description } = card || {};
  return (
    <div className="container mx-auto my-5">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="relative -mt-20 bg-[#0b0b0b80]">
        <button
          className="btn text-white ml-5"
          style={{ backgroundColor: btn_color, padding: "16px 26px" }}
        >
          Donate: $ {Price}
        </button>
      </div>
      <div className=" mt-10">
        <h1 className=" text-4xl font-bold mt-12 mb-6">{title}</h1>
        <p className="text-[#0b0b0bb3] text-base">{Description}</p>
      </div>
    </div>
  );
};

export default DetailPage;
