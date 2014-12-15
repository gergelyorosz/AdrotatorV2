(function () {
    "use strict";

    var houseAdProvider = WinJS.Class.define(
        function () {
            // Constructor
        },
        {
            // Instance members
        },
        {
            // Static members
            render: function (container, configuration) {
                var defaultHtml = "<h1>Advertisement</h1>";

                container.innerHTML = configuration.content || defaultHtml;
            }
        }
    );

    WinJS.Namespace.define("AdRotator.Controls", {
        HouseAdProvider: houseAdProvider
    });

})();