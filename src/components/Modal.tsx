import React, { useEffect } from "react";
import "../style/modal.css";

type imgProps = {
  imgSrc: string;
  idx: number;
  dataNumber: number;
  setIdx: any;
};

function Modal({ imgSrc, idx, dataNumber, setIdx }: imgProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="modal">
      <div className="modal_img_container">
        <img className="modal_img" src={imgSrc} alt={imgSrc} />
      </div>
      <div className="controller">
        {idx > 0 && (
          <div className="angle left" onClick={() => setIdx(idx - 1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        )}
        {idx < dataNumber - 1 && (
          <div className="angle right" onClick={() => setIdx(idx + 1)}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
