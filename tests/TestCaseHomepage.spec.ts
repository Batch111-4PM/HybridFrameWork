import {test , expect} from '@playwright/test'
import {homepageclass}   from '../PageData/pageclass/homage'

test.describe("Test Scenario on Home Page", async()=>
{
   let hp : homepageclass;
    test.beforeEach("Open the Browser", async({page})=>
    {
        hp = new homepageclass(page);
        hp.myApp();
    })

    test("Test Case1 - Launch Orange HRM APplication", async({page})=>
    {
       // hp.myApp();
        await page.waitForTimeout(4000);
    })
    
    test("Test Case2 - Check the OrangeHRM Logo", async({page})=>
    {
       // hp.myApp();
        await page.waitForTimeout(1000);
        hp.Hlogo();
        await page.waitForTimeout(4000);
    })
     
    test("Test Case3 - Check the Employee Logo", async({page})=>
    {
      //  hp.myApp();
        await page.waitForTimeout(1000);
        hp.Elogo();
        await page.waitForTimeout(4000);
    })

    test("Test Case4 - Check the text from Home Page", async({page})=>
    {
      //  hp.myApp();
        await page.waitForTimeout(1000);
        hp.Hometext();
        await page.waitForTimeout(4000);
    })
})