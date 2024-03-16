// Factory Function
function createUser(name) {
	const discordName = "@" + name;

	let reputation = 0;
	const getReputation = () => reputation;
	const giveReputation = () => reputation++;

	return {
		name,
		reputation,
		discordName,
		getReputation,
		giveReputation
	};
}
const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

// Prototypal inheritance with factories 
function createPlayer(name, level) {
	const {
		getReputation,
		giveReputation
	} = createUser(name);

	const increaseLevel = () => level++;
	return {
		name,
		getReputation,
		giveReputation,
		increaseLevel
	};
}
const newPlayer = createPlayer('uyang', 69)
const uyang = createUser(newPlayer.name)
newPlayer.giveReputation()
newPlayer.giveReputation()
newPlayer.giveReputation()
newPlayer.giveReputation()

const kyle = createUser('Kyle')
kyle.giveReputation()

console.log({
	uyangReputation2: uyang.reputation,
	uyangDiscordName: uyang.discordName,
	uyangReputation: uyang.getReputation(),
	reputation: newPlayer.getReputation(),
	level: newPlayer.increaseLevel(),
})

// console.log({
// 	discordName: kyle.discordName,
// 	reputation: kyle.getReputation(),
// })

// console.log({
// 	discordName: josh.discordName,
// 	reputation: josh.getReputation()
// });


// The module pattern - IIFEs
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

console.log(calculator.add(3,5)); // 8
console.log(calculator.sub(6,2))// 4
console.log(calculator.mul(14,5534)); // 77476
console.log(calculator.div(14,5534)); // 77476