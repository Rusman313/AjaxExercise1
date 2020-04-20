/*Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.*/
//var p = new Promise(function(resolve, reject){
function testNum(n){p = new Promise(function(resolve,reject){
    if(num > 50){
        resolve(num + " is greater than 50, success!")
    } else {
        reject(num + " is less than 50, fail!")
    }
})
return p   
}
testNum(55)
	.then(result => console.log(result))
	.catch(error => console.log(error))

testNum(8)
	.then(result => console.log(result))
	.catch(error => console.log(error))
