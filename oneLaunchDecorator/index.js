//create 2 different test functions
function test (str) {
	console.log(str);
}

function test2 (str) {
	console.log(str);
}

//create function-decorator, that limits launches of function
function onceTimeDecorator (f) {
	var functions = {};
	return function () {
		if (functions[f]) {
			return new Function;
		} else {
			functions[f] = true;
			return f.apply(this, arguments);
		};
	}
}

//apply the decoratior to functions
test = onceTimeDecorator(test)
test2 = onceTimeDecorator(test2)

//testing
test('test');//launches
test2('test2');//launches
test('test');//dont launches
test2('test2');//dont launches
test('test');//dont launches
test2('test2');//dont launches