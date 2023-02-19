import React from 'react';
import s from './location.module.scss'

const Location = () => {
    const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.0102182985875!2d74.61234881571123!3d42.85151741191504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6383aeb06c3%3A0x7f9125f0f4e0f063!2zNDQg0YPQuy4g0JzQtdC00LXRgNC-0LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1675778174193!5m2!1sru!2skg"
    return (
        <>
            <div className={s.container}>
                <div className={s.content}>
                    <h1>Расположение</h1>
                    <div className={s.map}>
                        <iframe
                            className={s.iframe}
                            src={mapURL}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;