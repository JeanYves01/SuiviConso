import React, { useRef } from 'react';
import { Button, Center, VStack } from '@chakra-ui/react';

const ScannerPage = () => {
  const videoRef = useRef(null);

  const startScanner = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <Center>
      <VStack height='20vh'>
        <Button padding='10px' colorScheme="teal" onClick={startScanner}>
         scanner le code QR
        </Button>
        <video ref={videoRef} width="100px" height="80px" style={{ display: 'block' }} />
      </VStack>
    </Center>
  );
};

export default ScannerPage;
