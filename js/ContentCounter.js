import React, { Component } from 'react';
import { OnClickButton_s, ShowCounter } from './CounterShows.js';
import styles from '../css/app.css'

export class ContentCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text1: "+",
			text2: "-",
			value: 0
		};
		this.Count = this.Count.bind(this);
	};
	Count(text){
		if(text=="+"){
			console.log(this.state.value);
			this.setState({value:this.state.value+1});
		} else if (text=="-") {
			console.log(this.state.value);
			this.setState({value:this.state.value-1});
		}
	};
	render() {
		return (
			<div>
				<div className={styles.ShowCounter}>
					<ShowCounter 
						value={this.state.value}
					/>
				</div>
				<div className={styles.OnClickButton_plus} onClick={this.Count.bind(this, this.state.text1)}>
					<OnClickButton_s 
						text={this.state.text1}
					/>
				</div>
				<div className={styles.OnClickButton_minus} onClick={this.Count.bind(this, this.state.text2)}>
					<OnClickButton_s
						text={this.state.text2}
					/>
				</div>
			</div>
		);
	};
};

