#!/bin/bash

for item in /home/hugo/*
do
     if [ -d $item ]
     then
            echo "O item $item é um diretório."
     elif [ -f $item ]
     then
            echo "O item $item é um arquivo."

     fi
done
