import React, { useState } from "react";
import { useEdisonContext } from "@/context/EdisonContext";
import { Rate } from "antd";

const FeedbackModal: React.FC = () => {
  const { modal } = useEdisonContext();
  const [kitchenRate, setKitchenRate] = useState(0);
  const [interioRate, setInterioRate] = useState(0);
  const [servicesRate, setServicesRate] = useState(0);
  const [atmosphereRate, setAtpmosphereRate] = useState(0);

  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="feedback-inner">
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
            <textarea cols={30} rows={5} autoComplete="off"></textarea>
          </div>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
