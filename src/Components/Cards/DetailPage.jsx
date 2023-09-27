import PropTypes from "prop-types";
import swal from "sweetalert";
const DetailPage = ({ card }) => {
  const { img, title, Price, btn_color, Description } = card || {};
  // button
  const handleDonate = () => {
    const donateMoney = JSON.parse(localStorage.getItem("donation"));
    const donateArray = [];
    if (!donateMoney) {
      donateArray.push(card);
      localStorage.setItem("donation", JSON.stringify(donateArray));
      swal("Good job!", "Thank you for the Donation", "success");
    } else {
      donateArray.push(...donateMoney, card);
      localStorage.setItem("donation", JSON.stringify(donateArray));
      swal("Good job!", "Thank you for the Donation", "success");
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
  card: PropTypes.object,
};
export default DetailPage;
