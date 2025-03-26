//SIEMPRE AÑADIR ESTO PARA QUE PILLE LAS PALABRAS CLAVE DE PLAYWRIGHT COMO TEST
const {test, expect} = require('@playwright/test');

//AÑADIR ASYNC PARA QUE PILLE LOS AWAIT
//PASAMOS EL NAVEGADOR LLAMANDOLO CON PLAYWRIGHT Y CREAMS EL CONTEXTO Y LA NUEVA PAGINA Y VAMOS A LA URL
/*test('Browser context test playwrihgt',async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://www.google.com/?hl=es");
}
)*/

//AÑADIR ASYNC PARA QUE PILLE LOS AWAIT
//PASAMOS EL NAVEGADOR LLAMANDOLO CON PLAYWRIGHT PERO TAMBIEN LE PASAMOS DIRECTAMENTE LA NUEVA PAGINA Y SOLO TENEMOS QUE IR A LA URL
test('Page test playwrihgt',async ({page})=>
   {
      await page.goto("https://www.youtube.com/");
      //get title
      const title = await page.title();
      console.log(title);
      //verificar titulo de la pagina
      await expect(page).toHaveTitle(title);
      await page.locator("[aria-label*='Accept']").click();
      //css,xpath
      await page.locator("input[class*='ytSearchboxComponentInput']").fill("Ibai");
      await page.locator("button[class*='ytSearchboxComponentSearchButton']").click();
      //console.log(await page.locator("yt-formatted-string[aria-label*='Nueva etapa']").textContent());
      
   }
   )
