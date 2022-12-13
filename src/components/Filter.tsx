import "../index.css";
import { FilterTypes } from "./types";
import { useEffect } from "react";

const Filter = ({
  filterArray,
  setFilterArray,
  fullData,
  setData,
}: FilterTypes) => {
  const noFilter = () => {
    setFilterArray([]);
    setData(fullData);
  };

  useEffect(() => {}, [filterArray]);

  const click = (e: any) => {
    const index = filterArray.indexOf(
      e.currentTarget.previousSibling.textContent
    );
    if (index > -1) {
      filterArray.splice(index, 1);
    }
    console.log(filterArray);
  };
  return (
    <div className="p-5 2xl:p-36">
      <div className=" shadow-md p-5 2xl:p-10 flex justify-between bg-white rounded">
        <div className="flex flex-wrap gap-4">
          {filterArray.map((skils: any) => (
            <>
              <div className="flex">
                <p className=" bg-dark-white text-blue py-2 px-3 rounded	font-bold">
                  {skils}
                </p>
                <button
                  className="hover:bg-black bg-blue font-bold text-white px-3 rounded-r"
                  onClick={click}
                >
                  X
                </button>
              </div>
            </>
          ))}
        </div>

        <button
          className="hover:text-blue text-gray-light font-bold"
          onClick={noFilter}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
