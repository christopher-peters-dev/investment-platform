import type { HttpClient } from './HttpClient';
import type { Logger } from '../observability';
import { createToken } from './container';

export const sharedTokens = {
  logger: createToken<Logger>('Logger'),
  httpClient: createToken<HttpClient>('HttpClient'),
};

