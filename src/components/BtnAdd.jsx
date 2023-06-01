import { useState } from "react";

function BtnAdd() {
  const [inputs, setInputs] = useState([{ id: 1, value: "" }]);
  const [nextId, setNextId] = useState(2);

  const handleAddInput = () => {
    setInputs((prevState) => [
      ...prevState,
      { id: nextId, value: "" },
    ]);
    setNextId((prevId) => prevId + 1);
  };

  const handleDeleteInput = (id) => {
    setInputs((prevState) => prevState.filter((input) => input.id !== id));
  };

  const handleInputChange = (id, value) => {
    setInputs((prevState) =>
      prevState.map((input) => {
        if (input.id === id) {
          return { ...input, value };
        }
        return input;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = inputs.map((input) => input.value);
    console.log(values);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id} style={{ display: "flex" }}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
          />
          <button onClick={() => handleAddInput()}>Add</button>
          <button onClick={() => handleDeleteInput(input.id)}>Delete</button>
        </div>
      ))}
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
}

export default BtnAdd;