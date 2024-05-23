// Elenco degli studenti
let students = [
    { id: 213, name: 'Giuseppina della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
];


// convertiamo tutti i nomi degli studenti in maiuscolo
const uppercaseNames = students.map(student => student.name.toUpperCase());





// Lista degli studenti con voto 70
const highGrades = students.filter(student => student.grades > 70);

// Lista degli studenti con voto 120
const highGradesHighId = students.filter(student => student.grades > 70 && student.id > 120);




// ! Aggiungiamo gli elementi nelle liste ---------------------------------
// Aggiungi nomi in maiuscolo alla lista
appendToList('Nomi in maiuscolo', uppercaseNames);

// Aggiungi studenti con voti > 70 alla lista
appendToList('Voti Superiori al 70', highGrades.map(student => `${student.name} (ID: ${student.id}, Grades: ${student.grades})`));

// Aggiungi studenti con voti > 70 e ID > 120 alla lista
appendToList('Voti superirori al 120 e ID', highGradesHighId.map(student => `${student.name} (ID: ${student.id}, Grades: ${student.grades})`));
// ! Aggiungiamo gli elementi nelle liste --------FINE----------------------










// # Sezione Funzioni --------------------------------------------------------
// Funzione per creare e appendere elementi alla lista
function appendToList(listId, items) {
    const list = document.getElementById(listId);
    if (list) {
        list.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    } else {
        console.error(`errore`);
    }
}