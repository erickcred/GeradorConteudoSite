$(document).ready(() => {

    $("#assinatura").click(() => {
        $(".btn-venda button").text("Assine agora");
        $(".card-body").html(`<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
        hbspt.forms.create({
            region: "na1",
            portalId: "425682",
            formId: "a6a6fe24-de6f-4234-ab97-9296f3fb25a1"
        });
        </script>`);
    });


    $("#curtaDuracao").click(() => {
        $(".btn-venda button").text("Quero Comprar");
        $(".card-body").html(`<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
        hbspt.forms.create({
            region: "na1",
            portalId: "425682",
            formId: "d34bf01b-e4ba-402d-a0ec-65f2878a8a13"
        });
        </script>`);
    })

    $("#capacitacao").click(() => {
        $(".btn-venda button").text("Quero Comprar");
        $(".card-body").html(`<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script>
        hbspt.forms.create({
            region: "na1",
            portalId: "425682",
            formId: "1f1cda0e-68f7-4a48-a5f8-16656d00c657"
        });
        </script>`);
    });


    $("#cadastrar").click(() => {
        $(".btn-venda button").text($("#nomeBotao").val());
        $(".card-body").html($("#script").val());
    });

    $("#copiarDados").click(() => {
        let $temp = $("<textarea>");
        $("#textBotaoVenda").append($temp);
        $temp.val($("#copiar").html().trim()).select();
        document.execCommand("copy");
        $temp.remove();
    });
});