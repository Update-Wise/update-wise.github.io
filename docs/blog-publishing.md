# Publicar en el blog: opciones para el equipo

> Documento de investigación (oct 2026). No se implementó nada de lo aquí
> propuesto: es una guía de decisión para elegir cómo facilitará el equipo
> la publicación de entradas. Estado verificado de cada herramienta en 2026.

## 1. Cómo se publica hoy

1. Crear `src/content/<lang>/blog/<año>/<slug>.md` en los 4 idiomas
   (`es` es obligatorio: los demás idiomas usan su entrada, y si falta,
   la ruta cae al `es` automáticamente).
2. Frontmatter mínimo: `title`, `description`, `pubDate: AAAA-MM-DD`
   (cuidado: los valores con `: ` deben ir entre comillas, si no el YAML
   se rompe — hay un test que lo vigila).
3. Abrir PR → `npm run lint && npm run check && npm test` en verde →
   merge a `main` → el hosting estático reconstruye.

Esto funciona bien para perfiles técnicos y queda blindado por los 65
tests (paridad de idiomas, rutas, sitemap, hreflang). Las fricciones para
el resto del equipo están en la sección 2.

## 2. Fricciones actuales para un equipo no técnico

- Hay que clonar el repo, manejar ramas y abrir PRs en GitHub.
- El frontmatter es manual y fácil de romper (YAML, fechas, comillas).
- Hay que duplicar cada post en 4 idiomas a mano, sin saber cuál falta.
- Las imágenes van a `public/images/` con rutas manuales.
- No hay borradores ni programados: todo lo mergeado a `main` se publica.
- No hay vista previa sin correr `astro dev` en local.

## 3. Prerrequisitos (implementar antes, con código)

Independientes de la opción elegida; hoy no existen:

- [ ] **Borradores y programados:** filtrar en `BlogIndex` las entradas con
      `pubDate` futura (y opcionalmente soportar `draft: true`).
- [ ] **Autores:** campo `author` en el schema + render en `BlogPost`.
- [ ] **RSS:** generar `/blog/rss.xml` (Astro tiene `@astrojs/rss`).
- [ ] **Imágenes de portada:** campo `image` + convención de carpeta
      (`public/images/blog/<año>/<slug>/`).
- [ ] **Plantilla de PR** (`.github/PULL_REQUEST_TEMPLATE/blog.md`) con el
      checklist de la sección 6.

## 4. Opciones evaluadas

### A. Scaffolding + plantillas (cero dependencias)

Un script `npm run new:post -- --slug=mi-post --title="..."` que genera los
4 ficheros con el frontmatter válido, más una plantilla de PR con checklist.

- **Pros:** 1–2 horas de trabajo, sin dependencias ni servicios, el flujo
  git/PR/review se mantiene intacto, los tests siguen blindando todo.
- **Contras:** sigue exigiendo git, GitHub y editor de texto. No hay UI.
- **Ideal si:** el equipo que publica es técnico o pequeño.

### B. Front Matter CMS (extensión de VS Code)

CMS gratuito y open source que vive dentro de VS Code: panel con los posts,
formularios para el frontmatter, vista previa y SEO checks. Cero cambios de
código: solo un `.vscode/frontmatter.json` de configuración.
Estado 2026: activo (v10.10.0, abril 2026); el mantenedor avisó que seguirán
las correcciones pero las funciones nuevas irán más lentas.

- **Pros:** sin código, sin servicios, funciona offline, entiende Markdown y
  frontmatter nativos, dashboard para ver qué traducciones faltan.
- **Contras:** exige VS Code (o forks compatibles) y seguir necesitando git
  para publicar. No hay roles ni flujo de aprobación.
- **Ideal si:** el equipo ya usa VS Code y el flujo de PR es aceptable.

### C. Decap CMS (panel `/admin` en la web)

CMS open source (MIT) git-based: añade una ruta `/admin` donde editores
autorizados escriben posts que se commitean al repo como PRs/branches.
Astro tiene guía oficial. Estado 2026: activo (v3.15.0, julio 2026),
mantenimiento independiente en la UE.
Requiere: `public/admin/index.html` + `config.yml` (colecciones `pages` y
`blog`, campos = nuestro schema) y un backend de auth (GitHub OAuth vía
servicio externo o Decap Turbo; hay que evaluarlo con nuestro hosting).

- **Pros:** UI web real para no técnicos, sin cuentas de pago, el contenido
  sigue en git (misma review, mismos tests, mismo deploy).
- **Contras:** 1–3 días de integración (config + auth + adaptar frontmatter
  anidado por idioma, que Decap modela con colecciones por carpeta),
  preview limitada al editor, hay que mantener la config al cambiar schemas.
- **Ideal si:** publican perfiles no técnicos de forma habitual.

### D. TinaCMS (edición visual en contexto)

Los editores clican el texto sobre la página real y lo editan en vivo.
Estado 2026: activo, pero la edición visual con Astro está marcada como
experimental (el first-class es React/Next) y el flujo editorial con
borradores/aprobaciones exige plan de pago (Team Plus). Self-hostear el
backend es infraestructura real.

- **Pros:** la mejor experiencia de edición de la lista.
- **Contras:** integración experimental en Astro, dependencia SaaS o
  backend propio, coste. Excesivo para un blog de 4 idiomas con 1 post.
- **Ideal si:** algún día el sitio entero necesita edición visual por no
  técnicos. Hoy: no.

### E. Headless externo (Sanity, Contentful, Notion API…)

El contenido vive fuera del repo y se consume por API en el build.

- **Pros:** roles, calendario editorial, traducción asistida, media library.
- **Contras:** rompe la simplicidad estática (builds dependientes de API,
  tokens, sincronía), coste y vendor lock-in. Mata el fallback `es`
  automático y los tests de contenido actuales.
- **Ideal si:** el blog escala a decenas de autores y varios posts/semana.
  Hoy: no.

## 5. Comparativa rápida

| Criterio             | A. Script | B. Front Matter | C. Decap     | D. Tina      | E. Headless |
| -------------------- | --------- | --------------- | ------------ | ------------ | ----------- |
| Coste                | 0         | 0               | 0            | Freemium     | $$$         |
| Esfuerzo técnico     | horas     | minutos         | días         | semanas      | semanas     |
| Apto no técnicos     | no        | a medias        | sí           | sí           | sí          |
| Flujo aprobación     | PR        | PR              | PR/editorial | nativo       | nativo      |
| Preview fiel         | dev local | dev local       | parcial      | total        | según plan  |
| i18n 4 idiomas       | manual    | visible         | configurable | configurable | nativo      |
| Riesgo/abandono 2026 | nulo      | bajo            | bajo         | bajo         | vendor      |

## 6. Flujo de traducción sugerido (vale para A, B y C)

1. Se escribe y publica primero en `es` (fuente de verdad + fallback).
2. El dashboard (Front Matter) o una convención de nombres muestra qué
   `en/pt/zh` faltan por post.
3. Borrador con IA + revisión humana obligatoria antes del PR (el tono
   legal y de producto no se traduce en automático sin revisar).
4. El test de paridad de `ui.ts` y los tests de contenido ya exigen que
   cada post exista con `title/description/pubDate` válidos.

## 7. Recomendación por fases

1. **Ahora (esta semana):** opción A — script + plantilla de PR + los
   prerrequisitos de la sección 3 que falten (mínimo: filtro de `pubDate`
   futura + RSS). Coste casi cero y elimina el 80% de los errores de
   formato.
2. **Si publica gente no técnica:** evaluar B si usan VS Code, o C si
   necesitan UI web. Piloto con 2–3 posts antes de comprometeros.
3. **No hacer:** D y E hasta que el volumen o el equipo lo justifiquen.

Preguntas para decidir en equipo: ¿quién va a publicar y con qué
herramientas se siente cómodo? ¿hace falta aprobar borradores antes de
publicar? ¿cuántos posts/mes esperamos el primer año?

## 8. Checklist de publicación (para la futura plantilla de PR)

- [ ] `title` / `description` (≤ 160 caracteres) / `pubDate` válidos
- [ ] Existe en `es`; `en/pt/zh` creados o marcados como pendientes
- [ ] Valores con `: ` entrecomillados en el frontmatter
- [ ] Imágenes en `public/images/blog/<año>/<slug>/` con `alt` descriptivo
- [ ] `npm run lint && npm run check && npm test` en verde
- [ ] Vista previa revisada en los 4 idiomas (`/blog`, `/en/blog`…)
