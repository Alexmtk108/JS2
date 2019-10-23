function sum(...params){
	console.log(params);
}

function evklid(m/*106*/,n/*16*/){
	//console.log(m+ ' % '+ n + '= '+ (m % n));
	if(!(m % n)) return n; // 106 16 = 10
	return evklid(n,m % n);
}

evklid(106,16);

let t = 5; // 120
function fact(f){
	if( f === 1) return f;
	return f * fact(f-1);
}


function foo(a,b){
	a + sum(a,b);
	log(a);
}
function sum(a,b){
	return a+b;
}
function log(test){
	console.log(test);
}

foo(5,5);

/*
CallStack
1 foo
2 sum
3 log
4 console.log
*/

/* Игра флажки */


function MonsterFlag(flags = 21,player = false){
	function exitGame(step){
		if(step == -1){
			return true;
		}	
		return false;
	}
	function checkWin(flags){
		if(flags <= 3){
			return true;
		}	
		return false;
	}
	function validateStep(step){
		if(isNaN(step)) return false;
		if( (step != 1) && (step != 2) && (step != 3) ){
			return false;
		}
		return true;
	}
	let 
		step = prompt('Введите число от 1 до 3') * 1;
	if( exitGame(step) ) return
		
	if(!validateStep(step)) {
		return MonsterFlag(flags,player);
	}
	if( checkWin(flags) ) {
		return
	}
	


	let cost = flags-=step;

	if(!player){
		console.log('Игрок 1 походил: '+ step+ ' остаток флагов: '+cost);
	}else{
		console.log('Игрок 2 походил: '+ step+ ' остаток флагов: '+cost);
	}

	return MonsterFlag(cost,!player);
}


MonsterFlag();







