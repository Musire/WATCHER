const { Router } = require('express');
const router = Router();
const accountController = require('../../controllers/AccountController')

router.post('/create_account', accountController.create_account);
router.put('/edit_account', accountController.edit_account);
router.delete('/delete_account', accountController.delete_account);
router.get('/fetch_account', accountController.fetch_account);

module.exports = router;