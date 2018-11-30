// Desahabilitar clic en la pagina completa
$("body").on("contextmenu",function(e){
    return false;
});

// Desahabilitar clic en una parte de la pagina
$(".ctn-p img").on("contextmenu",function(e){
    return false;
});
