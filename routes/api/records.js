const { Router } = require('express');
const router = Router();
const recordController = require('../../controllers/RecordController')

router.post('/create_record', recordController.create_record);
router.put('/edit_record', recordController.edit_record);
router.delete('/delete_record', recordController.delete_record);
router.get('/fetch_record', recordController.fetch_record);

module.exports = router;