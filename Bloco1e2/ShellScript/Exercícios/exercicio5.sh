#!/bin/bash

#arquivo=/home/hugo/Área\ de\ Trabalho/Trybe\ Aulas/ShellScript/lista.txt
#arquivo=/home/hugo/lista.txt
arquivo=/home/hugo/Área*/Trybe*/ShellScript/lista.txt

for nomes in `cat $arquivo`
do 
        echo $nomes 
done
