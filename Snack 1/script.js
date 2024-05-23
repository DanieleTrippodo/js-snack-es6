// Tavolo degli invitati
const tableName = 'Tavolo Vip';



// Lista delle persone invitate
const guests = [
    'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo',
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney',
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'
];


// Creazione della lista dei segnaposto
const placeholders = guests.map((guest, index) => ({
    tableName: tableName,
    guestName: guest,
    place: index + 1
}));



// verifica in console
console.log('Lista degli invitati',placeholders);