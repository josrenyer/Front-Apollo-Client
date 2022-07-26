import React from "react"
import {ContainerCard, AboutTitle} from "../Styles"


function About() {

    return <ContainerCard>
        <AboutTitle>
           <h2>Sobre el Proyecto:</h2>
        </AboutTitle>
        <div>
            <p>Este proyecto fue realizado con Html, Css y el lenguaje de Programacion Javascript, Mediante la libreria React</p>
            <br/>
            <br/>
            <h3>Tecnologia adicionales:</h3>
            <br/>
            <p>Apollo: El mismo nos facilita un cliente para realizar consultas a las api-graphql</p>
            <br/>
            <p>React-router-dom: Libreria que nos facilita instancias para generar rutas</p>
            <br/>
            <br/>
            <h3>Objetivo:</h3>
            <br/>
            <p>La aplicación debe traer datos de un personaje al azar utilizando la API GraphQL de rick and morty. El usuario debe ser capaz de generar tantos personajes como desee, y, además, mantener un historial de los personajes que aparecieron previamente, con la posibilidad de ver de nuevo los datos de un personaje que ya ha aparecido.
            </p>
            <br/>
            <br/>
            <h3>Documentacion</h3>
            <br/>
            <p>La documentacion de como fue realizado el proyecto esta disponible en el siguiente enlace</p>
            <br/>
            <a href="https://github.com/josrenyer/RickAndMorty-Random/blob/main/README.md" rel="noreferrer" target="_blank"><p>Documentacion en Github</p></a>
            <br/>
        </div>


  </ContainerCard>
  
}

export default About;
