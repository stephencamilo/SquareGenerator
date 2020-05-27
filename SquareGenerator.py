class GeraQuadrado:
    def __init__(self, x, y):
        self.fatorX = 1
        self.fatorY = 1
        self.largura = x
        self.altura = y
        self.larguraNew = x
        self.alturaNew = y
        self.iniRatio = self.larguraNew / self.alturaNew
        self.gera()

    def gera(self):
        ratio = self.larguraNew / self.alturaNew
        if ratio < 1:
            self.fatorX = self.fatorX + 1
            self.larguraNew = self.largura * self.fatorX
        elif ratio > 1:
            self.fatorY = self.fatorY + 1
            self.alturaNew = self.altura * self.fatorY
        else: 
            print(f'PYTH: {self.iniRatio}\n\rUm PARALELOGRAMO {self.largura}x{self.altura}, precisa de {self.fatorX} linhas e {self.fatorY} colunas para formar um quadrado')
            return True
        self.gera()

GeraQuadrado(122.19,4.2333)
