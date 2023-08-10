const { Router } = require('express');
const router = Router();
const DocumentController = require('../../controllers/DocumentController')

router.post('/create/:document', DocumentController.create_document);
router.put('/edit/:document', DocumentController.edit_document);
router.delete('/delete/:document', DocumentController.delete_document);
router.get('/fetch/:document', DocumentController.fetch_document);

module.exports = router;