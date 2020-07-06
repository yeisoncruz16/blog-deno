import { Router } from "../deps.ts";
import { index, store, remove, update } from '../controllers/posts.ts';

const router = new Router();

router.get('/posts', index);
router.post('/posts', store);
router.delete('/posts/:id', remove);
router.patch('/posts/:id', update);

export default router;