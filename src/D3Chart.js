import * as d3 from 'd3';
const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json'

export default class D3chart {
  constructor(element) {
    const svg = d3.select(element)
      .append('svg')
        .attr('width', 800)
        .attr('height', 500)
    d3.json(url).then(data => {
      console.log(data);
    })
  }
}