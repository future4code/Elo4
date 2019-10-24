import React from 'react';
import styled from 'styled-components';
import CardProduct from '../sectionProduct/cardProduct/';
import Produto from '../Produto/'

const Section = styled.div `
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-row-gap:30px;
	grid-column-gap:30px;
`

class GradeDeProdutos extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			listaDeProdutos:[
				{
					id:"001",
					name:"Vaso de barro rústico",
					price:79.90,
					url1:"https://images.unsplash.com/photo-1468531390554-9f62f9767a87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
					url2:"https://images.unsplash.com/photo-1474444417714-f5d07c4d6a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=349&q=80",
					url3:"https://images.unsplash.com/photo-1487268113661-a75c49688467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
				},
				{
					id:"002",
					name:"Moringas de barro rústico",
					price:25.50,
					url1:"https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=586&q=80",
					url2:"https://images.unsplash.com/photo-1510828998924-405b610a5eec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=870&q=80",
					url3:"https://images.unsplash.com/photo-1510828561531-05a3388f6d3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80",
				},
				{
					id:"003",
					name:"Sabonete Vegano",
					price:8.90,
					url1:"https://images.unsplash.com/photo-1561424111-c81487d25086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=736&q=80",
					url2:"https://images.unsplash.com/photo-1542038335240-86aea625b913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
					url3:"https://images.unsplash.com/photo-1542038382126-77ae2819338d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
				},
				{
					id:"004",
					name:"Cactus",
					price:19.99,
					url1:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
					url2:"https://images.unsplash.com/photo-1487190296540-b92a6b829973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
					url3:"https://images.unsplash.com/photo-1487020530383-c62abe4f9346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
				},
				{
					id:"005",
					name:"'Caixa de água'",
					price:12.50,
					url1:"https://images.unsplash.com/photo-1564419402234-e3afd30043e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
					url2:"https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=647&q=80",
					url3:"https://images.unsplash.com/photo-1553531888-a5892402adce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
				},
				{
					id:"006",
					name:"Xilofone infantil",
					price:119.90,
					url1:"https://images.unsplash.com/photo-1504484656217-38f8ffc617f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
					url2:"https://images.unsplash.com/photo-1509781827353-fb95c262fc40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
					url3:"https://images.unsplash.com/photo-1505692069463-edfaea445fcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
				},
			],
			paginaAtual: "todosOsProdutos",
			textoButton: "Produto"
		}
	}

	onClickButtonListaVoltar = () =>  {
		if(this.state.paginaAtual === "todosOsProdutos") {
		  this.setState({
			paginaAtual: "produto",
			textoButton: "Todos os Produtos"
		  })
		} else {
		  this.setState({
			paginaAtual: "todosOsProdutos",
			textoButton: "Lista de Usuários"
		  })
		}
	  }
	
	/*onChangePageProduct = (event) =>{
		return <Produto />
	}*/
	
	render(){
		return(
			<Section>
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
			</Section>
		)
	}
}

export default GradeDeProdutos;