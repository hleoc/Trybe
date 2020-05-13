#!/bin/bash

echo "-=-=-=-=-=-= CALCULADORA =-=-=-=-=-=-"
read -p "Digite o primeiro número: " n1
read -p "Digite o segundo número: " n2
scale=2; $n1 / $n2 | bc
echo ""
echo "O resultado é: "  $[ $n1 / $n2 ]
