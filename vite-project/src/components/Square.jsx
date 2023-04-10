import React from 'react'
import { Box  ,Text} from '@chakra-ui/react'
function Square(prop) {
  return (
    <Box
      border={"3px solid rgb(41,209,243)"}
      width={"33.99%"}
      borderRadius={"10px"}
      height={"26.6vh"}
      cursor={"pointer"}
      display="flex"
      justifyContent="center"
      alignContent="center"
      color={"white"}
      onClick={prop.onClick}
    >
      <Text marginTop={"20%"} fontSize={"6xl"}>
        {prop.value}
      </Text>
    </Box>
  );
}

export default Square