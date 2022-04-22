import { Plugin, Rule } from '@commitlint/types';

import { eImperativeRuleErrorMessage } from './enums';

const ptBrRule: Rule = (commit, _, __) => {
  const PAST_TENSE_PATTERN = /((\w)*(ado)|(ido))/;
  const GERUND_PATTERN = /(\w*ndo)/;

  const { header } = commit;

  const isInPastTense = PAST_TENSE_PATTERN.test(header);
  if (isInPastTense) return [false, eImperativeRuleErrorMessage.PAST_TENSE];

  const isInGerund = GERUND_PATTERN.test(header);
  if (isInGerund) return [false, eImperativeRuleErrorMessage.GERUND];

  return [true];
};

const englishRule: Rule = (commit, _, __) => {
  const englishGerundExceptions = ['something', 'anything', 'everything', 'nothing'];
  const englishGerundExceptionsPattern = new RegExp(`${englishGerundExceptions.join('|')}`);

  const PAST_TENSE_PATTERN = /(.+ed)/;
  const GERUND_PATTERN = /((\w)*(ing))/;

  const { header } = commit;
  const cleanedHeader = header.replace(englishGerundExceptionsPattern, '');

  const isInPastTense = PAST_TENSE_PATTERN.test(cleanedHeader);
  if (isInPastTense) return [false, eImperativeRuleErrorMessage.PAST_TENSE];

  const isInGerund = GERUND_PATTERN.test(cleanedHeader);
  if (isInGerund) return [false, eImperativeRuleErrorMessage.GERUND];

  return [true];
};

const rules: Plugin['rules'] = {
  'imperative-rule/pt-br': ptBrRule,
  'imperative-rule/en': englishRule
};

export = rules;
