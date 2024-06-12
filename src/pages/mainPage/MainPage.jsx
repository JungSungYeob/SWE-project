import React from "react";
import MenuBar from "../../modules/menuBar/MenuBar"
import HotCoin from "../../modules/hotCoin/HotCoin";
import HotArticle from "../../modules/hotArticle/HotArticle";
import Favorite from "../../modules/favorite/Favorite";
import CoinNews from "../../modules/coinNews/CoinNews";

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
                <div className={cx("grid-item")}>
                    <HotArticle/>
                </div>
                <div className={cx("grid-item")}>
                    <Favorite/>
                </div>
                <div className={cx("grid-item")}>
                    <CoinNews/>
                </div>
            </div>
        </div>
    )
}

export default MainPage