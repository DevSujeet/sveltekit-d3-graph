export function createWebSocket(onMessage: (data: { timestamp: number; value: number }) => void) {
    const socket = new WebSocket("ws://localhost:8000/ws/data");
  
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };
  
    socket.onopen = () => console.log("WebSocket connected");
    socket.onerror = (err) => console.error("WebSocket error:", err);
    socket.onclose = () => console.log("WebSocket closed");
  
    return socket;
  }
  