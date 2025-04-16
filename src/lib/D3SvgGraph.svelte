<script lang="ts">
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    let svg: SVGSVGElement;
  
    interface DataPoint {
      x: number;
      y: number;
    }
  
    const data: DataPoint[] = [
      { x: 10, y: 20 },
      { x: 50, y: 80 },
      { x: 100, y: 60 },
      { x: 150, y: 120 },
      { x: 200, y: 100 }
    ];
  
    onMount(() => {
      const width = 400;
      const height = 300;
  
      const xScale = d3.scaleLinear()
        .domain([0, 200])
        .range([0, width]);
  
      const yScale = d3.scaleLinear()
        .domain([0, 150])
        .range([height, 0]);
  
      const svgEl = d3.select(svg)
        .attr('width', width)
        .attr('height', height);
  
      svgEl.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 5)
        .attr('fill', 'steelblue');
    });
  </script>
  
  <svg bind:this={svg}></svg>
  