/**
 * ---------------------------------------------------------------
 * Programa: Dibujo básico en canvas
 * Autor: Aylin Lucas
 * Fecha: [Coloca la fecha actual]
 * Descripción:
 *   Este programa utiliza el elemento <canvas> de HTML5 y su contexto 2D
 *   para dibujar un rectángulo de color verde. 
 *   Además, el lienzo se ajusta automáticamente para ocupar
 *   el 50% del ancho y 50% del alto de la pantalla.
 *
 * Funcionalidad principal:
 *   1. Accede al elemento <canvas> mediante su ID.
 *   2. Ajusta su tamaño dinámicamente al 50% del viewport.
 *   3. Obtiene el contexto de renderizado en 2D.
 *   4. Define un color de relleno verde.
 *   5. Dibuja un rectángulo verde dentro del lienzo.
 *
 * Requisitos:
 *   - En el documento HTML debe existir un elemento <canvas> con id="lienzo".
 *   - Ejemplo:
 *        <canvas id="lienzo"></canvas>
 * ---------------------------------------------------------------
 */

//------------------------------------------------------
// 1. Obtener el elemento <canvas> del documento
//------------------------------------------------------
var canvas = document.getElementById("lienzo"); 
// Se busca en el documento HTML el elemento con id "lienzo".
// La variable 'canvas' contendrá una referencia a dicho elemento.
// Este objeto representa el área de dibujo donde se pintarán gráficos.


//------------------------------------------------------
// 2. Ajustar el tamaño del canvas dinámicamente
//------------------------------------------------------
canvas.width = window.innerWidth/2;   // 50% del ancho de la ventana
canvas.height = window.innerHeight/2; // 50% del alto de la ventana

// Explicación:
// - window.innerWidth devuelve el ancho visible de la ventana del navegador.
// - window.innerHeight devuelve el alto visible de la ventana.
// - Multiplicar por 0.5 equivale a usar el 50% de esas dimensiones.
// - Así el canvas se adapta automáticamente al tamaño de la pantalla.


//------------------------------------------------------
// 3. Obtener el contexto de renderizado en 2D
//------------------------------------------------------
var ctx = canvas.getContext("2d");
// El método getContext("2d") devuelve un objeto que permite dibujar
// figuras bidimensionales (líneas, rectángulos, círculos, texto, etc.).
// La variable 'ctx' será nuestro "pincel" para trabajar en el canvas.


//------------------------------------------------------
// 4. Establecer el color de relleno
//------------------------------------------------------
ctx.fillStyle = "blue";
// La propiedad fillStyle define el color que se usará para rellenar figuras.
// Puede usarse un nombre de color (como "green"), un código hexadecimal ("#202f6c")
// o una notación RGB/RGBA ("rgba(23, 42, 216, 0.73)" o "rgba(55, 0, 255, 0.93)").
// En este caso, el color seleccionado es verde sólido.


//------------------------------------------------------
// 5. Dibujar un rectángulo relleno
//------------------------------------------------------
ctx.fillRect(0, 0, 200, 200);
// fillRect(x, y, width, height) dibuja un rectángulo relleno.
// Se deja un margen de 10 píxeles por lado para que no toque los bordes del canvas.

// Resultado:
//   Se mostrará un rectángulo verde que se ajusta proporcionalmente
//   al tamaño del canvas (que es el 50% del tamaño de la pantalla).
