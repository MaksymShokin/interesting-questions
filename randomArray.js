const randomArray = () => Array.from({length: 100}, () => (Math.random() * 100).toFixed(0))

console.log(randomArray())