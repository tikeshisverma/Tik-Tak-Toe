import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { useEffect, useState } from "react";
import "./TikTak.css";
const BoxIcon = (props) => {
  if (props.icon == "x") {
    return <FontAwesomeIcon icon={faTimes} />;
  } else if (props.icon == "o") {
    return <FontAwesomeIcon icon={faCheck} />;
  } else {
    return null;
  }
};
const WinnerBox =(props)=>{
  const {winner} = props
  const { width, height } = useWindowSize()
  return(
    <div>
  <Confetti
    width={width}
    height={height}/>
<div>WinneR {winner}</div>
  </div> 
 
  )
  
  
}
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
  const [winner,setWinner]= useState("")

  const [turn, setTurn] = useState("playerOne");

  const trigger = (n) => {
    if(TextContent[n]!=="" || winner !== ""){
      return
    }
    let temp = [...TextContent];
    if (turn === "playerOne") {
      temp[n] = "o";    setTextContent(temp);
      
    } else if (turn === "playerTwo") {
      temp[n] = "x";    setTextContent(temp);
    }
    

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
      setWinner(turn)
    } else if (
      temp[3] !== "" &&
      temp[4] !== "" &&
      temp[5] !== "" &&
      temp[3] === temp[4] &&
      temp[3] === temp[5]
    ) {
      setWinner(turn)
    } else if (
      temp[6] !== "" &&
      temp[7] !== "" &&
      temp[8] !== "" &&
      temp[6] === temp[7] &&
      temp[6] === temp[8]
    ) {
      setWinner(turn)
    } else if (
      temp[0] !== "" &&
      temp[3] !== "" &&
      temp[6] !== "" &&
      temp[0] === temp[3] &&
      temp[0] === temp[6]
    ) {
      setWinner(turn)
    } else if (
      temp[1] !== "" &&
      temp[4] !== "" &&
      temp[7] !== "" &&
      temp[1] === temp[4] &&
      temp[1] === temp[7]
    ) {
      setWinner(turn)
    } else if (
      temp[2] !== "" &&
      temp[5] !== "" &&
      temp[8] !== "" &&
      temp[2] === temp[5] &&
      temp[2] === temp[8]
    ) {
      setWinner(turn)
    } else if (
      temp[0] !== "" &&
      temp[4] !== "" &&
      temp[8] !== "" &&
      temp[0] === temp[4] &&
      temp[0] === temp[8]
    ) {
      setWinner(turn)
    } else if (
      temp[2] !== "" &&
      temp[4] !== "" &&
      temp[6] !== "" &&
      temp[2] === temp[4] &&
      temp[2] === temp[6]
    ) {
      setWinner(turn)
    } else {
      turn === "playerTwo" ? setTurn("playerOne") : setTurn("playerTwo");
    }
  }, [TextContent]);

  return (
    <div className="button-wrapper">
 {winner ?   <WinnerBox winner={winner}/>  : null}
      <div className="wrapper">
        <button className="button1" onClick={() => trigger(0)}>
          <BoxIcon icon={TextContent[0]}></BoxIcon>
        </button>

        <button className="button2" onClick={() => trigger(1)}>
          <BoxIcon icon={TextContent[1]}></BoxIcon>
        </button>
        <button className="button3" onClick={() => trigger(2)}>
          <BoxIcon icon={TextContent[2]}></BoxIcon>
        </button>
      </div>
      <div className="wrapper">
        <button className="button4" onClick={() => trigger(3)}>
          <BoxIcon icon={TextContent[3]}></BoxIcon>
        </button>
        <button className="button5" onClick={() => trigger(4)}>
          <BoxIcon icon={TextContent[4]}></BoxIcon>
        </button>
        <button className="button6" onClick={() => trigger(5)}>
          <BoxIcon icon={TextContent[5]}></BoxIcon>
        </button>
      </div>
      <div className="wrapper">
        <button  className="button7"onClick={() => trigger(6)}>
          <BoxIcon icon={TextContent[6]}></BoxIcon>
        </button>
        <button className="button8" onClick={() => trigger(7)}>
          <BoxIcon icon={TextContent[7]}></BoxIcon>
        </button>
        <button className="button9" onClick={() => trigger(8)}>
          <BoxIcon icon={TextContent[8]}></BoxIcon>
        </button>
      </div>
    </div>
  );
}

export default TikTak;
