import { Builder, Capabilities, By } from "selenium-webdriver"
import { beforeAll, afterAll, test } from '@jest/globals'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('The top left box gets an X', async () => {

    let td = await (await driver).findElement(By.id('cell-0'));
    await td.click();
});

test('Can we click all the boxes?', async () => {

    let td = await (await driver).findElement(By.id('game-board'))
    await td.click()
})

test('find the name of the game', async() => {
    await driver.findElement(By.xpath("//*[contains(text(), 'Tic Tac JS')]"))
});
  


