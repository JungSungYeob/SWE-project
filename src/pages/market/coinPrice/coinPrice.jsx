import React from "react";
import styled from "styled-components";

const CoinPriceSheet = styled.div`
    //display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);
    height: 100%;
    background-color: #D0D0D0;
    border-radius: 10px;
    padding: 20px;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const PriceGraph = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px;
    height: 400px;
    margin: 20px 0;
`;

const CoinList = styled.div`
    width: 35%;
    background-color: #F0F0F0;
    border-radius: 10px;
    height: 800px;
    margin: 20px;
    padding: 20px;
    overflow-y: auto; // Add scroll if list is too long
`;

const CoinListItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;
    border-bottom: 1px solid #ccc;
`;

const CoinName = styled.span`
    font-weight: bold;
`;

const CoinPriceContent = styled.span`
    color: #333;
`;

const FlexBox = styled.div`
    display: flex;
`
const HeaderBox = styled.div`
width: 100%;
padding-bottom: 10px;
//border-bottom: 1px solid #000;
margin-bottom: 10px;

span {
    display: block;
    text-align: left;
    font-weight: bold;
    margin: 5px 0;
    font-size: 20px;
}
`

const CoinPrice = () => {
    const coins = [
        { name: "Coin 1", price: "현재가 1" },
        { name: "Coin 2", price: "현재가 2" },
        { name: "Coin 3", price: "현재가 3" },
        { name: "Coin 4", price: "현재가 4" },
        { name: "Coin 5", price: "현재가 5" },
        { name: "Coin 6", price: "현재가 6" },
        { name: "Coin 7", price: "현재가 7" },
        { name: "Coin 8", price: "현재가 8" },
        { name: "Coin 9", price: "현재가 9" },
    ];

    return (
        <>
            <CoinPriceSheet>
                <HeaderBox>
                    <span>코인 이름</span>
                    <hr />
                    <span>현재 가격</span>
                </HeaderBox>
                <FlexBox>
                    <LeftContainer>
                        <PriceGraph />
                        <PriceGraph />
                    </LeftContainer>
                    <CoinList>
                        {coins.map((coin, index) => (
                            <CoinListItem key={index}>
                                <CoinName>{coin.name}</CoinName>
                                <CoinPriceContent>{coin.price}</CoinPriceContent>
                            </CoinListItem>
                        ))}
                    </CoinList>
                </FlexBox>
            </CoinPriceSheet>
        </>
    );
};

export default CoinPrice;
