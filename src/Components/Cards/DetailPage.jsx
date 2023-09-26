import PropTypes from "prop-types";
const DetailPage = ({ card }) => {
  const { id, img, title, Price, btn_color, Description } = card || {};
  // button
  const handleDonate = () => {
    // alert("okkk kaj kore");
    const donateArray = [];
    const donateMoney = JSON.parse(localStorage.getItem("donation"));
    if (!donateMoney) {
      donateArray.push(donateMoney);
      localStorage.setItem("donation", JSON.stringify(donateArray));
    } else {
      const isExist = donateMoney.find((card) => card.id == id);
      if (!isExist) {
        donateArray.push(...donateMoney, card);
        localStorage.setItem("donation", JSON.stringify(donateArray));
      } else {
        alert("Already Exist");
      }
    }
  };
  return (
    <div className="container mx-auto my-5">
      <div>
        <img className="w-screen h-[70vh]" src={img} alt={title} />
      </div>
      <div className="relative -mt-20 bg-[#0b0b0b80]">
        <button
          className="btn text-white ml-5"
          style={{ backgroundColor: btn_color, padding: "16px 26px" }}
          onClick={handleDonate}
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
DetailPage.propTypes = {
  card: PropTypes.array,
};
export default DetailPage;
