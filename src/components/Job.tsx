import "../index.css";
import { JobTypes } from "./types";

const Job = ({ job, handleTagClick: handleTagClick }: JobTypes) => {
  const {
    id,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const tags: string[] = [role, level];
  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }
  return (
    <div>
      <>
        <div>
          <div className="px-5 py-16 2xl:px-36">
            <div
              className="shadow-md rounded-md bg-white p-5 lg:px-10 2xl:flex 2xl:justify-between 2xl:p-10"
              style={{
                borderColor: featured ? "#5CA5A5" : "",
                borderLeftWidth: featured ? "7px" : "0px",
              }}
            >
              <div className="2xl:flex">
                <img
                  className="-mt-[17%] sm:-mt-[10%] md:-mt-[6%] xl:-mt-[4%] 2xl:-mt-0"
                  src={logo}
                ></img>
                <div className="2xl:ml-6">
                  <div className="flex mt-3">
                    <p className="text-blue font-bold text-sm 2xl:text-lg">
                      {job.company}
                    </p>
                    {job?.new ? (
                      <p className="bg-blue p-1  px-2 text-white font-bold ml-7 rounded-2xl text-sm">
                        NEW
                      </p>
                    ) : (
                      ""
                    )}
                    {featured ? (
                      <p className="bg-gray p-1 px-2 text-white font-bold ml-3 rounded-2xl text-sm">
                        FEATURED
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="hover:text-blue text-gray font-bold mt-2 2xl:text-2xl">
                    {position}
                  </p>
                  <div className="flex mt-4 gap-3">
                    <p className="text-gray-light 2xl:text-lg">{postedAt}</p>
                    <div className="bg-gray-dark my-auto  w-1 h-1 rounded-full"></div>
                    <p className="text-gray-light 2xl:text-lg">{contract}</p>
                    <div className="bg-gray-dark my-auto  w-1 h-1 rounded-full"></div>
                    <p className="text-gray-light 2xl:text-lg"> {location}</p>
                  </div>
                </div>
              </div>
              <hr className="my-4"></hr>
              <div className="flex flex-wrap gap-4 2xl:mx-0 2xl:my-auto">
                {tags.map((tag: string) => {
                  return (
                    <p
                      className="hover:text-white hover:bg-blue bg-dark-white text-blue py-2 px-3 rounded	font-bold"
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Job;
