console.log('ff');

// more efficient with map and linked list
class IsraeliQueue {
  line = [];

  enqueue(item) {
    const index = this.line.findLastIndex(
      elem => elem.groupId === item.groupId
    );

    if (index !== -1) {
      this.line.splice(index + 1, 0, item);
    } else {
      this.line.push(item);
    }
    // console.log(this.line)
  }

  dequeue() {
    this.line.shift();
  }
}

const queue = new IsraeliQueue();

queue.enqueue({ name: 'John', groupId: '1' });
queue.enqueue({ name: 'Alex', groupId: '1' });
queue.enqueue({ name: 'Ben', groupId: '2' });
queue.enqueue({ name: 'Scott', groupId: '3' });
queue.enqueue({ name: 'Becky', groupId: '1' });

queue.dequeue(); // John
queue.dequeue(); // Alex
queue.dequeue(); // Becky
queue.dequeue(); // Ben
queue.dequeue(); // Scott
