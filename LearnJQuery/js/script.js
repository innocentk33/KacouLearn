$(document).ready(function () {
    //le dollar pour declancher les fonctions jquery
    //les selecteurs son pareille que ceux du css
    //$(".para1").hide();
    //$('p:nth-child(3)').hide();

    /*les evenements
    Les EVENEMETS-----------------
    possible d'ajouter les callbacks
    */
    $(".para0").click(function () {
        $("#para1").hide(1000, function(){
            //un callback fu utiliser. le callback c'est un fonction qui s'execute qd une autre est fini
            $("#para2").hide(2000);
        }); // on peu ajouter un temps pour faire disparaitre les trucs
    });
    $("#para2").mouseenter(function () {
        $("#para1").show();
    });
    //evenement particulier hover peu avoir 2 fonction
    /*$("#para3").hover(function () {
            $("#para1").hide();
        },
        function () {
            $("#para1").show();
        });*/

});
//deuxieme maniere de faire le document ready
/*$(function () {
    $(".para0").on({
        mouseenter: function () {
            $("#para2").hide();
        },
        mousseleave: function () {
            $("#para2").show();
        },
        click: function () {
            // body
            $("#para1").hide();
        }


    });
});*/