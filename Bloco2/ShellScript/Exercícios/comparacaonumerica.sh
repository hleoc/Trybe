#!/bin/bash


echo "-=-=-=-=-=-= COMPARAÇÃO NUMÉRICA =-=-=-=-=-=-"
read -p "Digite o primeiro número: " n1
read -p "Digite o segundo número: " n2

if [ $n1 -gt $n2 ] 
then
	echo "O número $n1 é maior que o número $n2"
elif [ $n2 -gt $n1 ]
then
	echo "O número $n2 é maior que o número $n1"
else 
	echo "O primeiro número é igual ao segundo número."
fi
