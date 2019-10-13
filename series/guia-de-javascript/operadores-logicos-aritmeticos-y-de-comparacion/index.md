---
title: Operadores lógicos, aritméticos y de comparación
date: '2019-10-13'
description: En esta lección estaremos viendo los diferentes tipos de operadores que hay en JavaScript, como funcionan y como reaccionan
author: Misael Taveras
status: published
serie: 'guia-de-javascript'
chapter: 4
---

En JavaScript podemos hacer operaciones con todos los tipos de datos que nos provee el lenguaje. Las más simples son las aritméticas que hacemos con los tipos de datos numéricos, empecemos por ahí.

## Operaciones aritméticas

En JavaScript los operadores son `+, -, *, /, %, **` y funcionan como estamos acostumbrados en matemáticas.

```js
// Por regla de estilos se recomienda un espacio entre los números y el operador
6 + 10 // 16
20 - 4 // 16
4 * 4 // 16
32 / 2 // 16
```

Las reglas aritméticas para las operaciones matemáticas son iguales en JavaScript.

Los dos que podrían ser nuevos son el operador de modulo (`%`) y el de exponenciación (`**`).

### El operador de modulo %

Este operador aplicado a dos numero devuelve el restante de su división.

```js
100  %  6 // 4
1 % 2 // 5
10 % 2 // 0
```

### El operador de exponciación \*\*

Sirve para representar una operación de exponente donde la base es el primer numero y el segundo es el exponente.

```js
// Por reglas de estilos en las operaciones exponenciales no hay espacio enrte el operador y los numeros
2**4 // 16
3**3 // 27
10**3 // 1000
```

### Negación unaria

Se hace con el signo de `-` y convierte el siguiente valor a su valor negativo.

```js
var x = -3 // más de las variables en el proximo capitulo
-x // -3
-"5" // -5
```

> Aquí nos encontramos con el primer ejemplo de la coerción de tipos en JavaScript donde el interprete convierte el valor dependiendo del operador utilizado. En futuras lecciones exploraremos más de esto.

### Más unario

Así como hay una negación unaria, hay un unario más que intenta convertir a número cualquier valor que no lo sea. Es muy util para transformar strings a números.

```js
+3 // 3
+-5 // -5
+'10' // 10
+"diez" // NaN
+"hola" // NaN
```

> **NaN** es un valor de JavaScript de tipo numérico pero que representa cualquier valor que intenta hacerse pasar por un numero, pero que no lo es. Como en nuestro caso la cadena de texto “diez” no es un numero, así que al intentar convertirlo a número devuelve *NaN*

> Cabe destacar que dos *NaN* no tienen el mismo valor, esto es porque dos valores que no son un numero pueden ser *NaN* siendo diferente, como en nuestro caso “diez” y “hola” ambos son **NaN** pero son textos diferentes. Más de esto con los [operadores de comparación](#operadores-de-comparacion).

## Operadores lógicos

Estos son los usualmente utilizados con valores de tipo `Boolean` ya que ellos a su vez siempre devolverán un valor booleano, lo que los hace perfecto para las tomas de decisiones.

Los operadores lógicos son 3: `!, &&, ||` se leen como *No, Y, O*, y se adhieren a las reglas de las [tablas de verdad](https://es.wikipedia.org/wiki/Tabla_de_verdad "Wikipedia Tabla de Verdad").

### Evaluación de cortocircuito

JavaScript implementa la **evaluación de cortocircuito** que lee los valores de izquierda a derecha donde:

1. `false && true` siempre evaluará false sin evaluar el segundo valor
2. `true || false` siempre evaluará true sin evaluar el segundo valor

> El uso de los operadores `&&` y `||` en conjunto de la evaluación de cortocircuito hace que JavaScript devuelva el primer valor evaluado. Ejemplo `false || "Hola"` devolverá `"Hola` y en `false && "Hola"` devolverá `false`

### Lógico Y

Símbolo `&&`. Devuelve `true` siempre que ambos [valores sean true](/series/guia-de-javascript/tipos-de-datos#boolean). También puede ser usado para devolver el valor a la derecha del operador si el primero es `true`

```js
true && true // true
true && false // false
false && false // false
"Hola" && false // false
true && "Adios" // "Adios"
40 && 50 // 50
```

### Lógico O

Símbolo `||`. Devuelve `true` siempre que al menos uno de [valores sean true](###Agregar-link-a-tipo-de-dato-booleano). También puede ser usado para devolver el valor a la derecha del operador si el primero es `false`.

```js
true || true // true
true || false // true
false || true // true
false || false // false
"Hola" || false // "Hola"
true || "Adios" // true
40 || 50 // 40
```

#### Precedencia de los operadores

El operador `&&` tiene precedencia sobre el operador `||`. Para controlar el flujo debemos usar paréntesis.

```js
true || false && false  // true
(true || false) && false // false
```

### Lógico NO

Símbolo `!`.Sirve para negar cualquier expresión. Eso es si es `true` devolverá `false` y viceversa. **Este operador siempre devuelve un boolean.**

```js
!true // false
!false // true
!"Hola" // false
!3 // false
!0 // true
```

> **Doble negación**  es posible poniendo dos operadores de No juntos, tambien conocidos como *doble bang* `!!`. Esto devolvera el valor Booleano del valor en el que se opera. Ejemplo: `!!true // true` y `!!0 // false`.

## Operadores de comparación

En JavaScript podemos dividir los operadores de comparación en dos grupos: [relacionales](#operadores-relacionales) e [igualitarios](#operadores-igualitarios).

## Operadores relacionales

Estos son operadores de los que estamos acostumbrados en clase de matemáticas. 

### Mayor que

símbolo `>`. Devuelve `true` si el valor de la izquierda es mayor que el de la derecha.

```js
3 > 4 //false
10 > 5 // true
100 > 100 // false
```

### Menor que

símbolo `<`. Devuelve `true` si el valor de la izquierda es menor que el de la derecha.

```js
3 < 4 // true
10 < 5 // false
100 < 100 // false
```

### Mayor igual que

símbolo `>=`. Devuelve `true` si el valor de la izquierda es mayor o igual que el de la derecha.

```js
3 >= 4 //false
10 >= 5 // true
100 >= 100 // true
```

### Menor igual que

símbolo `<=`. Devuelve `true` si el valor de la izquierda es menor o igual que el de la derecha.

```js
3 <= 4 //true
10 <= 5 // false
100 <= 100 // true
```

## Operadores igualitarios

En JavaScript hay operadores de igualdad estricta `===` y abstracta `==` y cada uno tiene su desigualdad también.

### Igualdad estricta

Se utilizan tres símbolos de igual `===` entre los dos valores y devuelve `true` siempre que los dos valores sean del mismo tipo y tengan el mismo valor.

```js
3 === 3 // true
true === true // true
3 === 4 // false
true === false // false
3 === '3' // false
0 === false // false
false === 0 // false
true === 1 // false
```

### Desigualdad estricta

Devuelve `true` cuando los valores son de tipos diferentes o son valores diferentes. En general devuelve `true` cuando su operador de igualdad devuelve `false`. El operador es un operador de [NO Lógico](#logico-no) reemplazando el primer signo de igual `!==`.

```js
3 !== 3 // false
true !== true // false
3 !== 4 // true
true !== false // true
3 !== '3' // true
0 !== false // true
```

### Igualdad

Este operador funciona similar a su versión estricta con la diferencia de que este convierte ambos valores al mismo tipo antes de ejecutar una operación de [igualdad estricta](#igualdad-estricta).

```js
3 == 3  // true
1 == '1' // true
false == 0 // true
true == 1 // true
null == undefined // true
undefined == false // false
null == false // false
"" == false // false
"hola" == true // false
```

### Desigualdad

Igual que su hermano devuelve `true` siempre que igualdad devuelve `false`. El operador se obtiene también reemplazando el primer signo de igual por uno de [Lógico No](#logico-no) `!=`.

```js
3 != 3  // false
1 != '1' // false
false != 0 // false
true != 1 // false
null != undefined // false
undefined != false // true
null != false // true
"" != false // false
"hola" != true // true
```

## Ejercicios

En esta ocasión no hay ejercicio, pero si te recomiendo que practiques con estos símbolos. JavaScript tiene algunas excepciones a las reglas que son su regla de por sí. Experimenta con los diferentes operadores, la precendecia de los operadores.

### Preguntas por curiosidad

1. ¿Qué pasa cuando usamos cualquiera de los [operadores de igualdad](#operadores-igualitarios) en `Object`? Ejemplo `{} === {}`.
2. ¿Qué pasa cuando usamos cualquiera de los [operadores de relación](#operadores-relacionales) en `String`? Ejemplo `"abc" >= "def"`.
