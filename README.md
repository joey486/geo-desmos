# geo-desmos

**geo-desmos** is a simple 2D math graph visualizer built with [Vue 3](https://vuejs.org/) and [Vite](https://vite.dev/).  
It allows you to enter mathematical functions (like `sin(x)` or `x^2`) and instantly see their graphs.

## Features

- Live 2D plotting of functions (e.g., `sin(x)`, `x^2 + 2*x`, etc.)
- Modern, responsive UI
- Easy to customize and extend

## Recommended IDE Setup

- [Visual Studio Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - (Disable Vetur if it’s enabled)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Usage

1. Start the dev server (`npm run dev`).
2. Open the app in your browser (usually at [http://localhost:5173/](http://localhost:5173/)).
3. Enter a function for `y = ...` (examples: `sin(x)`, `x^3 - x`, `sqrt(abs(x))`).
4. Click **Plot** to see the graph.

## Folder Structure

```
src/
  components/
    GraphForm.vue
    GraphCanvas.vue
    MathGraph.vue
    GraphVisualizer.css
    graphHelper.js
  App.vue
  main.js
```

## Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/).

---

**Contributions welcome!** Feel free to fork and improve.
