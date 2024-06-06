import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import axios from 'axios';
import styles from "./CoinNews.module.css";

const cx = className.bind(styles)

const CoinNews = () => {
    const newsData = [
        {
            "title": "<b>코인</b>회사 갑자기 문닫았다…내 돈은?",
            "originallink": "http://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202406050461&t=NN",
            "link": "https://n.news.naver.com/mnews/article/215/0001165310?sid=101",
            "description": "지난 달 기준 영업종료를 공식화한 가상자산 사업자는 <b>코인</b>빗, 캐셔레스트, 후오비코리아, 프로비트, 텐앤텐, 한빗코, <b>코인</b>엔<b>코인</b> 등 7곳이다. 홈페이지 폐쇄 등 영업중단을 했거나 진행 중인 사업자는 오아시스... ",
            "pubDate": "Thu, 06 Jun 2024 12:00:00 +0900"
        },
        {
            "title": "문 닫은 <b>코인</b>마켓 거래소, 고객 돈 ‘나몰라라’ 손본다",
            "originallink": "https://www.busan.com/view/busan/view.php?code=2024060614325557374",
            "link": "https://n.news.naver.com/mnews/article/082/0001273504?sid=101",
            "description": "폐업한 <b>코인</b>마켓 거래소가 고객 돈을 제대로 돌려주지 않은 것으로 나타났다. 금융당국은 영업 종료에 따른... 현재 공식적으로 영업 종료 의사를 밝힌 가상자산사업자는 △<b>코인</b>빗 △캐셔레스트 △후오비코리아... ",
            "pubDate": "Thu, 06 Jun 2024 14:34:00 +0900"
        },
        {
            "title": "'영업종료' 가상자산 사업자, 예치금·<b>코인</b> 반환은 소홀",
            "originallink": "https://view.asiae.co.kr/article/2024060619342194391",
            "link": "https://n.news.naver.com/mnews/article/277/0005428509?sid=101",
            "description": "최근 영업을 종료한 가상자산사업자 상당수가 예치금이나 위탁받은 가상자산 등 고객 자산 반환 절차를 제대로 이행하지 않은 것으로 확인됐다. 특히 올 7월 가상자산이용자보호법 시행시 규제 준수 부담이 커져... ",
            "pubDate": "Thu, 06 Jun 2024 19:34:00 +0900"
        }
    ];

    const removeHtmlTags = (text) => {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
    };

    return (
        <div className={cx("coin-news")}>
            <h3>
                주요뉴스
            </h3>
            <div className={cx("news-list")}>
                {newsData.map((news, index) => (
                    <div key={index} className={cx("news-frame")}>

                        <h3>{removeHtmlTags(news.title)}</h3>
                        <p>{removeHtmlTags(news.description)}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoinNews