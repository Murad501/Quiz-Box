import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "flowbite-react";
import React from "react";
import Option from "../Option/Option";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const Quiz = ({ quiz, idx }) => {
  const { id, options, correctAnswer, question } = quiz;
  const previousQ = question.split("<p>");
  const finalQuestion = previousQ[1].split("</p>");
  return (
      <div className="my-5 relative">
        <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {idx + 1}. {finalQuestion}
        </h5>
        <p className="grid md:grid-cols-2 font-normal text-gray-700 dark:text-gray-400">
        {
            options.map(option => <Option option={option} correctAnswer={correctAnswer} id={id} idx={idx}></Option>)
        }
        </p>
        <FontAwesomeIcon className="absolute top-4 right-4" icon={faEye}></FontAwesomeIcon>
      </Card>
      </div>
  );
};

export default Quiz;
