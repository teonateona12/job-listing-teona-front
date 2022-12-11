import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Filter from "./Filter";
import { DataTypes } from "./types";

const Job = () => {
  const [data, setData] = useState<DataTypes[]>([]);
  const [filter, setFilter] = useState<Boolean>(false);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/");
      setData(res.data);
    };

    getData();
  }, []);

  const filterHandler = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setFilter(true);
    const text = e.currentTarget.textContent;
  };

  return (
    <div>
      <div className="bg">
        <img src="../images/bg-header-mobile.svg" />
      </div>
      {filter ? <Filter /> : ""}
      {data.map((userdata: DataTypes) => (
        <div>
          <div className="px-5 py-16 2xl:p-36">
            <div className="box rounded-md bg-white p-5 lg:px-10 2xl:flex 2xl:justify-between 2xl:p-10">
              <div className="2xl:flex">
                <img
                  className="-mt-[17%] sm:-mt-[10%] md:-mt-[6%] xl:-mt-[4%] 2xl:-mt-0"
                  src={userdata?.logo}
                ></img>
                <div className="2xl:ml-6">
                  <div className="flex mt-3">
                    <p className="txt2 font-bold text-sm 2xl:text-lg">
                      {userdata?.company}
                    </p>
                    {userdata?.new ? (
                      <p className="new p-1  px-2 text-white font-bold ml-7 rounded-2xl text-sm">
                        NEW
                      </p>
                    ) : (
                      ""
                    )}
                    {userdata?.featured ? (
                      <p className="featured p-1 px-2 text-white font-bold ml-3 rounded-2xl text-sm">
                        FEATURED
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="hov text font-bold mt-2 2xl:text-2xl">
                    {userdata?.position}
                  </p>
                  <div className="flex mt-4 gap-3">
                    <p className="txt 2xl:text-lg">{userdata?.postedAt}</p>
                    <div className="div w-1 h-1 rounded-full"></div>
                    <p className="txt 2xl:text-lg">{userdata?.contract}</p>
                    <div className="div w-1 h-1 rounded-full"></div>
                    <p className="txt 2xl:text-lg"> {userdata?.location}</p>
                  </div>
                </div>
              </div>
              <hr className="my-4"></hr>
              <div className="flex flex-wrap gap-4 2xl:mx-0 2xl:my-auto">
                {userdata?.languages.map((language: string) => (
                  <p
                    className="skills text2 py-2 px-3 rounded	font-bold"
                    onClick={filterHandler}
                  >
                    {language}
                  </p>
                ))}
                <p
                  className="skills text2 py-2 px-3 rounded	font-bold"
                  onClick={filterHandler}
                >
                  {userdata?.role}
                </p>
                <p
                  className="skills text2 py-2 px-3 rounded	font-bold"
                  onClick={filterHandler}
                >
                  {userdata?.level}
                </p>
                {userdata?.tools?.map((tool: string) => (
                  <p
                    className="skills text2 py-2 px-3 rounded	font-bold"
                    onClick={filterHandler}
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
