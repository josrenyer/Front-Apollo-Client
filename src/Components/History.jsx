import React  from "react"
import {HCenter, ConatinerHis, ContentsHis, HCardDiv, ImgHis, ButtonHis} from "../Styles"


const History =({data, setear})=>{


 const handleHistory=(e)=>{

 	const busqueda=data.findIndex(r=>r.id===e.id)

 	setear(busqueda)

 	window.scrollTo(0, 0)
  }

		return <ConatinerHis>
			<HCenter>History</HCenter>
			{data.map(e=>(	
			<HCardDiv key={e.id}>
				<div>
					<ImgHis src={e.image} width="80px"/>
				</div>
				<ContentsHis>
					<span>{e.name}</span>
					<ButtonHis onClick={()=>handleHistory(e)}>Veiw</ButtonHis>
				</ContentsHis>
				
			</HCardDiv>))}
		</ConatinerHis>

}

export default History;
				