import * as d3 from 'd3'

const MARGIN = { TOP: 10, BOTTOM: 80, LEFT: 70, RIGHT: 10 }
const WIDTH = 500 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 300 - MARGIN.TOP - MARGIN.BOTTOM;

class D3Chart {
	constructor(element, data) {
		let vis = this
		vis.data = data

		vis.g = d3.select(element)
			.append("svg")
				.attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
				.attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
			.append("g")
				.attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)
		
		vis.x = d3.scaleLinear()
			.domain([0, d3.max(vis.data, d => d.age)])
			.range([0, WIDTH])
		
		vis.y = d3.scaleLinear()
			.domain([0,d3.max(vis.data, d => d.height)])
			.range([HEIGHT, 0])

		console.log(`vis.x(6)=${vis.x(6)}`);
		console.log(`d3.max(vis.data,d => d.age)=${d3.max(vis.data,d => d.age)}`);		

		vis.update()		
	}

	update() {
		let vis = this
	
	}
}

export default D3Chart