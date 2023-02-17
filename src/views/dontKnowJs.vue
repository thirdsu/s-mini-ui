<template>
	<div></div>
</template>

<script>
export default {
	setup() {
		//包装函数,以( function xx(){})形式出现，会被当作一个函数表达式而不是函数声明去处理，不会给全局作用域带来污染。
		// (function foo() {
		// 	var a = 2;
		// 	console.log(a);
		// })();
		//给函数表达式加上()会让函数表达式立即执行，如上，也可以改进为如下形式：
		// (function foo() {
		// 	var a = 2;
		// 	console.log(a);
		// }());

		// 循环与闭包
		// js是单线程的，在执行for循环的时候，定时器被放到任务队列中等待执行，等到定时器可以执行的时候，for循环已经跑完了,
		// 所有定时器回调共享一个全局变量i,因此打印出六个6。
		// for (var i = 1; i <= 5; i++) {
		// 	setTimeout(function timer() {
		// 		console.log(i);
		// 	}, i * 1000);
		// }

		// 解决办法1：声明一个新的变量去存储i的值，该值在作用域范围内有效
		// for (var i = 1; i <= 5; i++) {
		// 	(function (j) {
		// 		setTimeout(function timer() {
		// 			console.log(j);
		// 		}, j * 1000);
		// 	})(i); //i可以改动，只要你喜欢
		// }
		// 解决办法2：使用let,let会在循环中重复声明，每一次迭代的值为上一次迭代结束后的值,所以也会把每一次的i封装在作用域的内部，等回调函数执行的时候会从内部取到值。
		// for (let i = 1; i <= 5; i++) {
		// 	setTimeout(function timer() {
		// 		console.log(i);
		// 	}, i * 1000);
		// }

		// this
		// 调用栈
		// function baz() {
		// 	console.log("baz");
		// 	bar();
		// }
		// function bar() {
		// 	console.log("bar");
		// 	foo();
		// }
		// function foo() {
		// 	debugger;
		// 	console.log("foo");
		// }
		// baz();
		// this的四大绑定规则：
		//1、默认绑定,foo在全局作用域内直接调用，没有其他任何修饰符，严格模式下报this is undefined,非严格模式下this绑定全局对象
		// function foo() {
		// 	console.log(this.a);
		// }
		// var a = 2;
		// foo();
		//2、隐式绑定，foo的调用位置存在上下文对象，或者说被某个对象拥有或者包含，那么this指向此上下文对象
		// function foo() {
		// 	console.log(this.a);
		// }
		// const obj = {
		// 	a: 2,
		// 	foo,
		// };
		// obj.foo();
		// 当存在上下文对象嵌套时，this指向运行时离它最近的那一层的上下文对象,如下例this指向obj1。
		// function foo() {
		// 	console.log(this.a);
		// }
		// const obj1 = {
		// 	a: 1,
		// 	foo,
		// };
		// const obj2 = {
		// 	a: 2,
		// 	obj1,
		// };
		// obj2.obj1.foo();
		// 3、显式绑定，通过call和apply将传入的第一个参数对象(字符串，布尔值，数字会被转换为相应的包装对象)强行绑定到this。
		// function foo() {
		// 	console.log(this.a);
		// }
		// var obj = {
		// 	a: 2,
		// };
		// foo.call(obj);
		// 硬绑定,如下，bar函数已经硬绑定this为obj对象，bar就不能再强行绑定this为其他对象了。
		// function foo(something) {
		// 	console.log(this.a, something);
		// 	return this.a + something;
		// }
		// var obj = {
		// 	a: 2,
		// };
		// var bar = function () {
		// 	return foo.apply(obj, arguments);
		// };
		// bar.call(window); //此句代码无效
		// var b = bar(3);
		// console.log(b);
		// ES5为函数原型提供了内置的bind方法，用于给函数指定this对象,bind方法返回的是一个新函数
		// function foo() {
		// 	return this.a;
		// }
		// const obj = {
		// 	a: 2,
		// };
		// const baz = foo.bind(obj);
		// console.log(baz());
		// bind函数实现大致如下：
		// function bind(fn, obj) {
		// 	return function () {
		// 		return fn.apply(obj, arguments);
		// 	};
		// }
		// function fn(something) {
		// 	return this.a + something;
		// }
		// const obj = {
		// 	a: 2,
		// };
		// const foo = bind(fn, obj);
		// console.log(foo(3));
		// 4、new绑定
		// js中的构造函数函数只是对函数的构造调用，不同与其他面向对象语言中构造函数对类进行基础构造的那样，只是被new 操作符调用的普通函数。
		// 使用new操作符调用构造函数时会执行以下操作：
		//（1）创建一个全新的对象
		//（2）对新对象执行[[Prototype]]连接
		//（3）将新对象绑定到函数调用的this
		//(4)如果函数没有返回其他对象，那么new 表达式中的函数调用会自动返回这个新对象
		//四大类优先级
		//(1)显式绑定优先级高于隐式绑定
		//(2)new优先级高于隐式绑定
		//(3)new优先级高于显式绑定（new 会生成一个函数调用的新this替换掉已经显式绑定的this)
		//(4)总结：new绑定>显式绑定>隐式绑定>默认绑定
		// function foo(p1, p2) {
		// 	this.val = p1 + p2;
		// }
		// //null会被下面的new 表达式生成的this替换掉，
		// // bind函数中会把除了第一位参数的所有参数(如下"p1")传给下层函数，这样可以预先设置一些参数，在使用new 初始化时可以只传入其他的参数
		// var bar = foo.bind(null, "p1");
		// var baz = new bar("p2");
		// console.log(baz.val);
		//以下情况上面的绑定规则会失效
		//1、将null和undefined传入apply,call和bind时会应用默认绑定规则，但不建议使用，可能会污染第三方函数中的this变量，建议传入Object.create(null)定义的空对象，会更加安全。
		//2、间接引用也会应用默认绑定规则，即把o.foo赋值给p.foo并执行，因为传递的是目标函数的引用，也会应用默认绑定规则。
		//软绑定：为了解决硬绑定带来的函数灵活性不够的问题，可以通过给默认绑定指定一个全局对象和undefined以外的值，可以达到硬绑定的效果，同时保留了隐式绑定或者显式绑定修改this的能力。
		if (!Function.prototype.softBind) {
			Function.prototype.softBind = function (obj) {
				var fn = this;
				debugger;
				var curried = [].slice.call(arguments, 1);
				var bound = function () {
					return fn.apply(
						!this || this === (window || global) ? obj : this,
						curried.concat.apply(curried, arguments)
					);
				};
				bound.prototype = Object.create(fn.prototype);
				return bound;
			};
		}
		function foo() {
			console.log("name:" + this.name);
		}
		var obj = {
				name: "obj",
			},
			obj2 = {
				name: "obj2",
			},
			obj3 = {
				name: "obj3",
			};
		var fooOBJ = foo.softBind(obj);
		fooOBJ();
		obj2.foo = foo.softBind(obj);
		obj2.foo();
		fooOBJ.call(obj3);
		setTimeout(obj2.foo, 10);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
