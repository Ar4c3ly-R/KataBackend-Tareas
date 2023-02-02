const express = require('express')
const router = express.Router()
const { getTareas, setTarea, updateTarea, deleteTarea } = require('../controllers/tareaController')


router.route('/').get(getTareas).post(setTarea)
router.route('/:id').delete(deleteTarea).put(updateTarea)

// router.get('/', getTareas)
// router.post('/', setTareas)
// router.put('/:id', updateTareas)
// router.delete('/:id', deleteTareas)



module.exports = router