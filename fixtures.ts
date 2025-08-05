import { test as base } from 'playwright-bdd';
import { ExamplePage } from './tests/pages/ExamplePage';

type Fixtures = {
    examplePage: ExamplePage,
}

export const test = base.extend<Fixtures>({
  examplePage: ({ page }, use) => use(new ExamplePage(page)),
});