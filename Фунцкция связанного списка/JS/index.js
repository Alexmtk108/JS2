// createList(['Караганда','Алиханова','Дом 37']);
// let list = {
//     value: 'Караганда',
//     next: {
//         value: 'Алиханова',
//         next: {
//             value:'Дом 37',
//             next: null    
//         }
//     }        
// }

let list = ['Караганда','Алиханова','Дом 37'];
// console.log(list)
let li = {

}

function createList1(...params){
 li = {
 	value:(list[conunt()]),
 	next: {
 		value:(list[conunt()]),
 		next: {
 		value:(list[conunt()]),
 		next: {} 
 	}
 	}
 }
}


function conunt(...params){
	let i;
	i++;
	return i;	
}

function val(...params){
	value: (this[i]),
	next
}

function createList2(...params){
	i = 0;
	if(list.length>i){
		li = {
 			value:(list[i]),
 			next: {
 				value:(list[conunt(i)]),
 					next: {
 						value:(list[conunt(i)]),
 							next: {} 
 			}
 			}
 		}	
	}else{
		next = null;
	} 
}

function cL(list){
	i = 0;
	if ( 3 <= list.length){
	li = {
		value: list[i],
		next: 'null'	
	};
	return;
	 
	}else{
		li= {
		value: list[i],
		next: cL()	
		}
		i++;
		cL()
		 
	}
}

console.log(list.length);