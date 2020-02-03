(function ($, Drupal) {
  Drupal.behaviors.myAdyaxBehavior = {
    attach: function (context, settings) {
      jcf.replaceAll();
    }
  };
})(jQuery, Drupal);
