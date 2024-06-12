import React, { useEffect, useState } from "react";
import MenuBar from "../../../modules/menuBar/MenuBar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const BoardList = styled.div`
    background-color: #D0D0D0;
    border-radius: 10px;
    height: 100%;
    width: calc(100% - 80px);
    margin: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    span {
        display: block;
        text-align: left;
        font-weight: bold;
        margin: 5px 0;
        font-size: 16px;
    }
`

const BoardSection = styled.div`
    display: flex;
    color: #DD1111;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 50px;
    border-radius: 5px;
    
`

const CoinList = styled.div`
    width: 100%;
    background-color: #F0F0F0;
    border-radius: 10px;
    height: 90%;
    margin: 20px;
    padding: 20px;
    overflow-y: auto; // Add scroll if list is too long
`;

const CoinListItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 20px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
`;

const CoinName = styled.span`
    font-weight: bold;
    color: #333;
`;

const CoinPriceContent = styled.span`
    color: #333;
`;

const contents = [
    { name: "게시글 제목 1", view: "1" },
    { name: "게시글 제목 2", view: "2" },
    { name: "게시글 제목 3", view: "3" },
    { name: "게시글 제목 4", view: "4" },
    { name: "게시글 제목 5", view: "5" },
    { name: "게시글 제목 6", view: "6" },
    { name: "게시글 제목 7", view: "7" },
    { name: "게시글 제목 8", view: "8" },
    { name: "게시글 제목 9", view: "9" },
];

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;


const PageButton = styled.button`
    margin: 0 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #DD1111;
    color: white;
    cursor: pointer;
    &:disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`;

const Board = () => {
    const [currentPage, SetCurrentPage] = useState(1);
    const listPerPage = 5;
    const indexOfLastItem = currentPage * listPerPage;
    const indexOfFirstItem = indexOfLastItem - listPerPage;
    const currentItems = contents.slice(indexOfFirstItem, indexOfLastItem);
    const navigate = useNavigate();

    const totalPages = Math.ceil(contents.length / listPerPage);
    const handlePrevPage = () => {
        SetCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
    const handleNextPage = () => {
        SetCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    }

    return (
        <>
            <MenuBar></MenuBar>
            <BoardList>
                <BoardSection>
                    <CoinList>
                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 7px 10px 20px'}}>
                            <span>게시글 제목</span><span>조회수</span>
                        </div>
                        {currentItems.map((content, index) => (
                            <CoinListItem key={index} onClick={()=>navigate(`/board/${indexOfLastItem - listPerPage + index + 1}`)}>
                                <CoinName>{content.name}</CoinName>
                                <CoinPriceContent>{content.view}</CoinPriceContent>
                            </CoinListItem>
                        ))}
                        <Pagination>
                            <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
                                &lt;
                            </PageButton>
                            <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                                &gt;
                            </PageButton>
                        </Pagination>
                    </CoinList>
                </BoardSection>
            </BoardList>
        </>
    )
}
export default Board;  