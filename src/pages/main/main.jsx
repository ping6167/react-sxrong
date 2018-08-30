import React, { Component } from "react";
import Header from "../model/header.jsx";
import "./main.less";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		}
	}
	render() {
		return (
			<div>
				<Header></Header>
				<div className="lbt">
					<ul className="ulList" id="ulList">
						<li><img src="/pic01.jpg" alt=""/></li>
						<li><img src="/pic02.jpg" alt=""/></li>
						<li><img src="/pic03.png" alt=""/></li>
						<li><img src="/pic04.jpg" alt=""/></li>
						<li><img src="/pic01.jpg" alt=""/></li>
					</ul>
				</div>
				<div className="mark">
					<p>国资+风投 双背景实力平台</p>
					<p>
						<span>300000+</span>
						位睿智投资人之选
					</p>
					<div className="btn">注册领红包</div>
					<p className="b1">已有账号？<a href="">立即登录</a></p>
					<p className="b2">理性投资 合理配置</p>
				</div>
			</div>
		);
	}
	componentDidMount() {

		function animate(dom, json, time, callback) {
			var count = 0;
			var interval = 20;
			var allCount = time / interval;

			var nowJson = {};

			for (var i in json) {
				nowJson[i] = parseInt(getComputedStyle(dom)[i]);
			}

			var stepJson = {};

			for (var i in json) {
				stepJson[i] = (json[i] - nowJson[i]) / allCount;
			}
			var timer = setInterval(function() {
				count++;
				for (var i in json) {
					dom.style[i] = nowJson[i] + stepJson[i] * count + "px"
				}
				if (count >= allCount) {
					for (var i in json) {
						dom.style[i] = json[i] + "px"
					}
					clearInterval(timer)
					callback && callback()
				}
			}, interval)
		}

		let ulList = document.getElementById("ulList");
		let me = this

		setInterval(function() {
			me.state.num = me.state.num + 1;
			if (me.state.num > 4) {
				me.state.num= 0;
				ulList.style.left = 0
			}
			animate(ulList, {
				left: -me.state.num * 1600
			}, 2000)
		}, 4000)
	}
}

export default Main;