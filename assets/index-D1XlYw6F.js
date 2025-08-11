function Ip(i, s) {
  for (var u = 0; u < s.length; u++) {
    const c = s[u];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const d in c)
        if (d !== "default" && !(d in i)) {
          const m = Object.getOwnPropertyDescriptor(c, d);
          m &&
            Object.defineProperty(
              i,
              d,
              m.get ? m : { enumerable: !0, get: () => c[d] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const m of d)
      if (m.type === "childList")
        for (const w of m.addedNodes)
          w.tagName === "LINK" && w.rel === "modulepreload" && c(w);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(d) {
    const m = {};
    return (
      d.integrity && (m.integrity = d.integrity),
      d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const m = u(d);
    fetch(d.href, m);
  }
})();
function Mp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var hs = { exports: {} },
  Wr = {},
  ys = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function Fp() {
  if (Ic) return oe;
  Ic = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    w = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    I = Symbol.iterator;
  function $(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (I && y[I]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var X = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    E = {};
  function k(y, N, re) {
    (this.props = y),
      (this.context = N),
      (this.refs = E),
      (this.updater = re || X);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (y, N) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, N, "setState");
    }),
    (k.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function B() {}
  B.prototype = k.prototype;
  function W(y, N, re) {
    (this.props = y),
      (this.context = N),
      (this.refs = E),
      (this.updater = re || X);
  }
  var b = (W.prototype = new B());
  (b.constructor = W), D(b, k.prototype), (b.isPureReactComponent = !0);
  var ee = Array.isArray,
    R = Object.prototype.hasOwnProperty,
    ne = { current: null },
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(y, N, re) {
    var le,
      ae = {},
      ue = null,
      ve = null;
    if (N != null)
      for (le in (N.ref !== void 0 && (ve = N.ref),
      N.key !== void 0 && (ue = "" + N.key),
      N))
        R.call(N, le) && !q.hasOwnProperty(le) && (ae[le] = N[le]);
    var ye = arguments.length - 2;
    if (ye === 1) ae.children = re;
    else if (1 < ye) {
      for (var Ee = Array(ye), at = 0; at < ye; at++)
        Ee[at] = arguments[at + 2];
      ae.children = Ee;
    }
    if (y && y.defaultProps)
      for (le in ((ye = y.defaultProps), ye))
        ae[le] === void 0 && (ae[le] = ye[le]);
    return {
      $$typeof: i,
      type: y,
      key: ue,
      ref: ve,
      props: ae,
      _owner: ne.current,
    };
  }
  function mt(y, N) {
    return {
      $$typeof: i,
      type: y.type,
      key: N,
      ref: y.ref,
      props: y.props,
      _owner: y._owner,
    };
  }
  function it(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function St(y) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (re) {
        return N[re];
      })
    );
  }
  var ie = /\/+/g;
  function He(y, N) {
    return typeof y == "object" && y !== null && y.key != null
      ? St("" + y.key)
      : N.toString(36);
  }
  function Qe(y, N, re, le, ae) {
    var ue = typeof y;
    (ue === "undefined" || ue === "boolean") && (y = null);
    var ve = !1;
    if (y === null) ve = !0;
    else
      switch (ue) {
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case s:
              ve = !0;
          }
      }
    if (ve)
      return (
        (ve = y),
        (ae = ae(ve)),
        (y = le === "" ? "." + He(ve, 0) : le),
        ee(ae)
          ? ((re = ""),
            y != null && (re = y.replace(ie, "$&/") + "/"),
            Qe(ae, N, re, "", function (at) {
              return at;
            }))
          : ae != null &&
            (it(ae) &&
              (ae = mt(
                ae,
                re +
                  (!ae.key || (ve && ve.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(ie, "$&/") + "/") +
                  y
              )),
            N.push(ae)),
        1
      );
    if (((ve = 0), (le = le === "" ? "." : le + ":"), ee(y)))
      for (var ye = 0; ye < y.length; ye++) {
        ue = y[ye];
        var Ee = le + He(ue, ye);
        ve += Qe(ue, N, re, Ee, ae);
      }
    else if (((Ee = $(y)), typeof Ee == "function"))
      for (y = Ee.call(y), ye = 0; !(ue = y.next()).done; )
        (ue = ue.value),
          (Ee = le + He(ue, ye++)),
          (ve += Qe(ue, N, re, Ee, ae));
    else if (ue === "object")
      throw (
        ((N = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ve;
  }
  function st(y, N, re) {
    if (y == null) return y;
    var le = [],
      ae = 0;
    return (
      Qe(y, le, "", "", function (ue) {
        return N.call(re, ue, ae++);
      }),
      le
    );
  }
  function je(y) {
    if (y._status === -1) {
      var N = y._result;
      (N = N()),
        N.then(
          function (re) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = re));
          },
          function (re) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = re));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = N));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var xe = { current: null },
    M = { transition: null },
    Y = {
      ReactCurrentDispatcher: xe,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: ne,
    };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (oe.Children = {
      map: st,
      forEach: function (y, N, re) {
        st(
          y,
          function () {
            N.apply(this, arguments);
          },
          re
        );
      },
      count: function (y) {
        var N = 0;
        return (
          st(y, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (y) {
        return (
          st(y, function (N) {
            return N;
          }) || []
        );
      },
      only: function (y) {
        if (!it(y))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return y;
      },
    }),
    (oe.Component = k),
    (oe.Fragment = u),
    (oe.Profiler = d),
    (oe.PureComponent = W),
    (oe.StrictMode = c),
    (oe.Suspense = C),
    (oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (oe.act = A),
    (oe.cloneElement = function (y, N, re) {
      if (y == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            y +
            "."
        );
      var le = D({}, y.props),
        ae = y.key,
        ue = y.ref,
        ve = y._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ue = N.ref), (ve = ne.current)),
          N.key !== void 0 && (ae = "" + N.key),
          y.type && y.type.defaultProps)
        )
          var ye = y.type.defaultProps;
        for (Ee in N)
          R.call(N, Ee) &&
            !q.hasOwnProperty(Ee) &&
            (le[Ee] = N[Ee] === void 0 && ye !== void 0 ? ye[Ee] : N[Ee]);
      }
      var Ee = arguments.length - 2;
      if (Ee === 1) le.children = re;
      else if (1 < Ee) {
        ye = Array(Ee);
        for (var at = 0; at < Ee; at++) ye[at] = arguments[at + 2];
        le.children = ye;
      }
      return {
        $$typeof: i,
        type: y.type,
        key: ae,
        ref: ue,
        props: le,
        _owner: ve,
      };
    }),
    (oe.createContext = function (y) {
      return (
        (y = {
          $$typeof: w,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (y.Provider = { $$typeof: m, _context: y }),
        (y.Consumer = y)
      );
    }),
    (oe.createElement = We),
    (oe.createFactory = function (y) {
      var N = We.bind(null, y);
      return (N.type = y), N;
    }),
    (oe.createRef = function () {
      return { current: null };
    }),
    (oe.forwardRef = function (y) {
      return { $$typeof: S, render: y };
    }),
    (oe.isValidElement = it),
    (oe.lazy = function (y) {
      return { $$typeof: O, _payload: { _status: -1, _result: y }, _init: je };
    }),
    (oe.memo = function (y, N) {
      return { $$typeof: T, type: y, compare: N === void 0 ? null : N };
    }),
    (oe.startTransition = function (y) {
      var N = M.transition;
      M.transition = {};
      try {
        y();
      } finally {
        M.transition = N;
      }
    }),
    (oe.unstable_act = A),
    (oe.useCallback = function (y, N) {
      return xe.current.useCallback(y, N);
    }),
    (oe.useContext = function (y) {
      return xe.current.useContext(y);
    }),
    (oe.useDebugValue = function () {}),
    (oe.useDeferredValue = function (y) {
      return xe.current.useDeferredValue(y);
    }),
    (oe.useEffect = function (y, N) {
      return xe.current.useEffect(y, N);
    }),
    (oe.useId = function () {
      return xe.current.useId();
    }),
    (oe.useImperativeHandle = function (y, N, re) {
      return xe.current.useImperativeHandle(y, N, re);
    }),
    (oe.useInsertionEffect = function (y, N) {
      return xe.current.useInsertionEffect(y, N);
    }),
    (oe.useLayoutEffect = function (y, N) {
      return xe.current.useLayoutEffect(y, N);
    }),
    (oe.useMemo = function (y, N) {
      return xe.current.useMemo(y, N);
    }),
    (oe.useReducer = function (y, N, re) {
      return xe.current.useReducer(y, N, re);
    }),
    (oe.useRef = function (y) {
      return xe.current.useRef(y);
    }),
    (oe.useState = function (y) {
      return xe.current.useState(y);
    }),
    (oe.useSyncExternalStore = function (y, N, re) {
      return xe.current.useSyncExternalStore(y, N, re);
    }),
    (oe.useTransition = function () {
      return xe.current.useTransition();
    }),
    (oe.version = "18.3.1"),
    oe
  );
}
var Mc;
function Ls() {
  return Mc || ((Mc = 1), (ys.exports = Fp())), ys.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc;
function $p() {
  if (Fc) return Wr;
  Fc = 1;
  var i = Ls(),
    s = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    c = Object.prototype.hasOwnProperty,
    d = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(S, C, T) {
    var O,
      I = {},
      $ = null,
      X = null;
    T !== void 0 && ($ = "" + T),
      C.key !== void 0 && ($ = "" + C.key),
      C.ref !== void 0 && (X = C.ref);
    for (O in C) c.call(C, O) && !m.hasOwnProperty(O) && (I[O] = C[O]);
    if (S && S.defaultProps)
      for (O in ((C = S.defaultProps), C)) I[O] === void 0 && (I[O] = C[O]);
    return {
      $$typeof: s,
      type: S,
      key: $,
      ref: X,
      props: I,
      _owner: d.current,
    };
  }
  return (Wr.Fragment = u), (Wr.jsx = w), (Wr.jsxs = w), Wr;
}
var $c;
function Ap() {
  return $c || (($c = 1), (hs.exports = $p())), hs.exports;
}
var J = Ap(),
  he = Ls();
const Dp = Mp(he),
  Ac = Ip({ __proto__: null, default: Dp }, [he]);
var cl = {},
  gs = { exports: {} },
  ot = {},
  vs = { exports: {} },
  ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dc;
function Up() {
  return (
    Dc ||
      ((Dc = 1),
      (function (i) {
        function s(M, Y) {
          var A = M.length;
          M.push(Y);
          e: for (; 0 < A; ) {
            var y = (A - 1) >>> 1,
              N = M[y];
            if (0 < d(N, Y)) (M[y] = Y), (M[A] = N), (A = y);
            else break e;
          }
        }
        function u(M) {
          return M.length === 0 ? null : M[0];
        }
        function c(M) {
          if (M.length === 0) return null;
          var Y = M[0],
            A = M.pop();
          if (A !== Y) {
            M[0] = A;
            e: for (var y = 0, N = M.length, re = N >>> 1; y < re; ) {
              var le = 2 * (y + 1) - 1,
                ae = M[le],
                ue = le + 1,
                ve = M[ue];
              if (0 > d(ae, A))
                ue < N && 0 > d(ve, ae)
                  ? ((M[y] = ve), (M[ue] = A), (y = ue))
                  : ((M[y] = ae), (M[le] = A), (y = le));
              else if (ue < N && 0 > d(ve, A))
                (M[y] = ve), (M[ue] = A), (y = ue);
              else break e;
            }
          }
          return Y;
        }
        function d(M, Y) {
          var A = M.sortIndex - Y.sortIndex;
          return A !== 0 ? A : M.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var w = Date,
            S = w.now();
          i.unstable_now = function () {
            return w.now() - S;
          };
        }
        var C = [],
          T = [],
          O = 1,
          I = null,
          $ = 3,
          X = !1,
          D = !1,
          E = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          W = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function b(M) {
          for (var Y = u(T); Y !== null; ) {
            if (Y.callback === null) c(T);
            else if (Y.startTime <= M)
              c(T), (Y.sortIndex = Y.expirationTime), s(C, Y);
            else break;
            Y = u(T);
          }
        }
        function ee(M) {
          if (((E = !1), b(M), !D))
            if (u(C) !== null) (D = !0), je(R);
            else {
              var Y = u(T);
              Y !== null && xe(ee, Y.startTime - M);
            }
        }
        function R(M, Y) {
          (D = !1), E && ((E = !1), B(We), (We = -1)), (X = !0);
          var A = $;
          try {
            for (
              b(Y), I = u(C);
              I !== null && (!(I.expirationTime > Y) || (M && !St()));

            ) {
              var y = I.callback;
              if (typeof y == "function") {
                (I.callback = null), ($ = I.priorityLevel);
                var N = y(I.expirationTime <= Y);
                (Y = i.unstable_now()),
                  typeof N == "function"
                    ? (I.callback = N)
                    : I === u(C) && c(C),
                  b(Y);
              } else c(C);
              I = u(C);
            }
            if (I !== null) var re = !0;
            else {
              var le = u(T);
              le !== null && xe(ee, le.startTime - Y), (re = !1);
            }
            return re;
          } finally {
            (I = null), ($ = A), (X = !1);
          }
        }
        var ne = !1,
          q = null,
          We = -1,
          mt = 5,
          it = -1;
        function St() {
          return !(i.unstable_now() - it < mt);
        }
        function ie() {
          if (q !== null) {
            var M = i.unstable_now();
            it = M;
            var Y = !0;
            try {
              Y = q(!0, M);
            } finally {
              Y ? He() : ((ne = !1), (q = null));
            }
          } else ne = !1;
        }
        var He;
        if (typeof W == "function")
          He = function () {
            W(ie);
          };
        else if (typeof MessageChannel < "u") {
          var Qe = new MessageChannel(),
            st = Qe.port2;
          (Qe.port1.onmessage = ie),
            (He = function () {
              st.postMessage(null);
            });
        } else
          He = function () {
            k(ie, 0);
          };
        function je(M) {
          (q = M), ne || ((ne = !0), He());
        }
        function xe(M, Y) {
          We = k(function () {
            M(i.unstable_now());
          }, Y);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            D || X || ((D = !0), je(R));
          }),
          (i.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (mt = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return $;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return u(C);
          }),
          (i.unstable_next = function (M) {
            switch ($) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = $;
            }
            var A = $;
            $ = Y;
            try {
              return M();
            } finally {
              $ = A;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (M, Y) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var A = $;
            $ = M;
            try {
              return Y();
            } finally {
              $ = A;
            }
          }),
          (i.unstable_scheduleCallback = function (M, Y, A) {
            var y = i.unstable_now();
            switch (
              (typeof A == "object" && A !== null
                ? ((A = A.delay),
                  (A = typeof A == "number" && 0 < A ? y + A : y))
                : (A = y),
              M)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = A + N),
              (M = {
                id: O++,
                callback: Y,
                priorityLevel: M,
                startTime: A,
                expirationTime: N,
                sortIndex: -1,
              }),
              A > y
                ? ((M.sortIndex = A),
                  s(T, M),
                  u(C) === null &&
                    M === u(T) &&
                    (E ? (B(We), (We = -1)) : (E = !0), xe(ee, A - y)))
                : ((M.sortIndex = N), s(C, M), D || X || ((D = !0), je(R))),
              M
            );
          }),
          (i.unstable_shouldYield = St),
          (i.unstable_wrapCallback = function (M) {
            var Y = $;
            return function () {
              var A = $;
              $ = Y;
              try {
                return M.apply(this, arguments);
              } finally {
                $ = A;
              }
            };
          });
      })(ws)),
    ws
  );
}
var Uc;
function Vp() {
  return Uc || ((Uc = 1), (vs.exports = Up())), vs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vc;
function Bp() {
  if (Vc) return ot;
  Vc = 1;
  var i = Ls(),
    s = Vp();
  function u(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var c = new Set(),
    d = {};
  function m(e, t) {
    w(e, t), w(e + "Capture", t);
  }
  function w(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var S = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    C = Object.prototype.hasOwnProperty,
    T =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    I = {};
  function $(e) {
    return C.call(I, e)
      ? !0
      : C.call(O, e)
      ? !1
      : T.test(e)
      ? (I[e] = !0)
      : ((O[e] = !0), !1);
  }
  function X(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function D(e, t, n, r) {
    if (t === null || typeof t > "u" || X(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function E(e, t, n, r, o, l, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = a);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      k[e] = new E(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      k[t] = new E(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      k[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      k[e] = new E(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        k[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      k[e] = new E(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      k[e] = new E(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      k[e] = new E(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      k[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var B = /[\-:]([a-z])/g;
  function W(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(B, W);
      k[t] = new E(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(B, W);
        k[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(B, W);
      k[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      k[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new E(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      k[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function b(e, t, n, r) {
    var o = k.hasOwnProperty(t) ? k[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (D(t, n, o, r) && (n = null),
      r || o === null
        ? $(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    R = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    We = Symbol.for("react.strict_mode"),
    mt = Symbol.for("react.profiler"),
    it = Symbol.for("react.provider"),
    St = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    He = Symbol.for("react.suspense"),
    Qe = Symbol.for("react.suspense_list"),
    st = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    xe = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var A = Object.assign,
    y;
  function N(e) {
    if (y === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        y = (t && t[1]) || "";
      }
    return (
      `
` +
      y +
      e
    );
  }
  var re = !1;
  function le(e, t) {
    if (!e || re) return "";
    re = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (x) {
            var r = x;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (x) {
            r = x;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (x) {
          r = x;
        }
        e();
      }
    } catch (x) {
      if (x && r && typeof x.stack == "string") {
        for (
          var o = x.stack.split(`
`),
            l = r.stack.split(`
`),
            a = o.length - 1,
            f = l.length - 1;
          1 <= a && 0 <= f && o[a] !== l[f];

        )
          f--;
        for (; 1 <= a && 0 <= f; a--, f--)
          if (o[a] !== l[f]) {
            if (a !== 1 || f !== 1)
              do
                if ((a--, f--, 0 > f || o[a] !== l[f])) {
                  var p =
                    `
` + o[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", e.displayName)),
                    p
                  );
                }
              while (1 <= a && 0 <= f);
            break;
          }
      }
    } finally {
      (re = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function ae(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = le(e.type, !1)), e;
      case 11:
        return (e = le(e.type.render, !1)), e;
      case 1:
        return (e = le(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case q:
        return "Fragment";
      case ne:
        return "Portal";
      case mt:
        return "Profiler";
      case We:
        return "StrictMode";
      case He:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case St:
          return (e.displayName || "Context") + ".Consumer";
        case it:
          return (e._context.displayName || "Context") + ".Provider";
        case ie:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case st:
          return (
            (t = e.displayName || null), t !== null ? t : ue(e.type) || "Memo"
          );
        case je:
          (t = e._payload), (e = e._init);
          try {
            return ue(e(t));
          } catch {}
      }
    return null;
  }
  function ve(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ue(t);
      case 8:
        return t === We ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ye(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function at(e) {
    var t = Ee(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        l = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (a) {
            (r = "" + a), l.call(this, a);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function qr(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function Us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Ee(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function eo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function kl(e, t) {
    var n = t.checked;
    return A({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Vs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ye(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Bs(e, t) {
    (t = t.checked), t != null && b(e, "checked", t, !1);
  }
  function Cl(e, t) {
    Bs(e, t);
    var n = ye(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? El(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && El(e, t.type, ye(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Ws(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function El(e, t, n) {
    (t !== "number" || eo(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var or = Array.isArray;
  function Pn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ye(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _l(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return A({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Hs(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(u(92));
        if (or(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ye(n) };
  }
  function Qs(e, t) {
    var n = ye(t.value),
      r = ye(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function bs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ys(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Nl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ys(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var to,
    Xs = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          to = to || document.createElement("div"),
            to.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = to.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function lr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ir = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Af = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ir).forEach(function (e) {
    Af.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ir[t] = ir[e]);
    });
  });
  function Gs(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ir.hasOwnProperty(e) && ir[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ks(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = Gs(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var Df = A(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Pl(e, t) {
    if (t) {
      if (Df[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function zl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rl = null;
  function Tl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ol = null,
    zn = null,
    Rn = null;
  function Js(e) {
    if ((e = zr(e))) {
      if (typeof Ol != "function") throw Error(u(280));
      var t = e.stateNode;
      t && ((t = _o(t)), Ol(e.stateNode, e.type, t));
    }
  }
  function Zs(e) {
    zn ? (Rn ? Rn.push(e) : (Rn = [e])) : (zn = e);
  }
  function qs() {
    if (zn) {
      var e = zn,
        t = Rn;
      if (((Rn = zn = null), Js(e), t)) for (e = 0; e < t.length; e++) Js(t[e]);
    }
  }
  function ea(e, t) {
    return e(t);
  }
  function ta() {}
  var Ll = !1;
  function na(e, t, n) {
    if (Ll) return e(t, n);
    Ll = !0;
    try {
      return ea(e, t, n);
    } finally {
      (Ll = !1), (zn !== null || Rn !== null) && (ta(), qs());
    }
  }
  function sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _o(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var jl = !1;
  if (S)
    try {
      var ar = {};
      Object.defineProperty(ar, "passive", {
        get: function () {
          jl = !0;
        },
      }),
        window.addEventListener("test", ar, ar),
        window.removeEventListener("test", ar, ar);
    } catch {
      jl = !1;
    }
  function Uf(e, t, n, r, o, l, a, f, p) {
    var x = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, x);
    } catch (P) {
      this.onError(P);
    }
  }
  var ur = !1,
    no = null,
    ro = !1,
    Il = null,
    Vf = {
      onError: function (e) {
        (ur = !0), (no = e);
      },
    };
  function Bf(e, t, n, r, o, l, a, f, p) {
    (ur = !1), (no = null), Uf.apply(Vf, arguments);
  }
  function Wf(e, t, n, r, o, l, a, f, p) {
    if ((Bf.apply(this, arguments), ur)) {
      if (ur) {
        var x = no;
        (ur = !1), (no = null);
      } else throw Error(u(198));
      ro || ((ro = !0), (Il = x));
    }
  }
  function mn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ra(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function oa(e) {
    if (mn(e) !== e) throw Error(u(188));
  }
  function Hf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = mn(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var l = o.alternate;
      if (l === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === l.child) {
        for (l = o.child; l; ) {
          if (l === n) return oa(o), e;
          if (l === r) return oa(o), t;
          l = l.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) (n = o), (r = l);
      else {
        for (var a = !1, f = o.child; f; ) {
          if (f === n) {
            (a = !0), (n = o), (r = l);
            break;
          }
          if (f === r) {
            (a = !0), (r = o), (n = l);
            break;
          }
          f = f.sibling;
        }
        if (!a) {
          for (f = l.child; f; ) {
            if (f === n) {
              (a = !0), (n = l), (r = o);
              break;
            }
            if (f === r) {
              (a = !0), (r = l), (n = o);
              break;
            }
            f = f.sibling;
          }
          if (!a) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function la(e) {
    return (e = Hf(e)), e !== null ? ia(e) : null;
  }
  function ia(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ia(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var sa = s.unstable_scheduleCallback,
    aa = s.unstable_cancelCallback,
    Qf = s.unstable_shouldYield,
    bf = s.unstable_requestPaint,
    Re = s.unstable_now,
    Yf = s.unstable_getCurrentPriorityLevel,
    Ml = s.unstable_ImmediatePriority,
    ua = s.unstable_UserBlockingPriority,
    oo = s.unstable_NormalPriority,
    Xf = s.unstable_LowPriority,
    ca = s.unstable_IdlePriority,
    lo = null,
    Rt = null;
  function Gf(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
      try {
        Rt.onCommitFiberRoot(lo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var kt = Math.clz32 ? Math.clz32 : Zf,
    Kf = Math.log,
    Jf = Math.LN2;
  function Zf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Kf(e) / Jf) | 0)) | 0;
  }
  var io = 64,
    so = 4194304;
  function cr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ao(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      l = e.pingedLanes,
      a = n & 268435455;
    if (a !== 0) {
      var f = a & ~o;
      f !== 0 ? (r = cr(f)) : ((l &= a), l !== 0 && (r = cr(l)));
    } else (a = n & ~o), a !== 0 ? (r = cr(a)) : l !== 0 && (r = cr(l));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & o) === 0 &&
      ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function qf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ed(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        l = e.pendingLanes;
      0 < l;

    ) {
      var a = 31 - kt(l),
        f = 1 << a,
        p = o[a];
      p === -1
        ? ((f & n) === 0 || (f & r) !== 0) && (o[a] = qf(f, t))
        : p <= t && (e.expiredLanes |= f),
        (l &= ~f);
    }
  }
  function Fl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function fa() {
    var e = io;
    return (io <<= 1), (io & 4194240) === 0 && (io = 64), e;
  }
  function $l(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function fr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - kt(t)),
      (e[t] = n);
  }
  function td(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - kt(n),
        l = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
    }
  }
  function Al(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - kt(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var ge = 0;
  function da(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var pa,
    Dl,
    ma,
    ha,
    ya,
    Ul = !1,
    uo = [],
    bt = null,
    Yt = null,
    Xt = null,
    dr = new Map(),
    pr = new Map(),
    Gt = [],
    nd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ga(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bt = null;
        break;
      case "dragenter":
      case "dragleave":
        Yt = null;
        break;
      case "mouseover":
      case "mouseout":
        Xt = null;
        break;
      case "pointerover":
      case "pointerout":
        dr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pr.delete(t.pointerId);
    }
  }
  function mr(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [o],
        }),
        t !== null && ((t = zr(t)), t !== null && Dl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function rd(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (bt = mr(bt, e, t, n, r, o)), !0;
      case "dragenter":
        return (Yt = mr(Yt, e, t, n, r, o)), !0;
      case "mouseover":
        return (Xt = mr(Xt, e, t, n, r, o)), !0;
      case "pointerover":
        var l = o.pointerId;
        return dr.set(l, mr(dr.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (l = o.pointerId), pr.set(l, mr(pr.get(l) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function va(e) {
    var t = hn(e.target);
    if (t !== null) {
      var n = mn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ra(n)), t !== null)) {
            (e.blockedOn = t),
              ya(e.priority, function () {
                ma(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function co(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Rl = r), n.target.dispatchEvent(r), (Rl = null);
      } else return (t = zr(n)), t !== null && Dl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function wa(e, t, n) {
    co(e) && n.delete(t);
  }
  function od() {
    (Ul = !1),
      bt !== null && co(bt) && (bt = null),
      Yt !== null && co(Yt) && (Yt = null),
      Xt !== null && co(Xt) && (Xt = null),
      dr.forEach(wa),
      pr.forEach(wa);
  }
  function hr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ul ||
        ((Ul = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, od)));
  }
  function yr(e) {
    function t(o) {
      return hr(o, e);
    }
    if (0 < uo.length) {
      hr(uo[0], e);
      for (var n = 1; n < uo.length; n++) {
        var r = uo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      bt !== null && hr(bt, e),
        Yt !== null && hr(Yt, e),
        Xt !== null && hr(Xt, e),
        dr.forEach(t),
        pr.forEach(t),
        n = 0;
      n < Gt.length;
      n++
    )
      (r = Gt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
      va(n), n.blockedOn === null && Gt.shift();
  }
  var Tn = ee.ReactCurrentBatchConfig,
    fo = !0;
  function ld(e, t, n, r) {
    var o = ge,
      l = Tn.transition;
    Tn.transition = null;
    try {
      (ge = 1), Vl(e, t, n, r);
    } finally {
      (ge = o), (Tn.transition = l);
    }
  }
  function id(e, t, n, r) {
    var o = ge,
      l = Tn.transition;
    Tn.transition = null;
    try {
      (ge = 4), Vl(e, t, n, r);
    } finally {
      (ge = o), (Tn.transition = l);
    }
  }
  function Vl(e, t, n, r) {
    if (fo) {
      var o = Bl(e, t, n, r);
      if (o === null) li(e, t, r, po, n), ga(e, r);
      else if (rd(o, e, t, n, r)) r.stopPropagation();
      else if ((ga(e, r), t & 4 && -1 < nd.indexOf(e))) {
        for (; o !== null; ) {
          var l = zr(o);
          if (
            (l !== null && pa(l),
            (l = Bl(e, t, n, r)),
            l === null && li(e, t, r, po, n),
            l === o)
          )
            break;
          o = l;
        }
        o !== null && r.stopPropagation();
      } else li(e, t, r, null, n);
    }
  }
  var po = null;
  function Bl(e, t, n, r) {
    if (((po = null), (e = Tl(r)), (e = hn(e)), e !== null))
      if (((t = mn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ra(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (po = e), null;
  }
  function xa(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Yf()) {
          case Ml:
            return 1;
          case ua:
            return 4;
          case oo:
          case Xf:
            return 16;
          case ca:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Kt = null,
    Wl = null,
    mo = null;
  function Sa() {
    if (mo) return mo;
    var e,
      t = Wl,
      n = t.length,
      r,
      o = "value" in Kt ? Kt.value : Kt.textContent,
      l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[l - r]; r++);
    return (mo = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ho(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function yo() {
    return !0;
  }
  function ka() {
    return !1;
  }
  function ut(e) {
    function t(n, r, o, l, a) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = l),
        (this.target = a),
        (this.currentTarget = null);
      for (var f in e)
        e.hasOwnProperty(f) && ((n = e[f]), (this[f] = n ? n(l) : l[f]));
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? yo
          : ka),
        (this.isPropagationStopped = ka),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = yo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = yo));
        },
        persist: function () {},
        isPersistent: yo,
      }),
      t
    );
  }
  var On = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hl = ut(On),
    gr = A({}, On, { view: 0, detail: 0 }),
    sd = ut(gr),
    Ql,
    bl,
    vr,
    go = A({}, gr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Xl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== vr &&
              (vr && e.type === "mousemove"
                ? ((Ql = e.screenX - vr.screenX), (bl = e.screenY - vr.screenY))
                : (bl = Ql = 0),
              (vr = e)),
            Ql);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : bl;
      },
    }),
    Ca = ut(go),
    ad = A({}, go, { dataTransfer: 0 }),
    ud = ut(ad),
    cd = A({}, gr, { relatedTarget: 0 }),
    Yl = ut(cd),
    fd = A({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dd = ut(fd),
    pd = A({}, On, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    md = ut(pd),
    hd = A({}, On, { data: 0 }),
    Ea = ut(hd),
    yd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    vd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function wd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vd[e])
      ? !!t[e]
      : !1;
  }
  function Xl() {
    return wd;
  }
  var xd = A({}, gr, {
      key: function (e) {
        if (e.key) {
          var t = yd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ho(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? gd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xl,
      charCode: function (e) {
        return e.type === "keypress" ? ho(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ho(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Sd = ut(xd),
    kd = A({}, go, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    _a = ut(kd),
    Cd = A({}, gr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xl,
    }),
    Ed = ut(Cd),
    _d = A({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nd = ut(_d),
    Pd = A({}, go, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    zd = ut(Pd),
    Rd = [9, 13, 27, 32],
    Gl = S && "CompositionEvent" in window,
    wr = null;
  S && "documentMode" in document && (wr = document.documentMode);
  var Td = S && "TextEvent" in window && !wr,
    Na = S && (!Gl || (wr && 8 < wr && 11 >= wr)),
    Pa = " ",
    za = !1;
  function Ra(e, t) {
    switch (e) {
      case "keyup":
        return Rd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ta(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ln = !1;
  function Od(e, t) {
    switch (e) {
      case "compositionend":
        return Ta(t);
      case "keypress":
        return t.which !== 32 ? null : ((za = !0), Pa);
      case "textInput":
        return (e = t.data), e === Pa && za ? null : e;
      default:
        return null;
    }
  }
  function Ld(e, t) {
    if (Ln)
      return e === "compositionend" || (!Gl && Ra(e, t))
        ? ((e = Sa()), (mo = Wl = Kt = null), (Ln = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Na && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jd[e.type] : t === "textarea";
  }
  function La(e, t, n, r) {
    Zs(r),
      (t = ko(t, "onChange")),
      0 < t.length &&
        ((n = new Hl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var xr = null,
    Sr = null;
  function Id(e) {
    Ka(e, 0);
  }
  function vo(e) {
    var t = $n(e);
    if (Us(t)) return e;
  }
  function Md(e, t) {
    if (e === "change") return t;
  }
  var ja = !1;
  if (S) {
    var Kl;
    if (S) {
      var Jl = "oninput" in document;
      if (!Jl) {
        var Ia = document.createElement("div");
        Ia.setAttribute("oninput", "return;"),
          (Jl = typeof Ia.oninput == "function");
      }
      Kl = Jl;
    } else Kl = !1;
    ja = Kl && (!document.documentMode || 9 < document.documentMode);
  }
  function Ma() {
    xr && (xr.detachEvent("onpropertychange", Fa), (Sr = xr = null));
  }
  function Fa(e) {
    if (e.propertyName === "value" && vo(Sr)) {
      var t = [];
      La(t, Sr, e, Tl(e)), na(Id, t);
    }
  }
  function Fd(e, t, n) {
    e === "focusin"
      ? (Ma(), (xr = t), (Sr = n), xr.attachEvent("onpropertychange", Fa))
      : e === "focusout" && Ma();
  }
  function $d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vo(Sr);
  }
  function Ad(e, t) {
    if (e === "click") return vo(t);
  }
  function Dd(e, t) {
    if (e === "input" || e === "change") return vo(t);
  }
  function Ud(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ct = typeof Object.is == "function" ? Object.is : Ud;
  function kr(e, t) {
    if (Ct(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!C.call(t, o) || !Ct(e[o], t[o])) return !1;
    }
    return !0;
  }
  function $a(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Aa(e, t) {
    var n = $a(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = $a(n);
    }
  }
  function Da(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Da(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ua() {
    for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = eo(e.document);
    }
    return t;
  }
  function Zl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Vd(e) {
    var t = Ua(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Da(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Zl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            l = Math.min(r.start, o);
          (r = r.end === void 0 ? l : Math.min(r.end, o)),
            !e.extend && l > r && ((o = r), (r = l), (l = o)),
            (o = Aa(n, l));
          var a = Aa(n, r);
          o &&
            a &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== a.node ||
              e.focusOffset !== a.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            l > r
              ? (e.addRange(t), e.extend(a.node, a.offset))
              : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Bd = S && "documentMode" in document && 11 >= document.documentMode,
    jn = null,
    ql = null,
    Cr = null,
    ei = !1;
  function Va(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ei ||
      jn == null ||
      jn !== eo(r) ||
      ((r = jn),
      "selectionStart" in r && Zl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Cr && kr(Cr, r)) ||
        ((Cr = r),
        (r = ko(ql, "onSelect")),
        0 < r.length &&
          ((t = new Hl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = jn))));
  }
  function wo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var In = {
      animationend: wo("Animation", "AnimationEnd"),
      animationiteration: wo("Animation", "AnimationIteration"),
      animationstart: wo("Animation", "AnimationStart"),
      transitionend: wo("Transition", "TransitionEnd"),
    },
    ti = {},
    Ba = {};
  S &&
    ((Ba = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete In.animationend.animation,
      delete In.animationiteration.animation,
      delete In.animationstart.animation),
    "TransitionEvent" in window || delete In.transitionend.transition);
  function xo(e) {
    if (ti[e]) return ti[e];
    if (!In[e]) return e;
    var t = In[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ba) return (ti[e] = t[n]);
    return e;
  }
  var Wa = xo("animationend"),
    Ha = xo("animationiteration"),
    Qa = xo("animationstart"),
    ba = xo("transitionend"),
    Ya = new Map(),
    Xa =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Jt(e, t) {
    Ya.set(e, t), m(t, [e]);
  }
  for (var ni = 0; ni < Xa.length; ni++) {
    var ri = Xa[ni],
      Wd = ri.toLowerCase(),
      Hd = ri[0].toUpperCase() + ri.slice(1);
    Jt(Wd, "on" + Hd);
  }
  Jt(Wa, "onAnimationEnd"),
    Jt(Ha, "onAnimationIteration"),
    Jt(Qa, "onAnimationStart"),
    Jt("dblclick", "onDoubleClick"),
    Jt("focusin", "onFocus"),
    Jt("focusout", "onBlur"),
    Jt(ba, "onTransitionEnd"),
    w("onMouseEnter", ["mouseout", "mouseover"]),
    w("onMouseLeave", ["mouseout", "mouseover"]),
    w("onPointerEnter", ["pointerout", "pointerover"]),
    w("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Qd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Er)
    );
  function Ga(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Wf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ka(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var f = r[a],
              p = f.instance,
              x = f.currentTarget;
            if (((f = f.listener), p !== l && o.isPropagationStopped()))
              break e;
            Ga(o, f, x), (l = p);
          }
        else
          for (a = 0; a < r.length; a++) {
            if (
              ((f = r[a]),
              (p = f.instance),
              (x = f.currentTarget),
              (f = f.listener),
              p !== l && o.isPropagationStopped())
            )
              break e;
            Ga(o, f, x), (l = p);
          }
      }
    }
    if (ro) throw ((e = Il), (ro = !1), (Il = null), e);
  }
  function Se(e, t) {
    var n = t[fi];
    n === void 0 && (n = t[fi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ja(t, e, 2, !1), n.add(r));
  }
  function oi(e, t, n) {
    var r = 0;
    t && (r |= 4), Ja(n, e, r, t);
  }
  var So = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[So]) {
      (e[So] = !0),
        c.forEach(function (n) {
          n !== "selectionchange" && (Qd.has(n) || oi(n, !1, e), oi(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[So] || ((t[So] = !0), oi("selectionchange", !1, t));
    }
  }
  function Ja(e, t, n, r) {
    switch (xa(t)) {
      case 1:
        var o = ld;
        break;
      case 4:
        o = id;
        break;
      default:
        o = Vl;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !jl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function li(e, t, n, r, o) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var f = r.stateNode.containerInfo;
          if (f === o || (f.nodeType === 8 && f.parentNode === o)) break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var p = a.tag;
              if (
                (p === 3 || p === 4) &&
                ((p = a.stateNode.containerInfo),
                p === o || (p.nodeType === 8 && p.parentNode === o))
              )
                return;
              a = a.return;
            }
          for (; f !== null; ) {
            if (((a = hn(f)), a === null)) return;
            if (((p = a.tag), p === 5 || p === 6)) {
              r = l = a;
              continue e;
            }
            f = f.parentNode;
          }
        }
        r = r.return;
      }
    na(function () {
      var x = l,
        P = Tl(n),
        z = [];
      e: {
        var _ = Ya.get(e);
        if (_ !== void 0) {
          var F = Hl,
            V = e;
          switch (e) {
            case "keypress":
              if (ho(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = Sd;
              break;
            case "focusin":
              (V = "focus"), (F = Yl);
              break;
            case "focusout":
              (V = "blur"), (F = Yl);
              break;
            case "beforeblur":
            case "afterblur":
              F = Yl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Ca;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = ud;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Ed;
              break;
            case Wa:
            case Ha:
            case Qa:
              F = dd;
              break;
            case ba:
              F = Nd;
              break;
            case "scroll":
              F = sd;
              break;
            case "wheel":
              F = zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = md;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = _a;
          }
          var H = (t & 4) !== 0,
            Te = !H && e === "scroll",
            g = H ? (_ !== null ? _ + "Capture" : null) : _;
          H = [];
          for (var h = x, v; h !== null; ) {
            v = h;
            var L = v.stateNode;
            if (
              (v.tag === 5 &&
                L !== null &&
                ((v = L),
                g !== null &&
                  ((L = sr(h, g)), L != null && H.push(Nr(h, L, v)))),
              Te)
            )
              break;
            h = h.return;
          }
          0 < H.length &&
            ((_ = new F(_, V, null, n, P)), z.push({ event: _, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            (F = e === "mouseout" || e === "pointerout"),
            _ &&
              n !== Rl &&
              (V = n.relatedTarget || n.fromElement) &&
              (hn(V) || V[$t]))
          )
            break e;
          if (
            (F || _) &&
            ((_ =
              P.window === P
                ? P
                : (_ = P.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            F
              ? ((V = n.relatedTarget || n.toElement),
                (F = x),
                (V = V ? hn(V) : null),
                V !== null &&
                  ((Te = mn(V)), V !== Te || (V.tag !== 5 && V.tag !== 6)) &&
                  (V = null))
              : ((F = null), (V = x)),
            F !== V)
          ) {
            if (
              ((H = Ca),
              (L = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((H = _a),
                (L = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (Te = F == null ? _ : $n(F)),
              (v = V == null ? _ : $n(V)),
              (_ = new H(L, h + "leave", F, n, P)),
              (_.target = Te),
              (_.relatedTarget = v),
              (L = null),
              hn(P) === x &&
                ((H = new H(g, h + "enter", V, n, P)),
                (H.target = v),
                (H.relatedTarget = Te),
                (L = H)),
              (Te = L),
              F && V)
            )
              t: {
                for (H = F, g = V, h = 0, v = H; v; v = Mn(v)) h++;
                for (v = 0, L = g; L; L = Mn(L)) v++;
                for (; 0 < h - v; ) (H = Mn(H)), h--;
                for (; 0 < v - h; ) (g = Mn(g)), v--;
                for (; h--; ) {
                  if (H === g || (g !== null && H === g.alternate)) break t;
                  (H = Mn(H)), (g = Mn(g));
                }
                H = null;
              }
            else H = null;
            F !== null && Za(z, _, F, H, !1),
              V !== null && Te !== null && Za(z, Te, V, H, !0);
          }
        }
        e: {
          if (
            ((_ = x ? $n(x) : window),
            (F = _.nodeName && _.nodeName.toLowerCase()),
            F === "select" || (F === "input" && _.type === "file"))
          )
            var Q = Md;
          else if (Oa(_))
            if (ja) Q = Dd;
            else {
              Q = $d;
              var G = Fd;
            }
          else
            (F = _.nodeName) &&
              F.toLowerCase() === "input" &&
              (_.type === "checkbox" || _.type === "radio") &&
              (Q = Ad);
          if (Q && (Q = Q(e, x))) {
            La(z, Q, n, P);
            break e;
          }
          G && G(e, _, x),
            e === "focusout" &&
              (G = _._wrapperState) &&
              G.controlled &&
              _.type === "number" &&
              El(_, "number", _.value);
        }
        switch (((G = x ? $n(x) : window), e)) {
          case "focusin":
            (Oa(G) || G.contentEditable === "true") &&
              ((jn = G), (ql = x), (Cr = null));
            break;
          case "focusout":
            Cr = ql = jn = null;
            break;
          case "mousedown":
            ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ei = !1), Va(z, n, P);
            break;
          case "selectionchange":
            if (Bd) break;
          case "keydown":
          case "keyup":
            Va(z, n, P);
        }
        var K;
        if (Gl)
          e: {
            switch (e) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break e;
              case "compositionend":
                Z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break e;
            }
            Z = void 0;
          }
        else
          Ln
            ? Ra(e, n) && (Z = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (Na &&
            n.locale !== "ko" &&
            (Ln || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && Ln && (K = Sa())
              : ((Kt = P),
                (Wl = "value" in Kt ? Kt.value : Kt.textContent),
                (Ln = !0))),
          (G = ko(x, Z)),
          0 < G.length &&
            ((Z = new Ea(Z, e, null, n, P)),
            z.push({ event: Z, listeners: G }),
            K ? (Z.data = K) : ((K = Ta(n)), K !== null && (Z.data = K)))),
          (K = Td ? Od(e, n) : Ld(e, n)) &&
            ((x = ko(x, "onBeforeInput")),
            0 < x.length &&
              ((P = new Ea("onBeforeInput", "beforeinput", null, n, P)),
              z.push({ event: P, listeners: x }),
              (P.data = K)));
      }
      Ka(z, t);
    });
  }
  function Nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ko(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        l = o.stateNode;
      o.tag === 5 &&
        l !== null &&
        ((o = l),
        (l = sr(e, n)),
        l != null && r.unshift(Nr(e, l, o)),
        (l = sr(e, t)),
        l != null && r.push(Nr(e, l, o))),
        (e = e.return);
    }
    return r;
  }
  function Mn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Za(e, t, n, r, o) {
    for (var l = t._reactName, a = []; n !== null && n !== r; ) {
      var f = n,
        p = f.alternate,
        x = f.stateNode;
      if (p !== null && p === r) break;
      f.tag === 5 &&
        x !== null &&
        ((f = x),
        o
          ? ((p = sr(n, l)), p != null && a.unshift(Nr(n, p, f)))
          : o || ((p = sr(n, l)), p != null && a.push(Nr(n, p, f)))),
        (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var bd = /\r\n?/g,
    Yd = /\u0000|\uFFFD/g;
  function qa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        bd,
        `
`
      )
      .replace(Yd, "");
  }
  function Co(e, t, n) {
    if (((t = qa(t)), qa(e) !== t && n)) throw Error(u(425));
  }
  function Eo() {}
  var ii = null,
    si = null;
  function ai(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ui = typeof setTimeout == "function" ? setTimeout : void 0,
    Xd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    eu = typeof Promise == "function" ? Promise : void 0,
    Gd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof eu < "u"
        ? function (e) {
            return eu.resolve(null).then(e).catch(Kd);
          }
        : ui;
  function Kd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ci(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), yr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    yr(t);
  }
  function Zt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function tu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Fn = Math.random().toString(36).slice(2),
    Tt = "__reactFiber$" + Fn,
    Pr = "__reactProps$" + Fn,
    $t = "__reactContainer$" + Fn,
    fi = "__reactEvents$" + Fn,
    Jd = "__reactListeners$" + Fn,
    Zd = "__reactHandles$" + Fn;
  function hn(e) {
    var t = e[Tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[$t] || n[Tt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = tu(e); e !== null; ) {
            if ((n = e[Tt])) return n;
            e = tu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function zr(e) {
    return (
      (e = e[Tt] || e[$t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function _o(e) {
    return e[Pr] || null;
  }
  var di = [],
    An = -1;
  function qt(e) {
    return { current: e };
  }
  function ke(e) {
    0 > An || ((e.current = di[An]), (di[An] = null), An--);
  }
  function we(e, t) {
    An++, (di[An] = e.current), (e.current = t);
  }
  var en = {},
    be = qt(en),
    qe = qt(!1),
    yn = en;
  function Dn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return en;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      l;
    for (l in n) o[l] = t[l];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function et(e) {
    return (e = e.childContextTypes), e != null;
  }
  function No() {
    ke(qe), ke(be);
  }
  function nu(e, t, n) {
    if (be.current !== en) throw Error(u(168));
    we(be, t), we(qe, n);
  }
  function ru(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(u(108, ve(e) || "Unknown", o));
    return A({}, n, r);
  }
  function Po(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        en),
      (yn = be.current),
      we(be, e),
      we(qe, qe.current),
      !0
    );
  }
  function ou(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n
      ? ((e = ru(e, t, yn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ke(qe),
        ke(be),
        we(be, e))
      : ke(qe),
      we(qe, n);
  }
  var At = null,
    zo = !1,
    pi = !1;
  function lu(e) {
    At === null ? (At = [e]) : At.push(e);
  }
  function qd(e) {
    (zo = !0), lu(e);
  }
  function tn() {
    if (!pi && At !== null) {
      pi = !0;
      var e = 0,
        t = ge;
      try {
        var n = At;
        for (ge = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (At = null), (zo = !1);
      } catch (o) {
        throw (At !== null && (At = At.slice(e + 1)), sa(Ml, tn), o);
      } finally {
        (ge = t), (pi = !1);
      }
    }
    return null;
  }
  var Un = [],
    Vn = 0,
    Ro = null,
    To = 0,
    ht = [],
    yt = 0,
    gn = null,
    Dt = 1,
    Ut = "";
  function vn(e, t) {
    (Un[Vn++] = To), (Un[Vn++] = Ro), (Ro = e), (To = t);
  }
  function iu(e, t, n) {
    (ht[yt++] = Dt), (ht[yt++] = Ut), (ht[yt++] = gn), (gn = e);
    var r = Dt;
    e = Ut;
    var o = 32 - kt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var l = 32 - kt(t) + o;
    if (30 < l) {
      var a = o - (o % 5);
      (l = (r & ((1 << a) - 1)).toString(32)),
        (r >>= a),
        (o -= a),
        (Dt = (1 << (32 - kt(t) + o)) | (n << o) | r),
        (Ut = l + e);
    } else (Dt = (1 << l) | (n << o) | r), (Ut = e);
  }
  function mi(e) {
    e.return !== null && (vn(e, 1), iu(e, 1, 0));
  }
  function hi(e) {
    for (; e === Ro; )
      (Ro = Un[--Vn]), (Un[Vn] = null), (To = Un[--Vn]), (Un[Vn] = null);
    for (; e === gn; )
      (gn = ht[--yt]),
        (ht[yt] = null),
        (Ut = ht[--yt]),
        (ht[yt] = null),
        (Dt = ht[--yt]),
        (ht[yt] = null);
  }
  var ct = null,
    ft = null,
    _e = !1,
    Et = null;
  function su(e, t) {
    var n = xt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function au(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (ct = e), (ft = Zt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (ct = e), (ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = gn !== null ? { id: Dt, overflow: Ut } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = xt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (ct = e),
              (ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function yi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function gi(e) {
    if (_e) {
      var t = ft;
      if (t) {
        var n = t;
        if (!au(e, t)) {
          if (yi(e)) throw Error(u(418));
          t = Zt(n.nextSibling);
          var r = ct;
          t && au(e, t)
            ? su(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (ct = e));
        }
      } else {
        if (yi(e)) throw Error(u(418));
        (e.flags = (e.flags & -4097) | 2), (_e = !1), (ct = e);
      }
    }
  }
  function uu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    ct = e;
  }
  function Oo(e) {
    if (e !== ct) return !1;
    if (!_e) return uu(e), (_e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ai(e.type, e.memoizedProps))),
      t && (t = ft))
    ) {
      if (yi(e)) throw (cu(), Error(u(418)));
      for (; t; ) su(e, t), (t = Zt(t.nextSibling));
    }
    if ((uu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ft = Zt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? Zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cu() {
    for (var e = ft; e; ) e = Zt(e.nextSibling);
  }
  function Bn() {
    (ft = ct = null), (_e = !1);
  }
  function vi(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  var ep = ee.ReactCurrentBatchConfig;
  function Rr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var o = r,
          l = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === l
          ? t.ref
          : ((t = function (a) {
              var f = o.refs;
              a === null ? delete f[l] : (f[l] = a);
            }),
            (t._stringRef = l),
            t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Lo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        u(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function fu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function du(e) {
    function t(g, h) {
      if (e) {
        var v = g.deletions;
        v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
      }
    }
    function n(g, h) {
      if (!e) return null;
      for (; h !== null; ) t(g, h), (h = h.sibling);
      return null;
    }
    function r(g, h) {
      for (g = new Map(); h !== null; )
        h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
      return g;
    }
    function o(g, h) {
      return (g = cn(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function l(g, h, v) {
      return (
        (g.index = v),
        e
          ? ((v = g.alternate),
            v !== null
              ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
              : ((g.flags |= 2), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function f(g, h, v, L) {
      return h === null || h.tag !== 6
        ? ((h = us(v, g.mode, L)), (h.return = g), h)
        : ((h = o(h, v)), (h.return = g), h);
    }
    function p(g, h, v, L) {
      var Q = v.type;
      return Q === q
        ? P(g, h, v.props.children, L, v.key)
        : h !== null &&
          (h.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === je &&
              fu(Q) === h.type))
        ? ((L = o(h, v.props)), (L.ref = Rr(g, h, v)), (L.return = g), L)
        : ((L = nl(v.type, v.key, v.props, null, g.mode, L)),
          (L.ref = Rr(g, h, v)),
          (L.return = g),
          L);
    }
    function x(g, h, v, L) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = cs(v, g.mode, L)), (h.return = g), h)
        : ((h = o(h, v.children || [])), (h.return = g), h);
    }
    function P(g, h, v, L, Q) {
      return h === null || h.tag !== 7
        ? ((h = Nn(v, g.mode, L, Q)), (h.return = g), h)
        : ((h = o(h, v)), (h.return = g), h);
    }
    function z(g, h, v) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = us("" + h, g.mode, v)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case R:
            return (
              (v = nl(h.type, h.key, h.props, null, g.mode, v)),
              (v.ref = Rr(g, null, h)),
              (v.return = g),
              v
            );
          case ne:
            return (h = cs(h, g.mode, v)), (h.return = g), h;
          case je:
            var L = h._init;
            return z(g, L(h._payload), v);
        }
        if (or(h) || Y(h))
          return (h = Nn(h, g.mode, v, null)), (h.return = g), h;
        Lo(g, h);
      }
      return null;
    }
    function _(g, h, v, L) {
      var Q = h !== null ? h.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return Q !== null ? null : f(g, h, "" + v, L);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case R:
            return v.key === Q ? p(g, h, v, L) : null;
          case ne:
            return v.key === Q ? x(g, h, v, L) : null;
          case je:
            return (Q = v._init), _(g, h, Q(v._payload), L);
        }
        if (or(v) || Y(v)) return Q !== null ? null : P(g, h, v, L, null);
        Lo(g, v);
      }
      return null;
    }
    function F(g, h, v, L, Q) {
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return (g = g.get(v) || null), f(h, g, "" + L, Q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case R:
            return (
              (g = g.get(L.key === null ? v : L.key) || null), p(h, g, L, Q)
            );
          case ne:
            return (
              (g = g.get(L.key === null ? v : L.key) || null), x(h, g, L, Q)
            );
          case je:
            var G = L._init;
            return F(g, h, v, G(L._payload), Q);
        }
        if (or(L) || Y(L)) return (g = g.get(v) || null), P(h, g, L, Q, null);
        Lo(h, L);
      }
      return null;
    }
    function V(g, h, v, L) {
      for (
        var Q = null, G = null, K = h, Z = (h = 0), Ae = null;
        K !== null && Z < v.length;
        Z++
      ) {
        K.index > Z ? ((Ae = K), (K = null)) : (Ae = K.sibling);
        var ce = _(g, K, v[Z], L);
        if (ce === null) {
          K === null && (K = Ae);
          break;
        }
        e && K && ce.alternate === null && t(g, K),
          (h = l(ce, h, Z)),
          G === null ? (Q = ce) : (G.sibling = ce),
          (G = ce),
          (K = Ae);
      }
      if (Z === v.length) return n(g, K), _e && vn(g, Z), Q;
      if (K === null) {
        for (; Z < v.length; Z++)
          (K = z(g, v[Z], L)),
            K !== null &&
              ((h = l(K, h, Z)),
              G === null ? (Q = K) : (G.sibling = K),
              (G = K));
        return _e && vn(g, Z), Q;
      }
      for (K = r(g, K); Z < v.length; Z++)
        (Ae = F(K, g, Z, v[Z], L)),
          Ae !== null &&
            (e &&
              Ae.alternate !== null &&
              K.delete(Ae.key === null ? Z : Ae.key),
            (h = l(Ae, h, Z)),
            G === null ? (Q = Ae) : (G.sibling = Ae),
            (G = Ae));
      return (
        e &&
          K.forEach(function (fn) {
            return t(g, fn);
          }),
        _e && vn(g, Z),
        Q
      );
    }
    function H(g, h, v, L) {
      var Q = Y(v);
      if (typeof Q != "function") throw Error(u(150));
      if (((v = Q.call(v)), v == null)) throw Error(u(151));
      for (
        var G = (Q = null), K = h, Z = (h = 0), Ae = null, ce = v.next();
        K !== null && !ce.done;
        Z++, ce = v.next()
      ) {
        K.index > Z ? ((Ae = K), (K = null)) : (Ae = K.sibling);
        var fn = _(g, K, ce.value, L);
        if (fn === null) {
          K === null && (K = Ae);
          break;
        }
        e && K && fn.alternate === null && t(g, K),
          (h = l(fn, h, Z)),
          G === null ? (Q = fn) : (G.sibling = fn),
          (G = fn),
          (K = Ae);
      }
      if (ce.done) return n(g, K), _e && vn(g, Z), Q;
      if (K === null) {
        for (; !ce.done; Z++, ce = v.next())
          (ce = z(g, ce.value, L)),
            ce !== null &&
              ((h = l(ce, h, Z)),
              G === null ? (Q = ce) : (G.sibling = ce),
              (G = ce));
        return _e && vn(g, Z), Q;
      }
      for (K = r(g, K); !ce.done; Z++, ce = v.next())
        (ce = F(K, g, Z, ce.value, L)),
          ce !== null &&
            (e &&
              ce.alternate !== null &&
              K.delete(ce.key === null ? Z : ce.key),
            (h = l(ce, h, Z)),
            G === null ? (Q = ce) : (G.sibling = ce),
            (G = ce));
      return (
        e &&
          K.forEach(function (jp) {
            return t(g, jp);
          }),
        _e && vn(g, Z),
        Q
      );
    }
    function Te(g, h, v, L) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === q &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case R:
            e: {
              for (var Q = v.key, G = h; G !== null; ) {
                if (G.key === Q) {
                  if (((Q = v.type), Q === q)) {
                    if (G.tag === 7) {
                      n(g, G.sibling),
                        (h = o(G, v.props.children)),
                        (h.return = g),
                        (g = h);
                      break e;
                    }
                  } else if (
                    G.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === je &&
                      fu(Q) === G.type)
                  ) {
                    n(g, G.sibling),
                      (h = o(G, v.props)),
                      (h.ref = Rr(g, G, v)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                  n(g, G);
                  break;
                } else t(g, G);
                G = G.sibling;
              }
              v.type === q
                ? ((h = Nn(v.props.children, g.mode, L, v.key)),
                  (h.return = g),
                  (g = h))
                : ((L = nl(v.type, v.key, v.props, null, g.mode, L)),
                  (L.ref = Rr(g, h, v)),
                  (L.return = g),
                  (g = L));
            }
            return a(g);
          case ne:
            e: {
              for (G = v.key; h !== null; ) {
                if (h.key === G)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    n(g, h.sibling),
                      (h = o(h, v.children || [])),
                      (h.return = g),
                      (g = h);
                    break e;
                  } else {
                    n(g, h);
                    break;
                  }
                else t(g, h);
                h = h.sibling;
              }
              (h = cs(v, g.mode, L)), (h.return = g), (g = h);
            }
            return a(g);
          case je:
            return (G = v._init), Te(g, h, G(v._payload), L);
        }
        if (or(v)) return V(g, h, v, L);
        if (Y(v)) return H(g, h, v, L);
        Lo(g, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          h !== null && h.tag === 6
            ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
            : (n(g, h), (h = us(v, g.mode, L)), (h.return = g), (g = h)),
          a(g))
        : n(g, h);
    }
    return Te;
  }
  var Wn = du(!0),
    pu = du(!1),
    jo = qt(null),
    Io = null,
    Hn = null,
    wi = null;
  function xi() {
    wi = Hn = Io = null;
  }
  function Si(e) {
    var t = jo.current;
    ke(jo), (e._currentValue = t);
  }
  function ki(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Qn(e, t) {
    (Io = e),
      (wi = Hn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (tt = !0), (e.firstContext = null));
  }
  function gt(e) {
    var t = e._currentValue;
    if (wi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
        if (Io === null) throw Error(u(308));
        (Hn = e), (Io.dependencies = { lanes: 0, firstContext: e });
      } else Hn = Hn.next = e;
    return t;
  }
  var wn = null;
  function Ci(e) {
    wn === null ? (wn = [e]) : wn.push(e);
  }
  function mu(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), Ci(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      Vt(e, r)
    );
  }
  function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var nn = !1;
  function Ei(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function hu(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Bt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function rn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (se & 2) !== 0)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        Vt(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), Ci(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      Vt(e, n)
    );
  }
  function Mo(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
  }
  function yu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          l === null ? (o = l = a) : (l = l.next = a), (n = n.next);
        } while (n !== null);
        l === null ? (o = l = t) : (l = l.next = t);
      } else o = l = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: l,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Fo(e, t, n, r) {
    var o = e.updateQueue;
    nn = !1;
    var l = o.firstBaseUpdate,
      a = o.lastBaseUpdate,
      f = o.shared.pending;
    if (f !== null) {
      o.shared.pending = null;
      var p = f,
        x = p.next;
      (p.next = null), a === null ? (l = x) : (a.next = x), (a = p);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (f = P.lastBaseUpdate),
        f !== a &&
          (f === null ? (P.firstBaseUpdate = x) : (f.next = x),
          (P.lastBaseUpdate = p)));
    }
    if (l !== null) {
      var z = o.baseState;
      (a = 0), (P = x = p = null), (f = l);
      do {
        var _ = f.lane,
          F = f.eventTime;
        if ((r & _) === _) {
          P !== null &&
            (P = P.next =
              {
                eventTime: F,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              });
          e: {
            var V = e,
              H = f;
            switch (((_ = t), (F = n), H.tag)) {
              case 1:
                if (((V = H.payload), typeof V == "function")) {
                  z = V.call(F, z, _);
                  break e;
                }
                z = V;
                break e;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = H.payload),
                  (_ = typeof V == "function" ? V.call(F, z, _) : V),
                  _ == null)
                )
                  break e;
                z = A({}, z, _);
                break e;
              case 2:
                nn = !0;
            }
          }
          f.callback !== null &&
            f.lane !== 0 &&
            ((e.flags |= 64),
            (_ = o.effects),
            _ === null ? (o.effects = [f]) : _.push(f));
        } else
          (F = {
            eventTime: F,
            lane: _,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            P === null ? ((x = P = F), (p = z)) : (P = P.next = F),
            (a |= _);
        if (((f = f.next), f === null)) {
          if (((f = o.shared.pending), f === null)) break;
          (_ = f),
            (f = _.next),
            (_.next = null),
            (o.lastBaseUpdate = _),
            (o.shared.pending = null);
        }
      } while (!0);
      if (
        (P === null && (p = z),
        (o.baseState = p),
        (o.firstBaseUpdate = x),
        (o.lastBaseUpdate = P),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (a |= o.lane), (o = o.next);
        while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      (kn |= a), (e.lanes = a), (e.memoizedState = z);
    }
  }
  function gu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(u(191, o));
          o.call(r);
        }
      }
  }
  var Tr = {},
    Ot = qt(Tr),
    Or = qt(Tr),
    Lr = qt(Tr);
  function xn(e) {
    if (e === Tr) throw Error(u(174));
    return e;
  }
  function _i(e, t) {
    switch ((we(Lr, t), we(Or, e), we(Ot, Tr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Nl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Nl(t, e));
    }
    ke(Ot), we(Ot, t);
  }
  function bn() {
    ke(Ot), ke(Or), ke(Lr);
  }
  function vu(e) {
    xn(Lr.current);
    var t = xn(Ot.current),
      n = Nl(t, e.type);
    t !== n && (we(Or, e), we(Ot, n));
  }
  function Ni(e) {
    Or.current === e && (ke(Ot), ke(Or));
  }
  var Ne = qt(0);
  function $o(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Pi = [];
  function zi() {
    for (var e = 0; e < Pi.length; e++)
      Pi[e]._workInProgressVersionPrimary = null;
    Pi.length = 0;
  }
  var Ao = ee.ReactCurrentDispatcher,
    Ri = ee.ReactCurrentBatchConfig,
    Sn = 0,
    Pe = null,
    Ie = null,
    Fe = null,
    Do = !1,
    jr = !1,
    Ir = 0,
    tp = 0;
  function Ye() {
    throw Error(u(321));
  }
  function Ti(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function Oi(e, t, n, r, o, l) {
    if (
      ((Sn = l),
      (Pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ao.current = e === null || e.memoizedState === null ? lp : ip),
      (e = n(r, o)),
      jr)
    ) {
      l = 0;
      do {
        if (((jr = !1), (Ir = 0), 25 <= l)) throw Error(u(301));
        (l += 1),
          (Fe = Ie = null),
          (t.updateQueue = null),
          (Ao.current = sp),
          (e = n(r, o));
      } while (jr);
    }
    if (
      ((Ao.current = Bo),
      (t = Ie !== null && Ie.next !== null),
      (Sn = 0),
      (Fe = Ie = Pe = null),
      (Do = !1),
      t)
    )
      throw Error(u(300));
    return e;
  }
  function Li() {
    var e = Ir !== 0;
    return (Ir = 0), e;
  }
  function Lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Fe === null ? (Pe.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
  }
  function vt() {
    if (Ie === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = Fe === null ? Pe.memoizedState : Fe.next;
    if (t !== null) (Fe = t), (Ie = e);
    else {
      if (e === null) throw Error(u(310));
      (Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        Fe === null ? (Pe.memoizedState = Fe = e) : (Fe = Fe.next = e);
    }
    return Fe;
  }
  function Mr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ji(e) {
    var t = vt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ie,
      o = r.baseQueue,
      l = n.pending;
    if (l !== null) {
      if (o !== null) {
        var a = o.next;
        (o.next = l.next), (l.next = a);
      }
      (r.baseQueue = o = l), (n.pending = null);
    }
    if (o !== null) {
      (l = o.next), (r = r.baseState);
      var f = (a = null),
        p = null,
        x = l;
      do {
        var P = x.lane;
        if ((Sn & P) === P)
          p !== null &&
            (p = p.next =
              {
                lane: 0,
                action: x.action,
                hasEagerState: x.hasEagerState,
                eagerState: x.eagerState,
                next: null,
              }),
            (r = x.hasEagerState ? x.eagerState : e(r, x.action));
        else {
          var z = {
            lane: P,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          };
          p === null ? ((f = p = z), (a = r)) : (p = p.next = z),
            (Pe.lanes |= P),
            (kn |= P);
        }
        x = x.next;
      } while (x !== null && x !== l);
      p === null ? (a = r) : (p.next = f),
        Ct(r, t.memoizedState) || (tt = !0),
        (t.memoizedState = r),
        (t.baseState = a),
        (t.baseQueue = p),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (l = o.lane), (Pe.lanes |= l), (kn |= l), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ii(e) {
    var t = vt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      l = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = (o = o.next);
      do (l = e(l, a.action)), (a = a.next);
      while (a !== o);
      Ct(l, t.memoizedState) || (tt = !0),
        (t.memoizedState = l),
        t.baseQueue === null && (t.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, r];
  }
  function wu() {}
  function xu(e, t) {
    var n = Pe,
      r = vt(),
      o = t(),
      l = !Ct(r.memoizedState, o);
    if (
      (l && ((r.memoizedState = o), (tt = !0)),
      (r = r.queue),
      Mi(Cu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || l || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Fr(9, ku.bind(null, n, r, o, t), void 0, null),
        $e === null)
      )
        throw Error(u(349));
      (Sn & 30) !== 0 || Su(n, t, o);
    }
    return o;
  }
  function Su(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ku(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Eu(t) && _u(e);
  }
  function Cu(e, t, n) {
    return n(function () {
      Eu(t) && _u(e);
    });
  }
  function Eu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function _u(e) {
    var t = Vt(e, 1);
    t !== null && zt(t, e, 1, -1);
  }
  function Nu(e) {
    var t = Lt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = op.bind(null, Pe, e)),
      [t.memoizedState, e]
    );
  }
  function Fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Pe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Pe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Pu() {
    return vt().memoizedState;
  }
  function Uo(e, t, n, r) {
    var o = Lt();
    (Pe.flags |= e),
      (o.memoizedState = Fr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Vo(e, t, n, r) {
    var o = vt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Ie !== null) {
      var a = Ie.memoizedState;
      if (((l = a.destroy), r !== null && Ti(r, a.deps))) {
        o.memoizedState = Fr(t, n, l, r);
        return;
      }
    }
    (Pe.flags |= e), (o.memoizedState = Fr(1 | t, n, l, r));
  }
  function zu(e, t) {
    return Uo(8390656, 8, e, t);
  }
  function Mi(e, t) {
    return Vo(2048, 8, e, t);
  }
  function Ru(e, t) {
    return Vo(4, 2, e, t);
  }
  function Tu(e, t) {
    return Vo(4, 4, e, t);
  }
  function Ou(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Lu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Vo(4, 4, Ou.bind(null, t, e), n)
    );
  }
  function Fi() {}
  function ju(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ti(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Iu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ti(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Mu(e, t, n) {
    return (Sn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n))
      : (Ct(n, t) ||
          ((n = fa()), (Pe.lanes |= n), (kn |= n), (e.baseState = !0)),
        t);
  }
  function np(e, t) {
    var n = ge;
    (ge = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ri.transition;
    Ri.transition = {};
    try {
      e(!1), t();
    } finally {
      (ge = n), (Ri.transition = r);
    }
  }
  function Fu() {
    return vt().memoizedState;
  }
  function rp(e, t, n) {
    var r = an(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $u(e))
    )
      Au(t, n);
    else if (((n = mu(e, t, n, r)), n !== null)) {
      var o = Ze();
      zt(n, e, r, o), Du(n, t, r);
    }
  }
  function op(e, t, n) {
    var r = an(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if ($u(e)) Au(t, o);
    else {
      var l = e.alternate;
      if (
        e.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = t.lastRenderedReducer), l !== null)
      )
        try {
          var a = t.lastRenderedState,
            f = l(a, n);
          if (((o.hasEagerState = !0), (o.eagerState = f), Ct(f, a))) {
            var p = t.interleaved;
            p === null
              ? ((o.next = o), Ci(t))
              : ((o.next = p.next), (p.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = mu(e, t, o, r)),
        n !== null && ((o = Ze()), zt(n, e, r, o), Du(n, t, r));
    }
  }
  function $u(e) {
    var t = e.alternate;
    return e === Pe || (t !== null && t === Pe);
  }
  function Au(e, t) {
    jr = Do = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Du(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
  }
  var Bo = {
      readContext: gt,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useInsertionEffect: Ye,
      useLayoutEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useMutableSource: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      unstable_isNewReconciler: !1,
    },
    lp = {
      readContext: gt,
      useCallback: function (e, t) {
        return (Lt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: gt,
      useEffect: zu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Uo(4194308, 4, Ou.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Uo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Uo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Lt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Lt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = rp.bind(null, Pe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Lt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Nu,
      useDebugValue: Fi,
      useDeferredValue: function (e) {
        return (Lt().memoizedState = e);
      },
      useTransition: function () {
        var e = Nu(!1),
          t = e[0];
        return (e = np.bind(null, e[1])), (Lt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Pe,
          o = Lt();
        if (_e) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = t()), $e === null)) throw Error(u(349));
          (Sn & 30) !== 0 || Su(r, t, n);
        }
        o.memoizedState = n;
        var l = { value: n, getSnapshot: t };
        return (
          (o.queue = l),
          zu(Cu.bind(null, r, l, e), [e]),
          (r.flags |= 2048),
          Fr(9, ku.bind(null, r, l, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Lt(),
          t = $e.identifierPrefix;
        if (_e) {
          var n = Ut,
            r = Dt;
          (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ir++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = tp++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ip = {
      readContext: gt,
      useCallback: ju,
      useContext: gt,
      useEffect: Mi,
      useImperativeHandle: Lu,
      useInsertionEffect: Ru,
      useLayoutEffect: Tu,
      useMemo: Iu,
      useReducer: ji,
      useRef: Pu,
      useState: function () {
        return ji(Mr);
      },
      useDebugValue: Fi,
      useDeferredValue: function (e) {
        var t = vt();
        return Mu(t, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = ji(Mr)[0],
          t = vt().memoizedState;
        return [e, t];
      },
      useMutableSource: wu,
      useSyncExternalStore: xu,
      useId: Fu,
      unstable_isNewReconciler: !1,
    },
    sp = {
      readContext: gt,
      useCallback: ju,
      useContext: gt,
      useEffect: Mi,
      useImperativeHandle: Lu,
      useInsertionEffect: Ru,
      useLayoutEffect: Tu,
      useMemo: Iu,
      useReducer: Ii,
      useRef: Pu,
      useState: function () {
        return Ii(Mr);
      },
      useDebugValue: Fi,
      useDeferredValue: function (e) {
        var t = vt();
        return Ie === null ? (t.memoizedState = e) : Mu(t, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = Ii(Mr)[0],
          t = vt().memoizedState;
        return [e, t];
      },
      useMutableSource: wu,
      useSyncExternalStore: xu,
      useId: Fu,
      unstable_isNewReconciler: !1,
    };
  function _t(e, t) {
    if (e && e.defaultProps) {
      (t = A({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function $i(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : A({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? mn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        o = an(e),
        l = Bt(r, o);
      (l.payload = t),
        n != null && (l.callback = n),
        (t = rn(e, l, o)),
        t !== null && (zt(t, e, o, r), Mo(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        o = an(e),
        l = Bt(r, o);
      (l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = rn(e, l, o)),
        t !== null && (zt(t, e, o, r), Mo(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ze(),
        r = an(e),
        o = Bt(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = rn(e, o, r)),
        t !== null && (zt(t, e, r, n), Mo(t, e, r));
    },
  };
  function Uu(e, t, n, r, o, l, a) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, l, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !kr(n, r) || !kr(o, l)
        : !0
    );
  }
  function Vu(e, t, n) {
    var r = !1,
      o = en,
      l = t.contextType;
    return (
      typeof l == "object" && l !== null
        ? (l = gt(l))
        : ((o = et(t) ? yn : be.current),
          (r = t.contextTypes),
          (l = (r = r != null) ? Dn(e, o) : en)),
      (t = new t(n, l)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Wo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function Bu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
  }
  function Ai(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ei(e);
    var l = t.contextType;
    typeof l == "object" && l !== null
      ? (o.context = gt(l))
      : ((l = et(t) ? yn : be.current), (o.context = Dn(e, l))),
      (o.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == "function" && ($i(e, t, l, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Wo.enqueueReplaceState(o, o.state, null),
        Fo(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Yn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ae(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (l) {
      o =
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Di(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ui(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var ap = typeof WeakMap == "function" ? WeakMap : Map;
  function Wu(e, t, n) {
    (n = Bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ko || ((Ko = !0), (ts = r)), Ui(e, t);
      }),
      n
    );
  }
  function Hu(e, t, n) {
    (n = Bt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          Ui(e, t);
        });
    }
    var l = e.stateNode;
    return (
      l !== null &&
        typeof l.componentDidCatch == "function" &&
        (n.callback = function () {
          Ui(e, t),
            typeof r != "function" &&
              (ln === null ? (ln = new Set([this])) : ln.add(this));
          var a = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : "",
          });
        }),
      n
    );
  }
  function Qu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ap();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = kp.bind(null, e, t, n)), t.then(e, e));
  }
  function bu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Yu(e, t, n, r, o) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Bt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = o), e);
  }
  var up = ee.ReactCurrentOwner,
    tt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? pu(t, null, n, r) : Wn(t, e.child, n, r);
  }
  function Xu(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return (
      Qn(t, o),
      (r = Oi(e, t, n, r, l, o)),
      (n = Li()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Wt(e, t, o))
        : (_e && n && mi(t), (t.flags |= 1), Je(e, t, r, o), t.child)
    );
  }
  function Gu(e, t, n, r, o) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" &&
        !as(l) &&
        l.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = l), Ku(e, t, l, r, o))
        : ((e = nl(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((l = e.child), (e.lanes & o) === 0)) {
      var a = l.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : kr), n(a, r) && e.ref === t.ref)
      )
        return Wt(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = cn(l, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ku(e, t, n, r, o) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (kr(l, r) && e.ref === t.ref)
        if (((tt = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
          (e.flags & 131072) !== 0 && (tt = !0);
        else return (t.lanes = e.lanes), Wt(e, t, o);
    }
    return Vi(e, t, n, r, o);
  }
  function Ju(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          we(Gn, dt),
          (dt |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = l !== null ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            we(Gn, dt),
            (dt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = l !== null ? l.baseLanes : n),
          we(Gn, dt),
          (dt |= r);
      }
    else
      l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        we(Gn, dt),
        (dt |= r);
    return Je(e, t, o, n), t.child;
  }
  function Zu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Vi(e, t, n, r, o) {
    var l = et(n) ? yn : be.current;
    return (
      (l = Dn(t, l)),
      Qn(t, o),
      (n = Oi(e, t, n, r, l, o)),
      (r = Li()),
      e !== null && !tt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          Wt(e, t, o))
        : (_e && r && mi(t), (t.flags |= 1), Je(e, t, n, o), t.child)
    );
  }
  function qu(e, t, n, r, o) {
    if (et(n)) {
      var l = !0;
      Po(t);
    } else l = !1;
    if ((Qn(t, o), t.stateNode === null))
      Qo(e, t), Vu(t, n, r), Ai(t, n, r, o), (r = !0);
    else if (e === null) {
      var a = t.stateNode,
        f = t.memoizedProps;
      a.props = f;
      var p = a.context,
        x = n.contextType;
      typeof x == "object" && x !== null
        ? (x = gt(x))
        : ((x = et(n) ? yn : be.current), (x = Dn(t, x)));
      var P = n.getDerivedStateFromProps,
        z =
          typeof P == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      z ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((f !== r || p !== x) && Bu(t, a, r, x)),
        (nn = !1);
      var _ = t.memoizedState;
      (a.state = _),
        Fo(t, r, a, o),
        (p = t.memoizedState),
        f !== r || _ !== p || qe.current || nn
          ? (typeof P == "function" && ($i(t, n, P, r), (p = t.memoizedState)),
            (f = nn || Uu(t, n, f, r, _, p, x))
              ? (z ||
                  (typeof a.UNSAFE_componentWillMount != "function" &&
                    typeof a.componentWillMount != "function") ||
                  (typeof a.componentWillMount == "function" &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = x),
            (r = f))
          : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (a = t.stateNode),
        hu(e, t),
        (f = t.memoizedProps),
        (x = t.type === t.elementType ? f : _t(t.type, f)),
        (a.props = x),
        (z = t.pendingProps),
        (_ = a.context),
        (p = n.contextType),
        typeof p == "object" && p !== null
          ? (p = gt(p))
          : ((p = et(n) ? yn : be.current), (p = Dn(t, p)));
      var F = n.getDerivedStateFromProps;
      (P =
        typeof F == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
        (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
          typeof a.componentWillReceiveProps != "function") ||
        ((f !== z || _ !== p) && Bu(t, a, r, p)),
        (nn = !1),
        (_ = t.memoizedState),
        (a.state = _),
        Fo(t, r, a, o);
      var V = t.memoizedState;
      f !== z || _ !== V || qe.current || nn
        ? (typeof F == "function" && ($i(t, n, F, r), (V = t.memoizedState)),
          (x = nn || Uu(t, n, x, r, _, V, p) || !1)
            ? (P ||
                (typeof a.UNSAFE_componentWillUpdate != "function" &&
                  typeof a.componentWillUpdate != "function") ||
                (typeof a.componentWillUpdate == "function" &&
                  a.componentWillUpdate(r, V, p),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                  a.UNSAFE_componentWillUpdate(r, V, p)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = V)),
          (a.props = r),
          (a.state = V),
          (a.context = p),
          (r = x))
        : (typeof a.componentDidUpdate != "function" ||
            (f === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Bi(e, t, n, r, l, o);
  }
  function Bi(e, t, n, r, o, l) {
    Zu(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return o && ou(t, n, !1), Wt(e, t, l);
    (r = t.stateNode), (up.current = t);
    var f =
      a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && a
        ? ((t.child = Wn(t, e.child, null, l)), (t.child = Wn(t, null, f, l)))
        : Je(e, t, f, l),
      (t.memoizedState = r.state),
      o && ou(t, n, !0),
      t.child
    );
  }
  function ec(e) {
    var t = e.stateNode;
    t.pendingContext
      ? nu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && nu(e, t.context, !1),
      _i(e, t.containerInfo);
  }
  function tc(e, t, n, r, o) {
    return Bn(), vi(o), (t.flags |= 256), Je(e, t, n, r), t.child;
  }
  var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function nc(e, t, n) {
    var r = t.pendingProps,
      o = Ne.current,
      l = !1,
      a = (t.flags & 128) !== 0,
      f;
    if (
      ((f = a) ||
        (f = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      f
        ? ((l = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      we(Ne, o & 1),
      e === null)
    )
      return (
        gi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((a = r.children),
            (e = r.fallback),
            l
              ? ((r = t.mode),
                (l = t.child),
                (a = { mode: "hidden", children: a }),
                (r & 1) === 0 && l !== null
                  ? ((l.childLanes = 0), (l.pendingProps = a))
                  : (l = rl(a, r, 0, null)),
                (e = Nn(e, r, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = Hi(n)),
                (t.memoizedState = Wi),
                e)
              : Qi(t, a))
      );
    if (((o = e.memoizedState), o !== null && ((f = o.dehydrated), f !== null)))
      return cp(e, t, a, r, f, o, n);
    if (l) {
      (l = r.fallback), (a = t.mode), (o = e.child), (f = o.sibling);
      var p = { mode: "hidden", children: r.children };
      return (
        (a & 1) === 0 && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = p),
            (t.deletions = null))
          : ((r = cn(o, p)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        f !== null ? (l = cn(f, l)) : ((l = Nn(l, a, n, null)), (l.flags |= 2)),
        (l.return = t),
        (r.return = t),
        (r.sibling = l),
        (t.child = r),
        (r = l),
        (l = t.child),
        (a = e.child.memoizedState),
        (a =
          a === null
            ? Hi(n)
            : {
                baseLanes: a.baseLanes | n,
                cachePool: null,
                transitions: a.transitions,
              }),
        (l.memoizedState = a),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = Wi),
        r
      );
    }
    return (
      (l = e.child),
      (e = l.sibling),
      (r = cn(l, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Qi(e, t) {
    return (
      (t = rl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ho(e, t, n, r) {
    return (
      r !== null && vi(r),
      Wn(t, e.child, null, n),
      (e = Qi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cp(e, t, n, r, o, l, a) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Di(Error(u(422)))), Ho(e, t, a, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = rl({ mode: "visible", children: r.children }, o, 0, null)),
          (l = Nn(l, o, a, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          (t.mode & 1) !== 0 && Wn(t, e.child, null, a),
          (t.child.memoizedState = Hi(a)),
          (t.memoizedState = Wi),
          l);
    if ((t.mode & 1) === 0) return Ho(e, t, a, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var f = r.dgst;
      return (
        (r = f), (l = Error(u(419))), (r = Di(l, r, void 0)), Ho(e, t, a, r)
      );
    }
    if (((f = (a & e.childLanes) !== 0), tt || f)) {
      if (((r = $e), r !== null)) {
        switch (a & -a) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = (o & (r.suspendedLanes | a)) !== 0 ? 0 : o),
          o !== 0 &&
            o !== l.retryLane &&
            ((l.retryLane = o), Vt(e, o), zt(r, e, o, -1));
      }
      return ss(), (r = Di(Error(u(421)))), Ho(e, t, a, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Cp.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = l.treeContext),
        (ft = Zt(o.nextSibling)),
        (ct = t),
        (_e = !0),
        (Et = null),
        e !== null &&
          ((ht[yt++] = Dt),
          (ht[yt++] = Ut),
          (ht[yt++] = gn),
          (Dt = e.id),
          (Ut = e.overflow),
          (gn = t)),
        (t = Qi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function rc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ki(e.return, t, n);
  }
  function bi(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = o));
  }
  function oc(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      l = r.tail;
    if ((Je(e, t, r.children, n), (r = Ne.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
          else if (e.tag === 19) rc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((we(Ne, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && $o(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            bi(t, !1, o, n, l);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && $o(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          bi(t, !0, n, null, l);
          break;
        case "together":
          bi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Qo(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Wt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (kn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = cn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function fp(e, t, n) {
    switch (t.tag) {
      case 3:
        ec(t), Bn();
        break;
      case 5:
        vu(t);
        break;
      case 1:
        et(t.type) && Po(t);
        break;
      case 4:
        _i(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        we(jo, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (we(Ne, Ne.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? nc(e, t, n)
            : (we(Ne, Ne.current & 1),
              (e = Wt(e, t, n)),
              e !== null ? e.sibling : null);
        we(Ne, Ne.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return oc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          we(Ne, Ne.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ju(e, t, n);
    }
    return Wt(e, t, n);
  }
  var lc, Yi, ic, sc;
  (lc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Yi = function () {}),
    (ic = function (e, t, n, r) {
      var o = e.memoizedProps;
      if (o !== r) {
        (e = t.stateNode), xn(Ot.current);
        var l = null;
        switch (n) {
          case "input":
            (o = kl(e, o)), (r = kl(e, r)), (l = []);
            break;
          case "select":
            (o = A({}, o, { value: void 0 })),
              (r = A({}, r, { value: void 0 })),
              (l = []);
            break;
          case "textarea":
            (o = _l(e, o)), (r = _l(e, r)), (l = []);
            break;
          default:
            typeof o.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Eo);
        }
        Pl(n, r);
        var a;
        n = null;
        for (x in o)
          if (!r.hasOwnProperty(x) && o.hasOwnProperty(x) && o[x] != null)
            if (x === "style") {
              var f = o[x];
              for (a in f) f.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
            } else
              x !== "dangerouslySetInnerHTML" &&
                x !== "children" &&
                x !== "suppressContentEditableWarning" &&
                x !== "suppressHydrationWarning" &&
                x !== "autoFocus" &&
                (d.hasOwnProperty(x)
                  ? l || (l = [])
                  : (l = l || []).push(x, null));
        for (x in r) {
          var p = r[x];
          if (
            ((f = o != null ? o[x] : void 0),
            r.hasOwnProperty(x) && p !== f && (p != null || f != null))
          )
            if (x === "style")
              if (f) {
                for (a in f)
                  !f.hasOwnProperty(a) ||
                    (p && p.hasOwnProperty(a)) ||
                    (n || (n = {}), (n[a] = ""));
                for (a in p)
                  p.hasOwnProperty(a) &&
                    f[a] !== p[a] &&
                    (n || (n = {}), (n[a] = p[a]));
              } else n || (l || (l = []), l.push(x, n)), (n = p);
            else
              x === "dangerouslySetInnerHTML"
                ? ((p = p ? p.__html : void 0),
                  (f = f ? f.__html : void 0),
                  p != null && f !== p && (l = l || []).push(x, p))
                : x === "children"
                ? (typeof p != "string" && typeof p != "number") ||
                  (l = l || []).push(x, "" + p)
                : x !== "suppressContentEditableWarning" &&
                  x !== "suppressHydrationWarning" &&
                  (d.hasOwnProperty(x)
                    ? (p != null && x === "onScroll" && Se("scroll", e),
                      l || f === p || (l = []))
                    : (l = l || []).push(x, p));
        }
        n && (l = l || []).push("style", n);
        var x = l;
        (t.updateQueue = x) && (t.flags |= 4);
      }
    }),
    (sc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function $r(e, t) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function dp(e, t, n) {
    var r = t.pendingProps;
    switch ((hi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xe(t), null;
      case 1:
        return et(t.type) && No(), Xe(t), null;
      case 3:
        return (
          (r = t.stateNode),
          bn(),
          ke(qe),
          ke(be),
          zi(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Oo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Et !== null && (os(Et), (Et = null)))),
          Yi(e, t),
          Xe(t),
          null
        );
      case 5:
        Ni(t);
        var o = xn(Lr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ic(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Xe(t), null;
          }
          if (((e = xn(Ot.current)), Oo(t))) {
            (r = t.stateNode), (n = t.type);
            var l = t.memoizedProps;
            switch (((r[Tt] = t), (r[Pr] = l), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Se("cancel", r), Se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) Se(Er[o], r);
                break;
              case "source":
                Se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Se("error", r), Se("load", r);
                break;
              case "details":
                Se("toggle", r);
                break;
              case "input":
                Vs(r, l), Se("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!l.multiple }),
                  Se("invalid", r);
                break;
              case "textarea":
                Hs(r, l), Se("invalid", r);
            }
            Pl(n, l), (o = null);
            for (var a in l)
              if (l.hasOwnProperty(a)) {
                var f = l[a];
                a === "children"
                  ? typeof f == "string"
                    ? r.textContent !== f &&
                      (l.suppressHydrationWarning !== !0 &&
                        Co(r.textContent, f, e),
                      (o = ["children", f]))
                    : typeof f == "number" &&
                      r.textContent !== "" + f &&
                      (l.suppressHydrationWarning !== !0 &&
                        Co(r.textContent, f, e),
                      (o = ["children", "" + f]))
                  : d.hasOwnProperty(a) &&
                    f != null &&
                    a === "onScroll" &&
                    Se("scroll", r);
              }
            switch (n) {
              case "input":
                qr(r), Ws(r, l, !0);
                break;
              case "textarea":
                qr(r), bs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = Eo);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (a = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ys(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = a.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
                : (e = a.createElementNS(e, n)),
              (e[Tt] = t),
              (e[Pr] = r),
              lc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((a = zl(n, r)), n)) {
                case "dialog":
                  Se("cancel", e), Se("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Se("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Er.length; o++) Se(Er[o], e);
                  o = r;
                  break;
                case "source":
                  Se("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Se("error", e), Se("load", e), (o = r);
                  break;
                case "details":
                  Se("toggle", e), (o = r);
                  break;
                case "input":
                  Vs(e, r), (o = kl(e, r)), Se("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = A({}, r, { value: void 0 })),
                    Se("invalid", e);
                  break;
                case "textarea":
                  Hs(e, r), (o = _l(e, r)), Se("invalid", e);
                  break;
                default:
                  o = r;
              }
              Pl(n, o), (f = o);
              for (l in f)
                if (f.hasOwnProperty(l)) {
                  var p = f[l];
                  l === "style"
                    ? Ks(e, p)
                    : l === "dangerouslySetInnerHTML"
                    ? ((p = p ? p.__html : void 0), p != null && Xs(e, p))
                    : l === "children"
                    ? typeof p == "string"
                      ? (n !== "textarea" || p !== "") && lr(e, p)
                      : typeof p == "number" && lr(e, "" + p)
                    : l !== "suppressContentEditableWarning" &&
                      l !== "suppressHydrationWarning" &&
                      l !== "autoFocus" &&
                      (d.hasOwnProperty(l)
                        ? p != null && l === "onScroll" && Se("scroll", e)
                        : p != null && b(e, l, p, a));
                }
              switch (n) {
                case "input":
                  qr(e), Ws(e, r, !1);
                  break;
                case "textarea":
                  qr(e), bs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ye(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (l = r.value),
                    l != null
                      ? Pn(e, !!r.multiple, l, !1)
                      : r.defaultValue != null &&
                        Pn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Eo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Xe(t), null;
      case 6:
        if (e && t.stateNode != null) sc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (((n = xn(Lr.current)), xn(Ot.current), Oo(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Tt] = t),
              (l = r.nodeValue !== n) && ((e = ct), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Co(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Co(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Tt] = t),
              (t.stateNode = r);
        }
        return Xe(t), null;
      case 13:
        if (
          (ke(Ne),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            cu(), Bn(), (t.flags |= 98560), (l = !1);
          else if (((l = Oo(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(u(317));
              l[Tt] = t;
            } else
              Bn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Xe(t), (l = !1);
          } else Et !== null && (os(Et), (Et = null)), (l = !0);
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ne.current & 1) !== 0
                  ? Me === 0 && (Me = 3)
                  : ss())),
            t.updateQueue !== null && (t.flags |= 4),
            Xe(t),
            null);
      case 4:
        return (
          bn(),
          Yi(e, t),
          e === null && _r(t.stateNode.containerInfo),
          Xe(t),
          null
        );
      case 10:
        return Si(t.type._context), Xe(t), null;
      case 17:
        return et(t.type) && No(), Xe(t), null;
      case 19:
        if ((ke(Ne), (l = t.memoizedState), l === null)) return Xe(t), null;
        if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
          if (r) $r(l, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = $o(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      $r(l, !1),
                      r = a.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (l = n),
                      (e = r),
                      (l.flags &= 14680066),
                      (a = l.alternate),
                      a === null
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.subtreeFlags = 0),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = a.childLanes),
                          (l.lanes = a.lanes),
                          (l.child = a.child),
                          (l.subtreeFlags = 0),
                          (l.deletions = null),
                          (l.memoizedProps = a.memoizedProps),
                          (l.memoizedState = a.memoizedState),
                          (l.updateQueue = a.updateQueue),
                          (l.type = a.type),
                          (e = a.dependencies),
                          (l.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return we(Ne, (Ne.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Re() > Kn &&
              ((t.flags |= 128), (r = !0), $r(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = $o(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                $r(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !a.alternate &&
                  !_e)
              )
                return Xe(t), null;
            } else
              2 * Re() - l.renderingStartTime > Kn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), $r(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((n = l.last),
              n !== null ? (n.sibling = a) : (t.child = a),
              (l.last = a));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Re()),
            (t.sibling = null),
            (n = Ne.current),
            we(Ne, r ? (n & 1) | 2 : n & 1),
            t)
          : (Xe(t), null);
      case 22:
      case 23:
        return (
          is(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (dt & 1073741824) !== 0 &&
              (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Xe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function pp(e, t) {
    switch ((hi(t), t.tag)) {
      case 1:
        return (
          et(t.type) && No(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          bn(),
          ke(qe),
          ke(be),
          zi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Ni(t), null;
      case 13:
        if (
          (ke(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Bn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ke(Ne), null;
      case 4:
        return bn(), null;
      case 10:
        return Si(t.type._context), null;
      case 22:
      case 23:
        return is(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bo = !1,
    Ge = !1,
    mp = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function Xn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ze(e, t, r);
        }
      else n.current = null;
  }
  function Xi(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var ac = !1;
  function hp(e, t) {
    if (((ii = fo), (e = Ua()), Zl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0,
              f = -1,
              p = -1,
              x = 0,
              P = 0,
              z = e,
              _ = null;
            t: for (;;) {
              for (
                var F;
                z !== n || (o !== 0 && z.nodeType !== 3) || (f = a + o),
                  z !== l || (r !== 0 && z.nodeType !== 3) || (p = a + r),
                  z.nodeType === 3 && (a += z.nodeValue.length),
                  (F = z.firstChild) !== null;

              )
                (_ = z), (z = F);
              for (;;) {
                if (z === e) break t;
                if (
                  (_ === n && ++x === o && (f = a),
                  _ === l && ++P === r && (p = a),
                  (F = z.nextSibling) !== null)
                )
                  break;
                (z = _), (_ = z.parentNode);
              }
              z = F;
            }
            n = f === -1 || p === -1 ? null : { start: f, end: p };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      si = { focusedElem: e, selectionRange: n }, fo = !1, U = t;
      U !== null;

    )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (U = e);
      else
        for (; U !== null; ) {
          t = U;
          try {
            var V = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (V !== null) {
                    var H = V.memoizedProps,
                      Te = V.memoizedState,
                      g = t.stateNode,
                      h = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? H : _t(t.type, H),
                        Te
                      );
                    g.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (L) {
            ze(t, t.return, L);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (U = e);
            break;
          }
          U = t.return;
        }
    return (V = ac), (ac = !1), V;
  }
  function Ar(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var l = o.destroy;
          (o.destroy = void 0), l !== void 0 && Xi(t, n, l);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Yo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Gi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function uc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), uc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Tt],
          delete t[Pr],
          delete t[fi],
          delete t[Jd],
          delete t[Zd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function cc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || cc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ki(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Eo));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ki(e, t, n), e = e.sibling; e !== null; )
        Ki(e, t, n), (e = e.sibling);
  }
  function Ji(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ji(e, t, n), e = e.sibling; e !== null; )
        Ji(e, t, n), (e = e.sibling);
  }
  var Ue = null,
    Nt = !1;
  function on(e, t, n) {
    for (n = n.child; n !== null; ) dc(e, t, n), (n = n.sibling);
  }
  function dc(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
      try {
        Rt.onCommitFiberUnmount(lo, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ge || Xn(n, t);
      case 6:
        var r = Ue,
          o = Nt;
        (Ue = null),
          on(e, t, n),
          (Ue = r),
          (Nt = o),
          Ue !== null &&
            (Nt
              ? ((e = Ue),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null &&
          (Nt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8
                ? ci(e.parentNode, n)
                : e.nodeType === 1 && ci(e, n),
              yr(e))
            : ci(Ue, n.stateNode));
        break;
      case 4:
        (r = Ue),
          (o = Nt),
          (Ue = n.stateNode.containerInfo),
          (Nt = !0),
          on(e, t, n),
          (Ue = r),
          (Nt = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ge &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var l = o,
              a = l.destroy;
            (l = l.tag),
              a !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Xi(n, t, a),
              (o = o.next);
          } while (o !== r);
        }
        on(e, t, n);
        break;
      case 1:
        if (
          !Ge &&
          (Xn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (f) {
            ze(n, t, f);
          }
        on(e, t, n);
        break;
      case 21:
        on(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ge = (r = Ge) || n.memoizedState !== null), on(e, t, n), (Ge = r))
          : on(e, t, n);
        break;
      default:
        on(e, t, n);
    }
  }
  function pc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new mp()),
        t.forEach(function (r) {
          var o = Ep.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var l = e,
            a = t,
            f = a;
          e: for (; f !== null; ) {
            switch (f.tag) {
              case 5:
                (Ue = f.stateNode), (Nt = !1);
                break e;
              case 3:
                (Ue = f.stateNode.containerInfo), (Nt = !0);
                break e;
              case 4:
                (Ue = f.stateNode.containerInfo), (Nt = !0);
                break e;
            }
            f = f.return;
          }
          if (Ue === null) throw Error(u(160));
          dc(l, a, o), (Ue = null), (Nt = !1);
          var p = o.alternate;
          p !== null && (p.return = null), (o.return = null);
        } catch (x) {
          ze(o, t, x);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) mc(t, e), (t = t.sibling);
  }
  function mc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Pt(t, e), jt(e), r & 4)) {
          try {
            Ar(3, e, e.return), Yo(3, e);
          } catch (H) {
            ze(e, e.return, H);
          }
          try {
            Ar(5, e, e.return);
          } catch (H) {
            ze(e, e.return, H);
          }
        }
        break;
      case 1:
        Pt(t, e), jt(e), r & 512 && n !== null && Xn(n, n.return);
        break;
      case 5:
        if (
          (Pt(t, e),
          jt(e),
          r & 512 && n !== null && Xn(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            lr(o, "");
          } catch (H) {
            ze(e, e.return, H);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var l = e.memoizedProps,
            a = n !== null ? n.memoizedProps : l,
            f = e.type,
            p = e.updateQueue;
          if (((e.updateQueue = null), p !== null))
            try {
              f === "input" && l.type === "radio" && l.name != null && Bs(o, l),
                zl(f, a);
              var x = zl(f, l);
              for (a = 0; a < p.length; a += 2) {
                var P = p[a],
                  z = p[a + 1];
                P === "style"
                  ? Ks(o, z)
                  : P === "dangerouslySetInnerHTML"
                  ? Xs(o, z)
                  : P === "children"
                  ? lr(o, z)
                  : b(o, P, z, x);
              }
              switch (f) {
                case "input":
                  Cl(o, l);
                  break;
                case "textarea":
                  Qs(o, l);
                  break;
                case "select":
                  var _ = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!l.multiple;
                  var F = l.value;
                  F != null
                    ? Pn(o, !!l.multiple, F, !1)
                    : _ !== !!l.multiple &&
                      (l.defaultValue != null
                        ? Pn(o, !!l.multiple, l.defaultValue, !0)
                        : Pn(o, !!l.multiple, l.multiple ? [] : "", !1));
              }
              o[Pr] = l;
            } catch (H) {
              ze(e, e.return, H);
            }
        }
        break;
      case 6:
        if ((Pt(t, e), jt(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (o = e.stateNode), (l = e.memoizedProps);
          try {
            o.nodeValue = l;
          } catch (H) {
            ze(e, e.return, H);
          }
        }
        break;
      case 3:
        if (
          (Pt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            yr(t.containerInfo);
          } catch (H) {
            ze(e, e.return, H);
          }
        break;
      case 4:
        Pt(t, e), jt(e);
        break;
      case 13:
        Pt(t, e),
          jt(e),
          (o = e.child),
          o.flags & 8192 &&
            ((l = o.memoizedState !== null),
            (o.stateNode.isHidden = l),
            !l ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              (es = Re())),
          r & 4 && pc(e);
        break;
      case 22:
        if (
          ((P = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ge = (x = Ge) || P), Pt(t, e), (Ge = x)) : Pt(t, e),
          jt(e),
          r & 8192)
        ) {
          if (
            ((x = e.memoizedState !== null),
            (e.stateNode.isHidden = x) && !P && (e.mode & 1) !== 0)
          )
            for (U = e, P = e.child; P !== null; ) {
              for (z = U = P; U !== null; ) {
                switch (((_ = U), (F = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ar(4, _, _.return);
                    break;
                  case 1:
                    Xn(_, _.return);
                    var V = _.stateNode;
                    if (typeof V.componentWillUnmount == "function") {
                      (r = _), (n = _.return);
                      try {
                        (t = r),
                          (V.props = t.memoizedProps),
                          (V.state = t.memoizedState),
                          V.componentWillUnmount();
                      } catch (H) {
                        ze(r, n, H);
                      }
                    }
                    break;
                  case 5:
                    Xn(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      gc(z);
                      continue;
                    }
                }
                F !== null ? ((F.return = _), (U = F)) : gc(z);
              }
              P = P.sibling;
            }
          e: for (P = null, z = e; ; ) {
            if (z.tag === 5) {
              if (P === null) {
                P = z;
                try {
                  (o = z.stateNode),
                    x
                      ? ((l = o.style),
                        typeof l.setProperty == "function"
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none"))
                      : ((f = z.stateNode),
                        (p = z.memoizedProps.style),
                        (a =
                          p != null && p.hasOwnProperty("display")
                            ? p.display
                            : null),
                        (f.style.display = Gs("display", a)));
                } catch (H) {
                  ze(e, e.return, H);
                }
              }
            } else if (z.tag === 6) {
              if (P === null)
                try {
                  z.stateNode.nodeValue = x ? "" : z.memoizedProps;
                } catch (H) {
                  ze(e, e.return, H);
                }
            } else if (
              ((z.tag !== 22 && z.tag !== 23) ||
                z.memoizedState === null ||
                z === e) &&
              z.child !== null
            ) {
              (z.child.return = z), (z = z.child);
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              P === z && (P = null), (z = z.return);
            }
            P === z && (P = null),
              (z.sibling.return = z.return),
              (z = z.sibling);
          }
        }
        break;
      case 19:
        Pt(t, e), jt(e), r & 4 && pc(e);
        break;
      case 21:
        break;
      default:
        Pt(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (cc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (lr(o, ""), (r.flags &= -33));
            var l = fc(e);
            Ji(e, l, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo,
              f = fc(e);
            Ki(e, f, a);
            break;
          default:
            throw Error(u(161));
        }
      } catch (p) {
        ze(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yp(e, t, n) {
    (U = e), hc(e);
  }
  function hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var o = U,
        l = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || bo;
        if (!a) {
          var f = o.alternate,
            p = (f !== null && f.memoizedState !== null) || Ge;
          f = bo;
          var x = Ge;
          if (((bo = a), (Ge = p) && !x))
            for (U = o; U !== null; )
              (a = U),
                (p = a.child),
                a.tag === 22 && a.memoizedState !== null
                  ? vc(o)
                  : p !== null
                  ? ((p.return = a), (U = p))
                  : vc(o);
          for (; l !== null; ) (U = l), hc(l), (l = l.sibling);
          (U = o), (bo = f), (Ge = x);
        }
        yc(e);
      } else
        (o.subtreeFlags & 8772) !== 0 && l !== null
          ? ((l.return = o), (U = l))
          : yc(e);
    }
  }
  function yc(e) {
    for (; U !== null; ) {
      var t = U;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ge || Yo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ge)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : _t(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var l = t.updateQueue;
                l !== null && gu(t, l, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  gu(t, a, n);
                }
                break;
              case 5:
                var f = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = f;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var x = t.alternate;
                  if (x !== null) {
                    var P = x.memoizedState;
                    if (P !== null) {
                      var z = P.dehydrated;
                      z !== null && yr(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          Ge || (t.flags & 512 && Gi(t));
        } catch (_) {
          ze(t, t.return, _);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function gc(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function vc(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Yo(4, t);
            } catch (p) {
              ze(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                ze(t, o, p);
              }
            }
            var l = t.return;
            try {
              Gi(t);
            } catch (p) {
              ze(t, l, p);
            }
            break;
          case 5:
            var a = t.return;
            try {
              Gi(t);
            } catch (p) {
              ze(t, a, p);
            }
        }
      } catch (p) {
        ze(t, t.return, p);
      }
      if (t === e) {
        U = null;
        break;
      }
      var f = t.sibling;
      if (f !== null) {
        (f.return = t.return), (U = f);
        break;
      }
      U = t.return;
    }
  }
  var gp = Math.ceil,
    Xo = ee.ReactCurrentDispatcher,
    Zi = ee.ReactCurrentOwner,
    wt = ee.ReactCurrentBatchConfig,
    se = 0,
    $e = null,
    Oe = null,
    Ve = 0,
    dt = 0,
    Gn = qt(0),
    Me = 0,
    Dr = null,
    kn = 0,
    Go = 0,
    qi = 0,
    Ur = null,
    nt = null,
    es = 0,
    Kn = 1 / 0,
    Ht = null,
    Ko = !1,
    ts = null,
    ln = null,
    Jo = !1,
    sn = null,
    Zo = 0,
    Vr = 0,
    ns = null,
    qo = -1,
    el = 0;
  function Ze() {
    return (se & 6) !== 0 ? Re() : qo !== -1 ? qo : (qo = Re());
  }
  function an(e) {
    return (e.mode & 1) === 0
      ? 1
      : (se & 2) !== 0 && Ve !== 0
      ? Ve & -Ve
      : ep.transition !== null
      ? (el === 0 && (el = fa()), el)
      : ((e = ge),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xa(e.type))),
        e);
  }
  function zt(e, t, n, r) {
    if (50 < Vr) throw ((Vr = 0), (ns = null), Error(u(185)));
    fr(e, n, r),
      ((se & 2) === 0 || e !== $e) &&
        (e === $e && ((se & 2) === 0 && (Go |= n), Me === 4 && un(e, Ve)),
        rt(e, r),
        n === 1 &&
          se === 0 &&
          (t.mode & 1) === 0 &&
          ((Kn = Re() + 500), zo && tn()));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    ed(e, t);
    var r = ao(e, e === $e ? Ve : 0);
    if (r === 0)
      n !== null && aa(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && aa(n), t === 1))
        e.tag === 0 ? qd(xc.bind(null, e)) : lu(xc.bind(null, e)),
          Gd(function () {
            (se & 6) === 0 && tn();
          }),
          (n = null);
      else {
        switch (da(r)) {
          case 1:
            n = Ml;
            break;
          case 4:
            n = ua;
            break;
          case 16:
            n = oo;
            break;
          case 536870912:
            n = ca;
            break;
          default:
            n = oo;
        }
        n = zc(n, wc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function wc(e, t) {
    if (((qo = -1), (el = 0), (se & 6) !== 0)) throw Error(u(327));
    var n = e.callbackNode;
    if (Jn() && e.callbackNode !== n) return null;
    var r = ao(e, e === $e ? Ve : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = tl(e, r);
    else {
      t = r;
      var o = se;
      se |= 2;
      var l = kc();
      ($e !== e || Ve !== t) && ((Ht = null), (Kn = Re() + 500), En(e, t));
      do
        try {
          xp();
          break;
        } catch (f) {
          Sc(e, f);
        }
      while (!0);
      xi(),
        (Xo.current = l),
        (se = o),
        Oe !== null ? (t = 0) : (($e = null), (Ve = 0), (t = Me));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = Fl(e)), o !== 0 && ((r = o), (t = rs(e, o)))),
        t === 1)
      )
        throw ((n = Dr), En(e, 0), un(e, r), rt(e, Re()), n);
      if (t === 6) un(e, r);
      else {
        if (
          ((o = e.current.alternate),
          (r & 30) === 0 &&
            !vp(o) &&
            ((t = tl(e, r)),
            t === 2 && ((l = Fl(e)), l !== 0 && ((r = l), (t = rs(e, l)))),
            t === 1))
        )
          throw ((n = Dr), En(e, 0), un(e, r), rt(e, Re()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            _n(e, nt, Ht);
            break;
          case 3:
            if (
              (un(e, r),
              (r & 130023424) === r && ((t = es + 500 - Re()), 10 < t))
            ) {
              if (ao(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                Ze(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = ui(_n.bind(null, e, nt, Ht), t);
              break;
            }
            _n(e, nt, Ht);
            break;
          case 4:
            if ((un(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - kt(r);
              (l = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~l);
            }
            if (
              ((r = o),
              (r = Re() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * gp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ui(_n.bind(null, e, nt, Ht), r);
              break;
            }
            _n(e, nt, Ht);
            break;
          case 5:
            _n(e, nt, Ht);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return rt(e, Re()), e.callbackNode === n ? wc.bind(null, e) : null;
  }
  function rs(e, t) {
    var n = Ur;
    return (
      e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
      (e = tl(e, t)),
      e !== 2 && ((t = nt), (nt = n), t !== null && os(t)),
      e
    );
  }
  function os(e) {
    nt === null ? (nt = e) : nt.push.apply(nt, e);
  }
  function vp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              l = o.getSnapshot;
            o = o.value;
            try {
              if (!Ct(l(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function un(e, t) {
    for (
      t &= ~qi,
        t &= ~Go,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - kt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function xc(e) {
    if ((se & 6) !== 0) throw Error(u(327));
    Jn();
    var t = ao(e, 0);
    if ((t & 1) === 0) return rt(e, Re()), null;
    var n = tl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Fl(e);
      r !== 0 && ((t = r), (n = rs(e, r)));
    }
    if (n === 1) throw ((n = Dr), En(e, 0), un(e, t), rt(e, Re()), n);
    if (n === 6) throw Error(u(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      _n(e, nt, Ht),
      rt(e, Re()),
      null
    );
  }
  function ls(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      (se = n), se === 0 && ((Kn = Re() + 500), zo && tn());
    }
  }
  function Cn(e) {
    sn !== null && sn.tag === 0 && (se & 6) === 0 && Jn();
    var t = se;
    se |= 1;
    var n = wt.transition,
      r = ge;
    try {
      if (((wt.transition = null), (ge = 1), e)) return e();
    } finally {
      (ge = r), (wt.transition = n), (se = t), (se & 6) === 0 && tn();
    }
  }
  function is() {
    (dt = Gn.current), ke(Gn);
  }
  function En(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Xd(n)), Oe !== null))
      for (n = Oe.return; n !== null; ) {
        var r = n;
        switch ((hi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && No();
            break;
          case 3:
            bn(), ke(qe), ke(be), zi();
            break;
          case 5:
            Ni(r);
            break;
          case 4:
            bn();
            break;
          case 13:
            ke(Ne);
            break;
          case 19:
            ke(Ne);
            break;
          case 10:
            Si(r.type._context);
            break;
          case 22:
          case 23:
            is();
        }
        n = n.return;
      }
    if (
      (($e = e),
      (Oe = e = cn(e.current, null)),
      (Ve = dt = t),
      (Me = 0),
      (Dr = null),
      (qi = Go = kn = 0),
      (nt = Ur = null),
      wn !== null)
    ) {
      for (t = 0; t < wn.length; t++)
        if (((n = wn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            l = n.pending;
          if (l !== null) {
            var a = l.next;
            (l.next = o), (r.next = a);
          }
          n.pending = r;
        }
      wn = null;
    }
    return e;
  }
  function Sc(e, t) {
    do {
      var n = Oe;
      try {
        if ((xi(), (Ao.current = Bo), Do)) {
          for (var r = Pe.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          Do = !1;
        }
        if (
          ((Sn = 0),
          (Fe = Ie = Pe = null),
          (jr = !1),
          (Ir = 0),
          (Zi.current = null),
          n === null || n.return === null)
        ) {
          (Me = 1), (Dr = t), (Oe = null);
          break;
        }
        e: {
          var l = e,
            a = n.return,
            f = n,
            p = t;
          if (
            ((t = Ve),
            (f.flags |= 32768),
            p !== null && typeof p == "object" && typeof p.then == "function")
          ) {
            var x = p,
              P = f,
              z = P.tag;
            if ((P.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var _ = P.alternate;
              _
                ? ((P.updateQueue = _.updateQueue),
                  (P.memoizedState = _.memoizedState),
                  (P.lanes = _.lanes))
                : ((P.updateQueue = null), (P.memoizedState = null));
            }
            var F = bu(a);
            if (F !== null) {
              (F.flags &= -257),
                Yu(F, a, f, l, t),
                F.mode & 1 && Qu(l, x, t),
                (t = F),
                (p = x);
              var V = t.updateQueue;
              if (V === null) {
                var H = new Set();
                H.add(p), (t.updateQueue = H);
              } else V.add(p);
              break e;
            } else {
              if ((t & 1) === 0) {
                Qu(l, x, t), ss();
                break e;
              }
              p = Error(u(426));
            }
          } else if (_e && f.mode & 1) {
            var Te = bu(a);
            if (Te !== null) {
              (Te.flags & 65536) === 0 && (Te.flags |= 256),
                Yu(Te, a, f, l, t),
                vi(Yn(p, f));
              break e;
            }
          }
          (l = p = Yn(p, f)),
            Me !== 4 && (Me = 2),
            Ur === null ? (Ur = [l]) : Ur.push(l),
            (l = a);
          do {
            switch (l.tag) {
              case 3:
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var g = Wu(l, p, t);
                yu(l, g);
                break e;
              case 1:
                f = p;
                var h = l.type,
                  v = l.stateNode;
                if (
                  (l.flags & 128) === 0 &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (ln === null || !ln.has(v))))
                ) {
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                  var L = Hu(l, f, t);
                  yu(l, L);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Ec(n);
      } catch (Q) {
        (t = Q), Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function kc() {
    var e = Xo.current;
    return (Xo.current = Bo), e === null ? Bo : e;
  }
  function ss() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
      $e === null ||
        ((kn & 268435455) === 0 && (Go & 268435455) === 0) ||
        un($e, Ve);
  }
  function tl(e, t) {
    var n = se;
    se |= 2;
    var r = kc();
    ($e !== e || Ve !== t) && ((Ht = null), En(e, t));
    do
      try {
        wp();
        break;
      } catch (o) {
        Sc(e, o);
      }
    while (!0);
    if ((xi(), (se = n), (Xo.current = r), Oe !== null)) throw Error(u(261));
    return ($e = null), (Ve = 0), Me;
  }
  function wp() {
    for (; Oe !== null; ) Cc(Oe);
  }
  function xp() {
    for (; Oe !== null && !Qf(); ) Cc(Oe);
  }
  function Cc(e) {
    var t = Pc(e.alternate, e, dt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ec(e) : (Oe = t),
      (Zi.current = null);
  }
  function Ec(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = dp(n, t, dt)), n !== null)) {
          Oe = n;
          return;
        }
      } else {
        if (((n = pp(n, t)), n !== null)) {
          (n.flags &= 32767), (Oe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Me = 6), (Oe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function _n(e, t, n) {
    var r = ge,
      o = wt.transition;
    try {
      (wt.transition = null), (ge = 1), Sp(e, t, n, r);
    } finally {
      (wt.transition = o), (ge = r);
    }
    return null;
  }
  function Sp(e, t, n, r) {
    do Jn();
    while (sn !== null);
    if ((se & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(u(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
      (td(e, l),
      e === $e && ((Oe = $e = null), (Ve = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Jo ||
        ((Jo = !0),
        zc(oo, function () {
          return Jn(), null;
        })),
      (l = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || l)
    ) {
      (l = wt.transition), (wt.transition = null);
      var a = ge;
      ge = 1;
      var f = se;
      (se |= 4),
        (Zi.current = null),
        hp(e, n),
        mc(n, e),
        Vd(si),
        (fo = !!ii),
        (si = ii = null),
        (e.current = n),
        yp(n),
        bf(),
        (se = f),
        (ge = a),
        (wt.transition = l);
    } else e.current = n;
    if (
      (Jo && ((Jo = !1), (sn = e), (Zo = o)),
      (l = e.pendingLanes),
      l === 0 && (ln = null),
      Gf(n.stateNode),
      rt(e, Re()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Ko) throw ((Ko = !1), (e = ts), (ts = null), e);
    return (
      (Zo & 1) !== 0 && e.tag !== 0 && Jn(),
      (l = e.pendingLanes),
      (l & 1) !== 0 ? (e === ns ? Vr++ : ((Vr = 0), (ns = e))) : (Vr = 0),
      tn(),
      null
    );
  }
  function Jn() {
    if (sn !== null) {
      var e = da(Zo),
        t = wt.transition,
        n = ge;
      try {
        if (((wt.transition = null), (ge = 16 > e ? 16 : e), sn === null))
          var r = !1;
        else {
          if (((e = sn), (sn = null), (Zo = 0), (se & 6) !== 0))
            throw Error(u(331));
          var o = se;
          for (se |= 4, U = e.current; U !== null; ) {
            var l = U,
              a = l.child;
            if ((U.flags & 16) !== 0) {
              var f = l.deletions;
              if (f !== null) {
                for (var p = 0; p < f.length; p++) {
                  var x = f[p];
                  for (U = x; U !== null; ) {
                    var P = U;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ar(8, P, l);
                    }
                    var z = P.child;
                    if (z !== null) (z.return = P), (U = z);
                    else
                      for (; U !== null; ) {
                        P = U;
                        var _ = P.sibling,
                          F = P.return;
                        if ((uc(P), P === x)) {
                          U = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = F), (U = _);
                          break;
                        }
                        U = F;
                      }
                  }
                }
                var V = l.alternate;
                if (V !== null) {
                  var H = V.child;
                  if (H !== null) {
                    V.child = null;
                    do {
                      var Te = H.sibling;
                      (H.sibling = null), (H = Te);
                    } while (H !== null);
                  }
                }
                U = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && a !== null)
              (a.return = l), (U = a);
            else
              e: for (; U !== null; ) {
                if (((l = U), (l.flags & 2048) !== 0))
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(9, l, l.return);
                  }
                var g = l.sibling;
                if (g !== null) {
                  (g.return = l.return), (U = g);
                  break e;
                }
                U = l.return;
              }
          }
          var h = e.current;
          for (U = h; U !== null; ) {
            a = U;
            var v = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && v !== null)
              (v.return = a), (U = v);
            else
              e: for (a = h; U !== null; ) {
                if (((f = U), (f.flags & 2048) !== 0))
                  try {
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yo(9, f);
                    }
                  } catch (Q) {
                    ze(f, f.return, Q);
                  }
                if (f === a) {
                  U = null;
                  break e;
                }
                var L = f.sibling;
                if (L !== null) {
                  (L.return = f.return), (U = L);
                  break e;
                }
                U = f.return;
              }
          }
          if (
            ((se = o),
            tn(),
            Rt && typeof Rt.onPostCommitFiberRoot == "function")
          )
            try {
              Rt.onPostCommitFiberRoot(lo, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ge = n), (wt.transition = t);
      }
    }
    return !1;
  }
  function _c(e, t, n) {
    (t = Yn(n, t)),
      (t = Wu(e, t, 1)),
      (e = rn(e, t, 1)),
      (t = Ze()),
      e !== null && (fr(e, 1, t), rt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) _c(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _c(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (ln === null || !ln.has(r)))
          ) {
            (e = Yn(n, e)),
              (e = Hu(t, e, 1)),
              (t = rn(t, e, 1)),
              (e = Ze()),
              t !== null && (fr(t, 1, e), rt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function kp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      $e === e &&
        (Ve & n) === n &&
        (Me === 4 || (Me === 3 && (Ve & 130023424) === Ve && 500 > Re() - es)
          ? En(e, 0)
          : (qi |= n)),
      rt(e, t);
  }
  function Nc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = so), (so <<= 1), (so & 130023424) === 0 && (so = 4194304)));
    var n = Ze();
    (e = Vt(e, t)), e !== null && (fr(e, t, n), rt(e, n));
  }
  function Cp(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Nc(e, n);
  }
  function Ep(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), Nc(e, n);
  }
  var Pc;
  Pc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || qe.current) tt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (tt = !1), fp(e, t, n);
        tt = (e.flags & 131072) !== 0;
      }
    else (tt = !1), _e && (t.flags & 1048576) !== 0 && iu(t, To, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Qo(e, t), (e = t.pendingProps);
        var o = Dn(t, be.current);
        Qn(t, n), (o = Oi(null, t, r, e, o, n));
        var l = Li();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              et(r) ? ((l = !0), Po(t)) : (l = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              Ei(t),
              (o.updater = Wo),
              (t.stateNode = o),
              (o._reactInternals = t),
              Ai(t, r, e, n),
              (t = Bi(null, t, r, !0, l, n)))
            : ((t.tag = 0), _e && l && mi(t), Je(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Qo(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = Np(r)),
            (e = _t(r, e)),
            o)
          ) {
            case 0:
              t = Vi(null, t, r, e, n);
              break e;
            case 1:
              t = qu(null, t, r, e, n);
              break e;
            case 11:
              t = Xu(null, t, r, e, n);
              break e;
            case 14:
              t = Gu(null, t, r, _t(r.type, e), n);
              break e;
          }
          throw Error(u(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          Vi(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          qu(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((ec(t), e === null)) throw Error(u(387));
          (r = t.pendingProps),
            (l = t.memoizedState),
            (o = l.element),
            hu(e, t),
            Fo(t, r, null, n);
          var a = t.memoizedState;
          if (((r = a.element), l.isDehydrated))
            if (
              ((l = {
                element: r,
                isDehydrated: !1,
                cache: a.cache,
                pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                transitions: a.transitions,
              }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              (o = Yn(Error(u(423)), t)), (t = tc(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = Yn(Error(u(424)), t)), (t = tc(e, t, r, n, o));
              break e;
            } else
              for (
                ft = Zt(t.stateNode.containerInfo.firstChild),
                  ct = t,
                  _e = !0,
                  Et = null,
                  n = pu(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Bn(), r === o)) {
              t = Wt(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          vu(t),
          e === null && gi(t),
          (r = t.type),
          (o = t.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (a = o.children),
          ai(r, o) ? (a = null) : l !== null && ai(r, l) && (t.flags |= 32),
          Zu(e, t),
          Je(e, t, a, n),
          t.child
        );
      case 6:
        return e === null && gi(t), null;
      case 13:
        return nc(e, t, n);
      case 4:
        return (
          _i(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Wn(t, null, r, n)) : Je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          Xu(e, t, r, o, n)
        );
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (l = t.memoizedProps),
            (a = o.value),
            we(jo, r._currentValue),
            (r._currentValue = a),
            l !== null)
          )
            if (Ct(l.value, a)) {
              if (l.children === o.children && !qe.current) {
                t = Wt(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var f = l.dependencies;
                if (f !== null) {
                  a = l.child;
                  for (var p = f.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (l.tag === 1) {
                        (p = Bt(-1, n & -n)), (p.tag = 2);
                        var x = l.updateQueue;
                        if (x !== null) {
                          x = x.shared;
                          var P = x.pending;
                          P === null
                            ? (p.next = p)
                            : ((p.next = P.next), (P.next = p)),
                            (x.pending = p);
                        }
                      }
                      (l.lanes |= n),
                        (p = l.alternate),
                        p !== null && (p.lanes |= n),
                        ki(l.return, n, t),
                        (f.lanes |= n);
                      break;
                    }
                    p = p.next;
                  }
                } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((a = l.return), a === null)) throw Error(u(341));
                  (a.lanes |= n),
                    (f = a.alternate),
                    f !== null && (f.lanes |= n),
                    ki(a, n, t),
                    (a = l.sibling);
                } else a = l.child;
                if (a !== null) a.return = l;
                else
                  for (a = l; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (((l = a.sibling), l !== null)) {
                      (l.return = a.return), (a = l);
                      break;
                    }
                    a = a.return;
                  }
                l = a;
              }
          Je(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          Qn(t, n),
          (o = gt(o)),
          (r = r(o)),
          (t.flags |= 1),
          Je(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = _t(r, t.pendingProps)),
          (o = _t(r.type, o)),
          Gu(e, t, r, o, n)
        );
      case 15:
        return Ku(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : _t(r, o)),
          Qo(e, t),
          (t.tag = 1),
          et(r) ? ((e = !0), Po(t)) : (e = !1),
          Qn(t, n),
          Vu(t, r, o),
          Ai(t, r, o, n),
          Bi(null, t, r, !0, e, n)
        );
      case 19:
        return oc(e, t, n);
      case 22:
        return Ju(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function zc(e, t) {
    return sa(e, t);
  }
  function _p(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function xt(e, t, n, r) {
    return new _p(e, t, n, r);
  }
  function as(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Np(e) {
    if (typeof e == "function") return as(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ie)) return 11;
      if (e === st) return 14;
    }
    return 2;
  }
  function cn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = xt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function nl(e, t, n, r, o, l) {
    var a = 2;
    if (((r = e), typeof e == "function")) as(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
      e: switch (e) {
        case q:
          return Nn(n.children, o, l, t);
        case We:
          (a = 8), (o |= 8);
          break;
        case mt:
          return (
            (e = xt(12, n, t, o | 2)), (e.elementType = mt), (e.lanes = l), e
          );
        case He:
          return (e = xt(13, n, t, o)), (e.elementType = He), (e.lanes = l), e;
        case Qe:
          return (e = xt(19, n, t, o)), (e.elementType = Qe), (e.lanes = l), e;
        case xe:
          return rl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case it:
                a = 10;
                break e;
              case St:
                a = 9;
                break e;
              case ie:
                a = 11;
                break e;
              case st:
                a = 14;
                break e;
              case je:
                (a = 16), (r = null);
                break e;
            }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = xt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
    );
  }
  function Nn(e, t, n, r) {
    return (e = xt(7, e, r, t)), (e.lanes = n), e;
  }
  function rl(e, t, n, r) {
    return (
      (e = xt(22, e, r, t)),
      (e.elementType = xe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function us(e, t, n) {
    return (e = xt(6, e, null, t)), (e.lanes = n), e;
  }
  function cs(e, t, n) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Pp(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $l(0)),
      (this.expirationTimes = $l(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $l(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function fs(e, t, n, r, o, l, a, f, p) {
    return (
      (e = new Pp(e, t, n, f, p)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = xt(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ei(l),
      e
    );
  }
  function zp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Rc(e) {
    if (!e) return en;
    e = e._reactInternals;
    e: {
      if (mn(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (et(n)) return ru(e, n, t);
    }
    return t;
  }
  function Tc(e, t, n, r, o, l, a, f, p) {
    return (
      (e = fs(n, r, !0, e, o, l, a, f, p)),
      (e.context = Rc(null)),
      (n = e.current),
      (r = Ze()),
      (o = an(n)),
      (l = Bt(r, o)),
      (l.callback = t ?? null),
      rn(n, l, o),
      (e.current.lanes = o),
      fr(e, o, r),
      rt(e, r),
      e
    );
  }
  function ol(e, t, n, r) {
    var o = t.current,
      l = Ze(),
      a = an(o);
    return (
      (n = Rc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Bt(l, a)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = rn(o, t, a)),
      e !== null && (zt(e, o, a, l), Mo(e, o, a)),
      a
    );
  }
  function ll(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Oc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ds(e, t) {
    Oc(e, t), (e = e.alternate) && Oc(e, t);
  }
  function Rp() {
    return null;
  }
  var Lc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ps(e) {
    this._internalRoot = e;
  }
  (il.prototype.render = ps.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      ol(e, t, null, null);
    }),
    (il.prototype.unmount = ps.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Cn(function () {
            ol(null, e, null, null);
          }),
            (t[$t] = null);
        }
      });
  function il(e) {
    this._internalRoot = e;
  }
  il.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ha();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
      Gt.splice(n, 0, e), n === 0 && va(e);
    }
  };
  function ms(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function sl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function jc() {}
  function Tp(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var l = r;
        r = function () {
          var x = ll(a);
          l.call(x);
        };
      }
      var a = Tc(t, r, e, 0, null, !1, !1, "", jc);
      return (
        (e._reactRootContainer = a),
        (e[$t] = a.current),
        _r(e.nodeType === 8 ? e.parentNode : e),
        Cn(),
        a
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var f = r;
      r = function () {
        var x = ll(p);
        f.call(x);
      };
    }
    var p = fs(e, 0, !1, null, null, !1, !1, "", jc);
    return (
      (e._reactRootContainer = p),
      (e[$t] = p.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      Cn(function () {
        ol(t, p, n, r);
      }),
      p
    );
  }
  function al(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
      var a = l;
      if (typeof o == "function") {
        var f = o;
        o = function () {
          var p = ll(a);
          f.call(p);
        };
      }
      ol(t, a, e, o);
    } else a = Tp(n, t, e, o, r);
    return ll(a);
  }
  (pa = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = cr(t.pendingLanes);
          n !== 0 &&
            (Al(t, n | 1),
            rt(t, Re()),
            (se & 6) === 0 && ((Kn = Re() + 500), tn()));
        }
        break;
      case 13:
        Cn(function () {
          var r = Vt(e, 1);
          if (r !== null) {
            var o = Ze();
            zt(r, e, 1, o);
          }
        }),
          ds(e, 1);
    }
  }),
    (Dl = function (e) {
      if (e.tag === 13) {
        var t = Vt(e, 134217728);
        if (t !== null) {
          var n = Ze();
          zt(t, e, 134217728, n);
        }
        ds(e, 134217728);
      }
    }),
    (ma = function (e) {
      if (e.tag === 13) {
        var t = an(e),
          n = Vt(e, t);
        if (n !== null) {
          var r = Ze();
          zt(n, e, t, r);
        }
        ds(e, t);
      }
    }),
    (ha = function () {
      return ge;
    }),
    (ya = function (e, t) {
      var n = ge;
      try {
        return (ge = e), t();
      } finally {
        ge = n;
      }
    }),
    (Ol = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var o = _o(r);
                if (!o) throw Error(u(90));
                Us(r), Cl(r, o);
              }
            }
          }
          break;
        case "textarea":
          Qs(e, n);
          break;
        case "select":
          (t = n.value), t != null && Pn(e, !!n.multiple, t, !1);
      }
    }),
    (ea = ls),
    (ta = Cn);
  var Op = { usingClientEntryPoint: !1, Events: [zr, $n, _o, Zs, qs, ls] },
    Br = {
      findFiberByHostInstance: hn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Lp = {
      bundleType: Br.bundleType,
      version: Br.version,
      rendererPackageName: Br.rendererPackageName,
      rendererConfig: Br.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = la(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Br.findFiberByHostInstance || Rp,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ul.isDisabled && ul.supportsFiber)
      try {
        (lo = ul.inject(Lp)), (Rt = ul);
      } catch {}
  }
  return (
    (ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op),
    (ot.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ms(t)) throw Error(u(200));
      return zp(e, t, null, n);
    }),
    (ot.createRoot = function (e, t) {
      if (!ms(e)) throw Error(u(299));
      var n = !1,
        r = "",
        o = Lc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = fs(e, 1, !1, null, null, n, !1, r, o)),
        (e[$t] = t.current),
        _r(e.nodeType === 8 ? e.parentNode : e),
        new ps(t)
      );
    }),
    (ot.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(u(188))
          : ((e = Object.keys(e).join(",")), Error(u(268, e)));
      return (e = la(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ot.flushSync = function (e) {
      return Cn(e);
    }),
    (ot.hydrate = function (e, t, n) {
      if (!sl(t)) throw Error(u(200));
      return al(null, e, t, !0, n);
    }),
    (ot.hydrateRoot = function (e, t, n) {
      if (!ms(e)) throw Error(u(405));
      var r = (n != null && n.hydratedSources) || null,
        o = !1,
        l = "",
        a = Lc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (o = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = Tc(t, null, e, 1, n ?? null, o, !1, l, a)),
        (e[$t] = t.current),
        _r(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (o = n._getVersion),
            (o = o(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, o])
              : t.mutableSourceEagerHydrationData.push(n, o);
      return new il(t);
    }),
    (ot.render = function (e, t, n) {
      if (!sl(t)) throw Error(u(200));
      return al(null, e, t, !1, n);
    }),
    (ot.unmountComponentAtNode = function (e) {
      if (!sl(e)) throw Error(u(40));
      return e._reactRootContainer
        ? (Cn(function () {
            al(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[$t] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ot.unstable_batchedUpdates = ls),
    (ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!sl(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return al(e, t, n, !1, r);
    }),
    (ot.version = "18.3.1-next-f1338f8080-20240426"),
    ot
  );
}
var Bc;
function Wp() {
  if (Bc) return gs.exports;
  Bc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (gs.exports = Bp()), gs.exports;
}
var Wc;
function Hp() {
  if (Wc) return cl;
  Wc = 1;
  var i = Wp();
  return (cl.createRoot = i.createRoot), (cl.hydrateRoot = i.hydrateRoot), cl;
}
var Qp = Hp();
function bp(i) {
  if (i.sheet) return i.sheet;
  for (var s = 0; s < document.styleSheets.length; s++)
    if (document.styleSheets[s].ownerNode === i) return document.styleSheets[s];
}
function Yp(i) {
  var s = document.createElement("style");
  return (
    s.setAttribute("data-emotion", i.key),
    i.nonce !== void 0 && s.setAttribute("nonce", i.nonce),
    s.appendChild(document.createTextNode("")),
    s.setAttribute("data-s", ""),
    s
  );
}
var Xp = (function () {
    function i(u) {
      var c = this;
      (this._insertTag = function (d) {
        var m;
        c.tags.length === 0
          ? c.insertionPoint
            ? (m = c.insertionPoint.nextSibling)
            : c.prepend
            ? (m = c.container.firstChild)
            : (m = c.before)
          : (m = c.tags[c.tags.length - 1].nextSibling),
          c.container.insertBefore(d, m),
          c.tags.push(d);
      }),
        (this.isSpeedy = u.speedy === void 0 ? !0 : u.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = u.nonce),
        (this.key = u.key),
        (this.container = u.container),
        (this.prepend = u.prepend),
        (this.insertionPoint = u.insertionPoint),
        (this.before = null);
    }
    var s = i.prototype;
    return (
      (s.hydrate = function (c) {
        c.forEach(this._insertTag);
      }),
      (s.insert = function (c) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Yp(this));
        var d = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var m = bp(d);
          try {
            m.insertRule(c, m.cssRules.length);
          } catch {}
        } else d.appendChild(document.createTextNode(c));
        this.ctr++;
      }),
      (s.flush = function () {
        this.tags.forEach(function (c) {
          var d;
          return (d = c.parentNode) == null ? void 0 : d.removeChild(c);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      i
    );
  })(),
  Ke = "-ms-",
  gl = "-moz-",
  fe = "-webkit-",
  uf = "comm",
  js = "rule",
  Is = "decl",
  Gp = "@import",
  cf = "@keyframes",
  Kp = "@layer",
  Jp = Math.abs,
  vl = String.fromCharCode,
  Zp = Object.assign;
function qp(i, s) {
  return Be(i, 0) ^ 45
    ? (((((((s << 2) ^ Be(i, 0)) << 2) ^ Be(i, 1)) << 2) ^ Be(i, 2)) << 2) ^
        Be(i, 3)
    : 0;
}
function ff(i) {
  return i.trim();
}
function e0(i, s) {
  return (i = s.exec(i)) ? i[0] : i;
}
function de(i, s, u) {
  return i.replace(s, u);
}
function Ns(i, s) {
  return i.indexOf(s);
}
function Be(i, s) {
  return i.charCodeAt(s) | 0;
}
function Yr(i, s, u) {
  return i.slice(s, u);
}
function It(i) {
  return i.length;
}
function Ms(i) {
  return i.length;
}
function fl(i, s) {
  return s.push(i), i;
}
function t0(i, s) {
  return i.map(s).join("");
}
var wl = 1,
  tr = 1,
  df = 0,
  lt = 0,
  Le = 0,
  nr = "";
function xl(i, s, u, c, d, m, w) {
  return {
    value: i,
    root: s,
    parent: u,
    type: c,
    props: d,
    children: m,
    line: wl,
    column: tr,
    length: w,
    return: "",
  };
}
function Hr(i, s) {
  return Zp(xl("", null, null, "", null, null, 0), i, { length: -i.length }, s);
}
function n0() {
  return Le;
}
function r0() {
  return (
    (Le = lt > 0 ? Be(nr, --lt) : 0), tr--, Le === 10 && ((tr = 1), wl--), Le
  );
}
function pt() {
  return (
    (Le = lt < df ? Be(nr, lt++) : 0), tr++, Le === 10 && ((tr = 1), wl++), Le
  );
}
function Ft() {
  return Be(nr, lt);
}
function ml() {
  return lt;
}
function Zr(i, s) {
  return Yr(nr, i, s);
}
function Xr(i) {
  switch (i) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function pf(i) {
  return (wl = tr = 1), (df = It((nr = i))), (lt = 0), [];
}
function mf(i) {
  return (nr = ""), i;
}
function hl(i) {
  return ff(Zr(lt - 1, Ps(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function o0(i) {
  for (; (Le = Ft()) && Le < 33; ) pt();
  return Xr(i) > 2 || Xr(Le) > 3 ? "" : " ";
}
function l0(i, s) {
  for (
    ;
    --s &&
    pt() &&
    !(Le < 48 || Le > 102 || (Le > 57 && Le < 65) || (Le > 70 && Le < 97));

  );
  return Zr(i, ml() + (s < 6 && Ft() == 32 && pt() == 32));
}
function Ps(i) {
  for (; pt(); )
    switch (Le) {
      case i:
        return lt;
      case 34:
      case 39:
        i !== 34 && i !== 39 && Ps(Le);
        break;
      case 40:
        i === 41 && Ps(i);
        break;
      case 92:
        pt();
        break;
    }
  return lt;
}
function i0(i, s) {
  for (; pt() && i + Le !== 57; ) if (i + Le === 84 && Ft() === 47) break;
  return "/*" + Zr(s, lt - 1) + "*" + vl(i === 47 ? i : pt());
}
function s0(i) {
  for (; !Xr(Ft()); ) pt();
  return Zr(i, lt);
}
function a0(i) {
  return mf(yl("", null, null, null, [""], (i = pf(i)), 0, [0], i));
}
function yl(i, s, u, c, d, m, w, S, C) {
  for (
    var T = 0,
      O = 0,
      I = w,
      $ = 0,
      X = 0,
      D = 0,
      E = 1,
      k = 1,
      B = 1,
      W = 0,
      b = "",
      ee = d,
      R = m,
      ne = c,
      q = b;
    k;

  )
    switch (((D = W), (W = pt()))) {
      case 40:
        if (D != 108 && Be(q, I - 1) == 58) {
          Ns((q += de(hl(W), "&", "&\f")), "&\f") != -1 && (B = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += hl(W);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += o0(D);
        break;
      case 92:
        q += l0(ml() - 1, 7);
        continue;
      case 47:
        switch (Ft()) {
          case 42:
          case 47:
            fl(u0(i0(pt(), ml()), s, u), C);
            break;
          default:
            q += "/";
        }
        break;
      case 123 * E:
        S[T++] = It(q) * B;
      case 125 * E:
      case 59:
      case 0:
        switch (W) {
          case 0:
          case 125:
            k = 0;
          case 59 + O:
            B == -1 && (q = de(q, /\f/g, "")),
              X > 0 &&
                It(q) - I &&
                fl(
                  X > 32
                    ? Qc(q + ";", c, u, I - 1)
                    : Qc(de(q, " ", "") + ";", c, u, I - 2),
                  C
                );
            break;
          case 59:
            q += ";";
          default:
            if (
              (fl((ne = Hc(q, s, u, T, O, d, S, b, (ee = []), (R = []), I)), m),
              W === 123)
            )
              if (O === 0) yl(q, s, ne, ne, ee, m, I, S, R);
              else
                switch ($ === 99 && Be(q, 3) === 110 ? 100 : $) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yl(
                      i,
                      ne,
                      ne,
                      c && fl(Hc(i, ne, ne, 0, 0, d, S, b, d, (ee = []), I), R),
                      d,
                      R,
                      I,
                      S,
                      c ? ee : R
                    );
                    break;
                  default:
                    yl(q, ne, ne, ne, [""], R, 0, S, R);
                }
        }
        (T = O = X = 0), (E = B = 1), (b = q = ""), (I = w);
        break;
      case 58:
        (I = 1 + It(q)), (X = D);
      default:
        if (E < 1) {
          if (W == 123) --E;
          else if (W == 125 && E++ == 0 && r0() == 125) continue;
        }
        switch (((q += vl(W)), W * E)) {
          case 38:
            B = O > 0 ? 1 : ((q += "\f"), -1);
            break;
          case 44:
            (S[T++] = (It(q) - 1) * B), (B = 1);
            break;
          case 64:
            Ft() === 45 && (q += hl(pt())),
              ($ = Ft()),
              (O = I = It((b = q += s0(ml())))),
              W++;
            break;
          case 45:
            D === 45 && It(q) == 2 && (E = 0);
        }
    }
  return m;
}
function Hc(i, s, u, c, d, m, w, S, C, T, O) {
  for (
    var I = d - 1, $ = d === 0 ? m : [""], X = Ms($), D = 0, E = 0, k = 0;
    D < c;
    ++D
  )
    for (var B = 0, W = Yr(i, I + 1, (I = Jp((E = w[D])))), b = i; B < X; ++B)
      (b = ff(E > 0 ? $[B] + " " + W : de(W, /&\f/g, $[B]))) && (C[k++] = b);
  return xl(i, s, u, d === 0 ? js : S, C, T, O);
}
function u0(i, s, u) {
  return xl(i, s, u, uf, vl(n0()), Yr(i, 2, -2), 0);
}
function Qc(i, s, u, c) {
  return xl(i, s, u, Is, Yr(i, 0, c), Yr(i, c + 1, -1), c);
}
function qn(i, s) {
  for (var u = "", c = Ms(i), d = 0; d < c; d++) u += s(i[d], d, i, s) || "";
  return u;
}
function c0(i, s, u, c) {
  switch (i.type) {
    case Kp:
      if (i.children.length) break;
    case Gp:
    case Is:
      return (i.return = i.return || i.value);
    case uf:
      return "";
    case cf:
      return (i.return = i.value + "{" + qn(i.children, c) + "}");
    case js:
      i.value = i.props.join(",");
  }
  return It((u = qn(i.children, c)))
    ? (i.return = i.value + "{" + u + "}")
    : "";
}
function f0(i) {
  var s = Ms(i);
  return function (u, c, d, m) {
    for (var w = "", S = 0; S < s; S++) w += i[S](u, c, d, m) || "";
    return w;
  };
}
function d0(i) {
  return function (s) {
    s.root || ((s = s.return) && i(s));
  };
}
function p0(i) {
  var s = Object.create(null);
  return function (u) {
    return s[u] === void 0 && (s[u] = i(u)), s[u];
  };
}
var m0 = function (s, u, c) {
    for (
      var d = 0, m = 0;
      (d = m), (m = Ft()), d === 38 && m === 12 && (u[c] = 1), !Xr(m);

    )
      pt();
    return Zr(s, lt);
  },
  h0 = function (s, u) {
    var c = -1,
      d = 44;
    do
      switch (Xr(d)) {
        case 0:
          d === 38 && Ft() === 12 && (u[c] = 1), (s[c] += m0(lt - 1, u, c));
          break;
        case 2:
          s[c] += hl(d);
          break;
        case 4:
          if (d === 44) {
            (s[++c] = Ft() === 58 ? "&\f" : ""), (u[c] = s[c].length);
            break;
          }
        default:
          s[c] += vl(d);
      }
    while ((d = pt()));
    return s;
  },
  y0 = function (s, u) {
    return mf(h0(pf(s), u));
  },
  bc = new WeakMap(),
  g0 = function (s) {
    if (!(s.type !== "rule" || !s.parent || s.length < 1)) {
      for (
        var u = s.value,
          c = s.parent,
          d = s.column === c.column && s.line === c.line;
        c.type !== "rule";

      )
        if (((c = c.parent), !c)) return;
      if (
        !(s.props.length === 1 && u.charCodeAt(0) !== 58 && !bc.get(c)) &&
        !d
      ) {
        bc.set(s, !0);
        for (
          var m = [], w = y0(u, m), S = c.props, C = 0, T = 0;
          C < w.length;
          C++
        )
          for (var O = 0; O < S.length; O++, T++)
            s.props[T] = m[C] ? w[C].replace(/&\f/g, S[O]) : S[O] + " " + w[C];
      }
    }
  },
  v0 = function (s) {
    if (s.type === "decl") {
      var u = s.value;
      u.charCodeAt(0) === 108 &&
        u.charCodeAt(2) === 98 &&
        ((s.return = ""), (s.value = ""));
    }
  };
function hf(i, s) {
  switch (qp(i, s)) {
    case 5103:
      return fe + "print-" + i + i;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return fe + i + i;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return fe + i + gl + i + Ke + i + i;
    case 6828:
    case 4268:
      return fe + i + Ke + i + i;
    case 6165:
      return fe + i + Ke + "flex-" + i + i;
    case 5187:
      return (
        fe + i + de(i, /(\w+).+(:[^]+)/, fe + "box-$1$2" + Ke + "flex-$1$2") + i
      );
    case 5443:
      return fe + i + Ke + "flex-item-" + de(i, /flex-|-self/, "") + i;
    case 4675:
      return (
        fe +
        i +
        Ke +
        "flex-line-pack" +
        de(i, /align-content|flex-|-self/, "") +
        i
      );
    case 5548:
      return fe + i + Ke + de(i, "shrink", "negative") + i;
    case 5292:
      return fe + i + Ke + de(i, "basis", "preferred-size") + i;
    case 6060:
      return (
        fe +
        "box-" +
        de(i, "-grow", "") +
        fe +
        i +
        Ke +
        de(i, "grow", "positive") +
        i
      );
    case 4554:
      return fe + de(i, /([^-])(transform)/g, "$1" + fe + "$2") + i;
    case 6187:
      return (
        de(
          de(de(i, /(zoom-|grab)/, fe + "$1"), /(image-set)/, fe + "$1"),
          i,
          ""
        ) + i
      );
    case 5495:
    case 3959:
      return de(i, /(image-set\([^]*)/, fe + "$1$`$1");
    case 4968:
      return (
        de(
          de(i, /(.+:)(flex-)?(.*)/, fe + "box-pack:$3" + Ke + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        fe +
        i +
        i
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(i, /(.+)-inline(.+)/, fe + "$1$2") + i;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (It(i) - 1 - s > 6)
        switch (Be(i, s + 1)) {
          case 109:
            if (Be(i, s + 4) !== 45) break;
          case 102:
            return (
              de(
                i,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  fe +
                  "$2-$3$1" +
                  gl +
                  (Be(i, s + 3) == 108 ? "$3" : "$2-$3")
              ) + i
            );
          case 115:
            return ~Ns(i, "stretch")
              ? hf(de(i, "stretch", "fill-available"), s) + i
              : i;
        }
      break;
    case 4949:
      if (Be(i, s + 1) !== 115) break;
    case 6444:
      switch (Be(i, It(i) - 3 - (~Ns(i, "!important") && 10))) {
        case 107:
          return de(i, ":", ":" + fe) + i;
        case 101:
          return (
            de(
              i,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                fe +
                (Be(i, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                fe +
                "$2$3$1" +
                Ke +
                "$2box$3"
            ) + i
          );
      }
      break;
    case 5936:
      switch (Be(i, s + 11)) {
        case 114:
          return fe + i + Ke + de(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return fe + i + Ke + de(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return fe + i + Ke + de(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
      return fe + i + Ke + i + i;
  }
  return i;
}
var w0 = function (s, u, c, d) {
    if (s.length > -1 && !s.return)
      switch (s.type) {
        case Is:
          s.return = hf(s.value, s.length);
          break;
        case cf:
          return qn([Hr(s, { value: de(s.value, "@", "@" + fe) })], d);
        case js:
          if (s.length)
            return t0(s.props, function (m) {
              switch (e0(m, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return qn(
                    [Hr(s, { props: [de(m, /:(read-\w+)/, ":" + gl + "$1")] })],
                    d
                  );
                case "::placeholder":
                  return qn(
                    [
                      Hr(s, {
                        props: [de(m, /:(plac\w+)/, ":" + fe + "input-$1")],
                      }),
                      Hr(s, { props: [de(m, /:(plac\w+)/, ":" + gl + "$1")] }),
                      Hr(s, { props: [de(m, /:(plac\w+)/, Ke + "input-$1")] }),
                    ],
                    d
                  );
              }
              return "";
            });
      }
  },
  x0 = [w0],
  S0 = function (s) {
    var u = s.key;
    if (u === "css") {
      var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(c, function (E) {
        var k = E.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(E), E.setAttribute("data-s", ""));
      });
    }
    var d = s.stylisPlugins || x0,
      m = {},
      w,
      S = [];
    (w = s.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + u + ' "]'),
        function (E) {
          for (
            var k = E.getAttribute("data-emotion").split(" "), B = 1;
            B < k.length;
            B++
          )
            m[k[B]] = !0;
          S.push(E);
        }
      );
    var C,
      T = [g0, v0];
    {
      var O,
        I = [
          c0,
          d0(function (E) {
            O.insert(E);
          }),
        ],
        $ = f0(T.concat(d, I)),
        X = function (k) {
          return qn(a0(k), $);
        };
      C = function (k, B, W, b) {
        (O = W),
          X(k ? k + "{" + B.styles + "}" : B.styles),
          b && (D.inserted[B.name] = !0);
      };
    }
    var D = {
      key: u,
      sheet: new Xp({
        key: u,
        container: w,
        nonce: s.nonce,
        speedy: s.speedy,
        prepend: s.prepend,
        insertionPoint: s.insertionPoint,
      }),
      nonce: s.nonce,
      inserted: m,
      registered: {},
      insert: C,
    };
    return D.sheet.hydrate(S), D;
  },
  xs = { exports: {} },
  pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc;
function k0() {
  if (Yc) return pe;
  Yc = 1;
  var i = typeof Symbol == "function" && Symbol.for,
    s = i ? Symbol.for("react.element") : 60103,
    u = i ? Symbol.for("react.portal") : 60106,
    c = i ? Symbol.for("react.fragment") : 60107,
    d = i ? Symbol.for("react.strict_mode") : 60108,
    m = i ? Symbol.for("react.profiler") : 60114,
    w = i ? Symbol.for("react.provider") : 60109,
    S = i ? Symbol.for("react.context") : 60110,
    C = i ? Symbol.for("react.async_mode") : 60111,
    T = i ? Symbol.for("react.concurrent_mode") : 60111,
    O = i ? Symbol.for("react.forward_ref") : 60112,
    I = i ? Symbol.for("react.suspense") : 60113,
    $ = i ? Symbol.for("react.suspense_list") : 60120,
    X = i ? Symbol.for("react.memo") : 60115,
    D = i ? Symbol.for("react.lazy") : 60116,
    E = i ? Symbol.for("react.block") : 60121,
    k = i ? Symbol.for("react.fundamental") : 60117,
    B = i ? Symbol.for("react.responder") : 60118,
    W = i ? Symbol.for("react.scope") : 60119;
  function b(R) {
    if (typeof R == "object" && R !== null) {
      var ne = R.$$typeof;
      switch (ne) {
        case s:
          switch (((R = R.type), R)) {
            case C:
            case T:
            case c:
            case m:
            case d:
            case I:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case S:
                case O:
                case D:
                case X:
                case w:
                  return R;
                default:
                  return ne;
              }
          }
        case u:
          return ne;
      }
    }
  }
  function ee(R) {
    return b(R) === T;
  }
  return (
    (pe.AsyncMode = C),
    (pe.ConcurrentMode = T),
    (pe.ContextConsumer = S),
    (pe.ContextProvider = w),
    (pe.Element = s),
    (pe.ForwardRef = O),
    (pe.Fragment = c),
    (pe.Lazy = D),
    (pe.Memo = X),
    (pe.Portal = u),
    (pe.Profiler = m),
    (pe.StrictMode = d),
    (pe.Suspense = I),
    (pe.isAsyncMode = function (R) {
      return ee(R) || b(R) === C;
    }),
    (pe.isConcurrentMode = ee),
    (pe.isContextConsumer = function (R) {
      return b(R) === S;
    }),
    (pe.isContextProvider = function (R) {
      return b(R) === w;
    }),
    (pe.isElement = function (R) {
      return typeof R == "object" && R !== null && R.$$typeof === s;
    }),
    (pe.isForwardRef = function (R) {
      return b(R) === O;
    }),
    (pe.isFragment = function (R) {
      return b(R) === c;
    }),
    (pe.isLazy = function (R) {
      return b(R) === D;
    }),
    (pe.isMemo = function (R) {
      return b(R) === X;
    }),
    (pe.isPortal = function (R) {
      return b(R) === u;
    }),
    (pe.isProfiler = function (R) {
      return b(R) === m;
    }),
    (pe.isStrictMode = function (R) {
      return b(R) === d;
    }),
    (pe.isSuspense = function (R) {
      return b(R) === I;
    }),
    (pe.isValidElementType = function (R) {
      return (
        typeof R == "string" ||
        typeof R == "function" ||
        R === c ||
        R === T ||
        R === m ||
        R === d ||
        R === I ||
        R === $ ||
        (typeof R == "object" &&
          R !== null &&
          (R.$$typeof === D ||
            R.$$typeof === X ||
            R.$$typeof === w ||
            R.$$typeof === S ||
            R.$$typeof === O ||
            R.$$typeof === k ||
            R.$$typeof === B ||
            R.$$typeof === W ||
            R.$$typeof === E))
      );
    }),
    (pe.typeOf = b),
    pe
  );
}
var Xc;
function C0() {
  return Xc || ((Xc = 1), (xs.exports = k0())), xs.exports;
}
var Ss, Gc;
function E0() {
  if (Gc) return Ss;
  Gc = 1;
  var i = C0(),
    s = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    u = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    c = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    d = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    m = {};
  (m[i.ForwardRef] = c), (m[i.Memo] = d);
  function w(D) {
    return i.isMemo(D) ? d : m[D.$$typeof] || s;
  }
  var S = Object.defineProperty,
    C = Object.getOwnPropertyNames,
    T = Object.getOwnPropertySymbols,
    O = Object.getOwnPropertyDescriptor,
    I = Object.getPrototypeOf,
    $ = Object.prototype;
  function X(D, E, k) {
    if (typeof E != "string") {
      if ($) {
        var B = I(E);
        B && B !== $ && X(D, B, k);
      }
      var W = C(E);
      T && (W = W.concat(T(E)));
      for (var b = w(D), ee = w(E), R = 0; R < W.length; ++R) {
        var ne = W[R];
        if (!u[ne] && !(k && k[ne]) && !(ee && ee[ne]) && !(b && b[ne])) {
          var q = O(E, ne);
          try {
            S(D, ne, q);
          } catch {}
        }
      }
    }
    return D;
  }
  return (Ss = X), Ss;
}
E0();
var _0 = !0;
function yf(i, s, u) {
  var c = "";
  return (
    u.split(" ").forEach(function (d) {
      i[d] !== void 0 ? s.push(i[d] + ";") : d && (c += d + " ");
    }),
    c
  );
}
var Fs = function (s, u, c) {
    var d = s.key + "-" + u.name;
    (c === !1 || _0 === !1) &&
      s.registered[d] === void 0 &&
      (s.registered[d] = u.styles);
  },
  gf = function (s, u, c) {
    Fs(s, u, c);
    var d = s.key + "-" + u.name;
    if (s.inserted[u.name] === void 0) {
      var m = u;
      do s.insert(u === m ? "." + d : "", m, s.sheet, !0), (m = m.next);
      while (m !== void 0);
    }
  };
function N0(i) {
  for (var s = 0, u, c = 0, d = i.length; d >= 4; ++c, d -= 4)
    (u =
      (i.charCodeAt(c) & 255) |
      ((i.charCodeAt(++c) & 255) << 8) |
      ((i.charCodeAt(++c) & 255) << 16) |
      ((i.charCodeAt(++c) & 255) << 24)),
      (u = (u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)),
      (u ^= u >>> 24),
      (s =
        ((u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)) ^
        ((s & 65535) * 1540483477 + (((s >>> 16) * 59797) << 16)));
  switch (d) {
    case 3:
      s ^= (i.charCodeAt(c + 2) & 255) << 16;
    case 2:
      s ^= (i.charCodeAt(c + 1) & 255) << 8;
    case 1:
      (s ^= i.charCodeAt(c) & 255),
        (s = (s & 65535) * 1540483477 + (((s >>> 16) * 59797) << 16));
  }
  return (
    (s ^= s >>> 13),
    (s = (s & 65535) * 1540483477 + (((s >>> 16) * 59797) << 16)),
    ((s ^ (s >>> 15)) >>> 0).toString(36)
  );
}
var P0 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  z0 = /[A-Z]|^ms/g,
  R0 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  vf = function (s) {
    return s.charCodeAt(1) === 45;
  },
  Kc = function (s) {
    return s != null && typeof s != "boolean";
  },
  ks = p0(function (i) {
    return vf(i) ? i : i.replace(z0, "-$&").toLowerCase();
  }),
  Jc = function (s, u) {
    switch (s) {
      case "animation":
      case "animationName":
        if (typeof u == "string")
          return u.replace(R0, function (c, d, m) {
            return (Mt = { name: d, styles: m, next: Mt }), d;
          });
    }
    return P0[s] !== 1 && !vf(s) && typeof u == "number" && u !== 0
      ? u + "px"
      : u;
  };
function Gr(i, s, u) {
  if (u == null) return "";
  var c = u;
  if (c.__emotion_styles !== void 0) return c;
  switch (typeof u) {
    case "boolean":
      return "";
    case "object": {
      var d = u;
      if (d.anim === 1)
        return (Mt = { name: d.name, styles: d.styles, next: Mt }), d.name;
      var m = u;
      if (m.styles !== void 0) {
        var w = m.next;
        if (w !== void 0)
          for (; w !== void 0; )
            (Mt = { name: w.name, styles: w.styles, next: Mt }), (w = w.next);
        var S = m.styles + ";";
        return S;
      }
      return T0(i, s, u);
    }
    case "function": {
      if (i !== void 0) {
        var C = Mt,
          T = u(i);
        return (Mt = C), Gr(i, s, T);
      }
      break;
    }
  }
  var O = u;
  if (s == null) return O;
  var I = s[O];
  return I !== void 0 ? I : O;
}
function T0(i, s, u) {
  var c = "";
  if (Array.isArray(u))
    for (var d = 0; d < u.length; d++) c += Gr(i, s, u[d]) + ";";
  else
    for (var m in u) {
      var w = u[m];
      if (typeof w != "object") {
        var S = w;
        s != null && s[S] !== void 0
          ? (c += m + "{" + s[S] + "}")
          : Kc(S) && (c += ks(m) + ":" + Jc(m, S) + ";");
      } else if (
        Array.isArray(w) &&
        typeof w[0] == "string" &&
        (s == null || s[w[0]] === void 0)
      )
        for (var C = 0; C < w.length; C++)
          Kc(w[C]) && (c += ks(m) + ":" + Jc(m, w[C]) + ";");
      else {
        var T = Gr(i, s, w);
        switch (m) {
          case "animation":
          case "animationName": {
            c += ks(m) + ":" + T + ";";
            break;
          }
          default:
            c += m + "{" + T + "}";
        }
      }
    }
  return c;
}
var Zc = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Mt;
function $s(i, s, u) {
  if (
    i.length === 1 &&
    typeof i[0] == "object" &&
    i[0] !== null &&
    i[0].styles !== void 0
  )
    return i[0];
  var c = !0,
    d = "";
  Mt = void 0;
  var m = i[0];
  if (m == null || m.raw === void 0) (c = !1), (d += Gr(u, s, m));
  else {
    var w = m;
    d += w[0];
  }
  for (var S = 1; S < i.length; S++)
    if (((d += Gr(u, s, i[S])), c)) {
      var C = m;
      d += C[S];
    }
  Zc.lastIndex = 0;
  for (var T = "", O; (O = Zc.exec(d)) !== null; ) T += "-" + O[1];
  var I = N0(d) + T;
  return { name: I, styles: d, next: Mt };
}
var O0 = function (s) {
    return s();
  },
  L0 = Ac.useInsertionEffect ? Ac.useInsertionEffect : !1,
  wf = L0 || O0,
  xf = he.createContext(typeof HTMLElement < "u" ? S0({ key: "css" }) : null);
xf.Provider;
var Sf = function (s) {
    return he.forwardRef(function (u, c) {
      var d = he.useContext(xf);
      return s(u, d, c);
    });
  },
  kf = he.createContext({}),
  Sl = {}.hasOwnProperty,
  zs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Cf = function (s, u) {
    var c = {};
    for (var d in u) Sl.call(u, d) && (c[d] = u[d]);
    return (c[zs] = s), c;
  },
  j0 = function (s) {
    var u = s.cache,
      c = s.serialized,
      d = s.isStringTag;
    return (
      Fs(u, c, d),
      wf(function () {
        return gf(u, c, d);
      }),
      null
    );
  },
  I0 = Sf(function (i, s, u) {
    var c = i.css;
    typeof c == "string" && s.registered[c] !== void 0 && (c = s.registered[c]);
    var d = i[zs],
      m = [c],
      w = "";
    typeof i.className == "string"
      ? (w = yf(s.registered, m, i.className))
      : i.className != null && (w = i.className + " ");
    var S = $s(m, void 0, he.useContext(kf));
    w += s.key + "-" + S.name;
    var C = {};
    for (var T in i) Sl.call(i, T) && T !== "css" && T !== zs && (C[T] = i[T]);
    return (
      (C.className = w),
      u && (C.ref = u),
      he.createElement(
        he.Fragment,
        null,
        he.createElement(j0, {
          cache: s,
          serialized: S,
          isStringTag: typeof d == "string",
        }),
        he.createElement(d, C)
      )
    );
  }),
  Ef = I0,
  M0 = J.Fragment,
  De = function (s, u, c) {
    return Sl.call(u, "css") ? J.jsx(Ef, Cf(s, u), c) : J.jsx(s, u, c);
  },
  qc = function (s, u) {
    var c = arguments;
    if (u == null || !Sl.call(u, "css"))
      return he.createElement.apply(void 0, c);
    var d = c.length,
      m = new Array(d);
    (m[0] = Ef), (m[1] = Cf(s, u));
    for (var w = 2; w < d; w++) m[w] = c[w];
    return he.createElement.apply(null, m);
  };
(function (i) {
  var s;
  s || (s = i.JSX || (i.JSX = {}));
})(qc || (qc = {}));
function _f() {
  for (var i = arguments.length, s = new Array(i), u = 0; u < i; u++)
    s[u] = arguments[u];
  return $s(s);
}
function j() {
  var i = _f.apply(void 0, arguments),
    s = "animation-" + i.name;
  return {
    name: s,
    styles: "@keyframes " + s + "{" + i.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var F0 = function i(s) {
  for (var u = s.length, c = 0, d = ""; c < u; c++) {
    var m = s[c];
    if (m != null) {
      var w = void 0;
      switch (typeof m) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(m)) w = i(m);
          else {
            w = "";
            for (var S in m) m[S] && S && (w && (w += " "), (w += S));
          }
          break;
        }
        default:
          w = m;
      }
      w && (d && (d += " "), (d += w));
    }
  }
  return d;
};
function $0(i, s, u) {
  var c = [],
    d = yf(i, c, u);
  return c.length < 2 ? u : d + s(c);
}
var A0 = function (s) {
    var u = s.cache,
      c = s.serializedArr;
    return (
      wf(function () {
        for (var d = 0; d < c.length; d++) gf(u, c[d], !1);
      }),
      null
    );
  },
  Cs = Sf(function (i, s) {
    var u = [],
      c = function () {
        for (var C = arguments.length, T = new Array(C), O = 0; O < C; O++)
          T[O] = arguments[O];
        var I = $s(T, s.registered);
        return u.push(I), Fs(s, I, !1), s.key + "-" + I.name;
      },
      d = function () {
        for (var C = arguments.length, T = new Array(C), O = 0; O < C; O++)
          T[O] = arguments[O];
        return $0(s.registered, c, F0(T));
      },
      m = { css: c, cx: d, theme: he.useContext(kf) },
      w = i.children(m);
    return he.createElement(
      he.Fragment,
      null,
      he.createElement(A0, { cache: s, serializedArr: u }),
      w
    );
  }),
  D0 = Object.defineProperty,
  U0 = (i, s, u) =>
    s in i
      ? D0(i, s, { enumerable: !0, configurable: !0, writable: !0, value: u })
      : (i[s] = u),
  dl = (i, s, u) => U0(i, typeof s != "symbol" ? s + "" : s, u),
  Rs = new Map(),
  pl = new WeakMap(),
  ef = 0,
  V0 = void 0;
function B0(i) {
  return i
    ? (pl.has(i) || ((ef += 1), pl.set(i, ef.toString())), pl.get(i))
    : "0";
}
function W0(i) {
  return Object.keys(i)
    .sort()
    .filter((s) => i[s] !== void 0)
    .map((s) => `${s}_${s === "root" ? B0(i.root) : i[s]}`)
    .toString();
}
function H0(i) {
  const s = W0(i);
  let u = Rs.get(s);
  if (!u) {
    const c = new Map();
    let d;
    const m = new IntersectionObserver((w) => {
      w.forEach((S) => {
        var C;
        const T = S.isIntersecting && d.some((O) => S.intersectionRatio >= O);
        i.trackVisibility && typeof S.isVisible > "u" && (S.isVisible = T),
          (C = c.get(S.target)) == null ||
            C.forEach((O) => {
              O(T, S);
            });
      });
    }, i);
    (d =
      m.thresholds ||
      (Array.isArray(i.threshold) ? i.threshold : [i.threshold || 0])),
      (u = { id: s, observer: m, elements: c }),
      Rs.set(s, u);
  }
  return u;
}
function Nf(i, s, u = {}, c = V0) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const C = i.getBoundingClientRect();
    return (
      s(c, {
        isIntersecting: c,
        target: i,
        intersectionRatio: typeof u.threshold == "number" ? u.threshold : 0,
        time: 0,
        boundingClientRect: C,
        intersectionRect: C,
        rootBounds: C,
      }),
      () => {}
    );
  }
  const { id: d, observer: m, elements: w } = H0(u),
    S = w.get(i) || [];
  return (
    w.has(i) || w.set(i, S),
    S.push(s),
    m.observe(i),
    function () {
      S.splice(S.indexOf(s), 1),
        S.length === 0 && (w.delete(i), m.unobserve(i)),
        w.size === 0 && (m.disconnect(), Rs.delete(d));
    }
  );
}
function Q0(i) {
  return typeof i.children != "function";
}
var tf = class extends he.Component {
  constructor(i) {
    super(i),
      dl(this, "node", null),
      dl(this, "_unobserveCb", null),
      dl(this, "handleNode", (s) => {
        this.node &&
          (this.unobserve(),
          !s &&
            !this.props.triggerOnce &&
            !this.props.skip &&
            this.setState({
              inView: !!this.props.initialInView,
              entry: void 0,
            })),
          (this.node = s || null),
          this.observeNode();
      }),
      dl(this, "handleChange", (s, u) => {
        s && this.props.triggerOnce && this.unobserve(),
          Q0(this.props) || this.setState({ inView: s, entry: u }),
          this.props.onChange && this.props.onChange(s, u);
      }),
      (this.state = { inView: !!i.initialInView, entry: void 0 });
  }
  componentDidMount() {
    this.unobserve(), this.observeNode();
  }
  componentDidUpdate(i) {
    (i.rootMargin !== this.props.rootMargin ||
      i.root !== this.props.root ||
      i.threshold !== this.props.threshold ||
      i.skip !== this.props.skip ||
      i.trackVisibility !== this.props.trackVisibility ||
      i.delay !== this.props.delay) &&
      (this.unobserve(), this.observeNode());
  }
  componentWillUnmount() {
    this.unobserve();
  }
  observeNode() {
    if (!this.node || this.props.skip) return;
    const {
      threshold: i,
      root: s,
      rootMargin: u,
      trackVisibility: c,
      delay: d,
      fallbackInView: m,
    } = this.props;
    this._unobserveCb = Nf(
      this.node,
      this.handleChange,
      { threshold: i, root: s, rootMargin: u, trackVisibility: c, delay: d },
      m
    );
  }
  unobserve() {
    this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
  }
  render() {
    const { children: i } = this.props;
    if (typeof i == "function") {
      const { inView: X, entry: D } = this.state;
      return i({ inView: X, entry: D, ref: this.handleNode });
    }
    const {
      as: s,
      triggerOnce: u,
      threshold: c,
      root: d,
      rootMargin: m,
      onChange: w,
      skip: S,
      trackVisibility: C,
      delay: T,
      initialInView: O,
      fallbackInView: I,
      ...$
    } = this.props;
    return he.createElement(s || "div", { ref: this.handleNode, ...$ }, i);
  }
};
function Pf({
  threshold: i,
  delay: s,
  trackVisibility: u,
  rootMargin: c,
  root: d,
  triggerOnce: m,
  skip: w,
  initialInView: S,
  fallbackInView: C,
  onChange: T,
} = {}) {
  var O;
  const [I, $] = he.useState(null),
    X = he.useRef(T),
    [D, E] = he.useState({ inView: !!S, entry: void 0 });
  (X.current = T),
    he.useEffect(() => {
      if (w || !I) return;
      let b;
      return (
        (b = Nf(
          I,
          (ee, R) => {
            E({ inView: ee, entry: R }),
              X.current && X.current(ee, R),
              R.isIntersecting && m && b && (b(), (b = void 0));
          },
          {
            root: d,
            rootMargin: c,
            threshold: i,
            trackVisibility: u,
            delay: s,
          },
          C
        )),
        () => {
          b && b();
        }
      );
    }, [Array.isArray(i) ? i.toString() : i, I, d, c, m, w, u, C, s]);
  const k = (O = D.entry) == null ? void 0 : O.target,
    B = he.useRef(void 0);
  !I &&
    k &&
    !m &&
    !w &&
    B.current !== k &&
    ((B.current = k), E({ inView: !!S, entry: void 0 }));
  const W = [$, D.inView, D.entry];
  return (W.ref = W[0]), (W.inView = W[1]), (W.entry = W[2]), W;
}
var Es = { exports: {} },
  me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf;
function b0() {
  if (nf) return me;
  nf = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    w = Symbol.for("react.context"),
    S = Symbol.for("react.server_context"),
    C = Symbol.for("react.forward_ref"),
    T = Symbol.for("react.suspense"),
    O = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    X = Symbol.for("react.offscreen"),
    D;
  D = Symbol.for("react.module.reference");
  function E(k) {
    if (typeof k == "object" && k !== null) {
      var B = k.$$typeof;
      switch (B) {
        case i:
          switch (((k = k.type), k)) {
            case u:
            case d:
            case c:
            case T:
            case O:
              return k;
            default:
              switch (((k = k && k.$$typeof), k)) {
                case S:
                case w:
                case C:
                case $:
                case I:
                case m:
                  return k;
                default:
                  return B;
              }
          }
        case s:
          return B;
      }
    }
  }
  return (
    (me.ContextConsumer = w),
    (me.ContextProvider = m),
    (me.Element = i),
    (me.ForwardRef = C),
    (me.Fragment = u),
    (me.Lazy = $),
    (me.Memo = I),
    (me.Portal = s),
    (me.Profiler = d),
    (me.StrictMode = c),
    (me.Suspense = T),
    (me.SuspenseList = O),
    (me.isAsyncMode = function () {
      return !1;
    }),
    (me.isConcurrentMode = function () {
      return !1;
    }),
    (me.isContextConsumer = function (k) {
      return E(k) === w;
    }),
    (me.isContextProvider = function (k) {
      return E(k) === m;
    }),
    (me.isElement = function (k) {
      return typeof k == "object" && k !== null && k.$$typeof === i;
    }),
    (me.isForwardRef = function (k) {
      return E(k) === C;
    }),
    (me.isFragment = function (k) {
      return E(k) === u;
    }),
    (me.isLazy = function (k) {
      return E(k) === $;
    }),
    (me.isMemo = function (k) {
      return E(k) === I;
    }),
    (me.isPortal = function (k) {
      return E(k) === s;
    }),
    (me.isProfiler = function (k) {
      return E(k) === d;
    }),
    (me.isStrictMode = function (k) {
      return E(k) === c;
    }),
    (me.isSuspense = function (k) {
      return E(k) === T;
    }),
    (me.isSuspenseList = function (k) {
      return E(k) === O;
    }),
    (me.isValidElementType = function (k) {
      return (
        typeof k == "string" ||
        typeof k == "function" ||
        k === u ||
        k === d ||
        k === c ||
        k === T ||
        k === O ||
        k === X ||
        (typeof k == "object" &&
          k !== null &&
          (k.$$typeof === $ ||
            k.$$typeof === I ||
            k.$$typeof === m ||
            k.$$typeof === w ||
            k.$$typeof === C ||
            k.$$typeof === D ||
            k.getModuleId !== void 0))
      );
    }),
    (me.typeOf = E),
    me
  );
}
var rf;
function Y0() {
  return rf || ((rf = 1), (Es.exports = b0())), Es.exports;
}
var X0 = Y0();
j`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;
j`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;
j`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;
j`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;
j`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;
j`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
j`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;
j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;
j`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;
j`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;
j`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
j`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const G0 = j`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,
  K0 = j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  J0 = j`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  Z0 = j`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  q0 = j`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  As = j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  em = j`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  tm = j`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  nm = j`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  rm = j`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  om = j`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  lm = j`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,
  im = j`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
function sm({
  duration: i = 1e3,
  delay: s = 0,
  timingFunction: u = "ease",
  keyframes: c = As,
  iterationCount: d = 1,
}) {
  return _f`
    animation-duration: ${i}ms;
    animation-timing-function: ${u};
    animation-delay: ${s}ms;
    animation-name: ${c};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${d};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `;
}
function am(i) {
  return i == null;
}
function um(i) {
  return typeof i == "string" || typeof i == "number" || typeof i == "boolean";
}
function zf(i, s) {
  return (u) => (u ? i() : s());
}
function Kr(i) {
  return zf(i, () => null);
}
function Ts(i) {
  return Kr(() => ({ opacity: 0 }))(i);
}
const Rf = (i) => {
    const {
        cascade: s = !1,
        damping: u = 0.5,
        delay: c = 0,
        duration: d = 1e3,
        fraction: m = 0,
        keyframes: w = As,
        triggerOnce: S = !1,
        className: C,
        style: T,
        childClassName: O,
        childStyle: I,
        children: $,
        onVisibilityChange: X,
      } = i,
      D = he.useMemo(() => sm({ keyframes: w, duration: d }), [d, w]);
    return am($)
      ? null
      : um($)
      ? De(fm, { ...i, animationStyles: D, children: String($) })
      : X0.isFragment($)
      ? De(Tf, { ...i, animationStyles: D })
      : De(M0, {
          children: he.Children.map($, (E, k) => {
            if (!he.isValidElement(E)) return null;
            const B = c + (s ? k * d * u : 0);
            switch (E.type) {
              case "ol":
              case "ul":
                return De(Cs, {
                  children: ({ cx: W }) =>
                    De(E.type, {
                      ...E.props,
                      className: W(C, E.props.className),
                      style: Object.assign({}, T, E.props.style),
                      children: De(Rf, { ...i, children: E.props.children }),
                    }),
                });
              case "li":
                return De(tf, {
                  threshold: m,
                  triggerOnce: S,
                  onChange: X,
                  children: ({ inView: W, ref: b }) =>
                    De(Cs, {
                      children: ({ cx: ee }) =>
                        De(E.type, {
                          ...E.props,
                          ref: b,
                          className: ee(O, E.props.className),
                          css: Kr(() => D)(W),
                          style: Object.assign({}, I, E.props.style, Ts(!W), {
                            animationDelay: B + "ms",
                          }),
                        }),
                    }),
                });
              default:
                return De(tf, {
                  threshold: m,
                  triggerOnce: S,
                  onChange: X,
                  children: ({ inView: W, ref: b }) =>
                    De("div", {
                      ref: b,
                      className: C,
                      css: Kr(() => D)(W),
                      style: Object.assign({}, T, Ts(!W), {
                        animationDelay: B + "ms",
                      }),
                      children: De(Cs, {
                        children: ({ cx: ee }) =>
                          De(E.type, {
                            ...E.props,
                            className: ee(O, E.props.className),
                            style: Object.assign({}, I, E.props.style),
                          }),
                      }),
                    }),
                });
            }
          }),
        });
  },
  cm = { display: "inline-block", whiteSpace: "pre" },
  fm = (i) => {
    const {
        animationStyles: s,
        cascade: u = !1,
        damping: c = 0.5,
        delay: d = 0,
        duration: m = 1e3,
        fraction: w = 0,
        triggerOnce: S = !1,
        className: C,
        style: T,
        children: O,
        onVisibilityChange: I,
      } = i,
      { ref: $, inView: X } = Pf({ triggerOnce: S, threshold: w, onChange: I });
    return zf(
      () =>
        De("div", {
          ref: $,
          className: C,
          style: Object.assign({}, T, cm),
          children: O.split("").map((D, E) =>
            De(
              "span",
              {
                css: Kr(() => s)(X),
                style: { animationDelay: d + E * m * c + "ms" },
                children: D,
              },
              E
            )
          ),
        }),
      () => De(Tf, { ...i, children: O })
    )(u);
  },
  Tf = (i) => {
    const {
        animationStyles: s,
        fraction: u = 0,
        triggerOnce: c = !1,
        className: d,
        style: m,
        children: w,
        onVisibilityChange: S,
      } = i,
      { ref: C, inView: T } = Pf({ triggerOnce: c, threshold: u, onChange: S });
    return De("div", {
      ref: C,
      className: d,
      css: Kr(() => s)(T),
      style: Object.assign({}, m, Ts(!T)),
      children: w,
    });
  };
j`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;
j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;
j`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;
j`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;
j`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;
j`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;
const dm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,
  pm = j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,
  mm = j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,
  hm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,
  ym = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,
  gm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,
  vm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,
  wm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,
  xm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,
  Sm = j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,
  km = j`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,
  Cm = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,
  Em = j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;
function _m(i, s, u) {
  switch (u) {
    case "bottom-left":
      return s ? pm : K0;
    case "bottom-right":
      return s ? mm : J0;
    case "down":
      return i ? (s ? ym : q0) : s ? hm : Z0;
    case "left":
      return i ? (s ? vm : em) : s ? gm : As;
    case "right":
      return i ? (s ? xm : nm) : s ? wm : tm;
    case "top-left":
      return s ? Sm : rm;
    case "top-right":
      return s ? km : om;
    case "up":
      return i ? (s ? Em : im) : s ? Cm : lm;
    default:
      return s ? dm : G0;
  }
}
const Jr = (i) => {
  const { big: s = !1, direction: u, reverse: c = !1, ...d } = i,
    m = he.useMemo(() => _m(s, c, u), [s, u, c]);
  return De(Rf, { keyframes: m, ...d });
};
j`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;
j`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
j`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
j`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;
j`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;
j`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;
j`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;
j`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;
j`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
j`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
j`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
j`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;
j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;
j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;
j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;
j`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;
j`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;
j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;
j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;
j`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;
j`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;
j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
j`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
j`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;
j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;
j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;
j`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
function Of(i) {
  var s,
    u,
    c = "";
  if (typeof i == "string" || typeof i == "number") c += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var d = i.length;
      for (s = 0; s < d; s++)
        i[s] && (u = Of(i[s])) && (c && (c += " "), (c += u));
    } else for (u in i) i[u] && (c && (c += " "), (c += u));
  return c;
}
function Nm() {
  for (var i, s, u = 0, c = "", d = arguments.length; u < d; u++)
    (i = arguments[u]) && (s = Of(i)) && (c && (c += " "), (c += s));
  return c;
}
const Ds = "-",
  Pm = (i) => {
    const s = Rm(i),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: c } = i;
    return {
      getClassGroupId: (w) => {
        const S = w.split(Ds);
        return S[0] === "" && S.length !== 1 && S.shift(), Lf(S, s) || zm(w);
      },
      getConflictingClassGroupIds: (w, S) => {
        const C = u[w] || [];
        return S && c[w] ? [...C, ...c[w]] : C;
      },
    };
  },
  Lf = (i, s) => {
    var w;
    if (i.length === 0) return s.classGroupId;
    const u = i[0],
      c = s.nextPart.get(u),
      d = c ? Lf(i.slice(1), c) : void 0;
    if (d) return d;
    if (s.validators.length === 0) return;
    const m = i.join(Ds);
    return (w = s.validators.find(({ validator: S }) => S(m))) == null
      ? void 0
      : w.classGroupId;
  },
  of = /^\[(.+)\]$/,
  zm = (i) => {
    if (of.test(i)) {
      const s = of.exec(i)[1],
        u = s == null ? void 0 : s.substring(0, s.indexOf(":"));
      if (u) return "arbitrary.." + u;
    }
  },
  Rm = (i) => {
    const { theme: s, prefix: u } = i,
      c = { nextPart: new Map(), validators: [] };
    return (
      Om(Object.entries(i.classGroups), u).forEach(([m, w]) => {
        Os(w, c, m, s);
      }),
      c
    );
  },
  Os = (i, s, u, c) => {
    i.forEach((d) => {
      if (typeof d == "string") {
        const m = d === "" ? s : lf(s, d);
        m.classGroupId = u;
        return;
      }
      if (typeof d == "function") {
        if (Tm(d)) {
          Os(d(c), s, u, c);
          return;
        }
        s.validators.push({ validator: d, classGroupId: u });
        return;
      }
      Object.entries(d).forEach(([m, w]) => {
        Os(w, lf(s, m), u, c);
      });
    });
  },
  lf = (i, s) => {
    let u = i;
    return (
      s.split(Ds).forEach((c) => {
        u.nextPart.has(c) ||
          u.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(c));
      }),
      u
    );
  },
  Tm = (i) => i.isThemeGetter,
  Om = (i, s) =>
    s
      ? i.map(([u, c]) => {
          const d = c.map((m) =>
            typeof m == "string"
              ? s + m
              : typeof m == "object"
              ? Object.fromEntries(
                  Object.entries(m).map(([w, S]) => [s + w, S])
                )
              : m
          );
          return [u, d];
        })
      : i,
  Lm = (i) => {
    if (i < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      u = new Map(),
      c = new Map();
    const d = (m, w) => {
      u.set(m, w), s++, s > i && ((s = 0), (c = u), (u = new Map()));
    };
    return {
      get(m) {
        let w = u.get(m);
        if (w !== void 0) return w;
        if ((w = c.get(m)) !== void 0) return d(m, w), w;
      },
      set(m, w) {
        u.has(m) ? u.set(m, w) : d(m, w);
      },
    };
  },
  jf = "!",
  jm = (i) => {
    const { separator: s, experimentalParseClassName: u } = i,
      c = s.length === 1,
      d = s[0],
      m = s.length,
      w = (S) => {
        const C = [];
        let T = 0,
          O = 0,
          I;
        for (let k = 0; k < S.length; k++) {
          let B = S[k];
          if (T === 0) {
            if (B === d && (c || S.slice(k, k + m) === s)) {
              C.push(S.slice(O, k)), (O = k + m);
              continue;
            }
            if (B === "/") {
              I = k;
              continue;
            }
          }
          B === "[" ? T++ : B === "]" && T--;
        }
        const $ = C.length === 0 ? S : S.substring(O),
          X = $.startsWith(jf),
          D = X ? $.substring(1) : $,
          E = I && I > O ? I - O : void 0;
        return {
          modifiers: C,
          hasImportantModifier: X,
          baseClassName: D,
          maybePostfixModifierPosition: E,
        };
      };
    return u ? (S) => u({ className: S, parseClassName: w }) : w;
  },
  Im = (i) => {
    if (i.length <= 1) return i;
    const s = [];
    let u = [];
    return (
      i.forEach((c) => {
        c[0] === "[" ? (s.push(...u.sort(), c), (u = [])) : u.push(c);
      }),
      s.push(...u.sort()),
      s
    );
  },
  Mm = (i) => ({ cache: Lm(i.cacheSize), parseClassName: jm(i), ...Pm(i) }),
  Fm = /\s+/,
  $m = (i, s) => {
    const {
        parseClassName: u,
        getClassGroupId: c,
        getConflictingClassGroupIds: d,
      } = s,
      m = [],
      w = i.trim().split(Fm);
    let S = "";
    for (let C = w.length - 1; C >= 0; C -= 1) {
      const T = w[C],
        {
          modifiers: O,
          hasImportantModifier: I,
          baseClassName: $,
          maybePostfixModifierPosition: X,
        } = u(T);
      let D = !!X,
        E = c(D ? $.substring(0, X) : $);
      if (!E) {
        if (!D) {
          S = T + (S.length > 0 ? " " + S : S);
          continue;
        }
        if (((E = c($)), !E)) {
          S = T + (S.length > 0 ? " " + S : S);
          continue;
        }
        D = !1;
      }
      const k = Im(O).join(":"),
        B = I ? k + jf : k,
        W = B + E;
      if (m.includes(W)) continue;
      m.push(W);
      const b = d(E, D);
      for (let ee = 0; ee < b.length; ++ee) {
        const R = b[ee];
        m.push(B + R);
      }
      S = T + (S.length > 0 ? " " + S : S);
    }
    return S;
  };
function Am() {
  let i = 0,
    s,
    u,
    c = "";
  for (; i < arguments.length; )
    (s = arguments[i++]) && (u = If(s)) && (c && (c += " "), (c += u));
  return c;
}
const If = (i) => {
  if (typeof i == "string") return i;
  let s,
    u = "";
  for (let c = 0; c < i.length; c++)
    i[c] && (s = If(i[c])) && (u && (u += " "), (u += s));
  return u;
};
function Dm(i, ...s) {
  let u,
    c,
    d,
    m = w;
  function w(C) {
    const T = s.reduce((O, I) => I(O), i());
    return (u = Mm(T)), (c = u.cache.get), (d = u.cache.set), (m = S), S(C);
  }
  function S(C) {
    const T = c(C);
    if (T) return T;
    const O = $m(C, u);
    return d(C, O), O;
  }
  return function () {
    return m(Am.apply(null, arguments));
  };
}
const Ce = (i) => {
    const s = (u) => u[i] || [];
    return (s.isThemeGetter = !0), s;
  },
  Mf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Um = /^\d+\/\d+$/,
  Vm = new Set(["px", "full", "screen"]),
  Bm = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Wm =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Hm = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Qm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  bm =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Qt = (i) => er(i) || Vm.has(i) || Um.test(i),
  dn = (i) => rr(i, "length", eh),
  er = (i) => !!i && !Number.isNaN(Number(i)),
  _s = (i) => rr(i, "number", er),
  Qr = (i) => !!i && Number.isInteger(Number(i)),
  Ym = (i) => i.endsWith("%") && er(i.slice(0, -1)),
  te = (i) => Mf.test(i),
  pn = (i) => Bm.test(i),
  Xm = new Set(["length", "size", "percentage"]),
  Gm = (i) => rr(i, Xm, Ff),
  Km = (i) => rr(i, "position", Ff),
  Jm = new Set(["image", "url"]),
  Zm = (i) => rr(i, Jm, nh),
  qm = (i) => rr(i, "", th),
  br = () => !0,
  rr = (i, s, u) => {
    const c = Mf.exec(i);
    return c
      ? c[1]
        ? typeof s == "string"
          ? c[1] === s
          : s.has(c[1])
        : u(c[2])
      : !1;
  },
  eh = (i) => Wm.test(i) && !Hm.test(i),
  Ff = () => !1,
  th = (i) => Qm.test(i),
  nh = (i) => bm.test(i),
  rh = () => {
    const i = Ce("colors"),
      s = Ce("spacing"),
      u = Ce("blur"),
      c = Ce("brightness"),
      d = Ce("borderColor"),
      m = Ce("borderRadius"),
      w = Ce("borderSpacing"),
      S = Ce("borderWidth"),
      C = Ce("contrast"),
      T = Ce("grayscale"),
      O = Ce("hueRotate"),
      I = Ce("invert"),
      $ = Ce("gap"),
      X = Ce("gradientColorStops"),
      D = Ce("gradientColorStopPositions"),
      E = Ce("inset"),
      k = Ce("margin"),
      B = Ce("opacity"),
      W = Ce("padding"),
      b = Ce("saturate"),
      ee = Ce("scale"),
      R = Ce("sepia"),
      ne = Ce("skew"),
      q = Ce("space"),
      We = Ce("translate"),
      mt = () => ["auto", "contain", "none"],
      it = () => ["auto", "hidden", "clip", "visible", "scroll"],
      St = () => ["auto", te, s],
      ie = () => [te, s],
      He = () => ["", Qt, dn],
      Qe = () => ["auto", er, te],
      st = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      je = () => ["solid", "dashed", "dotted", "double", "none"],
      xe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      Y = () => ["", "0", te],
      A = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      y = () => [er, te];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [br],
        spacing: [Qt, dn],
        blur: ["none", "", pn, te],
        brightness: y(),
        borderColor: [i],
        borderRadius: ["none", "", "full", pn, te],
        borderSpacing: ie(),
        borderWidth: He(),
        contrast: y(),
        grayscale: Y(),
        hueRotate: y(),
        invert: Y(),
        gap: ie(),
        gradientColorStops: [i],
        gradientColorStopPositions: [Ym, dn],
        inset: St(),
        margin: St(),
        opacity: y(),
        padding: ie(),
        saturate: y(),
        scale: y(),
        sepia: Y(),
        skew: y(),
        space: ie(),
        translate: ie(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", te] }],
        container: ["container"],
        columns: [{ columns: [pn] }],
        "break-after": [{ "break-after": A() }],
        "break-before": [{ "break-before": A() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...st(), te] }],
        overflow: [{ overflow: it() }],
        "overflow-x": [{ "overflow-x": it() }],
        "overflow-y": [{ "overflow-y": it() }],
        overscroll: [{ overscroll: mt() }],
        "overscroll-x": [{ "overscroll-x": mt() }],
        "overscroll-y": [{ "overscroll-y": mt() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [E] }],
        "inset-x": [{ "inset-x": [E] }],
        "inset-y": [{ "inset-y": [E] }],
        start: [{ start: [E] }],
        end: [{ end: [E] }],
        top: [{ top: [E] }],
        right: [{ right: [E] }],
        bottom: [{ bottom: [E] }],
        left: [{ left: [E] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Qr, te] }],
        basis: [{ basis: St() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", te] }],
        grow: [{ grow: Y() }],
        shrink: [{ shrink: Y() }],
        order: [{ order: ["first", "last", "none", Qr, te] }],
        "grid-cols": [{ "grid-cols": [br] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Qr, te] }, te] }],
        "col-start": [{ "col-start": Qe() }],
        "col-end": [{ "col-end": Qe() }],
        "grid-rows": [{ "grid-rows": [br] }],
        "row-start-end": [{ row: ["auto", { span: [Qr, te] }, te] }],
        "row-start": [{ "row-start": Qe() }],
        "row-end": [{ "row-end": Qe() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", te] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", te] }],
        gap: [{ gap: [$] }],
        "gap-x": [{ "gap-x": [$] }],
        "gap-y": [{ "gap-y": [$] }],
        "justify-content": [{ justify: ["normal", ...M()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...M(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...M(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [W] }],
        px: [{ px: [W] }],
        py: [{ py: [W] }],
        ps: [{ ps: [W] }],
        pe: [{ pe: [W] }],
        pt: [{ pt: [W] }],
        pr: [{ pr: [W] }],
        pb: [{ pb: [W] }],
        pl: [{ pl: [W] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [q] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [q] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, s] }],
        "min-w": [{ "min-w": [te, s, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              te,
              s,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [pn] },
              pn,
            ],
          },
        ],
        h: [{ h: [te, s, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [te, s, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [te, s, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [te, s, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", pn, dn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              _s,
            ],
          },
        ],
        "font-family": [{ font: [br] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              te,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", er, _s] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Qt,
              te,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", te] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [i] }],
        "placeholder-opacity": [{ "placeholder-opacity": [B] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [i] }],
        "text-opacity": [{ "text-opacity": [B] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...je(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Qt, dn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Qt, te] }],
        "text-decoration-color": [{ decoration: [i] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: ie() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [B] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...st(), Km] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Gm] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Zm,
            ],
          },
        ],
        "bg-color": [{ bg: [i] }],
        "gradient-from-pos": [{ from: [D] }],
        "gradient-via-pos": [{ via: [D] }],
        "gradient-to-pos": [{ to: [D] }],
        "gradient-from": [{ from: [X] }],
        "gradient-via": [{ via: [X] }],
        "gradient-to": [{ to: [X] }],
        rounded: [{ rounded: [m] }],
        "rounded-s": [{ "rounded-s": [m] }],
        "rounded-e": [{ "rounded-e": [m] }],
        "rounded-t": [{ "rounded-t": [m] }],
        "rounded-r": [{ "rounded-r": [m] }],
        "rounded-b": [{ "rounded-b": [m] }],
        "rounded-l": [{ "rounded-l": [m] }],
        "rounded-ss": [{ "rounded-ss": [m] }],
        "rounded-se": [{ "rounded-se": [m] }],
        "rounded-ee": [{ "rounded-ee": [m] }],
        "rounded-es": [{ "rounded-es": [m] }],
        "rounded-tl": [{ "rounded-tl": [m] }],
        "rounded-tr": [{ "rounded-tr": [m] }],
        "rounded-br": [{ "rounded-br": [m] }],
        "rounded-bl": [{ "rounded-bl": [m] }],
        "border-w": [{ border: [S] }],
        "border-w-x": [{ "border-x": [S] }],
        "border-w-y": [{ "border-y": [S] }],
        "border-w-s": [{ "border-s": [S] }],
        "border-w-e": [{ "border-e": [S] }],
        "border-w-t": [{ "border-t": [S] }],
        "border-w-r": [{ "border-r": [S] }],
        "border-w-b": [{ "border-b": [S] }],
        "border-w-l": [{ "border-l": [S] }],
        "border-opacity": [{ "border-opacity": [B] }],
        "border-style": [{ border: [...je(), "hidden"] }],
        "divide-x": [{ "divide-x": [S] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [S] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [B] }],
        "divide-style": [{ divide: je() }],
        "border-color": [{ border: [d] }],
        "border-color-x": [{ "border-x": [d] }],
        "border-color-y": [{ "border-y": [d] }],
        "border-color-s": [{ "border-s": [d] }],
        "border-color-e": [{ "border-e": [d] }],
        "border-color-t": [{ "border-t": [d] }],
        "border-color-r": [{ "border-r": [d] }],
        "border-color-b": [{ "border-b": [d] }],
        "border-color-l": [{ "border-l": [d] }],
        "divide-color": [{ divide: [d] }],
        "outline-style": [{ outline: ["", ...je()] }],
        "outline-offset": [{ "outline-offset": [Qt, te] }],
        "outline-w": [{ outline: [Qt, dn] }],
        "outline-color": [{ outline: [i] }],
        "ring-w": [{ ring: He() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [i] }],
        "ring-opacity": [{ "ring-opacity": [B] }],
        "ring-offset-w": [{ "ring-offset": [Qt, dn] }],
        "ring-offset-color": [{ "ring-offset": [i] }],
        shadow: [{ shadow: ["", "inner", "none", pn, qm] }],
        "shadow-color": [{ shadow: [br] }],
        opacity: [{ opacity: [B] }],
        "mix-blend": [
          { "mix-blend": [...xe(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": xe() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [u] }],
        brightness: [{ brightness: [c] }],
        contrast: [{ contrast: [C] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", pn, te] }],
        grayscale: [{ grayscale: [T] }],
        "hue-rotate": [{ "hue-rotate": [O] }],
        invert: [{ invert: [I] }],
        saturate: [{ saturate: [b] }],
        sepia: [{ sepia: [R] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [u] }],
        "backdrop-brightness": [{ "backdrop-brightness": [c] }],
        "backdrop-contrast": [{ "backdrop-contrast": [C] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [T] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [O] }],
        "backdrop-invert": [{ "backdrop-invert": [I] }],
        "backdrop-opacity": [{ "backdrop-opacity": [B] }],
        "backdrop-saturate": [{ "backdrop-saturate": [b] }],
        "backdrop-sepia": [{ "backdrop-sepia": [R] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [w] }],
        "border-spacing-x": [{ "border-spacing-x": [w] }],
        "border-spacing-y": [{ "border-spacing-y": [w] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              te,
            ],
          },
        ],
        duration: [{ duration: y() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", te] }],
        delay: [{ delay: y() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", te] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [ee] }],
        "scale-x": [{ "scale-x": [ee] }],
        "scale-y": [{ "scale-y": [ee] }],
        rotate: [{ rotate: [Qr, te] }],
        "translate-x": [{ "translate-x": [We] }],
        "translate-y": [{ "translate-y": [We] }],
        "skew-x": [{ "skew-x": [ne] }],
        "skew-y": [{ "skew-y": [ne] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              te,
            ],
          },
        ],
        accent: [{ accent: ["auto", i] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
            ],
          },
        ],
        "caret-color": [{ caret: [i] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": ie() }],
        "scroll-mx": [{ "scroll-mx": ie() }],
        "scroll-my": [{ "scroll-my": ie() }],
        "scroll-ms": [{ "scroll-ms": ie() }],
        "scroll-me": [{ "scroll-me": ie() }],
        "scroll-mt": [{ "scroll-mt": ie() }],
        "scroll-mr": [{ "scroll-mr": ie() }],
        "scroll-mb": [{ "scroll-mb": ie() }],
        "scroll-ml": [{ "scroll-ml": ie() }],
        "scroll-p": [{ "scroll-p": ie() }],
        "scroll-px": [{ "scroll-px": ie() }],
        "scroll-py": [{ "scroll-py": ie() }],
        "scroll-ps": [{ "scroll-ps": ie() }],
        "scroll-pe": [{ "scroll-pe": ie() }],
        "scroll-pt": [{ "scroll-pt": ie() }],
        "scroll-pr": [{ "scroll-pr": ie() }],
        "scroll-pb": [{ "scroll-pb": ie() }],
        "scroll-pl": [{ "scroll-pl": ie() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", te] },
        ],
        fill: [{ fill: [i, "none"] }],
        "stroke-w": [{ stroke: [Qt, dn, _s] }],
        stroke: [{ stroke: [i, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  oh = Dm(rh),
  Zn = (...i) => oh(Nm(i)),
  $f = ({ children: i, innerClassName: s, className: u }) =>
    J.jsx("div", {
      className: Zn("-skew-x-[9deg] w-fit", u),
      children: J.jsx("div", {
        className: Zn("skew-x-[10deg]", s),
        children: i,
      }),
    }),
  lh = [
    {
      img: "/img/1.png",
      text: J.jsxs(J.Fragment, {
        children: ["Boss of ", J.jsx("br", {}), "frogs"],
      }),
    },
    {
      img: "/img/2.png",
      text: J.jsxs(J.Fragment, {
        children: ["Slayer of ", J.jsx("br", {}), " charts"],
      }),
    },
    {
      img: "/img/3.svg",
      text: J.jsxs(J.Fragment, {
        children: ["Living the ", J.jsx("br", {}), " meme dream"],
      }),
    },
  ],
  ih = () =>
    J.jsx(Jr, {
      triggerOnce: !0,
      direction: "up",
      children: J.jsx("div", {
        className:
          "grid grid-cols-3 mw950:gap-[45px] mw950:py-[69px] gap-2.5 py-[94px] mw950:max-w-[341px] mw950:mx-auto mw950:grid-cols-1",
        children: lh.map((i) =>
          J.jsxs("div", {
            className: "grid grid-rows-[auto_1fr] gap-[30px] mw950:pl-6",
            children: [
              J.jsx("img", { src: i.img, alt: "" }),
              J.jsx($f, {
                className:
                  "bg-primary  w-full flex items-center justify-center mw950:max-w-[calc(100%-40px)] max-w-[calc(100%-50px)] py-3 translate-x-[-14px] px-[20px] text-center",
                children: J.jsx("p", {
                  className:
                    " text-accent text-[40px] mw950:text-[33px] uppercase",
                  children: i.text,
                }),
              }),
            ],
          })
        ),
      }),
    }),
  sf = "0xcomingsoon",
  sh = "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
  ah = "https://x.com/PepeBossEth",
  uh =
    "https://dexscreener.com/ethereum/0xcomingsoon",
  af = ({ revers: i }) => {
    const [s, u] = he.useState(!1),
      c = async () => {
        try {
          await navigator.clipboard.writeText(sf),
            u(!0),
            setTimeout(() => u(!1), 2e3);
        } catch (d) {
          console.error(d);
        }
      };
    return J.jsxs("div", {
      className: Zn(
        "flex items-center -mt-10 mw1150:mt-0 mw950:flex-col-reverse gap-[90px]  mw950:gap-[24px]",
        { "mw950:!flex-col": i }
      ),
      children: [
        J.jsx("div", {
          className: Zn("max-w-[613px] w-full", { "order-2": i }),
          children: J.jsxs(Jr, {
            triggerOnce: !0,
            cascade: !0,
            direction: "up",
            damping: 0.2,
            children: [
              J.jsxs("div", {
                className: "pl-7 mw950:mx-auto mw950:pl-4 mw950:w-fit",
                children: [
                  J.jsx("h2", {
                    className:
                      "uppercase text-xl  mw950:text-center pl-4 mw950:text-sm",
                    children: "Too many frogs, not enough bosses",
                  }),
                  J.jsx("h1", {
                    className:
                      "text-[101px] mw950:w-fit mw950:text-[62px] tracking-tighter uppercase whitespace-nowrap mw400:text-[50px]",
                    children: "PEPE Final",
                  }),
                ],
              }),
              J.jsxs($f, {
                className:
                  "bg-primary -skew-x-[16deg] overflow-hidden relative text-center  mw950:min-w-fit min-w-[559px] w-full *:text-accent uppercase text-[101px] mw950:text-[62px] mw400:text-[50px] tracking-tighter",
                children: [
                  "Boss",
                  J.jsx("img", {
                    src: "/img/chain.svg",
                    alt: "chain",
                    className:
                      "absolute -left-[70px] top-[10px] mw950:max-w-[157px]",
                  }),
                  J.jsx("img", {
                    src: "/img/chain.svg",
                    alt: "chain",
                    className:
                      "absolute -right-[70px] -top-[140px] rotate-180 mw950:-top-[80px] mw950:max-w-[157px]",
                  }),
                ],
              }),
              J.jsxs("div", {
                className:
                  "mt-12 mw950:mt-6 space-y-[14px] max-w-[597px] overflow-auto w-full",
                children: [
                  J.jsxs("div", {
                    className:
                      "flex items-center w-full gap-[14px] mw950:flex-col",
                    children: [
                      J.jsx("a", {
                        href: sh,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "h-16 block w-full px-4 py-2 flex items-center justify-center bg-primary text-accent text-xl uppercase",
                        children: "Buy pepe BOSS",
                      }),
                      J.jsx("a", {
                        href: ah,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "h-16 block max-w-[235px] mw950:max-w-full w-full px-4 py-2 flex items-center justify-center border-2 border-primary text-xl uppercase",
                        children: "Twitter",
                      }),
                      J.jsx("a", {
                        href: uh,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "h-16 block max-w-[235px] mw950:max-w-full w-full px-4 py-2 flex items-center justify-center border-2 border-primary text-xl uppercase",
                        children: "Dexscreener",
                      }),
                    ],
                  }),
                  J.jsxs("div", {
                    className:
                      "flex items-center w-full gap-[25px] px-[33px] mw950:px-[10px] py-2 h-16 border-2 border-primary mw650:max-w-[calc(100vw-40px)]",
                    children: [
                      J.jsx("p", {
                        className:
                          "truncate font-euclid text-[17px] mw950:text-[2.6vw] uppercase",
                        children: sf,
                      }),
                      J.jsx("button", {
                        onClick: c,
                        children: J.jsx("img", {
                          className: "min-w-[18px] w-[18px] h-[18px]",
                          src: `/img/${s ? "success" : "copy"}.svg`,
                          alt: "copy",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        J.jsx(Jr, {
          delay: 500,
          triggerOnce: !0,
          direction: i ? "left" : "right",
          children: J.jsx("div", {
            className: Zn({ "order-1 ": i }),
            children: J.jsx("img", {
              className: Zn({ "scale-x-[-1]": i }),
              src: "/img/hero.svg",
              alt: "hero",
            }),
          }),
        }),
      ],
    });
  };
function ch() {
  return J.jsxs("main", {
    className: "max-w-[1270px] w-full mx-auto px-5",
    children: [
      J.jsx(Jr, {
        triggerOnce: !0,
        duration: 3e3,
        children: J.jsx("header", {
          className: "pt-5",
          children: J.jsx("img", {
            className: "block mw950:mx-auto",
            src: "/img/logo.svg",
            alt: "logo",
          }),
        }),
      }),
      J.jsx(af, {}),
      J.jsx(ih, {}),
      J.jsx(af, { revers: !0 }),
      J.jsx(Jr, {
        triggerOnce: !0,
        duration: 3e3,
        children: J.jsx("p", {
          className:
            "font-medium text-center font-euclid text-xs mt-9 text-[#00000080] mb-8",
          children:
            "Meme coins come with risks, and by buying, you take full responsibility! Also, purchasing is prohibited in countries where it’s illegal, like the USA and other countries.",
        }),
      }),
    ],
  });
}
Qp.createRoot(document.getElementById("root")).render(
  J.jsx(he.StrictMode, { children: J.jsx(ch, {}) })
);
