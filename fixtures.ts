import { test as base } from 'playwright-bdd';
import { ExamplePage } from './tests/pages/ExamplePage';
import { HomePage } from './tests/pages/HomePage';

type Fixtures = {
    examplePage: ExamplePage,
    homePage: HomePage,
}

export const test = base.extend<Fixtures>({
  examplePage: ({ page }, use) => use(new ExamplePage(page)),
  homePage: ({page}, use) => use(new HomePage(page)),
});