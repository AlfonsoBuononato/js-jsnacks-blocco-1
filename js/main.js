/*Snack 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while*/



/*var somma = 0;

for(i = 0; i < 5; i++){
    numeri = parseInt(prompt("inserire un numero"));
    somma += numeri;
}
console.log(somma);*/




/*Snack 2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo*/

/*var numero = parseInt( prompt("inserisci un numero") );

if(numero % 2 != 0){
    console.log(numero + 1);
}else{
    console.log(numero);
}*/






/*Snack 3
Generatore di “nomi cognomi” casuali:
prendendo una lista di nomi e una lista di cognomi, Gatsby
vuole generare una falsa lista di 3 invitati.*/

/*var nomi = ["alfonso", "nicola", "alice", "pasquale"];

var cognomi = ["buononato", "cacace", "cicillo", "piscinola"];

var falsaLista = [];

for(i = 1; i <= 3; i++){
    var nomiLista = Math.floor( (Math.random() * nomi.length ));
    

    var cognomiLista = Math.floor( (Math.random() * cognomi.length ));
    falsaLista.push(nomi[nomiLista] + " " + cognomi[cognomiLista]);
}
console.log(falsaLista);*/







/*Snack 4
Crea un array di numeri interi e fai la
somma di tutti gli elementi che sono in posizione dispari*/

/*var numeri= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somma = 0;

for(i = 0; i < numeri.length; i++) {
    
    if(i % 2 !== 0){
        somma += numeri[i];
    }
}

console.log(somma);*/



/*Snack 5 - Bonus
Crea due array di numeri che hanno
un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a
quando ne avrà tanti quanti l’altro.*/

var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array2 = [1, 2, 3, 4, 5];

for(i = 0; i < array1.length || i < array2.length; i++){
    var aggiungiElemento = Math.floor(Math.random()*10)+1;
    if(array2.length < array1.length){
        array2.push(aggiungiElemento);
    }else if(array1.length < array2.length){
        array1.push(aggiungiElemento);
    }
}
console.log(array1);

console.log(array2);




