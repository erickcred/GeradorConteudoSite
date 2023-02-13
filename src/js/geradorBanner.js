$(document).ready(() => {

    let bannerContent = $(".carousel-inner");
    let linkDirecionamento = $("#linkDirecionamento");
    let linkImagemDesktop = $("#linkImagemDesktop");
    let linkImagemTablet = $("#linkImagemTablet");
    let linkImagemMobile = $("#linkImagemMobile");
    let bannerIndicator = $(".carousel-indicators");

    let banner = "";
    let indicators = "";
    let contador = 0;

    $("#carregadados").click(() => {

        if (banner == "") {
            banner += `
            <div class="carousel-item active" data-interval="4000">
                <a href="${linkDirecionamento.val()}">
                    <picture>
                        <source media="(max-width: 464px)" srcset="${linkImagemMobile.val()}">
                        <source media="(max-width: 1024px)" srcset="${linkImagemTablet.val()}">
                        <source media="(max-width: 1025px)" srcset="${linkImagemDesktop.val()}">
                        <img class="d-block w-100" src="${linkImagemDesktop.val()}">
                    </picture>
                </a>
            </div>
            `;
            indicators += `<li data-slide-to="${contador}" data-target="#banner" class="active"></li>`;
            contador++;
        } else {
            banner += `
            <div class="carousel-item" data-interval="4000">
                <a href="${linkDirecionamento.val()}">
                    <picture>
                        <source media="(max-width: 464px)" srcset="${linkImagemMobile.val()}">
                        <source media="(max-width: 1024px)" srcset="${linkImagemTablet.val()}">
                        <source media="(max-width: 1025px)" srcset="${linkImagemDesktop.val()}">
                        <img class="d-block w-100" src="${linkImagemDesktop.val()}">
                    </picture>
                </a>
            </div>
            `;
            indicators += `<li data-slide-to="${contador}" data-target="#banner" class="active"></li>`;
            contador++;
        }
        $(bannerIndicator).html(indicators);
        $(bannerContent).html(banner);

        linkDirecionamento.val("");
        linkImagemDesktop.val("");
        linkImagemTablet.val("");
        linkImagemMobile.val("");
    });

    $("#copiarDados").click(() => {
        let $temp = $("<textarea>");
        $("#textbanner").append($temp);
        $temp.val($("#copiar").html().trim()).select();
        document.execCommand("copy");
        $temp.remove();
    });
});

