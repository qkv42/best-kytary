import { HttpException, HttpStatus } from '@nestjs/common';

export const throwNotFoundError = (message: string) => {
  throw new HttpException(message, HttpStatus.NOT_FOUND);
};
