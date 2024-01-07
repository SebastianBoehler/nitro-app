import { e as eventHandler } from './nitro/vercel.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';

const index = eventHandler((event) => {
  const { data } = event.context.params;
  return { nitro: `${data} is awesome` };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
