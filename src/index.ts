import "dotenv/config";

function foo(bar: string, i: number) {
	while (i) {
		console.log(bar);
		i--;
	}
	return bar;
}

export default foo;
