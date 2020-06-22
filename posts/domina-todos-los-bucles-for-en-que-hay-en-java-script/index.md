---
title: Domina todos los bucles for en que hay en JavaScript
date: '2020-06-21'
description: ¿Conoces las diferencias y casos de usos entre los 4 bucles for en JavaScript? Si no es el caso, o no sabes bien donde encaja cada uno, dejame mostrarte.
author: Misael Taveras
tags: ['JavaScript', 'Tutorial']
status: published
banner: ./media/banner-domina-todos-los-bucles-for-en-que-hay-en-javascript.jpg
---

En JavaScript existen diversas maneras de iterar sobre un arreglo o colección de datos. La más popular (aunque creo que menos sencilla) es el clásico bucle for que existe en todos los lenguajes de programación. Aunque en JavaScript tenemos otras maneras de trabajar con los datos dentro de un array (de hecho tengo un post al respecto que [puedes ver aquí](/blog/usar-map-filter-y-reduce-para-olvidarnos-de-los-bucles-for)) es bueno conocer los demás métodos y cómo utilizarlos.

Así que vayamos uno por uno y veamos como funcionan, su sintaxis y cuando conviene usarlos y cuando no tanto.

## El clásico bucle for

Esta es una estructura de control presente en todos los lenguajes de programación (al menos todos los que he utilizado/visto) y por eso aunque sea el más complejo de utilizar es también el más familiar y versátil, pero a su vez es más propenso a errores de lógica.

Lo que hace a esta estructura tan versátil y poderosa es que **NO ITERA SOBRE EL ARRAY** sino que simplemente cuenta en un rango y con dicho contador podemos hacer lo que queramos. La sintaxis es como sigue.

```js
// for ([expresión-inicial]; [condición]; [expresión-final])sentencia
const arr = [{ name: 'Abel' }, { name: 'Lana' }, { name: 'Drake' }]
// algunos prefieren usar i++ en vez de i += 1
for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i].name) // Abel, Lana, Drake
}
```

De leer esto tendríamos que la variable `i` empezará desde 0 y va a aumentar `1` mientras que ella sea menor que la longitud de `arr`. Aquí podemos ver la flexibilidad que ofrece este método, ya que podemos empezar a contar desde la posición que queramos, aumentar de a 2 o solo contar la mitad del array.

Por otro lado la flexibilidad que nos proporciona esta estructura es un nido de bugs que se pueden escapar aún al más experimentado. Un ejemplo es que al ser muy verboso e imperativo, tenemos que especificar demasiadas cosas y como funcionan. Si en vez de hacer `+=` solo hiciéramos `=1` el bucle no corre, si olvidamos la condición el bucle jamás terminaría.

Aunque estos errores son fáciles de identificar (principalmente en nuestros ejemplos básicos), cuando tenemos bucles anidados en los que hay que mantener pendencia de más de una variable contadora las cosas se pueden poner feas rápido; hay que usar esta estructura con cuidado.

### Ocasiones para usar el clásico For

**NUNCA.** Ok no. Pero realmente con las demás opciones que vamos a ver, y los métodos funcionales de los arrays debería haber muy poco lugar para un bucle for en nuestras vidas, pero es bueno conocerlo. Concedería a la situación de hacer un contador o un range... pero de seguro habría otra forma de llegar ahí.

> Para ver por qué no deberías usar el clásico bucle For y cuales son sus alternativas te recomiendo mi post para [olvidarse de los bucles for](/blog/usar-map-filter-y-reduce-para-olvidarnos-de-los-bucles-for/#problemas-con-el-bucle-for).

## El nuevo y mejorado bucle for in

El bucle `for...in` se podría decir que es una versión muy mejorada del clásico bucle for, y remplaza la flexibilidad de un contador de cualquier cosa por un bucle que itera sobre objetos con `keys`. Recordemos que los arrays son objetos con keys númericas, o índices.

Veamos su sintaxis  usando el mismo ejemplo anterior.

```js
// for([variable índice] in [iterable]) sentencia
const arr = [{ name: 'Abel' }, { name: 'Lana' }, { name: 'Drake' }]

for (let i in arr) {
  console.log(arr[i].name) // Abel, Lana, Drake
}
```

Mucho más sencillo, mucho más limpio, mucho más intuitivo. Perdemos la habilidad de empezar y terminar donde queramos (parcialmente, aun podemos usar la palabra `break` para salir de cualquier bucle) pero ganamos la seguridad de que no cometeremos errores sencillos como el anterior, internamente el motor del lenguaje sabe como manejar el inicio y el final del bucle basado en la longitud del elemento que vamos a iterar.

### Diferencias, ventajas y situaciones para el for in

Una de las ventajas es que podemos observar una menor cantidad de código y lógica manejada por nosotros, esto se traduce en la mayoría de los casos a menos bugs.

Una gran diferencia es que mientras el bucle for itera sobre un rango de `integer` el `for...in` itera sobre los `key de un objeto`. ¿Qué significa esto? Dos cosas principales:

* En el ejemplo del clásico bucle for `i` era una variable contador de tipo `integer`, mientras que acá es un `string` (ya que todas las llaves en JS son strings aunque parezcan integers).
* Éste es el más interesante, puedes iterar sobre objetos. Como esto itera sobre los keys, los objetos son pares de `key: value` podemos obtener todos los keys y valores de un objeto de la siguiente manera:

```js
const obj = {name: 'Pedro', salary: 3000, }

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`) // name: Pedro, salary: 3000
}
```

Con esto terminamos la parte 1 donde hemos usado los bucles que llamaré _Orientados a índices_ ya que como vimos estos iteran sobre un key o un índice y nosotros debemos componer o extraer el valor del objeto original (en Javascript los arrays [son objetos](/series/guia-de-javascript/tipos-de-datos#tipos-de-datos-objetos "Serie JavaScript: Tipos de Datos") también 🤷🏽‍♂️).

Ahora pasemos a los bucles for _Orientados a valores_.

## El hermoso bucle for of

Si te gustó la sintaxis del bucle `for...in` vas a amar el `for...of` ya que la sintaxis es la misma (solo cambia el `in` por el `of`) pero el resultado es diferente ya que, como hablamos, este bucle accede directamente al valor dentro del array en vez del al índice.

Veamos un ejemplo.

```js
// for([variable índice] of [iterable])
const arr = [{ name: 'Abel' }, { name: 'Lana' }, { name: 'Drake' }]

for (let value of arr) {
  console.log(value.name) // Abel, Lana, Drake
}
```

Mucho más simple y elegante, y nos elimina el tener que recordar de dónde sale el valor (antes debíamos hacer `arr[i]` pero ahora es manejado internamente por javascript).

La diferencia con el `for...in` es que este **accede directamente al valor en vez de al índice**.

Pero, ¿qué pasa con los objetos? Bueno, si estamos usando un `for...in` con un objeto y decidimos cambiarlo por un `for...of` nos encontraremos con el siguiente error:

`Uncaught TypeError: "obj" is not iterable`

Es que a diferencia de su hermano `for...in` este solo funciona en **iterables**. Los itereables son objetos especiales en JavaScript con un método `@@iterator` en un key `[Symbol.iterator]`, los Array, Set y Map vienen con este método implementado, pero los Object no, así que no son válidos para el bucle `for...of` aunque esto tiene una solución.

```js
const obj = {name: 'Pedro', salary: 3000, }

for (let pair of Object.entries(obj)) {
  console.log(pair) // ['name', 'Pedro'], ['salary', 3000]
}

// Si queremos ponernos interesantes podemos hacer
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`) // name: Pedro, salary: 3000
}
```

> Si aún no te sientes cómodo utilizando el Object Destructuring te recomiendo [leer mi post](/blog/javascript-todo-lo-nuevo-desde-es6-hasta-hoy-parte-1#destructuring "ES6 en adelante") sobre las ~~no tan~~  nuevas características de ES6.

El método `Object.entries([cualquier objeto])` devuelve un array  de arrays con los pares de key y value tipo `[key, value]` dado a que los arrays son iterables podemos utilizarlos dentro de nuestro bucle `for...of`.

Así mismo podemos usar `Object.keys` u `Object.values` si solo nos interesan o una cosa o la otra.

## Exclusivo de arrays forEach

Éste es un método que debió estar en el post en el que describo los diferentes métodos en los arrays para evitar el bucle for (por si te perdiste el enlace [aquí está de nuevo](/blog/usar-map-filter-y-reduce-para-olvidarnos-de-los-bucles-for/#problemas-con-el-bucle-for)). La razón por la que no está en la lista no es porque tiene for en el nombre, sino que suele usarse para causar side-effects en vez de transformaciones.

La única "gran desventaja" es que este método solo existe directamente en el `Array.prototype`; por lo que solo funciona en Arrays.

Una vez dicho esto, vemos la sintaxis que es muy parecida a las de map y filter.

```js
// for(cb(value, iter, arr))
const arr = [{ name: 'Abel' }, { name: 'Lana' }, { name: 'Drake' }]
arr.forEach(value => console.log(value.name)) // Abel, Lana, Drake
```

El `callback` que le pasamos recibe como primer argumento el valor, luego el índice y por último el array completo (igual que map y filter). Ninguno de los parámetros son requeridos por lo que podemos hacer como queramos con él.

### Dato curioso del forEach y los arrays

Algunas cosas en JavaScript son _array-like_ (se comportan muy similar a los arrays, pero no lo son en verdad). Una de los más famosos son los **NodeList**, esto es lo que nos devuelve el llamar `document.querySelectorAll([Selectort de CSS])`. Para iterar sobre estos con un forEach tendremos que convertirlo a array con el método de nuestra elección.

Por ejemplo

```js
const nodes = document.querySelectorAll('a')
const nodesarray = Array.from(nodes) // Convertir el NodeList a un Array
// [Imprime todos las URLs de los enlaces en la pagina]
Array.from(nodes).forEach(a => console.log(a.href))
```

## Conclusión

La pregunta final es ¿cuándo usar cada una de estas estructuras? No hay una regla dorada para nada en la programación y esa es una regla dorada. Pero la fórmula que me gusta seguir es la siguiente.

* Usar el **forEach** cuando queremos iterar en un _array_ pero crear side-effects. Si queremos usar un array y no causar side-effects, `map/filter/reduce` son una mejor opción.
* Usar el **for...of** si queremos acceder directamente a los valores de iterables; en especial si estamos trabajando con `Set` o `Map` ya que estos no se pueden iterar con ninguno de los otros bucles.
* Usar el **for...in** si el `key` de lo que vamos a iterar es importante o si queremos iterar sobre un objeto sin tener que llamar a `Object.entries()`.
* Usar el **clásico for** cuando queramos traer destrucción sobre las almas de nuestros seres queridos y desatar la desgracia sobre la faz de la tierra... o si necesitamos un contador o tener un control más granular y menos lineal sobre lo que estamos iterando. (Pero en serio, que sea la última opción).

Usar [**Twitter**](https://twitter.com/taverasmisael "Mi twitter") para comunicarte conmigo sobre cualquier opinión o discusión de este tema o [cualquier otro](/blog/).
