import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { ContentCounter } from './js/ContentCounter';


class Main extends React.Component {
	render() {
		return (
				<ContentCounter />
		);
	};
};

ReactDOM.render(
	<Main />,
	document.getElementById("root")
);

export default Main;