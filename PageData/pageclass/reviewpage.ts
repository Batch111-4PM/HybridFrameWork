import {Page} from '@playwright/test'
import revjson from '../pagexpaths/reviewpage.json'
import {WebPage} from '../../CommonData/CommonUI'

export class reviewclass
{
    page : Page
    web : WebPage
    constructor(page : Page)
    {
        this.page = page
        this.web = new WebPage(page)
    }
async clickBack()
{
    await this.web.clickDataFrame(revjson.XFRAME, revjson.XBACK)
}


}