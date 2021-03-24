const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const router = require('./src/routes')
const errorHandler = require('./src/handlers/errorHandler')

require('dotenv').config({ path: '.env' })

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        components: {},
        info: {
            title: 'API de contatos',
            description: 'Api para controle de contatos',
            contact: {
                name: 'JS Solution'
            },
            servers: [`http://localhost:${process.env.APP_PORT}`]
        }
    },
    apis: ["src/routes/swagger.yaml"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/', router);
app.use(errorHandler.notFound);

module.exports = app