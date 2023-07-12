import React from "react";
import { Hypnosis } from "react-cssfx-loading";

export default function Loading() {
  return (
    <div >
      <Hypnosis  height={200} width={200} color="#890e9d"  />
    </div>
  );
}

export const MiniLoading = () => {
  return (
    <span >
      <Hypnosis height={200} width={200} color="#890e9d" />
    </span>
  );
};
