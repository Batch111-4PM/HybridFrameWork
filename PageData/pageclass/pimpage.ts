import {WebPage} from '../../CommonData/CommonUI'
import {Page} from '@playwright/test'
import pimjson from '../pagexpaths/pimpage.json'


export class pimpageclass
{
    page : Page;
    web : WebPage;

    constructor(page : Page)
    {
        this.page = page
        this.web = new WebPage(page)
    }

    async PIMlogo()
    {
        await this.web.checkLocator(pimjson.PIMLOGO)
    }

    async pimhover()
    {
        await this.web.elementHover(pimjson.XPIM)
    }

    async addClick()
    {
        await this.web.clickData(pimjson.XADD)
    }
}