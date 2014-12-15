(function () {
    "use strict";

    var adDuplexAdProvider = WinJS.Class.define(
        function () {
            // Constructor
        },
        {
            // Instance members
        },
        {
            // Static members
            render: function (container, configuration) {
                var defaultAppId = "test",
                    defaultSize = "250x125",
                    options = {
                        appId: configuration.AppID || defaultAppId,
                        size: configuration.size || defaultSize
                    }

                new AdDuplexJs.Controls.AdControl(container, options);
            }
        }
    );

    WinJS.Namespace.define("AdRotator.Controls", {
        AdDuplexAdProvider: adDuplexAdProvider
    });

})();