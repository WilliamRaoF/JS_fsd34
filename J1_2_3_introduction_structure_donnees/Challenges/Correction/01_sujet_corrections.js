const populations = [
    { id: 0, name: "Alan", jobs: ['dev junior', 'dev fullstack'], password: "Axgkj00Kl" },
    { id: 1, name: "Albert", jobs: ['doctor'], password: "tyeidii00" },
    { id: 2, name: "Jhon", jobs: ['mathematician', 'doctor'], password: "xyuuuoi00" },
    { id: 3, name: "Brice", jobs: ['dev fullstack'], password: "aaaoiab33" },
    { id: 4, name: "Alexendra", jobs: ['dentist'], password: "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl", jobs: ['lead dev', 'dev fullstack'] },
    { id: 7, name: "Dallas", jobs: ['dev fullstack'] },
    { id: 8, name: "Dennis", jobs: ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs: ['mathematician'] },
    { id: 10, name: "Erika", jobs: ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs: ['doctor'], password: "Axgkj00Kl" },
    { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// 1. Comptez tous les docteurs.


const jobs = populations.map(person => person.jobs);
console.log(jobs);


const jobs_v2 = jobs
    .filter(j => j != undefined)
    .filter(j => j.includes('doctor'));
console.log(jobs_v2.length); // nombre de doc 


// 2. Récupérez les noms des développeurs fullstack.

const devFullStack = [];
populations.map(person => {
    if (person.jobs != undefined && person.jobs.includes('dev fullstack')) {
        devFullStack.push(person.name);
    }
});

console.log(devFullStack)

// 3. Récupérez les noms des personnes qui n'ont jamais travaillés.
const noJobs = [];
populations.map(person => {
    if (person.jobs == undefined) {
        noJobs.push(person.name);
    }
});

console.log(noJobs)

// 4. Etudiez les mots de passe de chaque personne, comptez leurs occurences pour chaque lettre distincte.

// 4.1 récupérer les mots de passe (si il existe ) avec le nom de la personne

let persWithPassword = populations
    .filter(person => person.password != undefined)
    .map(person => ({ name: person.name, password: person.password }))

console.log(persWithPassword);

// 4.2 Comptez leurs occurences pour chaque lettre distincte.

const countOccurence = (phrase) => {
    const letters = new Set(phrase);
    const statistic = [];
    const sentencesArray = [...phrase];

    for (const letter of letters) {
        const count = sentencesArray.filter(l => l === letter).length;

        statistic.push({ letter, count });
    }
    return statistic;
}

let longestPassword = [];
let longestPasswordOccurences = [];


for (let person of persWithPassword) {

    person.occurences = countOccurence(person.password);
    console.log('Nom: ', person.name, '\nOccurences: ', person.occurences)

    if (person.occurences.length > longestPasswordOccurences.length) {
        longestPasswordOccurences = person.occurences
        longestPassword = person.password
    }

    let doubleZero = Object.keys(person.occurences).some(function (k) {
        if (person.occurences[k].letter === '0' && person.occurences[k].count === 2)
            return true;
    })
    console.log('Le mot de passe:', person.password, 'contient deux 0? : ', doubleZero, '\n');

}

function checkPassword(data) {
    let samePass = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = i+1; j < data.length; j++) {
            if (data[i].password === data[j].password && data[i] != data[j]) {
                samePass.push([data[i].password, data[i].name, data[j].name]);
            }
        }
    }
    return samePass;
}

console.log(checkPassword(persWithPassword));
console.log('Le plus de caracteres uniques? :', longestPassword);





