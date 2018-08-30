import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.less"

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="top">
					<div className="inner">
						<div className="tel">服务热线：400-0577-981（8:30-20:30）</div>
						<ul className="info">{this.createTop()}</ul>
					</div>
				</div>
				<div className="bottom">
					<div className="inner">
						<div className="logo">
							<img src="/logo.png" alt=""/>
						</div>
						<div className="ad">
							<img src="/gif01.gif" alt=""/>
						</div>
						<div className="nav">
							<ul id="list">{this.createBottom()}</ul>
						</div>
					</div>
				</div>

			</div>
		)
	}
	constructor(props) {
		super(props);
		let listTop = "微信 新浪 手机APP 帮助中心 注册 登录".split(" ");
		let listBottom = [
			{ 
				title: "首页", 
			    list: []
			},
			{
				title: "我要投资",
				list: [
					{
						name: "房产金融专区",
						to: "/home"
					},
					{
						name: "车贷金融专区",
						to: "/home"
					},
					{
						name: "新手",
						to: "/home"
					}
				]
			},
			{
				title: "走进三信",
				list: [
					{
						name: "关于三信",
						to: "/home"
					},
					{
						name: "三信商学院",
						to: "/home"
					},
					{
						name: "三信公益",
						to: "/home"
					}
				]
			},
			{ 
				title: "新手指引", 
			    list: []
			},
			{
				title: "信息披露",
				list: [
					{
						name: "关于我们",
						to: "/home"
					},
					{
						name: "资质荣耀",
						to: "/home"
					},
					{
						name: "运营报表",
						to: "/home"
					},
					{
						name: "审计报告",
						to: "/home"
					},
					{
						name: "数据中心",
						to: "/home"
					},
					{
						name: "动态信息",
						to: "/home"
					}
				]
			},
			{ 
				title: "我的账户", 
			    list: []
			}
		]
		listTop.reverse();
		listBottom.reverse();
		this.state = {
			listTop: listTop,
			listBottom: listBottom
		}
	}
	createBottom() {
		return this.state.listBottom.map((item, index) => {
			return  (<li key={index}  className="box" onMouseOver={this.choose.bind(this, index)} style={{ position: "relative" }}>
				<a href="">{item.title}</a>
				<ul className="navlist" style={{
					position: "absolute",
					top: 68 + "px",
					left: -10 + "px"
				}}>
				{
					item.list.map((item, index) => {
						return (
							<Link key={'k' + index} to={item.to}>
								<li>{item.name}</li>
							</Link>
						)
					})
				}
				</ul>
			</li>)

		})
	}
	choose(idx) {
		var list = document.getElementsByClassName('box');
		var ul = document.getElementsByClassName('navlist');
		Array.from(list).forEach(item => item.className = "box");
		Array.from(ul).forEach(item => item.className = "navlist");
		ul[idx].className = "cur navlist";
		list[idx].className = "active box"
	}
	createTop() {
		return this.state.listTop.map((item, index) => {
			return (<li key={index}><a href="">{item}</a></li>)
		})
	}
	componentDidMount() {
		var list = document.getElementsByClassName("box");
		var arr = Array.from(list).reverse();
		arr[0].className = "box active";
	}
}

export default Header;