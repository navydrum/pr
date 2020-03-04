import axios from "axios";

const apiRequest = axios.create({
    baseURL : "http://61.74.252.142:8000/api/",
    //baseURL : "http://203.227.22.137:8000/api/"
    //http://203.227.22.137:8000/api/matchinfo/list/summoner/%ED%83%80%EC%9E%94
    //http://61.74.252.142:8000/api/matchinfo/list/summoner/%EC%8A%88%ED%8D%BC%ED%9C%B4%EB%A8%BC
});

// export const getRotate = () => {
//     console.log("request!!");
//     apiRequest.get();
// }

export const getChamp = {
    getRotate : () => apiRequest.get("champion/rotation")
}

export const getUserInfo = {
    getSummoner : (term) => apiRequest.get("matchinfo/list/summoner/"+term)
    //getSummoner : (term) => apiRequest.get("champion/rotation")
}