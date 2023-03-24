{
  "name": "svelte-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "node server.js"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^24.0.0",
    "@rollup/plugin-node-resolve": "^15.0.0",
    "@rollup/plugin-terser": "^0.4.0",
    "rollup": "^3.15.0",
    "rollup-plugin-css-only": "^4.3.0",
    "rollup-plugin-livereload": "^2.0.0",
    "rollup-plugin-svelte": "^7.1.2",
    "svelte": "^3.55.0"
  },
  "dependencies": {
    "express": "^4.18.2",
    "sirv-cli": "^2.0.0"
  },
  "exports": {
    "type": "commonjs",
    "./server.js": "./server.cjs"
  }
}