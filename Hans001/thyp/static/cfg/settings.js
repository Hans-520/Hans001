/*
This file goes as an asset without any of compilation even after build process.
Thus, it can be replaced in a runtime by different file in another environment.

Example for Docker:
  docker run -v ./local_cfg_dir:cfg image:tag
*/

(function(window) {
  window.__env = window.__env || {};

  window.__env.title = '金鼎在线';
  window.__env.version = '1.0.0';
  window.__env.logo = 'static/img/logo.png';
  window.__env.androidDownloadLink = 'https://android.com';
  window.__env.iosDownloadLink = 'https://apple.com';
  window.__env.iosMobileProvision = 'https://apple.com';

})(this);