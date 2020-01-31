# New York Times Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Mais informações

A escolha da forma de exibição do conteúdo, assim como a solução encontrada para recuperar e apresentar os dados vindos da API, bem como o uso de um evento de click para depois poder enviar os dados para o modal foram baseadas em experiência própria, no conhecimento atual que tenho do Angular e na busca por soluções criativas.

- Inicialmente foi utilizado o framework Bootstrap para ajudar na criação do visual pelo motivo de ter mais experiência com ele, sendo que também foram utilizados alguns elementos do HTML5 e também o SCSS.
- Para fazer a requisição na API foi utilizado o HttpClient.
- A resquisição na API foi feita no mesmo service (news.service.ts) para a categoria “Sciences” e também para a “Technology”.
- Dentro do news.component.ts foram utilizadas duas funções (listScienceNews(), listTechnologyNews()) no ngOnInit() que ao inicializar carregam as informações da API tanto da categoria “Sciences” como “Technology” em diferentes arrays (scienceNews e technologyNews).
- Dentro do HTML de news (news.component.html) foram apresentadas as informações armazenadas dentro dos arrays.
- Dentro do próprio news.component.ts é feito o controle  para visualizar se as informações foram completamente carregadas nas categorias “Sciences” e “Technology”, se caso sim a classe spinner (barra de progresso) é removida exibindo assim os dados de forma mais fluída.
- Para apresentar o modal foi utilizado o NgbModal do Bootstrap.
- Para recuperar os valores do artigo quando clicado em "Read more..." foi utilizado um evento de click que faz uso de uma função em news.component.ts que envia para o modal.component.ts, então o mesmo faz uso das informações para popular o modal. Dessa forma não é necessário fazer outra requisição a API, uma vez que já tenho os dados que foram buscados anteriormente.

Muito obrigado