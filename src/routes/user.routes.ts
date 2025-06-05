import {Router} from 'express'
import {getAllUsersHandler, createUserHandler} from '@controllers/user.controller'
const router = Router();

router.get('/', getAllUsersHandler);

router.post('/', createUserHandler);

export default router;
