import { test as base } from 'playwright-bdd';
import { HomePage } from './tests/pages/HomePage';

type Fixtures = {
    homePage: HomePage,
}

export const test = base.extend<Fixtures>({
  homePage: ({page}, use) => use(new HomePage(page)),
});