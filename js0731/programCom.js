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
	age :14,
	address:{
		country:"China",
		city:"HangZhou",
	}
};

stooge["first_name"];
document.writeln(stooge["first_name"]);
stooge["first_name"] =  "chengchen";
document.writeln(stooge["first_name"]);

var newdata = stooge.address.city1 || "none city";
document.writeln(newdata);

stooge["mid_name"] = "Ethan";
stooge.mid_name = "Giraffe Tree";
document.writeln(stooge["mid_name"]);

var x = stooge;

document.writeln("");

document.writeln(x.mid_name);
x.mid_name = "small treeeeeee";
document.writeln(x.mid_name);
document.writeln(stooge.mid_name);

//原型，每个对象都连接到一个原型对象，继承属性
//TODO
if(typeof Object.beget !== 'function'){
	Object.create  = function(o){
		var F  = function(){};
		F.prototype = o;
		return new F();
	};
}

var ano = Object.create(stooge);
// 找属性值得过程，成为委托
stooge.teacher = "chengchen";
document.writeln(ano.teacher);

//反射
document.writeln(typeof ano.age+" "+typeof(ano.teacher));
document.writeln(typeof(ano.toString));
document.writeln(typeof(null));

ano.school  = "university";
document.writeln(ano.hasOwnProperty('school'));

var name;
for(name in ano){
	if(typeof ano[name]!=='function'){
		document.writeln(name+" : "+ano[name]);
	}
}

document.writeln("falksjdflajfjwiof");

