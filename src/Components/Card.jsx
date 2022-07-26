import React from "react"
import {ContainerDiv, CardContainer, CardTitle, CardContents, CardDescription, Img, DivCard, CardNot} from "../Styles"


const Card =({ his, indice})=>{


	if(his.character && his.character.length > 0){
		if(indice===null){
		return <>
			<ContainerDiv key={his.character[0].id}>
				<div>
					<Img src={his.character[0].image}/>
				</div>
				<CardContainer>
					<DivCard>
						<CardTitle>
							<h5>{his.character[0].name}</h5>
							<h6>Character id: {his.character[0].id}</h6>
						</CardTitle>
						<hr/>
						<CardContents>
							<CardDescription>
								<span>Status:</span> {his.character[0].status}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Species:</span> {his.character[0].species}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Gender:</span> {his.character[0].gender}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Origin:</span> {his.character[0].origin.name}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Location:</span> {his.character[0].location.name}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Created at:</span> {his.character[0].created}
							</CardDescription>
						</CardContents>
					</DivCard>
				</CardContainer>
			</ContainerDiv>
	</>
	}else{
		return <>
			<ContainerDiv key={his.character[indice].id}>
				<div>
					<Img src={his.character[indice].image}/>
				</div>
				<CardContainer>
					<div>
						<CardTitle>
							<h5>{his.character[indice].name}</h5>
							<h6>Character id: {his.character[indice].id}</h6>
						</CardTitle>
						<hr/>
						<CardContents>
							<CardDescription>
								<span>Status:</span> {his.character[indice].status}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Species:</span> {his.character[indice].species}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Gender:</span> {his.character[indice].gender}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Origin:</span> {his.character[indice].origin.name}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Location:</span> {his.character[indice].location.name}
							</CardDescription>
							<hr/>
							<CardDescription>
								<span>Created at:</span> {his.character[indice].created}
							</CardDescription>
						</CardContents>
					</div>
				</CardContainer>
			</ContainerDiv>
	</>
	}
	}else{
		return<CardNot>
			<h2>No se han cargado ningún personaje</h2>
		</CardNot>
	}
}

export default Card;