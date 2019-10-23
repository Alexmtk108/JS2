// let symbol = '*';
// let i = 1;
// let height = 5;
// let triangle = '';
// let space = '-';
// let s = 1;
// let sCtn = height - 1;
// let strokaprobelov = '';
// let strokaspace = '';
// let step = 1;
// while(i <= height){
// 	triangle = triangle + symbol;
// 	i = i+1;
// 	while(s <=sCtn){
// 		strokaprobelov =  strokaprobelov + space;
// 		s = s + 1;
// }
// 	let x = 1;
// 	while (x <= step){
// 		strokaprobelov = strokaprobelov + symbol;
// 		x = x + 1;
// 	}
// 	console.log(strokaprobelov + strokaspace);
// 	sCtn = sCtn - 1;
// 	i = i +1;
// 	step = step +2 ;

	
// }
// // while(s != 0){
// // 		s = s - 1;
// // 		strokaspace =  strokaprobelov + strokaspace;

// // }

// // while(s > 1){
// // console.log (strokaprobelov = strokaprobelov + space );
// // s = s -1;
// // }


// let symbol = '*';
// let step = 1;
// let space = '-';
// let height = 5;
// let spaceCnt = height - 1;
// let cnt = 1;


// while(cnt <=height){
// 	let strokaprobelov = '';
	
// 					let j = 1;
// 					while ( j <=spaceCnt){
// 						strokaprobelov = strokaprobelov + space;
// 						j = j+1;
// 					}
// 								let x = 1;
// 								while(x <=step){
// 									strokaprobelov = strokaprobelov +symbol;
// 									x = x +1 ;
// 								}


// console.log(strokaprobelov)

// spaceCnt =spaceCnt -1;
// cnt = cnt +1
// step = step +2;
// }

///////////// Работает

// let symbol ='*';
// let height = 5;
// let strokasymvolov = '';
// for (var i = 0; i < height; i++) {
// 	strokasymvolov = strokasymvolov + symbol;
// 	console.log (strokasymvolov)
// }

/////////////////    !работает

// let symbol ='*';
// // let space = '-';
// let height = 5;
// // let spaceCnt = height - 1 ;
// // // let strokasymvolov = '';
// // // let cnt = 1;
// // let symbolCnt = '1';
// // let strokaprobelov = '';
// // let strokasymvolov = '';

// for (let cnt = 1; cnt != height; cnt++) {
// 	let strokasymvolov = '';
// 	let strokaprobelov = '';

// 	strokasymvolov = strokasymvolov + symbol;
// 	console.log(strokasymvolov);

	


	// for (var i = 0; i <= spaceCnt; i++) {
	// 	let strokaprobelov = ''; 
	// 	strokaprobelov = strokaprobelov + space;
	// 	// console.log(strokaprobelov);	
	// }

	// for (symbolCnt; symbolCnt >= 5; symbolCnt++) {
	// 	let strokasymvolov = '';
	// 	strokasymvolov = strokaprobelov + symbol;
	// 	console.log(strokasymvolov);
	// }
// spaceCnt - 1;
// symbolCnt +1;
// strokasymvolov = strokaprobelov + symbol	
// console.log(strokasymvolov);
// }

///////////////
// let symbol ='*';
// let height = 5;
// let strokasymvolov = '';
// let strokaprobelov= '';
// let space = '-';
// let result ='';
// let step = 1;
// let sCtn = 4;
// for(a=5; a>0; a--){

// 	for (; sCtn > 0; sCtn--) {
// 		// i--;
// 		strokaprobelov = strokaprobelov + space;
// 		// console.log (strokaprobelov)
// 	}

// 		for (; step > 0; step--) {
// 			let space ='-';			
// 			strokasymvolov = strokasymvolov + symbol;
// 			// console.log(strokaprobelov);
// 		}
// 		result= strokaprobelov + strokasymvolov;
// 		console.log(result);
// step = step + 2;
// sCtn = sCtn - 1;

	
// }
///////////
// let symbol = '*';
// let height = 5;
// let space = '-';
// let cSps = height-1;
// let cSym = 1;
// let step = 2;
// for (i = 0; i<5; i++){
// 	// console.log("a")

// 			let strokaprobelov='';
// 			// let cSps = height-1;
// 			for (let ii = cSps; ii>0; ii--) {
				
// 				strokaprobelov = strokaprobelov + space;
// 				// console.log(strokaprobelov);
							
// 			}
			

// 			let strokasymvolov = '';
// 			for (var iii = 0; iii < cSym; iii++) {
// 				strokasymvolov = strokasymvolov + symbol;
// 				// console.log (strokasymvolov)

// 			}

// let result = strokaprobelov + strokasymvolov;
// console.log(result)
// cSps = cSps-1;
// cSym = cSym + step;

// }


// let symbol = '*';
// let step = 1;
// let space = '-';
// let height = 5;
// let spaceCnt = height - 1;
// let cnt = 1;

// while(cnt <=height){
// 	let strokaprobelov = '';
	
// 					let j = 1;
// 					while ( j <=spaceCnt){
// 						strokaprobelov = strokaprobelov + space;
// 						j = j+1;
// 					}
// 								let x = 1;
// 								while(x <=step){
// 									strokaprobelov = strokaprobelov +symbol;
// 									x = x +1 ;
// 								}

// console.log(strokaprobelov)

// spaceCnt =spaceCnt -1;
// cnt = cnt +1
// step = step +2;
// }

/////////01-Сумма для произвольного кол-ва чисел.
let args = []
function sum(){
	let result =0;
	for( let i = 0; i < arguments.length; i++){
		args[i] = arguments[i];
		result = result + arguments[i];
	}
	return result;
}
sum(10,10,10,1);
console.log(args)
// for (let x = 0, sums = 0; x <= args.length; sums+=args[x++]){
// console.log(sums)}
//////end-01


////////////02-елочка через ф-цию
// function elka(height,symbol, space){
// 	let cSps = height-1;
// 	let cSym = 1;
// 	let step = 2;
// 	for (i = 0; i<height; i++){
// 		let strokaprobelov='';
			
// 			for (let ii = cSps; ii>0; ii--) {
				
// 				strokaprobelov = strokaprobelov + space;
// 				// console.log(strokaprobelov);							
// 			}

// 			let strokasymvolov = '';
// 			for (var iii = 0; iii < cSym; iii++) {
// 				strokasymvolov = strokasymvolov + symbol;
// 				// console.log (strokasymvolov)
// 			}
// 	let result =''; 
// 	result = strokaprobelov + strokasymvolov;
// console.log(result)
// cSps = cSps-1;
// cSym = cSym + step;
// 	}
// return result;
// }
/////////////end-02


//------------------------
// function sum(a,b){
// 	return a+ b;}

// 	sum(1,1)

// function evk(m,n){
// 	if(m>n){
// 		m = m-n;
// 		return m;
// 		evk(m, n);
// 		// return m,n;		
// 	}

// 	else {
// 		if (n=m) {
// 			return n;
// 		}
		
// 		else {
// 			if(n>m){
// 			n = n - m;
// 			return m,n;
// 			evk(m, n);
// 			// return m,n;
			
// 			}
// 		}
// 	}
// }


// evk(15,11);
//15-11=4 >11-4=7 >7-4=3> 4-3=1

// function ed(m,n){
// 	if(m=n){
// 		return m;
// 	}
// 	else if (m>n){
// 		m= m-n;
// 		return m;
// 		ed(m,n);
// 		}
// 		else{
// 			n=n-m;
// 			return n;
// 			ed(m,n);
// 		}
// 	// return(m,n)
// }

// function ev(a,b){
// 	if (b==0){
// 		return a;
// 	}
// 	else{
// 		return ev(b, a % b);
// 	}
// }



// ed(15,11);