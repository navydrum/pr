import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    
    background-color: rgba(20, 20, 20, 0.5);
    z-index: 10;
    back-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); 
`;

const List = styled.ul`
    display : flex;
    &:hover{
        background-color : black;
    }
`;

const Item = styled.li`
    width:80px;
    height:50px;
    text-align:center;
    border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content: center;
`;
export default withRouter(({location : {pathname}}) => (
    <Header>
        {console.log(pathname)}
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">홈</SLink>
            </Item>
            <Item current={pathname === "/champAnalyze"}>
                <SLink to="/champAnalyze">챔피언분석</SLink>
            </Item>
            <Item current={pathname === "/statistic"}>
                <SLink to="/statistic">통계</SLink>
            </Item>
            <Item current={pathname === "/ranking"}>
                <SLink to="/ranking">랭킹</SLink>
            </Item>
            <Item current={pathname === "/community"}>
                <SLink to="/community">커뮤니티</SLink>
            </Item>
        </List>
    </Header>
));


// const HeaderC = (props) => (
//         <Header>
//             <List>
//                 <Item current={true}>
//                     <SLink to="/">Movies</SLink>
//                 </Item>
//                 <Item current={true}>
//                     <SLink to="/tv">TV</SLink>
//                 </Item>
//                 <Item current={true}>
//                     <SLink to="/search">Search</SLink>
//                 </Item>
//             </List>
//         </Header>
 
// );

// export default withRouter(HeaderC);    //withRouter를 삭제하면 (export default HeaderC; ) props가 없어짐.. 