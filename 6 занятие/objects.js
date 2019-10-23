
function showName(){
	//console.log(this);
	console.log(this.name);
}

function vstroku(){
	return ' '+this.name;
}
	let human = {
		age : 20,
		'name': 'Вася',
		'showName' : showName,
		carma: []
	};
	let human2 = {
		'age' : 20,
		'name': 'Петя',
		'showName' : showName
	};
	//human2.showName();
	for(let prop in human){
		//console.log(typeof prop);
		if(typeof human[prop] == 'function'){
			//human[prop]();
		}else{
			//console.log(prop+': '+  human[prop]);
		}
	}





function push(...val){
	if(!val) return;
	let inArr = [];
	for(let i = 0; i < arr.length; i++){
		inArr[inArr.length] = arr[i];
	}
	if(val.length == 1){
		inArr[inArr.length] = val[0];
	}else{
		for(let i = 0; i < val.length; i++){
			inArr[inArr.length] = val[i];
		}
	}
	return  inArr;	
}

let arr = [1,2,3],arr3 = [1,2,3];
function push(arr,type,...val){
	if(type ==''){

	}
	if(val.length == 1){
		arr[arr.length] = val[0];
	}else{
		for(let i = 0; i < val.length; i++){
			arr[arr.length] = val[i];
		}
	}
	return  arr;	
}
push(arr,4,3,4,6,3);
push(arr3,5);/*
console.log('Арр: ',arr)
console.log('Арр3: ',arr3)

*/

let arr4 = [1,2,3];
/*
for(let i=0,len = arr4.length; i < len;i++){
	console.log(arr4[i]);
}*/
function sum(...params){
	let sumIn = 0;
	for(let i=0,len = params.length; i < len;i++){
		sumIn+=params[i];
	}
	return sumIn;
}
function forEach(arr,action){
	for(let i=0,len = arr.length; i < len;i++){
		action(arr[i]);
	}
}
forEach(arr4,console.log);
forEach(arr4,function(tumbaUmba){
	console.log(tumbaUmba / 2)
});
forEach(arr4,function(elem){
	console.log(elem * 2)
});



let obj = {
	a: 5,
	b:3,
	digits:[1,2,3],
	human: { 
		name:'Вася',
		human: { 
			name:'Вася'}
		}
	},
	obj2 = {
		a: 5,
		b:3,
		digits:[1,3,2],
		human: { 
			name:'Вася',
			human: { 
				name:'Вася'
			}
		}
	};

function counterProps(obj){
	let cnt = 0;
	for(let i in obj){	
		cnt++;
	}
	return cnt;
}
function propEquals(obj1,obj2){
	for(let i in obj1){
		if( !(i in obj2) ) return false;
	}
	for(let j in obj2){
		if( !(j in obj1) ) return false;
	}
	return true;
}
function deepEquals(obj1,obj2){
	let ident = false;
	if(counterProps(obj1) !== counterProps(obj2)) return false;
	if(!propEquals(obj1,obj2)) return false;
	// 
	for(let i in obj1){
		if( typeof obj1[i] === 'object'){
			return deepEquals(obj1[i],obj2[i]);
		}else{
			if( !(obj1[i] === obj2[i]) ) return false;
		}
	}
	return true;
}
let car = {
	brand: "Toyota",
	model: "Supra",
	year: 1996,
	TypeBody: "coupe",
	typeGasEngine: "gasoline",
	powerEngine: 330,
	volumeEngine: 2997,
	transmission: "manual",
	typeWheelDrive: "real",
	maxSpeeD: 250,
	accelerate0To100: 5.1,
	weight: 1585,
	tankVolume: 80,
	fuelRate: 11,
	trunkVolume: 184,
	tuning: false}



function start(){
	this['started'] = true;
	this['fuel']-= 1;
}
function drive(){
	if(this['started']){
		console.log('Едем')
		this['fuel']-= 2;	
	}else{
		console.log('Заведите двигатель')
	}
}
function createCar(model,year){
	let obj =  {
			__proto__: 'Car',
			model: model,
			year:year,
			fuel: 10,
			started: false,
			start: start,
			drive: drive
	};
	return obj;
}

let bmw = createCar('BMW',2010);
let audi =  createCar('AUDI',2020);
let opel =  createCar('OPEL',2030);


function Human(name,age){
	this.name = name;
	this.age = age;
}
Human.prototype.showName = function(){
	console.log(this.name)
}

let vasya = new Human('Вася',20);
let petya = new Human('Петя',22);
vasya.showName();

function Animal(){
}
Animal.prototype.legs = 4;

function Cat(){
}
function Dog(){
}
Dog.prototype.bark = function(){
	console.log('Woof Woof');
}

Dog.prototype.__proto__ = new Animal();
//Dog.prototype.__proto__ = new Dog();
let bobik = new Dog();



function Child(){};
function Father(){};
function GrandFather(){};


let Vova = new Child();
let Egor = new Father();
let Vitya = new GrandFather();






function Flags(){
	const _ = this;

	_.flags = 21;
	_.player = false;
	_.started = false;
	_.step = 0;
}
Flags.prototype.exitGame = function (){
	if(this.step == -1){
		return true;
	}	
	return false;
}	
Flags.prototype.validateStep = function (){
	if(isNaN(this.step)) return false;
	return true;
}
Flags.prototype.checkStep = function(){
	if( (this.step != 1) && (this.step != 2) && (this.step != 3) ){
		return false;
	}
	return true;
}
Flags.prototype.showAlert = function (type){
	if(type == 'validate'){
		console.error('Не корректный ввод. Введите число');
	}
	if(type == 'check'){
		console.error('Не корректный ввод. Введите число от 1 до 3');
	}
}
Flags.prototype.changePlayer = function (){
	this.player = !this.player;
}
Flags.prototype.showFlagsRest = function (){
 	console.log( 'В игре осталось '+ this.cost +' флагов');
}
Flags.prototype.showPlayerStep = function (){
	if(!this.player){
		console.log('Игрок 1 походил: ' + this.step);
	}else{
		console.log('Игрок 2 походил: ' + this.step);
	}
}
Flags.prototype.checkWin = function (){
	if(this.flags <= 3){
		return true;
	}	
	return false;
}
Flags.prototype.showWinner = function(){
	if(!this.player){
		console.warn('Победил Игрок 1');
	}else{
		console.warn('Победил Игрок 2');
	}
}

Flags.prototype.start = function(){
	this.started = true;
	if(this.checkWin()){
		this.showWinner();
		return ;
	}
	this.step = prompt('Введите число от 1 до 3') * 1;
	
	if( this.exitGame() ) return;

	if( !this.validateStep() ) {
		this.showAlert('validate');
		return this.start();
	}
	if( !this.checkStep() ) {
		this.showAlert('check');
		return this.start();
	}

	this.cost = this.flags-=this.step;

	this.changePlayer();

	this.showPlayerStep();
	this.showFlagsRest();
	return this.start();
	
}


let flags = new Flags();
flags.start();




















