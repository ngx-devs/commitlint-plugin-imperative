import * as plugin from './src';
import { eRules } from './src/enums';

module.exports = {
  rules: {
    [eRules.IMPERATIVE_RULE_EN]: [2, 'always']
  },
  plugins: [
    {
      rules: plugin.rules
    }
  ]
};
