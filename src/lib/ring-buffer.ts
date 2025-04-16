export class RingBuffer<T> {
    private buffer: T[];
    private index = 0;
    private full = false;
  
    constructor(private maxSize: number) {
      this.buffer = new Array(maxSize);
    }
  
    push(item: T) {
      this.buffer[this.index] = item;
      this.index = (this.index + 1) % this.maxSize;
      if (this.index === 0) this.full = true;
    }
  
    values(): T[] {
      return this.full
        ? [...this.buffer.slice(this.index), ...this.buffer.slice(0, this.index)]
        : this.buffer.slice(0, this.index);
    }
  }
// Example usage
// const ringBuffer = new RingBuffer<number>(5);
// ringBuffer.push(1);
// ringBuffer.push(2);  
// ringBuffer.push(3);
// get values
// const values = ringBuffer.values();
// console.log(values); // [1, 2, 3]