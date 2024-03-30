import { useEdisonContext } from "@/context/EdisonContext";
import React from "react";

const FeedbackModal: React.FC = () => {
  const { modal } = useEdisonContext();

  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="feedback-inner">
        <h1 className="title">Оцените нас!</h1>
        <form>
          <div className="ratingBoxes">
            <div className="kitchenRating rating-box">
              <label>Кухня</label>
              <div>
                <i className="fa-regular fa-star kitchenStar"></i>
                <i className="fa-regular fa-star kitchenStar"></i>
                <i className="fa-regular fa-star kitchenStar"></i>
                <i className="fa-regular fa-star kitchenStar"></i>
                <i className="fa-regular fa-star kitchenStar"></i>
              </div>
            </div>
            <div className="interiorRating rating-box">
              <label>Интерьер</label>
              <div>
                <i className="fa-regular fa-star interiorStar"></i>
                <i className="fa-regular fa-star interiorStar"></i>
                <i className="fa-regular fa-star interiorStar"></i>
                <i className="fa-regular fa-star interiorStar"></i>
                <i className="fa-regular fa-star interiorStar"></i>
              </div>
            </div>
            <div className="servicesRating rating-box">
              <label>Обслуживания</label>
              <div>
                <i className="fa-regular fa-star serviceStar"></i>
                <i className="fa-regular fa-star serviceStar"></i>
                <i className="fa-regular fa-star serviceStar"></i>
                <i className="fa-regular fa-star serviceStar"></i>
                <i className="fa-regular fa-star serviceStar"></i>
              </div>
            </div>
            <div className="atmosphereRating rating-box">
              <label>Атмосфера</label>
              <div>
                <i className="fa-regular fa-star atmosphereStar"></i>
                <i className="fa-regular fa-star atmosphereStar"></i>
                <i className="fa-regular fa-star atmosphereStar"></i>
                <i className="fa-regular fa-star atmosphereStar"></i>
                <i className="fa-regular fa-star atmosphereStar"></i>
              </div>
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
