class GeraQuadrado{
        constructor(x,y){
                this.largura = x;
                this.altura = y;
                this.larguraNew = x;
                this.alturaNew = y;
                this.iniRatio = this.larguraNew / this.alturaNew;
                this.gera();
        }

        gera(){
                this.ratio = this.larguraNew / this.alturaNew;
                if(this.ratio < 1){
                        this.larguraNew = this.largura * ++this.fatorX;
                } else if(this.ratio > 1){
                        this.alturaNew = this.altura * ++this.fatorY;
                } else {
                        console.log(`INIRATIO: ${this.iniRatio}\n\r`);
                        console.log(`Uma PARALELOGRAMO ${this.largura}x${this.altura}, precisa de this.fatorX linhas e this.fatorY colunas para formar um quadrado \n\r`);
                        console.log("TOTALIZANDO "+this.fatorX*this.fatorY+" ("+this.fatorX*this.fatorY+") peças\n\r\n\r");
                        return true;
                }
                this.gera();
        }
}

new GeraQuadrado(1.99,42.02);
