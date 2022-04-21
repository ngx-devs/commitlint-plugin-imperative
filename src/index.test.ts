import test from 'ava';

import * as plugin from './';

test('Should exports a CommonJS module', (executionContext) => {
  executionContext.is(typeof plugin, 'object');
});
