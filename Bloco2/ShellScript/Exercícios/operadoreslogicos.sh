#!/bin/bash
read -p "Diginte o usuário: " usuario

if [ $USER = $usuario ] && [ -x operadores.sh ]
then
	echo "O usuário é o $USER e tem permissão sobre o arquivo" 
else
	echo "ou o usuário não é o $USER  ou não tem permissão sobre o arquivo"
fi


