import React from "react";
import MenuBar from "../../../modules/menuBar/MenuBar";
import styled from "styled-components";

const CoinScore = styled.div`
    background-color: #D0D0D0;
    border-radius: 10px;
    height: 400px;
    width: 50%;
    margin: 20px;
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

const News = styled.div`
    background-color: #D0D0D0;
    border-radius: 10px;
    height: 60%;
    width: calc(100% - 80px);
    margin: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

const FlexBox = styled.div`
    display: flex;
`
const Container = styled.div`
    margin: 0px 30px;
    //overflow-y: auto;
`

const NewsContent = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px;
    height: 200px;
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
`

const MarketTrend = () => {
    return (
        <>
            <MenuBar></MenuBar>
            <Container>
                <FlexBox>
                    <CoinScore>
                        <span>코인지수 1</span>
                    </CoinScore>
                    <CoinScore>
                        <span>코인지수 2</span>
                    </CoinScore>
                </FlexBox>
                <div>
                    <span style={{textAlign: 'left', display: 'block', padding: '0 30px', 
                        fontWeight: 'bold', fontSize: '20px'
                    }}>뉴스</span>
                </div>
                <div>
                    <News>
                        <NewsContent>
                        <span style={{textAlign: 'left', display: 'block', 
                            fontWeight: 'bold', fontSize: '16px'
                        }}>뉴스 1</span>
                        </NewsContent>
                        <NewsContent>
                        <span style={{textAlign: 'left', display: 'block', 
                            fontWeight: 'bold', fontSize: '16px'
                        }}>뉴스 2</span>
                        </NewsContent>
                        <NewsContent>
                        <span style={{textAlign: 'left', display: 'block',
                            fontWeight: 'bold', fontSize: '16px'
                        }}>뉴스 3</span>
                        </NewsContent>
                    </News>
                </div>
            </Container>
        </>
    )
}
export default MarketTrend;