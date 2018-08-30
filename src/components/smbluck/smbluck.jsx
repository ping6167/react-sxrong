import React,{ Component } from "react"
import { Link } from "react-router-dom"
import "./smbluck.less"
export default class Smbluck extends Component {
			constructor(props){
				super(props)
				this.state = {
					data:{}
				}
			}
	render(){
			let { logo, who , parsent , last , date , perset , btn } = this.props.msg
		return (
		<Link className="smbluck" to="/">
				<ul className="sbox">
					<li className="star"><span>{ logo }</span>
					<div>{ who }</div>
					</li>
					<li className="parsent"><span>{ parsent }</span>%</li>
					<li className="last">{ last }</li>
					<li className="date">{ date }</li>
					<li className="bar"></li>
					<li className="perset">{ perset }</li>
					<li className="btn">{ btn }</li>
				</ul>
		</Link>
		)
	}
}

