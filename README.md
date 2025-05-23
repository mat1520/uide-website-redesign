# Rediseño del Sitio Web UIDE

Este proyecto es un rediseño moderno del sitio web oficial de la Universidad Internacional del Ecuador (UIDE), implementado con las últimas tecnologías web y siguiendo las mejores prácticas de diseño y desarrollo.

## Características Principales

- 🎨 Diseño moderno y responsive
- ⚡ Rendimiento optimizado
- 🔍 SEO mejorado
- 🤖 Chatbot con IA para asistencia estudiantil
- 📱 Adaptable a todos los dispositivos
- ♿ Accesibilidad WCAG 2.2
- 🌐 Internacionalización
- 🔒 Seguridad mejorada

## Tecnologías Utilizadas

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animaciones)
  - React Query (gestión de estado)

- **Backend:**
  - Node.js
  - Express
  - Prisma (ORM)
  - PostgreSQL

- **CMS:**
  - Strapi (headless CMS)

- **Herramientas de Desarrollo:**
  - ESLint
  - Prettier
  - Jest
  - React Testing Library
  - GitHub Actions (CI/CD)

## Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior
- PostgreSQL 14.x o superior

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/uide/website-redesign.git
   cd website-redesign
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   ```bash
   cp .env.example .env.local
   ```
   Editar `.env.local` con las configuraciones necesarias.

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```
src/
├── app/                 # Rutas y páginas (App Router)
├── components/          # Componentes reutilizables
├── lib/                 # Utilidades y configuraciones
├── styles/             # Estilos globales
└── types/              # Definiciones de TypeScript
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia la aplicación en modo producción
- `npm run lint` - Ejecuta el linter
- `npm run test` - Ejecuta las pruebas
- `npm run format` - Formatea el código

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Universidad Internacional del Ecuador
- Email: info@uide.edu.ec
- Teléfono: +593 2 398-9400
- Dirección: Av. Simón Bolívar S/N, Quito, Ecuador
