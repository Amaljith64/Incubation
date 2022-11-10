import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function SideBar() {
	const Navigate=useNavigate()
  return (
	
	<div className="deznav">
	<div className="deznav-scroll">
		<ul className="metismenu" id="menu">
			<li ><a className="has-arrow ai-icon" aria-expanded="false" >
			<i className="flaticon-025-dashboard"></i>
					<span className="nav-text"onClick={()=> Navigate('/adminhome')} >NEW REQUEST</span>
					</a>
			</li>
			<li ><a className="has-arrow ai-icon" aria-expanded="false" >
					<i className="flaticon-025-dashboard"></i>
					<span className="nav-text" onClick={()=> Navigate('/approved')}>APPROVED</span>
				</a>
			</li>
			<li><a className="has-arrow ai-icon"  aria-expanded="false" onClick={()=> Navigate('/declined')}>
					<i className="flaticon-025-dashboard"></i>
					<span className="nav-text">DECLINED</span>
				</a>
			</li>
			<li><a className="has-arrow ai-icon"  aria-expanded="false" onClick={()=> Navigate('/slots')}>
					<i className="flaticon-025-dashboard"></i>
					<span className="nav-text">SLOT</span>
				</a>
			</li>
			<li><a className="has-arrow ai-icon"  aria-expanded="false" onClick={()=> Navigate('/alloted')}>
					<i className="flaticon-025-dashboard"></i>
					<span className="nav-text">ALLOTED</span>
				</a>
			</li>
		
		</ul>
		
	</div>
</div>
  )
}

export default SideBar