import{test,expect} from '@playwright/test'
import{login} from '../POM/login'
const dataset= JSON.parse(JSON.stringify(require("../data/data.json")))

for(const para of dataset)

test(`login${para.username}`, async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.pause();
    const Login= new login(page)
    test.slow() //new //1//ashish //1990//1990add
    await Login.navigation(para.username,para.password)
    
    

})