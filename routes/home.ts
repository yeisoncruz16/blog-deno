import { Router, Status } from "../deps.ts";

const router = new Router();

router.get('/', ({response}: {response: any}) => {
    response.status = Status.OK;
    response.type = 'json';
    response.body = {
        message : 'Hello World...'
    };
});

export default router;