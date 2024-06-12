import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BoardList = styled.div`
    background-color: #D0D0D0;
    border-radius: 10px;
    height: 100%;
    width: calc(100% - 80px);
    margin: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

const BoardSection = styled.div`
    background-color: #F0F0F0;
    border-radius: 10px;
    height: ${(props) => props.height}px;
    width: calc(100% - 80px);
    padding: 20px;
    margin: 20px;
    justify-content: center;
    align-items: center;
`

const FlexBox = styled.div`
    display: flex;
`
const StyledSpan = styled.span`
    display: flex;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin: 5px 0;
    padding: 5px;
    font-size: 16px;
    padding-right: 100px;
`

const BoardDetail = () => {
    const {id} = useParams();
    return (
        <>
            <BoardList>
                <BoardSection height={50}>
                    <FlexBox>
                        <StyledSpan>게시글 제목</StyledSpan>
                        <StyledSpan>작성자</StyledSpan>
                        <StyledSpan>조회수</StyledSpan>
                    </FlexBox>
                </BoardSection>
                <BoardSection height={300}>
                    <FlexBox>
                        <span style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'right', fontWeight: 'bold'}}>수정</span>
                    </FlexBox>
                </BoardSection>
                <BoardSection height={400}>
                </BoardSection>
            </BoardList>
        </>
    )
}

export default BoardDetail;