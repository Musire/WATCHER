const DocumentController = require('../../controllers/DocumentController')
const UserController = require('../../controllers/UserController')

const { Router } = require('express');
const router = Router();

router.post('/create/:document', DocumentController.create_document); // creates new database documents
router.put('/edit/:document', DocumentController.edit_document); // edits existing database documents
router.delete('/delete/:document', DocumentController.delete_document); // delete existing database documents
router.post('/fetch/:document', DocumentController.fetch_document); // fetches documents from database 
router.get('/current', UserController.fetch_current); // fetches the current total for user
router.post('/fetch/single/:document', DocumentController.fetch_single_document); // fetches single document that matches id

module.exports = router;