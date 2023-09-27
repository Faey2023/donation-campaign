import { useEffect, useState } from "react";

const Banner = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  // console.log(datas);
  const [searchCategories, setSearchCategories] = useState(datas);
  //button handle below
  const handleSearch = (e) => {
    const searchField = document.getElementById("search-input");
    const search = searchField.value;
    //console.log(search);
    e.preventDefault();
    if (search.length) {
      const campaignFilter = datas?.filter(
        (campaign) => campaign?.category.toLowerCase() === search.toLowerCase()
      );
      if (campaignFilter) {
        setSearchCategories(campaignFilter);
      } else {
        setSearchCategories(datas);
      }
    }
  };
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-300px)] "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3bA-oDhMg4QMDSx6oLs-QoBzb58VsLWegge3Vd2Xok9faLGFVnFpWKxE8)",
        }}
      >
        <div className="hero-overlay bg-opacity-75 bg-[#fffffff2]"></div>
        <div className="text-center text-neutral-content">
          <h1 className="mb-5 text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          <div className="join">
            <input
              id="search-input"
              className="input input-bordered join-item"
              placeholder="Search here..."
            />
            <button
              onClick={() => handleSearch}
              className="btn btn-error join-item rounded bg-red-500 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
