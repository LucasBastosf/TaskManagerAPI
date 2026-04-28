Este projeto é um sistema de gerenciamento de tarefas desenvolvido com Angular no front-end e ASP.NET Core Web API no back-end, utilizando SQL Server como banco de dados. A aplicação implementa um CRUD completo de tarefas, permitindo criar, listar, atualizar e excluir registros.

O back-end foi desenvolvido em ASP.NET Core 8, utilizando Entity Framework Core para persistência de dados e uma API REST para comunicação. O front-end foi desenvolvido em Angular, consumindo a API através de HttpClient e organizando a aplicação em componentes, services e models.

O sistema possui uma entidade principal chamada Task, contendo título, descrição, status e data de criação. A comunicação entre front-end e back-end é feita via endpoints HTTP (GET, POST, PUT e DELETE).

Para execução do projeto, é necessário rodar a API em ASP.NET Core e em seguida iniciar o projeto Angular, garantindo que ambos estejam apontando para o mesmo ambiente local.