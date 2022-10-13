
const Option = ({ option, id, correctAnswer }) => {

  return (
    <div className="font-bold my-5">
      <input
        className="mx-3"
        type="radio"
        id={option}
        name={id}
      />
      <label for={option}>{option}</label>
    </div>
  );
};

export default Option;
