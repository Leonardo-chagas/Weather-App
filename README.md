aplicação de React que consome a API weatherapi.com e apresenta os dados climáticos para o usuário. Para realizar o consumo da API, foi utilizado o axios, ferramenta essa que coleta os dados e os transforma em um objeto javascript com o mesmo comando.

A aplicação permite que o usuário busque o nome de uma cidade, com sistema de autocomplete para facilitar a busca da cidade que o usuário quer.

Para utilizar essa aplicação é necessário criar um arquivo .env e adicionar uma variável chamada VITE_API_KEY, atribuindo a essa variável a sua chave para a api weatherapi.com. Após, basta rodar o comando npm run dev no terminal e clicar no link do localhost

A aplicação possui 3 principais componentes: CitySearch, CurrentDay e ForecastDay.

 - CitySearch -

É utilizado o componente AsyncPaginate do módulo react-select-async-paginate, por disponibilizar as funcionalidades de um input de texto com autocomplete. Quando o valor do input é alterado, uma função é chamada para consumir a api de autocomplete do weatherapi.com. O valor retornado é uma lista com as informações das cidades encontradas. Essa lista é apresentada ao usuário somente com o nome e região da cidade. O parâmetro debounceTimeout de AsyncPaginate, foi adicionado com valor 600, para causar um delay na chamada da função.

 - CurrentDay -

Mostra os dados climáticos do dia atual para a cidade selecionada. Estes dados são retirados da api forecast do weatherapi.com. Os dados apresentados são o nome da cidade, as temperaturas mínima e máxima, a velocidade do vento, o ícone do clima para o dia e a chance de chuva e precipitação, caso a chance de chuva for maior que 0%.

 - ForecastDay -

Mostra os dados climáticos para os próximos dias da semana. Estes dados são retirados da api forecast do weatherapi.com. Os dados apresentados são o dia da semana, as temperaturas mínima e máxima, o ícone do clima para o dia e a chance de chuva e precipitação, caso a chance de chuva for maior que 0%.

