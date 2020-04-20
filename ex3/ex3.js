//Write two functions to chain together. The first function, makeAllCaps, will take in an array of words and capitalize them. A second function, sortWords, will sort the words in alphabetical order. 

//If the array contains anything besides a single word (string), an error should be thrown.

var fruitwords = ['strawberries', 'bananas', 'pineapple', 'watermelon'];
var complicatedArray = ['strawberries', 44, true]

function makeAllCaps(array){
	return new Promise((resolve, reject)=>{
		let capsArray = array.map(word => {
			if(typeof word === 'string'){
				return word.toUpperCase()
			} else {
				reject('Error: Not all items in the array are strings!')
			}
		})
		resolve(capsArray)
	})
}

function sortWords(array){
	return new Promise((resolve,reject)=>{
		if (array){
			array.forEach((el)=>{
				if(typeof el != 'string'){
					reject('Error: all items in the array are strings!')
				}
			})
			resolve(array.sort());
		} else {
			reject('Error: Something went wrong with sorting words.')
		}
	})
}

makeAllCaps(fruitwords)
	. then(sortWords)
	.then((result)=> console.log(result))
	.catch(error => console.log(error))

makeAllCaps(complicatedArray)
	.then(sortWords)
	.then((result)=> console.log(result))
	.catch(error => console.log(error))