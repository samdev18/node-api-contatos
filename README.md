#   Contacts API

#   Idea:
    - Just an API to create and manipulate a contact List
  
#   Escopo do banco de dados:
    - id                    :   integer
    - nome                  :   string
    - telefone              :   string
    - titulo                :   string
    - data de nascimento    :   date
  
#   Tchnologies:
    - mysql database
    - Sequelize

#   Como usar:
    - istall the project dependencies using "npm install" command
    - Create the "lista_de_contatos" database using mysql
    - set the databbase configurations up in src/config/config.json file
    - execute migrations using "npx sequelize-cli db:migrate" command
    - execute the seeds using the "npx sequelize-cli db:seed:all" command
    - execute the server using "npm start" command
    - access /docs endpoint and test the api using swagger
