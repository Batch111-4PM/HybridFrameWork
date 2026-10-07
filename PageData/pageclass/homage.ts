import {Page} from '@playwright/test'
import {WebPage} from '../../CommonData/CommonUI'
import configdata from '../../MyConfig/Config.json'
import hpage from '../pagexpaths/homepage.json'

export class homepageclass
{
    page : Page;
    web : WebPage;
    constructor(page : Page)
    {
        this.page = page;
        this.web = new WebPage(page); //created object reference for WebPage
    }

    async myApp()
    {
        await this.web.launchMyApp(configdata.url, configdata.htitle)
    }

    async Hlogo()
    {
        await this.web.checkLocator(hpage.HomeLogo)
    }
    async Elogo()
    {
        await this.web.checkLocator(hpage.EmpLogo)
    }
    async Hometext()
    {
        await this.web.getText(hpage.Htext)
    }

    async enterUserName()
    {
        await this.web.enterData(hpage.XUN, configdata.username)
    }

    async enterPassword()
    {
        await this.web.enterData(hpage.XPWD, configdata.pasword)
    }
    async clickLogin()
    {
        await this.web.clickData(hpage.XSUB)
    }
}