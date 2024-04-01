import {
  Banner,
  Categories,
  FeedbackModal,
  Footer,
  Products,
  SearchInput,
} from "@/components";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();
  // let tg = Telegram.WebApp;

  // useEffect(() => {
  //   if (tg.initDataUnsafe.user?.id === undefined) {
  //     navigate("/error");
  //   } else {
  //     return;
  //   }
  // }, []);

  return (
    <section className="section-home">
      <div className="container">
        <div className="home-inner">
          <Banner />
          <SearchInput />
          <Categories />
          <Products />
          <Footer />
        </div>
        <FeedbackModal />
      </div>
    </section>
  );
}

export default Home;
