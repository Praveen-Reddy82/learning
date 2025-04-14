// let people={
// 	friends: []
// };

// let friends=[{
// 	firstName: "gauraw",
// 	lastName: "bhoshle",
// 	id: 1
// },
// {
// 	firstName: "shivam",
// 	lastName: "gupta",
// 	id: 2
// },
// {
// 	firstName: "khilesh",
// 	lastName: "sahu",
// 	id: 3
// }
// ];
// people.friends.push(friends[0], friends[1], friends[2]);
// console.log(people)


// console.log(people.friends[0].firstName)


// let randomNumber=Math.floor(Math.random()*4)+1;
// let userNumber=Number(prompt("Enter your number between 1-4"));

// switch(userNumber){
// case randomNumber:
// 	alert("gotcha!")
// 	break;
// default:
// 	alert("Opps it's wrong")

// }

/*
let myWork=[];
for(let i=1;i<=5;i++){
	let stat=i%2? true: false;
	let temp={
		name: `Lession ${i}`,
		status: stat 
	};
	myWork.push(temp);
}

console.table(myWork)

*/

// let myTable=[];
// let row=4,column=7;
// let counter=1;
// for(let i=0;i<row;i++){
// 	let template=[];
// 	for(let j=0;j<column;j++){
// 		template.push(counter);
// 		counter++;
// 	}
// 	myTable.push(template);
// }

// console.table(myTable);

// let names=['sam', 'jems','logan','danial','harry'];
// for (let name of names){
// 	if(name==='logan'){
// 		console.log("Not welcome")
// 		continue;
// 	}
// 	console.log("Hi " + name);
// }

// for (let variable in names){
// 	console.log(names[variable]);
// }


// let car = {
// 	model: "Golf",
// 	make: "Volkswagen",
// 	year: 1999,
// 	color: "black",
// };

// for (let variable in car){
// 	console.log(car[variable])
// }

let doStuff= ()=>{
	console.log("Times up");
};

setInterval(doStuff, 1000);

//setTimeout(youGotThis, 1000);
//setInterval(youGotThis, 1000);