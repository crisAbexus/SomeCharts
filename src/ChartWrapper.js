import React, { Component } from 'react';
import D3Chart from './D3Chart';

export default class ChartWrapper extends Component {
	componentDidMount() {
		new D3Chart(this.refs.chart)
	}

	render() {
		return <div ref="chart">
			<svg width='150' height='100'>
				<circle cx='50' cy='50' r='20' fill='blue'/>
				<rect x='70' y='50' width='60' height='10' fill='purple'/>
			</svg>
		</div>
	}
}
