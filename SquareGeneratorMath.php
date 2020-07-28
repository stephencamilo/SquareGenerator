<?php
$x = 13.19323757;
$y = 19323757.2339;
$iniRatio = $x / $y;
$area = $x * $y;
$colunas = 1;
$linhas = 0;
do {
    $linhas = $colunas * $y / $x;
    $colunas++;
} while (floor($linhas) != $linhas);
$colunas--;
echo("Area: $area\n");
echo("Iniratio: $iniRatio\n");
echo("Uma PARALELOGRAMO $x x $y, precisa de $linhas linhas e $colunas colunas para formar um quadrado\n");