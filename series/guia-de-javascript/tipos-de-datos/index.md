---
title: Tipos de datos
date: '2019-09-20'
description: Aprende los diferentes tipos de datos que se manejan en JavaScript desde primitivos hasta objetos y sus diferencias y ventajas entre cada uno
author: Misael Taveras
status: published
serie: 'guia-de-javascript'
chapter: 3
---

Javascript, como todo lenguaje de programación, maneja diferentes tipos de datos que podremos utilizar durante nuestro programa. A diferencia de otros lenguajes, JavaScript, opta por un acercamiento más sencillo y directo con los tipos de datos que maneja.

Podemos dividir los tipos de datos en javascript en dos grandes grupos: Primitivos y Objetos.

## Tipos de datos primitivos

Los tipos de datos primitivos son aquellos que son inmutables (que no pueden cambiar lo que son), y en JavaScript son 7:

1. Boolean
2. Number
3. String
4. Null
5. Undefined
6. BigInt
7. Symbol

Por ahora nos enfocaremos en los primeros 5. Ya que es una guía introductoria a JavaScript, no estaremos tratando los dos últimos.

### Boolean

Es un tipo de datos que solo admite uno de dos valores: `true` o `false`.

Este tipo de datos es usualmente utilizado para tomas de decisiones. Podemos pensar en el como un interruptor de un bombillo, si está hacía arriba (`true`) pasamos energía y encendemos el bombillo, y si está en el lado opuesto (`false`) cortamos la energía.

> **Tip:** los valores boleados pueden ser representados de varias maneras gracias a algo llamado `Type coercion` que veremos en el modulo Intermedio. Pero hay dos valores numéricos equivalentes a los tipos booleanos, estos son 1 para true y 0 para false.

> **Tip:** los tipos de datos `null` y `undefined` son considerados como `false`. Más detalles debajo.

### Number

En JavaScript hay dos grupos de números los `Numbers` que representan numerosos enteros y veremos a continuación, y los `BigInt` que no consideraremos pero que básicamente sirven para almacenar y operar con precisión en enormes cantidades que un `Number` no puede manejar.

Los tipos `Number` en JavaScript hacen referencia a todos los números entre  -(2^53 -1) y  2^53 -1. Son muchos números, y a diferencia de otros lenguajes, JavaSCript puede trabajar en el mismo tipo de datos con numerosos enteros y fraccionarios.

Los números positivos se representan por su valor como tal: 5, 100, 98654. Y para los números negativos agregamos un signo de menos delante: -5, -100, -98654.

Podemos hacer operaciones aritméticas con los números, pero eso lo veremos en otro capitulo.

> **Bonus:** JavaScript cuenta con dos constantes con el mayor y el menor valor numérico que puede representar; estas constates son `Number.MAX_VALUE` y `Number.MIN_VALUE` respectivamente.

> **¿Qué se obtiene al dividir entre 0?:** Pues infinito. ¿Y entre 0 negativo? Pues infinito negativo. Por suerte en JavaScript tenemos esas dos constantes: `Infinity` y `-Infinity` que no son un valor como tal, y si le sumamos o le restamos cualquier numero que no sea su opuesto nos siguen dando el mismo valor

### Strings

Los strings son cadenas de datos utilizadas pare representar texto de cualquier indole. Cada carácter dentro de un string tiene una posición única, que inicia en 0. La longitud del String es el numero de elementos que hay en ella.

Para representar un string debemos poner nuestro texto dentro de comillas. JavaScript soporta 3 tipos de comillas para representar texto, estas son: `'simples'`, `"dobles"` y ```comillas o tildes invertidas```. Estas son indiferentes siempre que empecemos y terminemos con las mismas podemos poner cualquier tipo de cadena dentro de ellas.

Para acceder saber cuántos elementos hay en una cadena o su longitud usamos `.length` después del string: `'una cadena'.length // 10`. Notar que los espacios en blancos son contados como caracteres. 

Para acceder a un carácter en especifico dentro de un string tenemos dos formas de hacerlo (recordando siempre que las posiciones empiezan en 0):

1. `.charAt(index)` donde `index` es la posición en la cadena. Ejemplo: `"Hola mundo".charAt(5) // 'm'`.
2. `[index]` esta es la notación de llaves para arrays y objetos (nuestros siguientes tipo de datos). `index` aquí también es la posición en la cadena por lo que `"Hola mundo"[5] // 'm'` igual que en el ejemplo anterior.

> **Inmutabilidad en las cadenas:** igual que sus compañeros primitivos una cadena no puede cambiar su valor. `'Texto'` siempre sera la misma cadena sin importar lo que hagamos con ella.

## Tipos de datos Objetos

JavaScript aunque es un lenguaje multiparadigma que acepta diferentes modos de programación **TODO ES UN OBJETO**, ya mas luego veremos porqué y cómo; por ahora solo veamos los tipos de objetos básicos que existen en JavaScript ya que componen nuestro siguiente grupo de datos.

Los objetos en JavaScript a diferencia de sus hermanos primitivos, son mutables. Aunque podemos hacer un esfuerzo por hacerlos inmutables, su comportamiento original es adaptarse y cambiar.

En Javascript los objetos son colecciones de propiedades. Los valores de estas propiedades pueden ser de cualquier tipo, incluidos otros objetos. Estas propiedades son identificadas a través de llaves (`keys`) que pueden ser `Numbers`, `Strings` o `Symbols`. _ - inspirado en la definición en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#Propiedades)_.

> Como los objetos ocupan una parte central del lenguaje esta es solo una introducción a sus diferentes tipos, y solo los que trae el lenguaje en sí y no lo que podemos crear con classes y demás; esos estarán siendo explorados en el modulo intermedio.

### Date

En JavaScript podemos usar también fechas, pero es un tema bastante complejo. Por ahora solo sepamos que existen y que podemos trabajar con ellas.

En un capitulo futuro veremos cómo podemos crearlas, hacer operaciones con ellas y demás.

### Array

Los arrays, al igual que los Strings, son colecciones de datos que tiene un indice y una longitud. A diferencia de los strings estos sí pueden cambiar los valores en cualquier posición y podemos agregar más y más valores.

Los arrays se representan agregando nuestros elementos entre corchetes y dividiéndolos con comas.

```js
[1,23,49,66] // Array de Numbers
['hola', "mundo"] // Array de Strings
["Mariel", 3] // Array mixto
```

Al igual que con los `Strings` podemos acceder al elemento de un array usando su posición (indice de ahora en adelante) que también empieza en `0`. De este modo `["Benito", "Ramón", "Luis"][2] // "Luis"`

> El método `.charAt` está solo disponible para cadenas de texto. Para strings, arrays y objetos (como veremos a continuación) podemos usar el método de corchetes para acceder a valores en posiciones especificas.

#### Arrays anidados

Los arrays son un tipo de datos que soporta cualquier tipo de dato como elemento, no solo primitivos, por lo que es posible tener arrays dentro de arrays hasta el infinito, estos son conocidos como arrays anidados o arrays de arrays.

Para declarar un array de arrays solo debemos poner dentro del array otro array

```js
[[1,2], [3,4], 5, "hola"] // de nuevo podemos tener diferentes tipos de datos dentro del mismo array
```

Para acceder a los elementos dentro de nuestro array dentro del array es como si estuviéramos en un string, así que usamos corchetes contiguos siguiendo el mismo patrón anterior. Usando el array anterior

```js
[[1,2], [3,4], 5, "hola"][0][1] // 2
[[1,2], [3,4], 5, "hola"][2] // 5
[[1,2], [3,4], 5, "hola"][3][3] // "a"
```

> **Nota:** Hay un capitulo dedicado completamente a los Arrays y todo lo que podemos hacer con ellos, ya que son una estructura de datos bastante poderosa.

Aun siendo una estructura de datos poderosa tiene sus limitantes. Una de estas limitantes es que sus valores dependen de la posición en la que se encuentran y en ocasiones esto no es lo que queremos, más porque este orden puede cambiar en cualquier momento.

Otra limitante es el hecho de que no podemos crear estructuras complejas. Supongamos que queremos tener información de personas, un array no nos es de mucha ayuda. Podríamos hacer un array anidado y recordar las posiciones:

```js
/*
0 - Nombre
1 - Edad
2 - Tipo de mascota (si tiene)
3 - Nombre de mascota (si tiene)
*/
["Marcos", 25, "perro", "Firulais"]
["Melinda", 40, "", ""]
```

Podemos hacerlo mejor. Cuando queremos almacenar datos que no dependan del orden, agrupados y con una forma más descriptiva de acceder a su contenido que con indices (_para ver el nombre de una mascota debemos usar `[3]` lo cual no dice nada de lo que hay ahí si no fuera por el comentario_), usamos los Objetos.

### Objetos

En esta sección no hablaremos de cómo crear objetos con clases ni nada por el estilo, sino la notación de objetos en Javascript tan popular que se convirtió en su propio estándar JSON.

En JavaScript existen los objetos literales que no son más que una combinación de llaves (keys) que pueden ser de tipo `String`, `Number` o `Symbol` y valores (values) que pueden ser de cualquier tipo de dato.

La forma de declarar estos objetos es con llaves y separando los keys de los values con dos puntos `:`.

En el ultimo ejemplo trabajando con Arrays, intentamos agrupar la información de personas dentro de un array. Esto probó ser difícil para trabajar y con los valores, ya que dependían del index y no de un `key` más expresivo o evidente. Veamos la misma estructura pero usando objetos en vez de arreglos.

```js
{ name: 'Marcos', age: 25, pet: 'perro', petName: 'Firulais' }
```

Ahora sin necesidad de comentarios podemos entender que significa cada valor, y como no están ordenados por indice sino por `key` (que en este caso es un string), podemos acceder a los valores de dos formas:

1. Con el método que ya conocemos de los arrays usando `[]` y poniendo dentro el indice, que en este caso es un key de tipo `String` así que lo ponemos dentro de comillas.

```js
// Ejemplo para conseguir el nombre
{ name: 'Marcos', age: 25, pet: 'perro', petName: 'Firulais' }['name']
```

2. Podemos también utilizar el **sistema de punto** para acceder a los valores en un objeto, **siempre y cuando el `key` sea un string**. El sistema de punto se logra simplemente poniendo un punto `.` después del objeto y luego el nombre del `key` del que deseamos saber el valor.

```js
// Ejemplo para conseguir la edad
{ name: 'Marcos', age: 25, pet: 'perro', petName: 'Firulais' }.name
```

#### Objetos anidados

Al igual que los arrays los objetos pueden tener más de sí mismo de forma anidada. Para eso basta con agregar a cualquier key un objeto literal en vez de un valor primitivo.

Continuando con nuestro ejemplo, fuera mejor que la mascota de cada persona fuera su propio objeto dentro de esa persona, con el nombre y el tipo. Mejoremos el código anterior para lograr esto.

```js
{ name: 'Marcos', age: 25, pet: {type: 'perro', name: 'Firulais' }}
```

Y al igual que los arrays accedemos a los valores anidados poniendo pares de llaves contiguas. Así para tener el nombre de la mascota usamos `["pet"]["name"]`. O podemos usar también la notación de punto **siempre que las llaves sean string**: `.pet.type`.

## Ejercicios

Espero que hayas podido comprender los puntos explicados. Para poner en practica tus conocimientos aquí hay un pequeño ejercicio que engloba todo lo que hemos visto hasta ahora.

Si no puedes hacerlo, no te preocupes, en la próxima lección estará la respuesta.

### Ejercicio

#### Crear un  Objeto que represente una persona, el objeto debe tener los siguientes `keys`

- `name` de tipo string
- `age` de tipo number
- `isCool` de tipo boolean
- `favoriteColors`: de tipo array **solo con strings**.
- `friends`: de tipo array **con objetos de tipo Persona dentro**

> **NOTAS:** los valores siempre y cuando sean del tipo especificado pueden ser de cualquier valor. El array de `friends` debe contener solo objetos con los mismos `keys` que el de esta persona, esto es: name, age, isCool, favorite colors, friends. Las personas en `friends` pueden tener favoriteColors y friends como arrays varios, pero la primera persona no. Todos los campos de la primera persona **SON REQUERIDOS**, y los arrays deben tener al menos 1 elemento.
