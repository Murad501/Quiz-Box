import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const Navigate = useNavigate()
  const { logo, name, total, id } = topic;
  return (
    <div className="max-w-sm mx-auto bg-gray-400 rounded-lg text-black border overflow-hidden">
      <img src={logo} alt="" />
        <div className="bg-white py-5">
        <div className="flex justify-between items-center font-bold py-5 px-3 dark:text-white">
          <h5 className="text-2xl">{name}</h5>
          <p className="text-xl">Quiz: {total}</p>
        </div>
        <div onClick={()=>Navigate(`/quiz/${id}`)} className="flex justify-center gap-2 items-center bg-blue-400 py-4 font-bold text-xl w-48 mx-auto rounded text-white">
          <button>Start Practice</button>
          <FontAwesomeIcon
            className="mx-2"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </div>
        </div>
    </div>
  );
};

export default Topic;
