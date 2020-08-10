import * as d3 from 'd3';

const url = 'https://udemy-react-d3.firebaseio.com'
const MARGIN = { TOP: 10, BOTOOM: 50, LEFT: 70, RIGHT: 10 }
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTOOM;

export default class D3chart {
  constructor(element) {
    const vis = this

    vis.svg = d3.select(element)
      .append('svg')
        .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTOOM)
      .append("g")
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    vis.xLabel = vis.svg.append('text')
        .attr('x', WIDTH / 2)
        .attr('y', HEIGHT + 50)
        .attr('text-anchor', 'middle')
      .text('The world\'s tallest men')

      vis.yLabel = vis.svg.append('text')
        .attr('x', -(HEIGHT / 2))
        .attr('y', -50)
        .attr('text-anchor', 'middle')
      .text('Height in cm')
        .attr('transform', 'rotate(-90)')

    vis.xAxisGroup = vis.svg.append('g')
        .attr('transform', `translate(0, ${HEIGHT})`)


    vis.yAxisGroup = vis.svg.append('g')

    Promise.all([
      d3.json(`${url}/tallest_men.json`),
      d3.json(`${url}/tallest_women.json`)
    ]).then((datasets)=>{
      vis.menData = datasets[0]
      vis.womenData = datasets[1]
      vis.update('men')
    })
  }

  update(gender) {
    const vis = this;

    vis.data = (gender === "men")? vis.menData : vis.womenData; 
    vis.xLabel.text(`The world's tallest ${gender}`)

    const y = d3.scaleLinear()
      .domain([
        d3.min(vis.data, d => d.height) * 0.95,
        d3.max(vis.data, d => d.height)
      ])
      .range([HEIGHT, 0])

    const x = d3.scaleBand()
      .domain(vis.data.map(d => d.name))
      .range([0, WIDTH])
      .padding(0.4)

    const xAxisCall = d3.axisBottom(x)
    vis.xAxisGroup.call(xAxisCall)

    const yAxisCall = d3.axisLeft(y)
    vis.yAxisGroup.transition().duration(500).call(yAxisCall)

    // Data join
    const rects = vis.svg.selectAll('rect')
    .data(vis.data)

    // Exit
    rects.exit()
      .transition().duration(500)
        .attr('height',0)
        .attr('y',HEIGHT)
        .remove()

    //Update
    rects.transition().duration(500)
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.height))
    .attr('width', x.bandwidth)
    .attr('height', d => HEIGHT - y(d.height))
      
    // Enter
    rects.enter().append('rect')
     .attr('x', d => x(d.name))
     .attr('width', x.bandwidth)
     .attr('fill', 'grey')
     .attr('y', HEIGHT)
     .transition().duration(500)
     .attr('height', d => HEIGHT - y(d.height))
     .attr('y', d => y(d.height))
    
  }
}