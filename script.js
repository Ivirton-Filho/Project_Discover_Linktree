function toggleMode() {
    const html = document.documentElement /* selecionando o elemento html */

    if(html.classList.contains('light')) {  /* se o html tiver a classe light, ele vai remover a classe light */
        html.classList.remove('light')
    } else {
        html.classList.add('light') /* se não tiver a classe light, ele vai adicionar a classe light */
    }    

    const img = document.querySelector("#profile img") /* selecionando a tag img */ 
    
    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png") 
    }
}
