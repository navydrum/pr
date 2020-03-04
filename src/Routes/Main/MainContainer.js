import React from "react";
import MainPresenter from "./MainPresenter";
import { getChamp } from "apiRequest";
import { getUserInfo } from "apiRequest";

class MainContainer extends React.Component{
    state = {
        loading : true,
        rotateChampArr : null,
        searchTerm: "",
        error: null,
        summonerData : null,
        isLoaded : false
    }
    
    handleSubmit = (e) => {
        console.log("handleSubmit : ", e);
        e.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== ""){
            console.log("11111111111111111111111");
            this.searchByTerm(searchTerm);
        }
    }

    searchByTerm = async(term) =>{
        try {
            this.setState({
                loading : true
            })
            const {data : {data : summonerData}} = await getUserInfo.getSummoner(term);
            
            this.props.history.push("/summoner", summonerData);
        } catch {
            this.setState({
                error : "Can't find results.."
            })
        } finally {
            this.setState({
                loading : false
            })
        }
    }

    updateTerm = (e) => {
        const { target : { value } } = e;
        //console.log(value);
        this.setState({searchTerm : value});
    }

    async componentDidMount(){
        try {
            
            const {data :{ data : {champList : rotateChampArr } } } = await getChamp.getRotate();
            const chgArr = JSON.parse(rotateChampArr);
            this.setState({rotateChampArr : chgArr});

        } catch {
            this.setState({loading : false});
        } finally {
            this.setState({loading : false});
        }
    }

    render(){
        const { loading, rotateChampArr, error, searchTerm, isLoaded, summonerData } = this.state;
        console.log("MainState : ", this.state);
        return <MainPresenter 
            rotateChampArr={rotateChampArr} 
            loading={loading}  
            error={error}
            searchTerm={searchTerm}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            isLoaded={isLoaded}
            summonerData={summonerData}>
        </MainPresenter>;
    }
}

export default MainContainer;