#!/bin/bash


diretorio=$1

if [ -d "$diretorio" ]
then
	arquivo=`ls -l $diretorio | wc -l`
	echo "O $diretorio tem $arquivo arquivos."

else 
	echo "O argumento $diretorio não é um diretório."

fi
