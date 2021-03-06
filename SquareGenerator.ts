class GeraQuadrado{
        largura: number;
        altura: number;
        larguraNew: number;
        alturaNew: number;
        iniRatio: number;
        ratio: number;
        fatorX: number;
        fatorY: number;

        constructor(x: number, y: number){
                this.largura = x;
                this.altura = y;
                this.larguraNew = x;
                this.alturaNew = y;
                this.iniRatio = this.larguraNew / this.alturaNew;
                this.gera();
        }
        gera(){
                let ratio = this.larguraNew / this.alturaNew;
                if(ratio < 1){
                        this.larguraNew = this.largura * ++this.fatorX;
                } else if(ratio > 1){
                        this.alturaNew = this.altura * ++this.fatorY;
                } else {
                        console.log(`TSTS: ${this.iniRatio}\n\rUma PARALELOGRAMO ${this.largura}x${this.altura}, precisa de ${this.fatorX} linhas e ${this.fatorY} colunas para formar um quadrado \n\r`)
                                    return true
                }
                this.gera();
        }
}

new GeraQuadrado(122.19,4.2333);
