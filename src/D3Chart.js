import * as d3 from 'd3';
const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json'

export default class D3chart {
  constructor(element) {
    const svg = d3.select(element)
      .append('svg')
        .attr('width', 800)
        .attr('height', 500)
    d3.json(url).then(data => {
      const y = d3.scaleLinear()
        .domain([0, 272])
        .range([0, 500])

      console.log(`y(100)=${y(100)}\ny(0)=${y(0)}\ny(272)=${y(272)} `)

      const rects = svg.selectAll('rect')
        .data(data)

      rects.enter().append('rect')
        .attr('x', (d,i)=> i*100)
        .attr('y', 0)
        .attr('width', 50)
        .attr('height', d => d.height)
        .attr('fill','grey')
    })
  }
}