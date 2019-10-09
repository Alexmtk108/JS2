	

/*
*
**
***
****
*****
*/
/*
while( i <= height ){
	i=i+1;
	triangle = triangle+symbol;
	// 1 - *
	// 2 - **
	// 3 - ***
	console.log(triangle);
	
}

*/
/*let symbol = '*';
let space = ' ';
let i = 1,j = 1,x =1;
let triangle = '';
let height = 5;
let spaceCnt = height - 1;
while( i <= height ){
	let spaceStr =  ''; 
	let symbolStr =  ''; 
	while(j <= spaceCnt){
		spaceStr = spaceStr + space;
		j=j+1;
	}
	let inc = i+1;
	while( x <= inc ){
		symbolStr = symbolStr + symbol;
		x=x+1;
	}

	triangle =  spaceStr + symbolStr;
	
	console.log(triangle);
	triangle = '';
	spaceCnt= spaceCnt-1;
	i=i+1;
}*//*
пока( 1 <= 5 ){
	пока(1 < 4){
		'' = '' + ' '; // ----
		1= 1+1;
	}
	'    ' = '    '+ '*';
	вывести '    *';
	4 = 4 - 1;
	1= 1+1;
}*/
/*
    *
   ***
  *****
 *******
*********
*/








/*высота ёлки = 5

в итоге 5 строк

в 1 строке 1 звезда и 4 пробела
в 2 строке 3 звезды и 3 пробела
в 3 строке 5 звезд и 2 пробела
в 4 строке 7 звезд и 1 пробел
в 5 строке 9 звезд и 0 пробелов






*/



let symbol = '*';
// let tree = '';
let step = 1;
let space = '-';
let height = 5;
let spaceCnt = height - 1;
let cnt = 1;

while(cnt <= height){
	let strokaProbelov = '';
	let strokaSimvolov = '';
	let j = 1;
	while( j <= spaceCnt ){
		strokaProbelov = strokaProbelov + space;
		j= j+1;
	}
	let x= 1;
	while(x <= step ){
		strokaProbelov = strokaProbelov + symbol;
		x= x+1;
	}

	//tree = tree+symbol;// треугольник
	console.log(strokaProbelov+strokaSimvolov)
	// tree = '';
	spaceCnt = spaceCnt - 1;
	cnt = cnt+1;
	step = step + 2;
}