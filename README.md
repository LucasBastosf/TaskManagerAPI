Task Manager
📌 Visão Geral
Este projeto é um Gerenciador de Tarefas desenvolvido com Angular (standalone) no front-end e ASP.NET Core Web API no back-end, utilizando SQL Server como banco de dados. O sistema permite criar, listar, atualizar e excluir tarefas, integrando o front com a API via HTTP.

🚀 Tecnologias Utilizadas
Angular 17+
ASP.NET Core 8
Entity Framework Core
SQL Server
Swagger para documentação da API

📂 Estrutura do Projeto
Front-end (Angular)
src/app
 ├── components
 │    ├── task-form
 │    │    ├── task-form.component.ts
 │    │    ├── task-form.component.html
 │    │    └── task-form.component.css
 │    └── task-list
 │         ├── task-list.component.ts
 │         ├── task-list.component.html
 │         └── task-list.component.css
 ├── services
 │    └── task.service.ts
 ├── models
 │    └── task.ts
 ├── app.ts (root standalone)
 ├── app.html
 └── app.css
Back-end (ASP.NET Core)
TaskManager.Api
 ├── Controllers
 │    └── TasksController.cs
 ├── Data
 │    └── ApplicationDbContext.cs
 ├── Models
 │    └── Task.cs
 └── Program.cs

⚙️ Configuração
Banco de Dados
No arquivo appsettings.json do back-end:
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=TaskManagerDb;Trusted_Connection=True;TrustServerCertificate=True;"
}
Ajuste conforme sua instância do SQL Server.
CORS
No Program.cs:
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

app.UseCors("AllowAngular");

▶️ Como Rodar
Back-end
Entre na pasta da API:
cd TaskManager.Api
Rode:
dotnet run
A API estará disponível em:
https://localhost:7241/swagger/index.html
Endpoints: https://localhost:7241/api/tasks
Front-end
Entre na pasta Angular:
cd C:\Labs\TaskManager\task-manager-ui2
Instale dependências:
npm install
Rode:
npx ng serve
Acesse:
http://localhost:4200

📝 Funcionalidades
Criar tarefa (Título, Descrição, Status)
Listar tarefas
Atualizar tarefa
Excluir tarefa

✅ Conclusão
Este projeto demonstra a integração entre Angular, ASP.NET Core e SQL Server para construir um CRUD de tarefas.

