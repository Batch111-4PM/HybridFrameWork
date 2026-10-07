import {test , expect} from '@playwright/test'
import { homepageclass } from '../PageData/pageclass/homage'
import { pimpageclass } from '../PageData/pageclass/pimpage'
import { addemployeeclass } from '../PageData/pageclass/addEmployee'
import { reviewclass } from '../PageData/pageclass/reviewpage'

test.describe("Test Scenario on Adding one Employee", async()=>
{
    let hp : homepageclass
    let pp : pimpageclass
    let ae : addemployeeclass
    let rp : reviewclass

    test.beforeEach("Precondition - Add one Employee", async({page})=>
    {
        hp = new homepageclass(page)
        pp = new pimpageclass(page)
        ae = new addemployeeclass(page)
        rp = new reviewclass(page)  
    })

    test("Test Case on Adding One Employee - OrangeHRM", async({page})=>
    {
        test.setTimeout(1000000)
        hp.myApp();
        await page.waitForTimeout(500);
        hp.enterUserName();
        await page.waitForTimeout(500);
        hp.enterPassword();
        await page.waitForTimeout(500);
        hp.clickLogin();
        await page.waitForTimeout(1000);
        pp.pimhover();
        await page.waitForTimeout(500);
        pp.addClick();
        await page.waitForTimeout(2000);
        ae.enterID("774455");
        await page.waitForTimeout(500);
        ae.enterFirst("Kiran");
        await page.waitForTimeout(500);
        ae.enterLast("Movie")
        await page.waitForTimeout(500);
        ae.enterMid("Tickets")
        await page.waitForTimeout(500);
        ae.enterNick("Bujji")
        await page.waitForTimeout(1000);
        ae.empPhoto("./Empphotos/Empphoto1.png");
        await page.waitForTimeout(500);
        ae.clickSave();
        await page.waitForTimeout(3000);
        rp.clickBack();
        await page.waitForTimeout(5000);








    })


})