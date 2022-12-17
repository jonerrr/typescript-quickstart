import "dotenv/config";

function foo(bar: string, i: number) {
	while (i) {
		console.log(bar);
		i--;
	}
	return bar;
}

foo("bar", 1);

export default foo;
