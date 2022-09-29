const express = require("express");
const app = express();

app.get('/me', (request, response)=> {
    console.log(request.method)
    response.status(200).json({
        message: {
            name: 'Luis Vallejo',
            age: 34,
            country: 'Mexico'
        }
    })
})

app.post('/metas', (request, response)=> {
    console.log(request.method)
    response.status(200).json({
        message: {
            one_hobbie: "Escuchar Musica",
            two_hobbie: "Jugar torneo de futbol 7",
            three_hobbie: "Jugar Diablo 3 o World Warcraft"
        },
        verb: request.method
})

})

app.patch('/metas', (request, response)=> {
    console.log(request.method)
    response.status(200).json({message: {
        one_meta: "Encontrar un nuevo empleo donde gane un poco mas",
        two_meta: "Aprender una nueva profesion y especializarme en ella para enseñar tambien"
    }})
})

app.put('/business', (request, response)=> {
    console.log(request.method)
    response.status(200).json({message: {
        primer_empresa: "Blizzard",
        segunda_empresa: "Mercado Libre",
        tercera_empresa: "Google"
    }})
})

app.listen(9000, ()=> {
    console.log('Server started at port 9000')
})


//? HTTP

//? VERBOS
// GET, 
// POST, PUT(ACTUALIZAR TODA LA INFO), PATCH(ACTUALIZAR SOLO UN DATO), DELETE

//? STATUS
// *100, *200, *300, *400, *500

//? HEADERS
