import React from "react";
import Loading from "./Loading/Loading";
function LoadingModal() {
  return (
    <div className="modal_overlay">
      <Loading />
    </div>
  );
}

export default LoadingModal;
