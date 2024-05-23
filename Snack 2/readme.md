# SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Giuseppina della Rovere 78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84





# Svolgimento
creiamo una variabile constante tutti gli studenti in un array ad oggetti

convertiamo tutti i nomi in uppercase con "map" per prendere i nomi

possiamo usare "filter" per creare una nuova lista degli studenti con i voti superiori a 70

usiamo lo stesso metodo con "filter" per prendere quelli con 120

aggiungiamo gli elementi corrispondenti in una lista nel DOM

