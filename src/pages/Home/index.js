import React from "react";
import { Box, HStack, Pressable, Icon, Avatar } from "native-base";

import { Feather } from "@expo/vector-icons";
export default function Home() {
  return (
    <Box flex={1} backgroundColor="#f8f8f8" flexDirection={"column"} safeArea>
      <HStack padding={4} w={"100%"} justifyContent={"space-between"}>
        <Box>
          <Pressable>
            <Icon as={Feather} name={"menu"} size={7} color={"#000"} />
          </Pressable>
        </Box>
        <Box flexDir={"row"} alignItems={"center"}>
          <Pressable>
            <Icon
              marginRight={4}
              as={Feather}
              name={"bell"}
              size={7}
              color={"#000"}
            />
          </Pressable>
          <Pressable>
            <Avatar
              source={{ uri: "https://sujeitoprogramador.com/steve.png" }}
              height={12}
              width={12}
            />
          </Pressable>
        </Box>
      </HStack>

      <Box paddingX={4}>Olá mundo</Box>
    </Box>
  );
}
