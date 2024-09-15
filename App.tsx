import Alert from "./components/Alert";
import Button from "./components/Button";
import { ChangeEvent, useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const [val, setVal] = useState("Habit 1");
  const [val2, setVal2] = useState("Habit 2");
  const [val3, setVal3] = useState("Habit 2");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setVal2(event.target.value);
  };

  const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setVal3(event.target.value);
  };

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  };

  const handleClick3 = () => {
    setCounter3(counter3 + 1);
  };

  function wait(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function setButtonClick() {
    setAlertVisibility(true);
    await wait(5000);
    setAlertVisibility(false);
  }

  function streakColor(num: number) {
    if (num == 0) {
      return "white";
    } else if (num < 7) {
      return "red";
    } else if (num < 14) {
      return "orange";
    } else if (num < 21) {
      return "yellow";
    } else {
      return "green";
    }
  }

  function streak(num: number) {
    if (num < 7) {
      return "" + num;
    } else {
      return "🔥" + num + "🔥";
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#1f2023",
        display: "grid",
        gridGap: "20px", // Adjust the gap between grid items here
        columnWidth: "50px",
        rowGap: "50px",
      }}
      className="grid text-center"
    >
      {alertVisible && <Confetti />}
      <h1 style={{ color: "white" }}>Habit Tracker</h1>
      <div className="grid-container">
        <div>
          <Button
            onClick={() => {
              setButtonClick();
              handleClick1();
            }}
          >
            {val}
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              setButtonClick();
              handleClick2();
            }}
          >
            {val2}
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              setButtonClick();
              handleClick3();
            }}
          >
            {val3}
          </Button>
        </div>
        <div>
          <h1
            style={{
              color: streakColor(counter),
            }}
          >
            {streak(counter)}
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: streakColor(counter2),
            }}
          >
            {streak(counter2)}
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: streakColor(counter3),
            }}
          >
            {streak(counter3)}
          </h1>
        </div>
        <div>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Name
            </span>
            <input
              type="text"
              value={val}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Name
            </span>
            <input
              type="text"
              value={val2}
              className="form-control"
              onChange={handleInputChange2}
            />
          </div>
        </div>
        <div>
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Name
            </span>
            <input
              type="text"
              value={val3}
              className="form-control"
              onChange={handleInputChange3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
