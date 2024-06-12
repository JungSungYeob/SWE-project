import {React, useState} from "react";
import styled from "styled-components";
import ApexCharts from "apexcharts";
import MenuBar from "../../../modules/menuBar/MenuBar";

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
    padding: 20px;
    justify-content: center;
    align-items: center;

    span {
        display: block;
        text-align: left;
        margin: 10px;
        font-size: 16px;
        font-weight: bold;
    }
`;

const CoinList = styled.div`
    width: 35%;
    background-color: #F0F0F0;
    border-radius: 10px;
    height: 880px;
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

const CoinConclusion = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px;
    height: 600px;
    margin: 20px 0;
    width: calc(100% - 60px);
    padding: 20px;
    overflow-y: auto;
    span {
        display: block;
        text-align: left;
        font-weight: bold;
        margin: 5px 10px;
        font-size: 16px;
    }
`

const ConclusionSection = styled.div`
    display: flex;
    color: red;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: #F0F0F0;
    border-radius: 5px;
`



const OrderFormContainer = styled.div`
    background-color: #D0D0D0;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    margin: 20px auto;
    height: 70%;
`;

const Tabs = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Tab = styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: ${props => (props.active ? "red" : "black")};
    border-bottom: ${props => (props.active ? "2px solid red" : "1px solid black")};
`;

const FormSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: #E0E0E0;
    border-radius: 5px;
`;

const Input = styled.input`
    flex: 2;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
`;


const CandleStick = styled.div`
    background-color: #D0D0D0;
    border-radius: 10px;
    height: 350px;
    margin: 20px 0;
    width: 100%;
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

    const [activeTab, setActiveTab] = useState("buy");
    
    return (
        <>
            <MenuBar/>
            <CoinPriceSheet>
                <HeaderBox>
                    <span>코인 이름</span>
                    <hr />
                    <span>현재 가격</span>
                </HeaderBox>
                <FlexBox>
                    <LeftContainer>
                        <PriceGraph>
                            <span>시세 그래프</span>
                            <CandleStick>
                                
                            </CandleStick>
                        </PriceGraph>
                        <PriceGraph>
                            <span>코인 주문(시장가)</span>
                            <OrderFormContainer>
                                <Tabs>
                                    <Tab active={activeTab === "buy"} onClick={() => setActiveTab("buy")}>
                                        매수
                                    </Tab>
                                    <Tab active={activeTab === "sell"} onClick={() => setActiveTab("sell")}>
                                        매도
                                    </Tab>
                                </Tabs>
                                <FormSection>
                                    <span>주문 가능</span>
                                    <span>현재 예치금 (KWR)</span>
                                </FormSection>
                                <FormSection>
                                    <span>주문 총액(KWR)</span>
                                    <Input type="text" placeholder="0" />
                                </FormSection>
                                <Button>{activeTab === "buy" ? "매수" : "매도"}</Button>
                            </OrderFormContainer>
                        </PriceGraph>
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
                <CoinConclusion>
                    <span>코인 체결 기록</span>
                    <ConclusionSection>
                        <span>체결 시간</span>
                        <span>체결 가격</span>
                        <span>체결량</span>
                        <span>체결금액</span>
                    </ConclusionSection>
                </CoinConclusion>
            </CoinPriceSheet>
        </>
    );
};

export default CoinPrice;
