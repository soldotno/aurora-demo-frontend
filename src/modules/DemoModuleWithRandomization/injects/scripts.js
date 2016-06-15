/**
 * Examples of script injections
 *
 * Just paste all your snippets here
 */
module.exports = function(context) {
  (function(w, d, s, id) {
    /**
     * Do config and add stuff to
     * the global (window) scope
     * here
     */
    w.myConfig_REPLACE_ME = {
      option: 'hello'
    };

    /**
     * The part that injects
     * the script with a url
     * (only change the REPLACE_ME parts)
     */
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//url-to-script-here_REPLACE_ME.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'unique-id-for-script-here_REPLACE_ME'));
};
