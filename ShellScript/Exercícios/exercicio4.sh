#!/bin/bash

read -p "Digite o nome do arquivo com o seu caminho: " arquivo

#caminho=/home/hugo/Área\ de\ Trabalho/Trybe\ Aulas/ShellScript

if [ -e "$arquivo" ]
then
	echo "O caminho está habilitado."
else 
        echo "O caminho NÃO está habilitado."
fi
	
if [ -w "$arquivo"  ]
then
	echo "Você tem permissão para editar $arquivo"
else
	echo "Você não foi autorizado a editar $arquivo"
fi

