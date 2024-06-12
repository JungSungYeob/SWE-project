import React from "react";
import styles from "./Favorite.module.css"
import className from "classnames/bind"

const cx = className.bind(styles);

const Favorite = () => {

    const favorite_Data = [
        { coin_uid: 1, coin_name: "비트코인", coin_symbol: "BTC", current_unit_price: 10000, fluc_percent: 10.01, fluc_amount: 1000 },
        { coin_uid: 2, coin_name: "이더리움", coin_symbol: "ETH", current_unit_price: 20000, fluc_percent: -20.01, fluc_amount: -2000 },
        { coin_uid: 3, coin_name: "리플", coin_symbol: "XRP", current_unit_price: 30000, fluc_percent: 30.01, fluc_amount: 3000 },
        { coin_uid: 4, coin_name: "솔라나", coin_symbol: "SOL", current_unit_price: 40000, fluc_percent: -40.01, fluc_amount: -4000 },
        { coin_uid: 5, coin_name: "도지코인", coin_symbol: "DOGE", current_unit_price: 50000, fluc_percent: 50.01, fluc_amount: 5000 },
        { coin_uid: 6, coin_name: "리플", coin_symbol: "XRP", current_unit_price: 30000, fluc_percent: 30.01, fluc_amount: 3000 },
        { coin_uid: 7, coin_name: "솔라나", coin_symbol: "SOL", current_unit_price: 40000, fluc_percent: -40.01, fluc_amount: -4000 },
        { coin_uid: 8, coin_name: "도지코인", coin_symbol: "DOGE", current_unit_price: 50000, fluc_percent: 50.01, fluc_amount: 5000 },
    ]

    return (
        <div className={cx("hot-coin")}>
            <h3>즐겨찾기</h3>
            <table className={cx("coin-table")}>
                <thead>
                    <tr>
                        <th className={cx("column-name")}>
                            종목
                        </th>
                        <th className={cx("column-price")}>
                            시세(KRW)
                        </th>
                        <th className={cx("column-fluc")}>
                            전일대비
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {favorite_Data.slice(0,5).map((coin)=>(
                        <tr key={coin.coin_uid}>
                            <td className={cx("column-name")}>
                                <div>{coin.coin_name}</div>
                                <div className={cx("coin-symbol")} >{coin.coin_symbol}</div>
                            </td>
                            <td className={cx("column-price")}>
                                <div className={cx("coin-price",{positive: coin.fluc_percent>0,negative: coin.fluc_percent <0})}>
                                    {coin.current_unit_price.toLocaleString()}
                                </div>
                            </td>
                            <td className={cx("column-fluc")}>
                                <div className={cx("coin-fluc-percent",{positive: coin.fluc_percent>0,negative: coin.fluc_percent <0})}>
                                    {coin.fluc_percent>0?`+${coin.fluc_percent}`:`${coin.fluc_percent}`}%
                                </div>
                                <div className={cx("coin-fluc-amount",{positive: coin.fluc_percent>0,negative: coin.fluc_percent <0})}>
                                    {coin.fluc_amount.toLocaleString()}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Favorite;