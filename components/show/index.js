import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import styled from "styled-components";

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export default function Show({ menu, autoTime }) {
    return (
        <SlideWrapper>
            <Swiper modules={[Autoplay, EffectFade]} autoplay={{ delay: autoTime }} effect={"fade"} allowTouchMove={false}>
                {shuffle(menu).map((item) => {
                    if (item.properties.cover_img?.files?.length) {
                        return (
                            <SwiperSlide key={item.id}>
                                <img src={item.properties.cover_img.files[0]?.file.url} alt="show-image" />
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </SlideWrapper>
    );
}

const SlideWrapper = styled.div`
    margin: -2rem -2rem;
    background: #000;
    width: calc(100% + 4rem);
    height: calc(100% + 4rem);

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;
