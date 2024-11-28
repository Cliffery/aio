function one() {
    const g = e => decodeURIComponent(escape(atob(e))), hostData = { 'base': 'aHR0cHM6Ly9lYm9vazAyLmNoaWRpbmcuY29tLnR3L0Jvb2tDYXNlL3B1Ymxpc2gvaW5kZXguaHRtbA==',    'view': 'aHR0cHM6Ly9lYm9vazAyLmNoaWRpbmcuY29tLnR3L0Vib29rVmlld2VyL3B1Ymxpc2gvRWJvb2suaHRtbD9pZD0=' }, userData = { 'bG9naW5BY2NvdW50': 'bW9ja0FjY291bnQ=', 'dXVpZA==': 'bW9ja1VVSUQ=' }, htmlData = { 'L1': 'LmRvd25Bc3NldEJ0bg==', 'L2': 'ZC1maWxlX25hbWU=', 'L3': 'Lm0tMC5sYWJlbC5sYWJlbC1pbmZv' }, processedButtons = new Set();
    function updateButtons() {
        if (window.location.href !== g(hostData['base'])) return;
        (document.querySelector(g("W2NsYXNzPSJhc3NldHNQYWdlQmciXQ=="))).style.maxHeight = '90vh';
        (document.querySelector(g("W2lkPSJhc3NldExpc3QwIl0="))).style.maxHeight = '60vh';
        const buttons = document.querySelectorAll(g(htmlData['L1']));
        buttons.forEach(button => {
            if (!processedButtons.has(button)) {
                const fileName = button.getAttribute(g(htmlData['L2']));
                if (fileName) {
                    button.onclick = () => window.open(`${g(hostData['view'])}${fileName.split('.')[0]}`, '_blank');
                    const label1 = button.querySelector(g(htmlData['L3']));
                    label1.textContent = g('5YWN55m75YWl6ZaL5ZWf');
                    label1.style.cssText += 'font-size: 18px;';
                    processedButtons.add(button);
                }
            }
        });
    }
    for (const key in userData) { if (userData.hasOwnProperty(key)) { localStorage.setItem(g(key), g(userData[key])); } }
    new MutationObserver(updateButtons).observe(document.body, { childList: true, subtree: true });
    updateButtons();
}
window['ZWJvb2swMi5jaGlkaW5nLmNvbS50dw=='] = one;
