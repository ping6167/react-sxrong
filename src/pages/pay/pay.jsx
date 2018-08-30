import React,{ Component } from "react"
import Bigbluck from "../../components/bigbluck/bigbluck"
import axios from "axios"
import "./pay.less"
export default class Pay extends Component {
 		constructor (props) {
 			super (props)
 			this.state = {
 				title:["借款标题","预计年利率","剩余金额","期限","进度"],
 				type:"house",
 				index:1,
 				msg:"",
 				numlist:[1,2,3,4,5,"..."],
 				mark:true
 			}
 		}
 	 render(){
 	 	return (
 	 	    <div className="pay">
 	 	    	<div className="header">
 	 	    		<div onClick={this.titleCheck.bind(this,"house")} 
 	 	    		className={this.state.type==="house"?"top":""}>房产金融专区</div>
 	 	    		<div onClick={this.titleCheck.bind(this,"car")}
 	 	    		className={this.state.type==="car"?"top":""}
 	 	    		>车贷金融专区</div>
 	 	    		<div onClick={this.titleCheck.bind(this,"new")}
 	 	    		className={this.state.type==="new"?"top":""
 	 	    		}>新手专区</div>
 	 	    	</div>
 	 	    	<div className="title">
 	 	    		<ul>
 	 	    			{this.titlelist()}
 	 	    		</ul>
 	 	    	</div>
 	 			<Bigbluck msg={this.state.msg?this.state.msg:[]}></Bigbluck>
 	 			<div className="footer">
 	 				<span className="first" onClick={this.firstPage.bind(this)}>第一页</span>
 	 				<span className="pre" onClick={this.prePage.bind(this)}>上一页</span>
 	 				<span className="numlist">
 	 					{this.delNumber()}
 	 				</span>
 	 				<span className="next" onClick={this.nextPage.bind(this)}>下一页</span>
 	 				<span className="next" onClick={this.endPage.bind(this)}>最后一页</span>
 	 			</div>
 	 	    </div>
 	 		)
 	 }
 	 	firstPage(){
 	 		this.setState({
 	 			index:1,
 	 			numlist:[1,2,3,4,5,"..."]
 	 		})
 	 		let url="/data/"+this.state.type+"1.json"
 	 		this.getMsg(url)
 	 	}
 	 	prePage(){
 	 		//跟新减一
 	 		let index = this.state.index-1 < 1?1:this.state.index-1
 	 		this.setState({
 	 			index,
 	 			mark:false
 	 		})
 	 		console.log("减少",this.state.index)
 	 		//跟新numlist
 	 		let arr = this.state.numlist
 	 		for(let i = 0;i<arr.length;i++){
 	 			arr[i]--
 	 		}
 	 		if(this.state.index-1<=19){
 	 			arr[arr.length-1]="..."
 	 		}
 	 		if(this.state.index<4){
 	 			console.log(11111)
 	 			this.setState({
 	 				numlist:[1,2,3,4,5,"..."]
 	 			})
 	 			return 
 	 		}
 	 		this.setState({
 	 			numlist:arr
 	 		})
 	 		let index1 = this.state.index-1<1?1:this.state.index-1
 	 		let url="/data/"+this.state.type+index1+".json"
 	 		this.getMsg(url)
 	 	}
 	 	nextPage(){
 	 		// 下表加一
 	 		let index = this.state.index + 1>20?20:this.state.index + 1
 	 			this.setState({
 	 					index,
 	 					mark:true
 	 					})
 	 			//如果下表大于15的话span应该显示[15,16,17,18,19,20]不变,否则每个数加一.而index继续加到20为止
 	 			if(index>16){
 	 				this.setState({
 	 					numlist:[15,16,17,18,19,20]
 	 				})
 	 			}else if(this.state.index>2){
 	 				//当index>3的时候数组除了最后一项其他都加1
 	 				//并且如果index>15的时候等于 最后一项是18
 	 				let arr = this.state.numlist
 	 				for(let i = 0;i < arr.length-1;i++){
 	 					arr[i]++
 	 				}
 	 				this.setState({
 	 					numlist:arr
 	 				})
 	 			}
 	 			console.log("结束",this.state.index)
 	 		let index1 = this.state.index+1>20?20:this.state.index+1
 	 		let url="/data/"+this.state.type+index1+".json"
 	 		this.getMsg(url)
 	 	}
 	 	endPage(){
 	 		this.setState({
 	 			index:20,
 	 			numlist:[15,16,17,18,19,20],
 	 			mark:true
 	 		})
 	 		console.log(this.state.index)
 	 		let url="/data/"+this.state.type+"20.json"
 	 		this.getMsg(url)

 	 	}
 	 delNumber(){
 	 	return this.state.numlist.map((value,index) =>{
 	 		return <span className ={
 	 			// this.state.index<=3&&(index+1==this.state.index)?"post":""+
 	 			// this.state.index >3&&index +1==3?"post":""
 	 			this.dfine(index)
 	 		} 
 	 		key={index}>{value}</span>
 	 	})
 	 }
 	 titlelist(){
 	 		return this.state.title.map((value,index) =>{
 	 			return (
 	 				<li key={index} className={"lis"+index}>{value}</li>
 	 				)
 	 		}

 	 		)
 	 }
 	 titleCheck(type){
 	 	 	let url = "/data/"+type+"1.json"
 	 		this.setState({
 	 			type
 	 		})
 	 		this.getMsg(url)
 	 }
 	getMsg(url){
 		var that =this
 		axios.get(url)
 		.then(({data}) =>{
 			console.log(data)
 			that.setState(
 				{msg:data.data}
 				)
 		})
 	}
 	componentDidMount(){
 		console.log('start11111111')
 		this.getMsg("/data/house1.json")
 	}
 	dfine(index){
 		//在不同的index时配不同的class值
 		if(this.state.index<4&&index+1===this.state.index){
 			return "post"
 		}
 		if(this.state.index<15&&this.state.index>=4&&index===2&&this.state.mark){
 			return "post"
 		}
 		if(this.state.index>=15&&this.state.index-13===index&&this.state.mark){
 			return "post"
 		}
 		if(this.state.index>17&&index===5&&this.state.mark){
 			return "post"
 		}
 		if(this.state.mark===false&&this.state.index<20&&index===this.state.index-15&&this.state.index>=18){
 			return "post"
 		}
 		if(this.state.mark===false&&this.state.index<18&&index===2&&this.state.index>=4){
 			return "post"
 		}

}
 } 




