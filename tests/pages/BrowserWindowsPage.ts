import {Page, type Locator} from '@playwright/test'
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators'

export class BrowserWindowsPage{
    readonly page: Page
    readonly browserWindows: Locator
    readonly newTabButton: Locator
    readonly newWindowButton: Locator
    readonly newWindowMessageButton: Locator

    constructor(page: Page){
        this.page = page
        this.browserWindows = page.locator('span.class', {hasText: 'Browser Windows'})
        this.newTabButton = page.locator('#tabButton')
        this.newWindowButton = page.locator('#windowButton')
        this.newWindowMessageButton = page.locator('#messageWindowButton')
    }

    @Given('I click Browser Windows')
    async clickOnBrowserWindos(){
        await this.browserWindows.click()
    }

    @Given('I click New Tab')
    async clickOnNewTabButton(){
        await this.newTabButton.click()
    }

    @Given('I click New Window')
    async clickOnNewWindowButton(){
        await this.newWindowButton.click()
    }

    @Given('I click New Window Message')
    async clickOnNewWindowMessageButton(){
        await this.newWindowMessageButton.click()
    }



}