import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./style.module.css";
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export default function Show({ menu, autoTime }) {
    return (
        <div className={styles.slideWrapper}>
            <Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: autoTime }} effect={"fade"} allowTouchMove={false}>
                {shuffle(menu).map((item) => {
                    if (item.properties.cover_img?.files?.length) {
                        return (
                            <SwiperSlide key={item.id} className={styles["swiper-slide"]}>
                                <img src={item.properties.cover_img.files[0]?.file.url} alt="show-image" />
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </div>
    );
}
