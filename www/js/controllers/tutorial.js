'use strict'
var tutorial = $.hemiIntro({
    debug: true,
    buttons: {
        next: {
            element: $("<button>" + globals.culture.nextBtn + "</button>"),
            class: "btn btn-primary"
        },
        finish: {
            element: $("<button>"+globals.culture.finishBtn+"</button>"),
            class: "btn btn-primary"
        }
    },
    steps: [
        {
            selector: ".disabled-0",
            placement: "bottom",
            content: globals.culture.tutorial1
        },
        {
            selector: ".start-1",
            placement: "top",
            content: globals.culture.tutorial2
        },
        {
            selector: ".normal-1",
            placement: "bottom",
            content: globals.culture.tutorial3
        },
        {
            selector: ".pass-2",
            placement: "top",
            content: globals.culture.tutorial4
        },
        {
            selector: ".pass-3",
            placement: "bottom",
            content: globals.culture.tutorial5
        },
        {
            selector: "#header",
            placement: "bottom",
            content: globals.culture.tutorial6
        },
        {
            selector: "#board",
            placement: "bottom",
            content: globals.culture.tutorial7
        },
        {
            selector: "#board",
            placement: "bottom",
            content: globals.culture.tutorial8
        }
    ],
    onComplete: function (plugin) {
        globals.game.nextLevel(true);
    }
});