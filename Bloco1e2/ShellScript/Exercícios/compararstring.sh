#!/bin/bash

echo "-=-=-=-=-= COMPARANDO STRINGS =-=-=-=-=-"
read -p "Digite o primeiro nome: " "nome1"
read -p "Digite o segundo nome: " "nome2"



if [[ "$nome1" > "$nome2" ]]
then
	echo "O nome $nome1 é maior que o nome $nome2"

elif [[ "$nome1" < "$nome2" ]]
then
	echo "O nome $nome2 é maior que o nome $nome1"

elif [[ "$nome1" == "$nome2" ]]
then
	echo "Os dois nomes têm o mesmo tamanho."

fi 
