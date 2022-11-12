import SwiperCore, { Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Thumbnail from "../thumbnail";
import styles from "./style.module.css";

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

SwiperCore.use([Autoplay, Parallax]);
export default function Show({ menu, autoTime }) {
    const SwiperConfig = {
        speed: +autoTime,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        loop: true,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        spaceBetween: 20,
        grabCursor: false,
        allowTouchMove: false,
    };

    const showItems = menu.filter((item) => item.properties.cover_img?.files?.length);
    return (
        <div className={styles.slideWrapper}>
            <Swiper {...SwiperConfig}>
                {shuffle(showItems).map((item) => (
                    <SwiperSlide key={item.id} className={styles["swiper-slide"]}>
                        <Thumbnail url={item.properties.cover_img.files[0]?.name} size={"h_800,w_800,r_12"} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
