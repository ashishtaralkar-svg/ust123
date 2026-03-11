import{test,expect} from '@playwright/test'
import{login} from '../POM/login'
const dataset= JSON.parse(JSON.stringify(require("../data/data.json")))

for(const para of dataset)

test(`login${para.username}`, async({page})=>{

    await page.goto("https://google.com")
    //no change
    //new
    

})