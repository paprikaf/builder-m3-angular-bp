# Builder Angular M3 Boilerplate

A boilerplate for Angular gen2 sdk Builder projects using Material UI M3 for components, design systems, and theming.

---

## Features
- **Angular Framework**: Built using the latest Angular version.
- **Builder.io Integration**: Seamlessly integrates with Builder.io for visual editing.
- **Material UI M3**: Utilizes Material UI M3 components for design consistency.
- **Theming**: Fully customizable theming with Material's design tokens.
- **Figma Mapping**: Mapped Figma designs to Angular components for a seamless design-to-code workflow. [Figma Mappings Demo File](https://www.figma.com/design/4HuB7YOzgudMte14fCcuwK/Untitled?node-id=0-1&t=Pae2HLXHsUKIqKHI-1)

---

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)

---

## Getting Started
Follow these steps to run the app locally:

### 1. Clone the repository
```bash
git clone https://github.com/<username>/builder-m3-angular-bp.git
cd builder-m3-angular-bp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Builder Dev Tools
Install Builder dev tools following the prompts and examples here: https://www.builder.io/c/docs/devtools
```bash
npm init builder.io@latest
```

### 4. Start the development server with  Devltools
```bash
npm run builder-dev
```
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

---

## Development server
Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files. Running `npm run builder-dev` will also ensure builder devtools is running

## Mapped Components
The following components have been mapped from Figma to Angular using Builder.io:

### TextHero Component
- A flexible text hero component with support for a title and optional subtitle
- Mapped to the Figma design: TextHero in Figma

### IconCard Component  
- A feature card with an icon, title, and description
- Mapped to the Figma design: IconCard in Figma

*For more details on the Figma mappings, check the src/mappings directory.*

To test Compoment mapping yourself, you can go to this figma design: 
[Figma Mappings Demo File](https://www.figma.com/design/4HuB7YOzgudMte14fCcuwK/Untitled?node-id=0-1&t=Pae2HLXHsUKIqKHI-1)

You can then use the Builder Plugin to log into your Builder space and map components following our docs here: https://www.builder.io/c/docs/cli-mapping


## Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding
Run the following command to generate a new component:
```bash
ng generate component component-name
```