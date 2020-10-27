import React from 'react';
import { Box, Button, Flex, Spacer } from '@chakra-ui/core';

const MainHeader = props => {
  return (
    <Box
      w="100%"
      position="sticky"
      color="white"
      top="0"
      left="0"
      fontSize={12}
      right="0"
      zIndex="9999"
      p={3}
      bg="#413E95"
    >
      <Flex>
        <Flex px={2} borderRight="1px solid white">
          Address:Sweda Bari, Sikar, Rajastahn-123456
        </Flex>
        <Flex px={2} borderRight="1px solid white">
          subhashconventschool@gmailcom
        </Flex>
        <Flex px={2}>01234567890/8976543456</Flex>
        <Spacer />
        <Flex px={2}>
          <Button variant="outline" size="xs">
            Hello
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainHeader;
