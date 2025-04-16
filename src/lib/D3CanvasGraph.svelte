<script lang="ts">
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    let canvas: HTMLCanvasElement;
  
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
      const ctx = canvas.getContext('2d');
  
      if (!ctx) {
        console.error('Unable to get canvas context');
        return;
      }
  
      canvas.width = width;
      canvas.height = height;
  
      const xScale = d3.scaleLinear()
        .domain([0, 200])
        .range([0, width]);
  
      const yScale = d3.scaleLinear()
        .domain([0, 150])
        .range([height, 0]);
  
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'tomato';
  
      for (const d of data) {
        ctx.beginPath();
        ctx.arc(xScale(d.x), yScale(d.y), 5, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
  </script>
  
  <canvas bind:this={canvas} style="border: 1px solid #ccc;"></canvas>
  