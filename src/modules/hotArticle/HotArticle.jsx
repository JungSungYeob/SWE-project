import React from "react";
import className from "classnames/bind"
import styles from "./HotArticle.module.css"

const cx = className.bind(styles);

const HotArticle = () =>{
    const hotArticle_data = [
        {article_uid: 1, title: "한강 가즈아", hits: 4444},
        {article_uid: 2, title: "한강 수온", hits: 1},
        {article_uid: 3, title: "그 언젠가 나를 위해 꽃다발을 전해주던 그 소녀", hits: 99},
        {article_uid: 4, title: "하루에 4번 사랑을 말하고 8번 웃고 6번의 키스를 해줘", hits: 486},
        {article_uid: 5, title: "히히 오줌 발싸", hits: 12345}
    ]


    return(
        <div className={cx("hot-article")}>
            <h3>핫게시글</h3>
            <table className={cx("article-table")}>
                <thead>
                    <tr>
                        <th className={cx("column-uid")}>번호</th>
                        <th className={cx("column-title")}>제목</th>
                        <th className={cx("column-hits")}>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {hotArticle_data.map((article)=>(
                        <tr key={article.article_uid}>
                            <td className={cx("column-uid")}>
                                <div>
                                    {article.article_uid}
                                </div>
                            </td>
                            <td className={cx("column-title")}>
                                <div>
                                    {article.title}
                                </div>
                            </td>
                            <td className={cx("column-hits")}>
                                <div>
                                    {article.hits}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default HotArticle;