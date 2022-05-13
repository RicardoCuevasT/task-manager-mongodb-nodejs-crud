import express from "express";
//import exphbs from "express-handlebars";
import { create } from "express-handlebars";
import indexRoutes from './routes/index.routes.js';
import path from "path";
import morgan from "morgan";

const app = express();


app.set("views", path.join(__dirname, "views")); //se define donde está la carpeta views

/*app.engine(".hbs", exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");*/

const exphbs = create({ //se está configurando un motor de plantillas (handlebars con extensión .hbs)
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),//dentro de la carpeta views hay una llamada layouts que contiene las plantillas que tienen en común todas las páginas
  partialsDir: path.join(app.get("views"), "partials"), //dentro de partials hay porciones de código html que se pueden importar en los layouts, como componentes
  defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs"); //se configura que se va a utilizar handlebars

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

//Routes
app.use(indexRoutes); //Le indicamos que utilice las rutas de nuestro archivo index.routes

app.use(express.static(path.join(__dirname, "public")));

export default app;