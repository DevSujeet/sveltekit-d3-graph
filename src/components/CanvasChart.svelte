<script lang="ts">
    import { onMount } from 'svelte';
    import { createWebSocket } from '$lib/websocket';
    import { RingBuffer } from '$lib/ring-buffer';
  
    const WIDTH = 800;
    const HEIGHT = 300;
    const MAX_POINTS = 800;
    const VALUE_SCALE = 20;
  
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let animationFrame: number;
  
    const buffer = new RingBuffer<{ timestamp: number; value: number }>(MAX_POINTS);
  
    function draw() {
      const points = buffer.values();
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.beginPath();
      points.forEach((p, i) => {
        const x = (i / MAX_POINTS) * WIDTH;
        const y = HEIGHT - p.value * VALUE_SCALE;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  
    function loop() {
      draw();
      animationFrame = requestAnimationFrame(loop);
    }
  
    onMount(() => {
      ctx = canvas.getContext('2d')!;
      createWebSocket((point) => buffer.push(point));
      loop();
      return () => cancelAnimationFrame(animationFrame);
    });
  </script>
  
  <canvas bind:this={canvas} width={WIDTH} height={HEIGHT} style="border: 1px solid #ccc;" />
  