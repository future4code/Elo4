import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import logo1 from "./logo1.png"

const Logo1 = styled.img `
width:18vh;
`
const Header = styled.header `
display:flex;
justify-content: space-between;
flex-direction:row;
margin-bottom:10vh;
border-bottom: 1px
align-items:center;
background-color: #fff3e0;
`
const Select = styled.select `
display:flex;
align-items:center;
width:30vh;
height:20px;
`

export class HeaderElo4 extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
            <Header>
                <Logo1 src= {logo1}/>
                <Select> 
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>
            </Header> 
            
      );
    }
  }