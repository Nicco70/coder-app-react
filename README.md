# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Instrucciones para inicializar el proyecto

- Configurar variables de entorno: Al utilizar create-react-app para el proyecto, las variables de entorno deben comenzar con REACT_APP. Ejemplo: REACT_APP_MI_VARIABLE_DE_ENTORNO. Estas se encuentran en el archivo .env, ubicado en la raiz del proyeto.
- Formatos para crear o modificar productos de la App en la base de datos "Firebase": 
2 Colecciones: 
categorys; documento con su nombre de cartegoria y campo con su descripcion. 
products; documento con el id del produto y el campo con el nombre de categoria, descripcion, img, name, price, stock.
- Rutas de la aplicacion: 
Se renderiza el NavBar en todas la rutas.
"/": Inicio del comercio; Renderiza el ItemListContainer con todos los productos. Muestra minimo detalle con los parametros asignados(name, img).
"/category/:categoryId": Filtra por categorias de los productos. Renderiza ItemListContainer.
"/detail/:itemId": Muestra el detalle del producto selecccionado con sus parametros asignados (name, price, stock, etc). Renderiza ItemDetailContainer.
"/cart": Muestra los productos ingresados en el carrito junto con los botones y sus funiones("borrar producto", "limpiar carrito", "finalizar compra") y con el formulario de contacto con el boton para que se muestre. Renderiza el Cart.
- [Gif de como funciona la App](./gif-proyecto.gif)



