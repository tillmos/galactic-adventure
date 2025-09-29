sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("galactic.project1.controller.SpacefarersObjectPage", {
    onInit: function () {
      // Initialization logic if needed
    },

    onEdit: function () {
      var oPage = this.getView().byId("ObjectPageLayout"); // your ObjectPage ID
      if (oPage) {
        oPage.setMode("Editable"); // Switch to edit mode
      }
    }
  });
});
