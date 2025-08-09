import {expect, type Locator, type Page} from '@playwright/test'
import { Fixture, Given, When, Then } from 'playwright-bdd/decorators';

export @Fixture('homePage') class HomePage{
    readonly page: Page
    readonly elementsHeader: Locator
    readonly formsHeader: Locator
    readonly alertFramesWindowsHeader: Locator
    readonly widgetsHeader: Locator
    readonly interactionsHeader: Locator
    readonly bookStoreApplicationHeader: Locator

    constructor(page: Page){
        this.page = page       
        this.elementsHeader = this.page.locator("h5",{hasText: "Elements"})
        this.formsHeader = this.page.locator("h5",{hasText: "Forms"})
        this.alertFramesWindowsHeader = this.page.locator("h5",{hasText: "Alerts, Frame & Windows"})
        this.widgetsHeader = this.page.locator("h5",{hasText: "Widgets"})
        this.interactionsHeader = this.page.locator("h5",{hasText: "Interactions"})
        this.bookStoreApplicationHeader = this.page.locator("h5",{hasText: "Book Store Application"})
    }

    @Given('I go to homepage {string}')
    async goToHomePage(url: string){
        await this.page.route('**/*', (route) => {
            url = route.request().url();
            if (url.includes('ads') || url.includes('doubleclick') || url.includes('googlesyndication')) {
                route.abort();
            } else {
                route.continue();
            }
        });

        await this.page.goto(url);
    }

    @When('I click on Elements Header')
    async clickOnElementsHeader(){
        await this.elementsHeader.click()
    }

    @When('I click on Forms Header')
    async clickOnFormsHeader(){
        await this.formsHeader.click()
    }

    @When('I click on Alert Frame Windows')
    async clickOnAlertFrameWindows(){
        await this.alertFramesWindowsHeader.click()
    }

    @When('I click on Widgets Header')
    async clickOnWidgetsHeader(){
        await this.widgetsHeader.click()
    }

    @When('I click on Interactions Header')
    async clickOnInteractionsHeader(){
        await this.interactionsHeader.click()
    }

    @When('I click on Elements')
    async clickOnBookStoreApplicationHeader(){
        await this.bookStoreApplicationHeader.click()
    }
}    