HashMap = function(){
  this._dict = [];
}
HashMap.prototype._get = function(key){
  for(var i=0, couplet; couplet = this._dict[i]; i++){
    if(couplet[0] === key){
      return couplet;
    }
  }
}

HashMap.prototype.key = function(value){
  for(var i=0, couplet; couplet = this._dict[i]; i++){
    if(couplet[1] === value){
      return couplet[0];
    }
  }
}

HashMap.prototype.put = function(key, value){
  var couplet = this._get(key);
  if(couplet){
    couplet[1] = value;
  }else{
    this._dict.push([key, value]);
  }
  return this; // for chaining
}
HashMap.prototype.get = function(key){
  var couplet = this._get(key);
  if(couplet){
    return couplet[1];
  }
}

HashMap.prototype.values = function(){
	var values = [];
	for(var i=0;i<this._dict.length;i++) {
		values[i] = this._dict[i][1];
	}
	
	return values;
}

HashMap.prototype.keys = function(){
	var values = [];
	for(var i=0;i<this._dict.length;i++) {
		values[i] = this._dict[i][0];
	}
	
	return values;
}
