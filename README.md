# Portafolio de Jaime Gallego

Portafolio profesional construido con Astro, Tailwind CSS y ejecutado con Bun usando Claude Code.

## 🚀 Tecnologías

- **Framework**: [Astro](https://astro.build)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com)
- **Runtime**: [Bun](https://bun.sh)
- **Diseño**: Inspirado en diseño brutal/neobrutalist

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando           | Acción                                           |
|:------------------|:-------------------------------------------------|
| `bun install`     | Instala las dependencias                         |
| `bun run dev`     | Inicia el servidor local en `localhost:4321`     |
| `bun run build`   | Construye el sitio para producción en `./dist/`  |
| `bun run preview` | Previsualiza la build antes de desplegar         |

## 📝 Estructura del Proyecto

```
/
├── public/
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🎨 Personalización

Para personalizar tu portafolio, edita los siguientes archivos:

- **Información personal**: `src/pages/index.astro` (variables al inicio del archivo)
- **Proyectos**: `src/pages/index.astro` (array `projects`)
- **Stack tecnológico**: `src/pages/index.astro` (array `techStack`)
- **Estilos**: `tailwind.config.mjs` y `src/styles/global.css`

## 📧 Contacto

- Email: jgallego.dev@gmail.com
- LinkedIn: [linkedin.com/in/jaimegallegor](https://linkedin.com/in/jaimegallegor)
- Ubicación: Medellín, Colombia
