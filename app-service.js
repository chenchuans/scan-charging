	var __wxAppData = __wxAppData || {};
	var __wxRoute = __wxRoute || "";
	var __wxRouteBegin = __wxRouteBegin || "";
	var __wxAppCode__ = __wxAppCode__ || {};
	var global = global || {};
	var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {};
	var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";
	var Component = Component || function () {};
	var definePlugin = definePlugin || function () {};
	var requirePlugin = requirePlugin || function () {};
	var Behavior = Behavior || function () {};
	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20200413_syb_scopedata*/
	global.__wcc_version__ = 'v0.5vv_20200413_syb_scopedata';
	global.__wcc_version_info__ = {
		"customComponents": true,
		"fixZeroRpx": true,
		"propValueDeepCopy": false
	};
	var $gwxc
	var $gaic = {}
	$gwx = function (path, global) {
		if (typeof global === 'undefined') global = {};
		if (typeof __WXML_GLOBAL__ === 'undefined') {
			__WXML_GLOBAL__ = {};
		}
		__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

		function _(a, b) {
			if (typeof (b) != 'undefined') a.children.push(b);
		}

		function _v(k) {
			if (typeof (k) != 'undefined') return {
				tag: 'virtual',
				'wxKey': k,
				children: []
			};
			return {
				tag: 'virtual',
				children: []
			};
		}

		function _n(tag) {
			$gwxc++;
			if ($gwxc >= 16000) {
				throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
			};
			return {
				tag: 'wx-' + tag,
				attr: {},
				children: [],
				n: [],
				raw: {},
				generics: {}
			}
		}

		function _p(a, b) {
			b && a.properities.push(b);
		}

		function _s(scope, env, key) {
			return typeof (scope[key]) != 'undefined' ? scope[key] : env[key]
		}

		function _wp(m) {
			console.warn("WXMLRT_$gwx:" + m)
		}

		function _wl(tname, prefix) {
			_wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
		}
		$gwn = console.warn;
		$gwl = console.log;

		function $gwh() {
			function x() {}
			x.prototype = {
				hn: function (obj, all) {
					if (typeof (obj) == 'object') {
						var cnt = 0;
						var any1 = false,
							any2 = false;
						for (var x in obj) {
							any1 = any1 | x === '__value__';
							any2 = any2 | x === '__wxspec__';
							cnt++;
							if (cnt > 2) break;
						}
						return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
					}
					return "n";
				},
				nh: function (obj, special) {
					return {
						__value__: obj,
						__wxspec__: special ? special : true
					}
				},
				rv: function (obj) {
					return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
				},
				hm: function (obj) {
					if (typeof (obj) == 'object') {
						var cnt = 0;
						var any1 = false,
							any2 = false;
						for (var x in obj) {
							any1 = any1 | x === '__value__';
							any2 = any2 | x === '__wxspec__';
							cnt++;
							if (cnt > 2) break;
						}
						return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
					}
					return false;
				}
			}
			return new x;
		}
		wh = $gwh();

		function $gstack(s) {
			var tmp = s.split('\n ' + ' ' + ' ' + ' ');
			for (var i = 0; i < tmp.length; ++i) {
				if (0 == i) continue;
				if (")" === tmp[i][tmp[i].length - 1])
					tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
				else
					tmp[i] = "at anonymous function";
			}
			return tmp.join('\n ' + ' ' + ' ' + ' ');
		}

		function $gwrt(should_pass_type_info) {
			function ArithmeticEv(ops, e, s, g, o) {
				var _f = false;
				var rop = ops[0][1];
				var _a, _b, _c, _d, _aa, _bb;
				switch (rop) {
					case '?:':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h');
						_d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
						_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
						return _d;
						break;
					case '&&':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h');
						_d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
						_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
						return _d;
						break;
					case '||':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h');
						_d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
						_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
						return _d;
						break;
					case '+':
					case '*':
					case '/':
					case '%':
					case '|':
					case '^':
					case '&':
					case '===':
					case '==':
					case '!=':
					case '!==':
					case '>=':
					case '<=':
					case '>':
					case '<':
					case '<<':
					case '>>':
						_a = rev(ops[1], e, s, g, o, _f);
						_b = rev(ops[2], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
						switch (rop) {
							case '+':
								_d = wh.rv(_a) + wh.rv(_b);
								break;
							case '*':
								_d = wh.rv(_a) * wh.rv(_b);
								break;
							case '/':
								_d = wh.rv(_a) / wh.rv(_b);
								break;
							case '%':
								_d = wh.rv(_a) % wh.rv(_b);
								break;
							case '|':
								_d = wh.rv(_a) | wh.rv(_b);
								break;
							case '^':
								_d = wh.rv(_a) ^ wh.rv(_b);
								break;
							case '&':
								_d = wh.rv(_a) & wh.rv(_b);
								break;
							case '===':
								_d = wh.rv(_a) === wh.rv(_b);
								break;
							case '==':
								_d = wh.rv(_a) == wh.rv(_b);
								break;
							case '!=':
								_d = wh.rv(_a) != wh.rv(_b);
								break;
							case '!==':
								_d = wh.rv(_a) !== wh.rv(_b);
								break;
							case '>=':
								_d = wh.rv(_a) >= wh.rv(_b);
								break;
							case '<=':
								_d = wh.rv(_a) <= wh.rv(_b);
								break;
							case '>':
								_d = wh.rv(_a) > wh.rv(_b);
								break;
							case '<':
								_d = wh.rv(_a) < wh.rv(_b);
								break;
							case '<<':
								_d = wh.rv(_a) << wh.rv(_b);
								break;
							case '>>':
								_d = wh.rv(_a) >> wh.rv(_b);
								break;
							default:
								break;
						}
						return _c ? wh.nh(_d, "c") : _d;
						break;
					case '-':
						_a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
						_b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
						_d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
						return _c ? wh.nh(_d, "c") : _d;
						break;
					case '!':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) == 'h');
						_d = !wh.rv(_a);
						return _c ? wh.nh(_d, "c") : _d;
					case '~':
						_a = rev(ops[1], e, s, g, o, _f);
						_c = should_pass_type_info && (wh.hn(_a) == 'h');
						_d = ~wh.rv(_a);
						return _c ? wh.nh(_d, "c") : _d;
					default:
						$gwn('unrecognized op' + rop);
				}
			}

			function rev(ops, e, s, g, o, newap) {
				var op = ops[0];
				var _f = false;
				if (typeof newap !== "undefined") o.ap = newap;
				if (typeof (op) === 'object') {
					var vop = op[0];
					var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
					switch (vop) {
						case 2:
							return ArithmeticEv(ops, e, s, g, o);
							break;
						case 4:
							return rev(ops[1], e, s, g, o, _f);
							break;
						case 5:
							switch (ops.length) {
								case 2:
									_a = rev(ops[1], e, s, g, o, _f);
									return should_pass_type_info ? [_a] : [wh.rv(_a)];
									return [_a];
									break;
								case 1:
									return [];
									break;
								default:
									_a = rev(ops[1], e, s, g, o, _f);
									_b = rev(ops[2], e, s, g, o, _f);
									_a.push(
										should_pass_type_info ?
										_b :
										wh.rv(_b)
									);
									return _a;
									break;
							}
							break;
						case 6:
							_a = rev(ops[1], e, s, g, o);
							var ap = o.ap;
							_ta = wh.hn(_a) === 'h';
							_aa = _ta ? wh.rv(_a) : _a;
							o.is_affected |= _ta;
							if (should_pass_type_info) {
								if (_aa === null || typeof (_aa) === 'undefined') {
									return _ta ? wh.nh(undefined, 'e') : undefined;
								}
								_b = rev(ops[2], e, s, g, o, _f);
								_tb = wh.hn(_b) === 'h';
								_bb = _tb ? wh.rv(_b) : _b;
								o.ap = ap;
								o.is_affected |= _tb;
								if (_bb === null || typeof (_bb) === 'undefined' ||
									_bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
									return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
								}
								_d = _aa[_bb];
								if (typeof _d === 'function' && !ap) _d = undefined;
								_td = wh.hn(_d) === 'h';
								o.is_affected |= _td;
								return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
							} else {
								if (_aa === null || typeof (_aa) === 'undefined') {
									return undefined;
								}
								_b = rev(ops[2], e, s, g, o, _f);
								_tb = wh.hn(_b) === 'h';
								_bb = _tb ? wh.rv(_b) : _b;
								o.ap = ap;
								o.is_affected |= _tb;
								if (_bb === null || typeof (_bb) === 'undefined' ||
									_bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
									return undefined;
								}
								_d = _aa[_bb];
								if (typeof _d === 'function' && !ap) _d = undefined;
								_td = wh.hn(_d) === 'h';
								o.is_affected |= _td;
								return _td ? wh.rv(_d) : _d;
							}
							case 7:
								switch (ops[1][0]) {
									case 11:
										o.is_affected |= wh.hn(g) === 'h';
										return g;
									case 3:
										_s = wh.rv(s);
										_e = wh.rv(e);
										_b = ops[1][1];
										if (g && g.f && g.f.hasOwnProperty(_b)) {
											_a = g.f;
											o.ap = true;
										} else {
											_a = _s && _s.hasOwnProperty(_b) ?
												s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
										}
										if (should_pass_type_info) {
											if (_a) {
												_ta = wh.hn(_a) === 'h';
												_aa = _ta ? wh.rv(_a) : _a;
												_d = _aa[_b];
												_td = wh.hn(_d) === 'h';
												o.is_affected |= _ta || _td;
												_d = _ta && !_td ? wh.nh(_d, 'e') : _d;
												return _d;
											}
										} else {
											if (_a) {
												_ta = wh.hn(_a) === 'h';
												_aa = _ta ? wh.rv(_a) : _a;
												_d = _aa[_b];
												_td = wh.hn(_d) === 'h';
												o.is_affected |= _ta || _td;
												return wh.rv(_d);
											}
										}
										return undefined;
								}
								break;
							case 8:
								_a = {};
								_a[ops[1]] = rev(ops[2], e, s, g, o, _f);
								return _a;
								break;
							case 9:
								_a = rev(ops[1], e, s, g, o, _f);
								_b = rev(ops[2], e, s, g, o, _f);

								function merge(_a, _b, _ow) {
									var ka, _bbk;
									_ta = wh.hn(_a) === 'h';
									_tb = wh.hn(_b) === 'h';
									_aa = wh.rv(_a);
									_bb = wh.rv(_b);
									for (var k in _bb) {
										if (_ow || !_aa.hasOwnProperty(k)) {
											_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
										}
									}
									return _a;
								}
								var _c = _a
								var _ow = true
								if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
									_a = _b
									_b = _c
									_ow = false
								}
								if (typeof (ops[1][0]) === "object" && ops[1][0][0] === 10) {
									var _r = {}
									return merge(merge(_r, _a, _ow), _b, _ow);
								} else
									return merge(_a, _b, _ow);
								break;
							case 10:
								_a = rev(ops[1], e, s, g, o, _f);
								_a = should_pass_type_info ? _a : wh.rv(_a);
								return _a;
								break;
							case 12:
								var _r;
								_a = rev(ops[1], e, s, g, o);
								if (!o.ap) {
									return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
								}
								var ap = o.ap;
								_b = rev(ops[2], e, s, g, o, _f);
								o.ap = ap;
								_ta = wh.hn(_a) === 'h';
								_tb = _ca(_b);
								_aa = wh.rv(_a);
								_bb = wh.rv(_b);
								snap_bb = $gdc(_bb, "nv_");
								try {
									_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
								} catch (e) {
									e.message = e.message.replace(/nv_/g, "");
									e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
									e.stack = e.stack.replace(/\snv_/g, " ");
									e.stack = $gstack(e.stack);
									if (g.debugInfo) {
										e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
										console.error(e);
									}
									_r = undefined;
								}
								return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
					}
				} else {
					if (op === 3 || op === 1) return ops[1];
					else if (op === 11) {
						var _a = '';
						for (var i = 1; i < ops.length; i++) {
							var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
							_a += typeof (xp) === 'undefined' ? '' : xp;
						}
						return _a;
					}
				}
			}

			function wrapper(ops, e, s, g, o, newap) {
				if (ops[0] == '11182016') {
					g.debugInfo = ops[2];
					return rev(ops[1], e, s, g, o, newap);
				} else {
					g.debugInfo = null;
					return rev(ops, e, s, g, o, newap);
				}
			}
			return wrapper;
		}
		gra = $gwrt(true);
		grb = $gwrt(false);

		function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
			{
				var o = {
					is_affected: false
				};
				var a = gra(ops, e, s, g, o);
				if (JSON.stringify(a) != JSON.stringify(expect_a) ||
					o.is_affected != expect_affected) {
					console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
				}
			} {
				var o = {
					is_affected: false
				};
				var a = grb(ops, e, s, g, o);
				if (JSON.stringify(a) != JSON.stringify(expect_b) ||
					o.is_affected != expect_affected) {
					console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
				}
			}
		}

		function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
			var _n = wh.hn(to_iter) === 'n';
			var scope = wh.rv(_s);
			var has_old_item = scope.hasOwnProperty(itemname);
			var has_old_index = scope.hasOwnProperty(indexname);
			var old_item = scope[itemname];
			var old_index = scope[indexname];
			var full = Object.prototype.toString.call(wh.rv(to_iter));
			var type = full[8];
			if (type === 'N' && full[10] === 'l') type = 'X';
			var _y;
			if (_n) {
				if (type === 'A') {
					var r_iter_item;
					for (var i = 0; i < to_iter.length; i++) {
						scope[itemname] = to_iter[i];
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						r_iter_item = wh.rv(to_iter[i]);
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'O') {
					var i = 0;
					var r_iter_item;
					for (var k in to_iter) {
						scope[itemname] = to_iter[k];
						scope[indexname] = _n ? k : wh.nh(k, 'h');
						r_iter_item = wh.rv(to_iter[k]);
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
						i++;
					}
				} else if (type === 'S') {
					for (var i = 0; i < to_iter.length; i++) {
						scope[itemname] = to_iter[i];
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(to_iter[i] + i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'N') {
					for (var i = 0; i < to_iter; i++) {
						scope[itemname] = i;
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else {}
			} else {
				var r_to_iter = wh.rv(to_iter);
				var r_iter_item, iter_item;
				if (type === 'A') {
					for (var i = 0; i < r_to_iter.length; i++) {
						iter_item = r_to_iter[i];
						iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
						r_iter_item = wh.rv(iter_item);
						scope[itemname] = iter_item
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'O') {
					var i = 0;
					for (var k in r_to_iter) {
						iter_item = r_to_iter[k];
						iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
						r_iter_item = wh.rv(iter_item);
						scope[itemname] = iter_item;
						scope[indexname] = _n ? k : wh.nh(k, 'h');
						var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
						_y = _v(key);
						_(father, _y);
						func(env, scope, _y, global);
						i++
					}
				} else if (type === 'S') {
					for (var i = 0; i < r_to_iter.length; i++) {
						iter_item = wh.nh(r_to_iter[i], 'h');
						scope[itemname] = iter_item;
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(to_iter[i] + i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else if (type === 'N') {
					for (var i = 0; i < r_to_iter; i++) {
						iter_item = wh.nh(i, 'h');
						scope[itemname] = iter_item;
						scope[indexname] = _n ? i : wh.nh(i, 'h');
						_y = _v(i);
						_(father, _y);
						func(env, scope, _y, global);
					}
				} else {}
			}
			if (has_old_item) {
				scope[itemname] = old_item;
			} else {
				delete scope[itemname];
			}
			if (has_old_index) {
				scope[indexname] = old_index;
			} else {
				delete scope[indexname];
			}
		}

		function _ca(o) {
			if (wh.hn(o) == 'h') return true;
			if (typeof o !== "object") return false;
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					if (_ca(o[i])) return true;
				}
			}
			return false;
		}

		function _da(node, attrname, opindex, raw, o) {
			var isaffected = false;
			var value = $gdc(raw, "", 2);
			if (o.ap && value && value.constructor === Function) {
				attrname = "$wxs:" + attrname;
				node.attr["$gdc"] = $gdc;
			}
			if (o.is_affected || _ca(raw)) {
				node.n.push(attrname);
				node.raw[attrname] = raw;
			}
			node.attr[attrname] = value;
		}

		function _r(node, attrname, opindex, env, scope, global) {
			global.opindex = opindex;
			var o = {},
				_env;
			var a = grb(z[opindex], env, scope, global, o);
			_da(node, attrname, opindex, a, o);
		}

		function _rz(z, node, attrname, opindex, env, scope, global) {
			global.opindex = opindex;
			var o = {},
				_env;
			var a = grb(z[opindex], env, scope, global, o);
			_da(node, attrname, opindex, a, o);
		}

		function _o(opindex, env, scope, global) {
			global.opindex = opindex;
			var nothing = {};
			var r = grb(z[opindex], env, scope, global, nothing);
			return (r && r.constructor === Function) ? undefined : r;
		}

		function _oz(z, opindex, env, scope, global) {
			global.opindex = opindex;
			var nothing = {};
			var r = grb(z[opindex], env, scope, global, nothing);
			return (r && r.constructor === Function) ? undefined : r;
		}

		function _1(opindex, env, scope, global, o) {
			var o = o || {};
			global.opindex = opindex;
			return gra(z[opindex], env, scope, global, o);
		}

		function _1z(z, opindex, env, scope, global, o) {
			var o = o || {};
			global.opindex = opindex;
			return gra(z[opindex], env, scope, global, o);
		}

		function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
			var o = {};
			var to_iter = _1(opindex, env, scope, global);
			wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
		}

		function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
			var o = {};
			var to_iter = _1z(z, opindex, env, scope, global);
			wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
		}


		function _m(tag, attrs, generics, env, scope, global) {
			var tmp = _n(tag);
			var base = 0;
			for (var i = 0; i < attrs.length; i += 2) {
				if (base + attrs[i + 1] < 0) {
					tmp.attr[attrs[i]] = true;
				} else {
					_r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
					if (base === 0) base = attrs[i + 1];
				}
			}
			for (var i = 0; i < generics.length; i += 2) {
				if (base + generics[i + 1] < 0) {
					tmp.generics[generics[i]] = "";
				} else {
					var $t = grb(z[base + generics[i + 1]], env, scope, global);
					if ($t != "") $t = "wx-" + $t;
					tmp.generics[generics[i]] = $t;
					if (base === 0) base = generics[i + 1];
				}
			}
			return tmp;
		}

		function _mz(z, tag, attrs, generics, env, scope, global) {
			var tmp = _n(tag);
			var base = 0;
			for (var i = 0; i < attrs.length; i += 2) {
				if (base + attrs[i + 1] < 0) {
					tmp.attr[attrs[i]] = true;
				} else {
					_rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
					if (base === 0) base = attrs[i + 1];
				}
			}
			for (var i = 0; i < generics.length; i += 2) {
				if (base + generics[i + 1] < 0) {
					tmp.generics[generics[i]] = "";
				} else {
					var $t = grb(z[base + generics[i + 1]], env, scope, global);
					if ($t != "") $t = "wx-" + $t;
					tmp.generics[generics[i]] = $t;
					if (base === 0) base = generics[i + 1];
				}
			}
			return tmp;
		}

		var nf_init = function () {
			if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
				nf_init_Object();
				nf_init_Function();
				nf_init_Array();
				nf_init_String();
				nf_init_Boolean();
				nf_init_Number();
				nf_init_Math();
				nf_init_Date();
				nf_init_RegExp();
			}
			if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
		};
		var nf_init_Object = function () {
			Object.defineProperty(Object.prototype, "nv_constructor", {
				writable: true,
				value: "Object"
			})
			Object.defineProperty(Object.prototype, "nv_toString", {
				writable: true,
				value: function () {
					return "[object Object]"
				}
			})
		}
		var nf_init_Function = function () {
			Object.defineProperty(Function.prototype, "nv_constructor", {
				writable: true,
				value: "Function"
			})
			Object.defineProperty(Function.prototype, "nv_length", {
				get: function () {
					return this.length;
				},
				set: function () {}
			});
			Object.defineProperty(Function.prototype, "nv_toString", {
				writable: true,
				value: function () {
					return "[function Function]"
				}
			})
		}
		var nf_init_Array = function () {
			Object.defineProperty(Array.prototype, "nv_toString", {
				writable: true,
				value: function () {
					return this.nv_join();
				}
			})
			Object.defineProperty(Array.prototype, "nv_join", {
				writable: true,
				value: function (s) {
					s = undefined == s ? ',' : s;
					var r = "";
					for (var i = 0; i < this.length; ++i) {
						if (0 != i) r += s;
						if (null == this[i] || undefined == this[i]) r += '';
						else if (typeof this[i] == 'function') r += this[i].nv_toString();
						else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
						else r += this[i].toString();
					}
					return r;
				}
			})
			Object.defineProperty(Array.prototype, "nv_constructor", {
				writable: true,
				value: "Array"
			})
			Object.defineProperty(Array.prototype, "nv_concat", {
				writable: true,
				value: Array.prototype.concat
			})
			Object.defineProperty(Array.prototype, "nv_pop", {
				writable: true,
				value: Array.prototype.pop
			})
			Object.defineProperty(Array.prototype, "nv_push", {
				writable: true,
				value: Array.prototype.push
			})
			Object.defineProperty(Array.prototype, "nv_reverse", {
				writable: true,
				value: Array.prototype.reverse
			})
			Object.defineProperty(Array.prototype, "nv_shift", {
				writable: true,
				value: Array.prototype.shift
			})
			Object.defineProperty(Array.prototype, "nv_slice", {
				writable: true,
				value: Array.prototype.slice
			})
			Object.defineProperty(Array.prototype, "nv_sort", {
				writable: true,
				value: Array.prototype.sort
			})
			Object.defineProperty(Array.prototype, "nv_splice", {
				writable: true,
				value: Array.prototype.splice
			})
			Object.defineProperty(Array.prototype, "nv_unshift", {
				writable: true,
				value: Array.prototype.unshift
			})
			Object.defineProperty(Array.prototype, "nv_indexOf", {
				writable: true,
				value: Array.prototype.indexOf
			})
			Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
				writable: true,
				value: Array.prototype.lastIndexOf
			})
			Object.defineProperty(Array.prototype, "nv_every", {
				writable: true,
				value: Array.prototype.every
			})
			Object.defineProperty(Array.prototype, "nv_some", {
				writable: true,
				value: Array.prototype.some
			})
			Object.defineProperty(Array.prototype, "nv_forEach", {
				writable: true,
				value: Array.prototype.forEach
			})
			Object.defineProperty(Array.prototype, "nv_map", {
				writable: true,
				value: Array.prototype.map
			})
			Object.defineProperty(Array.prototype, "nv_filter", {
				writable: true,
				value: Array.prototype.filter
			})
			Object.defineProperty(Array.prototype, "nv_reduce", {
				writable: true,
				value: Array.prototype.reduce
			})
			Object.defineProperty(Array.prototype, "nv_reduceRight", {
				writable: true,
				value: Array.prototype.reduceRight
			})
			Object.defineProperty(Array.prototype, "nv_length", {
				get: function () {
					return this.length;
				},
				set: function (value) {
					this.length = value;
				}
			});
		}
		var nf_init_String = function () {
			Object.defineProperty(String.prototype, "nv_constructor", {
				writable: true,
				value: "String"
			})
			Object.defineProperty(String.prototype, "nv_toString", {
				writable: true,
				value: String.prototype.toString
			})
			Object.defineProperty(String.prototype, "nv_valueOf", {
				writable: true,
				value: String.prototype.valueOf
			})
			Object.defineProperty(String.prototype, "nv_charAt", {
				writable: true,
				value: String.prototype.charAt
			})
			Object.defineProperty(String.prototype, "nv_charCodeAt", {
				writable: true,
				value: String.prototype.charCodeAt
			})
			Object.defineProperty(String.prototype, "nv_concat", {
				writable: true,
				value: String.prototype.concat
			})
			Object.defineProperty(String.prototype, "nv_indexOf", {
				writable: true,
				value: String.prototype.indexOf
			})
			Object.defineProperty(String.prototype, "nv_lastIndexOf", {
				writable: true,
				value: String.prototype.lastIndexOf
			})
			Object.defineProperty(String.prototype, "nv_localeCompare", {
				writable: true,
				value: String.prototype.localeCompare
			})
			Object.defineProperty(String.prototype, "nv_match", {
				writable: true,
				value: String.prototype.match
			})
			Object.defineProperty(String.prototype, "nv_replace", {
				writable: true,
				value: String.prototype.replace
			})
			Object.defineProperty(String.prototype, "nv_search", {
				writable: true,
				value: String.prototype.search
			})
			Object.defineProperty(String.prototype, "nv_slice", {
				writable: true,
				value: String.prototype.slice
			})
			Object.defineProperty(String.prototype, "nv_split", {
				writable: true,
				value: String.prototype.split
			})
			Object.defineProperty(String.prototype, "nv_substring", {
				writable: true,
				value: String.prototype.substring
			})
			Object.defineProperty(String.prototype, "nv_toLowerCase", {
				writable: true,
				value: String.prototype.toLowerCase
			})
			Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
				writable: true,
				value: String.prototype.toLocaleLowerCase
			})
			Object.defineProperty(String.prototype, "nv_toUpperCase", {
				writable: true,
				value: String.prototype.toUpperCase
			})
			Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
				writable: true,
				value: String.prototype.toLocaleUpperCase
			})
			Object.defineProperty(String.prototype, "nv_trim", {
				writable: true,
				value: String.prototype.trim
			})
			Object.defineProperty(String.prototype, "nv_length", {
				get: function () {
					return this.length;
				},
				set: function (value) {
					this.length = value;
				}
			});
		}
		var nf_init_Boolean = function () {
			Object.defineProperty(Boolean.prototype, "nv_constructor", {
				writable: true,
				value: "Boolean"
			})
			Object.defineProperty(Boolean.prototype, "nv_toString", {
				writable: true,
				value: Boolean.prototype.toString
			})
			Object.defineProperty(Boolean.prototype, "nv_valueOf", {
				writable: true,
				value: Boolean.prototype.valueOf
			})
		}
		var nf_init_Number = function () {
			Object.defineProperty(Number, "nv_MAX_VALUE", {
				writable: false,
				value: Number.MAX_VALUE
			})
			Object.defineProperty(Number, "nv_MIN_VALUE", {
				writable: false,
				value: Number.MIN_VALUE
			})
			Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
				writable: false,
				value: Number.NEGATIVE_INFINITY
			})
			Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
				writable: false,
				value: Number.POSITIVE_INFINITY
			})
			Object.defineProperty(Number.prototype, "nv_constructor", {
				writable: true,
				value: "Number"
			})
			Object.defineProperty(Number.prototype, "nv_toString", {
				writable: true,
				value: Number.prototype.toString
			})
			Object.defineProperty(Number.prototype, "nv_toLocaleString", {
				writable: true,
				value: Number.prototype.toLocaleString
			})
			Object.defineProperty(Number.prototype, "nv_valueOf", {
				writable: true,
				value: Number.prototype.valueOf
			})
			Object.defineProperty(Number.prototype, "nv_toFixed", {
				writable: true,
				value: Number.prototype.toFixed
			})
			Object.defineProperty(Number.prototype, "nv_toExponential", {
				writable: true,
				value: Number.prototype.toExponential
			})
			Object.defineProperty(Number.prototype, "nv_toPrecision", {
				writable: true,
				value: Number.prototype.toPrecision
			})
		}
		var nf_init_Math = function () {
			Object.defineProperty(Math, "nv_E", {
				writable: false,
				value: Math.E
			})
			Object.defineProperty(Math, "nv_LN10", {
				writable: false,
				value: Math.LN10
			})
			Object.defineProperty(Math, "nv_LN2", {
				writable: false,
				value: Math.LN2
			})
			Object.defineProperty(Math, "nv_LOG2E", {
				writable: false,
				value: Math.LOG2E
			})
			Object.defineProperty(Math, "nv_LOG10E", {
				writable: false,
				value: Math.LOG10E
			})
			Object.defineProperty(Math, "nv_PI", {
				writable: false,
				value: Math.PI
			})
			Object.defineProperty(Math, "nv_SQRT1_2", {
				writable: false,
				value: Math.SQRT1_2
			})
			Object.defineProperty(Math, "nv_SQRT2", {
				writable: false,
				value: Math.SQRT2
			})
			Object.defineProperty(Math, "nv_abs", {
				writable: false,
				value: Math.abs
			})
			Object.defineProperty(Math, "nv_acos", {
				writable: false,
				value: Math.acos
			})
			Object.defineProperty(Math, "nv_asin", {
				writable: false,
				value: Math.asin
			})
			Object.defineProperty(Math, "nv_atan", {
				writable: false,
				value: Math.atan
			})
			Object.defineProperty(Math, "nv_atan2", {
				writable: false,
				value: Math.atan2
			})
			Object.defineProperty(Math, "nv_ceil", {
				writable: false,
				value: Math.ceil
			})
			Object.defineProperty(Math, "nv_cos", {
				writable: false,
				value: Math.cos
			})
			Object.defineProperty(Math, "nv_exp", {
				writable: false,
				value: Math.exp
			})
			Object.defineProperty(Math, "nv_floor", {
				writable: false,
				value: Math.floor
			})
			Object.defineProperty(Math, "nv_log", {
				writable: false,
				value: Math.log
			})
			Object.defineProperty(Math, "nv_max", {
				writable: false,
				value: Math.max
			})
			Object.defineProperty(Math, "nv_min", {
				writable: false,
				value: Math.min
			})
			Object.defineProperty(Math, "nv_pow", {
				writable: false,
				value: Math.pow
			})
			Object.defineProperty(Math, "nv_random", {
				writable: false,
				value: Math.random
			})
			Object.defineProperty(Math, "nv_round", {
				writable: false,
				value: Math.round
			})
			Object.defineProperty(Math, "nv_sin", {
				writable: false,
				value: Math.sin
			})
			Object.defineProperty(Math, "nv_sqrt", {
				writable: false,
				value: Math.sqrt
			})
			Object.defineProperty(Math, "nv_tan", {
				writable: false,
				value: Math.tan
			})
		}
		var nf_init_Date = function () {
			Object.defineProperty(Date.prototype, "nv_constructor", {
				writable: true,
				value: "Date"
			})
			Object.defineProperty(Date, "nv_parse", {
				writable: true,
				value: Date.parse
			})
			Object.defineProperty(Date, "nv_UTC", {
				writable: true,
				value: Date.UTC
			})
			Object.defineProperty(Date, "nv_now", {
				writable: true,
				value: Date.now
			})
			Object.defineProperty(Date.prototype, "nv_toString", {
				writable: true,
				value: Date.prototype.toString
			})
			Object.defineProperty(Date.prototype, "nv_toDateString", {
				writable: true,
				value: Date.prototype.toDateString
			})
			Object.defineProperty(Date.prototype, "nv_toTimeString", {
				writable: true,
				value: Date.prototype.toTimeString
			})
			Object.defineProperty(Date.prototype, "nv_toLocaleString", {
				writable: true,
				value: Date.prototype.toLocaleString
			})
			Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
				writable: true,
				value: Date.prototype.toLocaleDateString
			})
			Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
				writable: true,
				value: Date.prototype.toLocaleTimeString
			})
			Object.defineProperty(Date.prototype, "nv_valueOf", {
				writable: true,
				value: Date.prototype.valueOf
			})
			Object.defineProperty(Date.prototype, "nv_getTime", {
				writable: true,
				value: Date.prototype.getTime
			})
			Object.defineProperty(Date.prototype, "nv_getFullYear", {
				writable: true,
				value: Date.prototype.getFullYear
			})
			Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
				writable: true,
				value: Date.prototype.getUTCFullYear
			})
			Object.defineProperty(Date.prototype, "nv_getMonth", {
				writable: true,
				value: Date.prototype.getMonth
			})
			Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
				writable: true,
				value: Date.prototype.getUTCMonth
			})
			Object.defineProperty(Date.prototype, "nv_getDate", {
				writable: true,
				value: Date.prototype.getDate
			})
			Object.defineProperty(Date.prototype, "nv_getUTCDate", {
				writable: true,
				value: Date.prototype.getUTCDate
			})
			Object.defineProperty(Date.prototype, "nv_getDay", {
				writable: true,
				value: Date.prototype.getDay
			})
			Object.defineProperty(Date.prototype, "nv_getUTCDay", {
				writable: true,
				value: Date.prototype.getUTCDay
			})
			Object.defineProperty(Date.prototype, "nv_getHours", {
				writable: true,
				value: Date.prototype.getHours
			})
			Object.defineProperty(Date.prototype, "nv_getUTCHours", {
				writable: true,
				value: Date.prototype.getUTCHours
			})
			Object.defineProperty(Date.prototype, "nv_getMinutes", {
				writable: true,
				value: Date.prototype.getMinutes
			})
			Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
				writable: true,
				value: Date.prototype.getUTCMinutes
			})
			Object.defineProperty(Date.prototype, "nv_getSeconds", {
				writable: true,
				value: Date.prototype.getSeconds
			})
			Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
				writable: true,
				value: Date.prototype.getUTCSeconds
			})
			Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
				writable: true,
				value: Date.prototype.getMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
				writable: true,
				value: Date.prototype.getUTCMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
				writable: true,
				value: Date.prototype.getTimezoneOffset
			})
			Object.defineProperty(Date.prototype, "nv_setTime", {
				writable: true,
				value: Date.prototype.setTime
			})
			Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
				writable: true,
				value: Date.prototype.setMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
				writable: true,
				value: Date.prototype.setUTCMilliseconds
			})
			Object.defineProperty(Date.prototype, "nv_setSeconds", {
				writable: true,
				value: Date.prototype.setSeconds
			})
			Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
				writable: true,
				value: Date.prototype.setUTCSeconds
			})
			Object.defineProperty(Date.prototype, "nv_setMinutes", {
				writable: true,
				value: Date.prototype.setMinutes
			})
			Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
				writable: true,
				value: Date.prototype.setUTCMinutes
			})
			Object.defineProperty(Date.prototype, "nv_setHours", {
				writable: true,
				value: Date.prototype.setHours
			})
			Object.defineProperty(Date.prototype, "nv_setUTCHours", {
				writable: true,
				value: Date.prototype.setUTCHours
			})
			Object.defineProperty(Date.prototype, "nv_setDate", {
				writable: true,
				value: Date.prototype.setDate
			})
			Object.defineProperty(Date.prototype, "nv_setUTCDate", {
				writable: true,
				value: Date.prototype.setUTCDate
			})
			Object.defineProperty(Date.prototype, "nv_setMonth", {
				writable: true,
				value: Date.prototype.setMonth
			})
			Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
				writable: true,
				value: Date.prototype.setUTCMonth
			})
			Object.defineProperty(Date.prototype, "nv_setFullYear", {
				writable: true,
				value: Date.prototype.setFullYear
			})
			Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
				writable: true,
				value: Date.prototype.setUTCFullYear
			})
			Object.defineProperty(Date.prototype, "nv_toUTCString", {
				writable: true,
				value: Date.prototype.toUTCString
			})
			Object.defineProperty(Date.prototype, "nv_toISOString", {
				writable: true,
				value: Date.prototype.toISOString
			})
			Object.defineProperty(Date.prototype, "nv_toJSON", {
				writable: true,
				value: Date.prototype.toJSON
			})
		}
		var nf_init_RegExp = function () {
			Object.defineProperty(RegExp.prototype, "nv_constructor", {
				writable: true,
				value: "RegExp"
			})
			Object.defineProperty(RegExp.prototype, "nv_exec", {
				writable: true,
				value: RegExp.prototype.exec
			})
			Object.defineProperty(RegExp.prototype, "nv_test", {
				writable: true,
				value: RegExp.prototype.test
			})
			Object.defineProperty(RegExp.prototype, "nv_toString", {
				writable: true,
				value: RegExp.prototype.toString
			})
			Object.defineProperty(RegExp.prototype, "nv_source", {
				get: function () {
					return this.source;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_global", {
				get: function () {
					return this.global;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
				get: function () {
					return this.ignoreCase;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_multiline", {
				get: function () {
					return this.multiline;
				},
				set: function () {}
			});
			Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
				get: function () {
					return this.lastIndex;
				},
				set: function (v) {
					this.lastIndex = v;
				}
			});
		}
		nf_init();
		var nv_getDate = function () {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(Date);
			return new(Function.prototype.bind.apply(Date, args));
		}
		var nv_getRegExp = function () {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(RegExp);
			return new(Function.prototype.bind.apply(RegExp, args));
		}
		var nv_console = {}
		nv_console.nv_log = function () {
			var res = "WXSRT:";
			for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
			console.log(res);
		}
		var nv_parseInt = parseInt,
			nv_parseFloat = parseFloat,
			nv_isNaN = isNaN,
			nv_isFinite = isFinite,
			nv_decodeURI = decodeURI,
			nv_decodeURIComponent = decodeURIComponent,
			nv_encodeURI = encodeURI,
			nv_encodeURIComponent = encodeURIComponent;

		function $gdc(o, p, r) {
			o = wh.rv(o);
			if (o === null || o === undefined) return o;
			if (o.constructor === String || o.constructor === Boolean || o.constructor === Number) return o;
			if (o.constructor === Object) {
				var copy = {};
				for (var k in o)
					if (o.hasOwnProperty(k))
						if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
						else copy[p + k] = $gdc(o[k], p, r);
				return copy;
			}
			if (o.constructor === Array) {
				var copy = [];
				for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
				return copy;
			}
			if (o.constructor === Date) {
				var copy = new Date();
				copy.setTime(o.getTime());
				return copy;
			}
			if (o.constructor === RegExp) {
				var f = "";
				if (o.global) f += "g";
				if (o.ignoreCase) f += "i";
				if (o.multiline) f += "m";
				return (new RegExp(o.source, f));
			}
			if (r && o.constructor === Function) {
				if (r == 1) return $gdc(o(), undefined, 2);
				if (r == 2) return o;
			}
			return null;
		}
		var nv_JSON = {}
		nv_JSON.nv_stringify = function (o) {
			JSON.stringify(o);
			return JSON.stringify($gdc(o));
		}
		nv_JSON.nv_parse = function (o) {
			if (o === undefined) return undefined;
			var t = JSON.parse(o);
			return $gdc(t, 'nv_');
		}

		function _af(p, a, r, c) {
			p.extraAttr = {
				"t_action": a,
				"t_rawid": r
			};
			if (typeof (c) != 'undefined') p.extraAttr.t_cid = c;
		}

		function _ai(i, p, e, me, r, c) {
			var x = _grp(p, e, me);
			if (x) i.push(x);
			else {
				i.push('');
				_wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
			}
		}

		function _grp(p, e, me) {
			if (p[0] != '/') {
				var mepart = me.split('/');
				mepart.pop();
				var ppart = p.split('/');
				for (var i = 0; i < ppart.length; i++) {
					if (ppart[i] == '..') mepart.pop();
					else if (!ppart[i] || ppart[i] == '.') continue;
					else mepart.push(ppart[i]);
				}
				p = mepart.join('/');
			}
			if (me[0] == '.' && p[0] == '/') p = '.' + p;
			if (e[p]) return p;
			if (e[p + '.wxml']) return p + '.wxml';
		}

		function _gd(p, c, e, d) {
			if (!c) return;
			if (d[p][c]) return d[p][c];
			for (var x = e[p].i.length - 1; x >= 0; x--) {
				if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
			};
			for (var x = e[p].ti.length - 1; x >= 0; x--) {
				var q = _grp(e[p].ti[x], e, p);
				if (q && d[q][c]) return d[q][c]
			}
			var ii = _gapi(e, p);
			for (var x = 0; x < ii.length; x++) {
				if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
			}
			for (var k = e[p].j.length - 1; k >= 0; k--)
				if (e[p].j[k]) {
					for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
						var pp = _grp(e[e[p].j[k]].ti[q], e, p);
						if (pp && d[pp][c]) {
							return d[pp][c]
						}
					}
				}
		}

		function _gapi(e, p) {
			if (!p) return [];
			if ($gaic[p]) {
				return $gaic[p]
			};
			var ret = [],
				q = [],
				h = 0,
				t = 0,
				put = {},
				visited = {};
			q.push(p);
			visited[p] = true;
			t++;
			while (h < t) {
				var a = q[h++];
				for (var i = 0; i < e[a].ic.length; i++) {
					var nd = e[a].ic[i];
					var np = _grp(nd, e, a);
					if (np && !visited[np]) {
						visited[np] = true;
						q.push(np);
						t++;
					}
				}
				for (var i = 0; a != p && i < e[a].ti.length; i++) {
					var ni = e[a].ti[i];
					var nm = _grp(ni, e, a);
					if (nm && !put[nm]) {
						put[nm] = true;
						ret.push(nm);
					}
				}
			}
			$gaic[p] = ret;
			return ret;
		}
		var $ixc = {};

		function _ic(p, ent, me, e, s, r, gg) {
			var x = _grp(p, ent, me);
			ent[me].j.push(x);
			if (x) {
				if ($ixc[x]) {
					_wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
					return;
				}
				$ixc[x] = true;
				try {
					ent[x].f(e, s, r, gg)
				} catch (e) {}
				$ixc[x] = false;
			} else {
				_wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
			}
		}

		function _w(tn, f, line, c) {
			_wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
		}

		function _ev(dom) {
			var changed = false;
			delete dom.properities;
			delete dom.n;
			if (dom.children) {
				do {
					changed = false;
					var newch = [];
					for (var i = 0; i < dom.children.length; i++) {
						var ch = dom.children[i];
						if (ch.tag == 'virtual') {
							changed = true;
							for (var j = 0; ch.children && j < ch.children.length; j++) {
								newch.push(ch.children[j]);
							}
						} else {
							newch.push(ch);
						}
					}
					dom.children = newch;
				} while (changed);
				for (var i = 0; i < dom.children.length; i++) {
					_ev(dom.children[i]);
				}
			}
			return dom;
		}

		function _tsd(root) {
			if (root.tag == "wx-wx-scope") {
				root.tag = "virtual";
				root.wxCkey = "11";
				root['wxScopeData'] = root.attr['wx:scope-data'];
				delete root.n;
				delete root.raw;
				delete root.generics;
				delete root.attr;
			}
			for (var i = 0; root.children && i < root.children.length; i++) {
				_tsd(root.children[i]);
			}
			return root;
		}

		var e_ = {}
		if (typeof (global.entrys) === 'undefined') global.entrys = {};
		e_ = global.entrys;
		var d_ = {}
		if (typeof (global.defines) === 'undefined') global.defines = {};
		d_ = global.defines;
		var f_ = {}
		if (typeof (global.modules) === 'undefined') global.modules = {};
		f_ = global.modules || {};
		var p_ = {}
		__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
		__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
		__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
		var z = __WXML_GLOBAL__.ops_set.$gwx || [];

		function gz$gwx_1() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
			__WXML_GLOBAL__.ops_cached.$gwx_1 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'formReset'])
				Z([3, 'formSubmit'])
				Z([
					[7],
					[3, 'isCode']
				])
				Z([
					[7],
					[3, 'isShow']
				])
				Z(z[2])
			})(__WXML_GLOBAL__.ops_cached.$gwx_1);
			return __WXML_GLOBAL__.ops_cached.$gwx_1
		}

		function gz$gwx_2() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_2) return __WXML_GLOBAL__.ops_cached.$gwx_2
			__WXML_GLOBAL__.ops_cached.$gwx_2 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_2);
			return __WXML_GLOBAL__.ops_cached.$gwx_2
		}

		function gz$gwx_3() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_3) return __WXML_GLOBAL__.ops_cached.$gwx_3
			__WXML_GLOBAL__.ops_cached.$gwx_3 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'formReset'])
				Z([3, 'formSubmit'])
				Z([
					[7],
					[3, 'condition']
				])
				Z([
					[7],
					[3, 'isShowPicker']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_3);
			return __WXML_GLOBAL__.ops_cached.$gwx_3
		}

		function gz$gwx_4() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_4) return __WXML_GLOBAL__.ops_cached.$gwx_4
			__WXML_GLOBAL__.ops_cached.$gwx_4 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'whetherthelogin']
				])
				Z([3, 'onRegisteSuccess'])
				Z([3, 'closeRegistDialog'])
				Z([3, '1'])
			})(__WXML_GLOBAL__.ops_cached.$gwx_4);
			return __WXML_GLOBAL__.ops_cached.$gwx_4
		}

		function gz$gwx_5() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_5) return __WXML_GLOBAL__.ops_cached.$gwx_5
			__WXML_GLOBAL__.ops_cached.$gwx_5 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_5);
			return __WXML_GLOBAL__.ops_cached.$gwx_5
		}

		function gz$gwx_6() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_6) return __WXML_GLOBAL__.ops_cached.$gwx_6
			__WXML_GLOBAL__.ops_cached.$gwx_6 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[2, '!='],
							[
								[7],
								[3, 'chargeStatus']
							],
							[1, null]
						],
						[
							[2, '!='],
							[
								[7],
								[3, 'chargeStatus']
							],
							[1, 2]
						]
					],
					[
						[7],
						[3, 'suspendstyle']
					]
				])
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[2, '!='],
							[
								[7],
								[3, 'chargeStatus']
							],
							[1, null]
						],
						[
							[2, '!'],
							[
								[7],
								[3, 'chargeStatus']
							]
						]
					],
					[
						[7],
						[3, 'suspendstyle']
					]
				])
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[7],
							[3, 'chargeStatus']
						],
						[
							[2, '=='],
							[
								[7],
								[3, 'pageDeep']
							],
							[1, 1]
						]
					],
					[
						[7],
						[3, 'suspendstyle']
					]
				])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'suspendstyle']
					]
				])
				Z([
					[7],
					[3, 'showModalStatus']
				])
				Z(z[4])
				Z([
					[7],
					[3, 'showFinshDialogue']
				])
				Z(z[6])
				Z([
					[7],
					[3, 'showWelcome']
				])
				Z([
					[7],
					[3, 'showNoLoad']
				])
				Z([
					[6],
					[
						[7],
						[3, 'adContent1']
					],
					[3, 'imgUrl']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_6);
			return __WXML_GLOBAL__.ops_cached.$gwx_6
		}

		function gz$gwx_7() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_7) return __WXML_GLOBAL__.ops_cached.$gwx_7
			__WXML_GLOBAL__.ops_cached.$gwx_7 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'nowCharge'])
				Z(z[0])
				Z([3, 'true'])
				Z([
					[7],
					[3, 'activityOpened']
				])
				Z([
					[7],
					[3, 'showRecharge']
				])
				Z(z[4])
				Z([
					[2, '==='],
					[
						[7],
						[3, 'pileStatus']
					],
					[1, 1]
				])
				Z([
					[2, '&&'],
					[
						[2, '=='],
						[
							[7],
							[3, 'optType']
						],
						[
							[7],
							[3, 'feeType']
						]
					],
					[
						[2, '!='],
						[
							[7],
							[3, 'optType']
						],
						[1, 3]
					]
				])
				Z([
					[2, '&&'],
					[
						[7],
						[3, 'offlineCharge']
					],
					[
						[2, '==='],
						[
							[7],
							[3, 'pileStatus']
						],
						[1, 2]
					]
				])
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[2, '!='],
							[
								[7],
								[3, 'optType']
							],
							[
								[7],
								[3, 'feeType']
							]
						],
						[
							[2, '!='],
							[
								[7],
								[3, 'optType']
							],
							[1, 3]
						]
					],
					[
						[2, '!='],
						[
							[7],
							[3, 'feeType']
						],
						[1, 3]
					]
				])
				Z([
					[7],
					[3, 'showExchange']
				])
				Z([
					[7],
					[3, 'chargeTips']
				])
				Z(z[11])
				Z([
					[7],
					[3, 'paymodal']
				])
				Z(z[13])
				Z([
					[7],
					[3, 'showWelcome']
				])
				Z([
					[7],
					[3, 'isShowMask']
				])
				Z([
					[7],
					[3, 'isShowPaymentMethod']
				])
				Z([3, 'payment-method'])
				Z([
					[7],
					[3, 'weChatPayment']
				])
				Z([
					[7],
					[3, 'balancePayment']
				])
				Z([
					[7],
					[3, 'specialPayment']
				])
				Z([
					[7],
					[3, 'isShowOfflineCharge']
				])
				Z([
					[7],
					[3, 'isShowDynamicCode']
				])
				Z([
					[7],
					[3, 'isShowOfflineTips']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_7);
			return __WXML_GLOBAL__.ops_cached.$gwx_7
		}

		function gz$gwx_8() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_8) return __WXML_GLOBAL__.ops_cached.$gwx_8
			__WXML_GLOBAL__.ops_cached.$gwx_8 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'ev-control'])
				Z([
					[7],
					[3, 'showFinshDialogue']
				])
				Z([
					[7],
					[3, 'showBreakPower']
				])
				Z(z[1])
				Z(z[2])
				Z([
					[7],
					[3, 'showWelcome']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_8);
			return __WXML_GLOBAL__.ops_cached.$gwx_8
		}

		function gz$gwx_9() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_9) return __WXML_GLOBAL__.ops_cached.$gwx_9
			__WXML_GLOBAL__.ops_cached.$gwx_9 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'exchange'])
				Z([
					[7],
					[3, 'isShowMask']
				])
				Z([
					[7],
					[3, 'isShowPaymentMethod']
				])
				Z([3, 'payment-method'])
				Z([
					[7],
					[3, 'weChatPayment']
				])
				Z([
					[7],
					[3, 'balancePayment']
				])
				Z([
					[7],
					[3, 'specialPayment']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_9);
			return __WXML_GLOBAL__.ops_cached.$gwx_9
		}

		function gz$gwx_10() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_10) return __WXML_GLOBAL__.ops_cached.$gwx_10
			__WXML_GLOBAL__.ops_cached.$gwx_10 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'nonearsite']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_10);
			return __WXML_GLOBAL__.ops_cached.$gwx_10
		}

		function gz$gwx_11() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_11) return __WXML_GLOBAL__.ops_cached.$gwx_11
			__WXML_GLOBAL__.ops_cached.$gwx_11 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '!'],
					[
						[7],
						[3, 'nonearsite']
					]
				])
				Z([
					[7],
					[3, 'nearSiteList']
				])
				Z([3, 'id'])
				Z([3, 'navTositedetail'])
				Z([a, [
						[2, '?:'],
						[
							[2, '=='],
							[
								[6],
								[
									[7],
									[3, 'item']
								],
								[3, 'status']
							],
							[1, 1]
						],
						[1, 'manager'],
						[1, 'offlinemanager']
					],
					[3, ' ']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'avaliable']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'distance']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'needforge']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'offlineCharge']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'pileNo']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'status']
				])
				Z([3, 'bot'])
				Z([
					[7],
					[3, 'isShowPrice']
				])
				Z([
					[7],
					[3, 'showEV']
				])
				Z([3, 'tips1'])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[7],
					[3, 'hasMore']
				])
				Z([
					[7],
					[3, 'nonearsite']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_11);
			return __WXML_GLOBAL__.ops_cached.$gwx_11
		}

		function gz$gwx_12() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_12) return __WXML_GLOBAL__.ops_cached.$gwx_12
			__WXML_GLOBAL__.ops_cached.$gwx_12 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'page'])
				Z([3, 'second-content'])
				Z([3, 'chargingBtn'])
				Z([3, 'second-content-item'])
				Z([
					[2, '!='],
					[
						[7],
						[3, 'chargingCount']
					],
					[1, 0]
				])
				Z([3, 'chargeRecordBtn'])
				Z(z[3])
				Z([
					[2, '!='],
					[
						[7],
						[3, 'revertCount']
					],
					[1, 0]
				])
				Z([
					[7],
					[3, 'showExchange']
				])
				Z([
					[7],
					[3, 'isShowSystemInfo']
				])
				Z([
					[7],
					[3, 'showCharge']
				])
				Z(z[8])
				Z([
					[7],
					[3, 'mask']
				])
				Z([
					[7],
					[3, 'pileNumPopup']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_12);
			return __WXML_GLOBAL__.ops_cached.$gwx_12
		}

		function gz$gwx_13() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_13) return __WXML_GLOBAL__.ops_cached.$gwx_13
			__WXML_GLOBAL__.ops_cached.$gwx_13 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_13);
			return __WXML_GLOBAL__.ops_cached.$gwx_13
		}

		function gz$gwx_14() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_14) return __WXML_GLOBAL__.ops_cached.$gwx_14
			__WXML_GLOBAL__.ops_cached.$gwx_14 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'isShowPay']
				])
				Z(z[0])
				Z([
					[7],
					[3, 'isShowCanvas']
				])
				Z([
					[7],
					[3, 'showCanvas']
				])
				Z([
					[2, '&&'],
					[
						[7],
						[3, 'outstandinorder']
					],
					[
						[2, '=='],
						[
							[7],
							[3, 'status']
						],
						[1, 2]
					]
				])
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[2, '!'],
							[
								[7],
								[3, 'outstandinorder']
							]
						],
						[
							[6],
							[
								[7],
								[3, 'orderDetail']
							],
							[3, 'continueChargeEnable']
						]
					],
					[
						[2, '==='],
						[
							[6],
							[
								[7],
								[3, 'orderDetail']
							],
							[3, 'vehicleType']
						],
						[1, 1]
					]
				])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'discuss']
					]
				])
				Z([
					[7],
					[3, 'minejump']
				])
				Z([
					[7],
					[3, 'showWelcome']
				])
				Z([
					[6],
					[
						[7],
						[3, 'adContent1']
					],
					[3, 'imgUrl']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_14);
			return __WXML_GLOBAL__.ops_cached.$gwx_14
		}

		function gz$gwx_15() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_15) return __WXML_GLOBAL__.ops_cached.$gwx_15
			__WXML_GLOBAL__.ops_cached.$gwx_15 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_15);
			return __WXML_GLOBAL__.ops_cached.$gwx_15
		}

		function gz$gwx_16() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_16) return __WXML_GLOBAL__.ops_cached.$gwx_16
			__WXML_GLOBAL__.ops_cached.$gwx_16 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'exchange-power'])
				Z([
					[7],
					[3, 'isnull']
				])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'isnull']
					]
				])
				Z(z[2])
				Z([3, 'tips1'])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[7],
					[3, 'hasMore']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_16);
			return __WXML_GLOBAL__.ops_cached.$gwx_16
		}

		function gz$gwx_17() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_17) return __WXML_GLOBAL__.ops_cached.$gwx_17
			__WXML_GLOBAL__.ops_cached.$gwx_17 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '>'],
					[
						[7],
						[3, 'count']
					],
					[1, 0]
				])
				Z([
					[7],
					[3, 'isnull']
				])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'isnull']
					]
				])
				Z([
					[7],
					[3, 'recordList']
				])
				Z([3, 'id'])
				Z([3, 'navToDetai'])
				Z([3, 'record-detail'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([3, 'feedbackRenewal'])
				Z([
					[7],
					[3, 'flag']
				])
				Z([
					[7],
					[3, 'showEV']
				])
				Z([3, 'feedbackRenewalBtns'])
				Z([
					[2, '&&'],
					[
						[2, '==='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'vehicleType']
						],
						[1, 1]
					],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'continueChargeEnable']
					]
				])
				Z([3, 'feedbackAlready'])
				Z([3, 'alFeedback conalr'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'commentStatus']
				])
				Z(z[7])
				Z([
					[2, '=='],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'commentStatus']
					],
					[1, 1]
				])
				Z(z[2])
				Z([3, 'tips1'])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[7],
					[3, 'hasMore']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_17);
			return __WXML_GLOBAL__.ops_cached.$gwx_17
		}

		function gz$gwx_18() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_18) return __WXML_GLOBAL__.ops_cached.$gwx_18
			__WXML_GLOBAL__.ops_cached.$gwx_18 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'content']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_18);
			return __WXML_GLOBAL__.ops_cached.$gwx_18
		}

		function gz$gwx_19() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_19) return __WXML_GLOBAL__.ops_cached.$gwx_19
			__WXML_GLOBAL__.ops_cached.$gwx_19 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_19);
			return __WXML_GLOBAL__.ops_cached.$gwx_19
		}

		function gz$gwx_20() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_20) return __WXML_GLOBAL__.ops_cached.$gwx_20
			__WXML_GLOBAL__.ops_cached.$gwx_20 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'formReset'])
				Z([3, 'formSubmit'])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'isFreeCard']
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_20);
			return __WXML_GLOBAL__.ops_cached.$gwx_20
		}

		function gz$gwx_21() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_21) return __WXML_GLOBAL__.ops_cached.$gwx_21
			__WXML_GLOBAL__.ops_cached.$gwx_21 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_21);
			return __WXML_GLOBAL__.ops_cached.$gwx_21
		}

		function gz$gwx_22() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_22) return __WXML_GLOBAL__.ops_cached.$gwx_22
			__WXML_GLOBAL__.ops_cached.$gwx_22 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'changeShippingMode']
				])
				Z(z[0])
				Z([
					[7],
					[3, 'isShowPicker']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_22);
			return __WXML_GLOBAL__.ops_cached.$gwx_22
		}

		function gz$gwx_23() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_23) return __WXML_GLOBAL__.ops_cached.$gwx_23
			__WXML_GLOBAL__.ops_cached.$gwx_23 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_23);
			return __WXML_GLOBAL__.ops_cached.$gwx_23
		}

		function gz$gwx_24() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_24) return __WXML_GLOBAL__.ops_cached.$gwx_24
			__WXML_GLOBAL__.ops_cached.$gwx_24 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'nearSiteList']
				])
				Z([3, 'id'])
				Z([3, 'navTositedetail'])
				Z([3, 'manager'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([
					[7],
					[3, 'isShowPrice']
				])
				Z([
					[2, '!'],
					[
						[6],
						[
							[7],
							[3, 'nearSiteList']
						],
						[3, 'length']
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_24);
			return __WXML_GLOBAL__.ops_cached.$gwx_24
		}

		function gz$gwx_25() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_25) return __WXML_GLOBAL__.ops_cached.$gwx_25
			__WXML_GLOBAL__.ops_cached.$gwx_25 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_25);
			return __WXML_GLOBAL__.ops_cached.$gwx_25
		}

		function gz$gwx_26() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_26) return __WXML_GLOBAL__.ops_cached.$gwx_26
			__WXML_GLOBAL__.ops_cached.$gwx_26 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'isShowMask']
				])
				Z([
					[7],
					[3, 'isShowBankCardNo']
				])
				Z([
					[7],
					[3, 'cardList']
				])
				Z([3, 'id'])
				Z([3, 'manager'])
				Z([3, 'bot'])
				Z([
					[2, '!'],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'bankCardNo']
					]
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'bankCardNo']
				])
				Z([3, 'cardfunction'])
				Z([
					[2, '||'],
					[
						[2, '!='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'type']
						],
						[1, 2]
					],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'bankCardNo']
					]
				])
				Z(z[7])
				Z(z[6])
				Z([
					[2, '&&'],
					[
						[2, '!='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'tagging']
						],
						[1, 3]
					],
					[
						[2, '!='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'tagging']
						],
						[1, 4]
					]
				])
				Z([
					[2, '||'],
					[
						[2, '=='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'tagging']
						],
						[1, 3]
					],
					[
						[2, '=='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'tagging']
						],
						[1, 4]
					]
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'moreShowStau']
				])
				Z([3, 'in'])
				Z([
					[2, '&&'],
					[
						[2, '&&'],
						[
							[2, '&&'],
							[
								[2, '=='],
								[
									[6],
									[
										[7],
										[3, 'item']
									],
									[3, 'type']
								],
								[1, 1]
							],
							[
								[2, '!='],
								[
									[6],
									[
										[7],
										[3, 'item']
									],
									[3, 'tagging']
								],
								[1, 3]
							]
						],
						[
							[2, '!='],
							[
								[6],
								[
									[7],
									[3, 'item']
								],
								[3, 'tagging']
							],
							[1, 4]
						]
					],
					[
						[2, '!='],
						[
							[6],
							[
								[7],
								[3, 'item']
							],
							[3, 'tagging']
						],
						[1, 2]
					]
				])
				Z(z[16])
				Z([
					[7],
					[3, 'showcardmodal']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_26);
			return __WXML_GLOBAL__.ops_cached.$gwx_26
		}

		function gz$gwx_27() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_27) return __WXML_GLOBAL__.ops_cached.$gwx_27
			__WXML_GLOBAL__.ops_cached.$gwx_27 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_27);
			return __WXML_GLOBAL__.ops_cached.$gwx_27
		}

		function gz$gwx_28() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_28) return __WXML_GLOBAL__.ops_cached.$gwx_28
			__WXML_GLOBAL__.ops_cached.$gwx_28 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_28);
			return __WXML_GLOBAL__.ops_cached.$gwx_28
		}

		function gz$gwx_29() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_29) return __WXML_GLOBAL__.ops_cached.$gwx_29
			__WXML_GLOBAL__.ops_cached.$gwx_29 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_29);
			return __WXML_GLOBAL__.ops_cached.$gwx_29
		}

		function gz$gwx_30() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_30) return __WXML_GLOBAL__.ops_cached.$gwx_30
			__WXML_GLOBAL__.ops_cached.$gwx_30 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '=='],
					[
						[7],
						[3, 'miniType']
					],
					[1, 1]
				])
				Z([
					[7],
					[3, 'helpJson']
				])
				Z([3, 'index'])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'istap']
				])
				Z([
					[7],
					[3, 'isHasVideo']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'video']
				])
				Z([
					[7],
					[3, 'startbutton']
				])
				Z([
					[7],
					[3, 'closebutton']
				])
				Z([
					[7],
					[3, 'videoshow']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_30);
			return __WXML_GLOBAL__.ops_cached.$gwx_30
		}

		function gz$gwx_31() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_31) return __WXML_GLOBAL__.ops_cached.$gwx_31
			__WXML_GLOBAL__.ops_cached.$gwx_31 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'controlChangeUserModal'])
				Z([3, 'disFlex recharge-wrapper'])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'phone']
					]
				])
				Z([
					[7],
					[3, 'noAgent']
				])
				Z([
					[2, '&&'],
					[
						[7],
						[3, 'pilingAccount']
					],
					[
						[7],
						[3, 'isWeChat']
					]
				])
				Z([
					[2, '&&'],
					[
						[7],
						[3, 'isAgent']
					],
					[
						[7],
						[3, 'isWeChat']
					]
				])
				Z([
					[2, '&&'],
					[
						[7],
						[3, 'property']
					],
					[
						[7],
						[3, 'isWeChat']
					]
				])
				Z([3, 'more-rec'])
				Z([
					[2, '&&'],
					[
						[7],
						[3, 'subscribeEnable']
					],
					[
						[7],
						[3, 'isWeChat']
					]
				])
				Z([
					[7],
					[3, 'isWeChat']
				])
				Z([
					[7],
					[3, 'changeUsermodal']
				])
				Z(z[10])
				Z([
					[7],
					[3, 'changeUserOrPhone']
				])
				Z([3, 'onRegisteSuccess'])
				Z([3, 'closeRegistDialog'])
				Z([
					[7],
					[3, 'registerType']
				])
				Z([
					[7],
					[3, 'shareToFriends']
				])
				Z([
					[7],
					[3, 'shareFriendsQuan']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_31);
			return __WXML_GLOBAL__.ops_cached.$gwx_31
		}

		function gz$gwx_32() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_32) return __WXML_GLOBAL__.ops_cached.$gwx_32
			__WXML_GLOBAL__.ops_cached.$gwx_32 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_32);
			return __WXML_GLOBAL__.ops_cached.$gwx_32
		}

		function gz$gwx_33() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_33) return __WXML_GLOBAL__.ops_cached.$gwx_33
			__WXML_GLOBAL__.ops_cached.$gwx_33 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '||'],
					[
						[2, '=='],
						[
							[7],
							[3, 'rechargeType']
						],
						[1, 5]
					],
					[
						[2, '=='],
						[
							[7],
							[3, 'rechargeType']
						],
						[1, 4]
					]
				])
				Z([
					[2, '||'],
					[
						[2, '=='],
						[
							[7],
							[3, 'rechargeType']
						],
						[1, 3]
					],
					[
						[2, '=='],
						[
							[7],
							[3, 'rechargeType']
						],
						[1, 4]
					]
				])
				Z([
					[7],
					[3, 'topupType']
				])
				Z([3, 'id'])
				Z([3, 'ontapTopup'])
				Z([a, [3, 'topup-amount '],
					[
						[2, '?:'],
						[
							[2, '==='],
							[
								[7],
								[3, 'curtopup']
							],
							[
								[7],
								[3, 'index']
							]
						],
						[1, 'active-style'],
						[1, '']
					]
				])
				Z([
					[7],
					[3, 'index']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([
					[2, '>'],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'bonusAmount']
					],
					[1, 0]
				])
				Z([
					[2, '&&'],
					[
						[2, '||'],
						[
							[2, '=='],
							[
								[7],
								[3, 'rechargeType']
							],
							[1, 3]
						],
						[
							[2, '=='],
							[
								[7],
								[3, 'rechargeType']
							],
							[1, 4]
						]
					],
					[
						[7],
						[3, 'showRechargeTips']
					]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_33);
			return __WXML_GLOBAL__.ops_cached.$gwx_33
		}

		function gz$gwx_34() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_34) return __WXML_GLOBAL__.ops_cached.$gwx_34
			__WXML_GLOBAL__.ops_cached.$gwx_34 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_34);
			return __WXML_GLOBAL__.ops_cached.$gwx_34
		}

		function gz$gwx_35() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_35) return __WXML_GLOBAL__.ops_cached.$gwx_35
			__WXML_GLOBAL__.ops_cached.$gwx_35 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([a, [3, '!'],
					[
						[7],
						[3, 'nonearsite']
					]
				])
				Z([
					[7],
					[3, 'nearSiteList']
				])
				Z([3, 'id'])
				Z([3, 'navTositedetail'])
				Z([a, [
						[2, '?:'],
						[
							[2, '=='],
							[
								[6],
								[
									[7],
									[3, 'item']
								],
								[3, 'status']
							],
							[1, 1]
						],
						[1, 'manager'],
						[1, 'offlinemanager']
					],
					[3, ' ']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'avaliable']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'distance']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'needforge']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'pileNo']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'status']
				])
				Z([
					[7],
					[3, 'isShowPrice']
				])
				Z(z[0][2])
			})(__WXML_GLOBAL__.ops_cached.$gwx_35);
			return __WXML_GLOBAL__.ops_cached.$gwx_35
		}

		function gz$gwx_36() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_36) return __WXML_GLOBAL__.ops_cached.$gwx_36
			__WXML_GLOBAL__.ops_cached.$gwx_36 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_36);
			return __WXML_GLOBAL__.ops_cached.$gwx_36
		}

		function gz$gwx_37() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_37) return __WXML_GLOBAL__.ops_cached.$gwx_37
			__WXML_GLOBAL__.ops_cached.$gwx_37 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'card-user'])
				Z([
					[7],
					[3, 'isShowThisTitle']
				])
				Z([
					[7],
					[3, 'isShowCardList']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_37);
			return __WXML_GLOBAL__.ops_cached.$gwx_37
		}

		function gz$gwx_38() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_38) return __WXML_GLOBAL__.ops_cached.$gwx_38
			__WXML_GLOBAL__.ops_cached.$gwx_38 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'topupType']
				])
				Z([3, 'id'])
				Z([3, 'ontapTopup'])
				Z([3, 'topupAmount'])
				Z([
					[7],
					[3, 'index']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([a, [3, 'background:'],
					[
						[2, '?:'],
						[
							[2, '==='],
							[
								[7],
								[3, 'curtopup']
							],
							[
								[7],
								[3, 'index']
							]
						],
						[1, 'linear-gradient(to bottom, #24c771, #2eff90)'],
						[1, '']
					],
					[3, ';color:'],
					[
						[2, '?:'],
						[
							[2, '==='],
							[
								[7],
								[3, 'curtopup']
							],
							[
								[7],
								[3, 'index']
							]
						],
						[1, '#fff'],
						[1, '']
					],
					[3, ';margin-right:'],
					[
						[2, '?:'],
						[
							[2, '=='],
							[
								[2, '%'],
								[
									[2, '+'],
									[
										[7],
										[3, 'index']
									],
									[1, 1]
								],
								[1, 2]
							],
							[1, 0]
						],
						[1, 0],
						[1, '6%']
					],
					[3, ';border:'],
					[
						[2, '?:'],
						[
							[2, '==='],
							[
								[7],
								[3, 'curtopup']
							],
							[
								[7],
								[3, 'index']
							]
						],
						[1, '2rpx solid #fff'],
						[1, '2rpx solid #24c771']
					],
					[3, ';']
				])
				Z([
					[2, '>'],
					[
						[6],
						[
							[7],
							[3, 'item']
						],
						[3, 'bonusAmount']
					],
					[1, 0]
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_38);
			return __WXML_GLOBAL__.ops_cached.$gwx_38
		}

		function gz$gwx_39() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_39) return __WXML_GLOBAL__.ops_cached.$gwx_39
			__WXML_GLOBAL__.ops_cached.$gwx_39 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
			})(__WXML_GLOBAL__.ops_cached.$gwx_39);
			return __WXML_GLOBAL__.ops_cached.$gwx_39
		}

		function gz$gwx_40() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_40) return __WXML_GLOBAL__.ops_cached.$gwx_40
			__WXML_GLOBAL__.ops_cached.$gwx_40 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([3, 'true'])
				Z([
					[7],
					[3, 'realName']
				])
				Z([
					[7],
					[3, 'writeRealName']
				])
				Z(z[2])
			})(__WXML_GLOBAL__.ops_cached.$gwx_40);
			return __WXML_GLOBAL__.ops_cached.$gwx_40
		}

		function gz$gwx_41() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_41) return __WXML_GLOBAL__.ops_cached.$gwx_41
			__WXML_GLOBAL__.ops_cached.$gwx_41 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([a, [3, '!'],
					[
						[7],
						[3, 'nonearsite']
					]
				])
				Z([
					[7],
					[3, 'nearSiteList']
				])
				Z([3, 'id'])
				Z([3, 'navTositedetail'])
				Z([a, [
						[2, '?:'],
						[
							[2, '=='],
							[
								[6],
								[
									[7],
									[3, 'item']
								],
								[3, 'status']
							],
							[1, 1]
						],
						[1, 'manager'],
						[1, 'offlinemanager']
					],
					[3, ' ']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'avaliable']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'distance']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'needforge']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'offlineCharge']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'pileNo']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'pileJudge']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'id']
				])
				Z([
					[6],
					[
						[7],
						[3, 'item']
					],
					[3, 'status']
				])
				Z([
					[7],
					[3, 'isShowPrice']
				])
				Z([3, 'tips1'])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[7],
					[3, 'hasMore']
				])
				Z(z[0][2])
			})(__WXML_GLOBAL__.ops_cached.$gwx_41);
			return __WXML_GLOBAL__.ops_cached.$gwx_41
		}

		function gz$gwx_42() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_42) return __WXML_GLOBAL__.ops_cached.$gwx_42
			__WXML_GLOBAL__.ops_cached.$gwx_42 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[2, '?:'],
					[
						[7],
						[3, 'showEV']
					],
					[1, 'page-ev'],
					[1, 'page']
				])
				Z([
					[7],
					[3, 'showEV']
				])
				Z([
					[7],
					[3, 'modularTabs']
				])
				Z([3, 'index'])
				Z([3, 'changeModular'])
				Z([a, [3, 'modular-item '],
					[
						[2, '?:'],
						[
							[2, '=='],
							[
								[7],
								[3, 'currentModularIndex']
							],
							[
								[7],
								[3, 'index']
							]
						],
						[1, 'modular-selected'],
						[1, '']
					]
				])
				Z([
					[7],
					[3, 'index']
				])
				Z([
					[2, '=='],
					[
						[7],
						[3, 'currentModularIndex']
					],
					[
						[7],
						[3, 'index']
					]
				])
				Z([
					[7],
					[3, 'whatPattern']
				])
				Z([
					[2, '!'],
					[
						[7],
						[3, 'noNearSite']
					]
				])
				Z([3, 'tips1'])
				Z([
					[7],
					[3, 'loading']
				])
				Z([
					[7],
					[3, 'hasMore']
				])
				Z([
					[7],
					[3, 'noNearSite']
				])
				Z([3, 'markertap'])
				Z([3, 'maptap'])
				Z([1, true])
				Z(z[16])
				Z([3, 'map'])
				Z([
					[7],
					[3, 'latitude']
				])
				Z([
					[7],
					[3, 'longitude']
				])
				Z([
					[7],
					[3, 'markers']
				])
				Z([
					[7],
					[3, 'scale']
				])
				Z(z[16])
				Z([3, 'width: 100%; height: 100%;'])
				Z([
					[7],
					[3, 'subkey']
				])
				Z([
					[7],
					[3, 'condition']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_42);
			return __WXML_GLOBAL__.ops_cached.$gwx_42
		}

		function gz$gwx_43() {
			if (__WXML_GLOBAL__.ops_cached.$gwx_43) return __WXML_GLOBAL__.ops_cached.$gwx_43
			__WXML_GLOBAL__.ops_cached.$gwx_43 = [];
			(function (z) {
				var a = 11;

				function Z(ops) {
					z.push(ops)
				}
				Z([
					[7],
					[3, 'isShowPrice']
				])
				Z([
					[7],
					[3, 'activityOpened']
				])
				Z([
					[7],
					[3, 'showRecharge']
				])
				Z(z[2])
				Z([
					[7],
					[3, 'pilepointList']
				])
				Z([3, 'index'])
				Z([
					[6],
					[
						[7],
						[3, 'pilepointList']
					],
					[3, 'length']
				])
				Z([
					[7],
					[3, 'nopilepointlist']
				])
			})(__WXML_GLOBAL__.ops_cached.$gwx_43);
			return __WXML_GLOBAL__.ops_cached.$gwx_43
		}
		__WXML_GLOBAL__.ops_set.$gwx = z;
		__WXML_GLOBAL__.ops_init.$gwx = true;
		var nv_require = function () {
			var nnm = {
				"m_./pages/mine/withdrawal/index.wxml:m": np_6,
				"p_./pages/charge/detail/filters.wxs": np_0,
				"p_./pages/index/records/detail/format.wxs": np_1,
				"p_./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxs": np_2,
				"p_./pages/mine/electric-card-management/format.wxs": np_3,
				"p_./pages/mine/toHide.wxs": np_4,
				"p_./pages/mine/topup/format.wxs": np_5,
			};
			var nom = {};
			return function (n) {
				if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
				return function () {
					if (!nnm[n]) return undefined;
					try {
						if (!nom[n]) nom[n] = nnm[n]();
						return nom[n];
					} catch (e) {
						e.message = e.message.replace(/nv_/g, '');
						var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
						e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
						e.stack = e.stack.replace(/\snv_/g, ' ');
						e.stack = $gstack(e.stack);
						e.stack += '\n    at ' + n.substring(2);
						console.error(e);
					}
				}
			}
		}()
		f_['./pages/charge/detail/filters.wxs'] = nv_require("p_./pages/charge/detail/filters.wxs");

		function np_0() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_filters = ({
				nv_toFix: (function (nv_value, nv_len) {
					nv_len = undefined === nv_len ? 2 : nv_len;
					return (nv_value.nv_toFixed(nv_len))
				}),
			});
			nv_module.nv_exports = ({
				nv_toFix: nv_filters.nv_toFix,
			});
			return nv_module.nv_exports;
		}

		f_['./pages/charge/detail/index.wxml'] = {};
		f_['./pages/charge/detail/index.wxml']['filters'] = f_['./pages/charge/detail/filters.wxs'] || nv_require("p_./pages/charge/detail/filters.wxs");
		f_['./pages/charge/detail/index.wxml']['filters']();

		f_['./pages/charge/exchange/index.wxml'] = {};
		f_['./pages/charge/exchange/index.wxml']['filters'] = f_['./pages/charge/detail/filters.wxs'] || nv_require("p_./pages/charge/detail/filters.wxs");
		f_['./pages/charge/exchange/index.wxml']['filters']();

		f_['./pages/index/records/detail/format.wxs'] = nv_require("p_./pages/index/records/detail/format.wxs");

		function np_1() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_format = (function (nv_minutes) {
				return ((Math.nv_floor(nv_minutes / 60) + "小时" + (nv_minutes % 60) + "分"))
			});
			nv_module.nv_exports = ({
				nv_format: nv_format,
			});
			return nv_module.nv_exports;
		}

		f_['./pages/index/records/detail/index.wxml'] = {};
		f_['./pages/index/records/detail/index.wxml']['format'] = f_['./pages/index/records/detail/format.wxs'] || nv_require("p_./pages/index/records/detail/format.wxs");
		f_['./pages/index/records/detail/index.wxml']['format']();

		f_['./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml'] = {};
		f_['./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml']['filter'] = f_['./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxs'] || nv_require("p_./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxs");
		f_['./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml']['filter']();

		f_['./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxs'] = nv_require("p_./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxs");

		function np_2() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_format = (function (nv_index) {
				nv_index = nv_index - 1;
				var nv_modearr = ["邮费到付", "邮费在线支付"];
				return (nv_modearr[((nt_0 = (nv_index), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))])
			});
			var nv_savefiexed = (function (nv_res) {
				var nv_b = nv_parseFloat(nv_res).nv_toFixed(3);
				var nv_result = nv_b.nv_substring(0, nv_b.nv_toString().nv_length - 1);
				return (nv_result)
			});
			nv_module.nv_exports = ({
				nv_format: nv_format,
				nv_savefiexed: nv_savefiexed,
			});
			return nv_module.nv_exports;
		}

		f_['./pages/mine/electric-card-management/format.wxs'] = nv_require("p_./pages/mine/electric-card-management/format.wxs");

		function np_3() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_format = (function (nv_cardNo) {
				nv_cardNo = nv_cardNo.nv_toString();
				var nv_arr = [];
				for (var nv_i = 0; nv_i < nv_cardNo.nv_length; nv_i++) {
					nv_arr.nv_push(nv_cardNo[((nt_0 = (nv_i), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))]);
					if (nv_i > 0 && (nv_i + 1) % 4 == 0) {
						nv_arr.nv_push('\t')
					}
				};
				return (nv_arr.nv_join(''))
			});
			nv_module.nv_exports = ({
				nv_format: nv_format,
			});
			return nv_module.nv_exports;
		}

		f_['./pages/mine/electric-card-management/index.wxml'] = {};
		f_['./pages/mine/electric-card-management/index.wxml']['format'] = f_['./pages/mine/electric-card-management/format.wxs'] || nv_require("p_./pages/mine/electric-card-management/format.wxs");
		f_['./pages/mine/electric-card-management/index.wxml']['format']();

		f_['./pages/mine/index.wxml'] = {};
		f_['./pages/mine/index.wxml']['toHide'] = f_['./pages/mine/toHide.wxs'] || nv_require("p_./pages/mine/toHide.wxs");
		f_['./pages/mine/index.wxml']['toHide']();

		f_['./pages/mine/toHide.wxs'] = nv_require("p_./pages/mine/toHide.wxs");

		function np_4() {
			var nv_module = {
				nv_exports: {}
			};
			var nv_toHide = (function (nv_array) {
				var nv_phone = nv_array.nv_substring(0, 3) + '****' + nv_array.nv_substring(7);
				return (nv_phone)
			});
			nv_module.nv_exports = ({
				nv_toHide: nv_toHide,
			});
			return nv_module.nv_exports;
		}

		f_['./pages/mine/topup/format.wxs'] = nv_require("p_./pages/mine/topup/format.wxs");

		function np_5() {
			var nv_module = {
				nv_exports: {}
			};
			nv_module.nv_exports = (function (nv_cardNo) {
				nv_cardNo = nv_cardNo.nv_toString();
				if (nv_cardNo) {
					var nv_arr = [];
					for (var nv_i = 0; nv_i < nv_cardNo.nv_length; nv_i++) {
						nv_arr.nv_push(nv_cardNo[((nt_0 = (nv_i), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))]);
						if (nv_i > 0 && (nv_i + 1) % 4 == 0) {
							nv_arr.nv_push('\t')
						}
					};
					return (nv_arr.nv_join(''))
				} else {
					return ('')
				}
			});
			return nv_module.nv_exports;
		}

		f_['./pages/mine/topup/index.wxml'] = {};
		f_['./pages/mine/topup/index.wxml']['format'] = f_['./pages/mine/topup/format.wxs'] || nv_require("p_./pages/mine/topup/format.wxs");
		f_['./pages/mine/topup/index.wxml']['format']();

		f_['./pages/mine/withdrawal/index.wxml'] = {};
		f_['./pages/mine/withdrawal/index.wxml']['m'] = nv_require("m_./pages/mine/withdrawal/index.wxml:m");

		function np_6() {
			var nv_module = {
				nv_exports: {}
			};
			nv_module.nv_exports.nv_toFixed2 = (function (nv_value) {
				if (nv_value) {
					return (nv_value.nv_toFixed(2))
				};
				return (nv_value)
			});
			return nv_module.nv_exports;
		}

		var x = ['./comps/register/index.wxml', './pages/apply/complete/index.wxml', './pages/apply/master/index.wxml', './pages/authorization/index.wxml', './pages/charge/balance/index.wxml', './pages/charge/control/index.wxml', './pages/charge/detail/index.wxml', './pages/charge/ev-control/index.wxml', './pages/charge/exchange/index.wxml', './pages/index/charging-order/index.wxml', './pages/index/collection/index.wxml', './pages/index/index.wxml', './pages/index/outurl/index.wxml', './pages/index/records/detail/index.wxml', './pages/index/records/evaluate/index.wxml', './pages/index/records/exchange-power/index.wxml', './pages/index/records/index.wxml', './pages/index/rich-text/index.wxml', './pages/mine/agent-admin/index.wxml', './pages/mine/electric-card-management/activation-card/index.wxml', './pages/mine/electric-card-management/add-electric-card/index.wxml', './pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml', './pages/mine/electric-card-management/buy-entity-card/success/index.wxml', './pages/mine/electric-card-management/card-avaliable-site/index.wxml', './pages/mine/electric-card-management/free-card-detail/index.wxml', './pages/mine/electric-card-management/index.wxml', './pages/mine/electric-card-management/replacement-card/index.wxml', './pages/mine/electric-card-management/rollinorout/index.wxml', './pages/mine/fault-repair/index.wxml', './pages/mine/here-service/index.wxml', './pages/mine/index.wxml', './pages/mine/official-account/index.wxml', './pages/mine/topup/index.wxml', './pages/mine/topup/topup-agreement/index.wxml', './pages/mine/user-card/available-pile/index.wxml', './pages/mine/user-card/card-explain/index.wxml', './pages/mine/user-card/index.wxml', './pages/mine/user-card/recharge-card/index.wxml', './pages/mine/version/index.wxml', './pages/mine/withdrawal/index.wxml', './pages/near/near-piles/index.wxml', './pages/near/near-site/index.wxml', './pages/near/site-detail/index.wxml'];
		d_[x[0]] = {}
		var m0 = function (e, s, r, gg) {
			var z = gz$gwx_1()
			var oB = _mz(z, 'form', ['bindreset', 0, 'bindsubmit', 1], [], e, s, gg)
			var xC = _v()
			_(oB, xC)
			if (_oz(z, 2, e, s, gg)) {
				xC.wxVkey = 1
			}
			var oD = _v()
			_(oB, oD)
			if (_oz(z, 3, e, s, gg)) {
				oD.wxVkey = 1
			}
			var fE = _v()
			_(oB, fE)
			if (_oz(z, 4, e, s, gg)) {
				fE.wxVkey = 1
			}
			xC.wxXCkey = 1
			oD.wxXCkey = 1
			fE.wxXCkey = 1
			_(r, oB)
			return r
		}
		e_[x[0]] = {
			f: m0,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[1]] = {}
		var m1 = function (e, s, r, gg) {
			var z = gz$gwx_2()
			return r
		}
		e_[x[1]] = {
			f: m1,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[2]] = {}
		var m2 = function (e, s, r, gg) {
			var z = gz$gwx_3()
			var cI = _mz(z, 'form', ['bindreset', 0, 'bindsubmit', 1], [], e, s, gg)
			var oJ = _v()
			_(cI, oJ)
			if (_oz(z, 2, e, s, gg)) {
				oJ.wxVkey = 1
			}
			oJ.wxXCkey = 1
			_(r, cI)
			var oH = _v()
			_(r, oH)
			if (_oz(z, 3, e, s, gg)) {
				oH.wxVkey = 1
			}
			oH.wxXCkey = 1
			return r
		}
		e_[x[2]] = {
			f: m2,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[3]] = {}
		var m3 = function (e, s, r, gg) {
			var z = gz$gwx_4()
			var aL = _v()
			_(r, aL)
			if (_oz(z, 0, e, s, gg)) {
				aL.wxVkey = 1
			}
			var tM = _mz(z, 'register', ['bind:onRegisteSuccess', 1, 'bind:shouldCloseRegistDialog', 1, 'registerType', 2], [], e, s, gg)
			_(r, tM)
			aL.wxXCkey = 1
			return r
		}
		e_[x[3]] = {
			f: m3,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[4]] = {}
		var m4 = function (e, s, r, gg) {
			var z = gz$gwx_5()
			return r
		}
		e_[x[4]] = {
			f: m4,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[5]] = {}
		var m5 = function (e, s, r, gg) {
			var z = gz$gwx_6()
			var oP = _v()
			_(r, oP)
			if (_oz(z, 0, e, s, gg)) {
				oP.wxVkey = 1
			}
			var xQ = _v()
			_(r, xQ)
			if (_oz(z, 1, e, s, gg)) {
				xQ.wxVkey = 1
			}
			var oR = _v()
			_(r, oR)
			if (_oz(z, 2, e, s, gg)) {
				oR.wxVkey = 1
			}
			var fS = _v()
			_(r, fS)
			if (_oz(z, 3, e, s, gg)) {
				fS.wxVkey = 1
			}
			var cT = _v()
			_(r, cT)
			if (_oz(z, 4, e, s, gg)) {
				cT.wxVkey = 1
			}
			var hU = _v()
			_(r, hU)
			if (_oz(z, 5, e, s, gg)) {
				hU.wxVkey = 1
			}
			var oV = _v()
			_(r, oV)
			if (_oz(z, 6, e, s, gg)) {
				oV.wxVkey = 1
			}
			var cW = _v()
			_(r, cW)
			if (_oz(z, 7, e, s, gg)) {
				cW.wxVkey = 1
			}
			var oX = _v()
			_(r, oX)
			if (_oz(z, 8, e, s, gg)) {
				oX.wxVkey = 1
			}
			var lY = _v()
			_(r, lY)
			if (_oz(z, 9, e, s, gg)) {
				lY.wxVkey = 1
			}
			var aZ = _v()
			_(r, aZ)
			if (_oz(z, 10, e, s, gg)) {
				aZ.wxVkey = 1
			}
			oP.wxXCkey = 1
			xQ.wxXCkey = 1
			oR.wxXCkey = 1
			fS.wxXCkey = 1
			cT.wxXCkey = 1
			hU.wxXCkey = 1
			oV.wxXCkey = 1
			cW.wxXCkey = 1
			oX.wxXCkey = 1
			lY.wxXCkey = 1
			aZ.wxXCkey = 1
			return r
		}
		e_[x[5]] = {
			f: m5,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[6]] = {}
		var m6 = function (e, s, r, gg) {
			var z = gz$gwx_7()
			var o0 = _mz(z, 'form', ['catchsubmit', 0, 'onSubmit', 1, 'reportSubmit', 1], [], e, s, gg)
			var cAB = _v()
			_(o0, cAB)
			if (_oz(z, 3, e, s, gg)) {
				cAB.wxVkey = 1
			}
			var oBB = _v()
			_(o0, oBB)
			if (_oz(z, 4, e, s, gg)) {
				oBB.wxVkey = 1
			}
			var lCB = _v()
			_(o0, lCB)
			if (_oz(z, 5, e, s, gg)) {
				lCB.wxVkey = 1
			}
			var aDB = _v()
			_(o0, aDB)
			if (_oz(z, 6, e, s, gg)) {
				aDB.wxVkey = 1
				var xIB = _v()
				_(aDB, xIB)
				if (_oz(z, 7, e, s, gg)) {
					xIB.wxVkey = 1
				}
				xIB.wxXCkey = 1
			}
			var tEB = _v()
			_(o0, tEB)
			if (_oz(z, 8, e, s, gg)) {
				tEB.wxVkey = 1
			}
			var eFB = _v()
			_(o0, eFB)
			if (_oz(z, 9, e, s, gg)) {
				eFB.wxVkey = 1
			}
			var bGB = _v()
			_(o0, bGB)
			if (_oz(z, 10, e, s, gg)) {
				bGB.wxVkey = 1
			}
			var oHB = _v()
			_(o0, oHB)
			if (_oz(z, 11, e, s, gg)) {
				oHB.wxVkey = 1
				var oJB = _v()
				_(oHB, oJB)
				if (_oz(z, 12, e, s, gg)) {
					oJB.wxVkey = 1
				}
				oJB.wxXCkey = 1
			}
			cAB.wxXCkey = 1
			oBB.wxXCkey = 1
			lCB.wxXCkey = 1
			aDB.wxXCkey = 1
			tEB.wxXCkey = 1
			eFB.wxXCkey = 1
			bGB.wxXCkey = 1
			oHB.wxXCkey = 1
			_(r, o0)
			var e2 = _v()
			_(r, e2)
			if (_oz(z, 13, e, s, gg)) {
				e2.wxVkey = 1
			}
			var b3 = _v()
			_(r, b3)
			if (_oz(z, 14, e, s, gg)) {
				b3.wxVkey = 1
			}
			var o4 = _v()
			_(r, o4)
			if (_oz(z, 15, e, s, gg)) {
				o4.wxVkey = 1
			}
			var x5 = _v()
			_(r, x5)
			if (_oz(z, 16, e, s, gg)) {
				x5.wxVkey = 1
			}
			var o6 = _v()
			_(r, o6)
			if (_oz(z, 17, e, s, gg)) {
				o6.wxVkey = 1
				var fKB = _n('view')
				_rz(z, fKB, 'class', 18, e, s, gg)
				var cLB = _v()
				_(fKB, cLB)
				if (_oz(z, 19, e, s, gg)) {
					cLB.wxVkey = 1
				}
				var hMB = _v()
				_(fKB, hMB)
				if (_oz(z, 20, e, s, gg)) {
					hMB.wxVkey = 1
				}
				var oNB = _v()
				_(fKB, oNB)
				if (_oz(z, 21, e, s, gg)) {
					oNB.wxVkey = 1
				}
				cLB.wxXCkey = 1
				hMB.wxXCkey = 1
				oNB.wxXCkey = 1
				_(o6, fKB)
			}
			var f7 = _v()
			_(r, f7)
			if (_oz(z, 22, e, s, gg)) {
				f7.wxVkey = 1
			}
			var c8 = _v()
			_(r, c8)
			if (_oz(z, 23, e, s, gg)) {
				c8.wxVkey = 1
			}
			var h9 = _v()
			_(r, h9)
			if (_oz(z, 24, e, s, gg)) {
				h9.wxVkey = 1
			}
			e2.wxXCkey = 1
			b3.wxXCkey = 1
			o4.wxXCkey = 1
			x5.wxXCkey = 1
			o6.wxXCkey = 1
			f7.wxXCkey = 1
			c8.wxXCkey = 1
			h9.wxXCkey = 1
			return r
		}
		e_[x[6]] = {
			f: m6,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[7]] = {}
		var m7 = function (e, s, r, gg) {
			var z = gz$gwx_8()
			var oPB = _n('view')
			_rz(z, oPB, 'class', 0, e, s, gg)
			var lQB = _v()
			_(oPB, lQB)
			if (_oz(z, 1, e, s, gg)) {
				lQB.wxVkey = 1
			}
			var aRB = _v()
			_(oPB, aRB)
			if (_oz(z, 2, e, s, gg)) {
				aRB.wxVkey = 1
			}
			var tSB = _v()
			_(oPB, tSB)
			if (_oz(z, 3, e, s, gg)) {
				tSB.wxVkey = 1
			}
			var eTB = _v()
			_(oPB, eTB)
			if (_oz(z, 4, e, s, gg)) {
				eTB.wxVkey = 1
			}
			var bUB = _v()
			_(oPB, bUB)
			if (_oz(z, 5, e, s, gg)) {
				bUB.wxVkey = 1
			}
			lQB.wxXCkey = 1
			aRB.wxXCkey = 1
			tSB.wxXCkey = 1
			eTB.wxXCkey = 1
			bUB.wxXCkey = 1
			_(r, oPB)
			return r
		}
		e_[x[7]] = {
			f: m7,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[8]] = {}
		var m8 = function (e, s, r, gg) {
			var z = gz$gwx_9()
			var xWB = _n('view')
			_rz(z, xWB, 'class', 0, e, s, gg)
			var oXB = _v()
			_(xWB, oXB)
			if (_oz(z, 1, e, s, gg)) {
				oXB.wxVkey = 1
			}
			var fYB = _v()
			_(xWB, fYB)
			if (_oz(z, 2, e, s, gg)) {
				fYB.wxVkey = 1
				var cZB = _n('view')
				_rz(z, cZB, 'class', 3, e, s, gg)
				var h1B = _v()
				_(cZB, h1B)
				if (_oz(z, 4, e, s, gg)) {
					h1B.wxVkey = 1
				}
				var o2B = _v()
				_(cZB, o2B)
				if (_oz(z, 5, e, s, gg)) {
					o2B.wxVkey = 1
				}
				var c3B = _v()
				_(cZB, c3B)
				if (_oz(z, 6, e, s, gg)) {
					c3B.wxVkey = 1
				}
				h1B.wxXCkey = 1
				o2B.wxXCkey = 1
				c3B.wxXCkey = 1
				_(fYB, cZB)
			}
			oXB.wxXCkey = 1
			fYB.wxXCkey = 1
			_(r, xWB)
			return r
		}
		e_[x[8]] = {
			f: m8,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[9]] = {}
		var m9 = function (e, s, r, gg) {
			var z = gz$gwx_10()
			var l5B = _v()
			_(r, l5B)
			if (_oz(z, 0, e, s, gg)) {
				l5B.wxVkey = 1
			}
			l5B.wxXCkey = 1
			return r
		}
		e_[x[9]] = {
			f: m9,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[10]] = {}
		var m10 = function (e, s, r, gg) {
			var z = gz$gwx_11()
			var t7B = _v()
			_(r, t7B)
			if (_oz(z, 0, e, s, gg)) {
				t7B.wxVkey = 1
				var b9B = _v()
				_(t7B, b9B)
				var o0B = function (oBC, xAC, fCC, gg) {
					var hEC = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-avaliable', 2, 'data-distance', 3, 'data-needforge', 4, 'data-offlineCharge', 5, 'data-pileNo', 6, 'data-siteid', 7, 'data-status', 8], [], oBC, xAC, gg)
					var oFC = _n('view')
					_rz(z, oFC, 'class', 12, oBC, xAC, gg)
					var cGC = _v()
					_(oFC, cGC)
					if (_oz(z, 13, oBC, xAC, gg)) {
						cGC.wxVkey = 1
					}
					var oHC = _v()
					_(oFC, oHC)
					if (_oz(z, 14, oBC, xAC, gg)) {
						oHC.wxVkey = 1
					}
					cGC.wxXCkey = 1
					oHC.wxXCkey = 1
					_(hEC, oFC)
					_(fCC, hEC)
					return fCC
				}
				b9B.wxXCkey = 2
				_2z(z, 1, o0B, e, s, gg, b9B, 'item', 'index', 'id')
				var lIC = _n('view')
				_rz(z, lIC, 'class', 15, e, s, gg)
				var aJC = _v()
				_(lIC, aJC)
				if (_oz(z, 16, e, s, gg)) {
					aJC.wxVkey = 1
				}
				var tKC = _v()
				_(lIC, tKC)
				if (_oz(z, 17, e, s, gg)) {
					tKC.wxVkey = 1
				}
				aJC.wxXCkey = 1
				tKC.wxXCkey = 1
				_(t7B, lIC)
			}
			var e8B = _v()
			_(r, e8B)
			if (_oz(z, 18, e, s, gg)) {
				e8B.wxVkey = 1
			}
			t7B.wxXCkey = 1
			e8B.wxXCkey = 1
			return r
		}
		e_[x[10]] = {
			f: m10,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[11]] = {}
		var m11 = function (e, s, r, gg) {
			var z = gz$gwx_12()
			var bMC = _n('view')
			_rz(z, bMC, 'class', 0, e, s, gg)
			var hSC = _n('view')
			_rz(z, hSC, 'class', 1, e, s, gg)
			var cUC = _mz(z, 'view', ['bindtap', 2, 'class', 1], [], e, s, gg)
			var oVC = _v()
			_(cUC, oVC)
			if (_oz(z, 4, e, s, gg)) {
				oVC.wxVkey = 1
			}
			oVC.wxXCkey = 1
			_(hSC, cUC)
			var lWC = _mz(z, 'view', ['bindtap', 5, 'class', 1], [], e, s, gg)
			var aXC = _v()
			_(lWC, aXC)
			if (_oz(z, 7, e, s, gg)) {
				aXC.wxVkey = 1
			}
			aXC.wxXCkey = 1
			_(hSC, lWC)
			var oTC = _v()
			_(hSC, oTC)
			if (_oz(z, 8, e, s, gg)) {
				oTC.wxVkey = 1
			}
			oTC.wxXCkey = 1
			_(bMC, hSC)
			var oNC = _v()
			_(bMC, oNC)
			if (_oz(z, 9, e, s, gg)) {
				oNC.wxVkey = 1
			}
			var xOC = _v()
			_(bMC, xOC)
			if (_oz(z, 10, e, s, gg)) {
				xOC.wxVkey = 1
			}
			var oPC = _v()
			_(bMC, oPC)
			if (_oz(z, 11, e, s, gg)) {
				oPC.wxVkey = 1
			}
			var fQC = _v()
			_(bMC, fQC)
			if (_oz(z, 12, e, s, gg)) {
				fQC.wxVkey = 1
			}
			var cRC = _v()
			_(bMC, cRC)
			if (_oz(z, 13, e, s, gg)) {
				cRC.wxVkey = 1
			}
			oNC.wxXCkey = 1
			xOC.wxXCkey = 1
			oPC.wxXCkey = 1
			fQC.wxXCkey = 1
			cRC.wxXCkey = 1
			_(r, bMC)
			return r
		}
		e_[x[11]] = {
			f: m11,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[12]] = {}
		var m12 = function (e, s, r, gg) {
			var z = gz$gwx_13()
			return r
		}
		e_[x[12]] = {
			f: m12,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[13]] = {}
		var m13 = function (e, s, r, gg) {
			var z = gz$gwx_14()
			var b1C = _v()
			_(r, b1C)
			if (_oz(z, 0, e, s, gg)) {
				b1C.wxVkey = 1
			}
			var o2C = _v()
			_(r, o2C)
			if (_oz(z, 1, e, s, gg)) {
				o2C.wxVkey = 1
			}
			var x3C = _v()
			_(r, x3C)
			if (_oz(z, 2, e, s, gg)) {
				x3C.wxVkey = 1
				var o0C = _v()
				_(x3C, o0C)
				if (_oz(z, 3, e, s, gg)) {
					o0C.wxVkey = 1
				}
				o0C.wxXCkey = 1
			}
			var o4C = _v()
			_(r, o4C)
			if (_oz(z, 4, e, s, gg)) {
				o4C.wxVkey = 1
			}
			var f5C = _v()
			_(r, f5C)
			if (_oz(z, 5, e, s, gg)) {
				f5C.wxVkey = 1
			}
			var c6C = _v()
			_(r, c6C)
			if (_oz(z, 6, e, s, gg)) {
				c6C.wxVkey = 1
			}
			var h7C = _v()
			_(r, h7C)
			if (_oz(z, 7, e, s, gg)) {
				h7C.wxVkey = 1
			}
			var o8C = _v()
			_(r, o8C)
			if (_oz(z, 8, e, s, gg)) {
				o8C.wxVkey = 1
			}
			var c9C = _v()
			_(r, c9C)
			if (_oz(z, 9, e, s, gg)) {
				c9C.wxVkey = 1
			}
			b1C.wxXCkey = 1
			o2C.wxXCkey = 1
			x3C.wxXCkey = 1
			o4C.wxXCkey = 1
			f5C.wxXCkey = 1
			c6C.wxXCkey = 1
			h7C.wxXCkey = 1
			o8C.wxXCkey = 1
			c9C.wxXCkey = 1
			return r
		}
		e_[x[13]] = {
			f: m13,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[14]] = {}
		var m14 = function (e, s, r, gg) {
			var z = gz$gwx_15()
			return r
		}
		e_[x[14]] = {
			f: m14,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[15]] = {}
		var m15 = function (e, s, r, gg) {
			var z = gz$gwx_16()
			var tCD = _n('view')
			_rz(z, tCD, 'class', 0, e, s, gg)
			var eDD = _v()
			_(tCD, eDD)
			if (_oz(z, 1, e, s, gg)) {
				eDD.wxVkey = 1
			}
			var bED = _v()
			_(tCD, bED)
			if (_oz(z, 2, e, s, gg)) {
				bED.wxVkey = 1
			}
			var oFD = _v()
			_(tCD, oFD)
			if (_oz(z, 3, e, s, gg)) {
				oFD.wxVkey = 1
				var xGD = _n('view')
				_rz(z, xGD, 'class', 4, e, s, gg)
				var oHD = _v()
				_(xGD, oHD)
				if (_oz(z, 5, e, s, gg)) {
					oHD.wxVkey = 1
				}
				var fID = _v()
				_(xGD, fID)
				if (_oz(z, 6, e, s, gg)) {
					fID.wxVkey = 1
				}
				oHD.wxXCkey = 1
				fID.wxXCkey = 1
				_(oFD, xGD)
			}
			eDD.wxXCkey = 1
			bED.wxXCkey = 1
			oFD.wxXCkey = 1
			_(r, tCD)
			return r
		}
		e_[x[15]] = {
			f: m15,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[16]] = {}
		var m16 = function (e, s, r, gg) {
			var z = gz$gwx_17()
			var hKD = _v()
			_(r, hKD)
			if (_oz(z, 0, e, s, gg)) {
				hKD.wxVkey = 1
			}
			var oLD = _v()
			_(r, oLD)
			if (_oz(z, 1, e, s, gg)) {
				oLD.wxVkey = 1
			}
			var cMD = _v()
			_(r, cMD)
			if (_oz(z, 2, e, s, gg)) {
				cMD.wxVkey = 1
				var lOD = _v()
				_(cMD, lOD)
				var aPD = function (eRD, tQD, bSD, gg) {
					var xUD = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-recordId', 2], [], eRD, tQD, gg)
					var oVD = _mz(z, 'view', ['class', 8, 'hidden', 1], [], eRD, tQD, gg)
					var fWD = _v()
					_(oVD, fWD)
					if (_oz(z, 10, eRD, tQD, gg)) {
						fWD.wxVkey = 1
					}
					var cXD = _n('view')
					_rz(z, cXD, 'class', 11, eRD, tQD, gg)
					var hYD = _v()
					_(cXD, hYD)
					if (_oz(z, 12, eRD, tQD, gg)) {
						hYD.wxVkey = 1
					}
					var oZD = _mz(z, 'view', ['catchtap', 13, 'class', 1, 'data-commentstatus', 2, 'data-id', 3], [], eRD, tQD, gg)
					var c1D = _v()
					_(oZD, c1D)
					if (_oz(z, 17, eRD, tQD, gg)) {
						c1D.wxVkey = 1
					}
					c1D.wxXCkey = 1
					_(cXD, oZD)
					hYD.wxXCkey = 1
					_(oVD, cXD)
					fWD.wxXCkey = 1
					_(xUD, oVD)
					_(bSD, xUD)
					return bSD
				}
				lOD.wxXCkey = 2
				_2z(z, 3, aPD, e, s, gg, lOD, 'item', 'index', 'id')
			}
			var oND = _v()
			_(r, oND)
			if (_oz(z, 18, e, s, gg)) {
				oND.wxVkey = 1
				var o2D = _n('view')
				_rz(z, o2D, 'class', 19, e, s, gg)
				var l3D = _v()
				_(o2D, l3D)
				if (_oz(z, 20, e, s, gg)) {
					l3D.wxVkey = 1
				}
				var a4D = _v()
				_(o2D, a4D)
				if (_oz(z, 21, e, s, gg)) {
					a4D.wxVkey = 1
				}
				l3D.wxXCkey = 1
				a4D.wxXCkey = 1
				_(oND, o2D)
			}
			hKD.wxXCkey = 1
			oLD.wxXCkey = 1
			cMD.wxXCkey = 1
			oND.wxXCkey = 1
			return r
		}
		e_[x[16]] = {
			f: m16,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[17]] = {}
		var m17 = function (e, s, r, gg) {
			var z = gz$gwx_18()
			var e6D = _v()
			_(r, e6D)
			if (_oz(z, 0, e, s, gg)) {
				e6D.wxVkey = 1
			}
			e6D.wxXCkey = 1
			return r
		}
		e_[x[17]] = {
			f: m17,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[18]] = {}
		var m18 = function (e, s, r, gg) {
			var z = gz$gwx_19()
			return r
		}
		e_[x[18]] = {
			f: m18,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[19]] = {}
		var m19 = function (e, s, r, gg) {
			var z = gz$gwx_20()
			var x9D = _mz(z, 'form', ['bindreset', 0, 'bindsubmit', 1], [], e, s, gg)
			var o0D = _v()
			_(x9D, o0D)
			if (_oz(z, 2, e, s, gg)) {
				o0D.wxVkey = 1
			}
			o0D.wxXCkey = 1
			_(r, x9D)
			return r
		}
		e_[x[19]] = {
			f: m19,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[20]] = {}
		var m20 = function (e, s, r, gg) {
			var z = gz$gwx_21()
			return r
		}
		e_[x[20]] = {
			f: m20,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[21]] = {}
		var m21 = function (e, s, r, gg) {
			var z = gz$gwx_22()
			var hCE = _v()
			_(r, hCE)
			if (_oz(z, 0, e, s, gg)) {
				hCE.wxVkey = 1
			}
			var oDE = _v()
			_(r, oDE)
			if (_oz(z, 1, e, s, gg)) {
				oDE.wxVkey = 1
			}
			var cEE = _v()
			_(r, cEE)
			if (_oz(z, 2, e, s, gg)) {
				cEE.wxVkey = 1
			}
			hCE.wxXCkey = 1
			oDE.wxXCkey = 1
			cEE.wxXCkey = 1
			return r
		}
		e_[x[21]] = {
			f: m21,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[22]] = {}
		var m22 = function (e, s, r, gg) {
			var z = gz$gwx_23()
			return r
		}
		e_[x[22]] = {
			f: m22,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[23]] = {}
		var m23 = function (e, s, r, gg) {
			var z = gz$gwx_24()
			var aHE = _n('view')
			var eJE = _v()
			_(aHE, eJE)
			var bKE = function (xME, oLE, oNE, gg) {
				var cPE = _mz(z, 'view', ['bindtap', 2, 'class', 1, 'data-siteid', 2], [], xME, oLE, gg)
				var hQE = _v()
				_(cPE, hQE)
				if (_oz(z, 5, xME, oLE, gg)) {
					hQE.wxVkey = 1
				}
				hQE.wxXCkey = 1
				_(oNE, cPE)
				return oNE
			}
			eJE.wxXCkey = 2
			_2z(z, 0, bKE, e, s, gg, eJE, 'item', 'index', 'id')
			var tIE = _v()
			_(aHE, tIE)
			if (_oz(z, 6, e, s, gg)) {
				tIE.wxVkey = 1
			}
			tIE.wxXCkey = 1
			_(r, aHE)
			return r
		}
		e_[x[23]] = {
			f: m23,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[24]] = {}
		var m24 = function (e, s, r, gg) {
			var z = gz$gwx_25()
			return r
		}
		e_[x[24]] = {
			f: m24,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[25]] = {}
		var m25 = function (e, s, r, gg) {
			var z = gz$gwx_26()
			var oTE = _v()
			_(r, oTE)
			if (_oz(z, 0, e, s, gg)) {
				oTE.wxVkey = 1
			}
			var lUE = _v()
			_(r, lUE)
			if (_oz(z, 1, e, s, gg)) {
				lUE.wxVkey = 1
			}
			var tWE = _v()
			_(r, tWE)
			var eXE = function (oZE, bYE, x1E, gg) {
				var f3E = _n('view')
				_rz(z, f3E, 'class', 4, oZE, bYE, gg)
				var c4E = _n('view')
				_rz(z, c4E, 'class', 5, oZE, bYE, gg)
				var h5E = _v()
				_(c4E, h5E)
				if (_oz(z, 6, oZE, bYE, gg)) {
					h5E.wxVkey = 1
				}
				var o6E = _v()
				_(c4E, o6E)
				if (_oz(z, 7, oZE, bYE, gg)) {
					o6E.wxVkey = 1
				}
				h5E.wxXCkey = 1
				o6E.wxXCkey = 1
				_(f3E, c4E)
				var c7E = _n('view')
				_rz(z, c7E, 'class', 8, oZE, bYE, gg)
				var o8E = _v()
				_(c7E, o8E)
				if (_oz(z, 9, oZE, bYE, gg)) {
					o8E.wxVkey = 1
				}
				var l9E = _v()
				_(c7E, l9E)
				if (_oz(z, 10, oZE, bYE, gg)) {
					l9E.wxVkey = 1
				}
				var a0E = _v()
				_(c7E, a0E)
				if (_oz(z, 11, oZE, bYE, gg)) {
					a0E.wxVkey = 1
					var eBF = _v()
					_(a0E, eBF)
					if (_oz(z, 12, oZE, bYE, gg)) {
						eBF.wxVkey = 1
					}
					var bCF = _v()
					_(a0E, bCF)
					if (_oz(z, 13, oZE, bYE, gg)) {
						bCF.wxVkey = 1
					}
					eBF.wxXCkey = 1
					bCF.wxXCkey = 1
				}
				var tAF = _v()
				_(c7E, tAF)
				if (_oz(z, 14, oZE, bYE, gg)) {
					tAF.wxVkey = 1
					var oDF = _n('view')
					_rz(z, oDF, 'class', 15, oZE, bYE, gg)
					var xEF = _v()
					_(oDF, xEF)
					if (_oz(z, 16, oZE, bYE, gg)) {
						xEF.wxVkey = 1
					}
					var oFF = _v()
					_(oDF, oFF)
					if (_oz(z, 17, oZE, bYE, gg)) {
						oFF.wxVkey = 1
					}
					xEF.wxXCkey = 1
					oFF.wxXCkey = 1
					_(tAF, oDF)
				}
				o8E.wxXCkey = 1
				l9E.wxXCkey = 1
				a0E.wxXCkey = 1
				tAF.wxXCkey = 1
				_(f3E, c7E)
				_(x1E, f3E)
				return x1E
			}
			tWE.wxXCkey = 2
			_2z(z, 2, eXE, e, s, gg, tWE, 'item', 'index', 'id')
			var aVE = _v()
			_(r, aVE)
			if (_oz(z, 18, e, s, gg)) {
				aVE.wxVkey = 1
			}
			oTE.wxXCkey = 1
			lUE.wxXCkey = 1
			aVE.wxXCkey = 1
			return r
		}
		e_[x[25]] = {
			f: m25,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[26]] = {}
		var m26 = function (e, s, r, gg) {
			var z = gz$gwx_27()
			return r
		}
		e_[x[26]] = {
			f: m26,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[27]] = {}
		var m27 = function (e, s, r, gg) {
			var z = gz$gwx_28()
			return r
		}
		e_[x[27]] = {
			f: m27,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[28]] = {}
		var m28 = function (e, s, r, gg) {
			var z = gz$gwx_29()
			return r
		}
		e_[x[28]] = {
			f: m28,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[29]] = {}
		var m29 = function (e, s, r, gg) {
			var z = gz$gwx_30()
			var cKF = _v()
			_(r, cKF)
			if (_oz(z, 0, e, s, gg)) {
				cKF.wxVkey = 1
			}
			var oLF = _v()
			_(r, oLF)
			var lMF = function (tOF, aNF, ePF, gg) {
				var oRF = _v()
				_(ePF, oRF)
				if (_oz(z, 3, tOF, aNF, gg)) {
					oRF.wxVkey = 1
					var xSF = _v()
					_(oRF, xSF)
					if (_oz(z, 4, tOF, aNF, gg)) {
						xSF.wxVkey = 1
						var oTF = _v()
						_(xSF, oTF)
						if (_oz(z, 5, tOF, aNF, gg)) {
							oTF.wxVkey = 1
							var fUF = _n('view')
							var cVF = _v()
							_(fUF, cVF)
							if (_oz(z, 6, tOF, aNF, gg)) {
								cVF.wxVkey = 1
							}
							var hWF = _v()
							_(fUF, hWF)
							if (_oz(z, 7, tOF, aNF, gg)) {
								hWF.wxVkey = 1
							}
							var oXF = _v()
							_(fUF, oXF)
							if (_oz(z, 8, tOF, aNF, gg)) {
								oXF.wxVkey = 1
							}
							cVF.wxXCkey = 1
							hWF.wxXCkey = 1
							oXF.wxXCkey = 1
							_(oTF, fUF)
						}
						oTF.wxXCkey = 1
					}
					xSF.wxXCkey = 1
				}
				oRF.wxXCkey = 1
				return ePF
			}
			oLF.wxXCkey = 2
			_2z(z, 1, lMF, e, s, gg, oLF, 'item', 'index', 'index')
			cKF.wxXCkey = 1
			return r
		}
		e_[x[29]] = {
			f: m29,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[30]] = {}
		var m30 = function (e, s, r, gg) {
			var z = gz$gwx_31()
			var f9F = _mz(z, 'view', ['bindtap', 0, 'class', 1], [], e, s, gg)
			var c0F = _v()
			_(f9F, c0F)
			if (_oz(z, 2, e, s, gg)) {
				c0F.wxVkey = 1
			}
			c0F.wxXCkey = 1
			_(r, f9F)
			var oZF = _v()
			_(r, oZF)
			if (_oz(z, 3, e, s, gg)) {
				oZF.wxVkey = 1
			}
			var l1F = _v()
			_(r, l1F)
			if (_oz(z, 4, e, s, gg)) {
				l1F.wxVkey = 1
			}
			var a2F = _v()
			_(r, a2F)
			if (_oz(z, 5, e, s, gg)) {
				a2F.wxVkey = 1
			}
			var t3F = _v()
			_(r, t3F)
			if (_oz(z, 6, e, s, gg)) {
				t3F.wxVkey = 1
			}
			var hAG = _n('view')
			_rz(z, hAG, 'class', 7, e, s, gg)
			var oBG = _v()
			_(hAG, oBG)
			if (_oz(z, 8, e, s, gg)) {
				oBG.wxVkey = 1
			}
			var cCG = _v()
			_(hAG, cCG)
			if (_oz(z, 9, e, s, gg)) {
				cCG.wxVkey = 1
			}
			oBG.wxXCkey = 1
			cCG.wxXCkey = 1
			_(r, hAG)
			var e4F = _v()
			_(r, e4F)
			if (_oz(z, 10, e, s, gg)) {
				e4F.wxVkey = 1
			}
			var b5F = _v()
			_(r, b5F)
			if (_oz(z, 11, e, s, gg)) {
				b5F.wxVkey = 1
			}
			var o6F = _v()
			_(r, o6F)
			if (_oz(z, 12, e, s, gg)) {
				o6F.wxVkey = 1
				var oDG = _mz(z, 'register', ['bind:onRegisteSuccess', 13, 'bind:shouldCloseRegistDialog', 1, 'registerType', 2], [], e, s, gg)
				_(o6F, oDG)
			}
			var x7F = _v()
			_(r, x7F)
			if (_oz(z, 16, e, s, gg)) {
				x7F.wxVkey = 1
			}
			var o8F = _v()
			_(r, o8F)
			if (_oz(z, 17, e, s, gg)) {
				o8F.wxVkey = 1
			}
			oZF.wxXCkey = 1
			l1F.wxXCkey = 1
			a2F.wxXCkey = 1
			t3F.wxXCkey = 1
			e4F.wxXCkey = 1
			b5F.wxXCkey = 1
			o6F.wxXCkey = 1
			o6F.wxXCkey = 3
			x7F.wxXCkey = 1
			o8F.wxXCkey = 1
			return r
		}
		e_[x[30]] = {
			f: m30,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[31]] = {}
		var m31 = function (e, s, r, gg) {
			var z = gz$gwx_32()
			return r
		}
		e_[x[31]] = {
			f: m31,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[32]] = {}
		var m32 = function (e, s, r, gg) {
			var z = gz$gwx_33()
			var tGG = _v()
			_(r, tGG)
			if (_oz(z, 0, e, s, gg)) {
				tGG.wxVkey = 1
			}
			var eHG = _v()
			_(r, eHG)
			if (_oz(z, 1, e, s, gg)) {
				eHG.wxVkey = 1
			}
			var oJG = _v()
			_(r, oJG)
			var xKG = function (fMG, oLG, cNG, gg) {
				var oPG = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-curtopupindex', 2, 'data-id', 3], [], fMG, oLG, gg)
				var cQG = _v()
				_(oPG, cQG)
				if (_oz(z, 8, fMG, oLG, gg)) {
					cQG.wxVkey = 1
				}
				cQG.wxXCkey = 1
				_(cNG, oPG)
				return cNG
			}
			oJG.wxXCkey = 2
			_2z(z, 2, xKG, e, s, gg, oJG, 'item', 'index', 'id')
			var bIG = _v()
			_(r, bIG)
			if (_oz(z, 9, e, s, gg)) {
				bIG.wxVkey = 1
			}
			tGG.wxXCkey = 1
			eHG.wxXCkey = 1
			bIG.wxXCkey = 1
			return r
		}
		e_[x[32]] = {
			f: m32,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[33]] = {}
		var m33 = function (e, s, r, gg) {
			var z = gz$gwx_34()
			return r
		}
		e_[x[33]] = {
			f: m33,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[34]] = {}
		var m34 = function (e, s, r, gg) {
			var z = gz$gwx_35()
			var aTG = _v()
			_(r, aTG)
			if (_oz(z, 0, e, s, gg)) {
				aTG.wxVkey = 1
				var eVG = _v()
				_(aTG, eVG)
				var bWG = function (xYG, oXG, oZG, gg) {
					var c2G = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-avaliable', 2, 'data-distance', 3, 'data-needforge', 4, 'data-pileNo', 5, 'data-siteid', 6, 'data-status', 7], [], xYG, oXG, gg)
					var h3G = _v()
					_(c2G, h3G)
					if (_oz(z, 11, xYG, oXG, gg)) {
						h3G.wxVkey = 1
					}
					h3G.wxXCkey = 1
					_(oZG, c2G)
					return oZG
				}
				eVG.wxXCkey = 2
				_2z(z, 1, bWG, e, s, gg, eVG, 'item', 'index', 'id')
			}
			var tUG = _v()
			_(r, tUG)
			if (_oz(z, 12, e, s, gg)) {
				tUG.wxVkey = 1
			}
			aTG.wxXCkey = 1
			tUG.wxXCkey = 1
			return r
		}
		e_[x[34]] = {
			f: m34,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[35]] = {}
		var m35 = function (e, s, r, gg) {
			var z = gz$gwx_36()
			return r
		}
		e_[x[35]] = {
			f: m35,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[36]] = {}
		var m36 = function (e, s, r, gg) {
			var z = gz$gwx_37()
			var o6G = _n('view')
			_rz(z, o6G, 'class', 0, e, s, gg)
			var l7G = _v()
			_(o6G, l7G)
			if (_oz(z, 1, e, s, gg)) {
				l7G.wxVkey = 1
			}
			var a8G = _v()
			_(o6G, a8G)
			if (_oz(z, 2, e, s, gg)) {
				a8G.wxVkey = 1
			}
			l7G.wxXCkey = 1
			a8G.wxXCkey = 1
			_(r, o6G)
			return r
		}
		e_[x[36]] = {
			f: m36,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[37]] = {}
		var m37 = function (e, s, r, gg) {
			var z = gz$gwx_38()
			var e0G = _v()
			_(r, e0G)
			var bAH = function (xCH, oBH, oDH, gg) {
				var cFH = _mz(z, 'view', ['bindtap', 2, 'class', 1, 'data-curtopupindex', 2, 'data-id', 3, 'style', 4], [], xCH, oBH, gg)
				var hGH = _v()
				_(cFH, hGH)
				if (_oz(z, 7, xCH, oBH, gg)) {
					hGH.wxVkey = 1
				}
				hGH.wxXCkey = 1
				_(oDH, cFH)
				return oDH
			}
			e0G.wxXCkey = 2
			_2z(z, 0, bAH, e, s, gg, e0G, 'item', 'index', 'id')
			return r
		}
		e_[x[37]] = {
			f: m37,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[38]] = {}
		var m38 = function (e, s, r, gg) {
			var z = gz$gwx_39()
			return r
		}
		e_[x[38]] = {
			f: m38,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[39]] = {}
		var m39 = function (e, s, r, gg) {
			var z = gz$gwx_40()
			var oJH = _n('form')
			_rz(z, oJH, 'reportSubmit', 0, e, s, gg)
			var lKH = _v()
			_(oJH, lKH)
			if (_oz(z, 1, e, s, gg)) {
				lKH.wxVkey = 1
			}
			var aLH = _v()
			_(oJH, aLH)
			if (_oz(z, 2, e, s, gg)) {
				aLH.wxVkey = 1
			}
			var tMH = _v()
			_(oJH, tMH)
			if (_oz(z, 3, e, s, gg)) {
				tMH.wxVkey = 1
			}
			lKH.wxXCkey = 1
			aLH.wxXCkey = 1
			tMH.wxXCkey = 1
			_(r, oJH)
			return r
		}
		e_[x[39]] = {
			f: m39,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[40]] = {}
		var m40 = function (e, s, r, gg) {
			var z = gz$gwx_41()
			var bOH = _v()
			_(r, bOH)
			if (_oz(z, 0, e, s, gg)) {
				bOH.wxVkey = 1
				var xQH = _v()
				_(bOH, xQH)
				var oRH = function (cTH, fSH, hUH, gg) {
					var cWH = _mz(z, 'view', ['bindtap', 3, 'class', 1, 'data-avaliable', 2, 'data-distance', 3, 'data-needforge', 4, 'data-offlineCharge', 5, 'data-pileNo', 6, 'data-pilejudge', 7, 'data-siteid', 8, 'data-status', 9], [], cTH, fSH, gg)
					var oXH = _v()
					_(cWH, oXH)
					if (_oz(z, 13, cTH, fSH, gg)) {
						oXH.wxVkey = 1
					}
					oXH.wxXCkey = 1
					_(hUH, cWH)
					return hUH
				}
				xQH.wxXCkey = 2
				_2z(z, 1, oRH, e, s, gg, xQH, 'item', 'index', 'id')
				var lYH = _n('view')
				_rz(z, lYH, 'class', 14, e, s, gg)
				var aZH = _v()
				_(lYH, aZH)
				if (_oz(z, 15, e, s, gg)) {
					aZH.wxVkey = 1
				}
				var t1H = _v()
				_(lYH, t1H)
				if (_oz(z, 16, e, s, gg)) {
					t1H.wxVkey = 1
				}
				aZH.wxXCkey = 1
				t1H.wxXCkey = 1
				_(bOH, lYH)
			}
			var oPH = _v()
			_(r, oPH)
			if (_oz(z, 17, e, s, gg)) {
				oPH.wxVkey = 1
			}
			bOH.wxXCkey = 1
			oPH.wxXCkey = 1
			return r
		}
		e_[x[40]] = {
			f: m40,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[41]] = {}
		var m41 = function (e, s, r, gg) {
			var z = gz$gwx_42()
			var b3H = _n('view')
			_rz(z, b3H, 'class', 0, e, s, gg)
			var o4H = _v()
			_(b3H, o4H)
			if (_oz(z, 1, e, s, gg)) {
				o4H.wxVkey = 1
				var o6H = _v()
				_(o4H, o6H)
				var f7H = function (h9H, c8H, o0H, gg) {
					var oBI = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-index', 2], [], h9H, c8H, gg)
					var lCI = _v()
					_(oBI, lCI)
					if (_oz(z, 7, h9H, c8H, gg)) {
						lCI.wxVkey = 1
					}
					lCI.wxXCkey = 1
					_(o0H, oBI)
					return o0H
				}
				o6H.wxXCkey = 2
				_2z(z, 2, f7H, e, s, gg, o6H, 'item', 'index', 'index')
			}
			var x5H = _v()
			_(b3H, x5H)
			if (_oz(z, 8, e, s, gg)) {
				x5H.wxVkey = 1
				var aDI = _v()
				_(x5H, aDI)
				if (_oz(z, 9, e, s, gg)) {
					aDI.wxVkey = 1
					var eFI = _n('view')
					_rz(z, eFI, 'class', 10, e, s, gg)
					var bGI = _v()
					_(eFI, bGI)
					if (_oz(z, 11, e, s, gg)) {
						bGI.wxVkey = 1
					}
					var oHI = _v()
					_(eFI, oHI)
					if (_oz(z, 12, e, s, gg)) {
						oHI.wxVkey = 1
					}
					bGI.wxXCkey = 1
					oHI.wxXCkey = 1
					_(aDI, eFI)
				}
				var tEI = _v()
				_(x5H, tEI)
				if (_oz(z, 13, e, s, gg)) {
					tEI.wxVkey = 1
				}
				aDI.wxXCkey = 1
				tEI.wxXCkey = 1
			} else {
				x5H.wxVkey = 2
				var xII = _mz(z, 'map', ['bindmarkertap', 14, 'bindtap', 1, 'enableScroll', 2, 'enableZoom', 3, 'id', 4, 'latitude', 5, 'longitude', 6, 'markers', 7, 'scale', 8, 'showLocation', 9, 'style', 10, 'subkey', 11], [], e, s, gg)
				var oJI = _v()
				_(xII, oJI)
				if (_oz(z, 26, e, s, gg)) {
					oJI.wxVkey = 1
				}
				oJI.wxXCkey = 1
				_(x5H, xII)
			}
			o4H.wxXCkey = 1
			x5H.wxXCkey = 1
			_(r, b3H)
			return r
		}
		e_[x[41]] = {
			f: m41,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		d_[x[42]] = {}
		var m42 = function (e, s, r, gg) {
			var z = gz$gwx_43()
			var cLI = _v()
			_(r, cLI)
			if (_oz(z, 0, e, s, gg)) {
				cLI.wxVkey = 1
			}
			var hMI = _v()
			_(r, hMI)
			if (_oz(z, 1, e, s, gg)) {
				hMI.wxVkey = 1
			}
			var oNI = _v()
			_(r, oNI)
			if (_oz(z, 2, e, s, gg)) {
				oNI.wxVkey = 1
			}
			var cOI = _v()
			_(r, cOI)
			if (_oz(z, 3, e, s, gg)) {
				cOI.wxVkey = 1
			}
			var lQI = _v()
			_(r, lQI)
			var aRI = function (eTI, tSI, bUI, gg) {
				var xWI = _v()
				_(bUI, xWI)
				if (_oz(z, 6, eTI, tSI, gg)) {
					xWI.wxVkey = 1
				}
				xWI.wxXCkey = 1
				return bUI
			}
			lQI.wxXCkey = 2
			_2z(z, 4, aRI, e, s, gg, lQI, 'item', 'index', 'index')
			var oPI = _v()
			_(r, oPI)
			if (_oz(z, 7, e, s, gg)) {
				oPI.wxVkey = 1
			}
			cLI.wxXCkey = 1
			hMI.wxXCkey = 1
			oNI.wxXCkey = 1
			cOI.wxXCkey = 1
			oPI.wxXCkey = 1
			return r
		}
		e_[x[42]] = {
			f: m42,
			j: [],
			i: [],
			ti: [],
			ic: []
		}
		if (path && e_[path]) {
			return function (env, dd, global) {
				$gwxc = 0;
				var root = {
					"tag": "wx-page"
				};
				root.children = []
				var main = e_[path].f
				if (typeof global === "undefined") global = {};
				global.f = $gdc(f_[path], "", 1);
				try {
					main(env, {}, root, global);
					_tsd(root)
				} catch (err) {
					console.log(err)
				}
				return root;
			}
		}
	}
	__wxAppCode__['comps/register/index.json'] = {
		"component": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['comps/register/index.wxml'] = [$gwx, './comps/register/index.wxml'];
	else __wxAppCode__['comps/register/index.wxml'] = $gwx('./comps/register/index.wxml');
	__wxAppCode__['pages/apply/complete/index.json'] = {
		"navigationBarTitleText": "充电桩管理",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/apply/complete/index.wxml'] = [$gwx, './pages/apply/complete/index.wxml'];
	else __wxAppCode__['pages/apply/complete/index.wxml'] = $gwx('./pages/apply/complete/index.wxml');
	__wxAppCode__['pages/apply/master/index.json'] = {
		"navigationBarTitleText": "申请合作",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/apply/master/index.wxml'] = [$gwx, './pages/apply/master/index.wxml'];
	else __wxAppCode__['pages/apply/master/index.wxml'] = $gwx('./pages/apply/master/index.wxml');
	__wxAppCode__['pages/authorization/index.json'] = {
		"usingComponents": {
			"register": "../../comps/register/index"
		},
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771"
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/authorization/index.wxml'] = [$gwx, './pages/authorization/index.wxml'];
	else __wxAppCode__['pages/authorization/index.wxml'] = $gwx('./pages/authorization/index.wxml');
	__wxAppCode__['pages/charge/balance/index.json'] = {
		"navigationBarTitleText": "我的余额",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/charge/balance/index.wxml'] = [$gwx, './pages/charge/balance/index.wxml'];
	else __wxAppCode__['pages/charge/balance/index.wxml'] = $gwx('./pages/charge/balance/index.wxml');
	__wxAppCode__['pages/charge/control/index.json'] = {
		"navigationBarTitleText": "充电控制",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/charge/control/index.wxml'] = [$gwx, './pages/charge/control/index.wxml'];
	else __wxAppCode__['pages/charge/control/index.wxml'] = $gwx('./pages/charge/control/index.wxml');
	__wxAppCode__['pages/charge/detail/index.json'] = {
		"navigationBarTitleText": "充电详情",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/charge/detail/index.wxml'] = [$gwx, './pages/charge/detail/index.wxml'];
	else __wxAppCode__['pages/charge/detail/index.wxml'] = $gwx('./pages/charge/detail/index.wxml');
	__wxAppCode__['pages/charge/ev-control/index.json'] = {
		"navigationStyle": "custom",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/charge/ev-control/index.wxml'] = [$gwx, './pages/charge/ev-control/index.wxml'];
	else __wxAppCode__['pages/charge/ev-control/index.wxml'] = $gwx('./pages/charge/ev-control/index.wxml');
	__wxAppCode__['pages/charge/exchange/index.json'] = {
		"navigationBarTitleText": "换电详情",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/charge/exchange/index.wxml'] = [$gwx, './pages/charge/exchange/index.wxml'];
	else __wxAppCode__['pages/charge/exchange/index.wxml'] = $gwx('./pages/charge/exchange/index.wxml');
	__wxAppCode__['pages/index/charging-order/index.json'] = {
		"navigationBarTitleText": "充电中订单",
		"navigationBarTextStyle": "white",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/charging-order/index.wxml'] = [$gwx, './pages/index/charging-order/index.wxml'];
	else __wxAppCode__['pages/index/charging-order/index.wxml'] = $gwx('./pages/index/charging-order/index.wxml');
	__wxAppCode__['pages/index/collection/index.json'] = {
		"navigationBarTitleText": "我的收藏",
		"navigationBarTextStyle": "white",
		"enablePullDownRefresh": false,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/collection/index.wxml'] = [$gwx, './pages/index/collection/index.wxml'];
	else __wxAppCode__['pages/index/collection/index.wxml'] = $gwx('./pages/index/collection/index.wxml');
	__wxAppCode__['pages/index/index.json'] = {
		"navigationBarTextStyle": "white",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];
	else __wxAppCode__['pages/index/index.wxml'] = $gwx('./pages/index/index.wxml');
	__wxAppCode__['pages/index/outurl/index.json'] = {
		"usingComponents": {},
		"disableScroll": true,
		"enablePullDownRefresh": false
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/outurl/index.wxml'] = [$gwx, './pages/index/outurl/index.wxml'];
	else __wxAppCode__['pages/index/outurl/index.wxml'] = $gwx('./pages/index/outurl/index.wxml');
	__wxAppCode__['pages/index/records/detail/index.json'] = {
		"navigationBarTitleText": "订单详情",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/records/detail/index.wxml'] = [$gwx, './pages/index/records/detail/index.wxml'];
	else __wxAppCode__['pages/index/records/detail/index.wxml'] = $gwx('./pages/index/records/detail/index.wxml');
	__wxAppCode__['pages/index/records/evaluate/index.json'] = {
		"navigationBarTitleText": "订单反馈",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/records/evaluate/index.wxml'] = [$gwx, './pages/index/records/evaluate/index.wxml'];
	else __wxAppCode__['pages/index/records/evaluate/index.wxml'] = $gwx('./pages/index/records/evaluate/index.wxml');
	__wxAppCode__['pages/index/records/exchange-power/index.json'] = {
		"navigationBarTitleText": "换电记录",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"enablePullDownRefresh": false,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/records/exchange-power/index.wxml'] = [$gwx, './pages/index/records/exchange-power/index.wxml'];
	else __wxAppCode__['pages/index/records/exchange-power/index.wxml'] = $gwx('./pages/index/records/exchange-power/index.wxml');
	__wxAppCode__['pages/index/records/index.json'] = {
		"navigationBarTitleText": "充电记录",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"enablePullDownRefresh": false,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/records/index.wxml'] = [$gwx, './pages/index/records/index.wxml'];
	else __wxAppCode__['pages/index/records/index.wxml'] = $gwx('./pages/index/records/index.wxml');
	__wxAppCode__['pages/index/rich-text/index.json'] = {
		"navigationBarTitleText": "消息内容",
		"navigationBarTextStyle": "white",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/rich-text/index.wxml'] = [$gwx, './pages/index/rich-text/index.wxml'];
	else __wxAppCode__['pages/index/rich-text/index.wxml'] = $gwx('./pages/index/rich-text/index.wxml');
	__wxAppCode__['pages/mine/agent-admin/index.json'] = {
		"usingComponents": {},
		"navigationBarTitleText": "商户管理平台",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#246cff"
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/agent-admin/index.wxml'] = [$gwx, './pages/mine/agent-admin/index.wxml'];
	else __wxAppCode__['pages/mine/agent-admin/index.wxml'] = $gwx('./pages/mine/agent-admin/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/activation-card/index.json'] = {
		"navigationBarTitleText": "添加电卡",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/activation-card/index.wxml'] = [$gwx, './pages/mine/electric-card-management/activation-card/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/activation-card/index.wxml'] = $gwx('./pages/mine/electric-card-management/activation-card/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/add-electric-card/index.json'] = {
		"navigationBarTitleText": "添加充电卡",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/add-electric-card/index.wxml'] = [$gwx, './pages/mine/electric-card-management/add-electric-card/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/add-electric-card/index.wxml'] = $gwx('./pages/mine/electric-card-management/add-electric-card/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/buy-entity-card/cardorder/index.json'] = {
		"navigationBarTitleText": "订单详情",
		"navigationBarBackgroundColor": "#fff",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml'] = [$gwx, './pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml'] = $gwx('./pages/mine/electric-card-management/buy-entity-card/cardorder/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/buy-entity-card/success/index.json'] = {
		"navigationBarTextStyle": "white",
		"navigationBarTitleText": "电卡购买成功",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/buy-entity-card/success/index.wxml'] = [$gwx, './pages/mine/electric-card-management/buy-entity-card/success/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/buy-entity-card/success/index.wxml'] = $gwx('./pages/mine/electric-card-management/buy-entity-card/success/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/card-avaliable-site/index.json'] = {
		"navigationBarTitleText": "附近充电站",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/card-avaliable-site/index.wxml'] = [$gwx, './pages/mine/electric-card-management/card-avaliable-site/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/card-avaliable-site/index.wxml'] = $gwx('./pages/mine/electric-card-management/card-avaliable-site/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/free-card-detail/index.json'] = {
		"navigationBarTitleText": "免费卡详情",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/free-card-detail/index.wxml'] = [$gwx, './pages/mine/electric-card-management/free-card-detail/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/free-card-detail/index.wxml'] = $gwx('./pages/mine/electric-card-management/free-card-detail/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/index.json'] = {
		"navigationBarTitleText": "电卡管理",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/index.wxml'] = [$gwx, './pages/mine/electric-card-management/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/index.wxml'] = $gwx('./pages/mine/electric-card-management/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/replacement-card/index.json'] = {
		"navigationBarTitleText": "代充充值卡",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/replacement-card/index.wxml'] = [$gwx, './pages/mine/electric-card-management/replacement-card/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/replacement-card/index.wxml'] = $gwx('./pages/mine/electric-card-management/replacement-card/index.wxml');
	__wxAppCode__['pages/mine/electric-card-management/rollinorout/index.json'] = {
		"navigationBarTitleText": "",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/electric-card-management/rollinorout/index.wxml'] = [$gwx, './pages/mine/electric-card-management/rollinorout/index.wxml'];
	else __wxAppCode__['pages/mine/electric-card-management/rollinorout/index.wxml'] = $gwx('./pages/mine/electric-card-management/rollinorout/index.wxml');
	__wxAppCode__['pages/mine/fault-repair/index.json'] = {
		"navigationBarTitleText": "故障报修",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/fault-repair/index.wxml'] = [$gwx, './pages/mine/fault-repair/index.wxml'];
	else __wxAppCode__['pages/mine/fault-repair/index.wxml'] = $gwx('./pages/mine/fault-repair/index.wxml');
	__wxAppCode__['pages/mine/here-service/index.json'] = {
		"navigationBarTitleText": "帮助",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/here-service/index.wxml'] = [$gwx, './pages/mine/here-service/index.wxml'];
	else __wxAppCode__['pages/mine/here-service/index.wxml'] = $gwx('./pages/mine/here-service/index.wxml');
	__wxAppCode__['pages/mine/index.json'] = {
		"usingComponents": {
			"register": "../../comps/register/index"
		},
		"navigationBarTitleText": "个人中心",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771"
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/index.wxml'] = [$gwx, './pages/mine/index.wxml'];
	else __wxAppCode__['pages/mine/index.wxml'] = $gwx('./pages/mine/index.wxml');
	__wxAppCode__['pages/mine/official-account/index.json'] = {
		"navigationBarTitleText": "关注公众号",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/official-account/index.wxml'] = [$gwx, './pages/mine/official-account/index.wxml'];
	else __wxAppCode__['pages/mine/official-account/index.wxml'] = $gwx('./pages/mine/official-account/index.wxml');
	__wxAppCode__['pages/mine/topup/index.json'] = {
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/topup/index.wxml'] = [$gwx, './pages/mine/topup/index.wxml'];
	else __wxAppCode__['pages/mine/topup/index.wxml'] = $gwx('./pages/mine/topup/index.wxml');
	__wxAppCode__['pages/mine/topup/topup-agreement/index.json'] = {
		"navigationBarTitleText": "充值协议",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/topup/topup-agreement/index.wxml'] = [$gwx, './pages/mine/topup/topup-agreement/index.wxml'];
	else __wxAppCode__['pages/mine/topup/topup-agreement/index.wxml'] = $gwx('./pages/mine/topup/topup-agreement/index.wxml');
	__wxAppCode__['pages/mine/user-card/available-pile/index.json'] = {
		"navigationBarTitleText": "可用桩点",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/user-card/available-pile/index.wxml'] = [$gwx, './pages/mine/user-card/available-pile/index.wxml'];
	else __wxAppCode__['pages/mine/user-card/available-pile/index.wxml'] = $gwx('./pages/mine/user-card/available-pile/index.wxml');
	__wxAppCode__['pages/mine/user-card/card-explain/index.json'] = {
		"navigationBarTitleText": "专用账户说明",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/user-card/card-explain/index.wxml'] = [$gwx, './pages/mine/user-card/card-explain/index.wxml'];
	else __wxAppCode__['pages/mine/user-card/card-explain/index.wxml'] = $gwx('./pages/mine/user-card/card-explain/index.wxml');
	__wxAppCode__['pages/mine/user-card/index.json'] = {
		"navigationBarTitleText": "充电账户总额",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/user-card/index.wxml'] = [$gwx, './pages/mine/user-card/index.wxml'];
	else __wxAppCode__['pages/mine/user-card/index.wxml'] = $gwx('./pages/mine/user-card/index.wxml');
	__wxAppCode__['pages/mine/user-card/recharge-card/index.json'] = {
		"navigationBarTitleText": "专用账户充值",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/user-card/recharge-card/index.wxml'] = [$gwx, './pages/mine/user-card/recharge-card/index.wxml'];
	else __wxAppCode__['pages/mine/user-card/recharge-card/index.wxml'] = $gwx('./pages/mine/user-card/recharge-card/index.wxml');
	__wxAppCode__['pages/mine/version/index.json'] = {
		"navigationBarTitleText": "版本信息",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/version/index.wxml'] = [$gwx, './pages/mine/version/index.wxml'];
	else __wxAppCode__['pages/mine/version/index.wxml'] = $gwx('./pages/mine/version/index.wxml');
	__wxAppCode__['pages/mine/withdrawal/index.json'] = {
		"navigationBarTitleText": "提现",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/withdrawal/index.wxml'] = [$gwx, './pages/mine/withdrawal/index.wxml'];
	else __wxAppCode__['pages/mine/withdrawal/index.wxml'] = $gwx('./pages/mine/withdrawal/index.wxml');
	__wxAppCode__['pages/near/near-piles/index.json'] = {
		"navigationBarTitleText": "附近充电桩",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/near/near-piles/index.wxml'] = [$gwx, './pages/near/near-piles/index.wxml'];
	else __wxAppCode__['pages/near/near-piles/index.wxml'] = $gwx('./pages/near/near-piles/index.wxml');
	__wxAppCode__['pages/near/near-site/index.json'] = {
		"navigationBarTitleText": "附近充电站",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"enablePullDownRefresh": true,
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/near/near-site/index.wxml'] = [$gwx, './pages/near/near-site/index.wxml'];
	else __wxAppCode__['pages/near/near-site/index.wxml'] = $gwx('./pages/near/near-site/index.wxml');
	__wxAppCode__['pages/near/site-detail/index.json'] = {
		"navigationBarTitleText": "站点详情",
		"navigationBarTextStyle": "white",
		"navigationBarBackgroundColor": "#24c771",
		"usingComponents": {}
	};
	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/near/site-detail/index.wxml'] = [$gwx, './pages/near/site-detail/index.wxml'];
	else __wxAppCode__['pages/near/site-detail/index.wxml'] = $gwx('./pages/near/site-detail/index.wxml');

	define("antmove.config.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		module.exports = {
			env: "production",
			platform: "alipay",
			component2: !0,
			scope: !0,
			type: "wx-alipay",
			error: !1,
			empty: !1,
			fromId: 0,
			isReport: !0,
			useRuntimeLog: !1,
			watch: !1,
			ignoreNpm: !0,
			libraryName: "",
			useCompileLog: !0,
			input: "./",
			output: "..\\..\\charge-pile-zfb-build\\zhe-you-dian-refactor",
			hooks: {
				appJson: function (e) {
					return e
				}
			},
			babel: {
				presets: [],
				plugins: function () {
					return []
				}
			},
			plugins: []
		};
	});
	define("utils/auth.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./http.js"),
			n = function (e) {
				e && e.accessToken && e.expiresIn && (e.expiresAt = Date.now() + 1e3 * e.expiresIn, delete e.expiresIn, wx.setStorageSync("access-token", e))
			},
			t = function () {
				var e = wx.getStorageSync("access-token");
				if (e && e.accessToken && e.expiresAt && e.expiresAt > Date.now() + 3e4) return e.accessToken
			},
			o = !1,
			c = [],
			i = function (t) {
				if (t && c.push(t), !o) {
					o = !0;
					var i = {
						aborted: !1,
						abort: function () {
							i.aborted = !0, o = !1, c.splice(0, c.length)
						}
					};
					return wx.login({
						success: function (t) {
							if (!i.aborted) {
								var s = e.post({
									url: "/oauth/sign-in",
									data: {
										code: t.code,
										type: wx.getStorageSync("miniType")
									},
									success: function (e) {
										if (n(e.data), o = !1, !i.aborted) {
											var t = [];
											c.forEach(function (n) {
												var o = n(e.data.accessToken);
												o && "function" == typeof o.abort && t.push(o)
											}), c.splice(0, c.length), i.abort = function () {
												t.forEach(function (e) {
													e.abort()
												})
											}
										}
									},
									fail: function (e) {
										o = !1, c.splice(0, c.length)
									}
								});
								i.abort = function () {
									i.aborted = !0, s.abort()
								}
							}
						},
						fail: function () {
							o = !1, c.splice(0, c.length)
						}
					}), i
				}
			};
		module.exports = {
			login: i,
			checkSession: function (e) {
				wx.checkSession({
					success: function () {
						e && e()
					},
					fail: function () {
						i(e)
					}
				})
			},
			token: function (e) {
				var n = t();
				return n ? e(n) : i(e)
			},
			scope: function (e, n, t) {
				wx.getSetting({
					success: function (o) {
						o.authSetting["scope." + e] ? n() : wx.authorize({
							scope: "scope." + e,
							success: function () {
								n && n()
							},
							fail: function () {
								t && t()
							}
						})
					}
				})
			},
			saveUserInfo: function (e) {
				wx.setStorageSync("user-info", e)
			},
			getUserInfo: function () {
				return wx.getStorageSync("user-info")
			},
			authorized: function () {
				var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
					n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					t = arguments[2],
					o = wx.getStorageSync("authorized");
				if (o) return o;
				!o && e && wx.showModal({
					title: "未绑定手机",
					content: "是否前去授权绑定手机号，否则无法使用小程序",
					success: function (e) {
						e.confirm ? wx.navigateTo({
							url: "/pages/authorization/index" + (t ? "?redirect_url=" + encodeURIComponent(t) : "")
						}) : e.cancel && n && wx.switchTab({
							url: "/pages/index/index"
						})
					}
				})
			},
			setAuthorized: function () {
				wx.setStorageSync("authorized", !0)
			}
		};
	});
	define("utils/client.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e, n) {
			s ? c.subscribe(e, function (e) {
				n(JSON.parse(e.body), e.headers)
			}, {
				selector: "userId = " + r
			}) : u.push({
				destination: e,
				handler: function (e) {
					n(JSON.parse(e.body), e.headers)
				}
			})
		}
		var n = require("./ws.js"),
			t = require("./stomp.js").Stomp,
			o = require("./config.js").endpoint.wss,
			r = 0,
			s = !1,
			u = [],
			i = null;
		t.setInterval = function (e, n) {
			return setInterval(n, e)
		}, t.clearInterval = function (e) {
			clearInterval(e), u.splice(0, u.length), i && i(), s = !1
		};
		var c = t.over(n);
		c.debug = function (e) {}, module.exports = {
			topic: function (n, t) {
				e("/topic" + n, t)
			},
			queue: function (n, t) {
				e("/queue" + n, t)
			},
			start: function (e, t) {
				s || (r = e, c.connect("user", "user123", function (e) {
					s = !0, u.forEach(function (e) {
						c.subscribe(e.destination, e.handler, {
							selector: "userId = " + r
						})
					}), t && t()
				}, function (e) {}), n.init(o, ["v10.stomp", "v11.stomp"]))
			},
			stop: function () {
				s && c && c.disconnect(), s = !1, i && i()
			},
			onStoped: function (e) {
				i = e
			}
		};
	});
	define("utils/config.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var s = {
			https: "https://wwwsss/ejlchina",
			wss: "wss://wss.cdyun.vip"
		};
		module.exports = {
			endpoint: s,
			uriPrefix: "ejlchina",
			isTest: !1
		};
	});
	define("utils/constant.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		module.exports = {
			NO_CHARGING: 0,
			WAIT_CHARGE: 1,
			WAIT_NOTICE: 2,
			CHARGING: 3,
			CHARG_SUSPEND: 4,
			CHARG_FINISH: 5,
			CHARG_STARTING: 6,
			CHARG_POWER: 7
		};
	});
	define("utils/http.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function e(e) {
			var n = wx.getStorageSync("networkType"),
				a = wx.getStorageSync("networkNomeShowModal");
			if ("none" == n && !a) return wx.showModal({
				title: "当前没有网络，请检查网络设置",
				content: "",
				showCancel: !1,
				success: function (e) {
					wx.setStorageSync("networkNomeShowModal", !1)
				}
			}), void wx.setStorageSync("networkNomeShowModal", !0);
			new RegExp("^/").test(e.url) && (e.url = t + e.url, e.data = e.data || {}, e.data.lang = "zh"), e.showLoading && (e.loadingText ? wx.showLoading({
				title: e.loadingText,
				mask: !0
			}) : wx.showLoading({
				title: "  ",
				mask: !0
			}));
			var r = e.complete;
			e.complete = function () {
				e.showLoading && wx.hideLoading(), r && r()
			};
			var i = e.success;
			if (e.success = function (t) {
					if (e.showLoading && wx.hideLoading(), 500 == t.statusCode) wx.showModal({
						title: "后台出错啦",
						content: JSON.stringify(t.data)
					});
					else if (1e3 == t.statusCode) wx.showModal({
						title: "您的版本太老啦，请杀掉进程重新打开小程序来触发更新吧",
						content: ""
					});
					else {
						if (t.isOk = function () {
								return t.statusCode >= 200 && t.statusCode <= 300
							}, "alipay" === wx.__target__) {
							var o = t.data;
							try {
								t.data = JSON.parse(o)
							} catch (e) {
								t.data = o
							}
						}
						i && i(t)
					}
				}, "alipay" === wx.__target__ && (e.dataType = "text"), !e.requireAuth) return wx.request(e);
			o || (o = require("./auth.js")), o.token(function (t) {
				return e.header = e.header || {}, 1 == wx.getStorageSync("miniType") ? e.header["WX-Token"] = t : e.header["ZFB-Token"] = t, wx.request(e)
			})
		}
		var t = require("./config.js").endpoint.https,
			o = null;
		module.exports = {
			get: function (t) {
				return t.method = "GET", e(t)
			},
			post: function (t) {
				return t.method = "POST", t.header = t.header || {}, t.header["content-type"] = "application/x-www-form-urlencoded", e(t)
			},
			put: function (t) {
				return t.method = "PUT", e(t)
			},
			delete: function (t) {
				return t.method = "DELETE", e(t)
			}
		};
	});
	define("utils/location.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = "--location--";
		module.exports = {
			assertCanUse: function (n) {
				wx.getLocation({
					success: function (o) {
						wx.setStorage({
							key: t,
							data: o
						}), n && n()
					},
					fail: function (t) {
						"getLocation:fail:auth denied" == t.errMsg ? wx.openSetting() : wx.showModal({
							title: "无法获取定位",
							content: "请授权获取地理位置",
							showCancel: !1,
							success: function (t) {
								t.confirm && wx.openSetting()
							}
						})
					}
				})
			},
			getLocation: function (n) {
				var o = !1;
				wx.getLocation({
					success: function (e) {
						wx.setStorage({
							key: t,
							data: e
						}), o || (o = !0, n(e))
					},
					fail: function (t) {
						console.error("未能获得位置：" + JSON.stringify(t))
					}
				})
			}
		};
	});
	define("utils/pay.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		module.exports = {
			pay: function (t) {
				var e = wx.getStorageSync("miniType");
				return new Promise(function (n, o) {
					if (1 == e && wx.requestPayment({
							timeStamp: t.timestamp,
							nonceStr: t.noncestr,
							package: t.packageValue,
							signType: t.signType,
							paySign: t.sign,
							success: function (t) {
								wx.showToast({
									title: "支付成功",
									icon: "none",
									duration: 2e3
								}), n(t)
							},
							fail: function (t) {
								wx.showToast({
									title: "您取消了支付",
									icon: "none",
									duration: 2e3
								}), o(t)
							}
						}), 2 == e) {
						var i = function (t) {
								wx.showToast({
									title: "支付失败:" + JSON.stringify(t),
									icon: "none",
									duration: 2e3
								}), o(t)
							},
							a = function (t) {
								9e3 == t.resultCode ? (wx.showToast({
									title: "支付成功",
									icon: "none",
									duration: 2e3
								}), n(t)) : (wx.showToast({
									title: "已取消支付",
									icon: "none",
									duration: 2e3
								}), o(t))
							};
						"string" == typeof t ? _my.tradePay({
							orderStr: t,
							success: a,
							fail: i
						}) : _my.tradePay({
							tradeNO: t.tradeNo,
							success: a,
							fail: i
						})
					}
				})
			}
		};
	});
	define("utils/stomp.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		(function () {
			var t, n, e, i, r = {}.hasOwnProperty,
				o = [].slice;
			t = {
				LF: "\n",
				NULL: "\0"
			}, e = function () {
				function n(t, n, e) {
					this.command = t, this.headers = null != n ? n : {}, this.body = null != e ? e : ""
				}
				var e;
				return n.prototype.toString = function () {
					var e, i, o, s, u;
					e = [this.command], (o = !1 === this.headers["content-length"]) && delete this.headers["content-length"], u = this.headers;
					for (i in u) r.call(u, i) && (s = u[i], e.push(i + ":" + s));
					return this.body && !o && e.push("content-length:" + n.sizeOfUTF8(this.body)), e.push(t.LF + this.body), e.join(t.LF)
				}, n.sizeOfUTF8 = function (t) {
					return t ? encodeURI(t).match(/%..|./g).length : 0
				}, e = function (e) {
					var i, r, o, s, u, a, c, h, f, p, l, d, g, b, m, v, y;
					for (s = e.search(RegExp("" + t.LF + t.LF)), o = (u = e.substring(0, s).split(t.LF)).shift(), a = {}, d = function (t) {
							return t.replace(/^\s+|\s+$/g, "")
						}, g = 0, m = (v = u.reverse()).length; g < m; g++) h = (p = v[g]).indexOf(":"), a[d(p.substring(0, h))] = d(p.substring(h + 1));
					if (i = "", l = s + 2, a["content-length"]) f = parseInt(a["content-length"]), i = ("" + e).substring(l, l + f);
					else
						for (r = null, c = b = l, y = e.length;
							(l <= y ? b < y : b > y) && (r = e.charAt(c)) !== t.NULL; c = l <= y ? ++b : --b) i += r;
					return new n(o, a, i)
				}, n.unmarshall = function (n) {
					var i, r, o, s;
					return r = n.split(RegExp("" + t.NULL + t.LF + "*")), s = {
						frames: [],
						partial: ""
					}, s.frames = function () {
						var t, n, o, s;
						for (s = [], t = 0, n = (o = r.slice(0, -1)).length; t < n; t++) i = o[t], s.push(e(i));
						return s
					}(), (o = r.slice(-1)[0]) === t.LF || -1 !== o.search(RegExp("" + t.NULL + t.LF + "*$")) ? s.frames.push(e(o)) : s.partial = o, s
				}, n.marshall = function (e, i, r) {
					return new n(e, i, r).toString() + t.NULL
				}, n
			}(), n = function () {
				function n(t) {
					this.ws = t, this.ws.binaryType = "arraybuffer", this.counter = 0, this.connected = !1, this.heartbeat = {
						outgoing: 1e4,
						incoming: 1e4
					}, this.maxWebSocketFrameSize = 16384, this.subscriptions = {}, this.partialData = ""
				}
				var r;
				return n.prototype.debug = function (t) {
					var n;
					return "undefined" != typeof window && null !== window && null != (n = window.console) ? n.log(t) : void 0
				}, r = function () {
					return Date.now ? Date.now() : (new Date).valueOf
				}, n.prototype._transmit = function (t, n, i) {
					var r;
					for (r = e.marshall(t, n, i), "function" == typeof this.debug && this.debug(">>> " + r);;) {
						if (!(r.length > this.maxWebSocketFrameSize)) return this.ws.send(r);
						this.ws.send(r.substring(0, this.maxWebSocketFrameSize)), r = r.substring(this.maxWebSocketFrameSize), "function" == typeof this.debug && this.debug("remaining = " + r.length)
					}
				}, n.prototype._setupHeartbeat = function (n) {
					var e, o, s, u, a, c;
					if ((a = n.version) === i.VERSIONS.V1_1 || a === i.VERSIONS.V1_2) return c = function () {
						var t, e, i, r;
						for (r = [], t = 0, e = (i = n["heart-beat"].split(",")).length; t < e; t++) u = i[t], r.push(parseInt(u));
						return r
					}(), o = c[0], e = c[1], 0 !== this.heartbeat.outgoing && 0 !== e && (s = Math.max(this.heartbeat.outgoing, e), "function" == typeof this.debug && this.debug("send PING every " + s + "ms"), this.pinger = i.setInterval(s, function (n) {
						return function () {
							return n.ws.send(t.LF), "function" == typeof n.debug ? n.debug(">>> PING") : void 0
						}
					}(this))), 0 !== this.heartbeat.incoming && 0 !== o ? (s = Math.max(this.heartbeat.incoming, o), "function" == typeof this.debug && this.debug("check PONG every " + s + "ms"), this.ponger = i.setInterval(s, function (t) {
						return function () {
							var n;
							if ((n = r() - t.serverActivity) > 2 * s) return "function" == typeof t.debug && t.debug("did not receive server activity for the last " + n + "ms"), t.ws.close()
						}
					}(this))) : void 0
				}, n.prototype._parseConnect = function () {
					var t, n, e, i;
					switch (t = 1 <= arguments.length ? o.call(arguments, 0) : [], i = {}, t.length) {
						case 2:
							i = t[0], n = t[1];
							break;
						case 3:
							t[1] instanceof Function ? (i = t[0], n = t[1], e = t[2]) : (i.login = t[0], i.passcode = t[1], n = t[2]);
							break;
						case 4:
							i.login = t[0], i.passcode = t[1], n = t[2], e = t[3];
							break;
						default:
							i.login = t[0], i.passcode = t[1], n = t[2], e = t[3], i.host = t[4]
					}
					return [i, n, e]
				}, n.prototype.connect = function () {
					var n, s, u, a;
					return n = 1 <= arguments.length ? o.call(arguments, 0) : [], a = this._parseConnect.apply(this, n), u = a[0], this.connectCallback = a[1], s = a[2], "function" == typeof this.debug && this.debug("Opening Web Socket..."), this.ws.onmessage = function (n) {
						return function (i) {
							var o, u, a, c, h, f, p, l, d, g, b, m, v;
							if (c = "undefined" != typeof ArrayBuffer && i.data instanceof ArrayBuffer ? (o = new Uint8Array(i.data), "function" == typeof n.debug && n.debug("--- got data length: " + o.length), function () {
									var t, n, e;
									for (e = [], t = 0, n = o.length; t < n; t++) u = o[t], e.push(String.fromCharCode(u));
									return e
								}().join("")) : i.data, n.serverActivity = r(), c !== t.LF) {
								for ("function" == typeof n.debug && n.debug("<<< " + c), d = e.unmarshall(n.partialData + c), n.partialData = d.partial, v = [], g = 0, b = (m = d.frames).length; g < b; g++) switch ((h = m[g]).command) {
									case "CONNECTED":
										"function" == typeof n.debug && n.debug("connected to server " + h.headers.server), n.connected = !0, n._setupHeartbeat(h.headers), v.push("function" == typeof n.connectCallback ? n.connectCallback(h) : void 0);
										break;
									case "MESSAGE":
										l = h.headers.subscription, (p = n.subscriptions[l] || n.onreceive) ? (a = n, f = h.headers["message-id"], h.ack = function (t) {
											return null == t && (t = {}), a.ack(f, l, t)
										}, h.nack = function (t) {
											return null == t && (t = {}), a.nack(f, l, t)
										}, v.push(p(h))) : v.push("function" == typeof n.debug ? n.debug("Unhandled received MESSAGE: " + h) : void 0);
										break;
									case "RECEIPT":
										v.push("function" == typeof n.onreceipt ? n.onreceipt(h) : void 0);
										break;
									case "ERROR":
										v.push("function" == typeof s ? s(h) : void 0);
										break;
									default:
										v.push("function" == typeof n.debug ? n.debug("Unhandled frame: " + h) : void 0)
								}
								return v
							}
							"function" == typeof n.debug && n.debug("<<< PONG")
						}
					}(this), this.ws.onclose = function (t) {
						return function () {
							var n;
							return n = "Whoops! Lost connection to " + t.ws.url, "function" == typeof t.debug && t.debug(n), t._cleanUp(), "function" == typeof s ? s(n) : void 0
						}
					}(this), this.ws.onopen = function (t) {
						return function () {
							return "function" == typeof t.debug && t.debug("Web Socket Opened..."), u["accept-version"] = i.VERSIONS.supportedVersions(), u["heart-beat"] = [t.heartbeat.outgoing, t.heartbeat.incoming].join(","), t._transmit("CONNECT", u)
						}
					}(this)
				}, n.prototype.disconnect = function (t, n) {
					return null == n && (n = {}), this._transmit("DISCONNECT", n), this.ws.onclose = null, this.ws.close(), this._cleanUp(), "function" == typeof t ? t() : void 0
				}, n.prototype._cleanUp = function () {
					if (this.connected = !1, this.pinger && i.clearInterval(this.pinger), this.ponger) return i.clearInterval(this.ponger)
				}, n.prototype.send = function (t, n, e) {
					return null == n && (n = {}), null == e && (e = ""), n.destination = t, this._transmit("SEND", n, e)
				}, n.prototype.subscribe = function (t, n, e) {
					var i;
					return null == e && (e = {}), e.id || (e.id = "sub-" + this.counter++), e.destination = t, this.subscriptions[e.id] = n, this._transmit("SUBSCRIBE", e), i = this, {
						id: e.id,
						unsubscribe: function () {
							return i.unsubscribe(e.id)
						}
					}
				}, n.prototype.unsubscribe = function (t) {
					return delete this.subscriptions[t], this._transmit("UNSUBSCRIBE", {
						id: t
					})
				}, n.prototype.begin = function (t) {
					var n, e;
					return e = t || "tx-" + this.counter++, this._transmit("BEGIN", {
						transaction: e
					}), n = this, {
						id: e,
						commit: function () {
							return n.commit(e)
						},
						abort: function () {
							return n.abort(e)
						}
					}
				}, n.prototype.commit = function (t) {
					return this._transmit("COMMIT", {
						transaction: t
					})
				}, n.prototype.abort = function (t) {
					return this._transmit("ABORT", {
						transaction: t
					})
				}, n.prototype.ack = function (t, n, e) {
					return null == e && (e = {}), e["message-id"] = t, e.subscription = n, this._transmit("ACK", e)
				}, n.prototype.nack = function (t, n, e) {
					return null == e && (e = {}), e["message-id"] = t, e.subscription = n, this._transmit("NACK", e)
				}, n
			}(), i = {
				VERSIONS: {
					V1_0: "1.0",
					V1_1: "1.1",
					V1_2: "1.2",
					supportedVersions: function () {
						return "1.1,1.0"
					}
				},
				client: function (t, e) {
					var r, o;
					return null == e && (e = ["v10.stomp", "v11.stomp"]), r = i.WebSocketClass || WebSocket, o = new r(t, e), new n(o)
				},
				over: function (t) {
					return new n(t)
				},
				Frame: e
			}, "undefined" != typeof exports && null !== exports && (exports.Stomp = i), "undefined" != typeof window && null !== window ? (i.setInterval = function (t, n) {
				return window.setInterval(n, t)
			}, i.clearInterval = function (t) {
				return window.clearInterval(t)
			}, window.Stomp = i) : exports || (self.Stomp = i)
		}).call(void 0);
	});
	define("utils/util.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t) {
			if (Array.isArray(t)) {
				for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
				return r
			}
			return Array.from(t)
		}
		module.exports = {
			throttle: function (e, r) {
				var n = 0,
					a = null,
					s = null;
				return function () {
					var p = Date.now(),
						o = p - n;
					o >= r ? (n = p, e.apply(void 0, arguments)) : (s && clearTimeout(s), a = arguments, s = setTimeout(function () {
						var s = Date.now();
						n + r <= s && (n = s, e.apply(void 0, t(a)))
					}, r - o))
				}
			},
			formatSeconds: function (t) {
				var e = parseInt(t),
					r = "00",
					n = "00";
				r = parseInt(e / 60) < 10 ? "0" + parseInt(e / 60) : parseInt(e / 60), e = parseInt(e % 60) < 10 ? "0" + parseInt(e % 60) : parseInt(e % 60), r > 60 && (n = parseInt(r / 60), r = parseInt(r % 60) < 10 ? "0" + parseInt(r % 60) : parseInt(r % 60));
				var a = e;
				return a = r + ":" + a, a = n + ":" + a
			},
			formatMinutes: function (t) {
				var e = parseInt(t),
					r = "00",
					n = "00";
				return r = parseInt(e / 60) < 10 ? "0" + parseInt(e / 60) : parseInt(e / 60), e = parseInt(e % 60) < 10 ? "0" + parseInt(e % 60) : parseInt(e % 60), r > 60 && (n = parseInt(r / 60), r = parseInt(r % 60) < 10 ? "0" + parseInt(r % 60) : parseInt(r % 60)), n + ":" + r
			},
			theTimeSeconds: function (t, e) {
				var r = parseInt(t),
					n = "00",
					a = "00";
				n = parseInt(r / 60) < 10 ? "0" + parseInt(r / 60) : parseInt(r / 60), r = parseInt(r % 60) < 10 ? "0" + parseInt(r % 60) : parseInt(r % 60), n > 60 && (a = parseInt(n / 60), n = parseInt(n % 60) < 10 ? "0" + parseInt(n % 60) : parseInt(n % 60));
				var s = r;
				s = a + ":" + (s = n + ":" + s), t % 60 > 0 && (t = Math.ceil(t / 60));
				var p = t * ((e /= 100) / 60);
				return p = Math.ceil(100 * p) / 100, {
					result: s,
					money: p
				}
			},
			shortDistance: function (t, e, r, n) {
				var a = (e + n) / 2,
					s = .868 * (t - r),
					p = e - n;
				return Math.sqrt(Math.pow(s, 2) * Math.pow(Math.cos(a / 180), 2) + Math.pow(p, 2)) * Math.PI * 6371e3 / 180
			},
			formatDate: function (t, e) {
				var r = {
					"M+": t.getMonth() + 1,
					"d+": t.getDate(),
					"h+": t.getHours(),
					"m+": t.getMinutes(),
					"s+": t.getSeconds(),
					"q+": Math.floor((t.getMonth() + 3) / 3),
					S: t.getMilliseconds()
				};
				/(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
				for (var n in r) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? r[n] : ("00" + r[n]).substr(("" + r[n]).length)));
				return e
			},
			hex2int: function (t) {
				for (var e, r = t.length, n = new Array(r), a = 0; a < r; a++) 48 <= (e = t.charCodeAt(a)) && e < 58 ? e -= 48 : e = (223 & e) - 65 + 10, n[a] = e;
				return n.reduce(function (t, e) {
					return t = 16 * t + e
				}, 0)
			}
		};
	});
	define("utils/ws.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function o(o) {
			n ? wx.sendSocketMessage({
				data: o
			}) : e.push(o)
		}
		var n = !1,
			e = [],
			s = {
				send: o,
				close: function () {
					n && wx.closeSocket()
				},
				onopen: null,
				onmessage: null,
				onclose: null
			};
		s.init = function (t, c) {
			wx.connectSocket({
				url: t,
				protocols: c
			}), wx.onSocketOpen(function (t) {
				wx.setStorageSync("ws-open", 1), n = !0;
				for (var c = 0; c < e.length; c++) o(e[c]);
				e = [], s.onopen && s.onopen()
			}), wx.onSocketMessage(function (o) {
				s.onmessage && s.onmessage(o)
			}), wx.onSocketClose(function (o) {
				n = !1, wx.setStorageSync("ws-open", 0), s.onclose && s.onclose()
			})
		}, module.exports = s;
	});
	define("utils/wx_charts.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, e) {
			if (null == t) throw new TypeError("Cannot convert undefined or null to object");
			for (var i = Object(t), n = 1; n < arguments.length; n++) {
				var a = arguments[n];
				if (null != a)
					for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o])
			}
			return i
		}

		function e(t, e, i) {
			if (isNaN(t)) throw new Error("[wxCharts] unvalid series data!");
			i = i || 10, e = e || "upper";
			for (var n = 1; i < 1;) i *= 10, n *= 10;
			for (t = "upper" === e ? Math.ceil(t * n) : Math.floor(t * n); t % i != 0;) "upper" === e ? t++ : t--;
			return t / n
		}

		function i(t, e, i, n) {
			var a = n.width - i.padding - e.xAxisPoints[0],
				o = e.eachSpacing * n.categories.length,
				r = t;
			return t >= 0 ? r = 0 : Math.abs(t) >= o - a && (r = a - o), r
		}

		function n(t, e, i) {
			function n(t) {
				for (; t < 0;) t += 2 * Math.PI;
				for (; t > 2 * Math.PI;) t -= 2 * Math.PI;
				return t
			}
			return t = n(t), e = n(e), i = n(i), e > i && (i += 2 * Math.PI, t < e && (t += 2 * Math.PI)), t >= e && t <= i
		}

		function a(t, e, i) {
			var n = t,
				a = i - e,
				o = n + (i - a - n) / Math.sqrt(2);
			return o *= -1, {
				transX: o,
				transY: (i - a) * (Math.sqrt(2) - 1) - (i - a - n) / Math.sqrt(2)
			}
		}

		function o(t, e) {
			function i(t, e) {
				return !(!t[e - 1] || !t[e + 1]) && (t[e].y >= Math.max(t[e - 1].y, t[e + 1].y) || t[e].y <= Math.min(t[e - 1].y, t[e + 1].y))
			}
			var n = null,
				a = null,
				o = null,
				r = null;
			if (e < 1 ? (n = t[0].x + .2 * (t[1].x - t[0].x), a = t[0].y + .2 * (t[1].y - t[0].y)) : (n = t[e].x + .2 * (t[e + 1].x - t[e - 1].x), a = t[e].y + .2 * (t[e + 1].y - t[e - 1].y)), e > t.length - 3) {
				var s = t.length - 1;
				o = t[s].x - .2 * (t[s].x - t[s - 1].x), r = t[s].y - .2 * (t[s].y - t[s - 1].y)
			} else o = t[e + 1].x - .2 * (t[e + 2].x - t[e].x), r = t[e + 1].y - .2 * (t[e + 2].y - t[e].y);
			return i(t, e + 1) && (r = t[e + 1].y), i(t, e) && (a = t[e].y), {
				ctrA: {
					x: n,
					y: a
				},
				ctrB: {
					x: o,
					y: r
				}
			}
		}

		function r(t, e, i) {
			return {
				x: i.x + t,
				y: i.y - e
			}
		}

		function s(t, e) {
			if (e)
				for (; et.isCollision(t, e);) t.start.x > 0 ? t.start.y-- : t.start.x < 0 ? t.start.y++ : t.start.y > 0 ? t.start.y++ : t.start.y--;
			return t
		}

		function l(t, e) {
			var i = 0;
			return t.map(function (t) {
				return t.color || (t.color = e.colors[i], i = (i + 1) % e.colors.length), t
			})
		}

		function h(t, i) {
			var n = 0,
				a = i - t;
			return n = a >= 1e4 ? 1e3 : a >= 1e3 ? 100 : a >= 100 ? 10 : a >= 10 ? 5 : a >= 1 ? 1 : a >= .1 ? .1 : .01, {
				minRange: e(t, "lower", n),
				maxRange: e(i, "upper", n)
			}
		}

		function c(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
				i = 0;
			return (t = (t = String(t)).split("")).forEach(function (t) {
				/[a-zA-Z]/.test(t) ? i += 7 : /[0-9]/.test(t) ? i += 5.5 : /\./.test(t) ? i += 2.7 : /-/.test(t) ? i += 3.25 : /[\u4e00-\u9fa5]/.test(t) ? i += 10 : /\(|\)/.test(t) ? i += 3.73 : /\s/.test(t) ? i += 2.5 : /%/.test(t) ? i += 8 : i += 10
			}), i * e / 10
		}

		function f(t) {
			return t.reduce(function (t, e) {
				return (t.data ? t.data : t).concat(e.data)
			}, [])
		}

		function d(t, e) {
			var i = [];
			return t.forEach(function (t) {
				if (null !== t.data[e] && void 0 !== t.data[e]) {
					var n = {};
					n.color = t.color, n.name = t.name, n.data = t.format ? t.format(t.data[e]) : t.data[e], i.push(n)
				}
			}), i
		}

		function x(t) {
			var e = t.map(function (t) {
				return c(t)
			});
			return Math.max.apply(null, e)
		}

		function u(t) {
			for (var e = 2 * Math.PI / t, i = [], n = 0; n < t; n++) i.push(e * n);
			return i.map(function (t) {
				return -1 * t + Math.PI / 2
			})
		}

		function g(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
				o = t.map(function (t) {
					return {
						text: a.format ? a.format(t, n[i]) : t.name + ": " + t.data,
						color: t.color
					}
				}),
				r = [],
				s = {
					x: 0,
					y: 0
				};
			return e.forEach(function (t) {
				void 0 !== t[i] && null !== t[i] && r.push(t[i])
			}), r.forEach(function (t) {
				s.x = Math.round(t.x), s.y += t.y
			}), s.y /= r.length, {
				textList: o,
				offset: s
			}
		}

		function p(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
				o = -1;
			return y(t, i, n) && e.forEach(function (e, i) {
				t.x + a > e && (o = i)
			}), o
		}

		function y(t, e, i) {
			return t.x < e.width - i.padding && t.x > i.padding + i.yAxisWidth + i.yAxisTitleWidth && t.y > i.padding && t.y < e.height - i.legendHeight - i.xAxisHeight - i.padding
		}

		function v(t, e, i) {
			var n = 2 * Math.PI / i,
				a = -1;
			if (P(t, e.center, e.radius)) {
				var o = function (t) {
						return t < 0 && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI), t
					},
					r = Math.atan2(e.center.y - t.y, t.x - e.center.x);
				(r *= -1) < 0 && (r += 2 * Math.PI), e.angleList.map(function (t) {
					return t = o(-1 * t)
				}).forEach(function (t, e) {
					var i = o(t - n / 2),
						s = o(t + n / 2);
					s < i && (s += 2 * Math.PI), (r >= i && r <= s || r + 2 * Math.PI >= i && r + 2 * Math.PI <= s) && (a = e)
				})
			}
			return a
		}

		function m(t, e) {
			var i = -1;
			if (P(t, e.center, e.radius)) {
				var a = Math.atan2(e.center.y - t.y, t.x - e.center.x);
				a = -a;
				for (var o = 0, r = e.series.length; o < r; o++) {
					var s = e.series[o];
					if (n(a, s._start_, s._start_ + 2 * s._proportion_ * Math.PI)) {
						i = o;
						break
					}
				}
			}
			return i
		}

		function P(t, e, i) {
			return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) <= Math.pow(i, 2)
		}

		function S(t) {
			var e = [],
				i = [];
			return t.forEach(function (t, n) {
				null !== t ? i.push(t) : (i.length && e.push(i), i = [])
			}), i.length && e.push(i), e
		}

		function T(t, e, i) {
			if (!1 === e.legend) return {
				legendList: [],
				legendHeight: 0
			};
			var n = [],
				a = 0,
				o = [];
			return t.forEach(function (t) {
				var i = 30 + c(t.name || "undefined");
				a + i > e.width ? (n.push(o), a = i, o = [t]) : (a += i, o.push(t))
			}), o.length && n.push(o), {
				legendList: n,
				legendHeight: n.length * (i.fontSize + 8) + 5
			}
		}

		function A(t, e, i) {
			var n = {
					angle: 0,
					xAxisHeight: i.xAxisHeight
				},
				a = F(t, e, i).eachSpacing,
				o = t.map(function (t) {
					return c(t)
				}),
				r = Math.max.apply(this, o);
			return r + 2 * i.xAxisTextPadding > a && (n.angle = 45 * Math.PI / 180, n.xAxisHeight = 2 * i.xAxisTextPadding + r * Math.sin(n.angle)), n
		}

		function b(t, e, i, n, a) {
			var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
				s = a.extra.radar || {};
			s.max = s.max || 0;
			var l = Math.max(s.max, Math.max.apply(null, f(n))),
				h = [];
			return n.forEach(function (n) {
				var a = {};
				a.color = n.color, a.data = [], n.data.forEach(function (n, s) {
					var h = {};
					h.angle = t[s], h.proportion = n / l, h.position = r(i * h.proportion * o * Math.cos(h.angle), i * h.proportion * o * Math.sin(h.angle), e), a.data.push(h)
				}), h.push(a)
			}), h
		}

		function M(t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
				i = 0,
				n = 0;
			return t.forEach(function (t) {
				t.data = null === t.data ? 0 : t.data, i += t.data
			}), t.forEach(function (t) {
				t.data = null === t.data ? 0 : t.data, t._proportion_ = t.data / i * e
			}), t.forEach(function (t) {
				t._start_ = n, n += 2 * t._proportion_ * Math.PI
			}), t
		}

		function _(t) {
			var e = 0;
			return (t = M(t)).forEach(function (t) {
				var i = t.format ? t.format(+t._proportion_.toFixed(2)) : et.toFixed(100 * t._proportion_) + "%";
				e = Math.max(e, c(i))
			}), e
		}

		function E(t, e, i, n, a, o) {
			return t.map(function (t) {
				return null === t ? null : (t.width = (e - 2 * a.columePadding) / i, o.extra.column && o.extra.column.width && +o.extra.column.width > 0 ? t.width = Math.min(t.width, +o.extra.column.width) : t.width = Math.min(t.width, 25), t.x += (n + .5 - i / 2) * t.width, t)
			})
		}

		function F(t, e, i) {
			var n = i.yAxisWidth + i.yAxisTitleWidth,
				a = (e.width - 2 * i.padding - n) / (e.enableScroll ? Math.min(5, t.length) : t.length),
				o = [],
				r = i.padding + n,
				s = e.width - i.padding;
			return t.forEach(function (t, e) {
				o.push(r + e * a)
			}), !0 === e.enableScroll ? o.push(r + t.length * a) : o.push(s), {
				xAxisPoints: o,
				startX: r,
				endX: s,
				eachSpacing: a
			}
		}

		function w(t, e, i, n, a, o, r) {
			var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
				l = [],
				h = o.height - 2 * r.padding - r.xAxisHeight - r.legendHeight;
			return t.forEach(function (t, c) {
				if (null === t) l.push(null);
				else {
					var f = {};
					f.x = n[c] + Math.round(a / 2);
					var d = h * (t - e) / (i - e);
					d *= s, f.y = o.height - r.xAxisHeight - r.legendHeight - Math.round(d) - r.padding, l.push(f)
				}
			}), l
		}

		function L(t, e, i) {
			var n = f(t);
			n = n.filter(function (t) {
				return null !== t
			});
			var a = Math.min.apply(this, n),
				o = Math.max.apply(this, n);
			if ("number" == typeof e.yAxis.min && (a = Math.min(e.yAxis.min, a)), "number" == typeof e.yAxis.max && (o = Math.max(e.yAxis.max, o)), a === o) {
				var r = o || 1;
				a -= r, o += r
			}
			for (var s = h(a, o), l = s.minRange, c = [], d = (s.maxRange - l) / i.yAxisSplit, x = 0; x <= i.yAxisSplit; x++) c.push(l + d * x);
			return c.reverse()
		}

		function k(t, e, i) {
			var n = L(t, e, i),
				a = i.yAxisWidth,
				o = n.map(function (t) {
					return t = et.toFixed(t, 2), t = e.yAxis.format ? e.yAxis.format(Number(t)) : t, a = Math.max(a, c(t) + 5), t
				});
			return !0 === e.yAxis.disabled && (a = 0), {
				rangesFormat: o,
				ranges: n,
				yAxisWidth: a
			}
		}

		function C(t, e, i, n) {
			n.beginPath(), n.setStrokeStyle("#ffffff"), n.setLineWidth(1), n.setFillStyle(e), "diamond" === i ? t.forEach(function (t, e) {
				null !== t && (n.moveTo(t.x, t.y - 4.5), n.lineTo(t.x - 4.5, t.y), n.lineTo(t.x, t.y + 4.5), n.lineTo(t.x + 4.5, t.y), n.lineTo(t.x, t.y - 4.5))
			}) : "circle" === i ? t.forEach(function (t, e) {
				null !== t && (n.moveTo(t.x + 3.5, t.y), n.arc(t.x, t.y, 4, 0, 2 * Math.PI, !1))
			}) : "rect" === i ? t.forEach(function (t, e) {
				null !== t && (n.moveTo(t.x - 3.5, t.y - 3.5), n.rect(t.x - 3.5, t.y - 3.5, 7, 7))
			}) : "triangle" === i && t.forEach(function (t, e) {
				null !== t && (n.moveTo(t.x, t.y - 4.5), n.lineTo(t.x - 4.5, t.y + 4.5), n.lineTo(t.x + 4.5, t.y + 4.5), n.lineTo(t.x, t.y - 4.5))
			}), n.closePath(), n.fill(), n.stroke()
		}

		function H(t, e, i) {
			var n = t.title.fontSize || e.titleFontSize,
				a = t.subtitle.fontSize || e.subtitleFontSize,
				o = t.title.name || "",
				r = t.subtitle.name || "",
				s = t.title.color || e.titleColor,
				l = t.subtitle.color || e.subtitleColor,
				h = o ? n : 0,
				f = r ? a : 0;
			if (r) {
				var d = c(r, a),
					x = (t.width - d) / 2 + (t.subtitle.offsetX || 0),
					u = (t.height - e.legendHeight + a) / 2;
				o && (u -= (h + 5) / 2), i.beginPath(), i.setFontSize(a), i.setFillStyle(l), i.fillText(r, x, u), i.stroke(), i.closePath()
			}
			if (o) {
				var g = c(o, n),
					p = (t.width - g) / 2 + (t.title.offsetX || 0),
					y = (t.height - e.legendHeight + n) / 2;
				r && (y += (f + 5) / 2), i.beginPath(), i.setFontSize(n), i.setFillStyle(s), i.fillText(o, p, y), i.stroke(), i.closePath()
			}
		}

		function I(t, e, i, n) {
			var a = e.data;
			n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle("#666666"), t.forEach(function (t, i) {
				if (null !== t) {
					var o = e.format ? e.format(a[i]) : a[i];
					n.fillText(o, t.x - c(o) / 2, t.y - 2)
				}
			}), n.closePath(), n.stroke()
		}

		function z(t, e, i, n, a, o) {
			var s = n.extra.radar || {};
			e += a.radarLabelTextMargin, o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle(s.labelColor || "#666666"), t.forEach(function (t, s) {
				var l = {
						x: e * Math.cos(t),
						y: e * Math.sin(t)
					},
					h = r(l.x, l.y, i),
					f = h.x,
					d = h.y;
				et.approximatelyEqual(l.x, 0) ? f -= c(n.categories[s] || "") / 2 : l.x < 0 && (f -= c(n.categories[s] || "")), o.fillText(n.categories[s] || "", f, d + a.fontSize / 2)
			}), o.stroke(), o.closePath()
		}

		function D(t, e, i, n, a, o) {
			var l = a + i.pieChartLinePadding,
				h = [],
				f = null;
			t.map(function (t) {
				return {
					arc: 2 * Math.PI - (t._start_ + 2 * Math.PI * t._proportion_ / 2),
					text: t.format ? t.format(+t._proportion_.toFixed(2)) : et.toFixed(100 * t._proportion_) + "%",
					color: t.color
				}
			}).forEach(function (t) {
				var e = Math.cos(t.arc) * l,
					n = Math.sin(t.arc) * l,
					o = Math.cos(t.arc) * a,
					r = Math.sin(t.arc) * a,
					d = e >= 0 ? e + i.pieChartTextPadding : e - i.pieChartTextPadding,
					x = n,
					u = c(t.text),
					g = x;
				f && et.isSameXCoordinateArea(f.start, {
					x: d
				}) && (g = d > 0 ? Math.min(x, f.start.y) : e < 0 ? Math.max(x, f.start.y) : x > 0 ? Math.max(x, f.start.y) : Math.min(x, f.start.y)), d < 0 && (d -= u);
				var p = {
					lineStart: {
						x: o,
						y: r
					},
					lineEnd: {
						x: e,
						y: n
					},
					start: {
						x: d,
						y: g
					},
					width: u,
					height: i.fontSize,
					text: t.text,
					color: t.color
				};
				f = s(p, f), h.push(f)
			}), h.forEach(function (t) {
				var e = r(t.lineStart.x, t.lineStart.y, o),
					a = r(t.lineEnd.x, t.lineEnd.y, o),
					s = r(t.start.x, t.start.y, o);
				n.setLineWidth(1), n.setFontSize(i.fontSize), n.beginPath(), n.setStrokeStyle(t.color), n.setFillStyle(t.color), n.moveTo(e.x, e.y);
				var l = t.start.x < 0 ? s.x + t.width : s.x,
					h = t.start.x < 0 ? s.x - 5 : s.x + 5;
				n.quadraticCurveTo(a.x, a.y, l, s.y), n.moveTo(e.x, e.y), n.stroke(), n.closePath(), n.beginPath(), n.moveTo(s.x + t.width, s.y), n.arc(l, s.y, 2, 0, 2 * Math.PI), n.closePath(), n.fill(), n.beginPath(), n.setFillStyle("#666666"), n.fillText(t.text, h, s.y + 3), n.closePath(), n.stroke(), n.closePath()
			})
		}

		function W(t, e, i, n) {
			var a = i.padding,
				o = e.height - i.padding - i.xAxisHeight - i.legendHeight;
			n.beginPath(), n.setStrokeStyle("#cccccc"), n.setLineWidth(1), n.moveTo(t, a), n.lineTo(t, o), n.stroke(), n.closePath()
		}

		function O(e, i, n, a, o) {
			var r = !1;
			(i = t({
				x: 0,
				y: 0
			}, i)).y -= 8;
			var s = e.map(function (t) {
					return c(t.text)
				}),
				l = 9 + 4 * a.toolTipPadding + Math.max.apply(null, s),
				h = 2 * a.toolTipPadding + e.length * a.toolTipLineHeight;
			i.x - Math.abs(n._scrollDistance_) + 8 + l > n.width && (r = !0), o.beginPath(), o.setFillStyle(n.tooltip.option.background || a.toolTipBackground), o.setGlobalAlpha(a.toolTipOpacity), r ? (o.moveTo(i.x, i.y + 10), o.lineTo(i.x - 8, i.y + 10 - 5), o.lineTo(i.x - 8, i.y + 10 + 5), o.moveTo(i.x, i.y + 10), o.fillRect(i.x - l - 8, i.y, l, h)) : (o.moveTo(i.x, i.y + 10), o.lineTo(i.x + 8, i.y + 10 - 5), o.lineTo(i.x + 8, i.y + 10 + 5), o.moveTo(i.x, i.y + 10), o.fillRect(i.x + 8, i.y, l, h)), o.closePath(), o.fill(), o.setGlobalAlpha(1), e.forEach(function (t, e) {
				o.beginPath(), o.setFillStyle(t.color);
				var n = i.x + 8 + 2 * a.toolTipPadding,
					s = i.y + (a.toolTipLineHeight - a.fontSize) / 2 + a.toolTipLineHeight * e + a.toolTipPadding;
				r && (n = i.x - l - 8 + 2 * a.toolTipPadding), o.fillRect(n, s, 4, a.fontSize), o.closePath()
			}), o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle("#ffffff"), e.forEach(function (t, e) {
				var n = i.x + 8 + 2 * a.toolTipPadding + 4 + 5;
				r && (n = i.x - l - 8 + 2 * a.toolTipPadding + 4 + 5);
				var s = i.y + (a.toolTipLineHeight - a.fontSize) / 2 + a.toolTipLineHeight * e + a.toolTipPadding;
				o.fillText(t.text, n, s + a.fontSize)
			}), o.stroke(), o.closePath()
		}

		function X(t, e, i, n) {
			var a = i.xAxisHeight + (e.height - i.xAxisHeight - c(t)) / 2;
			n.save(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.yAxis.titleFontColor || "#333333"), n.translate(0, e.height), n.rotate(-90 * Math.PI / 180), n.fillText(t, a, i.padding + .5 * i.fontSize), n.stroke(), n.closePath(), n.restore()
		}

		function G(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
				o = k(t, e, i).ranges,
				r = F(e.categories, e, i),
				s = r.xAxisPoints,
				l = r.eachSpacing,
				h = o.pop(),
				c = o.shift();
			return n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), t.forEach(function (o, r) {
				var f = w(o.data, h, c, s, l, e, i, a);
				f = E(f, l, t.length, r, i, e), n.beginPath(), n.setFillStyle(o.color), f.forEach(function (t, a) {
					if (null !== t) {
						var o = t.x - t.width / 2 + 1,
							r = e.height - t.y - i.padding - i.xAxisHeight - i.legendHeight;
						n.moveTo(o, t.y), n.rect(o, t.y, t.width - 2, r)
					}
				}), n.closePath(), n.fill()
			}), t.forEach(function (o, r) {
				var f = w(o.data, h, c, s, l, e, i, a);
				f = E(f, l, t.length, r, i, e), !1 !== e.dataLabel && 1 === a && I(f, o, i, n)
			}), n.restore(), {
				xAxisPoints: s,
				eachSpacing: l
			}
		}

		function R(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
				r = k(t, e, i).ranges,
				s = F(e.categories, e, i),
				l = s.xAxisPoints,
				h = s.eachSpacing,
				c = r.pop(),
				f = r.shift(),
				d = e.height - i.padding - i.xAxisHeight - i.legendHeight,
				x = [];
			return n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === a && W(e.tooltip.offset.x, e, i, n), t.forEach(function (t, r) {
				var s = w(t.data, c, f, l, h, e, i, a);
				if (x.push(s), S(s).forEach(function (i) {
						if (n.beginPath(), n.setStrokeStyle(t.color), n.setFillStyle(t.color), n.setGlobalAlpha(.6), n.setLineWidth(2), i.length > 1) {
							var a = i[0],
								r = i[i.length - 1];
							n.moveTo(a.x, a.y), "curve" === e.extra.lineStyle ? i.forEach(function (t, e) {
								if (e > 0) {
									var a = o(i, e - 1);
									n.bezierCurveTo(a.ctrA.x, a.ctrA.y, a.ctrB.x, a.ctrB.y, t.x, t.y)
								}
							}) : i.forEach(function (t, e) {
								e > 0 && n.lineTo(t.x, t.y)
							}), n.lineTo(r.x, d), n.lineTo(a.x, d), n.lineTo(a.x, a.y)
						} else {
							var s = i[0];
							n.moveTo(s.x - h / 2, s.y), n.lineTo(s.x + h / 2, s.y), n.lineTo(s.x + h / 2, d), n.lineTo(s.x - h / 2, d), n.moveTo(s.x - h / 2, s.y)
						}
						n.closePath(), n.fill(), n.setGlobalAlpha(1)
					}), !1 !== e.dataPointShape) {
					var u = i.dataPointShape[r % i.dataPointShape.length];
					C(s, t.color, u, n)
				}
			}), !1 !== e.dataLabel && 1 === a && t.forEach(function (t, o) {
				I(w(t.data, c, f, l, h, e, i, a), t, i, n)
			}), n.restore(), {
				xAxisPoints: l,
				calPoints: x,
				eachSpacing: h
			}
		}

		function q(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
				r = k(t, e, i).ranges,
				s = F(e.categories, e, i),
				l = s.xAxisPoints,
				h = s.eachSpacing,
				c = r.pop(),
				f = r.shift(),
				d = [];
			return n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && n.translate(e._scrollDistance_, 0), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === a && W(e.tooltip.offset.x, e, i, n), t.forEach(function (t, r) {
				var s = w(t.data, c, f, l, h, e, i, a);
				if (d.push(s), S(s).forEach(function (i, a) {
						n.beginPath(), n.setStrokeStyle(t.color), n.setLineWidth(2), 1 === i.length ? (n.moveTo(i[0].x, i[0].y), n.arc(i[0].x, i[0].y, 1, 0, 2 * Math.PI)) : (n.moveTo(i[0].x, i[0].y), "curve" === e.extra.lineStyle ? i.forEach(function (t, e) {
							if (e > 0) {
								var a = o(i, e - 1);
								n.bezierCurveTo(a.ctrA.x, a.ctrA.y, a.ctrB.x, a.ctrB.y, t.x, t.y)
							}
						}) : i.forEach(function (t, e) {
							e > 0 && n.lineTo(t.x, t.y)
						}), n.moveTo(i[0].x, i[0].y)), n.closePath(), n.stroke()
					}), !1 !== e.dataPointShape) {
					var x = i.dataPointShape[r % i.dataPointShape.length];
					C(s, t.color, x, n)
				}
			}), !1 !== e.dataLabel && 1 === a && t.forEach(function (t, o) {
				I(w(t.data, c, f, l, h, e, i, a), t, i, n)
			}), n.restore(), {
				xAxisPoints: l,
				calPoints: d,
				eachSpacing: h
			}
		}

		function B(t, e, i, n) {
			i.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && i.translate(t._scrollDistance_, 0), t.tooltip && t.tooltip.textList && t.tooltip.textList.length && 1 === n && O(t.tooltip.textList, t.tooltip.offset, t, e, i), i.restore()
		}

		function j(t, e, i, n) {
			var o = F(t, e, i),
				r = o.xAxisPoints,
				s = (o.startX, o.endX, o.eachSpacing),
				l = e.height - i.padding - i.xAxisHeight - i.legendHeight,
				h = l + i.xAxisLineHeight;
			n.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && n.translate(e._scrollDistance_, 0), n.beginPath(), n.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), !0 !== e.xAxis.disableGrid && ("calibration" === e.xAxis.type ? r.forEach(function (t, e) {
				e > 0 && (n.moveTo(t - s / 2, l), n.lineTo(t - s / 2, l + 4))
			}) : r.forEach(function (t, e) {
				n.moveTo(t, l), n.lineTo(t, h)
			})), n.closePath(), n.stroke();
			var f = e.width - 2 * i.padding - i.yAxisWidth - i.yAxisTitleWidth,
				d = Math.min(t.length, Math.ceil(f / i.fontSize / 1.5)),
				x = Math.ceil(t.length / d);
			t = t.map(function (t, e) {
				return e % x != 0 ? "" : t
			}), 0 === i._xAxisTextAngle_ ? (n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.xAxis.fontColor || "#666666"), t.forEach(function (t, e) {
				var a = s / 2 - c(t) / 2;
				n.fillText(t, r[e] + a, l + i.fontSize + 5)
			}), n.closePath(), n.stroke()) : t.forEach(function (t, o) {
				n.save(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.xAxis.fontColor || "#666666");
				var h = c(t),
					f = s / 2 - h,
					d = a(r[o] + s / 2, l + i.fontSize / 2 + 5, e.height),
					x = d.transX,
					u = d.transY;
				n.rotate(-1 * i._xAxisTextAngle_), n.translate(x, u), n.fillText(t, r[o] + f, l + i.fontSize + 5), n.closePath(), n.stroke(), n.restore()
			}), n.restore()
		}

		function N(t, e, i) {
			for (var n = t.height - 2 * e.padding - e.xAxisHeight - e.legendHeight, a = Math.floor(n / e.yAxisSplit), o = e.yAxisWidth + e.yAxisTitleWidth, r = e.padding + o, s = t.width - e.padding, l = [], h = 0; h < e.yAxisSplit; h++) l.push(e.padding + a * h);
			l.push(e.padding + a * e.yAxisSplit + 2), i.beginPath(), i.setStrokeStyle(t.yAxis.gridColor || "#cccccc"), i.setLineWidth(1), l.forEach(function (t, e) {
				i.moveTo(r, t), i.lineTo(s, t)
			}), i.closePath(), i.stroke()
		}

		function Y(t, e, i, n) {
			if (!0 !== e.yAxis.disabled) {
				var a = k(t, e, i).rangesFormat,
					o = i.yAxisWidth + i.yAxisTitleWidth,
					r = e.height - 2 * i.padding - i.xAxisHeight - i.legendHeight,
					s = Math.floor(r / i.yAxisSplit),
					l = i.padding + o,
					h = e.width - i.padding,
					c = e.height - i.padding - i.xAxisHeight - i.legendHeight;
				n.setFillStyle(e.background || "#ffffff"), e._scrollDistance_ < 0 && n.fillRect(0, 0, l, c + i.xAxisHeight + 5), n.fillRect(h, 0, e.width, c + i.xAxisHeight + 5);
				for (var f = [], d = 0; d <= i.yAxisSplit; d++) f.push(i.padding + s * d);
				n.stroke(), n.beginPath(), n.setFontSize(i.fontSize), n.setFillStyle(e.yAxis.fontColor || "#666666"), a.forEach(function (t, e) {
					var a = f[e] ? f[e] : c;
					n.fillText(t, i.padding + i.yAxisTitleWidth, a + i.fontSize / 2)
				}), n.closePath(), n.stroke(), e.yAxis.title && X(e.yAxis.title, e, i, n)
			}
		}

		function Z(t, e, i, n) {
			e.legend && T(t, e, i).legendList.forEach(function (t, a) {
				var o = 0;
				t.forEach(function (t) {
					t.name = t.name || "undefined", o += 15 + c(t.name) + 15
				});
				var r = (e.width - o) / 2 + 5,
					s = e.height - i.padding - i.legendHeight + a * (i.fontSize + 8) + 5 + 8;
				n.setFontSize(i.fontSize), t.forEach(function (t) {
					switch (e.type) {
						case "line":
							n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(t.color), n.moveTo(r - 2, s + 5), n.lineTo(r + 17, s + 5), n.stroke(), n.closePath(), n.beginPath(), n.setLineWidth(1), n.setStrokeStyle("#ffffff"), n.setFillStyle(t.color), n.moveTo(r + 7.5, s + 5), n.arc(r + 7.5, s + 5, 4, 0, 2 * Math.PI), n.fill(), n.stroke(), n.closePath();
							break;
						case "pie":
						case "ring":
							n.beginPath(), n.setFillStyle(t.color), n.moveTo(r + 7.5, s + 5), n.arc(r + 7.5, s + 5, 7, 0, 2 * Math.PI), n.closePath(), n.fill();
							break;
						default:
							n.beginPath(), n.setFillStyle(t.color), n.moveTo(r, s), n.rect(r, s, 15, 10), n.closePath(), n.fill()
					}
					r += 20, n.beginPath(), n.setFillStyle(e.extra.legendTextColor || "#333333"), n.fillText(t.name, r, s + 9), n.closePath(), n.stroke(), r += c(t.name) + 10
				})
			})
		}

		function J(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
				o = e.extra.pie || {};
			t = M(t, a);
			var r = {
					x: e.width / 2,
					y: (e.height - i.legendHeight) / 2
				},
				s = Math.min(r.x - i.pieChartLinePadding - i.pieChartTextPadding - i._pieTextMaxLength_, r.y - i.pieChartLinePadding - i.pieChartTextPadding);
			if (e.dataLabel ? s -= 10 : s -= 2 * i.padding, (t = t.map(function (t) {
					return t._start_ += (o.offsetAngle || 0) * Math.PI / 180, t
				})).forEach(function (t) {
					n.beginPath(), n.setLineWidth(2), n.setStrokeStyle("#ffffff"), n.setFillStyle(t.color), n.moveTo(r.x, r.y), n.arc(r.x, r.y, s, t._start_, t._start_ + 2 * t._proportion_ * Math.PI), n.closePath(), n.fill(), !0 !== e.disablePieStroke && n.stroke()
				}), "ring" === e.type) {
				var l = .6 * s;
				"number" == typeof e.extra.ringWidth && e.extra.ringWidth > 0 && (l = Math.max(0, s - e.extra.ringWidth)), n.beginPath(), n.setFillStyle(e.background || "#ffffff"), n.moveTo(r.x, r.y), n.arc(r.x, r.y, l, 0, 2 * Math.PI), n.closePath(), n.fill()
			}
			if (!1 !== e.dataLabel && 1 === a) {
				for (var h = !1, c = 0, f = t.length; c < f; c++)
					if (t[c].data > 0) {
						h = !0;
						break
					} h && D(t, e, i, n, s, r)
			}
			return 1 === a && "ring" === e.type && H(e, i, n), {
				center: r,
				radius: s,
				series: t
			}
		}

		function K(t, e, i, n) {
			var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
				o = e.extra.radar || {},
				s = u(e.categories.length),
				l = {
					x: e.width / 2,
					y: (e.height - i.legendHeight) / 2
				},
				h = Math.min(l.x - (x(e.categories) + i.radarLabelTextMargin), l.y - i.radarLabelTextMargin);
			h -= i.padding, n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(o.gridColor || "#cccccc"), s.forEach(function (t) {
				var e = r(h * Math.cos(t), h * Math.sin(t), l);
				n.moveTo(l.x, l.y), n.lineTo(e.x, e.y)
			}), n.stroke(), n.closePath();
			for (var c = 1; c <= i.radarGridCount; c++) ! function (t) {
				var e = {};
				n.beginPath(), n.setLineWidth(1), n.setStrokeStyle(o.gridColor || "#cccccc"), s.forEach(function (a, o) {
					var s = r(h / i.radarGridCount * t * Math.cos(a), h / i.radarGridCount * t * Math.sin(a), l);
					0 === o ? (e = s, n.moveTo(s.x, s.y)) : n.lineTo(s.x, s.y)
				}), n.lineTo(e.x, e.y), n.stroke(), n.closePath()
			}(c);
			return b(s, l, h, t, e, a).forEach(function (t, a) {
				if (n.beginPath(), n.setFillStyle(t.color), n.setGlobalAlpha(.6), t.data.forEach(function (t, e) {
						0 === e ? n.moveTo(t.position.x, t.position.y) : n.lineTo(t.position.x, t.position.y)
					}), n.closePath(), n.fill(), n.setGlobalAlpha(1), !1 !== e.dataPointShape) {
					var o = i.dataPointShape[a % i.dataPointShape.length];
					C(t.data.map(function (t) {
						return t.position
					}), t.color, o, n)
				}
			}), z(s, h, l, e, i, n), {
				center: l,
				radius: h,
				angleList: s
			}
		}

		function Q(t, e) {
			e.draw()
		}

		function U(t) {
			this.isStop = !1, t.duration = void 0 === t.duration ? 1e3 : t.duration, t.timing = t.timing || "linear";
			var e = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setTimeout ? function (t, e) {
					setTimeout(function () {
						var e = +new Date;
						t(e)
					}, e)
				} : function (t) {
					t(null)
				},
				i = null,
				n = function (a) {
					if (null === a || !0 === this.isStop) return t.onProcess && t.onProcess(1), void(t.onAnimationFinish && t.onAnimationFinish());
					if (null === i && (i = a), a - i < t.duration) {
						var o = (a - i) / t.duration;
						o = (0, it[t.timing])(o), t.onProcess && t.onProcess(o), e(n, 17)
					} else t.onProcess && t.onProcess(1), t.onAnimationFinish && t.onAnimationFinish()
				};
			n = n.bind(this), e(n, 17)
		}

		function V(t, e, i, n) {
			var a = this,
				o = e.series,
				r = e.categories,
				s = T(o = l(o, i), e, i).legendHeight;
			i.legendHeight = s;
			var h = k(o, e, i).yAxisWidth;
			if (i.yAxisWidth = h, r && r.length) {
				var c = A(r, e, i),
					f = c.xAxisHeight,
					d = c.angle;
				i.xAxisHeight = f, i._xAxisTextAngle_ = d
			}
			"pie" !== t && "ring" !== t || (i._pieTextMaxLength_ = !1 === e.dataLabel ? 0 : _(o));
			var x = e.animation ? 1e3 : 0;
			switch (this.animationInstance && this.animationInstance.stop(), t) {
				case "line":
					this.animationInstance = new U({
						timing: "easeIn",
						duration: x,
						onProcess: function (t) {
							N(e, i, n);
							var s = q(o, e, i, n, t),
								l = s.xAxisPoints,
								h = s.calPoints,
								c = s.eachSpacing;
							a.chartData.xAxisPoints = l, a.chartData.calPoints = h, a.chartData.eachSpacing = c, j(r, e, i, n), Z(e.series, e, i, n), Y(o, e, i, n), B(e, i, n, t), Q(e, n)
						},
						onAnimationFinish: function () {
							a.event.trigger("renderComplete")
						}
					});
					break;
				case "column":
					this.animationInstance = new U({
						timing: "easeIn",
						duration: x,
						onProcess: function (t) {
							N(e, i, n);
							var s = G(o, e, i, n, t),
								l = s.xAxisPoints,
								h = s.eachSpacing;
							a.chartData.xAxisPoints = l, a.chartData.eachSpacing = h, j(r, e, i, n), Z(e.series, e, i, n), Y(o, e, i, n), Q(e, n)
						},
						onAnimationFinish: function () {
							a.event.trigger("renderComplete")
						}
					});
					break;
				case "area":
					this.animationInstance = new U({
						timing: "easeIn",
						duration: x,
						onProcess: function (t) {
							N(e, i, n);
							var s = R(o, e, i, n, t),
								l = s.xAxisPoints,
								h = s.calPoints,
								c = s.eachSpacing;
							a.chartData.xAxisPoints = l, a.chartData.calPoints = h, a.chartData.eachSpacing = c, j(r, e, i, n), Z(e.series, e, i, n), Y(o, e, i, n), B(e, i, n, t), Q(e, n)
						},
						onAnimationFinish: function () {
							a.event.trigger("renderComplete")
						}
					});
					break;
				case "ring":
				case "pie":
					this.animationInstance = new U({
						timing: "easeInOut",
						duration: x,
						onProcess: function (t) {
							a.chartData.pieData = J(o, e, i, n, t), Z(e.series, e, i, n), Q(e, n)
						},
						onAnimationFinish: function () {
							a.event.trigger("renderComplete")
						}
					});
					break;
				case "radar":
					this.animationInstance = new U({
						timing: "easeInOut",
						duration: x,
						onProcess: function (t) {
							a.chartData.radarData = K(o, e, i, n, t), Z(e.series, e, i, n), Q(e, n)
						},
						onAnimationFinish: function () {
							a.event.trigger("renderComplete")
						}
					})
			}
		}

		function $() {
			this.events = {}
		}
		var tt = {
				yAxisWidth: 15,
				yAxisSplit: 5,
				xAxisHeight: 15,
				xAxisLineHeight: 15,
				legendHeight: 15,
				yAxisTitleWidth: 15,
				padding: 12,
				columePadding: 3,
				fontSize: 10,
				dataPointShape: ["diamond", "circle", "triangle", "rect"],
				colors: ["#7cb5ec", "#f7a35c", "#434348", "#90ed7d", "#f15c80", "#8085e9"],
				pieChartLinePadding: 25,
				pieChartTextPadding: 15,
				xAxisTextPadding: 3,
				titleColor: "#333333",
				titleFontSize: 20,
				subtitleColor: "#999999",
				subtitleFontSize: 15,
				toolTipPadding: 3,
				toolTipBackground: "#000000",
				toolTipOpacity: .7,
				toolTipLineHeight: 14,
				radarGridCount: 3,
				radarLabelTextMargin: 15
			},
			et = {
				toFixed: function (t, e) {
					return e = e || 2, this.isFloat(t) && (t = t.toFixed(e)), t
				},
				isFloat: function (t) {
					return t % 1 != 0
				},
				approximatelyEqual: function (t, e) {
					return Math.abs(t - e) < 1e-10
				},
				isSameSign: function (t, e) {
					return Math.abs(t) === t && Math.abs(e) === e || Math.abs(t) !== t && Math.abs(e) !== e
				},
				isSameXCoordinateArea: function (t, e) {
					return this.isSameSign(t.x, e.x)
				},
				isCollision: function (t, e) {
					return t.end = {}, t.end.x = t.start.x + t.width, t.end.y = t.start.y - t.height, e.end = {}, e.end.x = e.start.x + e.width, e.end.y = e.start.y - e.height, !(e.start.x > t.end.x || e.end.x < t.start.x || e.end.y > t.start.y || e.start.y < t.end.y)
				}
			},
			it = {
				easeIn: function (t) {
					return Math.pow(t, 3)
				},
				easeOut: function (t) {
					return Math.pow(t - 1, 3) + 1
				},
				easeInOut: function (t) {
					return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
				},
				linear: function (t) {
					return t
				}
			};
		U.prototype.stop = function () {
			this.isStop = !0
		}, $.prototype.addEventListener = function (t, e) {
			this.events[t] = this.events[t] || [], this.events[t].push(e)
		}, $.prototype.trigger = function () {
			for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			var n = e[0],
				a = e.slice(1);
			this.events[n] && this.events[n].forEach(function (t) {
				try {
					t.apply(null, a)
				} catch (t) {
					console.error(t)
				}
			})
		};
		var nt = function (e) {
			e.title = e.title || {}, e.subtitle = e.subtitle || {}, e.yAxis = e.yAxis || {}, e.xAxis = e.xAxis || {}, e.extra = e.extra || {}, e.legend = !1 !== e.legend, e.animation = !1 !== e.animation;
			var i = t({}, tt);
			i.yAxisTitleWidth = !0 !== e.yAxis.disabled && e.yAxis.title ? i.yAxisTitleWidth : 0, i.pieChartLinePadding = !1 === e.dataLabel ? 0 : i.pieChartLinePadding, i.pieChartTextPadding = !1 === e.dataLabel ? 0 : i.pieChartTextPadding, this.opts = e, this.config = i, this.context = wx.createCanvasContext(e.canvasId), this.chartData = {}, this.event = new $, this.scrollOption = {
				currentOffset: 0,
				startTouchX: 0,
				distance: 0
			}, V.call(this, e.type, e, i, this.context)
		};
		nt.prototype.updateData = function () {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			this.opts.series = e.series || this.opts.series, this.opts.categories = e.categories || this.opts.categories, this.opts.title = t({}, this.opts.title, e.title || {}), this.opts.subtitle = t({}, this.opts.subtitle, e.subtitle || {}), V.call(this, this.opts.type, this.opts, this.config, this.context)
		}, nt.prototype.stopAnimation = function () {
			this.animationInstance && this.animationInstance.stop()
		}, nt.prototype.addEventListener = function (t, e) {
			this.event.addEventListener(t, e)
		}, nt.prototype.getCurrentDataIndex = function (t) {
			var e = t.touches && t.touches.length ? t.touches : t.changedTouches;
			if (e && e.length) {
				var i = e[0],
					n = i.x,
					a = i.y;
				return "pie" === this.opts.type || "ring" === this.opts.type ? m({
					x: n,
					y: a
				}, this.chartData.pieData) : "radar" === this.opts.type ? v({
					x: n,
					y: a
				}, this.chartData.radarData, this.opts.categories.length) : p({
					x: n,
					y: a
				}, this.chartData.xAxisPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset))
			}
			return -1
		}, nt.prototype.showToolTip = function (e) {
			var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if ("line" === this.opts.type || "area" === this.opts.type) {
				var n = this.getCurrentDataIndex(e),
					a = this.scrollOption.currentOffset,
					o = t({}, this.opts, {
						_scrollDistance_: a,
						animation: !1
					});
				if (n > -1) {
					var r = d(this.opts.series, n);
					if (0 !== r.length) {
						var s = g(r, this.chartData.calPoints, n, this.opts.categories, i),
							l = s.textList,
							h = s.offset;
						o.tooltip = {
							textList: l,
							offset: h,
							option: i
						}
					}
				}
				V.call(this, o.type, o, this.config, this.context)
			}
		}, nt.prototype.scrollStart = function (t) {
			t.touches[0] && !0 === this.opts.enableScroll && (this.scrollOption.startTouchX = t.touches[0].x)
		}, nt.prototype.scroll = function (e) {
			if (e.touches[0] && !0 === this.opts.enableScroll) {
				var n = e.touches[0].x - this.scrollOption.startTouchX,
					a = this.scrollOption.currentOffset,
					o = i(a + n, this.chartData, this.config, this.opts);
				this.scrollOption.distance = n = o - a;
				var r = t({}, this.opts, {
					_scrollDistance_: a + n,
					animation: !1
				});
				V.call(this, r.type, r, this.config, this.context)
			}
		}, nt.prototype.scrollEnd = function (t) {
			if (!0 === this.opts.enableScroll) {
				var e = this.scrollOption,
					i = e.currentOffset,
					n = e.distance;
				this.scrollOption.currentOffset = i + n, this.scrollOption.distance = 0
			}
		}, module.exports = nt;
	});
	define("utils/zfb_charts.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, e) {
			var i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
				a = t.replace(i, function (t, e, i, a) {
					return e + e + i + i + a + a
				}),
				o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
			return "rgba(" + parseInt(o[1], 16) + "," + parseInt(o[2], 16) + "," + parseInt(o[3], 16) + "," + e + ")"
		}

		function e(t, e, i) {
			if (isNaN(t)) throw new Error("[uCharts] unvalid series data!");
			i = i || 10, e = e || "upper";
			for (var a = 1; 1 > i;) i *= 10, a *= 10;
			for (t = "upper" === e ? Math.ceil(t * a) : Math.floor(t * a); 0 != t % i;) "upper" === e ? t++ : t--;
			return t / a
		}

		function i(t, e, i, a) {
			for (var o, r = [], n = 0; n < t.length; n++) {
				o = {
					data: [],
					name: e[n],
					color: i[n]
				};
				for (var l = 0, s = a.length; l < s; l++)
					if (l < t[n]) o.data.push(null);
					else {
						for (var h = 0, c = 0; c < t[n]; c++) h += a[l - c][1];
						o.data.push(+(h / t[n]).toFixed(3))
					} r.push(o)
			}
			return r
		}

		function a(t, e, i, a, o) {
			var r = o.width - o.area[1] - o.area[3],
				n = i.eachSpacing * (o.chartData.xAxisData.xAxisPoints.length - 1),
				l = e;
			return 0 <= e ? (l = 0, t.event.trigger("scrollLeft")) : Math.abs(e) >= n - r && (l = r - n, t.event.trigger("scrollRight")), l
		}

		function o(t, e, i) {
			function a(t) {
				for (; 0 > t;) t += 2 * o;
				for (; t > 2 * o;) t -= 2 * o;
				return t
			}
			var o = Math.PI;
			return t = a(t), e = a(e), i = a(i), e > i && (i += 2 * o, t < e && (t += 2 * o)), t >= e && t <= i
		}

		function r(t, e, i) {
			var a = t,
				o = i - e,
				r = a + (i - o - a) / 1.4142135623730951;
			return r *= -1, {
				transX: r,
				transY: .41421356237309515 * (i - o) - (i - o - a) / 1.4142135623730951
			}
		}

		function n(t, e) {
			function i(t, e) {
				return !(!t[e - 1] || !t[e + 1]) && (t[e].y >= o(t[e - 1].y, t[e + 1].y) || t[e].y <= a(t[e - 1].y, t[e + 1].y))
			}
			var a = Math.min,
				o = Math.max,
				r = null,
				n = null,
				l = null,
				s = null;
			if (1 > e ? (r = t[0].x + .2 * (t[1].x - t[0].x), n = t[0].y + .2 * (t[1].y - t[0].y)) : (r = t[e].x + .2 * (t[e + 1].x - t[e - 1].x), n = t[e].y + .2 * (t[e + 1].y - t[e - 1].y)), e > t.length - 3) {
				var h = t.length - 1;
				l = t[h].x - .2 * (t[h].x - t[h - 1].x), s = t[h].y - .2 * (t[h].y - t[h - 1].y)
			} else l = t[e + 1].x - .2 * (t[e + 2].x - t[e].x), s = t[e + 1].y - .2 * (t[e + 2].y - t[e].y);
			return i(t, e + 1) && (s = t[e + 1].y), i(t, e) && (n = t[e].y), (n >= o(t[e].y, t[e + 1].y) || n <= a(t[e].y, t[e + 1].y)) && (n = t[e].y), (s >= o(t[e].y, t[e + 1].y) || s <= a(t[e].y, t[e + 1].y)) && (s = t[e + 1].y), {
				ctrA: {
					x: r,
					y: n
				},
				ctrB: {
					x: l,
					y: s
				}
			}
		}

		function l(t, e, i) {
			return {
				x: i.x + t,
				y: i.y - e
			}
		}

		function s(t, e) {
			if (e)
				for (; Jt.isCollision(t, e);) 0 < t.start.x ? t.start.y-- : 0 > t.start.x ? t.start.y++ : 0 < t.start.y ? t.start.y++ : t.start.y--;
			return t
		}

		function h(t, e, i) {
			var a = 0;
			return t.map(function (t) {
				if (t.color || (t.color = i.colors[a], a = (a + 1) % i.colors.length), t.index || (t.index = 0), t.type || (t.type = e.type), void 0 === t.show && (t.show = !0), t.type || (t.type = e.type), t.pointShape || (t.pointShape = "circle"), !t.legendShape) switch (t.type) {
					case "line":
						t.legendShape = "line";
						break;
					case "column":
						t.legendShape = "rect";
						break;
					case "area":
						t.legendShape = "triangle";
						break;
					default:
						t.legendShape = "circle"
				}
				return t
			})
		}

		function c(t, i) {
			var a = 0,
				o = i - t;
			return a = 1e4 <= o ? 1e3 : 1e3 <= o ? 100 : 100 <= o ? 10 : 10 <= o ? 5 : 1 <= o ? 1 : .1 <= o ? .1 : .01 <= o ? .01 : .001 <= o ? .001 : 1e-4 <= o ? 1e-4 : 1e-5 <= o ? 1e-5 : 1e-6, {
				minRange: e(t, "lower", a),
				maxRange: e(i, "upper", a)
			}
		}

		function d(t) {
			for (var e, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : $t.fontSize, t = (t += "").split(""), a = 0, o = 0; o < t.length; o++) e = t[o], a += /[a-zA-Z]/.test(e) ? 7 : /[0-9]/.test(e) ? 5.5 : /\./.test(e) ? 2.7 : /-/.test(e) ? 3.25 : /[\u4e00-\u9fa5]/.test(e) ? 10 : /\(|\)/.test(e) ? 3.73 : /\s/.test(e) ? 2.5 : /%/.test(e) ? 8 : 10;
			return a * i / 10
		}

		function x(t) {
			return t.reduce(function (t, e) {
				return (t.data ? t.data : t).concat(e.data)
			}, [])
		}

		function p(t, e) {
			for (var i = Array(e), a = 0; a < i.length; a++) i[a] = 0;
			for (var o = 0; o < t.length; o++)
				for (a = 0; a < i.length; a++) i[a] += t[o].data[a];
			return t.reduce(function (t, e) {
				return (t.data ? t.data : t).concat(e.data).concat(i)
			}, [])
		}

		function g(t, e, i) {
			var a = void 0,
				o = void 0;
			return t.clientX ? e.rotate ? (o = e.height - t.clientX * e.pixelRatio, a = (t.pageY - i.currentTarget.offsetTop - e.height / e.pixelRatio / 2 * (e.pixelRatio - 1)) * e.pixelRatio) : (a = t.clientX * e.pixelRatio, o = (t.pageY - i.currentTarget.offsetTop - e.height / e.pixelRatio / 2 * (e.pixelRatio - 1)) * e.pixelRatio) : e.rotate ? (o = e.height - t.x * e.pixelRatio, a = t.y * e.pixelRatio) : (a = t.x * e.pixelRatio, o = t.y * e.pixelRatio), {
				x: a,
				y: o
			}
		}

		function f(t, e) {
			for (var i, a = [], o = 0; o < t.length; o++)
				if (null !== (i = t[o]).data[e] && void 0 !== i.data[e] && i.show) {
					var r = {};
					r.color = i.color, r.type = i.type, r.style = i.style, r.pointShape = i.pointShape, r.disableLegend = i.disableLegend, r.name = i.name, r.show = i.show, r.data = i.format ? i.format(i.data[e]) : i.data[e], a.push(r)
				} return a
		}

		function u(t) {
			var e = t.map(function (t) {
				return d(t)
			});
			return Math.max.apply(null, e)
		}

		function y(t) {
			for (var e = Math.PI, i = [], a = 0; a < t; a++) i.push(2 * e / t * a);
			return i.map(function (t) {
				return -1 * t + e / 2
			})
		}

		function v(t, e, i, a) {
			for (var o, r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, n = t.map(function (t) {
					var e = [];
					return e = a || t.data, {
						text: r.format ? r.format(t, e[i]) : t.name + ": " + t.data,
						color: t.color
					}
				}), l = [], s = {
					x: 0,
					y: 0
				}, h = 0; h < e.length; h++) void 0 !== (o = e[h])[i] && null !== o[i] && l.push(o[i]);
			for (var c, d = 0; d < l.length; d++) c = l[d], s.x = Math.round(c.x), s.y += c.y;
			return s.y /= l.length, {
				textList: n,
				offset: s
			}
		}

		function m(t, e, i, a) {
			var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
				r = t.map(function (t) {
					return {
						text: o.format ? o.format(t, a[i]) : t.name + ": " + t.data,
						color: t.color,
						disableLegend: !!t.disableLegend
					}
				});
			r = r.filter(function (t) {
				if (!0 !== t.disableLegend) return t
			});
			for (var n, l = [], s = {
					x: 0,
					y: 0
				}, h = 0; h < e.length; h++) void 0 !== (n = e[h])[i] && null !== n[i] && l.push(n[i]);
			for (var c, d = 0; d < l.length; d++) c = l[d], s.x = Math.round(c.x), s.y += c.y;
			return s.y /= l.length, {
				textList: r,
				offset: s
			}
		}

		function b(t, e, i, a, o, r) {
			6 < arguments.length && void 0 !== arguments[6] && arguments[6];
			var n = r.color.upFill,
				l = r.color.downFill,
				s = [n, n, l, n],
				h = [],
				c = {
					text: o[a],
					color: null
				};
			h.push(c), e.map(function (e) {
				0 == a && 0 > e.data[1] - e.data[0] ? s[1] = l : (e.data[0] < t[a - 1][1] && (s[0] = l), e.data[1] < e.data[0] && (s[1] = l), e.data[2] > t[a - 1][1] && (s[2] = n), e.data[3] < t[a - 1][1] && (s[3] = l));
				var i = {
						text: "开盘：" + e.data[0],
						color: s[0]
					},
					o = {
						text: "收盘：" + e.data[1],
						color: s[1]
					},
					r = {
						text: "最低：" + e.data[2],
						color: s[2]
					},
					c = {
						text: "最高：" + e.data[3],
						color: s[3]
					};
				h.push(i, o, r, c)
			});
			for (var d, x = [], p = {
					x: 0,
					y: 0
				}, g = 0; g < i.length; g++) void 0 !== (d = i[g])[a] && null !== d[a] && x.push(d[a]);
			return p.x = Math.round(x[0][0].x), {
				textList: h,
				offset: p
			}
		}

		function A(t) {
			for (var e = [], i = 0; i < t.length; i++) 1 == t[i].show && e.push(t[i]);
			return e
		}

		function S(t, e, i, a) {
			for (var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, r = -1, n = 0, l = [], s = 0; s < e[0].length; s++) l.push(e[0][s].x);
			return ("line" == i.type || "area" == i.type) && "justify" == i.xAxis.boundaryGap && (n = i.chartData.eachSpacing / 2), i.categories || (n = 0), w(t, i) && l.forEach(function (e, i) {
				t.x + o + n > e && (r = i)
			}), r
		}

		function T(t, e) {
			var i = -1;
			if (P(t, e.area)) {
				for (var a, o = e.points, r = -1, n = 0, l = o.length; n < l; n++) {
					a = o[n];
					for (var s = 0; s < a.length; s++) {
						r += 1;
						var h = a[s].area;
						if (t.x > h[0] && t.x < h[2] && t.y > h[1] && t.y < h[3]) {
							i = r;
							break
						}
					}
				}
				return i
			}
			return i
		}

		function P(t, e) {
			return t.x > e.start.x && t.x < e.end.x && t.y > e.start.y && t.y < e.end.y
		}

		function w(t, e) {
			return t.x <= e.width - e.area[1] + 10 && t.x >= e.area[3] - 10 && t.y >= e.area[0] && t.y <= e.height - e.area[2]
		}

		function _(t, e, i) {
			var a = Math.PI,
				o = 2 * a / i,
				r = -1;
			if (k(t, e.center, e.radius)) {
				var n = function (t) {
						return 0 > t && (t += 2 * a), t > 2 * a && (t -= 2 * a), t
					},
					l = Math.atan2(e.center.y - t.y, t.x - e.center.x);
				0 > (l *= -1) && (l += 2 * a), e.angleList.map(function (t) {
					return t = n(-1 * t)
				}).forEach(function (t, e) {
					var i = n(t - o / 2),
						s = n(t + o / 2);
					s < i && (s += 2 * a), (l >= i && l <= s || l + 2 * a >= i && l + 2 * a <= s) && (r = e)
				})
			}
			return r
		}

		function F(t, e) {
			for (var i, a = -1, o = 0, r = e.series.length; o < r; o++)
				if (i = e.series[o], t.x > i.funnelArea[0] && t.x < i.funnelArea[2] && t.y > i.funnelArea[1] && t.y < i.funnelArea[3]) {
					a = o;
					break
				} return a
		}

		function L(t, e) {
			for (var i, a = -1, o = 0, r = e.length; o < r; o++)
				if (i = e[o], t.x > i.area[0] && t.x < i.area[2] && t.y > i.area[1] && t.y < i.area[3]) {
					a = o;
					break
				} return a
		}

		function D(t, e) {
			for (var i, a = -1, o = e.chartData.mapData, r = e.series, n = Mt(t.y, t.x, o.bounds, o.scale, o.xoffset, o.yoffset), l = [n.x, n.y], s = 0, h = r.length; s < h; s++)
				if (i = r[s].geometry.coordinates, Wt(l, i)) {
					a = s;
					break
				} return a
		}

		function R(t, e) {
			var i = -1;
			if (k(t, e.center, e.radius)) {
				var a = Math.atan2(e.center.y - t.y, t.x - e.center.x);
				a = -a;
				for (var r, n = 0, l = e.series.length; n < l; n++)
					if (r = e.series[n], o(a, r._start_, r._start_ + 2 * r._proportion_ * Math.PI)) {
						i = n;
						break
					}
			}
			return i
		}

		function k(t, e, i) {
			var a = Math.pow;
			return a(t.x - e.x, 2) + a(t.y - e.y, 2) <= a(i, 2)
		}

		function C(t) {
			var e = [],
				i = [];
			return t.forEach(function (t) {
				null === t ? (i.length && e.push(i), i = []) : i.push(t)
			}), i.length && e.push(i), e
		}

		function M(t, e, i, a) {
			var o = Math.max,
				r = Math.floor,
				n = {
					area: {
						start: {
							x: 0,
							y: 0
						},
						end: {
							x: 0,
							y: 0
						},
						width: 0,
						height: 0,
						wholeWidth: 0,
						wholeHeight: 0
					},
					points: [],
					widthArr: [],
					heightArr: []
				};
			if (!1 === e.legend.show) return a.legendData = n, n;
			var l = e.legend.padding,
				s = e.legend.margin,
				h = e.legend.fontSize,
				c = 15 * e.pixelRatio,
				x = 5 * e.pixelRatio,
				p = o(e.legend.lineHeight * e.pixelRatio, h);
			if ("top" == e.legend.position || "bottom" == e.legend.position) {
				for (var g = [], f = 0, u = [], y = [], v = 0; v < t.length; v++) {
					var m = t[v],
						b = c + x + d(m.name || "undefined", h) + e.legend.itemGap;
					f + b > e.width - e.padding[1] - e.padding[3] ? (g.push(y), u.push(f - e.legend.itemGap), f = b, y = [m]) : (f += b, y.push(m))
				}
				if (y.length) {
					g.push(y), u.push(f - e.legend.itemGap), n.widthArr = u;
					var A = o.apply(null, u);
					switch (e.legend.float) {
						case "left":
							n.area.start.x = e.padding[3], n.area.end.x = e.padding[3] + 2 * l;
							break;
						case "right":
							n.area.start.x = e.width - e.padding[1] - A - 2 * l, n.area.end.x = e.width - e.padding[1];
							break;
						default:
							n.area.start.x = (e.width - A) / 2 - l, n.area.end.x = (e.width + A) / 2 + l
					}
					n.area.width = A + 2 * l, n.area.wholeWidth = A + 2 * l, n.area.height = g.length * p + 2 * l, n.area.wholeHeight = g.length * p + 2 * l + 2 * s, n.points = g
				}
			} else {
				var S = t.length,
					T = e.height - e.padding[0] - e.padding[2] - 2 * s - 2 * l,
					P = Math.min(r(T / p), S);
				switch (n.area.height = P * p + 2 * l, n.area.wholeHeight = P * p + 2 * l, e.legend.float) {
					case "top":
						n.area.start.y = e.padding[0] + s, n.area.end.y = e.padding[0] + s + n.area.height;
						break;
					case "bottom":
						n.area.start.y = e.height - e.padding[2] - s - n.area.height, n.area.end.y = e.height - e.padding[2] - s;
						break;
					default:
						n.area.start.y = (e.height - n.area.height) / 2, n.area.end.y = (e.height + n.area.height) / 2
				}
				for (var w, _ = 0 == S % P ? S / P : r(S / P + 1), F = [], L = 0; L < _; L++) w = t.slice(L * P, L * P + P), F.push(w);
				if (n.points = F, F.length) {
					for (var D = 0; D < F.length; D++) {
						for (var R, k = F[D], C = 0, M = 0; M < k.length; M++)(R = c + x + d(k[M].name || "undefined", h) + e.legend.itemGap) > C && (C = R);
						n.widthArr.push(C), n.heightArr.push(k.length * p + 2 * l)
					}
					for (var z = 0, W = 0; W < n.widthArr.length; W++) z += n.widthArr[W];
					n.area.width = z - e.legend.itemGap + 2 * l, n.area.wholeWidth = n.area.width + l
				}
			}
			switch (e.legend.position) {
				case "top":
					n.area.start.y = e.padding[0] + s, n.area.end.y = e.padding[0] + s + n.area.height;
					break;
				case "bottom":
					n.area.start.y = e.height - e.padding[2] - n.area.height - s, n.area.end.y = e.height - e.padding[2] - s;
					break;
				case "left":
					n.area.start.x = e.padding[3], n.area.end.x = e.padding[3] + n.area.width;
					break;
				case "right":
					n.area.start.x = e.width - e.padding[1] - n.area.width, n.area.end.x = e.width - e.padding[1]
			}
			return a.legendData = n, n
		}

		function z(t, e, i, a) {
			var o = {
					angle: 0,
					xAxisHeight: i.xAxisHeight
				},
				r = t.map(function (t) {
					return d(t, e.xAxis.fontSize || i.fontSize)
				}),
				n = Math.max.apply(this, r);
			return 1 == e.xAxis.rotateLabel && n + 2 * i.xAxisTextPadding > a && (o.angle = 45 * Math.PI / 180, o.xAxisHeight = 2 * i.xAxisTextPadding + n * Math.sin(o.angle)), o
		}

		function W(t, e) {
			var i = Math.min,
				a = Math.max,
				o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1,
				r = x(t),
				n = [];
			(r = r.filter(function (t) {
				return "object" == (void 0 === t ? "undefined" : Yt(t)) && null !== t ? t.constructor == Array ? null !== t : null !== t.value : null !== t
			})).map(function (t) {
				"object" == (void 0 === t ? "undefined" : Yt(t)) ? t.constructor == Array ? "candle" == e.type ? t.map(function (t) {
					n.push(t)
				}) : n.push(t[0]) : n.push(t.value): n.push(t)
			});
			var l = 0,
				s = 0;
			0 < n.length && (l = i.apply(this, n), s = a.apply(this, n)), -1 < o ? ("number" == typeof e.xAxis.data[o].min && (l = i(e.xAxis.data[o].min, l)), "number" == typeof e.xAxis.data[o].max && (s = a(e.xAxis.data[o].max, s))) : ("number" == typeof e.xAxis.min && (l = i(e.xAxis.min, l)), "number" == typeof e.xAxis.max && (s = a(e.xAxis.max, s))), l === s && (s += s || 10);
			for (var h = c(l, s), d = h.minRange, p = [], g = (h.maxRange - d) / e.xAxis.splitNumber, f = 0; f <= e.xAxis.splitNumber; f++) p.push(d + g * f);
			return p
		}

		function O(t, e, i) {
			var a = {
				angle: 0,
				xAxisHeight: i.xAxisHeight
			};
			a.ranges = W(t, e, i), a.rangesFormat = a.ranges.map(function (t) {
				return t = e.xAxis.format ? e.xAxis.format(t) : Jt.toFixed(t, 2)
			});
			var o = a.ranges.map(function (t) {
					return t = Jt.toFixed(t, 2), t = e.xAxis.format ? e.xAxis.format(+t) : t
				}),
				r = (a = Object.assign(a, J(o, e, i))).eachSpacing,
				n = o.map(function (t) {
					return d(t)
				}),
				l = Math.max.apply(this, n);
			return l + 2 * i.xAxisTextPadding > r && (a.angle = 45 * Math.PI / 180, a.xAxisHeight = 2 * i.xAxisTextPadding + l * Math.sin(a.angle)), !0 === e.xAxis.disabled && (a.xAxisHeight = 0), a
		}

		function I(t, e, i, a, o) {
			var r = Math.max,
				n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,
				s = o.extra.radar || {};
			s.max = s.max || 0;
			for (var h = r(s.max, r.apply(null, x(a))), c = [], d = 0; d < a.length; d++) ! function (o) {
				var r = a[o],
					s = {};
				s.color = r.color, s.legendShape = r.legendShape, s.pointShape = r.pointShape, s.data = [], r.data.forEach(function (a, o) {
					var r = {};
					r.angle = t[o], r.proportion = a / h, r.position = l(i * r.proportion * n * Math.cos(r.angle), i * r.proportion * n * Math.sin(r.angle), e), s.data.push(r)
				}), c.push(s)
			}(d);
			return c
		}

		function E(t, e) {
			for (var i, a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, o = 0, r = 0, n = 0; n < t.length; n++)(i = t[n]).data = null === i.data ? 0 : i.data, o += i.data;
			for (var l, s = 0; s < t.length; s++)(l = t[s]).data = null === l.data ? 0 : l.data, l._proportion_ = 0 === o ? 1 / t.length * a : l.data / o * a, l._radius_ = e;
			for (var h, c = 0; c < t.length; c++)(h = t[c])._start_ = r, r += 2 * h._proportion_ * Math.PI;
			return t
		}

		function B(t, e) {
			var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
			t = t.sort(function (t, e) {
				return parseInt(e.data) - parseInt(t.data)
			});
			for (var a = 0; a < t.length; a++) t[a].radius = t[a].data / t[0].data * e * i, t[a]._proportion_ = t[a].data / t[0].data;
			return t.reverse()
		}

		function H(t, e, i, a) {
			for (var o, r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, n = 0, l = 0, s = [], h = 0; h < t.length; h++)(o = t[h]).data = null === o.data ? 0 : o.data, n += o.data, s.push(o.data);
			for (var c, d = Math.min.apply(null, s), x = Math.max.apply(null, s), p = 0; p < t.length; p++)(c = t[p]).data = null === c.data ? 0 : c.data, 0 === n || "area" == e ? (c._proportion_ = c.data / n * r, c._rose_proportion_ = 1 / t.length * r) : (c._proportion_ = c.data / n * r, c._rose_proportion_ = c.data / n * r), c._radius_ = i + (a - i) * ((c.data - d) / (x - d));
			for (var g, f = 0; f < t.length; f++)(g = t[f])._start_ = l, l += 2 * g._rose_proportion_ * Math.PI;
			return t
		}

		function N(t, e) {
			var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
			1 == i && (i = .999999);
			for (var a, o = 0; o < t.length; o++) {
				(a = t[o]).data = null === a.data ? 0 : a.data;
				var r = void 0;
				r = "circle" == e.type ? 2 : e.endAngle < e.startAngle ? 2 + e.endAngle - e.startAngle : e.startAngle - e.endAngle, a._proportion_ = r * a.data * i + e.startAngle, 2 <= a._proportion_ && (a._proportion_ %= 2)
			}
			return t
		}

		function X(t, e, i) {
			for (var a = e, o = 0; o < t.length; o++) t[o].value = null === t[o].value ? 0 : t[o].value, t[o]._startAngle_ = a, t[o]._endAngle_ = (e - i + 1) * t[o].value + e, 2 <= t[o]._endAngle_ && (t[o]._endAngle_ %= 2), a = t[o]._endAngle_;
			return t
		}

		function G(t, e, i) {
			for (var a, o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1, r = 0; r < t.length; r++) {
				if (a = t[r], a.data = null === a.data ? 0 : a.data, "auto" == i.pointer.color) {
					for (var n = 0; n < e.length; n++)
						if (a.data <= e[n].value) {
							a.color = e[n].color;
							break
						}
				} else a.color = i.pointer.color;
				var l = i.startAngle - i.endAngle + 1;
				a._endAngle_ = l * a.data + i.startAngle, a._oldAngle_ = i.oldAngle, i.oldAngle < i.endAngle && (a._oldAngle_ += 2), a._proportion_ = a.data >= i.oldData ? (a._endAngle_ - a._oldAngle_) * o + i.oldAngle : a._oldAngle_ - (a._oldAngle_ - a._endAngle_) * o, 2 <= a._proportion_ && (a._proportion_ %= 2)
			}
			return t
		}

		function j(t) {
			t = E(t);
			for (var e = 0, i = 0; i < t.length; i++) {
				var a = t[i],
					o = a.format ? a.format(+a._proportion_.toFixed(2)) : Jt.toFixed(100 * a._proportion_) + "%";
				e = Math.max(e, d(o))
			}
			return e
		}

		function Y(t, e, i, a, o, r) {
			return t.map(function (t) {
				return null === t ? null : (t.width = Math.ceil((e - 2 * o.columePadding) / i), r.extra.column && r.extra.column.width && 0 < +r.extra.column.width && (t.width = Math.min(t.width, +r.extra.column.width)), 0 >= t.width && (t.width = 1), t.x += (a + .5 - i / 2) * t.width, t)
			})
		}

		function $(t, e, i, a, o, r, n) {
			return t.map(function (t) {
				return null === t ? null : (t.width = Math.ceil((e - 2 * o.columePadding) / 2), r.extra.column && r.extra.column.width && 0 < +r.extra.column.width && (t.width = Math.min(t.width, +r.extra.column.width)), 0 < a && (t.width -= 2 * n), t)
			})
		}

		function q(t, e, i, a, o, r) {
			return t.map(function (t) {
				return null === t ? null : (t.width = Math.ceil((e - 2 * o.columePadding) / 2), r.extra.column && r.extra.column.width && 0 < +r.extra.column.width && (t.width = Math.min(t.width, +r.extra.column.width)), t)
			})
		}

		function J(t, e) {
			var i = e.width - e.area[1] - e.area[3],
				a = e.enableScroll ? Math.min(e.xAxis.itemCount, t.length) : t.length;
			("line" == e.type || "area" == e.type) && 1 < a && "justify" == e.xAxis.boundaryGap && (a -= 1);
			var o = i / a,
				r = [],
				n = e.area[3],
				l = e.width - e.area[1];
			return t.forEach(function (t, e) {
				r.push(n + e * o)
			}), "justify" !== e.xAxis.boundaryGap && (!0 === e.enableScroll ? r.push(n + t.length * o) : r.push(l)), {
				xAxisPoints: r,
				startX: n,
				endX: l,
				eachSpacing: o
			}
		}

		function Z(t, e, i, a, o, r) {
			var n = Math.round,
				l = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 1,
				s = [],
				h = r.height - r.area[0] - r.area[2];
			return t.forEach(function (t, c) {
				if (null === t) s.push(null);
				else {
					var d = [];
					t.forEach(function (t) {
						var s = {
								x: a[c] + n(o / 2)
							},
							x = t.value || t,
							p = h * (x - e) / (i - e);
						p *= l, s.y = r.height - n(p) - r.area[2], d.push(s)
					}), s.push(d)
				}
			}), s
		}

		function K(t, e, i, a, o, r) {
			var n = Math.round,
				l = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 1,
				s = "center";
			("line" == r.type || "area" == r.type) && (s = r.xAxis.boundaryGap);
			var h = [],
				c = r.height - r.area[0] - r.area[2],
				d = r.width - r.area[1] - r.area[3];
			return t.forEach(function (t, x) {
				if (null === t) h.push(null);
				else {
					var p = {
							color: t.color,
							x: a[x]
						},
						g = t;
					if ("object" == (void 0 === t ? "undefined" : Yt(t)) && null !== t)
						if (t.constructor == Array) {
							var f = void 0,
								u = void 0,
								y = void 0;
							u = (f = [].concat(r.chartData.xAxisData.ranges)).shift(), y = f.pop(), g = t[1], p.x = r.area[3] + d * (t[0] - u) / (y - u)
						} else g = t.value;
					"center" == s && (p.x += n(o / 2));
					var v = c * (g - e) / (i - e);
					v *= l, p.y = r.height - n(v) - r.area[2], h.push(p)
				}
			}), h
		}

		function Q(t, e, i, a, o, r, n, l, s) {
			var h = Math.round,
				c = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 1,
				d = [],
				x = r.height - r.area[0] - r.area[2];
			return t.forEach(function (t, n) {
				if (null === t) d.push(null);
				else {
					var p = {
						color: t.color,
						x: a[n] + h(o / 2)
					};
					if (0 < l) {
						for (var g = 0, f = 0; f <= l; f++) g += s[f].data[n];
						var u = x * (g - e) / (i - e),
							y = x * (g - t - e) / (i - e)
					} else var g = t,
						u = x * (g - e) / (i - e),
						y = 0;
					var v = y;
					u *= c, v *= c, p.y = r.height - h(u) - r.area[2], p.y0 = r.height - h(v) - r.area[2], d.push(p)
				}
			}), d
		}

		function U(t, e, i, a) {
			var o = Math.min,
				r = Math.max,
				n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : -1,
				l = [];
			("stack" == a ? p(t, e.categories.length) : x(t)).filter(function (t) {
				return "object" == (void 0 === t ? "undefined" : Yt(t)) && null !== t ? t.constructor == Array ? null !== t : null !== t.value : null !== t
			}).map(function (t) {
				"object" == (void 0 === t ? "undefined" : Yt(t)) ? t.constructor == Array ? "candle" == e.type ? t.map(function (t) {
					l.push(t)
				}) : l.push(t[1]) : l.push(t.value): l.push(t)
			});
			var s = 0,
				h = 0;
			0 < l.length && (s = o.apply(this, l), h = r.apply(this, l)), -1 < n ? ("number" == typeof e.yAxis.data[n].min && (s = o(e.yAxis.data[n].min, s)), "number" == typeof e.yAxis.data[n].max && (h = r(e.yAxis.data[n].max, h))) : ("number" == typeof e.yAxis.min && (s = o(e.yAxis.min, s)), "number" == typeof e.yAxis.max && (h = r(e.yAxis.max, h))), s === h && (h += h || 10);
			for (var d = c(s, h), g = d.minRange, f = [], u = (d.maxRange - g) / e.yAxis.splitNumber, y = 0; y <= e.yAxis.splitNumber; y++) f.push(g + u * y);
			return f.reverse()
		}

		function V(t, e, i) {
			var a = Math.max,
				o = qt({}, {
					type: ""
				}, e.extra.column),
				r = e.yAxis.data.length,
				n = Array(r);
			if (0 < r) {
				for (var l = 0; l < r; l++) {
					n[l] = [];
					for (var s = 0; s < t.length; s++) t[s].index == l && n[l].push(t[s])
				}
				for (var h, c = Array(r), x = Array(r), p = Array(r), g = 0; g < r; g++) ! function (t, r) {
					r = e.yAxis.data[t], 1 == e.yAxis.disabled && (r.disabled = !0), c[t] = U(n[t], e, i, o.type, t);
					var l = r.fontSize || i.fontSize;
					p[t] = {
						position: r.position ? r.position : "left",
						width: 0
					}, x[t] = c[t].map(function (e) {
						return e = Jt.toFixed(e, 6), e = r.format ? r.format(+e) : e, p[t].width = a(p[t].width, d(e, l) + 5), e
					});
					var s = r.calibration ? 4 * e.pixelRatio : 0;
					p[t].width += s + 3 * e.pixelRatio, !0 === r.disabled && (p[t].width = 0), h = r
				}(g, h)
			} else {
				var x = [, ],
					p = [, ];
				(c = [, ])[0] = U(t, e, i, o.type), p[0] = {
					position: "left",
					width: 0
				};
				var f = e.yAxis.fontSize || i.fontSize;
				x[0] = c[0].map(function (t) {
					return t = Jt.toFixed(t, 6), t = e.yAxis.format ? e.yAxis.format(+t) : t, p[0].width = a(p[0].width, d(t, f) + 5), t
				}), p[0].width += 3 * e.pixelRatio, !0 === e.yAxis.disabled ? (p[0] = {
					position: "left",
					width: 0
				}, e.yAxis.data[0] = {
					disabled: !0
				}) : e.yAxis.data[0] = {
					disabled: !1,
					position: "left",
					max: e.yAxis.max,
					min: e.yAxis.min,
					format: e.yAxis.format
				}
			}
			return {
				rangesFormat: x,
				ranges: c,
				yAxisWidth: p
			}
		}

		function tt(t, e, i) {
			for (var a = [].concat(i.chartData.yAxisData.ranges), o = i.height - i.area[0] - i.area[2], r = i.area[0], n = [], l = 0; l < a.length; l++) {
				var s = a[l].shift(),
					h = s - (s - a[l].pop()) * (t - r) / o;
				h = i.yAxis.data[l].format ? i.yAxis.data[l].format(+h) : h.toFixed(0), n.push(h + "")
			}
			return n
		}

		function et(t, e) {
			for (var i = void 0, a = void 0, o = e.height - e.area[0] - e.area[2], r = 0; r < t.length; r++) {
				t[r].yAxisIndex = t[r].yAxisIndex ? t[r].yAxisIndex : 0;
				var n = [].concat(e.chartData.yAxisData.ranges[t[r].yAxisIndex]);
				i = n.pop(), a = n.shift();
				var l = o * (t[r].value - i) / (a - i);
				t[r].y = e.height - Math.round(l) - e.area[2]
			}
			return t
		}

		function it(t, e) {
			var i = Math.PI;
			!0 === e.rotateLock ? !0 !== e._rotate_ && (t.translate(e.height, 0), t.rotate(90 * i / 180), e._rotate_ = !0) : (t.translate(e.height, 0), t.rotate(90 * i / 180))
		}

		function at(t, e, i, a, o) {
			a.beginPath(), "hollow" == o.dataPointShapeType ? (a.setStrokeStyle(e), a.setFillStyle(o.background), a.setLineWidth(2 * o.pixelRatio)) : (a.setStrokeStyle("#ffffff"), a.setFillStyle(e), a.setLineWidth(1 * o.pixelRatio)), "diamond" === i ? t.forEach(function (t) {
				null !== t && (a.moveTo(t.x, t.y - 4.5), a.lineTo(t.x - 4.5, t.y), a.lineTo(t.x, t.y + 4.5), a.lineTo(t.x + 4.5, t.y), a.lineTo(t.x, t.y - 4.5))
			}) : "circle" === i ? t.forEach(function (t) {
				null !== t && (a.moveTo(t.x + 2.5 * o.pixelRatio, t.y), a.arc(t.x, t.y, 3 * o.pixelRatio, 0, 2 * Math.PI, !1))
			}) : "rect" === i ? t.forEach(function (t) {
				null !== t && (a.moveTo(t.x - 3.5, t.y - 3.5), a.rect(t.x - 3.5, t.y - 3.5, 7, 7))
			}) : "triangle" == i && t.forEach(function (t) {
				null !== t && (a.moveTo(t.x, t.y - 4.5), a.lineTo(t.x - 4.5, t.y + 4.5), a.lineTo(t.x + 4.5, t.y + 4.5), a.lineTo(t.x, t.y - 4.5))
			}), a.closePath(), a.fill(), a.stroke()
		}

		function ot(t, e, i, a) {
			var o = t.title.fontSize || e.titleFontSize,
				r = t.subtitle.fontSize || e.subtitleFontSize,
				n = t.title.name || "",
				l = t.subtitle.name || "",
				s = t.title.color || e.titleColor,
				h = t.subtitle.color || e.subtitleColor,
				c = n ? o : 0,
				x = l ? r : 0;
			if (l) {
				var p = d(l, r),
					g = a.x - p / 2 + (t.subtitle.offsetX || 0),
					f = a.y + r / 2 + (t.subtitle.offsetY || 0);
				n && (f += (c + 5) / 2), i.beginPath(), i.setFontSize(r), i.setFillStyle(h), i.fillText(l, g, f), i.closePath(), i.stroke()
			}
			if (n) {
				var u = d(n, o),
					y = a.x - u / 2 + (t.title.offsetX || 0),
					v = a.y + o / 2 + (t.title.offsetY || 0);
				l && (v -= (x + 5) / 2), i.beginPath(), i.setFontSize(o), i.setFillStyle(s), i.fillText(n, y, v), i.closePath(), i.stroke()
			}
		}

		function rt(t, e, i, a) {
			var o = e.data;
			t.forEach(function (t, r) {
				if (null !== t) {
					a.beginPath(), a.setFontSize(e.textSize || i.fontSize), a.setFillStyle(e.textColor || "#666666");
					var n = o[r];
					"object" == Yt(o[r]) && null !== o[r] && (n = o[r].constructor == Array ? o[r][1] : o[r].value);
					var l = e.format ? e.format(n) : n;
					a.fillText(l + "", t.x - d(l, e.textSize || i.fontSize) / 2, t.y - 4), a.closePath(), a.stroke()
				}
			})
		}

		function nt(t, e, i, a, o, r) {
			var n = Math.PI;
			e -= t.width / 2 + o.gaugeLabelTextMargin;
			for (var l = (t.startAngle - t.endAngle + 1) / t.splitLine.splitNumber, s = (t.endNumber - t.startNumber) / t.splitLine.splitNumber, h = t.startAngle, c = t.startNumber, x = 0; x < t.splitLine.splitNumber + 1; x++) {
				var p = {
						x: e * Math.cos(h * n),
						y: e * Math.sin(h * n)
					},
					g = t.labelFormat ? t.labelFormat(c) : c;
				p.x += i.x - d(g) / 2, p.y += i.y;
				var f = p.x,
					u = p.y;
				r.beginPath(), r.setFontSize(o.fontSize), r.setFillStyle(t.labelColor || "#666666"), r.fillText(g, f, u + o.fontSize / 2), r.closePath(), r.stroke(), 2 <= (h += l) && (h %= 2), c += s
			}
		}

		function lt(t, e, i, a, o, r) {
			var n = a.extra.radar || {};
			e += o.radarLabelTextMargin, t.forEach(function (t, s) {
				var h = {
						x: e * Math.cos(t),
						y: e * Math.sin(t)
					},
					c = l(h.x, h.y, i),
					x = c.x,
					p = c.y;
				Jt.approximatelyEqual(h.x, 0) ? x -= d(a.categories[s] || "") / 2 : 0 > h.x && (x -= d(a.categories[s] || "")), r.beginPath(), r.setFontSize(o.fontSize), r.setFillStyle(n.labelColor || "#666666"), r.fillText(a.categories[s] || "", x, p + o.fontSize / 2), r.closePath(), r.stroke()
			})
		}

		function st(t, e, i, a, o, r) {
			for (var n = Math.cos, h = Math.sin, c = Math.min, x = Math.max, p = Math.PI, g = i.pieChartLinePadding, f = [], u = null, y = t.map(function (t) {
					var e = t.format ? t.format(+t._proportion_.toFixed(2)) : Jt.toFixed(100 * t._proportion_.toFixed(4)) + "%";
					return t._rose_proportion_ && (t._proportion_ = t._rose_proportion_), {
						arc: 2 * p - (t._start_ + 2 * p * t._proportion_ / 2),
						text: e,
						color: t.color,
						radius: t._radius_,
						textColor: t.textColor,
						textSize: t.textSize
					}
				}), v = 0; v < y.length; v++) {
				var m = y[v],
					b = n(m.arc) * (m.radius + g),
					A = h(m.arc) * (m.radius + g),
					S = n(m.arc) * m.radius,
					T = h(m.arc) * m.radius,
					P = 0 <= b ? b + i.pieChartTextPadding : b - i.pieChartTextPadding,
					w = A,
					_ = d(m.text, m.textSize || i.fontSize),
					F = w;
				u && Jt.isSameXCoordinateArea(u.start, {
					x: P
				}) && (F = 0 < P ? c(w, u.start.y) : 0 > b ? x(w, u.start.y) : 0 < w ? x(w, u.start.y) : c(w, u.start.y)), 0 > P && (P -= _), u = s({
					lineStart: {
						x: S,
						y: T
					},
					lineEnd: {
						x: b,
						y: A
					},
					start: {
						x: P,
						y: F
					},
					width: _,
					height: i.fontSize,
					text: m.text,
					color: m.color,
					textColor: m.textColor,
					textSize: m.textSize
				}, u), f.push(u)
			}
			for (var L = 0; L < f.length; L++) {
				var D = f[L],
					R = l(D.lineStart.x, D.lineStart.y, r),
					k = l(D.lineEnd.x, D.lineEnd.y, r),
					C = l(D.start.x, D.start.y, r);
				a.setLineWidth(1 * e.pixelRatio), a.setFontSize(i.fontSize), a.beginPath(), a.setStrokeStyle(D.color), a.setFillStyle(D.color), a.moveTo(R.x, R.y);
				var M = 0 > D.start.x ? C.x + D.width : C.x,
					z = 0 > D.start.x ? C.x - 5 : C.x + 5;
				a.quadraticCurveTo(k.x, k.y, M, C.y), a.moveTo(R.x, R.y), a.stroke(), a.closePath(), a.beginPath(), a.moveTo(C.x + D.width, C.y), a.arc(M, C.y, 2, 0, 2 * p), a.closePath(), a.fill(), a.beginPath(), a.setFontSize(D.textSize || i.fontSize), a.setFillStyle(D.textColor || "#666666"), a.fillText(D.text, z, C.y + 3), a.closePath(), a.stroke(), a.closePath()
			}
		}

		function ht(e, i, a, o) {
			var r = i.extra.tooltip || {};
			r.gridType = null == r.gridType ? "solid" : r.gridType, r.dashLength = null == r.dashLength ? 4 : r.dashLength;
			var n = i.area[0],
				l = i.height - i.area[2];
			if ("dash" == r.gridType && o.setLineDash([r.dashLength, r.dashLength]), o.setStrokeStyle(r.gridColor || "#cccccc"), o.setLineWidth(1 * i.pixelRatio), o.beginPath(), o.moveTo(e, n), o.lineTo(e, l), o.stroke(), o.setLineDash([]), r.xAxisLabel) {
				var s = i.categories[i.tooltip.index];
				o.setFontSize(a.fontSize);
				var h = d(s, a.fontSize),
					c = e - .5 * h,
					x = l;
				o.beginPath(), o.setFillStyle(t(r.labelBgColor || a.toolTipBackground, r.labelBgOpacity || a.toolTipOpacity)), o.setStrokeStyle(r.labelBgColor || a.toolTipBackground), o.setLineWidth(1 * i.pixelRatio), o.rect(c - a.toolTipPadding, x, h + 2 * a.toolTipPadding, a.fontSize + 2 * a.toolTipPadding), o.closePath(), o.stroke(), o.fill(), o.beginPath(), o.setFontSize(a.fontSize), o.setFillStyle(r.labelFontColor || a.fontColor), o.fillText(s + "", c, x + a.toolTipPadding + a.fontSize), o.closePath(), o.stroke()
			}
		}

		function ct(e, i, a) {
			for (var o, r = qt({}, {
					type: "solid",
					dashLength: 4,
					data: []
				}, e.extra.markLine), n = e.area[3], l = e.width - e.area[1], s = et(r.data, e), h = 0; h < s.length; h++)
				if (o = qt({}, {
						lineColor: "#DE4A42",
						showLabel: !1,
						labelFontColor: "#666666",
						labelBgColor: "#DFE8FF",
						labelBgOpacity: .8,
						yAxisIndex: 0
					}, s[h]), "dash" == r.type && a.setLineDash([r.dashLength, r.dashLength]), a.setStrokeStyle(o.lineColor), a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.moveTo(n, o.y), a.lineTo(l, o.y), a.stroke(), a.setLineDash([]), o.showLabel) {
					var c = e.yAxis.format ? e.yAxis.format(+o.value) : o.value;
					a.setFontSize(i.fontSize);
					var x = d(c, i.fontSize),
						p = e.padding[3] + i.yAxisTitleWidth - i.toolTipPadding,
						g = Math.max(e.area[3], x + 2 * i.toolTipPadding) - p,
						f = o.y;
					a.setFillStyle(t(o.labelBgColor, o.labelBgOpacity)), a.setStrokeStyle(o.labelBgColor), a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.rect(p, f - .5 * i.fontSize - i.toolTipPadding, g, i.fontSize + 2 * i.toolTipPadding), a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(i.fontSize), a.setFillStyle(o.labelFontColor), a.fillText(c + "", p + (g - x) / 2, f + .5 * i.fontSize), a.stroke()
				}
		}

		function dt(e, i, a, o) {
			var r = Math.max,
				n = qt({}, {
					gridType: "solid",
					dashLength: 4
				}, e.extra.tooltip),
				l = e.area[3],
				s = e.width - e.area[1];
			if ("dash" == n.gridType && a.setLineDash([n.dashLength, n.dashLength]), a.setStrokeStyle(n.gridColor || "#cccccc"), a.setLineWidth(1 * e.pixelRatio), a.beginPath(), a.moveTo(l, e.tooltip.offset.y), a.lineTo(s, e.tooltip.offset.y), a.stroke(), a.setLineDash([]), n.yAxisLabel)
				for (var h = tt(e.tooltip.offset.y, e.series, e, i, o), c = e.chartData.yAxisData.yAxisWidth, x = e.area[3], p = e.width - e.area[1], g = 0; g < h.length; g++) {
					a.setFontSize(i.fontSize);
					var f = void 0,
						u = void 0,
						y = void 0,
						v = d(h[g], i.fontSize);
					"left" == c[g].position ? (f = x - c[g].width, u = r(f, f + v + 2 * i.toolTipPadding)) : (f = p, u = r(f + c[g].width, f + v + 2 * i.toolTipPadding));
					var m = f + ((y = u - f) - v) / 2,
						b = e.tooltip.offset.y;
					a.beginPath(), a.setFillStyle(t(n.labelBgColor || i.toolTipBackground, n.labelBgOpacity || i.toolTipOpacity)), a.setStrokeStyle(n.labelBgColor || i.toolTipBackground), a.setLineWidth(1 * e.pixelRatio), a.rect(f, b - .5 * i.fontSize - i.toolTipPadding, y, i.fontSize + 2 * i.toolTipPadding), a.closePath(), a.stroke(), a.fill(), a.beginPath(), a.setFontSize(i.fontSize), a.setFillStyle(n.labelFontColor || i.fontColor), a.fillText(h[g], m, b + .5 * i.fontSize), a.closePath(), a.stroke(), "left" == c[g].position ? x -= c[g].width + e.yAxis.padding : p += c[g].width + e.yAxis.padding
				}
		}

		function xt(e, i, a, o, r) {
			var n = qt({}, {
					activeBgColor: "#000000",
					activeBgOpacity: .08
				}, i.extra.tooltip),
				l = i.area[0],
				s = i.height - i.area[2];
			o.beginPath(), o.setFillStyle(t(n.activeBgColor, n.activeBgOpacity)), o.rect(e - r / 2, l, r, s - l), o.closePath(), o.fill()
		}

		function pt(e, i, a, o, r) {
			var n = Math.round,
				l = qt({}, {
					showBox: !0,
					bgColor: "#000000",
					bgOpacity: .7,
					fontColor: "#FFFFFF"
				}, a.extra.tooltip),
				s = 4 * a.pixelRatio,
				h = 5 * a.pixelRatio,
				c = 8 * a.pixelRatio,
				x = !1;
			("line" == a.type || "area" == a.type || "candle" == a.type || "mix" == a.type) && ht(a.tooltip.offset.x, a, o, r), (i = qt({
				x: 0,
				y: 0
			}, i)).y -= 8 * a.pixelRatio;
			var p = e.map(function (t) {
					return d(t.text, o.fontSize)
				}),
				g = s + h + 4 * o.toolTipPadding + Math.max.apply(null, p),
				f = 2 * o.toolTipPadding + e.length * o.toolTipLineHeight;
			0 == l.showBox || (i.x - Math.abs(a._scrollDistance_) + c + g > a.width && (x = !0), f + i.y > a.height && (i.y = a.height - f), r.beginPath(), r.setFillStyle(t(l.bgColor || o.toolTipBackground, l.bgOpacity || o.toolTipOpacity)), x ? (r.moveTo(i.x, i.y + 10 * a.pixelRatio), r.lineTo(i.x - c, i.y + 10 * a.pixelRatio - 5 * a.pixelRatio), r.lineTo(i.x - c, i.y), r.lineTo(i.x - c - n(g), i.y), r.lineTo(i.x - c - n(g), i.y + f), r.lineTo(i.x - c, i.y + f), r.lineTo(i.x - c, i.y + 10 * a.pixelRatio + 5 * a.pixelRatio), r.lineTo(i.x, i.y + 10 * a.pixelRatio)) : (r.moveTo(i.x, i.y + 10 * a.pixelRatio), r.lineTo(i.x + c, i.y + 10 * a.pixelRatio - 5 * a.pixelRatio), r.lineTo(i.x + c, i.y), r.lineTo(i.x + c + n(g), i.y), r.lineTo(i.x + c + n(g), i.y + f), r.lineTo(i.x + c, i.y + f), r.lineTo(i.x + c, i.y + 10 * a.pixelRatio + 5 * a.pixelRatio), r.lineTo(i.x, i.y + 10 * a.pixelRatio)), r.closePath(), r.fill(), e.forEach(function (t, e) {
				if (null !== t.color) {
					r.beginPath(), r.setFillStyle(t.color);
					var a = i.x + c + 2 * o.toolTipPadding,
						n = i.y + (o.toolTipLineHeight - o.fontSize) / 2 + o.toolTipLineHeight * e + o.toolTipPadding + 1;
					x && (a = i.x - g - c + 2 * o.toolTipPadding), r.fillRect(a, n, s, o.fontSize), r.closePath()
				}
			}), e.forEach(function (t, e) {
				var a = i.x + c + 2 * o.toolTipPadding + s + h;
				x && (a = i.x - g - c + 2 * o.toolTipPadding + +s + h);
				var n = i.y + (o.toolTipLineHeight - o.fontSize) / 2 + o.toolTipLineHeight * e + o.toolTipPadding;
				r.beginPath(), r.setFontSize(o.fontSize), r.setFillStyle(l.fontColor), r.fillText(t.text, a, n + o.fontSize), r.closePath(), r.stroke()
			}))
		}

		function gt(t, e, i, a) {
			var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				r = e.chartData.xAxisData,
				n = r.xAxisPoints,
				l = r.eachSpacing,
				s = qt({}, {
					type: "group",
					width: l / 2,
					meter: {
						border: 4,
						fillColor: "#FFFFFF"
					}
				}, e.extra.column),
				h = [];
			a.save();
			var c = -2,
				d = n.length + 2;
			return e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && (a.translate(e._scrollDistance_, 0), c = Math.floor(-e._scrollDistance_ / l) - 2, d = c + e.xAxis.itemCount + 4), e.tooltip && e.tooltip.textList && e.tooltip.textList.length && 1 === o && xt(e.tooltip.offset.x, e, i, a, l), t.forEach(function (r, x) {
				var p = void 0,
					g = void 0,
					f = void 0;
				g = (p = [].concat(e.chartData.yAxisData.ranges[r.index])).pop(), f = p.shift();
				var u = r.data;
				switch (s.type) {
					case "group":
						var y = K(u, g, f, n, l, e, i, o),
							v = Q(u, g, f, n, l, e, i, x, t, o);
						h.push(v), y = Y(y, l, t.length, x, i, e);
						for (var m, b = 0; b < y.length; b++)
							if (null !== (m = y[b]) && b > c && b < d) {
								a.beginPath(), a.setStrokeStyle(m.color || r.color), a.setLineWidth(1), a.setFillStyle(m.color || r.color);
								var A = m.x - m.width / 2,
									S = e.height - m.y - e.area[2];
								a.moveTo(A - 1, m.y), a.lineTo(A + m.width - 2, m.y), a.lineTo(A + m.width - 2, e.height - e.area[2]), a.lineTo(A, e.height - e.area[2]), a.lineTo(A, m.y), a.closePath(), a.stroke(), a.fill()
							} break;
					case "stack":
						y = Q(u, g, f, n, l, e, i, x, t, o);
						h.push(y), y = q(y, l, t.length, x, i, e, t);
						for (var T, P = 0; P < y.length; P++)
							if (null !== (T = y[P]) && P > c && P < d) {
								a.beginPath(), a.setFillStyle(T.color || r.color);
								var A = T.x - T.width / 2 + 1,
									S = e.height - T.y - e.area[2],
									w = e.height - T.y0 - e.area[2];
								0 < x && (S -= w), a.moveTo(A, T.y), a.fillRect(A, T.y, T.width - 2, S), a.closePath(), a.fill()
							} break;
					case "meter":
						y = K(u, g, f, n, l, e, i, o);
						if (h.push(y), y = $(y, l, t.length, x, i, e, s.meter.border), 0 == x) {
							for (var _, F = 0; F < y.length; F++)
								if (null !== (_ = y[F]) && F > c && F < d) {
									a.beginPath(), a.setFillStyle(s.meter.fillColor);
									var A = _.x - _.width / 2,
										S = e.height - _.y - e.area[2];
									a.moveTo(A, _.y), a.fillRect(A, _.y, _.width, S), a.closePath(), a.fill(), 0 < s.meter.border && (a.beginPath(), a.setStrokeStyle(r.color), a.setLineWidth(s.meter.border * e.pixelRatio), a.moveTo(A + .5 * s.meter.border, _.y + S), a.lineTo(A + .5 * s.meter.border, _.y + .5 * s.meter.border), a.lineTo(A + _.width - .5 * s.meter.border, _.y + .5 * s.meter.border), a.lineTo(A + _.width - .5 * s.meter.border, _.y + S), a.stroke())
								}
						} else
							for (var L, D = 0; D < y.length; D++)
								if (null !== (L = y[D]) && D > c && D < d) {
									a.beginPath(), a.setFillStyle(L.color || r.color);
									var A = L.x - L.width / 2,
										S = e.height - L.y - e.area[2];
									a.moveTo(A, L.y), a.fillRect(A, L.y, L.width, S), a.closePath(), a.fill()
								}
				}
			}), !1 !== e.dataLabel && 1 === o && t.forEach(function (r, h) {
				var c = void 0,
					d = void 0,
					x = void 0;
				d = (c = [].concat(e.chartData.yAxisData.ranges[r.index])).pop(), x = c.shift();
				var p = r.data;
				switch (s.type) {
					case "group":
						rt(g = Y(g = K(p, d, x, n, l, e, i, o), l, t.length, h, i, e), r, i, a);
						break;
					case "stack":
						rt(g = Q(p, d, x, n, l, e, i, h, t, o), r, i, a);
						break;
					case "meter":
						var g = K(p, d, x, n, l, e, i, o);
						rt(g, r, i, a)
				}
			}), a.restore(), {
				xAxisPoints: n,
				calPoints: h,
				eachSpacing: l
			}
		}

		function ft(t, e, i, a, o) {
			var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,
				l = qt({}, {
					color: {},
					average: {}
				}, i.extra.candle);
			l.color = qt({}, {
				upLine: "#f04864",
				upFill: "#f04864",
				downLine: "#2fc25b",
				downFill: "#2fc25b"
			}, l.color), l.average = qt({}, {
				show: !1,
				name: [],
				day: [],
				color: a.colors
			}, l.average), i.extra.candle = l;
			var s = i.chartData.xAxisData,
				h = s.xAxisPoints,
				c = s.eachSpacing,
				d = [];
			o.save();
			var x = -2,
				p = h.length + 2,
				g = 0,
				f = i.width + c;
			return i._scrollDistance_ && 0 !== i._scrollDistance_ && !0 === i.enableScroll && (o.translate(i._scrollDistance_, 0), x = Math.floor(-i._scrollDistance_ / c) - 2, p = x + i.xAxis.itemCount + 4, g = -i._scrollDistance_ - c + i.area[3], f = g + (i.xAxis.itemCount + 4) * c), l.average.show && e.forEach(function (t) {
				var e = void 0,
					l = void 0,
					s = void 0;
				l = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), s = e.shift();
				for (var d, x = C(K(t.data, l, s, h, c, i, a, r)), p = 0; p < x.length; p++) {
					if (d = x[p], o.beginPath(), o.setStrokeStyle(t.color), o.setLineWidth(1), 1 === d.length) o.moveTo(d[0].x, d[0].y), o.arc(d[0].x, d[0].y, 1, 0, 2 * Math.PI);
					else {
						o.moveTo(d[0].x, d[0].y);
						for (var u, y = 0, v = 0; v < d.length; v++)
							if (u = d[v], 0 == y && u.x > g && (o.moveTo(u.x, u.y), y = 1), 0 < v && u.x > g && u.x < f) {
								var m = n(d, v - 1);
								o.bezierCurveTo(m.ctrA.x, m.ctrA.y, m.ctrB.x, m.ctrB.y, u.x, u.y)
							} o.moveTo(d[0].x, d[0].y)
					}
					o.closePath(), o.stroke()
				}
			}), t.forEach(function (t) {
				var e = void 0,
					n = void 0,
					s = void 0;
				n = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), s = e.shift();
				var g = t.data,
					f = Z(g, n, s, h, c, i, a, r);
				d.push(f);
				for (var u = C(f), y = 0; y < u[0].length; y++)
					if (y > x && y < p) {
						var v = u[0][y];
						o.beginPath(), 0 < g[y][1] - g[y][0] ? (o.setStrokeStyle(l.color.upLine), o.setFillStyle(l.color.upFill), o.setLineWidth(1 * i.pixelRatio), o.moveTo(v[3].x, v[3].y), o.lineTo(v[1].x, v[1].y), o.lineTo(v[1].x - c / 4, v[1].y), o.lineTo(v[0].x - c / 4, v[0].y), o.lineTo(v[0].x, v[0].y), o.lineTo(v[2].x, v[2].y), o.lineTo(v[0].x, v[0].y), o.lineTo(v[0].x + c / 4, v[0].y), o.lineTo(v[1].x + c / 4, v[1].y), o.lineTo(v[1].x, v[1].y), o.moveTo(v[3].x, v[3].y)) : (o.setStrokeStyle(l.color.downLine), o.setFillStyle(l.color.downFill), o.setLineWidth(1 * i.pixelRatio), o.moveTo(v[3].x, v[3].y), o.lineTo(v[0].x, v[0].y), o.lineTo(v[0].x - c / 4, v[0].y), o.lineTo(v[1].x - c / 4, v[1].y), o.lineTo(v[1].x, v[1].y), o.lineTo(v[2].x, v[2].y), o.lineTo(v[1].x, v[1].y), o.lineTo(v[1].x + c / 4, v[1].y), o.lineTo(v[0].x + c / 4, v[0].y), o.lineTo(v[0].x, v[0].y), o.moveTo(v[3].x, v[3].y)), o.closePath(), o.fill(), o.stroke()
					}
			}), o.restore(), {
				xAxisPoints: h,
				calPoints: d,
				eachSpacing: c
			}
		}

		function ut(e, i, a, o) {
			var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				l = qt({}, {
					type: "straight",
					opacity: .2,
					addLine: !1,
					width: 2,
					gradient: !1
				}, i.extra.area),
				s = i.chartData.xAxisData,
				h = s.xAxisPoints,
				c = s.eachSpacing,
				d = i.height - i.area[2],
				x = [];
			o.save();
			var p = 0,
				g = i.width + c;
			return i._scrollDistance_ && 0 !== i._scrollDistance_ && !0 === i.enableScroll && (o.translate(i._scrollDistance_, 0), p = -i._scrollDistance_ - c + i.area[3], g = p + (i.xAxis.itemCount + 4) * c), e.forEach(function (e) {
				var s = void 0,
					f = void 0,
					u = void 0;
				f = (s = [].concat(i.chartData.yAxisData.ranges[e.index])).pop(), u = s.shift();
				var y = K(e.data, f, u, h, c, i, a, r);
				x.push(y);
				for (var v, m = C(y), b = 0; b < m.length; b++) {
					if (v = m[b], o.beginPath(), o.setStrokeStyle(t(e.color, l.opacity)), l.gradient) {
						var A = o.createLinearGradient(0, i.area[0], 0, i.height - i.area[2]);
						A.addColorStop("0", t(e.color, l.opacity)), A.addColorStop("1.0", t("#FFFFFF", .1)), o.setFillStyle(A)
					} else o.setFillStyle(t(e.color, l.opacity));
					if (o.setLineWidth(l.width * i.pixelRatio), 1 < v.length) {
						var S = v[0],
							T = v[v.length - 1];
						o.moveTo(S.x, S.y);
						var P = 0;
						if ("curve" === l.type) {
							for (var w, _ = 0; _ < v.length; _++)
								if (w = v[_], 0 == P && w.x > p && (o.moveTo(w.x, w.y), P = 1), 0 < _ && w.x > p && w.x < g) {
									var F = n(v, _ - 1);
									o.bezierCurveTo(F.ctrA.x, F.ctrA.y, F.ctrB.x, F.ctrB.y, w.x, w.y)
								}
						} else
							for (var L, D = 0; D < v.length; D++) L = v[D], 0 == P && L.x > p && (o.moveTo(L.x, L.y), P = 1), 0 < D && L.x > p && L.x < g && o.lineTo(L.x, L.y);
						o.lineTo(T.x, d), o.lineTo(S.x, d), o.lineTo(S.x, S.y)
					} else {
						var R = v[0];
						o.moveTo(R.x - c / 2, R.y), o.lineTo(R.x + c / 2, R.y), o.lineTo(R.x + c / 2, d), o.lineTo(R.x - c / 2, d), o.moveTo(R.x - c / 2, R.y)
					}
					if (o.closePath(), o.fill(), l.addLine) {
						if ("dash" == e.lineType) {
							var k = e.dashLength ? e.dashLength : 8;
							k *= i.pixelRatio, o.setLineDash([k, k])
						}
						if (o.beginPath(), o.setStrokeStyle(e.color), o.setLineWidth(l.width * i.pixelRatio), 1 === v.length) o.moveTo(v[0].x, v[0].y), o.arc(v[0].x, v[0].y, 1, 0, 2 * Math.PI);
						else {
							o.moveTo(v[0].x, v[0].y);
							var M = 0;
							if ("curve" === l.type) {
								for (var z, W = 0; W < v.length; W++)
									if (z = v[W], 0 == M && z.x > p && (o.moveTo(z.x, z.y), M = 1), 0 < W && z.x > p && z.x < g) {
										var O = n(v, W - 1);
										o.bezierCurveTo(O.ctrA.x, O.ctrA.y, O.ctrB.x, O.ctrB.y, z.x, z.y)
									}
							} else
								for (var I, E = 0; E < v.length; E++) I = v[E], 0 == M && I.x > p && (o.moveTo(I.x, I.y), M = 1), 0 < E && I.x > p && I.x < g && o.lineTo(I.x, I.y);
							o.moveTo(v[0].x, v[0].y)
						}
						o.stroke(), o.setLineDash([])
					}
				}!1 !== i.dataPointShape && at(y, e.color, e.pointShape, o, i)
			}), !1 !== i.dataLabel && 1 === r && e.forEach(function (t) {
				var e = void 0,
					n = void 0,
					l = void 0;
				n = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), l = e.shift(), rt(K(t.data, n, l, h, c, i, a, r), t, a, o)
			}), o.restore(), {
				xAxisPoints: h,
				calPoints: x,
				eachSpacing: c
			}
		}

		function yt(t, e, i, a) {
			var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				r = qt({}, {
					type: "straight",
					width: 2
				}, e.extra.line);
			r.width *= e.pixelRatio;
			var l = e.chartData.xAxisData,
				s = l.xAxisPoints,
				h = l.eachSpacing,
				c = [];
			a.save();
			var d = 0,
				x = e.width + h;
			return e._scrollDistance_ && 0 !== e._scrollDistance_ && !0 === e.enableScroll && (a.translate(e._scrollDistance_, 0), d = -e._scrollDistance_ - h + e.area[3], x = d + (e.xAxis.itemCount + 4) * h), t.forEach(function (t) {
				var l = void 0,
					p = void 0,
					g = void 0;
				p = (l = [].concat(e.chartData.yAxisData.ranges[t.index])).pop(), g = l.shift();
				var f = K(t.data, p, g, s, h, e, i, o);
				c.push(f);
				var u = C(f);
				if ("dash" == t.lineType) {
					var y = t.dashLength ? t.dashLength : 8;
					y *= e.pixelRatio, a.setLineDash([y, y])
				}
				a.beginPath(), a.setStrokeStyle(t.color), a.setLineWidth(r.width), u.forEach(function (t) {
					if (1 === t.length) a.moveTo(t[0].x, t[0].y), a.arc(t[0].x, t[0].y, 1, 0, 2 * Math.PI);
					else {
						a.moveTo(t[0].x, t[0].y);
						var e = 0;
						if ("curve" === r.type) {
							for (var i, o = 0; o < t.length; o++)
								if (i = t[o], 0 == e && i.x > d && (a.moveTo(i.x, i.y), e = 1), 0 < o && i.x > d && i.x < x) {
									var l = n(t, o - 1);
									a.bezierCurveTo(l.ctrA.x, l.ctrA.y, l.ctrB.x, l.ctrB.y, i.x, i.y)
								}
						} else
							for (var s, h = 0; h < t.length; h++) s = t[h], 0 == e && s.x > d && (a.moveTo(s.x, s.y), e = 1), 0 < h && s.x > d && s.x < x && a.lineTo(s.x, s.y);
						a.moveTo(t[0].x, t[0].y)
					}
				}), a.stroke(), a.setLineDash([]), !1 !== e.dataPointShape && at(f, t.color, t.pointShape, a, e)
			}), !1 !== e.dataLabel && 1 === o && t.forEach(function (t) {
				var r = void 0,
					n = void 0,
					l = void 0;
				n = (r = [].concat(e.chartData.yAxisData.ranges[t.index])).pop(), l = r.shift(), rt(K(t.data, n, l, s, h, e, i, o), t, i, a)
			}), a.restore(), {
				xAxisPoints: s,
				calPoints: c,
				eachSpacing: h
			}
		}

		function vt(e, i, a, o) {
			var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				l = i.chartData.xAxisData,
				s = l.xAxisPoints,
				h = l.eachSpacing,
				c = i.height - i.area[2],
				d = [],
				x = 0,
				p = 0;
			e.forEach(function (t) {
				"column" == t.type && (p += 1)
			}), o.save();
			var g = -2,
				f = s.length + 2,
				u = 0,
				y = i.width + h;
			if (i._scrollDistance_ && 0 !== i._scrollDistance_ && !0 === i.enableScroll && (o.translate(i._scrollDistance_, 0), g = Math.floor(-i._scrollDistance_ / h) - 2, f = g + i.xAxis.itemCount + 4, u = -i._scrollDistance_ - h + i.area[3], y = u + (i.xAxis.itemCount + 4) * h), e.forEach(function (e) {
					var l = void 0,
						v = void 0,
						m = void 0;
					v = (l = [].concat(i.chartData.yAxisData.ranges[e.index])).pop(), m = l.shift();
					var b = K(e.data, v, m, s, h, i, a, r);
					if (d.push(b), "column" == e.type) {
						b = Y(b, h, p, x, a, i);
						for (var A, S = 0; S < b.length; S++)
							if (null !== (A = b[S]) && S > g && S < f) {
								o.beginPath(), o.setStrokeStyle(A.color || e.color), o.setLineWidth(1), o.setFillStyle(A.color || e.color);
								var T = A.x - A.width / 2;
								i.height, A.y, i.area[2];
								o.moveTo(T, A.y), o.moveTo(T - 1, A.y), o.lineTo(T + A.width - 2, A.y), o.lineTo(T + A.width - 2, i.height - i.area[2]), o.lineTo(T, i.height - i.area[2]), o.lineTo(T, A.y), o.closePath(), o.stroke(), o.fill(), o.closePath(), o.fill()
							} x += 1
					}
					if ("area" == e.type)
						for (var P, w = C(b), _ = 0; _ < w.length; _++) {
							if (P = w[_], o.beginPath(), o.setStrokeStyle(e.color), o.setFillStyle(t(e.color, .2)), o.setLineWidth(2 * i.pixelRatio), 1 < P.length) {
								var F = P[0],
									L = P[P.length - 1];
								o.moveTo(F.x, F.y);
								var D = 0;
								if ("curve" === e.style) {
									for (var R, k = 0; k < P.length; k++)
										if (R = P[k], 0 == D && R.x > u && (o.moveTo(R.x, R.y), D = 1), 0 < k && R.x > u && R.x < y) {
											var M = n(P, k - 1);
											o.bezierCurveTo(M.ctrA.x, M.ctrA.y, M.ctrB.x, M.ctrB.y, R.x, R.y)
										}
								} else
									for (var z, W = 0; W < P.length; W++) z = P[W], 0 == D && z.x > u && (o.moveTo(z.x, z.y), D = 1), 0 < W && z.x > u && z.x < y && o.lineTo(z.x, z.y);
								o.lineTo(L.x, c), o.lineTo(F.x, c), o.lineTo(F.x, F.y)
							} else {
								var O = P[0];
								o.moveTo(O.x - h / 2, O.y), o.lineTo(O.x + h / 2, O.y), o.lineTo(O.x + h / 2, c), o.lineTo(O.x - h / 2, c), o.moveTo(O.x - h / 2, O.y)
							}
							o.closePath(), o.fill()
						}
					"line" == e.type && C(b).forEach(function (t) {
						if ("dash" == e.lineType) {
							var a = e.dashLength ? e.dashLength : 8;
							a *= i.pixelRatio, o.setLineDash([a, a])
						}
						if (o.beginPath(), o.setStrokeStyle(e.color), o.setLineWidth(2 * i.pixelRatio), 1 === t.length) o.moveTo(t[0].x, t[0].y), o.arc(t[0].x, t[0].y, 1, 0, 2 * Math.PI);
						else {
							o.moveTo(t[0].x, t[0].y);
							var r = 0;
							if ("curve" == e.style) {
								for (var l, s = 0; s < t.length; s++)
									if (l = t[s], 0 == r && l.x > u && (o.moveTo(l.x, l.y), r = 1), 0 < s && l.x > u && l.x < y) {
										var h = n(t, s - 1);
										o.bezierCurveTo(h.ctrA.x, h.ctrA.y, h.ctrB.x, h.ctrB.y, l.x, l.y)
									}
							} else
								for (var c, d = 0; d < t.length; d++) c = t[d], 0 == r && c.x > u && (o.moveTo(c.x, c.y), r = 1), 0 < d && c.x > u && c.x < y && o.lineTo(c.x, c.y);
							o.moveTo(t[0].x, t[0].y)
						}
						o.stroke(), o.setLineDash([])
					}), "point" == e.type && (e.addPoint = !0), 1 == e.addPoint && "column" !== e.type && at(b, e.color, e.pointShape, o, i)
				}), !1 !== i.dataLabel && 1 === r) {
				x = 0;
				e.forEach(function (t) {
					var e = void 0,
						n = void 0,
						l = void 0;
					n = (e = [].concat(i.chartData.yAxisData.ranges[t.index])).pop(), l = e.shift();
					var c = K(t.data, n, l, s, h, i, a, r);
					"column" === t.type ? (c = Y(c, h, p, x, a, i), rt(c, t, a, o), x += 1) : rt(c, t, a, o)
				})
			}
			return o.restore(), {
				xAxisPoints: s,
				calPoints: d,
				eachSpacing: h
			}
		}

		function mt(t, e, i, a, o, r) {
			(t.extra.tooltip || {}).horizentalLine && t.tooltip && 1 === a && ("line" == t.type || "area" == t.type || "column" == t.type || "candle" == t.type || "mix" == t.type) && dt(t, e, i, o, r), i.save(), t._scrollDistance_ && 0 !== t._scrollDistance_ && !0 === t.enableScroll && i.translate(t._scrollDistance_, 0), t.tooltip && t.tooltip.textList && t.tooltip.textList.length && 1 === a && pt(t.tooltip.textList, t.tooltip.offset, t, e, i, o, r), i.restore()
		}

		function bt(t, e, i, a) {
			var o = Math.ceil,
				n = e.chartData.xAxisData,
				l = n.xAxisPoints,
				s = n.startX,
				h = n.endX,
				c = n.eachSpacing,
				x = "center";
			("line" == e.type || "area" == e.type) && (x = e.xAxis.boundaryGap);
			var p = e.height - e.area[2],
				g = e.area[0];
			if (e.enableScroll && e.xAxis.scrollShow) {
				var f = e.height - e.area[2] + i.xAxisHeight,
					u = h - s,
					y = c * (l.length - 1),
					v = 0;
				e._scrollDistance_ && (v = -e._scrollDistance_ * u / y), a.beginPath(), a.setLineCap("round"), a.setLineWidth(6 * e.pixelRatio), a.setStrokeStyle(e.xAxis.scrollBackgroundColor || "#EFEBEF"), a.moveTo(s, f), a.lineTo(h, f), a.stroke(), a.closePath(), a.beginPath(), a.setLineCap("round"), a.setLineWidth(6 * e.pixelRatio), a.setStrokeStyle(e.xAxis.scrollColor || "#A6A6A6"), a.moveTo(s + v, f), a.lineTo(s + v + u * u / y, f), a.stroke(), a.closePath(), a.setLineCap("butt")
			}
			if (a.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && a.translate(e._scrollDistance_, 0), !0 === e.xAxis.calibration && (a.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), a.setLineCap("butt"), a.setLineWidth(1 * e.pixelRatio), l.forEach(function (t, i) {
					0 < i && (a.beginPath(), a.moveTo(t - c / 2, p), a.lineTo(t - c / 2, p + 3 * e.pixelRatio), a.closePath(), a.stroke())
				})), !0 !== e.xAxis.disableGrid && (a.setStrokeStyle(e.xAxis.gridColor || "#cccccc"), a.setLineCap("butt"), a.setLineWidth(1 * e.pixelRatio), "dash" == e.xAxis.gridType && a.setLineDash([e.xAxis.dashLength, e.xAxis.dashLength]), e.xAxis.gridEval = e.xAxis.gridEval || 1, l.forEach(function (t, i) {
					0 == i % e.xAxis.gridEval && (a.beginPath(), a.moveTo(t, p), a.lineTo(t, g), a.stroke())
				}), a.setLineDash([])), !0 !== e.xAxis.disabled) {
				var m = t.length;
				e.xAxis.labelCount && (m = e.xAxis.itemCount ? o(t.length / e.xAxis.itemCount * e.xAxis.labelCount) : e.xAxis.labelCount, m -= 1);
				for (var b = o(t.length / m), A = [], S = t.length, T = 0; T < S; T++) 0 == T % b ? A.push(t[T]) : A.push("");
				A[S - 1] = t[S - 1];
				var P = e.xAxis.fontSize || i.fontSize;
				0 === i._xAxisTextAngle_ ? A.forEach(function (t, o) {
					var r = -d(t + "", P) / 2;
					"center" == x && (r += c / 2);
					var n = 0;
					e.xAxis.scrollShow && (n = 6 * e.pixelRatio), a.beginPath(), a.setFontSize(P), a.setFillStyle(e.xAxis.fontColor || "#666666"), a.fillText(t + "", l[o] + r, p + P + (i.xAxisHeight - n - P) / 2), a.closePath(), a.stroke()
				}) : A.forEach(function (t, o) {
					a.save(), a.beginPath(), a.setFontSize(P), a.setFillStyle(e.xAxis.fontColor || "#666666");
					var n = -d(t + "", P);
					"center" == x && (n += c / 2);
					var s = r(l[o] + c / 2, p + P / 2 + 5, e.height),
						h = s.transX,
						g = s.transY;
					a.rotate(-1 * i._xAxisTextAngle_), a.translate(h, g), a.fillText(t + "", l[o] + n, p + P + 5), a.closePath(), a.stroke(), a.restore()
				})
			}
			a.restore(), e.xAxis.axisLine && (a.beginPath(), a.setStrokeStyle(e.xAxis.axisLineColor), a.setLineWidth(1 * e.pixelRatio), a.moveTo(s, e.height - e.area[2]), a.lineTo(h, e.height - e.area[2]), a.stroke())
		}

		function At(t, e, i, a) {
			if (!0 !== e.yAxis.disableGrid) {
				for (var o = (e.height - e.area[0] - e.area[2]) / e.yAxis.splitNumber, r = e.area[3], n = e.chartData.xAxisData.xAxisPoints, l = e.chartData.xAxisData.eachSpacing * (n.length - 1), s = [], h = 0; h < e.yAxis.splitNumber + 1; h++) s.push(e.height - e.area[2] - o * h);
				a.save(), e._scrollDistance_ && 0 !== e._scrollDistance_ && a.translate(e._scrollDistance_, 0), "dash" == e.yAxis.gridType && a.setLineDash([e.yAxis.dashLength, e.yAxis.dashLength]), a.setStrokeStyle(e.yAxis.gridColor), a.setLineWidth(1 * e.pixelRatio), s.forEach(function (t) {
					a.beginPath(), a.moveTo(r, t), a.lineTo(r + l, t), a.stroke()
				}), a.setLineDash([]), a.restore()
			}
		}

		function St(t, e, i, a) {
			if (!0 !== e.yAxis.disabled) {
				var o = (e.height - e.area[0] - e.area[2]) / e.yAxis.splitNumber,
					r = e.area[3],
					n = e.width - e.area[1],
					l = e.height - e.area[2],
					s = l + i.xAxisHeight;
				e.xAxis.scrollShow && (s -= 3 * e.pixelRatio), e.xAxis.rotateLabel && (s = e.height - e.area[2] + 3), a.beginPath(), a.setFillStyle(e.background || "#ffffff"), 0 > e._scrollDistance_ && a.fillRect(0, 0, r, s), 1 == e.enableScroll && a.fillRect(n, 0, e.width, s), a.closePath(), a.stroke();
				for (var h = [], c = 0; c <= e.yAxis.splitNumber; c++) h.push(e.area[0] + o * c);
				for (var x, p = e.area[3], g = e.width - e.area[1], f = 0; f < e.yAxis.data.length; f++) ! function (t, o) {
					if (!0 !== (t = e.yAxis.data[o]).disabled) {
						var r = e.chartData.yAxisData.rangesFormat[o],
							n = t.fontSize || i.fontSize,
							s = e.chartData.yAxisData.yAxisWidth[o];
						if (r.forEach(function (i, o) {
								var r = h[o] ? h[o] : l;
								a.beginPath(), a.setFontSize(n), a.setLineWidth(1 * e.pixelRatio), a.setStrokeStyle(t.axisLineColor || "#cccccc"), a.setFillStyle(t.fontColor || "#666666"), "left" == s.position ? (a.fillText(i + "", p - s.width, r + n / 2), 1 == t.calibration && (a.moveTo(p, r), a.lineTo(p - 3 * e.pixelRatio, r))) : (a.fillText(i + "", g + 4 * e.pixelRatio, r + n / 2), 1 == t.calibration && (a.moveTo(g, r), a.lineTo(g + 3 * e.pixelRatio, r))), a.closePath(), a.stroke()
							}), !1 !== t.axisLine && (a.beginPath(), a.setStrokeStyle(t.axisLineColor || "#cccccc"), a.setLineWidth(1 * e.pixelRatio), "left" == s.position ? (a.moveTo(p, e.height - e.area[2]), a.lineTo(p, e.area[0])) : (a.moveTo(g, e.height - e.area[2]), a.lineTo(g, e.area[0])), a.stroke()), e.yAxis.showTitle) {
							var c = t.titleFontSize || i.fontSize,
								f = t.title;
							a.beginPath(), a.setFontSize(c), a.setFillStyle(t.titleFontColor || "#666666"), "left" == s.position ? a.fillText(f, p - d(f, c) / 2, e.area[0] - 10 * e.pixelRatio) : a.fillText(f, g - d(f, c) / 2, e.area[0] - 10 * e.pixelRatio), a.closePath(), a.stroke()
						}
						"left" == s.position ? p -= s.width + e.yAxis.padding : g += s.width + e.yAxis.padding
					}
					x = t
				}(x, f)
			}
		}

		function Tt(t, e, i, a, o) {
			if (!1 !== e.legend.show) {
				var r = o.legendData,
					n = r.points,
					l = r.area,
					s = e.legend.padding,
					h = e.legend.fontSize,
					c = 15 * e.pixelRatio,
					x = 5 * e.pixelRatio,
					p = e.legend.itemGap,
					g = Math.max(e.legend.lineHeight * e.pixelRatio, h);
				a.beginPath(), a.setLineWidth(e.legend.borderWidth), a.setStrokeStyle(e.legend.borderColor), a.setFillStyle(e.legend.backgroundColor), a.moveTo(l.start.x, l.start.y), a.rect(l.start.x, l.start.y, l.width, l.height), a.closePath(), a.fill(), a.stroke(), n.forEach(function (t, o) {
					var n = 0,
						f = 0;
					n = r.widthArr[o], f = r.heightArr[o];
					var u = 0,
						y = 0;
					"top" == e.legend.position || "bottom" == e.legend.position ? (u = l.start.x + (l.width - n) / 2, y = l.start.y + s + o * g) : (n = 0 == o ? 0 : r.widthArr[o - 1], u = l.start.x + s + n, y = l.start.y + s + (l.height - f) / 2), a.setFontSize(i.fontSize);
					for (var v, m = 0; m < t.length; m++) {
						switch (v = t[m], v.area = [0, 0, 0, 0], v.area[0] = u, v.area[1] = y, v.area[3] = y + g, a.beginPath(), a.setLineWidth(1 * e.pixelRatio), a.setStrokeStyle(v.show ? v.color : e.legend.hiddenColor), a.setFillStyle(v.show ? v.color : e.legend.hiddenColor), v.legendShape) {
							case "line":
								a.moveTo(u, y + .5 * g - 2 * e.pixelRatio), a.fillRect(u, y + .5 * g - 2 * e.pixelRatio, 15 * e.pixelRatio, 4 * e.pixelRatio);
								break;
							case "triangle":
								a.moveTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio), a.lineTo(u + 2.5 * e.pixelRatio, y + .5 * g + 5 * e.pixelRatio), a.lineTo(u + 12.5 * e.pixelRatio, y + .5 * g + 5 * e.pixelRatio), a.lineTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio);
								break;
							case "diamond":
								a.moveTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio), a.lineTo(u + 2.5 * e.pixelRatio, y + .5 * g), a.lineTo(u + 7.5 * e.pixelRatio, y + .5 * g + 5 * e.pixelRatio), a.lineTo(u + 12.5 * e.pixelRatio, y + .5 * g), a.lineTo(u + 7.5 * e.pixelRatio, y + .5 * g - 5 * e.pixelRatio);
								break;
							case "circle":
								a.moveTo(u + 7.5 * e.pixelRatio, y + .5 * g), a.arc(u + 7.5 * e.pixelRatio, y + .5 * g, 5 * e.pixelRatio, 0, 2 * Math.PI);
								break;
							case "rect":
								a.moveTo(u, y + .5 * g - 5 * e.pixelRatio), a.fillRect(u, y + .5 * g - 5 * e.pixelRatio, 15 * e.pixelRatio, 10 * e.pixelRatio);
								break;
							default:
								a.moveTo(u, y + .5 * g - 5 * e.pixelRatio), a.fillRect(u, y + .5 * g - 5 * e.pixelRatio, 15 * e.pixelRatio, 10 * e.pixelRatio)
						}
						a.closePath(), a.fill(), a.stroke(), u += c + x, a.beginPath(), a.setFontSize(h), a.setFillStyle(v.show ? e.legend.fontColor : e.legend.hiddenColor), a.fillText(v.name, u, y + (.5 * g + .5 * h - 2)), a.closePath(), a.stroke(), "top" == e.legend.position || "bottom" == e.legend.position ? (u += d(v.name, h) + p, v.area[2] = u) : (v.area[2] = u + d(v.name, h) + p, u -= c + x, y += g)
					}
				})
			}
		}

		function Pt(e, i, a, o) {
			var r = Math.PI,
				n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				l = qt({}, {
					activeOpacity: .5,
					activeRadius: 10 * i.pixelRatio,
					offsetAngle: 0,
					labelWidth: 15 * i.pixelRatio,
					ringWidth: 0,
					border: !1,
					borderWidth: 2,
					borderColor: "#FFFFFF"
				}, i.extra.pie),
				s = {
					x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
					y: i.area[0] + (i.height - i.area[0] - i.area[2]) / 2
				};
			0 == a.pieChartLinePadding && (a.pieChartLinePadding = l.activeRadius);
			var h = Math.min((i.width - i.area[1] - i.area[3]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding - a._pieTextMaxLength_, (i.height - i.area[0] - i.area[2]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding);
			e = E(e, h, n);
			var c = l.activeRadius;
			if ((e = e.map(function (t) {
					return t._start_ += l.offsetAngle * r / 180, t
				})).forEach(function (e, a) {
					i.tooltip && i.tooltip.index == a && (o.beginPath(), o.setFillStyle(t(e.color, i.extra.pie.activeOpacity || .5)), o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_ + c, e._start_, e._start_ + 2 * e._proportion_ * r), o.closePath(), o.fill()), o.beginPath(), o.setLineWidth(l.borderWidth * i.pixelRatio), o.lineJoin = "round", o.setStrokeStyle(l.borderColor), o.setFillStyle(e.color), o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_, e._start_, e._start_ + 2 * e._proportion_ * r), o.closePath(), o.fill(), 1 == l.border && o.stroke()
				}), "ring" === i.type) {
				var d = .6 * h;
				"number" == typeof i.extra.pie.ringWidth && 0 < i.extra.pie.ringWidth && (d = Math.max(0, h - i.extra.pie.ringWidth)), o.beginPath(), o.setFillStyle(i.background || "#ffffff"), o.moveTo(s.x, s.y), o.arc(s.x, s.y, d, 0, 2 * r), o.closePath(), o.fill()
			}
			if (!1 !== i.dataLabel && 1 === n) {
				for (var x = !1, p = 0, g = e.length; p < g; p++)
					if (0 < e[p].data) {
						x = !0;
						break
					} x && st(e, i, a, o, h, s)
			}
			return 1 === n && "ring" === i.type && ot(i, a, o, s), {
				center: s,
				radius: h,
				series: e
			}
		}

		function wt(e, i, a, o) {
			var r = Math.PI,
				n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				l = qt({}, {
					type: "area",
					activeOpacity: .5,
					activeRadius: 10 * i.pixelRatio,
					offsetAngle: 0,
					labelWidth: 15 * i.pixelRatio,
					border: !1,
					borderWidth: 2,
					borderColor: "#FFFFFF"
				}, i.extra.rose);
			0 == a.pieChartLinePadding && (a.pieChartLinePadding = l.activeRadius);
			var s = {
					x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
					y: i.area[0] + (i.height - i.area[0] - i.area[2]) / 2
				},
				h = Math.min((i.width - i.area[1] - i.area[3]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding - a._pieTextMaxLength_, (i.height - i.area[0] - i.area[2]) / 2 - a.pieChartLinePadding - a.pieChartTextPadding),
				c = l.minRadius || .5 * h;
			e = H(e, l.type, c, h, n);
			var d = l.activeRadius;
			if ((e = e.map(function (t) {
					return t._start_ += (l.offsetAngle || 0) * r / 180, t
				})).forEach(function (e, a) {
					i.tooltip && i.tooltip.index == a && (o.beginPath(), o.setFillStyle(t(e.color, l.activeOpacity || .5)), o.moveTo(s.x, s.y), o.arc(s.x, s.y, d + e._radius_, e._start_, e._start_ + 2 * e._rose_proportion_ * r), o.closePath(), o.fill()), o.beginPath(), o.setLineWidth(l.borderWidth * i.pixelRatio), o.lineJoin = "round", o.setStrokeStyle(l.borderColor), o.setFillStyle(e.color), o.moveTo(s.x, s.y), o.arc(s.x, s.y, e._radius_, e._start_, e._start_ + 2 * e._rose_proportion_ * r), o.closePath(), o.fill(), 1 == l.border && o.stroke()
				}), !1 !== i.dataLabel && 1 === n) {
				for (var x = !1, p = 0, g = e.length; p < g; p++)
					if (0 < e[p].data) {
						x = !0;
						break
					} x && st(e, i, a, o, h, s)
			}
			return {
				center: s,
				radius: h,
				series: e
			}
		}

		function _t(t, e, i, a) {
			var o = Math.PI,
				r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				n = qt({}, {
					startAngle: .75,
					endAngle: .25,
					type: "default",
					width: 12 * e.pixelRatio,
					gap: 2 * e.pixelRatio
				}, e.extra.arcbar);
			t = N(t, n, r);
			var l, s = n.center ? n.center : {
				x: e.width / 2,
				y: e.height / 2
			};
			n.radius ? l = n.radius : (l = Math.min(s.x, s.y), l -= 5 * e.pixelRatio, l -= n.width / 2);
			for (var h, c = 0; c < t.length; c++) h = t[c], a.setLineWidth(n.width), a.setStrokeStyle(n.backgroundColor || "#E9E9E9"), a.setLineCap("round"), a.beginPath(), "default" == n.type ? a.arc(s.x, s.y, l - (n.width + n.gap) * c, n.startAngle * o, n.endAngle * o, !1) : a.arc(s.x, s.y, l - (n.width + n.gap) * c, 0, 2 * o, !1), a.stroke(), a.setLineWidth(n.width), a.setStrokeStyle(h.color), a.setLineCap("round"), a.beginPath(), a.arc(s.x, s.y, l - (n.width + n.gap) * c, n.startAngle * o, h._proportion_ * o, !1), a.stroke();
			return ot(e, i, a, s), {
				center: s,
				radius: l,
				series: t
			}
		}

		function Ft(e, i, a, o, r) {
			var n = Math.PI,
				l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,
				s = qt({}, {
					type: "default",
					startAngle: .75,
					endAngle: .25,
					width: 15,
					splitLine: {
						fixRadius: 0,
						splitNumber: 10,
						width: 15,
						color: "#FFFFFF",
						childNumber: 5,
						childWidth: 5
					},
					pointer: {
						width: 15,
						color: "auto"
					}
				}, a.extra.gauge);
			null == s.oldAngle && (s.oldAngle = s.startAngle), null == s.oldData && (s.oldData = 0), e = X(e, s.startAngle, s.endAngle);
			var h = {
					x: a.width / 2,
					y: a.height / 2
				},
				c = Math.min(h.x, h.y);
			c -= 5 * a.pixelRatio;
			var d = (c -= s.width / 2) - s.width,
				x = 0;
			if ("progress" == s.type) {
				var p = c - 3 * s.width;
				r.beginPath();
				var g = r.createLinearGradient(h.x, h.y - p, h.x, h.y + p);
				g.addColorStop("0", t(i[0].color, .3)), g.addColorStop("1.0", t("#FFFFFF", .1)), r.setFillStyle(g), r.arc(h.x, h.y, p, 0, 2 * n, !1), r.fill(), r.setLineWidth(s.width), r.setStrokeStyle(t(i[0].color, .3)), r.setLineCap("round"), r.beginPath(), r.arc(h.x, h.y, d, s.startAngle * n, s.endAngle * n, !1), r.stroke();
				x = s.startAngle - s.endAngle + 1, s.splitLine.splitNumber;
				var f = x / s.splitLine.splitNumber / s.splitLine.childNumber,
					u = -c - .5 * s.width - s.splitLine.fixRadius,
					y = -c - s.width - s.splitLine.fixRadius + s.splitLine.width;
				r.save(), r.translate(h.x, h.y), r.rotate((s.startAngle - 1) * n);
				for (var v = s.splitLine.splitNumber * s.splitLine.childNumber + 1, m = i[0].data * l, b = 0; b < v; b++) r.beginPath(), m > b / v ? r.setStrokeStyle(t(i[0].color, 1)) : r.setStrokeStyle(t(i[0].color, .3)), r.setLineWidth(3 * a.pixelRatio), r.moveTo(u, 0), r.lineTo(y, 0), r.stroke(), r.rotate(f * n);
				r.restore(), i = N(i, s, l), r.setLineWidth(s.width), r.setStrokeStyle(i[0].color), r.setLineCap("round"), r.beginPath(), r.arc(h.x, h.y, d, s.startAngle * n, i[0]._proportion_ * n, !1), r.stroke();
				var A = c - 2.5 * s.width;
				r.save(), r.translate(h.x, h.y), r.rotate((i[0]._proportion_ - 1) * n), r.beginPath(), r.setLineWidth(s.width / 3);
				var S = r.createLinearGradient(0, .6 * -A, 0, .6 * A);
				S.addColorStop("0", t("#FFFFFF", 0)), S.addColorStop("0.5", t(i[0].color, 1)), S.addColorStop("1.0", t("#FFFFFF", 0)), r.setStrokeStyle(S), r.arc(0, 0, A, .85 * n, 1.15 * n, !1), r.stroke(), r.beginPath(), r.setLineWidth(1), r.setStrokeStyle(i[0].color), r.setFillStyle(i[0].color), r.moveTo(-A - s.width / 3 / 2, -4), r.lineTo(-A - s.width / 3 / 2 - 4, 0), r.lineTo(-A - s.width / 3 / 2, 4), r.lineTo(-A - s.width / 3 / 2, -4), r.stroke(), r.fill(), r.restore()
			} else {
				r.setLineWidth(s.width), r.setLineCap("butt");
				for (var T, P = 0; P < e.length; P++) T = e[P], r.beginPath(), r.setStrokeStyle(T.color), r.arc(h.x, h.y, c, T._startAngle_ * n, T._endAngle_ * n, !1), r.stroke();
				r.save();
				var w = (x = s.startAngle - s.endAngle + 1) / s.splitLine.splitNumber,
					_ = x / s.splitLine.splitNumber / s.splitLine.childNumber,
					F = -c - .5 * s.width - s.splitLine.fixRadius,
					L = -c - .5 * s.width - s.splitLine.fixRadius + s.splitLine.width,
					D = -c - .5 * s.width - s.splitLine.fixRadius + s.splitLine.childWidth;
				r.translate(h.x, h.y), r.rotate((s.startAngle - 1) * n);
				for (var R = 0; R < s.splitLine.splitNumber + 1; R++) r.beginPath(), r.setStrokeStyle(s.splitLine.color), r.setLineWidth(2 * a.pixelRatio), r.moveTo(F, 0), r.lineTo(L, 0), r.stroke(), r.rotate(w * n);
				r.restore(), r.save(), r.translate(h.x, h.y), r.rotate((s.startAngle - 1) * n);
				for (var k = 0; k < s.splitLine.splitNumber * s.splitLine.childNumber + 1; k++) r.beginPath(), r.setStrokeStyle(s.splitLine.color), r.setLineWidth(1 * a.pixelRatio), r.moveTo(F, 0), r.lineTo(D, 0), r.stroke(), r.rotate(_ * n);
				r.restore(), i = G(i, e, s, l);
				for (var C, M = 0; M < i.length; M++) C = i[M], r.save(), r.translate(h.x, h.y), r.rotate((C._proportion_ - 1) * n), r.beginPath(), r.setFillStyle(C.color), r.moveTo(s.pointer.width, 0), r.lineTo(0, -s.pointer.width / 2), r.lineTo(-d, 0), r.lineTo(0, s.pointer.width / 2), r.lineTo(s.pointer.width, 0), r.closePath(), r.fill(), r.beginPath(), r.setFillStyle("#FFFFFF"), r.arc(0, 0, s.pointer.width / 6, 0, 2 * n, !1), r.fill(), r.restore();
				!1 !== a.dataLabel && nt(s, c, h, a, o, r)
			}
			return ot(a, o, r, h), 1 === l && "gauge" === a.type && (a.extra.gauge.oldAngle = i[0]._proportion_, a.extra.gauge.oldData = i[0].data), {
				center: h,
				radius: c,
				innerRadius: d,
				categories: e,
				totalAngle: x
			}
		}

		function Lt(e, i, a, o) {
			var r = Math.cos,
				n = Math.sin,
				s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				h = qt({}, {
					gridColor: "#cccccc",
					labelColor: "#666666",
					opacity: .2,
					gridCount: 3
				}, i.extra.radar),
				c = y(i.categories.length),
				d = {
					x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
					y: i.area[0] + (i.height - i.area[0] - i.area[2]) / 2
				},
				x = Math.min(d.x - (u(i.categories) + a.radarLabelTextMargin), d.y - a.radarLabelTextMargin);
			x -= i.padding[1], o.beginPath(), o.setLineWidth(1 * i.pixelRatio), o.setStrokeStyle(h.gridColor), c.forEach(function (t) {
				var e = l(x * r(t), x * n(t), d);
				o.moveTo(d.x, d.y), o.lineTo(e.x, e.y)
			}), o.stroke(), o.closePath();
			for (var p = 1; p <= h.gridCount; p++) ! function (t) {
				var e = {};
				o.beginPath(), o.setLineWidth(1 * i.pixelRatio), o.setStrokeStyle(h.gridColor), c.forEach(function (i, a) {
					var s = l(x / h.gridCount * t * r(i), x / h.gridCount * t * n(i), d);
					0 === a ? (e = s, o.moveTo(s.x, s.y)) : o.lineTo(s.x, s.y)
				}), o.lineTo(e.x, e.y), o.stroke(), o.closePath()
			}(p);
			return I(c, d, x, e, i, s).forEach(function (e) {
				o.beginPath(), o.setFillStyle(t(e.color, h.opacity)), e.data.forEach(function (t, e) {
					0 === e ? o.moveTo(t.position.x, t.position.y) : o.lineTo(t.position.x, t.position.y)
				}), o.closePath(), o.fill(), !1 !== i.dataPointShape && at(e.data.map(function (t) {
					return t.position
				}), e.color, e.pointShape, o, i)
			}), lt(c, x, d, i, a, o), {
				center: d,
				radius: x,
				angleList: c
			}
		}

		function Dt(t, e, i) {
			i = 0 == i ? 1 : i;
			for (var a = [], o = 0; o < i; o++) a[o] = Math.random();
			return Math.floor(a.reduce(function (t, e) {
				return t + e
			}) / i * (e - t)) + t
		}

		function Rt(t, e, i, a) {
			for (var o = !1, r = 0; r < e.length; r++)
				if (e[r].area) {
					if (!(t[3] < e[r].area[1] || t[0] > e[r].area[2] || t[1] > e[r].area[3] || t[2] < e[r].area[0])) {
						o = !0;
						break
					}
					if (0 > t[0] || 0 > t[1] || t[2] > i || t[3] > a) {
						o = !0;
						break
					}
					o = !1
				} return o
		}

		function kt(t) {
			var e, i = {};
			i.xMin = 180, i.xMax = 0, i.yMin = 90, i.yMax = 0;
			for (var a, o = 0; o < t.length; o++) {
				a = t[o].geometry.coordinates;
				for (var r = 0; r < a.length; r++) {
					1 == (e = a[r]).length && (e = e[0]);
					for (var n = 0; n < e.length; n++) {
						var l = {
							x: e[n][0],
							y: e[n][1]
						};
						i.xMin = i.xMin < l.x ? i.xMin : l.x, i.xMax = i.xMax > l.x ? i.xMax : l.x, i.yMin = i.yMin < l.y ? i.yMin : l.y, i.yMax = i.yMax > l.y ? i.yMax : l.y
					}
				}
			}
			return i
		}

		function Ct(t, e, i, a, o, r) {
			return {
				x: (e - i.xMin) * a + o,
				y: (i.yMax - t) * a + r
			}
		}

		function Mt(t, e, i, a, o, r) {
			return {
				x: (e - o) / a + i.xMin,
				y: i.yMax - (t - r) / a
			}
		}

		function zt(t, e, i) {
			return e[1] != i[1] && (!(e[1] > t[1] && i[1] > t[1]) && (!(e[1] < t[1] && i[1] < t[1]) && (!(e[1] == t[1] && i[1] > t[1]) && (!(i[1] == t[1] && e[1] > t[1]) && (!(e[0] < t[0] && i[1] < t[1]) && !(i[0] - (i[0] - e[0]) * (i[1] - t[1]) / (i[1] - e[1]) < t[0]))))))
		}

		function Wt(t, e) {
			for (var i, a = 0, o = 0; o < e.length; o++) {
				i = e[o][0], 1 == e.length && (i = e[o][0]);
				for (var r = 0; r < i.length - 1; r++) zt(t, i[r], i[r + 1]) && (a += 1)
			}
			return !(1 != a % 2)
		}

		function Ot(e, i, a, o) {
			var r, n, l = Math.abs,
				s = qt({}, {
					border: !0,
					borderWidth: 1,
					borderColor: "#666666",
					fillOpacity: .6,
					activeBorderColor: "#f04864",
					activeFillColor: "#facc14",
					activeFillOpacity: 1
				}, i.extra.map),
				h = e,
				c = kt(h),
				x = i.width / l(c.xMax - c.xMin),
				p = i.height / l(c.yMax - c.yMin),
				g = x < p ? x : p,
				f = i.width / 2 - l(c.xMax - c.xMin) / 2 * g,
				u = i.height / 2 - l(c.yMax - c.yMin) / 2 * g;
			o.beginPath(), o.clearRect(0, 0, i.width, i.height), o.setFillStyle(i.background || "#FFFFFF"), o.rect(0, 0, i.width, i.height), o.fill();
			for (var y = 0; y < h.length; y++) {
				o.beginPath(), o.setLineWidth(s.borderWidth * i.pixelRatio), o.setStrokeStyle(s.borderColor), o.setFillStyle(t(e[y].color, s.fillOpacity)), i.tooltip && i.tooltip.index == y && (o.setStrokeStyle(s.activeBorderColor), o.setFillStyle(t(s.activeFillColor, s.activeFillOpacity)));
				for (var v = h[y].geometry.coordinates, m = 0; m < v.length; m++) {
					1 == (r = v[m]).length && (r = r[0]);
					for (var b = 0; b < r.length; b++) n = Ct(r[b][1], r[b][0], c, g, f, u), 0 == b ? (o.beginPath(), o.moveTo(n.x, n.y)) : o.lineTo(n.x, n.y);
					o.fill(), 1 == s.border && o.stroke()
				}
				if (1 == i.dataLabel) {
					var A = h[y].properties.centroid;
					if (A) {
						n = Ct(A[1], A[0], c, g, f, u);
						var S = h[y].textSize || a.fontSize,
							T = h[y].properties.name;
						o.beginPath(), o.setFontSize(S), o.setFillStyle(h[y].textColor || "#666666"), o.fillText(T, n.x - d(T, S) / 2, n.y + S / 2), o.closePath(), o.stroke()
					}
				}
			}
			i.chartData.mapData = {
				bounds: c,
				scale: g,
				xoffset: f,
				yoffset: u
			}, mt(i, a, o, 1), o.draw()
		}

		function It(t, e) {
			var i = t.series.sort(function (t, e) {
				return parseInt(e.textSize) - parseInt(t.textSize)
			});
			switch (e) {
				case "normal":
					for (var a = 0; a < i.length; a++) {
						for (var o = void 0, r = void 0, n = void 0, l = i[a].name, s = i[a].textSize, h = d(l, s), c = 0; c++, o = Dt(-t.width / 2, t.width / 2, 5) - h / 2, r = Dt(-t.height / 2, t.height / 2, 5) + s / 2, Rt(n = [o - 5 + t.width / 2, r - 5 - s + t.height / 2, o + h + 5 + t.width / 2, r + 5 + t.height / 2], i, t.width, t.height);)
							if (1e3 == c) {
								n = [-100, -100, -100, -100];
								break
							} i[a].area = n
					}
					break;
				case "vertical":
					for (var x = 0; x < i.length; x++) {
						for (var p = void 0, g = void 0, f = void 0, u = void 0, y = i[x].name, v = i[x].textSize, m = d(y, v), b = !!(.7 < Math.random()), A = 0;;) {
							A++;
							var S = void 0;
							if (b ? (p = Dt(-t.width / 2, t.width / 2, 5) - m / 2, g = Dt(-t.height / 2, t.height / 2, 5) + v / 2, f = [g - 5 - m + t.width / 2, -p - 5 + t.height / 2, g + 5 + t.width / 2, -p + v + 5 + t.height / 2], u = [t.width - (t.width / 2 - t.height / 2) - (-p + v + 5 + t.height / 2) - 5, t.height / 2 - t.width / 2 + (g - 5 - m + t.width / 2) - 5, t.width - (t.width / 2 - t.height / 2) - (-p + v + 5 + t.height / 2) + v, t.height / 2 - t.width / 2 + (g - 5 - m + t.width / 2) + m + 5], S = Rt(u, i, t.height, t.width)) : (p = Dt(-t.width / 2, t.width / 2, 5) - m / 2, g = Dt(-t.height / 2, t.height / 2, 5) + v / 2, f = [p - 5 + t.width / 2, g - 5 - v + t.height / 2, p + m + 5 + t.width / 2, g + 5 + t.height / 2], S = Rt(f, i, t.width, t.height)), !S) break;
							if (1e3 == A) {
								f = [-1e3, -1e3, -1e3, -1e3];
								break
							}
						}
						b ? (i[x].area = u, i[x].areav = f) : i[x].area = f, i[x].rotate = b
					}
			}
			return i
		}

		function Et(t, e, i, a) {
			var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1;
			qt({}, {
				type: "normal",
				autoColors: !0
			}, e.extra.word);
			a.beginPath(), a.setFillStyle(e.background || "#FFFFFF"), a.rect(0, 0, e.width, e.height), a.fill(), a.save();
			var r = e.chartData.wordCloudData;
			a.translate(e.width / 2, e.height / 2);
			for (var n = 0; n < r.length; n++) {
				a.save(), r[n].rotate && a.rotate(90 * Math.PI / 180);
				var l = r[n].name,
					s = r[n].textSize,
					h = d(l, s);
				a.beginPath(), a.setStrokeStyle(r[n].color), a.setFillStyle(r[n].color), a.setFontSize(s), r[n].rotate ? 0 < r[n].areav[0] && (e.tooltip && e.tooltip.index == n ? a.strokeText(l, (r[n].areav[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].areav[1] + 5 + s - e.height / 2) * o) : a.fillText(l, (r[n].areav[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].areav[1] + 5 + s - e.height / 2) * o)) : 0 < r[n].area[0] && (e.tooltip && e.tooltip.index == n ? a.strokeText(l, (r[n].area[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].area[1] + 5 + s - e.height / 2) * o) : a.fillText(l, (r[n].area[0] + 5 - e.width / 2) * o - h * (1 - o) / 2, (r[n].area[1] + 5 + s - e.height / 2) * o)), a.stroke(), a.restore()
			}
			a.restore()
		}

		function Bt(e, i, a, o) {
			var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1,
				n = qt({}, {
					activeWidth: 10,
					activeOpacity: .3,
					border: !1,
					borderWidth: 2,
					borderColor: "#FFFFFF",
					fillOpacity: 1,
					labelAlign: "right"
				}, i.extra.funnel),
				l = (i.height - i.area[0] - i.area[2]) / e.length,
				s = {
					x: i.area[3] + (i.width - i.area[1] - i.area[3]) / 2,
					y: i.height - i.area[2]
				},
				h = n.activeWidth,
				c = Math.min((i.width - i.area[1] - i.area[3]) / 2 - h, (i.height - i.area[0] - i.area[2]) / 2 - h);
			e = B(e, c, r), o.save(), o.translate(s.x, s.y);
			for (var d = 0; d < e.length; d++) 0 == d ? (i.tooltip && i.tooltip.index == d && (o.beginPath(), o.setFillStyle(t(e[d].color, n.activeOpacity)), o.moveTo(-h, 0), o.lineTo(-e[d].radius - h, -l), o.lineTo(e[d].radius + h, -l), o.lineTo(h, 0), o.lineTo(-h, 0), o.closePath(), o.fill()), e[d].funnelArea = [s.x - e[d].radius, s.y - l, s.x + e[d].radius, s.y], o.beginPath(), o.setLineWidth(n.borderWidth * i.pixelRatio), o.setStrokeStyle(n.borderColor), o.setFillStyle(t(e[d].color, n.fillOpacity)), o.moveTo(0, 0), o.lineTo(-e[d].radius, -l), o.lineTo(e[d].radius, -l), o.lineTo(0, 0), o.closePath(), o.fill(), 1 == n.border && o.stroke()) : (i.tooltip && i.tooltip.index == d && (o.beginPath(), o.setFillStyle(t(e[d].color, n.activeOpacity)), o.moveTo(0, 0), o.lineTo(-e[d - 1].radius - h, 0), o.lineTo(-e[d].radius - h, -l), o.lineTo(e[d].radius + h, -l), o.lineTo(e[d - 1].radius + h, 0), o.lineTo(0, 0), o.closePath(), o.fill()), e[d].funnelArea = [s.x - e[d].radius, s.y - l * (d + 1), s.x + e[d].radius, s.y - l * d], o.beginPath(), o.setLineWidth(n.borderWidth * i.pixelRatio), o.setStrokeStyle(n.borderColor), o.setFillStyle(t(e[d].color, n.fillOpacity)), o.moveTo(0, 0), o.lineTo(-e[d - 1].radius, 0), o.lineTo(-e[d].radius, -l), o.lineTo(e[d].radius, -l), o.lineTo(e[d - 1].radius, 0), o.lineTo(0, 0), o.closePath(), o.fill(), 1 == n.border && o.stroke()), o.translate(0, -l);
			return o.restore(), !1 !== i.dataLabel && 1 === r && Ht(e, i, o, l, n.labelAlign, h, s), {
				center: s,
				radius: c,
				series: e
			}
		}

		function Ht(t, e, i, a, o, r, n) {
			for (var l = Math.PI, s = 0; s < t.length; s++) {
				var h = void 0,
					c = void 0,
					x = void 0,
					p = void 0,
					g = t[s],
					f = g.format ? g.format(+g._proportion_.toFixed(2)) : Jt.toFixed(100 * g._proportion_) + "%";
				"right" == o ? (h = 0 == s ? (g.funnelArea[2] + n.x) / 2 : (g.funnelArea[2] + t[s - 1].funnelArea[2]) / 2, c = h + 2 * r, x = g.funnelArea[1] + a / 2, p = g.textSize || e.fontSize, i.setLineWidth(1 * e.pixelRatio), i.setStrokeStyle(g.color), i.setFillStyle(g.color), i.beginPath(), i.moveTo(h, x), i.lineTo(c, x), i.stroke(), i.closePath(), i.beginPath(), i.moveTo(c, x), i.arc(c, x, 2, 0, 2 * l), i.closePath(), i.fill(), i.beginPath(), i.setFontSize(p), i.setFillStyle(g.textColor || "#666666"), i.fillText(f, c + 5, x + p / 2 - 2), i.closePath(), i.stroke(), i.closePath()) : (h = 0 == s ? (g.funnelArea[0] + n.x) / 2 : (g.funnelArea[0] + t[s - 1].funnelArea[0]) / 2, c = h - 2 * r, x = g.funnelArea[1] + a / 2, p = g.textSize || e.fontSize, i.setLineWidth(1 * e.pixelRatio), i.setStrokeStyle(g.color), i.setFillStyle(g.color), i.beginPath(), i.moveTo(h, x), i.lineTo(c, x), i.stroke(), i.closePath(), i.beginPath(), i.moveTo(c, x), i.arc(c, x, 2, 0, 2 * l), i.closePath(), i.fill(), i.beginPath(), i.setFontSize(p), i.setFillStyle(g.textColor || "#666666"), i.fillText(f, c - 5 - d(f), x + p / 2 - 2), i.closePath(), i.stroke(), i.closePath())
			}
		}

		function Nt(t, e) {
			e.draw()
		}

		function Xt(t) {
			this.isStop = !1, t.duration = void 0 === t.duration ? 1e3 : t.duration, t.timing = t.timing || "linear";
			var e = "undefined" == typeof setTimeout ? "undefined" == typeof requestAnimationFrame ? function (t) {
					t(null)
				} : requestAnimationFrame : function (t, e) {
					setTimeout(function () {
						var e = +new Date;
						t(e)
					}, e)
				},
				i = null,
				a = function (o) {
					if (null === o || !0 === this.isStop) return t.onProcess && t.onProcess(1), void(t.onAnimationFinish && t.onAnimationFinish());
					if (null === i && (i = o), o - i < t.duration) {
						var r = (o - i) / t.duration;
						r = (0, Zt[t.timing])(r), t.onProcess && t.onProcess(r), e(a, 17)
					} else t.onProcess && t.onProcess(1), t.onAnimationFinish && t.onAnimationFinish()
				};
			a = a.bind(this), e(a, 17)
		}

		function Gt(t, e, a, o) {
			var r = this,
				n = e.series,
				l = e.categories;
			n = h(n, e, a);
			var s = e.animation ? e.duration : 0;
			r.animationInstance && r.animationInstance.stop();
			var c = null;
			if ("candle" == t) {
				var d = qt({}, e.extra.candle.average);
				d.show ? (c = i(d.day, d.name, d.color, n[0].data), c = h(c, e, a), e.seriesMA = c) : c = e.seriesMA ? e.seriesMA = h(e.seriesMA, e, a) : n
			} else c = n;
			e._series_ = n = A(n), e.area = [, , , , ];
			for (var x = 0; 4 > x; x++) e.area[x] = e.padding[x];
			var p = M(c, e, a, e.chartData),
				g = p.area.wholeHeight,
				f = p.area.wholeWidth;
			switch (e.legend.position) {
				case "top":
					e.area[0] += g;
					break;
				case "bottom":
					e.area[2] += g;
					break;
				case "left":
					e.area[3] += f;
					break;
				case "right":
					e.area[1] += f
			}
			var u = {},
				y = 0;
			if ("line" === e.type || "column" === e.type || "area" === e.type || "mix" === e.type || "candle" === e.type) {
				if (u = V(n, e, a), y = u.yAxisWidth, e.yAxis.showTitle) {
					for (var v = 0, m = 0; m < e.yAxis.data.length; m++) v = Math.max(v, e.yAxis.data[m].titleFontSize ? e.yAxis.data[m].titleFontSize : a.fontSize);
					e.area[0] += (v + 6) * e.pixelRatio
				}
				for (var b = 0, S = 0, T = 0; T < y.length; T++) "left" == y[T].position ? (e.area[3] += 0 < S ? y[T].width + e.yAxis.padding : y[T].width, S += 1) : (e.area[1] += 0 < b ? y[T].width + e.yAxis.padding : y[T].width, b += 1)
			} else a.yAxisWidth = y;
			if (e.chartData.yAxisData = u, e.categories && e.categories.length) {
				e.chartData.xAxisData = J(e.categories, e, a);
				var P = z(e.categories, e, a, e.chartData.xAxisData.eachSpacing),
					w = P.xAxisHeight,
					_ = P.angle;
				a.xAxisHeight = w, a._xAxisTextAngle_ = _, e.area[2] += w, e.chartData.categoriesData = P
			} else if ("line" === e.type || "area" === e.type || "points" === e.type) {
				e.chartData.xAxisData = O(n, e, a);
				var F = z(l = e.chartData.xAxisData.rangesFormat, e, a, e.chartData.xAxisData.eachSpacing),
					L = F.xAxisHeight,
					D = F.angle;
				a.xAxisHeight = L, a._xAxisTextAngle_ = D, e.area[2] += L, e.chartData.categoriesData = F
			} else e.chartData.xAxisData = {
				xAxisPoints: []
			};
			if (e.enableScroll && "right" == e.xAxis.scrollAlign && void 0 === e._scrollDistance_) {
				var R = 0,
					k = e.chartData.xAxisData.xAxisPoints,
					C = e.chartData.xAxisData.startX;
				R = e.chartData.xAxisData.endX - C - e.chartData.xAxisData.eachSpacing * (k.length - 1), r.scrollOption = {
					currentOffset: R,
					startTouchX: R,
					distance: 0,
					lastMoveTime: 0
				}, e._scrollDistance_ = R
			}
			switch (("pie" === t || "ring" === t || "rose" === t) && (a._pieTextMaxLength_ = !1 === e.dataLabel ? 0 : j(c)), t) {
				case "word":
					var W = qt({}, {
						type: "normal",
						autoColors: !0
					}, e.extra.word);
					(1 == e.updateData || null == e.updateData) && (e.chartData.wordCloudData = It(e, W.type)), this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), Et(n, e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "map":
					o.clearRect(0, 0, e.width, e.height), Ot(n, e, a, o);
					break;
				case "funnel":
					this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.funnelData = Bt(n, e, a, o, t), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "line":
					this.animationInstance = new Xt({
						timing: "easeIn",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
							var i = yt(n, e, a, o, t),
								r = i.xAxisPoints,
								s = i.calPoints,
								h = i.eachSpacing;
							e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t, h, r), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "mix":
					this.animationInstance = new Xt({
						timing: "easeIn",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
							var i = vt(n, e, a, o, t),
								r = i.xAxisPoints,
								s = i.calPoints,
								h = i.eachSpacing;
							e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t, h, r), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "column":
					this.animationInstance = new Xt({
						timing: "easeIn",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
							var i = gt(n, e, a, o, t),
								r = i.xAxisPoints,
								s = i.calPoints,
								h = i.eachSpacing;
							e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t, h, r), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "area":
					this.animationInstance = new Xt({
						timing: "easeIn",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
							var i = ut(n, e, a, o, t),
								r = i.xAxisPoints,
								s = i.calPoints,
								h = i.eachSpacing;
							e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t, h, r), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "ring":
				case "pie":
					this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.pieData = Pt(n, e, a, o, t), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "rose":
					this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.pieData = wt(n, e, a, o, t), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "radar":
					this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.radarData = Lt(n, e, a, o, t), Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "arcbar":
					this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.arcbarData = _t(n, e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "gauge":
					this.animationInstance = new Xt({
						timing: "easeInOut",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), e.chartData.gaugeData = Ft(l, n, e, a, o, t), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					});
					break;
				case "candle":
					this.animationInstance = new Xt({
						timing: "easeIn",
						duration: s,
						onProcess: function (t) {
							o.clearRect(0, 0, e.width, e.height), e.rotate && it(o, e), At(l, e, a, o), bt(l, e, a, o);
							var i = ft(n, c, e, a, o, t),
								r = i.xAxisPoints,
								s = i.calPoints,
								h = i.eachSpacing;
							e.chartData.xAxisPoints = r, e.chartData.calPoints = s, e.chartData.eachSpacing = h, St(n, e, a, o), !1 !== e.enableMarkLine && 1 === t && ct(e, a, o), c ? Tt(c, e, a, o, e.chartData) : Tt(e.series, e, a, o, e.chartData), mt(e, a, o, t, h, r), Nt(e, o)
						},
						onAnimationFinish: function () {
							r.event.trigger("renderComplete")
						}
					})
			}
		}

		function jt() {
			this.events = {}
		}
		var Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			$t = {
				yAxisWidth: 15,
				yAxisSplit: 5,
				xAxisHeight: 15,
				xAxisLineHeight: 15,
				legendHeight: 15,
				yAxisTitleWidth: 15,
				padding: [10, 10, 10, 10],
				pixelRatio: 1,
				rotate: !1,
				columePadding: 3,
				fontSize: 13,
				dataPointShape: ["circle", "circle", "circle", "circle"],
				colors: ["#1890ff", "#2fc25b", "#facc14", "#f04864", "#8543e0", "#90ed7d"],
				pieChartLinePadding: 15,
				pieChartTextPadding: 5,
				xAxisTextPadding: 3,
				titleColor: "#333333",
				titleFontSize: 20,
				subtitleColor: "#999999",
				subtitleFontSize: 15,
				toolTipPadding: 3,
				toolTipBackground: "#000000",
				toolTipOpacity: .7,
				toolTipLineHeight: 20,
				radarLabelTextMargin: 15,
				gaugeLabelTextMargin: 15
			},
			qt = function (t) {
				function e(t, i) {
					for (var a in i) t[a] = t[a] && "[object Object]" === t[a].toString() ? e(t[a], i[a]) : t[a] = i[a];
					return t
				}
				for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
				if (null == t) throw new TypeError("Cannot convert undefined or null to object");
				return !a || 0 >= a.length ? t : (a.forEach(function (i) {
					t = e(t, i)
				}), t)
			},
			Jt = {
				toFixed: function (t, e) {
					return e = e || 2, this.isFloat(t) && (t = t.toFixed(e)), t
				},
				isFloat: function (t) {
					return 0 != t % 1
				},
				approximatelyEqual: function (t, e) {
					return 1e-10 > Math.abs(t - e)
				},
				isSameSign: function (t, e) {
					var i = Math.abs;
					return i(t) === t && i(e) === e || i(t) !== t && i(e) !== e
				},
				isSameXCoordinateArea: function (t, e) {
					return this.isSameSign(t.x, e.x)
				},
				isCollision: function (t, e) {
					return t.end = {}, t.end.x = t.start.x + t.width, t.end.y = t.start.y - t.height, e.end = {}, e.end.x = e.start.x + e.width, e.end.y = e.start.y - e.height, !(e.start.x > t.end.x || e.end.x < t.start.x || e.end.y > t.start.y || e.start.y < t.end.y)
				}
			},
			Zt = {
				easeIn: function (t) {
					return Math.pow(t, 3)
				},
				easeOut: function (t) {
					return Math.pow(t - 1, 3) + 1
				},
				easeInOut: function (t) {
					var e = Math.pow;
					return 1 > (t /= .5) ? .5 * e(t, 3) : .5 * (e(t - 2, 3) + 2)
				},
				linear: function (t) {
					return t
				}
			};
		Xt.prototype.stop = function () {
			this.isStop = !0
		}, jt.prototype.addEventListener = function (t, e) {
			this.events[t] = this.events[t] || [], this.events[t].push(e)
		}, jt.prototype.trigger = function () {
			for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			var a = e[0],
				o = e.slice(1);
			!this.events[a] || this.events[a].forEach(function (t) {
				try {
					t.apply(null, o)
				} catch (t) {
					console.error(t)
				}
			})
		};
		var Kt = function (t) {
			t.pixelRatio = t.pixelRatio ? t.pixelRatio : 1, t.fontSize = t.fontSize ? t.fontSize * t.pixelRatio : 13 * t.pixelRatio, t.title = qt({}, t.title), t.subtitle = qt({}, t.subtitle), t.duration = t.duration ? t.duration : 1e3, t.yAxis = qt({}, {
				data: [],
				showTitle: !1,
				disabled: !1,
				disableGrid: !1,
				splitNumber: 5,
				gridType: "solid",
				dashLength: 4 * t.pixelRatio,
				gridColor: "#cccccc",
				padding: 10,
				fontColor: "#666666"
			}, t.yAxis), t.yAxis.dashLength *= t.pixelRatio, t.yAxis.padding *= t.pixelRatio, t.xAxis = qt({}, {
				rotateLabel: !1,
				type: "calibration",
				gridType: "solid",
				dashLength: 4,
				scrollAlign: "left",
				boundaryGap: "center",
				axisLine: !0,
				axisLineColor: "#cccccc"
			}, t.xAxis), t.xAxis.dashLength *= t.pixelRatio, t.legend = qt({}, {
				show: !0,
				position: "bottom",
				float: "center",
				backgroundColor: "rgba(0,0,0,0)",
				borderColor: "rgba(0,0,0,0)",
				borderWidth: 0,
				padding: 5,
				margin: 5,
				itemGap: 10,
				fontSize: t.fontSize,
				lineHeight: t.fontSize,
				fontColor: "#333333",
				format: {},
				hiddenColor: "#CECECE"
			}, t.legend), t.legend.borderWidth *= t.pixelRatio, t.legend.itemGap *= t.pixelRatio, t.legend.padding *= t.pixelRatio, t.legend.margin *= t.pixelRatio, t.extra = qt({}, t.extra), t.rotate = !!t.rotate, t.animation = !!t.animation, t.rotate = !!t.rotate;
			var e = JSON.parse(JSON.stringify($t));
			if (e.colors = t.colors ? t.colors : e.colors, e.yAxisTitleWidth = !0 !== t.yAxis.disabled && t.yAxis.title ? e.yAxisTitleWidth : 0, ("pie" == t.type || "ring" == t.type) && (e.pieChartLinePadding = !1 === t.dataLabel ? 0 : t.extra.pie.labelWidth * t.pixelRatio || e.pieChartLinePadding * t.pixelRatio), "rose" == t.type && (e.pieChartLinePadding = !1 === t.dataLabel ? 0 : t.extra.rose.labelWidth * t.pixelRatio || e.pieChartLinePadding * t.pixelRatio), e.pieChartTextPadding = !1 === t.dataLabel ? 0 : e.pieChartTextPadding * t.pixelRatio, e.yAxisSplit = t.yAxis.splitNumber ? t.yAxis.splitNumber : $t.yAxisSplit, e.rotate = t.rotate, t.rotate) {
				var i = t.width,
					a = t.height;
				t.width = a, t.height = i
			}
			t.padding = t.padding ? t.padding : e.padding;
			for (var o = 0; 4 > o; o++) t.padding[o] *= t.pixelRatio;
			e.yAxisWidth = $t.yAxisWidth * t.pixelRatio, e.xAxisHeight = $t.xAxisHeight * t.pixelRatio, t.enableScroll && t.xAxis.scrollShow && (e.xAxisHeight += 6 * t.pixelRatio), e.xAxisLineHeight = $t.xAxisLineHeight * t.pixelRatio, e.fontSize = t.fontSize, e.titleFontSize = $t.titleFontSize * t.pixelRatio, e.subtitleFontSize = $t.subtitleFontSize * t.pixelRatio, e.toolTipPadding = $t.toolTipPadding * t.pixelRatio, e.toolTipLineHeight = $t.toolTipLineHeight * t.pixelRatio, e.columePadding = $t.columePadding * t.pixelRatio, t.$this = t.$this ? t.$this : this, this.context = my.createCanvasContext(t.canvasId, t.$this), t.chartData = {}, this.event = new jt, this.scrollOption = {
				currentOffset: 0,
				startTouchX: 0,
				distance: 0,
				lastMoveTime: 0
			}, this.opts = t, this.config = e, Gt.call(this, t.type, t, e, this.context)
		};
		Kt.prototype.updateData = function () {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			switch (this.opts = qt({}, this.opts, t), this.opts.updateData = !0, t.scrollPosition || "current") {
				case "current":
					this.opts._scrollDistance_ = this.scrollOption.currentOffset;
					break;
				case "left":
					this.opts._scrollDistance_ = 0, this.scrollOption = {
						currentOffset: 0,
						startTouchX: 0,
						distance: 0,
						lastMoveTime: 0
					};
					break;
				case "right":
					var e = V(this.opts.series, this.opts, this.config).yAxisWidth;
					this.config.yAxisWidth = e;
					var i = 0,
						a = J(this.opts.categories, this.opts, this.config),
						o = a.xAxisPoints,
						r = a.startX;
					i = a.endX - r - a.eachSpacing * (o.length - 1), this.scrollOption = {
						currentOffset: i,
						startTouchX: i,
						distance: 0,
						lastMoveTime: 0
					}, this.opts._scrollDistance_ = i
			}
			Gt.call(this, this.opts.type, this.opts, this.config, this.context)
		}, Kt.prototype.zoom = function () {
			var t = Math.round,
				e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.opts.xAxis.itemCount;
			if (!0 === this.opts.enableScroll) {
				var i = t(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + t(this.opts.xAxis.itemCount / 2);
				this.opts.animation = !1, this.opts.xAxis.itemCount = e.itemCount;
				var a = V(this.opts.series, this.opts, this.config).yAxisWidth;
				this.config.yAxisWidth = a;
				var o = 0,
					r = J(this.opts.categories, this.opts, this.config),
					n = r.xAxisPoints,
					l = r.startX,
					s = r.endX,
					h = r.eachSpacing,
					c = s - l,
					d = c - h * (n.length - 1);
				0 < (o = c / 2 - h * i) && (o = 0), o < d && (o = d), this.scrollOption = {
					currentOffset: o,
					startTouchX: o,
					distance: 0,
					lastMoveTime: 0
				}, this.opts._scrollDistance_ = o, Gt.call(this, this.opts.type, this.opts, this.config, this.context)
			} else console.log("请启用滚动条后使用！")
		}, Kt.prototype.stopAnimation = function () {
			this.animationInstance && this.animationInstance.stop()
		}, Kt.prototype.addEventListener = function (t, e) {
			this.event.addEventListener(t, e)
		}, Kt.prototype.getCurrentDataIndex = function (t) {
			var e = null;
			if (e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) {
				var i = g(e, this.opts, t);
				return "pie" === this.opts.type || "ring" === this.opts.type || "rose" === this.opts.type ? R({
					x: i.x,
					y: i.y
				}, this.opts.chartData.pieData) : "radar" === this.opts.type ? _({
					x: i.x,
					y: i.y
				}, this.opts.chartData.radarData, this.opts.categories.length) : "funnel" === this.opts.type ? F({
					x: i.x,
					y: i.y
				}, this.opts.chartData.funnelData) : "map" === this.opts.type ? D({
					x: i.x,
					y: i.y
				}, this.opts) : "word" === this.opts.type ? L({
					x: i.x,
					y: i.y
				}, this.opts.chartData.wordCloudData) : S({
					x: i.x,
					y: i.y
				}, this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset))
			}
			return -1
		}, Kt.prototype.getLegendDataIndex = function (t) {
			var e = null;
			if (e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) {
				var i = g(e, this.opts, t);
				return T({
					x: i.x,
					y: i.y
				}, this.opts.chartData.legendData)
			}
			return -1
		}, Kt.prototype.touchLegend = function (t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				i = null;
			if (i = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) {
				g(i, this.opts, t);
				var a = this.getLegendDataIndex(t);
				0 <= a && (this.opts.series[a].show = !this.opts.series[a].show, this.opts.animation = !!e.animation, this.opts._scrollDistance_ = this.scrollOption.currentOffset, Gt.call(this, this.opts.type, this.opts, this.config, this.context))
			}
		}, Kt.prototype.showToolTip = function (t) {
			var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
				i = null;
			(i = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) || console.log("touchError");
			var a = g(i, this.opts, t),
				o = this.scrollOption.currentOffset,
				r = qt({}, this.opts, {
					_scrollDistance_: o,
					animation: !1
				});
			if ("line" === this.opts.type || "area" === this.opts.type || "column" === this.opts.type) {
				if (-1 < (d = this.getCurrentDataIndex(t)) && 0 !== (h = f(this.opts.series, d)).length) {
					l = (s = v(h, this.opts.chartData.calPoints, d, this.opts.categories, e)).textList;
					(c = s.offset).y = a.y, r.tooltip = {
						textList: l,
						offset: c,
						option: e,
						index: d
					}
				}
				Gt.call(this, r.type, r, this.config, this.context)
			}
			if ("mix" === this.opts.type) {
				if (-1 < (d = this.getCurrentDataIndex(t))) {
					var o = this.scrollOption.currentOffset,
						r = qt({}, this.opts, {
							_scrollDistance_: o,
							animation: !1
						});
					if (0 !== (h = f(this.opts.series, d)).length) {
						var n = m(h, this.opts.chartData.calPoints, d, this.opts.categories, e),
							l = n.textList;
						(c = n.offset).y = a.y, r.tooltip = {
							textList: l,
							offset: c,
							option: e,
							index: d
						}
					}
				}
				Gt.call(this, r.type, r, this.config, this.context)
			}
			if ("candle" === this.opts.type) {
				if (-1 < (d = this.getCurrentDataIndex(t))) {
					var o = this.scrollOption.currentOffset,
						r = qt({}, this.opts, {
							_scrollDistance_: o,
							animation: !1
						});
					if (0 !== (h = f(this.opts.series, d)).length) {
						var s = b(this.opts.series[0].data, h, this.opts.chartData.calPoints, d, this.opts.categories, this.opts.extra.candle, e),
							l = s.textList;
						(c = s.offset).y = a.y, r.tooltip = {
							textList: l,
							offset: c,
							option: e,
							index: d
						}
					}
				}
				Gt.call(this, r.type, r, this.config, this.context)
			}
			if ("pie" === this.opts.type || "ring" === this.opts.type || "rose" === this.opts.type || "funnel" === this.opts.type) {
				if (-1 < (d = this.getCurrentDataIndex(t))) {
					var o = this.scrollOption.currentOffset,
						r = qt({}, this.opts, {
							_scrollDistance_: o,
							animation: !1
						}),
						h = this.opts._series_[d],
						l = [{
							text: e.format ? e.format(h) : h.name + ": " + h.data,
							color: h.color
						}],
						c = {
							x: a.x,
							y: a.y
						};
					r.tooltip = {
						textList: l,
						offset: c,
						option: e,
						index: d
					}
				}
				Gt.call(this, r.type, r, this.config, this.context)
			}
			if ("map" === this.opts.type || "word" === this.opts.type) {
				if (-1 < (d = this.getCurrentDataIndex(t))) {
					var o = this.scrollOption.currentOffset,
						r = qt({}, this.opts, {
							_scrollDistance_: o,
							animation: !1
						}),
						h = this.opts._series_[d],
						l = [{
							text: e.format ? e.format(h) : h.properties.name,
							color: h.color
						}],
						c = {
							x: a.x,
							y: a.y
						};
					r.tooltip = {
						textList: l,
						offset: c,
						option: e,
						index: d
					}
				}
				r.updateData = !1, Gt.call(this, r.type, r, this.config, this.context)
			}
			if ("radar" === this.opts.type) {
				var d = this.getCurrentDataIndex(t);
				if (-1 < d) {
					var o = this.scrollOption.currentOffset,
						r = qt({}, this.opts, {
							_scrollDistance_: o,
							animation: !1
						});
					if (0 !== (h = f(this.opts.series, d)).length) {
						var l = h.map(function (t) {
								return {
									text: e.format ? e.format(t) : t.name + ": " + t.data,
									color: t.color
								}
							}),
							c = {
								x: a.x,
								y: a.y
							};
						r.tooltip = {
							textList: l,
							offset: c,
							option: e,
							index: d
						}
					}
				}
				Gt.call(this, r.type, r, this.config, this.context)
			}
		}, Kt.prototype.translate = function (t) {
			this.scrollOption = {
				currentOffset: t,
				startTouchX: t,
				distance: 0,
				lastMoveTime: 0
			};
			var e = qt({}, this.opts, {
				_scrollDistance_: t,
				animation: !1
			});
			Gt.call(this, this.opts.type, e, this.config, this.context)
		}, Kt.prototype.scrollStart = function (t) {
			var e = null,
				i = g(e = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0], this.opts, t);
			e && !0 === this.opts.enableScroll && (this.scrollOption.startTouchX = i.x)
		}, Kt.prototype.scroll = function (t) {
			0 === this.scrollOption.lastMoveTime && (this.scrollOption.lastMoveTime = Date.now());
			var e = this.opts.extra.touchMoveLimit || 20,
				i = Date.now();
			if (!(i - this.scrollOption.lastMoveTime < Math.floor(1e3 / e))) {
				this.scrollOption.lastMoveTime = i;
				var o = null;
				if ((o = t.changedTouches ? t.changedTouches[0] : t.mp.changedTouches[0]) && !0 === this.opts.enableScroll) {
					var r;
					r = g(o, this.opts, t).x - this.scrollOption.startTouchX;
					var n = this.scrollOption.currentOffset,
						l = a(this, n + r, this.opts.chartData, this.config, this.opts);
					this.scrollOption.distance = r = l - n;
					var s = qt({}, this.opts, {
						_scrollDistance_: n + r,
						animation: !1
					});
					return Gt.call(this, s.type, s, this.config, this.context), n + r
				}
			}
		}, Kt.prototype.scrollEnd = function () {
			if (!0 === this.opts.enableScroll) {
				var t = this.scrollOption,
					e = t.currentOffset,
					i = t.distance;
				this.scrollOption.currentOffset = e + i, this.scrollOption.distance = 0
			}
		}, "object" == ("undefined" == typeof module ? "undefined" : Yt(module)) && "object" == Yt(module.exports) && (module.exports = Kt);
	});
	define("app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("./utils/http.js"),
			t = require("./utils/auth.js"),
			a = require("./utils/client.js"),
			r = require("./utils/constant.js"),
			s = require("./utils/location.js");
		App({
			userInfo: null,
			firstShow: !0,
			chargeStatus: r.NO_CHARGING,
			chargeStatusCallbacks: [],
			chargeStatusData: {},
			chagePageShowing: !1,
			listenDone: !1,
			lastChargeDoneEmitedTime: 0,
			ermpileNo: "",
			appName: "",
			onLaunch: function (a) {
				var r = this;
				if ("alipay" === wx.__target__) {
					if (wx.setStorageSync("miniType", "2"), console.log("I am alipay mini-program."), a.query && a.query.qrCode) {
						var s = a.query.qrCode.split("?")[0];
						s = s.substring(s.lastIndexOf("/") + 1), this.ermpileNo = s
					}
				} else wx.setStorageSync("miniType", "1"), console.log("I am wechat mini-program.");
				wx.getNetworkType({
					success: function (e) {
						wx.setStorageSync("networkType", e.networkType)
					}
				}), wx.onNetworkStatusChange(function (e) {
					wx.setStorageSync("networkType", e.networkType)
				}), e.get({
					url: "/user/brief-info",
					requireAuth: !0,
					success: function (e) {
						if (200 === e.statusCode) {
							var a = e.data;
							t.saveUserInfo(a), "alipay" === wx.__target__ && t.setAuthorized(), r.recoverChargeStatus()
						} else wx.removeStorageSync("user-info"), wx.removeStorageSync("recordId"), wx.removeStorageSync("curPileId"), wx.removeStorageSync("curPileTimeInfo")
					},
					fail: function (e) {
						wx.removeStorageSync("user-info"), wx.removeStorageSync("recordId"), wx.removeStorageSync("curPileId"), wx.removeStorageSync("curPileTimeInfo")
					}
				}), this.firstShow = !0
			},
			onShow: function () {
				var e = this;
				s.assertCanUse();
				var a = wx.getStorageSync("miniType");
				this.firstShow || "1" != a || t.checkSession(function () {
					e.recoverChargeStatus()
				}), this.firstShow || "2" != a || this.recoverChargeStatus(), this.firstShow = !1
			},
			startListenStompMessage: function (e) {
				var t = this;
				this.getChargeStatus() != r.WAIT_NOTICE && this.getChargeStatus() != r.CHARG_STARTING || a.topic("/app-charge-started", function (e) {
					0 == e.status ? t.updateChargeStatus(r.WAIT_CHARGE, e) : 1 == e.status ? t.updateChargeStatus(r.CHARGING, e) : t.updateChargeStatus(r.CHARG_FINISH, e)
				}), a.topic("/app-charge-power", function (e) {
					t.updateChargeStatus(r.CHARG_POWER, e)
				}), a.topic("/app-charge-payload", function (e) {
					t.updateChargeStatus(r.CHARGING, e)
				}), a.topic("/app-charge-suspend", function (e) {
					t.updateChargeStatus(r.CHARG_SUSPEND, e)
				}), a.topic("/app-charge-continue", function (e) {
					t.updateChargeStatus(r.CHARGING, e)
				}), a.topic("/app-charge-done", function (e) {
					var a = Date.now() / 1e3;
					a - t.lastChargeDoneEmitedTime > 5 && (t.updateChargeStatus(r.CHARG_FINISH, e), t.lastChargeDoneEmitedTime = a)
				}), a.start(wx.getStorageSync("user-info").id, function () {
					t.listenDoneCallback && t.listenDoneCallback(), t.listenDone = !0
				}), a.onStoped(function () {
					t.listenDone = !1
				}), wx.setStorageSync("recordId", e)
			},
			stopListenStompMessage: function () {
				wx.removeStorageSync("recordId"), wx.removeStorageSync("expectedconsume"), this.resetChargeStatus(), a.stop()
			},
			resetChargeStatus: function () {
				this.clearChargeStatusCallbacks(), this.updateChargeStatus(r.NO_CHARGING)
			},
			getChargeStatus: function () {
				return this.chargeStatus
			},
			updateChargeStatus: function (e, t) {
				this.chargeStatus = e, this.chargeStatusCallbacks.forEach(function (a) {
					a.status == e && a.callback && a.callback(t)
				}), t && (this.chargeStatusData[e] = t), this.checkChargeStatusAndPage()
			},
			checkChargeStatusAndPage: function () {
				this.chargeStatus != r.CHARG_SUSPEND || this.chagePageShowing || wx.redirectTo({
					url: "/pages/charge/control/index"
				})
			},
			registeChargeStatusCallback: function (e, t) {
				this.getChargeStatus() == e && t(this.chargeStatusData[e]), this.chargeStatusCallbacks.push({
					status: e,
					callback: t
				})
			},
			registeListenDoneCallback: function (e) {
				this.listenDone ? e() : this.listenDoneCallback = e
			},
			clearChargeStatusCallbacks: function () {
				this.chargeStatusCallbacks.splice(0, this.chargeStatusCallbacks.length), this.listenDoneCallback = null, this.listenDone = !1
			},
			setChagePageShowing: function (e) {
				this.chagePageShowing = e
			},
			recoverChargeStatus: function () {
				var t = this,
					a = function (e) {
						var a = e.data.id;
						wx.setStorageSync("chargeRecord", encodeURIComponent(JSON.stringify(e.data)));
						var s = e.data.status;
						1 == s && (t.updateChargeStatus(r.CHARGING), t.startListenStompMessage(a)), 2 == s && t.updateChargeStatus(r.CHARG_FINISH, {
							recordId: a,
							message: "充电已完成"
						}), 4 == s && (t.updateChargeStatus(r.CHARG_SUSPEND, {
							recordId: a,
							message: "充电已暂停"
						}), t.startListenStompMessage(a))
					},
					s = wx.getStorageSync("recordId");
				s ? e.get({
					url: "/charge-record/show/" + s,
					success: a
				}) : e.get({
					url: "/charge-record/mine",
					requireAuth: !0,
					success: function (e) {
						200 == e.statusCode && a(e)
					}
				})
			},
			getRect: function (e, t) {
				var a = wx.createSelectorQuery();
				return new Promise(function (r) {
					a[t ? "selectAll" : "select"](e).boundingClientRect(function (e) {
						t && Array.isArray(e) && e.length && r(e), !t && e && r(e)
					}).exec()
				})
			},
			getConfig: function () {
				return new Promise(function (t) {
					e.get({
						url: "/platform/index",
						success: function (e) {
							if (200 === e.statusCode) {
								var a = {};
								a.config = e.data, a.appName = "1" === wx.getStorageSync("miniType") ? e.data.wxAppletName : e.data.zfbAppletName, t(a)
							}
						}
					})
				})
			}
		});
	});
	require("app.js");
	__wxRoute = 'comps/register/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'comps/register/index.js';
	define("comps/register/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../utils/http.js"),
			e = require("../../utils/auth.js"),
			i = getApp();
		Component({
			properties: {
				registerType: {
					type: String,
					value: "1"
				}
			},
			data: {
				time: "获取验证码",
				VerificationCode: !0,
				currentTime: 60,
				phone: "",
				isCode: !1,
				isShow: !0,
				title: "",
				buttonText: ""
			},
			interval: null,
			captchaClick: !1,
			attached: function () {
				var t = wx.getStorageSync("mobile");
				t && (this.mobile = t, this.setData({
					phone: t
				}));
				var e = "",
					i = "",
					a = !1,
					o = !0;
				switch (this.data.registerType.toString()) {
					case "1":
						e = "为了您的账户安全,请绑定手机号!", i = "立即绑定", "alipay" === wx.__target__ && (a = !0, o = !1);
						break;
					case "2":
						e = "更换手机号!", i = "立即绑定", a = !0, o = !1;
						break;
					case "3":
						e = "切换账号!", i = "立即切换", a = !0, o = !1
				}
				this.setData({
					title: e,
					buttonText: i,
					isCode: a,
					isShow: o
				})
			},
			ready: function () {},
			methods: {
				getVerificationCode: function (t) {
					var e = this.mobile;
					e ? /^1\d{10}$/.test(e) ? this.captchaClick || "countdownnow" == t.currentTarget.id || (this.captchaClick = !0, this.getCode()) : wx.showToast({
						title: "手机号码格式不正确",
						icon: "none",
						duration: 2e3
					}) : wx.showToast({
						title: "获取验证码之前请先填写手机号",
						icon: "none",
						duration: 2e3
					})
				},
				getCode: function (e) {
					var i = this,
						a = this.mobile;
					t.post({
						url: "/comm/captcha",
						requireAuth: !0,
						showLoading: !0,
						loadingText: "正在获取验证码...",
						data: {
							phone: a
						},
						success: function (t) {
							if (200 === t.statusCode) {
								var e = i.data.currentTime;
								i.interval = setInterval(function () {
									e--, i.setData({
										time: e + "秒",
										VerificationCode: !1
									}), e <= 0 && (clearInterval(i.interval), i.setData({
										time: "重新发送",
										currentTime: 60,
										VerificationCode: !0
									}), i.captchaClick = !1)
								}, 1e3), wx.showToast({
									title: "发送短信验证码成功，请注意查看您的手机",
									icon: "none",
									duration: 2e3
								})
							} else wx.showToast({
								title: "请联系客服人员",
								icon: "none",
								duration: 2e3
							}), i.captchaClick = !1
						},
						fail: function (t) {
							wx.showToast({
								title: "请联系客服人员",
								icon: "none",
								duration: 2e3
							}), i.captchaClick = !1
						}
					})
				},
				getPhoneNumber: function (e) {
					var i = this;
					console.log(e), "getPhoneNumber:fail user deny" == e.detail.errMsg ? wx.showToast({
						title: "未授权",
						icon: "none",
						duration: 2e3
					}) : t.get({
						url: "/user/wx-user-phone",
						requireAuth: !0,
						data: {
							encryptedData: e.detail.encryptedData,
							iv: e.detail.iv
						},
						success: function (t) {
							200 === t.statusCode && "" != t.data.phoneNumber ? (i.setData({
								phone: t.data.phoneNumber
							}), wx.showToast({
								title: "同意授权",
								icon: "none",
								duration: 2e3
							})) : (wx.showToast({
								title: "未获取到微信手机号，请手动绑定",
								icon: "none",
								duration: 2e3
							}), i.setData({
								isCode: !0,
								isShow: !1
							}))
						}
					})
				},
				formSubmit: function (t) {
					var e = t.detail.value,
						i = this.data.isCode,
						a = this.data.isShow;
					if (1 == i && 0 == a) {
						if (!e.phone.trim()) return void wx.showToast({
							title: "手机号码不能为空",
							icon: "none",
							duration: 2e3
						});
						if (!/^1\d{10}$/.test(e.phone)) return void wx.showToast({
							title: "手机号码格式不正确",
							icon: "none",
							duration: 2e3
						});
						if (!e.captcha.trim()) return void wx.showToast({
							title: "验证码不能为空",
							icon: "none",
							duration: 2e3
						})
					} else if (e.phone = this.data.phone, !this.data.phone.trim()) return void wx.showToast({
						title: "手机号码不能为空",
						icon: "none",
						duration: 2e3
					});
					var o = wx.getStorageSync("user-info");
					switch (this.data.registerType.toString()) {
						case "1":
							this.doRegister(o, e);
							break;
						case "2":
							this.replacePhone(o, e);
							break;
						case "3":
							this.changeAccount(o, e)
					}
				},
				doRegister: function (e, i) {
					var a = this;
					i.nickname = e.nickName, i.avatar = e.avatarUrl;
					var o = void 0;
					o = "alipay" === wx.__target__ ? "/user/zfb-save" : "/user/wx-save", t.post({
						url: o,
						showLoading: !0,
						loadingText: "正在注册...",
						data: i,
						requireAuth: !0,
						success: function (t) {
							200 === t.statusCode ? (wx.showToast({
								title: "注册用户成功",
								icon: "success",
								duration: 2e3
							}), a.checkBriefInfo()) : wx.showToast({
								title: t.data,
								icon: "none",
								duration: 2e3
							})
						},
						fail: function (t) {
							wx.showToast({
								title: t.data,
								icon: "none",
								duration: 2e3
							})
						}
					})
				},
				replacePhone: function (e, i) {
					var a = this;
					t.post({
						url: "/user/changePhone",
						showLoading: !0,
						loadingText: "正在更换手机号...",
						requireAuth: !0,
						data: i,
						success: function (t) {
							200 == t.statusCode ? (clearInterval(a.interval), a.triggerEvent("onRegisteSuccess")) : wx.showModal({
								title: t.data,
								content: "",
								showCancel: !1,
								success: function (t) {
									t.confirm && this.setData({
										time: "重新发送",
										VerificationCode: !0
									})
								}
							})
						},
						fail: function (t) {
							wx.showModal({
								title: t.data,
								content: "",
								showCancel: !1,
								success: function (t) {
									t.confirm && this.setData({
										time: "重新发送",
										VerificationCode: !0
									})
								}
							})
						}
					})
				},
				changeAccount: function (e, a) {
					var o = this;
					a.client = wx.getStorageSync("miniType"), a.nickname = e.nickname, a.avatar = e.avatar, t.post({
						url: "/user/switchUser",
						showLoading: !0,
						loadingText: "正在切换账户...",
						requireAuth: !0,
						data: a,
						success: function (t) {
							200 == t.statusCode ? (i.stopListenStompMessage(), i.recoverChargeStatus(), wx.showToast({
								title: "账号切换成功",
								icon: "none",
								duration: 2e3
							}), clearInterval(o.interval), o.triggerEvent("onRegisteSuccess")) : wx.showModal({
								title: t.data,
								content: "",
								showCancel: !1,
								success: function (t) {
									t.confirm && (clearInterval(this.interval), this.setData({
										time: "重新发送",
										VerificationCode: !0
									}))
								}
							})
						},
						fail: function (t) {
							wx.showModal({
								title: t.data,
								content: "",
								showCancel: !1,
								success: function (t) {
									t.confirm && (clearInterval(this.interval), this.setData({
										time: "重新发送",
										VerificationCode: !0
									}))
								}
							})
						}
					})
				},
				checkBriefInfo: function () {
					var i = this;
					t.get({
						url: "/user/brief-info",
						requireAuth: !0,
						success: function (t) {
							if (200 === t.statusCode) {
								var a = t.data;
								e.saveUserInfo(a), i.triggerEvent("onRegisteSuccess")
							}
						}
					})
				},
				mobileInputEvent: function (t) {
					this.mobile = t.detail.value
				},
				closeDialog: function () {
					this.triggerEvent("shouldCloseRegistDialog")
				}
			}
		});
	});
	require("comps/register/index.js");
	__wxRoute = 'pages/index/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/index.js';
	define("pages/index/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = function () {
				function e(e, t) {
					var i = [],
						n = !0,
						a = !1,
						r = void 0;
					try {
						for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
					} catch (e) {
						a = !0, r = e
					} finally {
						try {
							!n && s.return && s.return()
						} finally {
							if (a) throw r
						}
					}
					return i
				}
				return function (t, i) {
					if (Array.isArray(t)) return t;
					if (Symbol.iterator in Object(t)) return e(t, i);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			t = getApp(),
			i = require("../../utils/http.js"),
			n = require("../../utils/auth.js"),
			a = require("../../utils/util.js"),
			r = require("../../utils/config.js");
		Page({
			data: {
				imgUrls: [],
				indicatorDots: !0,
				autoplay: !0,
				interval: 3e3,
				duration: 1e3,
				circular: !0,
				mask: !1,
				pileNumPopup: !1,
				chargingCount: 0,
				revertCount: 0,
				isShowSystemInfo: !1,
				systemInfo: "",
				showCharge: !1,
				showExchange: !1,
				imgList: ["https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/pic_diyibu.png", "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/pic_dieribu.png", "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/pic_disanbu.png"]
			},
			wrapWidth: 0,
			contentWidth: 0,
			duration: 0,
			speed: 30,
			delay: 1,
			animation: null,
			resetAnimation: null,
			timer: null,
			type: "charge",
			onLoad: function () {
				this.loadData = a.throttle(this.judgePileNum.bind(this), 2e3), this.resetAnimation = wx.createAnimation({
					duration: 0,
					timingFunction: "linear"
				})
			},
			onShow: function () {
				var e = this;
				t.getConfig().then(function (t) {
					e.setData({
						showCharge: !t.config.batteriesSharingEnable,
						showExchange: !!t.config.batteriesSharingEnable
					}), wx.setNavigationBarTitle({
						title: t.appName
					})
				}), this.getSlide(), this.getCount(), this.getSystemNotice()
			},
			onHide: function () {
				this.timer && clearTimeout(this.timer)
			},
			getSlide: function () {
				var e = this;
				i.post({
					url: "/banner/index",
					data: {
						place: 1
					},
					success: function (t) {
						200 == t.statusCode && e.setData({
							imgUrls: t.data
						})
					}
				})
			},
			jumpOther: function (e) {
				var t = e.currentTarget.dataset.ad,
					n = t.type;
				1 != n && (t.operator || i.post({
					url: "/banner/clickBanner",
					requireAuth: !0,
					data: {
						id: t.id,
						outerId: t.outerId
					}
				}), 3 == n ? wx.navigateTo({
					url: "/pages/index/outurl/index?url=" + t.linkUrl
				}) : 2 == n ? wx.navigateToMiniProgram({
					appId: t.linkUrl,
					path: t.miniprogramPage || "pages/index/index",
					success: function (e) {}
				}) : 4 == n && wx.navigateTo({
					url: "/pages/index/rich-text/index?richId=" + t.id
				}))
			},
			getSystemNotice: function () {
				var e = this;
				i.post({
					url: "/banner/index",
					data: {
						place: 3
					},
					success: function (t) {
						console.log(t), 200 == t.statusCode && (0 == t.data.length ? e.setData({
							isShowSystemInfo: !1
						}) : (e.setData({
							isShowSystemInfo: !0,
							systemInfo: t.data[0]
						}), e.noticeAnimation()))
					}
				})
			},
			noticeAnimation: function () {
				var i = this;
				Promise.all([t.getRect(".notice-bar-wrap"), t.getRect(".notice-bar-content")]).then(function (t) {
					var n = e(t, 2),
						a = n[0],
						r = n[1],
						o = a.width / i.speed * 1e3;
					i.wrapWidth = a.width, i.contentWidth = r.width, i.duration = o, i.animation = wx.createAnimation({
						duration: o,
						timingFunction: "linear",
						delay: i.delay
					}), i.scroll()
				})
			},
			scroll: function () {
				var e = this;
				this.timer && clearTimeout(this.timer), this.timer = null, this.setData({
					animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
				}), setTimeout(function () {
					e.setData({
						animationData: e.animation.translateX(-e.contentWidth).step().export()
					})
				}, 20), this.timer = setTimeout(function () {
					e.scroll()
				}, this.duration)
			},
			getCount: function () {
				var e = this;
				i.post({
					url: "/charge-record/record-summary",
					requireAuth: !0,
					success: function (t) {
						200 == t.statusCode && e.setData({
							chargingCount: t.data.chargingCount,
							revertCount: t.data.revertCount
						})
					}
				})
			},
			getpileNo: function (e) {
				this.pileNum = e.detail.value
			},
			sureSearchPile: function () {
				"" != this.pileNum ? (this.type = "charge", this.loadData(this.pileNum)) : wx.showToast({
					title: "请输入桩号",
					icon: "none",
					duration: 2e3
				})
			},
			inputPileNum: function () {
				this.setData({
					mask: !0,
					pileNumPopup: !0
				})
			},
			cancelInputNum: function () {
				this.setData({
					mask: !1,
					pileNumPopup: !1
				}), this.pileNum = ""
			},
			chargingBtn: function () {
				this.isCreateBrief("/pages/index/charging-order/index")
			},
			collecteBtn: function () {
				this.isCreateBrief("/pages/index/collection/index")
			},
			chargeRecordBtn: function () {
				this.isCreateBrief("/pages/index/records/index?count=" + this.data.revertCount)
			},
			exchangeRecord: function () {
				this.isCreateBrief("/pages/index/records/exchange-power/index")
			},
			sweepCode: function (e) {
				var t = this;
				n.authorized(!0) && (this.type = e.currentTarget.dataset.type, wx.scanCode({
					success: function (e) {
						var i = e.path,
							n = e.result,
							o = r.uriPrefix;
						if (i && i.includes("pages/charge/detail/index?scene=")) wx.navigateTo({
							url: "/" + i
						});
						else if (n && (n.includes("api-cdz.ejlchina-app.com") || n.includes("api-mini.cdyun.vip")) && (n.includes(o + "/mini-app/") || n.includes(o + "/mini-app-zfb/"))) {
							if ((l = (c = decodeURIComponent(n)).substring(c.lastIndexOf("/") + 1)).length < 7) {
								var s = c.substring(c.indexOf("mini-app/") + 9, c.lastIndexOf("/")),
									u = s.slice(4, 6) + s.slice(2, 4) + s.slice(0, 2);
								l = "ff" === l ? a.hex2int(u).toString() : a.hex2int(u).toString() + "-" + (a.hex2int(l) + 1)
							}
							t.judgePileNum(l)
						} else if (n && n.includes("weixin.qq.com")) {
							var c = decodeURIComponent(n),
								l = c.substring(c.lastIndexOf("/") + 1);
							t.judgePileNum(l)
						} else wx.showToast({
							title: "请扫正确的小程序码",
							icon: "none",
							duration: 2e3
						})
					}
				}))
			},
			isCreateBrief: function (e) {
				n.authorized(!0) && wx.navigateTo({
					url: e
				})
			},
			judgePileNum: function (e) {
				var t = this;
				if (e.includes("-")) var n = e.split("-")[0],
					a = e.split("-")[1];
				else n = e;
				"exchange" !== this.type ? i.get({
					url: "/charge-pile/show",
					requireAuth: !0,
					data: {
						pileNo: n
					},
					success: function (i) {
						if (200 == i.statusCode) {
							if (i.data.offlineCharge && 2 === i.data.status) return e.includes("-") ? wx.navigateTo({
								url: "/pages/charge/detail/index?scene=" + n + "&pileNumSite=" + a
							}) : wx.navigateTo({
								url: "/pages/charge/detail/index?scene=" + n
							}), void t.cancelInputNum();
							1 === i.data.status ? (e.includes("-") ? wx.navigateTo({
								url: "/pages/charge/detail/index?scene=" + n + "&pileNumSite=" + a
							}) : wx.navigateTo({
								url: "/pages/charge/detail/index?scene=" + n
							}), t.cancelInputNum()) : wx.showToast({
								title: "该桩已离线，暂不支持手机端启动充电",
								icon: "none",
								duration: 2e3
							})
						} else wx.showToast({
							title: "该站点未上线,请更换站点！",
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (e) {
						wx.showToast({
							title: "该站点未上线,请更换站点！",
							icon: "none",
							duration: 2e3
						})
					}
				}) : wx.navigateTo({
					url: "/pages/charge/exchange/index?pileNo=" + n
				})
			}
		});
	});
	require("pages/index/index.js");
	__wxRoute = 'pages/index/rich-text/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/rich-text/index.js';
	define("pages/index/rich-text/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var n = require("../../../utils/http.js");
		Page({
			data: {
				content: ""
			},
			onLoad: function (n) {
				this.richId = n.richId, this.onloadData()
			},
			onReady: function () {},
			onShow: function () {},
			onloadData: function () {
				var t = this;
				n.post({
					url: "/banner/detail/" + this.richId,
					success: function (n) {
						200 == n.statusCode ? t.setData({
							content: n.data.content
						}) : wx.showToast({
							title: n.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (n) {
						wx.showToast({
							title: n.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {}
		});
	});
	require("pages/index/rich-text/index.js");
	__wxRoute = 'pages/index/outurl/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/outurl/index.js';
	define("pages/index/outurl/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("../../../utils/auth.js"),
			o = require("../../../utils/config.js");
		Page({
			data: {
				webViewUrl: ""
			},
			onLoad: function (n) {
				wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#24C771"
				});
				var r = void 0,
					i = n.url;
				r = -1 == i.indexOf("?") ? "?userId=" : "&userId=";
				var t = e.getUserInfo(),
					a = encodeURIComponent(t.id),
					s = encodeURIComponent(t.nickname),
					u = encodeURIComponent(t.phone),
					d = i + r + a + "&username=" + encodeURIComponent(t.username) + "&nickname=" + s + "&phone=" + u + "&uriPrefix=" + encodeURIComponent(o.uriPrefix);
				this.setData({
					webViewUrl: d
				}), console.log(a)
			}
		});
	});
	require("pages/index/outurl/index.js");
	__wxRoute = 'pages/index/charging-order/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/charging-order/index.js';
	define("pages/index/charging-order/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/http.js"),
			e = require("../../../utils/util.js");
		Page({
			data: {
				multipleChargingList: [],
				nonearsite: !1
			},
			currentDevice: [],
			onLoad: function (t) {},
			onReady: function () {},
			onShow: function () {
				this.loadMultipleChargingOrders()
			},
			onHide: function () {},
			loadMultipleChargingOrders: function () {
				var n = this;
				t.post({
					url: "/charge-record/recordStatus",
					requireAuth: !0,
					showLoading: !0,
					success: function (t) {
						if (200 == t.statusCode)
							if (n.currentDevice = t.data, 0 != t.data.length) {
								var o = t.data.map(function (t) {
									return 0 == t.consumeSeconds ? t.consumeSeconds : t.consumeSeconds = e.formatMinutes(t.consumeSeconds), t
								});
								n.setData({
									multipleChargingList: o
								})
							} else n.setData({
								nonearsite: !0,
								multipleChargingList: t.data
							})
					}
				})
			},
			toChargingControl: function (t) {
				var e = t.currentTarget.dataset.item,
					n = {
						port: "A" == e.port ? 1 : "B" == e.port ? 2 : e.port,
						hour: e.planHour
					};
				wx.setStorageSync("pileDetail", encodeURIComponent(JSON.stringify(e))), wx.setStorageSync("recordId", e.id), wx.setStorageSync("curPileTimeInfo", n);
				var o = void 0;
				o = 1 == t.currentTarget.dataset.item.vehicleType ? "control" : "ev-control", wx.navigateTo({
					url: "/pages/charge/" + o + "/index"
				})
			},
			onUnload: function () {},
			onReachBottom: function () {}
		});
	});
	require("pages/index/charging-order/index.js");
	__wxRoute = 'pages/index/collection/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/collection/index.js';
	define("pages/index/collection/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("../../../utils/http.js"),
			t = (require("../../../utils/util.js"), require("../../../utils/location.js")),
			a = getApp();
		Page({
			data: {
				searchValue: "",
				name: "",
				loading: !1,
				hasMore: !1,
				nearSiteList: [],
				nonearsite: !1,
				showEV: !1,
				isShowPrice: !1
			},
			deg: 0,
			chargesiteObj: {},
			nearSiteListStorage: [],
			onLoad: function (e) {},
			onReady: function () {},
			onShow: function () {
				var e = this;
				a.getConfig().then(function (t) {
					e.setData({
						showEV: t.config.showAutomobile,
						isShowPrice: t.config.pilePrice
					})
				}), t.getLocation(function (t) {
					e.chargesiteObj = {
						latitude: t.latitude,
						longitude: t.longitude
					}, e.loadnearSiteList()
				})
			},
			loadnearSiteList: function () {
				var t = this;
				e.get({
					url: "/charge-pile-collect/index",
					data: this.chargesiteObj,
					requireAuth: !0,
					showLoading: !0,
					loadingText: "正在加载中...",
					success: function (e) {
						200 === e.statusCode && (0 === e.data.length && t.setData({
							nonearsite: !0
						}), t.nearSiteListStorage = e.data, t.setData({
							nearSiteList: e.data
						}))
					}
				})
			},
			collecteBtn: function (t) {
				var a = this;
				e.get({
					url: "/charge-pile-collect/add",
					requireAuth: !0,
					data: {
						chargePileId: t.currentTarget.dataset.chargepileid
					},
					success: function (e) {
						200 === e.statusCode ? wx.showToast({
							title: "取消收藏",
							icon: "success",
							duration: 2e3,
							success: function () {
								a.loadnearSiteList()
							}
						}) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (e) {
						wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			searchValueInput: function (e) {
				this.searchNotes(this.data.nearSiteList, e.detail.value), "" == e.detail.value && this.setData({
					nearSiteList: this.nearSiteListStorage
				})
			},
			searchNotes: function (e, t) {
				var a = e.filter(function (e) {
					return -1 != e.siteName.indexOf(t) || -1 != e.pileNo.indexOf(t) || -1 != e.address.indexOf(t)
				});
				this.setData({
					nearSiteList: a
				})
			},
			navToSite: function (e) {
				var t = e.currentTarget.dataset.siteinfo.latitude,
					a = e.currentTarget.dataset.siteinfo.longitude,
					i = e.currentTarget.dataset.siteinfo.name,
					n = e.currentTarget.dataset.siteinfo.location;
				wx.openLocation({
					latitude: t,
					longitude: a,
					name: i,
					address: n,
					scale: 28
				})
			},
			navTositedetail: function (e) {
				if (1 != e.currentTarget.dataset.status && !e.currentTarget.dataset.offlinecharge) return wx.showToast({
					title: "该桩已离线，暂不支持手机端启动充电",
					icon: "none",
					duration: 2e3
				}), !1;
				var t = e.currentTarget.dataset.pileno,
					a = encodeURIComponent(t);
				if (-1 != e.currentTarget.dataset.distance.indexOf("千米") && parseFloat(e.currentTarget.dataset.distance) > 3 && e.currentTarget.dataset.needforge) {
					var i = e.currentTarget.dataset.avaliable;
					wx.navigateTo({
						url: "/pages/charge/detail/index?scene=" + a + "&avaliable=" + i
					})
				} else wx.navigateTo({
					url: "/pages/charge/detail/index?scene=" + a
				})
			}
		});
	});
	require("pages/index/collection/index.js");
	__wxRoute = 'pages/index/records/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/records/index.js';
	define("pages/index/records/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/http.js"),
			a = getApp();
		Page({
			data: {
				isnull: !1,
				loading: !1,
				hasMore: !1,
				recordList: [],
				flag: !1,
				count: 0,
				showEV: !1
			},
			params: {
				page: 0,
				size: 15,
				card: ""
			},
			page: 0,
			deg: 0,
			onLoad: function (t) {
				t.cardNo && (this.params.cardNo = t.cardNo, this.setData({
					flag: !0
				})), this.setData({
					count: t.count || 0
				})
			},
			onReady: function () {},
			onShow: function () {
				var t = this;
				a.getConfig().then(function (a) {
					t.setData({
						showEV: a.config.showAutomobile
					})
				}), this.getChargeRecord()
			},
			onHide: function () {},
			onUnload: function () {},
			continueCharge: function (a) {
				var e = a.currentTarget.dataset.pileid,
					n = a.currentTarget.dataset.pileno,
					o = a.currentTarget.dataset.port;
				t.post({
					url: "/charge-record/checkContinue",
					data: {
						pileId: e
					},
					success: function (t) {
						200 == t.statusCode ? wx.navigateTo({
							url: "../../charge/detail/index?scene=" + n + "&pileNumSite=" + o
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			feedbackAlready: function (t) {
				var a = t.currentTarget.dataset.commentstatus,
					e = t.currentTarget.dataset.id;
				wx.navigateTo({
					url: "./evaluate/index?commentStatus=" + a + "&recordId=" + e
				})
			},
			onReachBottom: function () {
				this.data.loading || (this.setData({
					loading: !0
				}), this.getNextChargerecord())
			},
			navToDetai: function (t) {
				this.data.flag || wx.navigateTo({
					url: "/pages/index/records/detail/index?recordId=" + t.currentTarget.dataset.recordid + "&minejump=" + !1
				})
			},
			updateRefreshIcon: function () {
				var t = this,
					a = wx.createAnimation({
						duration: 500,
						timingFunction: "linear",
						delay: 0
					}),
					e = setInterval(function () {
						t.data.loading || clearInterval(e), t.deg = t.data.deg += 360, a.rotateZ(t.deg).step(), t.setData({
							refreshAnimation: a.export()
						})
					}, 1e3)
			},
			getChargeRecord: function () {
				var a = this;
				this.params.page = 0, t.post({
					url: "/charge-record/index",
					requireAuth: !0,
					showLoading: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return void a.setData({
								isnull: !0
							});
							a.params.page++, a.setData({
								recordList: t.data
							})
						}
					}
				})
			},
			getNextChargerecord: function () {
				var a = this;
				this.data.hasMore ? this.setData({
					loading: !1
				}) : (this.updateRefreshIcon(), t.post({
					url: "/charge-record/index",
					requireAuth: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return a.setData({
								hasMore: !0
							}), void a.setData({
								loading: !1
							});
							a.params.page++, a.setData({
								recordList: a.data.recordList.concat(t.data),
								loading: !1
							})
						}
					}
				}))
			},
			doAlreadyRead: function () {
				var a = this;
				t.get({
					url: "/charge-record/allRead",
					requireAuth: !0,
					success: function (t) {
						200 === t.statusCode ? (wx.showToast({
							title: "全部已读成功",
							icon: "none",
							duration: 2e3
						}), a.setData({
							count: 0
						}), a.getChargeRecord()) : wx.showToast({
							title: "全部已读失败",
							icon: "none",
							duration: 2e3
						})
					},
					fail: function () {
						wx.showToast({
							title: "全部已读失败",
							icon: "none",
							duration: 2e3
						})
					}
				})
			}
		});
	});
	require("pages/index/records/index.js");
	__wxRoute = 'pages/index/records/exchange-power/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/records/exchange-power/index.js';
	define("pages/index/records/exchange-power/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js");
		Page({
			data: {
				isnull: !1,
				loading: !1,
				hasMore: !1,
				recordList: []
			},
			params: {
				page: 0,
				size: 15
			},
			page: 0,
			deg: 0,
			onLoad: function (t) {
				this.getRercordList()
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {
				this.data.loading || (this.setData({
					loading: !0
				}), this.getNextrecord())
			},
			onShareAppMessage: function () {},
			getRercordList: function () {
				var a = this;
				t.get({
					url: "/exchange-battery/index",
					requireAuth: !0,
					showLoading: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return void a.setData({
								isnull: !0
							});
							a.params.page++, a.setData({
								recordList: t.data
							})
						}
					}
				})
			},
			getNextrecord: function () {
				var a = this;
				this.data.hasMore ? this.setData({
					loading: !1
				}) : (this.updateRefreshIcon(), t.post({
					url: "/exchange-battery/index",
					requireAuth: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return a.setData({
								hasMore: !0
							}), void a.setData({
								loading: !1
							});
							a.params.page++, a.setData({
								recordList: a.data.recordList.concat(t.data),
								loading: !1
							})
						}
					}
				}))
			}
		});
	});
	require("pages/index/records/exchange-power/index.js");
	__wxRoute = 'pages/index/records/detail/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/records/detail/index.js';
	define("pages/index/records/detail/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = function (t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(require("../../../../utils/zfb_charts.js")),
			a = require("../../../../utils/http.js"),
			e = getApp(),
			i = require("../../../../utils/wx_charts.js"),
			n = null,
			s = 0;
		Page({
			data: {
				isShowCanvas: !1,
				showCanvas: !1,
				orderDetail: null,
				consumeAmount: 0,
				minejump: !0,
				outstandinorder: !1,
				payway: "微信支付",
				isShowPay: !1,
				discuss: !1,
				stars: 3,
				revert: "",
				content: "",
				pileType: 1,
				isWeChat: !0,
				status: 1,
				showWelcome: !1,
				adContent: {},
				adContent1: {},
				closeTime: 10
			},
			closeTimer: null,
			recordId: "",
			onLoad: function (t) {
				var a = wx.getStorageSync("miniType");
				if (this.setData({
						isWeChat: 1 == a
					}), this.setData({
						imageWidth: wx.getSystemInfoSync().windowWidth
					}), s = this.data.imageWidth / 375, t.minejump) {
					var e = "false" != t.minejump && "";
					this.setData({
						minejump: e
					})
				}
				this.recordId = t.recordId, this.getAdImg()
			},
			onReady: function () {},
			onShow: function () {
				var t = this;
				e.getConfig().then(function (a) {
					t.setData({
						isShowCanvas: a.config.powerMap
					})
				}), wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#24c771"
				}), this.getRecoedInfo(), this.cWidth = 750, this.cHeight = 500, this.pixelRatio = 2, this.drawPowerChart()
			},
			getAdImg: function () {
				var t = this;
				a.post({
					url: "/banner/index",
					data: {
						place: 6
					},
					success: function (a) {
						200 === a.statusCode ? 0 != a.data.length && (t.setData({
							showWelcome: !0,
							adContent: a.data[0]
						}), t.closeTimer = setInterval(function () {
							t.data.closeTime || (clearInterval(t.closeTimer), t.closeTimer = null, t.setData({
								showWelcome: !1
							})), t.setData({
								closeTime: t.data.closeTime - 1
							})
						}, 1e3)) : wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				}), a.post({
					url: "/banner/index",
					data: {
						place: 7
					},
					success: function (a) {
						200 === a.statusCode ? 0 != a.data.length && t.setData({
							adContent1: a.data[0]
						}) : wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			jump: function (t) {
				var e = t.currentTarget.dataset.ad,
					i = e.type;
				1 != i && (e.operator || a.post({
					url: "/banner/clickBanner",
					requireAuth: !0,
					data: {
						id: e.id,
						outerId: e.outerId
					}
				}), 3 == i ? wx.navigateTo({
					url: "/pages/index/outurl/index?url=" + e.linkUrl
				}) : 2 == i ? wx.navigateToMiniProgram({
					appId: e.linkUrl,
					path: e.miniprogramPage || "pages/index/index",
					success: function (t) {}
				}) : 4 == i && wx.navigateTo({
					url: "/pages/index/rich-text/index?richId=" + e.id
				}))
			},
			hidePicture: function () {
				clearInterval(this.closeTimer), this.closeTimer = null, this.setData({
					closeTime: 10,
					showWelcome: !1
				})
			},
			evaluate: function () {
				wx.navigateTo({
					url: "../evaluate/index?recordId=" + this.recordId + "&commentStatus=" + -1
				})
			},
			continueCharge: function () {
				var t = this;
				a.post({
					url: "/charge-record/checkContinue",
					data: {
						pileId: this.data.orderDetail.pileId
					},
					success: function (a) {
						200 == a.statusCode ? wx.navigateTo({
							url: "/pages/charge/detail/index?scene=" + t.data.orderDetail.pileNo + "&pileNumSite=" + t.data.orderDetail.port + "&isContinue=true"
						}) : wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			getRecoedInfo: function () {
				var t = this;
				a.post({
					url: "/charge-record/show/" + this.recordId,
					requireAuth: !0,
					success: function (a) {
						if (200 === a.statusCode) {
							if (t.setData({
									status: a.data.status,
									discuss: a.data.discuss,
									content: a.data.content,
									revert: a.data.revert,
									stars: a.data.stars,
									pileType: a.data.pileType
								}), a.data.hasOwnProperty("paid"))
								if (a.data.paid) 1 === a.data.channel ? t.setData({
									payway: "微信支付",
									isShowPay: !0
								}) : 2 === a.data.channel && t.setData({
									payway: "支付宝付",
									isShowPay: !0
								});
								else {
									var e = !a.data.paid;
									t.setData({
										isShowPay: !1,
										outstandinorder: e
									})
								}
							else t.setData({
								isShowPay: !1
							});
							t.setData({
								orderDetail: a.data,
								consumeAmount: a.data.consumeAmount / 100
							})
						}
					}
				})
			},
			payment: function () {
				var t = this;
				a.post({
					url: "/charge-record/payment/" + this.recordId,
					data: {
						channel: 1
					},
					showLoading: !0,
					requireAuth: !0,
					success: function (a) {
						t.startPay(a.data)
					}
				})
			},
			drawPowerChart: function () {
				var t = this;
				a.post({
					url: "/charge-record/charge-record-curve/" + this.recordId,
					showLoading: !0,
					success: function (a) {
						if (200 === a.statusCode) {
							if (0 != a.data.length) {
								var e = a.data,
									i = [],
									n = [],
									s = [];
								if (t.setData({
										showCanvas: !0
									}), t.data.isWeChat) {
									for (var o = 0; o < e.length; o++) i.push(e[o].minutePast), n.push(e[o].power);
									var r = Math.min.apply(Math, n);
									t.doDrawChart(i, n, r)
								} else {
									for (var d = 0; d < e.length; d++) i.push(e[d].minutePast), s.push(e[d].power);
									var c = {
										name: "充电时间",
										data: s
									};
									n.push(c);
									var u = {
										categories: [],
										series: []
									};
									u.categories = i, u.series = n, t.showColumn("canvasColumn", u)
								}
							}
						} else t.setData({
							showCanvas: !1
						}), wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (a) {
						t.setData({
							showCanvas: !1
						}), wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			startPay: function (t) {
				var a = this;
				wx.requestPayment({
					timeStamp: t.timestamp,
					nonceStr: t.noncestr,
					package: t.packageValue,
					signType: t.signType,
					paySign: t.sign,
					success: function (t) {
						a.setData({
							outstandinorder: !1
						})
					},
					fail: function (t) {}
				})
			},
			doDrawChart: function (t, a, e) {
				new i({
					canvasId: "lineCanvas",
					type: "line",
					categories: t,
					animation: !0,
					background: "#f5f5f5",
					series: [{
						name: "充电时长(分钟)",
						data: a,
						format: function (t, a) {
							return t
						}
					}],
					xAxis: {
						disableGrid: !0
					},
					yAxis: {
						title: "充电功率(瓦)",
						format: function (t) {
							return t
						},
						min: 0
					},
					width: 390 * s,
					height: 200 * s,
					dataLabel: !1,
					dataPointShape: !0,
					extra: {
						lineStyle: "straight"
					}
				})
			},
			showColumn: function (a, e) {
				n = new t.default({
					$this: this,
					canvasId: a,
					type: "line",
					legend: !0,
					fontSize: 11,
					background: "#FFFFFF",
					pixelRatio: this.pixelRatio,
					animation: !0,
					categories: e.categories,
					series: e.series,
					xAxis: {
						disableGrid: !0,
						calibration: !0,
						disabled: !0
					},
					yAxis: {
						data: [{
							title: "功率(瓦)",
							min: 0,
							format: function (t) {
								return t
							}
						}],
						showTitle: !0,
						gridType: "dash",
						dashLength: 4,
						splitNumber: 5
					},
					dataLabel: !1,
					width: this.cWidth,
					height: this.cHeight,
					extra: {
						column: {
							type: "group",
							width: .45 * this.cWidth / e.categories.length
						}
					}
				})
			}
		});
	});
	require("pages/index/records/detail/index.js");
	__wxRoute = 'pages/index/records/evaluate/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/index/records/evaluate/index.js';
	define("pages/index/records/evaluate/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js");
		require("../../../../utils/util.js");
		Page({
			data: {
				condition: !0,
				currentStar: 4,
				wordNum: 0,
				value: "",
				feedbackInfo: "",
				noClick: !1
			},
			onLoad: function (t) {
				this.recordId = t.recordId, -1 != t.commentStatus && (this.recordId = t.recordId, this.setData({
					condition: !1
				}), this.getFeedbackInfo())
			},
			onReady: function () {},
			onShow: function () {},
			getFeedbackInfo: function () {
				var a = this;
				t.post({
					url: "/charge-record/comments-detail",
					requireAuth: !0,
					data: {
						recordId: this.recordId
					},
					success: function (t) {
						200 === t.statusCode ? a.setData({
							feedbackInfo: t.data
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			startEvaluation: function (t) {
				var a = parseInt(t.detail.value.length);
				this.setData({
					wordNum: a,
					value: t.detail.value
				})
			},
			chooseStar: function (t) {
				var a = parseInt(t.currentTarget.dataset.index);
				if (a > this.data.currentStar || 0 == a) this.setData({
					currentStar: a
				});
				else {
					if (0 == this.data.currentStar) return;
					this.setData({
						currentStar: a - 1
					})
				}
			},
			evaluateBtn: function () {
				var a = this;
				"" != this.data.value ? (this.setData({
					noClick: !0
				}), t.post({
					url: "/charge-record/saveComments",
					requireAuth: !0,
					showLoading: !0,
					data: {
						recordId: this.recordId,
						stars: this.data.currentStar + 1,
						content: this.data.value
					},
					success: function (t) {
						200 === t.statusCode ? setTimeout(function () {
							wx.showToast({
								title: "反馈成功",
								icon: "none",
								duration: 2e3,
								success: function () {
									setTimeout(function () {
										wx.navigateBack({
											delta: 1
										})
									}, 2e3)
								}
							})
						}, 0) : (wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						}), a.setData({
							noClick: !1
						}))
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						}), a.setData({
							noClick: !1
						})
					}
				})) : wx.showToast({
					title: "评价内容不能为空",
					icon: "none",
					duration: 2e3
				})
			}
		});
	});
	require("pages/index/records/evaluate/index.js");
	__wxRoute = 'pages/authorization/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/authorization/index.js';
	define("pages/authorization/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = getApp(),
			t = require("../../utils/http.js"),
			n = require("../../utils/auth.js");
		Page({
			data: {
				whetherthelogin: !0,
				phoneBound: !1,
				miniType: 1,
				logoImg: ""
			},
			redirect_url: null,
			shouldRegiste: !0,
			shouldUpdate: !1,
			onLoad: function (e) {
				this.setData({
					miniType: wx.getStorageSync("miniType")
				}), e.redirect_url && (this.redirect_url = decodeURIComponent(e.redirect_url))
			},
			onReady: function () {},
			onShow: function () {
				var t = this;
				e.getConfig().then(function (e) {
					t.setData({
						logoImg: e.config.appletsLogoUrl
					}), wx.setNavigationBarTitle({
						title: e.appName
					})
				})
			},
			onHide: function () {},
			onUnload: function () {},
			noLogin: function () {
				wx.navigateBack({
					delta: 1
				})
			},
			bindGetUserInfo: function (e) {
				var t = this,
					n = e.detail.userInfo;
				n.nickName && n.avatarUrl ? this.getUserData(n) : wx.showModal({
					title: "提示",
					content: "为了更好的体验小程序，请确保设置了" + (2 == this.data.miniType ? "支付宝" : "微信") + "账号的昵称和头像！",
					showCancel: !1,
					confirmText: "知道啦！",
					success: function (e) {
						e.confirm ? t.getUserData(n) : e.cancel && t.getUserData(n)
					}
				})
			},
			getUserData: function (e) {
				var a = this;
				t.get({
					url: "/user/brief-info",
					requireAuth: !0,
					success: function (t) {
						if (200 === t.statusCode) {
							var i = t.data;
							e.avatarUrl !== i.avatar || e.nickName !== i.nickname ? a.updateUserInfo(e) : (n.saveUserInfo(i), a.redirectToTarget()), n.setAuthorized()
						} else a.setData({
							phoneBound: !0
						}), wx.clearStorageSync(), wx.setStorageSync("miniType", a.data.miniType), n.saveUserInfo(e)
					},
					fail: function (t) {
						a.setData({
							phoneBound: !0
						}), wx.clearStorageSync(), wx.setStorageSync("miniType", a.data.miniType), n.saveUserInfo(e)
					}
				})
			},
			getUserInfo: function () {
				var e = this;
				t.get({
					url: "/user/brief-info",
					requireAuth: !0,
					success: function (t) {
						if (200 === t.statusCode) {
							var a = t.data;
							n.saveUserInfo(a), e.redirectToTarget()
						}
					}
				})
			},
			updateUserInfo: function (e) {
				var n = this;
				t.post({
					url: "/user/update",
					requireAuth: !0,
					data: {
						nickname: e.nickName,
						avatar: e.avatarUrl
					},
					success: function (e) {
						n.getUserInfo()
					}
				})
			},
			onRegisteSuccess: function () {
				n.setAuthorized(), this.closeRegistDialog(), this.redirectToTarget()
			},
			closeRegistDialog: function () {
				this.setData({
					phoneBound: !1
				})
			},
			redirectToTarget: function () {
				this.redirect_url ? wx.redirectTo({
					url: this.redirect_url
				}) : wx.reLaunch({
					url: "/pages/index/index"
				})
			}
		});
	});
	require("pages/authorization/index.js");
	__wxRoute = 'pages/mine/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/index.js';
	define("pages/mine/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = function () {
				function t(t, e) {
					var a = [],
						n = !0,
						s = !1,
						o = void 0;
					try {
						for (var i, r = t[Symbol.iterator](); !(n = (i = r.next()).done) && (a.push(i.value), !e || a.length !== e); n = !0);
					} catch (t) {
						s = !0, o = t
					} finally {
						try {
							!n && r.return && r.return()
						} finally {
							if (s) throw o
						}
					}
					return a
				}
				return function (e, a) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, a);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			e = getApp(),
			a = require("../../utils/http.js"),
			n = require("../../utils/auth.js"),
			s = require("../../utils/config.js");
		Page({
			data: {
				prurl: "",
				hidden: !0,
				shareToFriends: !1,
				shareFriendsQuan: !1,
				canvasIsLoad: !1,
				codeImg: "",
				showMask: !1,
				showShare: !1,
				noAgent: !1,
				walletAmount: "0",
				avatarUrl: "http://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/defaultavatar.png",
				phone: "",
				nickName: "",
				isAgent: !1,
				sponsor: !1,
				changeUsermodal: !1,
				changeUserOrPhone: !1,
				examineStatus: "",
				whatAgentStatus: 0,
				subscribeEnable: !1,
				property: !1,
				pilingAccount: !1,
				isWeChat: !0,
				registerType: "",
				userType: 1
			},
			captchaClick: !1,
			isjumpTositemanagementclicked: !1,
			agentId: "",
			agentStatus: "",
			reviewStatus: "",
			waitGoH5: !0,
			onLoad: function () {
				var t = wx.getStorageSync("miniType");
				this.setData({
					isWeChat: 1 == t
				})
			},
			onReady: function () {},
			onShow: function () {
				var t = this;
				n.authorized(!1) && this.queryBalance(function (e) {
					console.log(e), t.setData({
						phone: e.phone,
						avatarUrl: e.avatar
					})
				})
			},
			onHide: function () {
				clearInterval(this.interval), wx.removeStorageSync("switchMobile"), wx.removeStorageSync("replaceMobile")
			},
			navtoTopup: function () {
				this.isCreateBrief("/pages/mine/user-card/index")
			},
			jumptoCardManagement: function () {
				this.isCreateBrief("/pages/mine/electric-card-management/index")
			},
			contactService: function () {
				this.isCreateBrief("/pages/mine/here-service/index")
			},
			faultRepair: function () {
				this.isCreateBrief("/pages/mine/fault-repair/index")
			},
			showShare: function () {
				this.isCreateBrief("/pages/mine/official-account/index")
			},
			goFeedback: function () {
				this.isCreateBrief("/pages/index/records/index")
			},
			jumpToapplyMaster: function () {
				n.authorized(!0) && (0 === this.agentStatus || 4 === this.agentStatus && 0 == this.reviewStatus ? wx.navigateTo({
					url: "/pages/apply/complete/index"
				}) : (2 === this.agentStatus || this.reviewStatus, wx.navigateTo({
					url: "/pages/apply/master/index"
				})))
			},
			queryBalance: function (t) {
				var e = this;
				a.get({
					url: "/user/brief-info",
					requireAuth: !0,
					data: {
						flag: !0
					},
					success: function (a) {
						200 === a.statusCode && (n.saveUserInfo(a.data), e.setData({
							walletAmount: a.data.walletAmount,
							sponsor: a.data.sponsor,
							whatAgentStatus: a.data.agentStatus,
							subscribeEnable: a.data.subscribeEnable,
							userType: a.data.userType
						}), t && t(a.data), a.data.agentId || 0 == a.data.agentId ? 1 == a.data.agentStatus ? (e.setData({
							isAgent: !0,
							noAgent: !1,
							pilingAccount: !1,
							property: !1
						}), e.agentId = a.data.agentId, e.agentStatus = a.data.agentStatus) : 0 == a.data.agentStatus ? (e.agentStatus = a.data.agentStatus, e.setData({
							isAgent: !1,
							examineStatus: "(正在审核中)",
							property: a.data.bonus
						})) : 2 == a.data.agentStatus ? (e.agentStatus = a.data.agentStatus, e.setData({
							isAgent: !1,
							noAgent: !0,
							examineStatus: "(审核未通过)",
							property: a.data.bonus
						})) : 4 == a.data.agentStatus ? (e.agentStatus = a.data.agentStatus, e.reviewStatus = a.data.reviewStatus, e.setData({
							pilingAccount: !0,
							noAgent: !0,
							isAgent: !1,
							property: a.data.bonus
						}), 0 == a.data.reviewStatus ? e.setData({
							examineStatus: "(正在审核中)"
						}) : 2 == a.data.reviewStatus && e.setData({
							examineStatus: "(审核未通过)"
						})) : e.setData({
							noAgent: !0,
							isAgent: !1,
							property: a.data.bonus
						}) : e.setData({
							noAgent: !0,
							pilingAccount: !1,
							isAgent: !1,
							property: a.data.bonus
						}))
					}
				})
			},
			isCreateBrief: function (t) {
				n.authorized(!0) && wx.navigateTo({
					url: t
				})
			},
			changeoPerate: function (t) {
				this.setData({
					changeUsermodal: !1,
					changeUserOrPhone: !0,
					registerType: t.currentTarget.dataset.type
				})
			},
			onRegisteSuccess: function () {
				var t = this;
				n.setAuthorized(), this.queryBalance(function (e) {
					t.setData({
						phone: e.phone,
						avatarUrl: e.avatar
					})
				}), this.closeRegistDialog()
			},
			closeRegistDialog: function () {
				this.setData({
					changeUserOrPhone: !1
				})
			},
			controlChangeUserModal: function () {
				n.authorized(!0)
			},
			hideControlChangeUserModal: function () {
				this.setData({
					changeUsermodal: !1
				})
			},
			hideShare: function () {
				var t = this;
				wx.showTabBar({
					animation: !0,
					success: function () {
						t.setData({
							showMask: !1,
							showShare: !1
						})
					}
				})
			},
			hidechangeUsermodal: function () {
				this.setData({
					changeUsermodal: !1,
					shareToFriends: !1,
					shareFriendsQuan: !1
				})
			},
			accountManagement: function () {
				n.authorized(!0) && this.setData({
					changeUsermodal: !0
				})
			},
			shareBtn: function () {
				n.authorized(!0) && this.setData({
					shareToFriends: !0,
					shareFriendsQuan: !0,
					hidden: !0
				})
			},
			share: function () {
				var t = this;
				wx.showLoading({
					title: "努力生成中..."
				}), a.get({
					url: "/applet-code/wx-code",
					async: !1,
					responseType: "arraybuffer",
					success: function (e) {
						if (200 == e.statusCode) {
							var a = "data:image/PNG;base64," + wx.arrayBufferToBase64(e.data);
							t.base64src(a, function (e) {
								var a = wx.createCanvasContext("shareImg", t);
								a.drawImage("../../icons/share-bg.jpg", 0, 0, 588, 888), a.drawImage(e, 140, 480, 300, 300), a.setTextAlign("center"), a.setFillStyle("#ffffff"), a.stroke(), a.draw(!0, setTimeout(function () {
									wx.canvasToTempFilePath({
										x: 0,
										y: 0,
										width: 588,
										height: 888,
										destWidth: 588,
										destHeight: 888,
										canvasId: "shareImg",
										success: function (e) {
											t.setData({
												prurl: e.tempFilePath,
												hidden: !1,
												shareToFriends: !1,
												canvasIsLoad: !0
											}), wx.hideLoading()
										},
										fail: function (t) {
											console.log(t, "错误")
										}
									}, t)
								}, 2e3))
							})
						} else wx.showToast({
							title: "生成失败",
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			save: function () {
				var t = this;
				console.log("用户点击保存"), wx.saveImageToPhotosAlbum({
					filePath: t.data.prurl,
					success: function (e) {
						console.log(e), wx.showModal({
							content: "图片已保存到相册，赶紧晒一下吧~",
							showCancel: !1,
							confirmText: "好哒",
							confirmColor: "#72B9C3",
							success: function (e) {
								e.confirm && (console.log("用户点击确定"), t.setData({
									hidden: !0
								}))
							}
						})
					},
					fail: function (t) {
						console.log(t), "saveImageToPhotosAlbum:fail:auth denied" !== t.errMsg && "saveImageToPhotosAlbum:fail auth deny" !== t.errMsg && "saveImageToPhotosAlbum:fail authorize no response" !== t.errMsg || wx.showModal({
							title: "提示",
							content: "需要您授权保存相册",
							showCancel: !1,
							success: function (t) {
								wx.openSetting({
									success: function (t) {
										console.log("settingdata", t), t.authSetting["scope.writePhotosAlbum"] ? wx.showModal({
											title: "提示",
											content: "获取权限成功,再次点击图片即可保存",
											showCancel: !1
										}) : wx.showModal({
											title: "提示",
											content: "获取权限失败，将无法保存到相册哦~",
											showCancel: !1
										})
									},
									fail: function (t) {
										console.log("failData", t)
									}
								})
							}
						})
					}
				})
			},
			onShareAppMessage: function (t) {
				this.setData({
					changeUsermodal: !1,
					shareToFriends: !1,
					shareFriendsQuan: !1
				});
				if (e.getConfig().then(function (t) {
						t.appName
					}), "button" == t.from) {
					t.target.dataset;
					console.log(t.target)
				}
				return shareObj
			},
			base64src: function (e, a) {
				var n = wx.getFileSystemManager(),
					s = /data:image\/(\w+);base64,(.*)/.exec(e) || [],
					o = t(s, 3),
					i = o[1],
					r = o[2];
				if (!i) return new Error("ERROR_BASE64SRC_PARSE");
				var u = wx.env.USER_DATA_PATH + "/tmp_base64src." + i,
					c = wx.base64ToArrayBuffer(r);
				n.writeFile({
					filePath: u,
					data: c,
					encoding: "binary",
					success: function () {
						a(u)
					},
					fail: function () {
						return new Error("ERROR_BASE64SRC_WRITE")
					}
				})
			},
			jumpToagentH5: function (t) {
				this.setData({
					nickName: t.detail.userInfo.nickName
				}), this.jumpToH5Sys()
			},
			jumpToH5: function () {
				this.jumpToH5Sys("login/login", "&userType=4")
			},
			jumpToPropertyH5: function (t) {
				this.setData({
					nickName: t.detail.userInfo.nickName
				});
				this.jumpToH5Sys("login/login", "&userType=3")
			},
			withdrawal: function () {
				var t = this;
				this.waitGoH5 && (this.waitGoH5 = !1, a.get({
					url: "/agent/index",
					requireAuth: !0,
					success: function (e) {
						if (200 === e.statusCode) {
							if (e.data.loanWalletAmount > 0 & e.data.bonusAmount > e.data.loanWalletAmount) return void wx.showModal({
								title: "提示",
								confirmText: "去还款",
								content: "您有未先还款账单，请先去代理商后台还款，再提现",
								success: function (a) {
									if (a.confirm) {
										t.waitGoH5 = !0;
										var n = "&loanWalletAmount=" + e.data.loanWalletAmount / 100 + "&bonusAmount=" + e.data.bonusAmount / 100 + "&userName=" + t.data.phone;
										t.jumpToH5Sys("login/login", n)
									} else a.cancel && (t.waitGoH5 = !0)
								}
							});
							t.waitGoH5 = !0, wx.navigateTo({
								url: "/pages/mine/withdrawal/index?withdrawalbalance=" + e.data.bonusAmount
							})
						} else t.waitGoH5 = !0, wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					}
				}))
			},
			jumpToH5Sys: function () {
				var t = this,
					e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "login/login",
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				this.waitGoH5 && (this.waitGoH5 = !1, a.get({
					url: "/oauth/accessTokenH5",
					requireAuth: !0,
					success: function (a) {
						if (200 === a.statusCode) {
							t.waitGoH5 = !0;
							var o = "https://" + (s.isTest ? "tst-" : "") + "agentadmin.cdyun.vip/" + s.uriPrefix + "/#/" + e + "?nickName=" + t.data.nickName + "&accessToken=" + JSON.stringify(a.data) + n;
							wx.navigateTo({
								url: "/pages/mine/agent-admin/index?url=" + encodeURIComponent(o)
							})
						} else t.waitGoH5 = !0, wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					}
				}))
			},
			versionInfo: function () {
				wx.navigateTo({
					url: "/pages/mine/version/index"
				})
			}
		});
	});
	require("pages/mine/index.js");
	__wxRoute = 'pages/mine/version/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/version/index.js';
	define("pages/mine/version/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var n = getApp();
		Page({
			data: {
				logoImg: ""
			},
			onLoad: function (n) {},
			onReady: function () {},
			onShow: function () {
				var o = this;
				n.getConfig().then(function (n) {
					o.setData({
						logoImg: n.config.appletsLogoUrl
					})
				})
			},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {}
		});
	});
	require("pages/mine/version/index.js");
	__wxRoute = 'pages/mine/withdrawal/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/withdrawal/index.js';
	define("pages/mine/withdrawal/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/auth.js"),
			e = require("../../../utils/http.js");
		Page({
			data: {
				wrong: !1,
				result: "",
				initValue: "",
				remitFee: 0,
				feeRate: 0,
				rateFee: 0,
				realName: "",
				finalAmount: 0,
				time: "获取验证码",
				VerificationCode: !0,
				currentTime: 60,
				writeRealName: !1
			},
			totalAmount: 0,
			minAmount: 0,
			maxAmount: 0,
			submitAmount: 0,
			wxAppSettleMsgTmplId: "",
			onLoad: function (t) {
				this.totalAmount = t.withdrawalbalance, this.setData({
					result: "账户余额：" + this.totalAmount / 100 + "元"
				}), this.getMessageTemplate()
			},
			onReady: function () {
				var t = this;
				e.get({
					url: "/bonus/settle-info",
					requireAuth: !0,
					success: function (e) {
						if (200 === e.statusCode) {
							t.minAmount = e.data.minAmount, t.maxAmount = e.data.maxAmount;
							var a = e.data.remitFee,
								i = e.data.feeRate;
							void 0 == i && (i = e.data.wxRemitFee), t.setData({
								remitFee: a,
								feeRate: i,
								realName: e.data.realName,
								writeRealName: !e.data.realName
							})
						}
					}
				})
			},
			getVerificationCode: function () {
				var t = this;
				this.data.wrong ? wx.showToast({
					title: "请输入符合条件的提现金额，再获取验证码！",
					icon: "none"
				}) : e.post({
					url: "/bonus/captcha",
					requireAuth: !0,
					success: function (e) {
						if (console.log(e, "这是获取验证码"), 200 === e.statusCode) {
							var a = t.data.currentTime,
								i = setInterval(function () {
									a--, t.setData({
										time: a + "秒",
										VerificationCode: !1
									}), a <= 0 && (clearInterval(i), t.setData({
										time: "重新发送",
										currentTime: 60,
										VerificationCode: !0
									}), t.captchaClick = !1)
								}, 1e3);
							wx.showToast({
								title: "发送短信验证码成功，请注意查看您的手机",
								icon: "none"
							})
						} else wx.showToast({
							title: "获取验证码失败,请联系客服人员",
							icon: "none"
						}), t.captchaClick = !1
					}
				})
			},
			getRealName: function (t) {
				this.realName = t.detail.value
			},
			onSubmit: function (t) {
				var e = this;
				if (this.data.realName.trim())
					if (this.data.wrong) wx.showToast({
						title: "提现信息错误",
						icon: "none"
					});
					else if ("" != this.captcha && void 0 != this.captcha) {
					var a = this;
					wx.requestSubscribeMessage({
						tmplIds: [this.wxAppSettleMsgTmplId],
						success: function (t) {
							a.submitRequest()
						},
						fail: function (t) {
							a.submitRequest()
						}
					})
				} else wx.showToast({
					title: "请填写验证码",
					icon: "none"
				});
				else wx.showModal({
					title: "提示",
					content: "请先进行实名认证再确认提现",
					success: function (t) {
						t.confirm ? (console.log("用户点击确定"), e.setData({
							writeRealName: !0
						})) : t.cancel && console.log("用户点击取消")
					}
				})
			},
			getMessageTemplate: function () {
				var t = this;
				e.get({
					url: "/MiniApp/findMsgTmplId",
					success: function (e) {
						200 === e.statusCode ? t.wxAppSettleMsgTmplId = e.data.wxAppSettleMsgTmplId : wx.showToast({
							title: e.data,
							icon: "none"
						})
					}
				})
			},
			onInput: function (t) {
				var e = t.detail.value,
					a = e.indexOf(".");
				return 0 == a ? "0." : a > 0 && e.length - a > 3 ? e.substring(0, a + 3) : (a = e.indexOf(".", a + 1)) > 0 ? e = e.substring(0, a) : e.length > 1 && "0" == e.charAt(0) && "0" == e.charAt(1) ? e = e.substring(1) : ("" == e && (e = "0"), void this.calculate(100 * e))
			},
			allTurnOut: function () {
				this.setData({
					initValue: this.totalAmount / 100 + ""
				}), this.calculate(this.totalAmount)
			},
			calculate: function (t) {
				var e = parseFloat(t),
					a = !1,
					i = "账户余额" + this.totalAmount / 100 + "元";
				e < this.minAmount ? (a = !0, i = "最小提现金额为" + this.minAmount / 100 + "元！") : e > this.totalAmount ? (a = !0, i = "余额不足！") : e > this.maxAmount && (a = !0, i = "最高提现金额" + this.maxAmount / 100 + "元！");
				var s = Math.ceil(e * this.data.feeRate),
					n = e - s - this.data.remitFee;
				this.setData({
					wrong: a,
					result: i,
					finalAmount: n.toFixed(2),
					rateFee: s
				}), this.submitAmount = e.toFixed(0)
			},
			getCaptcha: function (t) {
				this.captcha = t.detail.value
			},
			submitRequest: function () {
				var a = t.getUserInfo();
				e.post({
					url: "/bonus/settle",
					requireAuth: !0,
					data: {
						amount: this.submitAmount,
						realName: this.data.realName,
						nickName: a.nickname,
						captcha: this.captcha
					},
					success: function (t) {
						200 === t.statusCode ? (wx.showToast({
							title: "提现申请成功！",
							icon: "success",
							duration: 2e3
						}), setTimeout(function () {
							wx.navigateBack()
						}, 2e3)) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			closePop: function () {
				this.setData({
					writeRealName: !1,
					realName: ""
				})
			},
			confirm: function () {
				var t = this;
				e.get({
					url: "/user/save-realname?name=" + this.realName,
					requireAuth: !0,
					success: function (e) {
						200 === e.statusCode ? (wx.showToast({
							title: "实名认证成功",
							icon: "none"
						}), t.setData({
							writeRealName: !1,
							realName: t.realName
						})) : wx.showToast({
							title: e.data,
							icon: "none"
						})
					}
				})
			}
		});
	});
	require("pages/mine/withdrawal/index.js");
	__wxRoute = 'pages/mine/user-card/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/user-card/index.js';
	define("pages/mine/user-card/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var a = require("../../../utils/http.js");
		Page({
			data: {
				isShowCardList: !1,
				amount: 0,
				cardList: [1],
				walletId: 0,
				isShowThisTitle: !1
			},
			onLoad: function (a) {},
			onReady: function () {},
			onShow: function () {
				this.onloadCardaccount()
			},
			onloadCardaccount: function () {
				var t = this;
				a.post({
					url: "/wallet/index",
					showLoading: !0,
					requireAuth: !0,
					success: function (a) {
						200 == a.statusCode ? (t.setData({
							isShowCardList: !0,
							cardList: a.data.sites,
							amount: a.data.balance.amount,
							walletId: a.data.balance.id
						}), a.data.sites.length > 0 && t.setData({
							isShowThisTitle: !0
						})) : wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (a) {
						wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			navtoTopup: function (a) {
				var t = a.currentTarget.dataset.walletid;
				wx.navigateTo({
					url: "/pages/mine/topup/index?walletId=" + t + "&rechargeType=1"
				})
			},
			toCardExplain: function () {
				wx.navigateTo({
					url: "/pages/mine/user-card/card-explain/index"
				})
			},
			toRechargecard: function (a) {
				var t = a.currentTarget.dataset.siteid,
					e = a.currentTarget.dataset.walletid;
				a.currentTarget.dataset.activityenabled ? wx.navigateTo({
					url: "/pages/mine/topup/index?siteId=" + t + "&walletId=" + e + "&rechargeType=5"
				}) : wx.navigateTo({
					url: "/pages/mine/topup/index?walletId=" + e + "&rechargeType=2"
				})
			},
			toAvailablepile: function (a) {
				var t = a.currentTarget.dataset.chargesiteid;
				wx.navigateTo({
					url: "./available-pile/index?chargesiteid=" + t
				})
			},
			onPullDownRefresh: function () {},
			onReachBottom: function () {}
		});
	});
	require("pages/mine/user-card/index.js");
	__wxRoute = 'pages/mine/user-card/available-pile/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/user-card/available-pile/index.js';
	define("pages/mine/user-card/available-pile/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js"),
			e = (require("../../../../utils/util.js"), require("../../../../utils/location.js"));
		Page({
			data: {
				isShowPrice: !1,
				searchValue: "",
				name: "",
				nearSiteList: [],
				nonearsite: !1
			},
			deg: 0,
			page: 0,
			params: {
				page: 0,
				size: 6,
				siteId: "",
				latitude: "",
				longitude: ""
			},
			chargesiteObj: {},
			onLoad: function (t) {
				this.params.page = 0, this.params.siteId = t.chargesiteid
			},
			onReady: function () {},
			onShow: function () {
				var a = this;
				e.getLocation(function (e) {
					a.params.latitude = e.latitude, a.params.longitude = e.longitude, t.get({
						url: "/wallet/findWalletPackagePile",
						requireAuth: !0,
						data: a.params,
						success: function (t) {
							if (200 === t.statusCode) {
								if (0 === t.data.length) return a.setData({
									nonearsite: !0
								}), !1;
								a.setData({
									nearSiteList: t.data
								}), a.params.page++
							}
						}
					})
				})
			},
			onHide: function () {
				this.setData({
					searchValue: ""
				})
			},
			collecteBtn: function (e) {
				var a = this,
					i = e.currentTarget.dataset.index;
				this.chargePileId = e.currentTarget.dataset.chargepileid, console.log(e);
				var n = this.data.nearSiteList,
					s = n[i];
				t.get({
					url: "/charge-pile-collect/add",
					requireAuth: !0,
					data: {
						chargePileId: this.chargePileId
					},
					success: function (t) {
						200 === t.statusCode ? (n[i].collected = !n[i].collected, a.setData({
							nearSiteList: n
						}), wx.showToast({
							title: s.collected ? "收藏成功" : "取消收藏",
							icon: "success",
							duration: 2e3
						})) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			onReachBottom: function () {
				this.nextPageSearch()
			},
			searchValueInput: function (t) {
				this.loadData(t.detail.value)
			},
			nextPageSearch: function () {
				var e = this;
				this.params.page ? t.get({
					url: "/wallet/findWalletPackagePile",
					requireAuth: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 == t.data.length) return wx.showToast({
								title: "已全部加载完！",
								icon: "none",
								duration: 2e3
							}), void(e.params.page = 0);
							var a = e.data.nearSiteList.concat(t.data);
							e.setData({
								nearSiteList: a
							}), e.params.page++
						}
					}
				}) : wx.showToast({
					title: "没有更多内容了",
					icon: "none",
					duration: 2e3
				})
			},
			navToSite: function (t) {
				var e = t.currentTarget.dataset.siteinfo.latitude,
					a = t.currentTarget.dataset.siteinfo.longitude,
					i = t.currentTarget.dataset.siteinfo.name,
					n = t.currentTarget.dataset.siteinfo.location;
				wx.openLocation({
					latitude: e,
					longitude: a,
					name: i,
					address: n,
					scale: 28
				})
			},
			navTositedetail: function (t) {
				if (this.params.page = 0, 1 != t.currentTarget.dataset.status) return wx.showToast({
					title: "该桩已离线，暂不支持手机端启动充电",
					icon: "none",
					duration: 2e3
				}), !1;
				var e = t.currentTarget.dataset.pileno,
					a = encodeURIComponent(e);
				if (-1 != t.currentTarget.dataset.distance.indexOf("千米") && parseFloat(t.currentTarget.dataset.distance) > 3 && t.currentTarget.dataset.needforge) {
					var i = t.currentTarget.dataset.avaliable;
					wx.navigateTo({
						url: "/pages/charge/detail/index?scene=" + a + "&avaliable=" + i
					})
				} else wx.navigateTo({
					url: "/pages/charge/detail/index?scene=" + a
				})
			}
		});
	});
	require("pages/mine/user-card/available-pile/index.js");
	__wxRoute = 'pages/mine/user-card/recharge-card/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/user-card/recharge-card/index.js';
	define("pages/mine/user-card/recharge-card/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, e, i) {
			return e in t ? Object.defineProperty(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = i, t
		}
		var e = require("../../../../utils/http.js");
		Page({
			data: {
				topupType: [],
				curtopup: "",
				id: "",
				siteName: "",
				checked: !1
			},
			onLoad: function (t) {
				var i = this;
				this.siteid = t.siteid, this.walletid = t.walletid, e.get({
					url: "/agent-denomination/index",
					data: {
						siteId: this.siteid
					},
					success: function (t) {
						i.setData({
							topupType: t.data.list,
							siteName: t.data.siteName
						})
					}
				})
			},
			onShow: function () {},
			ontapTopup: function (t) {
				var e = t.currentTarget.dataset.curtopupindex,
					i = t.currentTarget.dataset.id;
				this.setData({
					curtopup: e
				}), this.id = i
			},
			navTotopupagreement: function () {
				wx.navigateTo({
					url: "/pages/mine/topup/topup-agreement/index"
				})
			},
			checkboxChange: function () {
				this.setData({
					checked: !this.data.checked
				})
			},
			nowPay: function () {
				var i, a = this;
				return 0 === this.data.curtopup || this.data.curtopup ? 0 == this.data.checked ? (wx.showToast({
					title: "请同意《充值活动协议》",
					icon: "none",
					duration: 2e3
				}), !1) : void e.post((i = {
					url: "/agent-denomination/recharge/" + this.id,
					showLoading: !0,
					data: {
						channel: 1,
						siteId: this.siteid
					},
					requireAuth: !0
				}, t(i, "showLoading", !0), t(i, "success", function (t) {
					200 === t.statusCode && a.wxTopup(t.data)
				}), i)) : (wx.showToast({
					title: "请选择充值面额",
					icon: "none",
					duration: 2e3
				}), !1)
			},
			wxTopup: function (t) {
				wx.requestPayment({
					timeStamp: t.timestamp,
					nonceStr: t.noncestr,
					package: t.packageValue,
					signType: t.signType,
					paySign: t.sign,
					success: function (t) {
						"requestPayment:ok" === t.errMsg && setTimeout(function () {
							wx.showToast({
								title: "充值成功",
								icon: "success",
								duration: 2e3
							}), setTimeout(function () {
								wx.navigateBack({
									delta: 1
								}), wx.hideToast()
							}, 2e3)
						}, 100)
					},
					fail: function (t) {
						wx.showToast({
							title: "您取消了支付",
							icon: "none",
							duration: 2e3
						})
					}
				})
			}
		});
	});
	require("pages/mine/user-card/recharge-card/index.js");
	__wxRoute = 'pages/mine/user-card/card-explain/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/user-card/card-explain/index.js';
	define("pages/mine/user-card/card-explain/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Page({
			data: {},
			onLoad: function (n) {},
			onReady: function () {},
			onShow: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {}
		});
	});
	require("pages/mine/user-card/card-explain/index.js");
	__wxRoute = 'pages/mine/electric-card-management/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/index.js';
	define("pages/mine/electric-card-management/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";

		function t(t, a, e) {
			return a in t ? Object.defineProperty(t, a, {
				value: e,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[a] = e, t
		}
		var a = require("../../../utils/http.js");
		Page({
			data: {
				cardList: [],
				nocard: !1,
				selectedList: [],
				time: "获取验证码",
				VerificationCode: !0,
				currentTime: 60,
				showcardmodal: !1,
				isShowMask: !1,
				phone: "",
				captcha: "",
				bankCardNo: "",
				isShowBankCardNo: !1
			},
			captchaClick: !1,
			showmoreMdoal: [],
			onLoad: function (t) {},
			onReady: function () {},
			onShow: function () {
				var t = this;
				a.get({
					url: "/card/index",
					requireAuth: !0,
					loading: !0,
					success: function (a) {
						if (200 == a.statusCode) {
							for (var e = 0; e < a.data.length; e++) a.data[e].moreShowStau = !1;
							t.setData({
								cardList: a.data
							})
						}
					}
				})
			},
			onHide: function () {},
			showbankCardNo: function (t) {
				console.log(t), this.setData({
					isShowMask: !0,
					bankCardNo: t.currentTarget.dataset.bankcardno,
					isShowBankCardNo: !0
				})
			},
			navtoTopup: function (t) {
				var a = t.currentTarget.dataset.type,
					e = t.currentTarget.dataset.cardno;
				if (1 == a || 2 == a) wx.navigateTo({
					url: "/pages/mine/topup/index?cardNo=" + e + "&rechargeType=3"
				});
				else if (3 == a) {
					var i = t.currentTarget.dataset.activityenable,
						n = t.currentTarget.dataset.siteid;
					i ? wx.navigateTo({
						url: "/pages/mine/topup/index?cardNo=" + e + "&siteId=" + n + "&rechargeType=4"
					}) : wx.navigateTo({
						url: "/pages/mine/topup/index?cardNo=" + e + "&rechargeType=3"
					})
				}
			},
			bindCardTips: function () {
				wx.navigateTo({
					url: "/pages/mine/user-card/card-explain/index"
				})
			},
			navtoActivationCard: function () {
				wx.navigateTo({
					url: "./activation-card/index"
				})
			},
			navtoSubStitute: function () {
				wx.navigateTo({
					url: "./replacement-card/index"
				})
			},
			navtoAddElecard: function () {
				this.data.cardList.length >= 5 ? wx.showToast({
					title: "最多可添加5张电卡！",
					icon: "none",
					duration: 2e3
				}) : wx.navigateTo({
					url: "./activation-card/index"
				})
			},
			navtoBuyEntitycard: function () {
				wx.navigateTo({
					url: "/pages/mine/topup/index?rechargeType=6"
				})
			},
			Delete: function (t) {
				var e = this,
					i = t.currentTarget.dataset,
					n = i.cardno,
					o = i.delid;
				wx.showModal({
					title: "确认解绑电卡:" + n + "吗?",
					content: "",
					success: function (t) {
						t.confirm && a.delete({
							url: "/card/delete/" + o,
							requireAuth: !0,
							success: function (t) {
								if (t.isOk()) {
									var a = [];
									e.data.cardList.forEach(function (t) {
										t.id != o && a.push(t)
									}), e.setData({
										cardList: a
									})
								} else wx.showToast({
									title: t.data,
									icon: "none",
									duration: 2e3
								})
							},
							fail: function (t) {}
						})
					}
				})
			},
			loss: function (t) {
				var a = this;
				this.curglobalcardNo = t.currentTarget.dataset.cardno, wx.showModal({
					title: "确认挂失电卡:" + this.curglobalcardNo + "吗?",
					content: "",
					success: function (e) {
						e.confirm && (a.mobile = "", clearInterval(a.interval), a.setData({
							phone: "",
							captcha: "",
							time: "获取验证码",
							currentTime: 60,
							VerificationCode: !0
						}), a.captchaClick = !1, a.setData({
							judge: 0
						}), a.curglobalcardId = t.currentTarget.dataset.id, a.setData({
							showcardmodal: !0,
							isShowMask: !0
						}))
					}
				})
			},
			backto: function (t) {
				var a = this;
				this.curglobalcardNo = t.currentTarget.dataset.cardno, wx.showModal({
					title: "确认找回电卡:" + this.curglobalcardNo + "吗?",
					content: "",
					success: function (e) {
						e.confirm && (a.mobile = "", clearInterval(a.interval), a.setData({
							phone: "",
							captcha: "",
							time: "获取验证码",
							currentTime: 60,
							VerificationCode: !0
						}), a.captchaClick = !1, a.setData({
							judge: 1
						}), a.curglobalcardNo = t.currentTarget.dataset.cardno, a.curglobalcardId = t.currentTarget.dataset.id, a.setData({
							showcardmodal: !0,
							isShowMask: !0
						}))
					}
				})
			},
			searchRecord: function (t) {
				wx.navigateTo({
					url: "/pages/index/records/index?cardNo=" + t.currentTarget.dataset.cardno
				})
			},
			changeName: function (a) {
				var e = a.currentTarget.dataset.index;
				this.setData(t({}, "selectedList[" + e + "]", this.data.selectedList[e] ? null : e + 1));
				for (var i = 0; i < this.data.selectedList.length; i++) this.data.selectedList[i] || (this.data.cardList[i].moreShowStau = !1);
				this.setData({
					cardList: this.data.cardList
				})
			},
			pullcardList: function () {
				var t = this;
				a.get({
					url: "/card/index",
					requireAuth: !0,
					success: function (a) {
						if (200 == a.statusCode)
							if (0 == a.data.length) t.setData({
								nocard: !0,
								cardList: a.data
							});
							else {
								var e = t.data.cardList.map(function (t, e) {
									return Object.assign(t, a.data[e])
								});
								t.setData({
									cardList: e
								})
							}
					}
				})
			},
			getVerificationCode: function (t) {
				var a = this.mobile;
				return a ? /^1\d{10}$/.test(a) ? !this.captchaClick && "countdownnow" != t.currentTarget.id && (this.captchaClick = !0, void this.getCode()) : (wx.showToast({
					title: "手机号码格式不正确",
					icon: "none",
					duration: 2e3
				}), !1) : (wx.showToast({
					title: "获取验证码之前请先填写手机号",
					icon: "none",
					duration: 2e3
				}), !1)
			},
			getCode: function (t) {
				var e = this,
					i = this.mobile;
				a.post({
					url: "/comm/captcha",
					showLoading: !0,
					loadingText: "正在获取验证码...",
					requireAuth: !0,
					data: {
						phone: i
					},
					success: function (t) {
						if (200 === t.statusCode) {
							var a = e.data.currentTime;
							e.interval = setInterval(function () {
								a--, e.setData({
									time: a + "秒",
									VerificationCode: !1
								}), a <= 0 && (clearInterval(e.interval), e.setData({
									time: "重新获取",
									currentTime: 60,
									VerificationCode: !0
								}), e.captchaClick = !1)
							}, 1e3), wx.showToast({
								title: "发送短信验证码成功，请注意查看您的手机",
								icon: "none",
								duration: 2e3
							})
						} else e.captchaClick = !1
					},
					fail: function () {
						e.captchaClick = !1
					}
				})
			},
			formSubmit: function (t) {
				var e = this,
					i = t.detail.value;
				return "" === i.phone ? (wx.showToast({
					title: "手机号码不能为空",
					icon: "none",
					duration: 2e3
				}), !1) : /^1\d{10}$/.test(i.phone) ? "" == i.captcha ? (wx.showToast({
					title: "验证码不能为空",
					icon: "none",
					duration: 2e3
				}), !1) : void(0 == this.data.judge ? a.post({
					url: "/card/set-lost/" + this.curglobalcardId,
					requireAuth: !0,
					showLoading: !0,
					data: i,
					success: function (t) {
						200 == t.statusCode ? (e.pullcardList(), e.setData({
							showcardmodal: !1,
							isShowMask: !1
						}), wx.showToast({
							title: "挂失成功",
							icon: "none",
							duration: 2e3
						})) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				}) : a.post({
					url: "/card/get-back/" + this.curglobalcardId,
					data: i,
					showLoading: !0,
					requireAuth: !0,
					success: function (t) {
						200 == t.statusCode ? (e.pullcardList(), e.setData({
							showcardmodal: !1,
							isShowMask: !1
						}), wx.showToast({
							title: "找回成功",
							icon: "none",
							duration: 2e3
						})) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})) : (wx.showToast({
					title: "手机号码格式不正确",
					icon: "none",
					duration: 2e3
				}), !1)
			},
			mobileInputEvent: function (t) {
				this.mobile = t.detail.value
			},
			maskhide: function () {
				this.setData({
					showcardmodal: !1,
					isShowMask: !1
				})
			},
			rollOut: function (t) {
				var a = t.currentTarget.dataset.id,
					e = t.currentTarget.dataset.availablebalance,
					i = t.currentTarget.dataset.cardnum;
				wx.navigateTo({
					url: "./rollinorout/index?id=" + a + "&cardNum=" + i + "&availablebalance=" + e + "&type=0"
				})
			},
			serachWalletBalance: function (t, e) {
				a.get({
					url: "/wallet/balance",
					requireAuth: !0,
					success: function (a) {
						if (200 == a.statusCode) {
							var i = a.data.amount;
							wx.navigateTo({
								url: "./rollinorout/index?id=" + t + "&cardNum=" + e + "&availablebalance=" + i + "&type=1"
							})
						}
					}
				})
			},
			rollIn: function (t) {
				var a = t.currentTarget.dataset.id,
					e = t.currentTarget.dataset.cardnum;
				this.serachWalletBalance(a, e)
			},
			controlmoresuspension: function (t) {
				for (var a = 0; a < this.data.cardList.length; a++) a == t.currentTarget.dataset.i ? this.data.cardList[a].moreShowStau = !t.currentTarget.dataset.moreshowstau : this.data.cardList[a].moreShowStau = !1;
				this.setData({
					cardList: this.data.cardList
				})
			},
			showRange: function (t) {
				if (t.currentTarget.dataset.cardsite) {
					var a = t.currentTarget.dataset.id;
					wx.navigateTo({
						url: "/pages/mine/electric-card-management/card-avaliable-site/index?id=" + a
					})
				} else wx.showToast({
					title: "该电卡适用于所有站点！",
					icon: "none",
					duration: 2e3
				})
			},
			closeMask: function () {
				this.setData({
					isShowMask: !1,
					isShowBankCardNo: !1
				})
			},
			showCardDetail: function (t) {
				var a = t.currentTarget.dataset.id;
				wx.navigateTo({
					url: "/pages/mine/electric-card-management/free-card-detail/index?id=" + a
				})
			}
		});
	});
	require("pages/mine/electric-card-management/index.js");
	__wxRoute = 'pages/mine/electric-card-management/activation-card/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/activation-card/index.js';
	define("pages/mine/electric-card-management/activation-card/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js");
		Page({
			data: {
				time: "获取验证码",
				canGetCode: !0,
				currentTime: 60,
				Activationtypelist: [],
				added: !1,
				checked: !1,
				telePhone: "",
				cardNo: "",
				phoneDisabled: !1,
				isFreeCard: !1,
				errMsg: ""
			},
			captchaClick: !1,
			onReady: function () {},
			getChargeNum: function (e) {
				var a = this;
				10 == e.detail.value.length && t.post({
					url: "/card/get-phone-by-cardNo",
					requireAuth: !0,
					data: {
						cardNo: e.detail.value
					},
					success: function (t) {
						if (console.log(t), 200 === t.statusCode) {
							a.setData({
								isFreeCard: t.data.freeCard
							});
							var e = {},
								n = [];
							e.showtext = "暂不充值", e.denominationId = 0, n.push(e), t.data.denomination.forEach(function (t) {
								var e = {};
								e.showtext = "充" + t.rechargeAmount / 100 + "元 ,送" + t.bonusAmount / 100 + "元", e.denominationId = t.id, n.push(e)
							}), a.setData({
								Activationtypelist: n
							}), 1 == t.data.bind && (a.mobile = t.data.phone, a.setData({
								telePhone: t.data.phone,
								phoneDisabled: !0
							}))
						} else a.setData({
							errMsg: t.data
						}), wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						a.setData({
							errMsg: t.data
						}), wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			mobileInputEvent: function (t) {
				this.mobile = t.detail.value
			},
			getVerificationCode: function (t) {
				if (this.data.errMsg) wx.showToast({
					title: this.data.errMsg + ",不可获取验证码！",
					icon: "none",
					duration: 2e3
				});
				else {
					var e = this.mobile;
					e ? /^1\d{10}$/.test(e) ? this.captchaClick || "countdownnow" == t.currentTarget.id || (this.captchaClick = !0, this.getCode()) : wx.showToast({
						title: "预留号码格式不正确",
						icon: "none",
						duration: 2e3
					}) : wx.showToast({
						title: "获取验证码之前请先填写手机号",
						icon: "none",
						duration: 2e3
					})
				}
			},
			getCode: function (e) {
				var a = this,
					n = this.mobile;
				t.post({
					url: "/comm/captcha",
					showLoading: !0,
					loadingText: "正在获取验证码...",
					requireAuth: !0,
					data: {
						phone: n
					},
					success: function (t) {
						if (200 === t.statusCode) {
							var e = a.data.currentTime,
								n = setInterval(function () {
									e--, a.setData({
										time: e + "秒",
										canGetCode: !1
									}), e <= 0 && (clearInterval(n), a.setData({
										time: "重新发送",
										currentTime: 60,
										canGetCode: !0
									}), a.captchaClick = !1)
								}, 1e3);
							wx.showToast({
								title: "发送短信验证码成功，请注意查看您的手机",
								icon: "none",
								duration: 2e3
							})
						} else a.captchaClick = !1
					},
					fail: function (t) {
						a.captchaClick = !1
					}
				})
			},
			bindPowerChange: function (t) {
				this.setData({
					showActivation: this.data.Activationtypelist[t.detail.value].showtext
				}), 0 == this.data.Activationtypelist[t.detail.value].denominationId ? this.denominationId = null : this.denominationId = this.data.Activationtypelist[t.detail.value].denominationId
			},
			makepricerange: function () {
				var e = this;
				t.get({
					url: "/denomination/index",
					data: {
						type: 3
					},
					success: function (t) {
						var a = {
								showtext: "暂不充值",
								denominationId: 0
							},
							n = [];
						n.push(a), t.data.forEach(function (t) {
							a.showtext = "充" + t.rechargeAmount / 100 + "元 ,送" + t.bonusAmount / 100 + "元", a.denominationId = t.id, n.push(a)
						}), e.setData({
							Activationtypelist: n
						})
					}
				})
			},
			addedChange: function (t) {
				this.setData({
					added: t.detail.value
				})
			},
			formSubmit: function (t) {
				var e = this,
					a = t.detail.value;
				a.denominationId = this.denominationId, a.channel = 1, a.added = this.data.added, a.cardNo.trim() ? 10 == a.cardNo.length ? a.phone.trim() ? /^1\d{10}$/.test(a.phone) ? a.captcha.trim() ? this.data.checked ? wx.showModal({
					title: "确认添加该卡吗",
					content: "",
					success: function (t) {
						t.confirm && e.enableCard(a)
					}
				}) : wx.showToast({
					title: "请同意《充值活动协议》",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "验证码不能为空",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "预留号码格式不正确",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "预留号码不能为空",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "充电卡号长度为10位",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "充电卡号不能为空",
					icon: "none",
					duration: 2e3
				})
			},
			enableCard: function (e) {
				var a = this;
				t.post({
					url: "/card/add-and-enable",
					data: e,
					showLoading: !0,
					requireAuth: !0,
					success: function (t) {
						200 === t.statusCode ? void 0 === e.denominationId || null == e.denominationId ? wx.navigateBack({
							delta: 1
						}) : a.wxTopup(t.data) : wx.showModal({
							title: t.data,
							showCancel: !1,
							content: ""
						})
					},
					fail: function (t) {
						wx.showModal({
							title: t.data,
							showCancel: !1,
							content: ""
						})
					}
				})
			},
			navTotopupagreement: function () {
				wx.navigateTo({
					url: "/pages/mine/topup/topup-agreement/index"
				})
			},
			wxTopup: function (t) {
				wx.requestPayment({
					timeStamp: t.timestamp,
					nonceStr: t.noncestr,
					package: t.packageValue,
					signType: t.signType,
					paySign: t.sign,
					success: function (t) {
						"requestPayment:ok" === t.errMsg && wx.showToast({
							title: "支付成功",
							duration: 3e3,
							complete: function () {
								setTimeout(function () {
									wx.navigateBack({
										delta: 1
									})
								}, 3e3)
							}
						})
					},
					fail: function (t) {
						wx.showToast({
							title: "您取消了支付",
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			checkboxChange: function () {
				this.setData({
					checked: !this.data.checked
				})
			}
		});
	});
	require("pages/mine/electric-card-management/activation-card/index.js");
	__wxRoute = 'pages/mine/electric-card-management/add-electric-card/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/add-electric-card/index.js';
	define("pages/mine/electric-card-management/add-electric-card/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js");
		Page({
			data: {
				time: "获取验证码",
				VerificationCode: !0,
				currentTime: 60,
				Activationtypelist: []
			},
			captchaClick: !1,
			onLoad: function (t) {},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			mobileInputEvent: function (t) {
				this.mobile = t.detail.value
			},
			getVerificationCode: function (t) {
				var o = this.mobile;
				return o ? /^1\d{10}$/.test(o) ? !this.captchaClick && "countdownnow" != t.currentTarget.id && (this.captchaClick = !0, void this.getCode()) : (wx.showToast({
					title: "预留号码格式不正确",
					icon: "none",
					duration: 2e3
				}), !1) : (wx.showToast({
					title: "获取验证码之前请先填写手机号",
					icon: "none",
					duration: 2e3
				}), !1)
			},
			getCode: function (o) {
				var e = this,
					i = this.mobile;
				t.post({
					url: "/comm/captcha",
					showLoading: !0,
					loadingText: "正在获取验证码...",
					data: {
						phone: i
					},
					requireAuth: !0,
					success: function (t) {
						if (200 === t.statusCode) {
							var o = e.data.currentTime,
								i = setInterval(function () {
									o--, e.setData({
										time: o + "秒",
										VerificationCode: !1
									}), o <= 0 && (clearInterval(i), e.setData({
										time: "重新发送",
										currentTime: 60,
										VerificationCode: !0
									}), e.captchaClick = !1)
								}, 1e3);
							wx.showToast({
								title: "发送短信验证码成功，请注意查看您的手机",
								icon: "none",
								duration: 2e3
							})
						} else e.captchaClick = !1
					},
					fail: function () {
						e.captchaClick = !1
					}
				})
			},
			formSubmit: function (o) {
				var e = o.detail.value;
				return "" == e.cardNo ? (wx.showToast({
					title: "充电卡号不能为空",
					icon: "none",
					duration: 2e3
				}), !1) : 10 != e.cardNo.length ? (wx.showToast({
					title: "充电卡号长度为10位",
					icon: "none",
					duration: 2e3
				}), !1) : "" === e.phone ? (wx.showToast({
					title: "预留号码不能为空",
					icon: "none",
					duration: 2e3
				}), !1) : /^1\d{10}$/.test(e.phone) ? "" == e.captcha ? (wx.showToast({
					title: "验证码不能为空",
					icon: "none",
					duration: 2e3
				}), !1) : void t.post({
					url: "/card/add",
					data: e,
					showLoading: !0,
					loadingText: "正在添加...",
					requireAuth: !0,
					success: function (t) {
						200 == t.statusCode ? (wx.showToast({
							title: "添加电卡成功",
							icon: "none",
							duration: 2e3
						}), setTimeout(function () {
							wx.navigateBack({
								delta: 1
							})
						}, 1100)) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				}) : (wx.showToast({
					title: "预留号码格式不正确",
					icon: "none",
					duration: 2e3
				}), !1)
			},
			saocard: function () {
				var t = this;
				wx.scanCode({
					success: function (o) {
						/^[0-9]{10}$/.test(o.result) ? t.setData({
							cardNo: o.result
						}) : wx.showToast({
							title: "扫码错误请手动输入卡号",
							icon: "none",
							duration: 2e3
						})
					}
				})
			}
		});
	});
	require("pages/mine/electric-card-management/add-electric-card/index.js");
	__wxRoute = 'pages/mine/electric-card-management/rollinorout/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/rollinorout/index.js';
	define("pages/mine/electric-card-management/rollinorout/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var a = require("../../../../utils/http.js");
		Page({
			data: {
				wrong: !1,
				wrongResult: "",
				Result: "",
				inputbalance: "",
				type: ""
			},
			viewamount: "",
			withdrawal: "",
			drawal: "",
			cardId: "",
			onLoad: function (a) {
				this.availablebalance = a.availablebalance, this.cardId = a.id, this.setData({
					type: a.type,
					cardNum: a.cardNum
				}), 0 == this.data.type ? wx.setNavigationBarTitle({
					title: "转出到余额"
				}) : wx.setNavigationBarTitle({
					title: "转入到电卡"
				}), this.setData({
					Result: "可用余额" + this.availablebalance / 100 + "元"
				})
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {},
			sure: function () {
				var t = this,
					e = /\./g;
				this.drawal.indexOf(".") > -1 && this.drawal.match(e).length >= 2 && (this.setData({
					inputbalance: ""
				}), this.drawal = "", wx.showToast({
					title: "金额格式不正确",
					icon: "none",
					duration: 2e3
				})), !this.data.wrong && this.drawal && (0 == this.data.type ? wx.showModal({
					title: "确定转出到余额吗",
					content: "",
					success: function (e) {
						e.confirm && a.post({
							url: "/card/transfer-to-wallet",
							showLoading: !0,
							loadingText: "正在转出...",
							requireAuth: !0,
							data: {
								id: t.cardId,
								amount: Math.round(100 * t.drawal)
							},
							success: function (a) {
								200 === a.statusCode && (t.updateCardAmount(), wx.showToast({
									title: "转出成功",
									icon: "none",
									duration: 2e3
								}), setTimeout(function () {
									wx.navigateBack({
										delta: 1
									})
								}, 1e3))
							}
						})
					}
				}) : wx.showModal({
					title: "确定转入到卡片吗",
					content: "",
					success: function (e) {
						e.confirm && a.post({
							url: "/wallet/transfer-to-card",
							showLoading: !0,
							loadingText: "正在转入...",
							requireAuth: !0,
							data: {
								cardId: t.cardId,
								amount: Math.round(100 * t.drawal)
							},
							success: function (a) {
								200 === a.statusCode && (t.updateWalletAmount(), wx.showToast({
									title: "转入成功",
									icon: "none",
									duration: 2e3
								}), setTimeout(function () {
									wx.navigateBack({
										delta: 1
									})
								}, 1e3))
							}
						})
					}
				}))
			},
			updateCardAmount: function () {
				this.availablebalance = this.availablebalance - Math.round(100 * this.drawal), this.setData({
					Result: "可用余额" + this.availablebalance / 100 + "元"
				}), this.setData({
					inputbalance: ""
				}), this.drawal = ""
			},
			updateWalletAmount: function () {
				var t = this;
				this.setData({
					inputbalance: ""
				}), this.drawal = "", a.get({
					url: "/wallet/balance",
					requireAuth: !0,
					success: function (a) {
						200 === a.statusCode && (t.availablebalance = a.data.amount, t.setData({
							Result: "可用余额" + t.availablebalance / 100 + "元"
						}))
					}
				})
			},
			input: function (a) {
				var t = a.detail.value;
				if (t < 1 ? this.setData({
						wrong: !0,
						wrongResult: "!最小金额为1.00"
					}) : t > this.availablebalance / 100 ? this.setData({
						wrong: !0,
						wrongResult: "!余额不足"
					}) : this.setData({
						wrong: !1,
						Result: "可用余额" + this.availablebalance / 100 + "元"
					}), t.indexOf(".") > 0) {
					t.split(".").length - 1 > 1 && (t = t.substring(0, t.indexOf(".")), this.availablebalance / 100 < t && this.setData({
						wrong: !0,
						wrongResult: "!余额不足"
					}));
					var e = t.split(".")[1];
					e && e.length > 2 && (t = t.substring(0, t.indexOf(".") + 3))
				}
				return "" == t && this.setData({
					wrong: !1,
					Result: "可用余额" + this.availablebalance / 100 + "元"
				}), this.drawal = t, t
			}
		});
	});
	require("pages/mine/electric-card-management/rollinorout/index.js");
	__wxRoute = 'pages/mine/electric-card-management/buy-entity-card/cardorder/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/buy-entity-card/cardorder/index.js';
	define("pages/mine/electric-card-management/buy-entity-card/cardorder/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../../utils/http.js"),
			a = require("../../../../../utils/pay.js");
		Page({
			data: {
				rechargeAmount: "",
				num: 1,
				minusStatus: "disabled",
				changeShippingMode: !1,
				payWay: "邮费在线支付",
				area: "",
				postType: 2,
				postObject: [],
				isShowPicker: !1,
				miniType: 1
			},
			denominationId: "",
			oldChangeValue: [0, 0, 0],
			resulitcityinfo: "",
			onLoad: function (t) {
				this.setData({
					miniType: wx.getStorageSync("miniType")
				}), this.denominationId = Number(t.denominationId), this.setData({
					rechargeAmount: Number(t.rechargeAmount)
				}), this.buyCardParam()
			},
			onReady: function (t) {},
			bindMinus: function () {
				var t = this.data.num;
				t > 1 && t--;
				var a = t <= 1 ? "disabled" : "normal";
				this.setData({
					num: t,
					minusStatus: a
				})
			},
			bindPlus: function () {
				var t = this.data.num,
					a = ++t < 1 ? "disabled" : "normal";
				this.setData({
					num: t,
					minusStatus: a
				})
			},
			bindManual: function (t) {
				var a = t.detail.value;
				if (0 == a && "" != a) return 1;
				"" === a ? this.setData({
					postFee: 0
				}) : this.setData({
					postFee: this.recordpostFee
				}), this.setData({
					num: a
				})
			},
			bindRegionChange: function (t) {
				var a = t.detail.value,
					i = a[0] + " " + a[1] + " " + a[2];
				this.setData({
					area: i
				})
			},
			onChange: function (t) {
				for (var a = t.detail.value, i = 0; i < a.length; i++)
					if (a[i] != this.oldChangeValue[i]) switch (console.log(i, "change变化的是那个"), i) {
						case 0:
							this.chooseprovince(this.data.provincesArray[a[i]].id, a);
							break;
						case 1:
							this.choosecity(this.data.citiesArray[a[i]].id, a);
							break;
						case 2:
							this.setfinally(a)
					}
				this.oldChangeValue = t.detail.value
			},
			chooseprovince: function (t, a) {
				var i = this;
				console.log(t, "省份ID"), this.httpGetCity("/comm/cities", {
					provinceId: t
				}, function (t) {
					i.setData({
						citiesArray: t.data
					}, function () {
						var e;
						e = i.shiIndex && t.data.length >= i.shiIndex + 1 ? t.data[i.shiIndex].id : t.data[0].id, i.httpGetCity("/comm/districts", {
							cityId: e
						}, function (t) {
							console.log(t), i.setData({
								districtsArray: t.data
							}, function () {
								i.setfinally(a)
							})
						})
					})
				})
			},
			choosecity: function (t, a) {
				var i = this;
				this.shiIndex = a[1], this.httpGetCity("/comm/districts", {
					cityId: t
				}, function (t) {
					i.setData({
						districtsArray: t.data
					}, function () {
						console.log(), i.setfinally(a)
					})
				})
			},
			setfinally: function (t) {
				var a, i;
				a = this.data.citiesArray.length < t[1] + 1 ? this.data.citiesArray[0].name : this.data.citiesArray[t[1]].name, i = this.data.districtsArray.length < t[2] + 1 ? this.data.districtsArray[0].name : this.data.districtsArray[t[2]].name, this.resulitcityinfo = this.data.provincesArray[t[0]].name + " " + a + " " + i
			},
			showpicker: function () {
				var t = this;
				this.setData({
					isShowPicker: !0
				}, function () {
					t.initlinkage()
				})
			},
			cancelProvinces: function () {
				this.setData({
					isShowPicker: !1
				})
			},
			sureProvinces: function () {
				this.setData({
					isShowPicker: !1,
					area: this.resulitcityinfo
				})
			},
			initlinkage: function () {
				var t = this;
				this.httpGetCity("/comm/provinces", function (a) {
					t.setData({
						provincesArray: a.data
					}, function () {
						t.httpGetCity("/comm/cities", {
							provinceId: a.data[0].id
						}, function (a) {
							t.setData({
								citiesArray: a.data
							}, function () {
								t.httpGetCity("/comm/districts", {
									cityId: a.data[0].id
								}, function (a) {
									t.setData({
										districtsArray: a.data
									}, function () {
										t.resulitcityinfo = t.data.provincesArray[0].name + " " + t.data.citiesArray[0].name + " " + t.data.districtsArray[0].name
									})
								})
							})
						})
					})
				})
			},
			httpGetCity: function () {
				for (var a = arguments.length, i = Array(a), e = 0; e < a; e++) i[e] = arguments[e];
				3 === i.length ? t.get({
					url: i[i.length - 3],
					data: i[i.length - 2],
					success: function (t) {
						i[i.length - 1](t)
					}
				}) : t.get({
					url: i[i.length - 2],
					showLoading: !0,
					success: function (t) {
						i[i.length - 1](t)
					}
				})
			},
			showChangeShippingMode: function () {
				this.setData({
					changeShippingMode: !0
				}), wx.setNavigationBarColor({
					frontColor: "#000000",
					backgroundColor: "#666666"
				})
			},
			hidechangeShippingMode: function () {
				this.setData({
					changeShippingMode: !1
				}), wx.setNavigationBarColor({
					frontColor: "#000000",
					backgroundColor: "#ffffff"
				})
			},
			changeoPerate: function (t) {
				this.setData({
					changeShippingMode: !1
				}), wx.setNavigationBarColor({
					frontColor: "#000000",
					backgroundColor: "#ffffff"
				});
				var a = Number(t.currentTarget.dataset.posttype);
				1 == a ? this.setData({
					payWay: "邮费到付",
					postType: a
				}) : 2 == a && this.setData({
					payWay: "邮费在线支付",
					postType: a
				})
			},
			buyCardSubmit: function (t) {
				var a = t.detail.value;
				a.denominationId = this.denominationId, a.channel = 1, a.postType = this.data.postType, "" != a.cardCount ? "" !== a.receiverName ? "" !== a.receiverPhone ? /^1\d{10}$/.test(a.receiverPhone) ? "" !== a.district ? "" !== a.addressDetail ? this.send(a) : wx.showToast({
					title: "请输入详细地址",
					icon: "none"
				}) : wx.showToast({
					title: "请选择所在地",
					icon: "none"
				}) : wx.showToast({
					title: "手机号码格式不正确",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "手机号不能为空",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "收货人不能为空",
					icon: "none",
					duration: 2e3
				}) : wx.showToast({
					title: "请至少购买一个",
					icon: "none",
					duration: 2e3
				})
			},
			send: function (a) {
				var i = this;
				t.post({
					url: "/card/online-buy-card",
					showLoading: !0,
					requireAuth: !0,
					data: a,
					success: function (t) {
						i.wx_zfbTopup(t.data)
					}
				})
			},
			buyCardParam: function () {
				var a = this;
				t.get({
					url: "/card/buy-card-param",
					requireAuth: !0,
					success: function (t) {
						a.recordpostFee = t.data.postFee, a.setData({
							postFee: t.data.postFee,
							postObject: t.data.postType,
							cardFee: t.data.cardFee
						})
					}
				})
			},
			wx_zfbTopup: function (t) {
				a.pay(t).then(function (t) {
					wx.redirectTo({
						url: "/pages/mine/electric-card-management/buy-entity-card/success/index"
					})
				}).catch(function (t) {})
			}
		});
	});
	require("pages/mine/electric-card-management/buy-entity-card/cardorder/index.js");
	__wxRoute = 'pages/mine/electric-card-management/buy-entity-card/success/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/buy-entity-card/success/index.js';
	define("pages/mine/electric-card-management/buy-entity-card/success/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Page({
			data: {},
			onLoad: function (n) {},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {}
		});
	});
	require("pages/mine/electric-card-management/buy-entity-card/success/index.js");
	__wxRoute = 'pages/mine/electric-card-management/replacement-card/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/replacement-card/index.js';
	define("pages/mine/electric-card-management/replacement-card/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var a = require("../../../../utils/http.js"),
			t = require("../../../../utils/auth.js");
		Page({
			data: {
				viewCardNum: ""
			},
			cardNo: 0,
			onLoad: function (a) {
				a.viewCardNum && (this.setData({
					viewCardNum: a.viewCardNum
				}), this.cardNo = a.viewCardNum)
			},
			onReady: function () {},
			onShow: function () {},
			getCardNo: function (a) {
				this.cardNo = a.detail.value
			},
			nextStep: function () {
				var e = this;
				if (this.cardNo.length) {
					var i = "/pages/mine/electric-card-management/replacement-card/index" + (this.cardNo ? "?viewCardNum=" + this.cardNo : "");
					t.authorized(!0, !0, i) && a.post({
						url: "/card/info",
						requireAuth: !0,
						data: {
							cardNo: this.cardNo
						},
						success: function (a) {
							200 === a.statusCode ? 3 == a.data.type && 1 == a.data.activityEnable ? wx.navigateTo({
								url: "/pages/mine/topup/index?cardNo=" + e.cardNo + "&siteId=" + a.data.siteId + "&rechargeType=4"
							}) : 1 == a.data.type || 2 == a.data.type ? wx.navigateTo({
								url: "/pages/mine/topup/index?cardNo=" + e.cardNo + "&rechargeType=3"
							}) : 3 == a.data.type && 0 == a.data.activityEnable && wx.showToast({
								title: "专用账户充值活动已停止！",
								icon: "none",
								duration: 2e3
							}) : wx.showToast({
								title: a.data,
								icon: "none",
								duration: 2e3
							})
						},
						fail: function (a) {
							wx.showToast({
								title: a.data,
								icon: "none",
								duration: 2e3
							})
						}
					})
				} else wx.showToast({
					title: "请输入卡号",
					icon: "none",
					duration: 2e3
				})
			}
		});
	});
	require("pages/mine/electric-card-management/replacement-card/index.js");
	__wxRoute = 'pages/mine/electric-card-management/free-card-detail/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/free-card-detail/index.js';
	define("pages/mine/electric-card-management/free-card-detail/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js");
		Page({
			data: {
				id: "",
				freeDetailList: []
			},
			onLoad: function (t) {
				this.setData({
					id: t.id
				}), this.getFreeDetail()
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			getFreeDetail: function () {
				var e = this,
					i = {
						id: this.data.id
					};
				t.post({
					url: "/card/show-free-card",
					data: i,
					showLoading: !0,
					requireAuth: !0,
					success: function (t) {
						200 == t.statusCode && e.setData({
							freeDetailList: t.data
						})
					}
				})
			}
		});
	});
	require("pages/mine/electric-card-management/free-card-detail/index.js");
	__wxRoute = 'pages/mine/electric-card-management/card-avaliable-site/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/electric-card-management/card-avaliable-site/index.js';
	define("pages/mine/electric-card-management/card-avaliable-site/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../../utils/http.js"),
			e = (require("../../../../utils/util.js"), require("../../../../utils/location.js"));
		getApp();
		Page({
			data: {
				id: "",
				isShowPrice: !0,
				nearSiteList: [],
				longitude: 120.64247,
				latitude: 31.323
			},
			onLoad: function (t) {
				this.setData({
					id: t.id
				})
			},
			onReady: function () {
				var t = this;
				e.getLocation(function (e) {
					t.setData({
						latitude: e.latitude,
						longitude: e.longitude
					})
				})
			},
			onShow: function () {
				this.getCardSite()
			},
			onReachBottom: function () {},
			navTositedetail: function (t) {
				var e = t.currentTarget.dataset.siteid;
				wx.navigateTo({
					url: "/pages/index/site-detail/index?siteId=" + e
				})
			},
			listNavToSite: function (t) {
				var e = t.currentTarget.dataset.siteinfo.latitude,
					i = t.currentTarget.dataset.siteinfo.longitude,
					a = t.currentTarget.dataset.siteinfo.name,
					n = t.currentTarget.dataset.siteinfo.location;
				wx.openLocation({
					latitude: e,
					longitude: i,
					name: a,
					address: n,
					scale: 28
				})
			},
			getCardSite: function () {
				var e = this,
					i = {
						id: this.data.id,
						latitude: this.data.latitude,
						longitude: this.data.longitude
					};
				t.post({
					url: "/card/apply-to-site",
					data: i,
					showLoading: !0,
					requireAuth: !0,
					success: function (t) {
						console.log(t), 200 == t.statusCode && e.setData({
							nearSiteList: t.data
						})
					}
				})
			}
		});
	});
	require("pages/mine/electric-card-management/card-avaliable-site/index.js");
	__wxRoute = 'pages/mine/topup/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/topup/index.js';
	define("pages/mine/topup/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/http.js"),
			e = require("../../../utils/pay.js");
		Page({
			data: {
				topupType: [],
				curtopup: "",
				checked: !1,
				rechargeType: 0,
				isWeChat: !0,
				siteName: "",
				cardNo: "",
				avalibleInput: !1,
				buttonText: "立即充值",
				showRechargeTips: !0
			},
			siteId: "",
			walletId: 0,
			id: "",
			miniType: 1,
			onLoad: function (t) {
				var e = t.rechargeType;
				console.log(e), this.setData({
					rechargeType: e
				}), this.miniType = wx.getStorageSync("miniType");
				var a = "充值";
				switch (e) {
					case "1":
						a = "余额充值", this.getRechargeDenomination(1);
						break;
					case "2":
						a = "专用账户充值", this.walletId = t.walletId, this.getRechargeDenomination(1);
						break;
					case "3":
						a = "电卡充值", this.setData({
							cardNo: t.cardNo
						}), this.getRechargeDenomination(2);
						break;
					case "4":
						a = "专用电卡充值", this.siteId = t.siteId, this.setData({
							cardNo: t.cardNo,
							avalibleInput: !!t.cardNo
						}), this.getRechargeAgentDenomination(this.siteId);
						break;
					case "5":
						a = "专用活动钱包充值", this.siteId = t.siteId, this.walletId = t.walletId, this.getRechargeAgentDenomination(this.siteId);
						break;
					case "6":
						a = "购买电卡", this.setData({
							buttonText: "立即购买"
						}), this.getRechargeDenomination(4)
				}
				wx.setNavigationBarTitle({
					title: a
				})
			},
			onShow: function () {},
			getRechargeAgentDenomination: function (e) {
				var a = this;
				t.get({
					url: "/agent-denomination/index",
					data: {
						siteId: e
					},
					success: function (t) {
						wx.hideLoading(), a.setData({
							topupType: t.data.list,
							siteName: t.data.siteName
						})
					}
				})
			},
			getRechargeDenomination: function (e) {
				var a = this;
				t.get({
					url: "/denomination/index",
					data: {
						type: e
					},
					success: function (t) {
						wx.hideLoading(), a.setData({
							topupType: t.data
						})
					}
				})
			},
			ontapTopup: function (t) {
				var e = t.currentTarget.dataset.curtopupindex,
					a = t.currentTarget.dataset.id;
				this.setData({
					curtopup: e
				}), this.id = a
			},
			navTotopupagreement: function () {
				wx.navigateTo({
					url: "/pages/mine/topup/topup-agreement/index"
				})
			},
			checkboxChange: function () {
				this.setData({
					checked: !this.data.checked
				})
			},
			nowPay: function () {
				var e = this;
				if (this.id || 0 === this.id)
					if (this.data.checked)
						if (4 != this.data.rechargeType || this.data.cardNo.trim()) {
							if (1 != this.data.rechargeType && 2 != this.data.rechargeType || t.post({
									url: "/denomination/recharge/" + this.id,
									data: {
										channel: this.miniType,
										walletId: this.walletId
									},
									requireAuth: !0,
									success: function (t) {
										200 === t.statusCode && e.wx_zfbTopup(t.data)
									}
								}), 3 == this.data.rechargeType && this.eleCardRecharge(), 5 != this.data.rechargeType && 4 != this.data.rechargeType || t.post({
									url: "/agent-denomination/recharge/" + this.id,
									data: {
										channel: this.miniType,
										siteId: this.siteId,
										cardNo: this.data.cardNo
									},
									requireAuth: !0,
									success: function (t) {
										200 === t.statusCode ? e.wx_zfbTopup(t.data) : wx.showToast({
											title: t.data,
											icon: "none",
											duration: 2e3
										})
									},
									fail: function (t) {
										wx.showToast({
											title: t.data,
											icon: "none",
											duration: 2e3
										})
									}
								}), 6 == this.data.rechargeType) {
								var a = this.data.topupType[this.data.curtopup];
								wx.navigateTo({
									url: "/pages/mine/electric-card-management/buy-entity-card/cardorder/index?denominationId=" + a.id + "&rechargeAmount=" + a.rechargeAmount
								})
							}
						} else wx.showToast({
							title: "请填写正确的充值电卡号！",
							icon: "none",
							duration: 2e3
						});
				else wx.showToast({
					title: "请同意《充值活动协议》",
					icon: "none",
					duration: 2e3
				});
				else wx.showToast({
					title: "请选择充值面额",
					icon: "none",
					duration: 2e3
				})
			},
			eleCardRecharge: function () {
				var e = this;
				t.get({
					url: "/denomination/check-card-offline",
					requireAuth: !0,
					data: {
						cardNo: this.data.cardNo
					},
					success: function (a) {
						200 === a.statusCode ? t.post({
							url: "/denomination/recharge/" + e.id,
							requireAuth: !0,
							data: {
								cardNo: e.data.cardNo,
								channel: e.miniType
							},
							success: function (t) {
								200 === t.statusCode ? e.wx_zfbTopup(t.data) : wx.showToast({
									title: t.data,
									icon: "none",
									duration: 2e3
								})
							},
							fail: function (t) {
								wx.showToast({
									title: t.data,
									icon: "none",
									duration: 2e3
								})
							}
						}) : wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			wx_zfbTopup: function (t) {
				e.pay(t).then(function (t) {
					wx.navigateBack({
						delta: 1
					})
				}).catch(function (t) {})
			},
			bindInput: function (e) {
				var a = this;
				10 == e.detail.value.length && (this.setData({
					cardNo: e.detail.value
				}), t.post({
					url: "/card/info",
					requireAuth: !0,
					data: {
						cardNo: e.detail.value
					},
					success: function (t) {
						if (200 === t.statusCode)
							if (3 == t.data.type) {
								if (t.data.siteId != a.siteId) return wx.showToast({
									title: "该卡不支持在该站点充值",
									icon: "none",
									duration: 2e3
								}), void a.cleanCardNo()
							} else if (1 == t.data.type) {
							if (0 == t.data.hasOwnProperty("siteId")) {
								return
							}
							a.startRecharge()
						} else 2 == t.data.type && (wx.showToast({
							title: "该卡不支持在该站点充值",
							icon: "none",
							duration: 2e3
						}), a.cleanCardNo());
						else wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						}), a.cleanCardNo()
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						}), a.cleanCardNo()
					}
				}))
			},
			cleanCardNo: function () {
				var t = this;
				setTimeout(function () {
					t.setData({
						cardNo: ""
					})
				}, 2e3)
			}
		});
	});
	require("pages/mine/topup/index.js");
	__wxRoute = 'pages/mine/topup/topup-agreement/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/topup/topup-agreement/index.js';
	define("pages/mine/topup/topup-agreement/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var n = getApp();
		Page({
			data: {
				address: "",
				appName: ""
			},
			onLoad: function (n) {},
			onReady: function () {},
			onShow: function () {
				var o = this;
				n.getConfig().then(function (n) {
					o.setData({
						address: n.config.agreementAddress,
						appName: n.appName
					})
				})
			},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {}
		});
	});
	require("pages/mine/topup/topup-agreement/index.js");
	__wxRoute = 'pages/mine/here-service/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/here-service/index.js';
	define("pages/mine/here-service/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = getApp();
		Page({
			data: {
				helpJson: [],
				videoshow: !1,
				closebutton: !1,
				startbutton: !0,
				isHasVideo: !0,
				miniType: 1,
				customerServicePhone: ""
			},
			onLoad: function (t) {},
			onReady: function () {
				this.setData({
					miniType: wx.getStorageSync("miniType")
				})
			},
			onShow: function () {
				var o = this;
				t.getConfig().then(function (t) {
					var e = JSON.parse(t.config.paperwork).map(function (t) {
						return t.istap = !1, t
					});
					o.setData({
						helpJson: e,
						customerServicePhone: t.config.customerServicePhone
					})
				})
			},
			onHide: function () {},
			onUnload: function () {},
			videoplay: function () {
				this.setData({
					videoshow: !0,
					startbutton: !1,
					closebutton: !0
				})
			},
			videohide: function () {
				this.setData({
					videoshow: !1,
					closebutton: !1,
					startbutton: !0
				})
			},
			switchDrop: function (t) {
				var o = t.currentTarget.dataset.index,
					e = this.data.helpJson;
				e.forEach(function (t, e) {
					t.istap = e == o && !t.istap
				}), this.setData({
					helpJson: e
				})
			},
			phone: function () {
				wx.makePhoneCall({
					phoneNumber: this.data.customerServicePhone
				})
			}
		});
	});
	require("pages/mine/here-service/index.js");
	__wxRoute = 'pages/mine/fault-repair/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/fault-repair/index.js';
	define("pages/mine/fault-repair/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("../../../utils/config.js"),
			i = require("../../../utils/http.js"),
			t = e.endpoint.https,
			n = require("../../../utils/util.js");
		Page({
			data: {
				chooseImgList: [],
				isShowAddImg: !1,
				pileNum: null,
				content: "",
				disabledPileNumInput: !1,
				noClick: !1
			},
			pileNo: 0,
			onLoad: function (e) {
				e.pileNo && (this.setData({
					pileNum: e.pileNo,
					disabledPileNumInput: !0
				}), this.pileNo = e.pileNo)
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			previewImg: function (e) {
				var i = e.target.dataset.index,
					t = this.data.chooseImgList;
				wx.previewImage({
					current: t[i],
					urls: t
				})
			},
			chooseImg: function () {
				var e = this;
				wx.chooseImage({
					count: 4,
					sizeType: ["compressed"],
					sourceType: ["album", "camera"],
					success: function (i) {
						for (var t = [], n = "", o = 0; o < i.tempFiles.length; o++) i.tempFiles[o].size <= 3e6 ? (n = i.tempFiles[o].path, t.push(n)) : wx.showToast({
							title: "上传图片不能大于3M,已帮您自动忽略大于3M图片",
							icon: "none",
							duration: 3e3
						});
						var a = e.data.chooseImgList.concat(t),
							s = a.length <= 4 ? a : a.slice(0, 4);
						(s.length > 4 || 4 == s.length) && e.setData({
							isShowAddImg: !0
						}), e.setData({
							chooseImgList: s
						})
					}
				})
			},
			getPileNumScan: function () {
				var i = this;
				wx.scanCode({
					success: function (t) {
						var o = t.path,
							a = t.result,
							s = e.uriPrefix;
						if (o && o.includes("pages/charge/detail/index?scene=")) wx.navigateTo({
							url: "/" + o
						});
						else if (a && (a.includes("api-cdz.ejlchina-app.com") || a.includes("api-mini.cdyun.vip")) && (a.includes(s + "/mini-app/") || a.includes(s + "/mini-app-zfb/"))) {
							if (-1 != (d = (u = decodeURIComponent(a)).substring(u.lastIndexOf("/") + 1)).indexOf("-") ? i.pileNo = d.split("-")[0] : i.pileNo = d, d.length < 7) {
								var l = u.substring(u.indexOf("mini-app/") + 9, u.lastIndexOf("/")),
									c = l.slice(4, 6) + l.slice(2, 4) + l.slice(0, 2);
								i.pileNo = n.hex2int(c).toString()
							}
							i.setData({
								pileNum: i.pileNo
							})
						} else if (a && a.includes("weixin.qq.com")) {
							var u = decodeURIComponent(a),
								d = u.substring(u.lastIndexOf("/") + 1);
							i.setData({
								pileNum: d
							})
						} else wx.showToast({
							title: "请扫正确的小程序码",
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			feedbackContent: function (e) {
				this.setData({
					content: e.detail.value
				})
			},
			getPileNum: function (e) {
				this.pileNo = e.detail.value
			},
			submitBtn: function () {
				var e = this;
				if ("" != this.pileNo)
					if ("" != this.data.content) {
						wx.showLoading({
							title: "正在上传...",
							mask: !0
						}), console.log(this.data.chooseImgList, "this.data.chooseImgList");
						var i = this,
							n = this.data.chooseImgList.map(function (e) {
								return new Promise(function (n, o) {
									wx.uploadFile({
										url: t + "/charge-pile-repair/upload",
										filePath: e,
										name: "file",
										formData: {
											user: "test"
										},
										success: function (e) {
											i.setData({
												noClick: !0
											}), n(e.data)
										},
										fail: function (e) {
											o("failed to upload file")
										}
									})
								})
							});
						Promise.all(n).then(function (i) {
							console.log(i, "提交之后图片链接");
							var t = i.map(function (e) {
								return JSON.parse(e).url
							}).toString();
							e.submitFailure(t)
						}).catch(function (e) {
							wx.hideLoading(), wx.showToast({
								title: e,
								icon: "none",
								duration: 2e3
							}), console.log(">>>> upload images error:", e)
						})
					} else wx.showToast({
						title: "请输入反馈内容",
						icon: "none",
						duration: 2e3
					});
				else wx.showToast({
					title: "请输入桩号",
					icon: "none",
					duration: 2e3
				})
			},
			submitFailure: function (e) {
				var t = this;
				i.post({
					url: "/charge-pile-repair/commit",
					showLoading: !0,
					loadingText: "正在提交...",
					requireAuth: !0,
					data: {
						pileNo: this.pileNo,
						content: this.data.content,
						img: e
					},
					success: function (e) {
						console.log(e, "发送成功"), 200 === e.statusCode ? (t.setData({
							noClick: !0
						}), setTimeout(function () {
							wx.showToast({
								title: "报修成功，非常感谢",
								icon: "none",
								duration: 3e3
							}), setTimeout(function () {
								wx.navigateBack({
									delta: 1
								})
							}, 3e3)
						}, 0)) : (wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						}), t.setData({
							noClick: !1
						})), wx.hideLoading()
					},
					fail: function (e) {
						wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						}), t.setData({
							noClick: !1
						}), wx.hideLoading()
					}
				})
			}
		});
	});
	require("pages/mine/fault-repair/index.js");
	__wxRoute = 'pages/mine/official-account/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/official-account/index.js';
	define("pages/mine/official-account/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Page({
			data: {},
			onLoad: function (n) {},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {}
		});
	});
	require("pages/mine/official-account/index.js");
	__wxRoute = 'pages/mine/agent-admin/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/mine/agent-admin/index.js';
	define("pages/mine/agent-admin/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		require("../../../utils/config.js");
		Page({
			data: {
				url: "",
				jumpUrl: "",
				formData: "",
				params: ""
			},
			onLoad: function (t) {
				console.log(t), t.url && this.setData({
					url: decodeURIComponent(t.url)
				}), this.setData({
					jumpUrl: t.jumpUrl,
					formData: t.formData,
					params: t.params
				}), "getLocation" == t.type && this.getCenterLocation()
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {},
			getCenterLocation: function () {
				var t = this;
				wx.getLocation({
					type: "wgs84",
					success: function (a) {
						var o = a.latitude,
							n = a.longitude;
						wx.chooseLocation({
							latitude: o,
							longitude: n,
							scale: 28,
							success: function (a) {
								var o = t.data.jumpUrl + "?address=" + (a.address + a.name) + "&formData=" + t.data.formData + "&params=" + t.data.params + "&lat=" + a.latitude + "&long=" + a.longitude;
								t.setData({
									url: o
								})
							}
						})
					}
				})
			}
		});
	});
	require("pages/mine/agent-admin/index.js");
	__wxRoute = 'pages/near/near-site/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/near/near-site/index.js';
	define("pages/near/near-site/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/http.js"),
			e = require("../../../utils/util.js"),
			a = require("../../../utils/location.js"),
			i = getApp();
		Page({
			data: {
				searchValue: "",
				name: "",
				loading: !1,
				hasMore: !1,
				nearSiteList: [],
				noNearSite: !1,
				whatPattern: !0,
				searchRes: "搜索附近充电桩",
				longitude: 120.64247,
				latitude: 31.36897,
				markers: [],
				condition: !1,
				tapSiteDetail: "",
				title: "我要当桩主!限时抢桩主名额,每个充电桩发放10个.",
				size: 14,
				scale: 16,
				modularTabs: ["电动车桩", "汽车桩"],
				currentModularIndex: 0,
				subkey: "",
				showEV: !1,
				isShowPrice: !1
			},
			params: {
				page: 0,
				size: 10,
				distance: !0,
				latitude: 0,
				longitude: 0,
				name: "",
				vehicleType: 1
			},
			changeVehicleType: !0,
			deg: 0,
			mapCtx: null,
			onLoad: function (t) {
				this.loadData = e.throttle(this.inputSearch.bind(this), 1e3), this.mapCtx = wx.createMapContext("map"), a.assertCanUse(), this.moveToCurrentLocation()
			},
			onReady: function () {
				var t = this;
				a.getLocation(function (e) {
					t.params.latitude = e.latitude, t.params.longitude = e.longitude, t.getSiteList()
				})
			},
			onShow: function () {
				var t = this;
				i.getConfig().then(function (e) {
					t.setData({
						subkey: e.config.subkey,
						showEV: e.config.showAutomobile,
						isShowPrice: e.config.pilePrice
					})
				}), wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#24c771"
				})
			},
			onReachBottom: function () {
				var e = this;
				this.data.loading || this.data.hasMore || (this.setData({
					loading: !0
				}), this.updateRefreshIcon(), this.params.page++, t.get({
					url: "/charge-site/index",
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return e.setData({
								hasMore: !0,
								loading: !1
							}), void(e.params.page = 0);
							e.setData({
								nearSiteList: e.data.nearSiteList.concat(t.data),
								loading: !1
							})
						}
					}
				}))
			},
			onPullDownRefresh: function () {
				var e = this;
				wx.showNavigationBarLoading(), this.params.page = 0, this.setData({
					hasMore: !1,
					nearSiteList: []
				}), t.get({
					url: "/charge-site/index",
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return e.setData({
								noNearSite: !0
							}), !1;
							e.setData({
								noNearSite: !1,
								nearSiteList: t.data
							}), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh()
						}
					}
				})
			},
			getSiteList: function () {
				var e = this;
				t.get({
					url: "/charge-site/index",
					data: this.params,
					showLoading: !0,
					loadingText: "正在加载...",
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return e.setData({
								noNearSite: !0
							}), e.changeVehicleType = !0, !1;
							e.setData({
								noNearSite: !1,
								nearSiteList: e.data.nearSiteList.concat(t.data)
							})
						}
						e.changeVehicleType = !0
					}
				})
			},
			searchValueInput: function (t) {
				this.loadData(t.detail.value)
			},
			changeModular: function (t) {
				if (this.changeVehicleType) {
					this.changeVehicleType = !1;
					var e = t.currentTarget.dataset.index;
					this.setData({
						currentModularIndex: e,
						nearSiteList: [],
						hasMore: !1
					}), this.params.vehicleType = e ? 2 : 1, this.params.page = 0, this.data.whatPattern ? this.getSiteList() : this.renderMarkers()
				} else wx.showToast({
					title: "尚未加载完，请稍后切换！",
					icon: "none",
					duration: 2e3
				})
			},
			inputSearch: function (t) {
				this.setData({
					searchValue: t,
					name: t,
					hasMore: !1,
					noNearSite: !1
				}), this.params.name = t, this.getSearchSiteList()
			},
			getSearchSiteList: function () {
				var e = this;
				this.params.page = 0, t.get({
					url: "/charge-site/index",
					data: this.params,
					showLoading: !0,
					loadingText: "正在加载...",
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return e.setData({
								noNearSite: !0
							}), e.changeVehicleType = !0, !1;
							e.setData({
								noNearSite: !1,
								nearSiteList: t.data
							})
						}
						e.changeVehicleType = !0
					}
				})
			},
			listNavToSite: function (t) {
				var e = t.currentTarget.dataset.siteinfo.latitude,
					a = t.currentTarget.dataset.siteinfo.longitude,
					i = t.currentTarget.dataset.siteinfo.name,
					n = t.currentTarget.dataset.siteinfo.location;
				wx.openLocation({
					latitude: e,
					longitude: a,
					name: i,
					address: n,
					scale: 28
				})
			},
			updateRefreshIcon: function () {
				var t = this,
					e = wx.createAnimation({
						duration: 500,
						timingFunction: "linear",
						delay: 0
					}),
					a = setInterval(function () {
						t.data.loading || clearInterval(a), t.deg = t.deg += 360, e.rotateZ(t.deg).step(), t.setData({
							refreshAnimation: e.export()
						})
					}, 1e3)
			},
			navTositedetail: function (t) {
				var e = t.currentTarget.dataset,
					a = e.siteid,
					i = e.vehicletype;
				wx.navigateTo({
					url: "/pages/near/site-detail/index?siteId=" + a + "&vehicleType=" + i
				})
			},
			toMapModel: function () {
				this.setData({
					whatPattern: !1
				}), this.renderMarkers()
			},
			toListModel: function () {
				this.setData({
					whatPattern: !0,
					nearSiteList: []
				}), this.getSiteList()
			},
			renderMarkers: function () {
				var t = this;
				this.mapCtx.getCenterLocation({
					success: function (e) {
						t.createMarkers(e)
					}
				})
			},
			onControlTap: function () {
				this.mapCtx.moveToLocation(), this.positioning = !0
			},
			markertap: function (t) {
				var e = this;
				console.log(t, "点击标记事件");
				for (var i = this.data.markers, n = 0; n < i.length; n++) {
					var s = i[n];
					s.id == t.markerId ? (s.width = 50, s.height = 50, a.getLocation(function (a) {
						e.showbox(t.markerId, a.longitude, a.latitude)
					})) : (s.width = 30, s.height = 30)
				}
				this.setData({
					markers: i
				})
			},
			maptap: function () {
				this.setData({
					condition: !1,
					isCondition: !1
				});
				for (var t = this.data.markers, e = 0; e < t.length; e++) {
					var a = t[e];
					a.width = 30, a.height = 30
				}
				this.setData({
					markers: t
				})
			},
			showbox: function (e, a, i) {
				var n = this;
				t.post({
					url: "/charge-site/show/" + e,
					data: {
						longitude: a,
						latitude: i
					},
					success: function (t) {
						200 === t.statusCode ? n.setData({
							tapSiteDetail: t.data,
							condition: !0
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			navToSite: function () {
				var t = this.data.tapSiteDetail;
				wx.openLocation({
					latitude: t.latitude,
					longitude: t.longitude,
					name: t.name,
					address: t.address,
					scale: 28
				})
			},
			searchNearby: function () {
				wx.navigateTo({
					url: "/pages/near/near-piles/index?vehicleType=" + this.params.vehicleType
				})
			},
			moveToCurrentLocation: function (t) {
				var e = this;
				a.getLocation(function (t) {
					e.setData({
						longitude: t.longitude,
						latitude: t.latitude
					}), t ? e.createMarkers(t) : e.renderMarkers()
				})
			},
			createMarkers: function (e) {
				var a = this,
					i = [];
				t.get({
					url: "/charge-site/index",
					data: {
						longitude: e.longitude,
						latitude: e.latitude,
						vehicleType: this.params.vehicleType,
						radius: 5e4
					},
					success: function (t) {
						200 === t.statusCode ? (t.data.forEach(function (t) {
							var e = Object.assign(t, {
								iconPath: "/icons/chongdian.png",
								vehicleType: a.params.vehicleType,
								width: 30,
								height: 30
							});
							i.push(e)
						}), a.setData({
							markers: i
						}), a.positioning && wx.showToast({
							title: "附近有" + a.data.markers.length + "个站点",
							icon: "none",
							duration: 2e3
						}), a.positioning = !1, a.changeVehicleType = !0) : (wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						}), a.changeVehicleType = !0)
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						}), a.changeVehicleType = !0
					}
				})
			}
		});
	});
	require("pages/near/near-site/index.js");
	__wxRoute = 'pages/near/near-piles/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/near/near-piles/index.js';
	define("pages/near/near-piles/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/http.js"),
			e = require("../../../utils/util.js"),
			a = require("../../../utils/location.js"),
			i = getApp();
		Page({
			data: {
				isShowPrice: !1,
				searchValue: "",
				name: "",
				loading: !1,
				hasMore: !1,
				nearSiteList: [],
				nonearsite: !1
			},
			deg: 0,
			page: 0,
			params: {
				page: 0,
				size: 10,
				latitude: 0,
				longitude: 0,
				name: "",
				vehicleType: 1
			},
			onLoad: function (t) {
				this.params.vehicleType = t.vehicleType, this.loadData = e.throttle(this.inputSearch.bind(this), 1e3)
			},
			onReady: function () {},
			onShow: function () {
				var t = this;
				i.getConfig().then(function (e) {
					t.setData({
						isShowPrice: e.config.pilePrice
					})
				}), a.getLocation(function (e) {
					t.params.latitude = e.latitude, t.params.longitude = e.longitude, t.getPileList()
				})
			},
			onHide: function () {
				this.setData({
					searchValue: ""
				})
			},
			getPileList: function () {
				var e = this;
				this.setData({
					hasMore: !1
				}), t.get({
					url: "/charge-pile/index",
					requireAuth: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return e.setData({
								nonearsite: !0
							}), !1;
							e.setData({
								nearSiteList: t.data
							})
						}
					}
				})
			},
			collecteBtn: function (e) {
				var a = this,
					i = e.currentTarget.dataset.index;
				this.chargePileId = e.currentTarget.dataset.chargepileid;
				var n = this.data.nearSiteList,
					s = n[i];
				t.get({
					url: "/charge-pile-collect/add",
					requireAuth: !0,
					data: {
						chargePileId: this.chargePileId
					},
					success: function (t) {
						200 === t.statusCode ? (n[i].collected = !n[i].collected, a.setData({
							nearSiteList: n
						}), wx.showToast({
							title: s.collected ? "收藏成功" : "取消收藏",
							icon: "success",
							duration: 2e3
						})) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			onReachBottom: function () {
				var e = this;
				1 != this.data.hasMore && (this.setData({
					loading: !0
				}), this.updateRefreshIcon(), this.params.page++, t.get({
					url: "/charge-pile/index",
					requireAuth: !0,
					data: this.params,
					success: function (t) {
						if (200 === t.statusCode) {
							if (0 === t.data.length) return e.setData({
								hasMore: !0,
								loading: !1
							}), void(e.params.page = 0);
							var a = e.data.nearSiteList.concat(t.data);
							e.setData({
								nearSiteList: a
							}), e.setData({
								loading: !1
							})
						}
					}
				}))
			},
			searchValueInput: function (t) {
				this.loadData(t.detail.value)
			},
			inputSearch: function (t) {
				this.setData({
					name: t,
					hasMore: !1,
					nonearsite: !1
				}), this.params.page = 0, this.params.name = t, this.getPileList()
			},
			navToSite: function (t) {
				var e = t.currentTarget.dataset.siteinfo.latitude,
					a = t.currentTarget.dataset.siteinfo.longitude,
					i = t.currentTarget.dataset.siteinfo.name,
					n = t.currentTarget.dataset.siteinfo.location;
				wx.openLocation({
					latitude: e,
					longitude: a,
					name: i,
					address: n,
					scale: 28
				})
			},
			updateRefreshIcon: function () {
				var t = this,
					e = wx.createAnimation({
						duration: 500,
						timingFunction: "linear",
						delay: 0
					}),
					a = setInterval(function () {
						t.data.loading || clearInterval(a), t.deg = t.deg += 360, e.rotateZ(t.deg).step(), t.setData({
							refreshAnimation: e.export()
						})
					}, 1e3)
			},
			navTositedetail: function (t) {
				if (this.params.page = 0, 1 == t.currentTarget.dataset.status || t.currentTarget.dataset.offlinecharge)
					if (t.currentTarget.dataset.pilejudge) {
						var e = t.currentTarget.dataset.pileno,
							a = encodeURIComponent(e);
						wx.navigateTo({
							url: "/pages/charge/detail/index?scene=" + a
						})
					} else wx.showToast({
						title: "该桩是加盟桩，请线下扫描设备码充电",
						icon: "none",
						duration: 2e3
					});
				else wx.showToast({
					title: "该桩已离线，暂不支持手机端启动充电",
					icon: "none",
					duration: 2e3
				})
			}
		});
	});
	require("pages/near/near-piles/index.js");
	__wxRoute = 'pages/near/site-detail/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/near/site-detail/index.js';
	define("pages/near/site-detail/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = require("../../../utils/http.js"),
			t = require("../../../utils/location.js"),
			a = getApp();
		Page({
			data: {
				isShowPrice: !1,
				pilepointList: "",
				siteId: "",
				sitedetail: "",
				activityOpened: !1,
				showRecharge: !1,
				vehicleType: 1
			},
			onLoad: function (e) {
				this.setData({
					siteId: e.siteId,
					vehicleType: e.vehicleType
				})
			},
			onShow: function () {
				var i = this;
				a.getConfig().then(function (e) {
					i.setData({
						isShowPrice: e.config.pilePrice
					})
				}), e.get({
					url: "/charge-site/show/" + this.data.siteId,
					success: function (e) {
						200 === e.statusCode ? (i.setData({
							sitedetail: e.data
						}), e.data.activityEnabled && i.setData({
							activityOpened: !0
						})) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (e) {
						wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					}
				}), t.getLocation(function (e) {
					i.data.longitude = e.longitude, i.data.latitude = e.latitude, i.chargesiteObj = {
						latitude: e.latitude,
						longitude: e.longitude
					}, n(i.chargesiteObj)
				});
				var n = function (t) {
					t.siteId = i.data.siteId, e.get({
						url: "/charge-pile/index",
						data: t,
						success: function (e) {
							200 === e.statusCode ? 0 == e.data.length ? i.setData({
								nopilepointlist: !0
							}) : i.setData({
								pilepointList: e.data
							}) : wx.showToast({
								title: e.data,
								icon: "none",
								duration: 2e3
							})
						},
						fail: function (e) {
							wx.showToast({
								title: e.data,
								icon: "none",
								duration: 2e3
							})
						}
					})
				}
			},
			toUsercardRecharge: function (e) {
				this.setData({
					showRecharge: !0
				})
			},
			closeShowRecharge: function () {
				this.setData({
					showRecharge: !1
				})
			},
			chooseRecharge: function (e) {
				var t = e.currentTarget.dataset,
					a = t.siteid,
					i = "";
				i = 5 == t.type ? "/pages/mine/topup/index?siteId=" + a + "&rechargeType=5" : "/pages/mine/topup/index?cardNo=&siteId=" + a + "&rechargeType=4", wx.navigateTo({
					url: i
				}), this.closeShowRecharge()
			},
			navToChargedetail: function (e) {
				if (1 == e.currentTarget.dataset.status || e.currentTarget.dataset.offlinecharge)
					if (e.currentTarget.dataset.pilejudge) {
						var t = e.currentTarget.dataset.pileno,
							a = encodeURIComponent(t);
						wx.navigateTo({
							url: "/pages/charge/detail/index?scene=" + a
						})
					} else wx.showToast({
						title: "该桩是加盟桩，请线下扫描设备码充电",
						icon: "none",
						duration: 2e3
					});
				else wx.showToast({
					title: "该桩已离线，暂不支持手机端启动充电",
					icon: "none",
					duration: 2e3
				})
			},
			navTopile: function (e) {
				var t = e.currentTarget.dataset.pileinfo,
					a = t.latitude,
					i = t.longitude,
					n = t.pileNo,
					o = t.location;
				wx.openLocation({
					latitude: a,
					longitude: i,
					name: n,
					address: o,
					scale: 28
				})
			}
		});
	});
	require("pages/near/site-detail/index.js");
	__wxRoute = 'pages/charge/detail/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/charge/detail/index.js';
	define("pages/charge/detail/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = getApp(),
			e = require("../../../utils/auth.js"),
			a = require("../../../utils/http.js"),
			i = require("../../../utils/pay.js"),
			s = require("../../../utils/util.js"),
			o = require("../../../utils/constant.js");
		Page({
			data: {
				showWelcome: !1,
				adContent: {},
				chargingWrapper: "",
				status: ["空闲", "占用", "禁用", "故障"],
				chargingPileList: [],
				timeLength: [],
				curIndex: "",
				curtimeindex: "",
				pileNo: "",
				sitePrice: 0,
				balance: "",
				minusWallet: 0,
				pageDeep: 0,
				pickIndex: 0,
				isTapTime: !0,
				samllExpected: 0,
				middleExpected: 0,
				largeExpected: 0,
				paymodal: !1,
				optType: 0,
				feeType: 0,
				price: 0,
				options: [],
				minAmount: 0,
				minPower: 0,
				midPower: 0,
				maxPower: 0,
				needTopup: !0,
				chargeTips: "",
				routerList: [],
				routerNum: 10,
				routerIndex: 0,
				collected: !1,
				isShowPaymentMethod: !1,
				isShowMask: !1,
				chooseWhichPayment: 1,
				walletId: "",
				siteWalletId: "",
				weChatPayment: !1,
				balancePayment: !1,
				specialPayment: !1,
				siteBalance: 0,
				activityOpened: !1,
				pileType: 1,
				isWeChat: !0,
				miniPayName: "微信支付",
				miniPayLogo: "",
				isContinueCharge: !1,
				showRecharge: !1,
				vehicleType: 1,
				isShowOfflineCharge: !1,
				otpPrice: 0,
				pileStatus: 1,
				offlineCharge: !1,
				isShowDynamicCode: !1,
				dynamicCode: "",
				mixPayEnabled: !1,
				isShowOfflineTips: !1,
				closeTime: 10,
				showExchange: !1
			},
			timer: null,
			isTapPort: !1,
			hour: 0,
			pileNo: "",
			pilePort: 0,
			pileId: 0,
			sendport: "",
			recordId: 0,
			dataOptions: [],
			siteId: 0,
			v: null,
			wxAppMsgTmplId: "",
			formId: "",
			quantityOptions: [{
				value: 500,
				label: "0.5千瓦时",
				deft: !1
			}, {
				value: 1e3,
				label: "1.0千瓦时",
				deft: !1
			}, {
				value: 2e3,
				label: "2.0千瓦时",
				deft: !1
			}, {
				value: 3e3,
				label: "3.0千瓦时",
				deft: !1
			}, {
				value: 5e3,
				label: "5.0千瓦时",
				deft: !0
			}],
			timeOptions: [{
				value: 1,
				label: "1小时",
				deft: !1
			}, {
				value: 2,
				label: "2小时",
				deft: !1
			}, {
				value: 3,
				label: "3小时",
				deft: !1
			}, {
				value: 4,
				label: "4小时",
				deft: !1
			}, {
				value: 5,
				label: "5小时",
				deft: !1
			}, {
				value: 6,
				label: "6小时",
				deft: !1
			}, {
				value: 7,
				label: "7小时",
				deft: !1
			}, {
				value: 8,
				label: "8小时",
				deft: !1
			}, {
				value: 9,
				label: "9小时",
				deft: !1
			}, {
				value: 10,
				label: "10小时",
				deft: !0
			}],
			amountOptions: [{
				value: 100,
				label: "1元",
				deft: !1
			}, {
				value: 200,
				label: "2元",
				deft: !0
			}, {
				value: 300,
				label: "3元",
				deft: !1
			}, {
				value: 400,
				label: "4元",
				deft: !1
			}, {
				value: 500,
				label: "5元",
				deft: !1
			}, {
				value: 600,
				label: "6元",
				deft: !1
			}, {
				value: 700,
				label: "7元",
				deft: !0
			}, {
				value: 800,
				label: "8元",
				deft: !1
			}, {
				value: 900,
				label: "9元",
				deft: !1
			}, {
				value: 1e3,
				label: "10元",
				deft: !1
			}],
			instantPayEnable: !0,
			onLoad: function (a) {
				var i = this,
					o = wx.getStorageSync("miniType");
				if (this.setData({
						isWeChat: 1 == o,
						miniPayName: 1 == o ? "微信支付" : "支付宝支付",
						miniPayLogo: 1 == o ? "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_wechatpayment2x.png" : "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_zhifubao.png"
					}), a.scene) a.isContinue ? (this.pileNo = a.scene, this.pilePort = a.pileNumSite) : (this.pileNo = decodeURIComponent(a.scene), a.pileNumSite && (this.pilePort = a.pileNumSite));
				else {
					var n = decodeURIComponent(a.q);
					if (t.ermpileNo && 2 == o && (n = decodeURIComponent(t.ermpileNo)), this.pileNo = n.substring(n.lastIndexOf("/") + 1).trim(), this.pileNo.length < 7) {
						var r = n.substring(n.indexOf("mini-app/") + 9, n.lastIndexOf("/")),
							c = r.slice(4, 6) + r.slice(2, 4) + r.slice(0, 2);
						"ff" === this.pileNo ? this.pileNo = s.hex2int(c) : (this.pilePort = s.hex2int(this.pileNo) + 1, this.pileNo = s.hex2int(c))
					} else this.pileNo.includes("-") && (this.pilePort = this.pileNo.slice(this.pileNo.indexOf("-") + 1), this.pileNo = this.pileNo.slice(0, this.pileNo.indexOf("-")))
				}
				this.setData({
					pageDeep: getCurrentPages().length
				}), this.getMessageTemplate(), wx.getSystemInfo({
					success: function (t) {
						i.v = t.version
					}
				}), t.getConfig().then(function (t) {
					i.setData({
						showExchange: t.config.batteriesSharingEnable
					})
				}), e.authorized(!0, !0) && (this.loadWelcomeImage(), this.getpaymentMethod(), this.loadChargeOption().then(function () {
					i.loadPileInfo()
				}))
			},
			onShow: function () {},
			clickMask: function () {
				this.setData({
					isShowMask: !1,
					isShowPaymentMethod: !1
				})
			},
			choossPayment: function (t) {
				var e = t.currentTarget.dataset.method;
				this.setData({
					chooseWhichPayment: e,
					isShowPaymentMethod: !1,
					isShowMask: !1
				})
			},
			choosePaymentMethod: function () {
				this.setData({
					isShowPaymentMethod: !0,
					isShowMask: !0
				})
			},
			getpaymentMethod: function () {
				var t = this;
				a.get({
					url: "/user/pay-type",
					requireAuth: !0,
					data: {
						pileNo: this.pileNo
					},
					success: function (e) {
						200 === e.statusCode ? (t.setData({
							mixPayEnabled: e.data.mixPayEnabled
						}), 1 == e.data.extPayFirst ? (t.setData({
							chooseWhichPayment: 3,
							weChatPayment: !0,
							balancePayment: !0,
							balance: e.data.balance
						}), e.data.siteBalance && t.setData({
							specialPayment: !0,
							siteBalance: e.data.siteBalance
						})) : e.data.siteBalance ? t.setData({
							chooseWhichPayment: 2,
							siteWalletId: e.data.siteWalletId,
							specialPayment: !0,
							balancePayment: !0,
							balance: e.data.balance,
							siteBalance: e.data.siteBalance
						}) : t.setData({
							chooseWhichPayment: 1,
							walletId: e.data.walletId,
							balancePayment: !0,
							balance: e.data.balance
						})) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			collecteBtn: function () {
				var t = this;
				a.get({
					url: "/charge-pile-collect/add",
					requireAuth: !0,
					data: {
						chargePileId: this.pileId
					},
					success: function (e) {
						200 === e.statusCode ? wx.showToast({
							title: t.data.collected ? "取消收藏" : "收藏成功",
							icon: "success",
							duration: 2e3,
							success: function () {
								t.setData({
									collected: !t.data.collected
								})
							}
						}) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			controlpaymodal: function (t) {
				t && (this.setData({
					paymodal: !0
				}), wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#0e4f38"
				}))
			},
			repairPay: function () {
				wx.navigateTo({
					url: "/pages/index/records/detail/index?recordId=" + this.unpaidRecordId
				})
			},
			loadChargeOption: function () {
				var t = this;
				return new Promise(function (e, i) {
					a.get({
						url: "/charge-option/index",
						requireAuth: !0,
						data: {
							pileNo: t.pileNo
						},
						success: function (a) {
							200 == a.statusCode && (a.data.timeOptions.length && (t.timeOptions = a.data.timeOptions), a.data.quantityOptions.length && (t.quantityOptions = a.data.quantityOptions), a.data.amountOptions.length && (t.amountOptions = a.data.amountOptions), e())
						},
						fail: function (t) {
							wx.showToast({
								title: t,
								icon: "none",
								duration: 2e3
							}), i()
						}
					})
				})
			},
			loadPileInfo: function () {
				var t = this;
				a.get({
					url: "/charge-pile/show",
					requireAuth: !0,
					showLoading: !0,
					data: {
						pileNo: this.pileNo
					},
					success: function (e) {
						if (200 == e.statusCode) {
							wx.hideToast(), e.data.offlineCharge && 2 === e.data.status && t.setData({
								isShowOfflineCharge: !0,
								isShowMask: !0,
								otpPrice: e.data.otpPrice
							}), e.data.offlineCharge || 1 == e.data.status || t.setData({
								isShowOfflineTips: !0,
								isShowMask: !0
							}), t.controlpaymodal(e.data.unpaidRecordId), t.unpaidRecordId = e.data.unpaidRecordId, wx.setStorageSync("pileDetail", encodeURIComponent(JSON.stringify(e.data))), t.pileId = e.data.id, t.ports = e.data.ports, t.optType = e.data.optType, t.feeType = e.data.feeType, t.sitePrice = e.data.sitePrice / 1e3, t.minAmount = e.data.minPrepaidAmount / 100, t.minPower = e.data.referPowers[0], t.midPower = e.data.referPowers[1], t.maxPower = e.data.referPowers[2];
							var a = t.ports.length;
							if (t.siteId = e.data.siteId, e.data.activityEnabled && t.setData({
									activityOpened: !0
								}), t.ports.map(function (t) {
									return 1 != t.status && (t.pickDisabled = !0), t
								}), (0 == e.data.price && 3 == e.data.optType && 3 != e.data.feeType || t.pileNo && t.pilePort) && t.ports.map(function (t) {
									return t.pickDisabled = !0, t
								}), a > t.data.routerNum) {
								for (var i = parseInt(a / t.data.routerNum), s = a % t.data.routerNum, o = [], n = [], r = 0, c = 0, l = 0, d = 0; d < i + 1; d++) r = d * t.data.routerNum + 1, c = (d + 1) * t.data.routerNum, l = d * t.data.routerNum, s && d == i && (o.push({
									routerName: r + "-" + a + "端口"
								}), n.push(t.ports.slice(l, a))), d < i && (o.push({
									routerName: r + "-" + c + "端口"
								}), n.push(t.ports.slice(l, c)));
								t.setData({
									routerList: o,
									chargingPileList: n
								})
							} else t.setData({
								chargingPileList: [t.ports.slice(0, t.data.routerNum)]
							});
							1 === t.ports.length && (t.setData({
								curIndex: 1
							}), t.sendport = 1, t.isTapPort = !0), t.pileNo && t.pilePort && (t.pilePort = "A" === t.pilePort ? 1 : "B" === t.pilePort ? 2 : t.pilePort, t.setData({
								routerIndex: parseInt((t.pilePort - 1) / t.data.routerNum)
							}), t.codeOnTapPort(t.pilePort));
							var h = [];
							if (1 == e.data.optType)
								for (var p = 0; p < t.timeOptions.length; p++) t.timeOptions[p].price = e.data.sitePrice * t.timeOptions[p].value, h.push(t.timeOptions[p]);
							if (2 == e.data.optType)
								for (var u = 0; u < t.quantityOptions.length; u++) t.quantityOptions[u].price = e.data.sitePrice * (t.quantityOptions[u].value / 1e3).toFixed(1), h.push(t.quantityOptions[u]);
							if (3 == e.data.optType)
								for (var f = 0; f < t.amountOptions.length; f++) t.amountOptions[f].price = t.amountOptions[f].value, h.push(t.amountOptions[f]);
							if (e.data.minPrepaidAmount) {
								var m = 0;
								e.data.sitePrice && (m = 10 * e.data.minPrepaidAmount / e.data.sitePrice), 2 == e.data.feeType && (m *= 1e3);
								var g = [];
								if (e.data.optType == e.data.feeType && 3 != e.data.optType) {
									for (var w = 0; w < h.length; w++) h[w].value >= m && g.push(h[w]);
									h = g
								} else if (3 == e.data.optType) {
									for (var T = 0; T < h.length; T++) h[T].value >= e.data.minPrepaidAmount && g.push(h[T]);
									h = g
								}
							}
							t.setData({
								pileStatus: e.data.status,
								offlineCharge: e.data.offlineCharge,
								vehicleType: e.data.vehicleType,
								startPort: parseFloat(t.ports[0].port),
								timeLength: h,
								pileNo: e.data.pileNo,
								optType: e.data.optType,
								feeType: e.data.feeType,
								price: e.data.price / 100,
								sitePrice: e.data.sitePrice,
								minAmount: e.data.minPrepaidAmount / 100,
								chargeTips: e.data.message.replace(new RegExp("\n", "gm"), "<br>"),
								collected: e.data.collected,
								pileType: e.data.pileType
							}), t.initmoney(h, t.data.balance)
						} else 404 == e.statusCode && wx.showModal({
							title: "提示",
							content: "该桩未上线",
							showCancel: !1,
							success: function () {
								wx.switchTab({
									url: "/pages/index/index"
								})
							}
						})
					},
					fail: function (t) {
						wx.showModal({
							title: "提示",
							content: "该桩未上线",
							showCancel: !1,
							success: function () {
								wx.switchTab({
									url: "/pages/index/index"
								})
							}
						})
					}
				})
			},
			toUsercardRecharge: function (t) {
				this.setData({
					showRecharge: !0
				})
			},
			closeShowRecharge: function () {
				this.setData({
					showRecharge: !1
				})
			},
			chooseRecharge: function (t) {
				var e = "";
				e = 5 == t.currentTarget.dataset.type ? "/pages/mine/topup/index?siteId=" + this.siteId + "&rechargeType=5" : "/pages/mine/topup/index?cardNo=&siteId=" + this.siteId + "&rechargeType=4", wx.navigateTo({
					url: e
				}), this.closeShowRecharge()
			},
			chooseRouter: function (t) {
				this.setData({
					routerIndex: t.currentTarget.dataset.router
				})
			},
			initmoney: function (t, e) {
				for (var a = t.length - 1, i = 0; i < t.length; i++)
					if (t[i].deft) {
						a = i;
						break
					} this.setData({
					pickIndex: a
				}), this.changeValue(t, e), this.hour = t[this.data.pickIndex].value
			},
			bindtimeChange: function (t) {
				this.setData({
					pickIndex: t.detail.value
				}), this.changeValue(this.data.timeLength, this.data.balance), this.hour = parseFloat(this.data.timeLength[t.detail.value].value), this.setData({
					isTapTime: !0
				})
			},
			changeValue: function (t, e) {
				var a = t[this.data.pickIndex].price;
				if (this.feeType == this.optType) a <= e ? this.setData({
					sitePrice: a / 100,
					minusWallet: a / 100
				}) : this.setData({
					sitePrice: a / 100,
					minusWallet: this.data.balance / 100
				}), this.setNeedTopup(a);
				else {
					var i = function (t) {
							return parseFloat(t.toFixed(2))
						},
						s = t[this.data.pickIndex].value;
					this.setData({
						samllExpected: i(1 == this.optType ? s * (this.minPower / 1e3) * this.sitePrice : (s / 1e3).toFixed(1) * this.sitePrice / (this.minPower / 1e3)),
						middleExpected: i(1 == this.optType ? s * (this.midPower / 1e3) * this.sitePrice : (s / 1e3).toFixed(1) * this.sitePrice / (this.midPower / 1e3)),
						largeExpected: i(1 == this.optType ? s * (this.maxPower / 1e3) * this.sitePrice : (s / 1e3).toFixed(1) * this.sitePrice / (this.maxPower / 1e3))
					}), this.setNeedTopup(100 * this.data.minAmount)
				}
			},
			setNeedTopup: function (t) {
				!this.data.mixPayEnabled && 1 == this.data.chooseWhichPayment && t > this.data.balance ? this.setData({
					needTopup: !0
				}) : this.setData({
					needTopup: !1
				}), 2 == this.data.chooseWhichPayment && t > this.data.siteBalance ? this.setData({
					siteBalanceNeedTopup: !0
				}) : this.setData({
					siteBalanceNeedTopup: !1
				})
			},
			codeOnTapPort: function (t) {
				if (3 != this.data.pileType && 6 != this.data.pileType || (t = "A" == t ? 1 : 2), 1 != this.data.chargingPileList[this.data.routerIndex].filter(function (e) {
						return e.port == t
					})[0].status) return wx.showToast({
					title: "该桩点不可用!",
					icon: "none",
					duration: 2e3
				}), setTimeout(function () {
					wx.hideToast()
				}, 3e3), !1;
				this.setData({
					curIndex: parseInt(t)
				}), this.sendport = t, this.isTapPort = !0
			},
			getMessageTemplate: function () {
				var t = this;
				a.get({
					url: "/MiniApp/findMsgTmplId",
					success: function (e) {
						200 === e.statusCode ? t.wxAppMsgTmplId = e.data.wxAppMsgTmplId : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			ontapPort: function (t) {
				if (this.pilePort && this.pileNo) wx.showToast({
					title: "不可点击",
					icon: "none",
					duration: 2e3
				});
				else {
					var e = t.currentTarget.dataset,
						a = e.curindex,
						i = e.status,
						s = e.port;
					if ("1" != i) return;
					this.setData({
						curIndex: a + this.data.routerIndex * this.data.routerNum
					}), this.sendport = s, this.isTapPort = !0
				}
			},
			nowCharge: function (t) {
				if (this.formId = t.detail.formId, this.data.isWeChat) {
					var e = this;
					wx.requestSubscribeMessage({
						tmplIds: [this.wxAppMsgTmplId],
						success: function (t) {
							e.startCharge()
						},
						fail: function (t) {
							wx.showToast({
								title: "未订阅将收不到充电结束的消息哦！",
								icon: "none",
								duration: 2e3,
								success: function () {
									setTimeout(function () {
										e.startCharge()
									}, 1e3)
								}
							})
						}
					})
				} else this.startCharge()
			},
			startCharge: function (t) {
				var e = this;
				if (this.isTapPort)
					if (0 != this.data.price || 3 != this.data.optType || 3 == this.data.feeType) {
						if (2 === this.data.pileStatus && this.data.offlineCharge) return 1 == this.data.chooseWhichPayment && this.data.balance < this.data.otpPrice && !this.data.mixPayEnabled ? void wx.showModal({
							title: "温馨提示",
							showCancel: !0,
							content: "余额不足，请先充值",
							cancelText: "取消",
							confirmText: "去充值",
							success: function (t) {
								t.confirm ? e.navtobalance() : t.cancel
							}
						}) : 2 == this.data.chooseWhichPayment && this.data.siteBalance < this.data.otpPrice ? void wx.showModal({
							title: "温馨提示",
							showCancel: !0,
							content: "专用账户余额不足，请先充值",
							cancelText: "取消",
							confirmText: "去充值",
							success: function (t) {
								t.confirm ? e.navtobalance() : t.cancel
							}
						}) : void this.offlineStart();
						if (this.data.optType == this.data.feeType || 3 == this.data.optType && (1 == this.data.feeType || 2 == this.data.feeType)) {
							if (1 == this.data.chooseWhichPayment) {
								if (!this.data.mixPayEnabled && this.data.sitePrice / 100 > this.data.balance / 100 && 3 != this.data.optType) return void wx.showModal({
									title: "温馨提示",
									showCancel: !0,
									content: "余额不足，请先充值",
									cancelText: "取消",
									confirmText: "去充值",
									success: function (t) {
										t.confirm ? e.navtobalance() : t.cancel
									}
								});
								if (this.data.mixPayEnabled && this.data.sitePrice / 100 > this.data.balance / 100 && 3 != this.data.optType) return void wx.showModal({
									title: "提示",
									showCancel: !0,
									content: "当前余额不足，请选择支付方式",
									cancelText: "去充值",
									confirmText: "继续支付",
									success: function (t) {
										t.confirm ? e.startCharging() : t.cancel && e.navtobalance()
									}
								});
								if (!this.data.mixPayEnabled && this.data.timeLength[this.data.pickIndex].price > this.data.balance && 3 == this.data.optType) return void wx.showModal({
									title: "温馨提示",
									showCancel: !0,
									content: "余额不足，请先充值",
									cancelText: "取消",
									confirmText: "去充值",
									success: function (t) {
										t.confirm ? e.navtobalance() : t.cancel
									}
								});
								if (this.data.mixPayEnabled && this.data.timeLength[this.data.pickIndex].price > this.data.balance && 3 == this.data.optType) return void wx.showModal({
									title: "提示",
									showCancel: !0,
									content: "当前余额不足，请选择支付方式",
									cancelText: "去充值",
									confirmText: "继续支付",
									success: function (t) {
										t.confirm ? e.startCharging() : t.cancel && e.navtobalance()
									}
								})
							}
							if (2 == this.data.chooseWhichPayment) {
								if (this.data.sitePrice / 100 > this.data.siteBalance / 100 && 3 != this.data.optType) return void wx.showModal({
									title: "温馨提示",
									showCancel: !0,
									content: "余额不足，请先充值",
									cancelText: "取消",
									confirmText: "去充值",
									success: function (t) {
										t.confirm ? e.toUsercardRecharge() : t.cancel
									}
								});
								if (this.data.timeLength[this.data.pickIndex].price > this.data.siteBalance && 3 == this.data.optType) return void wx.showModal({
									title: "温馨提示",
									showCancel: !0,
									content: "余额不足，请先充值",
									cancelText: "取消",
									confirmText: "去充值",
									success: function (t) {
										t.confirm ? e.toUsercardRecharge() : t.cancel
									}
								})
							}
						}
						if (!this.data.isTapTime) return wx.showToast({
							title: "请选择充电时长",
							icon: "none",
							duration: 2e3
						}), !1;
						this.hour;
						3 == this.data.pileType || 6 == this.data.pileType ? wx.setStorageSync("curPileTimeInfo", {
							port: 1 == this.sendport ? "A" : "B",
							hour: this.hour
						}) : wx.setStorageSync("curPileTimeInfo", {
							port: this.sendport,
							hour: this.hour
						}), this.startCharging()
					} else this.startCharging();
				else wx.showToast({
					title: "请选择充电端口",
					icon: "none",
					duration: 2e3
				})
			},
			startCharging: function () {
				var e = this;
				0 == this.data.price && 3 == this.data.optType && 3 != this.data.feeType && (this.hour = 0), a.post({
					url: "/charge-pile/start/" + this.pileId,
					requireAuth: !0,
					showLoading: !0,
					loadingText: "请稍等",
					data: {
						port: this.sendport,
						value: this.hour,
						channel: this.data.isWeChat ? 1 : 2,
						optType: this.optType,
						clntType: this.data.isWeChat ? 1 : 2,
						payType: this.data.chooseWhichPayment,
						formId: this.formId,
						v: this.v
					},
					success: function (a) {
						var s = a.data;
						if (e.recordId = s.recordId, wx.setStorageSync("recordId", s.recordId), 200 === a.statusCode) switch (s.status) {
							case 0:
								t.updateChargeStatus(o.WAIT_CHARGE), e.startListenAndGotoChargeControlPage();
								break;
							case 1:
								t.updateChargeStatus(o.CHARGING), e.startListenAndGotoChargeControlPage();
								break;
							case 8:
								t.updateChargeStatus(o.CHARG_STARTING), e.startListenAndGotoChargeControlPage();
								break;
							case 10:
								i.pay(s.payInfo).then(function (a) {
									6 == e.data.pileType ? (t.updateChargeStatus(o.CHARG_STARTING), e.startListenAndGotoChargeControlPage()) : (t.updateChargeStatus(o.WAIT_NOTICE), e.startListenAndGotoChargeControlPage())
								}).catch(function (t) {});
								break;
							case 20:
								wx.showModal({
									title: "温馨提示",
									showCancel: !0,
									content: "余额不足，请先充值",
									cancelText: "取消",
									confirmText: "去充值",
									success: function (t) {
										t.confirm && e.navtobalance()
									}
								});
								break;
							default:
								wx.showModal({
									title: a.data.message,
									showCancel: !1,
									content: ""
								})
						} else wx.showModal({
							title: a.data,
							showCancel: !1
						})
					},
					fail: function (t) {
						wx.showModal({
							title: "设备未响应，请求超时！",
							showCancel: !1
						})
					}
				})
			},
			offlineStart: function () {
				var e = this;
				a.post({
					url: "/charge-pile/offlineStart",
					requireAuth: !0,
					showLoading: !0,
					loadingText: "请稍等",
					data: {
						id: this.pileId,
						port: this.sendport,
						value: this.data.otpPrice,
						channel: this.data.isWeChat ? 1 : 2,
						optType: this.optType,
						clntType: this.data.isWeChat ? 1 : 2,
						payType: this.data.chooseWhichPayment,
						v: this.v
					},
					success: function (a) {
						if (console.log("动态验证码", a), 200 === a.statusCode) {
							if (a.data.code) return void e.setData({
								dynamicCode: a.data.code,
								isShowDynamicCode: !0,
								isShowMask: !0
							});
							switch (a.data.status) {
								case 10:
									t.updateChargeStatus(o.WAIT_NOTICE), t.startListenStompMessage(a.data.recordId), t.registeChargeStatusCallback(o.CHARGING, function (a) {
										e.setData({
											dynamicCode: a.message,
											isShowDynamicCode: !0,
											isShowMask: !0
										}), t.stopListenStompMessage()
									}), i.pay(a.data.payInfo).then(function () {}).catch(function () {
										t.stopListenStompMessage()
									});
									break;
								case 20:
									wx.showModal({
										title: "温馨提示",
										showCancel: !0,
										content: "余额不足，请先充值",
										cancelText: "取消",
										confirmText: "去充值",
										success: function (t) {
											t.confirm && e.navtobalance()
										}
									});
									break;
								default:
									wx.showModal({
										title: a.data.message,
										showCancel: !1,
										content: ""
									})
							}
						} else wx.showModal({
							title: a.data,
							showCancel: !1
						})
					},
					fail: function (t) {
						wx.showModal({
							title: "设备未响应，请求超时！",
							showCancel: !1
						})
					}
				})
			},
			onSocketMessageCallback: function (t) {
				return t
			},
			renderTitleBarMask: function () {
				wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#04140b"
				})
			},
			cancelTitleBarMask: function () {
				wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#24c771"
				})
			},
			hidePicture: function () {
				clearInterval(this.timer), this.timer = null, this.setData({
					closeTime: 10,
					showWelcome: !1
				}), this.cancelTitleBarMask()
			},
			loadWelcomeImage: function () {
				var t = this;
				a.post({
					url: "/banner/index",
					data: {
						place: 2
					},
					success: function (e) {
						200 === e.statusCode ? (0 != e.data.length && (t.setData({
							showWelcome: !0,
							adContent: e.data[0]
						}), t.timer = setInterval(function () {
							t.data.closeTime || (clearInterval(t.timer), t.timer = null, t.setData({
								showWelcome: !1
							})), t.setData({
								closeTime: t.data.closeTime - 1
							})
						}, 1e3)), t.renderTitleBarMask()) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			toFaultrepair: function () {
				wx.navigateTo({
					url: "/pages/mine/fault-repair/index?pileNo=" + this.pileNo
				})
			},
			startListenAndGotoChargeControlPage: function () {
				t.startListenStompMessage(this.recordId);
				var e = void 0;
				e = 1 == this.data.vehicleType ? "../control/index" : "../ev-control/index", wx.navigateTo({
					url: e
				})
			},
			navtobalance: function () {
				var t = this.data.walletId,
					e = 2;
				2 == this.data.chooseWhichPayment && (t = this.data.siteWalletId, e = 5), wx.navigateTo({
					url: "/pages/mine/topup/index?siteId=" + this.siteId + "&walletId=" + t + "&rechargeType=" + e
				})
			},
			jump: function (t) {
				var e = this.data.adContent.type;
				1 != e && (this.data.adContent.operator || a.post({
					url: "/banner/clickBanner",
					requireAuth: !0,
					data: {
						id: this.data.adContent.id,
						outerId: this.data.adContent.outerId
					}
				}), 3 == e ? wx.navigateTo({
					url: "/pages/index/outurl/index?url=" + this.data.adContent.linkUrl
				}) : 2 == e ? wx.navigateToMiniProgram({
					appId: this.data.adContent.linkUrl,
					path: this.data.adContent.miniprogramPage || "pages/index/index",
					success: function (t) {}
				}) : 4 == e && wx.navigateTo({
					url: "/pages/index/rich-text/index?richId=" + this.data.adContent.id
				}))
			},
			confirmCharge: function () {
				this.setData({
					isShowOfflineCharge: !1,
					isShowMask: !1
				})
			},
			closeShowCode: function () {
				this.getpaymentMethod(), this.setData({
					isShowDynamicCode: !1,
					isShowMask: !1
				})
			},
			goHome: function () {
				this.setData({
					isShowOfflineTips: !1,
					isShowMask: !1
				}), wx.reLaunch({
					url: "/pages/near/near-site/index"
				})
			},
			exchange: function () {
				wx.navigateTo({
					url: "/pages/charge/exchange/index?pileNo=" + this.pileNo
				})
			}
		});
	});
	require("pages/charge/detail/index.js");
	__wxRoute = 'pages/charge/exchange/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/charge/exchange/index.js';
	define("pages/charge/exchange/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var a = require("../../../utils/http.js"),
			t = require("../../../utils/pay.js");
		Page({
			data: {
				pileNo: "",
				amount: 200,
				mixPayEnabled: !1,
				chooseWhichPayment: 1,
				walletId: "",
				siteWalletId: "",
				weChatPayment: !1,
				balancePayment: !1,
				specialPayment: !1,
				siteBalance: 0,
				isShowPaymentMethod: !1,
				isShowMask: !1,
				miniPayLogo: ""
			},
			pileNo: "",
			onLoad: function (a) {
				var t = wx.getStorageSync("miniType");
				this.setData({
					isWeChat: 1 == t,
					miniPayName: 1 == t ? "微信支付" : "支付宝支付",
					miniPayLogo: 1 == t ? "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_wechatpayment2x.png" : "https://charge-pile.oss-cn-hangzhou.aliyuncs.com/icon/icon_zhifubao.png"
				}), this.pileNo = a.pileNo, this.setData({
					pileNo: this.pileNo
				}), this.getpaymentMethod()
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {},
			clickMask: function () {
				this.setData({
					isShowMask: !1,
					isShowPaymentMethod: !1
				})
			},
			choossPayment: function (a) {
				var t = a.currentTarget.dataset.method;
				this.setData({
					chooseWhichPayment: t,
					isShowPaymentMethod: !1,
					isShowMask: !1
				})
			},
			choosePaymentMethod: function () {
				this.setData({
					isShowPaymentMethod: !0,
					isShowMask: !0
				})
			},
			getpaymentMethod: function () {
				var t = this;
				a.get({
					url: "/user/pay-type",
					requireAuth: !0,
					data: {
						pileNo: this.pileNo
					},
					success: function (a) {
						200 === a.statusCode ? (t.setData({
							mixPayEnabled: a.data.mixPayEnabled
						}), 1 == a.data.extPayFirst ? (t.setData({
							chooseWhichPayment: 3,
							weChatPayment: !0,
							balancePayment: !0,
							balance: a.data.balance
						}), a.data.siteBalance && t.setData({
							specialPayment: !0,
							siteBalance: a.data.siteBalance
						})) : a.data.siteBalance ? t.setData({
							chooseWhichPayment: 2,
							siteWalletId: a.data.siteWalletId,
							specialPayment: !0,
							balancePayment: !0,
							balance: a.data.balance,
							siteBalance: a.data.siteBalance
						}) : t.setData({
							chooseWhichPayment: 1,
							walletId: a.data.walletId,
							balancePayment: !0,
							balance: a.data.balance
						})) : wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (a) {
						wx.showToast({
							title: a.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			nowExchange: function () {
				var a = this;
				1 == this.data.chooseWhichPayment && this.data.balance < this.data.otpPrice && !this.data.mixPayEnabled ? wx.showModal({
					title: "温馨提示",
					showCancel: !0,
					content: "余额不足，请先充值",
					cancelText: "取消",
					confirmText: "去充值",
					success: function (t) {
						t.confirm ? a.navtobalance() : t.cancel
					}
				}) : 2 == this.data.chooseWhichPayment && this.data.siteBalance < this.data.otpPrice ? wx.showModal({
					title: "温馨提示",
					showCancel: !0,
					content: "专用账户余额不足，请先充值",
					cancelText: "取消",
					confirmText: "去充值",
					success: function (t) {
						t.confirm ? a.navtobalance() : t.cancel
					}
				}) : this.exchange()
			},
			exchange: function () {
				var e = this;
				a.post({
					url: "/exchange-battery/exchange-battery",
					requireAuth: !0,
					showLoading: !0,
					loadingText: "请稍等",
					data: {
						pileNo: this.pileNo,
						amount: this.data.amount,
						channel: this.data.isWeChat ? 1 : 2,
						payType: this.data.chooseWhichPayment
					},
					success: function (a) {
						var n = a.data;
						if (n || e.success(), 200 === a.statusCode) switch (n.status) {
							case 10:
								t.pay(n.payInfo).then(function (a) {
									e.success()
								}).catch(function (a) {});
								break;
							case 20:
								wx.showModal({
									title: "温馨提示",
									showCancel: !0,
									content: "余额不足，请先充值",
									cancelText: "取消",
									confirmText: "去充值",
									success: function (a) {
										a.confirm && e.navtobalance()
									}
								})
						}
					},
					fail: function (a) {
						wx.showModal({
							title: "设备未响应，请求超时！",
							showCancel: !1
						})
					}
				})
			},
			navtobalance: function () {
				var a = this.data.walletId,
					t = 2;
				2 == this.data.chooseWhichPayment && (a = this.data.siteWalletId, t = 5), wx.navigateTo({
					url: "/pages/mine/topup/index?siteId=" + this.siteId + "&walletId=" + a + "&rechargeType=" + t
				})
			},
			success: function () {
				wx.showModal({
					title: "温馨提示",
					showCancel: !0,
					content: "支付成功，请线下换电！",
					cancelText: "回到首页",
					confirmText: "确定",
					success: function (a) {
						a.cancel && wx.switchTab({
							url: "/pages/index/index"
						})
					}
				})
			}
		});
	});
	require("pages/charge/exchange/index.js");
	__wxRoute = 'pages/charge/control/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/charge/control/index.js';
	define("pages/charge/control/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = getApp(),
			e = require("../../../utils/http.js"),
			a = require("../../../utils/constant.js"),
			o = require("../../../utils/util.js"),
			s = require("../../../utils/client.js");
		Page({
			data: {
				chargeStatus: null,
				power: 0,
				Isthetiming: "00:00:00",
				countdown: "00:00:00",
				realConsumption: 0,
				showModalStatus: !1,
				showFinshDialogue: !1,
				context: "",
				finshtext: "",
				txtColor: "",
				finshreason: "",
				siteName: "",
				suspendstyle: !0,
				pageDeep: 0,
				controlCharginginfo: !1,
				feeType: 1,
				expectedconsume: "",
				waveHeight: 0,
				collected: !1,
				showWelcome: !1,
				adContent: {},
				adContent1: {},
				showNoLoad: !1,
				restartTimes: 3,
				restartCountDown: 0,
				showRestartText: "充电器已接好，开始充电(剩余3次)",
				isRestart: !0,
				warnTextColor: "",
				showRestartDialog: !1,
				closeTime: 10
			},
			closeTimer: null,
			recordId: "",
			viewUnloaded: !1,
			curPileId: 0,
			curPileTimeInfo: null,
			textTimer: "",
			showed: !0,
			minusTimer: null,
			plusTimer: null,
			positiveobj: "",
			countdown: "",
			hidetriggered: !1,
			handleExpectedconsume: !1,
			wave: "",
			surplusTime: 0,
			lastSurplusTime: 0,
			timer: null,
			onLoad: function (e) {
				var o = this;
				this.getAdImg();
				var r = JSON.parse(decodeURIComponent(wx.getStorageSync("pileDetail")));
				this.curPileTimeInfo = wx.getStorageSync("curPileTimeInfo"), console.log(r), this.setData({
					siteName: r.siteName,
					siteAddress: r.siteAddress,
					pileNo: r.pileNo,
					portNum: this.curPileTimeInfo.port,
					pileAddress: r.pileAddress
				}), this.recordId = wx.getStorageSync("recordId"), t.setChagePageShowing(!0);
				var i = t.getChargeStatus();
				t.registeChargeStatusCallback(a.CHARG_POWER, function (t) {
					t && t.power && o.setData({
						power: t.power
					}), o.setData({
						suspendstyle: !0
					}), o.renderPageForCharging()
				}), i != a.WAIT_CHARGE && i != a.CHARGING || this.renderRunStatus(), i == a.WAIT_NOTICE && t.registeListenDoneCallback(function () {
					o.renderRunStatus()
				}), i == a.CHARG_STARTING && (this.renderPageForChargeStarting(), this.renderRunStatus()), t.registeChargeStatusCallback(a.WAIT_CHARGE, function () {
					o.renderPageForWaitCharge(), o.renderRunStatus()
				}), t.registeChargeStatusCallback(a.CHARGING, function (t) {
					t && t.power && o.setData({
						power: t.power
					}), o.setData({
						suspendstyle: !0
					}), o.renderPageForCharging(), o.renderRunStatus()
				}), t.registeChargeStatusCallback(a.CHARG_SUSPEND, function () {
					o.setData({
						suspendstyle: !1
					}), o.renderPageForWaitCharge(), o.suspendStateQuery()
				}), t.registeChargeStatusCallback(a.CHARG_FINISH, function (t) {
					o.afterChargeFinished(t.message)
				}), t.registeChargeStatusCallback(a.NO_CHARGING, function (t) {
					o.afterChargeFinished("在线手动停止")
				}), s.topic("/app-charge-consume", function (t) {
					o.recordId == t.recordId && o.setData({
						expectedconsume: t.amount / 100
					})
				}), this.setData({
					pageDeep: getCurrentPages().length
				})
			},
			onReady: function () {},
			onShow: function () {
				var e = this;
				this.handleExpectedconsume = !1, this.recordId = wx.getStorageSync("recordId"), this.shownowtime = Date.now(), this.showed = !0, this.hidetriggered && (this.thetiming = this.hidethetiming, this.Thecountdown = this.hideThecountdown, this.thetiming += (this.shownowtime - this.hidenowtime) / 1e3, this.Thecountdown -= (this.shownowtime - this.hidenowtime) / 1e3), setTimeout(function () {
					var o = wx.getStorageSync("ws-open"),
						s = t.getChargeStatus();
					0 == o && s != a.CHARG_FINISH && s != a.NO_CHARGING && (t.registeListenDoneCallback(function () {
						e.renderRunStatus()
					}), t.startListenStompMessage(e.recordId))
				}, 3e3), this.viewUnloaded = !1
			},
			onHide: function () {
				this.showed = !1, this.hidenowtime = Date.now(), this.hidethetiming = this.thetiming, this.hideThecountdown = this.Thecountdown, this.hidetriggered = !0
			},
			onUnload: function () {
				t.clearChargeStatusCallbacks(), t.setChagePageShowing(!1), clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.viewUnloaded = !0
			},
			getAdImg: function () {
				var t = this;
				e.post({
					url: "/banner/index",
					data: {
						place: 4
					},
					success: function (e) {
						200 === e.statusCode ? 0 != e.data.length && (t.setData({
							showWelcome: !0,
							adContent: e.data[0]
						}), t.closeTimer = setInterval(function () {
							t.data.closeTime || (clearInterval(t.closeTimer), t.closeTimer = null, t.setData({
								showWelcome: !1
							})), t.setData({
								closeTime: t.data.closeTime - 1
							})
						}, 1e3)) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				}), e.post({
					url: "/banner/index",
					data: {
						place: 5
					},
					success: function (e) {
						200 === e.statusCode ? 0 != e.data.length && t.setData({
							adContent1: e.data[0]
						}) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			hidePicture: function () {
				clearInterval(this.closeTimer), this.closeTimer = null, this.setData({
					closeTime: 10,
					showWelcome: !1
				})
			},
			jump: function (t) {
				var a = t.currentTarget.dataset.ad,
					o = a.type;
				1 != o && (a.operator || e.post({
					url: "/banner/clickBanner",
					requireAuth: !0,
					data: {
						id: a.id,
						outerId: a.outerId
					}
				}), 3 == o ? wx.navigateTo({
					url: "/pages/index/outurl/index?url=" + a.linkUrl
				}) : 2 == o ? wx.navigateToMiniProgram({
					appId: a.linkUrl,
					path: a.miniprogramPage || "pages/index/index",
					success: function (t) {}
				}) : 4 == o && wx.navigateTo({
					url: "/pages/index/rich-text/index?richId=" + a.id
				}))
			},
			collecteBtn: function () {
				var t = this;
				e.get({
					url: "/charge-pile-collect/add",
					requireAuth: !0,
					data: {
						pileNo: this.data.pileNo
					},
					success: function (e) {
						200 === e.statusCode ? (t.setData({
							collected: !t.data.collected
						}), wx.showToast({
							title: t.data.collected ? "收藏成功" : "取消收藏",
							icon: "success",
							duration: 2e3
						})) : wx.showToast({
							title: e.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			loadMultipleChargingOrders: function () {
				var o = this;
				e.post({
					url: "/charge-record/recordStatus",
					requireAuth: !0,
					showLoading: !0,
					success: function (e) {
						200 == e.statusCode && (0 == e.data.length ? (clearInterval(o.minusTimer), clearInterval(o.plusTimer), t.updateChargeStatus(a.NO_CHARGING), t.stopListenStompMessage()) : t.updateChargeStatus(a.CHARGING))
					}
				})
			},
			onButtonClick: function () {
				var o = this;
				1 == this.data.chargeStatus ? wx.showModal({
					title: "是否结束充电",
					content: "",
					success: function (t) {
						t.confirm && (clearTimeout(o.timer), o.stopCharging(o.recordId))
					}
				}) : e.get({
					url: "/charge-record/status/" + this.recordId,
					requireAuth: !0,
					showLoading: !0,
					data: this.curPileTimeInfo,
					success: function (e) {
						if (200 == e.statusCode) {
							o.setData({
								collected: e.data.collected
							});
							var s = e.data.status;
							5 == s && o.modaltipInfo("电缆还没有接好哦"), 1 == s && (wx.hideLoading(), o.renderPageForCharging(), t.updateChargeStatus(a.CHARGING), o.timingStatus(e))
						}
					}
				})
			},
			endAndChangePort: function () {
				var t = this;
				wx.showModal({
					title: "是否结束充电",
					content: "",
					success: function (e) {
						e.confirm && (clearTimeout(t.timer), t.stopCharging(t.recordId))
					}
				})
			},
			onBackorStopClick: function () {
				var t = this;
				this.data.chargeStatus ? wx.redirectTo({
					url: "/pages/index/index"
				}) : wx.showModal({
					title: "是否结束充电",
					content: "",
					success: function (e) {
						e.confirm && t.stopCharging(t.recordId)
					}
				})
			},
			chargeingbackbtn: function () {
				wx.switchTab({
					url: "/pages/index/index"
				})
			},
			onpowerToStop: function () {
				var t = this;
				console.log("点击了停止充电"), wx.showModal({
					title: "是否结束充电",
					content: "",
					success: function (e) {
						e.confirm && (console.log("用户已经停止充电了"), t.stopCharging(t.recordId))
					}
				})
			},
			renderPageForChargeStarting: function () {
				this.setData({
					chargeStatus: 2
				}), this.textAnaition(), this.viewUnloaded || (wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#FE5A03"
				}), this.transferBarColor = !1)
			},
			renderPageForWaitCharge: function () {
				this.setData({
					chargeStatus: 0
				}), this.textAnaition(), this.viewUnloaded || (wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#eb5150"
				}), this.transferBarColor = !1)
			},
			renderPageForCharging: function () {
				this.textTimer && clearInterval(this.textTimer), this.setData({
					chargeStatus: 1
				}), this.viewUnloaded || (wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#24c771"
				}), this.transferBarColor = !0)
			},
			renderRunStatus: function () {
				var o = this;
				clearTimeout(this.timer), e.get({
					url: "/charge-record/status/" + this.recordId,
					requireAuth: !0,
					data: this.curPileTimeInfo,
					success: function (e) {
						if (200 == e.statusCode) {
							o.setData({
								collected: e.data.collected
							});
							var s = e.data;
							switch (s.status) {
								case 0:
									break;
								case 1:
									o.renderPageForCharging(), o.timingStatus(e), o.setData({
										power: s.power
									}), o.setData({
										suspendstyle: !0
									}), e.data.popup && o.data.showRestartDialog ? (o.setData({
										showNoLoad: !0
									}), o.textAnaition(), o.timer = setTimeout(function () {
										o.renderRunStatus()
									}, 3e3)) : o.setData({
										showNoLoad: !1
									});
									break;
								case 2:
								case 3:
									t.updateChargeStatus(a.CHARG_FINISH, s);
									break;
								case 4:
									o.setData({
										suspendstyle: !1
									}), o.renderPageForWaitCharge(), o.suspendStateQuery();
									break;
								case 5:
									o.renderPageForWaitCharge(), o.timingStatus(e), e.data.popup && o.data.showRestartDialog && (o.setData({
										showNoLoad: !0
									}), o.textAnaition(), o.timer = setTimeout(function () {
										o.renderRunStatus()
									}, 3e3))
							}
						}
					}
				})
			},
			suspendStateQuery: function () {
				clearInterval(this.minusTimer), clearInterval(this.plusTimer)
			},
			timingStatus: function (t) {
				var e = this;
				clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.setData({
					feeType: t.data.feeType
				}), this.setData({
					expectedconsume: t.data.amount / 100
				});
				var a = t.data;
				this.Thecountdown = 60 * a.totalMinutes - a.consumeSeconds, console.log("这是进来的总时间", a.totalMinutes), this.setData({
					power: a.power
				}), this.minusTimer = setInterval(function () {
					e.Thecountdown <= 0 && clearInterval(e.minusTimer), e.countdown = o.formatSeconds(e.Thecountdown), e.Thecountdown--, e.showed && e.setData({
						countdown: e.countdown
					}), e.surplusTime = 100 - ~~(100 * e.Thecountdown / (60 * a.totalMinutes)), e.surplusTime !== e.lastSurplusTime && (e.waves(e.surplusTime), e.lastSurplusTime = e.surplusTime)
				}, 1e3), this.thetiming = t.data.consumeSeconds;
				var s = 60 * t.data.totalMinutes;
				this.plusTimer = setInterval(function () {
					e.thetiming > s && clearInterval(e.plusTimer), e.positiveobj = o.theTimeSeconds(e.thetiming, t.data.sitePrice / 10), e.thetiming++, e.showed && e.setData({
						Isthetiming: e.positiveobj.result
					})
				}, 1e3)
			},
			afterChargeFinished: function (t) {
				clearInterval(this.minusTimer), clearInterval(this.plusTimer), clearInterval(this.timer), this.setData({
					finshtext: t,
					showFinshDialogue: !0
				}), this.transferBarColor ? wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#126338"
				}) : wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#752828"
				})
			},
			stopCharging: function (t) {
				var a = this;
				e.post({
					url: "/charge-record/stop/" + t,
					requireAuth: !0,
					showLoading: !0,
					loadingText: "正在停止充电",
					success: function (t) {
						console.log("停止充电", t), 200 === t.statusCode ? a.loadMultipleChargingOrders() : wx.showModal({
							title: t.data,
							showCancel: !1
						})
					},
					fail: function (t) {
						wx.showModal({
							title: t.data,
							showCancel: !1
						})
					}
				})
			},
			powerDrawer: function () {
				this.setData({
					showModalStatus: !1
				}), wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#eb5150"
				})
			},
			modaltipInfo: function (t) {
				var e = this;
				this.setData({
					showModalStatus: !0,
					context: t
				}), wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#752828"
				}), setTimeout(function () {
					wx.setNavigationBarColor({
						frontColor: "#ffffff",
						backgroundColor: "#eb5150"
					}), e.setData({
						showModalStatus: !1
					})
				}, 5e3)
			},
			chargeFinshConfirm: function () {
				this.loadMultipleChargingOrders(), wx.redirectTo({
					url: "/pages/index/records/detail/index?recordId=" + this.recordId
				})
			},
			textAnaition: function () {
				var t = this;
				clearInterval(this.textTimer);
				var e = 0;
				this.textTimer = setInterval(function () {
					t.setData({
						txtColor: e % 2 == 0 ? "hehongColor" : "defaultColor",
						warnTextColor: e % 2 == 0 ? "hehongColor" : "warnDefaultColor"
					}), 2 == ++e && (e = 0)
				}, 1e3)
			},
			controlShowCharginginfo: function () {
				this.data.controlCharginginfo = !this.data.controlCharginginfo, this.setData({
					controlCharginginfo: this.data.controlCharginginfo
				})
			},
			waves: function (t) {
				t < 100 ? this.setData({
					waveHeight: t + "%"
				}) : this.setData({
					waveHeight: "115%"
				})
			},
			checkCharge: function () {
				var t = this;
				if (this.data.isRestart) {
					clearTimeout(this.timer);
					var a = this.data.restartTimes;
					this.setData({
						restartTimes: --a,
						restartCountDown: 6,
						isRestart: !1
					}), e.post({
						url: "/agent/restart",
						requireAuth: !0,
						showLoading: !0,
						loadingText: "正在重新连接...",
						data: {
							recordId: this.recordId
						},
						success: function (e) {
							console.log("正在重新连接", e), 200 === e.statusCode && e.data.startStatus && (t.renderRunStatus(), t.restartTimer = setInterval(function () {
								if (0 == t.data.restartCountDown) return t.setData({
									isRestart: !!t.data.restartTimes,
									showRestartText: "充电器已接好，开始充电(剩余" + t.data.restartTimes + "次)"
								}), void clearInterval(t.restartTimer);
								var e = --t.data.restartCountDown;
								t.setData({
									restartCountDown: e,
									showRestartText: e + "秒"
								})
							}, 1e3))
						}
					})
				}
			},
			closeNoLoad: function () {}
		});
	});
	require("pages/charge/control/index.js");
	__wxRoute = 'pages/charge/ev-control/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/charge/ev-control/index.js';
	define("pages/charge/ev-control/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var e = getApp(),
			t = require("../../../utils/http.js"),
			a = require("../../../utils/constant.js"),
			i = require("../../../utils/util.js");
		require("../../../utils/client.js");
		Page({
			data: {
				chargeStatus: null,
				power: 0,
				Isthetiming: "00:00:00",
				countdown: "00:00:00",
				realConsumption: 0,
				showModalStatus: !1,
				showFinshDialogue: !1,
				context: "",
				finshtext: "",
				txtColor: "",
				finshreason: "",
				siteName: "",
				pageDeep: 0,
				controlCharginginfo: !1,
				feeType: 1,
				expectedconsume: 0,
				waveHeight: 0,
				collected: !1,
				showWelcome: !1,
				adContent: {},
				adContent1: {},
				chargedPower: 0,
				realTimeTemperature: 0,
				realTimeVoltage: 0,
				realTimeCurrent: 0,
				showBreakPower: !1,
				closeTime: 10,
				leftX: 10,
				crossedWidth: 0,
				menuButton: null,
				screenPx: 0
			},
			closeTimer: null,
			recordId: "",
			viewUnloaded: !1,
			curPileId: 0,
			curPileTimeInfo: null,
			textTimer: "",
			showed: !0,
			minusTimer: null,
			plusTimer: null,
			positiveobj: "",
			countdown: "",
			hidetriggered: !1,
			handleExpectedconsume: !1,
			wave: "",
			surplusTime: 0,
			lastSurplusTime: 0,
			timer: null,
			startX: 0,
			endX: 0,
			onLoad: function (t) {
				var i = this;
				this.setData({
					menuButton: wx.getMenuButtonBoundingClientRect()
				}), this.getAdImg();
				var s = JSON.parse(decodeURIComponent(wx.getStorageSync("pileDetail")));
				this.curPileTimeInfo = wx.getStorageSync("curPileTimeInfo"), console.log(s), this.setData({
					siteName: s.siteName,
					siteAddress: s.siteAddress,
					pileNo: s.pileNo,
					portNum: this.curPileTimeInfo.port,
					pileAddress: s.pileAddress
				}), this.recordId = wx.getStorageSync("recordId"), e.setChagePageShowing(!0), this.renderRunStatus(), e.registeChargeStatusCallback(a.CHARG_POWER, function (e) {
					i.setData({
						showBreakPower: !1
					}), e && i.setData({
						chargedPower: e.quantity,
						realTimeTemperature: e.temperature,
						realTimeVoltage: e.voltage,
						realTimeCurrent: e.flows,
						expectedconsume: e.amount / 100
					})
				});
				var r = e.getChargeStatus();
				r != a.WAIT_CHARGE && r != a.CHARGING || this.renderRunStatus(), r == a.WAIT_NOTICE && e.registeListenDoneCallback(function () {
					i.renderRunStatus()
				}), r == a.CHARG_STARTING && (this.renderPageForChargeStarting(), this.renderRunStatus()), e.registeChargeStatusCallback(a.WAIT_CHARGE, function () {
					i.renderPageForWaitCharge(), i.renderRunStatus()
				}), e.registeChargeStatusCallback(a.CHARGING, function (e) {
					console.log("获取到功率"), i.setData({
						showBreakPower: !1
					}), e && e.power && i.setData({
						power: e.power
					}), i.renderPageForCharging(), i.renderRunStatus()
				}), e.registeChargeStatusCallback(a.CHARG_SUSPEND, function () {
					i.setData({
						showBreakPower: !0
					}), i.renderPageForWaitCharge(), i.suspendStateQuery()
				}), e.registeChargeStatusCallback(a.CHARG_FINISH, function (e) {
					i.recordId = e.recordId, i.afterChargeFinished(e.message)
				}), e.registeChargeStatusCallback(a.NO_CHARGING, function (e) {
					i.afterChargeFinished("在线手动停止")
				}), this.setData({
					pageDeep: getCurrentPages().length
				}), wx.getSystemInfo({
					success: function (e) {
						i.setData({
							screenPx: 750 / e.screenWidth
						})
					}
				})
			},
			onReady: function () {},
			onShow: function () {
				var t = this;
				this.handleExpectedconsume = !1, this.recordId = wx.getStorageSync("recordId"), this.shownowtime = Date.now(), this.showed = !0, this.hidetriggered && (this.thetiming = this.hidethetiming, this.Thecountdown = this.hideThecountdown, this.thetiming += (this.shownowtime - this.hidenowtime) / 1e3, this.Thecountdown -= (this.shownowtime - this.hidenowtime) / 1e3), setTimeout(function () {
					var i = wx.getStorageSync("ws-open"),
						s = e.getChargeStatus();
					0 == i && s != a.CHARG_FINISH && s != a.NO_CHARGING && (e.registeListenDoneCallback(function () {
						t.renderRunStatus()
					}), e.startListenStompMessage(t.recordId))
				}, 3e3), this.viewUnloaded = !1
			},
			onHide: function () {
				this.showed = !1, this.hidenowtime = Date.now(), this.hidethetiming = this.thetiming, this.hideThecountdown = this.Thecountdown, this.hidetriggered = !0
			},
			onUnload: function () {
				e.clearChargeStatusCallbacks(), e.setChagePageShowing(!1), clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.viewUnloaded = !0
			},
			getAdImg: function () {
				var e = this;
				t.post({
					url: "/banner/index",
					data: {
						place: 4
					},
					success: function (t) {
						200 === t.statusCode ? 0 != t.data.length && (e.setData({
							showWelcome: !0,
							adContent: t.data[0]
						}), e.closeTimer = setInterval(function () {
							e.data.closeTime || (clearInterval(e.closeTimer), e.closeTimer = null, e.setData({
								showWelcome: !1
							})), e.setData({
								closeTime: e.data.closeTime - 1
							})
						}, 1e3)) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				}), t.post({
					url: "/banner/index",
					data: {
						place: 5
					},
					success: function (t) {
						200 === t.statusCode ? 0 != t.data.length && e.setData({
							adContent1: t.data[0]
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			hidePicture: function () {
				clearInterval(this.closeTimer), this.closeTimer = null, this.setData({
					closeTime: 10,
					showWelcome: !1
				})
			},
			jump: function (e) {
				var a = this.data.adContent.type;
				1 != a && (this.data.adContent.operator || t.post({
					url: "/banner/clickBanner",
					requireAuth: !0,
					data: {
						id: this.data.adContent.id,
						outerId: this.data.adContent.outerId
					}
				}), 3 == a ? wx.navigateTo({
					url: "/pages/index/outurl/index?url=" + this.data.adContent.linkUrl
				}) : 2 == a ? wx.navigateToMiniProgram({
					appId: this.data.adContent.linkUrl,
					path: this.data.adContent.miniprogramPage || "pages/index/index",
					success: function (e) {}
				}) : 4 == a && wx.navigateTo({
					url: "/pages/index/rich-text/index?richId=" + this.data.adContent.id
				}))
			},
			loadMultipleChargingOrders: function () {
				var i = this;
				t.post({
					url: "/charge-record/recordStatus",
					requireAuth: !0,
					showLoading: !0,
					success: function (t) {
						200 == t.statusCode && (0 == t.data.length ? (clearInterval(i.minusTimer), clearInterval(i.plusTimer), e.updateChargeStatus(a.NO_CHARGING), e.stopListenStompMessage()) : e.updateChargeStatus(a.CHARGING))
					}
				})
			},
			renderPageForChargeStarting: function () {
				this.setData({
					chargeStatus: 2
				}), this.viewUnloaded || (wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#FE5A03"
				}), this.transferBarColor = !1)
			},
			renderPageForWaitCharge: function () {
				this.setData({
					chargeStatus: 0
				}), this.viewUnloaded || (wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#eb5150"
				}), this.transferBarColor = !1)
			},
			renderPageForCharging: function () {
				this.textTimer && clearInterval(this.textTimer), this.setData({
					chargeStatus: 1
				}), this.viewUnloaded || (wx.setNavigationBarColor({
					frontColor: "#ffffff",
					backgroundColor: "#24c771"
				}), this.transferBarColor = !0)
			},
			renderRunStatus: function () {
				var i = this;
				t.get({
					url: "/charge-record/status/" + this.recordId,
					requireAuth: !0,
					data: this.curPileTimeInfo,
					success: function (t) {
						if (200 == t.statusCode) {
							i.setData({
								collected: t.data.collected
							});
							var s = t.data;
							switch (s.status) {
								case 0:
									break;
								case 1:
									i.renderPageForCharging(), i.timingStatus(t), i.setData({
										power: s.power
									});
									break;
								case 2:
								case 3:
									e.updateChargeStatus(a.CHARG_FINISH, s);
									break;
								case 4:
									i.setData({
										showBreakPower: !0
									}), i.renderPageForWaitCharge(), i.suspendStateQuery();
									break;
								case 5:
									i.renderPageForWaitCharge(), i.timingStatus(t)
							}
						}
					}
				})
			},
			continueWait: function () {
				this.setData({
					showBreakPower: !1
				})
			},
			onpowerToStop: function () {
				var e = this;
				wx.showModal({
					title: "是否结束充电",
					content: "",
					success: function (t) {
						t.confirm && (e.setData({
							showBreakPower: !1
						}), e.stopCharging(e.recordId))
					}
				})
			},
			suspendStateQuery: function () {
				clearInterval(this.minusTimer), clearInterval(this.plusTimer)
			},
			timingStatus: function (e) {
				var t = this;
				clearInterval(this.minusTimer), clearInterval(this.plusTimer), this.setData({
					feeType: e.data.feeType
				});
				var a = e.data;
				this.Thecountdown = 60 * a.totalMinutes - a.consumeSeconds, console.log("这是进来的总时间", a.totalMinutes), this.setData({
					power: a.power
				}), this.minusTimer = setInterval(function () {
					t.Thecountdown <= 0 && clearInterval(t.minusTimer), t.countdown = i.formatSeconds(t.Thecountdown), t.Thecountdown--, t.showed && t.setData({
						countdown: t.countdown
					}), t.surplusTime = 100 - ~~(100 * t.Thecountdown / (60 * a.totalMinutes)), t.surplusTime !== t.lastSurplusTime && (t.lastSurplusTime = t.surplusTime)
				}, 1e3), this.thetiming = e.data.consumeSeconds;
				var s = 60 * e.data.totalMinutes;
				this.plusTimer = setInterval(function () {
					t.thetiming > s && clearInterval(t.plusTimer), t.positiveobj = i.theTimeSeconds(t.thetiming, e.data.sitePrice / 10), t.thetiming++, t.showed && t.setData({
						Isthetiming: t.positiveobj.result
					})
				}, 1e3)
			},
			afterChargeFinished: function (e) {
				this.chargeFinshConfirm(), wx.showToast({
					title: e,
					icon: "success",
					duration: 2e3
				})
			},
			stopCharging: function (e) {
				var a = this;
				t.post({
					url: "/charge-record/stop/" + e,
					requireAuth: !0,
					showLoading: !0,
					loadingText: "正在停止",
					success: function (e) {
						console.log("停止充电", e), 200 === e.statusCode ? a.loadMultipleChargingOrders() : wx.showModal({
							title: e.data,
							showCancel: !1
						})
					}
				})
			},
			chargeFinshConfirm: function () {
				this.loadMultipleChargingOrders(), this.recordId ? wx.redirectTo({
					url: "/pages/index/records/detail/index?recordId=" + this.recordId
				}) : wx.navigateBack()
			},
			touchStart: function (e) {
				this.startX = e.touches[0].pageX
			},
			touchMove: function (e) {
				this.endX = e.touches[0].pageX;
				var t = Math.max((this.endX - this.startX) * this.data.screenPx, 10);
				461 <= Math.floor(t) && Math.floor(t) <= 465 && wx.vibrateLong(), this.setData({
					leftX: Math.min(t, 463),
					crossedWidth: t > 10 ? t >= 463 ? 605 : t + 66 : 0
				})
			},
			touchEnd: function (e) {
				463 === this.data.leftX && this.stopCharging(this.recordId), this.setData({
					leftX: 10,
					crossedWidth: 0
				})
			},
			back: function () {
				wx.navigateBack()
			}
		});
	});
	require("pages/charge/ev-control/index.js");
	__wxRoute = 'pages/charge/balance/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/charge/balance/index.js';
	define("pages/charge/balance/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		Page({
			data: {
				balance: ""
			},
			onLoad: function (n) {
				this.setData({
					balance: n.balance
				})
			},
			onReady: function () {},
			onShow: function () {},
			onHide: function () {},
			onUnload: function () {},
			onPullDownRefresh: function () {},
			onReachBottom: function () {},
			onShareAppMessage: function () {},
			naVtopAmount: function () {
				wx.navigateTo({
					url: "/pages/mine/topup/index"
				})
			}
		});
	});
	require("pages/charge/balance/index.js");
	__wxRoute = 'pages/apply/complete/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/apply/complete/index.js';
	define("pages/apply/complete/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var a = getApp();
		Page({
			data: {
				appName: ""
			},
			onShow: function () {
				var t = this;
				a.getConfig().then(function (a) {
					t.setData({
						appName: a.appName
					})
				})
			}
		});
	});
	require("pages/apply/complete/index.js");
	__wxRoute = 'pages/apply/master/index';
	__wxRouteBegin = true;
	__wxAppCurrentFile__ = 'pages/apply/master/index.js';
	define("pages/apply/master/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
		"use strict";
		var t = require("../../../utils/http.js");
		Page({
			data: {
				phoneBound: !1,
				selected: !0,
				area: "",
				time: "获取验证码",
				VerificationCode: !0,
				currentTime: 60,
				applyTips: "",
				isShowPicker: !1,
				miniType: 1
			},
			oldChangeValue: [0, 0, 0],
			resulitcityinfo: "",
			onLoad: function (t) {
				this.setData({
					miniType: wx.getStorageSync("miniType")
				}), this.onloadApplyTip()
			},
			onReady: function () {
				var t = wx.getStorageSync("networkType"),
					e = wx.getStorageSync("networkNomeShowModal");
				if ("none" == t && !e) return wx.showModal({
					title: "当前没有网络，请检查网络设置",
					content: "",
					showCancel: !1,
					success: function (t) {
						wx.setStorageSync("networkNomeShowModal", !1)
					}
				}), void wx.setStorageSync("networkNomeShowModal", !0)
			},
			onloadApplyTip: function () {
				var e = this;
				t.get({
					url: "/agent/apply-des",
					success: function (t) {
						console.log(t), 200 === t.statusCode ? e.setData({
							applyTips: t.data.des
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fali: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			personal: function (t) {
				this.setData({
					selected1: !1,
					selected: !0,
					condition: !1
				})
			},
			Corp: function (t) {
				this.setData({
					selected: !1,
					selected1: !0,
					condition: !0
				})
			},
			getVerificationCode: function (t) {
				"countdownnow" !== t.currentTarget.id && this.getCode()
			},
			getCode: function () {
				var e = this,
					i = this.data.mobile;
				if (!i) return wx.showToast({
					title: "请先填写手机号",
					icon: "none",
					duration: 2e3
				}), !1;
				if (!/^1\d{10}$/.test(i)) return wx.showToast({
					title: "手机号码格式不正确",
					icon: "none",
					duration: 2e3
				}), !1;
				t.post({
					url: "/comm/captcha",
					showLoading: !0,
					loadingText: "正在获取验证码...",
					requireAuth: !0,
					success: function (t) {
						200 === t.statusCode ? wx.showToast({
							title: "发送短信验证码成功，请注意查看您的手机",
							icon: "none",
							duration: 2e3
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				});
				var a = this.data.currentTime,
					n = setInterval(function () {
						a--, e.setData({
							time: a + "秒",
							VerificationCode: !1
						}), a <= 0 && (clearInterval(n), e.setData({
							time: "重新发送",
							currentTime: 10,
							VerificationCode: !0
						}))
					}, 1e3)
			},
			onMyEvent: function (t) {
				this.setData({
					phoneBound: !1
				})
			},
			formSubmit: function (e) {
				var i = e.detail.value;
				if (i.realName = i.realName.replace(/\s/g, ""), "" == i.realName) return wx.showToast({
					title: "姓名不能为空",
					icon: "none",
					duration: 2e3
				}), !1;
				if (i.address = i.address.replace(/\s/g, ""), "" === i.address) return wx.showToast({
					title: "请选择所在地",
					icon: "none",
					duration: 2e3
				}), !1;
				if (i.hasOwnProperty("orgCode")) {
					if (i.type = 2, i.orgCode = i.orgCode.replace(/\s/g, ""), "" == i.orgCode) return wx.showToast({
						title: "请填写组织机构代码",
						icon: "none",
						duration: 2e3
					}), !1
				} else i.type = 1;
				t.post({
					url: "/agent/apply",
					showLoading: !0,
					loadingText: "正在提交申请...",
					data: i,
					requireAuth: !0,
					success: function (t) {
						var e = t;
						200 === t.statusCode ? wx.showModal({
							title: "申请成功请耐心等候",
							content: "",
							showCancel: !1,
							success: function (t) {
								if (t.confirm) {
									var i = wx.getStorageSync("user-info"),
										a = Object.assign(i, e.data);
									wx.setStorageSync("user-info", a), wx.redirectTo({
										url: "../complete/index"
									})
								}
							}
						}) : wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					},
					fail: function (t) {
						wx.showToast({
							title: t.data,
							icon: "none",
							duration: 2e3
						})
					}
				})
			},
			bindRegionChange: function (t) {
				var e = t.detail.value,
					i = e[0] + " " + e[1] + " " + e[2];
				this.setData({
					area: i
				})
			},
			onChange: function (t) {
				for (var e = t.detail.value, i = 0; i < e.length; i++)
					if (e[i] != this.oldChangeValue[i]) switch (console.log(i, "change变化的是那个"), i) {
						case 0:
							this.chooseprovince(this.data.provincesArray[e[i]].id, e);
							break;
						case 1:
							this.choosecity(this.data.citiesArray[e[i]].id, e);
							break;
						case 2:
							this.setfinally(e)
					}
				this.oldChangeValue = t.detail.value
			},
			chooseprovince: function (t, e) {
				var i = this;
				console.log(t, "省份ID"), this.httpGetCity("/comm/cities", {
					provinceId: t
				}, function (t) {
					i.setData({
						citiesArray: t.data
					}, function () {
						var a;
						a = i.shiIndex && t.data.length >= i.shiIndex + 1 ? t.data[i.shiIndex].id : t.data[0].id, i.httpGetCity("/comm/districts", {
							cityId: a
						}, function (t) {
							console.log(t), i.setData({
								districtsArray: t.data
							}, function () {
								i.setfinally(e)
							})
						})
					})
				})
			},
			choosecity: function (t, e) {
				var i = this;
				this.shiIndex = e[1], this.httpGetCity("/comm/districts", {
					cityId: t
				}, function (t) {
					i.setData({
						districtsArray: t.data
					}, function () {
						console.log(), i.setfinally(e)
					})
				})
			},
			setfinally: function (t) {
				var e, i;
				e = this.data.citiesArray.length < t[1] + 1 ? this.data.citiesArray[0].name : this.data.citiesArray[t[1]].name, i = this.data.districtsArray.length < t[2] + 1 ? this.data.districtsArray[0].name : this.data.districtsArray[t[2]].name, this.resulitcityinfo = this.data.provincesArray[t[0]].name + " " + e + " " + i
			},
			showpicker: function () {
				var t = this;
				this.setData({
					isShowPicker: !0
				}, function () {
					t.initlinkage()
				})
			},
			cancelProvinces: function () {
				this.setData({
					isShowPicker: !1
				})
			},
			sureProvinces: function () {
				this.setData({
					isShowPicker: !1,
					area: this.resulitcityinfo
				})
			},
			initlinkage: function () {
				var t = this;
				this.httpGetCity("/comm/provinces", function (e) {
					t.setData({
						provincesArray: e.data
					}, function () {
						t.httpGetCity("/comm/cities", {
							provinceId: e.data[0].id
						}, function (e) {
							t.setData({
								citiesArray: e.data
							}, function () {
								t.httpGetCity("/comm/districts", {
									cityId: e.data[0].id
								}, function (e) {
									t.setData({
										districtsArray: e.data
									}, function () {
										t.resulitcityinfo = t.data.provincesArray[0].name + " " + t.data.citiesArray[0].name + " " + t.data.districtsArray[0].name
									})
								})
							})
						})
					})
				})
			},
			httpGetCity: function () {
				for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
				3 === i.length ? t.get({
					url: i[i.length - 3],
					data: i[i.length - 2],
					success: function (t) {
						i[i.length - 1](t)
					}
				}) : t.get({
					url: i[i.length - 2],
					showLoading: !0,
					success: function (t) {
						i[i.length - 1](t)
					}
				})
			}
		});
	});
	require("pages/apply/master/index.js");