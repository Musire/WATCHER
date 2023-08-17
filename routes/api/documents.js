const { Router } = require('express');
const router = Router();
const DocumentController = require('../../controllers/DocumentController')
const UserController = require('../../controllers/UserController')

router.post('/create/:document', DocumentController.create_document);
router.put('/edit/:document', DocumentController.edit_document);
router.delete('/delete/:document', DocumentController.delete_document);
router.get('/fetch/:document', DocumentController.fetch_document);
router.get('/current', UserController.fetch_current);

module.exports = router;