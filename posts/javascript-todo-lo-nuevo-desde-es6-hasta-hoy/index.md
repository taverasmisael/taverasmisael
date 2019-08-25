---
title: 'JavaScript: Todo lo nuevo desde ES6 hasta hoy y más allá'
date: '2019-08-25'
description: Todo lo que ha sido añadido al lenguaje desde 2015. Con ejemplos desde ES6 hasta ES9 y más allá.
author: Misael Taveras
tags: ['JavaScript', 'Ejemplos', 'ES6']
keywords: es6, es9, JavaScript, novedades JavaScript, es7, es8, ejemplos es6, arrow function, promises, función flecha, spread, rest, es2016
banner: ./media/banner.jpg
---

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

### Funciones flecha

Uno de los favoritos y más sencillos. Las funciones flecha (arrow function) son una nueva forma de escribir funciones en JavaScript más elegante y sencilla, en especial para funciones cortas. Una función flecha se compone de un par de paréntesis para los parámetros, un símbolo de flecha (`=>`, signo de igual y luego mayor qué) y llaves: `(arg1, arg2) => { // función }`. Más simple, sencilla pero la mayor ventaja es que esta función devuelve automáticamente la expresión después de la flecha si no se ponen las llaves.

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

## ES8

Esta versión introduce algunos cambios mayores y unos menores pero que vienen a ser de mucha ayuda en nuestro día a día.

### Async/Await

Ya vimos como funcionan las [promesas](#promesas), pero estas, al igual que los `callbacks`, pueden volverse un poco enredadas y difíciles de seguir. Para ayudarnos con esto esta el `async/await` como una forma de escribir código asíncrono como si fuese síncrono. La forma de utilizarlo es envolviendo nuestras llamadas asíncronas en una función especial que usa el *keyword* `async` y en cada llamada asíncrona anteponer el keyword `await` para decirle que **espere** a que esa llamada termine. Solo es posible usar `await` dentro de una función que tenga `async` [por ahora](#mas-alla)

```js
const waitSeconds = seconds => new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve(`Pasaron ${seconds} segundos`); // ¡Todo salió bien!
  }, seconds * 1000);
})

async function wait3Seconds() {
  await waitSeconds(1)
  await waitSeconds(2)
  console.log('Despues de 3 segundos aqui estoy')
}

// Para funciones flecha
const wait2Seconds = async () => {
  const response = await waitSeconds(2)
  console.log(response)
  return '¿Qué hacer ahora?'
}

wait3Seconds()
// Esto devuelve una promesa
wait2Seconds().then(response => { console.log(response) })
```

> Para capturar excepciones en el código con async/await debemos utilizar un clasico `try...catch`.
> Esto es más parecido al código que estamos acostumbrados a escribir ya de forma asíncrona

### Object.entries Object.values

Hermanos del método `Object.keys` estos métodos nos permiten trabajar con los valores dentro de los objetos de una mejor forma.

### Object.entries

Nos devuelve en un array de pares los keys del objeto que le pasemos junto con su valor.

```js
const person = {
  name: 'Misael',
  lastName: 'Taveras',
  age: '???'
}

 // [ [ 'name', 'Misael' ], [ 'lastName', 'Taveras' ], [ 'age', '???' ] ]
console.log(Object.entries(person))
```

### Object.values

Nos devuelve en un array solo con los valores que tenga el objeto

```js
const person = {
  name: 'Misael',
  lastName: 'Taveras',
  age: '???'
}

// [ 'Misael', 'Taveras', '???' ]
console.log(Object.values(person))
```

#### Otras novedades de ES8

- [Comas finales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas): nos permite dejar comas sueltas al declarar objetos, arrays y parámetros para funciones.

## ES9

Esta es la ultima versión *"activa"* de JavaScript; lanzada oficialmente el año pasado esta incluye mejoras a las cosas que ya estaban. Aquí una lista:

- [Iteradores Asíncronos](https://jakearchibald.com/2017/async-iterators-and-generators/): Si alguna vez te preguntaste como serían los bebes de los generadores (no los detallamos, pero dejamos enlace arriba) y los operadores async/await, estas de suerte porque es justamente eso.
- [Operador Rest en Objetos](https://v8.dev/features/object-rest-spread): Ahora es posible usar el spread en objetos para unirlos creando uno nuevo (ver [spread](#spread)).
- [Mejoras en los RegExp](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp): No hablamos de las expresiones regulares porque es un tema profundo y en cada iteración de ECMAScript se le fueron añadiendo cosas. Acá dejo la documentación de Mozilla al respecto,
- [Promise.finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally): Ahora las promesas tienen un método finally que al igual que en los `try...catch...finally` se llamará independientemente si la promesa se resolvió o si se rechazó. Excelente para hacer cosas como cerrar conexiones a la base de datos una vez que se haya terminado la operación.

## Más allá

![camino al horizonte](./media/road.jpg)

Anteriormente mencioné que el comité encargado de los estándares del lenguaje, la [TC39](https://www.ecma-international.org/memento/tc39-rf-tg.htm) vela porque cada año se agreguen mejoras al lenguaje o nuevas características. Esto lo hacen para que no vuelva a pasar igual que en 2015 cuando anunciaron ES6 con tantos cambios que nadie supo de momento como adoptarlos. Ahora cada año se lanza una versión con las propuestas que pasaron sus minuciosas pruebas e investigaciones.

De esta forma podemos estar seguros qué cosas nuevas nos traerá el lenguaje dependiendo el estado en el que se encuentren. Hay record público de esto en su [GitHub](https://github.com/tc39/proposals), donde podemos ver en que estado se encuentra cada propuesta y donde podemos subir nuestras propias ideas.

Entre las propuestas más posibles y las que más espero se encuentran:

> **ALERTA** estos métodos son opcionales y no están disponible en ningún lugar.
> Para usarlos deberás configurar babel con presets personalizados

### Optional Chaining

Si como yo te encuentras a cada momento que tienes objetos dentro de objetos devolviendo errores como `Cannot read property 'X' of undefined` o haciendo muchas validaciones, esta característica te encantará. Con el encadenamiento opcional (espero que le cambien el nombre en español) podrás  acceder a valores anidados sin preocuparte por errores de `undefined`. Se planea agregar un nuevo operador `.?` (punto más signo de interrogación) que servirá para acceder de forma segura a propiedades dentro de objetos por más profundas que estén.

```js
const person = {
  name: 'Marcos',
  friends: [{ name: 'Elvis', friends: [] }]
}
console.log(person.friends[0].friends[0].name) // `Cannot read property 'name' of undefined`

console.log(person.friends[0].friends[0]?.name) // `undefined`
```

### Métodos estáticos y valores privados en clases

El poder inicializar miembros de la clase directamente fuera del constructor o agregar métodos estáticos a las clases es algo que es posible, y muy común en [React](https://reactjs.org/) con ayuda de Babel o si estamos usando Typescript. Pero ahora vendrán, junto con métodos privados (los cuales no son posibles de momento) nativos al lenguaje.

```js
class Classroom {
  // Es privado y no se puede acceder fuera de la clase
  #id = '507f1f77bcf86cd799439011'

  // Puede accederse sin instancia
  static roomType = 'classroom'

  // Como es una función flecha, `this` es la
  // instancia actual de la clase.
  logId = ()=> this.#id
}

console.log(Classroom.roomType) // 'classroom'
const SpanishRoom = new Classroom()
console.log(SpanishRoom.#id) // Arroja `SyntaxError`
console.log(SpanishRoom.logId) // '507f1f77bcf86cd799439011'
```

#### Otras cosas para el futuro de JavaScript

![al futuro](./media/future.jpg)

- [Decoradores](http://github.com/tc39/proposal-decorators): Usados hace tiempo por la gente de [Angular](http://angular.io) y adoptados al 100% en Typescript.
- [Await sin async](https://github.com/tc39/proposal-top-level-await): La capacidad de usar el keyword await sin encapsularlo en una función async.
- [Promise.any](https://github.com/tc39/proposal-promise-any): Recibe un array de Promesas y devuelve al momento que la primera se resuelva o se rechace.
- [globalThis](https://github.com/tc39/proposal-global): Una forma de acceder al objeto global al momento de ejecución. En los navegadores es `window` en los workers es `self` y en node es `global`. Con `globalThis` solo será globalThis y es todo.

## Conclusión

El futuro de JavaScript se ve más prometedor que nunca, con nuevas iteraciones del lenguaje haciendo la vida del desarrollador más cómoda. Con herramientas como babel y [webpack](https://webpack.js.org/) nos permiten brindar a los usuarios código que no afecte su experiencia en nuestra aplicación o página.

Estaré haciendo guías detalladas de las características que más utilizo, cuando aprueben una nueva o las que me dejen saber que están interesados en [twitter](https://twitter.com/taverasmisael).

**Tú, ¿Qué esperas para empezar a usar estas nuevas funcionalidades?**
