#!/bin/bash

arquivo=/home/hugo/lista.txt

#arquivo=~/ShellScript/lista.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done



