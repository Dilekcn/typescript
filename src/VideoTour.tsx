import React from "react";
import { AspectRatio, Box, Text, Image, Flex } from "@chakra-ui/react";
import VideoIntro from "./assets/videointro.mp4";
import Comp from "./assets/comp.png";

function VideoTour() {
  return (
    <Box>
      <Text>        
        Mentor’s chatbot lives right inside Slack for instant check-ins
      </Text>
      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image src={Comp} alt="naruto" objectFit="cover" />
      </AspectRatio>
      <AspectRatio maxW="380px" ratio={1}>
        <iframe title="naruto" src={VideoIntro} allowFullScreen />
      </AspectRatio>
    </Box>
  );
}

export default VideoTour;
