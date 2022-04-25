import express from 'express';
import { Container } from 'typescript-ioc';
import { MotusController } from './motus-controller';

const urlPath = '/motus';

const router = express.Router();

const motusController = Container.get(MotusController);

router.get(urlPath, (req, res) => {
  motusController.get(req, res);
});

export { router as motusRouter };
