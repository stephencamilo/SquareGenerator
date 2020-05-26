<?php
class GeraQuadrado{
        private $largura;
        private $altura;
        private $larguraNew;
        private $alturaNew;
        private $fatorX = 1;
        private $fatorY = 1;
        private $ratio;
        private $iniRatio;

        function __construct($x,$y){
                $this->largura = $x;
                $this->altura = $y;
                $this->larguraNew = $x;
                $this->alturaNew = $y;
                $this->iniRatio = $this->larguraNew / $this->alturaNew;
                $this->gera();
        }

        function gera(){
                $this->ratio = $this->larguraNew / $this->alturaNew;
                if($this->ratio < 1){
                        $this->larguraNew = $this->largura * ++$this->fatorX;
                } else if($this->ratio > 1){
                        $this->alturaNew = $this->altura * ++$this->fatorY;
                } else {
                        echo "INIRATIO: $this->iniRatio\n\r";
                        echo "Uma PARALELOGRAMO {$this->largura}x{$this->altura}, precisa de $this->fatorX linhas e $this->fatorY colunas para formar um quadrado \n\r";
                        echo "TOTALIZANDO ".$this->fatorX*$this->fatorY.") peças\n\r\n\r";
                        return true;
                }
                $this->gera();
        }
}

$a = new GeraQuadrado(1.9249,42.092);
