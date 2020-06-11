const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')


const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

const server = http.createServer(app) // criaçção do server



server.listen(port) // escuta a porta para executar o servidor
server.on('error', onError)
server.on('listening', onListening)
console.log(`API starting an ${port}`)


// normaliza a porta para que não tenha conflitos com portas usadas no sistema.
function normalizePort(value) {
    const port = parseInt(value, 10)
    if(isNaN){
        return value
    }

    if(port >= 0){
        return port
    }

    return false
}

// trata error
function onError(error){
    //erro na chamada
    if(error.syscall !== 'listen'){
        throw error
    }

    //procura do error
    const  bind = typeof port == 'string' ? `Pip ${port}` : `Port ${port}` 
    
    //casos de error
    switch (error.code){
        // erro de acesso
        case 'EACESS':
            console.error(`${bind} requires elevated privilges`)
            process.exit(1)
            break
        //erro de uso
        case 'EADDRINUSE':
            console.error(`${bind} is already in use `);
            process.exit(1)
            break
        // qualquer outro erro
        default:
            throw error
    }
}


function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? `Pip ${addr}` : `Port ${port}`  

    debug(`Listening on ${bind}`)
}
