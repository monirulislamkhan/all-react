import "./App.css";
import { useState } from "react";
const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  function prevClickHandler() {
    if (step > 1) setStep((set) => set - 1);
  }

  function nextClickHandler() {
    if (step < 3) setStep((set) => set + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`step ${step >= 1 ? "active" : ""}`}>{1}</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <div className="message">
        <h3>
          Step {step}: {messages[step - 1]}
        </h3>
      </div>

      <div className="buttons">
        <button onClick={prevClickHandler}>Previous</button>
        <button onClick={nextClickHandler}>Next</button>
      </div>
    </div>
  );
}

// function Message() {
//   return (
//     <div className="message">
//       <h3>Step</h3>
//     </div>
//   );
// }

function Button({ children }) {
  return <button>{children}</button>;
}
