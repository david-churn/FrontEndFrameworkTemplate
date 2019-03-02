# FrontEndFrameworkTemplate v1.0  3/2/2019
Template of NPM software to make development easier

Run "npm install" in the terminal on the main directory before running Gulp.

Use Gulp to coordinate changes to development files to provide quick feedback displayed on an open browser.

Expected directory structure
/yourFolder
  /dev
    /scripts
    /scss
      /partials
    /images
    /fonts
  /build
    /images
    /fonts

Custom CSS files like normalize.css will be copied at the initial build but are not included in the watchers.  The process copies *.css files from /dev to /build.

JSHint Notes:
* If you use "use strict"; at the top of the JavaScript files, then you can normally ignore the message about the function level call.  JSHint is encouraging you to put "use strict"; at the top of each function.
* The template comes with the following options set for JSHint.
  {"browser":true, globals":{"console":true}, "eqeqeq":true, "latedef":true, "nocomma":true, "unused":true}
