import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/**/*.feature'],
  steps: [
    './fixtures.ts',
    'tests/pages/*.ts'
  ],
});

export default defineConfig({
  testDir,
  reporter: 'html',
});