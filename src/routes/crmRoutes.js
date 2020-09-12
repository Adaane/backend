const routes = (app) => {
    app.route('/contact')
    .get((req, res) => (
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