var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-inIf3C/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-inIf3C/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../node_modules/.pnpm/wrangler@3.28.3_@cloudflare+workers-types@4.20240208.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/.pnpm/wrangler@3.28.3_@cloudflare+workers-types@4.20240208.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var fl = Object.create;
    var Gr = Object.defineProperty;
    var dl = Object.getOwnPropertyDescriptor;
    var ml = Object.getOwnPropertyNames;
    var gl = Object.getPrototypeOf;
    var yl = Object.prototype.hasOwnProperty;
    var kt = (e, t) => () => (e && (t = e(e = 0)), t);
    var re = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var ar = (e, t) => {
      for (var r in t)
        Gr(e, r, { get: t[r], enumerable: true });
    };
    var Oi = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let o of ml(t))
          !yl.call(e, o) && o !== r && Gr(e, o, { get: () => t[o], enumerable: !(n = dl(t, o)) || n.enumerable });
      return e;
    };
    var Oe = (e, t, r) => (r = e != null ? fl(gl(e)) : {}, Oi(t || !e || !e.__esModule ? Gr(r, "default", { value: e, enumerable: true }) : r, e));
    var hl = (e) => Oi(Gr({}, "__esModule", { value: true }), e);
    function V(e) {
      return () => e;
    }
    function Le() {
      return x;
    }
    var x;
    var c = kt(() => {
      "use strict";
      x = { abort: V(void 0), addListener: V(Le()), allowedNodeEnvironmentFlags: /* @__PURE__ */ new Set(), arch: "x64", argv: ["/bin/node"], argv0: "node", chdir: V(void 0), config: { target_defaults: { cflags: [], default_configuration: "", defines: [], include_dirs: [], libraries: [] }, variables: { clang: 0, host_arch: "x64", node_install_npm: false, node_install_waf: false, node_prefix: "", node_shared_openssl: false, node_shared_v8: false, node_shared_zlib: false, node_use_dtrace: false, node_use_etw: false, node_use_openssl: false, target_arch: "x64", v8_no_strict_aliasing: 0, v8_use_snapshot: false, visibility: "" } }, connected: false, cpuUsage: () => ({ user: 0, system: 0 }), cwd: () => "/", debugPort: 0, disconnect: V(void 0), constrainedMemory: () => {
      }, emit: V(Le()), emitWarning: V(void 0), env: {}, eventNames: () => [], execArgv: [], execPath: "/", exit: V(void 0), features: { inspector: false, debug: false, uv: false, ipv6: false, tls_alpn: false, tls_sni: false, tls_ocsp: false, tls: false }, getMaxListeners: V(0), getegid: V(0), geteuid: V(0), getgid: V(0), getgroups: V([]), getuid: V(0), hasUncaughtExceptionCaptureCallback: V(false), hrtime: V([0, 0]), platform: "linux", kill: V(true), listenerCount: V(0), listeners: V([]), memoryUsage: V({ arrayBuffers: 0, external: 0, heapTotal: 0, heapUsed: 0, rss: 0 }), nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, off: V(Le()), on: V(Le()), once: V(Le()), openStdin: V({}), pid: 0, ppid: 0, prependListener: V(Le()), prependOnceListener: V(Le()), rawListeners: V([]), release: { name: "node" }, removeAllListeners: V(Le()), removeListener: V(Le()), resourceUsage: V({ fsRead: 0, fsWrite: 0, involuntaryContextSwitches: 0, ipcReceived: 0, ipcSent: 0, majorPageFault: 0, maxRSS: 0, minorPageFault: 0, sharedMemorySize: 0, signalsCount: 0, swappedOut: 0, systemCPUTime: 0, unsharedDataSize: 0, unsharedStackSize: 0, userCPUTime: 0, voluntaryContextSwitches: 0 }), setMaxListeners: V(Le()), setUncaughtExceptionCaptureCallback: V(void 0), setegid: V(void 0), seteuid: V(void 0), setgid: V(void 0), setgroups: V(void 0), setuid: V(void 0), sourceMapsEnabled: false, stderr: { fd: 2 }, stdin: { fd: 0 }, stdout: { fd: 1 }, title: "node", traceDeprecation: false, umask: V(0), uptime: V(0), version: "", versions: { http_parser: "", node: "", v8: "", ares: "", uv: "", zlib: "", modules: "", openssl: "" } };
    });
    var Fi;
    var v;
    var f = kt(() => {
      "use strict";
      v = (Fi = globalThis.performance) != null ? Fi : (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var b;
    var d = kt(() => {
      "use strict";
      b = () => {
      };
      b.prototype = b;
    });
    var E;
    var m = kt(() => {
      "use strict";
      E = class {
        constructor(t) {
          this.value = t;
        }
        deref() {
          return this.value;
        }
      };
    });
    var zi = re((Nt) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var Ni = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), xl = Ni((e) => {
        "use strict";
        e.byteLength = u, e.toByteArray = p, e.fromByteArray = T;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (i = 0, s = o.length; i < s; ++i)
          t[i] = o[i], r[o.charCodeAt(i)] = i;
        var i, s;
        r[45] = 62, r[95] = 63;
        function a(C) {
          var P = C.length;
          if (P % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var R = C.indexOf("=");
          R === -1 && (R = P);
          var I = R === P ? 0 : 4 - R % 4;
          return [R, I];
        }
        function u(C) {
          var P = a(C), R = P[0], I = P[1];
          return (R + I) * 3 / 4 - I;
        }
        function l(C, P, R) {
          return (P + R) * 3 / 4 - R;
        }
        function p(C) {
          var P, R = a(C), I = R[0], D = R[1], F = new n(l(C, I, D)), k = 0, $ = D > 0 ? I - 4 : I, q;
          for (q = 0; q < $; q += 4)
            P = r[C.charCodeAt(q)] << 18 | r[C.charCodeAt(q + 1)] << 12 | r[C.charCodeAt(q + 2)] << 6 | r[C.charCodeAt(q + 3)], F[k++] = P >> 16 & 255, F[k++] = P >> 8 & 255, F[k++] = P & 255;
          return D === 2 && (P = r[C.charCodeAt(q)] << 2 | r[C.charCodeAt(q + 1)] >> 4, F[k++] = P & 255), D === 1 && (P = r[C.charCodeAt(q)] << 10 | r[C.charCodeAt(q + 1)] << 4 | r[C.charCodeAt(q + 2)] >> 2, F[k++] = P >> 8 & 255, F[k++] = P & 255), F;
        }
        function y(C) {
          return t[C >> 18 & 63] + t[C >> 12 & 63] + t[C >> 6 & 63] + t[C & 63];
        }
        function h(C, P, R) {
          for (var I, D = [], F = P; F < R; F += 3)
            I = (C[F] << 16 & 16711680) + (C[F + 1] << 8 & 65280) + (C[F + 2] & 255), D.push(y(I));
          return D.join("");
        }
        function T(C) {
          for (var P, R = C.length, I = R % 3, D = [], F = 16383, k = 0, $ = R - I; k < $; k += F)
            D.push(h(C, k, k + F > $ ? $ : k + F));
          return I === 1 ? (P = C[R - 1], D.push(t[P >> 2] + t[P << 4 & 63] + "==")) : I === 2 && (P = (C[R - 2] << 8) + C[R - 1], D.push(t[P >> 10] + t[P >> 4 & 63] + t[P << 2 & 63] + "=")), D.join("");
        }
      }), bl = Ni((e) => {
        e.read = function(t, r, n, o, i) {
          var s, a, u = i * 8 - o - 1, l = (1 << u) - 1, p = l >> 1, y = -7, h = n ? i - 1 : 0, T = n ? -1 : 1, C = t[r + h];
          for (h += T, s = C & (1 << -y) - 1, C >>= -y, y += u; y > 0; s = s * 256 + t[r + h], h += T, y -= 8)
            ;
          for (a = s & (1 << -y) - 1, s >>= -y, y += o; y > 0; a = a * 256 + t[r + h], h += T, y -= 8)
            ;
          if (s === 0)
            s = 1 - p;
          else {
            if (s === l)
              return a ? NaN : (C ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, o), s = s - p;
          }
          return (C ? -1 : 1) * a * Math.pow(2, s - o);
        }, e.write = function(t, r, n, o, i, s) {
          var a, u, l, p = s * 8 - i - 1, y = (1 << p) - 1, h = y >> 1, T = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = o ? 0 : s - 1, P = o ? 1 : -1, R = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, a = y) : (a = Math.floor(Math.log(r) / Math.LN2), r * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + h >= 1 ? r += T / l : r += T * Math.pow(2, 1 - h), r * l >= 2 && (a++, l /= 2), a + h >= y ? (u = 0, a = y) : a + h >= 1 ? (u = (r * l - 1) * Math.pow(2, i), a = a + h) : (u = r * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + C] = u & 255, C += P, u /= 256, i -= 8)
            ;
          for (a = a << i | u, p += i; p > 0; t[n + C] = a & 255, C += P, a /= 256, p -= 8)
            ;
          t[n + C - P] |= R * 128;
        };
      }), ro = xl(), Dt = bl(), ki = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      Nt.Buffer = M;
      Nt.SlowBuffer = Tl;
      Nt.INSPECT_MAX_BYTES = 50;
      var Jr = 2147483647;
      Nt.kMaxLength = Jr;
      M.TYPED_ARRAY_SUPPORT = wl();
      !M.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function wl() {
        try {
          let e = new Uint8Array(1), t = { foo: function() {
            return 42;
          } };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(M.prototype, "parent", { enumerable: true, get: function() {
        if (M.isBuffer(this))
          return this.buffer;
      } });
      Object.defineProperty(M.prototype, "offset", { enumerable: true, get: function() {
        if (M.isBuffer(this))
          return this.byteOffset;
      } });
      function We(e) {
        if (e > Jr)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, M.prototype), t;
      }
      function M(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
          return io(e);
        }
        return Li(e, t, r);
      }
      M.poolSize = 8192;
      function Li(e, t, r) {
        if (typeof e == "string")
          return Pl(e, t);
        if (ArrayBuffer.isView(e))
          return vl(e);
        if (e == null)
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (Be(e, ArrayBuffer) || e && Be(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Be(e, SharedArrayBuffer) || e && Be(e.buffer, SharedArrayBuffer)))
          return ji(e, t, r);
        if (typeof e == "number")
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e)
          return M.from(n, t, r);
        let o = Al(e);
        if (o)
          return o;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
          return M.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      M.from = function(e, t, r) {
        return Li(e, t, r);
      };
      Object.setPrototypeOf(M.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(M, Uint8Array);
      function Bi(e) {
        if (typeof e != "number")
          throw new TypeError('"size" argument must be of type number');
        if (e < 0)
          throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      function El(e, t, r) {
        return Bi(e), e <= 0 ? We(e) : t !== void 0 ? typeof r == "string" ? We(e).fill(t, r) : We(e).fill(t) : We(e);
      }
      M.alloc = function(e, t, r) {
        return El(e, t, r);
      };
      function io(e) {
        return Bi(e), We(e < 0 ? 0 : so(e) | 0);
      }
      M.allocUnsafe = function(e) {
        return io(e);
      };
      M.allocUnsafeSlow = function(e) {
        return io(e);
      };
      function Pl(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !M.isEncoding(t))
          throw new TypeError("Unknown encoding: " + t);
        let r = Ui(e, t) | 0, n = We(r), o = n.write(e, t);
        return o !== r && (n = n.slice(0, o)), n;
      }
      function no(e) {
        let t = e.length < 0 ? 0 : so(e.length) | 0, r = We(t);
        for (let n = 0; n < t; n += 1)
          r[n] = e[n] & 255;
        return r;
      }
      function vl(e) {
        if (Be(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return ji(t.buffer, t.byteOffset, t.byteLength);
        }
        return no(e);
      }
      function ji(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, M.prototype), n;
      }
      function Al(e) {
        if (M.isBuffer(e)) {
          let t = so(e.length) | 0, r = We(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0)
          return typeof e.length != "number" || uo(e.length) ? We(0) : no(e);
        if (e.type === "Buffer" && Array.isArray(e.data))
          return no(e.data);
      }
      function so(e) {
        if (e >= Jr)
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Jr.toString(16) + " bytes");
        return e | 0;
      }
      function Tl(e) {
        return +e != e && (e = 0), M.alloc(+e);
      }
      M.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== M.prototype;
      };
      M.compare = function(e, t) {
        if (Be(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)), Be(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)), !M.isBuffer(e) || !M.isBuffer(t))
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t)
          return 0;
        let r = e.length, n = t.length;
        for (let o = 0, i = Math.min(r, n); o < i; ++o)
          if (e[o] !== t[o]) {
            r = e[o], n = t[o];
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      M.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      M.concat = function(e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0)
          return M.alloc(0);
        let r;
        if (t === void 0)
          for (t = 0, r = 0; r < e.length; ++r)
            t += e[r].length;
        let n = M.allocUnsafe(t), o = 0;
        for (r = 0; r < e.length; ++r) {
          let i = e[r];
          if (Be(i, Uint8Array))
            o + i.length > n.length ? (M.isBuffer(i) || (i = M.from(i)), i.copy(n, o)) : Uint8Array.prototype.set.call(n, i, o);
          else if (M.isBuffer(i))
            i.copy(n, o);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          o += i.length;
        }
        return n;
      };
      function Ui(e, t) {
        if (M.isBuffer(e))
          return e.length;
        if (ArrayBuffer.isView(e) || Be(e, ArrayBuffer))
          return e.byteLength;
        if (typeof e != "string")
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0)
          return 0;
        let o = false;
        for (; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return oo(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return r * 2;
            case "hex":
              return r >>> 1;
            case "base64":
              return Hi(e).length;
            default:
              if (o)
                return n ? -1 : oo(e).length;
              t = ("" + t).toLowerCase(), o = true;
          }
      }
      M.byteLength = Ui;
      function Cl(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return Nl(this, t, r);
            case "utf8":
            case "utf-8":
              return qi(this, t, r);
            case "ascii":
              return Dl(this, t, r);
            case "latin1":
            case "binary":
              return _l(this, t, r);
            case "base64":
              return kl(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Ll(this, t, r);
            default:
              if (n)
                throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = true;
          }
      }
      M.prototype._isBuffer = true;
      function xt(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      M.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2)
          xt(this, t, t + 1);
        return this;
      };
      M.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4)
          xt(this, t, t + 3), xt(this, t + 1, t + 2);
        return this;
      };
      M.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8)
          xt(this, t, t + 7), xt(this, t + 1, t + 6), xt(this, t + 2, t + 5), xt(this, t + 3, t + 4);
        return this;
      };
      M.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? qi(this, 0, e) : Cl.apply(this, arguments);
      };
      M.prototype.toLocaleString = M.prototype.toString;
      M.prototype.equals = function(e) {
        if (!M.isBuffer(e))
          throw new TypeError("Argument must be a Buffer");
        return this === e ? true : M.compare(this, e) === 0;
      };
      M.prototype.inspect = function() {
        let e = "", t = Nt.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      ki && (M.prototype[ki] = M.prototype.inspect);
      M.prototype.compare = function(e, t, r, n, o) {
        if (Be(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)), !M.isBuffer(e))
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), o === void 0 && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length)
          throw new RangeError("out of range index");
        if (n >= o && t >= r)
          return 0;
        if (n >= o)
          return -1;
        if (t >= r)
          return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e)
          return 0;
        let i = o - n, s = r - t, a = Math.min(i, s), u = this.slice(n, o), l = e.slice(t, r);
        for (let p = 0; p < a; ++p)
          if (u[p] !== l[p]) {
            i = u[p], s = l[p];
            break;
          }
        return i < s ? -1 : s < i ? 1 : 0;
      };
      function $i(e, t, r, n, o) {
        if (e.length === 0)
          return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, uo(r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (o)
            return -1;
          r = e.length - 1;
        } else if (r < 0)
          if (o)
            r = 0;
          else
            return -1;
        if (typeof t == "string" && (t = M.from(t, n)), M.isBuffer(t))
          return t.length === 0 ? -1 : Ii(e, t, r, n, o);
        if (typeof t == "number")
          return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : Ii(e, [t], r, n, o);
        throw new TypeError("val must be string, number or Buffer");
      }
      function Ii(e, t, r, n, o) {
        let i = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2)
            return -1;
          i = 2, s /= 2, a /= 2, r /= 2;
        }
        function u(p, y) {
          return i === 1 ? p[y] : p.readUInt16BE(y * i);
        }
        let l;
        if (o) {
          let p = -1;
          for (l = r; l < s; l++)
            if (u(e, l) === u(t, p === -1 ? 0 : l - p)) {
              if (p === -1 && (p = l), l - p + 1 === a)
                return p * i;
            } else
              p !== -1 && (l -= l - p), p = -1;
        } else
          for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
            let p = true;
            for (let y = 0; y < a; y++)
              if (u(e, l + y) !== u(t, y)) {
                p = false;
                break;
              }
            if (p)
              return l;
          }
        return -1;
      }
      M.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      M.prototype.indexOf = function(e, t, r) {
        return $i(this, e, t, r, true);
      };
      M.prototype.lastIndexOf = function(e, t, r) {
        return $i(this, e, t, r, false);
      };
      function Ml(e, t, r, n) {
        r = Number(r) || 0;
        let o = e.length - r;
        n ? (n = Number(n), n > o && (n = o)) : n = o;
        let i = t.length;
        n > i / 2 && (n = i / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (uo(a))
            return s;
          e[r + s] = a;
        }
        return s;
      }
      function Rl(e, t, r, n) {
        return Qr(oo(t, e.length - r), e, r, n);
      }
      function Sl(e, t, r, n) {
        return Qr($l(t), e, r, n);
      }
      function Ol(e, t, r, n) {
        return Qr(Hi(t), e, r, n);
      }
      function Fl(e, t, r, n) {
        return Qr(ql(t, e.length - r), e, r, n);
      }
      M.prototype.write = function(e, t, r, n) {
        if (t === void 0)
          n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string")
          n = t, r = this.length, t = 0;
        else if (isFinite(t))
          t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - t;
        if ((r === void 0 || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length)
          throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let i = false;
        for (; ; )
          switch (n) {
            case "hex":
              return Ml(this, e, t, r);
            case "utf8":
            case "utf-8":
              return Rl(this, e, t, r);
            case "ascii":
            case "latin1":
            case "binary":
              return Sl(this, e, t, r);
            case "base64":
              return Ol(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return Fl(this, e, t, r);
            default:
              if (i)
                throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), i = true;
          }
      };
      M.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function kl(e, t, r) {
        return t === 0 && r === e.length ? ro.fromByteArray(e) : ro.fromByteArray(e.slice(t, r));
      }
      function qi(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], o = t;
        for (; o < r; ) {
          let i = e[o], s = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
          if (o + a <= r) {
            let u, l, p, y;
            switch (a) {
              case 1:
                i < 128 && (s = i);
                break;
              case 2:
                u = e[o + 1], (u & 192) === 128 && (y = (i & 31) << 6 | u & 63, y > 127 && (s = y));
                break;
              case 3:
                u = e[o + 1], l = e[o + 2], (u & 192) === 128 && (l & 192) === 128 && (y = (i & 15) << 12 | (u & 63) << 6 | l & 63, y > 2047 && (y < 55296 || y > 57343) && (s = y));
                break;
              case 4:
                u = e[o + 1], l = e[o + 2], p = e[o + 3], (u & 192) === 128 && (l & 192) === 128 && (p & 192) === 128 && (y = (i & 15) << 18 | (u & 63) << 12 | (l & 63) << 6 | p & 63, y > 65535 && y < 1114112 && (s = y));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), o += a;
        }
        return Il(n);
      }
      var Di = 4096;
      function Il(e) {
        let t = e.length;
        if (t <= Di)
          return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; )
          r += String.fromCharCode.apply(String, e.slice(n, n += Di));
        return r;
      }
      function Dl(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let o = t; o < r; ++o)
          n += String.fromCharCode(e[o] & 127);
        return n;
      }
      function _l(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let o = t; o < r; ++o)
          n += String.fromCharCode(e[o]);
        return n;
      }
      function Nl(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let o = "";
        for (let i = t; i < r; ++i)
          o += Vl[e[i]];
        return o;
      }
      function Ll(e, t, r) {
        let n = e.slice(t, r), o = "";
        for (let i = 0; i < n.length - 1; i += 2)
          o += String.fromCharCode(n[i] + n[i + 1] * 256);
        return o;
      }
      M.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, M.prototype), n;
      };
      function ie(e, t, r) {
        if (e % 1 !== 0 || e < 0)
          throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      M.prototype.readUintLE = M.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || ie(e, t, this.length);
        let n = this[e], o = 1, i = 0;
        for (; ++i < t && (o *= 256); )
          n += this[e + i] * o;
        return n;
      };
      M.prototype.readUintBE = M.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || ie(e, t, this.length);
        let n = this[e + --t], o = 1;
        for (; t > 0 && (o *= 256); )
          n += this[e + --t] * o;
        return n;
      };
      M.prototype.readUint8 = M.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || ie(e, 1, this.length), this[e];
      };
      M.prototype.readUint16LE = M.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || ie(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      M.prototype.readUint16BE = M.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || ie(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      M.prototype.readUint32LE = M.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || ie(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      M.prototype.readUint32BE = M.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || ie(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      M.prototype.readBigUInt64LE = rt(function(e) {
        e = e >>> 0, _t(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && ur(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(o) << BigInt(32));
      });
      M.prototype.readBigUInt64BE = rt(function(e) {
        e = e >>> 0, _t(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && ur(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(o);
      });
      M.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || ie(e, t, this.length);
        let n = this[e], o = 1, i = 0;
        for (; ++i < t && (o *= 256); )
          n += this[e + i] * o;
        return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
      };
      M.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || ie(e, t, this.length);
        let n = t, o = 1, i = this[e + --n];
        for (; n > 0 && (o *= 256); )
          i += this[e + --n] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
      };
      M.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || ie(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      M.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || ie(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      M.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || ie(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      M.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || ie(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      M.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || ie(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      M.prototype.readBigInt64LE = rt(function(e) {
        e = e >>> 0, _t(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && ur(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      M.prototype.readBigInt64BE = rt(function(e) {
        e = e >>> 0, _t(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && ur(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      M.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || ie(e, 4, this.length), Dt.read(this, e, true, 23, 4);
      };
      M.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || ie(e, 4, this.length), Dt.read(this, e, false, 23, 4);
      };
      M.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || ie(e, 8, this.length), Dt.read(this, e, true, 52, 8);
      };
      M.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || ie(e, 8, this.length), Dt.read(this, e, false, 52, 8);
      };
      function Pe(e, t, r, n, o, i) {
        if (!M.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length)
          throw new RangeError("Index out of range");
      }
      M.prototype.writeUintLE = M.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          Pe(this, e, t, r, s, 0);
        }
        let o = 1, i = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); )
          this[t + i] = e / o & 255;
        return t + r;
      };
      M.prototype.writeUintBE = M.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          Pe(this, e, t, r, s, 0);
        }
        let o = r - 1, i = 1;
        for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
          this[t + o] = e / i & 255;
        return t + r;
      };
      M.prototype.writeUint8 = M.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      M.prototype.writeUint16LE = M.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      M.prototype.writeUint16BE = M.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      M.prototype.writeUint32LE = M.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      M.prototype.writeUint32BE = M.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function Vi(e, t, r, n, o) {
        Wi(t, n, o, e, r, 7);
        let i = Number(t & BigInt(4294967295));
        e[r++] = i, i = i >> 8, e[r++] = i, i = i >> 8, e[r++] = i, i = i >> 8, e[r++] = i;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      function Ki(e, t, r, n, o) {
        Wi(t, n, o, e, r, 7);
        let i = Number(t & BigInt(4294967295));
        e[r + 7] = i, i = i >> 8, e[r + 6] = i, i = i >> 8, e[r + 5] = i, i = i >> 8, e[r + 4] = i;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      M.prototype.writeBigUInt64LE = rt(function(e, t = 0) {
        return Vi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      M.prototype.writeBigUInt64BE = rt(function(e, t = 0) {
        return Ki(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      M.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          Pe(this, e, t, r, a - 1, -a);
        }
        let o = 0, i = 1, s = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); )
          e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1), this[t + o] = (e / i >> 0) - s & 255;
        return t + r;
      };
      M.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          Pe(this, e, t, r, a - 1, -a);
        }
        let o = r - 1, i = 1, s = 0;
        for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
          e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1), this[t + o] = (e / i >> 0) - s & 255;
        return t + r;
      };
      M.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      M.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      M.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      M.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      M.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || Pe(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      M.prototype.writeBigInt64LE = rt(function(e, t = 0) {
        return Vi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      M.prototype.writeBigInt64BE = rt(function(e, t = 0) {
        return Ki(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Gi(e, t, r, n, o, i) {
        if (r + n > e.length)
          throw new RangeError("Index out of range");
        if (r < 0)
          throw new RangeError("Index out of range");
      }
      function Ji(e, t, r, n, o) {
        return t = +t, r = r >>> 0, o || Gi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), Dt.write(e, t, r, n, 23, 4), r + 4;
      }
      M.prototype.writeFloatLE = function(e, t, r) {
        return Ji(this, e, t, true, r);
      };
      M.prototype.writeFloatBE = function(e, t, r) {
        return Ji(this, e, t, false, r);
      };
      function Qi(e, t, r, n, o) {
        return t = +t, r = r >>> 0, o || Gi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), Dt.write(e, t, r, n, 52, 8), r + 8;
      }
      M.prototype.writeDoubleLE = function(e, t, r) {
        return Qi(this, e, t, true, r);
      };
      M.prototype.writeDoubleBE = function(e, t, r) {
        return Qi(this, e, t, false, r);
      };
      M.prototype.copy = function(e, t, r, n) {
        if (!M.isBuffer(e))
          throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
          return 0;
        if (t < 0)
          throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
          throw new RangeError("Index out of range");
        if (n < 0)
          throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let o = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), o;
      };
      M.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string")
            throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !M.isEncoding(n))
            throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let i = e.charCodeAt(0);
            (n === "utf8" && i < 128 || n === "latin1") && (e = i);
          }
        } else
          typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r)
          throw new RangeError("Out of range index");
        if (r <= t)
          return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let o;
        if (typeof e == "number")
          for (o = t; o < r; ++o)
            this[o] = e;
        else {
          let i = M.isBuffer(e) ? e : M.from(e, n), s = i.length;
          if (s === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (o = 0; o < r - t; ++o)
            this[o + t] = i[o % s];
        }
        return this;
      };
      var It = {};
      function ao(e, t, r) {
        It[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      ao("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      ao("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      ao("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, o = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = _i(String(r)) : typeof r == "bigint" && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = _i(o)), o += "n"), n += ` It must be ${t}. Received ${o}`, n;
      }, RangeError);
      function _i(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
          t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      function Bl(e, t, r) {
        _t(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && ur(t, e.length - (r + 1));
      }
      function Wi(e, t, r, n, o, i) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw i > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}` : a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${(i + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new It.ERR_OUT_OF_RANGE("value", a, e);
        }
        Bl(n, o, i);
      }
      function _t(e, t) {
        if (typeof e != "number")
          throw new It.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      function ur(e, t, r) {
        throw Math.floor(e) !== e ? (_t(e, r), new It.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new It.ERR_BUFFER_OUT_OF_BOUNDS() : new It.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      var jl = /[^+/0-9A-Za-z-_]/g;
      function Ul(e) {
        if (e = e.split("=")[0], e = e.trim().replace(jl, ""), e.length < 2)
          return "";
        for (; e.length % 4 !== 0; )
          e = e + "=";
        return e;
      }
      function oo(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, o = null, i = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), o = r;
              continue;
            }
            r = (o - 55296 << 10 | r - 56320) + 65536;
          } else
            o && (t -= 3) > -1 && i.push(239, 191, 189);
          if (o = null, r < 128) {
            if ((t -= 1) < 0)
              break;
            i.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0)
              break;
            i.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0)
              break;
            i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0)
              break;
            i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else
            throw new Error("Invalid code point");
        }
        return i;
      }
      function $l(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r)
          t.push(e.charCodeAt(r) & 255);
        return t;
      }
      function ql(e, t) {
        let r, n, o, i = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
          r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
        return i;
      }
      function Hi(e) {
        return ro.toByteArray(Ul(e));
      }
      function Qr(e, t, r, n) {
        let o;
        for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
      function Be(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      function uo(e) {
        return e !== e;
      }
      var Vl = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let o = 0; o < 16; ++o)
            t[n + o] = e[r] + e[o];
        }
        return t;
      }();
      function rt(e) {
        return typeof BigInt > "u" ? Kl : e;
      }
      function Kl() {
        throw new Error("BigInt not supported");
      }
    });
    var w;
    var g = kt(() => {
      "use strict";
      w = Oe(zi());
    });
    var Po = re((K) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var X = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), is = X((e, t) => {
        "use strict";
        t.exports = function() {
          if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
            return false;
          if (typeof Symbol.iterator == "symbol")
            return true;
          var r = {}, n = Symbol("test"), o = Object(n);
          if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
            return false;
          var i = 42;
          r[n] = i;
          for (n in r)
            return false;
          if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
            return false;
          var s = Object.getOwnPropertySymbols(r);
          if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(r, n))
            return false;
          if (typeof Object.getOwnPropertyDescriptor == "function") {
            var a = Object.getOwnPropertyDescriptor(r, n);
            if (a.value !== i || a.enumerable !== true)
              return false;
          }
          return true;
        };
      }), en = X((e, t) => {
        "use strict";
        var r = is();
        t.exports = function() {
          return r() && !!Symbol.toStringTag;
        };
      }), Gl = X((e, t) => {
        "use strict";
        var r = typeof Symbol < "u" && Symbol, n = is();
        t.exports = function() {
          return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : n();
        };
      }), Jl = X((e, t) => {
        "use strict";
        var r = { foo: {} }, n = Object;
        t.exports = function() {
          return { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof n);
        };
      }), Ql = X((e, t) => {
        "use strict";
        var r = "Function.prototype.bind called on incompatible ", n = Object.prototype.toString, o = Math.max, i = "[object Function]", s = function(l, p) {
          for (var y = [], h = 0; h < l.length; h += 1)
            y[h] = l[h];
          for (var T = 0; T < p.length; T += 1)
            y[T + l.length] = p[T];
          return y;
        }, a = function(l, p) {
          for (var y = [], h = p || 0, T = 0; h < l.length; h += 1, T += 1)
            y[T] = l[h];
          return y;
        }, u = function(l, p) {
          for (var y = "", h = 0; h < l.length; h += 1)
            y += l[h], h + 1 < l.length && (y += p);
          return y;
        };
        t.exports = function(l) {
          var p = this;
          if (typeof p != "function" || n.apply(p) !== i)
            throw new TypeError(r + p);
          for (var y = a(arguments, 1), h, T = function() {
            if (this instanceof h) {
              var D = p.apply(this, s(y, arguments));
              return Object(D) === D ? D : this;
            }
            return p.apply(l, s(y, arguments));
          }, C = o(0, p.length - y.length), P = [], R = 0; R < C; R++)
            P[R] = "$" + R;
          if (h = b("binder", "return function (" + u(P, ",") + "){ return binder.apply(this,arguments); }")(T), p.prototype) {
            var I = function() {
            };
            I.prototype = p.prototype, h.prototype = new I(), I.prototype = null;
          }
          return h;
        };
      }), ho = X((e, t) => {
        "use strict";
        var r = Ql();
        t.exports = b.prototype.bind || r;
      }), Wl = X((e, t) => {
        "use strict";
        var r = ho();
        t.exports = r.call(b.call, Object.prototype.hasOwnProperty);
      }), xo = X((e, t) => {
        "use strict";
        var r, n = SyntaxError, o = b, i = TypeError, s = function(J) {
          try {
            return o('"use strict"; return (' + J + ").constructor;")();
          } catch (G) {
          }
        }, a = Object.getOwnPropertyDescriptor;
        if (a)
          try {
            a({}, "");
          } catch (J) {
            a = null;
          }
        var u = function() {
          throw new i();
        }, l = a ? function() {
          try {
            return arguments.callee, u;
          } catch (J) {
            try {
              return a(arguments, "callee").get;
            } catch (G) {
              return u;
            }
          }
        }() : u, p = Gl()(), y = Jl()(), h = Object.getPrototypeOf || (y ? function(J) {
          return J.__proto__;
        } : null), T = {}, C = typeof Uint8Array > "u" || !h ? r : h(Uint8Array), P = { "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer, "%ArrayIteratorPrototype%": p && h ? h([][Symbol.iterator]()) : r, "%AsyncFromSyncIteratorPrototype%": r, "%AsyncFunction%": T, "%AsyncGenerator%": T, "%AsyncGeneratorFunction%": T, "%AsyncIteratorPrototype%": T, "%Atomics%": typeof Atomics > "u" ? r : Atomics, "%BigInt%": typeof BigInt > "u" ? r : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? r : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": void 0, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry, "%Function%": o, "%GeneratorFunction%": T, "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": p && h ? h(h([][Symbol.iterator]())) : r, "%JSON%": typeof JSON == "object" ? JSON : r, "%Map%": typeof Map > "u" ? r : Map, "%MapIteratorPrototype%": typeof Map > "u" || !p || !h ? r : h((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? r : Promise, "%Proxy%": typeof Proxy > "u" ? r : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? r : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? r : Set, "%SetIteratorPrototype%": typeof Set > "u" || !p || !h ? r : h((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": p && h ? h(""[Symbol.iterator]()) : r, "%Symbol%": p ? Symbol : r, "%SyntaxError%": n, "%ThrowTypeError%": l, "%TypedArray%": C, "%TypeError%": i, "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap, "%WeakRef%": typeof E > "u" ? r : E, "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet };
        if (h)
          try {
            null.error;
          } catch (J) {
            R = h(h(J)), P["%Error.prototype%"] = R;
          }
        var R, I = function J(G) {
          var _;
          if (G === "%AsyncFunction%")
            _ = s("async function () {}");
          else if (G === "%GeneratorFunction%")
            _ = s("function* () {}");
          else if (G === "%AsyncGeneratorFunction%")
            _ = s("async function* () {}");
          else if (G === "%AsyncGenerator%") {
            var pe = J("%AsyncGeneratorFunction%");
            pe && (_ = pe.prototype);
          } else if (G === "%AsyncIteratorPrototype%") {
            var ce = J("%AsyncGenerator%");
            ce && h && (_ = h(ce.prototype));
          }
          return P[G] = _, _;
        }, D = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, F = ho(), k = Wl(), $ = F.call(b.call, Array.prototype.concat), q = F.call(b.apply, Array.prototype.splice), xe = F.call(b.call, String.prototype.replace), W = F.call(b.call, String.prototype.slice), ee = F.call(b.call, RegExp.prototype.exec), Me = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, te = /\\(\\)?/g, Re = function(J) {
          var G = W(J, 0, 1), _ = W(J, -1);
          if (G === "%" && _ !== "%")
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if (_ === "%" && G !== "%")
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var pe = [];
          return xe(J, Me, function(ce, et, ne, gt) {
            pe[pe.length] = ne ? xe(gt, te, "$1") : et || ce;
          }), pe;
        }, Xe = function(J, G) {
          var _ = J, pe;
          if (k(D, _) && (pe = D[_], _ = "%" + pe[0] + "%"), k(P, _)) {
            var ce = P[_];
            if (ce === T && (ce = I(_)), typeof ce > "u" && !G)
              throw new i("intrinsic " + J + " exists, but is not available. Please file an issue!");
            return { alias: pe, name: _, value: ce };
          }
          throw new n("intrinsic " + J + " does not exist!");
        };
        t.exports = function(J, G) {
          if (typeof J != "string" || J.length === 0)
            throw new i("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && typeof G != "boolean")
            throw new i('"allowMissing" argument must be a boolean');
          if (ee(/^%?[^%]*%?$/, J) === null)
            throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
          var _ = Re(J), pe = _.length > 0 ? _[0] : "", ce = Xe("%" + pe + "%", G), et = ce.name, ne = ce.value, gt = false, tt = ce.alias;
          tt && (pe = tt[0], q(_, $([0, 1], tt)));
          for (var yt = 1, Qe = true; yt < _.length; yt += 1) {
            var be = _[yt], ht = W(be, 0, 1), Ot = W(be, -1);
            if ((ht === '"' || ht === "'" || ht === "`" || Ot === '"' || Ot === "'" || Ot === "`") && ht !== Ot)
              throw new n("property names with quotes must have matching quotes");
            if ((be === "constructor" || !Qe) && (gt = true), pe += "." + be, et = "%" + pe + "%", k(P, et))
              ne = P[et];
            else if (ne != null) {
              if (!(be in ne)) {
                if (!G)
                  throw new i("base intrinsic for " + J + " exists, but the property is not available.");
                return;
              }
              if (a && yt + 1 >= _.length) {
                var Ft = a(ne, be);
                Qe = !!Ft, Qe && "get" in Ft && !("originalValue" in Ft.get) ? ne = Ft.get : ne = ne[be];
              } else
                Qe = k(ne, be), ne = ne[be];
              Qe && !gt && (P[et] = ne);
            }
          }
          return ne;
        };
      }), Hl = X((e, t) => {
        "use strict";
        var r = ho(), n = xo(), o = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), s = n("%Reflect.apply%", true) || r.call(i, o), a = n("%Object.getOwnPropertyDescriptor%", true), u = n("%Object.defineProperty%", true), l = n("%Math.max%");
        if (u)
          try {
            u({}, "a", { value: 1 });
          } catch (y) {
            u = null;
          }
        t.exports = function(y) {
          var h = s(r, i, arguments);
          if (a && u) {
            var T = a(h, "length");
            T.configurable && u(h, "length", { value: 1 + l(0, y.length - (arguments.length - 1)) });
          }
          return h;
        };
        var p = function() {
          return s(r, o, arguments);
        };
        u ? u(t.exports, "apply", { value: p }) : t.exports.apply = p;
      }), bo = X((e, t) => {
        "use strict";
        var r = xo(), n = Hl(), o = n(r("String.prototype.indexOf"));
        t.exports = function(i, s) {
          var a = r(i, !!s);
          return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
        };
      }), zl = X((e, t) => {
        "use strict";
        var r = en()(), n = bo(), o = n("Object.prototype.toString"), i = function(u) {
          return r && u && typeof u == "object" && Symbol.toStringTag in u ? false : o(u) === "[object Arguments]";
        }, s = function(u) {
          return i(u) ? true : u !== null && typeof u == "object" && typeof u.length == "number" && u.length >= 0 && o(u) !== "[object Array]" && o(u.callee) === "[object Function]";
        }, a = function() {
          return i(arguments);
        }();
        i.isLegacyArguments = s, t.exports = a ? i : s;
      }), Zl = X((e, t) => {
        "use strict";
        var r = Object.prototype.toString, n = b.prototype.toString, o = /^\s*(?:function)?\*/, i = en()(), s = Object.getPrototypeOf, a = function() {
          if (!i)
            return false;
          try {
            return b("return function*() {}")();
          } catch (l) {
          }
        }, u;
        t.exports = function(l) {
          if (typeof l != "function")
            return false;
          if (o.test(n.call(l)))
            return true;
          if (!i) {
            var p = r.call(l);
            return p === "[object GeneratorFunction]";
          }
          if (!s)
            return false;
          if (typeof u > "u") {
            var y = a();
            u = y ? s(y) : false;
          }
          return s(l) === u;
        };
      }), Yl = X((e, t) => {
        "use strict";
        var r = b.prototype.toString, n = typeof Reflect == "object" && Reflect !== null && Reflect.apply, o, i;
        if (typeof n == "function" && typeof Object.defineProperty == "function")
          try {
            o = Object.defineProperty({}, "length", { get: function() {
              throw i;
            } }), i = {}, n(function() {
              throw 42;
            }, null, o);
          } catch (k) {
            k !== i && (n = null);
          }
        else
          n = null;
        var s = /^\s*class\b/, a = function(k) {
          try {
            var $ = r.call(k);
            return s.test($);
          } catch (q) {
            return false;
          }
        }, u = function(k) {
          try {
            return a(k) ? false : (r.call(k), true);
          } catch ($) {
            return false;
          }
        }, l = Object.prototype.toString, p = "[object Object]", y = "[object Function]", h = "[object GeneratorFunction]", T = "[object HTMLAllCollection]", C = "[object HTML document.all class]", P = "[object HTMLCollection]", R = typeof Symbol == "function" && !!Symbol.toStringTag, I = !(0 in [,]), D = function() {
          return false;
        };
        typeof document == "object" && (F = document.all, l.call(F) === l.call(document.all) && (D = function(k) {
          if ((I || !k) && (typeof k > "u" || typeof k == "object"))
            try {
              var $ = l.call(k);
              return ($ === T || $ === C || $ === P || $ === p) && k("") == null;
            } catch (q) {
            }
          return false;
        }));
        var F;
        t.exports = n ? function(k) {
          if (D(k))
            return true;
          if (!k || typeof k != "function" && typeof k != "object")
            return false;
          try {
            n(k, null, o);
          } catch ($) {
            if ($ !== i)
              return false;
          }
          return !a(k) && u(k);
        } : function(k) {
          if (D(k))
            return true;
          if (!k || typeof k != "function" && typeof k != "object")
            return false;
          if (R)
            return u(k);
          if (a(k))
            return false;
          var $ = l.call(k);
          return $ !== y && $ !== h && !/^\[object HTML/.test($) ? false : u(k);
        };
      }), ss = X((e, t) => {
        "use strict";
        var r = Yl(), n = Object.prototype.toString, o = Object.prototype.hasOwnProperty, i = function(l, p, y) {
          for (var h = 0, T = l.length; h < T; h++)
            o.call(l, h) && (y == null ? p(l[h], h, l) : p.call(y, l[h], h, l));
        }, s = function(l, p, y) {
          for (var h = 0, T = l.length; h < T; h++)
            y == null ? p(l.charAt(h), h, l) : p.call(y, l.charAt(h), h, l);
        }, a = function(l, p, y) {
          for (var h in l)
            o.call(l, h) && (y == null ? p(l[h], h, l) : p.call(y, l[h], h, l));
        }, u = function(l, p, y) {
          if (!r(p))
            throw new TypeError("iterator must be a function");
          var h;
          arguments.length >= 3 && (h = y), n.call(l) === "[object Array]" ? i(l, p, h) : typeof l == "string" ? s(l, p, h) : a(l, p, h);
        };
        t.exports = u;
      }), as = X((e, t) => {
        "use strict";
        var r = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], n = typeof globalThis > "u" ? global : globalThis;
        t.exports = function() {
          for (var o = [], i = 0; i < r.length; i++)
            typeof n[r[i]] == "function" && (o[o.length] = r[i]);
          return o;
        };
      }), us = X((e, t) => {
        "use strict";
        var r = xo(), n = r("%Object.getOwnPropertyDescriptor%", true);
        if (n)
          try {
            n([], "length");
          } catch (o) {
            n = null;
          }
        t.exports = n;
      }), ls = X((e, t) => {
        "use strict";
        var r = ss(), n = as(), o = bo(), i = o("Object.prototype.toString"), s = en()(), a = us(), u = typeof globalThis > "u" ? global : globalThis, l = n(), p = o("Array.prototype.indexOf", true) || function(P, R) {
          for (var I = 0; I < P.length; I += 1)
            if (P[I] === R)
              return I;
          return -1;
        }, y = o("String.prototype.slice"), h = {}, T = Object.getPrototypeOf;
        s && a && T && r(l, function(P) {
          var R = new u[P]();
          if (Symbol.toStringTag in R) {
            var I = T(R), D = a(I, Symbol.toStringTag);
            if (!D) {
              var F = T(I);
              D = a(F, Symbol.toStringTag);
            }
            h[P] = D.get;
          }
        });
        var C = function(P) {
          var R = false;
          return r(h, function(I, D) {
            if (!R)
              try {
                R = I.call(P) === D;
              } catch (F) {
              }
          }), R;
        };
        t.exports = function(P) {
          if (!P || typeof P != "object")
            return false;
          if (!s || !(Symbol.toStringTag in P)) {
            var R = y(i(P), 8, -1);
            return p(l, R) > -1;
          }
          return a ? C(P) : false;
        };
      }), Xl = X((e, t) => {
        "use strict";
        var r = ss(), n = as(), o = bo(), i = us(), s = o("Object.prototype.toString"), a = en()(), u = typeof globalThis > "u" ? global : globalThis, l = n(), p = o("String.prototype.slice"), y = {}, h = Object.getPrototypeOf;
        a && i && h && r(l, function(P) {
          if (typeof u[P] == "function") {
            var R = new u[P]();
            if (Symbol.toStringTag in R) {
              var I = h(R), D = i(I, Symbol.toStringTag);
              if (!D) {
                var F = h(I);
                D = i(F, Symbol.toStringTag);
              }
              y[P] = D.get;
            }
          }
        });
        var T = function(P) {
          var R = false;
          return r(y, function(I, D) {
            if (!R)
              try {
                var F = I.call(P);
                F === D && (R = F);
              } catch (k) {
              }
          }), R;
        }, C = ls();
        t.exports = function(P) {
          return C(P) ? !a || !(Symbol.toStringTag in P) ? p(s(P), 8, -1) : T(P) : false;
        };
      }), ep = X((e) => {
        "use strict";
        var t = zl(), r = Zl(), n = Xl(), o = ls();
        function i(O) {
          return O.call.bind(O);
        }
        var s = typeof BigInt < "u", a = typeof Symbol < "u", u = i(Object.prototype.toString), l = i(Number.prototype.valueOf), p = i(String.prototype.valueOf), y = i(Boolean.prototype.valueOf);
        s && (h = i(BigInt.prototype.valueOf));
        var h;
        a && (T = i(Symbol.prototype.valueOf));
        var T;
        function C(O, cl) {
          if (typeof O != "object")
            return false;
          try {
            return cl(O), true;
          } catch (em) {
            return false;
          }
        }
        e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = o;
        function P(O) {
          return typeof Promise < "u" && O instanceof Promise || O !== null && typeof O == "object" && typeof O.then == "function" && typeof O.catch == "function";
        }
        e.isPromise = P;
        function R(O) {
          return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(O) : o(O) || yt(O);
        }
        e.isArrayBufferView = R;
        function I(O) {
          return n(O) === "Uint8Array";
        }
        e.isUint8Array = I;
        function D(O) {
          return n(O) === "Uint8ClampedArray";
        }
        e.isUint8ClampedArray = D;
        function F(O) {
          return n(O) === "Uint16Array";
        }
        e.isUint16Array = F;
        function k(O) {
          return n(O) === "Uint32Array";
        }
        e.isUint32Array = k;
        function $(O) {
          return n(O) === "Int8Array";
        }
        e.isInt8Array = $;
        function q(O) {
          return n(O) === "Int16Array";
        }
        e.isInt16Array = q;
        function xe(O) {
          return n(O) === "Int32Array";
        }
        e.isInt32Array = xe;
        function W(O) {
          return n(O) === "Float32Array";
        }
        e.isFloat32Array = W;
        function ee(O) {
          return n(O) === "Float64Array";
        }
        e.isFloat64Array = ee;
        function Me(O) {
          return n(O) === "BigInt64Array";
        }
        e.isBigInt64Array = Me;
        function te(O) {
          return n(O) === "BigUint64Array";
        }
        e.isBigUint64Array = te;
        function Re(O) {
          return u(O) === "[object Map]";
        }
        Re.working = typeof Map < "u" && Re(/* @__PURE__ */ new Map());
        function Xe(O) {
          return typeof Map > "u" ? false : Re.working ? Re(O) : O instanceof Map;
        }
        e.isMap = Xe;
        function J(O) {
          return u(O) === "[object Set]";
        }
        J.working = typeof Set < "u" && J(/* @__PURE__ */ new Set());
        function G(O) {
          return typeof Set > "u" ? false : J.working ? J(O) : O instanceof Set;
        }
        e.isSet = G;
        function _(O) {
          return u(O) === "[object WeakMap]";
        }
        _.working = typeof WeakMap < "u" && _(/* @__PURE__ */ new WeakMap());
        function pe(O) {
          return typeof WeakMap > "u" ? false : _.working ? _(O) : O instanceof WeakMap;
        }
        e.isWeakMap = pe;
        function ce(O) {
          return u(O) === "[object WeakSet]";
        }
        ce.working = typeof WeakSet < "u" && ce(/* @__PURE__ */ new WeakSet());
        function et(O) {
          return ce(O);
        }
        e.isWeakSet = et;
        function ne(O) {
          return u(O) === "[object ArrayBuffer]";
        }
        ne.working = typeof ArrayBuffer < "u" && ne(new ArrayBuffer());
        function gt(O) {
          return typeof ArrayBuffer > "u" ? false : ne.working ? ne(O) : O instanceof ArrayBuffer;
        }
        e.isArrayBuffer = gt;
        function tt(O) {
          return u(O) === "[object DataView]";
        }
        tt.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && tt(new DataView(new ArrayBuffer(1), 0, 1));
        function yt(O) {
          return typeof DataView > "u" ? false : tt.working ? tt(O) : O instanceof DataView;
        }
        e.isDataView = yt;
        var Qe = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
        function be(O) {
          return u(O) === "[object SharedArrayBuffer]";
        }
        function ht(O) {
          return typeof Qe > "u" ? false : (typeof be.working > "u" && (be.working = be(new Qe())), be.working ? be(O) : O instanceof Qe);
        }
        e.isSharedArrayBuffer = ht;
        function Ot(O) {
          return u(O) === "[object AsyncFunction]";
        }
        e.isAsyncFunction = Ot;
        function Ft(O) {
          return u(O) === "[object Map Iterator]";
        }
        e.isMapIterator = Ft;
        function sl(O) {
          return u(O) === "[object Set Iterator]";
        }
        e.isSetIterator = sl;
        function al(O) {
          return u(O) === "[object Generator]";
        }
        e.isGeneratorObject = al;
        function ul(O) {
          return u(O) === "[object WebAssembly.Module]";
        }
        e.isWebAssemblyCompiledModule = ul;
        function Ti(O) {
          return C(O, l);
        }
        e.isNumberObject = Ti;
        function Ci(O) {
          return C(O, p);
        }
        e.isStringObject = Ci;
        function Mi(O) {
          return C(O, y);
        }
        e.isBooleanObject = Mi;
        function Ri(O) {
          return s && C(O, h);
        }
        e.isBigIntObject = Ri;
        function Si(O) {
          return a && C(O, T);
        }
        e.isSymbolObject = Si;
        function ll(O) {
          return Ti(O) || Ci(O) || Mi(O) || Ri(O) || Si(O);
        }
        e.isBoxedPrimitive = ll;
        function pl(O) {
          return typeof Uint8Array < "u" && (gt(O) || ht(O));
        }
        e.isAnyArrayBuffer = pl, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(O) {
          Object.defineProperty(e, O, { enumerable: false, value: function() {
            throw new Error(O + " is not supported in userland");
          } });
        });
      }), tp = X((e, t) => {
        t.exports = function(r) {
          return r instanceof w.Buffer;
        };
      }), rp = X((e, t) => {
        typeof Object.create == "function" ? t.exports = function(r, n) {
          n && (r.super_ = n, r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }));
        } : t.exports = function(r, n) {
          if (n) {
            r.super_ = n;
            var o = function() {
            };
            o.prototype = n.prototype, r.prototype = new o(), r.prototype.constructor = r;
          }
        };
      }), ps = Object.getOwnPropertyDescriptors || function(e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
          r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
        return r;
      }, np = /%[sdj%]/g;
      K.format = function(e) {
        if (!rn(e)) {
          for (var t = [], r = 0; r < arguments.length; r++)
            t.push(ot(arguments[r]));
          return t.join(" ");
        }
        for (var r = 1, n = arguments, o = n.length, i = String(e).replace(np, function(u) {
          if (u === "%%")
            return "%";
          if (r >= o)
            return u;
          switch (u) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return u;
          }
        }), s = n[r]; r < o; s = n[++r])
          tn(s) || !Lt(s) ? i += " " + s : i += " " + ot(s);
        return i;
      };
      K.deprecate = function(e, t) {
        if (typeof x < "u" && x.noDeprecation === true)
          return e;
        if (typeof x > "u")
          return function() {
            return K.deprecate(e, t).apply(this, arguments);
          };
        var r = false;
        function n() {
          if (!r) {
            if (x.throwDeprecation)
              throw new Error(t);
            x.traceDeprecation ? console.trace(t) : console.error(t), r = true;
          }
          return e.apply(this, arguments);
        }
        return n;
      };
      var Hr = {}, cs = /^$/;
      x.env.NODE_DEBUG && (zr = x.env.NODE_DEBUG, zr = zr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), cs = new RegExp("^" + zr + "$", "i"));
      var zr;
      K.debuglog = function(e) {
        if (e = e.toUpperCase(), !Hr[e])
          if (cs.test(e)) {
            var t = x.pid;
            Hr[e] = function() {
              var r = K.format.apply(K, arguments);
              console.error("%s %d: %s", e, t, r);
            };
          } else
            Hr[e] = function() {
            };
        return Hr[e];
      };
      function ot(e, t) {
        var r = { seen: [], stylize: ip };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), wo(t) ? r.showHidden = t : t && K._extend(r, t), wt(r.showHidden) && (r.showHidden = false), wt(r.depth) && (r.depth = 2), wt(r.colors) && (r.colors = false), wt(r.customInspect) && (r.customInspect = true), r.colors && (r.stylize = op), Yr(r, e, r.depth);
      }
      K.inspect = ot;
      ot.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
      ot.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
      function op(e, t) {
        var r = ot.styles[t];
        return r ? "\x1B[" + ot.colors[r][0] + "m" + e + "\x1B[" + ot.colors[r][1] + "m" : e;
      }
      function ip(e, t) {
        return e;
      }
      function sp(e) {
        var t = {};
        return e.forEach(function(r, n) {
          t[r] = true;
        }), t;
      }
      function Yr(e, t, r) {
        if (e.customInspect && t && Zr(t.inspect) && t.inspect !== K.inspect && !(t.constructor && t.constructor.prototype === t)) {
          var n = t.inspect(r, e);
          return rn(n) || (n = Yr(e, n, r)), n;
        }
        var o = ap(e, t);
        if (o)
          return o;
        var i = Object.keys(t), s = sp(i);
        if (e.showHidden && (i = Object.getOwnPropertyNames(t)), pr(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
          return mo(t);
        if (i.length === 0) {
          if (Zr(t)) {
            var a = t.name ? ": " + t.name : "";
            return e.stylize("[Function" + a + "]", "special");
          }
          if (lr(t))
            return e.stylize(RegExp.prototype.toString.call(t), "regexp");
          if (Xr(t))
            return e.stylize(Date.prototype.toString.call(t), "date");
          if (pr(t))
            return mo(t);
        }
        var u = "", l = false, p = ["{", "}"];
        if (fs(t) && (l = true, p = ["[", "]"]), Zr(t)) {
          var y = t.name ? ": " + t.name : "";
          u = " [Function" + y + "]";
        }
        if (lr(t) && (u = " " + RegExp.prototype.toString.call(t)), Xr(t) && (u = " " + Date.prototype.toUTCString.call(t)), pr(t) && (u = " " + mo(t)), i.length === 0 && (!l || t.length == 0))
          return p[0] + u + p[1];
        if (r < 0)
          return lr(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
        e.seen.push(t);
        var h;
        return l ? h = up(e, t, r, s, i) : h = i.map(function(T) {
          return yo(e, t, r, s, T, l);
        }), e.seen.pop(), lp(h, u, p);
      }
      function ap(e, t) {
        if (wt(t))
          return e.stylize("undefined", "undefined");
        if (rn(t)) {
          var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return e.stylize(r, "string");
        }
        if (ds(t))
          return e.stylize("" + t, "number");
        if (wo(t))
          return e.stylize("" + t, "boolean");
        if (tn(t))
          return e.stylize("null", "null");
      }
      function mo(e) {
        return "[" + Error.prototype.toString.call(e) + "]";
      }
      function up(e, t, r, n, o) {
        for (var i = [], s = 0, a = t.length; s < a; ++s)
          ms(t, String(s)) ? i.push(yo(e, t, r, n, String(s), true)) : i.push("");
        return o.forEach(function(u) {
          u.match(/^\d+$/) || i.push(yo(e, t, r, n, u, true));
        }), i;
      }
      function yo(e, t, r, n, o, i) {
        var s, a, u;
        if (u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }, u.get ? u.set ? a = e.stylize("[Getter/Setter]", "special") : a = e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), ms(n, o) || (s = "[" + o + "]"), a || (e.seen.indexOf(u.value) < 0 ? (tn(r) ? a = Yr(e, u.value, null) : a = Yr(e, u.value, r - 1), a.indexOf(`
`) > -1 && (i ? a = a.split(`
`).map(function(l) {
          return "  " + l;
        }).join(`
`).slice(2) : a = `
` + a.split(`
`).map(function(l) {
          return "   " + l;
        }).join(`
`))) : a = e.stylize("[Circular]", "special")), wt(s)) {
          if (i && o.match(/^\d+$/))
            return a;
          s = JSON.stringify("" + o), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.slice(1, -1), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"));
        }
        return s + ": " + a;
      }
      function lp(e, t, r) {
        var n = 0, o = e.reduce(function(i, s) {
          return n++, s.indexOf(`
`) >= 0 && n++, i + s.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        return o > 60 ? r[0] + (t === "" ? "" : t + `
 `) + " " + e.join(`,
  `) + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1];
      }
      K.types = ep();
      function fs(e) {
        return Array.isArray(e);
      }
      K.isArray = fs;
      function wo(e) {
        return typeof e == "boolean";
      }
      K.isBoolean = wo;
      function tn(e) {
        return e === null;
      }
      K.isNull = tn;
      function pp(e) {
        return e == null;
      }
      K.isNullOrUndefined = pp;
      function ds(e) {
        return typeof e == "number";
      }
      K.isNumber = ds;
      function rn(e) {
        return typeof e == "string";
      }
      K.isString = rn;
      function cp(e) {
        return typeof e == "symbol";
      }
      K.isSymbol = cp;
      function wt(e) {
        return e === void 0;
      }
      K.isUndefined = wt;
      function lr(e) {
        return Lt(e) && Eo(e) === "[object RegExp]";
      }
      K.isRegExp = lr;
      K.types.isRegExp = lr;
      function Lt(e) {
        return typeof e == "object" && e !== null;
      }
      K.isObject = Lt;
      function Xr(e) {
        return Lt(e) && Eo(e) === "[object Date]";
      }
      K.isDate = Xr;
      K.types.isDate = Xr;
      function pr(e) {
        return Lt(e) && (Eo(e) === "[object Error]" || e instanceof Error);
      }
      K.isError = pr;
      K.types.isNativeError = pr;
      function Zr(e) {
        return typeof e == "function";
      }
      K.isFunction = Zr;
      function fp(e) {
        return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || typeof e > "u";
      }
      K.isPrimitive = fp;
      K.isBuffer = tp();
      function Eo(e) {
        return Object.prototype.toString.call(e);
      }
      function go(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10);
      }
      var dp = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      function mp() {
        var e = /* @__PURE__ */ new Date(), t = [go(e.getHours()), go(e.getMinutes()), go(e.getSeconds())].join(":");
        return [e.getDate(), dp[e.getMonth()], t].join(" ");
      }
      K.log = function() {
        console.log("%s - %s", mp(), K.format.apply(K, arguments));
      };
      K.inherits = rp();
      K._extend = function(e, t) {
        if (!t || !Lt(t))
          return e;
        for (var r = Object.keys(t), n = r.length; n--; )
          e[r[n]] = t[r[n]];
        return e;
      };
      function ms(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      var bt = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
      K.promisify = function(e) {
        if (typeof e != "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (bt && e[bt]) {
          var t = e[bt];
          if (typeof t != "function")
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(t, bt, { value: t, enumerable: false, writable: false, configurable: true }), t;
        }
        function t() {
          for (var r, n, o = new Promise(function(a, u) {
            r = a, n = u;
          }), i = [], s = 0; s < arguments.length; s++)
            i.push(arguments[s]);
          i.push(function(a, u) {
            a ? n(a) : r(u);
          });
          try {
            e.apply(this, i);
          } catch (a) {
            n(a);
          }
          return o;
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), bt && Object.defineProperty(t, bt, { value: t, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t, ps(e));
      };
      K.promisify.custom = bt;
      function gp(e, t) {
        if (!e) {
          var r = new Error("Promise was rejected with a falsy value");
          r.reason = e, e = r;
        }
        return t(e);
      }
      function yp(e) {
        if (typeof e != "function")
          throw new TypeError('The "original" argument must be of type Function');
        function t() {
          for (var r = [], n = 0; n < arguments.length; n++)
            r.push(arguments[n]);
          var o = r.pop();
          if (typeof o != "function")
            throw new TypeError("The last argument must be of type Function");
          var i = this, s = function() {
            return o.apply(i, arguments);
          };
          e.apply(this, r).then(function(a) {
            x.nextTick(s.bind(null, null, a));
          }, function(a) {
            x.nextTick(gp.bind(null, a, s));
          });
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, ps(e)), t;
      }
      K.callbackify = yp;
    });
    var ys = re(($g, gs) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var Bt = 1e3, jt = Bt * 60, Ut = jt * 60, Et = Ut * 24, hp = Et * 7, xp = Et * 365.25;
      gs.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return bp(e);
        if (r === "number" && isFinite(e))
          return t.long ? Ep(e) : wp(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function bp(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * xp;
              case "weeks":
              case "week":
              case "w":
                return r * hp;
              case "days":
              case "day":
              case "d":
                return r * Et;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * Ut;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * jt;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * Bt;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function wp(e) {
        var t = Math.abs(e);
        return t >= Et ? Math.round(e / Et) + "d" : t >= Ut ? Math.round(e / Ut) + "h" : t >= jt ? Math.round(e / jt) + "m" : t >= Bt ? Math.round(e / Bt) + "s" : e + "ms";
      }
      function Ep(e) {
        var t = Math.abs(e);
        return t >= Et ? nn(e, t, Et, "day") : t >= Ut ? nn(e, t, Ut, "hour") : t >= jt ? nn(e, t, jt, "minute") : t >= Bt ? nn(e, t, Bt, "second") : e + " ms";
      }
      function nn(e, t, r, n) {
        var o = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (o ? "s" : "");
      }
    });
    var vo = re((Qg, hs) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      function Pp(e) {
        r.debug = r, r.default = r, r.coerce = u, r.disable = i, r.enable = o, r.enabled = s, r.humanize = ys(), r.destroy = l, Object.keys(e).forEach((p) => {
          r[p] = e[p];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(p) {
          let y = 0;
          for (let h = 0; h < p.length; h++)
            y = (y << 5) - y + p.charCodeAt(h), y |= 0;
          return r.colors[Math.abs(y) % r.colors.length];
        }
        r.selectColor = t;
        function r(p) {
          let y, h = null, T, C;
          function P(...R) {
            if (!P.enabled)
              return;
            let I = P, D = Number(/* @__PURE__ */ new Date()), F = D - (y || D);
            I.diff = F, I.prev = y, I.curr = D, y = D, R[0] = r.coerce(R[0]), typeof R[0] != "string" && R.unshift("%O");
            let k = 0;
            R[0] = R[0].replace(/%([a-zA-Z%])/g, (q, xe) => {
              if (q === "%%")
                return "%";
              k++;
              let W = r.formatters[xe];
              if (typeof W == "function") {
                let ee = R[k];
                q = W.call(I, ee), R.splice(k, 1), k--;
              }
              return q;
            }), r.formatArgs.call(I, R), (I.log || r.log).apply(I, R);
          }
          return P.namespace = p, P.useColors = r.useColors(), P.color = r.selectColor(p), P.extend = n, P.destroy = r.destroy, Object.defineProperty(P, "enabled", { enumerable: true, configurable: false, get: () => h !== null ? h : (T !== r.namespaces && (T = r.namespaces, C = r.enabled(p)), C), set: (R) => {
            h = R;
          } }), typeof r.init == "function" && r.init(P), P;
        }
        function n(p, y) {
          let h = r(this.namespace + (typeof y == "undefined" ? ":" : y) + p);
          return h.log = this.log, h;
        }
        function o(p) {
          r.save(p), r.namespaces = p, r.names = [], r.skips = [];
          let y, h = (typeof p == "string" ? p : "").split(/[\s,]+/), T = h.length;
          for (y = 0; y < T; y++)
            h[y] && (p = h[y].replace(/\*/g, ".*?"), p[0] === "-" ? r.skips.push(new RegExp("^" + p.slice(1) + "$")) : r.names.push(new RegExp("^" + p + "$")));
        }
        function i() {
          let p = [...r.names.map(a), ...r.skips.map(a).map((y) => "-" + y)].join(",");
          return r.enable(""), p;
        }
        function s(p) {
          if (p[p.length - 1] === "*")
            return true;
          let y, h;
          for (y = 0, h = r.skips.length; y < h; y++)
            if (r.skips[y].test(p))
              return false;
          for (y = 0, h = r.names.length; y < h; y++)
            if (r.names[y].test(p))
              return true;
          return false;
        }
        function a(p) {
          return p.toString().substring(2, p.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function u(p) {
          return p instanceof Error ? p.stack || p.message : p;
        }
        function l() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      hs.exports = Pp;
    });
    var xs = re((Se, on) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      Se.formatArgs = Ap;
      Se.save = Tp;
      Se.load = Cp;
      Se.useColors = vp;
      Se.storage = Mp();
      Se.destroy = (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      Se.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function vp() {
        return typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator != "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && "Cloudflare-Workers" && "Cloudflare-Workers".toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function Ap(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + on.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (o) => {
          o !== "%%" && (r++, o === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      Se.log = console.debug || console.log || (() => {
      });
      function Tp(e) {
        try {
          e ? Se.storage.setItem("debug", e) : Se.storage.removeItem("debug");
        } catch (t) {
        }
      }
      function Cp() {
        let e;
        try {
          e = Se.storage.getItem("debug");
        } catch (t) {
        }
        return !e && typeof x != "undefined" && "env" in x && (e = x.env.DEBUG), e;
      }
      function Mp() {
        try {
          return localStorage;
        } catch (e) {
        }
      }
      on.exports = vo()(Se);
      var { formatters: Rp } = on.exports;
      Rp.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var Ao = re((sn) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      sn.isatty = function() {
        return false;
      };
      function Sp() {
        throw new Error("tty.ReadStream is not implemented");
      }
      sn.ReadStream = Sp;
      function Op() {
        throw new Error("tty.WriteStream is not implemented");
      }
      sn.WriteStream = Op;
    });
    var bs = re(() => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
    });
    var Es = re((hy, ws) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      ws.exports = (e, t = x.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), o = t.indexOf("--");
        return n !== -1 && (o === -1 || n < o);
      };
    });
    var As = re((vy, vs) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var Fp = bs(), Ps = Ao(), ke = Es(), { env: se } = x, it;
      ke("no-color") || ke("no-colors") || ke("color=false") || ke("color=never") ? it = 0 : (ke("color") || ke("colors") || ke("color=true") || ke("color=always")) && (it = 1);
      "FORCE_COLOR" in se && (se.FORCE_COLOR === "true" ? it = 1 : se.FORCE_COLOR === "false" ? it = 0 : it = se.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(se.FORCE_COLOR, 10), 3));
      function To(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function Co(e, t) {
        if (it === 0)
          return 0;
        if (ke("color=16m") || ke("color=full") || ke("color=truecolor"))
          return 3;
        if (ke("color=256"))
          return 2;
        if (e && !t && it === void 0)
          return 0;
        let r = it || 0;
        if (se.TERM === "dumb")
          return r;
        if (x.platform === "win32") {
          let n = Fp.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in se)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in se) || se.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in se)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(se.TEAMCITY_VERSION) ? 1 : 0;
        if (se.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in se) {
          let n = parseInt((se.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (se.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(se.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(se.TERM) || "COLORTERM" in se ? 1 : r;
      }
      function kp(e) {
        let t = Co(e, e && e.isTTY);
        return To(t);
      }
      vs.exports = { supportsColor: kp, stdout: To(Co(true, Ps.isatty(1))), stderr: To(Co(true, Ps.isatty(2))) };
    });
    var Cs = re((fe, un) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var Ip = Ao(), an = Po();
      fe.init = Up;
      fe.log = Lp;
      fe.formatArgs = _p;
      fe.save = Bp;
      fe.load = jp;
      fe.useColors = Dp;
      fe.destroy = an.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      fe.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = As();
        e && (e.stderr || e).level >= 2 && (fe.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch (e) {
      }
      fe.inspectOpts = Object.keys(x.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (o, i) => i.toUpperCase()), n = x.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function Dp() {
        return "colors" in fe.inspectOpts ? !!fe.inspectOpts.colors : Ip.isatty(x.stderr.fd);
      }
      function _p(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, o = "\x1B[3" + (n < 8 ? n : "8;5;" + n), i = `  ${o};1m${t} \x1B[0m`;
          e[0] = i + e[0].split(`
`).join(`
` + i), e.push(o + "m+" + un.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = Np() + t + " " + e[0];
      }
      function Np() {
        return fe.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function Lp(...e) {
        return x.stderr.write(an.format(...e) + `
`);
      }
      function Bp(e) {
        e ? x.env.DEBUG = e : delete x.env.DEBUG;
      }
      function jp() {
        return x.env.DEBUG;
      }
      function Up(e) {
        e.inspectOpts = {};
        let t = Object.keys(fe.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = fe.inspectOpts[t[r]];
      }
      un.exports = vo()(fe);
      var { formatters: Ts } = un.exports;
      Ts.o = function(e) {
        return this.inspectOpts.colors = this.useColors, an.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      Ts.O = function(e) {
        return this.inspectOpts.colors = this.useColors, an.inspect(e, this.inspectOpts);
      };
    });
    var Ms = re((Dy, Mo) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      typeof x == "undefined" || x.type === "renderer" || x.browser === true || x.__nwjs ? Mo.exports = xs() : Mo.exports = Cs();
    });
    function Kp() {
      return false;
    }
    var Gp;
    var Jp;
    var gn;
    var Oo = kt(() => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      Gp = {}, Jp = { existsSync: Kp, promises: Gp }, gn = Jp;
    });
    var Fo = re((Nh, Ls) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      function je(e) {
        if (typeof e != "string")
          throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
      }
      function Ns(e, t) {
        for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
          if (a < e.length)
            s = e.charCodeAt(a);
          else {
            if (s === 47)
              break;
            s = 47;
          }
          if (s === 47) {
            if (!(o === a - 1 || i === 1))
              if (o !== a - 1 && i === 2) {
                if (r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
                  if (r.length > 2) {
                    var u = r.lastIndexOf("/");
                    if (u !== r.length - 1) {
                      u === -1 ? (r = "", n = 0) : (r = r.slice(0, u), n = r.length - 1 - r.lastIndexOf("/")), o = a, i = 0;
                      continue;
                    }
                  } else if (r.length === 2 || r.length === 1) {
                    r = "", n = 0, o = a, i = 0;
                    continue;
                  }
                }
                t && (r.length > 0 ? r += "/.." : r = "..", n = 2);
              } else
                r.length > 0 ? r += "/" + e.slice(o + 1, a) : r = e.slice(o + 1, a), n = a - o - 1;
            o = a, i = 0;
          } else
            s === 46 && i !== -1 ? ++i : i = -1;
        }
        return r;
      }
      function Qp(e, t) {
        var r = t.dir || t.root, n = t.base || (t.name || "") + (t.ext || "");
        return r ? r === t.root ? r + n : r + e + n : n;
      }
      var Vt = { resolve: function() {
        for (var e = "", t = false, r, n = arguments.length - 1; n >= -1 && !t; n--) {
          var o;
          n >= 0 ? o = arguments[n] : (r === void 0 && (r = x.cwd()), o = r), je(o), o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
        }
        return e = Ns(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
      }, normalize: function(e) {
        if (je(e), e.length === 0)
          return ".";
        var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
        return e = Ns(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && r && (e += "/"), t ? "/" + e : e;
      }, isAbsolute: function(e) {
        return je(e), e.length > 0 && e.charCodeAt(0) === 47;
      }, join: function() {
        if (arguments.length === 0)
          return ".";
        for (var e, t = 0; t < arguments.length; ++t) {
          var r = arguments[t];
          je(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
        }
        return e === void 0 ? "." : Vt.normalize(e);
      }, relative: function(e, t) {
        if (je(e), je(t), e === t || (e = Vt.resolve(e), t = Vt.resolve(t), e === t))
          return "";
        for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r)
          ;
        for (var n = e.length, o = n - r, i = 1; i < t.length && t.charCodeAt(i) === 47; ++i)
          ;
        for (var s = t.length, a = s - i, u = o < a ? o : a, l = -1, p = 0; p <= u; ++p) {
          if (p === u) {
            if (a > u) {
              if (t.charCodeAt(i + p) === 47)
                return t.slice(i + p + 1);
              if (p === 0)
                return t.slice(i + p);
            } else
              o > u && (e.charCodeAt(r + p) === 47 ? l = p : p === 0 && (l = 0));
            break;
          }
          var y = e.charCodeAt(r + p), h = t.charCodeAt(i + p);
          if (y !== h)
            break;
          y === 47 && (l = p);
        }
        var T = "";
        for (p = r + l + 1; p <= n; ++p)
          (p === n || e.charCodeAt(p) === 47) && (T.length === 0 ? T += ".." : T += "/..");
        return T.length > 0 ? T + t.slice(i + l) : (i += l, t.charCodeAt(i) === 47 && ++i, t.slice(i));
      }, _makeLong: function(e) {
        return e;
      }, dirname: function(e) {
        if (je(e), e.length === 0)
          return ".";
        for (var t = e.charCodeAt(0), r = t === 47, n = -1, o = true, i = e.length - 1; i >= 1; --i)
          if (t = e.charCodeAt(i), t === 47) {
            if (!o) {
              n = i;
              break;
            }
          } else
            o = false;
        return n === -1 ? r ? "/" : "." : r && n === 1 ? "//" : e.slice(0, n);
      }, basename: function(e, t) {
        if (t !== void 0 && typeof t != "string")
          throw new TypeError('"ext" argument must be a string');
        je(e);
        var r = 0, n = -1, o = true, i;
        if (t !== void 0 && t.length > 0 && t.length <= e.length) {
          if (t.length === e.length && t === e)
            return "";
          var s = t.length - 1, a = -1;
          for (i = e.length - 1; i >= 0; --i) {
            var u = e.charCodeAt(i);
            if (u === 47) {
              if (!o) {
                r = i + 1;
                break;
              }
            } else
              a === -1 && (o = false, a = i + 1), s >= 0 && (u === t.charCodeAt(s) ? --s === -1 && (n = i) : (s = -1, n = a));
          }
          return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
        } else {
          for (i = e.length - 1; i >= 0; --i)
            if (e.charCodeAt(i) === 47) {
              if (!o) {
                r = i + 1;
                break;
              }
            } else
              n === -1 && (o = false, n = i + 1);
          return n === -1 ? "" : e.slice(r, n);
        }
      }, extname: function(e) {
        je(e);
        for (var t = -1, r = 0, n = -1, o = true, i = 0, s = e.length - 1; s >= 0; --s) {
          var a = e.charCodeAt(s);
          if (a === 47) {
            if (!o) {
              r = s + 1;
              break;
            }
            continue;
          }
          n === -1 && (o = false, n = s + 1), a === 46 ? t === -1 ? t = s : i !== 1 && (i = 1) : t !== -1 && (i = -1);
        }
        return t === -1 || n === -1 || i === 0 || i === 1 && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
      }, format: function(e) {
        if (e === null || typeof e != "object")
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
        return Qp("/", e);
      }, parse: function(e) {
        je(e);
        var t = { root: "", dir: "", base: "", ext: "", name: "" };
        if (e.length === 0)
          return t;
        var r = e.charCodeAt(0), n = r === 47, o;
        n ? (t.root = "/", o = 1) : o = 0;
        for (var i = -1, s = 0, a = -1, u = true, l = e.length - 1, p = 0; l >= o; --l) {
          if (r = e.charCodeAt(l), r === 47) {
            if (!u) {
              s = l + 1;
              break;
            }
            continue;
          }
          a === -1 && (u = false, a = l + 1), r === 46 ? i === -1 ? i = l : p !== 1 && (p = 1) : i !== -1 && (p = -1);
        }
        return i === -1 || a === -1 || p === 0 || p === 1 && i === a - 1 && i === s + 1 ? a !== -1 && (s === 0 && n ? t.base = t.name = e.slice(1, a) : t.base = t.name = e.slice(s, a)) : (s === 0 && n ? (t.name = e.slice(1, i), t.base = e.slice(1, a)) : (t.name = e.slice(s, i), t.base = e.slice(s, a)), t.ext = e.slice(i, a)), s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
      }, sep: "/", delimiter: ":", win32: null, posix: null };
      Vt.posix = Vt;
      Ls.exports = Vt;
    });
    var Us = re((t0, js) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      js.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var qs = re((a0, $s) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var Hp = Us();
      $s.exports = (e) => {
        let t = Hp(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var Ks = re((d0, ko) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var zp = Object.prototype.hasOwnProperty, we = "~";
      function fr() {
      }
      Object.create && (fr.prototype = /* @__PURE__ */ Object.create(null), new fr().__proto__ || (we = false));
      function Zp(e, t, r) {
        this.fn = e, this.context = t, this.once = r || false;
      }
      function Vs(e, t, r, n, o) {
        if (typeof r != "function")
          throw new TypeError("The listener must be a function");
        var i = new Zp(r, n || e, o), s = we ? we + t : t;
        return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], i] : e._events[s].push(i) : (e._events[s] = i, e._eventsCount++), e;
      }
      function yn(e, t) {
        --e._eventsCount === 0 ? e._events = new fr() : delete e._events[t];
      }
      function ge() {
        this._events = new fr(), this._eventsCount = 0;
      }
      ge.prototype.eventNames = function() {
        var e = [], t, r;
        if (this._eventsCount === 0)
          return e;
        for (r in t = this._events)
          zp.call(t, r) && e.push(we ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
      };
      ge.prototype.listeners = function(e) {
        var t = we ? we + e : e, r = this._events[t];
        if (!r)
          return [];
        if (r.fn)
          return [r.fn];
        for (var n = 0, o = r.length, i = new Array(o); n < o; n++)
          i[n] = r[n].fn;
        return i;
      };
      ge.prototype.listenerCount = function(e) {
        var t = we ? we + e : e, r = this._events[t];
        return r ? r.fn ? 1 : r.length : 0;
      };
      ge.prototype.emit = function(e, t, r, n, o, i) {
        var s = we ? we + e : e;
        if (!this._events[s])
          return false;
        var a = this._events[s], u = arguments.length, l, p;
        if (a.fn) {
          switch (a.once && this.removeListener(e, a.fn, void 0, true), u) {
            case 1:
              return a.fn.call(a.context), true;
            case 2:
              return a.fn.call(a.context, t), true;
            case 3:
              return a.fn.call(a.context, t, r), true;
            case 4:
              return a.fn.call(a.context, t, r, n), true;
            case 5:
              return a.fn.call(a.context, t, r, n, o), true;
            case 6:
              return a.fn.call(a.context, t, r, n, o, i), true;
          }
          for (p = 1, l = new Array(u - 1); p < u; p++)
            l[p - 1] = arguments[p];
          a.fn.apply(a.context, l);
        } else {
          var y = a.length, h;
          for (p = 0; p < y; p++)
            switch (a[p].once && this.removeListener(e, a[p].fn, void 0, true), u) {
              case 1:
                a[p].fn.call(a[p].context);
                break;
              case 2:
                a[p].fn.call(a[p].context, t);
                break;
              case 3:
                a[p].fn.call(a[p].context, t, r);
                break;
              case 4:
                a[p].fn.call(a[p].context, t, r, n);
                break;
              default:
                if (!l)
                  for (h = 1, l = new Array(u - 1); h < u; h++)
                    l[h - 1] = arguments[h];
                a[p].fn.apply(a[p].context, l);
            }
        }
        return true;
      };
      ge.prototype.on = function(e, t, r) {
        return Vs(this, e, t, r, false);
      };
      ge.prototype.once = function(e, t, r) {
        return Vs(this, e, t, r, true);
      };
      ge.prototype.removeListener = function(e, t, r, n) {
        var o = we ? we + e : e;
        if (!this._events[o])
          return this;
        if (!t)
          return yn(this, o), this;
        var i = this._events[o];
        if (i.fn)
          i.fn === t && (!n || i.once) && (!r || i.context === r) && yn(this, o);
        else {
          for (var s = 0, a = [], u = i.length; s < u; s++)
            (i[s].fn !== t || n && !i[s].once || r && i[s].context !== r) && a.push(i[s]);
          a.length ? this._events[o] = a.length === 1 ? a[0] : a : yn(this, o);
        }
        return this;
      };
      ge.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = we ? we + e : e, this._events[t] && yn(this, t)) : (this._events = new fr(), this._eventsCount = 0), this;
      };
      ge.prototype.off = ge.prototype.removeListener;
      ge.prototype.addListener = ge.prototype.on;
      ge.prefixed = we;
      ge.EventEmitter = ge;
      typeof ko < "u" && (ko.exports = ge);
    });
    var Js = re((T0, Gs) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      Gs.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Hs = re((L0, Ws) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      Ws.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Zs = re((V0, zs) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      var rc = Hs();
      zs.exports = (e) => typeof e == "string" ? e.replace(rc(), "") : e;
    });
    var ta = re(() => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
    });
    var yi = re((Vk, gu) => {
      "use strict";
      g();
      c();
      f();
      d();
      m();
      gu.exports = function() {
        function e(t, r, n, o, i) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : o === i ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var o = t.length, i = r.length; o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1); )
            o--, i--;
          for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (o -= s, i -= s, o === 0 || i < 3)
            return i;
          var a = 0, u, l, p, y, h, T, C, P, R, I, D, F, k = [];
          for (u = 0; u < o; u++)
            k.push(u + 1), k.push(t.charCodeAt(s + u));
          for (var $ = k.length - 1; a < i - 3; )
            for (R = r.charCodeAt(s + (l = a)), I = r.charCodeAt(s + (p = a + 1)), D = r.charCodeAt(s + (y = a + 2)), F = r.charCodeAt(s + (h = a + 3)), T = a += 4, u = 0; u < $; u += 2)
              C = k[u], P = k[u + 1], l = e(C, l, p, R, P), p = e(l, p, y, I, P), y = e(p, y, h, D, P), T = e(y, h, T, F, P), k[u] = T, h = y, y = p, p = l, l = C;
          for (; a < i; )
            for (R = r.charCodeAt(s + (l = a)), T = ++a, u = 0; u < $; u += 2)
              C = k[u], k[u] = T = e(C, l, T, R, k[u + 1]), l = C;
          return T;
        };
      }();
    });
    var Xd = {};
    ar(Xd, { DMMF: () => Fe, DMMFClass: () => Wr, Debug: () => Ro, Decimal: () => Ke, Extensions: () => lo, MetricsClient: () => Jt, NotFoundError: () => He, ObjectEnumValue: () => Ue, PrismaClientInitializationError: () => ae, PrismaClientKnownRequestError: () => ye, PrismaClientRustPanicError: () => ze, PrismaClientUnknownRequestError: () => Ie, PrismaClientValidationError: () => de, Public: () => po, Sql: () => Ae, Types: () => co, defineDmmfProperty: () => ea, detectRuntime: () => $n, empty: () => na, getPrismaClient: () => nl, itxClientDenyList: () => jo, join: () => ra, makeStrictEnum: () => ol, objectEnumNames: () => ic, objectEnumValues: () => xn, raw: () => Ko, sqltag: () => Go, warnEnvConflicts: () => void 0, warnOnce: () => gr });
    module.exports = hl(Xd);
    g();
    c();
    f();
    d();
    m();
    var lo = {};
    ar(lo, { defineExtension: () => Zi, getExtensionContext: () => Yi });
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Zi(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    g();
    c();
    f();
    d();
    m();
    function Yi(e) {
      return e;
    }
    var po = {};
    ar(po, { validator: () => Xi });
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Xi(...e) {
      return (t) => t;
    }
    var co = {};
    ar(co, { Extensions: () => es, Public: () => ts, Result: () => rs, Utils: () => ns });
    g();
    c();
    f();
    d();
    m();
    var es = {};
    g();
    c();
    f();
    d();
    m();
    var ts = {};
    g();
    c();
    f();
    d();
    m();
    var rs = {};
    g();
    c();
    f();
    d();
    m();
    var ns = {};
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var nt = (e, t) => {
      let r = {};
      for (let n of e) {
        let o = n[t];
        r[o] = n;
      }
      return r;
    };
    function os(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var Wr = class {
      constructor(t) {
        this.document = t;
      }
      get compositeNames() {
        var t;
        return (t = this._compositeNames) != null ? t : this._compositeNames = new Set(this.datamodel.types.map((r) => r.name));
      }
      get inputTypesByName() {
        var t;
        return (t = this._inputTypesByName) != null ? t : this._inputTypesByName = this.buildInputTypesMap();
      }
      get typeAndModelMap() {
        var t;
        return (t = this._typeAndModelMap) != null ? t : this._typeAndModelMap = this.buildTypeModelMap();
      }
      get mappingsMap() {
        var t;
        return (t = this._mappingsMap) != null ? t : this._mappingsMap = this.buildMappingsMap();
      }
      get outputTypeMap() {
        var t;
        return (t = this._outputTypeMap) != null ? t : this._outputTypeMap = this.buildMergedOutputTypeMap();
      }
      get rootFieldMap() {
        var t;
        return (t = this._rootFieldMap) != null ? t : this._rootFieldMap = this.buildRootFieldMap();
      }
      get datamodel() {
        return this.document.datamodel;
      }
      get mappings() {
        return this.document.mappings;
      }
      get schema() {
        return this.document.schema;
      }
      get inputObjectTypes() {
        return this.schema.inputObjectTypes;
      }
      get outputObjectTypes() {
        return this.schema.outputObjectTypes;
      }
      isComposite(t) {
        return this.compositeNames.has(t);
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
      hasEnumInNamespace(t, r) {
        var n;
        return ((n = this.schema.enumTypes[r]) == null ? void 0 : n.find((o) => o.name === t)) !== void 0;
      }
      resolveInputObjectType(t) {
        return this.inputTypesByName.get(fo(t.type, t.namespace));
      }
      resolveOutputObjectType(t) {
        var r;
        if (t.location === "outputObjectTypes")
          return this.outputObjectTypes[(r = t.namespace) != null ? r : "prisma"].find((n) => n.name === t.type);
      }
      buildModelMap() {
        return nt(this.datamodel.models, "name");
      }
      buildTypeMap() {
        return nt(this.datamodel.types, "name");
      }
      buildTypeModelMap() {
        return { ...this.buildTypeMap(), ...this.buildModelMap() };
      }
      buildMappingsMap() {
        return nt(this.mappings.modelOperations, "model");
      }
      buildMergedOutputTypeMap() {
        return { model: nt(this.schema.outputObjectTypes.model, "name"), prisma: nt(this.schema.outputObjectTypes.prisma, "name") };
      }
      buildRootFieldMap() {
        return { ...nt(this.outputTypeMap.prisma.Query.fields, "name"), ...nt(this.outputTypeMap.prisma.Mutation.fields, "name") };
      }
      buildInputTypesMap() {
        let t = /* @__PURE__ */ new Map();
        for (let r of this.inputObjectTypes.prisma)
          t.set(fo(r.name, "prisma"), r);
        if (!this.inputObjectTypes.model)
          return t;
        for (let r of this.inputObjectTypes.model)
          t.set(fo(r.name, "model"), r);
        return t;
      }
    };
    function fo(e, t) {
      return t ? `${t}.${e}` : e;
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Fe;
    ((t) => {
      let e;
      ((F) => (F.findUnique = "findUnique", F.findUniqueOrThrow = "findUniqueOrThrow", F.findFirst = "findFirst", F.findFirstOrThrow = "findFirstOrThrow", F.findMany = "findMany", F.create = "create", F.createMany = "createMany", F.update = "update", F.updateMany = "updateMany", F.upsert = "upsert", F.delete = "delete", F.deleteMany = "deleteMany", F.groupBy = "groupBy", F.count = "count", F.aggregate = "aggregate", F.findRaw = "findRaw", F.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(Fe || (Fe = {}));
    g();
    c();
    f();
    d();
    m();
    var pn = Oe(Ms());
    var $p = 100;
    var ln = [];
    var Rs;
    var Ss;
    typeof x != "undefined" && typeof ((Rs = x.stderr) == null ? void 0 : Rs.write) != "function" && (pn.default.log = (Ss = console.debug) != null ? Ss : console.log);
    function qp(e) {
      let t = (0, pn.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && ln.push([e, ...n]), ln.length > $p && ln.shift(), t("", ...n)), t);
      return r;
    }
    var Ro = Object.assign(qp, pn.default);
    function Os() {
      ln.length = 0;
    }
    var ve = Ro;
    g();
    c();
    f();
    d();
    m();
    var So;
    var Fs;
    var ks;
    var Is;
    var Ds = true;
    typeof x != "undefined" && ({ FORCE_COLOR: So, NODE_DISABLE_COLORS: Fs, NO_COLOR: ks, TERM: Is } = x.env || {}, Ds = x.stdout && x.stdout.isTTY);
    var Vp = { enabled: !Fs && ks == null && Is !== "dumb" && (So != null && So !== "0" || Ds) };
    function z2(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, o = `\x1B[${t}m`;
      return function(i) {
        return !Vp.enabled || i == null ? i : n + (~("" + i).indexOf(o) ? i.replace(r, o + n) : i) + o;
      };
    }
    var Jy = z2(0, 0);
    var st = z2(1, 22);
    var cn = z2(2, 22);
    var Qy = z2(3, 23);
    var _s = z2(4, 24);
    var Wy = z2(7, 27);
    var Hy = z2(8, 28);
    var zy = z2(9, 29);
    var Zy = z2(30, 39);
    var $t = z2(31, 39);
    var fn = z2(32, 39);
    var dn = z2(33, 39);
    var qt = z2(34, 39);
    var Yy = z2(35, 39);
    var at = z2(36, 39);
    var Xy = z2(37, 39);
    var mn = z2(90, 39);
    var eh = z2(90, 39);
    var th = z2(40, 49);
    var rh = z2(41, 49);
    var nh = z2(42, 49);
    var oh = z2(43, 49);
    var ih = z2(44, 49);
    var sh = z2(45, 49);
    var ah = z2(46, 49);
    var uh = z2(47, 49);
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Bs = "library";
    function cr(e) {
      let t = Wp();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : Bs);
    }
    function Wp() {
      let e = x.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    g();
    c();
    f();
    d();
    m();
    var dr = Oe(Fo());
    function Io(e) {
      return dr.default.sep === dr.default.posix.sep ? e : e.split(dr.default.sep).join(dr.default.posix.sep);
    }
    var Kt = {};
    ar(Kt, { error: () => ec, info: () => Xp, log: () => Yp, query: () => tc, should: () => Qs, tags: () => mr, warn: () => Do });
    g();
    c();
    f();
    d();
    m();
    var mr = { error: $t("prisma:error"), warn: dn("prisma:warn"), info: at("prisma:info"), query: qt("prisma:query") };
    var Qs = { warn: () => !x.env.PRISMA_DISABLE_WARNINGS };
    function Yp(...e) {
      console.log(...e);
    }
    function Do(e, ...t) {
      Qs.warn() && console.warn(`${mr.warn} ${e}`, ...t);
    }
    function Xp(e, ...t) {
      console.info(`${mr.info} ${e}`, ...t);
    }
    function ec(e, ...t) {
      console.error(`${mr.error} ${e}`, ...t);
    }
    function tc(e, ...t) {
      console.log(`${mr.query} ${e}`, ...t);
    }
    g();
    c();
    f();
    d();
    m();
    function Pt(e, t) {
      throw new Error(t);
    }
    g();
    c();
    f();
    d();
    m();
    function _o(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    g();
    c();
    f();
    d();
    m();
    var No = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    g();
    c();
    f();
    d();
    m();
    function Gt(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    g();
    c();
    f();
    d();
    m();
    function Lo(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    g();
    c();
    f();
    d();
    m();
    function B(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    g();
    c();
    f();
    d();
    m();
    var Ys = /* @__PURE__ */ new Set();
    var gr = (e, t, ...r) => {
      Ys.has(e) || (Ys.add(e), Do(t, ...r));
    };
    g();
    c();
    f();
    d();
    m();
    var ye = class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: o, batchRequestIdx: i }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: i, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    B(ye, "PrismaClientKnownRequestError");
    var He = class extends ye {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    B(He, "NotFoundError");
    g();
    c();
    f();
    d();
    m();
    var ae = class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    B(ae, "PrismaClientInitializationError");
    g();
    c();
    f();
    d();
    m();
    var ze = class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    B(ze, "PrismaClientRustPanicError");
    g();
    c();
    f();
    d();
    m();
    var Ie = class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    B(Ie, "PrismaClientUnknownRequestError");
    g();
    c();
    f();
    d();
    m();
    var de = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    B(de, "PrismaClientValidationError");
    g();
    c();
    f();
    d();
    m();
    var Jt = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function yr(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function ea(e, t) {
      let r = yr(() => nc(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function nc(e) {
      return { datamodel: { models: Bo(e.models), enums: Bo(e.enums), types: Bo(e.types) } };
    }
    function Bo(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    g();
    c();
    f();
    d();
    m();
    var oc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var jo = oc;
    g();
    c();
    f();
    d();
    m();
    var ic = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
    var hn = Symbol();
    var Uo = /* @__PURE__ */ new WeakMap();
    var Ue = class {
      constructor(t) {
        t === hn ? Uo.set(this, `Prisma.${this._getName()}`) : Uo.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Uo.get(this);
      }
    };
    var hr = class extends Ue {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var xr = class extends hr {
    };
    $o(xr, "DbNull");
    var br = class extends hr {
    };
    $o(br, "JsonNull");
    var wr = class extends hr {
    };
    $o(wr, "AnyNull");
    var xn = { classes: { DbNull: xr, JsonNull: br, AnyNull: wr }, instances: { DbNull: new xr(hn), JsonNull: new br(hn), AnyNull: new wr(hn) } };
    function $o(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Er(e) {
      return { ok: false, error: e, map() {
        return Er(e);
      }, flatMap() {
        return Er(e);
      } };
    }
    var qo = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var Vo = (e) => {
      let t = new qo(), r = vt(t, e.startTransaction.bind(e)), n = { errorRegistry: t, queryRaw: vt(t, e.queryRaw.bind(e)), executeRaw: vt(t, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...o) => (await r(...o)).map((s) => sc(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = ac(t, e.getConnectionInfo.bind(e))), n;
    };
    var sc = (e, t) => ({ provider: t.provider, options: t.options, queryRaw: vt(e, t.queryRaw.bind(t)), executeRaw: vt(e, t.executeRaw.bind(t)), commit: vt(e, t.commit.bind(t)), rollback: vt(e, t.rollback.bind(t)) });
    function vt(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let o = e.registerNewError(n);
          return Er({ kind: "GenericJs", id: o });
        }
      };
    }
    function ac(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let o = e.registerNewError(n);
          return Er({ kind: "GenericJs", id: o });
        }
      };
    }
    var J3 = Oe(ta());
    var rl = Oe(Ks());
    Oo();
    var Kr = Oe(Fo());
    g();
    c();
    f();
    d();
    m();
    var Ae = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let o = 0, i = 0;
        for (; o < r.length; ) {
          let s = r[o++], a = t[o];
          if (s instanceof e) {
            this.strings[i] += s.strings[0];
            let u = 0;
            for (; u < s.values.length; )
              this.values[i++] = s.values[u++], this.strings[i] = s.strings[u];
            this.strings[i] += a;
          } else
            this.values[i++] = s, this.strings[i] = a;
        }
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function ra(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new Ae([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Ko(e) {
      return new Ae([e], []);
    }
    var na = Ko("");
    function Go(e, ...t) {
      return new Ae(e, t);
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Pr(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    g();
    c();
    f();
    d();
    m();
    function Ee(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var $e = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var r;
        return (r = this._map.get(t)) == null ? void 0 : r.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let o = r();
        return this.set(t, o), o;
      }
    };
    function At(e) {
      let t = new $e();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var n;
        return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
      } };
    }
    g();
    c();
    f();
    d();
    m();
    var sa = Oe(Po());
    g();
    c();
    f();
    d();
    m();
    var bn = { enumerable: true, configurable: true, writable: true };
    function wn(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => bn, has: (r, n) => t.has(n), set: (r, n, o) => t.add(n) && Reflect.set(r, n, o), ownKeys: () => [...t] };
    }
    var oa = Symbol.for("nodejs.util.inspect.custom");
    function qe(e, t) {
      let r = uc(t), n = /* @__PURE__ */ new Set(), o = new Proxy(e, { get(i, s) {
        if (n.has(s))
          return i[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : i[s];
      }, has(i, s) {
        var u, l;
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null ? l : true : Reflect.has(i, s);
      }, ownKeys(i) {
        let s = ia(Reflect.ownKeys(i), r), a = ia(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(i, s, a) {
        var l, p;
        let u = r.get(s);
        return ((p = (l = u == null ? void 0 : u.getPropertyDescriptor) == null ? void 0 : l.call(u, s)) == null ? void 0 : p.writable) === false ? false : (n.add(s), Reflect.set(i, s, a));
      }, getOwnPropertyDescriptor(i, s) {
        let a = Reflect.getOwnPropertyDescriptor(i, s);
        if (a && !a.configurable)
          return a;
        let u = r.get(s);
        return u ? u.getPropertyDescriptor ? { ...bn, ...u == null ? void 0 : u.getPropertyDescriptor(s) } : bn : a;
      }, defineProperty(i, s, a) {
        return n.add(s), Reflect.defineProperty(i, s, a);
      } });
      return o[oa] = function(i, s, a = sa.inspect) {
        let u = { ...this };
        return delete u[oa], a(u, s);
      }, o;
    }
    function uc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let o of n)
          t.set(o, r);
      }
      return t;
    }
    function ia(e, t) {
      return e.filter((r) => {
        var o, i;
        let n = t.get(r);
        return (i = (o = n == null ? void 0 : n.has) == null ? void 0 : o.call(n, r)) != null ? i : true;
      });
    }
    g();
    c();
    f();
    d();
    m();
    function vr(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Qt = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let o = 0; o < r.length; o++)
          this.write(r[o]), o !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null || t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Wt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function En(e) {
      return e.toString() !== "Invalid Date";
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Ht = 9e15;
    var ct = 1e9;
    var Jo = "0123456789abcdef";
    var vn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var An = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Qo = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Ht, maxE: Ht, crypto: false };
    var pa;
    var Ze;
    var j = true;
    var Cn = "[DecimalError] ";
    var pt = Cn + "Invalid argument: ";
    var ca = Cn + "Precision limit exceeded";
    var fa = Cn + "crypto unavailable";
    var da = "[object Decimal]";
    var he = Math.floor;
    var oe = Math.pow;
    var lc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var pc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var cc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var ma = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var _e = 1e7;
    var L = 7;
    var fc = 9007199254740991;
    var dc = vn.length - 1;
    var Wo = An.length - 1;
    var S = { toStringTag: da };
    S.absoluteValue = S.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), N(e);
    };
    S.ceil = function() {
      return N(new this.constructor(this), this.e + 1, 2);
    };
    S.clampedTo = S.clamp = function(e, t) {
      var r, n = this, o = n.constructor;
      if (e = new o(e), t = new o(t), !e.s || !t.s)
        return new o(NaN);
      if (e.gt(t))
        throw Error(pt + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
    };
    S.comparedTo = S.cmp = function(e) {
      var t, r, n, o, i = this, s = i.d, a = (e = new i.constructor(e)).d, u = i.s, l = e.s;
      if (!s || !a)
        return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ u < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? u : a[0] ? -l : 0;
      if (u !== l)
        return u;
      if (i.e !== e.e)
        return i.e > e.e ^ u < 0 ? 1 : -1;
      for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ u < 0 ? 1 : -1;
      return n === o ? 0 : n > o ^ u < 0 ? 1 : -1;
    };
    S.cosine = S.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + L, n.rounding = 1, r = mc(n, ba(n, r)), n.precision = e, n.rounding = t, N(Ze == 2 || Ze == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    S.cubeRoot = S.cbrt = function() {
      var e, t, r, n, o, i, s, a, u, l, p = this, y = p.constructor;
      if (!p.isFinite() || p.isZero())
        return new y(p);
      for (j = false, i = p.s * oe(p.s * p, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = me(p.d), e = p.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = oe(r, 1 / 3), e = he((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new y(r), n.s = p.s) : n = new y(i.toString()), s = (e = y.precision) + 3; ; )
        if (a = n, u = a.times(a).times(a), l = u.plus(p), n = H(l.plus(p).times(a), l.plus(u), s + 2, 1), me(a.d).slice(0, s) === (r = me(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !o && r == "4999") {
            if (!o && (N(a, e + 1, 0), a.times(a).times(a).eq(p))) {
              n = a;
              break;
            }
            s += 4, o = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (N(n, e + 1, 1), t = !n.times(n).times(n).eq(p));
            break;
          }
      return j = true, N(n, e, y.rounding, t);
    };
    S.decimalPlaces = S.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - he(this.e / L)) * L, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    S.dividedBy = S.div = function(e) {
      return H(this, new this.constructor(e));
    };
    S.dividedToIntegerBy = S.divToInt = function(e) {
      var t = this, r = t.constructor;
      return N(H(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    S.equals = S.eq = function(e) {
      return this.cmp(e) === 0;
    };
    S.floor = function() {
      return N(new this.constructor(this), this.e + 1, 3);
    };
    S.greaterThan = S.gt = function(e) {
      return this.cmp(e) > 0;
    };
    S.greaterThanOrEqualTo = S.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    S.hyperbolicCosine = S.cosh = function() {
      var e, t, r, n, o, i = this, s = i.constructor, a = new s(1);
      if (!i.isFinite())
        return new s(i.s ? 1 / 0 : NaN);
      if (i.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(i.e, i.sd()) + 4, s.rounding = 1, o = i.d.length, o < 32 ? (e = Math.ceil(o / 3), t = (1 / Rn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), i = zt(s, 1, i.times(t), new s(1), true);
      for (var u, l = e, p = new s(8); l--; )
        u = i.times(i), i = a.minus(u.times(p.minus(u.times(p))));
      return N(i, s.precision = r, s.rounding = n, true);
    };
    S.hyperbolicSine = S.sinh = function() {
      var e, t, r, n, o = this, i = o.constructor;
      if (!o.isFinite() || o.isZero())
        return new i(o);
      if (t = i.precision, r = i.rounding, i.precision = t + Math.max(o.e, o.sd()) + 4, i.rounding = 1, n = o.d.length, n < 3)
        o = zt(i, 2, o, o, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, o = o.times(1 / Rn(5, e)), o = zt(i, 2, o, o, true);
        for (var s, a = new i(5), u = new i(16), l = new i(20); e--; )
          s = o.times(o), o = o.times(a.plus(s.times(u.times(s).plus(l))));
      }
      return i.precision = t, i.rounding = r, N(o, t, r, true);
    };
    S.hyperbolicTangent = S.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, H(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    S.inverseCosine = S.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), o = r.precision, i = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? De(r, o, i) : new r(0) : new r(NaN) : t.isZero() ? De(r, o + 4, i).times(0.5) : (r.precision = o + 6, r.rounding = 1, t = t.asin(), e = De(r, o + 4, i).times(0.5), r.precision = o, r.rounding = i, e.minus(t));
    };
    S.inverseHyperbolicCosine = S.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, j = false, r = r.times(r).minus(1).sqrt().plus(r), j = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    S.inverseHyperbolicSine = S.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, j = false, r = r.times(r).plus(1).sqrt().plus(r), j = true, n.precision = e, n.rounding = t, r.ln());
    };
    S.inverseHyperbolicTangent = S.atanh = function() {
      var e, t, r, n, o = this, i = o.constructor;
      return o.isFinite() ? o.e >= 0 ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN) : (e = i.precision, t = i.rounding, n = o.sd(), Math.max(n, e) < 2 * -o.e - 1 ? N(new i(o), e, t, true) : (i.precision = r = n - o.e, o = H(o.plus(1), new i(1).minus(o), r + e, 1), i.precision = e + 4, i.rounding = 1, o = o.ln(), i.precision = e, i.rounding = t, o.times(0.5))) : new i(NaN);
    };
    S.inverseSine = S.asin = function() {
      var e, t, r, n, o = this, i = o.constructor;
      return o.isZero() ? new i(o) : (t = o.abs().cmp(1), r = i.precision, n = i.rounding, t !== -1 ? t === 0 ? (e = De(i, r + 4, n).times(0.5), e.s = o.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = n, o.times(2)));
    };
    S.inverseTangent = S.atan = function() {
      var e, t, r, n, o, i, s, a, u, l = this, p = l.constructor, y = p.precision, h = p.rounding;
      if (l.isFinite()) {
        if (l.isZero())
          return new p(l);
        if (l.abs().eq(1) && y + 4 <= Wo)
          return s = De(p, y + 4, h).times(0.25), s.s = l.s, s;
      } else {
        if (!l.s)
          return new p(NaN);
        if (y + 4 <= Wo)
          return s = De(p, y + 4, h).times(0.5), s.s = l.s, s;
      }
      for (p.precision = a = y + 10, p.rounding = 1, r = Math.min(28, a / L + 2 | 0), e = r; e; --e)
        l = l.div(l.times(l).plus(1).sqrt().plus(1));
      for (j = false, t = Math.ceil(a / L), n = 1, u = l.times(l), s = new p(l), o = l; e !== -1; )
        if (o = o.times(u), i = s.minus(o.div(n += 2)), o = o.times(u), s = i.plus(o.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === i.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), j = true, N(s, p.precision = y, p.rounding = h, true);
    };
    S.isFinite = function() {
      return !!this.d;
    };
    S.isInteger = S.isInt = function() {
      return !!this.d && he(this.e / L) > this.d.length - 2;
    };
    S.isNaN = function() {
      return !this.s;
    };
    S.isNegative = S.isNeg = function() {
      return this.s < 0;
    };
    S.isPositive = S.isPos = function() {
      return this.s > 0;
    };
    S.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    S.lessThan = S.lt = function(e) {
      return this.cmp(e) < 0;
    };
    S.lessThanOrEqualTo = S.lte = function(e) {
      return this.cmp(e) < 1;
    };
    S.logarithm = S.log = function(e) {
      var t, r, n, o, i, s, a, u, l = this, p = l.constructor, y = p.precision, h = p.rounding, T = 5;
      if (e == null)
        e = new p(10), t = true;
      else {
        if (e = new p(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new p(NaN);
        t = e.eq(10);
      }
      if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1))
        return new p(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          i = true;
        else {
          for (o = r[0]; o % 10 === 0; )
            o /= 10;
          i = o !== 1;
        }
      if (j = false, a = y + T, s = lt(l, a), n = t ? Tn(p, a + 10) : lt(e, a), u = H(s, n, a, 1), Ar(u.d, o = y, h))
        do
          if (a += 10, s = lt(l, a), n = t ? Tn(p, a + 10) : lt(e, a), u = H(s, n, a, 1), !i) {
            +me(u.d).slice(o + 1, o + 15) + 1 == 1e14 && (u = N(u, y + 1, 0));
            break;
          }
        while (Ar(u.d, o += 10, h));
      return j = true, N(u, y, h);
    };
    S.minus = S.sub = function(e) {
      var t, r, n, o, i, s, a, u, l, p, y, h, T = this, C = T.constructor;
      if (e = new C(e), !T.d || !e.d)
        return !T.s || !e.s ? e = new C(NaN) : T.d ? e.s = -e.s : e = new C(e.d || T.s !== e.s ? T : NaN), e;
      if (T.s != e.s)
        return e.s = -e.s, T.plus(e);
      if (l = T.d, h = e.d, a = C.precision, u = C.rounding, !l[0] || !h[0]) {
        if (h[0])
          e.s = -e.s;
        else if (l[0])
          e = new C(T);
        else
          return new C(u === 3 ? -0 : 0);
        return j ? N(e, a, u) : e;
      }
      if (r = he(e.e / L), p = he(T.e / L), l = l.slice(), i = p - r, i) {
        for (y = i < 0, y ? (t = l, i = -i, s = h.length) : (t = h, r = p, s = l.length), n = Math.max(Math.ceil(a / L), s) + 2, i > n && (i = n, t.length = 1), t.reverse(), n = i; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = l.length, s = h.length, y = n < s, y && (s = n), n = 0; n < s; n++)
          if (l[n] != h[n]) {
            y = l[n] < h[n];
            break;
          }
        i = 0;
      }
      for (y && (t = l, l = h, h = t, e.s = -e.s), s = l.length, n = h.length - s; n > 0; --n)
        l[s++] = 0;
      for (n = h.length; n > i; ) {
        if (l[--n] < h[n]) {
          for (o = n; o && l[--o] === 0; )
            l[o] = _e - 1;
          --l[o], l[n] += _e;
        }
        l[n] -= h[n];
      }
      for (; l[--s] === 0; )
        l.pop();
      for (; l[0] === 0; l.shift())
        --r;
      return l[0] ? (e.d = l, e.e = Mn(l, r), j ? N(e, a, u) : e) : new C(u === 3 ? -0 : 0);
    };
    S.modulo = S.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? N(new n(r), n.precision, n.rounding) : (j = false, n.modulo == 9 ? (t = H(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = H(r, e, 0, n.modulo, 1), t = t.times(e), j = true, r.minus(t));
    };
    S.naturalExponential = S.exp = function() {
      return Ho(this);
    };
    S.naturalLogarithm = S.ln = function() {
      return lt(this);
    };
    S.negated = S.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, N(e);
    };
    S.plus = S.add = function(e) {
      var t, r, n, o, i, s, a, u, l, p, y = this, h = y.constructor;
      if (e = new h(e), !y.d || !e.d)
        return !y.s || !e.s ? e = new h(NaN) : y.d || (e = new h(e.d || y.s === e.s ? y : NaN)), e;
      if (y.s != e.s)
        return e.s = -e.s, y.minus(e);
      if (l = y.d, p = e.d, a = h.precision, u = h.rounding, !l[0] || !p[0])
        return p[0] || (e = new h(y)), j ? N(e, a, u) : e;
      if (i = he(y.e / L), n = he(e.e / L), l = l.slice(), o = i - n, o) {
        for (o < 0 ? (r = l, o = -o, s = p.length) : (r = p, n = i, s = l.length), i = Math.ceil(a / L), s = i > s ? i + 1 : s + 1, o > s && (o = s, r.length = 1), r.reverse(); o--; )
          r.push(0);
        r.reverse();
      }
      for (s = l.length, o = p.length, s - o < 0 && (o = s, r = p, p = l, l = r), t = 0; o; )
        t = (l[--o] = l[o] + p[o] + t) / _e | 0, l[o] %= _e;
      for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; )
        l.pop();
      return e.d = l, e.e = Mn(l, n), j ? N(e, a, u) : e;
    };
    S.precision = S.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(pt + e);
      return r.d ? (t = ga(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    S.round = function() {
      var e = this, t = e.constructor;
      return N(new t(e), e.e + 1, t.rounding);
    };
    S.sine = S.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + L, n.rounding = 1, r = yc(n, ba(n, r)), n.precision = e, n.rounding = t, N(Ze > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    S.squareRoot = S.sqrt = function() {
      var e, t, r, n, o, i, s = this, a = s.d, u = s.e, l = s.s, p = s.constructor;
      if (l !== 1 || !a || !a[0])
        return new p(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (j = false, l = Math.sqrt(+s), l == 0 || l == 1 / 0 ? (t = me(a), (t.length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = he((u + 1) / 2) - (u < 0 || u % 2), l == 1 / 0 ? t = "5e" + u : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), n = new p(t)) : n = new p(l.toString()), r = (u = p.precision) + 3; ; )
        if (i = n, n = i.plus(H(s, i, r + 2, 1)).times(0.5), me(i.d).slice(0, r) === (t = me(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !o && t == "4999") {
            if (!o && (N(i, u + 1, 0), i.times(i).eq(s))) {
              n = i;
              break;
            }
            r += 4, o = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (N(n, u + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return j = true, N(n, u, p.rounding, e);
    };
    S.tangent = S.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = H(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, N(Ze == 2 || Ze == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    S.times = S.mul = function(e) {
      var t, r, n, o, i, s, a, u, l, p = this, y = p.constructor, h = p.d, T = (e = new y(e)).d;
      if (e.s *= p.s, !h || !h[0] || !T || !T[0])
        return new y(!e.s || h && !h[0] && !T || T && !T[0] && !h ? NaN : !h || !T ? e.s / 0 : e.s * 0);
      for (r = he(p.e / L) + he(e.e / L), u = h.length, l = T.length, u < l && (i = h, h = T, T = i, s = u, u = l, l = s), i = [], s = u + l, n = s; n--; )
        i.push(0);
      for (n = l; --n >= 0; ) {
        for (t = 0, o = u + n; o > n; )
          a = i[o] + T[n] * h[o - n - 1] + t, i[o--] = a % _e | 0, t = a / _e | 0;
        i[o] = (i[o] + t) % _e | 0;
      }
      for (; !i[--s]; )
        i.pop();
      return t ? ++r : i.shift(), e.d = i, e.e = Mn(i, r), j ? N(e, y.precision, y.rounding) : e;
    };
    S.toBinary = function(e, t) {
      return Zo(this, 2, e, t);
    };
    S.toDecimalPlaces = S.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (Te(e, 0, ct), t === void 0 ? t = n.rounding : Te(t, 0, 8), N(r, e + r.e + 1, t));
    };
    S.toExponential = function(e, t) {
      var r, n = this, o = n.constructor;
      return e === void 0 ? r = Ve(n, true) : (Te(e, 0, ct), t === void 0 ? t = o.rounding : Te(t, 0, 8), n = N(new o(n), e + 1, t), r = Ve(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    S.toFixed = function(e, t) {
      var r, n, o = this, i = o.constructor;
      return e === void 0 ? r = Ve(o) : (Te(e, 0, ct), t === void 0 ? t = i.rounding : Te(t, 0, 8), n = N(new i(o), e + o.e + 1, t), r = Ve(n, false, e + n.e + 1)), o.isNeg() && !o.isZero() ? "-" + r : r;
    };
    S.toFraction = function(e) {
      var t, r, n, o, i, s, a, u, l, p, y, h, T = this, C = T.d, P = T.constructor;
      if (!C)
        return new P(T);
      if (l = r = new P(1), n = u = new P(0), t = new P(n), i = t.e = ga(C) - T.e - 1, s = i % L, t.d[0] = oe(10, s < 0 ? L + s : s), e == null)
        e = i > 0 ? t : l;
      else {
        if (a = new P(e), !a.isInt() || a.lt(l))
          throw Error(pt + a);
        e = a.gt(t) ? i > 0 ? t : l : a;
      }
      for (j = false, a = new P(me(C)), p = P.precision, P.precision = i = C.length * L * 2; y = H(a, t, 0, 1, 1), o = r.plus(y.times(n)), o.cmp(e) != 1; )
        r = n, n = o, o = l, l = u.plus(y.times(o)), u = o, o = t, t = a.minus(y.times(o)), a = o;
      return o = H(e.minus(r), n, 0, 1, 1), u = u.plus(o.times(l)), r = r.plus(o.times(n)), u.s = l.s = T.s, h = H(l, n, i, 1).minus(T).abs().cmp(H(u, r, i, 1).minus(T).abs()) < 1 ? [l, n] : [u, r], P.precision = p, j = true, h;
    };
    S.toHexadecimal = S.toHex = function(e, t) {
      return Zo(this, 16, e, t);
    };
    S.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : Te(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (j = false, r = H(r, e, 0, t, 1).times(e), j = true, N(r)) : (e.s = r.s, r = e), r;
    };
    S.toNumber = function() {
      return +this;
    };
    S.toOctal = function(e, t) {
      return Zo(this, 8, e, t);
    };
    S.toPower = S.pow = function(e) {
      var t, r, n, o, i, s, a = this, u = a.constructor, l = +(e = new u(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new u(oe(+a, l));
      if (a = new u(a), a.eq(1))
        return a;
      if (n = u.precision, i = u.rounding, e.eq(1))
        return N(a, n, i);
      if (t = he(e.e / L), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= fc)
        return o = ya(u, a, r, n), e.s < 0 ? new u(1).div(o) : N(o, n, i);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new u(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = oe(+a, l), t = r == 0 || !isFinite(r) ? he(l * (Math.log("0." + me(a.d)) / Math.LN10 + a.e + 1)) : new u(r + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? s / 0 : 0) : (j = false, u.rounding = a.s = 1, r = Math.min(12, (t + "").length), o = Ho(e.times(lt(a, n + r)), n), o.d && (o = N(o, n + 5, 1), Ar(o.d, n, i) && (t = n + 10, o = N(Ho(e.times(lt(a, t + r)), t), t + 5, 1), +me(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = N(o, n + 1, 0)))), o.s = s, j = true, u.rounding = i, N(o, n, i));
    };
    S.toPrecision = function(e, t) {
      var r, n = this, o = n.constructor;
      return e === void 0 ? r = Ve(n, n.e <= o.toExpNeg || n.e >= o.toExpPos) : (Te(e, 1, ct), t === void 0 ? t = o.rounding : Te(t, 0, 8), n = N(new o(n), e, t), r = Ve(n, e <= n.e || n.e <= o.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    S.toSignificantDigits = S.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (Te(e, 1, ct), t === void 0 ? t = n.rounding : Te(t, 0, 8)), N(new n(r), e, t);
    };
    S.toString = function() {
      var e = this, t = e.constructor, r = Ve(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    S.truncated = S.trunc = function() {
      return N(new this.constructor(this), this.e + 1, 1);
    };
    S.valueOf = S.toJSON = function() {
      var e = this, t = e.constructor, r = Ve(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function me(e) {
      var t, r, n, o = e.length - 1, i = "", s = e[0];
      if (o > 0) {
        for (i += s, t = 1; t < o; t++)
          n = e[t] + "", r = L - n.length, r && (i += ut(r)), i += n;
        s = e[t], n = s + "", r = L - n.length, r && (i += ut(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return i + s;
    }
    function Te(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(pt + e);
    }
    function Ar(e, t, r, n) {
      var o, i, s, a;
      for (i = e[0]; i >= 10; i /= 10)
        --t;
      return --t < 0 ? (t += L, o = 0) : (o = Math.ceil((t + 1) / L), t %= L), i = oe(10, L - t), a = e[o] % i | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == i || r > 3 && a + 1 == i / 2) && (e[o + 1] / i / 100 | 0) == oe(10, t - 2) - 1 || (a == i / 2 || a == 0) && (e[o + 1] / i / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == i || !n && r > 3 && a + 1 == i / 2) && (e[o + 1] / i / 1e3 | 0) == oe(10, t - 3) - 1, s;
    }
    function Pn(e, t, r) {
      for (var n, o = [0], i, s = 0, a = e.length; s < a; ) {
        for (i = o.length; i--; )
          o[i] *= t;
        for (o[0] += Jo.indexOf(e.charAt(s++)), n = 0; n < o.length; n++)
          o[n] > r - 1 && (o[n + 1] === void 0 && (o[n + 1] = 0), o[n + 1] += o[n] / r | 0, o[n] %= r);
      }
      return o.reverse();
    }
    function mc(e, t) {
      var r, n, o;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), o = (1 / Rn(4, r)).toString()) : (r = 16, o = "2.3283064365386962890625e-10"), e.precision += r, t = zt(e, 1, t.times(o), new e(1));
      for (var i = r; i--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var H = function() {
      function e(n, o, i) {
        var s, a = 0, u = n.length;
        for (n = n.slice(); u--; )
          s = n[u] * o + a, n[u] = s % i | 0, a = s / i | 0;
        return a && n.unshift(a), n;
      }
      function t(n, o, i, s) {
        var a, u;
        if (i != s)
          u = i > s ? 1 : -1;
        else
          for (a = u = 0; a < i; a++)
            if (n[a] != o[a]) {
              u = n[a] > o[a] ? 1 : -1;
              break;
            }
        return u;
      }
      function r(n, o, i, s) {
        for (var a = 0; i--; )
          n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * s + n[i] - o[i];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, o, i, s, a, u) {
        var l, p, y, h, T, C, P, R, I, D, F, k, $, q, xe, W, ee, Me, te, Re, Xe = n.constructor, J = n.s == o.s ? 1 : -1, G = n.d, _ = o.d;
        if (!G || !G[0] || !_ || !_[0])
          return new Xe(!n.s || !o.s || (G ? _ && G[0] == _[0] : !_) ? NaN : G && G[0] == 0 || !_ ? J * 0 : J / 0);
        for (u ? (T = 1, p = n.e - o.e) : (u = _e, T = L, p = he(n.e / T) - he(o.e / T)), te = _.length, ee = G.length, I = new Xe(J), D = I.d = [], y = 0; _[y] == (G[y] || 0); y++)
          ;
        if (_[y] > (G[y] || 0) && p--, i == null ? (q = i = Xe.precision, s = Xe.rounding) : a ? q = i + (n.e - o.e) + 1 : q = i, q < 0)
          D.push(1), C = true;
        else {
          if (q = q / T + 2 | 0, y = 0, te == 1) {
            for (h = 0, _ = _[0], q++; (y < ee || h) && q--; y++)
              xe = h * u + (G[y] || 0), D[y] = xe / _ | 0, h = xe % _ | 0;
            C = h || y < ee;
          } else {
            for (h = u / (_[0] + 1) | 0, h > 1 && (_ = e(_, h, u), G = e(G, h, u), te = _.length, ee = G.length), W = te, F = G.slice(0, te), k = F.length; k < te; )
              F[k++] = 0;
            Re = _.slice(), Re.unshift(0), Me = _[0], _[1] >= u / 2 && ++Me;
            do
              h = 0, l = t(_, F, te, k), l < 0 ? ($ = F[0], te != k && ($ = $ * u + (F[1] || 0)), h = $ / Me | 0, h > 1 ? (h >= u && (h = u - 1), P = e(_, h, u), R = P.length, k = F.length, l = t(P, F, R, k), l == 1 && (h--, r(P, te < R ? Re : _, R, u))) : (h == 0 && (l = h = 1), P = _.slice()), R = P.length, R < k && P.unshift(0), r(F, P, k, u), l == -1 && (k = F.length, l = t(_, F, te, k), l < 1 && (h++, r(F, te < k ? Re : _, k, u))), k = F.length) : l === 0 && (h++, F = [0]), D[y++] = h, l && F[0] ? F[k++] = G[W] || 0 : (F = [G[W]], k = 1);
            while ((W++ < ee || F[0] !== void 0) && q--);
            C = F[0] !== void 0;
          }
          D[0] || D.shift();
        }
        if (T == 1)
          I.e = p, pa = C;
        else {
          for (y = 1, h = D[0]; h >= 10; h /= 10)
            y++;
          I.e = y + p * T - 1, N(I, a ? i + I.e + 1 : i, s, C);
        }
        return I;
      };
    }();
    function N(e, t, r, n) {
      var o, i, s, a, u, l, p, y, h, T = e.constructor;
      e:
        if (t != null) {
          if (y = e.d, !y)
            return e;
          for (o = 1, a = y[0]; a >= 10; a /= 10)
            o++;
          if (i = t - o, i < 0)
            i += L, s = t, p = y[h = 0], u = p / oe(10, o - s - 1) % 10 | 0;
          else if (h = Math.ceil((i + 1) / L), a = y.length, h >= a)
            if (n) {
              for (; a++ <= h; )
                y.push(0);
              p = u = 0, o = 1, i %= L, s = i - L + 1;
            } else
              break e;
          else {
            for (p = a = y[h], o = 1; a >= 10; a /= 10)
              o++;
            i %= L, s = i - L + o, u = s < 0 ? 0 : p / oe(10, o - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || y[h + 1] !== void 0 || (s < 0 ? p : p % oe(10, o - s - 1)), l = r < 4 ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || n || r == 6 && (i > 0 ? s > 0 ? p / oe(10, o - s) : 0 : y[h - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !y[0])
            return y.length = 0, l ? (t -= e.e + 1, y[0] = oe(10, (L - t % L) % L), e.e = -t || 0) : y[0] = e.e = 0, e;
          if (i == 0 ? (y.length = h, a = 1, h--) : (y.length = h + 1, a = oe(10, L - i), y[h] = s > 0 ? (p / oe(10, o - s) % oe(10, s) | 0) * a : 0), l)
            for (; ; )
              if (h == 0) {
                for (i = 1, s = y[0]; s >= 10; s /= 10)
                  i++;
                for (s = y[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                i != a && (e.e++, y[0] == _e && (y[0] = 1));
                break;
              } else {
                if (y[h] += a, y[h] != _e)
                  break;
                y[h--] = 0, a = 1;
              }
          for (i = y.length; y[--i] === 0; )
            y.pop();
        }
      return j && (e.e > T.maxE ? (e.d = null, e.e = NaN) : e.e < T.minE && (e.e = 0, e.d = [0])), e;
    }
    function Ve(e, t, r) {
      if (!e.isFinite())
        return xa(e);
      var n, o = e.e, i = me(e.d), s = i.length;
      return t ? (r && (n = r - s) > 0 ? i = i.charAt(0) + "." + i.slice(1) + ut(n) : s > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : o < 0 ? (i = "0." + ut(-o - 1) + i, r && (n = r - s) > 0 && (i += ut(n))) : o >= s ? (i += ut(o + 1 - s), r && (n = r - o - 1) > 0 && (i = i + "." + ut(n))) : ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - s) > 0 && (o + 1 === s && (i += "."), i += ut(n))), i;
    }
    function Mn(e, t) {
      var r = e[0];
      for (t *= L; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Tn(e, t, r) {
      if (t > dc)
        throw j = true, r && (e.precision = r), Error(ca);
      return N(new e(vn), t, 1, true);
    }
    function De(e, t, r) {
      if (t > Wo)
        throw Error(ca);
      return N(new e(An), t, r, true);
    }
    function ga(e) {
      var t = e.length - 1, r = t * L + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function ut(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function ya(e, t, r, n) {
      var o, i = new e(1), s = Math.ceil(n / L + 4);
      for (j = false; ; ) {
        if (r % 2 && (i = i.times(t), ua(i.d, s) && (o = true)), r = he(r / 2), r === 0) {
          r = i.d.length - 1, o && i.d[r] === 0 && ++i.d[r];
          break;
        }
        t = t.times(t), ua(t.d, s);
      }
      return j = true, i;
    }
    function aa(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function ha(e, t, r) {
      for (var n, o = new e(t[0]), i = 0; ++i < t.length; )
        if (n = new e(t[i]), n.s)
          o[r](n) && (o = n);
        else {
          o = n;
          break;
        }
      return o;
    }
    function Ho(e, t) {
      var r, n, o, i, s, a, u, l = 0, p = 0, y = 0, h = e.constructor, T = h.rounding, C = h.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new h(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (j = false, u = C) : u = t, a = new h(0.03125); e.e > -2; )
        e = e.times(a), y += 5;
      for (n = Math.log(oe(2, y)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = s = new h(1), h.precision = u; ; ) {
        if (i = N(i.times(e), u, 1), r = r.times(++p), a = s.plus(H(i, r, u, 1)), me(a.d).slice(0, u) === me(s.d).slice(0, u)) {
          for (o = y; o--; )
            s = N(s.times(s), u, 1);
          if (t == null)
            if (l < 3 && Ar(s.d, u - n, T, l))
              h.precision = u += 10, r = i = a = new h(1), p = 0, l++;
            else
              return N(s, h.precision = C, T, j = true);
          else
            return h.precision = C, s;
        }
        s = a;
      }
    }
    function lt(e, t) {
      var r, n, o, i, s, a, u, l, p, y, h, T = 1, C = 10, P = e, R = P.d, I = P.constructor, D = I.rounding, F = I.precision;
      if (P.s < 0 || !R || !R[0] || !P.e && R[0] == 1 && R.length == 1)
        return new I(R && !R[0] ? -1 / 0 : P.s != 1 ? NaN : R ? 0 : P);
      if (t == null ? (j = false, p = F) : p = t, I.precision = p += C, r = me(R), n = r.charAt(0), Math.abs(i = P.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          P = P.times(e), r = me(P.d), n = r.charAt(0), T++;
        i = P.e, n > 1 ? (P = new I("0." + r), i++) : P = new I(n + "." + r.slice(1));
      } else
        return l = Tn(I, p + 2, F).times(i + ""), P = lt(new I(n + "." + r.slice(1)), p - C).plus(l), I.precision = F, t == null ? N(P, F, D, j = true) : P;
      for (y = P, u = s = P = H(P.minus(1), P.plus(1), p, 1), h = N(P.times(P), p, 1), o = 3; ; ) {
        if (s = N(s.times(h), p, 1), l = u.plus(H(s, new I(o), p, 1)), me(l.d).slice(0, p) === me(u.d).slice(0, p))
          if (u = u.times(2), i !== 0 && (u = u.plus(Tn(I, p + 2, F).times(i + ""))), u = H(u, new I(T), p, 1), t == null)
            if (Ar(u.d, p - C, D, a))
              I.precision = p += C, l = s = P = H(y.minus(1), y.plus(1), p, 1), h = N(P.times(P), p, 1), o = a = 1;
            else
              return N(u, I.precision = F, D, j = true);
          else
            return I.precision = F, u;
        u = l, o += 2;
      }
    }
    function xa(e) {
      return String(e.s * e.s / 0);
    }
    function zo(e, t) {
      var r, n, o;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (o = t.length; t.charCodeAt(o - 1) === 48; --o)
        ;
      if (t = t.slice(n, o), t) {
        if (o -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % L, r < 0 && (n += L), n < o) {
          for (n && e.d.push(+t.slice(0, n)), o -= L; n < o; )
            e.d.push(+t.slice(n, n += L));
          t = t.slice(n), n = L - t.length;
        } else
          n -= o;
        for (; n--; )
          t += "0";
        e.d.push(+t), j && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function gc(e, t) {
      var r, n, o, i, s, a, u, l, p;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ma.test(t))
          return zo(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (pc.test(t))
        r = 16, t = t.toLowerCase();
      else if (lc.test(t))
        r = 2;
      else if (cc.test(t))
        r = 8;
      else
        throw Error(pt + t);
      for (i = t.search(/p/i), i > 0 ? (u = +t.slice(i + 1), t = t.substring(2, i)) : t = t.slice(2), i = t.indexOf("."), s = i >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, i = a - i, o = ya(n, new n(r), i, i * 2)), l = Pn(t, r, _e), p = l.length - 1, i = p; l[i] === 0; --i)
        l.pop();
      return i < 0 ? new n(e.s * 0) : (e.e = Mn(l, p), e.d = l, j = false, s && (e = H(e, o, a * 4)), u && (e = e.times(Math.abs(u) < 54 ? oe(2, u) : Tt.pow(2, u))), j = true, e);
    }
    function yc(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : zt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Rn(5, r)), t = zt(e, 2, t, t);
      for (var o, i = new e(5), s = new e(16), a = new e(20); r--; )
        o = t.times(t), t = t.times(i.plus(o.times(s.times(o).minus(a))));
      return t;
    }
    function zt(e, t, r, n, o) {
      var i, s, a, u, l = 1, p = e.precision, y = Math.ceil(p / L);
      for (j = false, u = r.times(r), a = new e(n); ; ) {
        if (s = H(a.times(u), new e(t++ * t++), p, 1), a = o ? n.plus(s) : n.minus(s), n = H(s.times(u), new e(t++ * t++), p, 1), s = a.plus(n), s.d[y] !== void 0) {
          for (i = y; s.d[i] === a.d[i] && i--; )
            ;
          if (i == -1)
            break;
        }
        i = a, a = n, n = s, s = i, l++;
      }
      return j = true, s.d.length = y + 1, s;
    }
    function Rn(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function ba(e, t) {
      var r, n = t.s < 0, o = De(e, e.precision, 1), i = o.times(0.5);
      if (t = t.abs(), t.lte(i))
        return Ze = n ? 4 : 1, t;
      if (r = t.divToInt(o), r.isZero())
        Ze = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(o)), t.lte(i))
          return Ze = aa(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Ze = aa(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(o).abs();
    }
    function Zo(e, t, r, n) {
      var o, i, s, a, u, l, p, y, h, T = e.constructor, C = r !== void 0;
      if (C ? (Te(r, 1, ct), n === void 0 ? n = T.rounding : Te(n, 0, 8)) : (r = T.precision, n = T.rounding), !e.isFinite())
        p = xa(e);
      else {
        for (p = Ve(e), s = p.indexOf("."), C ? (o = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : o = t, s >= 0 && (p = p.replace(".", ""), h = new T(1), h.e = p.length - s, h.d = Pn(Ve(h), 10, o), h.e = h.d.length), y = Pn(p, 10, o), i = u = y.length; y[--u] == 0; )
          y.pop();
        if (!y[0])
          p = C ? "0p+0" : "0";
        else {
          if (s < 0 ? i-- : (e = new T(e), e.d = y, e.e = i, e = H(e, h, r, n, 0, o), y = e.d, i = e.e, l = pa), s = y[r], a = o / 2, l = l || y[r + 1] !== void 0, l = n < 4 ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || l || n === 6 && y[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), y.length = r, l)
            for (; ++y[--r] > o - 1; )
              y[r] = 0, r || (++i, y.unshift(1));
          for (u = y.length; !y[u - 1]; --u)
            ;
          for (s = 0, p = ""; s < u; s++)
            p += Jo.charAt(y[s]);
          if (C) {
            if (u > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --u; u % s; u++)
                  p += "0";
                for (y = Pn(p, o, t), u = y.length; !y[u - 1]; --u)
                  ;
                for (s = 1, p = "1."; s < u; s++)
                  p += Jo.charAt(y[s]);
              } else
                p = p.charAt(0) + "." + p.slice(1);
            p = p + (i < 0 ? "p" : "p+") + i;
          } else if (i < 0) {
            for (; ++i; )
              p = "0" + p;
            p = "0." + p;
          } else if (++i > u)
            for (i -= u; i--; )
              p += "0";
          else
            i < u && (p = p.slice(0, i) + "." + p.slice(i));
        }
        p = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + p;
      }
      return e.s < 0 ? "-" + p : p;
    }
    function ua(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function hc(e) {
      return new this(e).abs();
    }
    function xc(e) {
      return new this(e).acos();
    }
    function bc(e) {
      return new this(e).acosh();
    }
    function wc(e, t) {
      return new this(e).plus(t);
    }
    function Ec(e) {
      return new this(e).asin();
    }
    function Pc(e) {
      return new this(e).asinh();
    }
    function vc(e) {
      return new this(e).atan();
    }
    function Ac(e) {
      return new this(e).atanh();
    }
    function Tc(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, o = this.rounding, i = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = De(this, i, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? De(this, n, o) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = De(this, i, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(H(e, t, i, 1)), t = De(this, i, 1), this.precision = n, this.rounding = o, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(H(e, t, i, 1)), r;
    }
    function Cc(e) {
      return new this(e).cbrt();
    }
    function Mc(e) {
      return N(e = new this(e), e.e + 1, 2);
    }
    function Rc(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function Sc(e) {
      if (!e || typeof e != "object")
        throw Error(Cn + "Object expected");
      var t, r, n, o = e.defaults === true, i = ["precision", 1, ct, "rounding", 0, 8, "toExpNeg", -Ht, 0, "toExpPos", 0, Ht, "maxE", 0, Ht, "minE", -Ht, 0, "modulo", 0, 9];
      for (t = 0; t < i.length; t += 3)
        if (r = i[t], o && (this[r] = Qo[r]), (n = e[r]) !== void 0)
          if (he(n) === n && n >= i[t + 1] && n <= i[t + 2])
            this[r] = n;
          else
            throw Error(pt + r + ": " + n);
      if (r = "crypto", o && (this[r] = Qo[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(fa);
          else
            this[r] = false;
        else
          throw Error(pt + r + ": " + n);
      return this;
    }
    function Oc(e) {
      return new this(e).cos();
    }
    function Fc(e) {
      return new this(e).cosh();
    }
    function wa(e) {
      var t, r, n;
      function o(i) {
        var s, a, u, l = this;
        if (!(l instanceof o))
          return new o(i);
        if (l.constructor = o, la(i)) {
          l.s = i.s, j ? !i.d || i.e > o.maxE ? (l.e = NaN, l.d = null) : i.e < o.minE ? (l.e = 0, l.d = [0]) : (l.e = i.e, l.d = i.d.slice()) : (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
          return;
        }
        if (u = typeof i, u === "number") {
          if (i === 0) {
            l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
            return;
          }
          if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
            for (s = 0, a = i; a >= 10; a /= 10)
              s++;
            j ? s > o.maxE ? (l.e = NaN, l.d = null) : s < o.minE ? (l.e = 0, l.d = [0]) : (l.e = s, l.d = [i]) : (l.e = s, l.d = [i]);
            return;
          } else if (i * 0 !== 0) {
            i || (l.s = NaN), l.e = NaN, l.d = null;
            return;
          }
          return zo(l, i.toString());
        } else if (u !== "string")
          throw Error(pt + i);
        return (a = i.charCodeAt(0)) === 45 ? (i = i.slice(1), l.s = -1) : (a === 43 && (i = i.slice(1)), l.s = 1), ma.test(i) ? zo(l, i) : gc(l, i);
      }
      if (o.prototype = S, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = Sc, o.clone = wa, o.isDecimal = la, o.abs = hc, o.acos = xc, o.acosh = bc, o.add = wc, o.asin = Ec, o.asinh = Pc, o.atan = vc, o.atanh = Ac, o.atan2 = Tc, o.cbrt = Cc, o.ceil = Mc, o.clamp = Rc, o.cos = Oc, o.cosh = Fc, o.div = kc, o.exp = Ic, o.floor = Dc, o.hypot = _c, o.ln = Nc, o.log = Lc, o.log10 = jc, o.log2 = Bc, o.max = Uc, o.min = $c, o.mod = qc, o.mul = Vc, o.pow = Kc, o.random = Gc, o.round = Jc, o.sign = Qc, o.sin = Wc, o.sinh = Hc, o.sqrt = zc, o.sub = Zc, o.sum = Yc, o.tan = Xc, o.tanh = ef, o.trunc = tf, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return o.config(e), o;
    }
    function kc(e, t) {
      return new this(e).div(t);
    }
    function Ic(e) {
      return new this(e).exp();
    }
    function Dc(e) {
      return N(e = new this(e), e.e + 1, 3);
    }
    function _c() {
      var e, t, r = new this(0);
      for (j = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return j = true, new this(1 / 0);
          r = t;
        }
      return j = true, r.sqrt();
    }
    function la(e) {
      return e instanceof Tt || e && e.toStringTag === da || false;
    }
    function Nc(e) {
      return new this(e).ln();
    }
    function Lc(e, t) {
      return new this(e).log(t);
    }
    function Bc(e) {
      return new this(e).log(2);
    }
    function jc(e) {
      return new this(e).log(10);
    }
    function Uc() {
      return ha(this, arguments, "lt");
    }
    function $c() {
      return ha(this, arguments, "gt");
    }
    function qc(e, t) {
      return new this(e).mod(t);
    }
    function Vc(e, t) {
      return new this(e).mul(t);
    }
    function Kc(e, t) {
      return new this(e).pow(t);
    }
    function Gc(e) {
      var t, r, n, o, i = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : Te(e, 1, ct), n = Math.ceil(e / L), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); i < n; )
            o = t[i], o >= 429e7 ? t[i] = crypto.getRandomValues(new Uint32Array(1))[0] : a[i++] = o % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); i < n; )
            o = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) + ((t[i + 3] & 127) << 24), o >= 214e7 ? crypto.randomBytes(4).copy(t, i) : (a.push(o % 1e7), i += 4);
          i = n / 4;
        } else
          throw Error(fa);
      else
        for (; i < n; )
          a[i++] = Math.random() * 1e7 | 0;
      for (n = a[--i], e %= L, n && e && (o = oe(10, L - e), a[i] = (n / o | 0) * o); a[i] === 0; i--)
        a.pop();
      if (i < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= L)
          a.shift();
        for (n = 1, o = a[0]; o >= 10; o /= 10)
          n++;
        n < L && (r -= L - n);
      }
      return s.e = r, s.d = a, s;
    }
    function Jc(e) {
      return N(e = new this(e), e.e + 1, this.rounding);
    }
    function Qc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Wc(e) {
      return new this(e).sin();
    }
    function Hc(e) {
      return new this(e).sinh();
    }
    function zc(e) {
      return new this(e).sqrt();
    }
    function Zc(e, t) {
      return new this(e).sub(t);
    }
    function Yc() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (j = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return j = true, N(r, this.precision, this.rounding);
    }
    function Xc(e) {
      return new this(e).tan();
    }
    function ef(e) {
      return new this(e).tanh();
    }
    function tf(e) {
      return N(e = new this(e), e.e + 1, 1);
    }
    S[Symbol.for("nodejs.util.inspect.custom")] = S.toString;
    S[Symbol.toStringTag] = "Decimal";
    var Tt = S.constructor = wa(Qo);
    vn = new Tt(vn);
    An = new Tt(An);
    var Ke = Tt;
    function Zt(e) {
      return Tt.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    g();
    c();
    f();
    d();
    m();
    var Tr = class {
      constructor(t, r, n, o, i) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = o, this.isEnum = i;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Yt(e) {
      return e instanceof Tr;
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Sn = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    g();
    c();
    f();
    d();
    m();
    var On = (e) => e;
    var Fn = { bold: On, red: On, green: On, dim: On, enabled: false };
    var Ea = { bold: st, red: $t, green: fn, dim: cn, enabled: true };
    var Xt = { write(e) {
      e.writeLine(",");
    } };
    g();
    c();
    f();
    d();
    m();
    var Ge = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    g();
    c();
    f();
    d();
    m();
    var ft = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var er = class extends ft {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Sn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Ge("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Xt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    g();
    c();
    f();
    d();
    m();
    var Pa = ": ";
    var kn = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Pa.length;
      }
      write(t) {
        let r = new Ge(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Pa).write(this.value);
      }
    };
    g();
    c();
    f();
    d();
    m();
    var ue = class e extends ft {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...o] = r, i = this.getField(n);
        if (!i)
          return;
        let s = i;
        for (let a of o) {
          let u;
          if (s.value instanceof e ? u = s.value.getField(a) : s.value instanceof er && (u = s.value.getField(Number(a))), !u)
            return;
          s = u;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var n;
        return r.length === 0 ? this : (n = this.getDeepField(r)) == null ? void 0 : n.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var n;
        return (n = this.getField(r)) == null ? void 0 : n.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let o of r) {
          if (!(n instanceof e))
            return;
          let i = n.getSubSelectionValue(o);
          if (!i)
            return;
          n = i;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let o = n;
        for (let i of r) {
          let s = o.value.getFieldValue(i);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          o = a;
        }
        return o;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if ((r == null ? void 0 : r.value) instanceof e)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if ((n == null ? void 0 : n.value) instanceof e)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        var n;
        return (n = this.getSelectionParent()) == null ? void 0 : n.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((o) => o.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Ge("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Xt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    g();
    c();
    f();
    d();
    m();
    var le = class extends ft {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Ge(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var Yo = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function In(e) {
      return new Yo(va(e));
    }
    function va(e) {
      let t = new ue();
      for (let [r, n] of Object.entries(e)) {
        let o = new kn(r, Aa(n));
        t.addField(o);
      }
      return t;
    }
    function Aa(e) {
      if (typeof e == "string")
        return new le(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new le(String(e));
      if (typeof e == "bigint")
        return new le(`${e}n`);
      if (e === null)
        return new le("null");
      if (e === void 0)
        return new le("undefined");
      if (Zt(e))
        return new le(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return w.Buffer.isBuffer(e) ? new le(`Buffer.alloc(${e.byteLength})`) : new le(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = En(e) ? e.toISOString() : "Invalid Date";
        return new le(`new Date("${t}")`);
      }
      return e instanceof Ue ? new le(`Prisma.${e._getName()}`) : Yt(e) ? new le(`prisma.${os(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? nf(e) : typeof e == "object" ? va(e) : new le(Object.prototype.toString.call(e));
    }
    function nf(e) {
      let t = new er();
      for (let r of e)
        t.addItem(Aa(r));
      return t;
    }
    function Ta(e) {
      if (e === void 0)
        return "";
      let t = In(e);
      return new Qt(0, { colors: Fn }).write(t).toString();
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Cr = "<unknown>";
    function Ca(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var o = af(n) || lf(n) || ff(n) || yf(n) || mf(n);
        return o && r.push(o), r;
      }, []);
    }
    var of = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var sf = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function af(e) {
      var t = of.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, o = sf.exec(t[2]);
      return n && o != null && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), { file: r ? null : t[2], methodName: t[1] || Cr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var uf = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function lf(e) {
      var t = uf.exec(e);
      return t ? { file: t[2], methodName: t[1] || Cr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var pf = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var cf = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function ff(e) {
      var t = pf.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = cf.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || Cr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var df = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function mf(e) {
      var t = df.exec(e);
      return t ? { file: t[3], methodName: t[1] || Cr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var gf = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function yf(e) {
      var t = gf.exec(e);
      return t ? { file: t[2], methodName: t[1] || Cr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Xo = class {
      getLocation() {
        return null;
      }
    };
    var ei = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = Ca(t).find((o) => {
          if (!o.file)
            return false;
          let i = Io(o.file);
          return i !== "<anonymous>" && !i.includes("@prisma") && !i.includes("/packages/client/src/runtime/") && !i.endsWith("/runtime/binary.js") && !i.endsWith("/runtime/library.js") && !i.endsWith("/runtime/edge.js") && !i.endsWith("/runtime/edge-esm.js") && !i.startsWith("internal/") && !o.methodName.includes("new ") && !o.methodName.includes("getCallSite") && !o.methodName.includes("Proxy.") && o.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function dt(e) {
      return e === "minimal" ? new Xo() : new ei();
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Ma = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function tr(e = {}) {
      let t = xf(e);
      return Object.entries(t).reduce((n, [o, i]) => (Ma[o] !== void 0 ? n.select[o] = { select: i } : n[o] = i, n), { select: {} });
    }
    function xf(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function Dn(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Ra(e, t) {
      let r = Dn(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: tr })(e);
    }
    g();
    c();
    f();
    d();
    m();
    function bf(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? tr({ ...r, _count: t }) : tr({ ...r, _count: { _all: true } });
    }
    function wf(e = {}) {
      return typeof e.select == "object" ? (t) => Dn(e)(t)._count : (t) => Dn(e)(t)._count._all;
    }
    function Sa(e, t) {
      return t({ action: "count", unpacker: wf(e), argsMapper: bf })(e);
    }
    g();
    c();
    f();
    d();
    m();
    function Ef(e = {}) {
      let t = tr(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function Pf(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Oa(e, t) {
      return t({ action: "groupBy", unpacker: Pf(e), argsMapper: Ef })(e);
    }
    function Fa(e, t, r) {
      if (t === "aggregate")
        return (n) => Ra(n, r);
      if (t === "count")
        return (n) => Sa(n, r);
      if (t === "groupBy")
        return (n) => Oa(n, r);
    }
    g();
    c();
    f();
    d();
    m();
    function ka(e, t) {
      let r = t.fields.filter((o) => !o.relationName), n = No(r, (o) => o.name);
      return new Proxy({}, { get(o, i) {
        if (i in o || typeof i == "symbol")
          return o[i];
        let s = n[i];
        if (s)
          return new Tr(e, i, s.type, s.isList, s.kind === "enum");
      }, ...wn(Object.keys(n)) });
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Ia = (e) => Array.isArray(e) ? e : e.split(".");
    var ti = (e, t) => Ia(t).reduce((r, n) => r && r[n], e);
    var Da = (e, t, r) => Ia(t).reduceRight((n, o, i, s) => Object.assign({}, ti(e, s.slice(0, i)), { [o]: n }), r);
    function vf(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Af(e, t, r) {
      return t === void 0 ? e != null ? e : {} : Da(t, r, e || true);
    }
    function ri(e, t, r, n, o, i) {
      let a = e._runtimeDataModel.models[t].fields.reduce((u, l) => ({ ...u, [l.name]: l }), {});
      return (u) => {
        let l = dt(e._errorFormat), p = vf(n, o), y = Af(u, i, p), h = r({ dataPath: p, callsite: l })(y), T = Tf(e, t);
        return new Proxy(h, { get(C, P) {
          if (!T.includes(P))
            return C[P];
          let I = [a[P].type, r, P], D = [p, y];
          return ri(e, ...I, ...D);
        }, ...wn([...T, ...Object.getOwnPropertyNames(h)]) });
      };
    }
    function Tf(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var ja = Oe(Js());
    g();
    c();
    f();
    d();
    m();
    Oo();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var _a = { keyword: at, entity: at, value: (e) => st(qt(e)), punctuation: qt, directive: at, function: at, variable: (e) => st(qt(e)), string: (e) => st(fn(e)), boolean: dn, number: at, comment: mn };
    var Cf = (e) => e;
    var _n = {};
    var Mf = 0;
    var U = { manual: _n.Prism && _n.Prism.manual, disableWorkerMessageHandler: _n.Prism && _n.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof Ne) {
        let t = e;
        return new Ne(t.type, U.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(U.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Mf }), e.__id;
    }, clone: function e(t, r) {
      let n, o, i = U.util.type(t);
      switch (r = r || {}, i) {
        case "Object":
          if (o = U.util.objId(t), r[o])
            return r[o];
          n = {}, r[o] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return o = U.util.objId(t), r[o] ? r[o] : (n = [], r[o] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = U.util.clone(U.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || U.languages;
      let o = n[e], i = {};
      for (let a in o)
        if (o.hasOwnProperty(a)) {
          if (a == t)
            for (let u in r)
              r.hasOwnProperty(u) && (i[u] = r[u]);
          r.hasOwnProperty(a) || (i[a] = o[a]);
        }
      let s = n[e];
      return n[e] = i, U.languages.DFS(U.languages, function(a, u) {
        u === s && a != e && (this[a] = i);
      }), i;
    }, DFS: function e(t, r, n, o) {
      o = o || {};
      let i = U.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], u = U.util.type(a);
          u === "Object" && !o[i(a)] ? (o[i(a)] = true, e(a, r, null, o)) : u === "Array" && !o[i(a)] && (o[i(a)] = true, e(a, r, s, o));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return U.hooks.run("before-tokenize", n), n.tokens = U.tokenize(n.code, n.grammar), U.hooks.run("after-tokenize", n), Ne.stringify(U.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, o, i, s) {
      for (let P in r) {
        if (!r.hasOwnProperty(P) || !r[P])
          continue;
        if (P == s)
          return;
        let R = r[P];
        R = U.util.type(R) === "Array" ? R : [R];
        for (let I = 0; I < R.length; ++I) {
          let D = R[I], F = D.inside, k = !!D.lookbehind, $ = !!D.greedy, q = 0, xe = D.alias;
          if ($ && !D.pattern.global) {
            let W = D.pattern.toString().match(/[imuy]*$/)[0];
            D.pattern = RegExp(D.pattern.source, W + "g");
          }
          D = D.pattern || D;
          for (let W = n, ee = o; W < t.length; ee += t[W].length, ++W) {
            let Me = t[W];
            if (t.length > e.length)
              return;
            if (Me instanceof Ne)
              continue;
            if ($ && W != t.length - 1) {
              D.lastIndex = ee;
              var y = D.exec(e);
              if (!y)
                break;
              var p = y.index + (k ? y[1].length : 0), h = y.index + y[0].length, a = W, u = ee;
              for (let _ = t.length; a < _ && (u < h || !t[a].type && !t[a - 1].greedy); ++a)
                u += t[a].length, p >= u && (++W, ee = u);
              if (t[W] instanceof Ne)
                continue;
              l = a - W, Me = e.slice(ee, u), y.index -= ee;
            } else {
              D.lastIndex = 0;
              var y = D.exec(Me), l = 1;
            }
            if (!y) {
              if (i)
                break;
              continue;
            }
            k && (q = y[1] ? y[1].length : 0);
            var p = y.index + q, y = y[0].slice(q), h = p + y.length, T = Me.slice(0, p), C = Me.slice(h);
            let te = [W, l];
            T && (++W, ee += T.length, te.push(T));
            let Re = new Ne(P, F ? U.tokenize(y, F) : y, xe, y, $);
            if (te.push(Re), C && te.push(C), Array.prototype.splice.apply(t, te), l != 1 && U.matchGrammar(e, t, r, W, ee, true, P), i)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let o in n)
          t[o] = n[o];
        delete t.rest;
      }
      return U.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = U.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = U.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, o; o = r[n++]; )
          o(t);
    } }, Token: Ne };
    U.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    U.languages.javascript = U.languages.extend("clike", { "class-name": [U.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    U.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    U.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: U.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: U.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: U.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: U.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    U.languages.markup && U.languages.markup.tag.addInlined("script", "javascript");
    U.languages.js = U.languages.javascript;
    U.languages.typescript = U.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    U.languages.ts = U.languages.typescript;
    function Ne(e, t, r, n, o) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!o;
    }
    Ne.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return Ne.stringify(r, t);
      }).join("") : Rf(e.type)(e.content);
    };
    function Rf(e) {
      return _a[e] || Cf;
    }
    function Na(e) {
      return Sf(e, U.languages.javascript);
    }
    function Sf(e, t) {
      return U.tokenize(e, t).map((n) => Ne.stringify(n)).join("");
    }
    g();
    c();
    f();
    d();
    m();
    var La = Oe(qs());
    function Ba(e) {
      return (0, La.default)(e);
    }
    var Nn = class e {
      static read(t) {
        let r;
        try {
          typeof $fs != "undefined" ? r = $fs.readFileSync(t, "utf-8") : r = gn.readFileSync(t, "utf-8");
        } catch (n) {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, o = [...this.lines];
        return o[n] = r(o[n]), new e(this.firstLineNumber, o);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, o) => o === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, Ba(n).split(`
`));
      }
      highlight() {
        let t = Na(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Of = { red: $t, gray: mn, dim: cn, bold: st, underline: _s, highlightSource: (e) => e.highlight() };
    var Ff = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function kf({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: o }, i) {
      var y;
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n != null ? n : false, callArguments: o };
      if (!e || typeof window != "undefined" || x.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let u = Math.max(1, a.lineNumber - 3), l = (y = Nn.read(a.fileName)) == null ? void 0 : y.slice(u, a.lineNumber), p = l == null ? void 0 : l.lineAt(a.lineNumber);
      if (l && p) {
        let h = Df(p), T = If(p);
        if (!T)
          return s;
        s.functionName = `${T.code})`, s.location = a, n || (l = l.mapLineAt(a.lineNumber, (P) => P.slice(0, T.openingBraceIndex))), l = i.highlightSource(l);
        let C = String(l.lastLineNumber).length;
        if (s.contextLines = l.mapLines((P, R) => i.gray(String(R).padStart(C)) + " " + P).mapLines((P) => i.dim(P)).prependSymbolAt(a.lineNumber, i.bold(i.red("\u2192"))), o) {
          let P = h + C + 1;
          P += 2, s.callArguments = (0, ja.default)(o, P).slice(P);
        }
      }
      return s;
    }
    function If(e) {
      let t = Object.keys(Fe.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let o = n.index + n[0].length, i = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(i, o), openingBraceIndex: o };
      }
      return null;
    }
    function Df(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function _f({ functionName: e, location: t, message: r, isPanic: n, contextLines: o, callArguments: i }, s) {
      let a = [""], u = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)), t && a.push(s.underline(Nf(t))), o) {
        a.push("");
        let l = [o.toString()];
        i && (l.push(i), l.push(s.dim(")"))), a.push(l.join("")), i && a.push("");
      } else
        a.push(""), i && a.push(i), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Nf(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function rr(e) {
      let t = e.showColors ? Of : Ff, r = kf(e, t);
      return _f(r, t);
    }
    function Ua(e, t, r, n) {
      return e === Fe.ModelAction.findFirstOrThrow || e === Fe.ModelAction.findUniqueOrThrow ? Lf(t, r, n) : n;
    }
    function Lf(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let i = rr({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new de(i, { clientVersion: t });
        }
        return await r(n).catch((i) => {
          throw i instanceof ye && i.code === "P2025" ? new He(`No ${e} found`, t) : i;
        });
      };
    }
    g();
    c();
    f();
    d();
    m();
    function Je(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Bf = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var jf = ["aggregate", "count", "groupBy"];
    function ni(e, t) {
      var o;
      let r = (o = e._extensions.getAllModelExtensions(t)) != null ? o : {}, n = [Uf(e, t), qf(e, t), Pr(r), Ee("name", () => t), Ee("$name", () => t), Ee("$parent", () => e._appliedParent)];
      return qe({}, n);
    }
    function Uf(e, t) {
      let r = Je(t), n = Object.keys(Fe.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(o) {
        let i = o, s = (u) => e._request(u);
        s = Ua(i, t, e._clientVersion, s);
        let a = (u) => (l) => {
          let p = dt(e._errorFormat);
          return e._createPrismaPromise((y) => {
            let h = { args: l, dataPath: [], action: i, model: t, clientMethod: `${r}.${o}`, jsModelName: r, transaction: y, callsite: p };
            return s({ ...h, ...u });
          });
        };
        return Bf.includes(i) ? ri(e, t, a) : $f(o) ? Fa(e, o, a) : a({});
      } };
    }
    function $f(e) {
      return jf.includes(e);
    }
    function qf(e, t) {
      return At(Ee("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ka(t, r);
      }));
    }
    g();
    c();
    f();
    d();
    m();
    function $a(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var oi = Symbol();
    function Mr(e) {
      let t = [Vf(e), Ee(oi, () => e), Ee("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Pr(r)), qe(e, t);
    }
    function Vf(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Je), n = [...new Set(t.concat(r))];
      return At({ getKeys() {
        return n;
      }, getPropertyValue(o) {
        let i = $a(o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return ni(e, i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return ni(e, o);
      }, getPropertyDescriptor(o) {
        if (!r.includes(o))
          return { enumerable: false };
      } });
    }
    function Ln(e) {
      return e[oi] ? e[oi] : e;
    }
    function qa(e) {
      if (typeof e == "function")
        return e(this);
      let t = Ln(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Mr(r);
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Va({ result: e, modelName: t, select: r, extensions: n }) {
      let o = n.getAllComputedFields(t);
      if (!o)
        return e;
      let i = [], s = [];
      for (let a of Object.values(o)) {
        if (r) {
          if (!r[a.name])
            continue;
          let u = a.needs.filter((l) => !r[l]);
          u.length > 0 && s.push(vr(u));
        }
        Kf(e, a.needs) && i.push(Gf(a, qe(e, i)));
      }
      return i.length > 0 || s.length > 0 ? qe(e, [...i, ...s]) : e;
    }
    function Kf(e, t) {
      return t.every((r) => _o(e, r));
    }
    function Gf(e, t) {
      return At(Ee(e.name, () => e.compute(t)));
    }
    g();
    c();
    f();
    d();
    m();
    function Bn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: o }) {
      var s;
      if (Array.isArray(t)) {
        for (let a = 0; a < t.length; a++)
          t[a] = Bn({ result: t[a], args: r, modelName: o, runtimeDataModel: n, visitor: e });
        return t;
      }
      let i = (s = e(t, o, r)) != null ? s : t;
      return r.include && Ka({ includeOrSelect: r.include, result: i, parentModelName: o, runtimeDataModel: n, visitor: e }), r.select && Ka({ includeOrSelect: r.select, result: i, parentModelName: o, runtimeDataModel: n, visitor: e }), i;
    }
    function Ka({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: o }) {
      for (let [i, s] of Object.entries(e)) {
        if (!s || t[i] == null)
          continue;
        let u = n.models[r].fields.find((p) => p.name === i);
        if (!u || u.kind !== "object" || !u.relationName)
          continue;
        let l = typeof s == "object" ? s : {};
        t[i] = Bn({ visitor: o, result: t[i], args: l, modelName: u.type, runtimeDataModel: n });
      }
    }
    function Ga({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !o.models[t] ? e : Bn({ result: e, args: r != null ? r : {}, modelName: t, runtimeDataModel: o, visitor: (s, a, u) => Va({ result: s, modelName: Je(a), select: u.select, extensions: n }) });
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Ja(e) {
      if (e instanceof Ae)
        return Jf(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Rr(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Rr(e[r]);
      return t;
    }
    function Jf(e) {
      return new Ae(e.strings, e.values);
    }
    function Rr(e) {
      if (typeof e != "object" || e == null || e instanceof Ue || Yt(e))
        return e;
      if (Zt(e))
        return new Ke(e.toFixed());
      if (Wt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Rr(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Rr(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Rr(e[r]);
        return t;
      }
      Pt(e, "Unknown value");
    }
    function Wa(e, t, r, n = 0) {
      return e._createPrismaPromise((o) => {
        var s, a;
        let i = t.customDataProxyFetch;
        return "transaction" in t && o !== void 0 && (((s = t.transaction) == null ? void 0 : s.kind) === "batch" && t.transaction.lock.then(), t.transaction = o), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ja((a = t.args) != null ? a : {}), __internalParams: t, query: (u, l = t) => {
          let p = l.customDataProxyFetch;
          return l.customDataProxyFetch = Ya(i, p), l.args = u, Wa(e, l, r, n + 1);
        } });
      });
    }
    function Ha(e, t) {
      let { jsModelName: r, action: n, clientMethod: o } = t, i = r ? n : o;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", i);
      return Wa(e, t, s);
    }
    function za(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Za(r, n, 0, e) : e(r);
      };
    }
    function Za(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let o = e.customDataProxyFetch, i = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: i ? { isolationLevel: i.kind === "batch" ? i.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let u = a.customDataProxyFetch;
        return a.customDataProxyFetch = Ya(o, u), Za(a, t, r + 1, n);
      } });
    }
    var Qa = (e) => e;
    function Ya(e = Qa, t = Qa) {
      return (r) => e(t(r));
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function eu(e, t, r) {
      let n = Je(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Qf({ ...e, ...Xa(t.name, e, t.result.$allModels), ...Xa(t.name, e, t.result[n]) });
    }
    function Qf(e) {
      let t = new $e(), r = (n, o) => t.getOrCreate(n, () => o.has(n) ? [n] : (o.add(n), e[n] ? e[n].needs.flatMap((i) => r(i, o)) : [n]));
      return Gt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function Xa(e, t, r) {
      return r ? Gt(r, ({ needs: n, compute: o }, i) => ({ name: i, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Wf(t, i, o) })) : {};
    }
    function Wf(e, t, r) {
      var o;
      let n = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    function tu(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let o of n.needs)
            r[o] = true;
      return r;
    }
    var jn = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new $e();
        this.modelExtensionsCache = new $e();
        this.queryCallbacksCache = new $e();
        this.clientExtensions = yr(() => {
          var t2, r2;
          return this.extension.client ? { ...(r2 = this.previous) == null ? void 0 : r2.getAllClientExtensions(), ...this.extension.client } : (t2 = this.previous) == null ? void 0 : t2.getAllClientExtensions();
        });
        this.batchCallbacks = yr(() => {
          var n, o, i;
          let t2 = (o = (n = this.previous) == null ? void 0 : n.getAllBatchQueryCallbacks()) != null ? o : [], r2 = (i = this.extension.query) == null ? void 0 : i.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var r;
          return eu((r = this.previous) == null ? void 0 : r.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var n, o;
          let r = Je(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (n = this.previous) == null ? void 0 : n.getAllModelExtensions(t) : { ...(o = this.previous) == null ? void 0 : o.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var s, a;
          let n = (a = (s = this.previous) == null ? void 0 : s.getAllQueryCallbacks(t, r)) != null ? a : [], o = [], i = this.extension.query;
          return !i || !(i[t] || i.$allModels || i[r] || i.$allOperations) ? n : (i[t] !== void 0 && (i[t][r] !== void 0 && o.push(i[t][r]), i[t].$allOperations !== void 0 && o.push(i[t].$allOperations)), t !== "$none" && i.$allModels !== void 0 && (i.$allModels[r] !== void 0 && o.push(i.$allModels[r]), i.$allModels.$allOperations !== void 0 && o.push(i.$allModels.$allOperations)), i[r] !== void 0 && o.push(i[r]), i.$allOperations !== void 0 && o.push(i.$allOperations), n.concat(o));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Un = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new jn(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new jn(t, this.head));
      }
      getAllComputedFields(t) {
        var r;
        return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var t;
        return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var r;
        return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var n, o;
        return (o = (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null ? o : [];
      }
      getAllBatchQueryCallbacks() {
        var t, r;
        return (r = (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) != null ? r : [];
      }
    };
    g();
    c();
    f();
    d();
    m();
    var ru = ve("prisma:client");
    var nu = { Vercel: "vercel", "Netlify CI": "netlify" };
    function ou({ postinstall: e, ciName: t, clientVersion: r }) {
      if (ru("checkPlatformCaching:postinstall", e), ru("checkPlatformCaching:ciName", t), e === true && t && t in nu) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${nu[t]}-build`;
        throw console.error(n), new ae(n, r);
      }
    }
    g();
    c();
    f();
    d();
    m();
    function iu(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Hf = "Cloudflare-Workers";
    var zf = "node";
    function $n() {
      var e, t, r;
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Hf ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((r = (t = globalThis.process) == null ? void 0 : t.release) == null ? void 0 : r.name) === zf ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function ii({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new ye(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new Ie(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    g();
    c();
    f();
    d();
    m();
    var qn = class {
    };
    g();
    c();
    f();
    d();
    m();
    function su(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Vn({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      var u, l;
      let o, i = Object.keys(e)[0], s = (u = e[i]) == null ? void 0 : u.url, a = (l = t[i]) == null ? void 0 : l.url;
      if (i === void 0 ? o = void 0 : a ? o = a : s != null && s.value ? o = s.value : s != null && s.fromEnvVar && (o = r[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && o === void 0)
        throw $n() === "workerd" ? new ae(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new ae(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (o === void 0)
        throw new ae("error: Missing URL environment variable, value, or override.", n);
      return o;
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Kn = class extends Error {
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var Ce = class extends Kn {
      constructor(t, r) {
        var n;
        super(t, r), this.isRetryable = (n = r.isRetryable) != null ? n : true;
      }
    };
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    function Q(e, t) {
      return { ...e, isRetryable: t };
    }
    var nr = class extends Ce {
      constructor(r) {
        super("This request must be retried", Q(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    B(nr, "ForcedRetryError");
    g();
    c();
    f();
    d();
    m();
    var Ct = class extends Ce {
      constructor(r, n) {
        super(r, Q(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    B(Ct, "InvalidDatasourceError");
    g();
    c();
    f();
    d();
    m();
    var Mt = class extends Ce {
      constructor(r, n) {
        super(r, Q(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    B(Mt, "NotImplementedYetError");
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Z = class extends Ce {
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let o = `(The request id was: ${n})`;
          this.message = this.message + " " + o;
        }
      }
    };
    var Rt = class extends Z {
      constructor(r) {
        super("Schema needs to be uploaded", Q(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    B(Rt, "SchemaMissingError");
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var si = "This request could not be understood by the server";
    var Sr = class extends Z {
      constructor(r, n, o) {
        super(n || si, Q(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        o && (this.code = o);
      }
    };
    B(Sr, "BadRequestError");
    g();
    c();
    f();
    d();
    m();
    var Or = class extends Z {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", Q(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    B(Or, "HealthcheckTimeoutError");
    g();
    c();
    f();
    d();
    m();
    var Fr = class extends Z {
      constructor(r, n, o) {
        super(n, Q(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = o;
      }
    };
    B(Fr, "EngineStartupError");
    g();
    c();
    f();
    d();
    m();
    var kr = class extends Z {
      constructor(r) {
        super("Engine version is not supported", Q(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    B(kr, "EngineVersionNotSupportedError");
    g();
    c();
    f();
    d();
    m();
    var ai = "Request timed out";
    var Ir = class extends Z {
      constructor(r, n = ai) {
        super(n, Q(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    B(Ir, "GatewayTimeoutError");
    g();
    c();
    f();
    d();
    m();
    var Zf = "Interactive transaction error";
    var Dr = class extends Z {
      constructor(r, n = Zf) {
        super(n, Q(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    B(Dr, "InteractiveTransactionError");
    g();
    c();
    f();
    d();
    m();
    var Yf = "Request parameters are invalid";
    var _r = class extends Z {
      constructor(r, n = Yf) {
        super(n, Q(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    B(_r, "InvalidRequestError");
    g();
    c();
    f();
    d();
    m();
    var ui = "Requested resource does not exist";
    var Nr = class extends Z {
      constructor(r, n = ui) {
        super(n, Q(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    B(Nr, "NotFoundError");
    g();
    c();
    f();
    d();
    m();
    var li = "Unknown server error";
    var or = class extends Z {
      constructor(r, n, o) {
        super(n || li, Q(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = o;
      }
    };
    B(or, "ServerError");
    g();
    c();
    f();
    d();
    m();
    var pi = "Unauthorized, check your connection string";
    var Lr = class extends Z {
      constructor(r, n = pi) {
        super(n, Q(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    B(Lr, "UnauthorizedError");
    g();
    c();
    f();
    d();
    m();
    var ci = "Usage exceeded, retry again later";
    var Br = class extends Z {
      constructor(r, n = ci) {
        super(n, Q(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    B(Br, "UsageExceededError");
    async function Xf(e) {
      let t;
      try {
        t = await e.text();
      } catch (r) {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch (r) {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    async function jr(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await Xf(e);
      if (n.type === "QueryEngineError")
        throw new ye(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new or(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Rt(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new kr(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: o, logs: i } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Fr(r, o, i);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: o, error_code: i } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new ae(o, t, i);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: o } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Or(r, o);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let o = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Dr(r, o[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new _r(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new Lr(r, ir(pi, n));
      if (e.status === 404)
        return new Nr(r, ir(ui, n));
      if (e.status === 429)
        throw new Br(r, ir(ci, n));
      if (e.status === 504)
        throw new Ir(r, ir(ai, n));
      if (e.status >= 500)
        throw new or(r, ir(li, n));
      if (e.status >= 400)
        throw new Sr(r, ir(si, n));
    }
    function ir(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    g();
    c();
    f();
    d();
    m();
    function au(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((o) => setTimeout(() => o(n), n));
    }
    g();
    c();
    f();
    d();
    m();
    function uu(e) {
      var r;
      if (!!((r = e.generator) != null && r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))))
        throw new ae("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    g();
    c();
    f();
    d();
    m();
    function ed(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function lu(e) {
      return new Date(ed(e));
    }
    g();
    c();
    f();
    d();
    m();
    var pu = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Ur = class extends Ce {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, Q(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    B(Ur, "RequestError");
    async function St(e, t, r = (n) => n) {
      var o;
      let n = t.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t) : await r(fi)(e, t);
      } catch (i) {
        let s = (o = i.message) != null ? o : "Unknown error";
        throw new Ur(s, { clientVersion: n });
      }
    }
    function rd(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    function nd(e) {
      return { method: e.method, headers: rd(e) };
    }
    function od(e, t) {
      return { text: () => Promise.resolve(w.Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(w.Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new di(t.headers) };
    }
    async function fi(e, t = {}) {
      let r = id("https"), n = nd(t), o = [], { origin: i } = new URL(e);
      return new Promise((s, a) => {
        var l;
        let u = r.request(e, n, (p) => {
          let { statusCode: y, headers: { location: h } } = p;
          y >= 301 && y <= 399 && h && (h.startsWith("http") === false ? s(fi(`${i}${h}`, t)) : s(fi(h, t))), p.on("data", (T) => o.push(T)), p.on("end", () => s(od(o, p))), p.on("error", a);
        });
        u.on("error", a), u.end((l = t.body) != null ? l : "");
      });
    }
    var id = typeof __require != "undefined" ? __require : () => {
    };
    var di = class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let o of n)
              this.headers.set(r, o);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        var r;
        return (r = this.headers.get(t)) != null ? r : null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, o] of this.headers)
          t.call(r, o, n, this);
      }
    };
    var sd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var cu = ve("prisma:client:dataproxyEngine");
    async function ad(e, t) {
      var s, a, u;
      let r = pu["@prisma/engines-version"], n = (s = t.clientVersion) != null ? s : "unknown";
      if (x.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return x.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [o, i] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
      if (i === void 0 && sd.test(o))
        return o;
      if (i !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [l] = (u = r.split("-")) != null ? u : [], [p, y, h] = l.split("."), T = ud(`<=${p}.${y}.${h}`), C = await St(T, { clientVersion: n });
        if (!C.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${C.status} ${C.statusText}, response body: ${await C.text() || "<empty body>"}`);
        let P = await C.text();
        cu("length of body fetched from unpkg.com", P.length);
        let R;
        try {
          R = JSON.parse(P);
        } catch (I) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", P), I;
        }
        return R.version;
      }
      throw new Mt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function fu(e, t) {
      let r = await ad(e, t);
      return cu("version", r), r;
    }
    function ud(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var du = 3;
    var mi = ve("prisma:client:dataproxyEngine");
    var gi = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: o, engineHash: i }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = o, this.engineHash = i;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let o = this.buildCaptureSettings();
        return o.length > 0 && (n["X-capture-telemetry"] = o.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var $r = class extends qn {
      constructor(t) {
        super(), uu(t), this.config = t, this.env = { ...this.config.env, ...x.env }, this.inlineSchema = t.inlineSchema, this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = this.config.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          this.host = t, this.headerBuilder = new gi({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await fu(t, this.config), mi("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        var r, n;
        (r = t == null ? void 0 : t.logs) != null && r.length && t.logs.forEach((o) => {
          switch (o.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i = typeof o.attributes.query == "string" ? o.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s] = i.split("/* traceparent");
                i = s;
              }
              this.logEmitter.emit("query", { query: i, timestamp: lu(o.timestamp), duration: Number(o.attributes.duration_ms), params: o.attributes.params, target: o.attributes.target });
            }
          }
        }), (n = t == null ? void 0 : t.traces) != null && n.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await St(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || mi("schema response status", r.status);
          let n = await jr(r, this.clientVersion);
          if (n)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: o }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: o });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: o }) {
        let i = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = su(t, n), { batchResult: a, elapsed: u } = await this.requestInternal({ body: s, customDataProxyFetch: o, interactiveTransaction: i, traceparent: r });
        return a.map((l) => "errors" in l && l.errors.length > 0 ? ii(l.errors[0], this.clientVersion) : { data: l, elapsed: u });
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: o }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: i }) => {
          let s = o ? `${o.payload.endpoint}/graphql` : await this.url("graphql");
          i(s);
          let a = await St(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: o }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || mi("graphql response status", a.status), await this.handleError(await jr(a, this.clientVersion));
          let u = await a.json(), l = u.extensions;
          if (l && this.propagateResponseExtensions(l), u.errors)
            throw u.errors.length === 1 ? ii(u.errors[0], this.config.clientVersion) : new Ie(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        } });
      }
      async transaction(t, r, n) {
        let o = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${o[t]} transaction`, callback: async ({ logHttpCall: i }) => {
          var s, a;
          if (t === "start") {
            let u = JSON.stringify({ max_wait: (s = n == null ? void 0 : n.maxWait) != null ? s : 2e3, timeout: (a = n == null ? void 0 : n.timeout) != null ? a : 5e3, isolation_level: n == null ? void 0 : n.isolationLevel }), l = await this.url("transaction/start");
            i(l);
            let p = await St(l, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: u, clientVersion: this.clientVersion });
            await this.handleError(await jr(p, this.clientVersion));
            let y = await p.json(), h = y.extensions;
            h && this.propagateResponseExtensions(h);
            let T = y.id, C = y["data-proxy"].endpoint;
            return { id: T, payload: { endpoint: C } };
          } else {
            let u = `${n.payload.endpoint}/${t}`;
            i(u);
            let l = await St(u, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await jr(l, this.clientVersion));
            let y = (await l.json()).extensions;
            y && this.propagateResponseExtensions(y);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Vn({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), o;
        try {
          o = new URL(n);
        } catch (l) {
          throw new Ct(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: i, host: s, searchParams: a } = o;
        if (i !== "prisma:")
          throw new Ct(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        let u = a.get("api_key");
        if (u === null || u.length < 1)
          throw new Ct(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return [s, u];
      }
      metrics() {
        throw new Mt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        var r;
        for (let n = 0; ; n++) {
          let o = (i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${n})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await t.callback({ logHttpCall: o });
          } catch (i) {
            if (!(i instanceof Ce) || !i.isRetryable)
              throw i;
            if (n >= du)
              throw i instanceof nr ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${n + 1}/${du} failed for ${t.actionGerund}: ${(r = i.message) != null ? r : "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let s = await au(n);
            this.logEmitter.emit("warn", { message: `Retrying after ${s}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof Rt)
          throw await this.uploadSchema(), new nr({ clientVersion: this.clientVersion, cause: t });
        if (t)
          throw t;
      }
    };
    function mu(e, t) {
      let r;
      try {
        r = Vn({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...x.env }, clientVersion: t.clientVersion });
      } catch (u) {
      }
      e.noEngine !== true && (r != null && r.startsWith("prisma://")) && gr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = cr(t.generator), o = !!(r != null && r.startsWith("prisma://") || e.noEngine), i = !!t.adapter, s = n === "library", a = n === "binary";
      if (o && i || i) {
        let u;
        throw u = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new de(u.join(`
`), { clientVersion: t.clientVersion });
      }
      return new $r(t);
    }
    g();
    c();
    f();
    d();
    m();
    function Gn({ generator: e }) {
      var t;
      return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
    }
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var wu = Oe(yi());
    g();
    c();
    f();
    d();
    m();
    function xu(e, t) {
      let r = bu(e), n = ld(r), o = cd(n);
      o ? Jn(o, t) : t.addErrorMessage(() => "Unknown error");
    }
    function bu(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? bu(t) : [t]);
    }
    function ld(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let o = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, i = t.get(o);
        i ? t.set(o, { ...n, argument: { ...n.argument, typeNames: pd(i.argument.typeNames, n.argument.typeNames) } }) : t.set(o, n);
      }
      return r.push(...t.values()), r;
    }
    function pd(e, t) {
      return [...new Set(e.concat(t))];
    }
    function cd(e) {
      return Lo(e, (t, r) => {
        let n = yu(t), o = yu(r);
        return n !== o ? n - o : hu(t) - hu(r);
      });
    }
    function yu(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function hu(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    g();
    c();
    f();
    d();
    m();
    var Ye = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    g();
    c();
    f();
    d();
    m();
    var Qn = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: o, dim: i } = n.context.colors;
          n.write(o(i(`${t}: ${r}`))).addMarginSymbol(o(i("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(Xt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Jn(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          fd(e, t);
          break;
        case "IncludeOnScalar":
          dd(e, t);
          break;
        case "EmptySelection":
          md(e, t);
          break;
        case "UnknownSelectionField":
          gd(e, t);
          break;
        case "UnknownArgument":
          yd(e, t);
          break;
        case "UnknownInputField":
          hd(e, t);
          break;
        case "RequiredArgumentMissing":
          xd(e, t);
          break;
        case "InvalidArgumentType":
          bd(e, t);
          break;
        case "InvalidArgumentValue":
          wd(e, t);
          break;
        case "ValueTooLarge":
          Ed(e, t);
          break;
        case "SomeFieldsMissing":
          Pd(e, t);
          break;
        case "TooManyFieldsGiven":
          vd(e, t);
          break;
        case "Union":
          xu(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function fd(e, t) {
      var n, o;
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof ue && ((n = r.getField("include")) == null || n.markAsError(), (o = r.getField("select")) == null || o.markAsError()), t.addErrorMessage((i) => `Please ${i.bold("either")} use ${i.green("`include`")} or ${i.green("`select`")}, but ${i.red("not both")} at the same time.`);
    }
    function dd(e, t) {
      var s, a;
      let [r, n] = Wn(e.selectionPath), o = e.outputType, i = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
      if (i && ((a = i.getField(n)) == null || a.markAsError(), o))
        for (let u of o.fields)
          u.isRelation && i.addSuggestion(new Ye(u.name, "true"));
      t.addErrorMessage((u) => {
        let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold("include")} statement`;
        return o ? l += ` on model ${u.bold(o.name)}. ${qr(u)}` : l += ".", l += `
Note that ${u.bold("include")} statements only accept relation fields.`, l;
      });
    }
    function md(e, t) {
      var i, s;
      let r = e.outputType, n = (i = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : i.value, o = (s = n == null ? void 0 : n.isEmpty()) != null ? s : false;
      n && (n.removeAllFields(), vu(n, r)), t.addErrorMessage((a) => o ? `The ${a.red("`select`")} statement for type ${a.bold(r.name)} must not be empty. ${qr(a)}` : `The ${a.red("`select`")} statement for type ${a.bold(r.name)} needs ${a.bold("at least one truthy value")}.`);
    }
    function gd(e, t) {
      var i;
      let [r, n] = Wn(e.selectionPath), o = t.arguments.getDeepSelectionParent(r);
      o && ((i = o.value.getField(n)) == null || i.markAsError(), vu(o.value, e.outputType)), t.addErrorMessage((s) => {
        let a = [`Unknown field ${s.red(`\`${n}\``)}`];
        return o && a.push(`for ${s.bold(o.kind)} statement`), a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`), a.push(qr(s)), a.join(" ");
      });
    }
    function yd(e, t) {
      var o;
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof ue && ((o = n.getField(r)) == null || o.markAsError(), Ad(n, e.arguments)), t.addErrorMessage((i) => Eu(i, r, e.arguments.map((s) => s.name)));
    }
    function hd(e, t) {
      var i;
      let [r, n] = Wn(e.argumentPath), o = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (o instanceof ue) {
        (i = o.getDeepField(e.argumentPath)) == null || i.markAsError();
        let s = o.getDeepFieldValue(r);
        s instanceof ue && Au(s, e.inputType);
      }
      t.addErrorMessage((s) => Eu(s, n, e.inputType.fields.map((a) => a.name)));
    }
    function Eu(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], o = Cd(t, r);
      return o && n.push(`Did you mean \`${e.green(o)}\`?`), r.length > 0 && n.push(qr(e)), n.join(" ");
    }
    function xd(e, t) {
      let r;
      t.addErrorMessage((u) => (r == null ? void 0 : r.value) instanceof le && r.value.text === "null" ? `Argument \`${u.green(i)}\` must not be ${u.red("null")}.` : `Argument \`${u.green(i)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof ue))
        return;
      let [o, i] = Wn(e.argumentPath), s = new Qn(), a = n.getDeepFieldValue(o);
      if (a instanceof ue)
        if (r = a.getField(i), r && a.removeField(i), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let u of e.inputTypes[0].fields)
            s.addField(u.name, u.typeNames.join(" | "));
          a.addSuggestion(new Ye(i, s).makeRequired());
        } else {
          let u = e.inputTypes.map(Pu).join(" | ");
          a.addSuggestion(new Ye(i, u).makeRequired());
        }
    }
    function Pu(e) {
      return e.kind === "list" ? `${Pu(e.elementType)}[]` : e.name;
    }
    function bd(e, t) {
      var o;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof ue && ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()), t.addErrorMessage((i) => {
        let s = Hn("or", e.argument.typeNames.map((a) => i.green(a)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${s}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function wd(e, t) {
      var o;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof ue && ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()), t.addErrorMessage((i) => {
        let s = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && s.push(`: ${e.underlyingError}`), s.push("."), e.argument.typeNames.length > 0) {
          let a = Hn("or", e.argument.typeNames.map((u) => i.green(u)));
          s.push(` Expected ${a}.`);
        }
        return s.join("");
      });
    }
    function Ed(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), o;
      if (n instanceof ue) {
        let i = n.getDeepField(e.argumentPath), s = i == null ? void 0 : i.value;
        s == null || s.markAsError(), s instanceof le && (o = s.text);
      }
      t.addErrorMessage((i) => {
        let s = ["Unable to fit value"];
        return o && s.push(i.red(o)), s.push(`into a 64-bit signed integer for field \`${i.bold(r)}\``), s.join(" ");
      });
    }
    function Pd(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof ue) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof ue && Au(o, e.inputType);
      }
      t.addErrorMessage((o) => {
        let i = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? i.push(`${o.green("at least one of")} ${Hn("or", e.constraints.requiredFields.map((s) => `\`${o.bold(s)}\``))} arguments.`) : i.push(`${o.green("at least one")} argument.`) : i.push(`${o.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), i.push(qr(o)), i.join(" ");
      });
    }
    function vd(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), o = [];
      if (n instanceof ue) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof ue && (i.markAsError(), o = Object.keys(i.getFields()));
      }
      t.addErrorMessage((i) => {
        let s = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${i.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${i.green("at most one")} argument,`) : s.push(`${i.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Hn("and", o.map((a) => i.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function vu(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Ye(r.name, "true"));
    }
    function Ad(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Ye(r.name, r.typeNames.join(" | ")));
    }
    function Au(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Ye(r.name, r.typeNames.join(" | ")));
    }
    function Wn(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function qr({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function Hn(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var Td = 3;
    function Cd(e, t) {
      let r = 1 / 0, n;
      for (let o of t) {
        let i = (0, wu.default)(e, o);
        i > Td || i < r && (r = i, n = o);
      }
      return n;
    }
    function zn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: o, clientVersion: i }) {
      let s = In(e);
      for (let y of t)
        Jn(y, s);
      let a = r === "pretty" ? Ea : Fn, u = s.renderAllMessages(a), l = new Qt(0, { colors: a }).write(s).toString(), p = rr({ message: u, callsite: n, originalMethod: o, showColors: r === "pretty", callArguments: l });
      throw new de(p, { clientVersion: i });
    }
    var Md = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Tu({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: o, callsite: i, clientMethod: s, errorFormat: a, clientVersion: u }) {
      let l = new hi({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: i, extensions: o, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: u });
      return { modelName: e, action: Md[t], query: xi(r, l) };
    }
    function xi({ select: e, include: t, ...r } = {}, n) {
      return { arguments: Mu(r, n), selection: Rd(e, t, n) };
    }
    function Rd(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Fd(e, r) : Sd(r, t);
    }
    function Sd(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && Od(r, t, e), r;
    }
    function Od(e, t, r) {
      for (let [n, o] of Object.entries(t)) {
        let i = r.findField(n);
        i && (i == null ? void 0 : i.kind) !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), o === true ? e[n] = true : typeof o == "object" && (e[n] = xi(o, r.nestSelection(n)));
      }
    }
    function Fd(e, t) {
      let r = {}, n = t.getComputedFields(), o = tu(e, n);
      for (let [i, s] of Object.entries(o)) {
        let a = t.findField(i);
        n != null && n[i] && !a || (s === true ? r[i] = true : typeof s == "object" && (r[i] = xi(s, t.nestSelection(i))));
      }
      return r;
    }
    function Cu(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (Wt(e)) {
        if (En(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Yt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return kd(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: w.Buffer.from(e).toString("base64") };
      if (Id(e))
        return e.values;
      if (Zt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ue) {
        if (e !== xn.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Dd(e))
        return e.toJSON();
      if (typeof e == "object")
        return Mu(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Mu(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let o = e[n];
        o !== void 0 && (r[n] = Cu(o, t.nestArgument(n)));
      }
      return r;
    }
    function kd(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let o = t.nestArgument(String(n)), i = e[n];
        i === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: o.getSelectionPath(), argumentPath: o.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(Cu(i, o));
      }
      return r;
    }
    function Id(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Dd(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var hi = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        var r;
        zn({ errors: [t], originalMethod: this.params.originalMethod, args: (r = this.params.rootArgs) != null ? r : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var r;
        return (r = this.model) == null ? void 0 : r.fields.find((n) => n.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    g();
    c();
    f();
    d();
    m();
    var Ru = (e) => ({ command: e });
    g();
    c();
    f();
    d();
    m();
    g();
    c();
    f();
    d();
    m();
    var Su = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    g();
    c();
    f();
    d();
    m();
    function Vr(e) {
      try {
        return Ou(e, "fast");
      } catch (t) {
        return Ou(e, "slow");
      }
    }
    function Ou(e, t) {
      return JSON.stringify(e.map((r) => _d(r, t)));
    }
    function _d(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Wt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Ke.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : w.Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Nd(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: w.Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? ku(e) : e;
    }
    function Nd(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function ku(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Fu);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Fu(e[r]);
      return t;
    }
    function Fu(e) {
      return typeof e == "bigint" ? e.toString() : ku(e);
    }
    var Ld = /^(\s*alter\s)/i;
    var Iu = ve("prisma:client");
    function bi(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Ld.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var wi = ({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", o;
      if (Array.isArray(r)) {
        let [i, ...s] = r;
        n = i, o = { values: Vr(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, o = { values: Vr(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, o = { values: Vr(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = Su(r), o = { values: Vr(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return o != null && o.values ? Iu(`prisma.${e}(${n}, ${o.values})`) : Iu(`prisma.${e}(${n})`), { query: n, parameters: o };
    };
    var Du = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new Ae(t, r);
    } };
    var _u = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    g();
    c();
    f();
    d();
    m();
    function Ei(e) {
      return function(r) {
        let n, o = (i = e) => {
          try {
            return i === void 0 || (i == null ? void 0 : i.kind) === "itx" ? n != null ? n : n = Nu(r(i)) : Nu(r(i));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(i, s) {
          return o().then(i, s);
        }, catch(i) {
          return o().catch(i);
        }, finally(i) {
          return o().finally(i);
        }, requestTransaction(i) {
          let s = o(i);
          return s.requestTransaction ? s.requestTransaction(i) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function Nu(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    g();
    c();
    f();
    d();
    m();
    var Lu = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Pi = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        var t, r;
        return (r = (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) != null ? r : Lu;
      }
    };
    function Bu(e) {
      return e.includes("tracing") ? new Pi() : Lu;
    }
    g();
    c();
    f();
    d();
    m();
    function ju(e, t = () => {
    }) {
      let r, n = new Promise((o) => r = o);
      return { then(o) {
        return --e === 0 && r(t()), o == null ? void 0 : o(n);
      } };
    }
    g();
    c();
    f();
    d();
    m();
    function Uu(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    g();
    c();
    f();
    d();
    m();
    var Zn = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    g();
    c();
    f();
    d();
    m();
    var qu = Oe(Zs());
    g();
    c();
    f();
    d();
    m();
    function Yn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    g();
    c();
    f();
    d();
    m();
    function Xn(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Xn) : typeof e == "object" ? Bd(e) ? jd(e) : Gt(e, Xn) : e;
    }
    function Bd(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function jd({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return w.Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new Ke(t);
        case "Json":
          return JSON.parse(t);
        default:
          Pt(t, "Unknown tagged value");
      }
    }
    g();
    c();
    f();
    d();
    m();
    function $u(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(vi(e.query.arguments)), t.push(vi(e.query.selection)), t.join("");
    }
    function vi(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${vi(n)})` : r;
      }).join(" ")})`;
    }
    g();
    c();
    f();
    d();
    m();
    var Ud = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Ai(e) {
      return Ud[e];
    }
    g();
    c();
    f();
    d();
    m();
    var eo = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, x.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, o) => {
          this.batches[r].push({ request: t, resolve: n, reject: o });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, o) => this.options.batchOrder(n.request, o.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let o = 0; o < r.length; o++)
                r[o].reject(n);
            else
              for (let o = 0; o < r.length; o++) {
                let i = n[o];
                i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
              }
          }).catch((n) => {
            for (let o = 0; o < r.length; o++)
              r[o].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var $d = ve("prisma:client:request_handler");
    var to = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new eo({ batchLoader: za(async ({ requests: n, customDataProxyFetch: o }) => {
          let { transaction: i, otelParentCtx: s } = n[0], a = n.map((y) => y.protocolQuery), u = this.client._tracingHelper.getTraceParent(s), l = n.some((y) => Ai(y.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: u, transaction: qd(i), containsWrite: l, customDataProxyFetch: o })).map((y, h) => {
            if (y instanceof Error)
              return y;
            try {
              return this.mapQueryEngineResult(n[h], y);
            } catch (T) {
              return T;
            }
          });
        }), singleLoader: async (n) => {
          var s;
          let o = ((s = n.transaction) == null ? void 0 : s.kind) === "itx" ? Vu(n.transaction) : void 0, i = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: o, isWrite: Ai(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, i);
        }, batchBy: (n) => {
          var o;
          return (o = n.transaction) != null && o.id ? `transaction-${n.transaction.id}` : $u(n.protocolQuery);
        }, batchOrder(n, o) {
          var i, s;
          return ((i = n.transaction) == null ? void 0 : i.kind) === "batch" && ((s = o.transaction) == null ? void 0 : s.kind) === "batch" ? n.transaction.index - o.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: o, transaction: i, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: o, transaction: i, args: s, modelName: a });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let o = n == null ? void 0 : n.data, i = n == null ? void 0 : n.elapsed, s = this.unpack(o, t, r);
        return x.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: i } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: o, args: i, modelName: s }) {
        if ($d(t), Vd(t, o) || t instanceof He)
          throw t;
        if (t instanceof ye && Kd(t)) {
          let u = Ku(t.meta);
          zn({ args: i, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let a = t.message;
        if (n && (a = rr({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), t.code) {
          let u = s ? { modelName: s, ...t.meta } : t.meta;
          throw new ye(a, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new ze(a, this.client._clientVersion);
          if (t instanceof Ie)
            throw new Ie(a, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof ae)
            throw new ae(a, this.client._clientVersion);
          if (t instanceof ze)
            throw new ze(a, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, qu.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let o = Object.values(t)[0], i = r.filter((a) => a !== "select" && a !== "include"), s = Xn(ti(o, i));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function qd(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Vu(e) };
        Pt(e, "Unknown transaction kind");
      }
    }
    function Vu(e) {
      return { id: e.id, payload: e.payload };
    }
    function Vd(e, t) {
      return Yn(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function Kd(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Ku(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Ku) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    g();
    c();
    f();
    d();
    m();
    var Gu = "5.9.1";
    var Ju = Gu;
    g();
    c();
    f();
    d();
    m();
    function Qu(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = Wu(t[n]);
        return r;
      });
    }
    function Wu({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return w.Buffer.from(t, "base64");
        case "decimal":
          return new Ke(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(Wu);
        default:
          return t;
      }
    }
    g();
    c();
    f();
    d();
    m();
    var Yu = Oe(yi());
    g();
    c();
    f();
    d();
    m();
    var Y = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    B(Y, "PrismaClientConstructorValidationError");
    var Hu = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "__internal"];
    var zu = ["pretty", "colorless", "minimal"];
    var Zu = ["info", "query", "warn", "error"];
    var Jd = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new Y(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let o = sr(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new Y(`Unknown datasource ${r} provided to PrismaClient constructor.${o}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new Y(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [o, i] of Object.entries(n)) {
              if (o !== "url")
                throw new Y(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof i != "string")
                throw new Y(`Invalid value ${JSON.stringify(i)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new Y('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Gn(t).includes("driverAdapters"))
        throw new Y('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (cr() === "binary")
        throw new Y('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new Y(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new Y(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!zu.includes(e)) {
          let t = sr(e, zu);
          throw new Y(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new Y(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !Zu.includes(r)) {
          let n = sr(r, Zu);
          throw new Y(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (o) => {
          let i = ["stdout", "event"];
          if (!i.includes(o)) {
            let s = sr(o, i);
            throw new Y(`Invalid value ${JSON.stringify(o)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [o, i] of Object.entries(r))
            if (n[o])
              n[o](i);
            else
              throw new Y(`Invalid property ${o} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new Y(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = sr(r, t);
          throw new Y(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function Xu(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Hu.includes(r)) {
          let o = sr(r, Hu);
          throw new Y(`Unknown property ${r} provided to PrismaClient constructor.${o}`);
        }
        Jd[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new Y('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function sr(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Qd(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Qd(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((o) => ({ value: o, distance: (0, Yu.default)(e, o) }));
      r.sort((o, i) => o.distance < i.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    g();
    c();
    f();
    d();
    m();
    function el(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), o = null, i = false, s = 0, a = () => {
          i || (s++, s === e.length && (i = true, o ? r(o) : t(n)));
        }, u = (l) => {
          i || (i = true, r(l));
        };
        for (let l = 0; l < e.length; l++)
          e[l].then((p) => {
            n[l] = p, a();
          }, (p) => {
            if (!Yn(p)) {
              u(p);
              return;
            }
            p.batchRequestIdx === l ? u(p) : (o || (o = p), a());
          });
      });
    }
    var mt = ve("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Wd = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Hd = Symbol.for("prisma.client.transaction.id");
    var zd = { id: 0, nextId() {
      return ++this.id;
    } };
    function nl(e) {
      class t {
        constructor(n) {
          this._middlewares = new Zn();
          this._createPrismaPromise = Ei();
          this.$extends = qa;
          var u, l, p, y, h, T, C;
          e = { ...e, ...(u = n == null ? void 0 : n.__internal) == null ? void 0 : u.configOverride }, ou(e), n && Xu(n, e);
          let o = n != null && n.adapter ? Vo(n.adapter) : void 0, i = new rl.EventEmitter().on("error", () => {
          });
          this._extensions = Un.empty(), this._previewFeatures = Gn(e), this._clientVersion = (l = e.clientVersion) != null ? l : Ju, this._activeProvider = e.activeProvider, this._tracingHelper = Bu(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Kr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Kr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = (p = e.injectableEdgeEnv) == null ? void 0 : p.call(e);
          try {
            let P = n != null ? n : {}, R = (y = P.__internal) != null ? y : {}, I = R.debug === true;
            I && ve.enable("prisma:client");
            let D = Kr.default.resolve(e.dirname, e.relativePath);
            gn.existsSync(D) || (D = e.dirname), mt("dirname", e.dirname), mt("relativePath", e.relativePath), mt("cwd", D);
            let F = R.engine || {};
            if (P.errorFormat ? this._errorFormat = P.errorFormat : x.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : x.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: D, dirname: e.dirname, enableDebugLogs: I, allowTriggerPanic: F.allowTriggerPanic, datamodelPath: Kr.default.join(e.dirname, (h = e.filename) != null ? h : "schema.prisma"), prismaPath: (T = F.binaryPath) != null ? T : void 0, engineEndpoint: F.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: P.log && Uu(P.log), logQueries: P.log && !!(typeof P.log == "string" ? P.log === "query" : P.log.find((k) => typeof k == "string" ? k === "query" : k.level === "query")), env: (C = a == null ? void 0 : a.parsed) != null ? C : {}, flags: [], getQueryEngineWasmModule: e.getQueryEngineWasmModule, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: iu(P, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: i, isBundled: e.isBundled, adapter: o }, mt("clientVersion", e.clientVersion), this._engine = mu(e, this._engineConfig), this._requestHandler = new to(this, i), P.log)
              for (let k of P.log) {
                let $ = typeof k == "string" ? k : k.emit === "stdout" ? k.level : null;
                $ && this.$on($, (q) => {
                  var xe;
                  Kt.log(`${(xe = Kt.tags[$]) != null ? xe : ""}`, q.message || q.query);
                });
              }
            this._metrics = new Jt(this._engine);
          } catch (P) {
            throw P.clientVersion = this._clientVersion, P;
          }
          return this._appliedParent = Mr(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, o) {
          n === "beforeExit" ? this._engine.onBeforeExit(o) : n && this._engineConfig.logEmitter.on(n, o);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Os();
          }
        }
        $executeRawInternal(n, o, i, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: i, transaction: n, clientMethod: o, argsMapper: wi({ clientMethod: o, activeProvider: a }), callsite: dt(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...o) {
          return this._createPrismaPromise((i) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = tl(n, o);
              return bi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(i, "$executeRaw", s, a);
            }
            throw new de("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...o) {
          return this._createPrismaPromise((i) => (bi(this._activeProvider, n, o, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(i, "$executeRawUnsafe", [n, ...o])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new de(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((o) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ru, callsite: dt(this._errorFormat), transaction: o }));
        }
        async $queryRawInternal(n, o, i, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: i, transaction: n, clientMethod: o, argsMapper: wi({ clientMethod: o, activeProvider: a }), callsite: dt(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(Qu);
        }
        $queryRaw(n, ...o) {
          return this._createPrismaPromise((i) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(i, "$queryRaw", ...tl(n, o));
            throw new de("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...o) {
          return this._createPrismaPromise((i) => this.$queryRawInternal(i, "$queryRawUnsafe", [n, ...o]));
        }
        _transactionWithArray({ promises: n, options: o }) {
          let i = zd.nextId(), s = ju(n.length), a = n.map((u, l) => {
            var h, T;
            if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let p = o == null ? void 0 : o.isolationLevel, y = { kind: "batch", id: i, index: l, isolationLevel: p, lock: s };
            return (T = (h = u.requestTransaction) == null ? void 0 : h.call(u, y)) != null ? T : u;
          });
          return el(a);
        }
        async _transactionWithCallback({ callback: n, options: o }) {
          let i = { traceparent: this._tracingHelper.getTraceParent() }, s = await this._engine.transaction("start", i, o), a;
          try {
            let u = { kind: "itx", ...s };
            a = await n(this._createItxClient(u)), await this._engine.transaction("commit", i, s);
          } catch (u) {
            throw await this._engine.transaction("rollback", i, s).catch(() => {
            }), u;
          }
          return a;
        }
        _createItxClient(n) {
          return Mr(qe(Ln(this), [Ee("_appliedParent", () => this._appliedParent._createItxClient(n)), Ee("_createPrismaPromise", () => Ei(n)), Ee(Hd, () => n.id), vr(jo)]));
        }
        $transaction(n, o) {
          let i;
          typeof n == "function" ? i = () => this._transactionWithCallback({ callback: n, options: o }) : i = () => this._transactionWithArray({ promises: n, options: o });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, i);
        }
        _request(n) {
          var l;
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let o = (l = n.middlewareArgsMapper) != null ? l : Wd, i = { args: o.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: i.action, model: i.model, name: i.model ? `${i.model}.${i.action}` : i.action } } }, a = -1, u = async (p) => {
            let y = this._middlewares.get(++a);
            if (y)
              return this._tracingHelper.runInChildSpan(s.middleware, (I) => y(p, (D) => (I == null || I.end(), u(D))));
            let { runInTransaction: h, args: T, ...C } = p, P = { ...n, ...C };
            T && (P.args = o.middlewareArgsToRequestArgs(T)), n.transaction !== void 0 && h === false && delete P.transaction;
            let R = await Ha(this, P);
            return P.model ? Ga({ result: R, modelName: P.model, args: P.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : R;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => u(i));
        }
        async _executeRequest({ args: n, clientMethod: o, dataPath: i, callsite: s, action: a, model: u, argsMapper: l, transaction: p, unpacker: y, otelParentCtx: h, customDataProxyFetch: T }) {
          try {
            n = l ? l(n) : n;
            let C = { name: "serialize" }, P = this._tracingHelper.runInChildSpan(C, () => Tu({ modelName: u, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: o, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
            return ve.enabled("prisma:client") && (mt("Prisma Client call:"), mt(`prisma.${o}(${Ta(n)})`), mt("Generated request:"), mt(JSON.stringify(P, null, 2) + `
`)), (p == null ? void 0 : p.kind) === "batch" && await p.lock, this._requestHandler.request({ protocolQuery: P, modelName: u, action: a, clientMethod: o, dataPath: i, callsite: s, args: n, extensions: this._extensions, transaction: p, unpacker: y, otelParentCtx: h, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: T });
          } catch (C) {
            throw C.clientVersion = this._clientVersion, C;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new de("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          var o;
          return !!((o = this._engineConfig.previewFeatures) != null && o.includes(n));
        }
      }
      return t;
    }
    function tl(e, t) {
      return Zd(e) ? [new Ae(e, t), Du] : [e, _u];
    }
    function Zd(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    g();
    c();
    f();
    d();
    m();
    var Yd = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function ol(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Yd.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    g();
    c();
    f();
    d();
    m();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/.prisma/client/edge.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      detectRuntime: detectRuntime2
    } = require_edge();
    var Prisma2 = {};
    exports.Prisma = Prisma2;
    exports.$Enums = {};
    Prisma2.prismaVersion = {
      client: "5.9.1",
      engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
    };
    Prisma2.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma2.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma2.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma2.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma2.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma2.NotFoundError = NotFoundError2;
    Prisma2.Decimal = Decimal2;
    Prisma2.sql = sqltag2;
    Prisma2.empty = empty2;
    Prisma2.join = join2;
    Prisma2.raw = raw3;
    Prisma2.validator = Public2.validator;
    Prisma2.getExtensionContext = Extensions2.getExtensionContext;
    Prisma2.defineExtension = Extensions2.defineExtension;
    Prisma2.DbNull = objectEnumValues2.instances.DbNull;
    Prisma2.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma2.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma2.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      email: "email",
      gatewayId: "gatewayId",
      isEmailVerified: "isEmailVerified",
      accessLevel: "accessLevel",
      password: "password",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.AccessLevel = exports.$Enums.AccessLevel = {
      self: "self",
      other: "other"
    };
    exports.Prisma.ModelName = {
      User: "User"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/home/theryston/Projects/jsx-mail/node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "debian-openssl-3.0.x",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../../../../apps/api/.env"
      },
      "relativePath": "../../../../../../apps/api/prisma",
      "clientVersion": "5.9.1",
      "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpCn0KCmVudW0gQWNjZXNzTGV2ZWwgewogIHNlbGYKICBvdGhlcgp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICAgICAgICAgIFN0cmluZwogIGVtYWlsICAgICAgICAgICAgIFN0cmluZyAgICAgIEB1bmlxdWUKICBnYXRld2F5SWQgICAgICAgICBTdHJpbmc/ICAgICBAbWFwKCJnYXRld2F5X2lkIikKICBpc0VtYWlsVmVyaWZpZWQgICBCb29sZWFuICAgICBAbWFwKCJpc19lbWFpbF92ZXJpZmllZCIpIEBkZWZhdWx0KGZhbHNlKQogIGFjY2Vzc0xldmVsICAgICAgIEFjY2Vzc0xldmVsIEBtYXAoImFjY2Vzc19sZXZlbCIpIEBkZWZhdWx0KHNlbGYpCiAgcGFzc3dvcmQgICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgICAgICAgRGF0ZVRpbWUgICAgQG1hcCgiY3JlYXRlZF9hdCIpIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgICAgIERhdGVUaW1lICAgIEBtYXAoInVwZGF0ZWRfYXQiKSBAdXBkYXRlZEF0CiAgZGVsZXRlZEF0ICAgICAgICAgRGF0ZVRpbWU/ICAgQG1hcCgiZGVsZXRlZF9hdCIpCgogIEBAbWFwKCJ1c2VycyIpCn0K",
      "inlineSchemaHash": "8a3f2691d312c0808c28e01c4d00057c08330de57c9f7042a8fde20570f9b47d",
      "noEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"users","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"gatewayId","dbName":"gateway_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"isEmailVerified","dbName":"is_email_verified","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"accessLevel","dbName":"access_level","kind":"enum","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"AccessLevel","default":"self","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"deletedAt","dbName":"deleted_at","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"AccessLevel":{"values":[{"name":"self","dbName":null},{"name":"other","dbName":null}],"dbName":null}},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.getQueryEngineWasmModule = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient2 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma2);
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client/edge.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.9.1_prisma@5.9.1/node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: () => Prisma2,
      PrismaClient: () => PrismaClient2,
      default: () => default_index_default
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
    };
    var version = "5.9.1";
    var clientVersion = version;
    var PrismaClient2 = class {
      constructor() {
        throw new Error(
          `@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`
        );
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    function getExtensionContext(that) {
      return that;
    }
    var Prisma2 = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma: Prisma2 };
  }
});

// ../../node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist/bcrypt.js
var require_bcrypt = __commonJS({
  "../../node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/dist/bcrypt.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(global2, factory) {
      if (typeof define === "function" && define["amd"])
        define([], factory);
      else if (typeof __require === "function" && typeof module === "object" && module && module["exports"])
        module["exports"] = factory();
      else
        (global2["dcodeIO"] = global2["dcodeIO"] || {})["bcrypt"] = factory();
    })(exports, function() {
      "use strict";
      var bcrypt2 = {};
      var randomFallback = null;
      function random(len) {
        if (typeof module !== "undefined" && module && module["exports"])
          try {
            return __require("crypto")["randomBytes"](len);
          } catch (e) {
          }
        try {
          var a;
          (self["crypto"] || self["msCrypto"])["getRandomValues"](a = new Uint32Array(len));
          return Array.prototype.slice.call(a);
        } catch (e) {
        }
        if (!randomFallback)
          throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
        return randomFallback(len);
      }
      var randomAvailable = false;
      try {
        random(1);
        randomAvailable = true;
      } catch (e) {
      }
      randomFallback = null;
      bcrypt2.setRandomFallback = function(random2) {
        randomFallback = random2;
      };
      bcrypt2.genSaltSync = function(rounds, seed_length) {
        rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof rounds !== "number")
          throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
        if (rounds < 4)
          rounds = 4;
        else if (rounds > 31)
          rounds = 31;
        var salt = [];
        salt.push("$2a$");
        if (rounds < 10)
          salt.push("0");
        salt.push(rounds.toString());
        salt.push("$");
        salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
        return salt.join("");
      };
      bcrypt2.genSalt = function(rounds, seed_length, callback) {
        if (typeof seed_length === "function")
          callback = seed_length, seed_length = void 0;
        if (typeof rounds === "function")
          callback = rounds, rounds = void 0;
        if (typeof rounds === "undefined")
          rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
        else if (typeof rounds !== "number")
          throw Error("illegal arguments: " + typeof rounds);
        function _async(callback2) {
          nextTick(function() {
            try {
              callback2(null, bcrypt2.genSaltSync(rounds));
            } catch (err) {
              callback2(err);
            }
          });
        }
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt2.hashSync = function(s, salt) {
        if (typeof salt === "undefined")
          salt = GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof salt === "number")
          salt = bcrypt2.genSaltSync(salt);
        if (typeof s !== "string" || typeof salt !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof salt);
        return _hash(s, salt);
      };
      bcrypt2.hash = function(s, salt, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s === "string" && typeof salt === "number")
            bcrypt2.genSalt(salt, function(err, salt2) {
              _hash(s, salt2, callback2, progressCallback);
            });
          else if (typeof s === "string" && typeof salt === "string")
            _hash(s, salt, callback2, progressCallback);
          else
            nextTick(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof salt)));
        }
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      function safeStringCompare(known, unknown) {
        var right = 0, wrong = 0;
        for (var i = 0, k = known.length; i < k; ++i) {
          if (known.charCodeAt(i) === unknown.charCodeAt(i))
            ++right;
          else
            ++wrong;
        }
        if (right < 0)
          return false;
        return wrong === 0;
      }
      bcrypt2.compareSync = function(s, hash2) {
        if (typeof s !== "string" || typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof hash2);
        if (hash2.length !== 60)
          return false;
        return safeStringCompare(bcrypt2.hashSync(s, hash2.substr(0, hash2.length - 31)), hash2);
      };
      bcrypt2.compare = function(s, hash2, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s !== "string" || typeof hash2 !== "string") {
            nextTick(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof hash2)));
            return;
          }
          if (hash2.length !== 60) {
            nextTick(callback2.bind(this, null, false));
            return;
          }
          bcrypt2.hash(s, hash2.substr(0, 29), function(err, comp) {
            if (err)
              callback2(err);
            else
              callback2(null, safeStringCompare(comp, hash2));
          }, progressCallback);
        }
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt2.getRounds = function(hash2) {
        if (typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof hash2);
        return parseInt(hash2.split("$")[2], 10);
      };
      bcrypt2.getSalt = function(hash2) {
        if (typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof hash2);
        if (hash2.length !== 60)
          throw Error("Illegal hash length: " + hash2.length + " != 60");
        return hash2.substring(0, 29);
      };
      var nextTick = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
      function stringToBytes(str) {
        var out = [], i = 0;
        utfx.encodeUTF16toUTF8(function() {
          if (i >= str.length)
            return null;
          return str.charCodeAt(i++);
        }, function(b) {
          out.push(b);
        });
        return out;
      }
      var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
      var BASE64_INDEX = [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        1,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        -1,
        -1,
        -1,
        -1,
        -1
      ];
      var stringFromCharCode = String.fromCharCode;
      function base64_encode(b, len) {
        var off = 0, rs = [], c1, c2;
        if (len <= 0 || len > b.length)
          throw Error("Illegal len: " + len);
        while (off < len) {
          c1 = b[off++] & 255;
          rs.push(BASE64_CODE[c1 >> 2 & 63]);
          c1 = (c1 & 3) << 4;
          if (off >= len) {
            rs.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off++] & 255;
          c1 |= c2 >> 4 & 15;
          rs.push(BASE64_CODE[c1 & 63]);
          c1 = (c2 & 15) << 2;
          if (off >= len) {
            rs.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off++] & 255;
          c1 |= c2 >> 6 & 3;
          rs.push(BASE64_CODE[c1 & 63]);
          rs.push(BASE64_CODE[c2 & 63]);
        }
        return rs.join("");
      }
      function base64_decode(s, len) {
        var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
        if (len <= 0)
          throw Error("Illegal len: " + len);
        while (off < slen - 1 && olen < len) {
          code = s.charCodeAt(off++);
          c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          code = s.charCodeAt(off++);
          c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c1 == -1 || c2 == -1)
            break;
          o = c1 << 2 >>> 0;
          o |= (c2 & 48) >> 4;
          rs.push(stringFromCharCode(o));
          if (++olen >= len || off >= slen)
            break;
          code = s.charCodeAt(off++);
          c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c3 == -1)
            break;
          o = (c2 & 15) << 4 >>> 0;
          o |= (c3 & 60) >> 2;
          rs.push(stringFromCharCode(o));
          if (++olen >= len || off >= slen)
            break;
          code = s.charCodeAt(off++);
          c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          o = (c3 & 3) << 6 >>> 0;
          o |= c4;
          rs.push(stringFromCharCode(o));
          ++olen;
        }
        var res = [];
        for (off = 0; off < olen; off++)
          res.push(rs[off].charCodeAt(0));
        return res;
      }
      var utfx = function() {
        "use strict";
        var utfx2 = {};
        utfx2.MAX_CODEPOINT = 1114111;
        utfx2.encodeUTF8 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = function() {
              return null;
            };
          while (cp !== null || (cp = src()) !== null) {
            if (cp < 128)
              dst(cp & 127);
            else if (cp < 2048)
              dst(cp >> 6 & 31 | 192), dst(cp & 63 | 128);
            else if (cp < 65536)
              dst(cp >> 12 & 15 | 224), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            else
              dst(cp >> 18 & 7 | 240), dst(cp >> 12 & 63 | 128), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            cp = null;
          }
        };
        utfx2.decodeUTF8 = function(src, dst) {
          var a, b, c, d, fail = function(b2) {
            b2 = b2.slice(0, b2.indexOf(null));
            var err = Error(b2.toString());
            err.name = "TruncatedError";
            err["bytes"] = b2;
            throw err;
          };
          while ((a = src()) !== null) {
            if ((a & 128) === 0)
              dst(a);
            else if ((a & 224) === 192)
              (b = src()) === null && fail([a, b]), dst((a & 31) << 6 | b & 63);
            else if ((a & 240) === 224)
              ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 15) << 12 | (b & 63) << 6 | c & 63);
            else if ((a & 248) === 240)
              ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63);
            else
              throw RangeError("Illegal starting byte: " + a);
          }
        };
        utfx2.UTF16toUTF8 = function(src, dst) {
          var c1, c2 = null;
          while (true) {
            if ((c1 = c2 !== null ? c2 : src()) === null)
              break;
            if (c1 >= 55296 && c1 <= 57343) {
              if ((c2 = src()) !== null) {
                if (c2 >= 56320 && c2 <= 57343) {
                  dst((c1 - 55296) * 1024 + c2 - 56320 + 65536);
                  c2 = null;
                  continue;
                }
              }
            }
            dst(c1);
          }
          if (c2 !== null)
            dst(c2);
        };
        utfx2.UTF8toUTF16 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = function() {
              return null;
            };
          while (cp !== null || (cp = src()) !== null) {
            if (cp <= 65535)
              dst(cp);
            else
              cp -= 65536, dst((cp >> 10) + 55296), dst(cp % 1024 + 56320);
            cp = null;
          }
        };
        utfx2.encodeUTF16toUTF8 = function(src, dst) {
          utfx2.UTF16toUTF8(src, function(cp) {
            utfx2.encodeUTF8(cp, dst);
          });
        };
        utfx2.decodeUTF8toUTF16 = function(src, dst) {
          utfx2.decodeUTF8(src, function(cp) {
            utfx2.UTF8toUTF16(cp, dst);
          });
        };
        utfx2.calculateCodePoint = function(cp) {
          return cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
        };
        utfx2.calculateUTF8 = function(src) {
          var cp, l = 0;
          while ((cp = src()) !== null)
            l += utfx2.calculateCodePoint(cp);
          return l;
        };
        utfx2.calculateUTF16asUTF8 = function(src) {
          var n = 0, l = 0;
          utfx2.UTF16toUTF8(src, function(cp) {
            ++n;
            l += utfx2.calculateCodePoint(cp);
          });
          return [n, l];
        };
        return utfx2;
      }();
      Date.now = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      var BCRYPT_SALT_LEN = 16;
      var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
      var BLOWFISH_NUM_ROUNDS = 16;
      var MAX_EXECUTION_TIME = 100;
      var P_ORIG = [
        608135816,
        2242054355,
        320440878,
        57701188,
        2752067618,
        698298832,
        137296536,
        3964562569,
        1160258022,
        953160567,
        3193202383,
        887688300,
        3232508343,
        3380367581,
        1065670069,
        3041331479,
        2450970073,
        2306472731
      ];
      var S_ORIG = [
        3509652390,
        2564797868,
        805139163,
        3491422135,
        3101798381,
        1780907670,
        3128725573,
        4046225305,
        614570311,
        3012652279,
        134345442,
        2240740374,
        1667834072,
        1901547113,
        2757295779,
        4103290238,
        227898511,
        1921955416,
        1904987480,
        2182433518,
        2069144605,
        3260701109,
        2620446009,
        720527379,
        3318853667,
        677414384,
        3393288472,
        3101374703,
        2390351024,
        1614419982,
        1822297739,
        2954791486,
        3608508353,
        3174124327,
        2024746970,
        1432378464,
        3864339955,
        2857741204,
        1464375394,
        1676153920,
        1439316330,
        715854006,
        3033291828,
        289532110,
        2706671279,
        2087905683,
        3018724369,
        1668267050,
        732546397,
        1947742710,
        3462151702,
        2609353502,
        2950085171,
        1814351708,
        2050118529,
        680887927,
        999245976,
        1800124847,
        3300911131,
        1713906067,
        1641548236,
        4213287313,
        1216130144,
        1575780402,
        4018429277,
        3917837745,
        3693486850,
        3949271944,
        596196993,
        3549867205,
        258830323,
        2213823033,
        772490370,
        2760122372,
        1774776394,
        2652871518,
        566650946,
        4142492826,
        1728879713,
        2882767088,
        1783734482,
        3629395816,
        2517608232,
        2874225571,
        1861159788,
        326777828,
        3124490320,
        2130389656,
        2716951837,
        967770486,
        1724537150,
        2185432712,
        2364442137,
        1164943284,
        2105845187,
        998989502,
        3765401048,
        2244026483,
        1075463327,
        1455516326,
        1322494562,
        910128902,
        469688178,
        1117454909,
        936433444,
        3490320968,
        3675253459,
        1240580251,
        122909385,
        2157517691,
        634681816,
        4142456567,
        3825094682,
        3061402683,
        2540495037,
        79693498,
        3249098678,
        1084186820,
        1583128258,
        426386531,
        1761308591,
        1047286709,
        322548459,
        995290223,
        1845252383,
        2603652396,
        3431023940,
        2942221577,
        3202600964,
        3727903485,
        1712269319,
        422464435,
        3234572375,
        1170764815,
        3523960633,
        3117677531,
        1434042557,
        442511882,
        3600875718,
        1076654713,
        1738483198,
        4213154764,
        2393238008,
        3677496056,
        1014306527,
        4251020053,
        793779912,
        2902807211,
        842905082,
        4246964064,
        1395751752,
        1040244610,
        2656851899,
        3396308128,
        445077038,
        3742853595,
        3577915638,
        679411651,
        2892444358,
        2354009459,
        1767581616,
        3150600392,
        3791627101,
        3102740896,
        284835224,
        4246832056,
        1258075500,
        768725851,
        2589189241,
        3069724005,
        3532540348,
        1274779536,
        3789419226,
        2764799539,
        1660621633,
        3471099624,
        4011903706,
        913787905,
        3497959166,
        737222580,
        2514213453,
        2928710040,
        3937242737,
        1804850592,
        3499020752,
        2949064160,
        2386320175,
        2390070455,
        2415321851,
        4061277028,
        2290661394,
        2416832540,
        1336762016,
        1754252060,
        3520065937,
        3014181293,
        791618072,
        3188594551,
        3933548030,
        2332172193,
        3852520463,
        3043980520,
        413987798,
        3465142937,
        3030929376,
        4245938359,
        2093235073,
        3534596313,
        375366246,
        2157278981,
        2479649556,
        555357303,
        3870105701,
        2008414854,
        3344188149,
        4221384143,
        3956125452,
        2067696032,
        3594591187,
        2921233993,
        2428461,
        544322398,
        577241275,
        1471733935,
        610547355,
        4027169054,
        1432588573,
        1507829418,
        2025931657,
        3646575487,
        545086370,
        48609733,
        2200306550,
        1653985193,
        298326376,
        1316178497,
        3007786442,
        2064951626,
        458293330,
        2589141269,
        3591329599,
        3164325604,
        727753846,
        2179363840,
        146436021,
        1461446943,
        4069977195,
        705550613,
        3059967265,
        3887724982,
        4281599278,
        3313849956,
        1404054877,
        2845806497,
        146425753,
        1854211946,
        1266315497,
        3048417604,
        3681880366,
        3289982499,
        290971e4,
        1235738493,
        2632868024,
        2414719590,
        3970600049,
        1771706367,
        1449415276,
        3266420449,
        422970021,
        1963543593,
        2690192192,
        3826793022,
        1062508698,
        1531092325,
        1804592342,
        2583117782,
        2714934279,
        4024971509,
        1294809318,
        4028980673,
        1289560198,
        2221992742,
        1669523910,
        35572830,
        157838143,
        1052438473,
        1016535060,
        1802137761,
        1753167236,
        1386275462,
        3080475397,
        2857371447,
        1040679964,
        2145300060,
        2390574316,
        1461121720,
        2956646967,
        4031777805,
        4028374788,
        33600511,
        2920084762,
        1018524850,
        629373528,
        3691585981,
        3515945977,
        2091462646,
        2486323059,
        586499841,
        988145025,
        935516892,
        3367335476,
        2599673255,
        2839830854,
        265290510,
        3972581182,
        2759138881,
        3795373465,
        1005194799,
        847297441,
        406762289,
        1314163512,
        1332590856,
        1866599683,
        4127851711,
        750260880,
        613907577,
        1450815602,
        3165620655,
        3734664991,
        3650291728,
        3012275730,
        3704569646,
        1427272223,
        778793252,
        1343938022,
        2676280711,
        2052605720,
        1946737175,
        3164576444,
        3914038668,
        3967478842,
        3682934266,
        1661551462,
        3294938066,
        4011595847,
        840292616,
        3712170807,
        616741398,
        312560963,
        711312465,
        1351876610,
        322626781,
        1910503582,
        271666773,
        2175563734,
        1594956187,
        70604529,
        3617834859,
        1007753275,
        1495573769,
        4069517037,
        2549218298,
        2663038764,
        504708206,
        2263041392,
        3941167025,
        2249088522,
        1514023603,
        1998579484,
        1312622330,
        694541497,
        2582060303,
        2151582166,
        1382467621,
        776784248,
        2618340202,
        3323268794,
        2497899128,
        2784771155,
        503983604,
        4076293799,
        907881277,
        423175695,
        432175456,
        1378068232,
        4145222326,
        3954048622,
        3938656102,
        3820766613,
        2793130115,
        2977904593,
        26017576,
        3274890735,
        3194772133,
        1700274565,
        1756076034,
        4006520079,
        3677328699,
        720338349,
        1533947780,
        354530856,
        688349552,
        3973924725,
        1637815568,
        332179504,
        3949051286,
        53804574,
        2852348879,
        3044236432,
        1282449977,
        3583942155,
        3416972820,
        4006381244,
        1617046695,
        2628476075,
        3002303598,
        1686838959,
        431878346,
        2686675385,
        1700445008,
        1080580658,
        1009431731,
        832498133,
        3223435511,
        2605976345,
        2271191193,
        2516031870,
        1648197032,
        4164389018,
        2548247927,
        300782431,
        375919233,
        238389289,
        3353747414,
        2531188641,
        2019080857,
        1475708069,
        455242339,
        2609103871,
        448939670,
        3451063019,
        1395535956,
        2413381860,
        1841049896,
        1491858159,
        885456874,
        4264095073,
        4001119347,
        1565136089,
        3898914787,
        1108368660,
        540939232,
        1173283510,
        2745871338,
        3681308437,
        4207628240,
        3343053890,
        4016749493,
        1699691293,
        1103962373,
        3625875870,
        2256883143,
        3830138730,
        1031889488,
        3479347698,
        1535977030,
        4236805024,
        3251091107,
        2132092099,
        1774941330,
        1199868427,
        1452454533,
        157007616,
        2904115357,
        342012276,
        595725824,
        1480756522,
        206960106,
        497939518,
        591360097,
        863170706,
        2375253569,
        3596610801,
        1814182875,
        2094937945,
        3421402208,
        1082520231,
        3463918190,
        2785509508,
        435703966,
        3908032597,
        1641649973,
        2842273706,
        3305899714,
        1510255612,
        2148256476,
        2655287854,
        3276092548,
        4258621189,
        236887753,
        3681803219,
        274041037,
        1734335097,
        3815195456,
        3317970021,
        1899903192,
        1026095262,
        4050517792,
        356393447,
        2410691914,
        3873677099,
        3682840055,
        3913112168,
        2491498743,
        4132185628,
        2489919796,
        1091903735,
        1979897079,
        3170134830,
        3567386728,
        3557303409,
        857797738,
        1136121015,
        1342202287,
        507115054,
        2535736646,
        337727348,
        3213592640,
        1301675037,
        2528481711,
        1895095763,
        1721773893,
        3216771564,
        62756741,
        2142006736,
        835421444,
        2531993523,
        1442658625,
        3659876326,
        2882144922,
        676362277,
        1392781812,
        170690266,
        3921047035,
        1759253602,
        3611846912,
        1745797284,
        664899054,
        1329594018,
        3901205900,
        3045908486,
        2062866102,
        2865634940,
        3543621612,
        3464012697,
        1080764994,
        553557557,
        3656615353,
        3996768171,
        991055499,
        499776247,
        1265440854,
        648242737,
        3940784050,
        980351604,
        3713745714,
        1749149687,
        3396870395,
        4211799374,
        3640570775,
        1161844396,
        3125318951,
        1431517754,
        545492359,
        4268468663,
        3499529547,
        1437099964,
        2702547544,
        3433638243,
        2581715763,
        2787789398,
        1060185593,
        1593081372,
        2418618748,
        4260947970,
        69676912,
        2159744348,
        86519011,
        2512459080,
        3838209314,
        1220612927,
        3339683548,
        133810670,
        1090789135,
        1078426020,
        1569222167,
        845107691,
        3583754449,
        4072456591,
        1091646820,
        628848692,
        1613405280,
        3757631651,
        526609435,
        236106946,
        48312990,
        2942717905,
        3402727701,
        1797494240,
        859738849,
        992217954,
        4005476642,
        2243076622,
        3870952857,
        3732016268,
        765654824,
        3490871365,
        2511836413,
        1685915746,
        3888969200,
        1414112111,
        2273134842,
        3281911079,
        4080962846,
        172450625,
        2569994100,
        980381355,
        4109958455,
        2819808352,
        2716589560,
        2568741196,
        3681446669,
        3329971472,
        1835478071,
        660984891,
        3704678404,
        4045999559,
        3422617507,
        3040415634,
        1762651403,
        1719377915,
        3470491036,
        2693910283,
        3642056355,
        3138596744,
        1364962596,
        2073328063,
        1983633131,
        926494387,
        3423689081,
        2150032023,
        4096667949,
        1749200295,
        3328846651,
        309677260,
        2016342300,
        1779581495,
        3079819751,
        111262694,
        1274766160,
        443224088,
        298511866,
        1025883608,
        3806446537,
        1145181785,
        168956806,
        3641502830,
        3584813610,
        1689216846,
        3666258015,
        3200248200,
        1692713982,
        2646376535,
        4042768518,
        1618508792,
        1610833997,
        3523052358,
        4130873264,
        2001055236,
        3610705100,
        2202168115,
        4028541809,
        2961195399,
        1006657119,
        2006996926,
        3186142756,
        1430667929,
        3210227297,
        1314452623,
        4074634658,
        4101304120,
        2273951170,
        1399257539,
        3367210612,
        3027628629,
        1190975929,
        2062231137,
        2333990788,
        2221543033,
        2438960610,
        1181637006,
        548689776,
        2362791313,
        3372408396,
        3104550113,
        3145860560,
        296247880,
        1970579870,
        3078560182,
        3769228297,
        1714227617,
        3291629107,
        3898220290,
        166772364,
        1251581989,
        493813264,
        448347421,
        195405023,
        2709975567,
        677966185,
        3703036547,
        1463355134,
        2715995803,
        1338867538,
        1343315457,
        2802222074,
        2684532164,
        233230375,
        2599980071,
        2000651841,
        3277868038,
        1638401717,
        4028070440,
        3237316320,
        6314154,
        819756386,
        300326615,
        590932579,
        1405279636,
        3267499572,
        3150704214,
        2428286686,
        3959192993,
        3461946742,
        1862657033,
        1266418056,
        963775037,
        2089974820,
        2263052895,
        1917689273,
        448879540,
        3550394620,
        3981727096,
        150775221,
        3627908307,
        1303187396,
        508620638,
        2975983352,
        2726630617,
        1817252668,
        1876281319,
        1457606340,
        908771278,
        3720792119,
        3617206836,
        2455994898,
        1729034894,
        1080033504,
        976866871,
        3556439503,
        2881648439,
        1522871579,
        1555064734,
        1336096578,
        3548522304,
        2579274686,
        3574697629,
        3205460757,
        3593280638,
        3338716283,
        3079412587,
        564236357,
        2993598910,
        1781952180,
        1464380207,
        3163844217,
        3332601554,
        1699332808,
        1393555694,
        1183702653,
        3581086237,
        1288719814,
        691649499,
        2847557200,
        2895455976,
        3193889540,
        2717570544,
        1781354906,
        1676643554,
        2592534050,
        3230253752,
        1126444790,
        2770207658,
        2633158820,
        2210423226,
        2615765581,
        2414155088,
        3127139286,
        673620729,
        2805611233,
        1269405062,
        4015350505,
        3341807571,
        4149409754,
        1057255273,
        2012875353,
        2162469141,
        2276492801,
        2601117357,
        993977747,
        3918593370,
        2654263191,
        753973209,
        36408145,
        2530585658,
        25011837,
        3520020182,
        2088578344,
        530523599,
        2918365339,
        1524020338,
        1518925132,
        3760827505,
        3759777254,
        1202760957,
        3985898139,
        3906192525,
        674977740,
        4174734889,
        2031300136,
        2019492241,
        3983892565,
        4153806404,
        3822280332,
        352677332,
        2297720250,
        60907813,
        90501309,
        3286998549,
        1016092578,
        2535922412,
        2839152426,
        457141659,
        509813237,
        4120667899,
        652014361,
        1966332200,
        2975202805,
        55981186,
        2327461051,
        676427537,
        3255491064,
        2882294119,
        3433927263,
        1307055953,
        942726286,
        933058658,
        2468411793,
        3933900994,
        4215176142,
        1361170020,
        2001714738,
        2830558078,
        3274259782,
        1222529897,
        1679025792,
        2729314320,
        3714953764,
        1770335741,
        151462246,
        3013232138,
        1682292957,
        1483529935,
        471910574,
        1539241949,
        458788160,
        3436315007,
        1807016891,
        3718408830,
        978976581,
        1043663428,
        3165965781,
        1927990952,
        4200891579,
        2372276910,
        3208408903,
        3533431907,
        1412390302,
        2931980059,
        4132332400,
        1947078029,
        3881505623,
        4168226417,
        2941484381,
        1077988104,
        1320477388,
        886195818,
        18198404,
        3786409e3,
        2509781533,
        112762804,
        3463356488,
        1866414978,
        891333506,
        18488651,
        661792760,
        1628790961,
        3885187036,
        3141171499,
        876946877,
        2693282273,
        1372485963,
        791857591,
        2686433993,
        3759982718,
        3167212022,
        3472953795,
        2716379847,
        445679433,
        3561995674,
        3504004811,
        3574258232,
        54117162,
        3331405415,
        2381918588,
        3769707343,
        4154350007,
        1140177722,
        4074052095,
        668550556,
        3214352940,
        367459370,
        261225585,
        2610173221,
        4209349473,
        3468074219,
        3265815641,
        314222801,
        3066103646,
        3808782860,
        282218597,
        3406013506,
        3773591054,
        379116347,
        1285071038,
        846784868,
        2669647154,
        3771962079,
        3550491691,
        2305946142,
        453669953,
        1268987020,
        3317592352,
        3279303384,
        3744833421,
        2610507566,
        3859509063,
        266596637,
        3847019092,
        517658769,
        3462560207,
        3443424879,
        370717030,
        4247526661,
        2224018117,
        4143653529,
        4112773975,
        2788324899,
        2477274417,
        1456262402,
        2901442914,
        1517677493,
        1846949527,
        2295493580,
        3734397586,
        2176403920,
        1280348187,
        1908823572,
        3871786941,
        846861322,
        1172426758,
        3287448474,
        3383383037,
        1655181056,
        3139813346,
        901632758,
        1897031941,
        2986607138,
        3066810236,
        3447102507,
        1393639104,
        373351379,
        950779232,
        625454576,
        3124240540,
        4148612726,
        2007998917,
        544563296,
        2244738638,
        2330496472,
        2058025392,
        1291430526,
        424198748,
        50039436,
        29584100,
        3605783033,
        2429876329,
        2791104160,
        1057563949,
        3255363231,
        3075367218,
        3463963227,
        1469046755,
        985887462
      ];
      var C_ORIG = [
        1332899944,
        1700884034,
        1701343084,
        1684370003,
        1668446532,
        1869963892
      ];
      function _encipher(lr, off, P, S) {
        var n, l = lr[off], r = lr[off + 1];
        l ^= P[0];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[1];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[2];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[3];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[4];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[5];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[6];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[7];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[8];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[9];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[10];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[11];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[12];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[13];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[14];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[15];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[16];
        lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
        lr[off + 1] = l;
        return lr;
      }
      function _streamtoword(data, offp) {
        for (var i = 0, word = 0; i < 4; ++i)
          word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
        return { key: word, offp };
      }
      function _key(key, P, S) {
        var offset = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
        for (i = 0; i < plen; i += 2)
          lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      function _ekskey(data, key, P, S) {
        var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
        offp = 0;
        for (i = 0; i < plen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      function _crypt(b, salt, rounds, callback, progressCallback) {
        var cdata = C_ORIG.slice(), clen = cdata.length, err;
        if (rounds < 4 || rounds > 31) {
          err = Error("Illegal number of rounds (4-31): " + rounds);
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.length !== BCRYPT_SALT_LEN) {
          err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        rounds = 1 << rounds >>> 0;
        var P, S, i = 0, j;
        if (Int32Array) {
          P = new Int32Array(P_ORIG);
          S = new Int32Array(S_ORIG);
        } else {
          P = P_ORIG.slice();
          S = S_ORIG.slice();
        }
        _ekskey(salt, b, P, S);
        function next() {
          if (progressCallback)
            progressCallback(i / rounds);
          if (i < rounds) {
            var start = Date.now();
            for (; i < rounds; ) {
              i = i + 1;
              _key(b, P, S);
              _key(salt, P, S);
              if (Date.now() - start > MAX_EXECUTION_TIME)
                break;
            }
          } else {
            for (i = 0; i < 64; i++)
              for (j = 0; j < clen >> 1; j++)
                _encipher(cdata, j << 1, P, S);
            var ret = [];
            for (i = 0; i < clen; i++)
              ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
            if (callback) {
              callback(null, ret);
              return;
            } else
              return ret;
          }
          if (callback)
            nextTick(next);
        }
        if (typeof callback !== "undefined") {
          next();
        } else {
          var res;
          while (true)
            if (typeof (res = next()) !== "undefined")
              return res || [];
        }
      }
      function _hash(s, salt, callback, progressCallback) {
        var err;
        if (typeof s !== "string" || typeof salt !== "string") {
          err = Error("Invalid string / salt: Not a string");
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var minor, offset;
        if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
          err = Error("Invalid salt version: " + salt.substring(0, 2));
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.charAt(2) === "$")
          minor = String.fromCharCode(0), offset = 3;
        else {
          minor = salt.charAt(2);
          if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
              nextTick(callback.bind(this, err));
              return;
            } else
              throw err;
          }
          offset = 4;
        }
        if (salt.charAt(offset + 2) > "$") {
          err = Error("Missing salt rounds");
          if (callback) {
            nextTick(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
        s += minor >= "a" ? "\0" : "";
        var passwordb = stringToBytes(s), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
        function finish(bytes) {
          var res = [];
          res.push("$2");
          if (minor >= "a")
            res.push(minor);
          res.push("$");
          if (rounds < 10)
            res.push("0");
          res.push(rounds.toString());
          res.push("$");
          res.push(base64_encode(saltb, saltb.length));
          res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
          return res.join("");
        }
        if (typeof callback == "undefined")
          return finish(_crypt(passwordb, saltb, rounds));
        else {
          _crypt(passwordb, saltb, rounds, function(err2, bytes) {
            if (err2)
              callback(err2, null);
            else
              callback(null, finish(bytes));
          }, progressCallback);
        }
      }
      bcrypt2.encodeBase64 = base64_encode;
      bcrypt2.decodeBase64 = base64_decode;
      return bcrypt2;
    });
  }
});

// .wrangler/tmp/bundle-inIf3C/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-inIf3C/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// src/index.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/context.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var _status;
var _executionCtx;
var _headers;
var _preparedHeaders;
var _res;
var _isFresh;
var Context = class {
  constructor(req, options) {
    this.env = {};
    this._var = {};
    this.finalized = false;
    this.error = void 0;
    __privateAdd(this, _status, 200);
    __privateAdd(this, _executionCtx, void 0);
    __privateAdd(this, _headers, void 0);
    __privateAdd(this, _preparedHeaders, void 0);
    __privateAdd(this, _res, void 0);
    __privateAdd(this, _isFresh, true);
    this.layout = void 0;
    this.renderer = (content) => this.html(content);
    this.notFoundHandler = () => new Response();
    this.render = (...args) => this.renderer(...args);
    this.setLayout = (layout) => this.layout = layout;
    this.getLayout = () => this.layout;
    this.setRenderer = (renderer) => {
      this.renderer = renderer;
    };
    this.header = (name, value, options2) => {
      if (value === void 0) {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).delete(name);
        } else if (__privateGet(this, _preparedHeaders)) {
          delete __privateGet(this, _preparedHeaders)[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options2?.append) {
        if (!__privateGet(this, _headers)) {
          __privateSet(this, _isFresh, false);
          __privateSet(this, _headers, new Headers(__privateGet(this, _preparedHeaders)));
          __privateSet(this, _preparedHeaders, {});
        }
        __privateGet(this, _headers).append(name, value);
      } else {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).set(name, value);
        } else {
          __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
          __privateGet(this, _preparedHeaders)[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    };
    this.status = (status) => {
      __privateSet(this, _isFresh, false);
      __privateSet(this, _status, status);
    };
    this.set = (key, value) => {
      this._var ?? (this._var = {});
      this._var[key] = value;
    };
    this.get = (key) => {
      return this._var ? this._var[key] : void 0;
    };
    this.newResponse = (data, arg, headers) => {
      if (__privateGet(this, _isFresh) && !headers && !arg && __privateGet(this, _status) === 200) {
        return new Response(data, {
          headers: __privateGet(this, _preparedHeaders)
        });
      }
      if (arg && typeof arg !== "number") {
        const headers2 = setHeaders(new Headers(arg.headers), __privateGet(this, _preparedHeaders));
        return new Response(data, {
          headers: headers2,
          status: arg.status ?? __privateGet(this, _status)
        });
      }
      const status = typeof arg === "number" ? arg : __privateGet(this, _status);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers());
      setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      if (__privateGet(this, _res)) {
        __privateGet(this, _res).headers.forEach((v, k) => {
          __privateGet(this, _headers)?.set(k, v);
        });
        setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      }
      headers ?? (headers = {});
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          __privateGet(this, _headers).set(k, v);
        } else {
          __privateGet(this, _headers).delete(k);
          for (const v2 of v) {
            __privateGet(this, _headers).append(k, v2);
          }
        }
      }
      return new Response(data, {
        status,
        headers: __privateGet(this, _headers)
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!__privateGet(this, _preparedHeaders)) {
        if (__privateGet(this, _isFresh) && !headers && !arg) {
          return new Response(text);
        }
        __privateSet(this, _preparedHeaders, {});
      }
      __privateGet(this, _preparedHeaders)["content-type"] = TEXT_PLAIN;
      return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body = JSON.stringify(object);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
    };
    this.html = (html, arg, headers) => {
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "text/html; charset=UTF-8";
      if (typeof html === "object") {
        if (!(html instanceof Promise)) {
          html = html.toString();
        }
        if (html instanceof Promise) {
          return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
            return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
          });
        }
      }
      return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
    };
    this.redirect = (location, status = 302) => {
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers());
      __privateGet(this, _headers).set("Location", location);
      return this.newResponse(null, status);
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.req = req;
    if (options) {
      __privateSet(this, _executionCtx, options.executionCtx);
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (__privateGet(this, _executionCtx) && "respondWith" in __privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (__privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    __privateSet(this, _isFresh, false);
    return __privateGet(this, _res) || __privateSet(this, _res, new Response("404 Not Found", { status: 404 }));
  }
  set res(_res2) {
    __privateSet(this, _isFresh, false);
    if (__privateGet(this, _res) && _res2) {
      __privateGet(this, _res).headers.delete("content-type");
      for (const [k, v] of __privateGet(this, _res).headers.entries()) {
        if (k === "set-cookie") {
          const cookies = __privateGet(this, _res).headers.getSetCookie();
          _res2.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res2.headers.append("set-cookie", cookie);
          }
        } else {
          _res2.headers.set(k, v);
        }
      }
    }
    __privateSet(this, _res, _res2);
    this.finalized = true;
  }
  get var() {
    return { ...this._var };
  }
};
_status = /* @__PURE__ */ new WeakMap();
_executionCtx = /* @__PURE__ */ new WeakMap();
_headers = /* @__PURE__ */ new WeakMap();
_preparedHeaders = /* @__PURE__ */ new WeakMap();
_res = /* @__PURE__ */ new WeakMap();
_isFresh = /* @__PURE__ */ new WeakMap();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = async (request, options = { all: false }) => {
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (isFormDataContent(contentType)) {
    return parseFormData(request, options);
  }
  return {};
};
function isFormDataContent(contentType) {
  if (contentType === null) {
    return false;
  }
  return contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded");
}
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = {};
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] && isArrayField(form[key])) {
    appendToExistingArray(form[key], value);
  } else if (form[key]) {
    convertToNewArray(form, key, value);
  } else {
    form[key] = value;
  }
};
function isArrayField(field) {
  return Array.isArray(field);
}
var appendToExistingArray = (arr, value) => {
  arr.push(value);
};
var convertToNewArray = (form, key, value) => {
  form[key] = [form[key], value];
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ?? (results[name] = value);
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/request.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _validatedData;
var _matchResult;
var HonoRequest = class {
  constructor(request, path = "/", matchResult = [[]]) {
    __privateAdd2(this, _validatedData, void 0);
    __privateAdd2(this, _matchResult, void 0);
    this.routeIndex = 0;
    this.bodyCache = {};
    this.cachedBody = (key) => {
      const { bodyCache, raw: raw3 } = this;
      const cachedBody = bodyCache[key];
      if (cachedBody) {
        return cachedBody;
      }
      if (bodyCache.arrayBuffer) {
        return (async () => {
          return await new Response(bodyCache.arrayBuffer)[key]();
        })();
      }
      return bodyCache[key] = raw3[key]();
    };
    this.raw = request;
    this.path = path;
    __privateSet2(this, _matchResult, matchResult);
    __privateSet2(this, _validatedData, {});
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = __privateGet2(this, _matchResult)[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(__privateGet2(this, _matchResult)[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(__privateGet2(this, _matchResult)[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return __privateGet2(this, _matchResult)[1] ? __privateGet2(this, _matchResult)[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    __privateGet2(this, _validatedData)[target] = data;
  }
  valid(target) {
    return __privateGet2(this, _validatedData)[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route);
  }
  get routePath() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};
_validatedData = /* @__PURE__ */ new WeakMap();
_matchResult = /* @__PURE__ */ new WeakMap();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/hono-base.js
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var COMPOSED_HANDLER = Symbol("composedHandler");
function defineDynamicClass() {
  return class {
  };
}
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var _path;
var _Hono = class extends defineDynamicClass() {
  constructor(options = {}) {
    super();
    this._basePath = "/";
    __privateAdd3(this, _path, "/");
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.onError = (handler) => {
      this.errorHandler = handler;
      return this;
    };
    this.notFound = (handler) => {
      this.notFoundHandler = handler;
      return this;
    };
    this.fetch = (request, Env, executionCtx) => {
      return this.dispatch(request, executionCtx, Env, request.method);
    };
    this.request = (input, requestInit, Env, executionCtx) => {
      if (input instanceof Request) {
        if (requestInit !== void 0) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input, Env, executionCtx);
      }
      input = input.toString();
      const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path, requestInit);
      return this.fetch(req, Env, executionCtx);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          __privateSet3(this, _path, args1);
        } else {
          this.addRoute(method, __privateGet3(this, _path), args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, __privateGet3(this, _path), handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p of [path].flat()) {
        __privateSet3(this, _path, p);
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), __privateGet3(this, _path), handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        __privateSet3(this, _path, arg1);
      } else {
        __privateSet3(this, _path, "*");
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, __privateGet3(this, _path), handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path, app2) {
    const subApp = this.basePath(path);
    if (!app2) {
      return subApp;
    }
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(
        new Request(
          new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url),
          c.req.raw
        ),
        ...optionsArray
      );
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request, path, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res;
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
};
var Hono = _Hono;
_path = /* @__PURE__ */ new WeakMap();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node();
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/reg-exp-router/router.js
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
var emptyParam = [];
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ?? (wildcardRegExpCache[path] = new RegExp(
    path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}$`
  ));
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = {};
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = {};
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, {}]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = {};
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path, handler) {
    var _a;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (methodNames.indexOf(method) === -1) {
      methodNames.push(method);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a2;
          (_a2 = middleware[m])[path] || (_a2[path] = findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
        });
      } else {
        (_a = middleware[method])[path] || (_a[path] = findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        var _a2;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a2 = routes[m])[path2] || (_a2[path2] = [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ]);
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = class {
  constructor(init) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.params = {};
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = {};
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    const parentPatterns = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
        possibleKeys.push(pattern[1]);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = {};
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = {};
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, node.params, {}));
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, {}));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, {}));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/utils/error.ts
init_checked_fetch();
init_modules_watch_stub();
var HttpException = class extends Error {
  status;
  constructor(message, status) {
    super(message);
    this.status = status;
  }
};

// src/utils/status.ts
init_checked_fetch();
init_modules_watch_stub();
var HttpStatus = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
};
var status_default = HttpStatus;

// src/groups/user/index.ts
init_checked_fetch();
init_modules_watch_stub();

// src/groups/user/schemas.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs
init_checked_fetch();
init_modules_watch_stub();
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// src/groups/user/schemas.ts
var createUserSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

// src/utils/validator.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/validator/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/validator/validator.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = (cookie, name) => {
  const pairs = cookie.trim().split(";");
  return pairs.reduce((parsedCookie, pairStr) => {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      return parsedCookie;
    }
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      return parsedCookie;
    }
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
    }
    return parsedCookie;
  }, {});
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return void 0;
    }
    const obj2 = parse(cookie, key);
    return obj2[key];
  }
  if (!cookie) {
    return {};
  }
  const obj = parse(cookie);
  return obj;
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/buffer.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/crypto.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
  const response = new Response(arrayBuffer, {
    headers: {
      "Content-Type": contentType
    }
  });
  return response.formData();
};

// ../../node_modules/.pnpm/hono@4.0.4/node_modules/hono/dist/validator/validator.js
var validator = (target, validationFunc) => {
  return async (c, next) => {
    let value = {};
    const contentType = c.req.header("Content-Type");
    switch (target) {
      case "json":
        if (!contentType || !contentType.startsWith("application/json")) {
          const message = `Invalid HTTP header: Content-Type=${contentType}`;
          throw new HTTPException(400, { message });
        }
        if (c.req.bodyCache.json) {
          value = await c.req.bodyCache.json;
          break;
        }
        try {
          const arrayBuffer = c.req.bodyCache.arrayBuffer ?? await c.req.raw.arrayBuffer();
          value = await new Response(arrayBuffer).json();
          c.req.bodyCache.json = value;
          c.req.bodyCache.arrayBuffer = arrayBuffer;
        } catch {
          const message = "Malformed JSON in request body";
          throw new HTTPException(400, { message });
        }
        break;
      case "form": {
        if (c.req.bodyCache.formData) {
          value = c.req.bodyCache.formData;
          break;
        }
        try {
          const contentType2 = c.req.header("Content-Type");
          if (contentType2) {
            const arrayBuffer = c.req.bodyCache.arrayBuffer ?? await c.req.raw.arrayBuffer();
            const formData = await bufferToFormData(arrayBuffer, contentType2);
            const form = {};
            formData.forEach((value2, key) => {
              form[key] = value2;
            });
            value = form;
            c.req.bodyCache.formData = formData;
            c.req.bodyCache.arrayBuffer = arrayBuffer;
          }
        } catch (e) {
          let message = "Malformed FormData request.";
          message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`;
          throw new HTTPException(400, { message });
        }
        break;
      }
      case "query":
        value = Object.fromEntries(
          Object.entries(c.req.queries()).map(([k, v]) => {
            return v.length === 1 ? [k, v[0]] : [k, v];
          })
        );
        break;
      case "param":
        value = c.req.param();
        break;
      case "header":
        value = c.req.header();
        break;
      case "cookie":
        value = getCookie(c);
        break;
    }
    const res = await validationFunc(value, c);
    if (res instanceof Response) {
      return res;
    }
    c.req.addValidatedData(target, res);
    await next();
  };
};

// src/utils/validator.ts
function validator2(type, schema) {
  return validator(type, (value) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => issue.message).join(", ");
      throw new HttpException(errors, status_default.BAD_REQUEST);
    }
    return parsed.data;
  });
}

// src/groups/user/services/create-user.ts
init_checked_fetch();
init_modules_watch_stub();

// src/utils/cacheTime.ts
init_checked_fetch();
init_modules_watch_stub();
var CacheTime = {
  ONE_SECOND: 1,
  TEN_SECONDS: 10,
  THIRTY_SECONDS: 30,
  ONE_MINUTE: 60,
  ONE_HOUR: 60 * 60,
  ONE_DAY: 60 * 60 * 24,
  ONE_WEEK: 60 * 60 * 24 * 7,
  FOREVER: 60 * 60 * 24 * 365 * 100
};
var cacheTime_default = CacheTime;

// src/utils/prisma.ts
init_checked_fetch();
init_modules_watch_stub();
var import_edge = __toESM(require_edge3());

// ../../node_modules/.pnpm/@prisma+extension-accelerate@0.6.3_@prisma+client@5.9.1/node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@prisma+extension-accelerate@0.6.3_@prisma+client@5.9.1/node_modules/@prisma/extension-accelerate/dist/esm/extension.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index2 = __toESM(require_default_index(), 1);

// ../../node_modules/.pnpm/@prisma+extension-accelerate@0.6.3_@prisma+client@5.9.1/node_modules/@prisma/extension-accelerate/dist/esm/semver.js
init_checked_fetch();
init_modules_watch_stub();
function compareSemVer(a, b) {
  const [major1 = 0, minor1 = 0, patch1 = 0] = a.split(".").map(Number);
  const [major2 = 0, minor2 = 0, patch2 = 0] = b.split(".").map(Number);
  const major = major2 - major1;
  const minor = minor2 - minor1;
  const patch = patch2 - patch1;
  return major || minor || patch;
}

// ../../node_modules/.pnpm/@prisma+extension-accelerate@0.6.3_@prisma+client@5.9.1/node_modules/@prisma/extension-accelerate/dist/esm/user-agent.js
init_checked_fetch();
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
function getUserAgent() {
  const prismaVersion = import_default_index.default.Prisma.prismaVersion;
  const parts = [
    getRuntimeSegment(),
    `PrismaEngine/${prismaVersion.engine}`,
    `PrismaClient/${prismaVersion.client}`
  ];
  return parts.join(" ");
}
function getRuntimeSegment() {
  if (typeof navigator !== "undefined") {
    return "Cloudflare-Workers";
  } else if (typeof process !== "undefined" && typeof process.versions !== "undefined") {
    return `Node/${process.versions.node} (${process.platform}; ${process.arch})`;
  } else if ("EdgeRuntime" in globalThis) {
    return `Vercel-Edge-Runtime`;
  } else {
    return `UnknownRuntime`;
  }
}

// ../../node_modules/.pnpm/@prisma+extension-accelerate@0.6.3_@prisma+client@5.9.1/node_modules/@prisma/extension-accelerate/dist/esm/extension.js
var EXTENSION_NAME = "@prisma/extension-accelerate";
function makeWithCacheHeaders(fetcher) {
  const userAgent = getUserAgent();
  let machineHint = void 0;
  return async (params) => {
    const { args } = params;
    const { cacheStrategy, __accelerateInfo = false, ...rest } = args;
    let info = null;
    const { __internalParams, query } = params;
    __internalParams.customDataProxyFetch = () => {
      return async (url, options) => {
        const cacheControl = new Array();
        if (typeof cacheStrategy?.ttl === "number") {
          cacheControl.push(`max-age=${cacheStrategy.ttl}`);
        }
        if (typeof cacheStrategy?.swr === "number") {
          cacheControl.push(`stale-while-revalidate=${cacheStrategy.swr}`);
        }
        options.headers = {
          ...options.headers,
          "cache-control": cacheControl.length > 0 ? cacheControl.join(",") : `no-cache`,
          "user-agent": userAgent
        };
        if (machineHint) {
          options.headers["accelerate-query-engine-jwt"] = machineHint;
        }
        const response = await fetcher(url, options);
        info = {
          cacheStatus: response.headers.get("accelerate-cache-status"),
          lastModified: new Date(response.headers.get("last-modified") ?? ""),
          region: response.headers.get("cf-ray")?.split("-")[1] ?? "unspecified",
          requestId: response.headers.get("cf-ray") ?? "unspecified",
          signature: response.headers.get("accelerate-signature") ?? "unspecified"
        };
        machineHint = response.headers.get("accelerate-query-engine-jwt") ?? void 0;
        return response;
      };
    };
    if (__accelerateInfo) {
      const data = await query(rest, __internalParams);
      return { data, info };
    } else {
      return query(rest, __internalParams);
    }
  };
}
function makeAccelerateExtension(fetcher) {
  const enableCtxParent = compareSemVer("5.1.0", import_default_index2.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index2.default.Prisma.defineExtension((client) => {
    const withCacheHeaders = makeWithCacheHeaders(fetcher);
    const xclient = client.$extends({
      name: EXTENSION_NAME,
      query: {
        $allModels: {
          // also apply withCacheHeaders to mutations for machine hint benefit
          $allOperations: withCacheHeaders
        }
      }
    });
    return xclient.$extends({
      name: EXTENSION_NAME,
      model: {
        $allModels: {
          // TODO: these functions are repetitive. Is there a type we can use to generic this?
          // TODO: can we define these in a map that ensures query and model overrides stay in sync/
          aggregate(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.aggregate(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.aggregate({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          count(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.count(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.count({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirst(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirst(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirst({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findFirstOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findFirstOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findFirstOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findMany(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findMany(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findMany({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUnique(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUnique(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUnique({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          findUniqueOrThrow(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.findUniqueOrThrow(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.findUniqueOrThrow({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          },
          groupBy(args) {
            const ctx = import_default_index2.default.Prisma.getExtensionContext(this);
            const model = enableCtxParent ? ctx.$parent[ctx.$name] : xclient[ctx.name];
            const prismaPromise = model.groupBy(args);
            return Object.assign(prismaPromise, {
              withAccelerateInfo() {
                return model.groupBy({
                  ...args,
                  __accelerateInfo: true
                });
              }
            });
          }
        }
      }
    });
  });
}

// ../../node_modules/.pnpm/@prisma+extension-accelerate@0.6.3_@prisma+client@5.9.1/node_modules/@prisma/extension-accelerate/dist/esm/entry.fetch.js
function withAccelerate() {
  return makeAccelerateExtension(globalThis.fetch);
}

// src/utils/prisma.ts
function getPrisma(uri) {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: uri
  }).$extends(withAccelerate());
  return prisma;
}

// src/groups/user/services/create-user.ts
var bcrypt = __toESM(require_bcrypt());
var import_edge2 = __toESM(require_edge3());
async function createUser({ email, name, password }, env) {
  const prisma = getPrisma(env.DATABASE_URL);
  email = email.toLocaleLowerCase().trim();
  name = name.toLocaleLowerCase().trim();
  const userExists = await prisma.user.findFirst({
    where: {
      email,
      deletedAt: null
    },
    cacheStrategy: { swr: cacheTime_default.ONE_MINUTE }
  });
  if (userExists) {
    throw new HttpException("User already exists", status_default.BAD_REQUEST);
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword
      }
    });
    delete user.password;
    delete user.deletedAt;
    return {
      message: "User created successfully",
      user
    };
  } catch (error) {
    if (error instanceof import_edge2.Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new HttpException("User already exists", status_default.BAD_REQUEST);
      }
    }
    throw error;
  }
}

// src/groups/user/index.ts
var userGroup = new Hono2();
userGroup.post("/", validator2("json", createUserSchema), async (c) => {
  const body = c.req.valid("json");
  const result = await createUser(body, c.env);
  return c.json(result);
});
var user_default = userGroup;

// src/index.ts
var app = new Hono2();
app.route("/users", user_default);
app.get("/", (c) => {
  return c.json({
    message: "Welcome to JSX Mail API!",
    timestamp: /* @__PURE__ */ new Date(),
    path: c.req.path
  });
});
app.notFound(() => {
  throw new HttpException("Not Found", status_default.NOT_FOUND);
});
app.onError((err, c) => {
  let status = status_default.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  if (err instanceof HttpException) {
    status = err.status;
    message = err.message;
  } else {
    console.log(`Unknown error: ${err}`);
  }
  return c.json(
    {
      message,
      timestamp: /* @__PURE__ */ new Date(),
      path: c.req.path
    },
    {
      status
    }
  );
});
var src_default = app;

// ../../node_modules/.pnpm/wrangler@3.28.3_@cloudflare+workers-types@4.20240208.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-inIf3C/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...src_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...src_default.middleware ? src_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// ../../node_modules/.pnpm/wrangler@3.28.3_@cloudflare+workers-types@4.20240208.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-inIf3C/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
/*! Bundled license information:

bcryptjs/dist/bcrypt.js:
  (**
   * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/bcrypt.js for details
   *)
*/
//# sourceMappingURL=index.js.map
