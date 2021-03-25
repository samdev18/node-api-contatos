#   API de contatos

#   Ideia:
    - criar uma API para manipulação de contatos
  
#   Escopo do banco de dados:
    - id                    :   integer
    - nome                  :   string
    - telefone              :   string
    - titulo                :   string
    - data de nascimento    :   date
  
#   Regras:
    - Porta deve ser 4000
    - banco de dados deve ser mysql
    - deve ser utilizado o sequelize para manipular os dados do banco de dados

#   Como usar:
    - Instalar dependências com o comando "npm install" via terminal
    - Criar banco de dados no mysql com o nome "lista_de_contatos"
    - Configuar acesso ao banco de dados no arquivo src/config/config.json
    - Executar as migrations utilizando o comando npx sequelize-cli db:migrate
    - Executar as seeds com o comando npx sequelize-cli db:seed:all
    - Executar o servidor utilizando o comando "npm start" via terminal
    - Acessar o endpoin /docs e testar os endpoints da API via Swagger