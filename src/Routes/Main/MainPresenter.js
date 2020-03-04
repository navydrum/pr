import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "Components/Loader";
import RotateSection from "Components/RotateSection";
import "Components/RotateChampList.css";


const Container = styled.div`
    padding-top : 50px;
    text-align : center;
`;
const Form = styled.form`
    margin-bottom : 50px;
    
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    z-index: 4;
    height: 50px;
    margin: 0 auto;
    border-radius: 2px;
    background-color: #fff;
    margin-top: 20px;
    width : 500px;

    @media only screen and (max-width:520px)
    {
        width: 450px;
    }
`;

const Input = styled.input`
    all : unset;
    font-size : 28px;
    width : 100%;
    color : black;
`;

const MainPresenter = ({ rotateChampArr, loading, searchTerm, handleSubmit, error, updateTerm }) => loading ? 
<Loader /> 
    : 
<Container>
    <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search.." maxLength="30" value={searchTerm} onChange={updateTerm} />
    </Form>
    {rotateChampArr && rotateChampArr.length > 0 && (
        <RotateSection title="RotateChamp">
            {rotateChampArr.map((value, index) => <div key={index} className={'rotateChampArea champImg i'+value}>{value}</div>)}
        </RotateSection>
    )}
      
</Container>;

MainPresenter.propTypes = {
    rotateChampArr : PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit : PropTypes.func.isRequired,
    updateTerm : PropTypes.func.isRequired
}
export default MainPresenter;


