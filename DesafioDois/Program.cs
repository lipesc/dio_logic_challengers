public class DesafioDois
{
  public static void Main()

  {

    float valorSalario = float.Parse(Console.ReadLine());
    float valorBeneficios = float.Parse(Console.ReadLine());

    float imposto = 0;

    if (valorSalario >= 0 && valorSalario <= 1100.00)
      imposto = 0.05f * valorSalario;
    else if (valorSalario >= 1100.01 && valorSalario <= 2500.00)
      imposto = 0.10f * valorSalario;
    else
      imposto = 0.15f * valorSalario;

    float saida = valorSalario - imposto + valorBeneficios;
    Console.WriteLine(saida.ToString("0.00"));

  }
}