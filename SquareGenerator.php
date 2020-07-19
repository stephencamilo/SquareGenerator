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

        function __construct(){
                $this->largura = 13.19323757;
                $this->altura = 19323757.2339;
                $this->larguraNew = $this->largura;
                $this->alturaNew = $this->altura;
                $this->iniRatio = $this->larguraNew / $this->alturaNew;
                $this->ratio = $this->larguraNew / $this->alturaNew;
                while($this->ratio != 1){
                        $this->gera();
                }
                var_dump("PHP: ".$this->iniRatio."\n\rUma PARALELOGRAMO ".$this->largura."x".$this->altura.", precisa de ".$this->fatorX." linhas e ".$this->fatorY." colunas para formar um quadrado\n\r");
        }

        function gera(){
                $this->ratio = $this->larguraNew / $this->alturaNew;
                if($this->ratio < 1){
                        $this->larguraNew = $this->largura * ++$this->fatorX;
                } else if($this->ratio > 1){
                        $this->alturaNew = $this->altura * ++$this->fatorY;
                }
                //var_dump("RATIO: ".$this->ratio);
        }
}

$a = new GeraQuadrado();
