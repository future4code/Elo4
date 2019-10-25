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
padding:50px;
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
	  this.state={
		
	  }
    }
  
    render() {
      return (
        <div>
            <Categorias>
                <TituloCategorias> Categorias </TituloCategorias> 
                <ListaCates>
                    <Li onClick={() => { this.props.mudarCategoria("Saúde e Bem Estar") }}><u>Saúde e Bem Estar</u></Li>
                    <Li onClick={() => { this.props.mudarCategoria("Decoração") }}><u>Decoração</u></Li>
                    <Li onClick={() => { this.props.mudarCategoria("Brinquedos") }}><u>Brinquedos</u></Li>
					<Li onClick={() => { this.props.mudarCategoria("Todas as Categorias") }}><u>Todas as categorias</u></Li>
                </ListaCates>
            </Categorias>
        </div>
      );
    }
  }