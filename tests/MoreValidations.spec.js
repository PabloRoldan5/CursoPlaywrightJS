const {test,expect} = require("@playwright/test");

test("Popup validations",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomaticPractice");
    await page.goto("http://google.com");
    //VOLVER ATRAS EN WEB
    //await page.goBack();
    //VOLVER HACIA DELANTE EN WEB
    //await page.goForward();

})