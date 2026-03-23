import { useState } from "react";
import Box from "./Box";
import Button from "./Button";

function BoxContainer() {

  const [leftCount , setLeftCount] = useState(10)
  const [rightCount , setRightCount] = useState(0)

  const handleLeftClick = () => {
    setLeftCount(leftCount + 1)
    setRightCount(rightCount - 1)
  }
  
  const handleRightClick = () => {
    setRightCount(rightCount + 1)
    setLeftCount(leftCount - 1)
  }

  return (
    <>
      <Box boxName="BOX-1" boxCount={leftCount} />
      <Button buttonName="Left" handleClick={handleLeftClick} />
      <Button buttonName="Right" handleClick={handleRightClick}/>
      <Box boxName="BOX-2" boxCount={rightCount}/>
    </>
  );
}

export default BoxContainer;
