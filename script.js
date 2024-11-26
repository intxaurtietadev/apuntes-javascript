var a;
var b = 2;

console.log(a);
console.log(b);
a = 10;
console.log(a);

// = ES EL OPERADOR DE ASIGNACION
var c = 5;
var d = c;
console.log(c);
console.log(d);

var e = 5;
var f;
d = e;
console.log(e);
console.log(f);

var x = 9; // Inicializar la variable x con el valor 9
var miIdioma = "Español";

//variables no inicializadas

var g;
var h;

console.log(g); //aqui todavia no está inicializada por eso en la consola aparece undefined
g = 56; //aqui se incializa
console.log(g); //aqui en la consola ya aparece con su valor 56

var miVariable = 5;
// console.log(MIVARIABLE); ERROR no reconoce la variable por las mayusculas, es importante respetarlas
// console.log(Mivariable); Igual que anteriormente, no es la misma combinación de mayus/minus
console.log(miVariable); //case-sensitive importa la combinación de mayus/minus

//suma aritmetica

var suma = 7 + 12;
console.log(suma);

//resta aritmetica

var resta = 15 - 5;
console.log(resta);

resta = 5 - 15;
console.log(resta);

resta = 15 - 15;
console.log(resta);

//multiplicacion

var producto = 5 * 3;
console.log(producto);

producto = 9 * 0;
console.log(producto);

producto = -5 * 6;
console.log(producto);

//division

var cociente = 20 / 2;
console.log(cociente);

//numeros decimales

var miNumeroDecimal = 23.4;
var peso = 78.34;

// multiplicar con n decimales

var producto = 3.4 * 10.4;
console.log(producto);

// dividir con n decimales

var cociente = 5.0 / 2.0;
console.log(cociente);

//resto de una division

var resto = 15 % 5;
console.log(resto);

//incrementar el valor de una variable

var librosComprados = 105;
console.log(librosComprados); //inicialmente

//opcion 1
librosComprados = librosComprados + 1;
console.log(librosComprados);

//opcion 2 (solo sirve para incrementar en uno)
librosComprados++;
console.log(librosComprados);

//reducir valor de una variable
var numeroDeEstudiantes = 256;
//opcion 1
console.log(numeroDeEstudiantes);
numeroDeEstudiantes = numeroDeEstudiantes - 1;
console.log(numeroDeEstudiantes);
//opcion 2 (solo resta 1)
numeroDeEstudiantes--;
console.log(numeroDeEstudiantes);

//asignacion de suma (incrementar en otro valor que no sea 1)
var i = 23;
i = i + 5;
console.log(i);
//de forma mas concisa
i += 5;
console.log(i);

//asignacion de resta (reducir en otro valor que no sea 1)
var i = 23;
i = i - 5;
console.log(i);
//de forma mas concisa
i -= 5;
console.log(i);

//Asignacion compuesta de multiplicacion
var c = 23;
c = c * 2;
console.log(c);

c *= 2;
console.log(c);

//asignacion compuesta de division
var d = 39;
d = d / 3;
console.log(d);

d /= 3;
console.log(d);

//Variables con cadenas de caracteres
var nombre = "Alan";
var apellido = "Turing";

//escapar comillas
var miCadena = 'Soy una cadena de caracteres "con comillas"';
console.log(miCadena);

//Cadenas de Caracteres comillas simples
var miMeta;
miMeta = 'Aprender a programar con "freeCodeCamp"';
console.log(miMeta);

/* Secuencias de Escape

Código   Resultado
--------------------
\'       Comilla simple
\''      Comilla doble
\\       Barra invertida
\n       Linea nueva
\r       Retorno de carro
\t       Tabulación
\b       Retroceso
\f       Salto de página
...
*/
console.log("Estoy aprendiendo: \nJavaScript");

//Concatenar cadenas de caracteres

var nombreCompleto = "Alan " + "Turing";
console.log(nombreCompleto);

var nombreCompleto = "Alan" + " " + "Turing";
console.log(nombreCompleto);

//Construir cadenas con variables
var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo + " con freeCodeCamp";
console.log(mensaje);

//Agregar variables a cadenas de caracteres
var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "con freeCodeCamp";

console.log(mensajeCompleto);

mensajeCompleto += parteFinal;

console.log(mensajeCompleto);

//Longitud de una cadena de caracteres
var miCadena;

miCadena = "Ab ";

console.log(miCadena.length);

//Notacion de corchetes: primer caracter

var lenguajeDeProgramacion = "JavaScript";

/*
Cadena: J a v a S c r i p t
Índices:0 1 2 3 4 5 6 7 8 9
*/
console.log(lenguajeDeProgramacion[0]);

//Inmutabilidad de cadena de caracteres
var miCadena = "Jola, Mundo";
console.log(miCadena);
miCadena[0] = "H"; //Error, las lineas sin inmutables, hay que cambiar la cadena completa
miCadena = "Hola, Mundo";
console.log(miCadena);

//Notacion de corchetes enesimo caracter
var miCadena = "JavaScript";
/*
Cadena: J a v a S c r i p t
Índices:0 1 2 3 4 5 6 7 8 9
*/

console.log(miCadena[0]); // J
console.log(miCadena[1]); // a
console.log(miCadena[2]); // v
console.log(miCadena[3]); // a
console.log(miCadena[4]); // S
console.log(miCadena[5]); // c
console.log(miCadena[6]); // r
console.log(miCadena[7]); // i
console.log(miCadena[8]); // p
console.log(miCadena[9]); // t
console.log(miCadena[10]); // undefined, está fuera de los indices de nuestra cadena

//Notacion de corchetes ultimo caracter
var miCadena;
/* El ultimo indice siempre es longitud de la cadena -1 porque comenzamos a contar desde 0. 

miCadena.length para "JavaScript" es 10.
El último índice es 9.

Cadena: J a v a S c r i p t
Índices:0 1 2 3 4 5 6 7 8 9
*/
miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 1]);

//Notacion de corchetes de derecha a izquierda
var miCadena;
/* El penultimo indice es la longitud - 2 */
miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 2]); // p
console.log(miCadena[miCadena.length - 3]); // i

// Palabras en Blanco.

var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";

/* Concatena las cadenas y crea una nueva cadena que muestre un mensaje. 


Por ejemplo: El perro negro corrió rápidamente a la tienda.

*/

var palabrasEnBlanco =
"El" +
miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + "a la tienda.";
console.log(palabrasEnBlanco);

//Arreglos - Arrays

var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
console.log(estudiantes);

var notas = [95, 67, 89, 56];
console.log(notas);

//Arreglos anidados (arreglos dentro de arreglos)

var listaDeEstudiantes = [["Nora", 97], ["Gino", 78]];
console.log(listaDeEstudiantes);

var listaDeProductos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]];
console.log(listaDeProductos);

var datos = [[3.4, 5.6, 3.2], [6.7, 4.5, 7.8], [5.6, 3.4, 7.8]];
console.log(datos);

//Acceder a los elememtos de un arreglo
var miArreglo = [10, 20, 30];

/*
Arreglo:  [10, 20, 30]
Índices:    0   1   2
*/

console.log(miArreglo[0]); // 10
console.log(miArreglo[1]); // 20
console.log(miArreglo[2]); // 30

var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);

//Modificar elementos de un arreglo

var miArreglo = [10, 20, 30];

console.log(miArreglo);
miArreglo[0] = 40;
console.log(miArreglo);

miArreglo[1] = "Hola";
console.log(miArreglo);

miArreglo[1] = [1, 2, 3];
console.log(miArreglo);

//Acceder a arreglos multidimensionales
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
Arreglo:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:               0          1          2
Índices internos:   0  1  2    0  1  2    0  1  2
*/

console.log(miArreglo[0]); // [1, 2, 3]
console.log(miArreglo[1]); // [4, 5, 6]
console.log(miArreglo[2]); // [7, 8, 9]

// Acceder a los elementos del primer arreglo.

console.log(miArreglo[0][0]); // 1
console.log(miArreglo[0][1]); // 2
console.log(miArreglo[0][2]); // 3

// Acceder a los elementos del segundo arreglo.

console.log(miArreglo[1][0]); // 4
console.log(miArreglo[1][1]); // 5
console.log(miArreglo[1][2]); // 6

//.push()

var estaciones = ["Invierno", "Otoño", "Primavera"]; // Orden alfabético

console.log(estaciones);
estaciones.push("Verano");  // Agregar al final del arreglo
console.log(estaciones);

//.pop()

var estaciones;
var estacion;

estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estacion = estaciones.pop();

console.log(estaciones);
console.log(estacion);

//.sifht

var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];

estaciones.shift();

console.log(estaciones);

//.unsifht

var estaciones = ["Invierno", "Otoño", "Primavera"]; 

estaciones.unshift("Verano"); // Agregar al principio del arreglo

console.log(estaciones);

//Lista de compras

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4],  ["pan", 5], ["refresco", 7], ["pollo", 7]];

/*    [["cereal", 3], ["leche", 2], ["galletas", 4],  ["pan", 5], ["refresco", 7], ["pollo", 7]]
Indice        0            1               2              3               4             5
Subindice         1             1                1            1                1             1
*/
//cereal
console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");
//leche
console.log("Voy a comprar " + miListaDeCompras[1][1] + " unidades de " + miListaDeCompras[1][0] + ".");
//galletas
console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");
//pan
console.log("Voy a comprar " + miListaDeCompras[3][1] + " unidades de " + miListaDeCompras[3][0] + ".");
//refresco
console.log("Voy a comprar " + miListaDeCompras[4][1] + " unidades de " + miListaDeCompras[4][0] + ".");
//pollo
console.log("Voy a comprar " + miListaDeCompras[5][1] + " unidades de " + miListaDeCompras[5][0] + ".");


//Funciones
function mostrarMensaje() {
    console.log("¡Hola, Mundo!");
  }
  
  mostrarMensaje();
  mostrarMensaje();
  mostrarMensaje();
  mostrarMensaje();
  mostrarMensaje();
  mostrarMensaje();

//Argumentos

function sumar(a, b)/*lista de parametros*/ {
   /*Cuerpo de la funcion*/var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
  }
  
  sumar(5, 3);
  sumar(8, 9);
  sumar(2, 4);
  sumar(5, 5);
  
  // Podemos pasar variables como argumentos
  // y sus nombres no tienen que ser iguales a los
  // parámetros.
  var x = 5;
  var y = 3;
  
  sumar(x, y);
  
  // Ejemplo concatenar cadenas
  
  function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
  }
  
  concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

  //Ambito global
var miVariableGlobal = 5;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

miFuncion();

console.log(miVariableGlobal);

//Ambito local

function miFuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
  }
  
  miFuncion(); // La variable está definida dentro de la función.
  
  // ¡Error!
  // Al ser una variable local, no se puede usar fuera de la función.
  // console.log(miVariableLocal); 

//Global VS Local en funciones

var miNombre = "Nora";

function mostrarMiNombre() {
  var miNombre = "Gino";
  console.log(miNombre); 
}

mostrarMiNombre();

console.log(miNombre);

//Retornar un valor de una funcion
function sumar(a, b) {
    return a + b;
  }
  
  sumar(5, 3); // No se ve nada en la consola
  
  console.log(sumar(5, 3)); // Se ve el valor retornado

// Undefined en un valor retornado
function sumar(a, b) {
  console.log(a + b);
}

// undefined porque no hay una sentencia return
console.log(sumar(a, b));

//Asignar un valor retornado
function sumar(a, b) {
  return a + b;
}

// Se asigna el valor retornado a una variable 
var resultado = sumar(5, 3);
console.log(resultado);

// Ejemplo

function crearCadenaConMeta(lenguajeDeProgramacion) {
  return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);

//Permanecer en fila

function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); //agregar al final del arreglo
  return arreglo.shift(); //remover el primer elemento
}

var miArreglo = [1, 2, 3, 4, 5]

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Después: " + JSON.stringify(miArreglo));

//Valores Booleanos

console.log(true); // Correcto
console.log(True); // Error
console.log(TRUE); // Error
console.log(TrUe); // Error

console.log(false); // Correcto
console.log(False); // Error
console.log(FALSE); // Error
console.log(FaLsE); // Error

//Operador de igualdad (==)

console.log(5 == 5); // true
console.log(6 == 5); // false

console.log("Hola" == "Hola"); 		 // true
console.log("Hola" == "JavaScript"); // false
console.log("Hola" == "hola");       // false

console.log([1, 2, 3] == [1, 2, 3]);  // false (No compara si son iguales. Compara si son el mismo objeto en memoria, no comparar arreglos con ==).
console.log([1, 2, 3] == [4, 5, 6]);  // false

//Operador de igualdad estricta (===)

console.log(9 == 9);   // true
console.log(9 == "9"); // true

console.log(9 === 9);   // true
console.log(9 === "9"); // false

//Como comparar valores

var a;
var b;
a = 5;
b = 5;
console.log(a == b);  // true
console.log(a === b); // true

b = 8;

console.log(a == b);  // false
console.log(a === b); // false

b = "5";

console.log(a == b);  // true
console.log(a === b); // false

a = "JavaScript";
b = "Javascript";

console.log(a == b);  // true
console.log(a === b); // true

//Operador de desigualdad ( != )

console.log(9 != 6);  // true (cuando es desigual)

console.log(9 != 9);  // false (cuando es igual)

console.log("JavaScript" != "JavaScript"); // false

console.log([1, 2, 3] != [1, 2, 3]); // true porque son distintos objetos en la memoria

//Operador de desigualdad estricta ( !== )

console.log(1 != "1");  // false (es igual segun la desigualdad)
console.log(1 !== "1"); // true (es desigual segun la desigualdad estricta -n vs cadena caracteres-)

//Operador mayor que ( > )

console.log(6 > 5);  // true
console.log(3 > 10); // false

console.log("B" > "A");     // true (viene despues en el orden alfabetico)
console.log("ACB" > "ABC"); // true

console.log("AB" > "A");    // true

console.log("Mundo" > "Hola");         // true
console.log("M" > "A");                // true

console.log("JavaScript" > "Python");  // false
console.log("J" > "P");                // false

var a = 15;
var b = 7;

console.log(a > b);  // true
console.log(b > a);  // false

//Operador "mayor o igual que" ( >= )

console.log(5 > 5);  // false
console.log(5 >= 5); // true

//Operador menor que ( < )

console.log(5 < 6);  // true
console.log(10 < 3); // false

console.log("A" < "B");     // true
console.log("ABC" < "ACB"); // true

var a = 15;
var b = 7;

console.log(a < b);  // false
console.log(b < a);  // true

//Operador "menor o igual que" ( <= )

console.log(5 < 5);  // false
console.log(5 <= 5); // true

//Operador logico "and" ( && )
/*
   Tabla de verdad del operador AND 
   Para: X && Y
   |  X  |  Y  | X && Y | 
   -----------------------
   |  T  |  T  |    T   |
   |  T  |  F  |    F   |
   |  F  |  T  |    F   |
   |  F  |  F  |    F   |
    La expresión solo es verdadera cuando ambos operandos 
    son verdaderos.
*/

// Comprobemos la tabla de verdad
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// Ahora los operandos son expresiones

var a = 8;

// (a > 5) && (a < 10) --> true && true --> true
console.log((a > 5) && (a < 10)); 

a = 3;

// (a < 5) && (a <= 10) --> false && true --> false
console.log((a < 5) && (a <= 10));

a = 15;

// (a >= 5) && (a > 10) --> true && false --> false
console.log((a >= 5) && (a > 10));

a = 1;

// (a == 5) && (a > 10) --> false && false --> false
console.log((a == 5) && (a > 10));

//Operador logico "or" ( || )
/*
Tabla de verdad del operador OR 
Para: X || Y
|  X  |  Y  | X || Y | 
-----------------------
|  T  |  T  |    T   |
|  T  |  F  |    T   |
|  F  |  T  |    T   |
|  F  |  F  |    F   |
La expresión es verdadera si alguno de los dos operandos 
o ambos son verdaderos.
*/

// Comprobemos la tabla de verdad
console.log(true || true); //True 
console.log(true || false); //True 
console.log(false || true); //True 
console.log(false || false); //false

// Ahora los operandos son expresiones

var a = 8;

// (a < 5) || (a > 15) --> false || false --> false
console.log((a < 5) || (a > 15));

a = 2;

// (a < 5) || (a > 15) --> true || false --> true
console.log((a < 5) || (a > 15));

a = 20;

// (a < 5) || (a > 15) --> false || true --> true
console.log((a < 5) || (a > 15));

a = 5;

// (a < 5) || (a > 15) --> true || true --> true
console.log((a == 5) || (a < 15));

//Operador logico "Not" ( !antes de la expresion que queremos negar)

/*
   Tabla de verdad del operador NOT 
   Para: !X
   |  X  | !X  | 
   -----------------------
   |  T  |  F  |
   |  F  |  T  |
*/

// Comprobemos la tabla de verdad
console.log(!true); //false
console.log(!false); //true

var a = 8;

// !(a > 5) --> !true --> false
console.log(!(a > 5));

// !(a < 5) --> !false --> true
console.log(!(a < 5));

//Sentencias condicionales (if)

if (true) {
  console.log("La condición es verdadera.");
}

// Condición verdadera (true).

var x = 5;

if (x > 2) {
  console.log("La condición es verdadera");
}

if (x > 2 && x < 10) {
  console.log("La condición es verdadera");
}

// Ejemplo

var estacion = "Invierno";

if (estacion == "Invierno") {
  console.log("¡Si! Me encanta el invierno.");
}

console.log("Después del condicional...");


//clausula else ( else )

if (false) {
  console.log("La condición es verdadera.");
} else {
  console.log("La condición es falsa.");
}

// Ejemplo

var x = 5;

if (x < 2) {
  console.log("La condición es verdadera.");
} else {
  console.log("La condición es falsa.");
}

// Ejemplo

var estacion = "Invierno";

if (estacion === "Verano") {
  console.log("Comenzó el verano. Ya podemos ir a la playa.");
} else {
  console.log("Ya quiero que llegue el verano para poder ir a la playa");
}

//Clausula else if

function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log("Divisible entre 2.");
  } else if (valor % 3 == 0) {
    console.log("Divisible entre 3.");
  } else {
    console.log("No es divisible entre las opciones.");
  }
}

clasificarValor(2);
clasificarValor(15);
clasificarValor(7);

//Condicionales de orden lógico

function clasificarValor(valor) {
  if (valor < 5) {
    console.log("Menor que 5.");
  } else if (valor < 10) {
    console.log("Menor que 10.");
  } else {
    console.log("Mayor o igual que 10.");
  }
}

clasificarValor(7);
clasificarValor(2);
clasificarValor(15);

//Encadenar sentencias "if...else"
function interpretarIMC(indiceDeMasaCorporal) {
  if (indiceDeMasaCorporal < 18.5) {
    console.log("Bajo Peso");
  } else if (indiceDeMasaCorporal <= 24.9) {
    console.log("Normal");
  } else if (indiceDeMasaCorporal <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obeso");
  } 
}

interpretarIMC(17.8); 
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);

//Código de golf

/*
En el juego de golf cada hoyo tiene un par que 
representa el número promedio de golpes
que se espera que haga un golfista para introducir 
la pelota en el hoyo.

Hay un nombre diferente dependiendo de qué tan 
por encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par y golpes. 

Retorna la cadena correcta según esta tabla que muestra 
los golpes en orden de mayor a menor prioridad: 

Golpes             Retornar
-------------------------------
1	               "Hole-in-one!"
<= par - 2	       "Eagle"
par - 1	           "Birdie"
par	               "Par"
par + 1	           "Bogey"
par + 2	           "Double Bogey"
>= par + 3	       "Go Home!"

par y golpes siempre serán numéricos y positivos. 
*/

function puntajeDeGolf(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}

puntajeDeGolf(4, 1);  // Hole-in-one!
puntajeDeGolf(4, 2);  // Eagle
puntajeDeGolf(4, 3);  // Birdie
puntajeDeGolf(4, 4);  // Par
puntajeDeGolf(4, 5);  // Bogey
puntajeDeGolf(4, 6);  // Double Bogey
puntajeDeGolf(4, 7);  // Go Home!
puntajeDeGolf(4, 15); // Go Home!

//Sentencias switch

function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3: 
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;   
  }
  return respuesta;
}

clasificarValor(1);
clasificarValor(2);
clasificarValor(3);
clasificarValor(4);

// Ejemplo

var producto = "hamburguesa";

switch (producto) {
  case "pizza":
    console.log("La pizza básica cuesta $10.55");
    break;
  case "hamburguesa":
    console.log("Las hamburguesas cuestan $6.78");
    break;
  case "helado":
    console.log("El helado cuesta $2.8");
    break;
}



//Sentencias switchs opcion predeterminada

function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Francés";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Inglés";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));

//Switchs multiples casos

function clasificarVolumen(valor) {
  var volumen;
  switch (valor) {
    case 1:
      volumen = "bajo";
      break;
    case 2:
    case 3:
      volumen = "intermedio";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "alto";
      break;
  } 
  return volumen;
}

clasificarVolumen(1);
clasificarVolumen(3);
clasificarVolumen(5);

//Reemplazar if...else por switch

function seleccionarIdioma(valor) {
  var idioma;

  if (valor == 1) {
      idioma = "Español";
  } else if (valor == 2) {
      idioma = "Francés";
  } else if (valor == 3) {
      idioma = "Italiano";
  } else {
      idioma = "Inglés";
  }

  return idioma;

  // Reemplazado por switch:

  // switch (valor) {
  //     case 1:
  //         idioma = "Español";
  //         break;
  //     case 2:
  //         idioma = "Francés";
  //         break;
  //     case 3:
  //         idioma = "Italiano";
  //         break;
  //     default:
  //         idioma = "Inglés";
  //         break;
  // }
  // return idioma;
}

//Retornar valores booleanos
// Inicialmente

function esMenorQue(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Cambio

function esMenorQue(a, b) {
  return a < b;
}

console.log(esMenorQue(3, 6)); // true
console.log(esMenorQue(6, 3)); // false
console.log(esMenorQue(3, 3)); // false

//Patron de retorno anticipado

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós");
}

console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if (num < 0) {
    return undefined;
  } 
  return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-5)); 


/*Conteo de cartas
En el juego de casino Blackjack el jugador puede sacarle 
ventaja a la casa llevando un registro del número relativo
de cartas altas y bajas que quedan en la baraja. 

Esto se llama "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el 
jugador. Se le asigna un valor a cada carta de acuerdo a 
la siguiente tabla. 

- Cuando el conteo es positivo, el jugador debería apostar alto. 
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.


Cambio del conteo	     Cartas
---------------------------------------------
+1	                  2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                  10, 'J', 'Q', 'K', 'A'


Nuestra meta es definir una función para contar cartas. 

La función debe tomar un parámetro carta que puede ser 
un número o una cadena de caracteres y luego aumentar 
o reducir el valor de la variable global conteo 
de acuerdo al valor de la carta (observa la tabla). 

La función debe retornar una cadena de caracteres con el 
conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo. 

El conteo actual y la decisión del jugador 
("Apostar" o "Esperar") deben estar separados por un espacio.
*/

var conteo = 0;

function contarCartas(carta) {
  var decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        conteo++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;
        break;
  }

  if (conteo > 0) {
    decision = "Apostar";
  } else {
    decision = "Esperar";
  }

  return conteo + " " + decision;
}

contarCartas(2);
contarCartas(3);
contarCartas(7);
contarCartas("K");
contarCartas("A");

//Crear objetos
//Nos permiten guardar una secuencia o un conjunto de propiedades relacionada con sus valores

var miPerro = {
  /*propiedad*/"nombre": /*valor*/"Gino",
  "edad": 5,
  "peso": 6,
  "raza": "Beagle",
}; //esto es un objeto, para acceder a el miPerro

var miObjeto = {
  5: "cinco"
};

//Acceder a propiedades de un objeto: Notacion de punto
var miPerro = {
  "nombre": "Gino",
  "edad": 5,
  "peso": 6,
  "raza": "Beagle",
};
//para acceder a las propiedades del objeto miPerro:
console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);

//Acceder a las propiedades Notacion de Corchetes
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numero de paginas": 200,
  "numero de hojas": 100
};

console.log(miCuaderno["color"]); // Notación de corchetes
console.log(miCuaderno.color);    // Notación de punto

console.log(miCuaderno["numero de paginas"]); // Notación de corchetes
// console.log(miCuaderno.numero de paginas); // No funciona porque tiene espacios

// Posibles modificaciones

// camelCase (más común)
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "numeroDePaginas": 200,
  "numeroDeHojas": 100
};

console.log(miCuaderno.numeroDePaginas);
console.log(miCuaderno.numeroDeHojas);

//Acceder a propiedades: Variables

var resultados = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566"
};

var posicion = 4;

console.log(resultados[posicion]);

//Actualizar las propiedades de un objeto

var mochila = {
  "color": "azul",
  "tamaño": "mediano",
  "contenido": ["botella de agua", "cuaderno"]
};

console.log(mochila.color); // azul
mochila.color = "verde";
console.log(mochila.color); // verde

console.log(contenido);
mochila.contenido.push("lápiz");
console.log(contenido);

mochila.contenido = [];
console.log(mochila.contenido);

//Agregar propiedades

var curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

// Notación de punto
console.log(curso.vistas); // undefined
curso.vistas = 34500;
console.log(curso.vistas);

// Notación de corchetes
curso["vistas"] = 34500;
console.log(curso.vistas);

//Eliminar propiedades
var curso = {
  "titulo": "Aprende JavaScript desde Cero",
  "idioma": "Español",
  "duracion": 30
};

console.log(curso.duracion); // 30
delete curso.duracion;
console.log(curso.duracion); // undefined

console.log(curso.idioma);   // Español
delete curso.idioma;
console.log(curso.idioma);   // undefined


//Objetos para hacer busquedas
function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";

  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}
  
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

// Podemos cambiar switch por un objeto. 

// function buscarElementoQuimico(simbolo) {
//   var simbolosQuimicos = {
//     "Al": "Aluminio",
//     "S": "Azufre",
//     "Cl": "Cloro",
//     "He": "Helio",
//     "B": "Boro",
//     "Li": "Litio"
//   };
//   return simbolosQuimicos[simbolo];
// }

// console.log(buscarElementoQuimico("Al"));
// console.log(buscarElementoQuimico("S"));
// console.log(buscarElementoQuimico("Cl"));
// console.log(buscarElementoQuimico("He"));
// console.log(buscarElementoQuimico("B"));
// console.log(buscarElementoQuimico("Li"));


//Verificar propiedades
var miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("color"));  // true
console.log(miCuaderno.hasOwnProperty("origen")); // false

// Ejemplo

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));

//Objetos complejos
var ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  }
];

console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[1]);

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);

console.log(ordenesDePizzas[0].precio);
console.log(ordenesDePizzas[0]["precio"]);


// Añadiendo una tercera pizza
var ordenesDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  },
  {
    "tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true
  }
];


//Objetos anidados

var miReceta = {
  "descripcion": "mi postre favorito",
  "costo": 15.6,
  "ingredientes": {
    "masa": {
      "harina": "100 grs",
      "sal": "1 cucharadita",
      "agua": "1 taza"
    },
    "cobertura": {
      "azucar": "120 grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);

console.log(miReceta.ingredientes.masa);

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

console.log(miReceta.ingredientes.cobertura);

console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);


//Arreglos anidados
var misPlantas = [
  {
    tipo: "flores",
    lista: [
      "rosas",
      "tulipanes",
      "dientes de león"
    ]
  },
  {
    tipo: "árboles",
    lista: [
      "abeto",
      "pino",
      "abedul"
    ]
  }
];

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);


//Coleccion de discos
/*
Tenemos un objeto que representa parte de una colección 
de álbumes musicales. 

Cada álbum tiene un número de identificación único (id) 
asociado a otras propiedades. 

No todos los álbumes tienen la información completa.
*/

var coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold"
  }
};

/* 
Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de discos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas 
para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad 
del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero 
el álbum no tiene una propiedad llamada "canciones", crea un arreglo 
vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y 
"valor" no es una cadena vacía, agrega "valor" al final del arreglo 
de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a 
"canciones", asigna el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.
*/
  
function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}

console.log(coleccionDeDiscos);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos);

actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");
console.log(coleccionDeDiscos);

actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos);


//Ciclo while (bucle)

  // Ejemplo 1

var i = 0;

while (i <= 3) {
  console.log("Hola, Mundo");
  i++;
}

// Ejemplo 2

var miArreglo = [];
var i;

console.log(miArreglo);

while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo);

// Ejemplo 3

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop(); // Remover el último número.
}

console.log(numeros);


//Ciclo for (bucle)

  // Ejemplo 1

var miArreglo = [];

for (var i = 0; i < 10; i++) {
  miArreglo.push(i);
}

console.log(miArreglo);

// Ejemplo 2

var miArreglo = [];

for (var i = 0; i < 10; i += 2) {
  miArreglo.push("A");
}

console.log(miArreglo);

//ciclos for numeros impares

miArreglo = [];

for (var i = 1; i < 20; i += 2) {
  miArreglo.push(i);
}

console.log(miArreglo);

//Ciclos for contar hacia atrás

// Ejemplo 1

for (var i = 15; i >= 10; i--) {
  console.log(i);
}

// Ejemplo 2

var miArreglo = [];

for (var i = 10; i > 0; i -= 2) {
  miArreglo.push(i);
}

console.log(miArreglo);

//Iterar sobre un arreglo con un ciclo for

// Ejemplo 1

var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    total += miArreglo[i];
}

console.log(total);

// Ejemplo

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

// Ejemplo

function contarNumerosPares(arreglo) {
    var total = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 3, 1, 2]));
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));

//Ciclos for anidados
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Por cada arreglo anidado
for (var i = 0; i < arreglo.length; i++) {
  var arregloAnidado = miArreglo[i];
  // Por cada elemento del arreglo anidado
  for (var j = 0; j < fila.length; j++) {
    console.log(arregloAnidado[j]);
  }
}

//Ciclos do...while

var x = 16;

do {
  console.log(x);
  x++;
} while (x < 10);

x = 16;

while (x < 10) {
  console.log(x);
  x++;
}

//Busqueda de perfiles

var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
        return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no está en la lista";
}
  
buscarPerfil("Nora", "gustos");
buscarPerfil("Harry", "apellido");
buscarPerfil("Sherlock", "apellido");

buscarPerfil("Nora", "dirección"); // La propiedad no existe.
buscarPerfil("Bob", "numero");     // El contacto no existe.


//Numeros aleatorios
function generarFraccionAleatoria() {
  // Generar y retornar número entre 0 y 1
  // 0 inclusive. 1 no está incluido en los posibles resultados.
  return Math.random();
}

console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());

var numeroAleatorio = Math.random();
console.log(numeroAleatorio);


//Numeros enteros aleatorios
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);

function generarEnteroAleatorio(limiteSuperior) {
  // Generar un número aleatorio entre 0 y el límite
  // superior (sin incluirlo).
  return Math.floor(Math.random() * limiteSuperior);
}

console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));

// Con un ciclo

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}


//Numeros enteros aleatorios dentro de un rango
function rangoAleatorio(limiteInferior, limiteSuperior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

console.log(rangoAleatorio(3, 8));

// Con un ciclo

for (var i = 0; i < 15; i++) {
  console.log(rangoAleatorio(3, 8));
}


//ParseInt 

console.log(parseInt("5"));
console.log(parseInt("-47"));
console.log(parseInt("0"));

console.log(parseInt("6.7"));
console.log(parseInt("6.2"));

console.log(parseInt(6.7));

console.log(parseInt("abc")); // NaN

// Ejemplo con variables

var a = "5";
var b = "7";

console.log(a + b);

var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);

//parseInt con una base radix

console.log(parseInt("110111", 2)); // Binario
console.log(parseInt(110111, 2));   // Binario

console.log(parseInt("3E0A", 16));  // Hexadecimal

//Operador condicional ternario
// Con un condicional.

function retornarMinimo(x, y) {
  if (x < y) {
  	return x;
  } else {
  	return y;
  }
}

// Con el operador ternario.

function retornarMinimo(x, y) {
  return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(5, 5));

// Ejemplo 2

var a = 15;
var b = 9;

console.log(a > b ? a + 2 : b * 3);

//Multiples operadores condicionales ternarios

function compararNumeros(a, b) {
  if (a === b) {
    return "a y b son iguales";
  } else if (a > b) {
    return "a es mayor que b";
  } else {
    return "b es mayor que a";
  }
}

// Con el operador condicional (ternario).

function compararNumeros(a, b) {
  return a === b ? "a y b son iguales"
       : a > b ? "a es mayor que b"
       : "b es mayor que a";
}

console.log(compararNumeros(11, 27));
console.log(compararNumeros(27, 11));
console.log(compararNumeros(15, 15));

//var vs. let.

// Con var podemos declarar una variable más de una vez.
var campista = "James";
var campista = "David";
console.log(campista);

// Con let no podemos declarar una variable más de una vez.
let campista = "James";
let campista = "David";
console.log(campista);

// Podemos cambiar el valor de la variable.
let campista = "James";
campista = "David";  	// sin let
console.log(campista);


//Ambito var vs. let.
var miVariableGlobal = 4;

console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);

  var miVariableLocal = 8;
  console.log(miVariableLocal);
}

miFuncion();

console.log(miVariableGlobal);
console.log(miVariableLocal); // Error

/* Cuanto declaras una variable con la palabra let dentro de un bloque, 
una declaración o expresión, su alcance está limitado a ese bloque,
declaración o expresión. */

for (var i = 0; i < 3; i++) {
  console.log(i);
} 

console.log(i); // No hay error si se usa var

for (let i = 0; i < 3; i++) {
  console.log(i);
} 

console.log(i); // Error si se usa let

// Ejemplo con let

var mostrarColor = true;

if (mostrarColor) {
  let color = "verde";
  console.log("Mi color favorito es: " + color);
}

console.log(color); // Error

// Ejemplo con var

if (mostrarColor) {
  var color = "verde";
  console.log("Mi color favorito es " + color);
}

console.log(color); // No hay error

//palabra reservada const.
const MI_CONSTANTE = 35;

console.log(MI_CONSTANTE);

// Error
// MI_CONSTANTE = 15;


function calcularAreaCirculo(radio) {
  const PI = 3.14;

  if (radio < 0) {
      return undefined;
  }

  return PI * (radio ** 2);
}

console.log(calcularAreaCirculo(5));
console.log(calcularAreaCirculo(10));

//Mutar arreglo declarado con const.

const MI_ARREGLO = [1, 2, 3, 4];

// MI_ARREGLO = [5, 6, 7, 8]; // Error porque usamos const

// Pero sí podemos mutar el arreglo con la notación de corchetes
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;

console.log(MI_ARREGLO);

//Crear objeto inmutable
let colores = { 
  "verde": "#10e04b",
  "azul": "#1b50e0",
  "negro": "#000000",
  "blanco": "#ffffff"
}

Object.freeze(colores);

colores.amarillo = "#fff200"; // No se puede agregar nuevas propiedades.

colores.verde = "#345sg5";    // No se puede cambiar los valores.
 
delete colores.verde          // No se puede eliminar propiedades.

//Función flecha
// Función Anónima

const fecha = function() {
  return new Date();
};

// Función flecha

const fecha = () => new Date();

//Funcion flecja con parametros
const sumarTres = function(x) {
  return x + 3;
};
console.log(sumarTres(4));

// Función Flecha
const sumarTres = (x) => x + 3;
console.log(sumarTres(4));

// Ejemplo

// Función Tradicional
const concatenar = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(concatenar([1, 2], [3, 4, 5]));

// Función Flecha
const concatenar = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenar([1, 2], [3, 4, 5]));

// Ejemplo 3: Varias líneas. Debes incluir llaves y return.

const sumar = (a, b) => {
  let num = 6;
  return a + b + num;
};

console.log(sumar(1, 1));

//Valores por defecto para los parametros
const incrementar = (num, valor = 1) => num + valor;

console.log(incrementar(5));    // Valor por defecto
console.log(incrementar(5, 3)); // Valor personalizado

//Operador rest.
function miFuncion(...args) {
  console.log(args);
}

miFuncion(1);
miFuncion(1, 2);
miFuncion(1, 2, 3, 4);
miFuncion([1, 2, 3], [4, 5, 6]);
miFuncion(1, 2, 3, 4, 5, 6);

// Ejemplo

const sumar = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

//Operador spread.
const numeros = [1, 2, 3];

function sumar(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
  return x + y + z;
}

console.log(sumar(...numeros));

//Sintaxis de desestructuración (objetos)
// Para Objetos
const usuario = { 
  nombre: "Gino Smith",
  edad: 34 
};

// Forma anterior de asignar las propiedades a variables
const nombre = usuario.nombre;
const edad = usuario.edad;

// En ES6
const {nombre, edad} = usuario;

// Ejemplo

var coordenadas = {
  x: 4, 
  y: 6, 
  z: 12
};

// Anteriormente.
var x = coordenadas.x;
var y = coordenadas.y;
var z = coordenadas.z;

// Ahora podemos usar la sintaxis de desestructuración.
const {x, y, z} = coordenadas;
console.log(x);
console.log(y);
console.log(z);

//Sintaxis de desestructuración (objetos anidados)
const usuario = {
  johnDoe: { 
    edad: 27,
    correo: "johnDoe@freecodecamp.com"
  }
};

const { johnDoe: { edad, correo }} = usuario;

console.log(edad);
console.log(correo);

// Asignar nombres distintos a las variables

const { johnDoe: { edad: edadDelUsuario, correo: correoDelUsuario }} = usuario;

console.log(edadDelUsuario);
console.log(correoDelUsuario);

// Ejemplo

const PRONOSTICO_LOCAL = {
  "ayer": { 
    minima: 61, 
    maxima: 75 
  },
  "hoy": { 
    minima: 64, 
    maxima: 77 
  },
  "mañana": {
    minima: 68,
    maxima: 80 
  }
};

const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

// Asignar las propiedades individualmente

const {hoy: {minima: minimaHoy}} = PRONOSTICO_LOCAL; 
console.log(minimaHoy);

const {hoy: {maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(maximaHoy);

// Asignar ambas propiedades

const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy);

//Sintaxis desestructuración (arreglos)
var a;
var b;
var c;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c);

[a, b] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2

[a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

// Intercambiar valores de variables

var a = 8;
var b = 6;

[b, a] = [b, a];

console.log("a: ", a);
console.log("b: ", b);

//Sintaxis de desestructuración con el operador rest para reasignar un arreglo.
var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6];

console.log(a);   // 1
console.log(b);   // 2
console.log(arr); // [3, 4, 5, 6]

// Ejemplo

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
  const [ , , ...nuevoArreglo] = arreglo; 
  return nuevoArreglo;
}

const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);


//Sintaxis de desestructuración para pasar un objeto.
var nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: "Española",
  ubicacion: "España"
};

const actualizarPerfil = (informacionDePerfil) => {
  const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente);

// Alternativa: usar la sintaxis de desestructuración directamente
// en la lista de parámetros.

const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente);

// Ejemplo

const estadisticas = {
  max: 56.78,
  desviacionEstandar: 4.34,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 35.85
};

const mitad = (e) => (e.max + e.min) / 2.0; 

// Usando la sintaxis de desestructuración para pasar un objeto.
const mitad = ({max, min}) => (max + min) / 2.0; 

console.log(mitad(estadisticas));


//Plantillas literales o de cadenas

/*
Características:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
- Las líneas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} también puedes escribir expresiones.
*/

var a = 6;
console.log(`El valor de a es ${a}.`);

var nombre  = "Nora";
var edad = 6;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);

var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo es: ${JSON.stringify(miArreglo)}`);

// Ejemplo con objeto

const persona = {
  nombre: "Gino Cass",
  edad: 10
};
  
const saludo = `¡Hola! Mi nombre es ${persona.nombre} 
y tengo ${persona.edad} años.`;
  
console.log(saludo);


//Crear objetos de forma concisa
// Inicialmente

const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  };
};

console.log(crearPersona("Gino Smith", 28, "Español"));

// Alternativa más concisa

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});

console.log(crearPersona("Gino Smith", 28, "Español"));


//Metodos 
// Versión ES5

const persona = {
  nombre: "Isabel",
  presentarse: function() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

console.log(persona.presentarse());

// Versión ES6

const persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

persona.presentarse();

//Definir clases
class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

var zeus = new TransbordadorEspacial('Júpiter');
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial('Marte');
console.log(zeus.planeta);

// Ejemplo

class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

var miMascota = new Mascota("Nora", 5);

console.log(miMascota.nombre);
console.log(miMascota.edad);

var tuMascota = new Mascota("Gino", 2);

//Getters y setters
class Libro {
  constructor(autor) {
    this._autor = autor;
  }

  // Getter
  get autor() {
    return this._autor;
  }

  // Setter
  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
}

const libro = new Libro("anónimo");
console.log(libro.autor);

libro.autor = "Gino Smith";
console.log(libro.autor);