function one() {
    const g = e => decodeURIComponent(escape(atob(e))), processedButtons = new Set(), userData = { 'bG9naW5BY2NvdW50': 'bW9ja0FjY291bnQ=', 'dXVpZA==': 'bW9ja1VVSUQ=' }, viewer = { 'bnVsbA==': 'aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXI0VGVhY2hlci9FYm9vay5odG1sP2NvZGU9dGVhY2hlcl9wcm9fdGVzdCZpZD0=', 'enlvX2FuaW1hdGU=': 'aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXJhbjRUZWFjaGVyL2luZGV4Lmh0bWw/aWQ9', '': 'aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvRWJvb2t2aWV3ZXJhbjRUZWFjaGVyL2luZGV4Lmh0bWw/aWQ9' }
    function updateButtons() {
        if (!window.location.href.startsWith(g('aHR0cHM6Ly93ZWJldGV4dGJvb2sua25zaC5jb20udHcvMi9pbmRleC5odG1sP2NvZGVfZGVncmVlPQ=='))) return;
        document.querySelectorAll(g('LmRvd25sb2FkQXNzZXQ=')).forEach(asset => {
            const button = asset.querySelector(g('LmRvd25Bc3NldEJ0bg==')), label = button.querySelector(g('LmxhYmVsLWluZm8=')), fileName = button.getAttribute(g('ZC1maWxlX25hbWU='))
            if (fileName && !processedButtons.has(button)) {
                asset.style.cssText += 'display: flex;';
                button.style.cssText += 'width: 80px;';
                button.onclick = () => { 
                    remark = btoa(unescape(encodeURIComponent(button.getAttribute(g('ZC1yZW1hcmtfaWQ=')))));
                    if(asset.textContent.includes(g("6Ieq54S2")) && asset.textContent.includes(g("5a6i6KO95YyW"))) { remark = "enlvX2FuaW1hdGU="; }
                    else if(asset.textContent.includes(g("5ZyL5paH")) && asset.textContent.includes(g("UFBU"))) { remark = "bnVsbA=="; }
                    window.open(`${g(viewer[remark])}${fileName.split('.')[0]}`, '_blank'); 
                };
                label.textContent = g("5YWN55m76ZaL5ZWf");
                processedButtons.add(button);
            }
        });
    }
    for (const key in userData) { if (userData.hasOwnProperty(key)) { localStorage.setItem(g(key), g(userData[key])); } }
    new MutationObserver(updateButtons).observe(document.body, { childList: true, subtree: true });
    updateButtons();
}

function two() {
    const g = e => decodeURIComponent(escape(atob(e))), headers = { "authority": g("ZGlnaXRhbG1hc3Rlci5rbnNoLmNvbS50dw=="), "method": "POST", "path": g("L2tuc2hFeHRyYW5ldEFQSS9rZXlncmlwL1ZlcmlmeUtleWdyaXA="), "scheme": "https", "accept": "*/*", "accept-encoding": "gzip, deflate, br, zstd", "accept-language": "zh-TW,zh;q=0.9", "origin": g("aHR0cHM6Ly9kaWdpdGFsbWFzdGVyLmtuc2guY29tLnR3"), "priority": "u=1, i", "referer": g("aHR0cHM6Ly9kaWdpdGFsbWFzdGVyLmtuc2guY29tLnR3L3YzL3BhZ2VzL2UvaW5kZXguaHRtbA=="), "sec-ch-ua": `"Brave";v="131", "Chromium";v="131", "Not_A Brand";v="24"`, "sec-ch-ua-mobile": "?0", "sec-ch-ua-platform": `"Windows"`, "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "same-origin", "sec-gpc": "1", "Content-Type": "text/plain;charset=UTF-8" }, body = JSON.stringify({ [g("dXVpZA==")]: g("NTAxNDgz"), [g("cm9sZQ==")]: String.fromCharCode(32769) + String.fromCharCode(24107), [g("c2lnbmF0dXJl")]: g("ZDQzb2JmMnAtT2ZDVnlfd2JSMXJQS2tmdmRF"), [g("ZXhwaXJ5")]: g("MTczMzIxNzAyOTUyNw==") });
    fetch(g("aHR0cHM6Ly9kaWdpdGFsbWFzdGVyLmtuc2guY29tLnR3L2tuc2hFeHRyYW5ldEFQSS9rZXlncmlwL1ZlcmlmeUtleWdyaXA="), { method: "POST", headers: headers, body: body })
        .then(response => response.json())
        .then(data => {
            const { isValid, uuid, signature, role, expiry } = data, base64String = btoa(unescape(encodeURIComponent(JSON.stringify({ isValid, signature, expiry, role, uuid }))));
            window._fetch = window.fetch;
            window.fetch = async (url, opts) => {
                const r = () => ({ json: () => Promise.resolve(JSON.parse(g(base64String))) });
                if (/g\('dmVyaWZ5a2V5Z3JpcA=='\)/i.test(url)) { return r(); }
                try {
                    const d = await window._fetch(url, opts).then(res => res.json());
                    if (d && d.errorType) { return r(); }
                    return { json: () => d };
                } catch (err) { return r(); }
            };
        })
        .catch(error => { console.error('Error:', error);
        });
}

window['d2ViZXRleHRib29rLmtuc2guY29tLnR3'] = one;
window['ZGlnaXRhbG1hc3Rlci5rbnNoLmNvbS50dw=='] = two;
