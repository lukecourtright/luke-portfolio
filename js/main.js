(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.dataset.theme = theme;
    toggle.querySelector('.theme-toggle__icon').textContent = theme === 'dark' ? '☾' : '☼';
  }

  var stored = localStorage.getItem('theme');
  var preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(preferred);

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
})();
