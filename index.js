import express from 'express' ;
import testRoute from './Routes/testRoute.js' ;

const App = express() ;

App.listen(5000, () => {
    console.log("Listening") ;
})

App.use("/test", testRoute) ;