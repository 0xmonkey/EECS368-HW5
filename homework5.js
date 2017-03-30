var main = function(x){
	var num0 = Math.floor(Math.random()*10) + 1;
	var num1 = Math.floor(Math.random()*10) + 1;
	var fii = compute(num0, num1);
};

var compute = function(x,y){
	chalk.println("What is " + x + " + " + y + " ?" );
	var p1 = chalk.entrybox();
	p1.then(function(o) { 
	    if (o == (x + y)) {
			chalk.println("Corrct! Next round!");
			main();
	    } else {
			chalk.println("WRONG! try again.");
			compute(x,y);
	    }
    });
}