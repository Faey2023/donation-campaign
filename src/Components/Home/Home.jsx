// import Banner from "../Banner/Banner";
import { useState } from "react";
import Cards from "../Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const cards = useLoaderData();
  //button handle below
  const [allDatas, setAlldatas] = useState(cards);
  const [searchDatas, setSearchDatas] = useState(cards);
  const handleSearch = (e) => {
    const search = document.getElementById("search-input").value;
    if (search.length) {
      const finalData = allDatas?.filter((item) => item.category.toLowerCase() == search.toLowerCase());
      if (finalData) {
        setSearchDatas(finalData);
      }
    } else {
      setSearchDatas(allDatas);
    }
    console.log(search);
    e.preventDefault();
  };
  return (
    <div className="space-y-12">
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
              onClick={handleSearch}
              className="btn btn-error join-item rounded bg-red-500 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Cards cards={searchDatas}></Cards>
    </div>
  );
};

export default Home;

