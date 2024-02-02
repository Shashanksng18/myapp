import React, { useEffect, useRef, useState } from "react";
import style from "./ViewHeigt.module.css";

const ViewMax = () => {

    const [change1, setChange1] = useState(false);
    const [change2, setChange2] = useState(false);
    const [dimension, setDimension] = useState([{
        width1: 0,
        height1: 0,
        widht2: 0,
        height2:0,
    }]);
    const vibRef = useRef();
    const vwRef = useRef();

    const dimensionHandler = () => {
        let val = vibRef.current;
        let width1 = vibRef.current?.offsetWidth;
        let height1 = vibRef.current?.offsetHeight;
        let widht2 = vibRef.current?.offsetWidth;
        let height2 = vibRef.current?.offsetHeight;
        const obj = {
            width1,
            height1,
            widht2,
            height2
        }
        setDimension(obj)        
    }
    const changeHandler = (e) => {
        e.preventDefault();
        setChange1(!change1);
        console.log(change1)
        let val = vibRef.current;
        dimensionHandler();
        if(!change1) {
            val.style['writing-mode'] = 'vertical-lr'
        }
        else {
            console.log('co')
            val.style['writing-mode'] = '';
        }
    }

    const changeHandler1 = (e) => {
         e.preventDefault();
         setChange2(!change2)
        let val = vwRef.current;
        if(!change2) {
            val.style['writing-mode'] = 'vertical-lr'
        }
        else {
            val.style['writing-mode'] = '';
        }
    }

    useEffect(() => {
        dimensionHandler();
        window.addEventListener("resize", dimensionHandler);
        return () => {
            window.removeEventListener('resize', dimensionHandler)
        }
    }, [])
    return(
        <section className={style['max-container']}>
            <div className={style['box-1']} ref={vibRef}>
                <span>viewport inline and viweport block</span>
                <p>Width: {dimension.width1}</p>
                <p>Height: {dimension.height1}</p>
            </div>
            <button onClick={(e)=>changeHandler(e)}>showChanges</button>
            <div className={style['vw']} ref={vwRef}>
              <span>viewport width and viewport height</span>
              <p>Width: {dimension.widht2}</p>
                <p>Height: {dimension.height2}</p>
            </div>
            <button onClick={(e) => changeHandler1(e)}>show changes</button>
        </section>
    )
}

export default ViewMax;