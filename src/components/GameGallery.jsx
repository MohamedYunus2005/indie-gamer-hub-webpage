import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function GameGallery({ screenshots }) {
    if (!screenshots || screenshots.length === 0) return null;

    return (
        <Swiper
            modules={[Navigation, Autoplay, Keyboard]}
            navigation
            keyboard={{
                enabled: true,
                onlyInViewport: true,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            className="rounded-2xl overflow-hidden"
        >
            {screenshots.map((img, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={img}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-[420px] object-cover rounded-2xl"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default GameGallery;
