import React from "react";
import className from "classnames/bind"
import styles from "./MenuBar.module.css"

const cx = className.bind(styles)
const MenuBar = () => {
    return (
        <div className={cx("menu-bar")}>
            <div>
                <h1>KW Coin</h1>
            </div>
            <div className={cx("menu-page")}>
                <ul>
                    <li>
                        <a>코인 시세/거래</a>
                    </li>
                    <li>
                        <a>투자 내역</a>
                    </li>
                    <li>
                        <a>종목 토론 게시판</a>
                    </li>
                    <li>
                        <a>시장 동향</a>
                    </li>
                </ul>
            </div>
            <div className={cx("user-fnc")}>
                <ul>
                    <li>
                        <a>마이페이지</a>
                    </li>
                    <li>
                        <a>로그아웃</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar