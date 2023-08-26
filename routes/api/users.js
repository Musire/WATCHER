const { Router } = require('express');
const router = Router();
const userController = require('../../controllers/UserController')

router.post('/register_user', userController.register_user);
router.post('/login', userController.login_user);
router.post('/', userController.fetch_current);

module.exports = router;