function findObjProperties(obj){
	var string = "";
	for(var key in obj){
		if(Object.hasOwnProperty.call(obj, key)){
			string += key + ", ";
		}
	}
	return string;
}