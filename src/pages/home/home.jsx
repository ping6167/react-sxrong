import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './home.less';

class Home extends Component {
  constructor(props) {
	super(props);
	this.state = {
		list: [
			{ name: "登录", img: "01.png", path: "/login" },
			{ name: "注册", img: "02.png", path: "/register" },
			{ name: "主页", img: "03.png", path: "/main" },
			{ name: "备注", img: "04.png", path: "/home" },
			{ name: "备注", img: "05.png", path: "/home" },
			{ name: "备注", img: "06.png", path: "/home" }
		]
	}
  }
  createList() {
  	return this.state.list.map((item, index) => (
  		<li key={index}>
  			<Link to={item.path}>
  				<div className="content">
					<img src={'icons/' + item.img} alt=""/>
					<p> 
						<span>{item.name}</span>
					</p>
				</div>
  			</Link>
  		</li>
  	))
  }
  render() {
    return (
      <div className="homePage">
      	<ul className="list">{this.createList()}</ul>
      	<canvas id="canvas"></canvas>
      </div>
    );
  }
  componentDidMount() {

  	function show() {
  		let list = document.getElementsByClassName("content");
  		for (let i = 0; i < list.length; i++) {
  			list[i].style.opacity = 1;
  		}
  	}

	let flicker = (function() {
	
		let canvas = document.getElementById("canvas");
		let ctx = canvas.getContext("2d");

		// 设置画布宽高
		let width = document.documentElement.clientWidth;
		let height = document.documentElement.clientHeight;
		canvas.height = height;
		canvas.width = width;
		canvas.style.backgroundColor = "#56BC8A";

		// 文本定位
		let positionX = width / 97;
		let positionY = 250;

		// 圆点状态
		let radius = 7;
		let transparent = 1;
		let count = 0;

		let idx = 0;
		let extract = 0;
		let renderArr_1 = [];
		let renderArr_2 = [];
		let stepArr = [];
		let randomAdd = [];

		let _C = {
			
			// 绘制
			draw: function() {
				this.init();
				let me = this;
				setInterval(function() {
					idx++;
					positionY = 250;
					ctx.clearRect(0, 0, 3000, 3000);
					switch (true) {
						case idx < 200:			
							me.render("firstStage");
							break;
						case idx < 210:
							me.render("secondStage");
							break;
						case idx < 220:
							me.render("thirdStage");
							break;
						default:
							me.render("fourthStage");
					}
				}, 20)
			},

			// 模板
			template: function() {
				let arr = 
					`0000000000000000000000000000000000770000000000000000000000000000000000000000000000000000000000000#
					0000000000000077007000077000077700770070000007700000770000000077000077000777007700077000000000000#
					0000000000007707777700777770770770777700000077070077077000007777707707707707707700077000000000000#
					0000000000007707700707700770700000777000000077700070007000007700700007707770000770770000000000000#
					0000000000007007700707700770700000777700000007777070007000007777707770700777700770770000000000000#
					0000000000007007700707700770770770770770000070077077077000007700707707707700700077770000000000000#
					0000000000007007700700777700077700770770000077770007770000000777000770700777000077700000000000000#
					0000000000000000000000000000000000000000000000000000000000000000000000000000000077000000000000000#
					0000000000000000000000000000000000000000000000000000000000000000000000000000007777000000000000000#`.split(/#\s+/);
				return arr;
			},
					
			// 初始化状态数组
			init: function() {
				let arr = this.template();
				for (let i = 0; i < arr.length; i++) {
					for (let j = 0; j < arr[i].length; j++) {
						if (arr[i][j] === "7") {
							count++
							renderArr_1.push([positionX * j, positionY, 7, Math.random() * 2]);
						}
					}
					positionY += 20;
				}
				for (let i = 0; i < count; i++) {
					let randomX = Math.random() * (width - 50) + 25;
					let randomY = Math.random() * (height - 50) + 25;
					let randomR = Math.random() * 3 + 1;
					let randomA = Math.random() + 0.5;
					renderArr_2.push([randomX, randomY, randomR, randomA]);
				}
				for (let i = 0; i < count; i++) {
					let stepX = (renderArr_2[i][0] - renderArr_1[i][0]) / 10;
					let stepY = (renderArr_2[i][1] - renderArr_1[i][1]) / 10;
					let stepR = (renderArr_2[i][2] - renderArr_1[i][2]) / 4;
					stepArr.push([stepX, stepY, stepR]);
				}
				for (let i = 0; i < count; i++) {
					randomAdd.push([Math.random() - 0.5, Math.random() - 0.5]);
				}
			},
			
			// 渲染
			render: function(type) {
				for (let i = 0; i < renderArr_1.length; i++) {
					ctx.beginPath();
					let result = this.strategy.use(type, i);
					ctx.arc(renderArr_1[i][0] + result[0], renderArr_1[i][1] + result[1], renderArr_1[i][2], 0, Math.PI * 2, true);
					ctx.closePath();
					ctx.fill();
					ctx.fillStyle = "white";
					ctx.globalAlpha = transparent;
				}
			},

			// 渲染策略
			strategy: (function() {
				let _S = {
					firstStage: function() {
						let randomX = Math.random() - 3;
						let randomY = Math.random() - 3;
						return [randomX, randomY];
					},
					secondStage: function(index) {
						renderArr_1[index][2] += renderArr_1[idx][3];
						transparent = Math.random() + 0.2;
						return [0, 0, radius, transparent];
					},
					thirdStage: function(index) {
						renderArr_1[index][0] += stepArr[index][0];
						renderArr_1[index][1] += stepArr[index][1];
						renderArr_1[index][2] += stepArr[index][2];
						if (renderArr_1[index][2] < 0.5) {
							renderArr_1[index][2] = 0.5
						}
						show();
						return [0, 0];
					},
					fourthStage: function(index) {
						if (idx % 110 === 0) {
							for (let i = 0; i < count; i++) {
								extract++;		
								if (extract % 2 === 0) {
									randomAdd.splice(i, 1, [Math.random() - 0.5 , Math.random() - 0.5]);
								}
							}
						}
						extract++;
						transparent = 0.7;
						renderArr_1 = renderArr_2;
						renderArr_1[index][0] += randomAdd[index][0]; 
						renderArr_1[index][1] += randomAdd[index][1]; 
						return [0, 0];
					}
				}	
				return {
					use: function(strategyType) {
						let args = [].slice.call(arguments, 1)
						return _S[strategyType].apply(_S, args);
					}
				}
			})()
		}

		return {
			exec: function(commandType) {
				let args = [].slice.call(arguments, 1);
				_C[commandType].apply(_C, args);
			}
		}
	})();	

	flicker.exec("draw");
  }
}

export default Home;
