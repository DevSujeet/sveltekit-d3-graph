<!-- <script>
  import D3SvgGraph from '$lib/D3SvgGraph.svelte';
  import D3CanvasGraph from '$lib/D3CanvasGraph.svelte';
</script>

<h1>SvelteKit + D3 Graphs</h1>

<section>
  <h2>SVG Graph</h2>
  <D3SvgGraph />
</section>

<section>
  <h2>Canvas Graph</h2>
  <D3CanvasGraph />
</section> -->
<!--  -->

<!-- <script lang="ts">
  import { onMount } from 'svelte';
  import { createWebSocket } from '$lib/websocket';

  type DataPoint = { timestamp: number; value: number };

  let data: DataPoint[] = [];
  const MAX_POINTS = 500;
  const chartWidth = 800;
  const chartHeight = 300;
  const valueScale = 20;

  onMount(() => {
    createWebSocket((point: DataPoint) => {
      data = [...data.slice(-MAX_POINTS), point]; // ✅ ensures reactivity
    });
  });

  // Transform to SVG polyline points string
  $: points = data
    .map((d, i) => {
      const x = (i / MAX_POINTS) * chartWidth;
      const y = chartHeight - d.value * valueScale;
      return `${x},${y}`;
    })
    .join(" ");
</script>

<h2>📈 Real-Time Line Chart</h2>

<svg
  width={chartWidth}
  height={chartHeight}
  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
  style="border:1px solid #ccc"
>
  <polyline
    fill="none"
    stroke="steelblue"
    stroke-width="2"
    points={points}
  />
</svg>

<style>
  h2 {
    font-family: sans-serif;
    margin-bottom: 10px;
  }
</style> -->

<script lang="ts">
  // import CanvasChart from '$components/CanvasChart.svelte';
  import CanvasChart from '../components/CanvasChart.svelte';
</script>

<h2>📊 Optimized Real-Time Chart</h2>
<CanvasChart />
