const scrollToElement = function (el, ms) {
    const speed = (ms) ? ms : 600;
    jQuery('html,body').animate({
        scrollTop: jQuery(el).offset().top
    }, speed);
};

jQuery(document).ready(function () {
    jQuery('.nav-link').on('click', function (e) {
        e.preventDefault();
        const el = jQuery(this).attr('href');
        scrollToElement(el);
    });
    jQuery(window).scroll(function () {
        const x = jQuery(window).scrollTop();

        if (x >= 42) {
            jQuery("#navbar").fadeIn(300);
        } else {
            jQuery("#navbar").fadeOut(300);
        }

    });
});

(function () {
    'use strict';
    window.onload = function () {
        const root = document.documentElement;
        root.className += ' loaded';
        Typed.new('#typed', {
            stringsElement: document.getElementById('typed-strings'),
            loop: true,
            typeSpeed: 7,
            backSpeed: 2,
            startDelay: 1000,
            backDelay: 1200
        });
    };
}());

!function (t, s, e) {
    const r = {
        strings: ["These are the default values", "Try them", "Use your own!", ".."],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {
        },
        preStringTyped: function () {
        },
        onStringTyped: function () {
        },
        resetCallback: function () {
        }
    };
    "use strict";
    const i = function (t, s) {
        const i = this;
        this.el = t, this.options = {}, Object.keys(r).forEach(function (t) {
            i.options[t] = r[t]
        }), Object.keys(s).forEach(function (t) {
            i.options[t] = s[t]
        }), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, e && this.options.stringsElement instanceof e ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    i.prototype = {
        constructor: i,
        init: function () {
            const t = this;
            t.timeout = setTimeout(function () {
                for (let s = 0; s < t.strings.length; ++s) {
                    t.sequence[s] = s;
                }
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function () {
            const t = this;
            if (this.showCursor === !0 && (this.cursor = s.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) {
                this.strings = [], this.stringsElement.style.display = "none";
                const e = Array.prototype.slice.apply(this.stringsElement.children);
                e.forEach(function (s) {
                    t.strings.push(s.innerHTML)
                })
            }
            this.init()
        },
        typewrite: function (t, s) {
            if (this.stop !== !0) {
                const e = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function () {
                    let e = 0,
                        r = t.substr(s);
                    if ("^" === r.charAt(0)) {
                        let o = 1;
                        /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
                    }
                    if ("html" === i.contentType) {
                        const n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            let a = "", h;
                            for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length));) ;
                            s++, a += h
                        }
                    }
                    i.timeout = setTimeout(function () {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) {
                                return;
                            }
                            i.timeout = setTimeout(function () {
                                i.backspace(t, s)
                            }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            const e = t.substr(0, s + 1);
                            i.attr ? i.el.setAttribute(i.attr, e) : i.isInput ? i.el.value = e : "html" === i.contentType ? i.el.innerHTML = e : i.el.textContent = e, s++, i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function (t, s) {
            if (this.stop !== !0) {
                const e = Math.round(70 * Math.random()) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function () {
                    if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                        let e;
                        for (e = ""; "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(s < 0));) ;
                        s--, e += "<"
                    }
                    const r = t.substr(0, s);
                    i.attr ? i.el.setAttribute(i.attr, r) : i.isInput ? i.el.value = r : "html" === i.contentType ? i.el.innerHTML = r : i.el.textContent = r, s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
                }, e)
            }
        },
        shuffleArray: function (t) {
            let s, e, i = t.length;
            if (i) {
                for (; --i;) {
                    e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
                }
            }
            return t
        },
        reset: function () {
            const t = this;
            clearInterval(t.timeout);
            this.el.getAttribute("id");
            this.el.textContent = "", "undefined" != typeof this.cursor && "undefined" != typeof this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, i["new"] = function (t, e) {
        const r = Array.prototype.slice.apply(s.querySelectorAll(t));
        r.forEach(function (t) {
            let s = t._typed,
                r = "object" == typeof e && e;
            s && s.reset(), t._typed = s = new i(t, r), "string" == typeof e && s[e]()
        })
    }, e && (e.fn.typed = function (t) {
        return this.each(function () {
            let s = e(this),
                r = s.data("typed"),
                o = "object" == typeof t && t;
            r && r.reset(), s.data("typed", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }), t.Typed = i;
}(window, document, window.jQuery);
