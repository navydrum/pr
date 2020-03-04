import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    margin-top : 30px;
    :not(:last-child){
        margin-bottom : 50px;
    }
`;

const Title = styled.span`
    font-size : 16px;
    font-weight : 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill,82px);
    grid-gap: 5px;
    margin-left: 85px;
`;

//children 은 react prop

const RotateSection = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

RotateSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array
    //children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default RotateSection;