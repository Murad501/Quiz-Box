
const Option = ({ option, id, seeAnswer }) => {

  return (
    <div className="font-bold my-5">
      <input
      onClick={()=> seeAnswer(option)}
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
