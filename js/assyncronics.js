/*
 *  Author      : Antônio Paulo Neto
 *  File        : assyncronics,js
 *  Description : Faz o load de maneira assíncrona, de uma enorme gama de frameworks a serem e 
 				  carregados na Memória, de acordo com a necessidade do desenvolvedor.	 
 				  .
 *  Data        : 15/07/2015    
 */

"use strict";

(function() {

	/* Asynchronous Loading Javascript */ 
	var getScript = function (src) {
		var s = document.createElement('script');

		s.src = src;
		document.body.appendChild(s);
	};

	var getStyle = function (src) {
		var lnk = document.createElement('link');
		lnk.setAttribute('type', "text/css" );
		lnk.setAttribute('rel', "stylesheet" );
		lnk.setAttribute('href', src );
		document.getElementsByTagName("head").item(0).appendChild(lnk);
	};

	var loadScriptTime = (new Date).getTime();

	// jquery load access in try jquery.load()
	var jquery = jquery || {};
	jquery = {
		load: function(){
			getScript("http://code.jquery.com/jquery.min.js")
		}
	};
    
    // bootstrap load access in try bootstrap.load()
    var bootstrap = bootstrap || {};
	bootstrap = {
		load: function() {  
			jquery.load(),
			modernizr.load(),
			getScript("https://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"),
			getStyle("https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css")
	    }
	};

	// materialize load access in try materialize.load()
	var materialize = materialize || {};
	materialize = {
		load: function() {
			jquery.load(),
			modernizr.load(),
			getScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js"),
			getStyle("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css")
		}
	};

	var modernizr = modernizr || {};
	modernizr = {
		load: function(){
			getScript("http://modernizr.com/downloads/modernizr-latest.js")
		}
	};

	var foundation = foundation || {};
	foundation = {
		load: function(){
			modernizr.load(),
			getScript("https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.min.js"),
			getStyle("https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css")
		}
	};

	try{
		// Aqui-local do carregamento das dependências getScript para javascript getStyle para css
		foundation.load()
	}catch(e){
		alert('error: '+ e.message);
	}

})();	

