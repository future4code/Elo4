import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const StyledCardActionArea = styled(CardActionArea)`
	width:200px;
	height:250px;
`
const StyledCard = styled(Card)`
	width:200px;
`

class CardProduct extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<StyledCard>
				<StyledCardActionArea >
					<CardMedia 
						image="https://picsum.photos/id/237/200/200"
						title="Vaso de barro rústico"
					/>
					<CardContent>
						<Typography 
							gutterBottom variant="h5" 
							component="h2"
						>
							Nome do Produto
						</Typography>
						<Typography
							component="h4"
						>R$100.00
						</Typography>
					</CardContent>
      			</StyledCardActionArea >
				<Button variant="contained" size="large" color="primary" >
					Comprar
				</Button>
			</StyledCard>
		);
	}
}

export default CardProduct;