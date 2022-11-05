import "../styles/reset.css";
import "../styles/common.css";
import RootLayout from "./layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [autoTime, setAutoTime] = useState(2000);
    const changeSlideShowTime = function (time) {
        setAutoTime(time);
        localStorage.setItem("dmfShowPlayTime", time);
    };
    useEffect(() => {
        const initalTime = localStorage.getItem("dmfShowPlayTime");
        setAutoTime(initalTime);
    }, []);
    return (
        <RootLayout>
            <Component {...pageProps} autoTime={autoTime} changeSlideShowTime={changeSlideShowTime} />
        </RootLayout>
    );
}

export default MyApp;
