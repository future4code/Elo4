import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Categorias = styled.nav `
background-color : #eeeeee;
width: 50vh;
height:100vh;
display:flex;
flex-direction:column;
`
const ListaCates = styled.ul `
list-style-type:none;
paddgin:50px;
`
const Li = styled.li `
margin-bottom: 10px;
`
const TituloCategorias = styled.h3 `
margin-left:10vh;
`

export class ListaCategorias extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <Categorias>
                <TituloCategorias> Categorias </TituloCategorias> 
                <ListaCates>
                    <Li><a href="#">Saúde e Bem Estar</a></Li>
                    <Li><a href="#">Decoração</a></Li>
                    <Li><a href="#">Brinquedos</a></Li>
                </ListaCates>
            </Categorias>
        </div>
      );
    }
  }