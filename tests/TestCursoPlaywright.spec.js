const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Login y obtner texto',async ({page})=>
    {
      //VAMOS A LA PAGINA
       await page.goto("https://rahulshettyacademy.com/client");
      //CREAMOS Y COGEMOS LOS DISTINTOS ELEMENTOS QUE VAMOS A USAR
       const email = await page.locator("#userEmail");
       const password = await page.locator("#userPassword");
       const btnLogin = await page.locator("#login");
       
       //REALIZAMOS LA OPERACIONES NECESARIAS
       await email.fill("svrold4n5@gmail.com");
       await password.fill("Aa12345678@");
       await btnLogin.click();

       //ESPERAMOS QUE LA RED ESTE INACTIVA PARA QUE TODO HAYA CARGADO
       //ESTO ES ESPERAR A QUE YA NO SE ESTE REALIZANDO NINGUNA PETICION
       await page.waitForLoadState('networkidle');
      //METODO DE ESPERA DISTINTO POR SI NO FUNCIONARA
      //SOLO FUNCIONA SI DEVUELVE UN SOLO ELEMENTO POR ESO AÑADIMOS EL FIRTS PARA ESPERA SOLO AL PRIMER ELEMENTO DEL ARRAY
      await page.locator(".card-body b").first().waitFor();
       //COGEMOS TODOS LOS ELEMENTOS - ESTO DEVUELVO UN ARRAY CON LOS TEXTOS DE LOS ELEMENTOS Y LOS MOSTRAMOS POR CONSOLA
       const titles = await page.locator(".card-body b").allTextContents();
       
       console.log(titles);

       const products = await page.locator(".card-body");
       const numberProducts = await products.count();
       const productName = 'IPHONE 13 PRO';
       for(let i = 0; i < numberProducts; i++)
        {
         if(await products.nth(i).locator("b").textContent() === productName){
          await products.nth(i).locator("text= Add To Cart").click();
          break;
          }
        }
        
        
        await page.locator("[routerlink*='cart']").click();
        await page.locator("div li").first().waitFor();
        const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
       expect(bool).toBeTruthy();
       await page.locator("text=Checkout").click();
       await page.locator("[placeholder*='Country']").pressSequentially("spa")
       const dropdown = page.locator(".ta-results");
       await dropdown.waitFor();
       const opstionsCount = await dropdown.locator("button").count();
       for(let i=0; i < opstionsCount; i++){
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text.trim()==="Spain"){
          await dropdown.locator("button").nth(i).click();
          break;
        }
       }

       await expect(page.locator(".user__name [type='text']").first()).toHaveText("svrold4n5@gmail.com");
       await page.locator(".action__submit").click();
       await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
       const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
       console.log(orderId);

       await page.locator("button[routerlink*='myorders']").click();
       await page.locator("th[scope='row']").first().waitFor();
       const id = await page.locator("th[scope='row']");
       for(let i = 0; i < await id.count();++i){
        const rowOrderId = await id.nth(i).textContent();
        if(orderId.includes(rowOrderId)){
          await page.locator("button[class='btn btn-primary']").nth(i).click();
          console.log(orderId+"----- "+ rowOrderId)
          break;
        }
       }
       const orderIdDetails = await page.locator(".col-text").textContent();
       expect(orderId.includes(orderIdDetails)).toBeTruthy();
    }
    )
 