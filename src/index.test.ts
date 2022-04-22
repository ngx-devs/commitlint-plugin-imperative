import test from 'ava';

import * as plugin from './';
import { eRules } from './enums';

const importLintPackage = async () => {
  return (await import(`@commitlint/lint`)).default;
};

test('Should exports a CommonJS module', (executionContext) => {
  console.log(plugin);
  executionContext.is(typeof plugin, 'object');
});

test('Should load @commitlint/load with custom plugin successfully', async (executionContext) => {
  const load = require('@commitlint/load').default;
  executionContext.true(load !== undefined);

  await executionContext.notThrowsAsync(load({ plugins: [plugin] }));
});

test(`Should give an error for ${eRules.IMPERATIVE_RULE_PT_BR} when using gerund in commit header`, async (executionContext) => {
  const lint = await importLintPackage();
  executionContext.truthy(lint);

  const commitMessage = 'chore: utilizando gerúndio';
  const imperativePlugin = { plugins: { 'imperative-rule': plugin } };

  const report = await lint(commitMessage, { [eRules.IMPERATIVE_RULE_PT_BR]: [2, 'always'] }, imperativePlugin);

  executionContext.is(report.warnings.length, 0);
  executionContext.is(report.errors.length, 1);
  executionContext.is(report.errors[0].name, eRules.IMPERATIVE_RULE_PT_BR);
});

test(`Should give an error for ${eRules.IMPERATIVE_RULE_PT_BR} when using past tense in commit header`, async (executionContext) => {
  const lint = await importLintPackage();
  executionContext.truthy(lint);

  const commitMessage = 'chore: utilizando passado';
  const imperativePlugin = { plugins: { 'imperative-rule': plugin } };

  const report = await lint(commitMessage, { [eRules.IMPERATIVE_RULE_PT_BR]: [2, 'always'] }, imperativePlugin);

  executionContext.is(report.warnings.length, 0);
  executionContext.is(report.errors.length, 1);
  executionContext.is(report.errors[0].name, eRules.IMPERATIVE_RULE_PT_BR);
});

test.only(`Should give an error for ${eRules.IMPERATIVE_RULE_EN} when using gerund in commit header`, async (executionContext) => {
  const lint = await importLintPackage();
  executionContext.truthy(lint);

  const commitMessage = 'chore: using gerund';
  const imperativePlugin = { plugins: { 'imperative-rule': plugin } };

  const report = await lint(commitMessage, { [eRules.IMPERATIVE_RULE_EN]: [2, 'always'] }, imperativePlugin);

  executionContext.is(report.warnings.length, 0);
  executionContext.is(report.errors.length, 1);
  executionContext.is(report.errors[0].name, eRules.IMPERATIVE_RULE_EN);
});

test(`Should give an error for ${eRules.IMPERATIVE_RULE_EN} when using past tense in commit header`, async (executionContext) => {
  const lint = await importLintPackage();
  executionContext.truthy(lint);

  const commitMessage = 'chore: using past tense';
  const imperativePlugin = { plugins: { 'imperative-rule': plugin } };

  const report = await lint(commitMessage, { [eRules.IMPERATIVE_RULE_EN]: [2, 'always'] }, imperativePlugin);

  executionContext.is(report.warnings.length, 0);
  executionContext.is(report.errors.length, 1);
  executionContext.is(report.errors[0].name, eRules.IMPERATIVE_RULE_EN);
});
