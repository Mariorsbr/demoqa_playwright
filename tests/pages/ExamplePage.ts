import {expect, type Locator, type Page} from '@playwright/test'

export class ExamplePage{
    readonly page: Page
    readonly example: Locator

    constructor(page: Page){
        this.page = page
    }

    async goToExamplePage(){
        await this.page.goto('https://playwright.dev')
    }
}    