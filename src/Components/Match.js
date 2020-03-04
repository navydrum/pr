import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width : 100%;
    position : relative;
    padding : 10px;
`;
//background-image : url(${props => `https://image.tmdb.org/t/p/w300${props.bgUrl}`});#a3cfec filter : blur(3px);opacity : 0.5;
const Backdrop = styled.div`
    position : absolute;
    top : 0;
    left : 0; 
    width : 100%;
    height : 100%;
    background-color: ${props => props.bgColor ==="true" ? "#a3cfec" : "#e2b6b3"};
    z-index : 0;
`;

const Content = styled.div`
    display : flex; 
    width : 100%;
    height : 100%;
`;
const GameDivider = styled.div`
    z-index : 1;
    padding-left: 10px;
`;
const GameType = styled.h3`
    font-size: 12px;
    color: black;
    margin-bottom: 10px;
    z-index: 1;
`;
const GameChamp = styled.div`
    width: 140px;
    font-size: 0;
    padding-top: 10px;
    padding-left: 10px;
    z-index: 1;
`;
const GameChampInfo = styled.div`
    padding-left: 15px;
    z-index: 1;
`;
const ChampImgArea = styled.div`
    display: inline-block;
    width: 62px;
    height: 62px;
    vertical-align: middle;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
`;
const ChampImg = styled.img`
    display: block;
    z-index: 1;
`;
const SummonerSpell = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
`;
const Spell = styled.div`
    display: block;
    width: 22px;
    height: 22px;
    margin-top: 2px;
    border-radius: 3px;
    overflow: hidden;
`;
const SummonerRune = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
`;
const Rune = styled.div`
    width: 22px;
    height: 22px;
`;
const ChampionName = styled.div`
    margin-top: 8px;
    font-size: 11px;
    color: #555;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index : 1;
`;
const KDA = styled.div`
    display: table-cell;
    height: 96px;
    vertical-align: middle;
    font-size: 14px;
    text-align: center;
    z-index: 1;
    width : 80px;
    padding-top: 10px;
    color : black;
    div{
        padding-top: 10px;
    }
`;

const Stat = styled.div`
width: 90px;
    font-size: 11px;
    text-align: center;
    line-height: 18px;
    padding-left: 20px;
    color: #555e5e;
    z-index: 1;
`;

const GameItem = styled.div`
display: table-cell;
    height: 96px;
    vertical-align: middle;
    padding-top: 20px;
    padding-left: 20px;
     z-index: 1;
`;
const GameItemList = styled.div`
width: 96px;
margin: 0 auto;
`;
const Item = styled.div`
display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-top: 2px;
    margin-right: 2px;
    overflow: hidden;
    img{
        width: 100%;
    height: 100%;
    }
`;

const WithPlayer = styled.div`
width: 300px;
    font-size: 0;
    padding-left: 20px;
    z-index: 1;
div{
    float: left;
    width: 50%;
    div{
        display: block;
    width: 80px;
    height: 25px;
    margin-left: 3px;
    padding-top: 3px;
    text-align: left;
    white-space: nowrap;
        img{
            width: 20px;
        }
        div{
            padding-left : 22px;
            font-size : 13px;
            color : black;
            margin-top: -20px;
        }
    }
}
`;

const Match = ({ id, win, data }) => (
<Container>
    <Backdrop bgColor={`${win}`}></Backdrop>
    <Content>
        <GameDivider>
            <GameType> {data.queueId === 420 ? "솔로랭크" : data.queueId === 440 ? "자유랭크" : "일반게임"}</GameType>
            <GameType> {getGameDate(data.matchInfo.gameCreation)}일 전</GameType>
            <GameType>----------</GameType>
            <GameType> {win ? "승리" : "패배"}</GameType>
            <GameType>{ msToTime(data.matchInfo.gameDuration*1000) }</GameType>
        </GameDivider>
        <GameChamp>
            <GameChampInfo>
                <ChampImgArea>
                    <ChampImg className={'rotateChampArea champImg2 i'+data.championId} ></ChampImg>
                </ChampImgArea>
                <SummonerSpell>
                    <Spell><img src="../img/testSpell.png" alt="spell1" /></Spell>
                    <Spell><img src="../img/testSpell.png" alt="spell2" /></Spell>
                </SummonerSpell>
                <SummonerRune>
                    <Rune><img src="../img/testRune.png" alt="rune1" /></Rune>
                    <Rune><img src="../img/testRune.png" alt="rune2" /></Rune>
                </SummonerRune>
                <ChampionName>{data.championId}</ChampionName>
            </GameChampInfo>
        </GameChamp>
        <KDA>
            <div>
                <span>{data.kills}</span> / <span className="text-red">{data.deaths}</span> / <span>{data.assists}</span>
            </div>
            <div>
                <span>{((data.kills + data.assists)/data.deaths).toFixed(2)}</span> 평점
            </div>
            <div>{getMultiKilled(data.largestMultiKill)}</div>
        </KDA>
        <Stat>
            <div>킬관여 <b>%</b></div>
            <div>CS <b>{data.totalMinionsKilled + data.neutralMinionsKilled}</b> ({msPerCS((data.matchInfo.gameDuration*1000), (data.totalMinionsKilled + data.neutralMinionsKilled)).toFixed(1)}/m)</div>
            <div className="match-history__match__stats__wards">
                <div className="d-inline-block tooltip tooltipstered">
                    <img src="https://poro.gg/images/icon/ward-control.svg" alt="제어와드 구매 수"></img>
                        <span>{data.visionWardsBoughtInGame}</span>
                </div>
                <div className="d-inline-block tooltip tooltipstered">
                    <img src="https://poro.gg/images/icon/ward-normal.svg" alt="와드 설치 수"></img> 
                        <span>{data.wardsPlaced}</span>
                </div>
                <div className="d-inline-block tooltip tooltipstered">
                    <img src="https://poro.gg/images/icon/ward-delete.svg" alt="와드 파괴 수"></img> 
                        <span>{data.wardsKilled}</span>
                </div>
            </div>
        </Stat>

        <GameItem className="match-history__match__column match-history__match__items">
                    <GameItemList>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[0] != "" ? <img src={getInGameItem(data)[0]} alt="처형인의 대검"></img> : ""}
                        </Item>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[1] != "" ? <img src={getInGameItem(data)[1]} alt="처형인의 대검"></img> : ""}
                        </Item>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[2] != "" ? <img src={getInGameItem(data)[2]} alt="처형인의 대검"></img> : ""}
                        </Item>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[6] != "" ? <img src={getInGameItem(data)[6]} alt="처형인의 대검"></img> : ""}
                        </Item>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[3] != "" ? <img src={getInGameItem(data)[3]} alt="처형인의 대검"></img> : ""}
                        </Item>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[4] != "" ? <img src={getInGameItem(data)[4]} alt="처형인의 대검"></img> : ""}
                            
                        </Item>
                        <Item className="match-history__match__item tooltip tooltipstered">
                            {getInGameItem(data)[5] != "" ? <img src={getInGameItem(data)[5]} alt="처형인의 대검"></img> : ""}
                        </Item>
                    </GameItemList>
            </GameItem>
            <WithPlayer>
                <div>
                    {data.matchInfo.blue.player.map(player => (
                        <div key={player.id}>
                            <a href="https://poro.gg/ko/s/kr/t%EC%9C%BCt" target="_blank">
                            <img src="http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Mordekaiser.png" alt="모데카이저" className="match-history__match__fellow__champion tooltip tooltipstered"></img>
                            <div className="match-history__match__fellow__name">{player.SummonerName}</div>
                            </a>
                        </div>))}
                </div>
                <div>
                        {data.matchInfo.red.player.map(player => (
                        <div key={player.id}>
                            <a href="https://poro.gg/ko/s/kr/t%EC%9C%BCt" target="_blank">
                            <img src="http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Mordekaiser.png" alt="모데카이저" className="match-history__match__fellow__champion tooltip tooltipstered"></img>
                                <div className="match-history__match__fellow__name">{player.SummonerName}</div>
                            </a>
                        </div>))}
                    </div>
            </WithPlayer>
    </Content>
</Container>
);

function getInGameItem(allData){
    var t = [];
    for(var i in Object.keys(allData)){
         if(Object.keys(allData)[i].startsWith("item")){
             t.push(Object.values(allData)[i]);
         }
     }
     var urlArr = [];
     if(t.length > 0){
         for(var i in t){
             var url = t[i] != 0 ? "http://ddragon.leagueoflegends.com/cdn/10.3.1/img/item/"+t[i]+".png" : "";
             urlArr.push(url);
         }
     }
     console.log(urlArr);
     return urlArr;
     
}
function msPerCS(duration, totalCS){
    var milliseconds = parseInt((duration%1000)/100)
    , seconds = parseInt((duration/1000)%60)
    , minutes = parseInt((duration/(1000*60))%60)
    , hours = parseInt((duration/(1000*60*60))%24);

    return totalCS/((hours*60) + (minutes) + (seconds/60));
}

function getGameDate(t){
    var diffDate_1 = t instanceof Date ? t :new Date(t);
    var diffDate_2 = new Date();
 
    diffDate_1 =new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 =new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));

    return diff;
}
function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    if(hours != 0){
        hours = (hours < 10) ? "0" + hours : hours;
        return hours + "시간 " + minutes + "분 " + seconds + "초"
    }else{
        return minutes + "분 " + seconds + "초 "
    }
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

function getMultiKilled(cnt){
    var totalCnt;
    if(cnt === 2){
        totalCnt = "더블킬";
    }else if(cnt === 3){
        totalCnt = "트리플킬";
    }else if(cnt === 4){
        totalCnt = "쿼드라킬";
    }else if(cnt === 5){
        totalCnt = "펜타킬";
    }else{
        totalCnt = '';
    }

    return totalCnt;
}

Match.propTypes = {
    id : PropTypes.string.isRequired,
    win : PropTypes.bool.isRequired,
    data : PropTypes.object
}

export default Match;