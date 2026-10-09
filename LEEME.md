# CV de Renato José Vela Arce

Sitio estático personal: una sola página que se arma desde `cv-data.js`.

```
mi-sitio/
├─ index.html   Estructura y estilo del CV
└─ cv-data.js   ← AQUÍ se edita todo el contenido
```

## Editar

Cambia el contenido en `cv-data.js` y recarga la página. Todo lo que escribas ahí es **público**.

## Ver en local

Dentro de esta carpeta:

```powershell
python -m http.server 8000
```

Abre http://localhost:8000.

## Publicar (GitHub Pages)

Sube esta carpeta al repositorio y activa Settings → Pages → Branch `main`, carpeta `/ (root)`.
