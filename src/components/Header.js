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
      fontSize={14}
      right="0"
      zIndex="9999"
      p={3}
      bg="#413E95"
    >
      <Flex>
        <Flex px={2}>{props.data.title}</Flex>
      </Flex>
    </Box>
  );
};

export default MainHeader;
