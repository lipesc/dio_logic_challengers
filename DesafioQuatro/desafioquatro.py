def calcularImposto(salario):
  imposto = 0.00
  if (salario >= 0 and salario <=1100):
    imposto = 0.05
  elif (salario >= 1100.01 or salario <= 2500):
    imposto = 0.10
  else:
    imposto = 0.15
  
  return imposto * salario

valorSalario = float(input())
valorBeneficio = float(input())

valorImposto = calcularImposto(valorSalario)

saida = valorSalario - valorImposto + valorBeneficio
print(f'{saida:.2f}')
