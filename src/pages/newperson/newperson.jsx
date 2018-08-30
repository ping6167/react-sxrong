import React , { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../model/header.jsx";
import "./newperson.less";
export default class NewPerson extends Component {
	constructor(props){
		super(props);
		// console.log(1,props);
		this.state = {
			list: [
				{
					title:"第一步: 注册",
					text:"（验证本人手机号完成注册）",
            		img: "http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-section3-1.png"
				},
				{	
					title:"第二步: 实名认证",
					text:"（验证本人身份信息、银行卡信息完成实名认证",
            		img: "http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-section3-2.png"
				},
				{
					title:"第三步: 充值",
					text:"（选择充值方式、输入充值金额完成充值）",
            		img: "http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-section3-3.png"

				},
				{
					title:"第四步: 投资",
					text:"（输入验证码及购买金额进行投资）",
            		img: "http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-section3-5.png"

				},
				{
					title:"第五步: 提现",
					text:"（输入提现金额、提现密码方可提现至绑定银行卡）",
            		img: "http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-section3-4.png"
				}
			],
			num:0,
			idx:0
		}
	}
	// toggle(e, num){
		
	// 	if(e.currentTarget.className === "right1"){
	// 		console.log(e.target);
	// 		console.log(11)

	// 	}
	// 	if(e.currentTarget.className === "left1"){
	// 		console.log(e.target);
	// 		console.log(22)
	// 	} 

	// }
	toggle(e,num){
		var item = document.getElementsByClassName("items");
		var arr = Array.from(item);
		console.log(e.target);
		if(e.target.className === "left1"){
			console.log(1,e.target.className);
			for(var i = 0; i < arr.length; i++){
				// console.log(arr[i])
				arr[i].style.display = "none";
			}
			// num = this.state.num;
			num--;
			if(num<0){
				num = arr.length - 1;
			}
			this.setState({
				num
			})
			arr[num].style.display = "block";
		} else if (e.target.className === "right1"){
			console.log(1,e.target.className);
			for(i =0; i < arr.length; i++){
				// console.log(arr[i])
				arr[i].style.display = "none";
			}
			// num = this.state.num;
			num++;
			// console.log(1,num);
			if(num >= arr.length - 1){
				num = 0;
			}
			this.setState({
				num
			})
			// console.log(arr[num]);
			arr[num].style.display = "block";
		}
	}
	createList(){
		// console.log(1,this.state.list)
		return this.state.list.map((item,index) =>{
			return (
				<div className='items' id='item' key={index}>
					<div className="item-title">
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</div>
					<div className="item-pic">
						<img className="picture" src={item.img} alt=""/>	
					</div>
				</div>
				)
		})
	}
	render(){
		return (
			<div className="page">
				<Header></Header>
				<div className="banner"></div>
				<div className="main">
					<div className="section1">
						<div className="title">
							<img src="http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-title1.png" alt=""/>
							<h3>新手介绍</h3>
							<p>3分钟了解三信贷，走上致富路。</p>
						</div>
						<div className="con">
							<div className="tv">
								<div id="player">
									<video src="https://sxrongoss.oss-cn-hangzhou.aliyuncs.com/sxrong_video1.mp4" controls="controls"></video>
								</div>
							</div>
						</div>
					</div>
					<div className="section2">
						<div className="title">
							<img src="http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-title2.png" alt=""/>
							<h1>为什么选择三信贷</h1>
						</div>
					</div>
					<ul className="pic">
						<li className="item1"></li>
						<li className="item2"></li>
						<li className="item3"></li>
					</ul>
					<div className="footer">
						<img src="http://sxrongoss.oss-cn-hangzhou.aliyuncs.com/cdn/sxrongpc/images/xszy-title3.png" alt=""/>
						<h3 className="title">新手指南</h3>
						<div className="lunbo">
						<span className="right1" onClick={e => this.toggle(e,this.state.num)}>&gt;</span>
						<span className="left1" onClick={e => this.toggle(e,this.state.num)}>&lt;</span>
							<ul id="carousel">
								{this.createList()}
							</ul>
						</div>
					</div>
				</div> 
			</div>
			)	 
		}
	}