import {test , expect} from '@playwright/test'
import { homepageclass } from '../PageData/pageclass/homage'
import { pimpageclass } from '../PageData/pageclass/pimpage'
import { addemployeeclass } from '../PageData/pageclass/addEmployee'
import { reviewclass } from '../PageData/pageclass/reviewpage'
import myexcel from 'xlsx'

test.describe("Test Scenario on Adding Multiple Employees", async()=>
{
    let hp : homepageclass
    let pp : pimpageclass
    let ae : addemployeeclass
    let rp : reviewclass

    function excelInfo(fpath : string, sname : string)
    {
        const WB = myexcel.readFile(fpath)
        const WS : any = WB.Sheets[sname];
        return myexcel.utils.sheet_to_json(WS, {header : 1})
    }

    test.beforeEach("Precondition - Add Multiple Employee", async({page})=>
    {
        hp = new homepageclass(page)
        pp = new pimpageclass(page)
        ae = new addemployeeclass(page)
        rp = new reviewclass(page)  
    })

    test("Test Case on Adding Multiple Employees - OrangeHRM", async({page})=>
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
        const empdata : any = excelInfo('./EmpExcel/EmpData.xlsx', 'EmpAdd')
        await page.waitForTimeout(2000);
        ae.enterID(empdata[1][0].toString());
        await page.waitForTimeout(500);
        ae.enterFirst(empdata[1][1]);
        await page.waitForTimeout(500);
        ae.enterLast(empdata[1][2])
        await page.waitForTimeout(500);
        ae.enterMid(empdata[1][3])
        await page.waitForTimeout(500);
        ae.enterNick(empdata[1][4])
        await page.waitForTimeout(1000);
        ae.empPhoto("./Empphotos/Empphoto1.png");
        await page.waitForTimeout(500);
        ae.clickSave();
        await page.waitForTimeout(3000);
        rp.clickBack();
        await page.waitForTimeout(5000);








    })


})