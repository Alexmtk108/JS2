function log(){
	console.log()
}
let ss= 10;
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
	tuning: false,
		// tuningItem = {
		// 	sub: true,
		// },
	// howDrive: function() {
	// 	console.log((this.tankVolume/this.fuelRate)*100);
	// 	return;
	// },
	// startEngine(){
	// 	if(car.tankVolume>0.1){
	// 		console.log("wrom wrum " + car.howDrive());
	// 	}else{
	// 		console.log(("oh noo"));
	// 	}
	// },
	// tun(){
	// 	car.tuning = true
	// 	car.maxSpeeD+= 50;
	// 	car.powerEngine+=100;
	// 	car.fuelRate=car.fuelRate+6;
	// 	return;
		
	// }
}
let car2 = {
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
	tuning: false,
		// tuningItem = {
		// 	sub: true,
		// },
	// howDrive: function() {
	// 	console.log((this.tankVolume/this.fuelRate)*100);
	// 	return;
	// },
	// startEngine(){
	// 	if(car.tankVolume>0.1){
	// 		console.log("wrom wrum " + car.howDrive());
	// 	}else{
	// 		console.log(("oh noo"));
	// 	}
	// },
	// tun(){
	// 	car.tuning = true
	// 	car.maxSpeeD+= 50;
	// 	car.powerEngine+=100;
	// 	car.fuelRate=car.fuelRate+6;
	// 	return;
		
	// }
}
let i = 0, k = 0, result;

for(i in car){
	let ident = false;
	// console.log(car[i]);
	// console.log(i +' '+ car[i]);
	for(k in car2){
		// console.log(car2[i])
		if(i == k){ 
			ident = true;
		}

		if (ident==true) {
			result = 'ident';
		}
		if(!ident) {
			result = 'no ident';
		}
	}

}
console.log(result);

//Сравнивает последнее свойство
//как сделать значения. не сравнивает значение свойства