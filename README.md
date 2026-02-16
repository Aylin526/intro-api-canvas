# 🎨 Dibujo en Canvas con Bordes Redondeados y Sombra

## 📖 Descripción General
Este proyecto muestra cómo utilizar el elemento **`<canvas>` de HTML5** junto con **JavaScript** para dibujar un **rectángulo con bordes redondeados**, un **relleno azul claro**, un **borde azul oscuro** y una **sombra suave**.  
Su propósito es demostrar el uso del **contexto 2D de Canvas** y cómo aplicar estilos visuales a figuras mediante código.

---

## 🧱 Estructura del Proyecto
📂 proyecto-canvas
├── index.html # Estructura HTML principal
├── styles.css # Estilos visuales del canvas
└── script.js # Código JavaScript del dibujo


---

## ⚙️ Funcionalidades
- Ajusta dinámicamente el tamaño del canvas al **50% del ancho y alto** de la pantalla.  
- Dibuja un **rectángulo con bordes redondeados** dentro del lienzo.  
- Aplica un **relleno azul claro** y un **borde azul oscuro**.  
- Agrega **sombra difuminada** para un efecto de profundidad.  
- Estilo del lienzo definido con **CSS externo** para mantener separación entre lógica y diseño.

---

## 🧩 Tecnologías Utilizadas
| Tecnología | Uso principal |
|-------------|----------------|
| **HTML5** | Contenedor del elemento `<canvas>` |
| **CSS3** | Fondo gris, bordes redondeados, sombra externa |
| **JavaScript (ES6)** | Dibujo del rectángulo, colores, sombras y bordes |

---

## 🖌️ Código Principal (JavaScript)
```javascript
ctx.fillStyle = "#ADD8E6";     // Relleno azul claro
ctx.strokeStyle = "#00008B";   // Borde azul oscuro
ctx.lineWidth = 4;             // Grosor del borde
ctx.shadowColor = "rgba(0, 0, 0, 0.3)"; // Sombra gris suave
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
La función personalizada drawRoundedRect(x, y, width, height, radius) permite dibujar un rectángulo con bordes redondeados mediante curvas cuadráticas (quadraticCurveTo).

🎨 Estilos del Lienzo (CSS)
#lienzo {
  background-color: #f0f0f0; /* Gris claro */
  display: block;
  margin: 20px auto;
  border-radius: 15px; /* Bordes redondeados */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Sombra externa suave */
  border: 2px solid #666; /* Borde del canvas */
}
📸 Vista Previa (Descripción)
El lienzo muestra un rectángulo azul claro centrado, con bordes redondeados, borde azul oscuro y una sombra difuminada sobre un fondo gris claro.
Este diseño crea una apariencia moderna y con sensación de profundidad.

🚀 Ejecución del Proyecto
Descarga o clona el repositorio.

Abre el archivo index.html en tu navegador.

Visualiza el lienzo y el rectángulo dibujado automáticamente.

🧑‍💻 Autor
Aylin Lucas
📅 Fecha: [coloca la fecha de creación]
💬 Propósito: Proyecto educativo para comprender el uso del elemento <canvas> de HTML5.

💡 Mejoras Futuras
Redibujar automáticamente el rectángulo al redimensionar la ventana.

Permitir cambiar colores mediante un selector de color (color picker).

Agregar animaciones o efectos de movimiento.

Implementar un sistema de interfaz interactivo (por ejemplo, con botones).

🪶 Licencia
Este proyecto es de uso educativo y libre.
Puedes modificarlo, compartirlo o mejorarlo con fines de aprendizaje, siempre que se mantenga la referencia al autor original.