import React, { useEffect, useState, useRef} from "react";
import style from "./ViewWidth.module.css";

const ViewWidth = () => {

  const [dimension, setDimension] = useState([{
    vhValue: 0,
    svhVlaue: 0,
    lvhValue: 0,
    dvhVlaue: 0,
  }]);
  const vhRef = useRef();
  const svhRef = useRef();
  const lvhRef = useRef();
  const dvhRef =useRef();

  const dimensionHandler = () => {
      const vhValue = vhRef.current?.offsetWidth;
      const svhVlaue = svhRef.current?.offsetWidth;
      const lvhValue = lvhRef.current?.offsetWidth;
      const dvhVlaue = dvhRef.current?.offsetWidth;
      const obj ={
        vhValue,
        svhVlaue,
        lvhValue,
        dvhVlaue
      }
      setDimension(obj);
      console.log(dimension)
  }

  useEffect(() => {
    dimensionHandler();
    window.addEventListener("resize", dimensionHandler);

    return () => {
      window.removeEventListener("resize", dimension)
    }
  }, [])
    return(
        <section className={style.container}>
        <div className={[style.box, style.typewriter, style['box-1']].join(' ')} ref={vhRef}>
          <span>
            vw : {dimension.vhValue}
          </span>
        </div>
        <div className={[style.box, style['box-2']].join(' ')} ref={svhRef}>
          <span>
           svw : {dimension.svhVlaue}
          </span>
        </div>
        <div className={[style.box, style['box-3']].join(' ')} ref={lvhRef}>
          <span>
            lvw : {dimension.lvhValue}
          </span>
        </div>
        <div className={[style.box, style['box-4']].join(' ')} ref={dvhRef}>
           <span>
             dvw : {dimension.dvhVlaue}
           </span>
        </div>
        {/* <div className={[style.box, style["box-5"]].join(' ')}>
           <span>
             50%
           </span>
        </div> */}
  
      </section>
    )
}

export default ViewWidth;