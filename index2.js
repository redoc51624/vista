
var input = [1,2,3];
var sum = 5;

function getSubArrays(input){
  var len = input.length,
     subs = Array(Math.pow(2,len)).fill();
  return subs.map((_,i) => { var j = -1,
                                 k = i,
                               res = [];
                             while (++j < len ) {
                               k & 1 && res.push(input[j]);
                               k = k >> 1;
                             }
                             return res;
                           }).slice(1);
}

var all_poss_arr = getSubArrays(input);
var op_arr = [];
var op = []; //stores all output array
var len = all_poss_arr.length;
 for(var i=0; i<len; i++){

     for( var k=0; k<all_poss_arr[i].length; k++){
        let checksum;
        console.log(all_poss_arr[i]);
        checksum = all_poss_arr[i].reduce((a, b) => a + b, 0);
        console.log(checksum);
            if( checksum <= sum ) {
                op_arr.push(all_poss_arr[i]);
            }
     }
 }
op_arr = JSON.stringify(op_arr);
// removing duplicate array

for (var j=0; j<op_arr.length; j++) {
    
}

document.getElementById("output2").innerHTML = op_arr;