import { 
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmControllers'

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next ) => {
        //middleware
        /**Un middleware est simplement une fonction qui se situe entre la requette (req) et la reponse (res) */

        console.log(`Request de ${req.orginalUrl}` )
        console.log(`Request type ${req.method}` )
        next();
    }, getContacts)
    .post(addNewContact)

    app.route('/contact/:contactId')
    .get(getContactWithID)
    .put(updateContact)
    .delete(deleteContact)
}

export default routes;