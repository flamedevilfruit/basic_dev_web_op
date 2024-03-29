! function(e) {
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function(e) {
	"use strict";

	function n(n, D) {
		function P(n) {
			if (!(!0 === me.data(M + "_intouch") || e(n.target).closest(D.excludedElements, me).length > 0)) {
				var o = n.originalEvent ? n.originalEvent : n;
				if (!o.pointerType || "mouse" != o.pointerType || 0 != D.fallbackToMouseEvents) {
					var a, u = o.touches,
						s = u ? u[0] : o;
					return xe = b, u ? Se = u.length : !1 !== D.preventDefaultEvents && n.preventDefault(), he = 0, de = null, fe = null, ye = null, ge = 0, we = 0, ve = 0, Te = 1, be = 0, (c = {})[t] = ne(t), c[i] = ne(i), c[r] = ne(r), c[l] = ne(l), Ee = c, Z(), K(0, s), !u || Se === D.fingers || D.fingers === v || C() ? (Me = le(), 2 == Se && (K(1, u[1]), we = ve = ie(Oe[0].start, Oe[1].start)), (D.swipeStatus || D.pinchStatus) && (a = j(o, xe))) : a = !1, !1 === a ? (j(o, xe = m), a) : (D.hold && (Ae = setTimeout(e.proxy(function() {
						me.trigger("hold", [o.target]), D.hold && (a = D.hold.call(me, o, o.target))
					}, this), D.longTapThreshold)), J(!0), null)
				}
			}
			var c
		}

		function L(n) {
			var c, p, h, d, f = n.originalEvent ? n.originalEvent : n;
			if (xe !== E && xe !== m && !B()) {
				var T, b = f.touches,
					x = $(b ? b[0] : f);
				if (De = le(), b && (Se = b.length), D.hold && clearTimeout(Ae), xe = y, 2 == Se && (0 == we ? (K(1, b[1]), we = ve = ie(Oe[0].start, Oe[1].start)) : ($(b[1]), ve = ie(Oe[0].end, Oe[1].end), Oe[0].end, Oe[1].end, ye = Te < 1 ? a : o), Te = (ve / we * 1).toFixed(2), be = Math.abs(we - ve)), Se === D.fingers || D.fingers === v || !b || C()) {
					if (de = re(x.start, x.end), function(e, n) {
							if (!1 !== D.preventDefaultEvents)
								if (D.allowPageScroll === u) e.preventDefault();
								else {
									var o = D.allowPageScroll === s;
									switch (n) {
										case t:
											(D.swipeLeft && o || !o && D.allowPageScroll != g) && e.preventDefault();
											break;
										case i:
											(D.swipeRight && o || !o && D.allowPageScroll != g) && e.preventDefault();
											break;
										case r:
											(D.swipeUp && o || !o && D.allowPageScroll != w) && e.preventDefault();
											break;
										case l:
											(D.swipeDown && o || !o && D.allowPageScroll != w) && e.preventDefault()
									}
								}
						}(n, fe = re(x.last, x.end)), h = x.start, d = x.end, he = Math.round(Math.sqrt(Math.pow(d.x - h.x, 2) + Math.pow(d.y - h.y, 2))), ge = te(), function(e, n) {
							e != u && (n = Math.max(n, ee(e)), Ee[e].distance = n)
						}(de, he), T = j(f, xe), !D.triggerOnTouchEnd || D.triggerOnTouchLeave) {
						var S = !0;
						if (D.triggerOnTouchLeave) {
							var O = {
								left: (p = (c = e(c = this)).offset()).left,
								right: p.left + c.outerWidth(),
								top: p.top,
								bottom: p.top + c.outerHeight()
							};
							S = function(e, n) {
								return e.x > n.left && e.x < n.right && e.y > n.top && e.y < n.bottom
							}(x.end, O)
						}!D.triggerOnTouchEnd && S ? xe = U(y) : D.triggerOnTouchLeave && !S && (xe = U(E)), xe != m && xe != E || j(f, xe)
					}
				} else j(f, xe = m);
				!1 === T && j(f, xe = m)
			}
		}

		function R(e) {
			var n = e.originalEvent ? e.originalEvent : e,
				t = n.touches;
			if (t) {
				if (t.length && !B()) return function(e) {
					Pe = le(), Le = e.touches.length + 1
				}(n), !0;
				if (t.length && B()) return !0
			}
			return B() && (Se = Le), De = le(), ge = te(), _() || !H() ? j(n, xe = m) : D.triggerOnTouchEnd || !1 === D.triggerOnTouchEnd && xe === y ? (!1 !== D.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), j(n, xe = E)) : !D.triggerOnTouchEnd && W() ? N(n, xe = E, h) : xe === y && j(n, xe = m), J(!1), null
		}

		function k() {
			Se = 0, De = 0, Me = 0, we = 0, ve = 0, Te = 1, Z(), J(!1)
		}

		function A(e) {
			var n = e.originalEvent ? e.originalEvent : e;
			D.triggerOnTouchLeave && j(n, xe = U(E))
		}

		function I() {
			me.unbind(ae, P), me.unbind(pe, k), me.unbind(ue, L), me.unbind(se, R), ce && me.unbind(ce, A), J(!1)
		}

		function U(e) {
			var n = e,
				t = q(),
				i = H(),
				r = _();
			return !t || r ? n = m : !i || e != y || D.triggerOnTouchEnd && !D.triggerOnTouchLeave ? !i && e == E && D.triggerOnTouchLeave && (n = m) : n = E, n
		}

		function j(e, n) {
			var t, i = e.touches;
			return (!(!F() || !X()) || X()) && (t = N(e, n, c)), (!(!Q() || !C()) || C()) && !1 !== t && (t = N(e, n, p)), G() && z() && !1 !== t ? t = N(e, n, d) : ge > D.longTapThreshold && he < T && D.longTap && !1 !== t ? t = N(e, n, f) : !(1 !== Se && x || !(isNaN(he) || he < D.threshold) || !W()) && !1 !== t && (t = N(e, n, h)), n === m && k(), n === E && (i && i.length || k()), t
		}

		function N(n, u, s) {
			var g;
			if (s == c) {
				if (me.trigger("swipeStatus", [u, de || null, he || 0, ge || 0, Se, Oe, fe]), D.swipeStatus && !1 === (g = D.swipeStatus.call(me, n, u, de || null, he || 0, ge || 0, Se, Oe, fe))) return !1;
				if (u == E && F()) {
					if (clearTimeout(ke), clearTimeout(Ae), me.trigger("swipe", [de, he, ge, Se, Oe, fe]), D.swipe && !1 === (g = D.swipe.call(me, n, de, he, ge, Se, Oe, fe))) return !1;
					switch (de) {
						case t:
							me.trigger("swipeLeft", [de, he, ge, Se, Oe, fe]), D.swipeLeft && (g = D.swipeLeft.call(me, n, de, he, ge, Se, Oe, fe));
							break;
						case i:
							me.trigger("swipeRight", [de, he, ge, Se, Oe, fe]), D.swipeRight && (g = D.swipeRight.call(me, n, de, he, ge, Se, Oe, fe));
							break;
						case r:
							me.trigger("swipeUp", [de, he, ge, Se, Oe, fe]), D.swipeUp && (g = D.swipeUp.call(me, n, de, he, ge, Se, Oe, fe));
							break;
						case l:
							me.trigger("swipeDown", [de, he, ge, Se, Oe, fe]), D.swipeDown && (g = D.swipeDown.call(me, n, de, he, ge, Se, Oe, fe))
					}
				}
			}
			if (s == p) {
				if (me.trigger("pinchStatus", [u, ye || null, be || 0, ge || 0, Se, Te, Oe]), D.pinchStatus && !1 === (g = D.pinchStatus.call(me, n, u, ye || null, be || 0, ge || 0, Se, Te, Oe))) return !1;
				if (u == E && Q()) switch (ye) {
					case o:
						me.trigger("pinchIn", [ye || null, be || 0, ge || 0, Se, Te, Oe]), D.pinchIn && (g = D.pinchIn.call(me, n, ye || null, be || 0, ge || 0, Se, Te, Oe));
						break;
					case a:
						me.trigger("pinchOut", [ye || null, be || 0, ge || 0, Se, Te, Oe]), D.pinchOut && (g = D.pinchOut.call(me, n, ye || null, be || 0, ge || 0, Se, Te, Oe))
				}
			}
			return s == h ? u !== m && u !== E || (clearTimeout(ke), clearTimeout(Ae), z() && !G() ? (Re = le(), ke = setTimeout(e.proxy(function() {
				Re = null, me.trigger("tap", [n.target]), D.tap && (g = D.tap.call(me, n, n.target))
			}, this), D.doubleTapThreshold)) : (Re = null, me.trigger("tap", [n.target]), D.tap && (g = D.tap.call(me, n, n.target)))) : s == d ? u !== m && u !== E || (clearTimeout(ke), clearTimeout(Ae), Re = null, me.trigger("doubletap", [n.target]), D.doubleTap && (g = D.doubleTap.call(me, n, n.target))) : s == f && (u !== m && u !== E || (clearTimeout(ke), Re = null, me.trigger("longtap", [n.target]), D.longTap && (g = D.longTap.call(me, n, n.target)))), g
		}

		function H() {
			var e = !0;
			return null !== D.threshold && (e = he >= D.threshold), e
		}

		function _() {
			var e = !1;
			return null !== D.cancelThreshold && null !== de && (e = ee(de) - he >= D.cancelThreshold), e
		}

		function q() {
			return !(D.maxTimeThreshold && ge >= D.maxTimeThreshold)
		}

		function Q() {
			var e = Y(),
				n = V(),
				t = null === D.pinchThreshold || be >= D.pinchThreshold;
			return e && n && t
		}

		function C() {
			return !!(D.pinchStatus || D.pinchIn || D.pinchOut)
		}

		function F() {
			var e = q(),
				n = H(),
				t = Y(),
				i = V();
			return !_() && i && t && n && e
		}

		function X() {
			return !!(D.swipe || D.swipeStatus || D.swipeLeft || D.swipeRight || D.swipeUp || D.swipeDown)
		}

		function Y() {
			return Se === D.fingers || D.fingers === v || !x
		}

		function V() {
			return 0 !== Oe[0].end.x
		}

		function W() {
			return !!D.tap
		}

		function z() {
			return !!D.doubleTap
		}

		function G() {
			if (null == Re) return !1;
			var e = le();
			return z() && e - Re <= D.doubleTapThreshold
		}

		function Z() {
			Pe = 0, Le = 0
		}

		function B() {
			var e = !1;
			Pe && (le() - Pe <= D.fingerReleaseThreshold && (e = !0));
			return e
		}

		function J(e) {
			me && (!0 === e ? (me.bind(ue, L), me.bind(se, R), ce && me.bind(ce, A)) : (me.unbind(ue, L, !1), me.unbind(se, R, !1), ce && me.unbind(ce, A, !1)), me.data(M + "_intouch", !0 === e))
		}

		function K(e, n) {
			var t = {
				start: {
					x: 0,
					y: 0
				},
				last: {
					x: 0,
					y: 0
				},
				end: {
					x: 0,
					y: 0
				}
			};
			return t.start.x = t.last.x = t.end.x = n.pageX || n.clientX, t.start.y = t.last.y = t.end.y = n.pageY || n.clientY, Oe[e] = t, t
		}

		function $(e) {
			var n = void 0 !== e.identifier ? e.identifier : 0,
				t = function(e) {
					return Oe[e] || null
				}(n);
			return null === t && (t = K(n, e)), t.last.x = t.end.x, t.last.y = t.end.y, t.end.x = e.pageX || e.clientX, t.end.y = e.pageY || e.clientY, t
		}

		function ee(e) {
			if (Ee[e]) return Ee[e].distance
		}

		function ne(e) {
			return {
				direction: e,
				distance: 0
			}
		}

		function te() {
			return De - Me
		}

		function ie(e, n) {
			var t = Math.abs(e.x - n.x),
				i = Math.abs(e.y - n.y);
			return Math.round(Math.sqrt(t * t + i * i))
		}

		function re(e, n) {
			if (a = n, (o = e).x == a.x && o.y == a.y) return u;
			var o, a, s = function(e, n) {
				var t = e.x - n.x,
					i = n.y - e.y,
					r = Math.atan2(i, t),
					l = Math.round(180 * r / Math.PI);
				return l < 0 && (l = 360 - Math.abs(l)), l
			}(e, n);
			return s <= 45 && s >= 0 ? t : s <= 360 && s >= 315 ? t : s >= 135 && s <= 225 ? i : s > 45 && s < 135 ? l : r
		}

		function le() {
			return (new Date).getTime()
		}
		D = e.extend({}, D);
		var oe = x || O || !D.fallbackToMouseEvents,
			ae = oe ? O ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
			ue = oe ? O ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
			se = oe ? O ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
			ce = oe ? O ? "mouseleave" : null : "mouseleave",
			pe = O ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
			he = 0,
			de = null,
			fe = null,
			ge = 0,
			we = 0,
			ve = 0,
			Te = 1,
			be = 0,
			ye = 0,
			Ee = null,
			me = e(n),
			xe = "start",
			Se = 0,
			Oe = {},
			Me = 0,
			De = 0,
			Pe = 0,
			Le = 0,
			Re = 0,
			ke = null,
			Ae = null;
		try {
			me.bind(ae, P), me.bind(pe, k)
		} catch (n) {
			e.error("events not supported " + ae + "," + pe + " on jQuery.swipe")
		}
		this.enable = function() {
			return this.disable(), me.bind(ae, P), me.bind(pe, k), me
		}, this.disable = function() {
			return I(), me
		}, this.destroy = function() {
			I(), me.data(M, null), me = null
		}, this.option = function(n, t) {
			if ("object" == typeof n) D = e.extend(D, n);
			else if (void 0 !== D[n]) {
				if (void 0 === t) return D[n];
				D[n] = t
			} else {
				if (!n) return D;
				e.error("Option " + n + " does not exist on jQuery.swipe.options")
			}
			return null
		}
	}
	var t = "left",
		i = "right",
		r = "up",
		l = "down",
		o = "in",
		a = "out",
		u = "none",
		s = "auto",
		c = "swipe",
		p = "pinch",
		h = "tap",
		d = "doubletap",
		f = "longtap",
		g = "horizontal",
		w = "vertical",
		v = "all",
		T = 10,
		b = "start",
		y = "move",
		E = "end",
		m = "cancel",
		x = "ontouchstart" in window,
		S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !x,
		O = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !x,
		M = "TouchSwipe";
	e.fn.swipe = function(t) {
		var i = e(this),
			r = i.data(M);
		if (r && "string" == typeof t) {
			if (r[t]) return r[t].apply(r, Array.prototype.slice.call(arguments, 1));
			e.error("Method " + t + " does not exist on jQuery.swipe")
		} else if (r && "object" == typeof t) r.option.apply(r, arguments);
		else if (!(r || "object" != typeof t && t)) return function(t) {
			return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = u), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each(function() {
				var i = e(this),
					r = i.data(M);
				r || (r = new n(this, t), i.data(M, r))
			})
		}.apply(this, arguments);
		return i
	}, e.fn.swipe.version = "1.6.18", e.fn.swipe.defaults = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null,
		tap: null,
		doubleTap: null,
		longTap: null,
		hold: null,
		triggerOnTouchEnd: !0,
		triggerOnTouchLeave: !1,
		allowPageScroll: "auto",
		fallbackToMouseEvents: !0,
		excludedElements: ".noSwipe",
		preventDefaultEvents: !0
	}, e.fn.swipe.phases = {
		PHASE_START: b,
		PHASE_MOVE: y,
		PHASE_END: E,
		PHASE_CANCEL: m
	}, e.fn.swipe.directions = {
		LEFT: t,
		RIGHT: i,
		UP: r,
		DOWN: l,
		IN: o,
		OUT: a
	}, e.fn.swipe.pageScroll = {
		NONE: u,
		HORIZONTAL: g,
		VERTICAL: w,
		AUTO: s
	}, e.fn.swipe.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		FOUR: 4,
		FIVE: 5,
		ALL: v
	}
});