import React, { useEffect, useRef, useState } from "react";
import style from "./Pages.module.css"
const Vmax = () => {

    const dvalue = useRef();
    const [dimenstion, setDimenstion] = useState([{
        width: 0,
        height: 0,
    }]);

    const dimensionHandler = () => {
        console.log(dvalue)
        const value = dvalue.current;
        let width = value.offsetWidth;
        let height = value.offsetHeight;
        const dobj = {
            width,
            height,
        }
        setDimenstion(dobj)
        console.log(width);
        console.log(height)
    }
    
    useEffect(() => {
        dimensionHandler();
        window.addEventListener('resize', dimensionHandler);

        return () => {
            window.removeEventListener("resize", dimensionHandler)
        }
    }, [])
    return(
        <section className={style['max-container']}>
          <div className={style["max-and-min"]} ref={dvalue}>
            <h1>Width</h1> <span>{dimenstion.width}</span>
            <h1>Height</h1> <span>{dimenstion.height}</span>
          </div>
        </section>
    )
}

export default Vmax;