import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Pages.module.css"
const AllPage = () => {

   
    return(
        <ul className={style.page}>
            <li >
                <NavLink to="/vh">Viewport Height</NavLink>
            </li>
            {/* <li>
                <NavLink to="/vw">Viewport Width</NavLink>
            </li> */}
            <li >
                <NavLink to="/vmax">VMax and Vmin</NavLink>
            </li>
            <li>
                <NavLink to="/vm">Viewport Inline and Viewport Block</NavLink>
            </li>
            <li>
                <NavLink to="/pvsv">Percentage V/S ViewPort</NavLink>
            </li>
        </ul>
    )
}

export default AllPage;