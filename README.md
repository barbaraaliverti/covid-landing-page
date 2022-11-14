# Covid 19 Landing Page

Covid-19 Landing Page built with vanilla JavaScript and Sass during my training at Wunderman Thompson Technology.

# CONTRIBUTING

Feel free to contribute to this project at any time, but to do that you need to follow some rules to assure that your code follows our development guidelines.

## Requirements

The only requirements to run this project are [Node.js](https://nodejs.org/) and a Text Editor of your choice, for that we recommend [Visual Studio Code](https://code.visualstudio.com/).

## Setup

Visual Studio Code offers a lot of extensions that allow us to define and format the project [code style standard](https://standardjs.com/rules.html), in order to do that we recomend using the following extensions:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

On the top of that, this project ensures code quality and standardisation by using the following tools:

- [EditorConfig](https://editorconfig.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [stylelint](https://stylelint.io/)

## Guidelines

In order to include your contributions to the project in the best possible way, and also have your _PR_ approved, make sure to follow the guideline recommendations:

### Before development

- Make sure your project repository is up to date and have all dependencies installed and compatible with the versions described in the `package.json` file.
- Make sure that `ESLint`, `EditorConfig` and `Prettier` are correctly configured in order to maintain and respect the project [code style standard](https://standardjs.com/rules.html).
- Create a new branch from _develop_ to create your component. Use the prefix `feat/<component-name>` for new components and `fix/<bugfix-short-description>` for bug fixes.

### During development

- Keep your code clean and organized for redability purposes, declare clear and descriptive functions and variable names.
- Follow the design guidelines defined on [Figma](https://www.figma.com/file/vlZD6LJG9cyTiMJ7pnbBY4/CLAPG---COVID-19?node-id=0%3A1) created by our Design Team.
- Review your code removing `logs` and everything that should not be sent to production.

### After development

- Create a `Pull request` for your branch following the _scope-case_ naming convention [examples](https://www.conventionalcommits.org/en/v1.0.0/#summary).
- After at least of from one of the _Mentors_ of the team approval, you can merge your PR into `develop` and test if your component is working properly.

## Running this project

Install dependencies

```
npm install
```

Run dev server - http://localhost:3000

```
npm run dev
```

Build assets for production

```
npm run build
```

