import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Toast } from "flowbite-react";
import React, { useState } from "react";
import Option from "../Option/Option";
import { faEye, faCheck, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, idx }) => {
  const [open, setOpen] = useState(false);
  const { id, options, correctAnswer, question } = quiz;
  const previousQ = question.split("<p>");
  const finalQuestion = previousQ[1].split("</p>");
  return (
    <div className="my-5">
      <div className="p-5 flex justify-center">
        {open && (
          <Toast onClick={()=> setOpen(!open)}>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </div>
            <div className="ml-3 text-sm font-normal">{correctAnswer}</div>
            <Toast.Toggle onClick={() => setOpen(!open)} />
          </Toast>
        )}
      </div>
      <div className="relative">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {idx + 1}. {finalQuestion}
          </h5>
          <p className="grid md:grid-cols-2 font-normal text-gray-700 dark:text-gray-400">
            {options.map((option) => (
              <Option
                option={option}
                correctAnswer={correctAnswer}
                id={id}
                idx={idx}
              ></Option>
            ))}
          </p>
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-4 right-4"
          >
            {open ? (
              <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
