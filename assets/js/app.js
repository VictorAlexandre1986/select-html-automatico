let selectElement = document.querySelector('select')

let nomes = ['Fulano','Sicrano','Beltrano'];

nomes.forEach((nome,i) =>(
        selectElement.options[i] = new Option(nome, i)
));
