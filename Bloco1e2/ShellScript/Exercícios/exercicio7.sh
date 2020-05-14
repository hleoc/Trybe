#!/bin/bash

file=$1

if  [ -d "$file" ]
then
	echo "$file é um diretório."
elif [ -f "$file" ]
then 
	echo "$file é um arquivo."
else
	echo "$file é outra coisa"
fi

ls -la $file
