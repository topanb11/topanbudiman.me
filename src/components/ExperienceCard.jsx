import React, {useEffect, useState} from "react";
import client from "../secrets";

const ExperienceCard = () => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const getExperienceData = async() => {
		let response = await client.getEntries({
			content_type: 'topan'
		})
		setData(response.items);
	}

	useEffect(() => {
		getExperienceData();
	}, [])

	useEffect(() => {
		if (data) setLoaded(true)
		if (loaded) {
			console.log(data);
		}
	}, [data])

	
  return (
    <>
      <ul>
        {/* {data.ExperienceData.map((data) => (
          <li
            key={data.order}
            className="flex flex-row-reverse text-left my-10 
														justify-center"
          >
            <img src={data.imageURL} className="w-24 h-24 md:w-36 md:h-36" />
            <div className="flex flex-col font-Raleway pr-24 w-64 md:w-1/2">
              <h2 className="text-lg font-bold md:text-2xl w-36 md:w-64">{data.company}</h2>
              {data.position.map((position) => (
                <div
                  key={position.title}
                  className="text-xs border-l-2 pl-3 my-3 border-secondary
													md:text-lg"
                >
                  <p>{position.title}</p>
                  <p className="text-dark">{position.duration}</p>
                  <p className="text-dark">{position.location}</p>
                </div>
              ))}
            </div>
          </li>
        ))} */}
      </ul>
    </>
  );
};
export default ExperienceCard;