class Usuario {

    constructor(name,surname){
        this.name = name;
        this.surname = surname;
        this.books = [];
        this.mascotas = [];
    }
    getFullname(){
        console.log(`${this.name} ${this.surname}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        const amount = this.mascotas.length
        const text = amount > 1 ? `tiene ${amount} mascotas`: 'tiene una mascota' ;
        console.log(`${this.name} ${amount === 0 ? 'no tiene mascota': text}`);
    }
    addBook(book, autor){
        this.books.push({book, autor}) 
    }
    getBooksNames(){
        console.log(this.books.map((e) => e.book))
    }
}
const user = new Usuario('Luna', 'Gatica')
user.getFullname()

user.addMascota('perro');
user.addMascota('gato');
user.countMascotas();

user.addBook('La mujer rota', 'Simone de Beauvoir');
user.addBook('Coraline', 'Neil Gaiman');
user.addBook('La batalla del futuro', 'Mateo & Augusto Salvatto');
user.getBooksNames();