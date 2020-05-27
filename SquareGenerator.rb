class GeraQuadrado
  attr_accessor :largura, :altura, :larguraNew, :alturaNew, :ratio, :iniRatio, :fatorX, :fatorY

  def initialize(x,y)
    @fatorX = 1
    @fatorY = 1
    @largura = x
    @altura = y
    @larguraNew = x
    @alturaNew = y
    @iniRatio = larguraNew / alturaNew
    gera
  end

  def gera
    ratio = larguraNew / alturaNew
    if ratio < 1
      @fatorX = fatorX + 1
      @larguraNew = largura * fatorX
    elsif ratio > 1
      @fatorY = fatorY + 1
      @alturaNew = altura * fatorY
    else 
      puts "RUBY: #{iniRatio}"
      puts "Uma PARALELOGRAMO #{largura}x#{altura}, precisa de #{fatorX} linhas e #{fatorY} colunas para formar um quadrado \n\r"
      return true
    end
    gera
  end
end

GeraQuadrado.new(122.19,4.2333)
