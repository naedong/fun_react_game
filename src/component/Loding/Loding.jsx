import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function Loading() {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        
<PacmanLoader 
          color="red"
          height={15}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </div>
  );
}

export default Loading;