import { createUriAndTermNamespace } from '@solid/community-server';

export const HTTP = createUriAndTermNamespace('urn:npm:solid:community-server:http:',
    'cache_control',
);

export * from './Fetcher';
export * from './LDESStore';