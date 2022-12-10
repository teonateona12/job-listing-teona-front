import "../index.css";

const Filter = () => {
  return (
    <div className="p-5 2xl:p-36">
      <div className="filter p-5 2xl:p-10 flex justify-between bg-white rounded">
        <div className="flex flex-wrap gap-4">
          <div className="flex">
            <p className="text2 py-2 px-3 rounded	font-bold"> </p>
            <button className="new font-bold text-white px-3 rounded-r">
              X
            </button>
          </div>
        </div>

        <button className="txt font-bold">Clear</button>
      </div>
    </div>
  );
};

export default Filter;
