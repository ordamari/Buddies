import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { REQUEST_USER_KEY } from '../iam.constants';
import { ActiveUserData } from '../interfaces/active-user-data.interface';

export const ActiveUser = createParamDecorator(
  (
    specificField: keyof ActiveUserData | undefined,
    context: ExecutionContext,
  ) => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;
    const user: ActiveUserData = request[REQUEST_USER_KEY];
    return specificField ? user[specificField] : user;
  },
);
