---
title: JavaScript 101
date: '2019-09-20'
description: Esta es una lección extra antes de empezar con el material de lleno. Acá hablaremos de algunos conceptos generales de JavaScript, para tener en mente en las futras lecciones.
author: Misael Taveras
status: published
serie: 'guia-de-javascript'
chapter: 2
---

Esta es una lección extra antes de empezar con el material de lleno. Acá hablaremos de algunos conceptos generales de JavaScript, para tener en mente en las futras lecciones.

## Comentarios

Los comentarios son texto que el interprete del lenguaje (o motor) ignora, en donde podemos escribir lo que deseemos. Pueden servir para aclarar, o indicar cosas sobre el código, para agregar recordatorios de cosas que debemos implementar o mejorar sin tener que ir a otra app.

Los comentarios utilizados correctamente son poderoso. JS al igual que los demás lenguajes nos permite agregar comentarios al código en una sola linea utilizando doble barras `//` o de multiples lineas usando barra asterisco para abrir, barra asterisco para cerrar.

```js
// Estoy en una sola linea

/*
estoy
en
multiples
lineas
fin
*/
```

## Imprimir valores

JavaScript expone un sin numero librerías y clases de soporte con el lenguaje muchas de ellas dependerán del entorno y otras, como `console` son universales.

Con él commando `console.log(/* valor */)` imprimimos en pantalla el valor que le pasemos. Si vienes de otros lenguajes esto es un `System.out.println`, `echo`,  `System.Diagnostics.Debug.WriteLine`, `print`. Si no vienes de otro lenguaje, piensa en ello como una forma de ver en la pantalla cualquier valor que le pases.

Si hay un console.log con un comentario de una liena al lado, este comentario representa lo que debe imprimirse en pantalla al ejecutar ese console.log.

```js
console.log('Hola'); // 'Hola'
console.log(89) // 89
```

Estamos listos para empezar, asi que sigamos con los Tipos de datos.
