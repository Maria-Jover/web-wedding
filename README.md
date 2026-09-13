# María & Nacho · Boda 27.02.2027

Web informativa para compartir con las personas invitadas a la boda.

## 📁 Estructura

```
web-wedding/
├── index.html          Página principal
├── css/styles.css      Estilos
├── js/main.js          Cuenta atrás + animaciones
├── img/                Imágenes (añadir hero.jpg)
├── .nojekyll           Evita procesado Jekyll en GitHub Pages
└── README.md
```

## 🚀 Cómo publicar en GitHub Pages

1. **Sube los archivos al repositorio** `Maria-Jover/web-wedding`
   Puedes hacerlo desde la web de GitHub (drag & drop) o con git:

   ```bash
   git clone https://github.com/Maria-Jover/web-wedding.git
   # Copia todos los archivos de esta carpeta dentro
   cd web-wedding
   git add .
   git commit -m "Web de la boda"
   git push
   ```

2. **Activa GitHub Pages**
   - Ve a `Settings` → `Pages`
   - En **Source**, selecciona la rama `main` y la carpeta `/ (root)`
   - Pulsa **Save**

3. **Espera 1-2 minutos** y accede a:
   👉 `https://maria-jover.github.io/web-wedding/`

## 🖼️ Foto de portada

Añade una foto llamada **`hero.jpg`** dentro de la carpeta `img/`.
Si no la añades, se muestra un degradado nude/salvia por defecto.

## ✏️ Cómo editar el contenido

Todo el texto está en `index.html`. Los datos importantes están en secciones claramente marcadas con comentarios (`<!-- CEREMONIA -->`, `<!-- CELEBRACIÓN -->`, etc.).

Datos que **necesitas actualizar antes de publicar**:

- 🔢 **IBAN real** en la sección "Regalo" (`index.html`, buscar `ES00`).
- 🕒 **Hora del banquete** (ahora dice "A continuación de la ceremonia" — cambiar si sabes la hora exacta).
- 🖼️ **Foto de portada** en `img/hero.jpg`.

## 🎨 Personalización rápida

Los colores están definidos como variables CSS al principio de `css/styles.css`:

```css
:root {
    --cream:      #F5EFE5;   /* nude */
    --sage:       #8FA57E;   /* verde salvia */
    --sage-deep:  #6B7F5C;   /* salvia oscuro */
    ...
}
```

Cambia esos valores y toda la web se actualiza.
