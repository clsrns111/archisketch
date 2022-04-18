import React, { useEffect, useState } from "react";
import dummy from "../db/data.json";
import "../style/home.css";
import Modal from "./Modal";

function Home() {
  const [modal, setModal] = useState("");
  const [idx, setIdx] = useState(0);

  let dataNumber: number = dummy.renderings.length;

  useEffect(() => {
    const data = dummy.renderings[idx]._id;
    setModal(data);
  }, [idx]);

  return (
    <>
      <div>
        <main>
          {modal ? (
            <>
              <nav className="modal_nav">
                <button className="modal_btn" onClick={() => setModal("")}>
                  X
                </button>
              </nav>
              <Modal
                imgSrc={modal}
                idx={idx}
                setIdx={setIdx}
                dataNumber={dataNumber}
              />
            </>
          ) : (
            <>
              <nav className="nav">
                <div className="dataNumber">
                  <small>{dataNumber} 개의 렌더샷</small>
                </div>
                <div className="h1">
                  <h1>갤러리</h1>
                </div>
              </nav>
              <div className="img_containers">
                {dummy.renderings.map((el, idx) => (
                  <div className="img_container">
                    <img
                      className="img"
                      onClick={() => {
                        setModal(el._id);
                        setIdx(idx);
                      }}
                      alt={el._id}
                      key={idx}
                      src={el._id}
                    ></img>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default Home;
