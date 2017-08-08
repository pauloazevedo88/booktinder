
console.log("helloworld");

function Stack(){

	this.data = [];

	this.push = function(element){
		this.data.push(element);
	}

	this.pop = function(){
		var result = this.data[this.data.length-1];

		// this.data.remove(this.data.length-1);
		this.data.pop();


		return result;
	}

};

function Car(brand,model){
	this.brand = brand;
	this.model = model;
}

var stack1 = new Stack();

// Stack.push() - nao fazer isso, coisas do domonio 666

stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);


var hondaCivic = new Car("Honda","Civic");
var citroenC4 = new Car("Citroen","C4");

var ferroVelho = new Stack();

ferroVelho.push(citroenC4);