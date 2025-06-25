import React from "react";
import { SpinnerContainer, LoadingCircle, LoadingText } from "./index";

function Loading() {
  return (
    <SpinnerContainer>
      <LoadingCircle />
      <LoadingText>Loading News</LoadingText>
    </SpinnerContainer>
  );
}

export default Loading;
