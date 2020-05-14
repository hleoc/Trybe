#!/bin/bash

file=$@

for arg in $file
do 
	if [ -d "$arg" ]
	then
		echo "$arg isso é um diretório."
	elif [ -f "$arg" ]
	then
		echo "$arg isso é um arquivo."
	else
		echo "$arg é outra coisa."
	fi

	ls -la $arg
done 


