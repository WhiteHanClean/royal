import React from 'react';
import s from './PlanningMobile.module.scss'

const PlanningMobile = () => {
    return (
        <>
            <div className={s.container} id='planning'>
                <div className={s.planing}>
                    <h1>
                        Блок №1
                        план с 3 по 16 этажи
                    </h1>
                    <img src="/planing1.jpg" alt="planing1" />
                    <hr />
                    <h1>
                        Блок №2, №3
                        план с 3 по 16 этажи
                    </h1>
                    <img src="/planing2.jpg" alt="planing2" />
                </div>
            </div>
        </>
    );
};

export default PlanningMobile;