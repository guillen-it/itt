var toggle = document.getElementById('dark-mode-toggle');
var logoLight = 'photos/upc-logo.svg';
var logoDark = 'photos/upc-logo-white.svg';

function updateToggle() {
    var isDark = document.body.classList.contains('dark-mode');
    document.getElementById('icon-moon').style.display = isDark ? 'none' : 'inline';
    document.getElementById('icon-sun').style.display = isDark ? 'inline' : 'none';
    document.getElementById('upc-logo').src = isDark ? logoDark : logoLight;
}

updateToggle();

toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    var enabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', enabled ? 'enabled' : 'disabled');
    updateToggle();
});
