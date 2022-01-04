import dynamic from 'next/dynamic.js';

export const Timeline = dynamic(
  () => import('./Timeline.client.js').then(module => module.Timeline),
  { ssr: false }
);
