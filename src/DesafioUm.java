import java.util.Scanner;

public class DesafioUm {
    public static void main(String[] args) throws Exception {
        // read the input
        Scanner scanner = new Scanner(System.in);
        float valorSalario = scanner.nextFloat();
        float valorBeneficios = scanner.nextFloat();

        // close the scanner
        scanner.close();

        // calculate the salary
        float imposto = 0;
        if (valorSalario >= 0 && valorSalario <= 1100.00)
            // if the salary is between 0 and 1100, the tax is 0.05
            imposto = 0.05f * valorSalario;
            else if (valorSalario >= 1100.01 && valorSalario <= 2500.00)
            imposto = 0.10f * valorSalario;
            else 
            imposto = 0.15f * valorSalario;
        
        // print the result
        float saida = valorSalario - imposto + valorBeneficios;
        System.out.printf("%.2f", saida);
    }

}
