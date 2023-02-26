import React, { useState } from 'react';
import s from './CallBack.module.scss'
import classNames from 'classnames';

const CallBack = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className={s.callBackButtonWrapper} style={{bottom:'16%', right: '2%', zIndex:'100'}} onClick={()=>setModal(!modal)}>
        <div className={modal ? s.callBackButtonWrapperInner : classNames(s.callBackButtonWrapperInner, s.overflow_visible)}>
            <a className={ modal ? s.socialBtn : classNames(s.socialBtn , s.activeSocialIcons)} style={{background: 'rgb(191 161 6)' }} href="tel:+996557900600" >
                <span className={s.socialHoverText}>
                    Позвонить
                </span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 14.5C8.24607 13.8454 12.0005 10.5243 13.5005 7.02401C14 5.85837 11.6668 5.02441 12 4.02401C12.4995 2.52441 13.5005 0.774043 14.5005 1.02401C16.5 1.52383 17.1961 3.54418 17 4.52441C16.5 7.02401 15.1386 10.1125 12.5 13.0244C8.69702 17.2214 4.00051 18.5486 3.00026 18.0243C2 17.5 1 16.5243 1 15.0243C1 14.5243 2.13647 13.2059 3.50073 12.5243C4.50099 12.0245 5.70154 14.7993 6.5 14.5Z" stroke="white"/>
                </svg>
            </a>
            <a className={ modal ? s.socialBtn : classNames(s.socialBtn , s.activeSocialIcons)} style={{background: 'rgb(191 161 6)' }} data-toggle="modal" data-target="#messageModal">
                <span className={s.socialHoverText}>
                    Оставить заявку
                </span>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1875 0C15.9334 0 16.6488 0.303914 17.1762 0.844884C17.7037 1.38585 18 2.11957 18 2.88462V12.1154C18 12.8804 17.7037 13.6141 17.1762 14.1551C16.6488 14.6961 15.9334 15 15.1875 15H2.8125C2.06658 15 1.35121 14.6961 0.823762 14.1551C0.296316 13.6141 0 12.8804 0 12.1154V2.88462C0 2.11957 0.296316 1.38585 0.823762 0.844884C1.35121 0.303914 2.06658 0 2.8125 0H15.1875ZM16.875 4.57038L9.28575 9.15115C9.214 9.19436 9.1338 9.2207 9.05093 9.22829C8.96805 9.23587 8.88457 9.2245 8.8065 9.195L8.71425 9.15115L1.125 4.57269V12.1154C1.125 12.5744 1.30279 13.0146 1.61926 13.3392C1.93572 13.6638 2.36495 13.8462 2.8125 13.8462H15.1875C15.6351 13.8462 16.0643 13.6638 16.3807 13.3392C16.6972 13.0146 16.875 12.5744 16.875 12.1154V4.57038ZM15.1875 1.15385H2.8125C2.36495 1.15385 1.93572 1.33619 1.61926 1.66078C1.30279 1.98536 1.125 2.42559 1.125 2.88462V3.23308L9 7.98462L16.875 3.23077V2.88462C16.875 2.42559 16.6972 1.98536 16.3807 1.66078C16.0643 1.33619 15.6351 1.15385 15.1875 1.15385Z" fill="white"/>
                </svg>
            </a>   
            <a className={ modal ? s.socialBtn : classNames(s.socialBtn , s.activeSocialIcons)} style={{background: 'rgb(191 161 6)' }} href="https://www.instagram.com/accounts/login/?next=/capstroy.kg/">
                <span className={s.socialHoverText}>
                    Написать в Instagram
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.77551C8.16447 4.77551 7.34771 5.02327 6.653 5.48746C5.95829 5.95166 5.41682 6.61143 5.09708 7.38336C4.77734 8.15528 4.69368 9.00469 4.85668 9.82416C5.01969 10.6436 5.42203 11.3964 6.01284 11.9872C6.60364 12.578 7.35637 12.9803 8.17584 13.1433C8.99531 13.3063 9.84472 13.2227 10.6166 12.9029C11.3886 12.5832 12.0483 12.0417 12.5125 11.347C12.9767 10.6523 13.2245 9.83553 13.2245 9C13.2232 7.87998 12.7777 6.8062 11.9858 6.01423C11.1938 5.22226 10.12 4.77677 9 4.77551ZM9 12.1224C8.38244 12.1224 7.77874 11.9393 7.26526 11.5962C6.75178 11.2531 6.35156 10.7655 6.11523 10.1949C5.8789 9.62436 5.81707 8.99654 5.93755 8.39084C6.05803 7.78514 6.35541 7.22878 6.79209 6.79209C7.22878 6.35541 7.78514 6.05803 8.39084 5.93755C8.99654 5.81707 9.62436 5.8789 10.1949 6.11523C10.7655 6.35156 11.2531 6.75178 11.5962 7.26526C11.9393 7.77874 12.1224 8.38244 12.1224 9C12.1215 9.82783 11.7922 10.6215 11.2069 11.2069C10.6215 11.7922 9.82783 12.1215 9 12.1224ZM13.0408 0H4.95918C3.64439 0.00150699 2.38388 0.524475 1.45418 1.45418C0.524475 2.38388 0.00150699 3.64439 0 4.95918V13.0408C0.00150699 14.3556 0.524475 15.6161 1.45418 16.5458C2.38388 17.4755 3.64439 17.9985 4.95918 18H13.0408C14.3556 17.9985 15.6161 17.4755 16.5458 16.5458C17.4755 15.6161 17.9985 14.3556 18 13.0408V4.95918C17.9985 3.64439 17.4755 2.38388 16.5458 1.45418C15.6161 0.524475 14.3556 0.00150699 13.0408 0ZM16.898 13.0408C16.8968 14.0634 16.4901 15.0439 15.767 15.767C15.0439 16.4901 14.0634 16.8968 13.0408 16.898H4.95918C3.93656 16.8968 2.95614 16.4901 2.23303 15.767C1.50993 15.0439 1.10318 14.0634 1.10204 13.0408V4.95918C1.10318 3.93656 1.50993 2.95614 2.23303 2.23303C2.95614 1.50993 3.93656 1.10318 4.95918 1.10204H13.0408C14.0634 1.10318 15.0439 1.50993 15.767 2.23303C16.4901 2.95614 16.8968 3.93656 16.898 4.95918V13.0408ZM14.6939 4.22449C14.6939 4.40613 14.64 4.58368 14.5391 4.73471C14.4382 4.88573 14.2948 5.00344 14.127 5.07295C13.9591 5.14246 13.7745 5.16065 13.5963 5.12521C13.4182 5.08978 13.2546 5.00231 13.1261 4.87387C12.9977 4.74544 12.9102 4.5818 12.8748 4.40365C12.8394 4.22551 12.8575 4.04086 12.927 3.87305C12.9966 3.70524 13.1143 3.56181 13.2653 3.4609C13.4163 3.35998 13.5939 3.30612 13.7755 3.30612C14.019 3.30641 14.2524 3.40326 14.4246 3.57543C14.5967 3.74759 14.6936 3.98101 14.6939 4.22449Z" fill="white"/>
                </svg>
            </a>    
        </div>
        <button className={s.callBackButton}style={{background: 'rgb(191 161 6)' }} >
            <svg width="43" height="38" viewBox="0 0 43 38" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 9.79086 1.79086 8 4 8H27.5C29.7091 8 31.5 9.79086 31.5 12V27.5C31.5 29.7091 29.7091 31.5 27.5 31.5H27V38L19 31.5H4C1.79086 31.5 0 29.7091 0 27.5V12Z" fill="#eee"/>
                <g filter="url(#filter0_d_1209_86)">
                <circle cx="29" cy="10" r="6" fill="#C85D5D"/>
                </g>
                <defs>
                <filter id="filter0_d_1209_86" x="15" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feflood flood-opacity="0" result="BackgroundImageFix"/>
                <fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feoffset dy="4"/>
                <fegaussianblur stdDeviation="4"/>
                <fecomposite in2="hardAlpha" operator="out"/>
                <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1209_86"/>
                <feblend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1209_86" result="shape"/>
                </filter>
                </defs>
            </svg>
        </button> 
    </div> 
    );
};

export default CallBack;