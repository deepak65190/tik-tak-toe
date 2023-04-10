import React, { useState } from "react";
import { Box  ,Button ,Text} from "@chakra-ui/react";
import Square from "./Square";
import { ImCross } from "react-icons/im";
import { TbMedicalCrossFilled } from "react-icons/tb";
function Full() {
  const [icon, setIcon] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
 
  const winnder = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let logic of win){
     let [a,b,c]=logic ;
     if(icon[a]!==null &&icon[a]===icon[b]&& icon[a]=== icon[c]){
      return icon[a] ;
     }
    }
    return false;
  };
   let who=winnder();



  const handleClikc = (index) => {
    if (icon[index]) {
      return;
    }
    let copyIcon = [...icon];
    copyIcon[index] = turn ? (
      // 
      "x"
    ) : ("0"
      // 
    );
    setIcon(copyIcon);
    setTurn(!turn);
  };
  const handlePlay=()=>{
    setIcon(Array(9).fill(null));
  }

  return (
    <>
      {who ? (
        <Box
          w={"100vh"}
          h={"80vh"}
          m="40px"
          borderRadius={"20px"}
          bg={"#050F33"}
          boxShadow="dark-lg"
          color={"white"}
        >
          <Text fontSize={"3xl"} padding={"30px"}>{who} won the game</Text>
          <Button
            color={"teal"}
            display="block"
            margin={"auto"}
            marginTop={"30%"}
            onClick={handlePlay}
          >
            Play again
          </Button>
        </Box>
      ) : (
        <>
          <Text fontSize={"3xl"} color={"teal"}>{turn ? "x" : "0"} move</Text>
          <Box
            w={"100vh"}
            h={"80vh"}
            m="40px"
            borderRadius={"20px"}
            bg={"#050F33"}
            boxShadow="dark-lg"
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Square onClick={() => handleClikc(0)} value={icon[0]} />
              <Square onClick={() => handleClikc(1)} value={icon[1]} />
              <Square onClick={() => handleClikc(2)} value={icon[2]} />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Square onClick={() => handleClikc(3)} value={icon[3]} />
              <Square onClick={() => handleClikc(4)} value={icon[4]} />
              <Square onClick={() => handleClikc(5)} value={icon[5]} />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Square onClick={() => handleClikc(6)} value={icon[6]} />
              <Square onClick={() => handleClikc(7)} value={icon[7]} />
              <Square onClick={() => handleClikc(8)} value={icon[8]} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default Full;
