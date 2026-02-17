document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("detectBtn");

    button.onclick = function () {

        var text = document.getElementById("inputText").value;
        var result = document.getElementById("result");

        text = text.toLowerCase();

        var phrases = [
            "—",
            "delve into",
            "underscore",
            "pivotal",
            "realm",
            "harness",
            "illuminate"
        ];

        var found = [];

        for (var i = 0; i < phrases.length; i++) {
            if (text.indexOf(phrases[i]) !== -1) {
                found.push(phrases[i]);
            }
        }

        if (found.length > 0) {

            var message = "Detected Phrases:<br><br>";

            for (var j = 0; j < found.length; j++) {
                message += "\" " + found[j] + " \"" + "<br>";
            }

            result.innerHTML = message;

        } else {
            result.innerHTML = "No common AI phrases detected.";
        }

    };

});
