document.writeln('hello,world');
var that = this;
/*
这里是注释
 */
//这里也是注释
var x=.1;
document.writeln(x);

var y = 2e2;//200
document.writeln(y);

var x1 = 1/0;
document.writeln(x1);

var x2 = 1.8e+308;
document.writeln(x2)

var x3= 1.7e+308
document.writeln(x3);

var x4 = Math.floor(2.32413)
document.writeln(x4);

document.writeln("a\"a   a\'a   a\\a   a\/a   a \ba  a\fa  a\na  a\ra  a\ta  ");

document.writeln("\u4e03");

document.writeln("\n".length);

var  arr= new Array();

var n1 = null;
document.writeln(typeof(n1));

document.writeln(typeof(arr));


arr.push([1[2[3[4[5[6]]]]]]);

document.writeln(arr.push([1[2[3[4[5[6]]]]]]));

arr.push([1],[2]);
document.writeln(arr.length);

document.writeln(arr.pop());

fun1("cacdasdfa");
function fun1 (x){
	
	success: document.writeln("success"+x);
}

// add([1[,2]]);
// function add([arg[,arg2]]){
// 	document.writeln(arg+arg2);
// }

var stooge  = {
	"first_name":"Jerome",
	"last_name":"Howard",
	age :"14",
	address:{
		country:"China",
		city:"HangZhou",
	}
};

stooge["first_name"];
document.writeln(stooge["first_name"]);


