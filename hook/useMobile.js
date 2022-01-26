import { useEffect, useState } from 'react';

const getMobileDetect = (userAgent, width) => {
    const isAndroid = Boolean(userAgent.match(/Android/i));
    const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isIE = Boolean(userAgent.match(/trident/i));
    const isSafari =
        !isIos &&
        !Boolean(userAgent.match(/chrome/i)) &&
        (Boolean(userAgent.match(/safari/i)) ||
            Boolean(userAgent.match(/Safari/i)));
    /*const isOpera = Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = Boolean(userAgent.match(/IEMobile/i));*/

    const isMobile = Boolean(
        /*isAndroid || isIos || isOpera || isWindows ||*/ width < 992
    );
    const isDesktop = !isMobile;

    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isIE,
        isSafari,
    };
};
function useMobile() {
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        setWidth(window.innerWidth);
    })
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : "";
    return getMobileDetect(userAgent, width);
}

export default useMobile;
