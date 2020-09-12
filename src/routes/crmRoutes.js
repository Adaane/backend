const routes = (app) => {
    app.route('/contact')
    .get((req, res, next ) => {
        //middleware
        /**Un middleware est simplement une fonction qui se situe entre la requette (req) et la reponse (res) */

        console.log(`Request de ${req.orginalUrl}` )
        console.log(`Request type ${req.method}` )
        next();
    }, (req, res, next ) => (
        res.send('demande GET avec succès')
    ))
    
    .post((req, res) => (
        res.send('demande POST avec succès')
    ))

    app.route('/contact/:contactID')
    .put((req, res) => (
        res.send('demande PUT avec succès')
    ))
    .delete((req, res) => (
        res.send('demande DELETE avec succès')
    ))
}

export default routes;