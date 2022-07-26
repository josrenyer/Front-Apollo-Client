import React, {useState, useEffect} from "react"
import { gql, useLazyQuery  } from '@apollo/client';
import Card from "../Components/Card.jsx"
import History from "../Components/History.jsx"
import {ContainerCard, DivButton, ButtonGene} from "../Styles"



const Character=gql`
  query character($random: [ID!]!){
    charactersByIds(ids: $random){
        id
        name
        status
        species
        gender
        origin{
          name
        }
        location{
          name
        }
        created
        image
    }
  }
`


function Home() {

  const [character, { called, loading, data }]= useLazyQuery(Character)

  console.log("data:",data, " loading:", loading, " called:", called)

  const [generator, setGenerador]=useState(Math.floor(Math.random() * 826))
  const [his, setHis]=useState({
    character:[]
  })
  const [indice, setIndice]=useState(null)



  const handle=(e)=>{
   e.preventDefault()

    character({variables:{random: generator}})

    setGenerador(Math.floor(Math.random() * 826))

    if(indice!==null){
      setIndice(null)
    }

  }

  useEffect(()=>{
    if(data){
     setHis({
      ...his,
      character:[data.charactersByIds[0],...his.character]
    })
    }
  },[data])

  console.log("his del home", his)

    return <>
        <ContainerCard>
          <Card his={his} indice={indice}/>
          <DivButton>
            <ButtonGene onClick={e=>handle(e)}>Generador</ButtonGene>
          </DivButton>
        </ContainerCard>
        {his && his.character.length > 0 ?
          <History data={his.character} setear={setIndice}/>
          :
          null
        }
    </>
  
}

export default Home;