import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Filter from "./Filter";
import { DataTypes } from "./types";

const Job = () => {
  const [data, setData] = useState<DataTypes[]>([]);
  const [filterArray, setFilterArray] = useState<(string | null)[]>([]);
  const [fullData, setFullData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/");
      setData(res.data);
      setFullData(res.data);
    };

    getData();
  }, []);

  const roleFilter = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    x: any
  ) => {
    const text: string | null = e.currentTarget.textContent;
    setFilterArray([...filterArray, text]);

    const result = data.filter((curData) => {
      return curData.role === x;
    });

    setData(result);
  };

  const toolsFilter = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    x: any
  ) => {
    const text: string | null = e.currentTarget.textContent;
    setFilterArray([...filterArray, text]);

    const result = data.filter((curData) => curData.tools?.includes(x));
    setData(result);
  };

  const langFilter = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    x: any
  ) => {
    const text: string | null = e.currentTarget.textContent;
    setFilterArray([...filterArray, text]);

    const result = data.filter((curData) => curData.languages.includes(x));
    setData(result);
  };
  const levelFilter = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    x: any
  ) => {
    const text: any = e.currentTarget.textContent;

    setFilterArray([...filterArray, text]);

    const result = data.filter((curData) => {
      return curData.level === x;
    });

    setData(result);
  };
  return (
    <div>
      <div className="bg-blue">
        <img src="../images/bg-header-mobile.svg" />
      </div>
      {filterArray.length !== 0 ? (
        <Filter
          filterArray={filterArray}
          setFilterArray={setFilterArray}
          fullData={fullData}
          setData={setData}
        />
      ) : (
        ""
      )}
      {data.map((userdata: DataTypes) => (
        <>
          <div>
            <div className="px-5 py-16 2xl:p-36">
              <div className="shadow-md rounded-md bg-white p-5 lg:px-10 2xl:flex 2xl:justify-between 2xl:p-10">
                <div className="2xl:flex">
                  <img
                    className="-mt-[17%] sm:-mt-[10%] md:-mt-[6%] xl:-mt-[4%] 2xl:-mt-0"
                    src={userdata?.logo}
                  ></img>
                  <div className="2xl:ml-6">
                    <div className="flex mt-3">
                      <p className="text-blue font-bold text-sm 2xl:text-lg">
                        {userdata?.company}
                      </p>
                      {userdata?.new ? (
                        <p className="bg-blue p-1  px-2 text-white font-bold ml-7 rounded-2xl text-sm">
                          NEW
                        </p>
                      ) : (
                        ""
                      )}
                      {userdata?.featured ? (
                        <p className="bg-gray p-1 px-2 text-white font-bold ml-3 rounded-2xl text-sm">
                          FEATURED
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="hover:text-blue text-gray font-bold mt-2 2xl:text-2xl">
                      {userdata?.position}
                    </p>
                    <div className="flex mt-4 gap-3">
                      <p className="text-gray-light 2xl:text-lg">
                        {userdata?.postedAt}
                      </p>
                      <div className="bg-gray-dark my-auto  w-1 h-1 rounded-full"></div>
                      <p className="text-gray-light 2xl:text-lg">
                        {userdata?.contract}
                      </p>
                      <div className="bg-gray-dark my-auto  w-1 h-1 rounded-full"></div>
                      <p className="text-gray-light 2xl:text-lg">
                        {" "}
                        {userdata?.location}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <div className="flex flex-wrap gap-4 2xl:mx-0 2xl:my-auto">
                  {userdata?.languages.map((language: string) => (
                    <p
                      className="hover:text-white hover:bg-blue bg-dark-white text-blue py-2 px-3 rounded	font-bold"
                      onClick={(e) => langFilter(e, language)}
                    >
                      {language}
                    </p>
                  ))}
                  <p
                    className="hover:text-white hover:bg-blue  bg-dark-white text-blue py-2 px-3 rounded	font-bold"
                    onClick={(e) => roleFilter(e, userdata?.role)}
                  >
                    {userdata?.role}
                  </p>
                  <p
                    className="hover:text-white hover:bg-blue  bg-dark-white text-blue py-2 px-3 rounded	font-bold"
                    onClick={(e) => levelFilter(e, userdata.level)}
                  >
                    {userdata?.level}
                  </p>
                  {userdata?.tools?.map((tool: string) => (
                    <>
                      <p
                        className="hover:text-white hover:bg-blue  bg-dark-white text-blue py-2 px-3 rounded	font-bold"
                        onClick={(e) => toolsFilter(e, tool)}
                      >
                        {tool}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Job;
