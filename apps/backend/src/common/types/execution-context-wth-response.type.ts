import { ExecutionContext } from '@nestjs/common';
import { Response } from 'express';

export type ExecutionContextWithResponse = ExecutionContext & {
  res: Response;
};
