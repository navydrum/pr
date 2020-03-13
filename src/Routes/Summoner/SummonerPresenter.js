import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Match from "Components/Match";


const Container = styled.div`
    height : calc(100vh - 50px);
    width : 100%;
    position : relative;
    padding : 50px;
`;
const UserSection = styled.div`
position : absolute;
    top : 0;
    left : 0; 
    width : 100%;
    height : 100%;
`;
const Content = styled.div`
    display : flex; 
    width : 100%;
    height : 25%;
`;
const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image : url(${props => props.bgImage});
    background-position : center center;
    background-repeat: no-repeat;
    background-size: 120px 120px;
    border-radius : 5px;
    z-index : 1;
`;

const UserContent = styled.div`
    width: 70%;
    height: 100%;
`;

const SummonerID = styled.div`
    padding-top: 30px;
    font-size: 30px;
`;

const Item = styled.div`
    padding-top: 10px;
    font-size: 15px;
`;
const ItemContaitner = styled.div``;
const MatchSection = styled.div`
padding: 20px;`;
const UsedChampSection = styled.div`
    width: 30%;
    position: absolute;
    height: 100%;
    // background-color: white;
`;
const SoloRankSection = styled.div`
    width: 100%;
    height: 160px;
    border: 3px solid red;
    margin-top: 40px;
    background-color: white;
`;
const SoloImgSection = styled.div`
width: 50%;
float: left;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 160px;
    background-color: white;
    background-image : url(${props => props.bgImage});
    height: 100%;
`;
const SoloInfoSection = styled.div`
    width: 50%;
    float: left;
    height: 100%;
`;
const RankType = styled.div`
    width: 180px;
    height: 20%;
    font-weight: bold;
    font-size: 15px;
    padding-top: 30px;
    text-align: center;
    color: black;
`;

const UnRankedType = styled.div`
width: 100%;
height: 100%;
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
    background-image : url(${props => props.bgImage});
`;

const UserMatchSection = styled.div`
float: right;
width: 65%;
`;

const MoreViewMatchBtn = styled.div`
margin-top: 25px;
width: 100%;
position: relative;
padding: 10px;
`;

const picUrl = "http://lol.lvup.kr/dragontail";
const SummonerPresenter = ({summonerData, matchData, error, loading}) => loading ? <Loader /> : <Container>
    <UserSection>
        <Content>
            <Cover bgImage={summonerData.profileIconImage ? picUrl + `${summonerData.profileIconImage}` : require("../../img/noIcon.jpg")}></Cover>
            <UserContent>
                <ItemContaitner>
                    <SummonerID><span>{summonerData.name}</span></SummonerID>
                    <Item><span>레더랭킹</span></Item>
                    <Item><span>{summonerData.name}</span></Item>
                    <Item><span>{summonerData.name}</span></Item>
                </ItemContaitner>
            </UserContent>
        </Content>
        <MatchSection>
            <UsedChampSection>
                <SoloRankSection>
                    {summonerData.sol_rank === "" ? <UnRankedType bgImage={require("../../img/unRanked.png")}></UnRankedType> : <><SoloImgSection bgImage={require("../../img/silver_3.png")}></SoloImgSection>
                    <SoloInfoSection>
                        <RankType>솔로랭크</RankType>
                        <RankType>{summonerData.sol_tier} {summonerData.sol_rank}</RankType>
                        <RankType>
                        <span>{summonerData.sol_leaguePoints} LP  </span>
                                <span>{summonerData.sol_wins}승 / {summonerData.sol_losses}패</span>
                        </RankType>
                    </SoloInfoSection></>}
                    
                </SoloRankSection>
                <SoloRankSection>
                    {summonerData.frex_rank === "" ? <UnRankedType bgImage={require("../../img/unRanked.png")}></UnRankedType> : <><SoloImgSection bgImage={require("../../img/silver_3.png")}></SoloImgSection>
                    <SoloInfoSection>
                        <RankType>자유 5:5 랭크</RankType>
                        <RankType>{summonerData.frex_tier} {summonerData.frex_rank}</RankType>
                        <RankType>
                        <span>{summonerData.frex_leaguePoints} LP  </span>
                                <span>{summonerData.frex_wins}승 / {summonerData.frex_losses}패</span>
                        </RankType>
                    </SoloInfoSection></>}
                    
                </SoloRankSection>
            </UsedChampSection>
            <UserMatchSection>
                <Section title="matchInfo">
                    {matchData.map(match => (<Match 
                                        key={match.id } 
                                        id={ match.summonerName } 
                                        win = { match.win }
                                        data = { match }
                                       />))}
                </Section>
                <MoreViewMatchBtn>dddddddd</MoreViewMatchBtn>
            </UserMatchSection>
        </MatchSection>
    </UserSection>
</Container>;

SummonerPresenter.propTypes = {
    summonerData : PropTypes.object,
    matchData: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
    // `https://image.tmdb.org/t/p/original${summonerData.profileIconImage}` :  require("../../img/noIcon.jpg")} />
}

export default SummonerPresenter;


