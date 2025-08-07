import {expect, type Locator, type Page} from '@playwright/test'
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators';

export @Fixture('homePage') class HomePage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    @Given('I go to homepage {string}')
    async goToHomePage(url: string){
        await this.page.goto(url);
    }

    @When('I click on Alert Frame Windows')
    async clickOnAlertFrameWindows(){
        await this.page.locator("span").click()
    }
}    