import ResidentialSlider from "../ResidentialSlider/ResidentialSlider"
import style from './ResidentialComplex.module.scss'

const ResidentialComplex = () => {
  return (
    <section className={style.main}>
        <div className='container'>
            <div className={style.main__title}>
                <h2><b>Жилой комплекс</b> BROOKLYN</h2>
            </div>
            <ResidentialSlider />
            <hr />
            <h6>·Территория 1 га  ·Этажность 16  ·Высота потолков от 3.1 до 3.45  ·Начало строительства 4 квартал 2022 год</h6>
        </div>
    </section>
  )
}

export default ResidentialComplex