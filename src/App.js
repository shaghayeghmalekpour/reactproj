import React, { useState } from "react";
// import Butt from "./Butt.js";
function App() {
  const [close, setClose] = useState(false);

  const change = () => {
    setClose(true);
 console.log("HI");
  };
  const open =()=>{
 setClose(false);
  };
  return (
    <>
    <div className={`navBar ${close ? 'check' : 'uncheck'}`}
      // style={{
      //   width: "200px",
      //   height: "100vh",
      //   backgroundColor: "white",
      //   float: "right",
      //   zIndex: "1",
      // }}
      // id="navButt"
      Hi this a Test For You
    >
      </div>
      <div>
     
      <button id="btt"
        onClick={change}
      >
        close
      </button>
      <button id="butt2">
    {/* onClick={open} */}
    Open
      </button>
      {/* <Butt isCheck={close} /> */}
    </div>
    </>
  );
}

export default App;

// const text="shaghayegh"
// const [myText,setMyText]=useState("goodbye")
// const ali =()=>{
// setMyText("ali")
// }
// return (
//   <>

//     <div>
//       {myText}
//     </div>
//     <div>hello again</div>
//     <button style={{backgroundColor:"red", color:"white"}} onClick={ali}>
//       change my text
//     </button>
//   </>
// );
