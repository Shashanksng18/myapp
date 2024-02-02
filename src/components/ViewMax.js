import React, { useRef, useState } from "react";
import style from "./ViewHeigt.module.css";

const ViewMax = () => {

    const [change1, setChange1] = useState(false);
    const [change2, setChange2] = useState(false);
    const vibRef = useRef();
    const vwRef = useRef();
    const changeHandler = (e) => {
        e.preventDefault();
        setChange1(!change1);
        console.log(change1)
        let val = vibRef.current;
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
    return(
        <section className={style['max-container']}>
            <div className={style['box-1']} ref={vibRef}>
                <span>viewport inline and viweport block</span>
            </div>
            <button onClick={(e)=>changeHandler(e)}>showChanges</button>
            <div className={style['vw']} ref={vwRef}>
              <span>viewport width and viewport height</span>
            </div>
            <button onClick={(e) => changeHandler1(e)}>show changes</button>
        </section>
    )
}

export default ViewMax;