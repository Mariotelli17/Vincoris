# Vincoris - Starter con Next.js

Proyecto inicial con **Next.js (App Router)** + **TypeScript** para construir la homepage de Vincoris.

## Requisitos

- Node.js 18.18+ (recomendado: 20+)
- npm 9+

## Cómo arrancar

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Inicia entorno local:

   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: levanta servidor de desarrollo.
- `npm run build`: genera build de producción.
- `npm run start`: sirve build de producción.
- `npm run lint`: ejecuta ESLint.
- `npm run format`: formatea con Prettier.
- `npm run format:check`: valida formato sin modificar archivos.

## Convención de carpetas

```txt
app/                   # Rutas y layout (App Router)
components/
  sections/            # Bloques de homepage (Hero, Problem, Solution, ...)
  ui/                  # Componentes reutilizables (Button, Card, ...)
public/
  images/              # Imágenes y assets estáticos entregados
styles/                # Reservado para estilos globales adicionales
```

## Flujo de despliegue sugerido

1. **Desarrollo local**: trabajar en branch feature (`feat/*`) con commits atómicos.
2. **Calidad**: correr `npm run lint` + `npm run build` antes de abrir PR.
3. **Pull Request**: revisión técnica y aprobación.
4. **Merge a main**: dispara pipeline de CI/CD.
5. **Deploy**: despliegue automático en Vercel (u otro proveedor) desde `main`.
6. **Post-deploy**: smoke test básico en homepage y monitoreo de errores.

## Notas

- Tailwind CSS está configurado y listo para usar.
- ESLint y Prettier están incluidos para asegurar consistencia en estilo y calidad.
