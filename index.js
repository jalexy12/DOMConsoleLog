var console = {
	log: function(){
		var args = Array.prototype.slice.call(arguments);
    var that = this;
    
		args.forEach(function(arg){
      that.appendItem(arg)
    })
	},

	appendItem: function(item){
		var body = document.getElementsByTagName("body")[0]
    var div = document.createElement("div") 
    var txt = document.createTextNode(item)
    
    div.appendChild(txt)
    body.appendChild(div)
	}
}
