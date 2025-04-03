let datosEmpleados =[
   {
     "nombre": "Francisco Ramirez",
     "edad": 29,
     "puesto": "Contable",
     "Emails": [
       "francisco@gmail.com",
       "francisco@hotmail.es",
       "francisco@thebridgeschool.es"
     ]
   },
   {
       "nombre": "Isabel Pérez",
       "edad": 31,
       "puesto": "Profesora",
       "Emails": [
         "isabel@gmail.com",
         "isabel@hotmail.es",
         "isabel@thebridgeschool.es"
       ]
     }
 ]

/*  En el JSON del último ejemplo indica el código de acceso al email de The Bridge de Isabel. */

console.log(datosEmpleados[1]["Emails"][2]); 