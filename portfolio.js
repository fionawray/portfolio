window.addEventListener("load", sidenVises);

function sidenVises() {

    document.querySelector("#menu").classList.add("forsvind");
    document.querySelector("#forside").classList.remove("forsvind");
    //Show forside
    //Hide menu
    console.log("sidenVises");

    // Queryselector på burger menu
    // Kalder function show menu
    document.querySelector("#burger").addEventListener("click", showMenu);
}

function showMenu() {
    console.log("yo");
    document.querySelector("#forside").classList.add("forsvind");
    document.querySelector("#menu").classList.remove("forsvind");
    //Hide forside
    //Show menu

    document.querySelector("#kryds").addEventListener("click", sidenVises);
    // Queryselector på burgermenu/kryds til at komme tilbage til forside
}
