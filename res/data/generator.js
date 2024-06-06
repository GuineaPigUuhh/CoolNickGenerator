let nick = '';

let possibles_1 = [
    "Remo",
    "Nemo",
    "Rabo",
    "Stick",
    "Cabo",
    "Destruidor",
    "Cavalo",
    "Megamente",
    "Menino",
    "Machado",
    "Macho",
    "Sigma",
    "Betinha",
    "Beta",
    "MB",
    "Rapper",
    "Coelho",
    "Fumante",
    "Gato",
    "Cat",
    "Dog",
    "Garfield",
    "Big",
    "Ney",
    "Bruh",
    "Talvez",
    "Bizarro",
    "Bird",
    "Pinto",
    "Pintinho",
    "Ironico"
], possibles_2 = [
    "Carecudo",
    "Caloteiro",
    "Safadinho",
    "Calvo",
    "2469",
    "24",
    "69",
    "Fofo",
    "Cuttie",
    "Cute",
    "Receba",
    "Perceba",
    "Ney",
    "Careca",
    "Cabeludo",
    "Fei",
    "Nice",
    "Boludo",
    "RS",
    "SP",
    "BH",
    "Idk",
    "Lmao",
    "LOL",
    "Problems",
    "NoProblems",
    "Nip",
    "Baka",
    "Fortnite",
    "Fort",
    "Nite"
];

function generate()
{
    let part1 = random_array(possibles_1);
    let part2 = random_array(possibles_2);
    let part3 = Math.floor(Math.random() * 9999);

    nick = part1 + part2 + '#' + part3;

    document.getElementById('nickoutput').innerHTML = 'Output: ' + '<b>' + nick + '</b>';

    console.log(nick);
}