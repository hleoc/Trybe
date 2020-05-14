#!/bin/bash



var1="Marcelo"
var2="João"
var3="Guilherme"

if ls $var1
then
	echo "Diretório $var1 encontrado"
elif ls $var2
then
	echo "Diretório $var2 encontrado"
elif ls $var3
then
	echo "Diretório $var3 encontrado"
else
	echo "Não existe nenhum diretório com estes nomes."
fi	

