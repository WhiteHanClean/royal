import LandscapingSlider from "../LandscapingSlider/LandscapingSlider";
import style from "./Landscaping.module.scss";

const Landscaping = () => {
  return (
    <section className={style.main}>
      <div className="container">
        <div className={style.title}>
          <h2>Благоустройство</h2>
        </div>
        <main>
          <LandscapingSlider />
          <div className={style.main__yard}>
            <h2>МУЛЬТИЗОНАЛЬНЫЙ ЗАКРЫТЫЙ ДВОР</h2>
            <div className={style.main__yard__text}>
              <p>·60% территории будет отведено под благоустройство</p>
              <p>
                Многофункциональная детская площадка в стиле бруклинского моста
                для маленьких деток
              </p>
              <div>
                <p>Также мультизональный двор:</p>
                <p>·Для школьников</p>
                <p>·Для студентов и взрослых</p>
              </div>
              <div>
                <p>Беговые дорожки</p>
                <p>Воркаут-зона</p>
                <p>Беседки и прогулочные зоны</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Landscaping;
