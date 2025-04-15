import { useState, useRef, useEffect } from "react";

const OTP_BOXES = 5;

const OtpContainer = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_BOXES).fill(""));
  const refArr = useRef([])


  useEffect(() => {
    // console.log(refArr.current[0]);
    refArr.current[0].focus();
  }, [])

  const keyPress = (e, index) => {
    // if(e.key === "Backspace"){
    //   const tempArr = [...inputArr]
    //   console.log("Backspace Pressed");
    //   if(e.target.value === ""){
    //     console.log("In Backspace if")
    //     console.log(index); 
    //     refArr.current[index - 1]?.focus(); 
    //   }
    //   else {
    //     console.log("In Backspace else")
    //     console.log(index);
    //     tempArr[index] = "";
    //     setInputArr(tempArr);
    //   }
    // }

    if(!e.target.value && e.key == "Backspace"){
      refArr.current[index - 1].focus();
    }

    if(e.key === "ArrowRight" && e.target.nextElementSibling){
      console.log("Right Arrow Pressed");
      refArr.current[index + 1].focus();
    }

    else if(e.key === "ArrowLeft" && e.target.previousElementSibling){
      console.log("Left Arrow Pressed");
      refArr.current[index - 1].focus();
      console.log(refArr.current[index])
    }

    
    // console.log(refArr.current[index]);
    // console.log(index);
  }

  const otpInput = (e, index) => {
    if (e.target.value !== " " && !isNaN(e.target.value)) {
      // console.log("Value:", e);
      const tempArr = [...inputArr];
      tempArr[index] = e.target.value.slice(-1);
      setInputArr(tempArr);
      if(e.target.nextElementSibling){
        refArr.current[index + 1].focus();
      }
    }
  };

  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-4 py-2">
        OTP Container
      </h1>
      <div className="border my-8 text-center">
        {inputArr.map((input, index) => (
          // console.log(input)
          <input
            key={index}
            type="text"
            className={`border h-16 w-16 mx-1 my-4 text-3xl text-center font-bold rounded-lg input-${index}`}
            ref={(input) => refArr.current[index] = input}
            value={inputArr[index]}
            onChange={(e) => otpInput(e, index)}
            onKeyDown={(e) => keyPress(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpContainer;
