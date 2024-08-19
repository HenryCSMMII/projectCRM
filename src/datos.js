const rubros = [{
    codigo: 1,
    nombre: "Microprocesadores",
},
{
    codigo: 2,
    nombre: "Tarjeta de video",
},
{
    codigo: 3,
    nombre: "Gabinete",
}
]

const articulos = [{
    codigo: 1,
    codigorubro: 1,
    nombre: "Microprocesador Intel Core i5",
    precio: 1000
},
{
    codigo: 2,
    codigorubro: 1,
    nombre: "Microprocesador Intel Celeron",
    precio: 290
},
{
    codigo: 3,
    codigorubro: 1,
    nombre: "Microprocesador Intel Core i10",
    precio: 4000
},
{
    codigo: 4,
    codigorubro: 2,
    nombre: "Tarjeta de video MSI GetForce GTX 1080",
    precio: 4000
},
{
    codigo: 5,
    codigorubro: 2,
    nombre: "Tarjeta de video MSI GetForce GTX 1000",
    precio: 4800
},
{
    codigo: 6,
    codigorubro: 3,
    nombre: "Gabinete Master R200",
    precio: 110
}
,{
    codigo: 7,
    codigorubro: 3,
    nombre: "Gabinete Medium QX",
    precio: 100
},
{
    codigo: 8,
    codigorubro: 3,
    nombre: "Gabinete Master K1",
    precio: 200
}
]

export {articulos, rubros}