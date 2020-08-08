import React, { Component } from 'react';
import D3Chart from './D3Chart';

export default class ChartWrapper extends Component {
	componentWillMount() {
		new D3Chart(this.refs.chart)
	}

	render() {
		return <div ref="chart"></div>
	}
}
