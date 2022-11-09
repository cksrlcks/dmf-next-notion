import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import Thumbnail from "../thumbnail";
import styles from "./style.module.css";

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
export default function Show({ menu, autoTime }) {
    const showItems = menu.filter((item) => item.properties.cover_img?.files?.length);
    return (
        <div className={styles.slideWrapper}>
            <Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: autoTime }} effect={"fade"} allowTouchMove={false}>
                {shuffle(showItems).map((item) => (
                    <SwiperSlide key={item.id} className={styles["swiper-slide"]}>
                        <Thumbnail url={item.properties.cover_img.files[0]?.name} size={"c_fill,h_700,w_700"} />
                        <Thumbnail url={item.properties.cover_img.files[0]?.name} size={"c_fill,h_700,w_700"} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
