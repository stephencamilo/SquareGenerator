public class SquareGenerator{
        private static double largura;
        private static double altura;
        private static double larguraNew;
        private static double alturaNew;
        private static double fatorX = 1;
        private static double fatorY = 1;
        private static double ratio;
        private static double iniRatio;

        public static void main(String args[]){
                largura = 13.19323757;
                altura = 19323757.2339;
                larguraNew = largura;
                alturaNew = altura;
                iniRatio = larguraNew / alturaNew;
                ratio = larguraNew / alturaNew;
                while(ratio != 1){
                        gera();
                }
                System.out.println("JAVA: "+iniRatio+"\n\rUma PARALELOGRAMO "+largura+"x"+altura+", precisa de "+fatorX+" linhas e "+fatorY+" colunas para formar um quadrado\n\r");
        }
        
        public static void gera(){
                ratio = larguraNew / alturaNew;
                if(ratio < 1){
                        larguraNew = largura * ++fatorX;
                } else if(ratio > 1){
                        alturaNew = altura * ++fatorY;
                }
                //System.out.println("RATIO: "+ratio);
        }
}