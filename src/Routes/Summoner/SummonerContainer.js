import React from "react";
import SummonerPresenter from "./SummonerPresenter";

class SummonerContainer extends React.Component{
    constructor(props){
        super(props);
        const {location : { pathname }} = props;
        console.log("summoner : ", props);
        this.state = {
            summonerData : props.location.state.summoner,
            matchData : props.location.state.match,
            error: null,
            loading: true
        }
        console.log(this.state);
    }

    componentDidMount(){
        this.setState({loading : false});
    }
    
    render(){
        const {summonerData, matchData, error, loading} = this.state;
        return <SummonerPresenter summonerData={summonerData} matchData={matchData} error={error} loading={loading} />
    }
}

export default SummonerContainer;