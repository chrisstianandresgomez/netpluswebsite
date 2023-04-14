/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(b, c, {
                configurable: !0, enumerable: !0, get: function () {
                    return d(f), e
                }, set: function (a) {
                    d(f), e = a
                }
            })
        } catch (g) {
        }
        a._definePropertyBroken = !0, b[c] = e
    }

    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {size: 1}).attr("size") && a.attrFn, h = a.attr,
        i = a.attrHooks.value && a.attrHooks.value.get || function () {
            return null
        }, j = a.attrHooks.value && a.attrHooks.value.set || function () {
            return c
        }, k = /^(?:input|button)$/i, l = /^[238]$/,
        m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function (b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            }, set: function (b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        }, set: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</,
        u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function (b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a)) try {
            document.querySelector(a)
        } catch (c) {
            a = a.replace(v, function (a, b, c, d) {
                return "[" + b + c + '"' + d + '"]'
            });
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function (a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
        function b(a, c) {
            return new b.fn.init(a, c)
        }

        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function () {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function () {
            var a;
            return y = !0, a = d.apply(this, arguments), y = !1, a
        })
    }), a.swap = function (a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f
    }, a.ajaxSetup({converters: {"text json": a.parseJSON}});
    var z = a.fn.data;
    a.fn.data = function (b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function (b, c, e, f) {
        c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function (a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
        }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die,
        H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function (b) {
            return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function (a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length;) e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function (b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function (b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function (a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function (b, c) {
        a.event.special[c] = {
            setup: function () {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            }, teardown: function () {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup: function () {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find;
    if (a.fn.andSelf = function () {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }, a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var O = a.Deferred,
            P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function (b) {
            var c = O(), e = c.promise();
            return c.pipe = e.pipe = function () {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                    a.each(P, function (f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function () {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function () {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function () {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function () {
    "use strict";

    function e(e) {
        function t(t, n) {
            var s, h, k = t == window, y = n && n.message !== undefined ? n.message : undefined;
            if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {fadeOut: 0}), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y, g = {};
                    e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var v, I, w, U, x = n.baseZ;
                v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
                var C = [v, I, w], S = e(k ? "body" : t);
                e.each(C, function () {
                    this.appendTo(S)
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
                        T = a(t, "borderLeftWidth"), M = E ? "(0 - " + E + ")" : 0, B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, t) {
                        var o = t[0].style;
                        if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M); else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0; else if (!n.centerY && k) {
                            var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
                            o.setExpression("top", i)
                        }
                    })
                }
                if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c, H = n.showOverlay && !y ? j : c, z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n)
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W)
                }
            }
        }

        function o(t, o) {
            var s, l = t == window, d = e(t), a = d.data("blockUI.history"), c = d.data("blockUI.timeout");
            c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
            var r;
            r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
                0 == --s && n(r, a, o, t)
            })) : n(r, a, o, t)
        }

        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body), d = l.width(), a = l[0].style.width;
                l.width(d - 1).width(d), l[0].style.width = a
            }
        }

        function i(t, o, n) {
            var i = o == window, l = e(o);
            if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
            }
        }

        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b, n = !t.shiftKey && t.target === o[o.length - 1], i = t.shiftKey && t.target === o[0];
                if (n || i) return setTimeout(function () {
                    l(i)
                }, 10), !1
            }
            var s = t.data, d = e(t.target);
            return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
        }

        function l(e) {
            if (b) {
                var t = b[!0 === e ? b.length - 1 : 0];
                t && t.focus()
            }
        }

        function d(e, t, o) {
            var n = e.parentNode, i = e.style, s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
        }

        function a(t, o) {
            return parseInt(e.css(t, o), 10) || 0
        }

        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {
            }, r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function (e) {
            t(window, e)
        }, e.unblockUI = function (e) {
            o(window, e)
        }, e.growlUI = function (t, o, n, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
            var l = function (t) {
                t = t || {}, e.blockUI({
                    message: s,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            l();
            s.css("opacity");
            s.mouseover(function () {
                l({fadeIn: 0, timeout: 3e4});
                var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        }, e.fn.block = function (o) {
            if (this[0] === window) return e.blockUI(o), this;
            var n = e.extend({}, e.blockUI.defaults, o || {});
            return this.each(function () {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({fadeOut: 0})
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
            })
        }, e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                o(this, t)
            })
        }, e.blockUI.version = 2.7, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {width: "30%", top: "40%", left: "35%"},
            overlayCSS: {backgroundColor: "#000", opacity: .6, cursor: "wait"},
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null, b = []
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
var wc_add_to_cart_params = {
    "ajax_url": "\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
    "i18n_view_cart": "View cart",
    "cart_url": "http:\/\/mirasat.like-themes.com\/cart\/",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};
jQuery(function (o) {
    if ("undefined" == typeof wc_add_to_cart_params) return !1;

    function t() {
        this.requests = [], this.addRequest = this.addRequest.bind(this), this.run = this.run.bind(this), o(document.body).on("click", ".add_to_cart_button", {addToCartHandler: this}, this.onAddToCart).on("click", ".remove_from_cart_button", {addToCartHandler: this}, this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart removed_from_cart", {addToCartHandler: this}, this.updateFragments)
    }

    t.prototype.addRequest = function (t) {
        this.requests.push(t), 1 === this.requests.length && this.run()
    }, t.prototype.run = function () {
        var t = this, a = t.requests[0].complete;
        t.requests[0].complete = function () {
            "function" == typeof a && a(), t.requests.shift(), 0 < t.requests.length && t.run()
        }, o.ajax(this.requests[0])
    }, t.prototype.onAddToCart = function (t) {
        var a = o(this);
        if (a.is(".ajax_add_to_cart")) {
            if (!a.attr("data-product_id")) return !0;
            t.preventDefault(), a.removeClass("added"), a.addClass("loading");
            var r = {};
            o.each(a.data(), function (t, a) {
                r[t] = a
            }), o(document.body).trigger("adding_to_cart", [a, r]), t.data.addToCartHandler.addRequest({
                type: "POST",
                url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"),
                data: r,
                success: function (t) {
                    t && (t.error && t.product_url ? window.location = t.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? o(document.body).trigger("added_to_cart", [t.fragments, t.cart_hash, a]) : window.location = wc_add_to_cart_params.cart_url)
                },
                dataType: "json"
            })
        }
    }, t.prototype.onRemoveFromCart = function (t) {
        var a = o(this), r = a.closest(".woocommerce-mini-cart-item");
        t.preventDefault(), r.block({
            message: null,
            overlayCSS: {opacity: .6}
        }), t.data.addToCartHandler.addRequest({
            type: "POST",
            url: wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"),
            data: {cart_item_key: a.data("cart_item_key")},
            success: function (t) {
                t && t.fragments ? o(document.body).trigger("removed_from_cart", [t.fragments, t.cart_hash, a]) : window.location = a.attr("href")
            },
            error: function () {
                window.location = a.attr("href")
            },
            dataType: "json"
        })
    }, t.prototype.updateButton = function (t, a, r, e) {
        (e = void 0 !== e && e) && (e.removeClass("loading"), e.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== e.parent().find(".added_to_cart").length || e.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), o(document.body).trigger("wc_cart_button_updated", [e]))
    }, t.prototype.updateFragments = function (t, a) {
        a && (o.each(a, function (t) {
            o(t).addClass("updating").fadeTo("400", "0.6").block({message: null, overlayCSS: {opacity: .6}})
        }), o.each(a, function (t, a) {
            o(t).replaceWith(a), o(t).stop(!0).css("opacity", "1").unblock()
        }), o(document.body).trigger("wc_fragments_loaded"))
    }, new t
});
(function ($) {
    'use strict';
    $(document).ready(function () {
        $('body').on('adding_to_cart', function (event, $button, data) {
            if ($button && $button.hasClass('vc_gitem-link')) {
                $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
            }
        }).on('added_to_cart', function (event, fragments, cart_hash, $button) {
            if ('undefined' === typeof ($button)) {
                $button = $('.vc-gitem-add-to-cart-loading-btn');
            }
            if ($button && $button.hasClass('vc_gitem-link')) {
                $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();
            }
        });
    });
})(window.jQuery);
/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t, e) {
    "use strict";

    function r(r, a, i, u, l) {
        function f() {
            L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
                s(!0)
            }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
                "resize" === t.type && (w = B = -1), s(t.all)
            }), u.a = function (t) {
                t = c(t), i.push.apply(i, t)
            }, u.g = function () {
                return i = n(i).filter(function () {
                    return !n(this).data(a.loadedName)
                })
            }, u.f = function (t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function () {
                        return this === t[e]
                    });
                    r.length && s(!1, r)
                }
            }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
        }

        function c(t) {
            var i = a.defaultImage, o = a.placeholder, u = a.imageBase, l = a.srcsetAttribute, f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function () {
                var t = n(this), r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s]), g = m(t[s]), h = A.attr(a.imageBaseAttribute) || u;
                g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
            }
            return t
        }

        function s(t, e) {
            if (!i.length) return void (a.autoDestroy && r.destroy());
            for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++) if (t || e || A(o[s])) {
                var g = n(o[s]), h = m(o[s]), b = g.attr(a.attribute), v = g.attr(a.imageBaseAttribute) || l,
                    p = g.attr(a.loaderAttribute);
                g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
            }
            u && (i = n(i).filter(function () {
                return !n(this).data(c)
            }))
        }

        function d(t, e, r, i) {
            ++z;
            var o = function () {
                y("onError", t), p(), o = n.noop
            };
            y("beforeLoad", t);
            var u = a.attribute, l = a.srcsetAttribute, f = a.sizesAttribute, c = a.retinaAttribute,
                s = a.removeAttribute, d = a.loadedName, A = t.attr(c);
            if (i) {
                var g = function () {
                    s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
                };
                t.off(I).one(I, o).one(D, g), y(i, t, function (e) {
                    e ? (t.off(D), g()) : (t.off(I), o())
                }) || t.trigger(I)
            } else {
                var h = n(new Image);
                h.one(I, o).one(D, function () {
                    t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
                });
                var m = (L && A ? A : t.attr(u)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(), r = a.scrollDirection, n = a.threshold,
                i = h() + n > e.top && -n < e.bottom, o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o
        }

        function g() {
            return w >= 0 ? w : w = n(t).width()
        }

        function h() {
            return B >= 0 ? B : B = n(t).height()
        }

        function m(t) {
            return t.tagName.toLowerCase()
        }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }

        function v(t, e) {
            var n, i = 0;
            return function (o, u) {
                function l() {
                    i = +new Date, e.call(r, o)
                }

                var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
            }
        }

        function p() {
            --z, i.length || z || y("onFinishedAll")
        }

        function y(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
        }

        var z = 0, w = -1, B = -1, L = !1, T = "afterLoad", D = "load", I = "error", N = "img", E = "src", F = "srcset",
            C = "sizes", O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
    }

    function a(a, o) {
        var u = this, l = n.extend({}, u.config, o), f = {}, c = l.name + "-" + ++i;
        return u.config = function (t, r) {
            return r === e ? l[t] : (l[t] = r, u)
        }, u.addItems = function (t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t), u
        }, u.getItems = function () {
            return f.g ? f.g() : {}
        }, u.update = function (t) {
            return f.e && f.e({}, !t), u
        }, u.force = function (t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t), u
        }, u.loadAll = function () {
            return f.e && f.e({all: !0}, !0), u
        }, u.destroy = function () {
            return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
        }, r(u, l, a, f, c), l.chainable ? a : u
    }

    var n = t.jQuery || t.Zepto, i = 0, o = !1;
    n.fn.Lazy = n.fn.lazy = function (t) {
        return new a(this, t)
    }, n.Lazy = n.lazy = function (t, r, i) {
        if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++) (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
            for (var c = 0, s = r.length; c < s; c++) u[r[c]] = t[0]
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, n(t).on("load", function () {
        o = !0
    })
}(window);
jQuery(function ($) {
    var ticking = false;
    $.fn.zoomInstagramWidget = function () {
        return $(this).each(function () {
            var $list = $(this);
            var minItemsPerRow = $list.data('images-per-row');
            var desiredItemWidth = $list.data('image-width');
            var itemSpacing = $list.data('image-spacing');
            var imageLazyLoading = $list.data('image-lazy-loading');
            var containerWidth = $list.width();
            var fitPerRow;
            var itemWidth;
            if (containerWidth / desiredItemWidth < minItemsPerRow) {
                fitPerRow = minItemsPerRow;
                itemWidth = Math.floor((containerWidth - 1 - (minItemsPerRow - 1) * itemSpacing) / minItemsPerRow);
            } else {
                fitPerRow = Math.floor((containerWidth - 1) / desiredItemWidth);
                itemWidth = Math.floor((containerWidth - 1 - (fitPerRow - 1) * itemSpacing) / fitPerRow);
            }
            $list.find('li').each(function (i) {
                if (++i % fitPerRow == 0) {
                    $(this).css('margin-right', '0');
                } else {
                    $(this).css('margin-right', itemSpacing + 'px');
                    $(this).css('margin-bottom', itemSpacing + 'px');
                }
            });
            $list.find('a.zoom-instagram-link').css({width: itemWidth, height: itemWidth});
            if (imageLazyLoading) {
                $list.find('a.zoom-instagram-link').lazy();
            }
            $list.removeClass('zoom-instagram-widget__items--no-js');
        });
    };

    function requestTick() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame()(update);
        }
    }

    function requestAnimationFrame() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    }

    function update() {
        $('.zoom-instagram-widget__items').zoomInstagramWidget();
        ticking = false;
    }

    $(window).on('resize orientationchange', requestTick);
    requestTick();
});

window.Modernizr = function (e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function o(e, t) {
        return r(S.join(e + ";") + (t || ""))
    }

    function i(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!a(o, "-") && b[o] !== n) return "pfx" != t || o
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }

    function l(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + k.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
    }

    function u() {
        m.input = function (n) {
            for (var r = 0, o = n.length; r < o; r++) P[n[r]] = n[r] in E;
            return P.list && (P.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), P
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), m.inputtypes = function (e) {
            for (var r, o, i, a = 0, c = e.length; a < c; a++) E.setAttribute("type", o = e[a]), r = "text" !== E.type, r && (E.value = w, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != w)), M[e[a]] = !!r;
            return M
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var f, d, p = "2.6.2", m = {}, h = !0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style,
        E = t.createElement("input"), w = ":)", x = {}.toString, S = " -webkit- -moz- -o- -ms- ".split(" "),
        C = "Webkit Moz O ms", k = C.split(" "), T = C.toLowerCase().split(" "),
        j = {svg: "http://www.w3.org/2000/svg"}, N = {}, M = {}, P = {}, A = [], L = A.slice,
        $ = function (e, n, r, o) {
            var i, a, c, s, l = t.createElement("div"), u = t.body, f = u || t.createElement("body");
            if (parseInt(r, 10)) for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), l.appendChild(c);
            return i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), l.id = v, (u ? l : f).innerHTML += i, f.appendChild(l), u || (f.style.background = "", f.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)), a = n(l, e), u ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), g.style.overflow = s), !!a
        }, z = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t).matches;
            var r;
            return $("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        }, D = function () {
            function e(e, o) {
                o = o || t.createElement(r[e] || "div"), e = "on" + e;
                var a = e in o;
                return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
            }

            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(), F = {}.hasOwnProperty;
    d = i(F, "undefined") || i(F.call, "undefined") ? function (e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return F.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = L.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var o = function () {
                };
                o.prototype = t.prototype;
                var i = new o, a = t.apply(i, n.concat(L.call(arguments)));
                return Object(a) === a ? a : i
            }
            return t.apply(e, n.concat(L.call(arguments)))
        };
        return r
    }), N.flexbox = function () {
        return l("flexWrap")
    }, N.canvas = function () {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }, N.canvastext = function () {
        return !!m.canvas && !!i(t.createElement("canvas").getContext("2d").fillText, "function")
    }, N.webgl = function () {
        return !!e.WebGLRenderingContext
    }, N.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : $(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, N.geolocation = function () {
        return "geolocation" in navigator
    }, N.postmessage = function () {
        return !!e.postMessage
    }, N.websqldatabase = function () {
        return !!e.openDatabase
    }, N.indexedDB = function () {
        return !!l("indexedDB", e)
    }, N.hashchange = function () {
        return D("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, N.history = function () {
        return !!e.history && !!history.pushState
    }, N.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, N.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, N.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
    }, N.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }, N.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, N.backgroundsize = function () {
        return l("backgroundSize")
    }, N.borderimage = function () {
        return l("borderImage")
    }, N.borderradius = function () {
        return l("borderRadius")
    }, N.boxshadow = function () {
        return l("boxShadow")
    }, N.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, N.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, N.cssanimations = function () {
        return l("animationName")
    }, N.csscolumns = function () {
        return l("columnCount")
    }, N.cssgradients = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
    }, N.cssreflections = function () {
        return l("boxReflect")
    }, N.csstransforms = function () {
        return !!l("transform")
    }, N.csstransforms3d = function () {
        var e = !!l("perspective");
        return e && "webkitPerspective" in g.style && $("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, N.csstransitions = function () {
        return l("transition")
    }, N.fontface = function () {
        var e;
        return $('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var o = t.getElementById("smodernizr"), i = o.sheet || o.styleSheet,
                a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }), e
    }, N.generatedcontent = function () {
        var e;
        return $(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, N.video = function () {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, N.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {
        }
        return n
    }, N.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, N.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, N.webworkers = function () {
        return !!e.Worker
    }, N.applicationcache = function () {
        return !!e.applicationCache
    }, N.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(j.svg, "svg").createSVGRect
    }, N.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == j.svg
    }, N.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(j.svg, "animate")))
    }, N.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(j.svg, "clipPath")))
    };
    for (var O in N) d(N, O) && (f = O.toLowerCase(), m[f] = N[O](), A.push((m[f] ? "" : "no-") + f));
    return m.input || u(), m.addTest = function (e, t) {
        if ("object" == typeof e) for (var r in e) d(e, r) && m.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), m[e] !== n) return m;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), m[e] = t
        }
        return m
    }, r(""), y = E = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e) {
            var t = g[e[m]];
            return t || (t = {}, h++, e[m] = h, g[h] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !d.test(e) ? r.frag.appendChild(i) : i
        }

        function a(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var i = n.frag.cloneNode(), a = 0, c = r(), s = c.length; a < s; a++) i.createElement(c[a]);
            return i
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return v.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }

        function s(e) {
            e || (e = t);
            var r = o(e);
            return v.shivCSS && !l && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || c(e, r), e
        }

        var l, u, f = e.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            m = "_html5shiv", h = 0, g = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                l = !0, u = !0
            }
        }();
        var v = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: s,
            createElement: i,
            createDocumentFragment: a
        };
        e.html5 = v, s(t)
    }(this, t), m._version = p, m._prefixes = S, m._domPrefixes = T, m._cssomPrefixes = k, m.mq = z, m.hasEvent = D, m.testProp = function (e) {
        return c([e])
    }, m.testAllProps = l, m.testStyles = $, m.prefixed = function (e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + A.join(" ") : ""), m
}(this, this.document), function (e, t, n) {
    function r(e) {
        return "[object Function]" == g.call(e)
    }

    function o(e) {
        return "string" == typeof e
    }

    function i() {
    }

    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function c() {
        var e = v.shift();
        y = 1, e ? e.t ? m(function () {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), c()) : y = 0
    }

    function s(e, n, r, o, i, s, l) {
        function u(t) {
            if (!p && a(f.readyState) && (b.r = p = 1, !y && c(), f.onload = f.onreadystatechange = null, t)) {
                "img" != e && m(function () {
                    w.removeChild(f)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }

        var l = l || d.errorTimeout, f = t.createElement(e), p = 0, g = 0, b = {t: r, s: n, e: i, a: s, x: l};
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
            u.call(this, g)
        }, v.splice(o, 0, b), "img" != e && (g || 2 === T[n] ? (w.insertBefore(f, E ? null : h), m(u, l)) : T[n].push(f))
    }

    function l(e, t, n, r, i) {
        return y = 0, t = t || "j", o(e) ? s("c" == t ? S : x, e, t, this.i++, n, r, i) : (v.splice(this.i++, 0, e), 1 == v.length && c()), this
    }

    function u() {
        var e = d;
        return e.loader = {load: l, i: 0}, e
    }

    var f, d, p = t.documentElement, m = e.setTimeout, h = t.getElementsByTagName("script")[0], g = {}.toString, v = [],
        y = 0, b = "MozAppearance" in p.style, E = b && !!t.createRange().compareNode, w = E ? p : h.parentNode,
        p = e.opera && "[object Opera]" == g.call(e.opera), p = !!t.attachEvent && !p,
        x = b ? "object" : p ? "script" : "img", S = p ? "script" : x, C = Array.isArray || function (e) {
            return "[object Array]" == g.call(e)
        }, k = [], T = {}, j = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    d = function (e) {
        function t(e) {
            var t, n, r, e = e.split("!"), o = k.length, i = e.pop(), a = e.length,
                i = {url: i, origUrl: i, prefixes: e};
            for (n = 0; n < a; n++) r = e[n].split("="), (t = j[r.shift()]) && (i = t(i, r));
            for (n = 0; n < o; n++) i = k[n](i);
            return i
        }

        function a(e, o, i, a, c) {
            var s = t(e), l = s.autoCallback;
            s.url.split(".").pop().split("?").shift(), s.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, o, i, a, c) : (T[s.url] ? s.noexec = !0 : T[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : n, s.noexec, s.attrs, s.timeout), (r(o) || r(l)) && i.load(function () {
                u(), o && o(s.origUrl, c, a), l && l(s.origUrl, c, a), T[s.url] = 2
            })))
        }

        function c(e, t) {
            function n(e, n) {
                if (e) {
                    if (o(e)) n || (f = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    }), a(e, f, t, 0, l); else if (Object(e) === e) for (s in c = function () {
                        var t, n = 0;
                        for (t in e) e.hasOwnProperty(t) && n++;
                        return n
                    }(), e) e.hasOwnProperty(s) && (!n && !--c && (r(f) ? f = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    } : f[s] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(d[s])), a(e[s], f, t, s, l))
                } else !n && p()
            }

            var c, s, l = !!e.test, u = e.load || e.both, f = e.callback || i, d = f, p = e.complete || i;
            n(l ? e.yep : e.nope, !!u), u && n(u)
        }

        var s, l, f = this.yepnope.loader;
        if (o(e)) a(e, 0, f, 0); else if (C(e)) for (s = 0; s < e.length; s++) l = e[s], o(l) ? a(l, 0, f, 0) : C(l) ? d(l) : Object(l) === l && c(l, f); else Object(e) === e && c(e, f)
    }, d.addPrefix = function (e, t) {
        j[e] = t
    }, d.addFilter = function (e) {
        k.push(e)
    }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function () {
        t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function (e, n, r, o, s, l) {
        var u, f, p = t.createElement("script"), o = o || d.errorTimeout;
        p.src = e;
        for (f in r) p.setAttribute(f, r[f]);
        n = l ? c : n || i, p.onreadystatechange = p.onload = function () {
            !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
        }, m(function () {
            u || (u = 1, n(1))
        }, o), s ? p.onload() : h.parentNode.insertBefore(p, h)
    }, e.yepnope.injectCss = function (e, n, r, o, a, s) {
        var l, o = t.createElement("link"), n = s ? c : n || i;
        o.href = e, o.rel = "stylesheet", o.type = "text/css";
        for (l in r) o.setAttribute(l, r[l]);
        a || (h.parentNode.insertBefore(o, h), m(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function () {
    if (!window.mc4wp) {
        window.mc4wp = {
            listeners: [], forms: {
                on: function (event, callback) {
                    window.mc4wp.listeners.push({event: event, callback: callback});
                }
            }
        }
    }
})();
(function (body) {
    'use strict';
    body.className = body.className.replace(/\btribe-no-js\b/, 'tribe-js');
})(document.body);
var tribe_l10n_datatables = {
    "aria": {
        "sort_ascending": ": activate to sort column ascending",
        "sort_descending": ": activate to sort column descending"
    },
    "length_menu": "Show _MENU_ entries",
    "empty_table": "No data available in table",
    "info": "Showing _START_ to _END_ of _TOTAL_ entries",
    "info_empty": "Showing 0 to 0 of 0 entries",
    "info_filtered": "(filtered from _MAX_ total entries)",
    "zero_records": "No matching records found",
    "search": "Search:",
    "all_selected_text": "All items on this page were selected. ",
    "select_all_link": "Select all pages",
    "clear_selection": "Clear Selection.",
    "pagination": {"all": "All", "next": "Next", "previous": "Previous"},
    "select": {"rows": {"0": "", "_": ": Selected %d rows", "1": ": Selected 1 row"}},
    "datepicker": {
        "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
        "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "monthNamesShort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "monthNamesMin": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "nextText": "Next",
        "prevText": "Prev",
        "currentText": "Today",
        "closeText": "Done",
        "today": "Today",
        "clear": "Clear"
    }
};
(function () {
    function addEventListener(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, handler);
        }
    }

    function maybePrefixUrlField() {
        if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
            this.value = "http://" + this.value;
        }
    }

    var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
    if (urlFields && urlFields.length > 0) {
        for (var j = 0; j < urlFields.length; j++) {
            addEventListener(urlFields[j], 'blur', maybePrefixUrlField);
        }
    }
    var testInput = document.createElement('input');
    testInput.setAttribute('type', 'date');
    if (testInput.type !== 'date') {
        var dateFields = document.querySelectorAll('.mc4wp-form input[type="date"]');
        for (var i = 0; i < dateFields.length; i++) {
            if (!dateFields[i].placeholder) {
                dateFields[i].placeholder = 'YYYY-MM-DD';
            }
            if (!dateFields[i].pattern) {
                dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
            }
        }
    }
})();
var c = document.body.className;
c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
document.body.className = c;
var wc_product_block_data = JSON.parse(decodeURIComponent('%7B%22min_columns%22%3A1%2C%22max_columns%22%3A6%2C%22default_columns%22%3A3%2C%22min_rows%22%3A1%2C%22max_rows%22%3A6%2C%22default_rows%22%3A1%2C%22thumbnail_size%22%3A360%2C%22placeholderImgSrc%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fwp-content%5C%2Fuploads%5C%2Fwoocommerce-placeholder.png%22%2C%22min_height%22%3A500%2C%22default_height%22%3A500%2C%22isLargeCatalog%22%3Afalse%2C%22limitTags%22%3Afalse%2C%22hasTags%22%3Atrue%2C%22productCategories%22%3A%5B%7B%22term_id%22%3A309%2C%22name%22%3A%22Broadband%22%2C%22slug%22%3A%22broadband%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A309%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A2%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fproduct-category%5C%2Fbroadband%5C%2F%22%7D%2C%7B%22term_id%22%3A303%2C%22name%22%3A%22Connections%22%2C%22slug%22%3A%22connections%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A303%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A6%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fproduct-category%5C%2Fconnections%5C%2F%22%7D%2C%7B%22term_id%22%3A253%2C%22name%22%3A%22High-speed%20WiFi%22%2C%22slug%22%3A%22high-speed-wifi%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A253%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22Integer%20sagittis%20nisi%20nec%20tortor%20fermentum%20aliquet.%20Integer%20non%20neque.%22%2C%22parent%22%3A0%2C%22count%22%3A1%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fproduct-category%5C%2Fhigh-speed-wifi%5C%2F%22%7D%2C%7B%22term_id%22%3A254%2C%22name%22%3A%22Satelite%20TV%22%2C%22slug%22%3A%22satelite-tv%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A254%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22Integer%20sagittis%20nisi%20nec%20tortor%20fermentum%20aliquet.%20Integer%20non%20neque.%22%2C%22parent%22%3A0%2C%22count%22%3A8%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fproduct-category%5C%2Fsatelite-tv%5C%2F%22%7D%2C%7B%22term_id%22%3A243%2C%22name%22%3A%22Streaming%22%2C%22slug%22%3A%22streaming%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A243%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22Integer%20sagittis%20nisi%20nec%20tortor%20fermentum%20aliquet.%20Integer%20non%20neque.%22%2C%22parent%22%3A0%2C%22count%22%3A8%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fproduct-category%5C%2Fstreaming%5C%2F%22%7D%2C%7B%22term_id%22%3A209%2C%22name%22%3A%22Uncategorized%22%2C%22slug%22%3A%22uncategorized%22%2C%22term_group%22%3A0%2C%22term_taxonomy_id%22%3A209%2C%22taxonomy%22%3A%22product_cat%22%2C%22description%22%3A%22%22%2C%22parent%22%3A0%2C%22count%22%3A0%2C%22filter%22%3A%22raw%22%2C%22link%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2Fproduct-category%5C%2Funcategorized%5C%2F%22%7D%5D%2C%22homeUrl%22%3A%22http%3A%5C%2F%5C%2Fmirasat.like-themes.com%5C%2F%22%7D'));
String.prototype.className = function () {
    return "string" != typeof this && !this instanceof String || "function" != typeof this.replace ? this : this.replace(".", "")
}, String.prototype.varName = function () {
    return "string" != typeof this && !this instanceof String || "function" != typeof this.replace ? this : this.replace("-", "_")
};
var tribe = tribe || {};
var tribe = tribe || {};
tribe.tooltip = tribe.tooltip || {}, function (t, e) {
    "use strict";
    var o = t(document);
    e.selectors = {tooltip: ".tribe-tooltip", active: "active"}, e.setup = function () {
        o.on("click", e.selectors.tooltip, e.onClick)
    }, e.onClick = function () {
        var o = t(this).closest(e.selectors.tooltip), i = !o.hasClass(e.selectors.active);
        t(e.selectors.tooltip).each(function () {
            t(this).removeClass(e.selectors.active).attr("aria-expanded", !1)
        }), i && t(o).addClass(e.selectors.active).attr("aria-expanded", !0)
    }, o.ready(e.setup)
}(jQuery, tribe.tooltip);
jQuery(document).ready(function ($) {
    $('.mpp-gutenberg-tab').on('click', function (e) {
        $('.mpp-author-tabs li').removeClass('active');
        $(this).addClass('active');
        var $tabs = $('.mpp-tab').removeClass('mpp-tab-active');
        var new_tab = $(this).data('tab');
        $('.' + new_tab).addClass('mpp-tab-active');
    });
});
var wpcf7 = {
    "apiSettings": {
        "root": "http:\/\/mirasat.like-themes.com\/wp-json\/contact-form-7\/v1",
        "namespace": "contact-form-7\/v1"
    }, "cached": "1"
};
(function ($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({cached: 0, inputs: []}, wpcf7);
    $(function () {
        wpcf7.supportHtml5 = (function () {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function (index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function () {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function (form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function (form) {
        var $form = $(form);
        $form.submit(function (event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder].placeheld', $form).each(function (i, n) {
                    $(n).val('').removeClass('placeheld');
                });
            }
            if (typeof window.FormData === 'function') {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function () {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function () {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function () {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function () {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function () {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function () {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({min: $(this).attr('min'), max: $(this).attr('max'), step: $(this).attr('step')});
            });
        }
        $('.wpcf7-character-count', $form).each(function () {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function (target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function () {
                updateCount(this);
                $(this).keyup(function () {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function () {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function (form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {id: $form.closest('div.wpcf7').attr('id'), status: 'init', inputs: [], formData: formData};
        $.each($form.serializeArray(), function (i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({name: owner + '-free-text', value: field.value});
            } else if (field.name.match(/^_/)) {
            } else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function (data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case'validation_failed':
                    $.each(data.invalidFields, function (i, n) {
                        $(n.into, $form).each(function () {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-'
                        + data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function () {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find('[placeholder].placeheld').each(function (i, n) {
                    $(n).val($(n).attr('placeholder'));
                });
            }
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function (i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function (data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function (xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function (target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {bubbles: true, detail: detail});
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function (form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function () {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function (target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function (target) {
                $(target).not(':hidden').animate({opacity: 0}, 'fast', function () {
                    $(this).css({'z-index': -100});
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
                fadeOut(this);
            });
            $target.on('focus', ':input', function () {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function (form, data) {
        var $form = $(form);
        var refillCaptcha = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function ($form, items) {
            $.each(items, function (i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function (xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function (data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function (form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function (path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
(function ($) {
    var ColorPicker = function () {
        var
            ids = {}, inAction, charMin = 65, visible,
            tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
            defaults = {
                eventName: 'click', onShow: function () {
                }, onBeforeShow: function () {
                }, onHide: function () {
                }, onChange: function () {
                }, onSubmit: function () {
                }, color: 'ff0000', livePreview: true, flat: false
            }, fillRGBFields = function (hsb, cal) {
                var rgb = HSBToRGB(hsb);
                $(cal).data('colorpicker').fields.eq(1).val(rgb.r).end().eq(2).val(rgb.g).end().eq(3).val(rgb.b).end();
            }, fillHSBFields = function (hsb, cal) {
                $(cal).data('colorpicker').fields.eq(4).val(hsb.h).end().eq(5).val(hsb.s).end().eq(6).val(hsb.b).end();
            }, fillHexFields = function (hsb, cal) {
                $(cal).data('colorpicker').fields.eq(0).val(HSBToHex(hsb)).end();
            }, setSelector = function (hsb, cal) {
                $(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
                $(cal).data('colorpicker').selectorIndic.css({
                    left: parseInt(150 * hsb.s / 100, 10),
                    top: parseInt(150 * (100 - hsb.b) / 100, 10)
                });
            }, setHue = function (hsb, cal) {
                $(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h / 360, 10));
            }, setCurrentColor = function (hsb, cal) {
                $(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
            }, setNewColor = function (hsb, cal) {
                $(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
            }, keyDown = function (ev) {
                var pressedKey = ev.charCode || ev.keyCode || -1;
                if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
                    return false;
                }
                var cal = $(this).parent().parent();
                if (cal.data('colorpicker').livePreview === true) {
                    change.apply(this);
                }
            }, change = function (ev) {
                var cal = $(this).parent().parent(), col;
                if (this.parentNode.className.indexOf('_hex') > 0) {
                    cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
                } else if (this.parentNode.className.indexOf('_hsb') > 0) {
                    cal.data('colorpicker').color = col = fixHSB({
                        h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
                        s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
                        b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
                    });
                } else {
                    cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
                        r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
                        g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
                        b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
                    }));
                }
                if (ev) {
                    fillRGBFields(col, cal.get(0));
                    fillHexFields(col, cal.get(0));
                    fillHSBFields(col, cal.get(0));
                }
                setSelector(col, cal.get(0));
                setHue(col, cal.get(0));
                setNewColor(col, cal.get(0));
                cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
            }, blur = function (ev) {
                var cal = $(this).parent().parent();
                cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
            }, focus = function () {
                charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
                $(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
                $(this).parent().addClass('colorpicker_focus');
            }, downIncrement = function (ev) {
                var field = $(this).parent().find('input').focus();
                var current = {
                    el: $(this).parent().addClass('colorpicker_slider'),
                    max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
                    y: ev.pageY,
                    field: field,
                    val: parseInt(field.val(), 10),
                    preview: $(this).parent().parent().data('colorpicker').livePreview
                };
                $(document).bind('mouseup', current, upIncrement);
                $(document).bind('mousemove', current, moveIncrement);
            }, moveIncrement = function (ev) {
                ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
                if (ev.data.preview) {
                    change.apply(ev.data.field.get(0), [true]);
                }
                return false;
            }, upIncrement = function (ev) {
                change.apply(ev.data.field.get(0), [true]);
                ev.data.el.removeClass('colorpicker_slider').find('input').focus();
                $(document).unbind('mouseup', upIncrement);
                $(document).unbind('mousemove', moveIncrement);
                return false;
            }, downHue = function (ev) {
                var current = {cal: $(this).parent(), y: $(this).offset().top};
                current.preview = current.cal.data('colorpicker').livePreview;
                $(document).bind('mouseup', current, upHue);
                $(document).bind('mousemove', current, moveHue);
                $(document).bind('mousedown', current, moveHue);
            }, moveHue = function (ev) {
                change.apply(ev.data.cal.data('colorpicker').fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, (ev.pageY - ev.data.y)))) / 150, 10)).get(0), [ev.data.preview]);
                return false;
            }, upHue = function (ev) {
                fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                $(document).unbind('mouseup', upHue);
                $(document).unbind('mousemove', moveHue);
                $(document).unbind('mousedown', moveHue);
                return false;
            }, downSelector = function (ev) {
                var current = {cal: $(this).parent(), pos: $(this).offset()};
                current.preview = current.cal.data('colorpicker').livePreview;
                $(document).bind('mouseup', current, upSelector);
                $(document).bind('mousemove', current, moveSelector);
                $(document).bind('mousedown', current, moveSelector);
            }, moveSelector = function (ev) {
                change.apply(ev.data.cal.data('colorpicker').fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, (ev.pageY - ev.data.pos.top)))) / 150, 10)).end().eq(5).val(parseInt(100 * (Math.max(0, Math.min(150, (ev.pageX - ev.data.pos.left)))) / 150, 10)).get(0), [ev.data.preview]);
                return false;
            }, upSelector = function (ev) {
                fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
                $(document).unbind('mouseup', upSelector);
                $(document).unbind('mousemove', moveSelector);
                $(document).unbind('mousedown', moveSelector);
                return false;
            }, enterSubmit = function (ev) {
                $(this).addClass('colorpicker_focus');
            }, leaveSubmit = function (ev) {
                $(this).removeClass('colorpicker_focus');
            }, clickSubmit = function (ev) {
                var cal = $(this).parent();
                var col = cal.data('colorpicker').color;
                cal.data('colorpicker').origColor = col;
                setCurrentColor(col, cal.get(0));
                cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
            }, show = function (ev) {
                var cal = $('#' + $(this).data('colorpickerId'));
                cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
                var pos = $(this).offset();
                var viewPort = getViewport();
                var top = pos.top + this.offsetHeight;
                var left = pos.left;
                if (top + 176 > viewPort.t + viewPort.h) {
                    top -= this.offsetHeight + 176;
                }
                if (left + 356 > viewPort.l + viewPort.w) {
                    left -= 356;
                }
                cal.css({left: left + 'px', top: top + 'px'});
                if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
                    cal.show();
                }
                $(document).bind('mousedown', {cal: cal}, hide);
                return false;
            }, hide = function (ev) {
                if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
                    if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
                        ev.data.cal.hide();
                    }
                    $(document).unbind('mousedown', hide);
                }
            }, isChildOf = function (parentEl, el, container) {
                if (parentEl == el) {
                    return true;
                }
                if (parentEl.contains) {
                    return parentEl.contains(el);
                }
                if (parentEl.compareDocumentPosition) {
                    return !!(parentEl.compareDocumentPosition(el) & 16);
                }
                var prEl = el.parentNode;
                while (prEl && prEl != container) {
                    if (prEl == parentEl)
                        return true;
                    prEl = prEl.parentNode;
                }
                return false;
            }, getViewport = function () {
                var m = document.compatMode == 'CSS1Compat';
                return {
                    l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
                    t: window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
                    w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
                    h: window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
                };
            }, fixHSB = function (hsb) {
                return {
                    h: Math.min(360, Math.max(0, hsb.h)),
                    s: Math.min(100, Math.max(0, hsb.s)),
                    b: Math.min(100, Math.max(0, hsb.b))
                };
            }, fixRGB = function (rgb) {
                return {
                    r: Math.min(255, Math.max(0, rgb.r)),
                    g: Math.min(255, Math.max(0, rgb.g)),
                    b: Math.min(255, Math.max(0, rgb.b))
                };
            }, fixHex = function (hex) {
                var len = 6 - hex.length;
                if (len > 0) {
                    var o = [];
                    for (var i = 0; i < len; i++) {
                        o.push('0');
                    }
                    o.push(hex);
                    hex = o.join('');
                }
                return hex;
            }, HexToRGB = function (hex) {
                var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
                return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
            }, HexToHSB = function (hex) {
                return RGBToHSB(HexToRGB(hex));
            }, RGBToHSB = function (rgb) {
                var hsb = {h: 0, s: 0, b: 0};
                var min = Math.min(rgb.r, rgb.g, rgb.b);
                var max = Math.max(rgb.r, rgb.g, rgb.b);
                var delta = max - min;
                hsb.b = max;
                if (max != 0) {
                }
                hsb.s = max != 0 ? 255 * delta / max : 0;
                if (hsb.s != 0) {
                    if (rgb.r == max) {
                        hsb.h = (rgb.g - rgb.b) / delta;
                    } else if (rgb.g == max) {
                        hsb.h = 2 + (rgb.b - rgb.r) / delta;
                    } else {
                        hsb.h = 4 + (rgb.r - rgb.g) / delta;
                    }
                } else {
                    hsb.h = -1;
                }
                hsb.h *= 60;
                if (hsb.h < 0) {
                    hsb.h += 360;
                }
                hsb.s *= 100 / 255;
                hsb.b *= 100 / 255;
                return hsb;
            }, HSBToRGB = function (hsb) {
                var rgb = {};
                var h = Math.round(hsb.h);
                var s = Math.round(hsb.s * 255 / 100);
                var v = Math.round(hsb.b * 255 / 100);
                if (s == 0) {
                    rgb.r = rgb.g = rgb.b = v;
                } else {
                    var t1 = v;
                    var t2 = (255 - s) * v / 255;
                    var t3 = (t1 - t2) * (h % 60) / 60;
                    if (h == 360) h = 0;
                    if (h < 60) {
                        rgb.r = t1;
                        rgb.b = t2;
                        rgb.g = t2 + t3
                    } else if (h < 120) {
                        rgb.g = t1;
                        rgb.b = t2;
                        rgb.r = t1 - t3
                    } else if (h < 180) {
                        rgb.g = t1;
                        rgb.r = t2;
                        rgb.b = t2 + t3
                    } else if (h < 240) {
                        rgb.b = t1;
                        rgb.r = t2;
                        rgb.g = t1 - t3
                    } else if (h < 300) {
                        rgb.b = t1;
                        rgb.g = t2;
                        rgb.r = t2 + t3
                    } else if (h < 360) {
                        rgb.r = t1;
                        rgb.g = t2;
                        rgb.b = t1 - t3
                    } else {
                        rgb.r = 0;
                        rgb.g = 0;
                        rgb.b = 0
                    }
                }
                return {r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b)};
            }, RGBToHex = function (rgb) {
                var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
                $.each(hex, function (nr, val) {
                    if (val.length == 1) {
                        hex[nr] = '0' + val;
                    }
                });
                return hex.join('');
            }, HSBToHex = function (hsb) {
                return RGBToHex(HSBToRGB(hsb));
            }, restoreOriginal = function () {
                var cal = $(this).parent();
                var col = cal.data('colorpicker').origColor;
                cal.data('colorpicker').color = col;
                fillRGBFields(col, cal.get(0));
                fillHexFields(col, cal.get(0));
                fillHSBFields(col, cal.get(0));
                setSelector(col, cal.get(0));
                setHue(col, cal.get(0));
                setNewColor(col, cal.get(0));
            };
        return {
            init: function (opt) {
                opt = $.extend({}, defaults, opt || {});
                if (typeof opt.color == 'string') {
                    opt.color = HexToHSB(opt.color);
                } else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
                    opt.color = RGBToHSB(opt.color);
                } else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
                    opt.color = fixHSB(opt.color);
                } else {
                    return this;
                }
                return this.each(function () {
                    if (!$(this).data('colorpickerId')) {
                        var options = $.extend({}, opt);
                        options.origColor = opt.color;
                        var id = 'collorpicker_' + parseInt(Math.random() * 1000);
                        $(this).data('colorpickerId', id);
                        var cal = $(tpl).attr('id', id);
                        if (options.flat) {
                            cal.appendTo(this).show();
                        } else {
                            cal.appendTo(document.body);
                        }
                        options.fields = cal.find('input').bind('keyup', keyDown).bind('change', change).bind('blur', blur).bind('focus', focus);
                        cal.find('span').bind('mousedown', downIncrement).end().find('>div.colorpicker_current_color').bind('click', restoreOriginal);
                        options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
                        options.selectorIndic = options.selector.find('div div');
                        options.el = this;
                        options.hue = cal.find('div.colorpicker_hue div');
                        cal.find('div.colorpicker_hue').bind('mousedown', downHue);
                        options.newColor = cal.find('div.colorpicker_new_color');
                        options.currentColor = cal.find('div.colorpicker_current_color');
                        cal.data('colorpicker', options);
                        cal.find('div.colorpicker_submit').bind('mouseenter', enterSubmit).bind('mouseleave', leaveSubmit).bind('click', clickSubmit);
                        fillRGBFields(options.color, cal.get(0));
                        fillHSBFields(options.color, cal.get(0));
                        fillHexFields(options.color, cal.get(0));
                        setHue(options.color, cal.get(0));
                        setSelector(options.color, cal.get(0));
                        setCurrentColor(options.color, cal.get(0));
                        setNewColor(options.color, cal.get(0));
                        if (options.flat) {
                            cal.css({position: 'relative', display: 'block'});
                        } else {
                            $(this).bind(options.eventName, show);
                        }
                    }
                });
            }, showPicker: function () {
                return this.each(function () {
                    if ($(this).data('colorpickerId')) {
                        show.apply(this);
                    }
                });
            }, hidePicker: function () {
                return this.each(function () {
                    if ($(this).data('colorpickerId')) {
                        $('#' + $(this).data('colorpickerId')).hide();
                    }
                });
            }, setColor: function (col) {
                if (typeof col == 'string') {
                    col = HexToHSB(col);
                } else if (col.r != undefined && col.g != undefined && col.b != undefined) {
                    col = RGBToHSB(col);
                } else if (col.h != undefined && col.s != undefined && col.b != undefined) {
                    col = fixHSB(col);
                } else {
                    return this;
                }
                return this.each(function () {
                    if ($(this).data('colorpickerId')) {
                        var cal = $('#' + $(this).data('colorpickerId'));
                        cal.data('colorpicker').color = col;
                        cal.data('colorpicker').origColor = col;
                        fillRGBFields(col, cal.get(0));
                        fillHSBFields(col, cal.get(0));
                        fillHexFields(col, cal.get(0));
                        setHue(col, cal.get(0));
                        setSelector(col, cal.get(0));
                        setCurrentColor(col, cal.get(0));
                        setNewColor(col, cal.get(0));
                    }
                });
            }
        };
    }();
    $.fn.extend({
        ColorPicker: ColorPicker.init,
        ColorPickerHide: ColorPicker.hidePicker,
        ColorPickerShow: ColorPicker.showPicker,
        ColorPickerSetColor: ColorPicker.setColor
    });
})(jQuery);
"use strict";
jQuery('.lt-custom-popup').on('change keyup', '.lt-custom-field', function (el) {
    var field = jQuery(this).data('field'), val = jQuery(this).val(),
        bodyStyles = window.getComputedStyle(document.body);
    document.documentElement.style.setProperty('--' + field, val);
    document.documentElement.style.setProperty('--main-darker', ltxColorLuminance(bodyStyles.getPropertyValue('--main'), -0.05));
});
jQuery(document).on('click', '.ltx-font-selector', function (el) {
    var font = jQuery(this).data('font'), bodyStyles = window.getComputedStyle(document.body);
    console.log(jQuery(this).data('font-headers'));
    document.documentElement.style.setProperty('--font-headers', jQuery(this).data('font-headers'));
    document.documentElement.style.setProperty('--font-main', jQuery(this).data('font-main'));
});
jQuery(document).on('click', '.lt-custom-popup img', function (el) {
    jQuery('.lt-custom-popup').removeClass('closed');
});
jQuery('.lt-custom-popup').on('click', '.close', function (el) {
    jQuery('.lt-custom-popup').addClass('closed');
});
jQuery(document).on('ready', function () {
    jQuery('.lt-custom-popup').append('<div class="ltx-color-selector lt-custom-main" id="ltx-color-1" data-field="main"><div id="ltx-color-1-val"></div></div>');
    jQuery('.lt-custom-popup').append('<div class="ltx-color-selector lt-custom-second" id="ltx-color-4" data-field="second"><div id="ltx-color-4-val"></div></div>');
    jQuery('.lt-custom-popup').append('<div class="ltx-color-selector" id="ltx-color-3" data-field="gray"><div id="ltx-color-3-val"></div></div>');
    jQuery('.lt-custom-popup').append('<div class="ltx-color-selector" id="ltx-color-2" data-field="black"><div id="ltx-color-2-val"></div></div>');
    jQuery('.ltx-color-selector').each(function (i, el) {
        var field = jQuery(el).data('field'), bodyStyles = window.getComputedStyle(document.body),
            color = jQuery.trim(bodyStyles.getPropertyValue('--' + field)), elId = jQuery(el).attr('id'),
            valId = elId + '-' + 'val';
        jQuery('#' + valId).css('background-color', color);
        if (jQuery(el).hasClass('lt-custom-second') && jQuery.trim(bodyStyles.getPropertyValue('--main').toLowerCase()) == color.toLowerCase()) {
            jQuery(el).hide();
        }
        jQuery('#' + elId).ColorPicker({
            color: color, onShow: function (colpkr) {
                jQuery(colpkr).fadeIn(500);
                return false;
            }, onHide: function (colpkr) {
                jQuery(colpkr).fadeOut(500);
                return false;
            }, onChange: function (hsb, hex, rgb) {
                bodyStyles = window.getComputedStyle(document.body);
                jQuery('#' + valId).css('background-color', '#' + hex);
                document.documentElement.style.setProperty('--' + field, '#' + hex);
                document.documentElement.style.setProperty('--main-darker', ltxColorLuminance(bodyStyles.getPropertyValue('--main'), -0.15));
                document.documentElement.style.setProperty('--black-text', ltxColorLuminance(bodyStyles.getPropertyValue('--black'), 0.25));
            }
        });
    });
    var image = jQuery('.lt-custom-popup').data('image');
    jQuery('.lt-custom-popup').prepend('<span class="img"><img src="' + image + '"></span>');
    jQuery('.lt-custom-popup').prepend('<span class="close">&times;</span>');
    setTimeout(function () {
        jQuery('.lt-custom-popup').fadeIn();
    }, 2000);
});

function ltxColorLuminance(hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }
    return rgb;
};
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies, t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o, t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof (i = e({path: "/"}, t.defaults, i)).expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (m) {
                    }
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var f = "";
                    for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
                    return document.cookie = n + "=" + r + f
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                    var l = p[u].split("="), C = l.slice(1).join("=");
                    '"' === C.charAt(0) && (C = C.slice(1, -1));
                    try {
                        var g = l[0].replace(d, decodeURIComponent);
                        if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                            C = JSON.parse(C)
                        } catch (m) {
                        }
                        if (n === g) {
                            c = C;
                            break
                        }
                        n || (c[g] = C)
                    } catch (m) {
                    }
                }
                return c
            }
        }

        return t.set = t, t.get = function (e) {
            return t.call(t, e)
        }, t.getJSON = function () {
            return t.apply({json: !0}, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function (n, o) {
            t(n, "", e(o, {expires: -1}))
        }, t.withConverter = n, t
    }

    return n(function () {
    })
});
var woocommerce_params = {"ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%"};
jQuery(function (i) {
    i(".woocommerce-ordering").on("change", "select.orderby", function () {
        i(this).closest("form").submit()
    }), i("input.qty:not(.product-quantity input.qty)").each(function () {
        var e = parseFloat(i(this).attr("min"));
        0 <= e && parseFloat(i(this).val()) < e && i(this).val(e)
    });
    var o = "store_notice" + (i(".woocommerce-store-notice").data("notice-id") || "");
    "hidden" === Cookies.get(o) ? i(".woocommerce-store-notice").hide() : i(".woocommerce-store-notice").show(), i(".woocommerce-store-notice__dismiss-link").click(function (e) {
        Cookies.set(o, "hidden", {path: "/"}), i(".woocommerce-store-notice").hide(), e.preventDefault()
    }), i(document.body).on("click", function () {
        i(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
    }), i(".woocommerce-input-wrapper").on("click", function (e) {
        e.stopPropagation()
    }), i(".woocommerce-input-wrapper :input").on("keydown", function (e) {
        var o = i(this).parent().find("span.description");
        if (27 === e.which && o.length && o.is(":visible")) return o.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
    }).on("click focus", function () {
        var e = i(this).parent(), o = e.find("span.description");
        e.addClass("currentTarget"), i(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), o.length && o.is(":hidden") && o.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
    }), i.scroll_to_notices = function (e) {
        e.length && i("html, body").animate({scrollTop: e.offset().top - 100}, 1e3)
    }
});
var wc_cart_fragments_params = {
    "ajax_url": "\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
    "cart_hash_key": "wc_cart_hash_8a0e367ec0606a96357aaed8c50c9eb6",
    "fragment_name": "wc_fragments_8a0e367ec0606a96357aaed8c50c9eb6",
    "request_timeout": "5000"
};
jQuery(function (r) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0, o = wc_cart_fragments_params.cart_hash_key;
    try {
        t = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
    } catch (f) {
        t = !1
    }

    function a() {
        t && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
    }

    function s(e) {
        t && (localStorage.setItem(o, e), sessionStorage.setItem(o, e))
    }

    var e = {
        url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
        type: "POST",
        data: {time: (new Date).getTime()},
        timeout: wc_cart_fragments_params.request_timeout,
        success: function (e) {
            e && e.fragments && (r.each(e.fragments, function (e, t) {
                r(e).replaceWith(t)
            }), t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(e.fragments)), s(e.cart_hash), e.cart_hash && a()), r(document.body).trigger("wc_fragments_refreshed"))
        },
        error: function () {
            r(document.body).trigger("wc_fragments_ajax_error")
        }
    };

    function n() {
        r.ajax(e)
    }

    if (t) {
        var i = null;
        r(document.body).on("wc_fragment_refresh updated_wc_div", function () {
            n()
        }), r(document.body).on("added_to_cart removed_from_cart", function (e, t, r) {
            var n = sessionStorage.getItem(o);
            null !== n && n !== undefined && "" !== n || a(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), s(r)
        }), r(document.body).on("wc_fragments_refreshed", function () {
            clearTimeout(i), i = setTimeout(n, 864e5)
        }), r(window).on("storage onstorage", function (e) {
            o === e.originalEvent.key && localStorage.getItem(o) !== sessionStorage.getItem(o) && n()
        }), r(window).on("pageshow", function (e) {
            e.originalEvent.persisted && (r(".widget_shopping_cart_content").empty(), r(document.body).trigger("wc_fragment_refresh"))
        });
        try {
            var c = r.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
                _ = sessionStorage.getItem(o), g = Cookies.get("woocommerce_cart_hash"),
                m = sessionStorage.getItem("wc_cart_created");
            if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw"No cart_created";
            if (m) {
                var d = 1 * m + 864e5, w = (new Date).getTime();
                if (d < w) throw"Fragment expired";
                i = setTimeout(n, d - w)
            }
            if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw"No fragment";
            r.each(c, function (e, t) {
                r(e).replaceWith(t)
            }), r(document.body).trigger("wc_fragments_loaded")
        } catch (f) {
            n()
        }
    } else n();
    0 < Cookies.get("woocommerce_items_in_cart") ? r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), r(document.body).on("adding_to_cart", function () {
        r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
    }), "undefined" != typeof wp && wp.customize && wp.customize.selectiveRefresh && wp.customize.widgetsPreview && wp.customize.widgetsPreview.WidgetPartial && wp.customize.selectiveRefresh.bind("partial-content-rendered", function () {
        n()
    })
});
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
    "use strict";

    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var i = e.prototype, r = this, s = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e), s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener, o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) s.call(this, t, n[i]); else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e, i = this._getEvents();
        if ("string" === n) delete i[e]; else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o) if (o.hasOwnProperty(r)) for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function (e, n, i) {
        e[n + i] = i.handleEvent ? function () {
            var n = t(e);
            i.handleEvent.call(i, n)
        } : function () {
            var n = t(e);
            i.call(e, n)
        }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function () {
    };
    n.removeEventListener ? r = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var s = {bind: i, unbind: r};
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
}(this), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function r(e) {
        return "[object Array]" == f.call(e)
    }

    function s(e) {
        var t = [];
        if (r(e)) t = e; else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]); else t.push(e);
        return t
    }

    function o(e, t, n) {
        if (!(this instanceof o)) return new o(e, t, n);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
        var r = this;
        setTimeout(function () {
            r.check()
        })
    }

    function h(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var u = e.jQuery, c = e.console, f = Object.prototype.toString;
    o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [];
        for (var e = 0; e < this.elements.length; e++) {
            var t = this.elements[e];
            this.addElementImages(t)
        }
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (i = 0; i < s.length; i++) {
                    var o = s[i];
                    this.addElementBackgroundImages(o)
                }
            }
        }
    };
    var d = {1: !0, 9: !0, 11: !0};
    o.prototype.addElementBackgroundImages = function (e) {
        for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
            var r = i && i[1];
            r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
        }
    };
    var m = e.getComputedStyle || function (e) {
        return e.currentStyle
    };
    return o.prototype.addImage = function (e) {
        var t = new h(e);
        this.images.push(t)
    }, o.prototype.addBackground = function (e, t) {
        var n = new a(e, t);
        this.images.push(n)
    }, o.prototype.check = function () {
        function e(e, n, i) {
            setTimeout(function () {
                t.progress(e, n, i)
            })
        }

        var t = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
        for (var n = 0; n < this.images.length; n++) {
            var i = this.images[n];
            i.once("progress", e), i.check()
        }
    }, o.prototype.progress = function (e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, h.prototype = new t, h.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src))
    }, h.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, h.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("progress", this, this.img, t)
    }, h.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, h.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function () {
        n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, a.prototype = new h, a.prototype.check = function () {
        n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function () {
        n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
    }, a.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("progress", this, this.element, t)
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
            var n = new o(this, e, t);
            return n.jqDeferred.promise(u(this))
        })
    }, o.makeJQueryPlugin(), o
});
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function (a) {
    function b() {
    }

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                            var l = k[e].apply(k, g);
                            if (void 0 !== l) return l
                        } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }

        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }

    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }

    var c = document.documentElement, d = function () {
    };
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {
    };
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d, unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window), function () {
    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;) if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c, once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {listener: b, once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c) delete d[a]; else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function (a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a]) return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b
        }
    }

    var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function (a) {
    function b(a) {
        var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }

    function c() {
    }

    function d() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = g.length; c > b; b++) {
            var d = g[b];
            a[d] = 0
        }
        return a
    }

    function e(c) {
        function e() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function () {
                    var a = d ? function (a) {
                        return d(a, null)
                    } : function (a) {
                        return a.currentStyle
                    };
                    return function (b) {
                        var c = a(b);
                        return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                    }
                }(), k = c("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                    var g = document.body || document.documentElement;
                    g.appendChild(e);
                    var h = j(e);
                    l = 200 === b(h.width), g.removeChild(e)
                }
            }
        }

        function h(a) {
            if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var c = j(a);
                if ("none" === c.display) return d();
                var f = {};
                f.width = a.offsetWidth, f.height = a.offsetHeight;
                for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                    var o = g[m], p = c[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom,
                    t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom,
                    v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = h && l,
                    y = b(c.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = b(c.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
            }
        }

        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
            var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
            return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
        }

        var j, k, l, m = !1;
        return h
    }

    var f = "undefined" == typeof console ? c : function (a) {
            console.error(a)
        },
        g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
}(window), function (a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }

    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }

    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }

    var f = a.document, g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function (a) {
    function b(a, b) {
        return a[g](b)
    }

    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }

    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return !0;
        return !1
    }

    function e(a, d) {
        return c(a), b(a, d)
    }

    var f, g = function () {
        if (a.matches) return "matches";
        if (a.matchesSelector) return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c], f = e + "MatchesSelector";
            if (a[f]) return f
        }
    }();
    if (g) {
        var h = document.createElement("div"), i = b(h, "div");
        f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function (a, b) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function (a, b, c) {
    var d = {};
    d.extend = function (a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }, d.modulo = function (a, b) {
        return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function (a) {
        return "[object Array]" == e.call(a)
    }, d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a)) b = a; else if (a && "number" == typeof a.length) for (var c = 0, e = a.length; e > c; c++) b.push(a[c]); else b.push(a);
        return b
    }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b)
    } : function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1
    }, d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    } : function (a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function () {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
        }

        var b;
        return a
    }(), d.getParent = function (a, b) {
        for (; a != document.body;) if (a = a.parentNode, c(a, b)) return a
    }, d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h)) if (b) {
                c(h, b) && e.push(h);
                for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
            } else e.push(h)
        }
        return e
    }, d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b], e = b + "Timeout";
        a.prototype[b] = function () {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments, f = this;
            this[e] = setTimeout(function () {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, d.toDashed = function (a) {
        return a.replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function (c, e) {
        b(function () {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i], m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l, k), p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }, d
}), function (a, b) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function (a, b, c, d, e) {
    function f(a) {
        for (var b in a) return !1;
        return b = null, !0
    }

    function g(a, b) {
        a && (this.element = a, this.layout = b, this.position = {x: 0, y: 0}, this._create())
    }

    function h(a) {
        return a.replace(/([A-Z])/g, function (a) {
            return "-" + a.toLowerCase()
        })
    }

    var i = a.getComputedStyle, j = i ? function (a) {
        return i(a, null)
    } : function (a) {
        return a.currentStyle
    }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[k], p = ["transform", "transition", "transitionDuration", "transitionProperty"], q = function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
            var e = p[b], f = d(e);
            f && f !== e && (a[e] = f)
        }
        return a
    }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.getSize = function () {
        this.size = c(this.element)
    }, g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
            var d = q[c] || c;
            b[d] = a[c]
        }
    }, g.prototype.getPosition = function () {
        var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop,
            e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = this.layout.size,
            h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
            i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
        h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
    }, g.prototype.layoutPosition = function () {
        var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
            e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d];
        c[e] = this.getXValue(g), c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom",
            j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h];
        c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
    }, g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
        var h = a - c, i = b - d, j = {};
        j.transform = this.getTranslate(h, i), this.transition({
            to: j,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }, g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(o, this, !1))
    }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a)
    }, g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a)
    };
    var s = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    g.prototype.ontransitionend = function (a) {
        if (a.target === this.element) {
            var b = this._transn, c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this), delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, g.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b)
    };
    var t = {transitionProperty: "", transitionDuration: ""};
    return g.prototype.removeTransitionStyles = function () {
        this.css(t)
    }, g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function () {
            a.removeElem()
        }), this.hide()
    }, g.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c
    }, g.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, g.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, g
}), function (a, b) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function (a, b, c, d, e, f) {
    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var h = a.console, i = a.jQuery, j = function () {
    }, k = 0, l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
        containerStyle: {position: "relative"},
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
        e.extend(this.options, a)
    }, g.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function (a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e], h = new c(g, this);
            d.push(h)
        }
        return d
    }, g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
        return a
    }, g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
        this.getSize()
    }, g.prototype.getSize = function () {
        this.size = d(this.element)
    }, g.prototype._getMeasurement = function (a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function (a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }, g.prototype._layoutItems = function (a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d], g = this._getItemLayoutPosition(f);
                g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }, g.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }, g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function () {
        this.resizeContainer()
    }, g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
        }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }

        function d() {
            g++, g === f && c()
        }

        var e = this, f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }, g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d), i) if (this.$element = this.$element || i(this.element), b) {
            var e = i.Event(b);
            e.type = a, this.$element.trigger(e, c)
        } else this.$element.trigger(a, c)
    }, g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, g.prototype.stamp = function (a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }, g.prototype.unstamp = function (a) {
        if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d)
        }
    }, g.prototype._find = function (a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }, g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(), b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
        };
        return f
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.bindResize = function () {
        this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function () {
        function a() {
            b.resize(), delete b.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function () {
        var a = d(this.element), b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }, g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }, g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b)
    }, g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a) return d
        }
    }, g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c], g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }, g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b), b && b.length) for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f)
        }
    }, g.prototype.destroy = function () {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }, g.create = function (a, b) {
        function c() {
            g.apply(this, arguments)
        }

        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
            f.apply(this, arguments)
        }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function (a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--;) this.colYs.push(0);
        this.maxY = 0
    }, d.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0], c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter, e = this.containerWidth + this.gutter, f = e / d, g = d - e % d,
            h = g && 1 > g ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a);
        this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil",
            e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
            x: this.columnWidth * h,
            y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
        return i
    }, d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, d.prototype._manageStamp = function (a) {
        var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right,
            f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {height: this.maxY};
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth
    }, d
});
/*!
 * Masonry v2 shim
 * to maintain backwards compatibility
 * as of Masonry v3.1.2
 *
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function (a) {
    "use strict";
    var b = a.Masonry;
    b.prototype._remapV2Options = function () {
        this._remapOption("gutterWidth", "gutter"), this._remapOption("isResizable", "isResizeBound"), this._remapOption("isRTL", "isOriginLeft", function (a) {
            return !a
        });
        var a = this.options.isAnimated;
        if (void 0 !== a && (this.options.transitionDuration = a ? this.options.transitionDuration : 0), void 0 === a || a) {
            var b = this.options.animationOptions, c = b && b.duration;
            c && (this.options.transitionDuration = "string" == typeof c ? c : c + "ms")
        }
    }, b.prototype._remapOption = function (a, b, c) {
        var d = this.options[a];
        void 0 !== d && (this.options[b] = c ? c(d) : d)
    };
    var c = b.prototype._create;
    b.prototype._create = function () {
        var a = this;
        this._remapV2Options(), c.apply(this, arguments), setTimeout(function () {
            jQuery(a.element).addClass("masonry")
        }, 0)
    };
    var d = b.prototype.layout;
    b.prototype.layout = function () {
        this._remapV2Options(), d.apply(this, arguments)
    };
    var e = b.prototype.option;
    b.prototype.option = function () {
        e.apply(this, arguments), this._remapV2Options()
    };
    var f = b.prototype._itemize;
    b.prototype._itemize = function (a) {
        var b = f.apply(this, arguments);
        return jQuery(a).addClass("masonry-brick"), b
    };
    var g = b.prototype.measureColumns;
    b.prototype.measureColumns = function () {
        var a = this.options.columnWidth;
        a && "function" == typeof a && (this.getContainerWidth(), this.columnWidth = a(this.containerWidth)), g.apply(this, arguments)
    }, b.prototype.reload = function () {
        this.reloadItems.apply(this, arguments), this.layout.apply(this)
    };
    var h = b.prototype.destroy;
    b.prototype.destroy = function () {
        var a = this.getItemElements();
        jQuery(this.element).removeClass("masonry"), jQuery(a).removeClass("masonry-brick"), h.apply(this, arguments)
    }
}(window);
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = -1, o = -1, a = function (t) {
        return parseFloat(t) || 0
    }, i = function (e) {
        var o = 1, i = t(e), n = null, r = [];
        return i.each(function () {
            var e = t(this), i = e.offset().top - a(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null;
            null === s ? r.push(e) : Math.floor(Math.abs(n - i)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = i
        }), r
    }, n = function (e) {
        var o = {byRow: !0, property: "height", target: null, remove: !1};
        return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
    }, r = t.fn.matchHeight = function (e) {
        var o = n(e);
        if (o.remove) {
            var a = this;
            return this.css(o.property, ""), t.each(r._groups, function (t, e) {
                e.elements = e.elements.not(a)
            }), this
        }
        return this.length <= 1 && !o.target ? this : (r._groups.push({
            elements: this,
            options: o
        }), r._apply(this, o), this)
    };
    r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = i, r._parse = a, r._parseOptions = n, r._apply = function (e, o) {
        var s = n(o), h = t(e), l = [h], c = t(window).scrollTop(), p = t("html").outerHeight(!0),
            d = h.parents().filter(":hidden");
        return d.each(function () {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
            var e = t(this), o = e.css("display");
            "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), l = i(h), h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })), t.each(l, function (e, o) {
            var i = t(o), n = 0;
            if (s.target) n = s.target.outerHeight(!1); else {
                if (s.byRow && i.length <= 1) return void i.css(s.property, "");
                i.each(function () {
                    var e = t(this), o = e.attr("style"), a = e.css("display");
                    "inline-block" !== a && "flex" !== a && "inline-flex" !== a && (a = "block");
                    var i = {display: a};
                    i[s.property] = "", e.css(i), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                })
            }
            i.each(function () {
                var e = t(this), o = 0;
                s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += a(e.css("border-top-width")) + a(e.css("border-bottom-width")), o += a(e.css("padding-top")) + a(e.css("padding-bottom"))), e.css(s.property, n - o + "px"))
            })
        }), d.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)), this
    }, r._applyDataApi = function () {
        var e = {};
        t("[data-match-height], [data-mh]").each(function () {
            var o = t(this), a = o.attr("data-mh") || o.attr("data-match-height");
            a in e ? e[a] = e[a].add(o) : e[a] = o
        }), t.each(e, function () {
            this.matchHeight(!0)
        })
    };
    var s = function (e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function (a, i) {
        if (i && "resize" === i.type) {
            var n = t(window).width();
            if (n === e) return;
            e = n
        }
        a ? o === -1 && (o = setTimeout(function () {
            s(i), o = -1
        }, r._throttle)) : s(i)
    }, t(r._applyDataApi), t(window).bind("load", function (t) {
        r._update(!1, t)
    }), t(window).bind("resize orientationchange", function (t) {
        r._update(!0, t)
    })
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var o = !1, t = !1, r = 0, i = 2e3, s = 0, n = e, l = document, a = window, c = n(a), d = [],
        u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
        h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
    if (u) a.cancelAnimationFrame || (h = function (e) {
    }); else {
        var p = 0;
        u = function (e, o) {
            var t = (new Date).getTime(), r = Math.max(0, 16 - (t - p)), i = a.setTimeout(function () {
                e(t + r)
            }, r);
            return p = t + r, i
        }, h = function (e) {
            a.clearTimeout(e)
        }
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || !1, f = Date.now || function () {
        return (new Date).getTime()
    }, g = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 27,
        touchbehavior: !1,
        emulatetouch: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {top: 0, right: 0, left: 0, bottom: 0},
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function () {
            var e = l.currentScript || function () {
                var e = l.getElementsByTagName("script");
                return !!e.length && e[e.length - 1]
            }(), o = e ? e.src.split("?")[0] : "";
            return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1,
        enableobserver: !0,
        scrollbarid: !1
    }, v = !1, w = function () {
        if (v) return v;
        var e = l.createElement("DIV"), o = e.style, t = navigator.userAgent, r = navigator.platform, i = {};
        return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
            for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++) if (void 0 !== o[e[t]]) {
                i.trstyle = e[t];
                break
            }
            i.hastransform = !!i.trstyle
        }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
            i.transitionend = !1;
            for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++) if (e[s] in o) {
                i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
                break
            }
            i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle
        }(), i.cursorgrabvalue = function () {
            var e = ["grab", "-webkit-grab", "-moz-grab"];
            (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
            for (var t = 0, r = e.length; t < r; t++) {
                var s = e[t];
                if (o.cursor = s, o.cursor == s) return s
            }
            return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
        }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i
    }, b = function (e, p) {
        function v() {
            var e = T.doc.css(P.trstyle);
            return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }

        function b() {
            var e = T.win;
            if ("zIndex" in e) return e.zIndex();
            for (; e.length > 0;) {
                if (9 == e[0].nodeType) return !1;
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 !== o) return parseInt(o);
                e = e.parent()
            }
            return !1
        }

        function x(e, o, t) {
            var r = e.css(o), i = parseFloat(r);
            if (isNaN(i)) {
                var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                return T.isie8 && i && (i += 1), s ? i : 0
            }
            return i
        }

        function S(e, o, t, r) {
            T._bind(e, o, function (r) {
                var i = {
                    original: r = r || a.event,
                    target: r.target || r.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function () {
                        return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
                    },
                    stopImmediatePropagation: function () {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                    }
                };
                return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
            }, r)
        }

        function z(e, o, t, r) {
            T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
            var i = f() - D;
            if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
                if (r) if (e < 0) {
                    if (T.getScrollLeft() >= T.page.maxw) return !0
                } else if (T.getScrollLeft() <= 0) return !0;
                var s = e > 0 ? 1 : -1;
                X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e
            }
            if (o) {
                if (function () {
                    var e = T.getScrollTop();
                    if (o < 0) {
                        if (e >= T.page.maxh) return !0
                    } else if (e <= 0) return !0
                }()) {
                    if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
                    var n = T.view.h >> 1;
                    T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0
                }
                var l = o > 0 ? 1 : -1;
                B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o
            }
            (o || e) && T.synched("relativexy", function () {
                var e = T.lastdeltay + T.newscrolly;
                T.lastdeltay = 0;
                var o = T.lastdeltax + T.newscrollx;
                T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
            })
        }

        function k(e, o, t) {
            var r, i;
            return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()))
        }

        var T = this;
        this.version = "3.7.6", this.name = "nicescroll", this.me = p;
        var E = n("body"), M = this.opt = {doc: E, win: !1};
        if (n.extend(M, g), M.snapbackspeed = 80, e) for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
        if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
            x: 0,
            y: 0
        }, this.scrollratio = {x: 0, y: 0}, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
            var C = this.win[0] == a ? this.body : this.win,
                N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
            "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
        } else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;
        if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid; else do {
            this.id = "ascrail" + i++
        } while (l.getElementById(this.id));
        this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
        var P = n.extend({}, this.detected);
        this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
            T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
                h: u(function () {
                    T.delaylist[e].fn.call(T), T.delaylist[e] = !1
                }, t)
            }, o.call(T)), T.delaylist[e].fn = o)
        }, this.synched = function (e, o) {
            T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
                T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
            }))
        }, this.unsynched = function (e) {
            T.synclist[e] && (T.synclist[e] = !1)
        }, this.css = function (e, o) {
            for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
        }, this.scrollTop = function (e) {
            return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
        }, this.scrollLeft = function (e) {
            return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
        };
        var R = function (e, o, t, r, i, s, n) {
            this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e
        };
        if (R.prototype = {
            B2: function (e) {
                return 3 * (1 - e) * (1 - e) * e
            }, B3: function (e) {
                return 3 * (1 - e) * e * e
            }, B4: function (e) {
                return e * e * e
            }, getPos: function () {
                return (f() - this.ts) / this.spd
            }, getNow: function () {
                var e = (f() - this.ts) / this.spd, o = this.B2(e) + this.B3(e) + this.B4(e);
                return e >= 1 ? this.ed : this.st + this.df * o | 0
            }, update: function (e, o) {
                return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this
            }
        }, this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            }, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
                if (!e) {
                    var o = v();
                    if (o) return 16 == o.length ? -o[13] : -o[5];
                    if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
                }
                return T.doc.translate.y
            }, this.getScrollLeft = function (e) {
                if (!e) {
                    var o = v();
                    if (o) return 16 == o.length ? -o[12] : -o[4];
                    if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
                }
                return T.doc.translate.x
            }, this.notifyScrollEvent = function (e) {
                var o = l.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o)
            };
            var _ = this.isrtlmode ? 1 : -1;
            P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
                T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
            }, this.setScrollLeft = function (e, o) {
                T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
            }) : (this.setScrollTop = function (e, o) {
                T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
            }, this.setScrollLeft = function (e, o) {
                T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
            })
        } else this.getScrollTop = function () {
            return T.docscroll.scrollTop()
        }, this.setScrollTop = function (e) {
            T.docscroll.scrollTop(e)
        }, this.getScrollLeft = function () {
            return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
        }, this.setScrollLeft = function (e) {
            return setTimeout(function () {
                if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)
            }, 1)
        };
        this.getTarget = function (e) {
            return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
        }, this.hasParent = function (e, o) {
            if (!e) return !1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
            return !1 !== t
        };
        var I = {thin: 1, medium: 3, thick: 5};
        this.getDocumentScrollOffset = function () {
            return {
                top: a.pageYOffset || l.documentElement.scrollTop,
                left: a.pageXOffset || l.documentElement.scrollLeft
            }
        }, this.getOffset = function () {
            if (T.isfixed) {
                var e = T.win.offset(), o = T.getDocumentScrollOffset();
                return e.top -= o.top, e.left -= o.left, e
            }
            var t = T.win.offset();
            if (!T.viewport) return t;
            var r = T.viewport.offset();
            return {top: t.top - r.top, left: t.left - r.left}
        }, this.updateScrollBar = function (e) {
            var o, t;
            if (T.ishwscroll) T.rail.css({height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)}), T.railh && T.railh.css({width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)}); else {
                var r = T.getOffset();
                if (o = {
                    top: r.top,
                    left: r.left - (M.railpadding.left + M.railpadding.right)
                }, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
                    top: o.top,
                    left: o.left,
                    height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
                }), T.zoom && T.zoom.css({
                    top: o.top + 1,
                    left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
                }), T.railh && !T.railslocked) {
                    o = {
                        top: r.top,
                        left: r.left
                    }, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
                    var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
                        s = o.left + x(T.win, "border-left-width");
                    T.railh.css({top: i - (M.railpadding.top + M.railpadding.bottom), left: s, width: T.railh.width})
                }
            }
        }, this.doRailClick = function (e, o, t) {
            var r, i, s, n;
            T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
        }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
            if (T.saved.css = [], P.isoperamini) return !0;
            if (P.isandroid && !("hidden" in l)) return !0;
            M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
            var e = {"overflow-y": "hidden"};
            if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
                var i = T.docscroll;
                T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {"-webkit-overflow-scrolling": "touch"});
                var d = n(l.createElement("div"));
                d.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: M.cursorwidth,
                    height: 0,
                    "background-color": M.cursorcolor,
                    border: M.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }), d.addClass("nicescroll-cursors"), T.cursor = d;
                var u = n(l.createElement("div"));
                u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
                var h, p, f = ["left", "right", "top", "bottom"];
                for (var g in f) p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
                u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
                    width: u.width + "px",
                    zIndex: T.zindex,
                    background: M.background,
                    cursor: "default"
                }), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
                var v = !1;
                !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
                    T.zoom.css("opacity", M.cursoropacitymax)
                }), T.bind(v, "mouseleave", function () {
                    T.zoom.css("opacity", M.cursoropacitymin)
                }), T.zoom = n(v), T.zoom.css({
                    cursor: "pointer",
                    zIndex: T.zindex,
                    backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0 0"
                }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
                    return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
                }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
                var w;
                if (M.horizrailenabled && (T.css(i, {overflowX: "hidden"}), (d = n(l.createElement("div"))).css({
                    position: "absolute",
                    top: 0,
                    height: M.cursorwidth,
                    width: 0,
                    backgroundColor: M.cursorcolor,
                    border: M.cursorborder,
                    backgroundClip: "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
                    height: w.height + "px",
                    zIndex: T.zindex,
                    background: M.background
                }), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
                    position: "fixed",
                    top: 0,
                    height: "100%"
                }), u.css(u.align ? {right: 0} : {left: 0}), T.body.append(u), T.railh && (w.css({
                    position: "fixed",
                    left: 0,
                    width: "100%"
                }), w.css(w.align ? {bottom: 0} : {top: 0}), T.body.append(w)); else {
                    if (T.ishwscroll) {
                        "static" == T.win.css("position") && T.css(T.win, {position: "relative"});
                        var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
                        n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": u.width + 4
                        }), x.append(T.zoom)), u.css({
                            position: "absolute",
                            top: 0
                        }), u.css(u.align ? {right: 0} : {left: 0}), x.append(u), w && (w.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }), w.css(w.align ? {bottom: 0} : {top: 0}), x.append(w))
                    } else {
                        T.isfixed = "fixed" == T.win.css("position");
                        var S = T.isfixed ? "fixed" : "absolute";
                        T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {position: "relative"})), u.css({position: S}), T.zoom && T.zoom.css({position: S}), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({position: S}), T.body.append(w))
                    }
                    P.isios && T.css(T.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
                }
                if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({opacity: M.cursoropacitymax}), T.railh && T.railh.css({opacity: M.cursoropacitymax})) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
                    T.scrollmom = new y(T);
                    T.ontouchstart = function (e) {
                        if (T.locked) return !1;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                        if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
                            var o = T.getTarget(e);
                            if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
                            var t = "mousedown" === e.type;
                            if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                                var r = e;
                                (e = {original: e.original ? e.original : e}).clientX = r.screenX, e.clientY = r.screenY
                            }
                            if (T.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                st: T.getScrollTop(),
                                sl: T.getScrollLeft(),
                                pt: 2,
                                dl: !1,
                                tg: o
                            }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f"; else {
                                var i = {w: c.width(), h: c.height()}, s = T.getContentSize(), l = s.h - i.h,
                                    a = s.w - i.w;
                                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
                            }
                            if (M.emulatetouch && T.isiframe && P.isie) {
                                var d = T.win.position();
                                T.rail.drag.x += d.left, T.rail.drag.y += d.top
                            }
                            if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                                    if (T.hasmoving) return !1;
                                    o._onclick.call(this, e)
                                }), T.cancelEvent(e)) : T.stopPropagation(e);
                                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {tg: o, click: !1})
                            }
                        }
                    }, T.ontouchend = function (e) {
                        if (!T.rail.drag) return !0;
                        if (2 == T.rail.drag.pt) {
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                            T.rail.drag = !1;
                            var o = "mouseup" === e.type;
                            if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e)
                        } else if (1 == T.rail.drag.pt) return T.onmouseup(e)
                    };
                    var z = M.emulatetouch && T.isiframe && !P.hasmousecapture, k = .3 * M.directionlockdeadzone | 0;
                    T.ontouchmove = function (e, o) {
                        if (!T.rail.drag) return !0;
                        if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
                        if (2 == T.rail.drag.pt) {
                            "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
                            var t, r;
                            if (r = t = 0, z && !o) {
                                var i = T.win.position();
                                r = -i.left, t = -i.top
                            }
                            var s = e.clientY + t, n = s - T.rail.drag.y, a = e.clientX + r, c = a - T.rail.drag.x,
                                d = T.rail.drag.st - n;
                            if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2)); else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
                            var u = T.getScrollLeft();
                            if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                                var h = Math.abs(n), p = Math.abs(c), m = M.directionlockdeadzone;
                                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
                            }
                            return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear())
                            }), T.cancelEvent(e)
                        }
                        return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
                    }, T.ontouchstartCursor = function (e, o) {
                        if (!T.rail.drag || 3 == T.rail.drag.pt) {
                            if (T.locked) return T.cancelEvent(e);
                            T.cancelScroll(), T.rail.drag = {
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                pt: 3,
                                hr: !!o
                            };
                            var t = T.getTarget(e);
                            return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {"pointer-events": "none"})), T.cancelEvent(e)
                        }
                    }, T.ontouchendCursor = function (e) {
                        if (T.rail.drag) {
                            if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
                            return T.rail.drag = !1, T.cancelEvent(e)
                        }
                    }, T.ontouchmoveCursor = function (e) {
                        if (T.rail.drag) {
                            if (3 != T.rail.drag.pt) return;
                            if (T.cursorfreezed = !0, T.rail.drag.hr) {
                                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                                var o = T.scrollvaluemaxw;
                                T.scroll.x > o && (T.scroll.x = o)
                            } else {
                                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                                var t = T.scrollvaluemax;
                                T.scroll.y > t && (T.scroll.y = t)
                            }
                            return T.synched("touchmove", function () {
                                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                            }), T.cancelEvent(e)
                        }
                    }
                }
                if (T.onmousedown = function (e, o) {
                    if (!T.rail.drag || 1 == T.rail.drag.pt) {
                        if (T.railslocked) return T.cancelEvent(e);
                        T.cancelScroll(), T.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: T.scroll.x,
                            sy: T.scroll.y,
                            pt: 1,
                            hr: o || !1
                        };
                        var t = T.getTarget(e);
                        return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {"pointer-events": "none"})), T.hasmoving = !1, T.cancelEvent(e)
                    }
                }, T.onmouseup = function (e) {
                    if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e))
                }, T.onmousemove = function (e) {
                    if (T.rail.drag) {
                        if (1 !== T.rail.drag.pt) return;
                        if (P.ischrome && 0 === e.which) return T.onmouseup(e);
                        if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
                            T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                            var o = T.scrollvaluemaxw;
                            T.scroll.x > o && (T.scroll.x = o)
                        } else {
                            T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                            var t = T.scrollvaluemax;
                            T.scroll.y > t && (T.scroll.y = t)
                        }
                        return T.synched("mousemove", function () {
                            T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                        }), T.cancelEvent(e)
                    }
                    T.checkarea = 0
                }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
                    if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)
                }, T.onclick = !P.isios && function (e) {
                    return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e))
                }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {cursor: P.cursorgrabvalue}), T.css(T.rail, {cursor: P.cursorgrabvalue})); else {
                    var L = function (e) {
                        if (T.selectiondrag) {
                            if (e) {
                                var o = T.win.outerHeight(), t = e.pageY - T.selectiondrag.top;
                                t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
                            }
                            if (0 !== T.selectiondrag.df) {
                                var r = -2 * T.selectiondrag.df / 6 | 0;
                                T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                                    L()
                                }, 50)
                            }
                        }
                    };
                    T.hasTextSelected = "getSelection" in l ? function () {
                        return l.getSelection().rangeCount > 0
                    } : "selection" in l ? function () {
                        return "None" != l.selection.type
                    } : function () {
                        return !1
                    }, T.onselectionstart = function (e) {
                        T.ispage || (T.selectiondrag = T.win.offset())
                    }, T.onselectionend = function (e) {
                        T.selectiondrag = !1
                    }, T.onselectiondrag = function (e) {
                        T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
                            L(e)
                        }, 250)
                    }
                }
                if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {"touch-action": "none"}), T.css(T.rail, {"touch-action": "none"}), T.css(T.cursor, {"touch-action": "none"}), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {"-ms-touch-action": "none"}), T.css(T.rail, {"-ms-touch-action": "none"}), T.css(T.cursor, {"-ms-touch-action": "none"}), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
                    e.preventDefault()
                }), T.bind(T.cursor, "contextmenu", function (e) {
                    e.preventDefault()
                })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({cursor: "default"}), T.railh && T.railh.css({cursor: "default"}), T.jqbind(T.rail, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible")) return !1;
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.rail, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
                    T.doRailClick(e, !1, !1)
                }), T.bind(T.rail, "dblclick", function (e) {
                    T.doRailClick(e, !0, !1)
                }), T.bind(T.cursor, "click", function (e) {
                    T.cancelEvent(e)
                }), T.bind(T.cursor, "dblclick", function (e) {
                    T.cancelEvent(e)
                })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible")) return !1;
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.railh, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
                    T.doRailClick(e, !1, !0)
                }), T.bind(T.railh, "dblclick", function (e) {
                    T.doRailClick(e, !0, !0)
                }), T.bind(T.cursorh, "click", function (e) {
                    T.cancelEvent(e)
                }), T.bind(T.cursorh, "dblclick", function (e) {
                    T.cancelEvent(e)
                })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
                    T.ontouchstartCursor(e, !0)
                }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
                    T.onmousedown(e, !0)
                }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
                    e.preventDefault()
                }), T.railh && T.bind(T.railh, "mousedown", function (e) {
                    e.preventDefault()
                }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
                    T.onmousedown(e, !0)
                }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.zoom, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({tabindex: ++r}), T.bind(T.win, "focus", function (e) {
                    o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
                }), T.bind(T.win, "blur", function (e) {
                    o = !1, T.hasfocus = !1
                }), T.bind(T.win, "mouseenter", function (e) {
                    t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
                }), T.bind(T.win, "mouseleave", function (e) {
                    t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
                })), T.onkeypress = function (e) {
                    if (T.railslocked && 0 === T.page.maxh) return !0;
                    e = e || a.event;
                    var r = T.getTarget(e);
                    if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
                    if (n(r).attr("contenteditable")) return !0;
                    if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
                        var i = e.keyCode;
                        if (T.railslocked && 27 != i) return T.cancelEvent(e);
                        var s = e.ctrlKey || !1, l = e.shiftKey || !1, c = !1;
                        switch (i) {
                            case 38:
                            case 63233:
                                T.doScrollBy(72), c = !0;
                                break;
                            case 40:
                            case 63235:
                                T.doScrollBy(-72), c = !0;
                                break;
                            case 37:
                            case 63232:
                                T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                                break;
                            case 39:
                            case 63234:
                                T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                                break;
                            case 33:
                            case 63276:
                                T.doScrollBy(T.view.h), c = !0;
                                break;
                            case 34:
                            case 63277:
                                T.doScrollBy(-T.view.h), c = !0;
                                break;
                            case 36:
                            case 63273:
                                T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                                break;
                            case 35:
                            case 63275:
                                T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                                break;
                            case 32:
                                M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                                break;
                            case 27:
                                T.zoomactive && (T.doZoom(), c = !0)
                        }
                        if (c) return T.cancelEvent(e)
                    }
                }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
                    (e.ctrlKey || !1) && (T.wheelprevented = !0)
                }), T.bind(l, "keyup", function (e) {
                    e.ctrlKey || !1 || (T.wheelprevented = !1)
                }), T.bind(a, "blur", function (e) {
                    T.wheelprevented = !1
                }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
                    var C = T.win.attr("style"), N = parseFloat(T.win.css("width")) + 1;
                    T.win.css("width", N), T.synched("chromefix", function () {
                        T.win.attr("style", C)
                    })
                }
                if (T.onAttributeChange = function (e) {
                    T.lazyResize(T.isieold ? 250 : 30)
                }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
                    if (e.forEach(function (e) {
                        if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                    }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30)
                }), T.observerbody.observe(l.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })), !T.ispage && !T.haswrapper)) {
                    var R = T.win[0];
                    !1 !== m ? (T.observer = new m(function (e) {
                        e.forEach(T.onAttributeChange)
                    }), T.observer.observe(R, {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), T.observerremover = new m(function (e) {
                        e.forEach(function (e) {
                            if (e.removedNodes.length > 0) for (var o in e.removedNodes) if (T && e.removedNodes[o] === R) return T.remove()
                        })
                    }), T.observerremover.observe(R.parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
                        e.target === R && T.remove()
                    }))
                }
                !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var _ = function () {
                    T.iframexd = !1;
                    var o;
                    try {
                        (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain
                    } catch (e) {
                        T.iframexd = !0, o = !1
                    }
                    if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;
                    if (T.forcescreen = !0, T.isiframe && (T.iframe = {
                        doc: n(o),
                        html: T.doc.contents().find("html")[0],
                        body: T.doc.contents().find("body")[0]
                    }, T.getContentSize = function () {
                        return {
                            w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
                            h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
                        }
                    }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
                        T.win.scrollTop(0), T.doc.height("");
                        var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                        T.doc.height(t)
                    }
                    T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {"-webkit-transform": "translate3d(0,0,0)"}), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
                        return T.ontouchmove(e, !0)
                    }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {cursor: P.cursorgrabvalue})), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
                };
                this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
                    _.call(T.doc[0], !1)
                }, 500), T.bind(this.doc, "load", _)
            }
        }, this.showCursor = function (e, o) {
            if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
                if (T.autohidedom && (T.autohidedom.stop().css({opacity: M.cursoropacitymax}), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
                    height: T.cursorheight,
                    top: T.scroll.y
                }), T.cursorh) {
                    var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
                    T.cursorh.css({
                        width: T.cursorwidth,
                        left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
                    }), T.cursoractive = !0
                }
                T.zoom && T.zoom.stop().css({opacity: M.cursoropacitymax})
            }
        }, this.hideCursor = function (e) {
            T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
                T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({opacity: M.cursoropacitymin}), T.zoom && T.zoom.stop().animate({opacity: M.cursoropacitymin}), T.cursoractive = !1), T.cursortimeout = 0
            }, e || M.hidecursordelay)))
        }, this.noticeCursor = function (e, o, t) {
            T.showCursor(o, t), T.rail.active || T.hideCursor(e)
        }, this.getContentSize = T.ispage ? function () {
            return {
                w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
                h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
            }
        } : T.haswrapper ? function () {
            return {w: T.doc[0].offsetWidth, h: T.doc[0].offsetHeight}
        } : function () {
            return {w: T.docscroll[0].scrollWidth, h: T.docscroll[0].scrollHeight}
        }, this.onResize = function (e, o) {
            if (!T || !T.win) return !1;
            var t = T.page.maxh, r = T.page.maxw, i = T.view.h, s = T.view.w;
            if (T.view = {
                w: T.ispage ? T.win.width() : T.win[0].clientWidth,
                h: T.ispage ? T.win.height() : T.win[0].clientHeight
            }, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
                if (T.ispage) return T;
                var n = T.win.offset();
                if (T.lastposition) {
                    var l = T.lastposition;
                    if (l.top == n.top && l.left == n.left) return T
                }
                T.lastposition = n
            }
            return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
                x: T.page.maxw / T.scrollvaluemaxw,
                y: T.page.maxh / T.scrollvaluemax
            }, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T)
        }, this.resize = T.onResize;
        var O = 0;
        this.onscreenresize = function (e) {
            clearTimeout(O);
            var o = !T.ispage && !T.haswrapper;
            o && T.hideRails(), O = setTimeout(function () {
                T && (o && T.showRails(), T.resize()), O = 0
            }, 120)
        }, this.lazyResize = function (e) {
            return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
                T && T.resize(), O = 0
            }, e), T
        }, this.jqbind = function (e, o, t) {
            T.events.push({e: e, n: o, f: t, q: !0}), n(e).on(o, t)
        }, this.mousewheel = function (e, o, t) {
            var r = "jquery" in e ? e[0] : e;
            if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1); else {
                var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
            }
        };
        var Y = !1;
        if (P.haseventlistener) {
            try {
                var H = Object.defineProperty({}, "passive", {
                    get: function () {
                        Y = !0
                    }
                });
                a.addEventListener("test", null, H)
            } catch (e) {
            }
            this.stopPropagation = function (e) {
                return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
            }, this.cancelEvent = function (e) {
                return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
            }
        } else Event.prototype.preventDefault = function () {
            this.returnValue = !1
        }, Event.prototype.stopPropagation = function () {
            this.cancelBubble = !0
        }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
            this.attachEvent("on" + e, o)
        }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
            this.detachEvent("on" + e, o)
        }, this.cancelEvent = function (e) {
            return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
        }, this.stopPropagation = function (e) {
            return (e = e || a.event) && (e.cancelBubble = !0), !1
        };
        this.delegate = function (e, o, t, r, i) {
            var s = d[o] || !1;
            s || (s = {
                a: [], l: [], f: function (e) {
                    for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--) if (!1 === (t = o[r].call(e.target, e))) return !1;
                    return t
                }
            }, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
        }, this.undelegate = function (e, o, t, r, i) {
            var s = d[o] || !1;
            if (s && s.l) for (var n = 0, l = s.l.length; n < l; n++) s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null))
        }, this.bind = function (e, o, t, r, i) {
            var s = "jquery" in e ? e[0] : e;
            T._bind(s, o, t, r || !1, i || !1)
        }, this._bind = function (e, o, t, r, i) {
            T.events.push({e: e, n: o, f: t, b: r, q: !1}), Y && i ? e.addEventListener(o, t, {
                passive: !1,
                capture: r
            }) : e.addEventListener(o, t, r || !1)
        }, this._unbind = function (e, o, t, r) {
            d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
        }, this.unbindAll = function () {
            for (var e = 0; e < T.events.length; e++) {
                var o = T.events[e];
                o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
            }
        }, this.showRails = function () {
            return T.showRail().showRailHr()
        }, this.showRail = function () {
            return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
        }, this.showRailHr = function () {
            return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
        }, this.hideRails = function () {
            return T.hideRail().hideRailHr()
        }, this.hideRail = function () {
            return T.rail.visibility = !1, T.rail.css("display", "none"), T
        }, this.hideRailHr = function () {
            return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
        }, this.show = function () {
            return T.hidden = !1, T.railslocked = !1, T.showRails()
        }, this.hide = function () {
            return T.hidden = !0, T.railslocked = !0, T.hideRails()
        }, this.toggle = function () {
            return T.hidden ? T.show() : T.hide()
        }, this.remove = function () {
            T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
            for (var e in T.delaylist) T.delaylist[e] && h(T.delaylist[e].h);
            T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
            for (var o = 0; o < T.saved.css.length; o++) {
                var t = T.saved.css[o];
                t[0].css(t[1], void 0 === t[2] ? "" : t[2])
            }
            T.saved = !1, T.me.data("__nicescroll", "");
            var r = n.nicescroll;
            r.each(function (e) {
                if (this && this.id === T.id) {
                    delete r[e];
                    for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
                    --r.length && delete r[r.length]
                }
            });
            for (var i in T) T[i] = null, delete T[i];
            T = null
        }, this.scrollstart = function (e) {
            return this.onscrollstart = e, T
        }, this.scrollend = function (e) {
            return this.onscrollend = e, T
        }, this.scrollcancel = function (e) {
            return this.onscrollcancel = e, T
        }, this.zoomin = function (e) {
            return this.onzoomin = e, T
        }, this.zoomout = function (e) {
            return this.onzoomout = e, T
        }, this.isScrollable = function (e) {
            var o = e.target ? e.target : e;
            if ("OPTION" == o.nodeName) return !0;
            for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
                var t = n(o), r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }, this.getViewport = function (e) {
            for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
                var t = n(o);
                if (/fixed|absolute/.test(t.css("position"))) return t;
                var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
                if (t.getNiceScroll().length > 0) return t;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }, this.triggerScrollStart = function (e, o, t, r, i) {
            if (T.onscrollstart) {
                var s = {
                    type: "scrollstart",
                    current: {x: e, y: o},
                    request: {x: t, y: r},
                    end: {x: T.newscrollx, y: T.newscrolly},
                    speed: i
                };
                T.onscrollstart.call(T, s)
            }
        }, this.triggerScrollEnd = function () {
            if (T.onscrollend) {
                var e = T.getScrollLeft(), o = T.getScrollTop(),
                    t = {type: "scrollend", current: {x: e, y: o}, end: {x: e, y: o}};
                T.onscrollend.call(T, t)
            }
        };
        var B = 0, X = 0, D = 0, A = 1, q = !1;
        if (this.onmousewheel = function (e) {
            if (T.wheelprevented || T.locked) return !1;
            if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
            if (T.rail.drag) return T.cancelEvent(e);
            if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
            var o = f(), t = !1;
            if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
            var r = k(e, !1, t);
            return r && (T.checkarea = 0), r
        }, this.onmousewheelhr = function (e) {
            if (!T.wheelprevented) {
                if (T.railslocked || !T.railh.scrollable) return !0;
                if (T.rail.drag) return T.cancelEvent(e);
                var o = f(), t = !1;
                return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
            }
        }, this.stop = function () {
            return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
        }, this.getTransitionSpeed = function (e) {
            return 80 + e / 72 * M.scrollspeed | 0
        }, M.smoothscroll) if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
            var j = "";
            this.resetTransition = function () {
                j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
            }, this.prepareTransition = function (e, o) {
                var t = o ? e : T.getTransitionSpeed(e), r = t + "ms";
                return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
            }, this.doScrollLeft = function (e, o) {
                var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                T.doScrollPos(e, t, o)
            }, this.doScrollTop = function (e, o) {
                var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                T.doScrollPos(t, e, o)
            }, this.cursorupdate = {
                running: !1, start: function () {
                    var e = this;
                    if (!e.running) {
                        e.running = !0;
                        var o = function () {
                            e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
                        };
                        u(o)
                    }
                }, stop: function () {
                    this.running = !1
                }
            }, this.doScrollPos = function (e, o, t) {
                var r = T.getScrollTop(), i = T.getScrollLeft();
                if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
                T.newscrolly = o, T.newscrollx = e;
                var s = T.getScrollTop(), n = T.getScrollLeft(), l = {};
                l.x = e - n, l.y = o - s;
                var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y), c = T.prepareTransition(a);
                T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
            }, this.cancelScroll = function () {
                if (!T.scrollendtrapped) return !0;
                var e = T.getScrollTop(), o = T.getScrollLeft();
                return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
            }, this.onScrollTransitionEnd = function () {
                if (T.scrollendtrapped) {
                    var e = T.getScrollTop(), o = T.getScrollLeft();
                    if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
                    T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
                }
            }
        } else this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
            T.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            var r = T.getScrollTop(), i = T.getScrollLeft();
            ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
            var s = !1;
            if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
            T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
            var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y), l = T.getTransitionSpeed(n);
            T.bzscroll = {};
            var a = s ? 1 : .58;
            T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
            f();
            var c = function () {
                if (T.scrollrunning) {
                    var e = T.bzscroll.y.getPos();
                    T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
                }
            };
            T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c))
        }, this.cancelScroll = function () {
            return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
        }; else this.doScrollLeft = function (e, o) {
            var t = T.getScrollTop();
            T.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = T.getScrollLeft();
            T.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            var r = e > T.page.maxw ? T.page.maxw : e;
            r < 0 && (r = 0);
            var i = o > T.page.maxh ? T.page.maxh : o;
            i < 0 && (i = 0), T.synched("scroll", function () {
                T.setScrollTop(i), T.setScrollLeft(r)
            })
        }, this.cancelScroll = function () {
        };
        this.doScrollBy = function (e, o) {
            z(0, e)
        }, this.doScrollLeftBy = function (e, o) {
            z(e, 0)
        }, this.doScrollTo = function (e, o) {
            var t = o ? Math.round(e * T.scrollratio.y) : e;
            t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
        }, this.checkContentSize = function () {
            var e = T.getContentSize();
            e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
        }, T.onscroll = function (e) {
            T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
                T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
            })
        }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
            if (!T.zoomactive) {
                T.zoomactive = !0, T.zoomrestore = {style: {}};
                var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                    t = T.win[0].style;
                for (var r in o) {
                    var i = o[r];
                    T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                }
                T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
                    w: T.win.outerWidth() - T.win.width(),
                    h: T.win.outerHeight() - T.win.height()
                }, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({
                    position: P.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    zIndex: s + 100,
                    margin: 0
                });
                var n = T.win.css("backgroundColor");
                return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({zIndex: s + 101}), T.zoom.css({zIndex: s + 102}), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
            }
        }, this.doZoomOut = function (e) {
            if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({"z-index": T.zindex}), T.zoom.css({"z-index": T.zindex}), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)
        }, this.doZoom = function (e) {
            return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
        }, this.resizeZoom = function () {
            if (T.zoomactive) {
                var e = T.getScrollTop();
                T.win.css({
                    width: c.width() - T.zoomrestore.padding.w + "px",
                    height: c.height() - T.zoomrestore.padding.h + "px"
                }), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
            }
        }, this.init(), n.nicescroll.push(this)
    }, y = function (e) {
        var o = this;
        this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
            o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.update = function (e, t) {
            var r = f();
            o.steptime = r - o.lasttime, o.lasttime = r;
            var i = t - o.lasty, s = e - o.lastx, n = o.nc.getScrollTop() + i, l = o.nc.getScrollLeft() + s;
            o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
        }, this.stop = function () {
            o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.doSnapy = function (e, t) {
            var r = !1;
            t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }, this.doMomentum = function (e) {
            var t = f(), r = e ? t + e : o.lasttime, i = o.nc.getScrollLeft(), s = o.nc.getScrollTop(),
                n = o.nc.page.maxh, l = o.nc.page.maxw;
            o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
            var a = r && t - r <= 60;
            (s < 0 || s > n || i < 0 || i > l) && (a = !1);
            var c = !(!o.speedy || !a) && o.speedy, d = !(!o.speedx || !a) && o.speedx;
            if (c || d) {
                var u = Math.max(16, o.steptime);
                if (u > 50) {
                    var h = u / 50;
                    o.speedx *= h, o.speedy *= h, u = 50
                }
                o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
                var p = o.lastscrollx, m = o.lastscrolly, g = function () {
                    var e = f() - t > 600 ? .04 : .02;
                    o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
                        if (o.speedx) {
                            o.nc.getScrollLeft();
                            o.chkx = p, o.nc.setScrollLeft(p)
                        }
                        if (o.speedy) {
                            o.nc.getScrollTop();
                            o.chky = m, o.nc.setScrollTop(m)
                        }
                        o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
                    }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
                };
                g()
            } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }, x = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
        }, set: function (e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this
        }
    }, e.fn.scrollTop = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
        }
        return this.each(function () {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
        })
    };
    var S = e.fn.scrollLeft;
    n.cssHooks.pageXOffset = {
        get: function (e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
        }, set: function (e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this
        }
    }, e.fn.scrollLeft = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
        }
        return this.each(function () {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
        })
    };
    var z = function (e) {
        var o = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
            return n.each(o, e), o
        }, this.push = function (e) {
            o[o.length] = e, o.length++
        }, this.eq = function (e) {
            return o[e]
        }, e) for (var t = 0; t < e.length; t++) {
            var r = n.data(e[t], "__nicescroll") || !1;
            r && (this[this.length] = r, this.length++)
        }
        return this
    };
    !function (e, o, t) {
        for (var r = 0, i = o.length; r < i; r++) t(e, o[r])
    }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function (e) {
        return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
    }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
        return void 0 !== n.data(e, "__nicescroll")
    }, n.fn.niceScroll = function (e, o) {
        void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1);
        var t = new z;
        return this.each(function () {
            var r = n(this), i = n.extend({}, o);
            if (e) {
                var s = n(e);
                i.doc = s.length > 1 ? n(e, r) : s, i.win = r
            }
            !("doc" in i) || "win" in i || (i.win = r);
            var l = r.data("__nicescroll") || !1;
            l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l)
        }), 1 === t.length ? t[0] : t
    }, a.NiceScroll = {
        getjQuery: function () {
            return e
        }
    }, n.nicescroll || (n.nicescroll = new z, n.nicescroll.options = g)
});
/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function (e, t, i, s) {
    i.swipebox = function (o, a) {
        var n, r, l = {
                useCSS: !0,
                useSVG: !0,
                initialIndexOnArray: 0,
                removeBarsOnMobile: !0,
                hideCloseButtonOnMobile: !1,
                hideBarsDelay: 3e3,
                videoMaxWidth: 1140,
                vimeoColor: "cccccc",
                beforeOpen: null,
                afterOpen: null,
                afterClose: null,
                afterMedia: null,
                nextSlide: null,
                prevSlide: null,
                loopAtEnd: !1,
                autoplayVideos: !1,
                queryStringData: {},
                toggleClassOnLoad: ""
            }, d = this, p = [], c = o.selector,
            b = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),
            u = null !== b || t.createTouch !== s || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
            h = !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            g = e.innerWidth ? e.innerWidth : i(e).width(), w = e.innerHeight ? e.innerHeight : i(e).height(), f = 0,
            m = '<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>';
        d.settings = {}, i.swipebox.close = function () {
            n.closeSlide()
        }, i.swipebox.extend = function () {
            return n
        }, d.init = function () {
            d.settings = i.extend({}, l, a), i.isArray(o) ? (p = o, n.target = i(e), n.init(d.settings.initialIndexOnArray)) : i(t).on("click", c, function (e) {
                if ("slide current" === e.target.parentNode.className) return !1;
                i.isArray(o) || (n.destroy(), r = i(c), n.actions()), p = [];
                var t, s, a;
                a || (s = "data-rel", a = i(this).attr(s)), a || (s = "rel", a = i(this).attr(s)), r = a && "" !== a && "nofollow" !== a ? i(c).filter("[" + s + '="' + a + '"]') : i(c), r.each(function () {
                    var e = null, t = null;
                    i(this).attr("title") && (e = i(this).attr("title")), i(this).attr("href") && (t = i(this).attr("href")), p.push({
                        href: t,
                        title: e
                    })
                }), t = r.index(i(this)), e.preventDefault(), e.stopPropagation(), n.target = i(e.target), n.init(t)
            })
        }, n = {
            init: function (e) {
                d.settings.beforeOpen && d.settings.beforeOpen(), this.target.trigger("swipebox-start"), i.swipebox.isOpen = !0, this.build(), this.openSlide(e), this.openMedia(e), this.preloadMedia(e + 1), this.preloadMedia(e - 1), d.settings.afterOpen && d.settings.afterOpen(e)
            }, build: function () {
                var e, t = this;
                i("body").append(m), h && d.settings.useSVG === !0 && (e = i("#swipebox-close").css("background-image"), e = e.replace("png", "svg"), i("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image": e})), b && d.settings.removeBarsOnMobile && i("#swipebox-bottom-bar, #swipebox-top-bar").remove(), i.each(p, function () {
                    i("#swipebox-slider").append('<div class="slide"></div>')
                }), t.setDim(), t.actions(), u && t.gesture(), t.keyboard(), t.animBars(), t.resize()
            }, setDim: function () {
                var t, s, o = {};
                "onorientationchange" in e ? e.addEventListener("orientationchange", function () {
                    0 === e.orientation ? (t = g, s = w) : 90 !== e.orientation && e.orientation !== -90 || (t = w, s = g)
                }, !1) : (t = e.innerWidth ? e.innerWidth : i(e).width(), s = e.innerHeight ? e.innerHeight : i(e).height()), o = {
                    width: t,
                    height: s
                }, i("#swipebox-overlay").css(o)
            }, resize: function () {
                var t = this;
                i(e).resize(function () {
                    t.setDim()
                }).resize()
            }, supportTransition: function () {
                var e,
                    i = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (e = 0; e < i.length; e++) if (t.createElement("div").style[i[e]] !== s) return i[e];
                return !1
            }, doCssTrans: function () {
                if (d.settings.useCSS && this.supportTransition()) return !0
            }, gesture: function () {
                var e, t, s, o, a, n, r = this, l = !1, d = !1, c = 10, b = 50, u = {}, h = {},
                    w = i("#swipebox-top-bar, #swipebox-bottom-bar"), m = i("#swipebox-slider");
                w.addClass("visible-bars"), r.setTimeout(), i("body").bind("touchstart", function (r) {
                    return i(this).addClass("touching"), e = i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current")), h = r.originalEvent.targetTouches[0], u.pageX = r.originalEvent.targetTouches[0].pageX, u.pageY = r.originalEvent.targetTouches[0].pageY, i("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + f + "%, 0, 0)",
                        transform: "translate3d(" + f + "%, 0, 0)"
                    }), i(".touching").bind("touchmove", function (r) {
                        if (r.preventDefault(), r.stopPropagation(), h = r.originalEvent.targetTouches[0], !d && (a = s, s = h.pageY - u.pageY, Math.abs(s) >= b || l)) {
                            var w = .75 - Math.abs(s) / m.height();
                            m.css({top: s + "px"}), m.css({opacity: w}), l = !0
                        }
                        o = t, t = h.pageX - u.pageX, n = 100 * t / g, !d && !l && Math.abs(t) >= c && (i("#swipebox-slider").css({
                            "-webkit-transition": "",
                            transition: ""
                        }), d = !0), d && (0 < t ? 0 === e ? i("#swipebox-overlay").addClass("leftSpringTouch") : (i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), i("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (f + n) + "%, 0, 0)",
                            transform: "translate3d(" + (f + n) + "%, 0, 0)"
                        })) : 0 > t && (p.length === e + 1 ? i("#swipebox-overlay").addClass("rightSpringTouch") : (i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), i("#swipebox-slider").css({
                            "-webkit-transform": "translate3d(" + (f + n) + "%, 0, 0)",
                            transform: "translate3d(" + (f + n) + "%, 0, 0)"
                        }))))
                    }), !1
                }).bind("touchend", function (e) {
                    if (e.preventDefault(), e.stopPropagation(), i("#swipebox-slider").css({
                        "-webkit-transition": "-webkit-transform 0.4s ease",
                        transition: "transform 0.4s ease"
                    }), s = h.pageY - u.pageY, t = h.pageX - u.pageX, n = 100 * t / g, l) if (l = !1, Math.abs(s) >= 2 * b && Math.abs(s) > Math.abs(a)) {
                        var p = s > 0 ? m.height() : -m.height();
                        m.animate({top: p + "px", opacity: 0}, 300, function () {
                            r.closeSlide()
                        })
                    } else m.animate({
                        top: 0,
                        opacity: 1
                    }, 300); else d ? (d = !1, t >= c && t >= o ? r.getPrev() : t <= -c && t <= o && r.getNext()) : w.hasClass("visible-bars") ? (r.clearTimeout(), r.hideBars()) : (r.showBars(), r.setTimeout());
                    i("#swipebox-slider").css({
                        "-webkit-transform": "translate3d(" + f + "%, 0, 0)",
                        transform: "translate3d(" + f + "%, 0, 0)"
                    }), i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"), i(".touching").off("touchmove").removeClass("touching")
                })
            }, setTimeout: function () {
                if (d.settings.hideBarsDelay > 0) {
                    var t = this;
                    t.clearTimeout(), t.timeout = e.setTimeout(function () {
                        t.hideBars()
                    }, d.settings.hideBarsDelay)
                }
            }, clearTimeout: function () {
                e.clearTimeout(this.timeout), this.timeout = null
            }, showBars: function () {
                var e = i("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? e.addClass("visible-bars") : (i("#swipebox-top-bar").animate({top: 0}, 500), i("#swipebox-bottom-bar").animate({bottom: 0}, 500), setTimeout(function () {
                    e.addClass("visible-bars")
                }, 1e3))
            }, hideBars: function () {
                var e = i("#swipebox-top-bar, #swipebox-bottom-bar");
                this.doCssTrans() ? e.removeClass("visible-bars") : (i("#swipebox-top-bar").animate({top: "-50px"}, 500), i("#swipebox-bottom-bar").animate({bottom: "-50px"}, 500), setTimeout(function () {
                    e.removeClass("visible-bars")
                }, 1e3))
            }, animBars: function () {
                var e = this, t = i("#swipebox-top-bar, #swipebox-bottom-bar");
                t.addClass("visible-bars"), e.setTimeout(), i("#swipebox-slider").click(function () {
                    t.hasClass("visible-bars") || (e.showBars(), e.setTimeout())
                }), i("#swipebox-bottom-bar").hover(function () {
                    e.showBars(), t.addClass("visible-bars"), e.clearTimeout()
                }, function () {
                    d.settings.hideBarsDelay > 0 && (t.removeClass("visible-bars"), e.setTimeout())
                })
            }, keyboard: function () {
                var t = this;
                i(e).bind("keyup", function (e) {
                    e.preventDefault(), e.stopPropagation(), 37 === e.keyCode ? t.getPrev() : 39 === e.keyCode ? t.getNext() : 27 === e.keyCode && t.closeSlide()
                })
            }, actions: function () {
                var e = this, t = "touchend click";
                p.length < 2 ? (i("#swipebox-bottom-bar").hide(), s === p[1] && i("#swipebox-top-bar").hide()) : (i("#swipebox-prev").bind(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.getPrev(), e.setTimeout()
                }), i("#swipebox-next").bind(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.getNext(), e.setTimeout()
                })), i("#swipebox-close").bind(t, function () {
                    e.closeSlide()
                })
            }, setSlide: function (e, t) {
                t = t || !1;
                var s = i("#swipebox-slider");
                f = 100 * -e, this.doCssTrans() ? s.css({
                    "-webkit-transform": "translate3d(" + 100 * -e + "%, 0, 0)",
                    transform: "translate3d(" + 100 * -e + "%, 0, 0)"
                }) : s.animate({left: 100 * -e + "%"}), i("#swipebox-slider .slide").removeClass("current"), i("#swipebox-slider .slide").eq(e).addClass("current"), this.setTitle(e), t && s.fadeIn(), i("#swipebox-prev, #swipebox-next").removeClass("disabled"), 0 === e ? i("#swipebox-prev").addClass("disabled") : e === p.length - 1 && d.settings.loopAtEnd !== !0 && i("#swipebox-next").addClass("disabled")
            }, openSlide: function (t) {
                i("html").addClass("swipebox-html"), u ? (i("html").addClass("swipebox-touch"), d.settings.hideCloseButtonOnMobile && i("html").addClass("swipebox-no-close-button")) : i("html").addClass("swipebox-no-touch"), i(e).trigger("resize"), this.setSlide(t, !0)
            }, preloadMedia: function (e) {
                var t = this, i = null;
                p[e] !== s && (i = p[e].href), t.isVideo(i) ? t.openMedia(e) : setTimeout(function () {
                    t.openMedia(e)
                }, 1e3)
            }, openMedia: function (e) {
                var t, o, a = this;
                return p[e] !== s && (t = p[e].href), !(e < 0 || e >= p.length) && (o = i("#swipebox-slider .slide").eq(e), void (a.isVideo(t) ? (o.html(a.getVideo(t)), d.settings.afterMedia && d.settings.afterMedia(e)) : (o.addClass("slide-loading"), a.loadMedia(t, function () {
                    o.removeClass("slide-loading"), o.html(this), d.settings.afterMedia && d.settings.afterMedia(e)
                }))))
            }, setTitle: function (e) {
                var t = null;
                i("#swipebox-title").empty(), p[e] !== s && (t = p[e].title), t ? (i("#swipebox-top-bar").show(), i("#swipebox-title").append(t)) : i("#swipebox-top-bar").hide()
            }, isVideo: function (e) {
                if (e) {
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)) return !0;
                    if (e.toLowerCase().indexOf("swipeboxvideo=1") >= 0) return !0
                }
            }, parseUri: function (e, s) {
                var o = t.createElement("a"), a = {};
                return o.href = decodeURIComponent(e), o.search && (a = JSON.parse('{"' + o.search.toLowerCase().replace("?", "").replace(/&/g, '","').replace(/=/g, '":"') + '"}')), i.isPlainObject(s) && (a = i.extend(a, s, d.settings.queryStringData)), i.map(a, function (e, t) {
                    if (e && e > "") return encodeURIComponent(t) + "=" + encodeURIComponent(e)
                }).join("&")
            }, getVideo: function (e) {
                var t = "",
                    i = e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),
                    s = e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
                    o = e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/), a = "";
                return i || s ? (s && (i = s), a = n.parseUri(e, {
                    autoplay: d.settings.autoplayVideos ? "1" : "0",
                    v: ""
                }), t = '<iframe width="560" height="315" src="//' + i[1] + "/embed/" + i[2] + "?" + a + '" frameborder="0" allowfullscreen></iframe>') : o ? (a = n.parseUri(e, {
                    autoplay: d.settings.autoplayVideos ? "1" : "0",
                    byline: "0",
                    portrait: "0",
                    color: d.settings.vimeoColor
                }), t = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + o[1] + "?" + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : t = '<iframe width="560" height="315" src="' + e + '" frameborder="0" allowfullscreen></iframe>', '<div class="swipebox-video-container" style="max-width:' + d.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            }, loadMedia: function (e, t) {
                if (0 === e.trim().indexOf("#")) t.call(i("<div>", {"class": "swipebox-inline-container"}).append(i(e).clone().toggleClass(d.settings.toggleClassOnLoad))); else if (!this.isVideo(e)) {
                    var s = i("<img>").on("load", function () {
                        t.call(s)
                    });
                    s.attr("src", e)
                }
            }, getNext: function () {
                var e, t = this, s = i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));
                s + 1 < p.length ? (e = i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"), i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src", e), s++, t.setSlide(s), t.preloadMedia(s + 1), d.settings.nextSlide && d.settings.nextSlide(s)) : d.settings.loopAtEnd === !0 ? (e = i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"), i("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src", e), s = 0, t.preloadMedia(s), t.setSlide(s), t.preloadMedia(s + 1), d.settings.nextSlide && d.settings.nextSlide(s)) : (i("#swipebox-overlay").addClass("rightSpring"), setTimeout(function () {
                    i("#swipebox-overlay").removeClass("rightSpring")
                }, 500))
            }, getPrev: function () {
                var e, t = i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));
                t > 0 ? (e = i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"), i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src", e), t--, this.setSlide(t), this.preloadMedia(t - 1), d.settings.prevSlide && d.settings.prevSlide(t)) : (i("#swipebox-overlay").addClass("leftSpring"), setTimeout(function () {
                    i("#swipebox-overlay").removeClass("leftSpring")
                }, 500))
            }, nextSlide: function (e) {
            }, prevSlide: function (e) {
            }, closeSlide: function () {
                i("html").removeClass("swipebox-html"), i("html").removeClass("swipebox-touch"), i(e).trigger("resize"), this.destroy()
            }, destroy: function () {
                i(e).unbind("keyup"), i("body").unbind("touchstart"), i("body").unbind("touchmove"), i("body").unbind("touchend"), i("#swipebox-slider").unbind(), i("#swipebox-overlay").remove(), i.isArray(o) || o.removeData("_swipebox"), this.target && this.target.trigger("swipebox-destroy"), i.swipebox.isOpen = !1, d.settings.afterClose && d.settings.afterClose()
            }
        }, d.init()
    }, i.fn.swipebox = function (e) {
        if (!i.data(this, "_swipebox")) {
            var t = new i.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
}(window, document, jQuery);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', o = function (e) {
        t(e).on("click", i, this.close)
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var n = t(this), s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.button"), s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }

    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", o = this.$element, n = o.is("input") ? "val" : "html", s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target).closest(".btn");
        e.call(o, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), o.is("input,button") ? o.trigger("focus") : o.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e), o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1, s = (i + n) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        if (!this.sliding) return this.slide("next")
    }, i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev")
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"), s = o || this.getItemForDirection(e, n), a = this.interval,
            r = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this), s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()), r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.collapse"),
                s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.7", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0}, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n), a = s.data("bs.collapse"), r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this), n = e(o), s = {relatedTarget: this};
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }

    var n = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.7", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n), a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {relatedTarget: this};
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o), a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a", l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";

    function e(e, o) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.modal"), a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var o = this, n = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var o = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this), n = o.attr("href"), s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            a = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tooltip"), s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o) return;
            var n = this, s = this.tip(), a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(), p = s[0].offsetWidth, c = s[0].offsetHeight;
            if (h) {
                var f = r, u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var m = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(), n = o[0].offsetWidth, s = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10),
            r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth, h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i), c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }

        var n = this, s = t(this.$tip), a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], o = "BODY" == i.tagName, n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {width: n.right - n.left, height: n.bottom - n.top}));
        var s = window.SVGElement && i instanceof window.SVGElement, a = o ? {top: 0, left: 0} : s ? null : e.offset(),
            r = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            l = o ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, n, r, l, a)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {top: 0, left: 0};
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll, l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s, d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.popover"), s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), +function (t) {
    "use strict";

    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.scrollspy"), s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }

    e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), n = e.data("target") || e.attr("href"), s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                a = t.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }

        var a = o.find("> .active"),
            r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), +function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.affix"), s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(), s = this.$element.offset(), a = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed, l = r ? n : s.top, h = r ? a : e;
        return null != i && n <= i ? "top" : null != o && l + h >= t - o && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), o = this.options.offset, n = o.top, s = o.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({top: a - e - s})
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function () {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, J = "undefined" == typeof window ? {
        document: f,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window, l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function L(e, t) {
        var a = [], i = 0;
        if (e && !t && e instanceof l) return e;
        if (e) if ("string" == typeof e) {
            var s, r, n = e.trim();
            if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                var o = "div";
                for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
        } else if (e.nodeType || e === J || e === f) a.push(e); else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }

    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        }, attr: function (e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1) if (2 === a.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0], r = t[1], n = t[2], s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a); else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (d = 0; d < p.length; d += 1) {
                    var h = p[d];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                        listener: n,
                        proxyListener: o
                    }), u.addEventListener(h, o, s)
                } else for (d = 0; d < p.length; d += 1) {
                    var v = p[d];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, s)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0], s = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], p = 0; p < this.length; p += 1) {
                var c = this[p], u = void 0;
                if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
                    var v = u[h];
                    r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) for (var r = a[s], n = 0; n < this.length; n += 1) {
                var o = this[n], l = void 0;
                try {
                    l = new J.CustomEvent(r, {detail: i, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                }
                o.dom7EventData = e.filter(function (e, t) {
                    return 0 < t
                }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function r(e) {
                if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }

            if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        }, outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (0 < this.length) {
                var e = this[0], t = e.getBoundingClientRect(), a = f.body, i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0, r = e === J ? J.scrollY : e.scrollTop,
                    n = e === J ? J.scrollX : e.scrollLeft;
                return {top: t.top + r - i, left: t.left + n - s}
            }
            return null
        }, css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    var r = f.createElement("div");
                    for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, a;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var i = f.createElement("div");
                for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
            } else if (e instanceof l) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        }, nextAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        }, prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        }, prevAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        }, parent: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        }, parents: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        }, children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function (e) {
        L.fn[e] = t[e]
    });
    var e, a, i, s, ee = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            var r = J.getComputedStyle(e, null);
            return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
        }, parseUrlQuery: function (e) {
            var t, a, i, s, r = {}, n = e || J.location.href;
            if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                    var l = r[n], d = Object.getOwnPropertyDescriptor(s, l);
                    void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
                }
            }
            return a
        }
    }, te = (i = f.createElement("div"), {
        touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
        pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && 0 < J.navigator.maxTouchPoints),
        prefixedPointerEvents: !!J.navigator.msPointerEnabled,
        transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
        transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
        flexbox: function () {
            for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) if (t[a] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                J.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in J
    }), I = {
        isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
        isEdge: !!J.navigator.userAgent.match(/Edge/g),
        isSafari: (s = J.navigator.userAgent.toLowerCase(), 0 <= s.indexOf("safari") && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    }, n = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, o = {components: {configurable: !0}};
    n.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, n.prototype.once = function (a, i, e) {
        var s = this;
        if ("function" != typeof i) return s;

        function r() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            i.apply(s, e), s.off(a, r), r.f7proxy && delete r.f7proxy
        }

        return r.f7proxy = i, s.on(a, r, e)
    }, n.prototype.off = function (e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function (a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
                (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, n.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, n.prototype.useModulesParams = function (a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function (e) {
            var t = i.modules[e];
            t.params && ee.extend(a, t.params)
        })
    }, n.prototype.useModules = function (i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function (e) {
            var a = s.modules[e], t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function (e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, o.components.set = function (e) {
        this.use && this.use(e)
    }, n.installModule = function (t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, n.use = function (e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(n, o);
    var d = {
        updateSize: function () {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this, t = e.params, a = e.$wrapperEl, i = e.size, s = e.rtlTranslate, r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled, o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass), d = n ? e.virtual.slides.length : l.length, p = [], c = [],
                u = [], h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length, m = e.snapGrid.length, g = t.spaceBetween, b = -h, w = 0, y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
                    T = 0;
                    var P = l.eq(z);
                    if (1 < t.slidesPerColumn) {
                        var k = void 0, $ = void 0, L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
                            "-webkit-box-ordinal-group": k,
                            "-moz-box-ordinal-group": k,
                            "-ms-flex-order": k,
                            "-webkit-order": k,
                            order: k
                        })) : $ = z - (L = Math.floor(z / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null), D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0); else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width")),
                                    H = parseFloat(I.getPropertyValue("padding-left")),
                                    N = parseFloat(I.getPropertyValue("padding-right")),
                                    G = parseFloat(I.getPropertyValue("margin-left")),
                                    B = parseFloat(I.getPropertyValue("margin-right")),
                                    X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + H + N + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height")),
                                    V = parseFloat(I.getPropertyValue("padding-top")),
                                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                                    R = parseFloat(I.getPropertyValue("margin-top")),
                                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                                    W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[z] && (e.isHorizontal() ? l[z].style.width = T + "px" : l[z].style.height = T + "px");
                        l[z] && (l[z].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({width: e.virtualSize + t.spaceBetween + "px"}), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({marginLeft: g + "px"}) : l.css({marginRight: g + "px"}) : l.css({marginBottom: g + "px"})), t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function (e) {
                        Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }), (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - Q
                        }), c.forEach(function (e, t) {
                            c[t] = e + Q
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, a = this, i = [], s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var r = a.activeIndex + t;
                if (r > a.slides.length) break;
                i.push(a.slides.eq(r)[0])
            } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var n = i[t].offsetHeight;
                s = s < n ? n : s
            }
            s && a.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, a = t.params, i = t.slides, s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset), p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), s = t.progress, r = t.isBeginning,
                n = t.isEnd, o = r, l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        }, updateSlidesClasses: function () {
            var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid,
                n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this, a = t.params, i = L(e.target).closest("." + a.slideClass)[0], s = !1;
            if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, a = this.rtlTranslate, i = this.translate, s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.progress, o = 0, l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var c = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this, i = a.activeIndex, s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var u = {
        slideTo: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this, r = e;
            r < 0 && (r = 0);
            var n = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        }, slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        }, slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.params, r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        }, slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.params, r = i.animating, n = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var p, c = d(l ? i.translate : -i.translate), u = n.map(function (e) {
                return d(e)
            }), h = (o.map(function (e) {
                return d(e)
            }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        }, slideReset: function (e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        }, slideToClosest: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.activeIndex, r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        }, slideToClickedSlide: function () {
            var e, t = this, a = t.params, i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var h = {
        loopCreate: function () {
            var i = this, e = i.params, t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [], l = [];
            s.each(function (e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        }, loopFix: function () {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev,
                o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var v = {
        setGrabCursor: function (e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var m = {
        appendSlide: function (e) {
            var t = this, a = t.$wrapperEl, i = t.params;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]); else a.append(e);
            i.loop && t.loopCreate(), i.observer && te.observer || t.update()
        }, prependSlide: function (e) {
            var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                r = s + e.length
            } else i.prepend(e);
            a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
        }, addSlide: function (e, t) {
            var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex;
            s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
            var n = a.slides.length;
            if (e <= 0) a.prependSlide(t); else if (n <= e) a.appendSlide(t); else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(), l.unshift(p)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r
                } else i.append(t);
                for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
            a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                n = Math.max(n, 0)
            } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
            a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, g = function () {
        var e = J.navigator.userAgent, t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: J.cordova || J.phonegap,
                phonegap: J.cordova || J.phonegap
            }, a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            var o = t.osVersion.split("."), l = f.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = J.devicePixelRatio || 1, t
    }();

    function b() {
        var e = this, t = e.params, a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }

    var w = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, y = {
            update: d, translate: p, transition: c, slide: u, loop: h, grabCursor: v, manipulation: m, events: {
                attachEvents: function () {
                    var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl;
                    e.onTouchStart = function (e) {
                        var t = this, a = t.touchEventsData, i = t.params, s = t.touches;
                        if (!t.animating || !i.preventInteractionOnTransition) {
                            var r = e;
                            if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0; else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                                s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                                var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                    d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                                if (!l || !(n <= d || n >= J.screen.width - d)) {
                                    if (ee.extend(a, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                        var p = !0;
                                        L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                        var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                        (i.touchStartForcePreventDefault || c) && r.preventDefault()
                                    }
                                    t.emit("touchStart", r)
                                }
                            }
                        }
                    }.bind(e), e.onTouchMove = function (e) {
                        var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = e;
                        if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                            if (!a.isTouchEvent || "mousemove" !== n.type) {
                                var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                                    l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                                if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                                if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, {
                                    startX: o,
                                    startY: l,
                                    currentX: o,
                                    currentY: l
                                }), a.touchStartTime = ee.now()));
                                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                                    if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1)
                                } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);
                                if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                                    s.currentX = o, s.currentY = l;
                                    var d, p = s.currentX - s.startX, c = s.currentY - s.startY;
                                    if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1; else if (a.startMoving) {
                                        t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                        var u = t.isHorizontal() ? p : c;
                                        s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                        var h = !0, v = i.resistanceRatio;
                                        if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                            if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                        }
                                        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                            position: s[t.isHorizontal() ? "startX" : "startY"],
                                            time: a.touchStartTime
                                        }), a.velocities.push({
                                            position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                            time: ee.now()
                                        })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                                    }
                                }
                            }
                        } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
                    }.bind(e), e.onTouchEnd = function (e) {
                        var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate,
                            n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, d = e;
                        if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
                        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var p, c = ee.now(), u = c - a.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
                            t && !t.destroyed && t.emit("click", d)
                        }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
                            t.destroyed || (t.allowClick = !0)
                        }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
                        if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (i.freeModeMomentum) {
                                if (1 < a.velocities.length) {
                                    var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position,
                                        m = h.time - v.time;
                                    t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                                var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b;
                                r && (w = -w);
                                var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) {
                                    for (var S, C = 0; C < l.length; C += 1) if (l[C] > -w) {
                                        S = C;
                                        break
                                    }
                                    w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                                }
                                if (x && t.once("transitionEnd", function () {
                                    t.loopFix()
                                }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                                    t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
                            var k = (p - o[M]) / z;
                            if (u > i.longSwipesMs) {
                                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                            } else {
                                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                            }
                        }
                    }.bind(e), e.onClick = function (e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(e);
                    var r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
                    if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                        if (te.touch) {
                            var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                                passive: !1,
                                capture: n
                            } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                        }
                        (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
                    } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
                }, detachEvents: function () {
                    var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
                    if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                        if (te.touch) {
                            var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                        }
                        (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = e.params, r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var n = e.getBreakpoint(r);
                        if (n && e.currentBreakpoint !== n) {
                            var o = n in r ? r[n] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var l = o || e.originalParams, d = l.direction && l.direction !== s.direction,
                                p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
                            d && a && e.changeDirection(), ee.extend(e.params, l), ee.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = n, p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        }
                    }
                }, getBreakpoint: function (e) {
                    if (e) {
                        var t = !1, a = [];
                        Object.keys(e).forEach(function (e) {
                            a.push(e)
                        }), a.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var i = 0; i < a.length; i += 1) {
                            var s = a[i];
                            this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                        }
                        return t || "max"
                    }
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    var e = this, t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            }, classes: {
                addClasses: function () {
                    var t = this.classNames, a = this.params, e = this.rtl, i = this.$el, s = [];
                    s.push("initialized"), s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), g.android && s.push("android"), g.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            }, images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }

                    e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, x = {}, T = function (u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(y).forEach(function (t) {
                    Object.keys(y[t]).forEach(function (e) {
                        h.prototype[e] || (h.prototype[e] = y[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0], i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {enabled: !0}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {enabled: !1})
                    }
                });
                var n = ee.extend({}, w);
                r.useModulesParams(n), r.params = ee.extend({}, n, x, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function (e, t) {
                            var a = ee.extend({}, s, {el: t});
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return ee.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: ee.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }

            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
                var e = this, t = e.params, a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function () {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid, t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                        t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.changeDirection = function (a, e) {
                void 0 === e && (e = !0);
                var t = this, i = t.params.direction;
                return a || (a = "horizontal" === i ? "vertical" : "horizontal"), a === i || "horizontal" !== a && "vertical" !== a || ("vertical" === i && (t.$el.removeClass(t.params.containerModifierClass + "vertical wp8-vertical").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), "horizontal" === i && (t.$el.removeClass(t.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + "wp8-" + a)), t.params.direction = a, t.slides.each(function (e, t) {
                    "vertical" === a ? t.style.width = "" : t.style.height = ""
                }), t.emit("changeDirection"), e && t.update()), t
            }, h.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this, i = a.params, s = a.$el, r = a.$wrapperEl, n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function (e) {
                ee.extend(x, e)
            }, e.extendedDefaults.get = function () {
                return x
            }, e.defaults.get = function () {
                return w
            }, e.Class.get = function () {
                return u
            }, e.$.get = function () {
                return L
            }, Object.defineProperties(h, e), h
        }(n), E = {name: "device", proto: {device: g}, static: {device: g}},
        S = {name: "support", proto: {support: te}, static: {support: te}},
        C = {name: "browser", proto: {browser: I}, static: {browser: I}}, M = {
            name: "resize", create: function () {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, z = {
            func: J.MutationObserver || J.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this, i = new z.func(function (e) {
                    if (1 !== e.length) {
                        var t = function () {
                            a.emit("observerUpdate", e[0])
                        };
                        J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                    } else a.emit("observerUpdate", e[0])
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            }, init: function () {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, P = {
            name: "observer",
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function () {
                ee.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, k = {
            update: function (e) {
                var t = this, a = t.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides,
                    n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, p = d.from, c = d.to,
                    u = d.slides, h = d.slidesGrid, v = d.renderSlide, f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0), x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (ee.extend(t.virtual, {
                    from: y,
                    to: x,
                    offset: T,
                    slidesGrid: t.slidesGrid
                }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function () {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [], C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var z = 0; z < u.length; z += 1) y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
                C.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function (e, t) {
                    return t - e
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            }, renderSlide: function (e, t) {
                var a = this, i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            }, appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
                this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t = this, a = t.activeIndex, i = a + 1, s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                    i = a + e.length, s = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var n = t.virtual.cache, o = {};
                    Object.keys(n).forEach(function (e) {
                        o[parseInt(e, 10) + s] = n[e]
                    }), t.virtual.cache = o
                }
                t.virtual.update(!0), t.slideTo(i, 0)
            }, removeSlide: function (e) {
                var t = this;
                if (null != e) {
                    var a = t.activeIndex;
                    if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0); else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
                    t.virtual.update(!0), t.slideTo(a, 0)
                }
            }, removeAllSlides: function () {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        }, $ = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: k.update.bind(e),
                        appendSlide: k.appendSlide.bind(e),
                        prependSlide: k.prependSlide.bind(e),
                        removeSlide: k.removeSlide.bind(e),
                        removeAllSlides: k.removeAllSlides.bind(e),
                        renderSlide: k.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {watchSlidesProgress: !0};
                        ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, D = {
            handle: function (e) {
                var t = this, a = t.rtlTranslate, i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = J.innerWidth, o = J.innerHeight, l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            }, enable: function () {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, O = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: D.enable.bind(this),
                        disable: D.disable.bind(this),
                        handle: D.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var A = {
        lastScrollTime: ee.now(),
        event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
            var e = "onwheel", t = e in f;
            if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"), t = "function" == typeof a[e]
            }
            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel",
        normalize: function (e) {
            var t = 0, a = 0, i = 0, s = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            }
        },
        handleMouseEnter: function () {
            this.mouseEntered = !0
        },
        handleMouseLeave: function () {
            this.mouseEntered = !1
        },
        handle: function (e) {
            var t = e, a = this, i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0, r = a.rtlTranslate ? -1 : 1, n = A.normalize(t);
            if (i.forceToAxis) if (a.isHorizontal()) {
                if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                s = n.pixelX * r
            } else {
                if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                s = n.pixelY
            } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s) return !0;
            if (i.invert && (s = -s), a.params.freeMode) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity, l = a.isBeginning, d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
                    a.slideToClosest()
                }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
            } else {
                if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) if (a.isEnd && !a.params.loop || a.animating) {
                    if (i.releaseOnEdges) return !0
                } else a.slideNext(), a.emit("scroll", t); else if (a.isBeginning && !a.params.loop || a.animating) {
                    if (i.releaseOnEdges) return !0
                } else a.slidePrev(), a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new J.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable: function () {
            var e = this;
            if (!A.event) return !1;
            if (e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(A.event, e.mousewheel.handle), e.mousewheel.enabled = !0
        },
        disable: function () {
            var e = this;
            if (!A.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(A.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
        }
    }, H = {
        update: function () {
            var e = this, t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation, i = a.$nextEl, s = a.$prevEl;
                s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        }, onPrevClick: function (e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick: function (e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init: function () {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this, t = e.navigation, a = t.$nextEl, i = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
        }
    }, N = {
        update: function () {
            var e = this, t = e.rtl, s = e.params.pagination;
            if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el,
                    n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, p = e.pagination.bullets;
                    if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
                        var a = L(t), i = a.index();
                        i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                    }); else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                        for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                        c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var v = Math.min(p.length, s.dynamicMainBullets + 4),
                            f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                            m = t ? "right" : "left";
                        p.css(e.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                    var g;
                    g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var b = (r + 1) / n, w = 1, y = 1;
                    "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    i = e.pagination.$el, s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var a = this, e = a.params.pagination;
            if (e.el) {
                var t = L(e.el);
                0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
                    e.preventDefault();
                    var t = L(this).index() * a.params.slidesPerGroup;
                    a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                }), ee.extend(a.pagination, {$el: t, el: t[0]}))
            }
        }, destroy: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }, G = {
        setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl,
                    o = t.$el, l = e.params.scrollbar, d = s, p = (r - s) * i;
                a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                    o[0].style.opacity = 0, o.transition(400)
                }, 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = t.$dragEl, i = t.$el;
                a[0].style.width = "", a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize,
                    o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), ee.extend(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        }, setDragPosition: function (e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize;
            t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl;
            t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, a = this.$wrapperEl, i = t.$el, s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
                i.css("opacity", 0), i.transition(400)
            }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
        }, enableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0],
                    n = !(!te.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!te.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        }, disableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0],
                    n = !(!te.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!te.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        }, init: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = L(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && t.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, B = {
        setTransform: function (e, t) {
            var a = this.rtl, i = L(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0",
                n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"),
                l = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p
            }
            if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)"); else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var i = this, e = i.$el, t = i.slides, s = i.progress, r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                i.parallax.setTransform(t, s)
            }), t.each(function (e, t) {
                var a = t.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    i.parallax.setTransform(t, a)
                })
            })
        }, setTransition: function (s) {
            void 0 === s && (s = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                var a = L(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                0 === s && (i = 0), a.transition(i)
            })
        }
    }, X = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        }, onGestureStart: function (e) {
            var t = this, a = t.params.zoom, i = t.zoom, s = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, s.scaleStart = X.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, a = this.zoom, i = a.gesture;
            if (!te.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                a.fakeGestureMoved = !0, i.scaleMove = X.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, a = this.zoom, i = a.gesture;
            if (!te.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android) return;
                a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, a = t.gesture, i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var n = s.width * a.scale, o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
                a.isTouched = !1, a.isMoved = !1;
                var s = 300, r = 300, n = i.x * s, o = a.currentX + n, l = i.y * r, d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o, a.currentY = d;
                var c = a.width * e.scale, u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture,
                x = b.image;
            (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        }, out: function () {
            var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this, t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }, disable: function () {
            var e = this, t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }, Y = {
        loadInSlide: function (e, l) {
            void 0 === l && (l = !0);
            var d = this, p = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                    t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
                    var i = L(t);
                    i.addClass(p.loadingClass);
                    var s = i.attr("data-background"), r = i.attr("data-src"), n = i.attr("data-srcset"),
                        o = i.attr("data-sizes");
                    d.loadImage(i[0], r || s, n, o, !1, function () {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(a.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], i[0])
                        }
                    }), d.emit("lazyImageLoad", c[0], i[0])
                })
            }
        }, load: function () {
            var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex,
                r = i.virtual && a.virtual.enabled, n = a.lazy, o = a.slidesPerView;

            function l(e) {
                if (r) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (s[e]) return !0;
                return !1
            }

            function d(e) {
                return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
            }

            if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
                var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                i.lazy.loadInSlide(a)
            }); else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p); else i.lazy.loadInSlide(e);
            if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
            } else {
                var g = t.children("." + a.slideNextClass);
                0 < g.length && i.lazy.loadInSlide(d(g));
                var b = t.children("." + a.slidePrevClass);
                0 < b.length && i.lazy.loadInSlide(d(b))
            }
        }
    }, V = {
        LinearSpline: function (e, t) {
            var a, i, s, r, n, o = function (e, t) {
                for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var a, i, s = this, r = s.controller.control;

            function n(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof T && n(r[o]); else r instanceof T && t !== r && n(r)
        }, setTransition: function (t, e) {
            var a, i = this, s = i.controller.control;

            function r(e) {
                e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
                    e.updateAutoHeight()
                }), e.$wrapperEl.transitionEnd(function () {
                    s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                }))
            }

            if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof T && r(s[a]); else s instanceof T && e !== s && r(s)
        }
    }, F = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this, a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = L(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation, a = t.$nextEl, i = t.$prevEl;
                i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        }, updatePagination: function () {
            var i = this, s = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
                var a = L(t);
                i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        }, init: function () {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }, destroy: function () {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }, R = {
        init: function () {
            var e = this;
            if (e.params.history) {
                if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0, t.paths = R.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = R.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = J.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(t), i = R.slugify(a.attr("data-history"));
                J.location.pathname.includes(e) || (i = e + "/" + i);
                var s = J.history.state;
                s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({value: i}, null, i) : J.history.pushState({value: i}, null, i))
            }
        }, slugify: function (e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, a) {
            var i = this;
            if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
                var n = i.slides.eq(s);
                if (R.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                    var o = n.index();
                    i.slideTo(o, e, a)
                }
            } else i.slideTo(0, e, a)
        }
    }, q = {
        onHashCange: function () {
            var e = this, t = f.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === a) return;
                e.slideTo(a)
            }
        }, setHash: function () {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else {
                var t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history");
                f.location.hash = a || ""
            }
        }, init: function () {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = f.location.hash.replace("#", "");
                if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
                    var s = e.slides.eq(a);
                    if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                        var r = s.index();
                        e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                    }
                }
                e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, W = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, a)
        }, start: function () {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
        }, stop: function () {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    }, j = {
        setTranslate: function () {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a), s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s, s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: n}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        }, setTransition: function (e) {
            var a = this, t = a.slides, i = a.$wrapperEl;
            if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.transitionEnd(function () {
                    if (!s && a && !a.destroyed) {
                        s = !0, a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                    }
                })
            }
        }
    }, U = {
        setTranslate: function () {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate,
                l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled,
                u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
            for (var h = 0; h < s.length; h += 1) {
                var v = s.eq(h), f = h;
                c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                    var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                    M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                    z = d.shadowScale, P = d.shadowScale / M, k = d.shadowOffset;
                e.transform("scale3d(" + z + ", 1, " + P + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
            }
            var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, K = {
        setTranslate: function () {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s = t.eq(i), r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -s[0].swiperSlideOffset, d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                        c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        }, setTransition: function (e) {
            var a = this, t = a.slides, i = a.activeIndex, s = a.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(i).transitionEnd(function () {
                    if (!r && a && !a.destroyed) {
                        r = !0, a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                    }
                })
            }
        }
    }, _ = {
        setTranslate: function () {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                var v = i.eq(u), f = r[u], m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier, g = o ? p * m : 0,
                    b = o ? 0 : p * m, w = -c * Math.abs(m), y = o ? 0 : n.stretch * m, x = o ? n.stretch * m : 0;
                Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                    var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, Z = {
        init: function () {
            var e = this, t = e.params.thumbs, a = e.constructor;
            t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), ee.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this, t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex, i = t.clickedSlide;
                if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                    var s;
                    if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                        var r = e.activeIndex;
                        e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                        var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                            o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    e.slideTo(s)
                }
            }
        }, update: function (e) {
            var t = this, a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                if (t.realIndex !== a.realIndex) {
                    var s, r = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                        var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                            o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                    } else s = t.realIndex;
                    a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                }
                var l = 1, d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d); else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }, Q = [E, S, C, M, P, $, O, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: A.enable.bind(e),
                    disable: A.disable.bind(e),
                    handle: A.handle.bind(e),
                    handleMouseEnter: A.handleMouseEnter.bind(e),
                    handleMouseLeave: A.handleMouseLeave.bind(e),
                    lastScrollTime: ee.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                navigation: {
                    init: H.init.bind(e),
                    update: H.update.bind(e),
                    destroy: H.destroy.bind(e),
                    onNextClick: H.onNextClick.bind(e),
                    onPrevClick: H.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t, a = this, i = a.navigation, s = i.$nextEl, r = i.$prevEl;
                !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit("navigationShow", a) : a.emit("navigationHide", a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                pagination: {
                    init: N.init.bind(e),
                    render: N.render.bind(e),
                    update: N.update.bind(e),
                    destroy: N.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            var e = this;
            ee.extend(e, {
                scrollbar: {
                    init: G.init.bind(e),
                    destroy: G.destroy.bind(e),
                    updateSize: G.updateSize.bind(e),
                    setTranslate: G.setTranslate.bind(e),
                    setTransition: G.setTransition.bind(e),
                    enableDraggable: G.enableDraggable.bind(e),
                    disableDraggable: G.disableDraggable.bind(e),
                    setDragPosition: G.setDragPosition.bind(e),
                    onDragStart: G.onDragStart.bind(e),
                    onDragMove: G.onDragMove.bind(e),
                    onDragEnd: G.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            ee.extend(this, {
                parallax: {
                    setTransform: B.setTransform.bind(this),
                    setTranslate: B.setTranslate.bind(this),
                    setTransition: B.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var i = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                t[e] = X[e].bind(i)
            }), ee.extend(i, {zoom: t});
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function () {
                    return s
                }, set: function (e) {
                    if (s !== e) {
                        var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                            a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                        i.emit("zoomChange", e, t, a)
                    }
                    s = e
                }
            })
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            ee.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Y.load.bind(this),
                    loadInSlide: Y.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            var e = this;
            ee.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: V.getInterpolateFunction.bind(e),
                    setTranslate: V.setTranslate.bind(e),
                    setTransition: V.setTransition.bind(e)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var t = this;
            ee.extend(t, {a11y: {liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(F).forEach(function (e) {
                t.a11y[e] = F[e].bind(t)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            var e = this;
            ee.extend(e, {
                history: {
                    init: R.init.bind(e),
                    setHistory: R.setHistory.bind(e),
                    setHistoryPopState: R.setHistoryPopState.bind(e),
                    scrollToSlide: R.scrollToSlide.bind(e),
                    destroy: R.destroy.bind(e)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            var e = this;
            ee.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: q.init.bind(e),
                    destroy: q.destroy.bind(e),
                    setHash: q.setHash.bind(e),
                    onHashCange: q.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            var t = this;
            ee.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: W.run.bind(t),
                    start: W.start.bind(t),
                    stop: W.stop.bind(t),
                    pause: W.pause.bind(t),
                    onTransitionEnd: function (e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            ee.extend(this, {
                fadeEffect: {
                    setTranslate: j.setTranslate.bind(this),
                    setTransition: j.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t), ee.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            ee.extend(this, {
                cubeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t), ee.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            ee.extend(this, {
                flipEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(e.params, t), ee.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            ee.extend(this, {
                coverflowEffect: {
                    setTranslate: _.setTranslate.bind(this),
                    setTransition: _.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            ee.extend(this, {
                thumbs: {
                    swiper: null,
                    init: Z.init.bind(this),
                    update: Z.update.bind(this),
                    onThumbClick: Z.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule), T.use(Q), T
});
;

!function (n) {
    "use strict";
    var t = n(window), o = t.height();
    t.resize(function () {
        o = t.height()
    }), n.fn.parallax = function (i, e, r) {
        function u() {
            var r = t.scrollTop();
            l.each(function () {
                var t = n(this), u = t.offset().top, f = h(t), s = Math.round(c * e);
                u + f < r || u > r + o || (.3 == e && (s += 400), l.css("backgroundPosition", i + " " + (Math.round((c - r) * e) - s) + "px"))
            })
        }

        var h, c, l = n(this);
        l.each(function () {
            c = l.offset().top
        }), h = r ? function (n) {
            return n.outerHeight(!0)
        } : function (n) {
            return n.height()
        }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === r) && (r = !0), t.bind("scroll", u).resize(u), u()
    }
}(jQuery);
!function () {
    "use strict";

    function e(n) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.4", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = {
            elements: {},
            containers: []
        }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), O)
    }

    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
            if (O.tools.isNode(e.container)) return e.container;
            console.log('ScrollReveal: invalid container "' + e.container + '" provided.'), console.log("ScrollReveal: falling back to default container.")
        }
        return O.defaults.container
    }

    function n(e, t) {
        return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : []
    }

    function i() {
        return ++O.uid
    }

    function o(e, t, n) {
        t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X"
    }

    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e)
    }

    function s(e, t) {
        var n = e.config;
        return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; "
    }

    function a(e) {
        var t, n = e.config, i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";"
    }

    function l(e) {
        var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e
    }

    function c(e, t, n) {
        var i = {target: e, config: t, interval: n};
        O.history.push(i)
    }

    function d() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", f), O.store.containers[e].addEventListener("resize", f);
            O.initialized || (window.addEventListener("scroll", f), window.addEventListener("resize", f), O.initialized = !0)
        }
        return O
    }

    function f() {
        S(y)
    }

    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function (o) {
            i = O.sequences[o], e = !1;
            for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e
        })
    }

    function y() {
        var e, t;
        u(), O.tools.forOwn(O.store.elements, function (n) {
            t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1)
        })
    }

    function m(e, t) {
        var n = 0, i = 0, o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {started: new Date}, e.sequence.timer.clock = window.setTimeout(function () {
            o.blocked = !1, e.sequence.timer = null, f()
        }, Math.abs(o.interval) + i - n)
    }

    function p(e, t, n) {
        var i = 0, o = 0, r = "after";
        switch (e) {
            case"reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
                break;
            case"reset":
                o = t.config.duration, r += "Reset"
        }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = {started: new Date}, t.timer.clock = window.setTimeout(function () {
            t.config[r](t.domEl), t.timer = null
        }, o - i)
    }

    function g(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled
        }
        return q(e) && !e.revealing && !e.disabled
    }

    function w(e) {
        var t = e.config.useDelay;
        return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen
    }

    function v(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled
        }
        return !q(e) && e.config.reset && e.revealing && !e.disabled
    }

    function b(e) {
        return {width: e.clientWidth, height: e.clientHeight}
    }

    function h(e) {
        if (e && e !== window.document.documentElement) {
            var t = x(e);
            return {x: e.scrollLeft + t.left, y: e.scrollTop + t.top}
        }
        return {x: window.pageXOffset, y: window.pageYOffset}
    }

    function x(e) {
        var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e);
        return {top: t, left: n, height: i, width: o}
    }

    function q(e) {
        function t() {
            var t = c + a * s, n = d + l * s, i = f - a * s, y = u - l * s, m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n > p && y < w
        }

        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position
        }

        var i = x(e.domEl), o = b(e.config.container), r = h(e.config.container), s = e.config.viewFactor, a = i.height,
            l = i.width, c = i.top, d = i.left, f = c + a, u = d + l;
        return t() || n()
    }

    function E() {
    }

    var O, S;
    e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {x: 0, y: 0, z: 0},
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
        beforeReveal: function (e) {
        },
        beforeReset: function (e) {
        },
        afterReveal: function (e) {
        },
        afterReset: function (e) {
        }
    }, e.prototype.isSupported = function () {
        var e = document.documentElement.style;
        return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e
    }, e.prototype.reveal = function (e, s, a, f) {
        var u, y, m, p, g, w;
        if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.'), O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = {id: w, interval: a, elemIds: [], active: !1});
        for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
            id: i(),
            domEl: y[v],
            seen: !1,
            revealing: !1
        }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
            id: g.id,
            index: g.elemIds.length
        }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
        return !f && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(d, 0)), O
    }, e.prototype.sync = function () {
        if (O.history.length && O.isSupported()) {
            for (var e = 0; e < O.history.length; e++) {
                var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0)
            }
            d()
        } else console.log("ScrollReveal: sync failed, no reveals found.");
        return O
    }, E.prototype.isObject = function (e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }, E.prototype.isNode = function (e) {
        return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }, E.prototype.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e), n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]))
    }, E.prototype.forOwn = function (e, t) {
        if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".');
        for (var n in e) e.hasOwnProperty(n) && t(n)
    }, E.prototype.extend = function (e, t) {
        return this.forOwn(t, function (n) {
            this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n]
        }.bind(this)), e
    }, E.prototype.extendClone = function (e, t) {
        return this.extend(this.extend({}, e), t)
    }, E.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, S = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return e
    }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e
}();
(function () {
    var t = [].indexOf || function (t) {
        for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
        return -1
    }, e = [].slice;
    !function (t, e) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (n) {
            return e(n, t)
        }) : e(t.jQuery, t)
    }(this, function (n, r) {
        var i, o, l, s, c, a, u, f, h, d, p, v, y, w, g, S;
        return i = n(r), f = t.call(r, "ontouchstart") >= 0, s = {
            horizontal: {},
            vertical: {}
        }, c = 1, u = {}, a = "waypoints-context-id", p = "resize.waypoints", v = "scroll.waypoints", y = 1, w = "waypoints-waypoint-ids", g = "waypoint", S = "waypoints", o = function () {
            function t(t) {
                var e = this;
                this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + c++, this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, t.data(a, this.id), u[this.id] = this, t.bind(v, function () {
                    var t;
                    if (!e.didScroll && !f) return e.didScroll = !0, t = function () {
                        return e.doScroll(), e.didScroll = !1
                    }, r.setTimeout(t, n[S].settings.scrollThrottle)
                }), t.bind(p, function () {
                    var t;
                    if (!e.didResize) return e.didResize = !0, t = function () {
                        return n[S]("refresh"), e.didResize = !1
                    }, r.setTimeout(t, n[S].settings.resizeThrottle)
                })
            }

            return t.prototype.doScroll = function () {
                var t, e = this;
                return t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !f || t.vertical.oldScroll && t.vertical.newScroll || n[S]("refresh"), n.each(t, function (t, r) {
                    var i, o, l;
                    return l = [], o = r.newScroll > r.oldScroll, i = o ? r.forward : r.backward, n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        return r.oldScroll < (n = e.offset) && n <= r.newScroll ? l.push(e) : r.newScroll < (i = e.offset) && i <= r.oldScroll ? l.push(e) : void 0
                    }), l.sort(function (t, e) {
                        return t.offset - e.offset
                    }), o || l.reverse(), n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) return e.trigger([i])
                    })
                }), this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
            }, t.prototype.refresh = function () {
                var t, e, r, i = this;
                return r = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[S]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, c;
                        if (i = r.options.offset, l = r.offset, o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp], n.isFunction(i) ? i = i.apply(r.element) : "string" == typeof i && (i = parseFloat(i), r.options.offset.indexOf("%") > -1 && (i = Math.ceil(e.contextDimension * i / 100))), r.offset = o - e.contextOffset + e.contextScroll - i, (!r.options.onlyOnScroll || null == l) && r.enabled) return null !== l && l < (s = e.oldScroll) && s <= r.offset ? r.trigger([e.backward]) : null !== l && l > (c = e.oldScroll) && c >= r.offset ? r.trigger([e.forward]) : null === l && e.oldScroll >= r.offset ? r.trigger([e.forward]) : void 0
                    })
                })
            }, t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, v].join(" ")), delete u[this.id]
            }, t
        }(), l = function () {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r), "bottom-in-view" === r.offset && (r.offset = function () {
                    var t;
                    return t = n[S]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                }), this.$element = t, this.element = t[0], this.axis = r.horizontal ? "horizontal" : "vertical", this.callback = r.handler, this.context = e, this.enabled = r.enabled, this.id = "waypoints" + y++, this.offset = null, this.options = r, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, i = null != (o = t.data(w)) ? o : [], i.push(this.id), t.data(w, i)
            }

            return t.prototype.trigger = function (t) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
            }, t.prototype.disable = function () {
                return this.enabled = !1
            }, t.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, t.prototype.destroy = function () {
                return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, t.getWaypointsByElement = function (t) {
                var e, r;
                return (r = n(t).data(w)) ? (e = n.extend({}, s.horizontal, s.vertical), n.map(r, function (t) {
                    return e[t]
                })) : []
            }, t
        }(), d = {
            init: function (t, e) {
                var r;
                return null == e && (e = {}), null == (r = e.handler) && (e.handler = t), this.each(function () {
                    var t, r, i, s;
                    return t = n(this), i = null != (s = e.context) ? s : n.fn[g].defaults.context, n.isWindow(i) || (i = t.closest(i)), i = n(i), r = u[i.data(a)], r || (r = new o(i)), new l(t, r, e)
                }), n[S]("refresh"), this
            }, disable: function () {
                return d._invoke(this, "disable")
            }, enable: function () {
                return d._invoke(this, "enable")
            }, destroy: function () {
                return d._invoke(this, "destroy")
            }, prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) return t.push(n[e - 1])
                })
            }, next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) return t.push(n[e + 1])
                })
            }, _traverse: function (t, e, i) {
                var o, l;
                return null == t && (t = "vertical"), null == e && (e = r), l = h.aggregate(e), o = [], this.each(function () {
                    var e;
                    return e = n.inArray(this, l[t]), i(o, e, l[t])
                }), this.pushStack(o)
            }, _invoke: function (t, e) {
                return t.each(function () {
                    var t;
                    return t = l.getWaypointsByElement(this), n.each(t, function (t, n) {
                        return n[e](), !0
                    })
                }), this
            }
        }, n.fn[g] = function () {
            var t, r;
            return r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[r] ? d[r].apply(this, t) : n.isFunction(r) ? d.init.apply(this, arguments) : n.isPlainObject(r) ? d.init.apply(this, [null, r]) : r ? n.error("The " + r + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
        }, n.fn[g].defaults = {
            context: r,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, h = {
            refresh: function () {
                return n.each(u, function (t, e) {
                    return e.refresh()
                })
            }, viewportHeight: function () {
                var t;
                return null != (t = r.innerHeight) ? t : i.height()
            }, aggregate: function (t) {
                var e, r, i;
                return e = s, t && (e = null != (i = u[n(t).data(a)]) ? i.waypoints : void 0), e ? (r = {
                    horizontal: [],
                    vertical: []
                }, n.each(r, function (t, i) {
                    return n.each(e[t], function (t, e) {
                        return i.push(e)
                    }), i.sort(function (t, e) {
                        return t.offset - e.offset
                    }), r[t] = n.map(i, function (t) {
                        return t.element
                    }), r[t] = n.unique(r[t])
                }), r) : []
            }, above: function (t) {
                return null == t && (t = r), h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            }, below: function (t) {
                return null == t && (t = r), h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            }, left: function (t) {
                return null == t && (t = r), h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            }, right: function (t) {
                return null == t && (t = r), h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            }, enable: function () {
                return h._invoke("enable")
            }, disable: function () {
                return h._invoke("disable")
            }, destroy: function () {
                return h._invoke("destroy")
            }, extendFn: function (t, e) {
                return d[t] = e
            }, _invoke: function (t) {
                var e;
                return e = n.extend({}, s.vertical, s.horizontal), n.each(e, function (e, n) {
                    return n[t](), !0
                })
            }, _filter: function (t, e, r) {
                var i, o;
                return (i = u[n(t).data(a)]) ? (o = [], n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) return o.push(e)
                }), o.sort(function (t, e) {
                    return t.offset - e.offset
                }), n.map(o, function (t) {
                    return t.element
                })) : []
            }
        }, n[S] = function () {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], h[n] ? h[n].apply(null, t) : h.aggregate.call(null, n)
        }, n[S].settings = {resizeThrottle: 100, scrollThrottle: 30}, i.load(function () {
            return n[S]("refresh")
        })
    })
}).call(this);
"use strict";
jQuery(document).on('ready', function () {
    initFilterContainer();
    initSwiperSliders();
    initSwiper();
    initEvents();
    initStyles();
    initMap();
    initCollapseMenu();
    checkCountUp();
    initScrollReveal();
    initCountDown();
    initPortfolio();
    initTracks();
});
jQuery(window).on('scroll', function (event) {
    checkNavbar();
    checkGoTop();
    checkScrollAnimation();
}).scroll();
jQuery(window).on('load', function () {
    initMasonry();
    initParallax();
});
jQuery(window).on("resize", function () {
    setResizeStyles();
}).resize();

function initCollapseMenu() {
    var navbar = jQuery('#navbar'), navbar_toggle = jQuery('.navbar-toggle'), navbar_wrapper = jQuery("#nav-wrapper");
    navbar_wrapper.on('click', '.navbar-toggle', function (e) {
        navbar_toggle.toggleClass('collapsed');
        navbar.toggleClass('collapse');
        navbar_wrapper.toggleClass('mob-visible');
    });
    navbar.on('click', '.menu-item-type-custom > a', function (e) {
        if (typeof jQuery(this).attr('href') !== 'undefined' && jQuery(this).attr('href') !== '#' && jQuery(this).attr('href').charAt(0) === '#') {
            navbar_toggle.addClass('collapsed');
            navbar.addClass('collapse');
            navbar_wrapper.removeClass('mob-visible');
        }
    });
    navbar.on('click', '.menu-item-has-children > a', function (e) {
        var el = jQuery(this);
        if (!el.closest('#navbar').hasClass('collapse')) {
            if ((el.attr('href') === undefined || el.attr('href') === '#') || e.target.tagName == 'A') {
                el.next().toggleClass('show');
                el.parent().toggleClass('show');
                return false;
            }
        }
    });
    var lastWidth;
    jQuery(window).on("resize", function () {
        checkNavbar();
        var winWidth = jQuery(window).width(), winHeight = jQuery(window).height();
        lastWidth = winWidth;
    });
}

function checkNavbar() {
    var navbar = jQuery('#navbar'), scroll = jQuery(window).scrollTop(), navBar = jQuery('nav.navbar:not(.no-dark)'),
        topBar = jQuery('.ltx-topbar-block'), navbar_toggle = jQuery('.navbar-toggle'),
        navbar_wrapper = jQuery("#nav-wrapper"), slideDiv = jQuery('.slider-full'), winWidth = jQuery(window).width(),
        winHeight = jQuery(window).height(), navbar_mobile_width = navbar.data('mobile-screen-width');
    if (winWidth < navbar_mobile_width) {
        navbar.addClass('navbar-mobile').removeClass('navbar-desktop');
    } else {
        navbar.addClass('navbar-desktop').removeClass('navbar-mobile');
    }
    navbar_wrapper.addClass('inited');
    if (topBar.length) {
        navBar.data('offset-top', topBar.height());
    }
    if (winWidth > navbar_mobile_width && navbar_toggle.is(':hidden')) {
        navbar.addClass('collapse');
        navbar_toggle.addClass('collapsed');
        navbar_wrapper.removeClass('mob-visible');
    }
    jQuery("#nav-wrapper.navbar-layout-transparent + .page-header, #nav-wrapper.navbar-layout-transparent + .main-wrapper").css('margin-top', '-' + navbar_wrapper.height() + 'px');
    if (scroll > 1) navBar.addClass('dark'); else navBar.removeClass('dark');
}

function checkGoTop() {
    var gotop = jQuery('.ltx-go-top'),
        scrollBottom = jQuery(document).height() - jQuery(window).height() - jQuery(window).scrollTop();
    if (gotop.length) {
        if (jQuery(window).scrollTop() > 100) {
            gotop.addClass('show');
        } else {
            gotop.removeClass('show');
        }
        if (scrollBottom < 50) {
            gotop.addClass('scroll-bottom');
        } else {
            gotop.removeClass('scroll-bottom');
        }
    }
}

function initEvents() {
    setTimeout(function () {
        if (typeof Pace !== 'undefined' && jQuery('body').hasClass('paceloader-enabled')) {
            Pace.stop();
        }
    }, 3000);
    jQuery('.swipebox').swipebox();
    initMenuFilter();
    if (!/Mobi/.test(navigator.userAgent) && jQuery(window).width() > 768) {
        jQuery('.matchHeight').matchHeight();
        jQuery('.items-matchHeight article').matchHeight();
    }
    jQuery('.gridlist-toggle').on('click', 'a', function () {
        jQuery('.matchHeight').matchHeight();
    });
    jQuery('.menu-types').on('click', 'a', function () {
        var el = jQuery(this);
        el.addClass('active').siblings('.active').removeClass('active');
        el.parent().find('.type-value').val(el.data('value'));
        return false;
    });
    jQuery('.ltx-go-top').on('click', function () {
        jQuery('html, body').animate({scrollTop: 0}, 1200);
        return false;
    });
    jQuery('.alert').on('click', '.close', function () {
        jQuery(this).parent().fadeOut();
        return false;
    });
    jQuery(".topbar-icons.mobile, .topbar-icons.icons-hidden").mouseover(function () {
        jQuery('.topbar-icons.icons-hidden').addClass('show');
        jQuery('#navbar').addClass('muted');
    }).mouseout(function () {
        jQuery('.topbar-icons.icons-hidden').removeClass('show');
        jQuery('#navbar').removeClass('muted');
    });
    var searchHandler = function (event) {
        if (jQuery(event.target).is(".top-search, .top-search *")) return;
        jQuery(document).off("click", searchHandler);
        jQuery('.top-search').removeClass('show-field');
        jQuery('#navbar').removeClass('muted');
    }
    jQuery('.top-search-ico-close').on('click', function (e) {
        jQuery(this).parent().toggleClass('show-field');
        jQuery('#navbar').toggleClass('muted');
    });
    jQuery('.top-search-ico').on('click', function (e) {
        e.preventDefault();
        jQuery(this).parent().toggleClass('show-field');
        jQuery('#navbar').toggleClass('muted');
        if (jQuery(this).parent().hasClass('show-field')) {
            jQuery(document).on("click", searchHandler);
        } else {
            jQuery(document).off("click", searchHandler);
        }
    });
    jQuery('#top-search-ico-mobile').on('click', function () {
        window.location = '/?s=' + jQuery(this).next().val();
        return false;
    });
    var search_href = jQuery('.top-search').data('base-href');
    jQuery('.top-search input').keypress(function (e) {
        if (e.which == 13) {
            window.location = search_href + '?s=' + jQuery('.top-search input').val();
            return false;
        }
    });
    jQuery('.ltx-navbar-search span').on('click', function (e) {
        window.location = search_href + '?s=' + jQuery('.ltx-navbar-search input').val();
    });
    jQuery('.woocommerce').on('click', 'div.quantity > span', function (e) {
        var f = jQuery(this).siblings('input');
        if (jQuery(this).hasClass('more')) {
            f.val(Math.max(0, parseInt(f.val())) + 1);
        } else {
            f.val(Math.max(1, Math.max(0, parseInt(f.val())) - 1));
        }
        e.preventDefault();
        jQuery(this).siblings('input').change();
        return false;
    });
    jQuery('.ltx-arrow-down').on('click', function () {
        var next = jQuery(this).closest('.slider-zoom').closest('.vc_row').next();
        jQuery("html, body").animate({scrollTop: jQuery(next).offset().top - 100}, 500);
    });
    if (jQuery("#ltx-modal").length && !ltxGetCookie('ltx-modal-cookie')) {
        jQuery("#ltx-modal").modal("show");
    }
    jQuery('#ltx-modal').on('click', '.ltx-modal-yes', function () {
        jQuery('body').removeClass('modal-open');
        jQuery('#ltx-modal').remove();
        jQuery('.modal-backdrop').remove();
        ltxSetCookie('ltx-modal-cookie', 1, jQuery(this).data('period'));
    });
    jQuery('#ltx-modal').on('click', '.ltx-modal-no', function () {
        window.location.href = jQuery(this).data('no');
        return false;
    });
    jQuery('.navbar').on('affix.bs.affix', function () {
        if (!jQuery(window).scrollTop()) return false;
    });
}

function initCountDown() {
    var countDownEl = jQuery('.ltx-countdown');
    if (jQuery(countDownEl).length) {
        jQuery(countDownEl).each(function (i, el) {
            jQuery(el).countdown(jQuery(el).data('date'), function (event) {
                jQuery(this).html(event.strftime('' + jQuery(countDownEl).data('template')));
            });
        });
    }
}

function ltxUrlDecode(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}

function initParallax() {
    if (/Mobi/.test(navigator.userAgent)) return false;
    jQuery('.ltx-parallax').parallax("50%", 0.2);
    jQuery('.ltx-parallax.wpb_column .vc_column-inner').parallax("50%", 0.3);
    if (jQuery('.ltx-parallax-slider').length) {
        jQuery('.ltx-parallax-slider').each(function (e, el) {
            var scene = jQuery(el).get(0);
            var parallaxInstance = new Parallax(scene, {hoverOnly: true, limitY: 0, selector: '.ltx-layer',});
        });
    }
    jQuery(".ltx-scroll-parallax").each(function (i, el) {
        jQuery(el).paroller({
            factor: jQuery(el).data('factor'),
            type: 'foreground',
            direction: jQuery(el).data('direction')
        });
    });
    jQuery(".ltx-parallax-slider .layer").each(function (i, el) {
        jQuery(el).paroller({
            factor: jQuery(el).data('factor'),
            type: jQuery(el).data('type'),
            direction: jQuery(el).data('direction')
        });
    });
}

function initStyles() {
    jQuery('form:not(.checkout, .woocommerce-shipping-calculator) select:not(#rating), aside select, .footer-widget-area select').wrap('<div class="select-wrap"></div>');
    jQuery('.wpcf7-checkbox').parent().addClass('margin-none');
    jQuery('input[type="submit"], button[type="submit"]').not('.btn').addClass('btn btn-xs');
    jQuery('#send_comment').removeClass('btn-xs');
    jQuery('#searchsubmit').removeClass('btn');
    jQuery('.form-btn-shadow .btn,.form-btn-shadow input[type="submit"]').addClass('btn-shadow');
    jQuery('.form-btn-wide .btn,.form-btn-wide input[type="submit"]').addClass('btn-wide');
    jQuery('.woocommerce .button').addClass('btn btn-main color-hover-black').removeClass('button');
    jQuery('.woocommerce .wc-forward:not(.checkout)').removeClass('btn-black').addClass('btn-main');
    jQuery('.woocommerce-message .btn, .woocommerce-info .btn').addClass('btn-xs');
    jQuery('.woocommerce .price_slider_amount .btn').removeClass('btn-black color-hover-white').addClass('btn btn-main btn-xs color-hover-black');
    jQuery('.woocommerce .checkout-button').removeClass('btn-black color-hover-white').addClass('btn btn-main btn-xs color-hover-black');
    jQuery('button.single_add_to_cart_button').removeClass('btn-xs color-hover-white').addClass('color-hover-main');
    jQuery('.woocommerce .coupon .btn').removeClass('color-hover-white').addClass('color-hover-main');
    jQuery('.woocommerce .product .wc-label-new').closest('.product').addClass('ltx-wc-new');
    jQuery('.widget_product_search button').removeClass('btn btn-xs');
    jQuery('.input-group-append .btn').removeClass('btn-xs');
    jQuery('.ltx-hover-logos img').each(function (i, el) {
        jQuery(el).clone().addClass('ltx-img-hover').insertAfter(el);
    });
    jQuery(".container input[type=\"submit\"], .container input[type=\"button\"], .container .btn").wrap('<span class="ltx-btn-wrap"></span');
    jQuery('.search-form .ltx-btn-wrap').removeClass('ltx-btn-wrap');
    jQuery('.ltx-btn-wrap > .btn-main').parent().addClass('ltx-btn-wrap-main');
    jQuery('.ltx-btn-wrap > .btn-black').parent().addClass('ltx-btn-wrap-black');
    jQuery('.ltx-btn-wrap > .btn-white').parent().addClass('ltx-btn-wrap-white');
    jQuery('.ltx-btn-wrap > .color-hover-main').parent().addClass('ltx-btn-wrap-hover-main');
    jQuery('.ltx-btn-wrap > .color-hover-black').parent().addClass('ltx-btn-wrap-hover-black');
    jQuery('.ltx-btn-wrap > .color-hover-white').parent().addClass('ltx-btn-wrap-hover-white');
    jQuery('.woocommerce .products .item .ltx-btn-wrap .btn');
    jQuery(".container .wpcf7-submit").removeClass('btn-xs').wrap('<span class="ltx-btn-wrap"></span');
    jQuery('.woocommerce-result-count, .woocommerce-ordering').wrapAll('<div class="ltx-wc-order"></div>');
    jQuery('.blog-post .nav-links > a').wrapInner('<span></span>');
    jQuery('.blog-post .nav-links > a[rel="next"]').wrap('<span class="next"></span>');
    jQuery('.blog-post .nav-links > a[rel="prev"]').wrap('<span class="prev"></span>');
    jQuery('section.bg-overlay-true-black, .wpb_row.bg-overlay-true-black').prepend('<div class="ltx-overlay-true-black"></div>');
    jQuery('section.bg-overlay-white, .wpb_row.bg-overlay-white').prepend('<div class="ltx-overlay-white"></div>');
    jQuery('section.bg-overlay-black, .wpb_row.bg-overlay-black, .wpb_column.bg-overlay-black .vc_column-inner').prepend('<div class="ltx-overlay-black"></div>');
    jQuery('section.bg-overlay-dark, .wpb_row.bg-overlay-dark').prepend('<div class="ltx-overlay-dark"></div>');
    jQuery('section.bg-overlay-xblack, .wpb_row.bg-overlay-xblack').prepend('<div class="ltx-overlay-xblack"></div>');
    jQuery('section.bg-overlay-gradient, .wpb_row.bg-overlay-gradient').prepend('<div class="ltx-overlay-gradient"></div>');
    jQuery('section.bg-overlay-waves, .wpb_row.bg-overlay-waves').prepend('<div class="ltx-overlay-waves"></div>');
    jQuery('section.bg-overlay-half, .wpb_row.bg-overlay-half').prepend('<div class="ltx-overlay-half"></div>');
    jQuery('section.bg-overlay-divider, .wpb_row.bg-overlay-divider').prepend('<div class="ltx-overlay-divider"></div>');
    jQuery('section.bg-overlay-highlight, .wpb_row.bg-overlay-highlight, .wpb_column.bg-overlay-highlight > .vc_column-inner').prepend('<div class="ltx-overlay-highlight"></div>');
    jQuery('section.white-space-top, .wpb_row.white-space-top').prepend('<div class="ltx-white-space-top"></div>');
    var header_icon_class = jQuery('#ltx-header-icon').data('icon');
    var update_width = jQuery('.woocommerce-cart-form__contents .product-subtotal').outerWidth();
    jQuery('button[name="update_cart"]').css('width', update_width);
    jQuery('.wp-searchform .btn').removeClass('btn');
    if (jQuery('.woocommerce .products').length) {
        jQuery('.woocommerce .products .product').each(function (i, el) {
            var href = jQuery(el).find('a').attr('href'), img = jQuery(el).find('.image img');
            jQuery(img).wrap('<a href="' + href + '">');
        });
    }
    var copyrights = jQuery('.copyright-block.copyright-layout-copyright-transparent'),
        footer = jQuery('#ltx-widgets-footer + .copyright-block'), widgets_footer = jQuery('#ltx-widgets-footer'),
        footerHeight = footer.outerHeight();
    widgets_footer.css('padding-bottom', 0 + footerHeight + 'px');
    footer.css('margin-top', '-' + footerHeight + 'px');
    copyrights.css('margin-top', '-' + copyrights.outerHeight() + 'px')
    jQuery('.woocommerce div.quantity,.woocommerce-page div.quantity').append('<span class="more"></span><span class="less"></span>');
    jQuery(document).off('updated_wc_div').on('updated_wc_div', function () {
        jQuery('.woocommerce div.quantity,.woocommerce-page div.quantity').append('<span class="more"></span><span class="less"></span>');
        initStyles();
    });
    var bodyStyles = window.getComputedStyle(document.body);
    var niceScrollConf = {
        cursorcolor: bodyStyles.getPropertyValue('--white'),
        cursorborder: "0px",
        background: "#000",
        cursorwidth: "8px",
        cursorborderradius: "0px",
        autohidemode: false
    };
    jQuery('.events-sc.ltx-scroll').niceScroll(niceScrollConf);
}

function setResizeStyles() {
    var videos = jQuery('.blog-post article.format-video iframe'), container = jQuery('.blog-post'),
        bodyWidth = jQuery(window).outerWidth(), contentWrapper = jQuery('.ltx-content-wrapper.ltx-footer-parallax'),
        footerWrapper = jQuery('.ltx-content-wrapper.ltx-footer-parallax + .ltx-footer-wrapper');
    contentWrapper.css('margin-bottom', footerWrapper.outerHeight() + 'px');
    jQuery.each(videos, function (i, el) {
        var height = jQuery(el).height(), width = jQuery(el).width(), containerW = jQuery(container).width(),
            ratio = containerW / width;
        jQuery(el).css('width', width * ratio);
        jQuery(el).css('height', height * ratio);
    });
    if (jQuery('.services-sc.layout-list').length) {
        var el = jQuery('.services-sc.layout-list');
        if (!el.hasClass('inited')) {
            var bodyStyles = window.getComputedStyle(document.body);
            var niceScrollConf = {
                cursorcolor: bodyStyles.getPropertyValue('--black'),
                cursorborder: "0px",
                background: bodyStyles.getPropertyValue('--gray'),
                cursorwidth: "7px",
                cursorborderradius: "0px",
                autohidemode: false
            };
            el.find('.ltx-list-wrap').niceScroll(niceScrollConf);
        }
    }
    document.documentElement.style.setProperty('--fullwidth', bodyWidth + 'px');
}

function checkCountUp() {
    if (jQuery(".countUp").length) {
        jQuery('.countUp').counterUp();
    }
}

function initScrollReveal() {
    if (/Mobi/.test(navigator.userAgent) || jQuery(window).width() < 768) return false;
    window.sr = ScrollReveal();
    var srAnimations = {
        zoom_in: {opacity: 1, scale: 0.01,},
        fade_in: {distance: 0, opacity: 0, scale: 1,},
        slide_from_left: {distance: '200%', origin: 'left',},
        slide_from_right: {distance: '150%', origin: 'right',},
        slide_from_top: {distance: '150%', origin: 'top',},
        slide_from_bottom: {distance: '150%', origin: 'bottom',},
        slide_rotate: {rotate: {x: 0, y: 0, z: 360},},
    };
    var srElCfg = {
        block: [''],
        items: ['article', '.item'],
        text_el: ['.heading', '.header', '.subheader', '.btn', '.btn-wrap', 'p', 'ul'],
        list_el: ['li']
    };
    jQuery('.ltx-sr').each(function () {
        var el = jQuery(this), srClass = el.attr('class');
        var srId = srClass.match(/ltx-sr-id-(\S+)/), srEffect = srClass.match(/ltx-sr-effect-(\S+)/),
            srEl = srClass.match(/ltx-sr-el-(\S+)/), srDelay = srClass.match(/ltx-sr-delay-(\d+)/),
            srDuration = srClass.match(/ltx-sr-duration-(\d+)/), srSeq = srClass.match(/ltx-sr-sequences-(\d+)/);
        var cfg = srAnimations[srEffect[1]];
        var srConfig = {
            delay: parseInt(srDelay[1]),
            duration: parseInt(srDuration[1]),
            easing: 'ease-in-out',
            afterReveal: function (domEl) {
                jQuery(domEl).css('transition', 'all .3s ease');
            }
        }
        cfg = jQuery.extend({}, cfg, srConfig);
        var initedEls = [];
        jQuery.each(srElCfg[srEl[1]], function (i, e) {
            initedEls.push('.ltx-sr-id-' + srId[1] + ' ' + e);
        });
        sr.reveal(initedEls.join(','), cfg, parseInt(srSeq[1]));
    });
}

function initFilterContainer() {
    var container = jQuery('.ltx-filter-container');
    jQuery(container).each(function (i, el) {
        var tabs = jQuery(container).find('.ltx-tabs-cats');
        if (tabs.length) {
            tabs.on('click', '.ltx-cat', function () {
                var el = jQuery(this), filter = el.data('filter');
                el.parent().parent().find('.active').removeClass('active')
                el.addClass('active');
                if (filter === 0) {
                    container.find('.ltx-filter-item').fadeIn('slow').addClass('show');
                } else if (filter !== '') {
                    container.find('.ltx-filter-item').hide().removeClass('show');
                    container.find('.ltx-filter-item.ltx-filter-id-' + filter).addClass('show').fadeIn('slow');
                }
                container.find('.ltx-filter-item.show').each(function (i, el) {
                    if (i > 5) {
                        jQuery(el).hide().removeClass('show');
                    }
                });
                return false;
            });
            var firstBtn = tabs.find('.ltx-cat:first');
            firstBtn.addClass('active');
            if (firstBtn.data('filter') != 0) {
                container.find('.ltx-filter-item').hide();
                container.find('.ltx-filter-item.ltx-filter-id-' + firstBtn.data('filter') + '').show().addClass('show');
            }
        }
        container.find('.ltx-filter-item').each(function (i, el) {
            if (i > 5) {
                jQuery(el).hide().removeClass('show');
            }
        });
    });
}

function initSliderFilter(swiper) {
    var btns = jQuery('.slider-filter'), container = jQuery('.slider-filter-container');
    var ww = jQuery(window).width(), wh = jQuery(window).height();
    if (btns.length) {
        btns.on('click', 'a.cat, span.cat, span.img', function () {
            var el = jQuery(this), filter = el.data('filter'), limit = el.data('limit');
            container.find('.filter-item').show();
            el.parent().parent().find('.cat-active').removeClass('cat-active')
            el.parent().parent().find('.cat-li-active').removeClass('cat-li-active')
            el.addClass('cat-active');
            el.parent().addClass('cat-li-active');
            if (filter !== '') {
                container.find('.filter-item').hide();
                container.find('.filter-item.filter-type-' + filter + '').fadeIn(900);
            }
            if (swiper !== 0) {
                swiper.slideTo(0, 0);
                swiper.update();
            }
            return false;
        });
        var firstBtn = btns.find('.cat:first')
        firstBtn.addClass('cat-active');
        firstBtn.parent().addClass('cat-li-active');
        container.find('.filter-item').hide();
        container.find('.filter-item.filter-type-' + firstBtn.data('filter') + '').show();
    }
}

function initMenuFilter() {
    var container = jQuery('.ltx-menu-sc'), btns = jQuery('.ltx-menu-sc .menu-filter');
    if (container.length) {
        var bodyStyles = window.getComputedStyle(document.body);
        var niceScrollConf = {
            cursorcolor: bodyStyles.getPropertyValue('--main'),
            cursorborder: "0px",
            background: "#1E1D1C",
            cursorwidth: "10px",
            cursorborderradius: "0px",
            autohidemode: false
        };
        if (btns.length) {
            btns.on('click', 'a.cat, span.cat', function () {
                var el = jQuery(this), filter = el.data('filter');
                container.find('article').show();
                el.parent().parent().find('.cat-active').removeClass('cat-active')
                el.addClass('cat-active');
                if (filter !== '') {
                    container.find('article').hide().removeClass('show');
                    container.find('article.filter-type-' + filter + '').fadeIn('slow').addClass('show');
                }
                jQuery('.menu-sc .items').getNiceScroll().resize();
                return false;
            });
            var firstBtn = btns.find('.cat:first')
            firstBtn.addClass('cat-active');
            container.find('article').hide();
            container.find('article.filter-type-' + firstBtn.data('filter') + '').show().addClass('show');
        }
        jQuery('.ltx-menu-sc.ltx-menu-layout-scroll .items').niceScroll(niceScrollConf);
    }
}

function initSwiperSliders() {
    var ltxSliders = jQuery('.ltx-swiper-slider:not(".inited")');
    jQuery(ltxSliders).each(function (i, el) {
        var container = jQuery(el), id = jQuery(el).attr('id'), autoplay = false, autoplay_interact = false,
            navigation = false, slidesPerView = false, spg = 1, slidesPerGroup = 1, loop = container.data('loop'),
            effect = container.data('effect'), speed = container.data('speed'),
            breakpoints_per = container.data('breakpoints').split(';'),
            breakpoints_viewports = [4000, 1599, 1199, 991, 768, 480], breakpoints = {};
        if (container.data('autoplay') && container.data('autoplay') > 0) {
            if (container.data('autoplay-interaction') === 1) {
                autoplay_interact = true;
            } else {
                autoplay_interact = false;
            }
            autoplay = {delay: container.data('autoplay'), disableOnInteraction: autoplay_interact,}
        }
        if (container.data('arrows')) {
            var arrows_html = '<div class="' + id + '-arrows ltx-arrows ltx-arrows-' + container.data('arrows') + '"><a href="#" class="ltx-arrow-left"></a><a href="#" class="ltx-arrow-right"></a></div>';
            if (container.data('arrows') == 'sides-outside' || container.data('arrows') == 'sides-small') {
                jQuery(container).after(arrows_html);
            } else {
                jQuery(container).append(arrows_html);
            }
            navigation = {nextEl: '.' + id + '-arrows .ltx-arrow-right', prevEl: '.' + id + '-arrows .ltx-arrow-left',}
        }
        if (!loop) loop = false;
        jQuery(breakpoints_per).each(function (i, el) {
            if (!slidesPerView && el) {
                slidesPerView = el;
                if (container.data('slides-per-group')) slidesPerGroup = el;
                slidesPerGroup = 1;
            }
            if (i == 0) return;
            if (el) {
                if (container.data('slides-per-group')) spg = el; else spg = 1;
                spg = 1;
                breakpoints[breakpoints_viewports[i]] = {slidesPerView: el, slidesPerGroup: spg};
                if (spg == 1) delete breakpoints[breakpoints_viewports[i]]['slidesPerGroup'];
            }
        });
        if (!slidesPerView) slidesPerView = 1;
        var conf = {
            initialSlide: 0,
            spaceBetween: 30,
            slidesPerView: slidesPerView,
            slidesPerGroup: slidesPerGroup,
            breakpoints: breakpoints,
            loop: loop,
            speed: speed,
            navigation: navigation,
            autoplay: autoplay,
        };
        if (slidesPerGroup == 1) delete conf['slidesPerGroup'];
        if (effect == 'fade') {
            conf["effect"] = 'fade';
            conf["fadeEffect"] = {crossFade: false};
        } else if (effect == 'coverflow') {
            var ww = jQuery(window).width();
            conf['centeredSlides'] = true;
            conf["effect"] = 'coverflow';
            conf["coverflowEffect"] = {slideShadows: false, rotate: 32, stretch: 1, depth: 150, modifier: 1,};
        } else if (effect == 'flip') {
            conf["effect"] = 'flip';
            conf["flipEffect"] = {slideShadows: false};
        } else if (effect == 'cube') {
            conf["effect"] = 'cube';
            conf["cubeEffect"] = {slideShadows: false};
        }
        var swiper = new Swiper(container, conf);
        if (container.data('autoplay') > 0 && container.data('autoplay-interaction') === 1) {
            swiper.el.addEventListener("mouseenter", function (event) {
                swiper.autoplay.stop();
            }, false);
            swiper.el.addEventListener("mouseout", function (event) {
                swiper.autoplay.start();
            }, false);
        }
        swiper.update();
    });
}

function initSwiper() {
    var products = jQuery('.products-slider'), slidersLtx = jQuery('.slider-sc'),
        servicesEl = jQuery('.services-slider'), locationsEl = jQuery('.ltx-locations-slider'),
        clientsSwiperEl = jQuery('.testimonials-slider'), gallerySwiperEl = jQuery('.swiper-gallery'),
        albumsEl = jQuery('.ltx-album-sc'), artists = jQuery('.ltx-clients'),
        postGalleryEl = jQuery('.ltx-post-gallery'), portfolio = jQuery('.ltx-portfolio-slider'),
        teamEl = jQuery('.ltx-team-slider'), sliderFc = jQuery('.ltx-slider-fc'), textSwiperEl = jQuery('.swiper-text'),
        schedule = jQuery('.swiper-schedule');
    return false;
    if (portfolio.length) {
        if (portfolio.data('autoplay') === 0) {
            var autoplay = false;
        } else {
            var autoplay = {delay: portfolio.data('autoplay'), disableOnInteraction: false,}
        }
        var portfolioSwiper = new Swiper(portfolio, {
            direction: 'horizontal',
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            speed: 1000,
            loop: true,
            autoplay: autoplay,
        });
        portfolioSwiper.update();
    }
    if (albumsEl.length) {
        var galleryThumbs = new Swiper('.ltx-gallery-thumbs', {
            spaceBetween: 30,
            slidesPerView: 6,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.ltx-gallery-top', {
            effect: 'coverflow',
            speed: 1000,
            thumbs: {swiper: galleryThumbs}
        });
    }
    if (teamEl.length) {
        var autoplay = false;
        var teamSwiper = new Swiper(teamEl, {
            speed: 1000,
            spaceBetween: 30,
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            pagination: {el: '.swiper-pages', clickable: true,},
            slidesPerView: 3,
            autoplay: autoplay,
        });
        initSliderFilter(teamSwiper);
    } else {
        initSliderFilter(0);
    }
    if (slidersLtx.length) {
        if (slidersLtx.data('autoplay') === 0) {
            var autoplay = false;
        } else {
            var autoplay = {delay: slidersLtx.data('autoplay'), disableOnInteraction: false,}
        }
        var slidersSwiper = new Swiper(slidersLtx, {
            speed: 1000,
            effect: 'fade',
            fadeEffect: {crossFade: true},
            autoplay: autoplay,
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            pagination: {el: '.swiper-pages', clickable: true,},
        });
        slidersSwiper.update();
    }
    if (sliderFc.length) {
        if (sliderFc.data('autoplay') === 0) {
            var autoplay = false;
        } else {
            var autoplay = {delay: sliderFc.data('autoplay'), disableOnInteraction: false,}
        }
        var sliderFcSwiper = new Swiper(sliderFc, {
            direction: 'horizontal',
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            slidesPerGroup: 3,
            slidesPerView: sliderFc.data('cols'),
            on: {
                init: function () {
                    sliderFcChangeBg();
                },
            },
            autoplay: autoplay,
        });
        sliderFcSwiper.update();
        jQuery('.ltx-slider-fc-wrapper').on('mouseover', '.swiper-slide', function (i, el) {
            jQuery('.ltx-slider-fc-wrapper').addClass('hovered');
            jQuery('.ltx-slider-fc-wrapper .swiper-slide').removeClass('hovered');
            jQuery(i.currentTarget).addClass('hovered');
            sliderFcChangeBg(i.currentTarget);
        });
    }
    if (locationsEl.length) {
        var locationsSwiper = new Swiper(locationsEl, {
            direction: 'horizontal',
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            slidesPerView: locationsEl.data('cols'),
            slidesPerColumn: locationsEl.data('per-col'),
        });
        locationsSwiper.update();
    }
    if (postGalleryEl.length) {
        var postGallerySwiper = new Swiper(postGalleryEl, {
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            loop: true,
            speed: 1000,
            autoplay: postGalleryEl.data('autoplay'),
            autoplayDisableOnInteraction: false,
        });
        postGallerySwiper.update();
    }
    if (products.length) {
        var productsSwiper = new Swiper(products, {
            speed: 1000,
            slidesPerView: products.data('cols'),
            slidesPerGroup: 1,
            navigation: {nextEl: '.arrow-right', prevEl: '.arrow-left',},
            autoplay: products.data('autoplay'),
            autoplayDisableOnInteraction: false,
        });
        initSliderFilter(productsSwiper);
    }
    if (servicesEl.length) {
        jQuery(servicesEl).each(function (i, el) {
            if (servicesEl.data('autoplay') === 0) {
                var autoplay = false;
            } else {
                var autoplay = {delay: servicesEl.data('autoplay'), disableOnInteraction: false,}
            }
            var servicesSwiper = new Swiper(jQuery(el).find('.swiper-container'), {
                speed: 1000,
                spaceBetween: 30,
                loop: true,
                navigation: {nextEl: jQuery(el).find('.arrow-right'), prevEl: jQuery(el).find('.arrow-left'),},
                slidesPerView: servicesEl.data('cols'),
                autoplay: autoplay,
            });
            jQuery(window).on('resize', function () {
                var ww = jQuery(window).width();
                if (ww > 1600) {
                    servicesSwiper.params.slidesPerView = 3;
                }
                if (ww <= 1599) {
                    servicesSwiper.params.slidesPerView = 2;
                }
                if (ww <= 1199) {
                    servicesSwiper.params.slidesPerView = 2;
                }
                if (ww <= 768) {
                    servicesSwiper.params.slidesPerView = 1;
                }
                servicesSwiper.update();
            });
        });
    }
    if (artists.length) {
        jQuery(artists).each(function (i, el) {
            var artistsSwiper = new Swiper(jQuery(el).find('.swiper-container'), {
                slidesPerView: 4,
                navigation: {nextEl: jQuery(el).find('.arrow-right'), prevEl: jQuery(el).find('.arrow-left'),},
            });
            jQuery(window).on('resize', function () {
                var ww = jQuery(window).width();
                if (ww >= 1200) {
                    artistsSwiper.params.slidesPerView = 4;
                }
                if (ww <= 1199) {
                    artistsSwiper.params.slidesPerView = 3;
                }
                if (ww <= 1000) {
                    artistsSwiper.params.slidesPerView = 2;
                }
                if (ww <= 768) {
                    artistsSwiper.params.slidesPerView = 1;
                }
                artistsSwiper.update();
            });
        });
    }
    if (gallerySwiperEl.length) {
        if (gallerySwiperEl.data('autoplay') === 0) {
            var autoplay = false;
        } else {
            var autoplay = {delay: gallerySwiperEl.data('autoplay'), disableOnInteraction: true,}
        }
        var gallerySlides = 7;
        if (gallerySwiperEl.hasClass('grid-big')) gallerySlides = 4;
        var gallerySwiper = new Swiper(gallerySwiperEl, {
            slidesPerView: gallerySlides,
            loop: true,
            freeMode: true,
            speed: 1500,
            autoplay: autoplay,
        });
    }
    if (textSwiperEl.length) {
        var textSwiperEl = new Swiper(textSwiperEl, {
            direction: 'horizontal',
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
        });
    }
    jQuery(window).on('resize', function () {
        var ww = jQuery(window).width(), wh = jQuery(window).height();
        if (albumsEl.length) {
            if (ww > 1200) {
                galleryThumbs.params.slidesPerView = 6;
            }
            if (ww <= 1200) {
                galleryThumbs.params.slidesPerView = 4;
            }
            if (ww <= 1000) {
                galleryThumbs.params.slidesPerView = 3;
            }
            if (ww <= 768) {
                galleryThumbs.params.slidesPerView = 2;
            }
            galleryThumbs.update();
        }
        if (sliderFc.length) {
            if (ww > 1200) {
                sliderFcSwiper.params.slidesPerView = 3;
            }
            if (ww <= 1200) {
                sliderFcSwiper.params.slidesPerView = 3;
            }
            if (ww <= 1000) {
                sliderFcSwiper.params.slidesPerView = 2;
            }
            if (ww <= 768) {
                sliderFcSwiper.params.slidesPerView = 1;
            }
            sliderFcSwiper.update();
        }
        if (teamEl.length) {
            teamSwiper.params.slidesPerView = 3;
            if (ww <= 1199) {
                teamSwiper.params.slidesPerView = 2;
            }
            if (ww <= 768) {
                teamSwiper.params.slidesPerView = 1;
            }
            teamSwiper.update();
        }
        if (gallerySwiperEl.length) {
            if (gallerySlides == 7) {
                gallerySwiper.params.slidesPerView = 7;
                if (ww <= 1199) {
                    gallerySwiper.params.slidesPerView = 5;
                }
                if (ww <= 768) {
                    gallerySwiper.params.slidesPerView = 3;
                }
                if (ww <= 480) {
                    gallerySwiper.params.slidesPerView = 2;
                }
            } else {
                gallerySwiper.params.slidesPerView = 4;
                if (ww <= 1199) {
                    gallerySwiper.params.slidesPerView = 3;
                }
                if (ww <= 768) {
                    gallerySwiper.params.slidesPerView = 3;
                }
                if (ww <= 480) {
                    gallerySwiper.params.slidesPerView = 2;
                }
            }
            gallerySwiper.update();
        }
        if (products.length && products.data('cols') >= 2) {
            if (ww >= 1600) {
                productsSwiper.params.slidesPerView = 4;
            }
            if (ww <= 1599) {
                productsSwiper.params.slidesPerView = 3;
            }
            if (ww <= 1199) {
                productsSwiper.params.slidesPerView = 2;
            }
            if (ww <= 768) {
                productsSwiper.params.slidesPerView = 1;
            }
            productsSwiper.update();
        }
        if (locationsEl.length) {
            if (ww >= 1600) {
                locationsSwiper.params.slidesPerView = 3;
            }
            if (ww <= 1599) {
                locationsSwiper.params.slidesPerView = 2;
            }
            if (ww <= 1199) {
                locationsSwiper.params.slidesPerView = 2;
            }
            if (ww <= 768) {
                locationsSwiper.params.slidesPerView = 1;
            }
            locationsSwiper.update();
        }
    }).resize();
}

function initPortfolio() {
    var wrapper = jQuery('.portfolio-sc');
    if (wrapper.length) {
        jQuery(wrapper).each(function (i, el) {
            var menu = jQuery(el).find('.ltx-portfolio-menu'), items = jQuery(el).find('.ltx-portfolio-items');
            jQuery(menu).find('li:first-child').addClass('active');
            jQuery(items).find('.item:first-child').addClass('active');
            var height = jQuery(items).find('.item:first-child').height();
            wrapper.css('min-height', height + 'px');
            jQuery(menu).on('click', 'a', function () {
                var id = jQuery(this).data('id');
                jQuery(menu).find('.active').removeClass('active');
                jQuery(this).parent().addClass('active');
                jQuery(items).find('.active').removeClass('active');
                jQuery(items).find('.ltx-portfolio-' + id).addClass('active');
                return false;
            });
            jQuery(window).on("resize", function () {
                var height = jQuery(items).find('.item:first-child').height();
                wrapper.css('min-height', height + 'px');
            });
        });
    }
}

function initMasonry() {
    jQuery('.masonry').masonry({itemSelector: '.item', columnWidth: '.item'});
    jQuery('.gallery-inner').masonry({itemSelector: '.mdiv', columnWidth: '.mdiv'});
}

function initMap() {
    jQuery('.ltx-google-maps').each(function (i, mapEl) {
        mapEl = jQuery(mapEl);
        if (mapEl.length) {
            var uluru = {lat: mapEl.data('lat'), lng: mapEl.data('lng')};
            var map = new google.maps.Map(document.getElementById(mapEl.attr('id')), {
                zoom: mapEl.data('zoom'),
                center: uluru,
                scrollwheel: false,
                styles: mapStyles
            });
            var marker = new google.maps.Marker({position: uluru, icon: mapEl.data('marker'), map: map});
        }
    });
}

function ltxGetCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function initTracks() {
    var tracks = jQuery('.ltx-tracks-player');
    if (tracks.length) {
        jQuery(tracks).each(function (i, el) {
            var playerWrapper = jQuery(el), player = jQuery(el).find('.jp-jplayer'), tracks = jQuery(el).data('items');
            var ltxPlaylist = new jPlayerPlaylist({
                jPlayer: "#" + player.attr('id'),
                cssSelectorAncestor: "#" + playerWrapper.attr('id')
            }, [], {
                playlistOptions: {enableRemoveControls: true},
                swfPath: "/js",
                supplied: "mp3",
                smoothPlayBar: true,
                keyEnabled: false,
                audioFullScreen: false
            });
            jQuery(tracks).each(function (t, track) {
                ltxPlaylist.add({title: track.title, artist: track.artist, poster: track.poster, mp3: track.file,});
            });
        });
    }
}

function checkScrollAnimation() {
    var scrollBlock = jQuery('.ltx-check-scroll');
    if (scrollBlock.length) {
        var scrollTop = scrollBlock.offset().top - window.innerHeight;
        if (!scrollBlock.hasClass('done') && jQuery(window).scrollTop() > scrollTop) {
            scrollBlock.addClass('done');
        }
    }
};
"use strict";
var mapStyles = [{
    featureType: "water",
    elementType: "geometry",
    stylers: [{color: "#e9e9e9"}, {lightness: 17}]
}, {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{color: "#f5f5f5"}, {lightness: 20}]
}, {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{color: "#ffffff"}, {lightness: 17}]
}, {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{color: "#ffffff"}, {lightness: 29}, {weight: .2}]
}, {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{color: "#ffffff"}, {lightness: 18}]
}, {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [{color: "#ffffff"}, {lightness: 16}]
}, {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{color: "#f5f5f5"}, {lightness: 21}]
}, {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{color: "#dedede"}, {lightness: 21}]
}, {
    elementType: "labels.text.stroke",
    stylers: [{visibility: "on"}, {color: "#ffffff"}, {lightness: 16}]
}, {
    elementType: "labels.text.fill",
    stylers: [{saturation: 36}, {color: "#333333"}, {lightness: 40}]
}, {elementType: "labels.icon", stylers: [{visibility: "off"}]}, {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{color: "#f2f2f2"}, {lightness: 19}]
}, {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{color: "#fefefe"}, {lightness: 20}]
}, {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{color: "#fefefe"}, {lightness: 17}, {weight: 1.2}]
}];
(function () {
    var t, e, n, r, s, o, i, a, u, c, l, p, h, f, d, g, m, y, v, w, b, S, k, q, x, L, T, P, R, j, E, M, O, A, N, _, F,
        C, U, H, X, W, D, I, z, B, G, J, K, Q = [].slice, V = {}.hasOwnProperty, Y = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var r in e) V.call(e, r) && (t[r] = e[r]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, Z = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
            return -1
        };
    for (b = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !1,
        restartOnRequestAfter: !1,
        target: "body",
        elements: !1,
        eventLag: {minSamples: 10, sampleCount: 3, lagThreshold: 3},
        ajax: !1
    }, R = function () {
        var t;
        return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, w = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (t) {
        return setTimeout(t, 50)
    }, w = function (t) {
        return clearTimeout(t)
    }), O = function (t) {
        var e, n;
        return e = R(), (n = function () {
            var r;
            return r = R() - e, r >= 33 ? (e = R(), t(r, function () {
                return E(n)
            })) : setTimeout(n, 33 - r)
        })()
    }, M = function () {
        var t, e, n;
        return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? Q.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
    }, S = function () {
        var t, e, n, r, s, o, i;
        for (e = arguments[0], r = 2 <= arguments.length ? Q.call(arguments, 1) : [], o = 0, i = r.length; o < i; o++) if (n = r[o]) for (t in n) V.call(n, t) && (s = n[t], null != e[t] && "object" == typeof e[t] && null != s && "object" == typeof s ? S(e[t], s) : e[t] = s);
        return e
    }, m = function (t) {
        var e, n, r, s, o;
        for (n = e = 0, s = 0, o = t.length; s < o; s++) r = t[s], n += Math.abs(r), e++;
        return n / e
    }, q = function (t, e) {
        var n, r, s;
        if (null == t && (t = "options"), null == e && (e = !0), s = document.querySelector("[data-pace-" + t + "]")) {
            if (n = s.getAttribute("data-pace-" + t), !e) return n;
            try {
                return JSON.parse(n)
            } catch (o) {
                return r = o, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0
            }
        }
    }, i = function () {
        function t() {
        }

        return t.prototype.on = function (t, e, n, r) {
            var s;
            return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (s = this.bindings)[t] && (s[t] = []), this.bindings[t].push({
                handler: e,
                ctx: n,
                once: r
            })
        }, t.prototype.once = function (t, e, n) {
            return this.on(t, e, n, !0)
        }, t.prototype.off = function (t, e) {
            var n, r, s;
            if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
                if (null == e) return delete this.bindings[t];
                for (n = 0, s = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);
                return s
            }
        }, t.prototype.trigger = function () {
            var t, e, n, r, s, o, i, a, u;
            if (n = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], null != (i = this.bindings) ? i[n] : void 0) {
                for (s = 0, u = []; s < this.bindings[n].length;) a = this.bindings[n][s], r = a.handler, e = a.ctx, o = a.once, r.apply(null != e ? e : this, t), o ? u.push(this.bindings[n].splice(s, 1)) : u.push(s++);
                return u
            }
        }, t
    }(), c = window.Pace || {}, window.Pace = c, S(c, i.prototype), j = c.options = S({}, b, window.paceOptions, q()), G = ["ajax", "document", "eventLag", "elements"], D = 0, z = G.length; D < z; D++) F = G[D], j[F] === !0 && (j[F] = b[F]);
    u = function (t) {
        function e() {
            return J = e.__super__.constructor.apply(this, arguments)
        }

        return Y(e, t), e
    }(Error), e = function () {
        function t() {
            this.progress = 0
        }

        return t.prototype.getElement = function () {
            var t;
            if (null == this.el) {
                if (t = document.querySelector(j.target), !t) throw new u;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress"><div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
                var e = document.getElementById("ltx-preloader");
                e && (this.el.innerHTML += '<div class="ltx-theme-loader"><div class="ltx-glitch" data-text="' + e.dataset.loader + '">' + e.dataset.loader + "</div></div>"), this.el.innerHTML += '<div class="pace-image"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
            }
            return this.el
        }, t.prototype.finish = function () {
            var t;
            return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, t.prototype.update = function (t) {
            return this.progress = t, this.render()
        }, t.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (t) {
                u = t
            }
            return this.el = void 0
        }, t.prototype.render = function () {
            var t, e, n, r, s, o, i;
            if (null == document.querySelector(j.target)) return !1;
            for (t = this.getElement(), r = "translate3d(" + this.progress + "%, 0, 0)", i = ["webkitTransform", "msTransform", "transform"], s = 0, o = i.length; s < o; s++) e = i[s], t.children[0].style[e] = r;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress
        }, t.prototype.done = function () {
            return this.progress >= 100
        }, t
    }(), a = function () {
        function t() {
            this.bindings = {}
        }

        return t.prototype.trigger = function (t, e) {
            var n, r, s, o, i;
            if (null != this.bindings[t]) {
                for (o = this.bindings[t], i = [], r = 0, s = o.length; r < s; r++) n = o[r], i.push(n.call(this, e));
                return i
            }
        }, t.prototype.on = function (t, e) {
            var n;
            return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
        }, t
    }(), W = window.XMLHttpRequest, X = window.XDomainRequest, H = window.WebSocket, k = function (t, e) {
        var n, r, s;
        s = [];
        for (r in e.prototype) try {
            null == t[r] && "function" != typeof e[r] ? "function" == typeof Object.defineProperty ? s.push(Object.defineProperty(t, r, {
                get: function () {
                    return e.prototype[r]
                }, configurable: !0, enumerable: !0
            })) : s.push(t[r] = e.prototype[r]) : s.push(void 0)
        } catch (o) {
            n = o
        }
        return s
    }, T = [], c.ignore = function () {
        var t, e, n;
        return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], T.unshift("ignore"), n = e.apply(null, t), T.shift(), n
    }, c.track = function () {
        var t, e, n;
        return e = arguments[0], t = 2 <= arguments.length ? Q.call(arguments, 1) : [], T.unshift("track"), n = e.apply(null, t), T.shift(), n
    }, _ = function (t) {
        var e;
        if (null == t && (t = "GET"), "track" === T[0]) return "force";
        if (!T.length && j.ajax) {
            if ("socket" === t && j.ajax.trackWebSockets) return !0;
            if (e = t.toUpperCase(), Z.call(j.ajax.trackMethods, e) >= 0) return !0
        }
        return !1
    }, l = function (t) {
        function e() {
            var t, n = this;
            e.__super__.constructor.apply(this, arguments), t = function (t) {
                var e;
                return e = t.open, t.open = function (r, s, o) {
                    return _(r) && n.trigger("request", {type: r, url: s, request: t}), e.apply(t, arguments)
                }
            }, window.XMLHttpRequest = function (e) {
                var n;
                return n = new W(e), t(n), n
            };
            try {
                k(window.XMLHttpRequest, W)
            } catch (r) {
            }
            if (null != X) {
                window.XDomainRequest = function () {
                    var e;
                    return e = new X, t(e), e
                };
                try {
                    k(window.XDomainRequest, X)
                } catch (r) {
                }
            }
            if (null != H && j.ajax.trackWebSockets) {
                window.WebSocket = function (t, e) {
                    var r;
                    return r = null != e ? new H(t, e) : new H(t), _("socket") && n.trigger("request", {
                        type: "socket",
                        url: t,
                        protocols: e,
                        request: r
                    }), r
                };
                try {
                    k(window.WebSocket, H)
                } catch (r) {
                }
            }
        }

        return Y(e, t), e
    }(a), I = null, x = function () {
        return null == I && (I = new l), I
    }, N = function (t) {
        var e, n, r, s;
        for (s = j.ajax.ignoreURLs, n = 0, r = s.length; n < r; n++) if (e = s[n], "string" == typeof e) {
            if (t.indexOf(e) !== -1) return !0
        } else if (e.test(t)) return !0;
        return !1
    }, x().on("request", function (e) {
        var n, r, s, o, i;
        if (o = e.type, s = e.request, i = e.url, !N(i)) return c.running || j.restartOnRequestAfter === !1 && "force" !== _(o) ? void 0 : (r = arguments, n = j.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function () {
            var e, n, i, a, u, l;
            if (e = "socket" === o ? s.readyState < 2 : 0 < (a = s.readyState) && a < 4) {
                for (c.restart(), u = c.sources, l = [], n = 0, i = u.length; n < i; n++) {
                    if (F = u[n], F instanceof t) {
                        F.watch.apply(F, r);
                        break
                    }
                    l.push(void 0)
                }
                return l
            }
        }, n))
    }), t = function () {
        function t() {
            var t = this;
            this.elements = [], x().on("request", function () {
                return t.watch.apply(t, arguments)
            })
        }

        return t.prototype.watch = function (t) {
            var e, n, r, s;
            if (r = t.type, e = t.request, s = t.url, !N(s)) return n = "socket" === r ? new f(e) : new d(e), this.elements.push(n)
        }, t
    }(), d = function () {
        function t(t) {
            var e, n, r, s, o, i, a = this;
            if (this.progress = 0, null != window.ProgressEvent) for (n = null, t.addEventListener("progress", function (t) {
                return t.lengthComputable ? a.progress = 100 * t.loaded / t.total : a.progress = a.progress + (100 - a.progress) / 2
            }, !1), i = ["load", "abort", "timeout", "error"], r = 0, s = i.length; r < s; r++) e = i[r], t.addEventListener(e, function () {
                return a.progress = 100
            }, !1); else o = t.onreadystatechange, t.onreadystatechange = function () {
                var e;
                return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
            }
        }

        return t
    }(), f = function () {
        function t(t) {
            var e, n, r, s, o = this;
            for (this.progress = 0, s = ["error", "open"], n = 0, r = s.length; n < r; n++) e = s[n], t.addEventListener(e, function () {
                return o.progress = 100
            }, !1)
        }

        return t
    }(), r = function () {
        function t(t) {
            var e, n, r, o;
            for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, n = 0, r = o.length; n < r; n++) e = o[n], this.elements.push(new s(e))
        }

        return t
    }(), s = function () {
        function t(t) {
            this.selector = t, this.progress = 0, this.check()
        }

        return t.prototype.check = function () {
            var t = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return t.check()
            }, j.elements.checkInterval)
        }, t.prototype.done = function () {
            return this.progress = 100
        }, t
    }(), n = function () {
        function t() {
            var t, e, n = this;
            this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
            }
        }

        return t.prototype.states = {loading: 0, interactive: 50, complete: 100}, t
    }(), o = function () {
        function t() {
            var t, e, n, r, s, o = this;
            this.progress = 0, t = 0, s = [], r = 0, n = R(), e = setInterval(function () {
                var i;
                return i = R() - n - 50, n = R(), s.push(i), s.length > j.eventLag.sampleCount && s.shift(), t = m(s), ++r >= j.eventLag.minSamples && t < j.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
            }, 50)
        }

        return t
    }(), h = function () {
        function t(t) {
            this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = j.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = M(this.source, "progress"))
        }

        return t.prototype.tick = function (t, e) {
            var n;
            return null == e && (e = M(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / j.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, j.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + j.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, t
    }(), C = null, A = null, y = null, U = null, g = null, v = null, c.running = !1, L = function () {
        if (j.restartOnPushState) return c.restart()
    }, null != window.history.pushState && (B = window.history.pushState, window.history.pushState = function () {
        return L(), B.apply(window.history, arguments)
    }), null != window.history.replaceState && (K = window.history.replaceState, window.history.replaceState = function () {
        return L(), K.apply(window.history, arguments)
    }), p = {ajax: t, elements: r, document: n, eventLag: o}, (P = function () {
        var t, n, r, s, o, i, a, u;
        for (c.sources = C = [], i = ["ajax", "elements", "document", "eventLag"], n = 0, s = i.length; n < s; n++) t = i[n], j[t] !== !1 && C.push(new p[t](j[t]));
        for (u = null != (a = j.extraSources) ? a : [], r = 0, o = u.length; r < o; r++) F = u[r], C.push(new F(j));
        return c.bar = y = new e, A = [], U = new h
    })(), c.stop = function () {
        return c.trigger("stop"), c.running = !1, y.destroy(), v = !0, null != g && ("function" == typeof w && w(g), g = null), P()
    }, c.restart = function () {
        return c.trigger("restart"), c.stop(), c.start()
    }, c.go = function () {
        var t;
        return c.running = !0, y.render(), t = R(), v = !1, g = O(function (e, n) {
            var r, s, o, i, a, u, l, p, f, d, g, m, w, b, S, k;
            for (p = 100 - y.progress, s = g = 0, o = !0, u = m = 0, b = C.length; m < b; u = ++m) for (F = C[u], d = null != A[u] ? A[u] : A[u] = [], a = null != (k = F.elements) ? k : [F], l = w = 0, S = a.length; w < S; l = ++w) i = a[l], f = null != d[l] ? d[l] : d[l] = new h(i), o &= f.done, f.done || (s++, g += f.tick(e));
            return r = g / s, y.update(U.tick(e, r)), y.done() || o || v ? (y.update(100), c.trigger("done"), setTimeout(function () {
                return y.finish(), c.running = !1, c.trigger("hide")
            }, Math.max(j.ghostTime, Math.max(j.minTime - (R() - t), 0)))) : n()
        })
    }, c.start = function (t) {
        S(j, t), c.running = !0;
        try {
            y.render()
        } catch (e) {
            u = e
        }
        return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function () {
        return c
    }) : "object" == typeof exports ? module.exports = c : j.startOnPageLoad && c.start()
}).call(this);
!function (c, d) {
    "use strict";
    var e = !1, n = !1;
    if (d.querySelector) if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage) if (c.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t) if (t.secret || t.message || t.value) if (!/[^a-zA-Z0-9]/.test(t.secret)) {
            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
            for (o = 0; o < s.length; o++) if (r = s[o], e.source === r.contentWindow) {
                if (r.removeAttribute("style"), "height" === t.message) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3; else if (~~i < 200) i = 200;
                    r.height = i
                }
                if ("link" === t.message) if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host) if (d.activeElement === r) c.top.location.href = t.value
            }
        }
    }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a) (t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ", function () {
    for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
}(), function ($) {
    "function" != typeof window.vc_js && (window.vc_js = function () {
        "use strict";
        vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
    }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
        ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
            var this_element = jQuery(this), sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                sliderFx = this_element.attr("data-flex_fx"), slideshow = !0;
            0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: 800,
                smoothHeight: !0
            })
        })
    }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
        0 < jQuery(".wpb_googleplus").length && function () {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
        0 < jQuery(".wpb_pinterest").length && function () {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
        void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function () {
            var $el = jQuery(this);
            $el.vcwaypoint(function () {
                $el.find(".vc_single_bar").each(function (index) {
                    var bar = jQuery(this).find(".vc_bar"), val = bar.data("percentage-value");
                    setTimeout(function () {
                        bar.css({width: val + "%"})
                    }, 200 * index)
                })
            }, {offset: "85%"})
        })
    }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
        void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
            var $el = jQuery(this);
            $el.vcwaypoint(function () {
                $el.addClass("wpb_start_animation animated")
            }, {offset: "85%"})
        })
    }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
        function event(e) {
            e && e.preventDefault && e.preventDefault();
            var element = jQuery(this).closest(".vc_toggle"), content = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active") ? content.slideUp({
                duration: 300, complete: function () {
                    element.removeClass("vc_toggle_active")
                }
            }) : content.slideDown({
                duration: 300, complete: function () {
                    element.addClass("vc_toggle_active")
                }
            })
        }

        $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
    }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function ($tab) {
        if (jQuery.ui) {
            var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
                ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
                old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
            $call.each(function (index) {
                var $tabs, interval = jQuery(this).attr("data-interval"), tabs_array = [];
                if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                    show: function (event, ui) {
                        wpb_prepare_tab_content(event, ui)
                    }, activate: function (event, ui) {
                        wpb_prepare_tab_content(event, ui)
                    }
                }), interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function () {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (e) {
                    var index, length;
                    e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            })
        }
    }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
        jQuery(".wpb_accordion").each(function (index) {
            var $tabs, active_tab, collapsible, $this = jQuery(this);
            $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                header: "> div > h3",
                autoHeight: !1,
                heightStyle: "content",
                active: active_tab,
                collapsible: collapsible,
                navigation: !0,
                activate: vc_accordionActivate,
                change: function (event, ui) {
                    void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                }
            }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {
            })
        })
    }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
        var layout_modes = {fitrows: "fitRows", masonry: "masonry"};
        jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
            var $container = jQuery(this), $thumbs = $container.find(".wpb_thumbnails"),
                layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
                itemSelector: ".isotope-item",
                layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
            }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function (e) {
                e && e.preventDefault && e.preventDefault();
                var $thumbs = jQuery(this).data("isotope");
                jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({filter: jQuery(this).attr("data-filter")})
            }), jQuery(window).bind("load resize", function () {
                $thumbs.isotope("layout")
            })
        })
    }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
        ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
            var $this = jQuery(this);
            if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
                $this.data("carousel_enabled", !0);
                getColumnsCount(jQuery(this));
                jQuery(this).hasClass("columns_count_1") && 900;
                var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
                carousel_li.css({"margin-right": carousel_li.css("margin-left"), "margin-left": 0});
                var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
                fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function () {
                    screen_size != (screen_size = getSizeName()) && window.setTimeout(function () {
                        location.reload()
                    }, 20)
                })
            }
        })
    }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
        jQuery(".wpb_gallery_slides").each(function (index) {
            var $imagesGrid, this_element = jQuery(this);
            if (this_element.hasClass("wpb_slider_nivo")) {
                var sliderTimeout = 1e3 * this_element.attr("data-interval");
                0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })
            } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
                $imagesGrid.isotope({itemSelector: ".isotope-item", layoutMode: "fitRows"})
            }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            }))
        })
    }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
        try {
            jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: .7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function () {
                    -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                },
                social_tools: ""
            })
        } catch (err) {
            window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
        }
    }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
        return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
        var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

        function fullWidthRow() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function (key, item) {
                var $el = $(this);
                $el.addClass("vc_hidden");
                var $el_full = $el.next(".vc_row-full-width");
                if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
                    var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
                        el_margin_right = parseInt($el.css("margin-right"), 10),
                        offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width();
                    if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                        position: "relative",
                        left: offset,
                        "box-sizing": "border-box",
                        width: width
                    }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    });
                    $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    })
                }
            }), $(document).trigger("vc-full-width-row", $elements)
        }

        function fullHeightRow() {
            var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
            $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
            $(document).trigger("vc-full-height-row", $element)
        }

        $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
            "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
        }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
            var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
            callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
        }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
            forceHeight: !1,
            smoothScrolling: !1,
            mobileCheck: function () {
                return !1
            }
        }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
    }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
    }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
        for (var find = !1, i = 1; !1 === find;) {
            if (el.hasClass("columns_count_" + i)) return find = !0, i;
            i++
        }
    });
    var screen_size = getSizeName();

    function getSizeName() {
        var screen_w = jQuery(window).width();
        return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
    }

    "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
        var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
            $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = panel.find(".vc_round-chart"),
            $line_charts = panel.find(".vc_line-chart"), $carousel = panel.find('[data-ride="vc_carousel"]');
        if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({reload: !1}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({reload: !1}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
            var $frame = $google_maps.find("iframe");
            $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
        }
        panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout")
        })
    }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function () {
        jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
            var $ = window.jQuery, ui = {};
            ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
        })
    }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function (event, ui) {
        if (ui.newPanel.length && ui.newHeader.length) {
            var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"),
                $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
            void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({reload: !1}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({reload: !1}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
                jQuery(this).isotope("layout")
            })
        }
    }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function () {
        return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
    }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function () {
        jQuery("[data-vc-video-bg]").each(function () {
            var youtubeUrl, youtubeId, $element = jQuery(this);
            $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
                $element.has($grid).length && vcResizeVideoBackground($element)
            })) : $element.find(".vc_video-bg").remove()
        })
    }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
        if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
            insertYoutubeVideoAsBackground($element, youtubeId, counter++)
        }, 100);
        var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
        new YT.Player($container[0], {
            width: "100%",
            height: "100%",
            videoId: youtubeId,
            playerVars: {
                playlist: youtubeId,
                iv_load_policy: 3,
                enablejsapi: 1,
                disablekb: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
                loop: 1,
                wmode: "transparent"
            },
            events: {
                onReady: function (event) {
                    event.target.mute().setLoop(!0)
                }
            }
        }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function () {
            vcResizeVideoBackground($element)
        })
    }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function ($element) {
        var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
            containerH = $element.innerHeight();
        containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
            maxWidth: "1000%",
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: iframeW,
            height: iframeH
        })
    }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function (url) {
        if (void 0 === url) return !1;
        var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        return null !== id && id[1]
    }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function () {
        var $ = window.jQuery, $wpbGmapsWidget = $(".wpb_gmaps_widget");
        $wpbGmapsWidget.on("click", function () {
            $("iframe", this).css("pointer-events", "auto")
        }), $wpbGmapsWidget.on("mouseleave", function () {
            $("iframe", this).css("pointer-events", "none")
        }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
    }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function (hoverBox) {
        hoverBox.each(function () {
            var $this = jQuery(this), perspective = 4 * $this.width() + "px";
            $this.css("perspective", perspective)
        })
    }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function (hoverBox) {
        hoverBox.each(function () {
            var $this = jQuery(this), hoverBoxInner = $this.find(".vc-hoverbox-inner");
            hoverBoxInner.css("min-height", 0);
            var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
            hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
        })
    }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function () {
        var hoverBox = jQuery(".vc-hoverbox");
        vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
    }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function ($) {
        window.vc_js()
    })
}(window.jQuery);
;(function ($, window, document, undefined) {
    var pluginName = "zoomSlider", defaults = {
        src: null,
        src2: null,
        speed: 8000,
        initzoom: 1.2,
        switchSpeed: 1000,
        interval: 4600,
        autoplay: true,
        bullets: true,
        overlay: 'plain'
    };

    function Plugin(element, options) {
        this.element = element;
        this.$el = $(element);
        this._defaults = defaults;
        this._name = pluginName;
        var elData = this.$el.data();
        var elDataObj = {};
        for (var key in elData) {
            if (elData.hasOwnProperty(key)) {
                if (key.match(/zs[A-Z]/)) {
                    var keyName = key.substr(2);
                    keyName = keyName.charAt(0).toLowerCase() + keyName.slice(1);
                    elDataObj[keyName] = elData[key]
                }
            }
        }
        this.settings = $.extend({}, defaults, elDataObj, options);
        if (this.settings.src == null || this.settings.src.length < 1) {
            console.log('ZoomSlider terminated - invalid input.');
            return;
        }
        this.init();
    }

    $.extend(Plugin.prototype, {
        init: function () {
            if ($.isArray(this.settings.src) == false) {
                this.settings.src = [this.settings.src];
            }
            if ($.isArray(this.settings.src2) == false) {
                this.settings.src2 = [this.settings.src2];
            }
            this.transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            };
            this.transEndEventName = this.transEndEventNames[Modernizr.prefixed('transition')];
            this.support = Modernizr.csstransitions && Modernizr.csstransforms;
            var transformPrefixed = Modernizr.prefixed('transform');
            transformPrefixed = transformPrefixed.replace(/([A-Z])/g, function (transformPrefixed, m1) {
                return '-' + m1.toLowerCase();
            }).replace(/^ms-/, '-ms-');
            this.transitionProp = {'transition': transformPrefixed + ' ' + this.settings.speed + 'ms ease-out, opacity ' + this.settings.switchSpeed + 'ms'};
            this.numSlides = this.settings.src.length;
            switch (this.$el.css('position')) {
                case'relative':
                case'absolute':
                case'fixed':
                    break;
                default:
                    this.$el.css('position', 'relative');
                    break;
            }
            var self = this;
            var $img = $('<img />');
            if (self.numSlides == 1) {
                self.initSingle();
            } else {
                self.initSlideshow();
            }
            $img.attr('src', this.settings.src[0]);
        }, initSlideshow: function () {
            var self = this;
            var $slideshow = $('<div class="zs-slideshow"></div>'), $slidesWrap = $('<div class="zs-slides"></div>'),
                $arrowsWrap = $('<div class="zs-arrows"></div>'), $zslayer = $('<div class="zs-layer"></div>'),
                $bulletsWrap = $('<div class="zs-bullets"></div>');
            for (i = 0; i < this.numSlides; i++) {
                var $slide = $('<div class="zs-slide zs-slide-' + i + '"></div>');
                $slide.css({'background-image': "url('" + this.settings.src[i] + "')"}).appendTo($slidesWrap);
                var $bullet = $('<div class="zs-bullet zs-bullet-' + i + '"></div>')
                $bullet.appendTo($bulletsWrap);
                if (i == 0) {
                    $slide.addClass('active').css('opacity', 1);
                    $bullet.addClass('active');
                    $('.zs-enabled .ltx-zs-slider-inner.ltx-zs-slide-' + i).addClass('visible');
                }
            }
            self._promoteChildren();
            $slideshow.append($zslayer);
            $slideshow.append($slidesWrap).prependTo(this.$el);
            if (this.settings.bullets == true) {
                $slideshow.append($bulletsWrap);
                $slideshow.on('click', '.zs-bullet', function (e) {
                    self.jump($(this).index());
                });
            }
            if (this.settings.arrows == true) {
                $('<div class=""><span class="ltx-arrow-right">' + this.settings.next + '</span><span class="ltx-arrow-left">' + this.settings.prev + '</span></div>').appendTo($arrowsWrap);
                this.$el.append($arrowsWrap);
                this.$el.on('click', '.ltx-arrow-left', function (e) {
                    self.prev();
                });
                this.$el.on('click', '.ltx-arrow-right', function (e) {
                    self.next();
                });
            }
            this.pos = 0;
            this.pending = null;
            this.switching = false;
            this.$slideshow = $slideshow;
            this.$slides = $slidesWrap.children('.zs-slide');
            this.$bullets = $bulletsWrap.children('.zs-bullet');
            this.$el.addClass('zs-enabled');
            var $firstBlock = $('.zs-enabled .ltx-zs-slider-inner');
            var minHeight = 0;
            $('.ltx-zs-slider-inner').each(function (i, el) {
                if ($(el).height() > minHeight) {
                    minHeight = $(el).height();
                }
            });
            if (this.support) {
                var $firstSlide = this.$slides.eq(0);
                var $initzoom = this.settings.initzoom;
                $firstSlide.css('opacity', 0).css(this.transitionProp);
                $('.ltx-zs-slider-wrapper').css('min-height', minHeight + 'px');
                $('.zs-slideshow').css('min-height', minHeight + 'px');
                jQuery(window).on('resize', function () {
                    $('.ltx-zs-slider-wrapper').css('min-height', minHeight + 'px');
                    $('.zs-slideshow').css('min-height', minHeight + 'px');
                });
                setTimeout(function () {
                    $firstSlide.css({
                        'opacity': 1.0,
                        'transform': 'scale(' + $initzoom + ', ' + $initzoom + ')',
                        'z-index': 2
                    });
                }, 50);
            }
            if (this.settings.autoplay == true) {
                this.play();
            }
        }, initSingle: function () {
            var self = this;
            var $slideshow = $('<div class="zs-slideshow"></div>'), $slidesWrap = $('<div class="zs-slides"></div>'),
                $slide = $('<div class="zs-slide zs-slide-0"></div>');
            $slide.css({'background-image': "url('" + this.settings.src[0] + "')"}).appendTo($slidesWrap);
            $slide.addClass('active').css('opacity', 1);
            $('.zs-enabled .ltx-zs-slider-inner.ltx-zs-slide-0').addClass('visible');
            self._promoteChildren();
            $slideshow.append($slidesWrap).prependTo(this.$el);
            this.$el.addClass('zs-enabled');
            if (this.settings.overlay == 'dots') {
                this.$el.addClass('overlay-dots');
            } else if (this.settings.overlay == 'plain') {
                this.$el.addClass('overlay-plain')
            }
            if (this.support) {
                $slide.css('opacity', 1).css(this.transitionProp);
                if (this.settings) {
                    setTimeout(function () {
                        $slide.css({'opacity': 1.0, 'transform': 'scale(1)', 'z-index': 2})
                    }, 50);
                }
            }
        }, _promoteChildren: function () {
            this.$el.children().each(function (index) {
                $this = $(this);
                if ($this.css('z-index') == 'auto') {
                    $this.css('z-index', 2);
                }
                if ($this.css('position') == 'static') {
                    $this.css('position', 'relative');
                }
            });
        }, jump: function (pos) {
            if (pos >= this.numSlides) {
                console.log('ZoomSlider: jump(pos) aborted. supplied index out of range.');
                return;
            }
            if (this.pos == pos) return;
            if (this.switching) {
                this.pending = pos;
                return;
            }
            var self = this;
            var $lastSlide = this.$slides.eq(this.pos);
            var $nowSlide = this.$slides.eq(pos);
            $('.zs-enabled .ltx-zoompages .current').html(pos + 1);
            $('.zs-enabled .ltx-zs-slider-inner.visible').removeClass('visible');
            $('.zs-enabled .ltx-zs-slider-inner.ltx-zs-slide-' + pos).addClass('visible');
            if (this.support) {
                this.switching = true;
                $lastSlide.css('z-index', 1);
                $nowSlide.addClass('active').css(this.transitionProp).css({
                    'opacity': 1.0,
                    'transform': 'scale(' + this.settings.initzoom + ', ' + this.settings.initzoom + ')',
                    'z-index': 2
                }).on(this.transEndEventName, function (e) {
                    if (e.originalEvent.propertyName == 'opacity') {
                        lastSlideBg = $lastSlide.css('background-image');
                        $lastSlide.removeClass('active').removeAttr('style').css('background-image', lastSlideBg);
                        $nowSlide.off(self.transEndEventName);
                        self.switching = false;
                        if (self.pending != null) {
                            setTimeout(function () {
                                var newPos = self.pending;
                                self.pending = null;
                                self.$bullets.eq(newPos).click();
                            }, 30)
                        }
                    }
                });
            } else {
                $lastSlide.removeClass('active');
                $nowSlide.addClass('active');
            }
            this.$bullets.eq(this.pos).removeClass('active');
            this.$bullets.eq(pos).addClass('active');
            this.pos = pos;
            if (this.settings.autoplay) {
                this.play();
            }
        }, prev: function () {
            var posPrev = this.pos - 1;
            if (posPrev < 0) posPrev = this.numSlides - 1;
            this.jump(posPrev);
        }, next: function () {
            var posNext = this.pos + 1;
            if (posNext >= this.numSlides) posNext = 0;
            this.jump(posNext);
        }, play: function () {
            if (this.timer != null) {
                clearInterval(this.timer);
            }
            var self = this;
            this.settings.autoplay = true;
            this.timer = setInterval(function () {
                self.next();
            }, this.settings.interval);
        }, stop: function () {
            this.settings.autoplay = false;
            clearInterval(this.timer);
            this.timer = null;
        }
    });
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
    var $instances = $('[data-zs-src]');
    if ($instances.length > 0) {
        $instances.each(function (index) {
            var $this = $(this);
            $this.zoomSlider();
        });
    }
})(jQuery, window, document);
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function (t) {
    "use strict";
    t.fn.counterUp = function (e) {
        var n = t.extend({
            time: 400,
            delay: 10,
            beforedelay: 0
        }, e);
        return this.each(function () {
            var e = t(this),
                u = n,
                a = function () {
                    var t = [],
                        n = u.time / u.delay,
                        a = e.text(),
                        r = /[0-9]+,[0-9]+/.test(a);
                    e.data("counterup-nums", t), e.text("0");
                    setTimeout(function () {
                        a = a.replace(/,/g, "");
                        for (var o = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)), c = o ? (a.split(".")[1] || []).length : 0, i = n; i >= 1; i--) {
                            var s = parseInt(a / n * i);
                            if (o && (s = parseFloat(a / n * i).toFixed(c)), r)
                                for (;
                                    /(\d+)(\d{3})/.test(s.toString());) s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            t.unshift(s)
                        }
                        var d = function () {
                            e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), u.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                        };
                        e.data("counterup-func", d), setTimeout(e.data("counterup-func"), u.delay)
                    }, u.beforedelay);
                };
            e.waypoint(a, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);
var mc4wp_forms_config = [];
!function () {
    var s = void 0;
    !function o(u, s, a) {
        function c(e, t) {
            if (!s[e]) {
                if (!u[e]) {
                    var n = !1;
                    if (!t && n) return n(e, !0);
                    if (f) return f(e, !0);
                    var r = new Error("Cannot find module '" + e + "'");
                    throw r.code = "MODULE_NOT_FOUND", r
                }
                var i = s[e] = {exports: {}};
                u[e][0].call(i.exports, function (t) {
                    return c(u[e][1][t] || t)
                }, i, i.exports, o, u, s, a)
            }
            return s[e].exports
        }

        for (var f = !1, t = 0; t < a.length; t++) c(a[t]);
        return c
    }({
        1: [function (t, e, n) {
            "use strict";
            var r, i = (r = t("./forms/conditional-elements.js")) && r.__esModule ? r : {default: r};
            var o, u, s, a, c, f, l = window.mc4wp || {}, h = t("gator"), d = t("./forms/forms.js"),
                p = window.mc4wp_forms_config || {}, m = t("scroll-to-element");

            function v(t) {
                var e = "animated" === p.auto_scroll;
                m(t.element, {duration: e ? 800 : 1, alignment: "middle"})
            }

            if (h(document.body).on("submit", ".mc4wp-form", function (t) {
                var e = d.getByElement(t.target || t.srcElement);
                t.defaultPrevented || d.trigger(e.id + ".submit", [e, t]), t.defaultPrevented || d.trigger("submit", [e, t])
            }), h(document.body).on("focus", ".mc4wp-form", function (t) {
                var e = d.getByElement(t.target || t.srcElement);
                e.started || (d.trigger(e.id + ".started", [e, t]), d.trigger("started", [e, t]), e.started = !0)
            }), h(document.body).on("change", ".mc4wp-form", function (t) {
                var e = d.getByElement(t.target || t.srcElement);
                d.trigger("change", [e, t]), d.trigger(e.id + ".change", [e, t])
            }), i.default.init(), l.listeners) {
                for (var g = l.listeners, y = 0; y < g.length; y++) d.on(g[y].event, g[y].callback);
                delete l.listeners
            }
            if (l.forms = d, p.submitted_form) {
                var w = p.submitted_form, b = document.getElementById(w.element_id), _ = d.getByElement(b);
                o = _, u = w.event, s = w.errors, a = w.data, c = Date.now(), f = document.body.clientHeight, s && o.setData(a), window.scrollY <= 10 && p.auto_scroll && v(o), window.addEventListener("load", function () {
                    d.trigger(o.id + ".submitted", [o]), d.trigger("submitted", [o]), s ? (d.trigger(o.id + ".error", [o, s]), d.trigger("error", [o, s])) : (d.trigger(o.id + ".success", [o, a]), d.trigger("success", [o, a]), d.trigger(o.id + "." + u, [o, a]), d.trigger(u, [o, a]), "updated_subscriber" === u && (d.trigger(o.id + ".subscribed", [o, a, !0]), d.trigger("subscribed", [o, a, !0])));
                    var t = Date.now() - c;
                    p.auto_scroll && 1e3 < t && t < 2e3 && document.body.clientHeight !== f && v(o)
                })
            }
            window.mc4wp = l
        }, {"./forms/conditional-elements.js": 2, "./forms/forms.js": 4, gator: 6, "scroll-to-element": 13}],
        2: [function (t, e, n) {
            "use strict";

            function r(t) {
                for (var e = !!t.getAttribute("data-show-if"), n = e ? t.getAttribute("data-show-if").split(":") : t.getAttribute("data-hide-if").split(":"), r = n[0], i = (1 < n.length ? n[1] : "*").split("|"), o = function (t, e) {
                    for (var n = [], r = t.querySelectorAll('input[name="' + e + '"], select[name="' + e + '"], textarea[name="' + e + '"]'), i = 0; i < r.length; i++) {
                        var o = r[i], u = o.getAttribute("type");
                        ("radio" !== u && "checkbox" !== u || o.checked) && n.push(o.value)
                    }
                    return n
                }(function (t) {
                    for (var e = t; e.parentElement;) if ("FORM" === (e = e.parentElement).tagName) return e;
                    return null
                }(t), r), u = !1, s = 0; s < o.length; s++) {
                    var a = o[s];
                    if (u = -1 < i.indexOf(a) || -1 < i.indexOf("*") && 0 < a.length) break
                }
                t.style.display = e ? u ? "" : "none" : u ? "none" : "";
                var c = t.querySelectorAll("input, select, textarea");
                [].forEach.call(c, function (t) {
                    (u || e) && t.getAttribute("data-was-required") && (t.required = !0, t.removeAttribute("data-was-required")), u && e || !t.required || (t.setAttribute("data-was-required", "true"), t.required = !1)
                })
            }

            function i() {
                var t = document.querySelectorAll(".mc4wp-form [data-show-if], .mc4wp-form [data-hide-if]");
                [].forEach.call(t, r)
            }

            function o(t) {
                if (t.target && t.target.form && !(t.target.form.className.indexOf("mc4wp-form") < 0)) {
                    var e = t.target.form.querySelectorAll("[data-show-if], [data-hide-if]");
                    [].forEach.call(e, r)
                }
            }

            Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
            var u = {
                init: function () {
                    document.addEventListener("keyup", o, !0), document.addEventListener("change", o, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
                }
            };
            n.default = u
        }, {}],
        3: [function (t, e, n) {
            "use strict";

            function r(t, e) {
                this.id = t, this.element = e || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
            }

            var i = t("form-serialize"), o = t("populate.js");
            r.prototype.setData = function (t) {
                try {
                    o(this.element, t)
                } catch (t) {
                    console.error(t)
                }
            }, r.prototype.getData = function () {
                return i(this.element, {hash: !0, empty: !0})
            }, r.prototype.getSerializedData = function () {
                return i(this.element, {hash: !1, empty: !0})
            }, r.prototype.setResponse = function (t) {
                this.element.querySelector(".mc4wp-response").innerHTML = t
            }, r.prototype.reset = function () {
                this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
            }, e.exports = r
        }, {"form-serialize": 5, "populate.js": 8}],
        4: [function (t, e, n) {
            "use strict";
            var r = t("wolfy87-eventemitter"), i = t("./form.js"), o = new r, u = [];

            function s(t, e) {
                e = e || parseInt(t.getAttribute("data-id")) || 0;
                var n = new i(e, t);
                return u.push(n), n
            }

            e.exports = {
                all: function () {
                    return u
                }, get: function (t) {
                    t = parseInt(t);
                    for (var e = 0; e < u.length; e++) if (u[e].id === t) return u[e];
                    return s(document.querySelector(".mc4wp-form-" + t), t)
                }, getByElement: function (t) {
                    for (var e = t.form || t, n = 0; n < u.length; n++) if (u[n].element === e) return u[n];
                    return s(e)
                }, on: o.on.bind(o), trigger: function (t, e) {
                    "submit" === t || 0 < t.indexOf(".submit") ? o.trigger(t, e) : window.setTimeout(function () {
                        o.trigger(t, e)
                    }, 1)
                }, off: o.off.bind(o)
            }
        }, {"./form.js": 3, "wolfy87-eventemitter": 16}],
        5: [function (t, e, n) {
            var v = /^(?:submit|button|image|reset|file)$/i, g = /^(?:input|select|textarea|keygen)/i,
                i = /(\[[^\[\]]*\])/g;

            function y(t, e, n) {
                if (e.match(i)) {
                    !function t(e, n, r) {
                        if (0 === n.length) return e = r;
                        var i = n.shift(), o = i.match(/^\[(.+?)\]$/);
                        if ("[]" === i) return e = e || [], Array.isArray(e) ? e.push(t(null, n, r)) : (e._values = e._values || [], e._values.push(t(null, n, r))), e;
                        if (o) {
                            var u = o[1], s = +u;
                            isNaN(s) ? (e = e || {})[u] = t(e[u], n, r) : (e = e || [])[s] = t(e[s], n, r)
                        } else e[i] = t(e[i], n, r);
                        return e
                    }(t, function (t) {
                        var e = [], n = new RegExp(i), r = /^([^\[\]]*)/.exec(t);
                        for (r[1] && e.push(r[1]); null !== (r = n.exec(t));) e.push(r[1]);
                        return e
                    }(e), n)
                } else {
                    var r = t[e];
                    r ? (Array.isArray(r) || (t[e] = [r]), t[e].push(n)) : t[e] = n
                }
                return t
            }

            function w(t, e, n) {
                return n = n.replace(/(\r)?\n/g, "\r\n"), n = (n = encodeURIComponent(n)).replace(/%20/g, "+"), t + (t ? "&" : "") + encodeURIComponent(e) + "=" + n
            }

            e.exports = function (t, e) {
                "object" != typeof e ? e = {hash: !!e} : void 0 === e.hash && (e.hash = !0);
                for (var n = e.hash ? {} : "", r = e.serializer || (e.hash ? y : w), i = t && t.elements ? t.elements : [], o = Object.create(null), u = 0; u < i.length; ++u) {
                    var s = i[u];
                    if ((e.disabled || !s.disabled) && s.name && (g.test(s.nodeName) && !v.test(s.type))) {
                        var a = s.name, c = s.value;
                        if ("checkbox" !== s.type && "radio" !== s.type || s.checked || (c = void 0), e.empty) {
                            if ("checkbox" !== s.type || s.checked || (c = ""), "radio" === s.type && (o[s.name] || s.checked ? s.checked && (o[s.name] = !0) : o[s.name] = !1), null == c && "radio" == s.type) continue
                        } else if (!c) continue;
                        if ("select-multiple" !== s.type) n = r(n, a, c); else {
                            c = [];
                            for (var f = s.options, l = !1, h = 0; h < f.length; ++h) {
                                var d = f[h], p = e.empty && !d.value, m = d.value || p;
                                d.selected && m && (l = !0, n = e.hash && "[]" !== a.slice(a.length - 2) ? r(n, a + "[]", d.value) : r(n, a, d.value))
                            }
                            !l && e.empty && (n = r(n, a, ""))
                        }
                    }
                }
                if (e.empty) for (var a in o) o[a] || (n = r(n, a, ""));
                return n
            }
        }, {}],
        6: [function (t, e, n) {
            function l(t, e, n) {
                return "_root" == e ? n : t !== n ? function (t) {
                    return i || (i = t.matches ? t.matches : t.webkitMatchesSelector ? t.webkitMatchesSelector : t.mozMatchesSelector ? t.mozMatchesSelector : t.msMatchesSelector ? t.msMatchesSelector : t.oMatchesSelector ? t.oMatchesSelector : d.matchesSelector)
                }(t).call(t, e) ? t : t.parentNode ? (p++, l(t.parentNode, e, n)) : void 0 : void 0
            }

            function h(t, e, n, r) {
                if (m[t.id]) if (e) if (r || n) if (r) {
                    if (m[t.id][e][n]) for (var i = 0; i < m[t.id][e][n].length; i++) if (m[t.id][e][n][i] === r) {
                        m[t.id][e][n].splice(i, 1);
                        break
                    }
                } else delete m[t.id][e][n]; else m[t.id][e] = {}; else for (var o in m[t.id]) m[t.id].hasOwnProperty(o) && (m[t.id][o] = {})
            }

            function r(t, e, n, r) {
                if (this.element) {
                    t instanceof Array || (t = [t]), n || "function" != typeof e || (n = e, e = "_root");
                    var i, o, u, s, a, c = this.id;
                    for (i = 0; i < t.length; i++) r ? h(this, t[i], e, n) : (m[c] && m[c][t[i]] || d.addEvent(this, t[i], f(t[i])), o = this, u = t[i], s = e, a = n, m[o.id] || (m[o.id] = {}), m[o.id][u] || (m[o.id][u] = {}), m[o.id][u][s] || (m[o.id][u][s] = []), m[o.id][u][s].push(a));
                    return this
                }

                function f(e) {
                    return function (t) {
                        !function (t, e, n) {
                            if (m[t][n]) {
                                var r, i, o = e.target || e.srcElement, u = {}, s = 0, a = 0;
                                for (r in p = 0, m[t][n]) m[t][n].hasOwnProperty(r) && (i = l(o, r, v[t].element)) && d.matchesEvent(n, v[t].element, i, "_root" == r, e) && (p++, m[t][n][r].match = i, u[p] = m[t][n][r]);
                                for (e.stopPropagation = function () {
                                    e.cancelBubble = !0
                                }, s = 0; s <= p; s++) if (u[s]) for (a = 0; a < u[s].length; a++) {
                                    if (!1 === u[s][a].call(u[s].match, e)) return d.cancel(e);
                                    if (e.cancelBubble) return
                                }
                            }
                        }(c, t, e)
                    }
                }
            }

            function d(t, e) {
                if (!(this instanceof d)) {
                    for (var n in v) if (v[n].element === t) return v[n];
                    return v[++o] = new d(t, o), v[o]
                }
                this.element = t, this.id = e
            }

            var i, p, o, m, v;
            o = p = 0, m = {}, v = {}, d.prototype.on = function (t, e, n) {
                return r.call(this, t, e, n)
            }, d.prototype.off = function (t, e, n) {
                return r.call(this, t, e, n, !0)
            }, d.matchesSelector = function () {
            }, d.cancel = function (t) {
                t.preventDefault(), t.stopPropagation()
            }, d.addEvent = function (t, e, n) {
                var r = "blur" == e || "focus" == e;
                t.element.addEventListener(e, n, r)
            }, d.matchesEvent = function () {
                return !0
            }, void 0 !== e && e.exports && (e.exports = d), window.Gator = d
        }, {}],
        7: [function (t, s, e) {
            (function (u) {
                (function () {
                    var t, e, n, r, i, o;
                    "undefined" != typeof performance && null !== performance && performance.now ? s.exports = function () {
                        return performance.now()
                    } : null != u && u.hrtime ? (s.exports = function () {
                        return (t() - i) / 1e6
                    }, e = u.hrtime, r = (t = function () {
                        var t;
                        return 1e9 * (t = e())[0] + t[1]
                    })(), o = 1e9 * u.uptime(), i = r - o) : n = Date.now ? (s.exports = function () {
                        return Date.now() - n
                    }, Date.now()) : (s.exports = function () {
                        return (new Date).getTime() - n
                    }, (new Date).getTime())
                }).call(this)
            }).call(this, t("_process"))
        }, {_process: 9}],
        8: [function (t, e, n) {
            var r, f;
            r = this, f = function (t, e, n) {
                for (var r in e) if (e.hasOwnProperty(r)) {
                    var i = r, o = e[r];
                    if (void 0 === o && (o = ""), null === o && (o = ""), void 0 !== n && (i = n + "[" + r + "]"), o.constructor === Array) i += "[]"; else if ("object" == typeof o) {
                        f(t, o, i);
                        continue
                    }
                    var u = t.elements.namedItem(i);
                    if (u) switch (u.type || u[0].type) {
                        default:
                            u.value = o;
                            break;
                        case"radio":
                        case"checkbox":
                            for (var s = 0; s < u.length; s++) u[s].checked = -1 < o.indexOf(u[s].value);
                            break;
                        case"select-multiple":
                            for (var a = o.constructor == Array ? o : [o], c = 0; c < u.options.length; c++) u.options[c].selected |= -1 < a.indexOf(u.options[c].value);
                            break;
                        case"select":
                        case"select-one":
                            u.value = o.toString() || o;
                            break;
                        case"date":
                            u.value = new Date(o).toISOString().split("T")[0]
                    }
                }
            }, "function" == typeof s && "object" == typeof s.amd && s.amd ? s(function () {
                return f
            }) : void 0 !== e && e.exports ? e.exports = f : r.populate = f
        }, {}],
        9: [function (t, e, n) {
            var r, i, o = e.exports = {};

            function u() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === u || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                try {
                    return r(e, 0)
                } catch (t) {
                    try {
                        return r.call(null, e, 0)
                    } catch (t) {
                        return r.call(this, e, 0)
                    }
                }
            }

            !function () {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : u
                } catch (t) {
                    r = u
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    i = s
                }
            }();
            var c, f = [], l = !1, h = -1;

            function d() {
                l && c && (l = !1, c.length ? f = c.concat(f) : h = -1, f.length && p())
            }

            function p() {
                if (!l) {
                    var t = a(d);
                    l = !0;
                    for (var e = f.length; e;) {
                        for (c = f, f = []; ++h < e;) c && c[h].run();
                        h = -1, e = f.length
                    }
                    c = null, l = !1, function (e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(t)
                }
            }

            function m(t, e) {
                this.fun = t, this.array = e
            }

            function v() {
            }

            o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                f.push(new m(t, e)), 1 !== f.length || l || a(p)
            }, m.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function (t) {
                return []
            }, o.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function () {
                return "/"
            }, o.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function () {
                return 0
            }
        }, {}],
        10: [function (l, h, t) {
            (function (t) {
                for (var r = l("performance-now"), e = "undefined" == typeof window ? t : window, n = ["moz", "webkit"], i = "AnimationFrame", o = e["request" + i], u = e["cancel" + i] || e["cancelRequest" + i], s = 0; !o && s < n.length; s++) o = e[n[s] + "Request" + i], u = e[n[s] + "Cancel" + i] || e[n[s] + "CancelRequest" + i];
                if (!o || !u) {
                    var a = 0, c = 0, f = [];
                    o = function (t) {
                        if (0 === f.length) {
                            var e = r(), n = Math.max(0, 1e3 / 60 - (e - a));
                            a = n + e, setTimeout(function () {
                                for (var t = f.slice(0), e = f.length = 0; e < t.length; e++) if (!t[e].cancelled) try {
                                    t[e].callback(a)
                                } catch (t) {
                                    setTimeout(function () {
                                        throw t
                                    }, 0)
                                }
                            }, Math.round(n))
                        }
                        return f.push({handle: ++c, callback: t, cancelled: !1}), c
                    }, u = function (t) {
                        for (var e = 0; e < f.length; e++) f[e].handle === t && (f[e].cancelled = !0)
                    }
                }
                h.exports = function (t) {
                    return o.call(e, t)
                }, h.exports.cancel = function () {
                    u.apply(e, arguments)
                }, h.exports.polyfill = function (t) {
                    (t = t || e).requestAnimationFrame = o, t.cancelAnimationFrame = u
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {"performance-now": 7}],
        11: [function (t, e, n) {
            n.linear = function (t) {
                return t
            }, n.inQuad = function (t) {
                return t * t
            }, n.outQuad = function (t) {
                return t * (2 - t)
            }, n.inOutQuad = function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, n.inCube = function (t) {
                return t * t * t
            }, n.outCube = function (t) {
                return --t * t * t + 1
            }, n.inOutCube = function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, n.inQuart = function (t) {
                return t * t * t * t
            }, n.outQuart = function (t) {
                return 1 - --t * t * t * t
            }, n.inOutQuart = function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, n.inQuint = function (t) {
                return t * t * t * t * t
            }, n.outQuint = function (t) {
                return --t * t * t * t * t + 1
            }, n.inOutQuint = function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, n.inSine = function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, n.outSine = function (t) {
                return Math.sin(t * Math.PI / 2)
            }, n.inOutSine = function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, n.inExpo = function (t) {
                return 0 == t ? 0 : Math.pow(1024, t - 1)
            }, n.outExpo = function (t) {
                return 1 == t ? t : 1 - Math.pow(2, -10 * t)
            }, n.inOutExpo = function (t) {
                return 0 == t ? 0 : 1 == t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }, n.inCirc = function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, n.outCirc = function (t) {
                return Math.sqrt(1 - --t * t)
            }, n.inOutCirc = function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, n.inBack = function (t) {
                return t * t * (2.70158 * t - 1.70158)
            }, n.outBack = function (t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            }, n.inOutBack = function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((1 + e) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + e) * t + e) + 2)
            }, n.inBounce = function (t) {
                return 1 - n.outBounce(1 - t)
            }, n.outBounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, n.inOutBounce = function (t) {
                return t < .5 ? .5 * n.inBounce(2 * t) : .5 * n.outBounce(2 * t - 1) + .5
            }, n.inElastic = function (t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
            }, n.outElastic = function (t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
            }, n.inOutElastic = function (t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
            }, n["in-quad"] = n.inQuad, n["out-quad"] = n.outQuad, n["in-out-quad"] = n.inOutQuad, n["in-cube"] = n.inCube, n["out-cube"] = n.outCube, n["in-out-cube"] = n.inOutCube, n["in-quart"] = n.inQuart, n["out-quart"] = n.outQuart, n["in-out-quart"] = n.inOutQuart, n["in-quint"] = n.inQuint, n["out-quint"] = n.outQuint, n["in-out-quint"] = n.inOutQuint, n["in-sine"] = n.inSine, n["out-sine"] = n.outSine, n["in-out-sine"] = n.inOutSine, n["in-expo"] = n.inExpo, n["out-expo"] = n.outExpo, n["in-out-expo"] = n.inOutExpo, n["in-circ"] = n.inCirc, n["out-circ"] = n.outCirc, n["in-out-circ"] = n.inOutCirc, n["in-back"] = n.inBack, n["out-back"] = n.outBack, n["in-out-back"] = n.inOutBack, n["in-bounce"] = n.inBounce, n["out-bounce"] = n.outBounce, n["in-out-bounce"] = n.inOutBounce, n["in-elastic"] = n.inElastic, n["out-elastic"] = n.outElastic, n["in-out-elastic"] = n.inOutElastic
        }, {}],
        12: [function (t, e, n) {
            function r(t) {
                if (t) return function (t) {
                    for (var e in r.prototype) t[e] = r.prototype[e];
                    return t
                }(t)
            }

            r.prototype.on = r.prototype.addEventListener = function (t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, r.prototype.once = function (t, e) {
                function n() {
                    this.off(t, n), e.apply(this, arguments)
                }

                return n.fn = e, this.on(t, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n, r = this._callbacks["$" + t];
                if (!r) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var i = 0; i < r.length; i++) if ((n = r[i]) === e || n.fn === e) {
                    r.splice(i, 1);
                    break
                }
                return 0 === r.length && delete this._callbacks["$" + t], this
            }, r.prototype.emit = function (t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1), n = this._callbacks["$" + t];
                if (n) for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
                return this
            }, r.prototype.listeners = function (t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, r.prototype.hasListeners = function (t) {
                return !!this.listeners(t).length
            }, void 0 !== e && (e.exports = r)
        }, {}],
        13: [function (t, e, n) {
            var r = t("./scroll-to");
            e.exports = function (t, e) {
                if (e = e || {}, "string" == typeof t && (t = document.querySelector(t)), t) return r(0, function (t, e, n) {
                    var r, i = document.body, o = document.documentElement, u = t.getBoundingClientRect(),
                        s = o.clientHeight,
                        a = Math.max(i.scrollHeight, i.offsetHeight, o.clientHeight, o.scrollHeight, o.offsetHeight);
                    e = e || 0, r = "bottom" === n ? u.bottom - s : "middle" === n ? u.bottom - s / 2 - u.height / 2 : u.top;
                    var c = a - s;
                    return Math.min(r + e + window.pageYOffset, c)
                }(t, e.offset, e.align), e)
            }
        }, {"./scroll-to": 14}],
        14: [function (t, e, n) {
            var u = t("./tween"), s = t("raf");
            e.exports = function (t, e, n) {
                n = n || {};
                var r = {
                    top: window.pageYOffset || document.documentElement.scrollTop,
                    left: window.pageXOffset || document.documentElement.scrollLeft
                }, i = u(r).ease(n.ease || "out-circ").to({top: e, left: t}).duration(n.duration || 1e3);

                function o() {
                    s(o), i.update()
                }

                return i.update(function (t) {
                    window.scrollTo(0 | t.left, 0 | t.top)
                }), i.on("end", function () {
                    o = function () {
                    }
                }), o(), i
            }
        }, {"./tween": 15, raf: 10}],
        15: [function (t, e, n) {
            var r = t("./ease");

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                this._from = t, this.ease("linear"), this.duration(500)
            }

            t("./emitter")(i.prototype), i.prototype.reset = function () {
                return this.isArray = "[object Array]" === Object.prototype.toString.call(this._from), this._curr = function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }({}, this._from), this._done = !1, this._start = Date.now(), this
            }, i.prototype.to = function (t) {
                return this.reset(), this._to = t, this
            }, i.prototype.duration = function (t) {
                return this._duration = t, this
            }, i.prototype.ease = function (t) {
                if (!(t = "function" == typeof t ? t : r[t])) throw new TypeError("invalid easing function");
                return this._ease = t, this
            }, i.prototype.stop = function () {
                return this.stopped = !0, this._done = !0, this.emit("stop"), this.emit("end"), this
            }, i.prototype.step = function () {
                if (!this._done) {
                    var t = this._duration, e = Date.now();
                    if (t <= e - this._start) return this._from = this._to, this._update(this._to), this._done = !0, this.emit("end"), this;
                    var n = this._from, r = this._to, i = this._curr, o = (0, this._ease)((e - this._start) / t);
                    if (this.isArray) {
                        for (var u = 0; u < n.length; ++u) i[u] = n[u] + (r[u] - n[u]) * o;
                        return this._update(i), this
                    }
                    for (var s in n) i[s] = n[s] + (r[s] - n[s]) * o;
                    return this._update(i), this
                }
            }, i.prototype.update = function (t) {
                return 0 == arguments.length ? this.step() : (this._update = t, this)
            }, e.exports = i
        }, {"./ease": 11, "./emitter": 12}],
        16: [function (t, u, e) {
            !function (t) {
                "use strict";

                function e() {
                }

                var n = e.prototype, r = t.EventEmitter;

                function o(t, e) {
                    for (var n = t.length; n--;) if (t[n].listener === e) return n;
                    return -1
                }

                function i(t) {
                    return function () {
                        return this[t].apply(this, arguments)
                    }
                }

                n.getListeners = function (t) {
                    var e, n, r = this._getEvents();
                    if (t instanceof RegExp) for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]); else e = r[t] || (r[t] = []);
                    return e
                }, n.flattenListeners = function (t) {
                    var e, n = [];
                    for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                    return n
                }, n.getListenersAsObject = function (t) {
                    var e, n = this.getListeners(t);
                    return n instanceof Array && ((e = {})[t] = n), e || n
                }, n.addListener = function (t, e) {
                    if (!function t(e) {
                        return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                    }(e)) throw new TypeError("listener must be a function");
                    var n, r = this.getListenersAsObject(t), i = "object" == typeof e;
                    for (n in r) r.hasOwnProperty(n) && -1 === o(r[n], e) && r[n].push(i ? e : {listener: e, once: !1});
                    return this
                }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
                    return this.addListener(t, {listener: e, once: !0})
                }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
                    return this.getListeners(t), this
                }, n.defineEvents = function (t) {
                    for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                    return this
                }, n.removeListener = function (t, e) {
                    var n, r, i = this.getListenersAsObject(t);
                    for (r in i) i.hasOwnProperty(r) && -1 !== (n = o(i[r], e)) && i[r].splice(n, 1);
                    return this
                }, n.off = i("removeListener"), n.addListeners = function (t, e) {
                    return this.manipulateListeners(!1, t, e)
                }, n.removeListeners = function (t, e) {
                    return this.manipulateListeners(!0, t, e)
                }, n.manipulateListeners = function (t, e, n) {
                    var r, i, o = t ? this.removeListener : this.addListener,
                        u = t ? this.removeListeners : this.addListeners;
                    if ("object" != typeof e || e instanceof RegExp) for (r = n.length; r--;) o.call(this, e, n[r]); else for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : u.call(this, r, i));
                    return this
                }, n.removeEvent = function (t) {
                    var e, n = typeof t, r = this._getEvents();
                    if ("string" == n) delete r[t]; else if (t instanceof RegExp) for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e]; else delete this._events;
                    return this
                }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
                    var n, r, i, o, u = this.getListenersAsObject(t);
                    for (o in u) if (u.hasOwnProperty(o)) for (n = u[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                    return this
                }, n.trigger = i("emitEvent"), n.emit = function (t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(t, e)
                }, n.setOnceReturnValue = function (t) {
                    return this._onceReturnValue = t, this
                }, n._getOnceReturnValue = function () {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                }, n._getEvents = function () {
                    return this._events || (this._events = {})
                }, e.noConflict = function () {
                    return t.EventEmitter = r, e
                }, "function" == typeof s && s.amd ? s(function () {
                    return e
                }) : "object" == typeof u && u.exports ? u.exports = e : t.EventEmitter = e
            }("undefined" != typeof window ? window : this || {})
        }, {}]
    }, {}, [1])
}();
;