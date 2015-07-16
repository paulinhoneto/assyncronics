/*
 *  Author      : Antônio Paulo Neto
 *  File        : assyncronics,js
 *  Description : Faz o load de maneira assíncrona, de uma enorme gama de frameworks a serem e 
 *	arregados na Memória, de acordo com a necessidade do desenvolvedor.	 			  .
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

	/* Asynchronous Loading Css */ 
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
		load: function () {
			getScript("http://code.jquery.com/jquery.min.js")
		}
	};
    
    // bootstrap load access in try bootstrap.load()
    var bootstrap = bootstrap || {};
	bootstrap = {
		load: function () {  
			getScript("https://netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"),
			getStyle("https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css")
	    }
	};

	// materialize load access in try materialize.load()
	var materialize = materialize || {};
	materialize = {
		load: function () {
			getScript("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/js/materialize.min.js"),
			getStyle("https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css")
		}
	};

	// modernizr load acess in try modernizr.load()
	var modernizr = modernizr || {};
	modernizr = {
		load: function () {
			getScript("http://modernizr.com/downloads/modernizr-latest.js")
		}
	};

	var foundation = foundation || {};
	foundation = {
		load: function () {
			getScript("https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.min.js"),
			getStyle("https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css")
		}
	};

	var ratchet = ratchet || {};
	ratchet = {
		load: function () {
			getScript("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/js/ratchet.min.js"),
			//getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet-theme-android.min.css"),
			//getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet-theme-ios.min.css"),
			getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/css/ratchet.min.css"),
			getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/fonts/ratchicons.woff")
			//getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/fonts/ratchicons.eot")
			//getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/fonts/ratchicons.svg")
			//getStyle("https://cdnjs.cloudflare.com/ajax/libs/ratchet/2.0.2/fonts/ratchicons.svg")
		}   
	};


	try{
		// Aqui-local do carregamento das dependências getScript para javascript getStyle para css
		ratchet.load()

	}catch(e){
		alert('error: '+ e.message);
	}

})();	

