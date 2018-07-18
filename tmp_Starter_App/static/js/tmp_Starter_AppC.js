/* globals tmp_tmp_Starter_App_App */
/* globals Shared */

(function() {

  "use strict";

  Trillo.CSS.selected = "active";

  tmp_Starter_App.tmp_Starter_AppC = Trillo.inherits(Shared.AppC, function(viewSpec) {
    Shared.AppC.call(this, viewSpec);
  });

  var tmp_Starter_AppC = tmp_Starter_App.tmp_Starter_AppC.prototype;
  var AppC = Shared.AppC.prototype;

  tmp_Starter_AppC.handleAction = function(actionName, selectedObj) {
    if (actionName === "sideBarToggler") {
      $('body').toggleClass('sidebar-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "asideBarToggler") {
      $('body').toggleClass('aside-menu-hidden');
      this.view().windowResized();
      return true;
    } else if (actionName === "mobileSideBarToggler") {
      $('body').toggleClass('sidebar-mobile-show');
      this.view().windowResized();
      return true;
    }
    return AppC.handleAction.call(this, actionName, selectedObj);
  };

})();
