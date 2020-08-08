import * as d3 from 'd3';
const data = [20, 12, 16, 25, 20];

export default class D3chart {
  constructor(element){
    const svg = d3.select(element)
      .append('svg')
        .attr('width', 500)
        .attr('height', 500)
    data.forEach((d,i) => {
      svg.append('rect')
        .attr('x',i* 100)
        .attr('y',50)
        .attr('width', 50)
        .attr('height', 400)
        .attr('fill', 'grey')
    })
  }
}