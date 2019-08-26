---
title: 'JavaScript: Todo lo nuevo desde ES6 hasta hoy y más allá. Parte 1'
date: '2019-08-24'
description: Todo lo que ha sido añadido al lenguaje desde 2015. Con ejemplos desde ES6 y ES7
author: Misael Taveras
tags: ['JavaScript', 'Ejemplos', 'ES6']
keywords: es6, es8, es7, JavaScript, novedades JavaScript, JavaScript moderno, ejemplos es6, arrow function, promises, arrow function, spread, rest, es2016
banner: ./media/banner.jpg
redirect_from:
  - /blog/javascript-todo-lo-nuevo-desde-es6-hasta-hoy/
  - /blog/javascript-todo-lo-nuevo-desde-es6-hasta-hoy
---

> Esta es la primera parte de una serie de dos donde hablo de todas las novedades de JavaScript desde el 2015.
> Puedes ver la [segunda aquí][parte-dos].

Si no has estado al tanto de las nuevas cosas que han sido agregadas a JavaScript en los últimos años esta es la oportunidad perfecta para ponerte al día. Te dejo una lista explicando las cosas nuevas que ha traído JavaScript desde hace un tiempo.

## ¿Qué es ES? ¿Qué es ES6?

Una de las razones por las que creo que muchas personas no pudieron seguirle a las nuevas versiones de JavaScript es porque ahora hablan de ES6 y mucha gente lo hace como si fuera algún tipo de lenguaje nuevo o un metalenguaje, como TypeScript.

ECMAScript (o ES para abreviar) es el nombre real, comercial de JavaScript. ES6 indica la sexta versión del lenguaje.

Cada versión ha agregado cosas nuevas, manteniendo la compatibilidad con las versiones anteriores, ya que depende mucho de que los motores que corren el lenguaje (navegadores, node, y demás) implementen estas nuevas características ellos mismos.

## Listado de versiones y fecha de publicación

Hasta la fecha ECMAScript tiene 9 versiones.

- ES1 1997
- ES2 1998
- ES3 1999
- ES4 Abandonado
- ES5 2009
- ES6 2015
- ES7 2016
- ES8 2017
- ES9 2018

Desde ES1 a ES5 es lo que se conoce como _código seguro_ ya que es compatible con todos los navegadores y motores que corran JavaScript al 100%.

**ES6** ha sido la más importante hasta ahora, ha sido la que ha introducido más cambios y la más esperada, ya que el lenguaje no había visto avances desde 2009.

Ahora, todos los años se lanza una versión de JavaScript siguiendo unos lineamientos en la que cualquiera puede proponer algo nuevo, pasar por un par de etapas y luego ser aprobado e introducido al lenguaje.

## Compatibilidad

Otra razón por la que muchas personas (yo incluido al principio) no han intentado las nuevas funciones que el lenguaje ha aceptado desde 2015 es por la compatibilidad con los navegadores.

Como decía más arriba, JavaScript como tal aprueba nuevas características, pero no puede hacer que automáticamente todos los navegadores y motores que corren JavaScript puedan interpretarlas, esta parte es responsabilidad de cada uno de los distribuidores (Google, Firefox, Microsoft, Samsung, todos).

![Logo de Babel](./media/babel-logo.jpg)

Por esta razón se crearon transpiladores, de los cuales el más popular ha sido [Babel](http://babeljs.io). Estos transpiladores toman tu código nuevo y lo convierten a _código seguro_ permitiéndote a ti como desarrollador disfrutar de las ventajas de las nuevas versiones mientras al usuario final se le sirve un código que funciona en cualquier dispositivo. Esto trae sus ventajas y desventajas que veremos en otro post sobre transpiladores.

En todo caso, ya 2015 fue hace mucho tiempo y los encargados de soportar estas nuevas características saben que deben ponerse al día así que una buena parte de las características es soportada. Si quieres saber cuales [consulta esta tabla](https://kangax.github.io/compat-table/es6/) como referencia, aunque siempre es buena idea usar un transpilador, dependiendo de a quién va dirigido tu código.

## ES6

Como había mencionado, ES6 ha sido, hasta ahora, la versión que más cambios ha introducido así que comencemos.

### Scope variables

Las declaraciones de variables en contexto de ejecución es algo que se había pedido hace mucho tiempo y que al fin tenemos. Anterior a esto todas las variables (declaradas con `var`) pasaban al scope global de ejecución, por ejemplo, en un navegador las variables declaradas pasaban a formar parte del global `window`.
Ahora dos tipos de declaración de variables han sido agregadas `let` y `const`.

_Let es el nuevo var_ pero mejor ya que su declaración se limita al contexto en el que se declaró.

```js
console.clear();
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

var y = 1;
if (y === 1) {
  var y = 2;
  console.log(y); // 2
}
console.log(y); // 2
```

Por otro lado, `const` nos permite crear un valor que no puede ser redeclarado después de inicializarlo.

```js
let a = 'Hola';
a = 'adios'; // OK

const b = 10;
b = 11; // Error
```

### Plantillas cadena de texto

Los `template strings` o plantillas de texto son una característica que nos permite interpolar expresiones en strings entre muchas cosas más. Para ello en vez de usar comillas simples `'` usamos tildes invertidas ` y las expresiones que deseamos poner las colocamos dentro de llaves después de un signo de dólar.

```js
const resultado = `El total es ${10 + 20}`;
function saludar(nombre) {
  return `Hola ${nombre}`;
}
```

### Arrow functions

Uno de los favoritos y más sencillos. Las arrow functions (arrow function) son una nueva forma de escribir funciones en JavaScript más elegante y sencilla, en especial para funciones cortas. Una arrow function se compone de un par de paréntesis para los parámetros, un símbolo de flecha (`=>`, signo de igual y luego mayor qué) y llaves: `(arg1, arg2) => { // función }`. Más simple, sencilla pero la mayor ventaja es que esta función devuelve automáticamente la expresión después de la flecha si no se ponen las llaves.

```js
const sumar = (a, b) => a + b;
const saludar = nombre => `Hola ${nombre}`;
```

### Destructuring

La desestructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos usando la misma sintaxis utilizada para crearlos.

```js
const numbers = [1, 2, 3, 4];
const [one, two] = number;
console.log(one); // 1
console.log(two); // 2

const person = {
  name: 'Pedro',
  lastName: 'Gomez',
  animal: 'Cat'
};

const { animal } = person;
console.log(animal); // 'Cat'
```

### Operador Rest/Spread

Este operador va de la mano con el anterior ya que nos permite asignar el resto de valores a otra variable ayudándonos por ejemplo a eliminar entradas no deseadas de un objeto o arreglo. Este operador son tres puntos seguidos del nombre de la variable donde deseamos almacenar el resto.

#### Rest

```js
const user = {
  id: '1234',
  name: 'Juan'
};

const { id, ...userNoId } = user;
console.log(id); //'1234'
console.log(userNoId); // {name: 'Juan'}

// Tambien podemos usarlo en funciones
const saludarPersona = ({ name }) => `Hola, ${name}`;

console.log(saludarPersona(user)); // 'Hola, Juan'
```

#### Spread

```js
const numbersLowerThanFive = [1,2,3,4]
const numbersGreaterThanFive = [6,7,8,9]

const numbersOneToTen = [
  ...numbersLowerThanFive,
  5,
  ...numbersGreaterThanFive,
  10
]
console.log(numbersOneToTen) // 1,2,3,4,5,6,7,8,9,10
```

### Clases

La programación funcional en JavaScript era algo complicada ya que el lenguaje no tenía clases, sino objetos con un prototype, esto sigue siendo así, pero ahora hay una forma más declarativa de crear objetos y clases aunque sigan comportándose igual.
Las clases en JavaScript son parecidas a la de cualquier otro lenguaje y si has usado [Typescript](https://www.typescriptlang.org/) estarás en tus aguas.
Un par de notas son que las clases solo pueden tener un padre, y aun no existen las interfaces.

```js
class Animal {
  constructor(kind, name, sound) {
    this.name = name;
    this.kind = kind;
    this.sound = sound;
  }

  doSound() {
    console.log(`${this.sound.toUpperCase()}!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super('Dog', name, 'Woof');
  }

  giveLove() {
    console.log(`Soy ${this.name} hermoso`);
    this.doSound();
  }
}

const firulais = new Dog('Firulaus');
firulais.doSound(); // 'WOOF!'
firulais.giveLove(); // 'Soy Firulaus y soy hermoso\nWOOFF!'
```

### Promesas

Son una nueva forma de crear código asíncrono. Dejando de lado los callbacks, las promesas nos dan una interfaz para hacer llamadas que se pueden resolver o fallar en el futuro.

La forma de crear una promesa es con su constructor `Promise` pasando una función que recibe `resolver` y `rechazar` los cuales llamaremos cuando sea apropiado.

```js
const delay2s = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('Pasaron 2 segundos'); // ¡Todo salió bien!
  }, 2000);
});
```

Una vez que una promesa corre devuelve dos métodos que aceptan una función. El método `.then` llama a su función si la promesa se resolvió/tuvo éxito. Y `.catch` en caso de que la promesa se haya rechazado o haya arrojado un error.

```js
// ... con el código anterior
console.log('Hola ahora');
delay2s()
  .then(() => {
    console.log('Hola en 2 segundos');
  })
  .catch(() => {
    // Si quieres ver este mensaje, en vez de llamar `resolve` usa `reject` 😉.
    console.log('Fallé después de 2 segundos');
  });
```

#### Otras novedades de ES6

- [Símbolos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Módulos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (parcialmente)
- [for...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...of)
- [Generadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Generador)
- [Iteradores e Iterables](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- Hay muchas otras novedades que no caben en un articulo, o son pequeños ajustes. En el libro de [ExploringJS están todas](https://exploringjs.com/es6/ch_overviews.html?utm_source=taverasmisael)

## ES7

Este solo añadió 2: el método `includes` para los arrays y el operador exponencial.

### Includes

Una forma sencilla de saber si un array incluye cierto valor. Funciona con primitivos (number, boolean, string)

```js
//Antes
const numbers=[3,5,7,11]
const hasTen = numbers.indexOf(10) !== -1

// Ahora
const newHasTen = numbers.includes(10)
```

### Operador exponencial

Ahora podemos hacer operaciones con exponentes de forma sencilla con el doble asterisco para representar potencia.

```js
// Antes
const dosAlCuboAntes = 2 * 2 * 2

// Ahora

const dosAlCuboAhora = 2 ** 3
```

## Conclusión

Esta es solo la primera parte de la serie “JavaScript: Todo lo nuevo desde ES6 hasta hoy y más allá” en donde hemos visto ES6 y ES7. Entendemos porqué ES6 es considerada una de las mayores actualizaciones del lenguaje y como el comité de ECMAScript ha mantenido su palabra de mantener a JavaScript actualizado.

[En la parte dos][parte-dos] hablaremos de async/await, métodos nuevos para los objetos que se agregó hace solo unos meses y que planes hay para el futuro cercano del lenguaje. Lee la segunda parte aquí.

**Tú, ¿Qué esperas para empezar a usar estas nuevas funcionalidades?**

[parte-dos]: /blog/javascript-todo-lo-nuevo-desde-es6-hasta-hoy-parte-2
