import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/**/*.feature'],
  require: ['tests/features/steps/*.ts'],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});