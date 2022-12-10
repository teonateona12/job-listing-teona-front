import image from "../images/bg-header-mobile.svg";
import "../index.css";

const Main = () => {
  return (
    <div>
      <div className="bg">
        <img src={image} />
      </div>
      <div className="px-5 py-16 2xl:p-36">
        <div className="box rounded-md bg-white p-5 lg:px-10 2xl:flex 2xl:justify-between 2xl:p-10">
          <div className="2xl:flex">
            <img className="-mt-[17%] sm:-mt-[10%] md:-mt-[6%] xl:-mt-[4%] 2xl:-mt-0"></img>
            <div className="2xl:ml-6">
              <div className="flex mt-3">
                <p className="txt2 font-bold text-sm 2xl:text-lg"></p>
                <p className="new p-1  px-2 text-white font-bold ml-7 rounded-2xl text-sm"></p>
                <p className="featured p-1 px-2 text-white font-bold ml-3 rounded-2xl text-sm"></p>
              </div>
              <p className="text font-bold mt-2 2xl:text-2xl"></p>
              <div className="flex mt-4 gap-3">
                <p className="txt 2xl:text-lg"></p>
                <div className="div w-1 h-1 rounded-full"></div>
                <p className="txt 2xl:text-lg"></p>
                <div className="div w-1 h-1 rounded-full"></div>
                <p className="txt 2xl:text-lg"></p>
              </div>
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="flex flex-wrap gap-4 2xl:mx-0 2xl:my-auto">
            <p className="text2 py-2 px-3 rounded	font-bold"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
