const puppeteer = require('puppeteer');

console.log('Vamos nessa!');

(async () => {
    //abre o navegador - para ver o processo acontecer manter o headless como false
    const browser = await puppeteer.launch();
    
    //abre uma nova página
    const page = await browser.newPage();
    
    //abre a página indicada
    await page
    .goto('https://images.unsplash.com/photo-1597120053229-6c14cc2a6d1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80');

    //tira print da tela e salva na pasta do projeto
    await page.screenshot({ path: 'imagem.png' });

    // fecha o browser
    await browser.close();
})();