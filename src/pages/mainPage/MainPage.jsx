import React from "react";
import MenuBar from "../../modules/menuBar/MenuBar"
import HotCoin from "../../modules/hotCoin/HotCoin";

import styles from "./MainPage.module.css"
import className from "classnames/bind"

const cx = className.bind(styles)

const MainPage = () =>{
    return(
        <div>
            <MenuBar/>
            <div className={cx("grid-container")}>
                <div className={cx("grid-item")}>
                    <HotCoin/>
                </div>
                <div className={cx("grid-item")}></div>
                <div className={cx("grid-item")}></div>
                <div className={cx("grid-item")}></div>
            </div>
        </div>
    )
}

export default MainPage