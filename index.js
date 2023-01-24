import express from 'express' ;
import testRoute from './Routes/testRoute.js' ;
import schoolRoute from './Routes/school/schoolRoute.js' ;
import bodyParser from 'body-parser';

const App = express() ;
App.use(bodyParser.json({ limit: "30mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

App.listen(5000, () => {
    console.log("Listening") ;
})

App.use("/test", testRoute) ;
App.use("/school", schoolRoute) ;