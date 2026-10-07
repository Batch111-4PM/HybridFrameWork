import {Page} from '@playwright/test'
import addempjson from '../pagexpaths/addEmployee.json'
import {WebPage} from '../../CommonData/CommonUI'

export class addemployeeclass
{
    page : Page
    web : WebPage
    constructor(page : Page)
    {
        this.page = page
        this.web = new WebPage(page)
    }

    async addEmpLogo()
    {
        await this.web.checkLocator(addempjson.XADDIMAGE)
    }

    async enterID(text: string)
    {
        await this.web.enterDataFrame(addempjson.XFRAME, addempjson.XID, text);
    }

    async enterFirst(text: string)
    {
        await this.web.enterDataFrame(addempjson.XFRAME, addempjson.XFIRST, text);
    }

    async enterLast(text: string)
    {
        await this.web.enterDataFrame(addempjson.XFRAME, addempjson.XLAST, text);
    }

    async enterMid(text: string)
    {
        await this.web.enterDataFrame(addempjson.XFRAME, addempjson.XMID, text);
    }

    async enterNick(text: string)
    {
        await this.web.enterDataFrame(addempjson.XFRAME, addempjson.XNICK, text);
    }

    async empPhoto(text : string)
    {
        await this.web.upLoadFrame(addempjson.XFRAME, addempjson.XPHOTO, text)
    }

    async clickSave()
    {
        await this.web.clickDataFrame(addempjson.XFRAME, addempjson.XSAVE)
    }

}
