(function () {
    "use strict";

    var adControl = WinJS.Class.define(
        function (element, options) {
            // Constructor
            options = options || {};
            var xmlParser = options.xmlParser || new X2JS();
            
            this._element = element || document.createElement("div");
            this._element.winControl = this;
            this._element.innerText = "Hello!";

            getRemoteAdConfig();
            

            function getRemoteAdConfig() {
                WinJS.xhr({
                        url: "https://raw.githubusercontent.com/Adrotator/AdrotatorV2/develop/Examples/00-HostedConfig/defaultAdSettingsWindows8.xml"
                    }).done(
                    function completed(result) {
                        if (result.status === 200) {

                            // Get the XML document from the results. 
                            var xmlDocument = result.responseXML;
                            var jsonObj = xmlParser.xml_str2json(result.response);
                            debugger;
                        }
                    }
                );
            }
        },
        {            
            // Instance members
        },
        {
            // Static members
        }
    );

    WinJS.Namespace.define("AdRotator.Controls", {
        AdControl: adControl
    });

})();