import React from "react"
import {Nav, DivNav} from "../Styles"
import {Link} from "react-router-dom"



const Navbar =()=>{

	return <Nav>
		<DivNav>
			<Link to="/" style={{textDecoration: "none", color:"white"}}>
				<h1>Jose Luis Rangel</h1>
			</Link>

			<Link to="/about" style={{textDecoration: "none", color:"blue"}}>
				<h2>About</h2>
			</Link>

		</DivNav>

	</Nav>

}

export default Navbar;
