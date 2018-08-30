import React,{ Component } from "react"
import Smbluck from "../smbluck/smbluck"
export default class Bigbluck extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
	} 
	render(){
		return (
			<div className="bigbluck">
					{this.delSmbluck()}
			</div>
			)
	}
	delSmbluck(){
		return this.props.msg.map((value,index) => {
				return <Smbluck msg = {value} key={index}></Smbluck>	
		})
	}
}
 