;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1079: function(e, t, a) {},
    1080: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(30),
        s = a.n(o),
        i = a(414),
        c = a(11),
        l = a(13),
        u = a(12),
        p = a(14),
        d = a(61),
        m = a(98),
        g = a(16),
        h = a(415),
        f = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                links: [
                  { name: 'Artists', url: '/artists' },
                  { name: 'Producer Tools', url: '/producer-tools' },
                  { name: 'About', url: '/about' },
                ],
                adminVersion: !1,
              }),
              (a.getAdminLink = function(e) {
                return '/admin' + e
              }),
              (a.render = function() {
                return r.a.createElement(
                  'div',
                  { id: 'nav-wrapper' },
                  r.a.createElement(
                    'nav',
                    null,
                    a.state.links.map(function(e) {
                      return r.a.createElement(
                        d.b,
                        {
                          key: e.name,
                          onClick: a.props.toggleOpenClose,
                          to: a.state.adminVersion
                            ? a.getAdminLink(e.url)
                            : e.url,
                        },
                        e.name,
                      )
                    }),
                  ),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setState({
                    adminVersion: /\/admin/.test(window.location.pathname),
                    mounted: !0,
                  })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.state.mounted &&
                    this.state.adminVersion &&
                    this.state.adminVersion !==
                      /\/admin/.test(window.location.pathname) &&
                    this.setState({
                      adminVersion: /\/admin/.test(window.location.pathname),
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        v = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { isOpen: !1, width: 30, opacity: '0' }),
              (a.getStyles = function() {
                return {
                  bmBurgerButton: {
                    position: 'absolute',
                    width: a.state.width + 'px',
                    height: '26px',
                    marginLeft:
                      'calc('.concat(
                        a.props.previewWidth - a.state.width,
                        'px - 2rem)',
                      ) || !1,
                    right: a.props.previewWidth ? 'auto' : '2rem',
                    marginTop: '2rem',
                  },
                  bmBurgerBars: { background: '#fff' },
                  bmBurgerBarsHover: { background: '#ddd' },
                  bmCrossButton: {
                    height: '24px',
                    width: '24px',
                    display: a.props.previewWidth ? 'none' : 'block',
                  },
                  bmCross: { background: '#bdc3c7' },
                  bmMenuWrap: {
                    position: 'fixed',
                    marginLeft:
                      'calc('.concat(a.state.width, 'px + 4rem)') || !1,
                    right: '0',
                    height: '100vh',
                    zIndex: '9999',
                    display: a.props.previewWidth ? 'none' : 'inline',
                  },
                  bmMenu: {
                    display: a.props.previewWidth ? 'none' : 'block',
                    padding: '2.5em 1.5em 0',
                    background: '#000',
                    fontSize: '1.15em',
                  },
                  bmMorphShape: { fill: '#373a47' },
                  bmItemList: {
                    color: '#b8b7ad',
                    padding: '0.8em',
                    height: 'auto',
                  },
                  bmItem: { display: 'block' },
                  bmOverlay: {
                    background: 'rgba(0, 0, 0, 0.3)',
                    display: a.props.previewWidth ? 'none' : 'inline',
                  },
                }
              }),
              (a.render = function() {
                return r.a.createElement(
                  h.slide,
                  { right: !0, styles: a.getStyles(), isOpen: a.state.isOpen },
                  r.a.createElement(f, {
                    toggleOpenClose: function() {
                      return a.toggleOpenClose()
                    },
                  }),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'toggleOpenClose',
                value: function(e) {
                  this.props.previewWidth ||
                    this.setState({ isOpen: !this.state.isOpen })
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  document.getElementsByClassName(
                    'bm-burger-button',
                  )[0].children[1].onclick = function(e) {
                    return e.preventDefault()
                  }
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        b = a(288),
        y = a.n(b),
        w = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { adminVersion: !1 }),
              (a.getAdminLink = function(e) {
                return '/admin' + e
              }),
              (a.render = function() {
                return r.a.createElement(
                  'div',
                  { className: 'header-wrapper' },
                  a.props.mobilePreview
                    ? r.a.createElement(v, {
                        previewWidth: a.props.previewWidth,
                      })
                    : r.a.createElement(
                        y.a,
                        { maxWidth: 440 },
                        r.a.createElement(v, null),
                      ),
                  r.a.createElement(
                    'header',
                    null,
                    r.a.createElement(
                      'div',
                      { id: 'logo' },
                      r.a.createElement(
                        d.b,
                        {
                          to: a.state.adminVersion ? a.getAdminLink('/') : '/',
                        },
                        r.a.createElement(
                          'svg',
                          {
                            className: 'icon',
                            width: '921px',
                            height: '921px',
                            viewBox: '0 0 921 921',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                          },
                          r.a.createElement('title', null, 'Artboard Copy'),
                          r.a.createElement(
                            'desc',
                            null,
                            'Created with Sketch.',
                          ),
                          r.a.createElement(
                            'g',
                            {
                              id: 'Artboard-Copy',
                              stroke: 'none',
                              strokeWidth: '1',
                              fill: 'none',
                              fillRule: 'evenodd',
                            },
                            r.a.createElement(
                              'g',
                              {
                                id: 'div-88-logo-original-copy',
                                fill: 'white',
                              },
                              r.a.createElement('path', {
                                d:
                                  'M54.6621171,242.696265 L96.7270491,376.988498 L96.7270491,178.10107 C180.980338,69.7264603 312.597425,0 460.5,0 C714.827127,0 921,206.172873 921,460.5 C921,714.827127 714.827127,921 460.5,921 C206.172873,921 0,714.827127 0,460.5 C0,381.711281 19.7867393,307.544002 54.6621171,242.696265 Z M391.047614,457.312069 C421.379483,436.218595 432.56851,401.247649 432.56851,355.637118 C432.56851,277.988421 390.041703,232.028677 296.037374,232.028677 C202.033045,232.028677 160.973922,279.251734 160.973922,355.637118 C160.973922,400.862229 171.827049,436.163626 202.287509,457.439023 C167.13461,479.651217 150.973501,517.487542 150.973501,566.689207 C150.973501,648.007654 188.955212,702 296.190641,702 C403.426071,702 442.985802,649.352553 442.985802,566.689207 C442.985802,516.866079 426.37545,479.298217 391.047614,457.312069 Z M306.725237,435.281551 C303.282893,435.159396 299.771504,435.097981 296.190641,435.097981 C292.713523,435.097981 289.303779,435.157481 285.960895,435.275698 C234.096453,432.124393 210.326593,404.736808 207.975902,363.227827 L207.975902,350.346497 C207.975902,346.34613 210.017514,317.87211 226.645565,302.383856 C243.273617,286.895602 262.899129,279.270601 290.46391,279.270601 C293.457398,279.270601 297.754959,279.270601 300.95687,279.270601 C367.982642,279.270601 385.353407,320.743758 384.917753,350.346497 L384.917753,363.227827 C384.917753,405.690398 358.794168,432.214347 306.725228,435.281552 Z M301.445567,483.114368 C375.311586,483.114368 394.455106,528.766168 393.974991,561.351542 L393.974991,575.530735 C393.974991,625.296194 361.338949,655.173089 296.303935,655.173089 C231.220009,655.173089 201.732307,624.153212 198.975523,575.530735 L198.975523,561.351542 C198.975523,556.948116 201.22549,525.605186 219.550499,508.556408 C237.875509,491.507629 259.503883,483.114368 289.881759,483.114368 C293.180744,483.114368 297.916889,483.114368 301.445567,483.114368 Z M728.061811,457.312069 C758.39368,436.218595 769.582708,401.247649 769.582708,355.637118 C769.582708,277.988421 727.055901,232.028677 633.051572,232.028677 C539.047242,232.028677 497.98812,279.251734 497.98812,355.637118 C497.98812,400.862229 508.841246,436.163626 539.301707,457.439023 C504.148807,479.651217 487.987698,517.487542 487.987698,566.689207 C487.987698,648.007654 525.969409,702 633.204839,702 C740.440268,702 780,649.352553 780,566.689207 C780,516.866079 763.389648,479.298217 728.061811,457.312069 Z M643.739434,435.281551 C640.29709,435.159396 636.785701,435.097981 633.204839,435.097981 C629.727721,435.097981 626.317976,435.157481 622.975093,435.275698 C571.110651,432.124393 547.340791,404.736808 544.9901,363.227827 L544.9901,350.346497 C544.9901,346.34613 547.031712,317.87211 563.659763,302.383856 C580.287814,286.895602 599.913327,279.270601 627.478108,279.270601 C630.471595,279.270601 634.769157,279.270601 637.971067,279.270601 C704.99684,279.270601 722.367604,320.743758 721.93195,350.346497 L721.93195,363.227827 C721.93195,405.690398 695.808365,432.214347 643.739425,435.281552 Z M638.459765,483.114368 C712.325783,483.114368 731.469303,528.766168 730.989189,561.351542 L730.989189,575.530735 C730.989189,625.296194 698.353147,655.173089 633.318133,655.173089 C568.234206,655.173089 538.746504,624.153212 535.98972,575.530735 L535.98972,561.351542 C535.98972,556.948116 538.239687,525.605186 556.564697,508.556408 C574.889707,491.507629 596.518081,483.114368 626.895957,483.114368 C630.194942,483.114368 634.931087,483.114368 638.459765,483.114368 Z',
                                id: 'Combined-Shape',
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                    !a.props.mobilePreview &&
                      r.a.createElement(
                        y.a,
                        { minWidth: 440 },
                        r.a.createElement(f, null),
                      ),
                  ),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setState({
                    adminVersion: /\/admin/.test(window.location.pathname),
                    mounted: !0,
                  })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.state.mounted &&
                    this.state.adminVersion &&
                    this.state.adminVersion !==
                      /\/admin/.test(window.location.pathname) &&
                    this.setState({
                      adminVersion: /\/admin/.test(window.location.pathname),
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        x = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).getYear = function() {
                return new Date().getFullYear()
              }),
              (a.render = function() {
                return r.a.createElement(
                  'footer',
                  null,
                  '\xa9 ',
                  a.getYear(),
                  ' Divison 88 Ltd.',
                )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        E = function() {
          return r.a.createElement(x, null)
        },
        k = a(9),
        C = a.n(k),
        O = a(20),
        j = a(23),
        S = a.n(j),
        T = a(142),
        A = a(417),
        N = a(441),
        I = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                style: {
                  background: 'url('.concat(
                    a.props.src,
                    ') center/cover no-repeat',
                  ),
                },
              }),
              (a.render = function() {
                return r.a.createElement('div', {
                  style: a.state.style,
                  className: 'img '.concat(a.props.selected ? 'selected' : ''),
                })
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        P = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                videoId: a.props.videoSrc
                  ? /\?v=(.*)/.exec(a.props.videoSrc)[1]
                  : '',
                opts: {
                  height: '390',
                  width: '640',
                  playerVars: { autoplay: 1 },
                },
              }),
              (a.getStyle = function() {
                return {
                  cursor: a.props.isPreview ? 'default' : 'pointer',
                  display: a.state.videoLoaded ? 'none' : 'block',
                }
              }),
              (a.componentDidMount = function() {}),
              (a.render = function() {
                return r.a.createElement(
                  'div',
                  null,
                  a.state.videoLoaded && !a.props.isPreview
                    ? r.a.createElement(
                        'div',
                        {
                          className: 'video',
                          style: {
                            position: 'relative',
                            height: '100%',
                            display: a.props.loaded ? 'block' : 'none',
                          },
                        },
                        r.a.createElement(A.a, {
                          videoId: a.state.videoId,
                          opts: a.state.opts,
                          onReady: Video._onReady,
                        }),
                      )
                    : r.a.createElement(
                        'div',
                        {
                          onClick: function() {
                            return a.loadVideo()
                          },
                          id: 'play-video-'.concat(a.state.videoId),
                          style: a.getStyle(),
                          className: 'video-link wrapper',
                        },
                        r.a.createElement(I, {
                          src: a.props.imgSrc,
                          selected: a.props.selected,
                        }),
                        r.a.createElement(
                          'div',
                          { className: 'icon-wrapper' },
                          r.a.createElement(N.a, { className: 'icon' }),
                        ),
                      ),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'onPlayerReady',
                value: function(e) {
                  var t = this
                  this.state.videoLoaded && this.player.playVideo(),
                    document
                      .getElementById('play-video-'.concat(this.state.videoId))
                      .addEventListener('click', function() {
                        return t.props.isPreview ? null : t.player.playVideo()
                      })
                },
              },
              {
                key: 'loadVideo',
                value: function() {
                  this.props.isPreview || this.setState({ videoLoaded: !0 })
                },
              },
              {
                key: '_onReady',
                value: function(e) {
                  e.target.pauseVideo(), this.onPlayerReady()
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        U = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return a.props.link && !a.props.isPreview
                  ? r.a.createElement(
                      d.b,
                      {
                        id: 'grid-item-'.concat(a.props.index),
                        content: a.props.content,
                        to: a.props.link,
                      },
                      a.props.children,
                    )
                  : r.a.createElement(
                      'div',
                      {
                        id: 'grid-item-'.concat(a.props.index),
                        content: a.props.content,
                      },
                      a.props.children,
                    )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        H = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                style: {
                  height: a.props.height,
                  backgroundColor: a.props.backgroundColor,
                },
              }),
              (a.render = function() {
                return r.a.createElement(
                  'div',
                  { className: 'bottom-text', style: a.state.style },
                  a.props.text,
                )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        D = function(e) {
          return r.a.createElement(
            'div',
            { className: 'background-text' },
            r.a.createElement(
              'div',
              { className: 'heading', key: 'heading' },
              e.heading,
            ),
            e.subheading &&
              r.a.createElement(
                'div',
                { className: 'subheading', key: 'subheading' },
                e.subheading,
              ),
          )
        },
        B = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).bottomTextHasText = function() {
                return a.props.bottomText.text
              }),
              (a.backgroundTextHasText = function() {
                return (
                  a.props.backgroundText.heading ||
                  a.props.backgroundText.subheading
                )
              }),
              (a.state = {
                style: {
                  background: 'url('.concat(
                    a.props.imgSrc,
                    ') center center/cover no-repeat',
                  ),
                  height:
                    a.props.bottomText && a.bottomTextHasText()
                      ? 'calc(100% - '.concat(
                          a.props.bottomText.height || '25px',
                          ')',
                        )
                      : '100%',
                },
                backgroundText: a.props.backgroundText,
              }),
              (a.render = function() {
                return r.a.createElement(
                  U,
                  {
                    link: a.props.link,
                    index: a.props.index,
                    content: a.props,
                    isPreview: a.props.isPreview,
                  },
                  r.a.createElement('div', {
                    className: 'background '.concat(
                      a.props.selected ? 'selected' : '',
                    ),
                    style: a.state.style,
                  }),
                  a.props.backgroundText &&
                    a.backgroundTextHasText() &&
                    r.a.createElement(
                      D,
                      Object.assign(
                        {
                          updateBackgroundText: function(e) {
                            return a.updateBackgroundText(e)
                          },
                        },
                        a.state.backgroundText,
                      ),
                    ),
                  a.props.bottomText &&
                    a.bottomTextHasText() &&
                    r.a.createElement(H, a.props.bottomText),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              { key: 'updateBackgroundText', value: function(e) {} },
            ]),
            t
          )
        })(r.a.Component),
        L = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return a.props.video
                  ? r.a.createElement(P, a.props)
                  : r.a.createElement(B, a.props)
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        M = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r)),
              )).state = {
                layoutClassName: 'layout '.concat(
                  void 0 !== a.gridItemHoveredUpon
                    ? 'grid-item-hovered-upon'
                    : '',
                ),
                cellsUpToDate: !0,
              }),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a.watchWindowResizing(),
                            a.setState({
                              rowHeight: a.rowHeight,
                              cells: a.props.cells,
                            })
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'watchWindowResizing',
                value: function() {
                  var e = this
                  window.onresize = function() {
                    e.setState({ rowHeight: e.rowHeight }),
                      e.buffering ||
                        setTimeout(function() {
                          e.buffering = !1
                        }, 10)
                  }
                },
              },
              {
                key: 'updateGridItemHover',
                value: function(e) {
                  this.setState({
                    gridItemHoveredUpon: e,
                    layoutClassName: 'layout '.concat(
                      void 0 !== e ? 'grid-item-hovered-upon' : '',
                    ),
                  })
                },
              },
              {
                key: 'handleMouseOverGridItem',
                value: function(e) {
                  this.updateGridItemHover(e)
                },
              },
              {
                key: 'handleMouseLeaveGridItem',
                value: function(e) {
                  this.state.gridItemHoveredUpon === e &&
                    this.updateGridItemHover()
                },
              },
              {
                key: 'handleClickGridItem',
                value: function(e, t) {
                  console.log(this.props),
                    this.props.isPreview && this.props.selectCell(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e, t) {
                  e.gridWidth !== this.props.gridWidth &&
                    this.setState({ rowHeight: this.rowHeight }),
                    JSON.stringify(this.props.cells) !== JSON.stringify(e.cells)
                      ? this.setState({
                          cellsUpToDate: !1,
                          cells: this.props.cells,
                        })
                      : this.state.cellsUpToDate ||
                        this.setState({ cellsUpToDate: !0 })
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props.ResponsiveGridLayout
                  return r.a.createElement(
                    'div',
                    { id: 'index' },
                    this.state.cellsUpToDate
                      ? this.props.layouts &&
                          this.state.cells &&
                          r.a.createElement(
                            t,
                            {
                              measureBeforeMount: !0,
                              className: this.state.layoutClassName,
                              layouts: this.props.layouts,
                              rowHeight: this.state.rowHeight,
                              width: this.props.gridWidth,
                              nb: !0,
                              isDraggable: !!this.props.gridWidth,
                              isResizable: !!this.props.gridWidth,
                              breakpoints: {
                                desktop: 1326,
                                tablet: 750,
                                mobile: 0,
                              },
                              cols: { desktop: 12, tablet: 12, mobile: 12 },
                              rows: { desktop: 12, tablet: 12, mobile: 12 },
                              containerPadding: [0, 0],
                              onLayoutChange: function(t, a) {
                                return e.props.onLayoutChange
                                  ? e.props.onLayoutChange(t, a)
                                  : {}
                              },
                            },
                            this.state.cells.map(function(t, a) {
                              return r.a.createElement(
                                'div',
                                {
                                  className: 'grid-item',
                                  onClick: function(t) {
                                    return e.handleClickGridItem(a, t)
                                  },
                                  key: a,
                                },
                                r.a.createElement(L, {
                                  selected: e.props.selectedCell === a,
                                  index: a,
                                  link: t.link,
                                  imgSrc: t.imgSrc,
                                  backgroundText: t.backgroundText,
                                  bottomText: t.bottomText,
                                  videoSrc: t.videoSrc,
                                  video: t.video,
                                  isPreview: e.props.gridWidth,
                                }),
                              )
                            }),
                          )
                      : r.a.createElement('div', null),
                  )
                },
              },
              {
                key: 'rowHeight',
                get: function() {
                  var e = this.props.gridWidth
                    ? this.props.gridWidth / 100
                    : window.innerWidth / 100
                  return 'mobile' === this.props.view
                    ? 10 * e
                    : 'tablet' === this.props.view
                    ? 8 * e
                    : 4 * e
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        V = a(420),
        W = a(421),
        R = a(25),
        F = a.n(R),
        G = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                style: {
                  backgroundImage: a.props.headingBackgroundImage
                    ? 'url('.concat(a.props.headingBackgroundImage, ')')
                    : '',
                },
              }),
              (a.render = function() {
                return r.a.createElement(
                  'div',
                  {
                    className: 'top-heading '
                      .concat(
                        a.props.headingBackgroundImage
                          ? 'background-image'
                          : '',
                        ' ',
                      )
                      .concat(a.props.headingSelected ? 'selected' : ''),
                    style: a.state.style,
                    onClick: function() {
                      return a.props.isPreview ? a.props.selectHeading() : {}
                    },
                  },
                  r.a.createElement(
                    V.Textfit,
                    { mode: 'single', max: 50 },
                    a.props.text,
                    a.props.spanText &&
                      r.a.createElement('span', null, a.props.spanText),
                  ),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.headingBackgroundImage !==
                    this.props.headingBackgroundImage &&
                    (this.props.headingBackgroundImage
                      ? this.setState({
                          style: {
                            backgroundImage: 'url('.concat(
                              this.props.headingBackgroundImage,
                              ')',
                            ),
                          },
                        })
                      : this.setState({
                          style: {
                            backgroundImage: 'none',
                            backgroundColor: '#444',
                          },
                        }))
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        K = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).getPathName = function() {
                var e = /(?:\/admin)?\/([A-Za-z\-_]+)\/?/.exec(
                  window.location.pathname,
                )
                return e ? e[1] : ''
              }),
              (a.getPageName = function() {
                return a
                  .getPathName()
                  .split('-')
                  .join(' ')
              }),
              (a.state = { id: a.props.id, heading: '', pageName: '' }),
              (a.getHeadingBackgroundImage = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(
                                ''
                                  .concat(F.a.apiUrl, '/page-info/')
                                  .concat(a.getPathName()),
                              )
                              .then(function(e) {
                                return e.data.headingBackgroundImage
                              })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            console.log(t, a.getPageName()),
                            e.abrupt('return', t)
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (a.props.isPreview ||
                              a.setParentElementsTo100PercentHeight(),
                            !a.props.headingBackgroundImage && !a.getPageName())
                          ) {
                            e.next = 7
                            break
                          }
                          return (e.next = 4), a.getHeadingBackgroundImage()
                        case 4:
                          ;(e.t0 = e.sent), (e.next = 8)
                          break
                        case 7:
                          e.t0 = ''
                        case 8:
                          ;(t = e.t0),
                            a.setState({
                              headingBackgroundImage: t,
                              id: a.props.id || a.getPathName() || 'index',
                              pageName: a.getPageName(),
                              heading: a.getHeading(),
                            })
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return r.a.createElement(W.SizeMe, null, function(e) {
                  var t = e.size
                  return a.state.id
                    ? r.a.createElement(
                        'div',
                        {
                          id: a.state.id,
                          className: a.getMainContainerClassName(t),
                        },
                        !a.props.noHeading &&
                          r.a.createElement(
                            G,
                            Object.assign({}, a.state.heading, {
                              headingBackgroundImage:
                                a.state.headingBackgroundImage,
                              isPreview: a.props.isPreview,
                              selectHeading: function() {
                                return a.props.selectHeading()
                              },
                              headingSelected: a.props.headingSelected,
                            }),
                          ),
                        r.a.createElement(
                          'main',
                          { id: 'content' },
                          a.props.children,
                        ),
                      )
                    : r.a.createElement('div', null)
                })
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'getHeading',
                value: function() {
                  return this.props.heading
                    ? 'object' === typeof this.props.heading
                      ? this.props.heading
                      : { text: this.props.heading }
                    : { text: this.getPageName() }
                },
              },
              {
                key: 'getMainContainerClassName',
                value: function(e) {
                  var t = e.width
                  return 'main-container '.concat(
                    t < 768 ? 'mobile' : t < 1366 ? 'tablet' : 'desktop',
                  )
                },
              },
              {
                key: 'getParentElementsBeforeBody',
                value: function(e) {
                  console.log(e)
                  var t = []
                  return (
                    (function e(a) {
                      if (a) {
                        if (
                          ((a = a.parentElement),
                          console.log(a),
                          'BODY' === a.tagName)
                        )
                          return
                        t.push(a), e(a)
                      }
                    })(e),
                    t
                  )
                },
              },
              {
                key: 'setParentElementsTo100PercentHeight',
                value: function() {
                  var e = this.getParentElementsBeforeBody(
                    document.querySelector('.main-container'),
                  )
                  console.log(e),
                    e.forEach(function(e) {
                      return (e.style.height = '100%')
                    })
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e, t) {
                  this.state.id === t.id ||
                    this.props.isPreview ||
                    this.setParentElementsTo100PercentHeight(),
                    this.props.headingBackgroundImage !==
                      e.headingBackgroundImage &&
                      this.setState({
                        headingBackgroundImage: this.props
                          .headingBackgroundImage,
                      })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        z = a(25),
        J = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.getGridFromDatabase = Object(O.a)(
                C.a.mark(function e() {
                  var t, a
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(''.concat(z.apiUrl, '/grids/index/layouts'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            (e.next = 5),
                            S.a
                              .get(''.concat(z.apiUrl, '/grids/index/cells'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 5:
                          return (
                            (a = e.sent),
                            e.abrupt('return', { layouts: t, cells: a })
                          )
                        case 7:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return a.state.cells
                  ? r.a.createElement(
                      K,
                      {
                        headingBackgroundImage: a.props.headingBackgroundImage,
                        headingSelected: a.props.headingSelected,
                        noHeading: !0,
                        selectHeading: function() {
                          return a.props.selectHeading(a.props.pageName)
                        },
                      },
                      r.a.createElement(M, {
                        layouts: a.state.layouts,
                        cells: a.state.cells,
                        ResponsiveGridLayout: Object(T.WidthProvider)(
                          T.Responsive,
                        ),
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  this.getGridFromDatabase().then(function(t) {
                    var a = t.cells,
                      n = t.layouts
                    e.setState({ cells: a, layouts: n, layoutsLoaded: !0 })
                  })
                },
              },
              { key: 'componentDidUpdate', value: function(e) {} },
            ]),
            t
          )
        })(r.a.Component),
        _ = function() {
          return /^(\/*\w*)\//.exec(window.location.pathname)[1]
        },
        Y = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return a.props.isPreview
                  ? r.a.createElement(
                      'div',
                      {
                        onClick: function() {
                          return a.props.select()
                        },
                        className: 'artist-wrapper '.concat(
                          a.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return a.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return a.props.setHovering(!1)
                        },
                      },
                      a.props.children,
                    )
                  : r.a.createElement(
                      d.b,
                      {
                        to: ''.concat(_(), '/artists/').concat(a.props.page),
                        className: 'artist-wrapper '.concat(
                          a.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return a.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return a.props.setHovering(!1)
                        },
                      },
                      a.props.children,
                    )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Z = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                hovering: !1,
                alignment: a.props.index % 2 === 0 ? 'right' : 'left',
              }),
              (a.getDescriptionStyle = function() {
                return Object.assign(
                  { boxSizing: 'border-box' },
                  a.props.description.style,
                )
              }),
              (a.getSeeReleasesStyle = function() {
                return a.state.hovering
                  ? {
                      color: a.props.description.style.color || 'black',
                      opacity: 1,
                    }
                  : { color: a.props.description.style.color || 'black' }
              }),
              (a.setHovering = function(e) {
                return a.setState({ hovering: e })
              }),
              (a.render = function() {
                return r.a.createElement(
                  Y,
                  {
                    select: function() {
                      return a.props.selectArtist(a.props.index)
                    },
                    selected: a.props.selected,
                    isPreview: a.props.isPreview,
                    page: a.props.page,
                    setHovering: function(e) {
                      return a.setHovering(e)
                    },
                  },
                  a.props.description
                    ? r.a.createElement(
                        'div',
                        { className: 'artist' },
                        r.a.createElement(I, { src: a.props.imgSrc }),
                        r.a.createElement(
                          'div',
                          {
                            className: 'description-outer-wrapper align-'.concat(
                              a.state.alignment,
                            ),
                          },
                          r.a.createElement(
                            'div',
                            {
                              className: 'description',
                              style: a.getDescriptionStyle(),
                            },
                            r.a.createElement(
                              'div',
                              { className: 'text' },
                              r.a.createElement(
                                'div',
                                { className: 'artist-name' },
                                a.props.name,
                              ),
                              r.a.createElement(
                                'div',
                                { className: 'bio' },
                                a.props.description.bio,
                              ),
                              r.a.createElement(
                                'div',
                                {
                                  className: 'see-releases',
                                  style: a.getSeeReleasesStyle(),
                                },
                                r.a.createElement('span', null, '>'),
                                ' See releases',
                              ),
                            ),
                          ),
                        ),
                      )
                    : r.a.createElement('div', null),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'resizeText',
                value: function() {
                  window.dispatchEvent(new Event('resize'))
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        X = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!a.props.artists) {
                            e.next = 4
                            break
                          }
                          a.setState({ artists: a.props.artists }), (e.next = 8)
                          break
                        case 4:
                          return (
                            (e.next = 6),
                            S.a
                              .get(''.concat(F.a.apiUrl, '/artists'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 6:
                          ;(t = e.sent), a.setState({ artists: t })
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return a.state.artists
                  ? r.a.createElement(
                      K,
                      {
                        headingBackgroundImage: 'images/trees.jpg',
                        headingSelected: a.props.headingSelected,
                        selectHeading: function() {
                          return a.props.selectHeading('artists')
                        },
                        isPreview: a.props.isPreview,
                        pageName: 'artists',
                      },
                      a.state.artists.map(function(e, t) {
                        return r.a.createElement(
                          Z,
                          Object.assign(
                            { key: t, index: t, isPreview: a.props.isPreview },
                            e,
                            {
                              selectArtist: function() {
                                return a.props.selectArtist(t)
                              },
                              selected: a.props.selectedArtist === t,
                            },
                          ),
                        )
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.artists &&
                    JSON.stringify(e.artists) !==
                      JSON.stringify(this.props.artists) &&
                    this.setState({ artists: this.props.artists })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        q = a(442),
        $ = a(289),
        Q = a.n($),
        ee =
          (r.a.Component,
          (function(e) {
            function t() {
              var e, a
              Object(c.a)(this, t)
              for (
                var n = arguments.length, o = new Array(n), s = 0;
                s < n;
                s++
              )
                o[s] = arguments[s]
              return (
                ((a = Object(l.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
                )).state = { loading: !0 }),
                (a.render = function() {
                  return r.a.createElement('div', null, a.getIFrame())
                }),
                a
              )
            }
            return (
              Object(p.a)(t, e),
              Object(g.a)(t, [
                {
                  key: 'getEmbedUrl',
                  value: function() {
                    var e = /(.*)\/(.*)\/(.*)\?/.exec(this.props.spotifyUrl)
                    e || (e = /(.*)\/(.*)\/(.*)/.exec(this.props.spotifyUrl))
                    var t = e,
                      a = Object(q.a)(t, 4),
                      n = a[1]
                    return (n = [n, 'embed', a[2], a[3]].join('/'))
                  },
                },
                {
                  key: 'getIFrame',
                  value: function() {
                    var e = this,
                      t = this.getEmbedUrl()
                    return r.a.createElement(
                      'div',
                      null,
                      this.state.loading &&
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(Q.a, {
                            className: 'loading text-center',
                            name: 'line-scale-pulse-out',
                            color: 'white',
                            fadeIn: 'none',
                          }),
                        ),
                      r.a.createElement('iframe', {
                        title: 'spotify-iframe-'.concat(t),
                        onLoad: function() {
                          return e.setState({ loading: !1 })
                        },
                        className: 'spotify-iframe',
                        src: t,
                        width: '300',
                        height: '380',
                        frameBorder: '0',
                        allowtransparency: 'true',
                        allow: 'encrypted-media',
                      }),
                    )
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        te = function(e) {
          var t = e.artist
          return r.a.createElement(
            'div',
            { id: 'releases' },
            r.a.createElement(
              'div',
              { className: 'right' },
              t.releases.map(function(e, t) {
                return r.a.createElement(
                  'div',
                  { key: t, className: 'release' },
                  r.a.createElement('h2', null, e.name),
                  r.a.createElement(
                    'div',
                    { className: 'left' },
                    r.a.createElement('img', {
                      src: e.cover,
                      alt: ''.concat(e.name, ' album cover artwork'),
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'right' },
                    r.a.createElement(ee, { spotifyUrl: e.spotifyUrl }),
                  ),
                )
              }),
            ),
          )
        },
        ae = function(e) {
          var t = e.artist
          return r.a.createElement(
            'div',
            { id: 'top-ten' },
            r.a.createElement('h2', null, 'Top ten tracks'),
            r.a.createElement(ee, { spotifyUrl: t.spotifyUrl }),
          )
        },
        ne = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getArtist()
                        case 2:
                          ;(t = e.sent), a.setState({ artist: t })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return a.state.artist
                  ? r.a.createElement(
                      K,
                      {
                        id: 'artist',
                        heading: { text: ''.concat(a.state.artist.name) },
                        headingBackgroundImage: a.state.artist.imgSrc,
                        isPreview: a.props.isPreview,
                      },
                      r.a.createElement(ae, { artist: a.state.artist }),
                      a.state.artist.releases.length > 0 &&
                        r.a.createElement(te, { artist: a.state.artist }),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'getArtist',
                value: function() {
                  var e = this.props.match.params.artist
                  return S.a
                    .get(''.concat(F.a.apiUrl, '/artists/').concat(e))
                    .then(function(e) {
                      return e.data
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        re = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return a.props.isPreview
                  ? r.a.createElement(
                      'div',
                      {
                        onClick: function() {
                          return a.props.select()
                        },
                        className: 'artist-wrapper '.concat(
                          a.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return a.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return a.props.setHovering(!1)
                        },
                      },
                      a.props.children,
                    )
                  : r.a.createElement(
                      d.b,
                      {
                        to: ''
                          .concat(_(), '/producer-tools/')
                          .concat(a.props.page),
                        className: 'artist-wrapper '.concat(
                          a.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return a.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return a.props.setHovering(!1)
                        },
                      },
                      a.props.children,
                    )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        oe = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                hovering: !1,
                alignment: a.props.index % 2 === 0 ? 'right' : 'left',
              }),
              (a.getDescriptionStyle = function() {
                return Object.assign(
                  { boxSizing: 'border-box' },
                  a.props.description.style,
                )
              }),
              (a.getSeeReleasesStyle = function() {
                return a.state.hovering
                  ? {
                      color: a.props.description.style.color || 'black',
                      opacity: 1,
                    }
                  : { color: a.props.description.style.color || 'black' }
              }),
              (a.setHovering = function(e) {
                return a.setState({ hovering: e })
              }),
              (a.render = function() {
                return r.a.createElement(
                  re,
                  {
                    select: function() {
                      return a.props.selectTool(a.props.index)
                    },
                    selected: a.props.selected,
                    isPreview: a.props.isPreview,
                    page: a.props.page,
                    setHovering: function(e) {
                      return a.setHovering(e)
                    },
                  },
                  a.props.description
                    ? r.a.createElement(
                        'div',
                        { className: 'artist' },
                        r.a.createElement(I, { src: a.props.imgSrc }),
                        r.a.createElement(
                          'div',
                          {
                            className: 'description-outer-wrapper align-'.concat(
                              a.state.alignment,
                            ),
                          },
                          r.a.createElement(
                            'div',
                            {
                              className: 'description',
                              style: a.getDescriptionStyle(),
                            },
                            r.a.createElement(
                              'div',
                              { className: 'text' },
                              r.a.createElement(
                                'div',
                                { className: 'artist-name' },
                                a.props.name,
                              ),
                              r.a.createElement(
                                'div',
                                { className: 'description-text' },
                                a.props.description.text,
                              ),
                              r.a.createElement(
                                'div',
                                {
                                  className: 'see-releases',
                                  style: a.getSeeReleasesStyle(),
                                },
                                r.a.createElement('span', null, '>'),
                                ' Download',
                              ),
                            ),
                          ),
                        ),
                      )
                    : r.a.createElement('div', null),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'resizeText',
                value: function() {
                  window.dispatchEvent(new Event('resize'))
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        se = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!a.props.tools) {
                            e.next = 4
                            break
                          }
                          a.setState({ tools: a.props.tools }), (e.next = 8)
                          break
                        case 4:
                          return (
                            (e.next = 6),
                            S.a
                              .get(''.concat(F.a.apiUrl, '/producer-tools'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 6:
                          ;(t = e.sent), a.setState({ tools: t })
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return a.state.tools
                  ? r.a.createElement(
                      K,
                      {
                        headingBackgroundImage: a.props.headingBackgroundImage,
                        headingSelected: a.props.headingSelected,
                        selectHeading: function() {
                          return a.props.selectHeading(a.props.pageName)
                        },
                        isPreview: a.props.isPreview,
                        backgroundImage: 'images/trees.jpg',
                      },
                      a.state.tools.map(function(e, t) {
                        return r.a.createElement(
                          oe,
                          Object.assign(
                            { key: t, index: t, isPreview: a.props.isPreview },
                            e,
                            {
                              selectTool: function() {
                                a.props.selectTool(t)
                              },
                              selected: a.props.selectedTool === t,
                            },
                          ),
                        )
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.tools &&
                    JSON.stringify(e.tools) !==
                      JSON.stringify(this.props.tools) &&
                    this.setState({ tools: this.props.tools })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        ie = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { dropboxDirectUrl: '' }),
              (a.render = function() {
                return r.a.createElement(
                  'section',
                  { className: 'text' },
                  r.a.createElement('p', null, a.props.description.text),
                  r.a.createElement(
                    'a',
                    { href: a.state.dropboxDirectUrl, className: 'button' },
                    'Download',
                  ),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'setDropboxDirectUrl',
                value: function(e) {
                  this.setState({
                    dropboxDirectUrl: e
                      .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
                      .replace('dl=0', 'dl=1'),
                  })
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  this.setDropboxDirectUrl(this.props.dropboxUrl)
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        ce = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getProducerTool()
                        case 2:
                          ;(t = e.sent), console.log(t), a.setState({ tool: t })
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return a.state.tool
                  ? r.a.createElement(
                      K,
                      {
                        headingBackgroundImage: a.props.headingBackgroundImage,
                        headingSelected: a.props.headingSelected,
                        id: 'producer-tool',
                        heading: {
                          text: ''.concat(a.state.tool.name, ': '),
                          spanText: 'producer tool',
                        },
                        backgroundImage: a.state.tool.imgSrc,
                        selectHeading: function() {
                          return a.props.selectHeading(a.props.pageName)
                        },
                        isPreview: a.props.isPreview,
                      },
                      r.a.createElement(ie, a.state.tool),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'getProducerToolNameFromUrl',
                value: function() {
                  var e = String(window.location)
                  return /.*\/(.*)$/.exec(e)[1]
                },
              },
              {
                key: 'getProducerTool',
                value: function() {
                  var e = this.getProducerToolNameFromUrl()
                  return S.a
                    .get(''.concat(F.a.apiUrl, '/producer-tools/').concat(e))
                    .then(function(e) {
                      return e.data
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        le = a(440),
        ue = a(24),
        pe = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r)),
              )).state = {
                value: ue.n.fromJSON(
                  JSON.parse(a.props.text) || {
                    document: {
                      nodes: [
                        {
                          object: 'block',
                          type: 'paragraph',
                          nodes: [{ object: 'text', text: 'Click to edit.' }],
                        },
                      ],
                    },
                  },
                ),
              }),
              (a.onChange = function(e) {
                var t = e.value
                t.document !== a.state.value.document &&
                  S.a
                    .post(''.concat(F.a.apiUrl, '/about'), {
                      text: JSON.stringify(t.toJSON()),
                    })
                    .then(function(e) {
                      return console.log(e)
                    })
                    .catch(function(e) {
                      return console.log(e)
                    }),
                  a.setState({ value: t })
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(le.a, {
                    readOnly: !this.props.isPreview,
                    value: this.state.value,
                    onChange: this.onChange,
                  })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        de = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.getAboutText = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(''.concat(F.a.apiUrl, '/about/text'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 2:
                          ;(t = e.sent), a.setState({ text: t })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return r.a.createElement(
                  K,
                  {
                    headingBackgroundImage: a.props.headingBackgroundImage,
                    headingSelected: a.props.headingSelected,
                    isPreview: a.props.isPreview,
                    selectHeading: function() {
                      return a.props.selectHeading()
                    },
                  },
                  a.props.aboutText || a.state.text
                    ? r.a.createElement(
                        'section',
                        { className: 'text' },
                        r.a.createElement(pe, {
                          text: a.props.aboutText || a.state.text,
                          isPreview: a.props.isPreview,
                        }),
                      )
                    : r.a.createElement('div', null),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.getAboutText()
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        me = a(425),
        ge = a(213),
        he = a.n(ge),
        fe =
          (a(719),
          (function(e) {
            function t() {
              var e, a
              Object(c.a)(this, t)
              for (
                var n = arguments.length, o = new Array(n), s = 0;
                s < n;
                s++
              )
                o[s] = arguments[s]
              return (
                ((a = Object(l.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
                )).render = function() {
                  return r.a.createElement(
                    'div',
                    { id: 'change-view' },
                    r.a.createElement('h3', null, 'Change view'),
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return a.props.setView('mobile')
                          },
                        },
                        'Mobile [m]',
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return a.props.setView('tablet')
                          },
                        },
                        'Tablet [t]',
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return a.props.setView('desktop')
                          },
                        },
                        'Desktop [d]',
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'change-scale' },
                        r.a.createElement('label', null, 'Scale: '),
                        r.a.createElement(
                          'select',
                          {
                            onChange: function(e) {
                              return a.handleScaleSelect(e)
                            },
                          },
                          r.a.createElement('option', { value: '1' }, '100%'),
                          r.a.createElement('option', { value: '0.9' }, '90%'),
                          r.a.createElement('option', { value: '0.8' }, '80%'),
                          r.a.createElement('option', { value: '0.7' }, '70%'),
                          r.a.createElement('option', { value: '0.6' }, '60%'),
                          r.a.createElement('option', { value: '0.5' }, '50%'),
                        ),
                      ),
                    ),
                  )
                }),
                a
              )
            }
            return (
              Object(p.a)(t, e),
              Object(g.a)(t, [
                {
                  key: 'handleScaleSelect',
                  value: function(e) {
                    var t = e.target.selectedIndex,
                      a = e.target.options[t].value
                    this.props.setScale(a)
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        ve = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return r.a.createElement(
                  'div',
                  { id: 'admin-panel' },
                  r.a.createElement(fe, {
                    setView: a.props.setView,
                    setScale: a.props.setScale,
                  }),
                  'index' === a.props.pageName &&
                    r.a.createElement(
                      'div',
                      { className: 'undo-redo' },
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return a.props.undoLayoutChange()
                          },
                        },
                        'Undo [u]',
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return a.props.redoLayoutChange()
                          },
                        },
                        'Redo [r]',
                      ),
                    ),
                  r.a.createElement(
                    'div',
                    { className: 'sign-out' },
                    r.a.createElement(
                      'button',
                      { onClick: a.props.signOut },
                      'Sign out',
                    ),
                  ),
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'handleScaleSelect',
                value: function(e) {
                  var t = e.target.selectedIndex,
                    a = e.target.options[t].value
                  this.props.setScale(a)
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        be = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                dimensions: {
                  mobile: { width: 375, height: 667 },
                  tablet: { width: 768, height: 1024 },
                  desktop: { width: 1366, height: 768 },
                },
              }),
              (a.getWidth = function() {
                return a.state.dimensions[a.props.view].width
              }),
              (a.getHeight = function() {
                return a.state.dimensions[a.props.view].height
              }),
              (a.render = function() {
                var e = a.props.page
                return e
                  ? r.a.createElement(
                      'div',
                      {
                        id: 'preview-wrapper',
                        style: {
                          width: a.getWidth() * a.props.scale,
                          height: a.getHeight() * a.props.scale,
                        },
                      },
                      r.a.createElement(
                        'div',
                        {
                          id: 'preview',
                          className: a.props.view,
                          style: {
                            width: a.getWidth(),
                            height: a.getHeight(),
                            transform: 'scale('.concat(a.props.scale, ')'),
                            transformOrigin: 'left top',
                          },
                        },
                        r.a.createElement(w, {
                          mobilePreview: 'mobile' === a.props.view,
                          previewWidth: a.getWidth(),
                        }),
                        r.a.createElement(e, {
                          isPreview: !0,
                          pageName: a.props.pageName,
                          view: a.props.view,
                          gridWidth: a.getWidth(),
                          selectHeading: function() {
                            return a.props.selectHeading(a.props.pageName)
                          },
                          updateHeading: function() {
                            return a.props.updateHeading(a.props.pageName)
                          },
                          headingSelected: a.props.headingSelected,
                          headingBackgroundImage:
                            a.props.headingBackgroundImage,
                          selectCell: function(e) {
                            return a.props.selectCell(e)
                          },
                          selectedCell: a.props.selectedCell,
                          cells: a.props.cells,
                          layouts: a.props.layouts,
                          onLayoutChange: function(e, t) {
                            return a.props.onLayoutChange(e, t)
                          },
                          selectArtist: function(e) {
                            return a.props.selectArtist(e)
                          },
                          selectedArtist: a.props.selectedArtist,
                          artists: a.props.artists,
                          selectTool: function(e) {
                            return a.props.selectTool(e)
                          },
                          selectedTool: a.props.selectedTool,
                          tools: a.props.tools,
                          aboutText: a.props.aboutText,
                        }),
                        r.a.createElement(E, null),
                      ),
                    )
                  : r.a.createElement('div', null, 'Loading...')
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        ye = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return r.a.createElement(
                  'button',
                  {
                    className: a.props.enabled ? 'enabled' : '',
                    onClick: function(e) {
                      return a.handleClick(e)
                    },
                  },
                  a.props.children,
                )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'handleClick',
                value: function(e) {
                  this.props.toggle(), e.target.classList.toggle('enabled')
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        we = a(426),
        xe = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).handleChangeComplete = function(e) {
                return a.props.setColor(e)
              }),
              (a.render = function() {
                return r.a.createElement(we.SketchPicker, {
                  color: a.props.color,
                  onChangeComplete: a.handleChangeComplete,
                })
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Ee = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return r.a.createElement(
                  'div',
                  { className: 'non-video-options' },
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement('label', null, 'link'),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return a.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return a.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'link',
                      value: a.props.state.cell.link || '',
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement('label', null, 'backgroundText: heading'),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return a.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return a.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'backgroundText.heading',
                      value:
                        (a.props.state.cell.backgroundText &&
                          a.props.state.cell.backgroundText.heading) ||
                        '',
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement(
                      'label',
                      null,
                      'backgroundText: subheading',
                    ),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return a.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return a.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'backgroundText.subheading',
                      value:
                        (a.props.state.cell.backgroundText &&
                          a.props.state.cell.backgroundText.subheading) ||
                        '',
                    }),
                  ),
                  r.a.createElement('br', null),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement(
                      'label',
                      null,
                      'bottomText: background color',
                    ),
                    r.a.createElement(xe, {
                      color:
                        (a.props.state.cell.bottomText &&
                          a.props.state.cell.bottomText.backgroundColor) ||
                        '#fff',
                      setColor: function(e) {
                        var t = e.rgb,
                          n = t.r,
                          r = t.g,
                          o = t.b,
                          s = t.a,
                          i = 'rgba('
                            .concat(n, ',')
                            .concat(r, ',')
                            .concat(o, ',')
                            .concat(s, ')')
                        a.props.handleInputChange({
                          path: 'bottomText.backgroundColor',
                          value: i,
                          colorChange: !0,
                        })
                      },
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement(
                      'label',
                      null,
                      'bottomText: height (example: 10px)',
                    ),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return a.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return a.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'bottomText.height',
                      value:
                        (a.props.state.cell.bottomText &&
                          a.props.state.cell.bottomText.height) ||
                        '',
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement('label', null, 'bottomText: text'),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return a.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return a.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'bottomText.text',
                      value:
                        (a.props.state.cell.bottomText &&
                          a.props.state.cell.bottomText.text) ||
                        '',
                    }),
                  ),
                )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        ke = a(293),
        Ce = a.n(ke),
        Oe = a(428),
        je = a.n(Oe),
        Se = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r)),
              )).state = {
                image: '',
                isUploading: !1,
                progress: 0,
                imageUrl: a.props.image,
              }),
              (a.handleUploadStart = function() {
                return a.setState({ isUploading: !0, progress: 0 })
              }),
              (a.handleProgress = function(e) {
                return a.setState({ progress: e })
              }),
              (a.handleUploadError = function(e) {
                a.setState({ isUploading: !1 }), console.error(e)
              }),
              (a.handleUploadSuccess = function(e) {
                a.setState({ image: e, progress: 100, isUploading: !1 }),
                  Ce.a
                    .storage()
                    .ref('images')
                    .child(e)
                    .getDownloadURL()
                    .then(function(t) {
                      a.saveImageToDB(t, e),
                        a.setState({ imageUrl: t }),
                        a.props.setImage(t)
                    })
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'saveImageToDB',
                value: function(e, t) {
                  S.a
                    .post(''.concat(F.a.apiUrl, '/images/new'), {
                      url: e,
                      filename: t,
                    })
                    .then(function(e) {
                      return console.log('result', e)
                    })
                    .catch(function(e) {
                      return console.log(e)
                    })
                },
              },
              {
                key: 'handleChange',
                value: function(e) {
                  var t = e.target.value
                  this.setState({ imageUrl: t }), this.props.setImage(t)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(
                      'div',
                      null,
                      this.state.imageUrl &&
                        r.a.createElement('img', {
                          className: 'image-uploader-preview',
                          src: this.state.imageUrl,
                        }),
                      this.state.isUploading &&
                        r.a.createElement(
                          'p',
                          null,
                          'Progress: ',
                          this.state.progress,
                        ),
                    ),
                    r.a.createElement(je.a, {
                      accept: 'image/*',
                      name: 'image',
                      randomizeFilename: !0,
                      storageRef: Ce.a.storage().ref('images'),
                      onUploadStart: this.handleUploadStart,
                      onUploadError: this.handleUploadError,
                      onUploadSuccess: this.handleUploadSuccess,
                      onProgress: this.handleProgress,
                    }),
                    r.a.createElement('input', {
                      type: 'text',
                      value: this.state.imageUrl,
                      onChange: function(t) {
                        return e.handleChange(t)
                      },
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Te = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.getCell = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .get(
                                  ''
                                    .concat(F.a.apiUrl, '/grids/index/cells/')
                                    .concat(t),
                                )
                                .then(function(e) {
                                  return e.data
                                })
                            )
                          case 2:
                            return e.abrupt('return', e.sent)
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.updateCell = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t, n) {
                    var r
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .post(
                                  ''
                                    .concat(F.a.apiUrl, '/grids/index/cells/')
                                    .concat(t),
                                  n,
                                )
                                .then(function(e) {
                                  return (
                                    a.setState({ cellFromDatabase: n }), e.data
                                  )
                                })
                            )
                          case 2:
                            return (r = e.sent), e.abrupt('return', r)
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t, a) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleSubmit = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t && t.preventDefault(),
                              (e.next = 3),
                              S.a
                                .post(
                                  ''
                                    .concat(F.a.apiUrl, '/grids/index/cells/')
                                    .concat(a.state.index),
                                  a.state.cell,
                                )
                                .then(function(e) {
                                  var t = a.state.cells.slice()
                                  return (
                                    a.setState({
                                      cellFromDatabase: a.state.cell,
                                      cells: t,
                                      unsavedChanges: !1,
                                    }),
                                    (t[a.state.index] = a.state.cell),
                                    a.state.colorChange
                                      ? (a.props.refreshGrid({ cells: t }),
                                        a.setState({ colorChange: !1 }))
                                      : a.props.updateGrid({ cells: t }),
                                    e.data
                                  )
                                })
                            )
                          case 3:
                            return (n = e.sent), e.abrupt('return', n)
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleKeyPress = function(e) {
                'Enter' === e.key && a.handleSubmit(e)
              }),
              (a.handleInputChange = function(e) {
                var t = e.e,
                  n = e.path,
                  r = e.value,
                  o = e.colorChange
                if (t) {
                  var s = t.target.id,
                    i = t.target.value
                  a.updateCellValue(s, i)
                } else
                  a.updateCellValue(n, r), o && a.setState({ colorChange: !0 })
              }),
              (a.getCellsFromDatabase = Object(O.a)(
                C.a.mark(function e() {
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(''.concat(F.a.apiUrl, '/grids/index/cells'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 2:
                          return e.abrupt('return', e.sent)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t, n
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getCell(a.props.index)
                        case 2:
                          return (
                            (t = e.sent), (e.next = 5), a.getCellsFromDatabase()
                          )
                        case 5:
                          ;(n = e.sent),
                            a.setState({
                              index: a.props.index,
                              cell: t,
                              cells: n,
                              cellFromDatabase: t,
                            }),
                            (window.onbeforeunload = null),
                            a.setKeyBindings()
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.changeIndex = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.getCell(t)
                          case 2:
                            ;(n = e.sent),
                              a.setState({
                                index: t,
                                cell: n,
                                cellFromDatabase: n,
                                unsavedChanges: !1,
                              })
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && a.handleSubmit())
                }
              }),
              (a.newCell = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a.validateCell() &&
                            ((t = {
                              newLayouts: {
                                desktop: {
                                  w: 12,
                                  h: 4,
                                  x: 0,
                                  minW: 4,
                                  minH: 2,
                                },
                                tablet: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
                                mobile: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
                              },
                              newCell: a.state.cell,
                            }),
                            S.a
                              .post(
                                ''.concat(
                                  F.a.apiUrl,
                                  '/grids/index/layouts/newCell',
                                ),
                                t,
                              )
                              .then(function(e) {
                                var t = e.data,
                                  n = t.layouts,
                                  r = t.cells
                                a.props.updateGrid({ layouts: n, cells: r }),
                                  a.changeIndex(e.data.index)
                              }))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.toggleVideoMode = function() {
                a.updateCellValue('video', !a.state.cell.video)
              }),
              (a.componentDidUpdate = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a.props.index !== t.index &&
                              (a.state.unsavedChanges
                                ? window.confirm(
                                    "You've made unsaved changes for this cell. Proceed and discard?",
                                  ) && a.changeIndex()
                                : a.changeIndex(a.props.index))
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.render = function() {
                return a.state.cell
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'div',
                        { className: 'video-toggle' },
                        r.a.createElement(
                          ye,
                          {
                            enabled: a.state.cell.video,
                            toggle: a.toggleVideoMode,
                          },
                          'Toggle Video',
                        ),
                      ),
                      r.a.createElement('br', null),
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return a.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'image'),
                          r.a.createElement(Se, {
                            image: a.state.cell.imgSrc,
                            setImage: function(e) {
                              return a.handleInputChange({
                                path: 'imgSrc',
                                value: e,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        a.state.cell.video
                          ? r.a.createElement(
                              'div',
                              { className: 'property-input' },
                              r.a.createElement('label', null, 'video link:'),
                              r.a.createElement('input', {
                                onKeyPress: function(e) {
                                  return a.handleKeyPress(e)
                                },
                                onChange: function(e) {
                                  return a.handleInputChange({ e: e })
                                },
                                type: 'text',
                                id: 'videoSrc',
                                value: a.state.cell.videoSrc || '',
                              }),
                            )
                          : r.a.createElement(Ee, {
                              handleKeyPress: function(e) {
                                return a.handleKeyPress(e)
                              },
                              handleInputChange: function(e) {
                                return a.handleInputChange(e)
                              },
                              state: a.state,
                              refreshGrid: function() {
                                return a.props.refreshGrid()
                              },
                            }),
                        r.a.createElement('br', null),
                        a.state.error,
                        r.a.createElement('button', null, 'Submit changes [S]'),
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'create-new' },
                        r.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return a.newCell()
                            },
                          },
                          'Submit as new cell',
                        ),
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return (
                              window.confirm(
                                "Are you sure you want to delete this cell? (There's no going back!)",
                              ) && a.deleteCell()
                            )
                          },
                        },
                        'Delete cell',
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'updateCellValue',
                value: function(e, t) {
                  var a = Object.assign({}, this.state.cell)
                  !(function(e, t) {
                    for (
                      var n = a, r = e.split('.'), o = r.length, s = 0;
                      s < o - 1;
                      s++
                    ) {
                      var i = r[s]
                      n[i] || (n[i] = {}), (n = n[i])
                    }
                    n[r[o - 1]] = t
                  })(e, t),
                    this.setState({ cell: a, unsavedChanges: !0 })
                },
              },
              {
                key: 'validateCell',
                value: function() {
                  var e = this.state.cell,
                    t = e.video ? e.videoSrc : e.imgSrc
                  return (
                    t
                      ? this.setState({ error: void 0 })
                      : this.setState({
                          error:
                            'Error: You must provide at least a background image',
                        }),
                    t
                  )
                },
              },
              {
                key: 'deleteCell',
                value: function() {
                  var e = this
                  S.a
                    .get(
                      ''
                        .concat(F.a.apiUrl, '/grids/index/cells/')
                        .concat(this.state.index, '/delete'),
                    )
                    .then(function(t) {
                      var a = t.data,
                        n = a.layouts,
                        r = a.cells
                      e.props.updateGrid({ layouts: n, cells: r })
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Ae = a(429),
        Ne = a.n(Ae),
        Ie = (function(e) {
          function t(e) {
            var a
            return (
              Object(c.a)(this, t),
              ((a = Object(l.a)(this, Object(u.a)(t).call(this, e))).state = {
                columns: [
                  { title: 'Name', field: 'name' },
                  { title: 'Spotify URL', field: 'spotifyUrl' },
                  { title: 'Album cover image URL', field: 'cover' },
                ],
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(Ne.a, {
                    title: 'Releases',
                    columns: this.state.columns,
                    data: this.props.data,
                    editable: {
                      onRowAdd: function(t) {
                        return new Promise(function(a, n) {
                          setTimeout(function() {
                            var n = e.props.data
                            n.push(t), e.props.updateData(n), a(), a()
                          }, 1e3)
                        })
                      },
                      onRowUpdate: function(t, a) {
                        return new Promise(function(n, r) {
                          setTimeout(function() {
                            var r = e.props.data,
                              o = r.indexOf(a)
                            ;(r[o] = t), e.props.updateData(r), n(), n()
                          }, 1e3)
                        })
                      },
                      onRowDelete: function(t) {
                        return new Promise(function(a, n) {
                          setTimeout(function() {
                            var n = e.props.data,
                              r = n.indexOf(t)
                            n.splice(r, 1), e.props.updateData(n), a(), a()
                          }, 1e3)
                        })
                      },
                    },
                  })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Pe = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.getArtist = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .get(
                                  ''
                                    .concat(F.a.apiUrl, '/artists/index/')
                                    .concat(t),
                                )
                                .then(function(e) {
                                  return e.data
                                })
                            )
                          case 2:
                            return e.abrupt('return', e.sent)
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleSubmit = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t && t.preventDefault(),
                              (e.next = 3),
                              S.a
                                .post(
                                  ''
                                    .concat(F.a.apiUrl, '/artists/')
                                    .concat(a.state.index),
                                  a.state.artist,
                                )
                                .then(function(e) {
                                  return (
                                    a.setState({
                                      artistFromDatabase: a.state.artist,
                                      unsavedChanges: !1,
                                    }),
                                    a.state.colorChange
                                      ? (a.props.refreshArtists(
                                          a.state.index,
                                          a.state.artist,
                                        ),
                                        a.setState({ colorChange: !1 }))
                                      : a.props.updateArtists(
                                          a.state.index,
                                          a.state.artist,
                                        ),
                                    e.data
                                  )
                                })
                            )
                          case 3:
                            return (n = e.sent), e.abrupt('return', n)
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleInputChange = function(e) {
                var t = e.e,
                  n = e.path,
                  r = e.value,
                  o = e.colorChange
                if (t) {
                  var s = t.target.id,
                    i = t.target.value
                  a.updateArtistValue(s, i)
                } else
                  o && a.setState({ colorChange: !0 }),
                    a.updateArtistValue(n, r)
              }),
              (a.changeIndex = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.getArtist(t)
                          case 2:
                            ;(n = e.sent),
                              a.setState({
                                index: t,
                                artist: n,
                                artistFromDatabase: n,
                                unsavedChanges: !1,
                              })
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.newArtist = Object(O.a)(
                C.a.mark(function e() {
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a.validateArtist() &&
                            (console.log(a.state.artist),
                            delete a.state.artist._id,
                            delete a.state.artist.__v,
                            S.a
                              .post(
                                ''.concat(F.a.apiUrl, '/artists/new'),
                                a.state.artist,
                              )
                              .then(function(e) {
                                var t = e.data,
                                  n = t.index,
                                  r = t.artist
                                a.props.refreshArtists(n, r), a.changeIndex(n)
                              }))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.componentDidUpdate = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a.props.index !== t.index &&
                              (a.state.unsavedChanges
                                ? window.confirm(
                                    "You've made unsaved changes for this artist. Proceed and discard?",
                                  ) && a.changeIndex()
                                : a.changeIndex(a.props.index))
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getArtist(a.props.index)
                        case 2:
                          ;(t = e.sent),
                            a.setState({ artist: t, index: a.props.index }),
                            (window.onbeforeunload = null),
                            a.setKeyBindings()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && a.handleSubmit())
                }
              }),
              (a.updateReleases = function(e) {
                var t = a.state.artist
                ;(t.releases = e), a.setState({ artist: t })
              }),
              (a.render = function() {
                return a.state.artist
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return a.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return a.handleInputChange({ e: e })
                            },
                            id: 'name',
                            value: a.state.artist.name || '',
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'page name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return a.handleInputChange({ e: e })
                            },
                            id: 'page',
                            value:
                              a.state.artist.page ||
                              (a.state.artist.name &&
                                a.state.artist.name
                                  .toLowerCase()
                                  .split(' ')
                                  .join('-')) ||
                              '',
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'artist image'),
                          r.a.createElement(Se, {
                            image: a.state.artist.imgSrc,
                            setImage: function(e) {
                              return a.handleInputChange({
                                path: 'imgSrc',
                                value: e,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'bio'),
                          r.a.createElement('textarea', {
                            rows: 6,
                            cols: 60,
                            onKeyPress: function(e) {
                              return a.handleTextareaKeyPress(e)
                            },
                            onChange: function(e) {
                              return a.handleInputChange({ e: e })
                            },
                            id: 'description.bio',
                            value:
                              (a.state.artist.description &&
                                a.state.artist.description.bio) ||
                              '',
                          }),
                        ),
                        r.a.createElement('br', null),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement(
                            'label',
                            null,
                            'description background color',
                          ),
                          r.a.createElement(xe, {
                            color:
                              (a.state.artist.description &&
                                a.state.artist.description.style &&
                                a.state.artist.description.style
                                  .backgroundColor) ||
                              'darkgrey',
                            setColor: function(e) {
                              var t = e.rgb,
                                n = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(n, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              a.handleInputChange({
                                path: 'description.style.backgroundColor',
                                value: i,
                                colorChange: !0,
                              })
                            },
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement(
                            'label',
                            null,
                            'description text color',
                          ),
                          r.a.createElement(xe, {
                            color:
                              (a.state.artist.description &&
                                a.state.artist.description.style &&
                                a.state.artist.description.style.color) ||
                              '#fff',
                            setColor: function(e) {
                              var t = e.rgb,
                                n = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(n, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              a.handleInputChange({
                                path: 'description.style.color',
                                value: i,
                                colorChange: !0,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        r.a.createElement(Ie, {
                          data: a.state.artist.releases,
                          updateData: function(e) {
                            return a.updateReleases(e)
                          },
                        }),
                        a.state.error,
                        r.a.createElement('button', null, 'Submit changes [S]'),
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'create-new' },
                        r.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return a.newArtist()
                            },
                          },
                          'Submit as new artist',
                        ),
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return (
                              window.confirm(
                                "Are you sure you want to delete this artist? (There's no going back!)",
                              ) && a.deleteArtist()
                            )
                          },
                        },
                        'Delete artist',
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'updateArtistValue',
                value: function(e, t) {
                  var a = Object.assign({}, this.state.artist)
                  !(function(e, t) {
                    for (
                      var n = a, r = e.split('.'), o = r.length, s = 0;
                      s < o - 1;
                      s++
                    ) {
                      var i = r[s]
                      n[i] || (n[i] = {}), (n = n[i])
                    }
                    n[r[o - 1]] = t
                  })(e, t),
                    this.setState({ artist: a, unsavedChanges: !0 })
                },
              },
              {
                key: 'validateArtist',
                value: function() {
                  var e = this.state.artist
                  e.imgSrc,
                    e.name,
                    e.description,
                    e.bio,
                    e.style,
                    e.spotifyUrl,
                    e.releases
                  return this.setState({ error: void 0 }), !0
                },
              },
              {
                key: 'deleteArtist',
                value: function() {
                  var e = this
                  this.setState({ artist: void 0, index: 0 }, function() {
                    S.a
                      .get(
                        ''
                          .concat(F.a.apiUrl, '/artists/')
                          .concat(e.props.index, '/delete'),
                      )
                      .then(function(t) {
                        e.props.refreshArtists(e.props.index, void 0, 0)
                      })
                  })
                },
              },
              {
                key: 'handleTextareaKeyPress',
                value: function(e) {
                  'Enter' === e.key && (e.preventDefault(), this.handleSubmit())
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Ue = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.getArtist = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .get(
                                  ''
                                    .concat(
                                      F.a.apiUrl,
                                      '/producer-tools/index/',
                                    )
                                    .concat(t),
                                )
                                .then(function(e) {
                                  return e.data
                                })
                            )
                          case 2:
                            return e.abrupt('return', e.sent)
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleSubmit = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t && t.preventDefault(),
                              (e.next = 3),
                              S.a
                                .post(
                                  ''
                                    .concat(F.a.apiUrl, '/producer-tools/')
                                    .concat(a.state.index),
                                  a.state.artist,
                                )
                                .then(function(e) {
                                  return (
                                    a.setState({
                                      artistFromDatabase: a.state.artist,
                                      unsavedChanges: !1,
                                    }),
                                    a.state.colorChange
                                      ? (a.props.refreshTools(
                                          a.state.index,
                                          a.state.artist,
                                        ),
                                        a.setState({ colorChange: !1 }))
                                      : a.props.updateTools(
                                          a.state.index,
                                          a.state.artist,
                                        ),
                                    e.data
                                  )
                                })
                            )
                          case 3:
                            return (n = e.sent), e.abrupt('return', n)
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleInputChange = function(e) {
                var t = e.e,
                  n = e.path,
                  r = e.value,
                  o = e.colorChange
                if (t) {
                  var s = t.target.id,
                    i = t.target.value
                  a.updateArtistValue(s, i)
                } else
                  o && a.setState({ colorChange: !0 }),
                    a.updateArtistValue(n, r)
              }),
              (a.changeIndex = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.getArtist(t)
                          case 2:
                            ;(n = e.sent),
                              a.setState({
                                index: t,
                                artist: n,
                                artistFromDatabase: n,
                                unsavedChanges: !1,
                              })
                          case 4:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.newArtist = Object(O.a)(
                C.a.mark(function e() {
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a.validateArtist() &&
                            (delete a.state.artist._id,
                            delete a.state.artist.__v,
                            S.a
                              .post(
                                ''.concat(F.a.apiUrl, '/producer-tools/new'),
                                a.state.artist,
                              )
                              .then(function(e) {
                                var t = e.data,
                                  n = t.index,
                                  r = t.tool
                                a.props.refreshTools(n, r, n), a.changeIndex(n)
                              }))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.componentDidUpdate = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a.props.index !== t.index &&
                              (a.state.unsavedChanges
                                ? window.confirm(
                                    "You've made unsaved changes for this artist. Proceed and discard?",
                                  ) && a.changeIndex()
                                : a.changeIndex(a.props.index))
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && a.handleSubmit())
                }
              }),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getArtist(a.props.index)
                        case 2:
                          ;(t = e.sent),
                            a.setState({ artist: t, index: a.props.index }),
                            (window.onbeforeunload = null),
                            a.setKeyBindings()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.updateReleases = function(e) {
                var t = a.state.artist
                ;(t.releases = e), a.setState({ artist: t })
              }),
              (a.render = function() {
                return a.state.artist
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return a.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return a.handleInputChange({ e: e })
                            },
                            id: 'name',
                            value: a.state.artist.name || '',
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'page name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return a.handleInputChange({ e: e })
                            },
                            id: 'page',
                            value:
                              a.state.artist.page ||
                              (a.state.artist.name &&
                                a.state.artist.name
                                  .toLowerCase()
                                  .split(' ')
                                  .join('-')) ||
                              '',
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'image'),
                          r.a.createElement(Se, {
                            image: a.state.artist.imgSrc,
                            setImage: function(e) {
                              return a.handleInputChange({
                                path: 'imgSrc',
                                value: e,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'description text'),
                          r.a.createElement('textarea', {
                            rows: 6,
                            cols: 60,
                            onKeyPress: function(e) {
                              return a.handleTextareaKeyPress(e)
                            },
                            onChange: function(e) {
                              return a.handleInputChange({ e: e })
                            },
                            id: 'description.text',
                            value:
                              (a.state.artist.description &&
                                a.state.artist.description.text) ||
                              '',
                          }),
                        ),
                        r.a.createElement('br', null),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement(
                            'label',
                            null,
                            'description background color',
                          ),
                          r.a.createElement(xe, {
                            color:
                              (a.state.artist.description &&
                                a.state.artist.description.style &&
                                a.state.artist.description.style
                                  .backgroundColor) ||
                              'darkgrey',
                            setColor: function(e) {
                              var t = e.rgb,
                                n = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(n, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              a.handleInputChange({
                                path: 'description.style.backgroundColor',
                                value: i,
                                colorChange: !0,
                              })
                            },
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement(
                            'label',
                            null,
                            'description text color',
                          ),
                          r.a.createElement(xe, {
                            color:
                              (a.state.artist.description &&
                                a.state.artist.description.style &&
                                a.state.artist.description.style.color) ||
                              '#fff',
                            setColor: function(e) {
                              var t = e.rgb,
                                n = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(n, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              a.handleInputChange({
                                path: 'description.style.color',
                                value: i,
                                colorChange: !0,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        a.state.error,
                        r.a.createElement('button', null, 'Submit changes [S]'),
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'create-new' },
                        r.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return a.newArtist()
                            },
                          },
                          'Submit as new producer tool',
                        ),
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return (
                              window.confirm(
                                "Are you sure you want to delete this producer tool? (There's no going back!)",
                              ) && a.deleteArtist()
                            )
                          },
                        },
                        'Delete producer tool',
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'updateArtistValue',
                value: function(e, t) {
                  var a = Object.assign({}, this.state.artist)
                  !(function(e, t) {
                    for (
                      var n = a, r = e.split('.'), o = r.length, s = 0;
                      s < o - 1;
                      s++
                    ) {
                      var i = r[s]
                      n[i] || (n[i] = {}), (n = n[i])
                    }
                    n[r[o - 1]] = t
                  })(e, t),
                    this.setState({ artist: a, unsavedChanges: !0 })
                },
              },
              {
                key: 'validateArtist',
                value: function() {
                  return this.setState({ error: void 0 }), !0
                },
              },
              {
                key: 'deleteArtist',
                value: function() {
                  var e = this
                  this.changeIndex(0),
                    this.setState({ artist: void 0, index: 0 }, function() {
                      S.a
                        .get(
                          ''
                            .concat(F.a.apiUrl, '/producer-tools/')
                            .concat(e.props.index, '/delete'),
                        )
                        .then(function(t) {
                          return e.props.refreshTools(e.props.index, void 0, 0)
                        })
                    })
                },
              },
              {
                key: 'handleTextareaKeyPress',
                value: function(e) {
                  'Enter' === e.key && (e.preventDefault(), this.handleSubmit())
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        He = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (a.getHeading = Object(O.a)(
                C.a.mark(function e() {
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(
                                ''
                                  .concat(F.a.apiUrl, '/page-info/')
                                  .concat(a.props.pageName),
                              )
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 2:
                          return e.abrupt('return', e.sent)
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.handleSubmit = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t && t.preventDefault(),
                              S.a
                                .post(
                                  ''
                                    .concat(F.a.apiUrl, '/page-info/')
                                    .concat(a.props.pageName),
                                  a.state.heading,
                                )
                                .then(function(e) {
                                  a.setState({
                                    headingFromDatabase: a.state.heading,
                                  }),
                                    a.props.updateHeading(a.state.heading)
                                })
                          case 2:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.handleInputChange = function(e) {
                var t = e.e,
                  n = e.path,
                  r = e.value
                if (t) {
                  var o = t.target.id,
                    s = t.target.value
                  a.updateHeadingValue(o, s)
                } else a.updateHeadingValue(n, r)
              }),
              (a.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && a.handleSubmit())
                }
              }),
              (a.componentDidMount = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), a.getHeading()
                        case 2:
                          ;(t = e.sent),
                            a.setState({ heading: t }),
                            (window.onbeforeunload = null),
                            a.setKeyBindings()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.render = function() {
                return a.state.heading
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return a.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement(
                            'label',
                            null,
                            'heading background image',
                          ),
                          r.a.createElement(Se, {
                            image: a.state.heading.headingBackgroundImage,
                            setImage: function(e) {
                              return a.handleInputChange({
                                path: 'headingBackgroundImage',
                                value: e,
                              })
                            },
                          }),
                        ),
                        a.state.error,
                        r.a.createElement('button', null, 'Submit changes [S]'),
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'updateHeadingValue',
                value: function(e, t) {
                  var a = Object.assign({}, this.state.heading)
                  !(function(e, t) {
                    for (
                      var n = a, r = e.split('.'), o = r.length, s = 0;
                      s < o - 1;
                      s++
                    ) {
                      var i = r[s]
                      n[i] || (n[i] = {}), (n = n[i])
                    }
                    n[r[o - 1]] = t
                  })(e, t),
                    this.setState({ heading: a })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        De = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return a.props.selectedHeading
                  ? r.a.createElement(He, {
                      pageName: a.props.match.params.page,
                      selectedHeading: a.props.selectedHeading,
                      updateHeading: function(e) {
                        return a.props.updateHeading(e)
                      },
                    })
                  : 'artists' === a.props.match.params.page
                  ? r.a.createElement(Pe, {
                      index: a.props.selectedArtist,
                      updateArtists: function(e, t) {
                        return a.props.updateArtists(e, t)
                      },
                      refreshArtists: function(e, t) {
                        return a.props.refreshArtists(e, t)
                      },
                    })
                  : 'index' === a.props.match.params.page
                  ? r.a.createElement(Te, {
                      index: a.props.selectedCell,
                      updateGrid: function(e) {
                        var t = e.layouts,
                          n = e.cells
                        return a.props.updateGrid({ layouts: t, cells: n })
                      },
                      refreshGrid: function(e) {
                        var t = e.cells
                        return a.props.refreshGrid({ cells: t })
                      },
                      videoMode: a.props.selectedCell.video,
                    })
                  : 'producer-tools' === a.props.match.params.page
                  ? r.a.createElement(Ue, {
                      index: a.props.selectedTool,
                      updateTools: function(e, t) {
                        return a.props.updateTools(e, t)
                      },
                      refreshTools: function(e, t) {
                        return a.props.refreshTools(e, t)
                      },
                    })
                  : 'about' === a.props.match.params.page
                  ? r.a.createElement('div', null, 'about editor')
                  : r.a.createElement('div', null)
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Be = {
          index: (function(e) {
            function t() {
              var e, a
              Object(c.a)(this, t)
              for (
                var n = arguments.length, o = new Array(n), s = 0;
                s < n;
                s++
              )
                o[s] = arguments[s]
              return (
                ((a = Object(l.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
                )).render = function() {
                  return a.props.cells
                    ? r.a.createElement(M, {
                        selectCell: function(e) {
                          return a.props.selectCell(e)
                        },
                        selectedCell: a.props.selectedCell,
                        view: a.props.view,
                        layouts: a.props.layouts,
                        cells: a.props.cells,
                        ResponsiveGridLayout: T.Responsive,
                        gridWidth: a.props.gridWidth,
                        onLayoutChange: function(e, t) {
                          return a.props.onLayoutChange(e, t)
                        },
                      })
                    : r.a.createElement('div', null)
                }),
                a
              )
            }
            return Object(p.a)(t, e), t
          })(r.a.Component),
          artists: X,
          artist: ne,
          'producer-tools': se,
          'producer-tool': ce,
          about: de,
        },
        Le = he.a
          .initializeApp({
            apiKey: 'AIzaSyBSdDsj2JJuAI_9V-z5-qwW45YDdQmBoyE',
            authDomain: 'division-88-6430e.firebaseapp.com',
            databaseURL: 'https://division-88-6430e.firebaseio.com',
            projectId: 'division-88-6430e',
            storageBucket: 'division-88-6430e.appspot.com',
            messagingSenderId: '1059847851928',
          })
          .auth(),
        Me = { googleProvider: new he.a.auth.GoogleAuthProvider() },
        Ve = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                view: 'mobile',
                scale: 1,
                countdown: 2,
                selectedCell: 0,
                selectedArtist: 0,
                selectedTool: 0,
                dataReady: !1,
                selectedHeading: void 0,
              }),
              (a.setScale = function(e) {
                return a.setState({ scale: e })
              }),
              (a.setView = function(e) {
                return a.setState({ view: e })
              }),
              (a.updateGrid = function(e) {
                var t = e.layouts,
                  n = e.cells
                t && n
                  ? a.setState({ layouts: t, cells: n })
                  : t
                  ? a.setState({ layouts: t })
                  : n && a.setState({ cells: n })
              }),
              (a.refreshGrid = function(e) {
                var t = e.cells,
                  n = a.state.cellsTemp
                n
                  ? a.setState({ cellsTemp: {}, cells: n })
                  : a.setState({ cells: {}, cellsTemp: t })
              }),
              (a.updateArtists = function(e, t) {
                var n = a.state,
                  r = n.artists,
                  o = n.artistsTemp
                o
                  ? ((o[e] = t), a.setState({ artistsTemp: o, artists: r }))
                  : ((r[e] = t), a.setState({ artists: r, artistsTemp: o }))
              }),
              (a.refreshArtists = function(e, t, n) {
                var r = a.state,
                  o = r.artists,
                  s = r.artistsTemp
                s
                  ? ((s[e] = t),
                    a.setState({ artistsTemp: void 0, artists: s }))
                  : ((o[e] = t),
                    a.setState({ artists: void 0, artistsTemp: o })),
                  void 0 !== n &&
                    (window.location.reload(),
                    a.setState({ selectedArtist: n }))
              }),
              (a.updateTools = function(e, t) {
                var n = a.state,
                  r = n.tools,
                  o = n.toolsTemp
                o
                  ? ((o[e] = t), a.setState({ toolsTemp: o, tools: r }))
                  : ((r[e] = t), a.setState({ tools: r, toolsTemp: o }))
              }),
              (a.refreshTools = function(e, t, n) {
                var r = a.state,
                  o = r.tools,
                  s = r.toolsTemp
                s
                  ? ((s[e] = t), a.setState({ toolsTemp: void 0, tools: s }))
                  : ((o[e] = t), a.setState({ tools: void 0, toolsTemp: o })),
                  void 0 !== n &&
                    (a.setState({ selectedtool: n }),
                    console.log('new index'),
                    window.location.reload())
              }),
              (a.updateHeading = function(e) {
                a.setState({ headingBackgroundImage: e.headingBackgroundImage })
              }),
              (a.selectCell = function(e) {
                return a.setState({ selectedCell: e, selectedHeading: void 0 })
              }),
              (a.selectArtist = function(e) {
                return a.setState({
                  selectedArtist: e,
                  selectedHeading: void 0,
                })
              }),
              (a.selectTool = function(e) {
                return a.setState({ selectedTool: e, selectedHeading: void 0 })
              }),
              (a.selectHeading = function(e) {
                a.setState({
                  selectedHeading: e,
                  selectedCell: void 0,
                  selectedArtist: void 0,
                  selectedTool: void 0,
                })
              }),
              (a.updateCell = function(e, t) {
                return a.setState({ updatedCell: { index: e, cell: t } })
              }),
              (a.setBodyBackground = function() {
                return (document.getElementsByTagName(
                  'body',
                )[0].style.backgroundColor = '#222')
              }),
              (a.setKeyBindings = function() {
                document.onkeydown = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('u' === e.key
                      ? a.undoLayoutChange()
                      : 'r' === e.key
                      ? a.redoLayoutChange()
                      : 'm' === e.key
                      ? a.setView('mobile')
                      : 't' === e.key
                      ? a.setView('tablet')
                      : 'd' === e.key && a.setView('desktop'))
                }
              }),
              (a.getArtistsFromDatabase = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(''.concat(F.a.apiUrl, '/artists'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            a.setState({ artists: t }),
                            e.abrupt('return', t)
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.getArtistFromDatabase = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .get(
                                  ''
                                    .concat(F.a.apiUrl, '/artist/index/')
                                    .concat(t),
                                )
                                .then(function(e) {
                                  return e.data
                                })
                            )
                          case 2:
                            return (
                              (n = e.sent),
                              a.setState({ artist: n }),
                              e.abrupt('return', n)
                            )
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.getProducerToolsFromDatabase = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .get(''.concat(F.a.apiUrl, '/producer-tools'))
                                .then(function(e) {
                                  return e.data
                                })
                            )
                          case 2:
                            return (
                              (n = e.sent),
                              a.setState({ tools: n }),
                              e.abrupt('return', n)
                            )
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.getGridFromDatabase = Object(O.a)(
                C.a.mark(function e() {
                  var t, n
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(
                                ''.concat(F.a.apiUrl, '/grids/index/layouts'),
                              )
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            (e.next = 5),
                            S.a
                              .get(''.concat(F.a.apiUrl, '/grids/index/cells'))
                              .then(function(e) {
                                return e.data
                              })
                          )
                        case 5:
                          return (
                            (n = e.sent),
                            a.setState({ cells: n, layouts: t }),
                            (a.layoutsHistory = [t]),
                            (a.layoutsUndone = []),
                            e.abrupt('return', n)
                          )
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.getAboutTextFromDatabase = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              S.a
                                .get(''.concat(F.a.apiUrl, '/about/text'))
                                .then(function(e) {
                                  return e.data
                                })
                            )
                          case 2:
                            return (
                              (n = e.sent),
                              a.setState({ aboutText: n }),
                              e.abrupt('return', n)
                            )
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.getHeadingBackgroundImage = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            S.a
                              .get(
                                ''
                                  .concat(F.a.apiUrl, '/page-info/')
                                  .concat(a.props.match.params.page),
                              )
                              .then(function(e) {
                                return e.data.headingBackgroundImage
                              })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            a.setState({ headingBackgroundImage: t }),
                            e.abrupt('return', t)
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.getPageData = Object(O.a)(
                C.a.mark(function e() {
                  var t
                  return C.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('artists' !== (t = a.getPageName())) {
                            e.next = 7
                            break
                          }
                          return (e.next = 4), a.getArtistsFromDatabase()
                        case 4:
                          return e.abrupt('return', e.sent)
                        case 7:
                          if ('artist' !== t) {
                            e.next = 13
                            break
                          }
                          return (e.next = 10), a.getArtistFromDatabase()
                        case 10:
                          return e.abrupt('return', e.sent)
                        case 13:
                          if ('producer-tools' !== t) {
                            e.next = 19
                            break
                          }
                          return (e.next = 16), a.getProducerToolsFromDatabase()
                        case 16:
                          return e.abrupt('return', e.sent)
                        case 19:
                          if ('index' !== t) {
                            e.next = 25
                            break
                          }
                          return (e.next = 22), a.getGridFromDatabase()
                        case 22:
                          return e.abrupt('return', e.sent)
                        case 25:
                          if ('about' !== t) {
                            e.next = 29
                            break
                          }
                          return (e.next = 28), a.getAboutTextFromDatabase()
                        case 28:
                          return e.abrupt('return', e.sent)
                        case 29:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (a.getDataForPage = (function() {
                var e = Object(O.a)(
                  C.a.mark(function e(t) {
                    var n, r
                    return C.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = new Promise(function(e, t) {
                                return a
                                  .getHeadingBackgroundImage()
                                  .then(function(t) {
                                    return e(t)
                                  })
                              })),
                              (r = new Promise(function(e, n) {
                                return a.getPageData(t).then(function(t) {
                                  return e(t)
                                })
                              })),
                              (e.next = 4),
                              Promise.all([n, r])
                            )
                          case 4:
                            a.setState({ dataReady: !0 })
                          case 5:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function(t) {
                  return e.apply(this, arguments)
                }
              })()),
              (a.signOut = function() {
                return he.a.auth().signOut()
              }),
              (a.getPageName = function() {
                return a.props.match.params.page
              }),
              (a.render = function() {
                return a.props.user
                  ? r.a.createElement(
                      'div',
                      { id: 'admin-root' },
                      r.a.createElement(ve, {
                        setScale: function(e) {
                          return a.setScale(e)
                        },
                        setView: function(e) {
                          return a.setView(e)
                        },
                        pageName: a.getPageName(),
                        undoLayoutChange: function() {
                          return a.undoLayoutChange()
                        },
                        redoLayoutChange: function() {
                          return a.redoLayoutChange()
                        },
                        signOut: function() {
                          return a.props.signOut()
                        },
                      }),
                      a.state.dataReady
                        ? r.a.createElement(be, {
                            pageName: a.getPageName(),
                            page: Be[a.getPageName()],
                            view: a.state.view,
                            scale: a.state.scale,
                            headingBackgroundImage:
                              a.state.headingBackgroundImage,
                            selectHeading: function(e) {
                              return a.selectHeading(e)
                            },
                            headingSelected: a.state.selectedHeading,
                            selectCell: function(e) {
                              return a.selectCell(e)
                            },
                            selectedCell: a.state.selectedCell,
                            layouts: a.state.layouts,
                            cells: a.state.cells,
                            onLayoutChange: function(e, t) {
                              return a.onLayoutChange(e, t)
                            },
                            selectArtist: function(e) {
                              return a.selectArtist(e)
                            },
                            selectedArtist: a.state.selectedArtist,
                            artists: a.state.artists,
                            selectTool: function(e) {
                              return a.selectTool(e)
                            },
                            selectedTool: a.state.selectedTool,
                            tools: a.state.tools,
                            aboutText: a.state.aboutText,
                          })
                        : r.a.createElement('div', null, 'loading...'),
                      r.a.createElement(
                        De,
                        Object.assign({}, a.props, a.state, {
                          selectedHeading: a.state.selectedHeading,
                          updateHeading: function(e) {
                            return a.updateHeading(e)
                          },
                          updateArtists: function(e, t) {
                            return a.updateArtists(e, t)
                          },
                          refreshArtists: function(e, t, n) {
                            return a.refreshArtists(e, t, n)
                          },
                          updateGrid: function(e) {
                            var t = e.layouts,
                              n = e.cells
                            return a.updateGrid({ layouts: t, cells: n })
                          },
                          refreshGrid: function(e) {
                            var t = e.cells
                            return a.refreshGrid({ cells: t })
                          },
                          updateTools: function(e, t) {
                            return a.updateTools(e, t)
                          },
                          refreshTools: function(e, t, n) {
                            return a.refreshTools(e, t, n)
                          },
                        }),
                      ),
                    )
                  : r.a.createElement(
                      K,
                      { heading: 'Authorization Required' },
                      r.a.createElement(
                        'section',
                        { className: 'text sign-in-prompt' },
                        r.a.createElement(
                          'p',
                          null,
                          r.a.createElement(
                            'button',
                            {
                              onClick: function(e) {
                                return a.handleClickSignIn(e)
                              },
                            },
                            'sign in',
                          ),
                        ),
                      ),
                    )
              }),
              a
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'addSpaceToTopOfBody',
                value: function() {
                  document.getElementsByTagName('body')[0].style.marginTop =
                    '6rem'
                },
              },
              {
                key: 'undoLayoutChange',
                value: function() {
                  var e = this.layoutsHistory[this.layoutsHistory.length - 2]
                  e &&
                    (this.layoutsUndone.push(
                      this.layoutsHistory[this.layoutsHistory.length - 1],
                    ),
                    (this.layoutsHistory = this.layoutsHistory.slice(
                      0,
                      this.layoutsHistory.length - 2,
                    )),
                    this.setState({ layouts: e }))
                },
              },
              {
                key: 'redoLayoutChange',
                value: function() {
                  if (this.layoutsUndone) {
                    var e = this.layoutsUndone[this.layoutsUndone.length - 1]
                    e &&
                      ((this.layoutsUndone = this.layoutsUndone.slice(
                        0,
                        this.layoutsUndone.length - 1,
                      )),
                      this.setState({ layouts: e }))
                  }
                },
              },
              {
                key: 'onLayoutChange',
                value: function(e, t) {
                  JSON.stringify(e) !== JSON.stringify(this.lastLayoutChange) &&
                    (this.setState({ layouts: t }),
                    (this.lastLayoutChange = e),
                    this.layoutsHistory || (this.layoutsHistory = [e]),
                    this.layoutsHistory.push(t),
                    S.a.post(''.concat(F.a.apiUrl, '/grids/index'), {
                      layouts: t,
                    }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e, t) {
                  this.props.match.params.page !== e.match.params.page
                    ? (this.setState({
                        dataReady: !1,
                        selectedArtist: void 0,
                        selectedTool: void 0,
                        selectedCell: void 0,
                        selectedHeading: void 0,
                      }),
                      this.getDataForPage())
                    : this.state.cellsTemp
                    ? this.setState({
                        cells: this.state.cellsTemp,
                        cellsTemp: void 0,
                      })
                    : this.state.artistsTemp
                    ? this.setState({
                        artists: this.state.artistsTemp,
                        artistsTemp: void 0,
                      })
                    : this.state.toolsTemp &&
                      this.setState({
                        tools: this.state.toolsTemp,
                        toolsTemp: void 0,
                      })
                },
              },
              {
                key: 'handleClickSignIn',
                value: function(e) {
                  e.preventDefault(), this.props.signInWithGoogle()
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  this.getDataForPage(),
                    this.addSpaceToTopOfBody(),
                    this.setKeyBindings(),
                    this.setBodyBackground()
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        We = Object(me.a)({ providers: Me, firebaseAppAuth: Le })(Ve),
        Re = (function(e) {
          function t() {
            var e, a
            Object(c.a)(this, t)
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s]
            return (
              ((a = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return r.a.createElement(
                  'div',
                  null,
                  r.a.createElement(
                    d.a,
                    null,
                    r.a.createElement(w, null),
                    r.a.createElement(m.a, {
                      exact: !0,
                      path: '/',
                      component: J,
                    }),
                    r.a.createElement(m.a, {
                      exact: !0,
                      path: '/artists',
                      component: X,
                    }),
                    r.a.createElement(m.a, {
                      path: '/artists/:artist',
                      component: ne,
                    }),
                    r.a.createElement(m.a, {
                      exact: !0,
                      path: '/producer-tools',
                      component: se,
                    }),
                    r.a.createElement(m.a, {
                      path: '/producer-tools/:tool',
                      component: ce,
                    }),
                    r.a.createElement(m.a, { path: '/about', component: de }),
                    r.a.createElement(m.a, {
                      exact: !0,
                      path: '/admin',
                      render: function(e) {
                        return r.a.createElement(We, {
                          match: { params: { page: 'index' } },
                        })
                      },
                    }),
                    r.a.createElement(m.a, {
                      path: '/admin/:page',
                      component: We,
                    }),
                    r.a.createElement(E, null),
                  ),
                )
              }),
              a
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component)
      a(1079)
      Object(i.setConfiguration)({ gutterWidth: 0 })
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      )
      s.a.render(
        r.a.createElement(function() {
          return r.a.createElement(Re, null)
        }, null),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    },
    25: function(e, t) {
      e.exports = {
        apiUrl: 'https://division-88-6430e.firebaseapp.com/api',
        appUrl: 'https://division-88-6430e.web.app',
      }
    },
    452: function(e, t, a) {
      e.exports = a(1080)
    },
  },
  [[452, 1, 2]],
])
//# sourceMappingURL=main.d4a7c467.chunk.js.map
