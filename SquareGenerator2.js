let attrs = {
	init: function(x,y){
		attrs.largura = x;
		attrs.altura = y;
		attrs.fatorX = 1;
		attrs.fatorY = 1;
		attrs.larguraNew = x;
		attrs.alturaNew = y;
		attrs.gera();
	},
	get iniRatio() {
		return this.larguraNew / this.alturaNew
	},
	gera: function() {
		attrs.ratio = attrs.larguraNew / attrs.alturaNew;
		if(attrs.ratio < 1){
			attrs.larguraNew = attrs.largura * ++attrs.fatorX;
		} else if(attrs.ratio > 1){
			attrs.alturaNew = attrs.altura * ++attrs.fatorY;
		} else {
			console.log(attrs.iniRatio);
			console.log(`INIRATIO: ${attrs.iniRatio}\n\r`);
			console.log(`Uma PARALELOGRAMO ${attrs.largura}x${attrs.altura}, precisa de ${attrs.fatorX} linhas e ${attrs.fatorY} colunas para formar um quadrado \n\r`);
			console.log("TOTALIZANDO "+attrs.fatorX*attrs.fatorY+" ("+attrs.fatorX*attrs.fatorY+") peças\n\r\n\r");
			return true;
		}
		attrs.gera();
	}
}

attrs.init(12.3,3);
