import { Inject } from 'typescript-ioc';
import { MotusService } from '@service/motus-service';
import express from 'express';

export class MotusController {
  constructor(@Inject public motusService: MotusService) {}

  public async get(req: express.Request, res: express.Response): Promise<void> {
    const word = req.query.word as string;
    if (!word) {
      res.sendStatus(400);
      return;
    }
    const result = await this.motusService.validateWord(
      req.query.word as string
    );
    res.send(result);
  }
}
