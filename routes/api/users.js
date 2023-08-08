const { Router } = require('express');
const router = Router();
const userController = require('../../controllers/UserController')

router.post('/register', userController.register_user);
router.post('/login', userController.login_user);
router.get('/', userController.fetch_user);

module.exports = router;