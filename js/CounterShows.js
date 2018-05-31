import React, { Component } from 'react';
import styles from '../css/app.css'


export class OnClickButton_s extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
				<button className={styles.ButtonSize}>
					{this.props.text}
				</button>
		);
	};
};


export class ShowCounter extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
				<block>
					{this.props.value}
				</block>
		);
	};
};