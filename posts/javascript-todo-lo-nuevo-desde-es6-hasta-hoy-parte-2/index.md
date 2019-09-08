---
title: 'JavaScript: Todo lo nuevo desde ES6 hasta hoy y más allá. Parte 2'
date: '2019-08-25'
description: Todo lo que ha sido añadido al lenguaje desde 2015. Con ejemplos desde ES8, ES9 que viene a continuación
author: Misael Taveras
tags: ['JavaScript', 'Ejemplos', 'ES6']
status: published
banner: ./media/banner.jpg
---

> Esta es la segunda parte de una serie de dos donde hablo de todas las novedades de JavaScript desde el 2015.
> Puedes ver la [primera parte aquí][parte-uno].

## Recapitulando

[En la parte uno][parte-uno] hablamos de las novedades del lenguaje, un poco de historia de las versiones de JavaScript, arrow functions, Promesas y muchas cosas que mejoraron el lenguaje en gran manera. Si no las has leido, te recomiendo hacerlo ahora, aunque no es necesario para continuar.

Ahora veremos las versiones ES8, ES9 y las propuestas que podrían ser introducidas para la ES10.

## ES8

Esta versión introduce algunos cambios mayores y unos menores pero que vienen a ser de mucha ayuda en nuestro día a día.

### Async/Await

Ya vimos como funcionan las [promesas](/blog/javascript-todo-lo-nuevo-desde-es6-hasta-hoy-parte-1#promesas), pero estas, al igual que los `callbacks`, pueden volverse un poco enredadas y difíciles de seguir. Para ayudarnos con esto esta el `async/await` como una forma de escribir código asíncrono como si fuese síncrono. La forma de utilizarlo es envolviendo nuestras llamadas asíncronas en una función especial que usa el *keyword* `async` y en cada llamada asíncrona anteponer el keyword `await` para decirle que **espere** a que esa llamada termine. Solo es posible usar `await` dentro de una función que tenga `async` [por ahora](#mas-alla)

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

##  Conclusión

El futuro de JavaScript se ve más prometedor que nunca, con nuevas iteraciones del lenguaje haciendo la vida del desarrollador más cómoda. Con herramientas como babel y [webpack](https://webpack.js.org/) nos permiten brindar a los usuarios código que no afecte su experiencia en nuestra aplicación o página.

Esto concluye nuestra serie de dos articulos sobre serie “JavaScript: Todo lo nuevo desde ES6 hasta hoy y más allá”. Espero que te haya gustado. De ser así compartela con alguien más que sabes que se beneficiará y como siempre no olvides decirme que te pareció.

Estaré haciendo guías detalladas de las características que más utilizo, cuando aprueben una nueva o las que me dejen saber que están interesados en [twitter](https://twitter.com/taverasmisael).

**Tú, ¿Qué esperas para empezar a usar estas nuevas funcionalidades?**

[parte-uno]: /blog/javascript-todo-lo-nuevo-desde-es6-hasta-hoy-parte-1
