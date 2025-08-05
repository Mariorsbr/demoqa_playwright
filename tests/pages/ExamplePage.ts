import {expect, type Locator, type Page} from '@playwright/test'
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators';

export @Fixture('examplePage') class ExamplePage{
    readonly page: Page
    readonly example: Locator

    constructor(page: Page){
        this.page = page
    }

    @Given('I open url {string}')
    async goToExamplePage(url: string){
        await this.page.goto(url);
    }

    @When('I click on the link {string}')
    async clickOnLink(name: string){
        await this.page.getByRole('link', { name }).click();
    }

    @Then('I see in title {string}')
    async checkTitle(keyword: string){
        await expect(this.page).toHaveTitle(new RegExp(keyword));
    }
}    