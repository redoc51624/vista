
var input = "fw0fs0bta0";

var input_arr = input.split('');

var len = input_arr.length;
var arr_no_zero= input_arr;
var get_zero_pos =[];
var op_arr = [];

for(var i =0; i<len ; i++) {

    if (input_arr[i] == "0"){
        get_zero_pos.push(i);
        arr_no_zero.splice(i,1);
        var len2 = arr_no_zero.length;
            var ele_to_push = arr_no_zero[i];
            console.log(len2);
    
        input_arr.splice(i,0, ele_to_push);
        op_arr = input_arr;
    }
    else {
        console.log("no zero");
    }
}
console.log(op_arr);

for(var j=0;j <3; j++) {
var final_op_arr = op_arr.push("0");
}
document.getElementById("output1").innerHTML = final_op_arr;
