const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0,newVal) {
        return sum + newVal;
    }
)

const credits = notes.map(function(noteObject){//nuevo arreglo credits unicamente con los creditos de cada materia
    return noteObject.credit;
});

const sumOfcredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
});

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfcredits;
