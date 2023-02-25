$(document).ready(function(){
    $("header button").on("click", function() {
        $("form").slideDown()
    })

    $("#botao-cancel").click(function(){
        $("form").slideUp()
    })

    $("form").on("submit", function(e){
        e.preventDefault()
        const urlImagem = $("#imagem-nova").val()
        const novoItem = $("<li style='display: none'></li>")
        $(`<img src="${urlImagem}" />`).appendTo(novoItem)
        $(`
            <div class="image-link">
                <a href="${urlImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(2000)
        $("#imagem-nova").val("")
    })
})