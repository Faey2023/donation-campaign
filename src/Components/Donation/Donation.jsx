import { useEffect, useState } from "react";
import DonationDetail from "./DonationDetail";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noMoney, setNoMoney] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const donateMoney = JSON.parse(localStorage.getItem("donation"));
    if (donateMoney) {
      setDonate(donateMoney);
    } else {
      setNoMoney("");
    }
  }, []);

  return (
    <div>
      {noMoney ? (
        <p>{noMoney}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {show
            ? donate.map((card) => (
                <DonationDetail card={card}></DonationDetail>
              ))
            : donate
                .slice(0, 4)
                .map((card) => <DonationDetail card={card}></DonationDetail>)}
        </div>
      )}
      <div className="text-center items-center my-5">
        {donate.length > 4 && (
          <button
            onClick={() => setShow(!show)}
            className="btn bg-green-700 text-white "
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
