import s from "./architecture.module.scss";
import React from "react";

const Architecture = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <h1>Архитектура</h1>
                    <div className={s.slider}>

                    </div>
                    <div className={s.info}>
                        <span className={s.tag}> <a>Внешний облик жилого</a> комплекса <a>BROOKLYN</a> - исполнен в американском стиле</span>
                        <br />
                        <span className={s.under_tag}>
                            <br />
                            <a>Фасад:</a> “Вентилируемый фасад” <br />
                            Корзины для кондиционерных блоков <br />
                            Клинкерный кирпич из Германии <br />
                            Широкоформатный керамогранит <br />
                            Благородные натуральные камни <br />
                            Много стекла и металла <br />
                            Панорамные окна
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Architecture;
