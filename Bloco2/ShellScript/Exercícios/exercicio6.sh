#!/bin/bash

echo "-=-=-=-=-= EXERCÍCIO 6 =-=-=-=-=-=-"
echo ""
read -p "Digite um caminho de arquivo ou diretório: " var1
echo ""
if [ -d "$var1" ]
then
	echo "Este é um diretório."
elif [ -f "$var1"  ]
then
	echo "Este é um arquivo."
else
	echo "Não sei o que é, mas não é um arquivo comum nem um diretório."
fi

echo "ls -la $var1"


