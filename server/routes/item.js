import express from 'express';

import { createItem, getItems, updateItem, checkExpiration, deleteItem } from '../controllers/item.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createItem);
router.get('/', auth, getItems);
router.patch('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);
router.get('/checkexp', auth, checkExpiration);

export default router;