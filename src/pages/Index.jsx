import React, { useState } from "react";
import { Box, Button, ChakraProvider, Container, Flex, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" p={4}>
        <VStack spacing={4}>
          <Heading as="h1" size="xl" textAlign="center">
            KarmaChat
          </Heading>
          <Flex flexDirection="column" p={4} bg="gray.100" borderRadius="lg" flexGrow={1} overflowY="auto">
            <Stack spacing={4}>
              {messages.map((message, index) => (
                <Flex key={index} bg="green.100" p={3} borderRadius="lg" alignSelf="flex-end" maxWidth="400%">
                  <Text>{message}</Text>
                </Flex>
              ))}
            </Stack>
          </Flex>
          <InputGroup size="md" maxWidth="400%">
            <Input pr="4.5rem" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Type a message..." w="100%" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleSendMessage}>
                <FaPaperPlane />
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
