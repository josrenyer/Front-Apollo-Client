import styled from 'styled-components';

export const Container=styled.div`
    position: relative;
    padding-bottom: 60px;
    min-height: 100vh;
`

export const Header=styled.header`
height:70px;
background:linear-gradient(30deg, blue,white);
position:fixed;
top:0;
left:0;
width:100%
`

export const Nav=styled.nav`
height:100%
`

export const DivNav=styled.div`
	height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
`

export const Main=styled.main`
    margin-top:80px;
    min-height:100vh;
`

export const FooterStyle=styled.footer`
	width: 100%;
    position: absolute;
    bottom: 0;
    background:linear-gradient(30deg, blue,white);
`

export const ContainerFoo=styled.div`
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
`

export const ContainerDiv=styled.div`
	display:flex;
	flex-wrap: wrap;
    justify-content: space-around;
    padding:5px 0px;
    font-family:sans-serif;
`

export const ContainerCard=styled.div`
    width: 80%;
    margin: 0 auto;
`

export const CardContainer=styled.div`
    border: 2px solid blue;
    border-radius:10px;
    box-shadow: 10px 5px 5px black;

    @media all and (max-width: 700px){
        margin-top:10px
    }
`
export const CardTitle=styled.div`
    padding: 7px 7px;
    h5{
        font-size:25px;
        padding:10px 0px 5px 0px;
    }
    h6{
        font-size:12px;
        padding:5px 0px;
    }
`

export const CardContents=styled.div`
    padding: 10px 7px;
    span{
        color: black;
        font-weight: bold;
    }
`

export const CardDescription=styled.div`
    display:flex;
    justify-content:space-between
`

export const HCenter=styled.h2`
    display:flex;
    justify-content:center;
`

export const ConatinerHis=styled.div`
    width: 80%;
    margin: 10px auto 20px auto;
`

export const HCardDiv=styled.div`
    display:flex;
    width:100%;
    margin-top:10px;
    border-radius:20px;
    box-shadow: 10px 5px 5px black;
`

export const ContentsHis=styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin:0px 15px;
`

export const DivButton=styled.div`
    display:flex;
    justify-content:flex-end;
    margin:20px 10px;
`

export const Img=styled.img`
    border-radius:10px;
    box-shadow: 10px 5px 5px black;
`
export const ImgHis=styled.img`
    border-radius:20px;
`

export const ButtonGene=styled.button`
    padding: 20px 50px;
    border-radius:30px;
    font-family:sans-serif;
    font-weight: bold;

    border:none;
    background:linear-gradient(30deg, blue,white);

    :hover{
       background:linear-gradient(30deg, white,blue);
       transform: translateY(-5px);
    }
`

export const ButtonHis=styled.button`
    padding:10px 30px;
    border-radius:30px;
    border:none;
    font-family:sans-serif;
    font-weight: bold;
    background:linear-gradient(30deg, blue,white);

    :hover{
       background:linear-gradient(30deg, white,blue);
    }
`

export const DivCard=styled.div`
    height:100%;
`

export const AboutTitle=styled.div`
    display:flex;
    justify-content: flex-start;
    padding:20px 0px;
`

export const CardNot=styled.div`
    padding-top:100px;
    padding-bottom:50px
`
    


    /*background-color: rgb(255, 255, 255);
    border-radius: 0.3rem;
    box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;*/