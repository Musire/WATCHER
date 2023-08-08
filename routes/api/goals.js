const { Router } = require('express');
const router = Router();
const goalController = require('../../controllers/GoalController')

router.post('/create_goal', goalController.create_goal);
router.put('/edit_goal', goalController.edit_goal);
router.delete('/delete_goal', goalController.delete_goal);
router.get('/fetch_goal', goalController.fetch_goal);

module.exports = router;