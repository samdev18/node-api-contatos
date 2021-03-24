const app = require('./app')

app.set('port', process.env.APP_PORT);
const server = app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
})