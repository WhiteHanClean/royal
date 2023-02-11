import LandscapingSlider from '../LandscapingSlider/LandscapingSlider'
import LandscapingYard from '../LandscapingYard/LandscapingYard'
import style from './Landscaping.module.scss'

const Landscaping = () => {
  return (
    <section className={style.main}>
        <div className="container">
            <div className={style.title}>
                <h2>Благоустройство</h2>
            </div>
            <main>
                <LandscapingSlider />
                <LandscapingYard />
            </main>
        </div>
    </section>
  )
}

export default Landscaping