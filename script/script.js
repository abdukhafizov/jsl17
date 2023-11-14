let people = [
    {
        name: "bobur",
        age: 43,
        isMarried: false,
        wifes: ['kamila', 'safir', 'allayor']
    },
    {
        name: "ismail",
        age: 12,
        isMarried: true,
        wifes: ['nikita', 'malika']
    },
    {
        name: "allayor",
        age: 14,
        isMarried: true,
        wifes: ['denis', 'dima', 'dimon', 'xbegim']
    },
    {
        name: "sarodr ml",
        age: 18,
        isMarried: false,
        wifes: ['safiya']
    },
]
//запушить всех в массив giulties у кого больше 1 жены
let guilties = []
let point = ", "
for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (person.wifes.length > 1) {
        guilties.push(person);
        document.write("Нарушители")
        document.write('<p>Name: ' + person.name + ', Age: ' + person.age + ', Wifes: ' + person.wifes +'</p>');
    }else if(people.age <= 18)
}


console.table(guilties);





