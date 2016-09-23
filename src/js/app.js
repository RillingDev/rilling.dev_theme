"use strict";
var frilling = (function() {
    function init(pageType) {
        var _window = window;
        var _document = _window.document;

        function $(query, multi) {

            return multi ? _document.querySelectorAll(query) : _document.querySelector(query);
        }

        function eachNode(node, fn) {
            return [].forEach.call(node, fn);
        }

        function initNav() {
            var $toggle = $(".navbar-toggler");
            var $nav = $(".navbar-toggleable-xs");

            $toggle.addEventListener("click", () => {
                $nav.classList.toggle("in");
            }, false);
        }

        function initArticle() {
            var $pre = $("pre", true);
            var $tables = $("table", true);

            //Highlight Code Snippets
            eachNode($pre, function($e) {
                var $code = $e.querySelector("code");
                var lang = $code.className.replace("language-", "");
                $e.className = lang;

                hljs.highlightBlock($e);
            });

            //Adjust Table classes
            eachNode($tables, function(e) {
                e.classList.add("table");
                e.classList.add("table-bordered");
                e.classList.add("table-hover");
                e.outerHTML = '<div class="table-responsive">' + e.outerHTML + '</div>';
            });
        }

        function initAbout() {
            /*var ctx = $("#graphSkills");
            var options = {
                responsive: false,
                scale: {

                }
            };
            var data = {
                labels: ["Webdesign", "Frontend", "Webapp", "Backend", "Native Apps"],
                datasets: [{
                    label: "Skills",
                    backgroundColor: "#83d356",
                    borderColor: "#83d356",
                    pointBackgroundColor: "#83d356",
                    pointBorderColor: "#67c333",
                    pointHoverBackgroundColor: "#67c333",
                    pointHoverBorderColor: "#67c333",
                    data: [40, 70, 80, 60, 20]
                }]
            };
            var myChart = new Chart(ctx, {
                type: "horizontalBar",
                data: data,
                options: options
            });
            */
        }

        initNav();
        if (pageType === "item") {
            initArticle();
        }
        if (pageType === "about") {
            initAbout();
        }
    }

    return {
        init: init
    };
})();
