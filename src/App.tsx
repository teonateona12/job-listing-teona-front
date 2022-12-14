import Job from "./components/Job";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { DataTypes } from "./components/types";

function App() {
  const [data, setData] = useState<DataTypes[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/");
      setData(res.data);
    };

    getData();
  }, []);

  const handleTagClick = (tag: string) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const filterFunc = ({ role, level, tools, languages }: DataTypes) => {
    if (filters?.length == 0) {
      return true;
    }
    const tags = [role, level];
    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }
    let result = true;
    filters.map((filter: any) => {
      if (!tags.includes(filter)) {
        result = false;
      }
    });
    return result;
  };

  const filteredJobs = data.filter(filterFunc);

  const handleFilterClick = (filter: string) => {
    setFilters(filters.filter((f: string) => f !== filter));
  };

  return (
    <div>
      <div className="bg-blue">
        <img src="../images/bg-header-mobile.svg" />
      </div>
      {filters.length === 0 ? (
        ""
      ) : (
        <div className="px-5 sticky -mt-[10%] md:-mt-[5%] xl:-mt-[2%] 2xl:px-36 ">
          <div className="flex shadow-md p-5 2xl:p-10 bg-white rounded justify-between ">
            <div className="flex gap-4 flex-wrap">
              {filters.length > 0 &&
                filters.map((filter: string) => (
                  <div>
                    <div className="flex ">
                      <span className="bg-dark-white text-blue py-2 px-3 rounded	font-bold">
                        {filter}
                      </span>
                      <button
                        className="hover:bg-black bg-blue font-bold text-white px-3 rounded-r"
                        onClick={() => handleFilterClick(filter)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <button
              className="hover:text-blue text-gray-light font-bold"
              onClick={() => setFilters([])}
            >
              Clear
            </button>
          </div>
        </div>
      )}
      {filteredJobs.map((job) => (
        <Job job={job} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
}

export default App;
