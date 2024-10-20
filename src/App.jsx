import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = input.duration > 0;

  function handleChange(inputIdentifier, inputValue) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +inputValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput initialInput={input} handleChange={handleChange} />
      {inputIsValid ? (
        <Result input={input} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
