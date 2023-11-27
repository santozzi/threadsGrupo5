#! /bin/bash

aleatorio=$(( $RANDOM % 30 + 1))
count=1
total=11
acerto=0


while [[ $count -lt $total && $acerto -eq 0 ]]
do 
   
   echo "En que numero estoy pensando?: "
   read numero
   
   if [ $numero -eq $aleatorio ]
   then
     acerto=1
     if [ $count -le 3 ]
     then
        printf "\033[102m"
        echo "congratulaciones!!"
        printf "\033[40m"
        echo "lo adivinaste al intento n $count"
     else
        echo "bien, pudo haber sido mejor lo adivinaste de suerte al intento $count"
     fi

   elif [ $numero -ge $aleatorio ]
   then
       echo "Te pasaste viej@ (escribir num menor)"
   else
       echo "Te quedaste cort@ (escribir num mayor)"
   fi
   count=$((count +1))
   if [ $count -eq $total ] && [ $acerto -eq 0 ]
   then
     echo "Hoy no es tu día de suerte"
     echo "El numero misterioso era el $aleatorio"
   fi
  
   if [ $acerto -eq 1 ] || [[ $count -eq $total  &&  $acerto -eq 0 ]]
   then
     echo "Revancha? y/n"
     read revancha
     
     if [[ "$revancha" == "y" ]]
     then
      aleatorio=$(( $RANDOM % 30 + 1))
      count=1
      acerto=0
     else
       echo "Nos vemos!!"
     fi
   fi
done


