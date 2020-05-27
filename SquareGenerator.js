var GeraQuadrado = /** @class */ (function () {
    function GeraQuadrado(x, y) {
        this.largura = x;
        this.altura = y;
        this.larguraNew = x;
        this.alturaNew = y;
        this.iniRatio = this.larguraNew / this.alturaNew;
        this.gera();
    }
    GeraQuadrado.prototype.gera = function () {
        this.ratio = this.larguraNew / this.alturaNew;
        if (this.ratio < 1) {
            this.larguraNew = this.largura * ++this.fatorX;
        }
        else if (this.ratio > 1) {
            this.alturaNew = this.altura * ++this.fatorY;
        }
        else {
            console.log("TSTS: " + this.iniRatio + "\n\r\n                        Uma PARALELOGRAMO " + this.largura + "x" + this.altura + ", precisa de " + this.fatorX + " linhas e " + this.fatorY + " colunas para formar um quadrado \n\r");
            return true;
        }
        this.gera();
    };
    return GeraQuadrado;
}());
new GeraQuadrado(1.9, 4.2);
