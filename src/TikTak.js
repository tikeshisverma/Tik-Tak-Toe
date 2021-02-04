import { useEffect, useState } from "react";
import "./TikTak.css";

function TikTak() {
  const [TextContent, setTextContent] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setTurn] = useState("playerOne");

  const trigger = (n) => {
    console.log("n==>", n);
    let temp = [...TextContent];
    if (turn === "playerOne") {
      temp[n - 1] = "X";
    } else if (turn === "playerTwo") {
      temp[n - 1] = "O";
    }
    setTextContent(temp);
  };
  useEffect(() => {
    let temp = [...TextContent];
    if (
      temp[0] !== "" &&
      temp[1] !== "" &&
      temp[2] !== "" &&
      temp[0] === temp[1] &&
      temp[0] === temp[2]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[3] !== "" &&
      temp[4] !== "" &&
      temp[5] !== "" &&
      temp[3] === temp[4] &&
      temp[3] === temp[5]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[6] !== "" &&
      temp[7] !== "" &&
      temp[8] !== "" &&
      temp[6] === temp[7] &&
      temp[6] === temp[8]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[0] !== "" &&
      temp[3] !== "" &&
      temp[6] !== "" &&
      temp[0] === temp[3] &&
      temp[0] === temp[6]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[1] !== "" &&
      temp[4] !== "" &&
      temp[7] !== "" &&
      temp[1] === temp[4] &&
      temp[1] === temp[7]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[2] !== "" &&
      temp[5] !== "" &&
      temp[8] !== "" &&
      temp[2] === temp[5] &&
      temp[2] === temp[8]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[0] !== "" &&
      temp[4] !== "" &&
      temp[8] !== "" &&
      temp[0] === temp[4] &&
      temp[0] === temp[8]
    ) {
      alert(`WINNER ${turn}`);
    } else if (
      temp[2] !== "" &&
      temp[4] !== "" &&
      temp[6] !== "" &&
      temp[2] === temp[4] &&
      temp[2] === temp[6]
    ) {
      alert(`WINNER ${turn}`);
    } else {
      turn === "playerTwo" ? setTurn("playerOne") : setTurn("playerTwo");
    }
  }, [TextContent]);

  return (
    <div className="button-wrapper">
      <div className="wrapper">
        <button onClick={() => trigger(1)}>{TextContent[0]}</button>
        <button onClick={() => trigger(2)}>{TextContent[1]}</button>
        <button onClick={() => trigger(3)}>{TextContent[2]}</button>
      </div>
      <div className="wrapper">
        <button onClick={() => trigger(4)}>{TextContent[3]}</button>
        <button onClick={() => trigger(5)}>{TextContent[4]}</button>
        <button onClick={() => trigger(6)}>{TextContent[5]}</button>
      </div>
      <div className="wrapper">
        <button onClick={() => trigger(7)}>{TextContent[6]}</button>
        <button onClick={() => trigger(8)}>{TextContent[7]}</button>
        <button onClick={() => trigger(9)}>{TextContent[8]}</button>
      </div>
    </div>
  );
}

export default TikTak;
