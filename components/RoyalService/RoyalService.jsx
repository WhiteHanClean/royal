import Image from "next/image";
import React from "react";
import s from "./RoyalService.module.scss";

const RoyalService = () => {
  return (
    <div className={s.royal_service}>
      <div className={s.royalService}></div>
      <div className={s.bc_service}>
        <div className={s.royal_logo}>
          <Image src="/logoSecond.png" width={282} height={257} alt="logo" />
        </div>

        <div className={s.royal_service_content}>
          <div className={s.content_item}>
            <Image
              className={s.content_img0}
              src="/secondStrana.png"
              width={123}
              height={57}
              alt="logo"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </div>
          <div className={s.content_item}>
            <Image
              className={s.content_img1}
              src="/Group.png"
              width={79}
              height={79}
              alt="logo"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </div>
          <div className={s.content_item}>
            <Image
              className={s.content_img2}
              src="/zdanie.png"
              width={73}
              height={73}
              alt="logo"
            />

            <p>На рынке Кыргызстана с 2012 года</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalService;
