read -p "Digite o nome do arquivo ou diretório: " arq

if [ -f $arq ]
then
	echo "$arq é um arquivo"
elif [ -d $arq ]
then
	echo "$arq é um diretório"
else
	echo "não sei o que é"
fi				
