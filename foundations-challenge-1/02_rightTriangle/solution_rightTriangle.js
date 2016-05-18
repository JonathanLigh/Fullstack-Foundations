function rightTriangle(num){
	var triangle = "";
	var length = num;

	for (var i = 0; i < length; i++){
		for(var j = 0; j < num; j++){
			triangle+= "*";
		}
		if(num!=1){
			triangle+="\n";
			num--;
		}
		else{triangle+="";}
	}
	return triangle;
}