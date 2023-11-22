const me = {
    name: "Michaela",
    age: 29,
    job: "Bereavement Advisor - wah",
    hobbies: ["gaming", "reading"],
    pets: [ 
        {
            name: "Arianna",
            species: "Cat"
         },
         {
            name: "Audrey",
            species: "Cat"
         }
        ],
}

const mark = {
    name: "Mark",
    age: 34,
    job: "Fullstack dev",
    hobbies: ["games", "coding"],
    pets: [
        {
           name: "Saoirse",
           species: "Cat",
        }
        ],
    }

const Maria = {
    name: "Maria",
    age: 45,
    job: "Boopin",
    hobbies: ["gaming", "music"],
    pets: ["Mooosey"],
}
const people = [me, mark, Maria];
// Use this command to only print the following info on: me
//console.log("moi", me.name, me.age, me.job, me.hobbies, me.pets);
//use this command to printloop everyone
//for (let i = 0; i < people.length; i++)
//use this command to printloop everyone
//console.log("People", i, people[i]);

let oldest = {age: 0}

for (let person of people)
{
    if (person.age > oldest.age) oldest = person;
}
console.log(oldest)