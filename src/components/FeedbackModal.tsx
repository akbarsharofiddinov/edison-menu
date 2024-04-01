import React, { useState } from "react";
import { useEdisonContext } from "@/context/EdisonContext";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Rate } from "antd";

const FeedbackModal: React.FC = () => {
  const { modal, toggleModal } = useEdisonContext();
  const [kitchenRate, setKitchenRate] = useState(0);
  const [interioRate, setInterioRate] = useState(0);
  const [servicesRate, setServicesRate] = useState(0);
  const [atmosphereRate, setAtpmosphereRate] = useState(0);
  const [message, setMessage] = useState("");

  function handleRateSending() {
    const data = {
      kitchenRate,
      interioRate,
      servicesRate,
      atmosphereRate,
      message,
    };

    toggleModal();

    console.log(data);
  }

  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="feedback-inner">
        <button className="class-btn" onClick={toggleModal}>
          <IoCloseCircleOutline />
        </button>
        <h1 className="title">Оцените нас!</h1>
        <form>
          <div className="ratingBoxes">
            <div className="kitchen">
              <label>Кухня</label>
              <Rate value={kitchenRate} onChange={setKitchenRate} />
            </div>
            <div className="kitchen">
              <label>Интерьер</label>
              <Rate value={interioRate} onChange={setInterioRate} />
            </div>
            <div className="kitchen">
              <label>Обслуживания</label>
              <Rate value={servicesRate} onChange={setServicesRate} />
            </div>
            <div className="kitchen">
              <label>Атмосфера</label>
              <Rate value={atmosphereRate} onChange={setAtpmosphereRate} />
            </div>
          </div>
          <div className="messageBox">
            <label>Ваши предложения и жалоби</label>
            <textarea
              cols={30}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            ></textarea>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRateSending();
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
