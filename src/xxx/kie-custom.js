// - - - Same Column Height based on Tallest one - - - - - - - - - - - - - - - - - - - - - //
equalheight = function(container) {
	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
	$(container).each(function() {
		$el = $(this);
		$($el).height('auto')
		topPostion = $el.position().top;
		if (currentRowStart != topPostion) {
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (
				currentTallest);
		}
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
$(window).load(function() {
	equalheight('.equal-parent .equal-child-item');
});
$(window).resize(function() {
	equalheight('.equal-parent .equal-child-item');
});

// - - - Smooth Scroll: Add class="scroll" - - - - - - - - - - - - - - - - - - - - - //
$(".scroll").click(function(event) {
	event.preventDefault();
	//calculate destination place
	var dest = 0;
	if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
		dest = $(document).height() - $(window).height();
	} else {
		dest = $(this.hash).offset().top;
	}
	//go to destination
	$('html,body').animate({
		scrollTop: dest - 62
	}, 500, 'swing');
	// Trigger by viewport
	if ($(window).width() < 991) {
		$('html,body').animate({
			scrollTop: dest - 50
		}, 500, 'swing');
	}
});

// - - - Scroll button hide - - - - - - - - - - - - - - - - - - - - - //
$(".ghost-logo").hide();
$(window).scroll(function() {
	if ($(this).scrollTop() > 300) {
		$('.ghost-logo').fadeIn();
	} else {
		$('.ghost-logo').fadeOut();
	}
});

// - - - Bootstrap Carousel Custom - - - - - - - - - - - - - - - - - - - - - //
$('#hero-carousel').carousel({
	pause: "false",
	interval: 7500
});

// - - - EASY RESPONSIVE TABS - - - - - - - - - - - - - - - - - - - - - //
! function(a) {
	a.fn.extend({
		easyResponsiveTabs: function(t) {
			var e = {
					type: "default",
					width: "auto",
					fit: !0,
					closed: !1,
					activate: function() {}
				},
				t = a.extend(e, t),
				s = t,
				i = s.type,
				n = s.fit,
				r = s.width,
				c = "vertical",
				o = "accordion",
				d = window.location.hash,
				l = !(!window.history || !history.replaceState);
			a(this).bind("tabactivate", function(a, e) {
				"function" == typeof t.activate && t.activate.call(e, a)
			}), this.each(function() {
				function e() {
					i == c && s.addClass("resp-vtabs"), 1 == n && s.css({
						width: "100%",
						margin: "0px"
					}), i == o && (s.addClass("resp-easy-accordion"), s.find(
						".resp-tabs-list").css("display", "none"))
				}
				var s = a(this),
					p = s.find("ul.resp-tabs-list"),
					b = s.attr("id");
				s.find("ul.resp-tabs-list li").addClass("resp-tab-item"), s.css({
						display: "block",
						width: r
					}), s.find(".resp-tabs-container > div").addClass("resp-tab-content"),
					e();
				var v;
				s.find(".resp-tab-content").before(
					"<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>"
				);
				var f = 0;
				s.find(".resp-accordion").each(function() {
					v = a(this);
					var t = s.find(".resp-tab-item:eq(" + f + ")"),
						e = s.find(".resp-accordion:eq(" + f + ")");
					e.append(t.html()), e.data(t.data()), v.attr("aria-controls",
						"tab_item-" + f), f++
				});
				var h, u = 0;
				s.find(".resp-tab-item").each(function() {
					$tabItem = a(this), $tabItem.attr("aria-controls", "tab_item-" + u),
						$tabItem.attr("role", "tab");
					var t = 0;
					s.find(".resp-tab-content").each(function() {
						h = a(this), h.attr("aria-labelledby", "tab_item-" + t), t++
					}), u++
				});
				var C = 0;
				if ("" != d) {
					var m = d.match(new RegExp(b + "([0-9]+)"));
					null !== m && 2 === m.length && (C = parseInt(m[1], 10) - 1, C > u &&
						(C = 0))
				}
				a(s.find(".resp-tab-item")[C]).addClass("resp-tab-active"), t.closed ===
					!0 || "accordion" === t.closed && !p.is(":visible") || "tabs" === t.closed &&
					p.is(":visible") ? a(s.find(".resp-tab-content")[C]).addClass(
						"resp-tab-content-active resp-accordion-closed") : (a(s.find(
						".resp-accordion")[C]).addClass("resp-tab-active"), a(s.find(
						".resp-tab-content")[C]).addClass("resp-tab-content-active").attr(
						"style", "display:block")), s.find("[role=tab]").each(function() {
						var t = a(this);
						t.click(function() {
							var t = a(this),
								e = t.attr("aria-controls");
							if (t.hasClass("resp-accordion") && t.hasClass("resp-tab-active"))
								return s.find(".resp-tab-content-active").slideUp("", function() {
									a(this).addClass("resp-accordion-closed")
								}), t.removeClass("resp-tab-active"), !1;
							if (!t.hasClass("resp-tab-active") && t.hasClass(
									"resp-accordion") ? (s.find(".resp-tab-active").removeClass(
										"resp-tab-active"), s.find(".resp-tab-content-active").slideUp()
									.removeClass("resp-tab-content-active resp-accordion-closed"),
									s.find("[aria-controls=" + e + "]").addClass("resp-tab-active"),
									s.find(".resp-tab-content[aria-labelledby = " + e + "]").slideDown()
									.addClass("resp-tab-content-active")) : (s.find(
										".resp-tab-active").removeClass("resp-tab-active"), s.find(
										".resp-tab-content-active").removeAttr("style").removeClass(
										"resp-tab-content-active").removeClass(
										"resp-accordion-closed"), s.find("[aria-controls=" + e + "]")
									.addClass("resp-tab-active"), s.find(
										".resp-tab-content[aria-labelledby = " + e + "]").addClass(
										"resp-tab-content-active").attr("style", "display:block")), t
								.trigger("tabactivate", t), l) {
								var i = window.location.hash,
									n = b + (parseInt(e.substring(9), 10) + 1).toString();
								if ("" != i) {
									var r = new RegExp(b + "[0-9]+");
									n = null != i.match(r) ? i.replace(r, n) : i + "|" + n
								} else n = "#" + n;
								history.replaceState(null, null, n)
							}
						})
					}), a(window).resize(function() {
						s.find(".resp-accordion-closed").removeAttr("style")
					})
			})
		}
	})
}(jQuery);
$(document).ready(function() {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function(event) { // Callback function if tab is switched
			var $tab = $(this);
			var $info = $('#tabInfo');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	$('#verticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});
});

// - - - TEXTAREA: AUTO RESIZING HEIGHT - - - - - - - - - - - - - - - - - - - - - //
! function(e) {
	var t, o = {
			className: "autosizejs",
			id: "autosizejs",
			append: "\n",
			callback: !1,
			resizeDelay: 10,
			placeholder: !0
		},
		i =
		'<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
		n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing",
			"textTransform", "wordSpacing", "textIndent", "whiteSpace"
		],
		a = e(i).data("autosize", !0)[0];
	a.style.lineHeight = "99px", "99px" === e(a).css("lineHeight") && n.push(
		"lineHeight"), a.style.lineHeight = "", e.fn.autosize = function(i) {
		return this.length ? (i = e.extend({}, o, i || {}), a.parentNode !==
			document.body && e(document.body).append(a), this.each(function() {
				function o() {
					var t, o = window.getComputedStyle ? window.getComputedStyle(u, null) :
						!1;
					o ? (t = u.getBoundingClientRect().width, (0 === t || "number" !=
						typeof t) && (t = parseFloat(o.width)), e.each(["paddingLeft",
						"paddingRight", "borderLeftWidth", "borderRightWidth"
					], function(e, i) {
						t -= parseFloat(o[i])
					})) : t = p.width(), a.style.width = Math.max(t, 0) + "px"
				}

				function s() {
					var s = {};
					if (t = u, a.className = i.className, a.id = i.id, d = parseFloat(p.css(
						"maxHeight")), e.each(n, function(e, t) {
						s[t] = p.css(t)
					}), e(a).css(s).attr("wrap", p.attr("wrap")), o(), window.chrome) {
						var r = u.style.width;
						u.style.width = "0px"; {
							u.offsetWidth
						}
						u.style.width = r
					}
				}

				function r() {
					var e, n;
					t !== u ? s() : o(), a.value = !u.value && i.placeholder ? p.attr(
							"placeholder") || "" : u.value, a.value += i.append || "", a.style.overflowY =
						u.style.overflowY, n = parseFloat(u.style.height), a.scrollTop = 0, a
						.scrollTop = 9e4, e = a.scrollTop, d && e > d ? (u.style.overflowY =
							"scroll", e = d) : (u.style.overflowY = "hidden", c > e && (e = c)),
						e += w, n !== e && (u.style.height = e + "px", a.className = a.className,
							f && i.callback.call(u, u), p.trigger("autosize.resized"))
				}

				function l() {
					clearTimeout(h), h = setTimeout(function() {
						var e = p.width();
						e !== g && (g = e, r())
					}, parseInt(i.resizeDelay, 10))
				}
				var d, c, h, u = this,
					p = e(u),
					w = 0,
					f = e.isFunction(i.callback),
					z = {
						height: u.style.height,
						overflow: u.style.overflow,
						overflowY: u.style.overflowY,
						wordWrap: u.style.wordWrap,
						resize: u.style.resize
					},
					g = p.width(),
					y = p.css("resize");
				p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css(
							"box-sizing") || "border-box" === p.css("-moz-box-sizing") ||
						"border-box" === p.css("-webkit-box-sizing")) && (w = p.outerHeight() -
						p.height()), c = Math.max(parseFloat(p.css("minHeight")) - w || 0, p.height()),
					p.css({
						overflow: "hidden",
						overflowY: "hidden",
						wordWrap: "break-word"
					}), "vertical" === y ? p.css("resize", "none") : "both" === y && p.css(
						"resize", "horizontal"), "onpropertychange" in u ? "oninput" in u ? p
					.on("input.autosize keyup.autosize", r) : p.on(
						"propertychange.autosize", function() {
							"value" === event.propertyName && r()
						}) : p.on("input.autosize", r), i.resizeDelay !== !1 && e(window).on(
						"resize.autosize", l), p.on("autosize.resize", r), p.on(
						"autosize.resizeIncludeStyle", function() {
							t = null, r()
						}), p.on("autosize.destroy", function() {
						t = null, clearTimeout(h), e(window).off("resize", l), p.off(
							"autosize").off(".autosize").css(z).removeData("autosize")
					}), r())
			})) : this
	}
}(jQuery || $);
$(function() {
	$('textarea').autosize();
});

// - - - SLIDING NAVIGATION ON MOBILE - - - - - - - - - - - - - - - - - - - - - //
$(document).ready(function() {
	//stick in the fixed 100% height behind the navbar but don't wrap it
	$('#slide-nav.navbar .container').append($(
		'<div id="navbar-height-col"></div>'));
	// Enter your ids or classes
	var toggler = '.navbar-toggle';
	var pagewrapper = '#page-content';
	var navigationwrapper = '.navbar-header';
	var menuwidth = '100%'; // the menu inside the slide menu itself
	var slidewidth = '80%';
	var menuneg = '-100%';
	var slideneg = '-80%';
	$("#slide-nav").on("click", toggler, function(e) {
		var selected = $(this).hasClass('slide-active');
		$('#slidemenu').stop().animate({
			left: selected ? menuneg : '0px'
		});
		$('#navbar-height-col').stop().animate({
			left: selected ? slideneg : '0px'
		});
		$(pagewrapper).stop().animate({
			left: selected ? '0px' : slidewidth
		});
		$(navigationwrapper).stop().animate({
			left: selected ? '0px' : slidewidth
		});
		$(this).toggleClass('slide-active', !selected);
		$('#slidemenu').toggleClass('slide-active');
		$('#page-content, .navbar, body, .navbar-header').toggleClass(
			'slide-active');
	});
	var selected =
		'#slidemenu, #page-content, body, .navbar, .navbar-header';
	$(window).on("resize", function() {
		if ($(window).width() > 767 && $('.navbar-toggle').is(
			':hidden')) {
			$(selected).removeClass('slide-active');
		}
	});
});

// - - - Title changes When page is inactive - - - - - - - - - - - - - - - - - - - - - //
$(document).ready(function () {
	$(window).blur(function(e) {
		document.title = "We Miss You!";
	});
	$(window).focus(function(e) {
		document.title = "Welcome to the World - Kaplan International English";
	});
});

// - - - Wow JS Custom - - - - - - - - - - - - - - - - - - - - - //
$(document).ready(function() {
	var wow = new WOW (
		{
			mobile: false 
		}
	);
	wow.init();
});

// - - - Child Ramdom Order : Shuffle - - - - - - - - - - - - - - - - - - - - - //
$(document).ready(function() {
	var parent = $("#shuffle");
	var divs = parent.children();
	while (divs.length) {
		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	}
});
