;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    103: function(e, t) {
      e.exports = {
        apiUrl: 'https://division-88-6430e.firebaseapp.com/api',
        appUrl: 'https://division-88-6430e.web.app',
      }
    },
    330: function(e, t, n) {
      e.exports = n(684)
    },
    683: function(e, t, n) {},
    684: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        o = n(24),
        s = n.n(o),
        i = n(299),
        c = n(9),
        l = n(10),
        u = n(11),
        p = n(12),
        d = n(32),
        m = n(73),
        g = n(15),
        h = n(300),
        f = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                links: [
                  { name: 'Artists', url: '/artists' },
                  { name: 'Producer Tools', url: '/producer-tools' },
                  { name: 'About', url: '/about' },
                  { name: 'Posts', url: '/posts' },
                ],
                adminVersion: !1,
              }),
              (n.getAdminLink = function(e) {
                return '/admin' + e
              }),
              (n.render = function() {
                return r.a.createElement(
                  'div',
                  { id: 'nav-wrapper' },
                  r.a.createElement(
                    'nav',
                    null,
                    n.state.links.map(function(e) {
                      return r.a.createElement(
                        d.b,
                        {
                          key: e.name,
                          onClick: n.props.toggleOpenClose,
                          to: n.state.adminVersion
                            ? n.getAdminLink(e.url)
                            : e.url,
                        },
                        e.name,
                      )
                    }),
                  ),
                )
              }),
              n
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
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { isOpen: !1, width: 30, opacity: '0' }),
              (n.getStyles = function() {
                return {
                  bmBurgerButton: {
                    position: 'absolute',
                    width: n.state.width + 'px',
                    height: '26px',
                    marginLeft:
                      'calc('.concat(
                        n.props.previewWidth - n.state.width,
                        'px - 2rem)',
                      ) || !1,
                    right: n.props.previewWidth ? 'auto' : '2rem',
                    marginTop: '2rem',
                  },
                  bmBurgerBars: { background: '#fff' },
                  bmBurgerBarsHover: { background: '#ddd' },
                  bmCrossButton: {
                    height: '24px',
                    width: '24px',
                    display: n.props.previewWidth ? 'none' : 'block',
                  },
                  bmCross: { background: '#bdc3c7' },
                  bmMenuWrap: {
                    position: 'fixed',
                    marginLeft:
                      'calc('.concat(n.state.width, 'px + 4rem)') || !1,
                    right: '0',
                    height: '100vh',
                    zIndex: '9999',
                    display: n.props.previewWidth ? 'none' : 'inline',
                  },
                  bmMenu: {
                    display: n.props.previewWidth ? 'none' : 'block',
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
                    display: n.props.previewWidth ? 'none' : 'inline',
                  },
                }
              }),
              (n.render = function() {
                return r.a.createElement(
                  h.slide,
                  { right: !0, styles: n.getStyles(), isOpen: n.state.isOpen },
                  r.a.createElement(f, {
                    toggleOpenClose: function() {
                      return n.toggleOpenClose()
                    },
                  }),
                )
              }),
              n
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
        b = n(217),
        y = n.n(b),
        w = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { adminVersion: !1 }),
              (n.getAdminLink = function(e) {
                return '/admin' + e
              }),
              (n.render = function() {
                return r.a.createElement(
                  'div',
                  { className: 'header-wrapper' },
                  n.props.mobilePreview
                    ? r.a.createElement(v, {
                        previewWidth: n.props.previewWidth,
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
                          to: n.state.adminVersion ? n.getAdminLink('/') : '/',
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
                    !n.props.mobilePreview &&
                      r.a.createElement(
                        y.a,
                        { minWidth: 440 },
                        r.a.createElement(f, null),
                      ),
                  ),
                )
              }),
              n
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
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).getYear = function() {
                return new Date().getFullYear()
              }),
              (n.render = function() {
                return r.a.createElement(
                  'footer',
                  null,
                  '\xa9 ',
                  n.getYear(),
                  ' Divison 88 Ltd.',
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        E = function() {
          return r.a.createElement(x, null)
        },
        k = n(5),
        O = n.n(k),
        j = n(14),
        C = n(154),
        A = n.n(C),
        S = n(103),
        P = n.n(S),
        I = A.a.create({ baseURL: P.a.apiUrl }),
        T = n(118),
        N = n(302),
        H = n(318),
        D = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                style: {
                  background: 'url('.concat(
                    n.props.src,
                    ') center/cover no-repeat',
                  ),
                },
              }),
              (n.render = function() {
                return r.a.createElement('div', {
                  style: n.state.style,
                  className: 'img '.concat(n.props.selected ? 'selected' : ''),
                })
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidUpdate',
                value: function(e, t, n) {
                  e.src !== this.props.src &&
                    this.setState({
                      style: {
                        background: 'url('.concat(
                          this.props.src,
                          ') center/cover no-repeat',
                        ),
                      },
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        B = n(168),
        U = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                videoId: n.props.videoSrc
                  ? /\?v=(.*)/.exec(n.props.videoSrc)[1]
                  : '',
                opts: { playerVars: { autoplay: 1, modestbranding: 1 } },
              }),
              (n.getStyle = function() {
                return {
                  cursor: n.props.isPreview ? 'default' : 'pointer',
                  display: n.state.userPressedPlayButton ? 'none' : 'block',
                }
              }),
              (n.onPlay = function(e) {
                return n.setState({ playing: !0 })
              }),
              (n.onPause = function(e) {
                return n.setState({ playing: !1 })
              }),
              (n.getHeight = function() {
                return n.containerEl.clientHeight
              }),
              (n.getWidth = function() {
                return n.containerEl.clientWidth
              }),
              (n.setVideoDimensions = function() {
                n.setState({
                  outerWidth: n.getWidth(),
                  opts: Object.assign(n.state.opts, {
                    height: n.getHeight(),
                    width: n.getWidth(),
                  }),
                })
              }),
              (n.updateVideoDimensions = function(e) {
                var t = e.height,
                  a = e.width
                ;(n.getIFrame().height = t), (n.getIFrame().width = a)
              }),
              (n.getIFrame = function() {
                return n.containerEl.firstElementChild.firstElementChild
                  .firstElementChild
              }),
              (n.getIFrameDimensions = function() {
                return {
                  height: n.getIFrame().clientHeight,
                  width: n.getIFrame().clientWidth,
                }
              }),
              (n.getHeightOfGridItem = function() {
                return n.containerEl.parentElement.clientHeight
              }),
              (n.componentDidMount = function() {
                n.setState({ mounted: !0 }), n.setVideoDimensions()
              }),
              (n.handleResize = function(e) {
                if (n.state.mounted && n.state.videoReady) {
                  var t = n.getHeightOfGridItem()
                  n.updateVideoDimensions({ height: t, width: e })
                }
              }),
              (n.render = function() {
                return r.a.createElement(
                  B.a,
                  {
                    handleWidth: !0,
                    onResize: function(e) {
                      return n.handleResize(e)
                    },
                  },
                  function(e) {
                    e.width
                    return r.a.createElement(
                      'div',
                      {
                        ref: function(e) {
                          n.containerEl = e
                        },
                      },
                      n.state.userPressedPlayButton
                        ? r.a.createElement(
                            'div',
                            {
                              className: 'video',
                              style: { position: 'relative', height: '100%' },
                            },
                            r.a.createElement(N.a, {
                              videoId: n.state.videoId,
                              opts: n.state.opts,
                              onReady: function(e) {
                                return n._onReady(e)
                              },
                              onPlay: function(e) {
                                return n.onPlay(e)
                              },
                              onPause: function(e) {
                                return n.onPause(e)
                              },
                              onError: function(e) {
                                return console.log('Youtube error', e)
                              },
                            }),
                          )
                        : r.a.createElement(
                            'div',
                            {
                              onClick: function() {
                                return n.handlePressPlayAndLoadVideo()
                              },
                              id: 'play-video-'.concat(n.state.videoId),
                              style: n.getStyle(),
                              className: 'video-link wrapper',
                            },
                            r.a.createElement(D, {
                              src: n.props.imgSrc,
                              selected: n.props.selected,
                            }),
                            r.a.createElement(
                              'div',
                              { className: 'icon-wrapper' },
                              r.a.createElement(H.a, { className: 'icon' }),
                            ),
                          ),
                    )
                  },
                )
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'onPlayerReady',
                value: function(e) {
                  var t = this
                  this.state.userPressedPlayButton && this.player.playVideo(),
                    document
                      .getElementById('play-video-'.concat(this.state.videoId))
                      .addEventListener('click', function() {
                        return t.props.isPreview ? null : t.player.playVideo()
                      })
                },
              },
              {
                key: 'handlePressPlayAndLoadVideo',
                value: function() {
                  this.props.isPreview ||
                    (console.log(this.state.videoId),
                    this.setState({ userPressedPlayButton: !0 }))
                },
              },
              {
                key: '_onReady',
                value: function(e) {
                  this.setState({ videoReady: !0 }),
                    !1 !== this.state.playing && e.target.playVideo()
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        L = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return n.props.link && !n.props.isPreview
                  ? r.a.createElement(
                      d.b,
                      {
                        id: 'grid-item-'.concat(n.props.index),
                        content: n.props.content,
                        to: n.props.link,
                      },
                      n.props.children,
                    )
                  : r.a.createElement(
                      'div',
                      {
                        id: 'grid-item-'.concat(n.props.index),
                        content: n.props.content,
                      },
                      n.props.children,
                    )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        R = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                style: {
                  height: n.props.height,
                  backgroundColor: n.props.backgroundColor,
                },
              }),
              (n.render = function() {
                return r.a.createElement(
                  'div',
                  { className: 'bottom-text', style: n.state.style },
                  n.props.text,
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        V = function(e) {
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
        M = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).bottomTextHasText = function() {
                return n.props.bottomText.text
              }),
              (n.backgroundTextHasText = function() {
                return (
                  n.props.backgroundText.heading ||
                  n.props.backgroundText.subheading
                )
              }),
              (n.state = {
                style: {
                  background: 'url('.concat(
                    n.props.imgSrc,
                    ') center center/cover no-repeat',
                  ),
                  height:
                    n.props.bottomText && n.bottomTextHasText()
                      ? 'calc(100% - '.concat(
                          n.props.bottomText.height || '25px',
                          ')',
                        )
                      : '100%',
                },
                backgroundText: n.props.backgroundText,
              }),
              (n.render = function() {
                return r.a.createElement(
                  L,
                  {
                    link: n.props.link,
                    index: n.props.index,
                    content: n.props,
                    isPreview: n.props.isPreview,
                  },
                  r.a.createElement('div', {
                    className: 'background '.concat(
                      n.props.selected ? 'selected' : '',
                    ),
                    style: n.state.style,
                  }),
                  n.props.backgroundText &&
                    n.backgroundTextHasText() &&
                    r.a.createElement(
                      V,
                      Object.assign(
                        {
                          updateBackgroundText: function(e) {
                            return n.updateBackgroundText(e)
                          },
                        },
                        n.state.backgroundText,
                      ),
                    ),
                  n.props.bottomText &&
                    n.bottomTextHasText() &&
                    r.a.createElement(R, n.props.bottomText),
                )
              }),
              n
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
        W = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return n.props.video
                  ? r.a.createElement(U, n.props)
                  : r.a.createElement(M, n.props)
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        F = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r)),
              )).state = {
                layoutClassName: 'layout '.concat(
                  void 0 !== n.gridItemHoveredUpon
                    ? 'grid-item-hovered-upon'
                    : '',
                ),
                cellsUpToDate: !0,
              }),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.watchWindowResizing(),
                            n.setState({
                              rowHeight: n.rowHeight,
                              cells: n.props.cells,
                            })
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              n
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
                  this.props.selectCell && this.props.selectCell(e)
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
                              onLayoutChange: function(t, n) {
                                return e.props.onLayoutChange
                                  ? e.props.onLayoutChange(t, n)
                                  : {}
                              },
                            },
                            this.state.cells.map(function(t, n) {
                              return r.a.createElement(
                                'div',
                                {
                                  className: 'grid-item',
                                  onClick: function(t) {
                                    return e.handleClickGridItem(n, t)
                                  },
                                  key: n,
                                },
                                r.a.createElement(W, {
                                  selected: e.props.selectedCell === n,
                                  index: n,
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
        G = n(99),
        K = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                style: {
                  backgroundImage: n.props.headingBackgroundImage
                    ? 'url('.concat(n.props.headingBackgroundImage, ')')
                    : '',
                },
              }),
              (n.render = function() {
                return r.a.createElement(
                  'div',
                  {
                    className: 'top-heading '
                      .concat(
                        n.props.headingBackgroundImage
                          ? 'background-image'
                          : '',
                        ' ',
                      )
                      .concat(n.props.headingSelected ? 'selected' : ''),
                    style: n.state.style,
                    onClick: function() {
                      return n.props.isPreview ? n.props.selectHeading() : {}
                    },
                  },
                  r.a.createElement(
                    'div',
                    { className: 'heading' },
                    r.a.createElement(
                      G.Textfit,
                      { mode: 'single', max: 50 },
                      n.props.text,
                      n.props.spanText &&
                        r.a.createElement('span', null, n.props.spanText),
                    ),
                  ),
                  n.props.subheading &&
                    r.a.createElement(
                      'div',
                      { className: 'subheading' },
                      r.a.createElement(
                        G.Textfit,
                        { mode: 'single', max: 35 },
                        n.props.subheading,
                      ),
                    ),
                )
              }),
              n
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
        z = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).getPathName = function() {
                var e = /(?:\/admin)?\/([A-Za-z\-_]+)\/?/.exec(
                  window.location.pathname,
                )
                return e ? e[1] : ''
              }),
              (n.getPageName = function() {
                return n
                  .getPathName()
                  .split('-')
                  .join(' ')
              }),
              (n.state = { id: n.props.id, heading: '', pageName: '' }),
              (n.getHeadingBackgroundImage = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            I.get('/page-info/'.concat(n.getPathName())).then(
                              function(e) {
                                return e.data.headingBackgroundImage
                              },
                            )
                          )
                        case 2:
                          return (t = e.sent), e.abrupt('return', t)
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (n.props.isPreview ||
                              n.setParentElementsTo100PercentHeight(),
                            !1 === n.props.headingBackgroundImage)
                          ) {
                            e.next = 14
                            break
                          }
                          if (!n.props.headingBackgroundImage) {
                            e.next = 6
                            break
                          }
                          ;(t = n.props.headingBackgroundImage), (e.next = 14)
                          break
                        case 6:
                          if (!n.getPageName()) {
                            e.next = 12
                            break
                          }
                          return (e.next = 9), n.getHeadingBackgroundImage()
                        case 9:
                          ;(e.t0 = e.sent), (e.next = 13)
                          break
                        case 12:
                          e.t0 = ''
                        case 13:
                          t = e.t0
                        case 14:
                          n.setState({
                            headingBackgroundImage: t,
                            id: n.props.id || n.getPathName() || 'index',
                            pageName: n.getPageName(),
                            heading: n.getHeading(),
                          })
                        case 15:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return r.a.createElement(B.a, { handleWidth: !0 }, function(e) {
                  var t = e.width
                  return n.state.id
                    ? r.a.createElement(
                        'div',
                        {
                          id: n.state.id,
                          className: n.getMainContainerClassName(t),
                        },
                        !n.props.noHeading &&
                          r.a.createElement(
                            K,
                            Object.assign({}, n.state.heading, {
                              subheading: n.props.subheading,
                              headingBackgroundImage:
                                n.state.headingBackgroundImage,
                              isPreview: n.props.isPreview,
                              selectHeading: function() {
                                return n.props.selectHeading()
                              },
                              headingSelected: n.props.headingSelected,
                            }),
                          ),
                        r.a.createElement(
                          'main',
                          { id: 'content' },
                          n.props.children,
                        ),
                      )
                    : r.a.createElement('div', null)
                })
              }),
              n
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
                  return 'main-container '.concat(
                    e < 768 ? 'mobile' : e < 1366 ? 'tablet' : 'desktop',
                  )
                },
              },
              {
                key: 'getParentElementsBeforeBody',
                value: function(e) {
                  var t = []
                  return (
                    (function e(n) {
                      if (n) {
                        if ('BODY' === (n = n.parentElement).tagName) return
                        t.push(n), e(n)
                      }
                    })(e),
                    t
                  )
                },
              },
              {
                key: 'setParentElementsTo100PercentHeight',
                value: function() {
                  this.getParentElementsBeforeBody(
                    document.querySelector('.main-container'),
                  ).forEach(function(e) {
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
                      (console.log(
                        'headingBackgroundImage update',
                        this.props.headingBackgroundImage,
                      ),
                      this.setState({
                        headingBackgroundImage: this.props
                          .headingBackgroundImage,
                      }))
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        _ = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.getGridFromDatabase = Object(j.a)(
                O.a.mark(function e() {
                  var t, n
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            I.get('/grids/index/layouts').then(function(e) {
                              return e.data
                            })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            (e.next = 5),
                            I.get('/grids/index/cells').then(function(e) {
                              return e.data
                            })
                          )
                        case 5:
                          return (
                            (n = e.sent),
                            e.abrupt('return', { layouts: t, cells: n })
                          )
                        case 7:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.cells
                  ? r.a.createElement(
                      z,
                      {
                        headingBackgroundImage: n.props.headingBackgroundImage,
                        headingSelected: n.props.headingSelected,
                        noHeading: !0,
                        selectHeading: function() {
                          return n.props.selectHeading(n.props.pageName)
                        },
                      },
                      r.a.createElement(F, {
                        layouts: n.state.layouts,
                        cells: n.state.cells,
                        ResponsiveGridLayout: Object(T.WidthProvider)(
                          T.Responsive,
                        ),
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              n
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
                    var n = t.cells,
                      a = t.layouts
                    e.setState({ cells: n, layouts: a, layoutsLoaded: !0 })
                  })
                },
              },
              { key: 'componentDidUpdate', value: function(e) {} },
            ]),
            t
          )
        })(r.a.Component),
        J = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return n.props.isPreview
                  ? r.a.createElement(
                      'div',
                      {
                        onClick: function() {
                          return n.props.select()
                        },
                        className: 'artist-wrapper '.concat(
                          n.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return n.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return n.props.setHovering(!1)
                        },
                      },
                      n.props.children,
                    )
                  : r.a.createElement(
                      d.b,
                      {
                        to: n.props.page,
                        className: 'artist-wrapper '.concat(
                          n.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return n.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return n.props.setHovering(!1)
                        },
                      },
                      n.props.children,
                    )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Y = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                hovering: !1,
                alignment: n.props.index % 2 === 0 ? 'right' : 'left',
              }),
              (n.getDescriptionStyle = function() {
                return Object.assign(
                  { boxSizing: 'border-box' },
                  n.props.description.style,
                )
              }),
              (n.getSeeReleasesStyle = function() {
                return n.state.hovering
                  ? {
                      color: n.props.description.style.color || 'black',
                      opacity: 1,
                    }
                  : { color: n.props.description.style.color || 'black' }
              }),
              (n.setHovering = function(e) {
                return n.setState({ hovering: e })
              }),
              (n.render = function() {
                return r.a.createElement(
                  J,
                  {
                    select: function() {
                      return n.props.selectArtist(n.props.index)
                    },
                    selected: n.props.selected,
                    isPreview: n.props.isPreview,
                    page: n.props.page,
                    setHovering: function(e) {
                      return n.setHovering(e)
                    },
                  },
                  n.props.description
                    ? r.a.createElement(
                        'div',
                        { className: 'artist' },
                        r.a.createElement(D, { src: n.props.imgSrc }),
                        r.a.createElement(
                          'div',
                          {
                            className: 'description-outer-wrapper align-'.concat(
                              n.state.alignment,
                            ),
                          },
                          r.a.createElement(
                            'div',
                            {
                              className: 'description',
                              style: n.getDescriptionStyle(),
                            },
                            r.a.createElement(
                              'div',
                              { className: 'text' },
                              r.a.createElement(
                                'div',
                                { className: 'artist-name' },
                                n.props.name,
                              ),
                              r.a.createElement(
                                'div',
                                { className: 'bio' },
                                n.props.description.bio,
                              ),
                              r.a.createElement(
                                'div',
                                {
                                  className: 'see-releases',
                                  style: n.getSeeReleasesStyle(),
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
              n
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
        Z = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!n.props.artists) {
                            e.next = 4
                            break
                          }
                          n.setState({ artists: n.props.artists }), (e.next = 8)
                          break
                        case 4:
                          return (
                            (e.next = 6),
                            I.get('/artists').then(function(e) {
                              return e.data
                            })
                          )
                        case 6:
                          ;(t = e.sent), n.setState({ artists: t })
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.artists
                  ? r.a.createElement(
                      z,
                      {
                        headingBackgroundImage: n.props.headingBackgroundImage,
                        headingSelected: n.props.headingSelected,
                        selectHeading: function() {
                          return n.props.selectHeading('artists')
                        },
                        isPreview: n.props.isPreview,
                        pageName: 'artists',
                      },
                      n.state.artists.map(function(e, t) {
                        return r.a.createElement(
                          Y,
                          Object.assign(
                            { key: t, index: t, isPreview: n.props.isPreview },
                            e,
                            {
                              selectArtist: function() {
                                return n.props.selectArtist(t)
                              },
                              selected: n.props.selectedArtist === t,
                            },
                          ),
                        )
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              n
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
        })(a.Component),
        X = n(56),
        q = n(89),
        $ = n.n(q),
        Q = function() {
          return r.a.createElement(
            z,
            {
              id: '404',
              heading: '404: Page not found',
              headingBackgroundImage: !1,
            },
            r.a.createElement(
              'section',
              { className: 'text' },
              r.a.createElement(
                'h2',
                null,
                'A page does not exist at this location. Check the URL and try again.',
              ),
            ),
          )
        },
        ee = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { loading: !0 }),
              (n.render = function() {
                return r.a.createElement('div', null, n.getIFrame())
              }),
              n
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
                    n = Object(X.a)(t, 4),
                    a = n[1]
                  return (a = [a, 'embed', n[2], n[3]].join('/'))
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
                        r.a.createElement($.a, {
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
        })(r.a.Component),
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
        ne = function(e) {
          var t = e.artist
          return r.a.createElement(
            'div',
            { id: 'top-ten' },
            r.a.createElement('h2', null, 'Top ten tracks'),
            r.a.createElement(ee, { spotifyUrl: t.spotifyUrl }),
          )
        },
        ae = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { loading: !0 }),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getArtist()
                        case 2:
                          ;(t = e.sent), n.setState({ artist: t, loading: !1 })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.loading
                  ? r.a.createElement($.a, {
                      className: 'loading text-center',
                      name: 'ball-clip-rotate',
                    })
                  : n.state.artist
                  ? r.a.createElement(
                      z,
                      {
                        id: 'artist',
                        heading: { text: ''.concat(n.state.artist.name) },
                        headingBackgroundImage: n.state.artist.imgSrc,
                        isPreview: n.props.isPreview,
                      },
                      r.a.createElement(ne, { artist: n.state.artist }),
                      n.state.artist.releases.length > 0 &&
                        r.a.createElement(te, { artist: n.state.artist }),
                    )
                  : r.a.createElement(Q, null)
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'getArtist',
                value: function() {
                  var e = this.props.match.params.artist
                  return I.get('/artists/'.concat(e)).then(function(e) {
                    return e.data
                  })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        re = function() {
          return /^(\/*\w*)\//.exec(window.location.pathname)[1]
        },
        oe = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return n.props.isPreview
                  ? r.a.createElement(
                      'div',
                      {
                        onClick: function() {
                          return n.props.select()
                        },
                        className: 'artist-wrapper '.concat(
                          n.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return n.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return n.props.setHovering(!1)
                        },
                      },
                      n.props.children,
                    )
                  : r.a.createElement(
                      d.b,
                      {
                        to: ''
                          .concat(re(), '/producer-tools/')
                          .concat(n.props.page),
                        className: 'artist-wrapper '.concat(
                          n.props.selected ? 'selected' : '',
                        ),
                        onMouseOver: function() {
                          return n.props.setHovering(!0)
                        },
                        onMouseLeave: function() {
                          return n.props.setHovering(!1)
                        },
                      },
                      n.props.children,
                    )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        se = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                hovering: !1,
                alignment: n.props.index % 2 === 0 ? 'right' : 'left',
              }),
              (n.getDescriptionStyle = function() {
                return Object.assign(
                  { boxSizing: 'border-box' },
                  n.props.description.style,
                )
              }),
              (n.getSeeReleasesStyle = function() {
                return n.state.hovering
                  ? {
                      color: n.props.description.style.color || 'black',
                      opacity: 1,
                    }
                  : { color: n.props.description.style.color || 'black' }
              }),
              (n.setHovering = function(e) {
                return n.setState({ hovering: e })
              }),
              (n.render = function() {
                return r.a.createElement(
                  oe,
                  {
                    select: function() {
                      return n.props.selectTool(n.props.index)
                    },
                    selected: n.props.selected,
                    isPreview: n.props.isPreview,
                    page: n.props.page,
                    setHovering: function(e) {
                      return n.setHovering(e)
                    },
                  },
                  n.props.description
                    ? r.a.createElement(
                        'div',
                        { className: 'artist' },
                        r.a.createElement(D, { src: n.props.imgSrc }),
                        r.a.createElement(
                          'div',
                          {
                            className: 'description-outer-wrapper align-'.concat(
                              n.state.alignment,
                            ),
                          },
                          r.a.createElement(
                            'div',
                            {
                              className: 'description',
                              style: n.getDescriptionStyle(),
                            },
                            r.a.createElement(
                              'div',
                              { className: 'text' },
                              r.a.createElement(
                                'div',
                                { className: 'artist-name' },
                                n.props.name,
                              ),
                              r.a.createElement(
                                'div',
                                { className: 'description-text' },
                                n.props.description.text,
                              ),
                              r.a.createElement(
                                'div',
                                {
                                  className: 'see-releases',
                                  style: n.getSeeReleasesStyle(),
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
              n
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
        ie = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!n.props.tools) {
                            e.next = 4
                            break
                          }
                          n.setState({ tools: n.props.tools }), (e.next = 8)
                          break
                        case 4:
                          return (
                            (e.next = 6),
                            I.get('/producer-tools').then(function(e) {
                              return e.data
                            })
                          )
                        case 6:
                          ;(t = e.sent), n.setState({ tools: t })
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.tools
                  ? r.a.createElement(
                      z,
                      {
                        headingBackgroundImage: n.props.headingBackgroundImage,
                        headingSelected: n.props.headingSelected,
                        selectHeading: function() {
                          return n.props.selectHeading(n.props.pageName)
                        },
                        isPreview: n.props.isPreview,
                        backgroundImage: 'images/trees.jpg',
                      },
                      n.state.tools.map(function(e, t) {
                        return r.a.createElement(
                          se,
                          Object.assign(
                            { key: t, index: t, isPreview: n.props.isPreview },
                            e,
                            {
                              selectTool: function() {
                                n.props.selectTool(t)
                              },
                              selected: n.props.selectedTool === t,
                            },
                          ),
                        )
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              n
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
        ce = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { dropboxDirectUrl: '' }),
              (n.render = function() {
                return r.a.createElement(
                  'section',
                  { className: 'text' },
                  r.a.createElement('p', null, n.props.description.text),
                  r.a.createElement(
                    'a',
                    { href: n.state.dropboxDirectUrl, className: 'button' },
                    'Download',
                  ),
                )
              }),
              n
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
        le = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = { loading: !0 }),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getProducerTool()
                        case 2:
                          ;(t = e.sent), n.setState({ tool: t, loading: !1 })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.loading
                  ? r.a.createElement($.a, {
                      className: 'loading text-center',
                      name: 'ball-clip-rotate',
                    })
                  : n.state.tool
                  ? r.a.createElement(
                      z,
                      {
                        headingBackgroundImage: n.state.tool.imgSrc,
                        headingSelected: n.props.headingSelected,
                        id: 'producer-tool',
                        heading: {
                          text: ''.concat(n.state.tool.name, ': '),
                          spanText: 'producer tool',
                        },
                        selectHeading: function() {
                          return n.props.selectHeading(n.props.pageName)
                        },
                        isPreview: n.props.isPreview,
                      },
                      r.a.createElement(ce, n.state.tool),
                    )
                  : r.a.createElement(Q, null)
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'getProducerToolNameFromUrl',
                value: function() {
                  var e = String(window.location)
                  return console.log(e), /.*\/(.*)\/$/.exec(e)[1]
                },
              },
              {
                key: 'getProducerTool',
                value: function() {
                  var e = this.getProducerToolNameFromUrl()
                  if ((console.log(e), e))
                    return I.get('/producer-tools/'.concat(e)).then(function(
                      e,
                    ) {
                      return e.data
                    })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        ue = (n(422), n(319)),
        pe = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).handleEditorChange = function(e, t) {
                var a = t.getContent()
                a !== n.props.text && n.props.updateValue(a)
              }),
              (n.render = function() {
                return n.props.text
                  ? r.a.createElement(ue.a, {
                      initialValue: n.props.text,
                      init: {
                        height: 600,
                        plugins: 'link image code',
                        toolbar:
                          'undo redo | bold italic | alignleft aligncenter alignright | code',
                      },
                      onKeyUp: function(e, t) {
                        return n.handleEditorChange(e, t)
                      },
                      onChange: function(e, t) {
                        return n.handleEditorChange(e, t)
                      },
                    })
                  : r.a.createElement('div', null, 'loading...')
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        de = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.updateValue = function(e) {
                n.props.AdminAPI.post('/about', {
                  text: JSON.stringify(e.toJSON()),
                })
                  .then(function(e) {
                    return console.log(e)
                  })
                  .catch(function(e) {
                    return console.log(e)
                  })
              }),
              (n.getAboutText = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            I.get('/about/text').then(function(e) {
                              return e.data
                            })
                          )
                        case 2:
                          ;(t = e.sent), n.setState({ text: t })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return r.a.createElement(
                  z,
                  {
                    headingBackgroundImage: n.props.headingBackgroundImage,
                    headingSelected: n.props.headingSelected,
                    selectHeading: function() {
                      return n.props.selectHeading()
                    },
                  },
                  n.state.text
                    ? r.a.createElement(
                        'section',
                        { className: 'text' },
                        r.a.createElement('div', {
                          dangerouslySetInnerHTML: { __html: n.state.text },
                        }),
                      )
                    : r.a.createElement('div', null, 'Loading...'),
                )
              }),
              n
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
        me = n(307),
        ge = n(104),
        he = n.n(ge),
        fe =
          (n(423),
          (function(e) {
            function t() {
              var e, n
              Object(c.a)(this, t)
              for (
                var a = arguments.length, o = new Array(a), s = 0;
                s < a;
                s++
              )
                o[s] = arguments[s]
              return (
                ((n = Object(l.a)(
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
                            return n.props.setView('mobile')
                          },
                        },
                        'Mobile [m]',
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return n.props.setView('tablet')
                          },
                        },
                        'Tablet [t]',
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return n.props.setView('desktop')
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
                              return n.handleScaleSelect(e)
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
                n
              )
            }
            return (
              Object(p.a)(t, e),
              Object(g.a)(t, [
                {
                  key: 'handleScaleSelect',
                  value: function(e) {
                    var t = e.target.selectedIndex,
                      n = e.target.options[t].value
                    this.props.setScale(n)
                  },
                },
              ]),
              t
            )
          })(r.a.Component)),
        ve = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return r.a.createElement(
                  'div',
                  { id: 'admin-panel' },
                  r.a.createElement(fe, {
                    setView: n.props.setView,
                    setScale: n.props.setScale,
                  }),
                  'index' === n.props.pageName &&
                    r.a.createElement(
                      'div',
                      { className: 'undo-redo' },
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return n.props.undoLayoutChange()
                          },
                        },
                        'Undo [u]',
                      ),
                      r.a.createElement(
                        'button',
                        {
                          onClick: function() {
                            return n.props.redoLayoutChange()
                          },
                        },
                        'Redo [r]',
                      ),
                    ),
                  r.a.createElement(
                    'div',
                    { className: 'new-post' },
                    r.a.createElement(d.b, { to: '/new-post' }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'sign-out' },
                    r.a.createElement(
                      'button',
                      { onClick: n.props.signOut },
                      'Sign out',
                    ),
                  ),
                )
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'handleScaleSelect',
                value: function(e) {
                  var t = e.target.selectedIndex,
                    n = e.target.options[t].value
                  this.props.setScale(n)
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        be = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                dimensions: {
                  mobile: { width: 375, height: 667 },
                  tablet: { width: 768, height: 1024 },
                  desktop: { width: 1366, height: 768 },
                },
              }),
              (n.getWidth = function() {
                return n.state.dimensions[n.props.view].width
              }),
              (n.getHeight = function() {
                return n.state.dimensions[n.props.view].height
              }),
              (n.render = function() {
                var e = n.props.page
                return e
                  ? r.a.createElement(
                      'div',
                      {
                        id: 'preview-wrapper',
                        style: {
                          width: n.getWidth() * n.props.scale,
                          height: n.getHeight() * n.props.scale,
                        },
                      },
                      r.a.createElement(
                        'div',
                        {
                          id: 'preview',
                          className: n.props.view,
                          style: {
                            width: n.getWidth(),
                            height: n.getHeight(),
                            transform: 'scale('.concat(n.props.scale, ')'),
                            transformOrigin: 'left top',
                          },
                        },
                        r.a.createElement(w, {
                          mobilePreview: 'mobile' === n.props.view,
                          previewWidth: n.getWidth(),
                        }),
                        r.a.createElement(e, {
                          AdminAPI: n.props.AdminAPI,
                          isPreview: !0,
                          postName: n.props.postName,
                          pageName: n.props.pageName,
                          view: n.props.view,
                          gridWidth: n.getWidth(),
                          selectHeading: function() {
                            return n.props.selectHeading(n.props.pageName)
                          },
                          updateHeading: function() {
                            return n.props.updateHeading(n.props.pageName)
                          },
                          headingSelected: n.props.headingSelected,
                          headingBackgroundImage:
                            n.props.headingBackgroundImage,
                          selectCell: function(e) {
                            return n.props.selectCell(e)
                          },
                          selectedCell: n.props.selectedCell,
                          cells: n.props.cells,
                          layouts: n.props.layouts,
                          onLayoutChange: function(e, t) {
                            return n.props.onLayoutChange(e, t)
                          },
                          selectArtist: function(e) {
                            return n.props.selectArtist(e)
                          },
                          selectedArtist: n.props.selectedArtist,
                          artists: n.props.artists,
                          selectTool: function(e) {
                            return n.props.selectTool(e)
                          },
                          selectedTool: n.props.selectedTool,
                          tools: n.props.tools,
                          aboutText: n.props.aboutText,
                        }),
                        r.a.createElement(E, null),
                      ),
                    )
                  : r.a.createElement('div', null, 'Loading...')
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        ye = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return r.a.createElement(
                  'button',
                  {
                    className: n.props.enabled ? 'enabled' : '',
                    onClick: function(e) {
                      return n.handleClick(e)
                    },
                  },
                  n.props.children,
                )
              }),
              n
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
        we = n(308),
        xe = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).handleChangeComplete = function(e) {
                return n.props.setColor(e)
              }),
              (n.render = function() {
                return r.a.createElement(we.SketchPicker, {
                  color: n.props.color,
                  onChangeComplete: n.handleChangeComplete,
                })
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Ee = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
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
                        return n.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return n.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'link',
                      value: n.props.state.cell.link || '',
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement('label', null, 'backgroundText: heading'),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return n.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return n.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'backgroundText.heading',
                      value:
                        (n.props.state.cell.backgroundText &&
                          n.props.state.cell.backgroundText.heading) ||
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
                        return n.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return n.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'backgroundText.subheading',
                      value:
                        (n.props.state.cell.backgroundText &&
                          n.props.state.cell.backgroundText.subheading) ||
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
                        (n.props.state.cell.bottomText &&
                          n.props.state.cell.bottomText.backgroundColor) ||
                        '#fff',
                      setColor: function(e) {
                        var t = e.rgb,
                          a = t.r,
                          r = t.g,
                          o = t.b,
                          s = t.a,
                          i = 'rgba('
                            .concat(a, ',')
                            .concat(r, ',')
                            .concat(o, ',')
                            .concat(s, ')')
                        n.props.handleInputChange({
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
                        return n.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return n.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'bottomText.height',
                      value:
                        (n.props.state.cell.bottomText &&
                          n.props.state.cell.bottomText.height) ||
                        '',
                    }),
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'property-input' },
                    r.a.createElement('label', null, 'bottomText: text'),
                    r.a.createElement('input', {
                      onKeyPress: function(e) {
                        return n.props.handleKeyPress(e)
                      },
                      onChange: function(e) {
                        return n.props.handleInputChange({ e: e })
                      },
                      type: 'text',
                      id: 'bottomText.text',
                      value:
                        (n.props.state.cell.bottomText &&
                          n.props.state.cell.bottomText.text) ||
                        '',
                    }),
                  ),
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        ke = n(218),
        Oe = n.n(ke),
        je = n(310),
        Ce = n.n(je),
        Ae = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r)),
              )).state = {
                image: '',
                isUploading: !1,
                progress: 0,
                imageUrl: n.props.image,
              }),
              (n.handleUploadStart = function() {
                return n.setState({ isUploading: !0, progress: 0 })
              }),
              (n.handleProgress = function(e) {
                return n.setState({ progress: e })
              }),
              (n.handleUploadError = function(e) {
                n.setState({ isUploading: !1 }), console.error(e)
              }),
              (n.handleUploadSuccess = function(e) {
                n.setState({ image: e, progress: 100, isUploading: !1 }),
                  Oe.a
                    .storage()
                    .ref('images')
                    .child(e)
                    .getDownloadURL()
                    .then(function(t) {
                      n.saveImageToDB(t, e),
                        n.setState({ imageUrl: t }),
                        n.props.setImage(t)
                    })
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'saveImageToDB',
                value: function(e, t) {
                  this.props.AdminAPI.post('/images/new', {
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
                key: 'componentDidUpdate',
                value: function(e, t, n) {
                  e.image !== this.props.image &&
                    this.setState({ imageUrl: this.props.image })
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
                          alt: 'uploader-preview',
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
                    r.a.createElement(Ce.a, {
                      accept: 'image/*',
                      name: 'image',
                      randomizeFilename: !0,
                      storageRef: Oe.a.storage().ref('images'),
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
        Se = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.getCell = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.get(
                                '/grids/index/cells/'.concat(t),
                              ).then(function(e) {
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
              (n.updateCell = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t, a) {
                    var r
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.post(
                                '/grids/index/cells/'.concat(t),
                                a,
                              ).then(function(e) {
                                return (
                                  n.setState({ cellFromDatabase: a }), e.data
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
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.handleSubmit = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t && t.preventDefault(),
                              (e.next = 3),
                              n.props.AdminAPI.post(
                                '/grids/index/cells/'.concat(n.state.index),
                                n.state.cell,
                              ).then(function(e) {
                                var t = n.state.cells.slice()
                                return (
                                  n.setState({
                                    cellFromDatabase: n.state.cell,
                                    cells: t,
                                    unsavedChanges: !1,
                                  }),
                                  (t[n.state.index] = n.state.cell),
                                  n.state.colorChange
                                    ? (n.props.refreshGrid({ cells: t }),
                                      n.setState({ colorChange: !1 }))
                                    : n.props.updateGrid({ cells: t }),
                                  e.data
                                )
                              })
                            )
                          case 3:
                            return (a = e.sent), e.abrupt('return', a)
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
              (n.handleKeyPress = function(e) {
                'Enter' === e.key && n.handleSubmit(e)
              }),
              (n.updateCellValue = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t, a) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              new Promise(function(e) {
                                var r = Object.assign({}, n.state.cell)
                                !(function(e, t) {
                                  for (
                                    var n = r,
                                      a = e.split('.'),
                                      o = a.length,
                                      s = 0;
                                    s < o - 1;
                                    s++
                                  ) {
                                    var i = a[s]
                                    n[i] || (n[i] = {}), (n = n[i])
                                  }
                                  n[a[o - 1]] = t
                                })(t, a),
                                  n.setState(
                                    { cell: r, unsavedChanges: !0 },
                                    function() {
                                      return e()
                                    },
                                  )
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
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.handleInputChange = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r, o
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.e),
                              (r = t.path),
                              (o = t.value),
                              t.colorChange && n.setState({ colorChange: !0 }),
                              a && ((r = a.target.id), (o = a.target.value)),
                              (e.next = 5),
                              n.updateCellValue(r, o)
                            )
                          case 5:
                            n.handleSubmit()
                          case 6:
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
              (n.getCellsFromDatabase = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n.props.AdminAPI.get('/grids/index/cells').then(
                              function(e) {
                                return e.data
                              },
                            )
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
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t, a
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getCell(n.props.index)
                        case 2:
                          return (
                            (t = e.sent), (e.next = 5), n.getCellsFromDatabase()
                          )
                        case 5:
                          ;(a = e.sent),
                            n.setState({
                              index: n.props.index,
                              cell: t,
                              cells: a,
                              cellFromDatabase: t,
                            }),
                            (window.onbeforeunload = null),
                            n.setKeyBindings()
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.changeIndex = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.getCell(t)
                          case 2:
                            ;(a = e.sent),
                              n.setState({
                                index: t,
                                cell: a,
                                cellFromDatabase: a,
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
              (n.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && n.handleSubmit())
                }
              }),
              (n.newCell = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.validateCell() &&
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
                              newCell: n.state.cell,
                            }),
                            n.props.AdminAPI.post(
                              '/grids/index/layouts/newCell',
                              t,
                            ).then(function(e) {
                              var t = e.data,
                                a = t.layouts,
                                r = t.cells
                              n.props.updateGrid({ layouts: a, cells: r }),
                                n.changeIndex(e.data.index)
                            }))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.toggleVideoMode = function() {
                n.updateCellValue('video', !n.state.cell.video)
              }),
              (n.componentDidUpdate = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            n.props.index !== t.index &&
                              (n.state.unsavedChanges
                                ? window.confirm(
                                    "You've made unsaved changes for this cell. Proceed and discard?",
                                  ) && n.changeIndex()
                                : n.changeIndex(n.props.index))
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
              (n.render = function() {
                return n.state.cell
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'div',
                        { className: 'video-toggle' },
                        r.a.createElement(
                          ye,
                          {
                            enabled: n.state.cell.video,
                            toggle: n.toggleVideoMode,
                          },
                          'Toggle Video',
                        ),
                      ),
                      r.a.createElement('br', null),
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return n.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'image'),
                          r.a.createElement(Ae, {
                            AdminAPI: n.props.AdminAPI,
                            image: n.state.cell.imgSrc,
                            setImage: function(e) {
                              return n.handleInputChange({
                                path: 'imgSrc',
                                value: e,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        n.state.cell.video
                          ? r.a.createElement(
                              'div',
                              { className: 'property-input' },
                              r.a.createElement('label', null, 'video link:'),
                              r.a.createElement('input', {
                                onKeyPress: function(e) {
                                  return n.handleKeyPress(e)
                                },
                                onChange: function(e) {
                                  return n.handleInputChange({ e: e })
                                },
                                type: 'text',
                                id: 'videoSrc',
                                value: n.state.cell.videoSrc || '',
                              }),
                            )
                          : r.a.createElement(Ee, {
                              handleKeyPress: function(e) {
                                return n.handleKeyPress(e)
                              },
                              handleInputChange: function(e) {
                                return n.handleInputChange(e)
                              },
                              state: n.state,
                              refreshGrid: function() {
                                return n.props.refreshGrid()
                              },
                            }),
                        r.a.createElement('br', null),
                        n.state.error,
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'create-new' },
                        r.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return n.newCell()
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
                              ) && n.deleteCell()
                            )
                          },
                        },
                        'Delete cell',
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
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
                  this.props.AdminAPI.get(
                    '/grids/index/cells/'.concat(this.state.index, '/delete'),
                  ).then(function(t) {
                    var n = t.data,
                      a = n.layouts,
                      r = n.cells
                    e.props.updateGrid({ layouts: a, cells: r })
                  })
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Pe = n(155),
        Ie = n.n(Pe),
        Te = (function(e) {
          function t(e) {
            var n
            return (
              Object(c.a)(this, t),
              ((n = Object(l.a)(this, Object(u.a)(t).call(this, e))).state = {
                columns: [
                  { title: 'Name', field: 'name' },
                  { title: 'Spotify URL', field: 'spotifyUrl' },
                  { title: 'Album cover image URL', field: 'cover' },
                ],
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(Ie.a, {
                    title: 'Releases',
                    columns: this.state.columns,
                    data: this.props.data,
                    editable: {
                      onRowAdd: function(t) {
                        return new Promise(function(n, a) {
                          setTimeout(function() {
                            var a = e.props.data
                            a.push(t), e.props.updateData(a), n(), n()
                          }, 1e3)
                        })
                      },
                      onRowUpdate: function(t, n) {
                        return new Promise(function(a, r) {
                          setTimeout(function() {
                            var r = e.props.data,
                              o = r.indexOf(n)
                            ;(r[o] = t), e.props.updateData(r), a(), a()
                          }, 1e3)
                        })
                      },
                      onRowDelete: function(t) {
                        return new Promise(function(n, a) {
                          setTimeout(function() {
                            var a = e.props.data,
                              r = a.indexOf(t)
                            a.splice(r, 1), e.props.updateData(a), n(), n()
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
        Ne = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.getArtist = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I.get('/artists/index/'.concat(t)).then(function(
                                e,
                              ) {
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
              (n.handleSubmit = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t && t.preventDefault(),
                              (e.next = 3),
                              n.props.AdminAPI.post(
                                '/artists/'.concat(n.state.index),
                                n.state.artist,
                              ).then(function(e) {
                                return (
                                  n.setState({
                                    artistFromDatabase: n.state.artist,
                                    unsavedChanges: !1,
                                  }),
                                  n.state.colorChange
                                    ? (n.props.refreshArtists(
                                        n.state.index,
                                        n.state.artist,
                                      ),
                                      n.setState({ colorChange: !1 }))
                                    : n.props.updateArtists(
                                        n.state.index,
                                        n.state.artist,
                                      ),
                                  e.data
                                )
                              })
                            )
                          case 3:
                            return (a = e.sent), e.abrupt('return', a)
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
              (n.updateArtistValue = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t, a) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              new Promise(function(e) {
                                var r = Object.assign({}, n.state.artist)
                                !(function(e, t) {
                                  for (
                                    var n = r,
                                      a = e.split('.'),
                                      o = a.length,
                                      s = 0;
                                    s < o - 1;
                                    s++
                                  ) {
                                    var i = a[s]
                                    n[i] || (n[i] = {}), (n = n[i])
                                  }
                                  n[a[o - 1]] = t
                                })(t, a),
                                  n.setState(
                                    { artist: r, unsavedChanges: !0 },
                                    function() {
                                      return e()
                                    },
                                  )
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
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.handleInputChange = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r, o
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.e),
                              (r = t.path),
                              (o = t.value),
                              t.colorChange && n.setState({ colorChange: !0 }),
                              a && ((r = a.target.id), (o = a.target.value)),
                              (e.next = 5),
                              n.updateArtistValue(r, o)
                            )
                          case 5:
                            n.handleSubmit()
                          case 6:
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
              (n.changeIndex = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.getArtist(t)
                          case 2:
                            ;(a = e.sent),
                              n.setState({
                                index: t,
                                artist: a,
                                artistFromDatabase: a,
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
              (n.newArtist = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.validateArtist() &&
                            (console.log(n.state.artist),
                            delete n.state.artist._id,
                            delete n.state.artist.__v,
                            n.props.AdminAPI.post(
                              '/artists/new',
                              n.state.artist,
                            ).then(function(e) {
                              var t = e.data,
                                a = t.index,
                                r = t.artist
                              n.props.refreshArtists(a, r), n.changeIndex(a)
                            }))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.componentDidUpdate = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            n.props.index !== t.index &&
                              (n.state.unsavedChanges
                                ? window.confirm(
                                    "You've made unsaved changes for this artist. Proceed and discard?",
                                  ) && n.changeIndex()
                                : n.changeIndex(n.props.index))
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
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getArtist(n.props.index)
                        case 2:
                          ;(t = e.sent),
                            n.setState({ artist: t, index: n.props.index }),
                            (window.onbeforeunload = null),
                            n.setKeyBindings()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && n.handleSubmit())
                }
              }),
              (n.updateReleases = function(e) {
                var t = n.state.artist
                ;(t.releases = e), n.setState({ artist: t })
              }),
              (n.render = function() {
                return n.state.artist
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return n.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return n.handleInputChange({ e: e })
                            },
                            id: 'name',
                            value: n.state.artist.name || '',
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'page name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return n.handleInputChange({ e: e })
                            },
                            id: 'page',
                            value:
                              n.state.artist.page ||
                              (n.state.artist.name &&
                                n.state.artist.name
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
                          r.a.createElement(Ae, {
                            AdminAPI: n.props.AdminAPI,
                            image: n.state.artist.imgSrc,
                            setImage: function(e) {
                              return n.handleInputChange({
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
                              return n.handleTextareaKeyPress(e)
                            },
                            onChange: function(e) {
                              return n.handleInputChange({ e: e })
                            },
                            id: 'description.bio',
                            value:
                              (n.state.artist.description &&
                                n.state.artist.description.bio) ||
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
                              (n.state.artist.description &&
                                n.state.artist.description.style &&
                                n.state.artist.description.style
                                  .backgroundColor) ||
                              'darkgrey',
                            setColor: function(e) {
                              var t = e.rgb,
                                a = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(a, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              n.handleInputChange({
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
                              (n.state.artist.description &&
                                n.state.artist.description.style &&
                                n.state.artist.description.style.color) ||
                              '#fff',
                            setColor: function(e) {
                              var t = e.rgb,
                                a = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(a, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              n.handleInputChange({
                                path: 'description.style.color',
                                value: i,
                                colorChange: !0,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        r.a.createElement(Te, {
                          data: n.state.artist.releases,
                          updateData: function(e) {
                            return n.updateReleases(e)
                          },
                        }),
                        n.state.error,
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'create-new' },
                        r.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return n.newArtist()
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
                              ) && n.deleteArtist()
                            )
                          },
                        },
                        'Delete artist',
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'validateArtist',
                value: function() {
                  return this.setState({ error: void 0 }), !0
                },
              },
              {
                key: 'deleteArtist',
                value: function() {
                  var e = this,
                    t = this.props.index - 1
                  t < 0 && (t = 0), this.changeIndex(t)
                  var n = this.state.artist
                  this.setState({ artist: void 0, index: t }, function() {
                    e.props.AdminAPI.delete('/artists', { data: n }).then(
                      function(n) {
                        e.props.refreshArtists(e.props.index, void 0, t)
                      },
                    )
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
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.getArtist = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I.get('/producer-tools/index/'.concat(t)).then(
                                function(e) {
                                  return e.data
                                },
                              )
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
              (n.handleSubmit = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t && t.preventDefault(),
                              (e.next = 3),
                              n.props.AdminAPI.post(
                                '/producer-tools/'.concat(n.state.index),
                                n.state.artist,
                              ).then(function(e) {
                                return (
                                  n.setState({
                                    artistFromDatabase: n.state.artist,
                                    unsavedChanges: !1,
                                  }),
                                  n.state.colorChange
                                    ? (n.props.refreshTools(
                                        n.state.index,
                                        n.state.artist,
                                      ),
                                      n.setState({ colorChange: !1 }))
                                    : n.props.updateTools(
                                        n.state.index,
                                        n.state.artist,
                                      ),
                                  e.data
                                )
                              })
                            )
                          case 3:
                            return (a = e.sent), e.abrupt('return', a)
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
              (n.updateArtistValue = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t, a) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              new Promise(function(e) {
                                var r = Object.assign({}, n.state.artist)
                                !(function(e, t) {
                                  for (
                                    var n = r,
                                      a = e.split('.'),
                                      o = a.length,
                                      s = 0;
                                    s < o - 1;
                                    s++
                                  ) {
                                    var i = a[s]
                                    n[i] || (n[i] = {}), (n = n[i])
                                  }
                                  n[a[o - 1]] = t
                                })(t, a),
                                  n.setState(
                                    { artist: r, unsavedChanges: !0 },
                                    function() {
                                      return e()
                                    },
                                  )
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
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.handleInputChange = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r, o
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.e),
                              (r = t.path),
                              (o = t.value),
                              t.colorChange && n.setState({ colorChange: !0 }),
                              a && ((r = a.target.id), (o = a.target.value)),
                              (e.next = 5),
                              n.updateArtistValue(r, o)
                            )
                          case 5:
                            n.handleSubmit()
                          case 6:
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
              (n.changeIndex = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n.getArtist(t)
                          case 2:
                            ;(a = e.sent),
                              n.setState({
                                index: t,
                                artist: a,
                                artistFromDatabase: a,
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
              (n.newArtist = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.validateArtist() &&
                            (delete n.state.artist._id,
                            delete n.state.artist.__v,
                            n.props.AdminAPI.post(
                              '/producer-tools/new',
                              n.state.artist,
                            ).then(function(e) {
                              var t = e.data,
                                a = t.index,
                                r = t.tool
                              n.props.refreshTools(a, r, a), n.changeIndex(a)
                            }))
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.componentDidUpdate = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            n.props.index !== t.index &&
                              (n.state.unsavedChanges
                                ? window.confirm(
                                    "You've made unsaved changes for this artist. Proceed and discard?",
                                  ) && n.changeIndex()
                                : n.changeIndex(n.props.index))
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
              (n.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && n.handleSubmit())
                }
              }),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getArtist(n.props.index)
                        case 2:
                          ;(t = e.sent),
                            n.setState({ artist: t, index: n.props.index }),
                            (window.onbeforeunload = null),
                            n.setKeyBindings()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.updateReleases = function(e) {
                var t = n.state.artist
                ;(t.releases = e), n.setState({ artist: t })
              }),
              (n.render = function() {
                return n.state.artist
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return n.handleSubmit(e)
                          },
                        },
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return n.handleInputChange({ e: e })
                            },
                            id: 'name',
                            value: n.state.artist.name || '',
                          }),
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'property-input' },
                          r.a.createElement('label', null, 'page name'),
                          r.a.createElement('input', {
                            onChange: function(e) {
                              return n.handleInputChange({ e: e })
                            },
                            id: 'page',
                            value:
                              n.state.artist.page ||
                              (n.state.artist.name &&
                                n.state.artist.name
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
                          r.a.createElement(Ae, {
                            AdminAPI: n.props.AdminAPI,
                            image: n.state.artist.imgSrc,
                            setImage: (function() {
                              var e = Object(j.a)(
                                O.a.mark(function e(t) {
                                  return O.a.wrap(function(e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            n.handleInputChange({
                                              path: 'imgSrc',
                                              value: t,
                                            })
                                          )
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
                            })(),
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
                              return n.handleTextareaKeyPress(e)
                            },
                            onChange: function(e) {
                              return n.handleInputChange({ e: e })
                            },
                            id: 'description.text',
                            value:
                              (n.state.artist.description &&
                                n.state.artist.description.text) ||
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
                              (n.state.artist.description &&
                                n.state.artist.description.style &&
                                n.state.artist.description.style
                                  .backgroundColor) ||
                              'darkgrey',
                            setColor: function(e) {
                              var t = e.rgb,
                                a = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(a, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              n.handleInputChange({
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
                              (n.state.artist.description &&
                                n.state.artist.description.style &&
                                n.state.artist.description.style.color) ||
                              '#fff',
                            setColor: function(e) {
                              var t = e.rgb,
                                a = t.r,
                                r = t.g,
                                o = t.b,
                                s = t.a,
                                i = 'rgba('
                                  .concat(a, ',')
                                  .concat(r, ',')
                                  .concat(o, ',')
                                  .concat(s, ')')
                              n.handleInputChange({
                                path: 'description.style.color',
                                value: i,
                                colorChange: !0,
                              })
                            },
                          }),
                        ),
                        r.a.createElement('br', null),
                        n.state.error,
                      ),
                      r.a.createElement(
                        'div',
                        { id: 'create-new' },
                        r.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return n.newArtist()
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
                              ) && n.deleteArtist()
                            )
                          },
                        },
                        'Delete producer tool',
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'validateArtist',
                value: function() {
                  return this.setState({ error: void 0 }), !0
                },
              },
              {
                key: 'deleteArtist',
                value: function() {
                  var e = this,
                    t = this.props.index - 1
                  t < 0 && (t = 0), this.changeIndex(t)
                  var n = this.state.artist
                  this.setState({ artist: void 0, index: t }, function() {
                    e.props.AdminAPI.delete('/producer-tools', {
                      data: n,
                    }).then(function(n) {
                      e.props.refreshTools(e.props.index, void 0, t)
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
        De = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.getHeading = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            I.get('/page-info/'.concat(n.props.pageName)).then(
                              function(e) {
                                return e.data
                              },
                            )
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
              (n.handleSubmit = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t && t.preventDefault(),
                              n.props.AdminAPI.post(
                                '/page-info/'.concat(n.props.pageName),
                                n.state.heading,
                              ).then(function(e) {
                                n.setState({
                                  headingFromDatabase: n.state.heading,
                                }),
                                  n.props.updateHeading(n.state.heading)
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
              (n.updateHeadingValue = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t, a) {
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              new Promise(function(e) {
                                var r = Object.assign({}, n.state.heading)
                                !(function(e, t) {
                                  for (
                                    var n = r,
                                      a = e.split('.'),
                                      o = a.length,
                                      s = 0;
                                    s < o - 1;
                                    s++
                                  ) {
                                    var i = a[s]
                                    n[i] || (n[i] = {}), (n = n[i])
                                  }
                                  n[a[o - 1]] = t
                                })(t, a),
                                  n.setState({ heading: r }, function() {
                                    return e()
                                  })
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
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              })()),
              (n.handleInputChange = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r, o
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.e),
                              (r = t.path),
                              (o = t.value),
                              a && ((r = a.target.id), (o = a.target.value)),
                              (e.next = 4),
                              n.updateHeadingValue(r, o)
                            )
                          case 4:
                            n.handleSubmit()
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
              (n.setKeyBindings = function() {
                document.onkeypress = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('s' === e.key && n.handleSubmit())
                }
              }),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getHeading()
                        case 2:
                          ;(t = e.sent),
                            n.setState({ heading: t }),
                            (window.onbeforeunload = null),
                            n.setKeyBindings()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.heading
                  ? r.a.createElement(
                      'div',
                      { id: 'property-editor' },
                      r.a.createElement(
                        'form',
                        {
                          onSubmit: function(e) {
                            return n.handleSubmit(e)
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
                          r.a.createElement(Ae, {
                            AdminAPI: n.props.AdminAPI,
                            image: n.state.heading.headingBackgroundImage,
                            setImage: function(e) {
                              return n.handleInputChange({
                                path: 'headingBackgroundImage',
                                value: e,
                              })
                            },
                          }),
                        ),
                        n.state.error,
                      ),
                    )
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Be = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return n.props.selectedHeading
                  ? r.a.createElement(De, {
                      AdminAPI: n.props.AdminAPI,
                      pageName: n.props.match.params.page,
                      selectedHeading: n.props.selectedHeading,
                      updateHeading: function(e) {
                        return n.props.updateHeading(e)
                      },
                    })
                  : 'artists' === n.props.match.params.page &&
                    void 0 !== n.props.selectedArtist
                  ? r.a.createElement(Ne, {
                      AdminAPI: n.props.AdminAPI,
                      index: n.props.selectedArtist,
                      updateArtists: function(e, t) {
                        return n.props.updateArtists(e, t)
                      },
                      refreshArtists: function(e, t) {
                        return n.props.refreshArtists(e, t)
                      },
                    })
                  : 'index' === n.props.match.params.page &&
                    void 0 !== n.props.selectedCell
                  ? r.a.createElement(Se, {
                      AdminAPI: n.props.AdminAPI,
                      index: n.props.selectedCell,
                      updateGrid: function(e) {
                        var t = e.layouts,
                          a = e.cells
                        return n.props.updateGrid({ layouts: t, cells: a })
                      },
                      refreshGrid: function(e) {
                        var t = e.cells
                        return n.props.refreshGrid({ cells: t })
                      },
                      videoMode: n.props.selectedCell.video,
                    })
                  : 'producer-tools' === n.props.match.params.page &&
                    void 0 !== n.props.selectedTool
                  ? r.a.createElement(He, {
                      AdminAPI: n.props.AdminAPI,
                      index: n.props.selectedTool,
                      updateTools: function(e, t) {
                        return n.props.updateTools(e, t)
                      },
                      refreshTools: function(e, t) {
                        return n.props.refreshTools(e, t)
                      },
                    })
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Ue = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).render = function() {
                return n.props.cells
                  ? r.a.createElement(F, {
                      selectCell: function(e) {
                        return n.props.selectCell(e)
                      },
                      selectedCell: n.props.selectedCell,
                      view: n.props.view,
                      layouts: n.props.layouts,
                      cells: n.props.cells,
                      ResponsiveGridLayout: T.Responsive,
                      gridWidth: n.props.gridWidth,
                      onLayoutChange: function(e, t) {
                        return n.props.onLayoutChange(e, t)
                      },
                    })
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Le = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.fetchPostsFromDatabase = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            I.get('/posts').then(function(e) {
                              return e.data
                            })
                          )
                        case 2:
                          ;(t = e.sent), n.setState({ posts: t })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n.fetchPostsFromDatabase()
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return n.state.posts
                  ? r.a.createElement(
                      z,
                      {
                        headingBackgroundImage: n.props.headingBackgroundImage,
                        headingSelected: n.props.headingSelected,
                        selectHeading: function() {
                          return n.props.selectHeading(n.props.pageName)
                        },
                        isPreview: n.props.isPreview,
                        backgroundImage: 'images/girl.jpg',
                      },
                      n.state.posts.map(function(e, t) {
                        return r.a.createElement(
                          'div',
                          { id: 'posts-list', key: t },
                          r.a.createElement(
                            d.b,
                            { to: ''.concat(e.title.split(' ').join('-')) },
                            e.title,
                          ),
                        )
                      }),
                    )
                  : r.a.createElement('div', null)
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Re = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                link: n.props.postName || n.props.match.params.post,
                title: n.props.postName
                  ? n.props.postName.split('-').join(' ')
                  : n.props.match.params.post.split('-').join(' '),
                category: 'miscellaneous',
              }),
              (n.updateValue = function(e) {
                console.log(n.state.post),
                  n.props.AdminAPI.post('/posts/'.concat(n.state.post.index), {
                    text: JSON.stringify(e.toJSON()),
                  })
                    .then(function(e) {
                      return console.log(e)
                    })
                    .catch(function(e) {
                      return console.log(e)
                    })
              }),
              (n.getPost = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I.get('/posts/'.concat(t)).then(function(e) {
                                return e.data
                              })
                            )
                          case 2:
                            return (
                              'object' === typeof (a = e.sent)
                                ? n.setState({ post: a, category: a.category })
                                : (console.log('post not found'),
                                  n.setState({ title: 'Post not found' })),
                              e.abrupt('return', a)
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
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getPost(n.state.link)
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return r.a.createElement(
                  z,
                  {
                    headingBackgroundImage: n.props.headingBackgroundImage,
                    headingSelected: n.props.headingSelected,
                    isPreview: n.props.postName,
                    heading: n.state.title,
                    selectHeading: function() {
                      return n.props.selectHeading()
                    },
                  },
                  n.state.post
                    ? r.a.createElement(
                        'section',
                        { className: 'text' },
                        r.a.createElement('div', {
                          dangerouslySetInnerHTML: {
                            __html: n.state.post.text,
                          },
                        }),
                      )
                    : r.a.createElement('div', null),
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Ve = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                link: n.props.postName,
                title: n.props.postName
                  ? n.props.postName.split('-').join(' ')
                  : n.props.match.params.post.split('-').join(' '),
                category: 'miscellaneous',
              }),
              (n.updateValue = function(e) {
                var t = n.state.post
                ;(t.text = e),
                  n.props.AdminAPI.post('/posts/'.concat(n.state.post.index), t)
                    .then(function(e) {
                      return console.log(e)
                    })
                    .catch(function(e) {
                      return console.log(e)
                    })
              }),
              (n.getPost = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I.get('/posts/'.concat(t)).then(function(e) {
                                return e.data
                              })
                            )
                          case 2:
                            return (
                              'object' === typeof (a = e.sent)
                                ? n.setState({ post: a, category: a.category })
                                : (console.log('post not found'),
                                  n.setState({ title: 'Post not found' })),
                              e.abrupt('return', a)
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
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getPost(n.state.link)
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.handleTitleChange = function(e) {
                var t = e.target.value,
                  a = n.state.post
                ;(a.title = t),
                  n.setState({ title: t, post: a, titleRenamed: !0 }),
                  n.props.AdminAPI.post('/posts/'.concat(n.state.post.index), a)
                    .then(function(e) {
                      return console.log(e)
                    })
                    .catch(function(e) {
                      return console.log(e)
                    })
              }),
              (n.getPostUrl = function() {
                return n.state.title.split(' ').join('-')
              }),
              (n.render = function() {
                return r.a.createElement(
                  z,
                  { noHeading: !0, isPreview: !0 },
                  r.a.createElement(
                    'div',
                    { className: 'top-heading admin-post-heading' },
                    r.a.createElement(
                      'div',
                      { className: 'heading' },
                      r.a.createElement(
                        G.Textfit,
                        { mode: 'single', max: 50 },
                        r.a.createElement('input', {
                          type: 'text',
                          className: 'title-input',
                          value: n.state.title,
                          onChange: function(e) {
                            return n.handleTitleChange(e)
                          },
                        }),
                      ),
                    ),
                  ),
                  n.state.titleRenamed &&
                    r.a.createElement(
                      'div',
                      { className: 'title-renamed-warning' },
                      'WARNING: Title has been renamed. This page URL is based on the title. Refreshing this page will result in a 404 error.',
                      ' ',
                      r.a.createElement(
                        d.b,
                        { to: '../'.concat(n.getPostUrl()), className: 'link' },
                        'Click here',
                      ),
                      ' ',
                      'to navigate to the new page now.',
                    ),
                  n.state.post
                    ? r.a.createElement(
                        'section',
                        { className: 'text' },
                        r.a.createElement(pe, {
                          text: n.state.post.text,
                          updateValue: function(e) {
                            return n.updateValue(e)
                          },
                        }),
                      )
                    : r.a.createElement('div', null),
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Me = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.updateValue = function(e) {
                n.props.AdminAPI.post('/about', { text: e })
                  .then(function(e) {
                    return console.log(e)
                  })
                  .catch(function(e) {
                    return console.log(e)
                  })
              }),
              (n.getAboutText = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            I.get('/about/text').then(function(e) {
                              return e.data
                            })
                          )
                        case 2:
                          ;(t = e.sent), n.setState({ text: t })
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return r.a.createElement(
                  z,
                  {
                    heading: 'About',
                    id: 'admin-about',
                    headingBackgroundImage: n.props.headingBackgroundImage,
                    headingSelected: n.props.headingSelected,
                  },
                  n.state.text
                    ? r.a.createElement(
                        'section',
                        { className: 'text' },
                        r.a.createElement(pe, {
                          text: n.state.text,
                          updateValue: function(e) {
                            return n.updateValue(e)
                          },
                        }),
                      )
                    : r.a.createElement('div', null, 'loading...'),
                  r.a.createElement(De, {
                    AdminAPI: n.props.AdminAPI,
                    pageName: 'about',
                    selectedHeading: 'about',
                    updateHeading: function(e) {
                      return n.props.updateHeading(e)
                    },
                  }),
                )
              }),
              n
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
        We = n(55),
        Fe = (function(e) {
          function t(e) {
            var n
            return (
              Object(c.a)(this, t),
              ((n = Object(l.a)(this, Object(u.a)(t).call(this, e))).state = {
                columns: [
                  { title: 'Title', field: 'title' },
                  { title: 'Category', field: 'category' },
                ],
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this
                  return r.a.createElement(Ie.a, {
                    title: 'Releases',
                    columns: this.state.columns,
                    data: this.props.data,
                    actions: [
                      {
                        icon: 'insert_drive_file',
                        tooltip: 'Edit text',
                        onClick: function(t, n) {
                          return e.props.editPost(n.title)
                        },
                      },
                    ],
                    editable: {
                      onRowAdd: function(t) {
                        return new Promise(function(n, a) {
                          setTimeout(function() {
                            e.props.createPost(t), n()
                          }, 1e3)
                        })
                      },
                      onRowUpdate: function(t, n) {
                        return new Promise(function(n, a) {
                          setTimeout(function() {
                            e.props.updatePost(t), n()
                          }, 1e3)
                        })
                      },
                      onRowDelete: function(t) {
                        return new Promise(function(n, a) {
                          setTimeout(function() {
                            e.props.deletePost(t), n()
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
        Ge = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.createPost = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.post('/posts/new', t).then(
                                function(e) {
                                  return e.data
                                },
                              )
                            )
                          case 2:
                            e.sent,
                              (a = [].concat(Object(We.a)(n.state.posts), [t])),
                              n.setState({ posts: a })
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
              (n.updatePost = function(e) {
                var t = n.state.posts
                ;(t[e.index] = e),
                  n.setState({ posts: t }),
                  n.props.AdminAPI.post('/posts/'.concat(e.index), e)
              }),
              (n.deletePost = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.delete('/posts', {
                                data: t,
                              }).then(function(e) {
                                return e.data
                              })
                            )
                          case 2:
                            ;(a = n.state.posts),
                              (r = a.findIndex(function(e) {
                                return e._id === t._id
                              })),
                              a.splice(r, 1),
                              n.setState({ posts: a })
                          case 6:
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
              (n.handleInputChange = function(e) {
                var t = e.e,
                  a = e.path,
                  r = e.value
                t && ((a = t.target.id), (r = t.target.value)),
                  n.updateHeadingValue(a, r)
              }),
              (n.editPost = function(e) {
                return n.setState({ redirect: e.split(' ').join('-') })
              }),
              (n.getPosts = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            'return',
                            n.props.AdminAPI.get('/posts').then(function(e) {
                              return e.data
                            }),
                          )
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.componentDidMount = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), n.getPosts()
                        case 2:
                          ;(t = e.sent),
                            n.setState({ posts: t }),
                            (window.onbeforeunload = null)
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.render = function() {
                return r.a.createElement(
                  z,
                  null,
                  n.state.redirect &&
                    r.a.createElement(m.a, {
                      push: !0,
                      to: ''.concat(n.state.redirect),
                    }),
                  n.state.posts
                    ? r.a.createElement(Fe, {
                        editPost: function(e) {
                          return n.editPost(e)
                        },
                        data: n.state.posts,
                        updatePost: function(e) {
                          return n.updatePost(e)
                        },
                        deletePost: function(e) {
                          return n.deletePost(e)
                        },
                        createPost: function(e) {
                          return n.createPost(e)
                        },
                      })
                    : r.a.createElement('div', null, 'Loading...'),
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component),
        Ke = {
          index: Ue,
          artists: Z,
          artist: ae,
          'producer-tools': ie,
          'producer-tool': le,
          about: de,
          posts: Le,
          post: Re,
        },
        ze = {
          apiKey: P.a.firebaseconfig.apikey,
          messagingSenderId: P.a.firebaseconfig.messagingsenderid,
          authDomain: 'division-88-6430e.firebaseapp.com',
          databaseURL: 'https://division-88-6430e.firebaseio.com',
          projectId: 'division-88-6430e',
          storageBucket: 'division-88-6430e.appspot.com',
        },
        _e = he.a.initializeApp(ze).auth(),
        Je = { googleProvider: new he.a.auth.GoogleAuthProvider() },
        Ye = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {
                view: 'mobile',
                scale: 1,
                countdown: 2,
                selectedCell: 0,
                selectedArtist: 0,
                selectedTool: 0,
                loading: !0,
                dataReady: !1,
                selectedHeading: void 0,
              }),
              (n.setScale = function(e) {
                return n.setState({ scale: e })
              }),
              (n.setView = function(e) {
                return n.setState({ view: e })
              }),
              (n.updateGrid = function(e) {
                var t = e.layouts,
                  a = e.cells
                t && a
                  ? n.setState({ layouts: t, cells: a })
                  : t
                  ? n.setState({ layouts: t })
                  : a && n.setState({ cells: a })
              }),
              (n.refreshGrid = function(e) {
                var t = e.cells,
                  a = n.state.cellsTemp
                a
                  ? n.setState({ cellsTemp: {}, cells: a })
                  : n.setState({ cells: {}, cellsTemp: t })
              }),
              (n.updateArtists = function(e, t) {
                var a = n.state,
                  r = a.artists,
                  o = a.artistsTemp
                o
                  ? ((o[e] = t), n.setState({ artistsTemp: o, artists: r }))
                  : ((r[e] = t), n.setState({ artists: r, artistsTemp: o }))
              }),
              (n.refreshArtists = function(e, t, a) {
                var r = n.state,
                  o = r.artists,
                  s = r.artistsTemp
                s
                  ? ((s[e] = t),
                    n.setState({ artistsTemp: void 0, artists: s }))
                  : ((o[e] = t),
                    n.setState({ artists: void 0, artistsTemp: o })),
                  void 0 !== a &&
                    (window.location.reload(),
                    n.setState({ selectedArtist: a }))
              }),
              (n.updateTools = function(e, t) {
                var a = n.state,
                  r = a.tools,
                  o = a.toolsTemp
                o
                  ? ((o[e] = t), n.setState({ toolsTemp: o, tools: r }))
                  : ((r[e] = t), n.setState({ tools: r, toolsTemp: o }))
              }),
              (n.refreshTools = function(e, t, a) {
                var r = n.state,
                  o = r.tools,
                  s = r.toolsTemp
                s
                  ? ((s[e] = t), n.setState({ toolsTemp: void 0, tools: s }))
                  : ((o[e] = t), n.setState({ tools: void 0, toolsTemp: o })),
                  void 0 !== a &&
                    (n.setState({ selectedtool: a }), window.location.reload())
              }),
              (n.updateHeading = function(e) {
                n.setState({ headingBackgroundImage: e.headingBackgroundImage })
              }),
              (n.selectCell = function(e) {
                console.log('select cell - Admin.jsx'),
                  n.setState({ selectedCell: e, selectedHeading: void 0 })
              }),
              (n.selectArtist = function(e) {
                return n.setState({
                  selectedArtist: e,
                  selectedHeading: void 0,
                })
              }),
              (n.selectTool = function(e) {
                return n.setState({ selectedTool: e, selectedHeading: void 0 })
              }),
              (n.selectHeading = function(e) {
                n.setState({
                  selectedHeading: e,
                  selectedCell: void 0,
                  selectedArtist: void 0,
                  selectedTool: void 0,
                })
              }),
              (n.updateCell = function(e, t) {
                return n.setState({ updatedCell: { index: e, cell: t } })
              }),
              (n.setBodyBackground = function() {
                return (document.getElementsByTagName(
                  'body',
                )[0].style.backgroundColor = '#222')
              }),
              (n.setKeyBindings = function() {
                document.onkeydown = function(e) {
                  e.target.hasAttribute('data-slate-editor') ||
                    'INPUT' === e.target.tagName ||
                    'TEXTAREA' === e.target.tagName ||
                    ('u' === e.key
                      ? n.undoLayoutChange()
                      : 'r' === e.key
                      ? n.redoLayoutChange()
                      : 'm' === e.key
                      ? n.setView('mobile')
                      : 't' === e.key
                      ? n.setView('tablet')
                      : 'd' === e.key && n.setView('desktop'))
                }
              }),
              (n.getArtistsFromDatabase = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n.props.AdminAPI.get('/artists').then(function(e) {
                              return e.data
                            })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            n.setState({ artists: t }),
                            e.abrupt('return', t)
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.getArtistFromDatabase = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.get(
                                '/artist/index/'.concat(t),
                              ).then(function(e) {
                                return e.data
                              })
                            )
                          case 2:
                            return (
                              (a = e.sent),
                              n.setState({ artist: a }),
                              e.abrupt('return', a)
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
              (n.getProducerToolsFromDatabase = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.get('/producer-tools').then(
                                function(e) {
                                  return e.data
                                },
                              )
                            )
                          case 2:
                            return (
                              (a = e.sent),
                              n.setState({ tools: a }),
                              e.abrupt('return', a)
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
              (n.getGridFromDatabase = Object(j.a)(
                O.a.mark(function e() {
                  var t, a
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n.props.AdminAPI.get('/grids/index/layouts').then(
                              function(e) {
                                return e.data
                              },
                            )
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            (e.next = 5),
                            n.props.AdminAPI.get('/grids/index/cells').then(
                              function(e) {
                                return e.data
                              },
                            )
                          )
                        case 5:
                          return (
                            (a = e.sent),
                            n.setState({ cells: a, layouts: t }),
                            (n.layoutsHistory = [t]),
                            (n.layoutsUndone = []),
                            e.abrupt('return', a)
                          )
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.getAboutTextFromDatabase = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              n.props.AdminAPI.get('/about/text').then(function(
                                e,
                              ) {
                                return e.data
                              })
                            )
                          case 2:
                            return (
                              (a = e.sent),
                              n.setState({ aboutText: a }),
                              e.abrupt('return', a)
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
              (n.getHeadingBackgroundImage = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            n.props.AdminAPI.get(
                              '/page-info/'.concat(n.props.match.params.page),
                            ).then(function(e) {
                              return e.data.headingBackgroundImage
                            })
                          )
                        case 2:
                          return (
                            (t = e.sent),
                            n.setState({ headingBackgroundImage: t }),
                            e.abrupt('return', t)
                          )
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.getPageData = Object(j.a)(
                O.a.mark(function e() {
                  var t
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = n.getPageName()),
                            n.setState({ pageName: t }),
                            'artists' !== t)
                          ) {
                            e.next = 8
                            break
                          }
                          return (e.next = 5), n.getArtistsFromDatabase()
                        case 5:
                          return e.abrupt('return', e.sent)
                        case 8:
                          if ('artist' !== t) {
                            e.next = 14
                            break
                          }
                          return (e.next = 11), n.getArtistFromDatabase()
                        case 11:
                          return e.abrupt('return', e.sent)
                        case 14:
                          if ('producer-tools' !== t) {
                            e.next = 20
                            break
                          }
                          return (e.next = 17), n.getProducerToolsFromDatabase()
                        case 17:
                          return e.abrupt('return', e.sent)
                        case 20:
                          if ('index' !== t) {
                            e.next = 26
                            break
                          }
                          return (e.next = 23), n.getGridFromDatabase()
                        case 23:
                          return e.abrupt('return', e.sent)
                        case 26:
                          if ('about' !== t) {
                            e.next = 32
                            break
                          }
                          return (e.next = 29), n.getAboutTextFromDatabase()
                        case 29:
                          return e.abrupt('return', e.sent)
                        case 32:
                          if ('posts' !== t) {
                            e.next = 36
                            break
                          }
                          return (e.next = 35), n.getPostName()
                        case 35:
                          return e.abrupt('return', e.sent)
                        case 36:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )),
              (n.getDataForPage = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = new Promise(function(e, t) {
                                return n
                                  .getHeadingBackgroundImage()
                                  .then(function(t) {
                                    return e(t)
                                  })
                              })),
                              (r = new Promise(function(e, a) {
                                return n.getPageData(t).then(function(t) {
                                  return e(t)
                                })
                              })),
                              (e.next = 4),
                              Promise.all([a, r])
                            )
                          case 4:
                            n.setState({ dataReady: !0 })
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
              (n.setDataNotReady = function() {
                n.setState({
                  dataReady: !1,
                  selectedArtist: void 0,
                  selectedTool: void 0,
                  selectedCell: void 0,
                  selectedHeading: void 0,
                })
              }),
              (n.componentDidUpdate = function(e) {
                n.props.user !== e.user &&
                  (n.props.user && n.setToken(), n.setState({ loading: !1 })),
                  n.props.match.params.page !== e.match.params.page
                    ? (n.setDataNotReady(), n.getDataForPage())
                    : n.state.cellsTemp
                    ? n.setState({
                        cells: n.state.cellsTemp,
                        cellsTemp: void 0,
                      })
                    : n.state.artistsTemp
                    ? n.setState({
                        artists: n.state.artistsTemp,
                        artistsTemp: void 0,
                      })
                    : n.state.toolsTemp &&
                      n.setState({
                        tools: n.state.toolsTemp,
                        toolsTemp: void 0,
                      })
              }),
              (n.signOut = function() {
                return he.a.auth().signOut()
              }),
              (n.getPageName = function() {
                return n.props.match.params.page
              }),
              (n.getPostName = function() {
                return n.props.match.params.post
              }),
              (n.render = function() {
                return n.state.loading
                  ? r.a.createElement($.a, {
                      className: 'loading text-center',
                      name: 'ball-clip-rotate',
                    })
                  : null === n.props.user
                  ? r.a.createElement(
                      z,
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
                                return n.handleClickSignIn(e)
                              },
                            },
                            'Sign in with Google',
                          ),
                        ),
                      ),
                    )
                  : 'posts' === n.getPageName()
                  ? r.a.createElement(Ge, { AdminAPI: n.props.AdminAPI })
                  : 'post' === n.getPageName()
                  ? r.a.createElement(Ve, {
                      history: n.props.history,
                      AdminAPI: n.props.AdminAPI,
                      postName: n.props.match.params.post,
                    })
                  : 'about' === n.getPageName()
                  ? r.a.createElement(Me, {
                      headingBackgroundImage: n.state.headingBackgroundImage,
                      history: n.props.history,
                      AdminAPI: n.props.AdminAPI,
                      postName: n.props.match.params.post,
                      updateHeading: function(e) {
                        return n.updateHeading(e)
                      },
                    })
                  : r.a.createElement(
                      'div',
                      { id: 'admin-root' },
                      r.a.createElement(ve, {
                        setScale: function(e) {
                          return n.setScale(e)
                        },
                        setView: function(e) {
                          return n.setView(e)
                        },
                        pageName: function() {
                          return n.getPageName()
                        },
                        undoLayoutChange: function() {
                          return n.undoLayoutChange()
                        },
                        redoLayoutChange: function() {
                          return n.redoLayoutChange()
                        },
                        signOut: function() {
                          return n.props.signOut()
                        },
                      }),
                      n.state.dataReady
                        ? r.a.createElement(be, {
                            AdminAPI: n.props.AdminAPI,
                            postName: n.getPostName(),
                            pageName: n.getPageName(),
                            page: Ke[n.getPageName()],
                            view: n.state.view,
                            scale: n.state.scale,
                            headingBackgroundImage:
                              n.state.headingBackgroundImage,
                            selectHeading: function(e) {
                              return n.selectHeading(e)
                            },
                            headingSelected: n.state.selectedHeading,
                            selectCell: function(e) {
                              return n.selectCell(e)
                            },
                            selectedCell: n.state.selectedCell,
                            layouts: n.state.layouts,
                            cells: n.state.cells,
                            onLayoutChange: function(e, t) {
                              return n.onLayoutChange(e, t)
                            },
                            selectArtist: function(e) {
                              return n.selectArtist(e)
                            },
                            selectedArtist: n.state.selectedArtist,
                            artists: n.state.artists,
                            selectTool: function(e) {
                              return n.selectTool(e)
                            },
                            selectedTool: n.state.selectedTool,
                            tools: n.state.tools,
                            aboutText: n.state.aboutText,
                          })
                        : r.a.createElement('div', null, 'loading...'),
                      r.a.createElement(
                        Be,
                        Object.assign(
                          { AdminAPI: n.props.AdminAPI },
                          n.props,
                          n.state,
                          {
                            selectedHeading: n.state.selectedHeading,
                            updateHeading: function(e) {
                              return n.updateHeading(e)
                            },
                            updateArtists: function(e, t) {
                              return n.updateArtists(e, t)
                            },
                            refreshArtists: function(e, t, a) {
                              return n.refreshArtists(e, t, a)
                            },
                            updateGrid: function(e) {
                              var t = e.layouts,
                                a = e.cells
                              return n.updateGrid({ layouts: t, cells: a })
                            },
                            refreshGrid: function(e) {
                              var t = e.cells
                              return n.refreshGrid({ cells: t })
                            },
                            updateTools: function(e, t) {
                              return n.updateTools(e, t)
                            },
                            refreshTools: function(e, t, a) {
                              return n.refreshTools(e, t, a)
                            },
                          },
                        ),
                      ),
                    )
              }),
              n
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
                    console.log('updateGrid: localhost/api/grids/index', {
                      layouts: t,
                    }),
                    this.props.AdminAPI.post('/grids/index', { layouts: t }))
                },
              },
              {
                key: 'setToken',
                value: function() {
                  var e = this
                  he.a
                    .auth()
                    .currentUser.getIdToken(!0)
                    .then(function(t) {
                      e.setState({ idToken: t })
                    })
                    .catch(function(e) {
                      return console.log(e)
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
        Ze = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(o)),
              )).state = {}),
              (n.getIdToken = Object(j.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            he.a
                              .auth()
                              .currentUser.getIdToken(!0)
                              .catch(function(e) {
                                return console.log(e)
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
              (n.AdminAPI = A.a.create({
                baseURL: P.a.apiUrl,
                headers: { 'access-token': n.state.idToken || 'hi' },
              })),
              (n.componentDidUpdate = (function() {
                var e = Object(j.a)(
                  O.a.mark(function e(t) {
                    var a, r
                    return O.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (n.props.user === t.user) {
                              e.next = 7
                              break
                            }
                            if (!n.props.user) {
                              e.next = 7
                              break
                            }
                            return (e.next = 4), n.getIdToken()
                          case 4:
                            ;(a = e.sent),
                              (r = new Promise(function(e) {
                                return e(a)
                              })),
                              n.setState({ idToken: r })
                          case 7:
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
              (n.render = function() {
                return r.a.createElement(
                  Ye,
                  Object.assign({}, n.props, { AdminAPI: n.AdminAPI }),
                )
              }),
              n
            )
          }
          return (
            Object(p.a)(t, e),
            Object(g.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this
                  this.AdminAPI.interceptors.request.use(
                    (function() {
                      var t = Object(j.a)(
                        O.a.mark(function t(n) {
                          return O.a.wrap(function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.state.idToken
                                case 2:
                                  return (
                                    (n.headers['access-token'] = t.sent),
                                    t.abrupt('return', n)
                                  )
                                case 4:
                                case 'end':
                                  return t.stop()
                              }
                          }, t)
                        }),
                      )
                      return function(e) {
                        return t.apply(this, arguments)
                      }
                    })(),
                    function(e) {
                      return (
                        console.log('Request error: ', e), Promise.reject(e)
                      )
                    },
                  )
                },
              },
            ]),
            t
          )
        })(r.a.Component),
        Xe = Object(me.a)({ providers: Je, firebaseAppAuth: _e })(Ze),
        qe = (function(e) {
          function t() {
            var e, n
            Object(c.a)(this, t)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s]
            return (
              ((n = Object(l.a)(
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
                    r.a.createElement(
                      m.d,
                      null,
                      r.a.createElement(m.b, {
                        path: '/:url*',
                        exact: !0,
                        strict: !0,
                        render: function(e) {
                          return r.a.createElement(m.a, {
                            to: ''.concat(e.location.pathname, '/'),
                          })
                        },
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/',
                        component: _,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/artists',
                        component: Z,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/artists/:artist',
                        component: ae,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/producer-tools',
                        component: ie,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/producer-tools/:tool',
                        component: le,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/about',
                        component: de,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/admin',
                        render: function() {
                          return r.a.createElement(Xe, {
                            match: { params: { page: 'index' } },
                          })
                        },
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/admin/:page',
                        component: Xe,
                      }),
                      r.a.createElement(m.b, {
                        path: '/admin/posts/:post',
                        render: function(e) {
                          return r.a.createElement(
                            Xe,
                            Object.assign({}, e, {
                              match: {
                                params: {
                                  page: 'post',
                                  post: e.match.params.post,
                                },
                              },
                            }),
                          )
                        },
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/posts',
                        component: Le,
                      }),
                      r.a.createElement(m.b, {
                        exact: !0,
                        path: '/posts/:post',
                        component: Re,
                      }),
                      r.a.createElement(m.b, { component: Q }),
                    ),
                    r.a.createElement(E, null),
                  ),
                )
              }),
              n
            )
          }
          return Object(p.a)(t, e), t
        })(r.a.Component)
      n(683)
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
          return r.a.createElement(qe, null)
        }, null),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister()
          })
    },
  },
  [[330, 1, 2]],
])
//# sourceMappingURL=main.21fae7f4.chunk.js.map
