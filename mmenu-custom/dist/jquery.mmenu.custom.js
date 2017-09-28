;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.jquery_mmenu_custom_js = factory(root.jQuery);
  }
}(this, function(jQuery) {
/*
 * jQuery mmenu v6.1.7
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(o={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},r={},e.each([s,a,r],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,i=e.length;n<i;n++)t[e[n]]=t.mm(e[n])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),r.mm=function(e){return e+".mm"},r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=s,e[n]._d=a,e[n]._e=r,e[n].glbl=o)}var n="mmenu",i="6.1.7";if(!(e[n]&&e[n].version>i)){e[n]=function(e,t,n){return this.$menu=e,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initAddons(),this._initExtensions(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=i,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={getInstance:function(){return this},initPanels:function(e){this._initPanels(e)},openPanel:function(t,i){if(this.trigger("openPanel:before",t),t&&t.length&&(t.is("."+s.panel)||(t=t.closest("."+s.panel)),t.is("."+s.panel))){var r=this;if("boolean"!=typeof i&&(i=!0),t.hasClass(s.vertical))t.add(t.parents("."+s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened),this.openPanel(t.parents("."+s.panel).not("."+s.vertical).first()),this.trigger("openPanel:start",t),this.trigger("openPanel:finish",t);else{if(t.hasClass(s.opened))return;var o=this.$pnls.children("."+s.panel),l=o.filter("."+s.opened);if(!e[n].support.csstransitions)return l.addClass(s.hidden).removeClass(s.opened),t.removeClass(s.hidden).addClass(s.opened),this.trigger("openPanel:start",t),void this.trigger("openPanel:finish",t);o.not(t).removeClass(s.subopened);for(var d=t.data(a.parent);d;)d=d.closest("."+s.panel),d.is("."+s.vertical)||d.addClass(s.subopened),d=d.data(a.parent);o.removeClass(s.highest).not(l).not(t).addClass(s.hidden),t.removeClass(s.hidden),this.openPanelStart=function(){l.removeClass(s.opened),t.addClass(s.opened),t.hasClass(s.subopened)?(l.addClass(s.highest),t.removeClass(s.subopened)):(l.addClass(s.subopened),t.addClass(s.highest)),this.trigger("openPanel:start",t)},this.openPanelFinish=function(){l.removeClass(s.highest).addClass(s.hidden),t.removeClass(s.highest),this.trigger("openPanel:finish",t)},i&&!t.hasClass(s.noanimation)?setTimeout(function(){r.__transitionend(t,function(){r.openPanelFinish.call(r)},r.conf.transitionDuration),r.openPanelStart.call(r)},r.conf.openingInterval):(this.openPanelStart.call(this),this.openPanelFinish.call(this))}this.trigger("openPanel:after",t)}},closePanel:function(e){this.trigger("closePanel:before",e);var t=e.parent();t.hasClass(s.vertical)&&(t.removeClass(s.opened),this.trigger("closePanel",e)),this.trigger("closePanel:after",e)},closeAllPanels:function(e){this.trigger("closeAllPanels:before"),this.$pnls.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var t=this.$pnls.children("."+s.panel),n=e&&e.length?e:t.first();this.$pnls.children("."+s.panel).not(n).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},togglePanel:function(e){var t=e.parent();t.hasClass(s.vertical)&&this[t.hasClass(s.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.trigger("setSelected:before",e),this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),e.addClass(s.selected),this.trigger("setSelected:after",e)},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(this.cbck[n])for(var i=0,s=this.cbck[n].length;i<s;i++)this.cbck[n][i].apply(e,t)},matchMedia:function(e,t,n){var i={yes:t,no:n};this.mtch[e]=this.mtch[e]||[],this.mtch[e].push(i)},_initAddons:function(){this.trigger("initAddons:before");var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var e=this;this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions});for(var t in this.opts.extensions)this.opts.extensions[t]=this.opts.extensions[t].length?"mm-"+this.opts.extensions[t].join(" mm-"):"",this.opts.extensions[t]&&!function(t){e.matchMedia(t,function(){this.$menu.addClass(this.opts.extensions[t])},function(){this.$menu.removeClass(this.opts.extensions[t])})}(t);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);var t=[s.menu];this.opts.slidingSubmenus||t.push(s.vertical),this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),this.trigger("initMenu:after")},_initPanels:function(t){this.trigger("initPanels:before",t),t=t||this.$pnls.children(this.conf.panelNodetype);var n=e(),i=this,a=function(t){t.filter(this.conf.panelNodetype).each(function(){var t=i._initPanel(e(this));if(t){i._initNavbar(t),i._initListview(t),n=n.add(t);var r=t.children("."+s.listview).children("li").children(i.conf.panelNodeType).add(t.children("."+i.conf.classNames.panel));r.length&&a.call(i,r)}})};a.call(this,t),this.opts.initPanels.call(this,n),this.trigger("initPanels:after",n)},_initPanel:function(e){this.trigger("initPanel:before",e);if(e.hasClass(s.panel))return e;if(this.__refactorClass(e,this.conf.classNames.panel,"panel"),this.__refactorClass(e,this.conf.classNames.nopanel,"nopanel"),this.__refactorClass(e,this.conf.classNames.vertical,"vertical"),this.__refactorClass(e,this.conf.classNames.inset,"inset"),e.filter("."+s.inset).addClass(s.nopanel),e.hasClass(s.nopanel))return!1;var t=e.hasClass(s.vertical)||!this.opts.slidingSubmenus;e.removeClass(s.vertical);var n=e.attr("id")||this.__getUniqueId();e.removeAttr("id"),e.is("ul, ol")&&(e.wrap("<div />"),e=e.parent()),e.addClass(s.panel+" "+s.hidden).attr("id",n);var i=e.parent("li");return t?e.add(i).addClass(s.vertical):e.appendTo(this.$pnls),i.length&&(i.data(a.child,e),e.data(a.parent,i)),this.trigger("initPanel:after",e),e},_initNavbar:function(t){if(this.trigger("initNavbar:before",t),!t.children("."+s.navbar).length){var i=t.data(a.parent),r=e('<div class="'+s.navbar+'" />'),o=e[n].i18n(this.opts.navbar.title),l="";if(i&&i.length){if(i.hasClass(s.vertical))return;if(i.parent().is("."+s.listview))var d=i.children("a, span").not("."+s.next);else var d=i.closest("."+s.panel).find('a[href="#'+t.attr("id")+'"]');d=d.first(),i=d.closest("."+s.panel);var c=i.attr("id");switch(o=d.text(),this.opts.navbar.titleLink){case"anchor":l=d.attr("href");break;case"parent":l="#"+c}r.append('<a class="'+s.btn+" "+s.prev+'" href="#'+c+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&t.addClass(s.hasnavbar),r.append('<a class="'+s.title+'"'+(l.length?' href="'+l+'"':"")+">"+o+"</a>").prependTo(t),this.trigger("initNavbar:after",t)}},_initListview:function(t){this.trigger("initListview:before",t);var n=this.__childAddBack(t,"ul, ol");this.__refactorClass(n,this.conf.classNames.nolistview,"nolistview"),n.filter("."+this.conf.classNames.inset).addClass(s.nolistview);var i=n.not("."+s.nolistview).addClass(s.listview).children();this.__refactorClass(i,this.conf.classNames.selected,"selected"),this.__refactorClass(i,this.conf.classNames.divider,"divider"),this.__refactorClass(i,this.conf.classNames.spacer,"spacer");var r=t.data(a.parent);if(r&&r.parent().is("."+s.listview)&&!r.children("."+s.next).length){var o=r.children("a, span").first(),l=e('<a class="'+s.next+'" href="#'+t.attr("id")+'" />').insertBefore(o);o.is("span")&&l.addClass(s.fullsubopen)}this.trigger("initListview:after",t)},_initOpened:function(){this.trigger("initOpened:before");var e=this.$pnls.find("."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected),t=e.length?e.closest("."+s.panel):this.$pnls.children("."+s.panel).first();this.openPanel(t,!1),this.trigger("initOpened:after")},_initAnchors:function(){var t=this;o.$body.on(r.click+"-oncanvas","a[href]",function(i){var a=e(this),r=!1,o=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,o)){r=!0;break}var d=a.attr("href");if(!r&&o&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+s.panel)&&(r=!0,t[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(r&&i.preventDefault(),!r&&o&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(i.target).parent());var f=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));f&&i.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,f)&&t.opts.offCanvas&&"function"==typeof t.close&&t.close()}})},_initMatchMedia:function(){var e=this;this._fireMatchMedia(),o.$wndw.on(r.resize,function(t){e._fireMatchMedia()})},_fireMatchMedia:function(){for(var e in this.mtch)for(var t=window.matchMedia&&window.matchMedia(e).matches?"yes":"no",n=0;n<this.mtch[e].length;n++)this.mtch[e][n][t].call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return this.conf.clone&&e&&e.length&&(e=s.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var i=this;n[i]=function(){var e=t[i].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(s[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__childAddBack:function(e,t){return e.children(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+s.divider).not("."+s.hidden)},__filterListItemAnchors:function(e){return this.__filterListItems(e).children("a").not("."+s.next)},__transitionend:function(e,t,n){var i=!1,s=function(n){"undefined"!=typeof n&&n.target!=e[0]||(i||(e.off(r.transitionend),e.off(r.webkitTransitionEnd),t.call(e[0])),i=!0)};e.on(r.transitionend,s),e.on(r.webkitTransitionEnd,s),setTimeout(s,1.1*n)},__getUniqueId:function(){return s.mm(e[n].uniqueId++)}},e.fn[n]=function(i,s){t(),i=e.extend(!0,{},e[n].defaults,i),s=e.extend(!0,{},e[n].configuration,s);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var r=new e[n](t,i,s);r.$menu.data(n,r.__api()),a=a.add(r.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransitions||Modernizr.csstransitions}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,r,o}}(jQuery);
/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",o="offCanvas";t[e].addons[o]={setup:function(){if(this.opts[o]){var i=this,s=this.opts[o],a=this.conf[o];r=t[e].glbl,this._api=t.merge(this._api,["open","close","setPage"]),"object"!=typeof s&&(s={}),"top"!=s.position&&"bottom"!=s.position||(s.zposition="front"),s=this.opts[o]=t.extend(!0,{},t[e].defaults[o],s),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),this.vars.opened=!1;var p=[n.offcanvas];"left"!=s.position&&p.push(n.mm(s.position)),"back"!=s.zposition&&p.push(n.mm(s.zposition)),t[e].support.csstransforms||p.push(n["no-csstransforms"]),t[e].support.csstransforms3d||p.push(n["no-csstransforms3d"]),this.bind("initMenu:after",function(){var t=this;this.setPage(r.$page),this._initBlocker(),this["_initWindow_"+o](),this.$menu.addClass(p.join(" ")).parent("."+n.wrapper).removeClass(n.wrapper),this.$menu[a.menuInsertMethod](a.menuInsertSelector);var e=window.location.hash;if(e){var i=this._getOriginalMenuId();i&&i==e.slice(1)&&setTimeout(function(){t.open()},1e3)}}),this.bind("initExtensions:after",function(){for(var t=[n.mm("widescreen"),n.mm("iconbar")],e=0;e<t.length;e++)for(var o in this.opts.extensions)if(this.opts.extensions[o].indexOf(t[e])>-1){!function(e,o){i.matchMedia(e,function(){r.$html.addClass(t[o])},function(){r.$html.removeClass(t[o])})}(o,e);break}}),this.bind("open:start:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){this.__sr_aria(this.$menu,"hidden",!0)})}},add:function(){n=t[e]._c,i=t[e]._d,s=t[e]._e,n.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),i.add("style")},clickAnchor:function(t,e){var i=this;if(this.opts[o]){var s=this._getOriginalMenuId();if(s&&t.is('[href="#'+s+'"]')){if(e)return!0;var a=t.closest("."+n.menu);if(a.length){var p=a.data("mmenu");if(p&&p.close)return p.close(),i.__transitionend(a,function(){i.open()},i.conf.transitionDuration),!0}return this.open(),!0}if(r.$page)return s=r.$page.first().attr("id"),s&&t.is('[href="#'+s+'"]')?(this.close(),!0):void 0}}},t[e].defaults[o]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},t[e].configuration[o]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuInsertMethod:"prependTo",menuInsertSelector:"body"},t[e].prototype.open=function(){if(this.trigger("open:before"),!this.vars.opened){var t=this;this._openSetup(),setTimeout(function(){t._openFinish()},this.conf.openingInterval),this.trigger("open:after")}},t[e].prototype._openSetup=function(){var e=this,a=this.opts[o];this.closeAllOthers(),r.$page.each(function(){t(this).data(i.style,t(this).attr("style")||"")}),r.$wndw.trigger(s.resize+"-"+o,[!0]);var p=[n.opened];a.blockUI&&p.push(n.blocking),"modal"==a.blockUI&&p.push(n.modal),a.moveBackground&&p.push(n.background),"left"!=a.position&&p.push(n.mm(this.opts[o].position)),"back"!=a.zposition&&p.push(n.mm(this.opts[o].zposition)),r.$html.addClass(p.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(n.opened)},t[e].prototype._openFinish=function(){var t=this;this.__transitionend(r.$page.first(),function(){t.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),r.$html.addClass(n.opening)},t[e].prototype.close=function(){if(this.trigger("close:before"),this.vars.opened){var e=this;this.__transitionend(r.$page.first(),function(){e.$menu.removeClass(n.opened);var s=[n.opened,n.blocking,n.modal,n.background,n.mm(e.opts[o].position),n.mm(e.opts[o].zposition)];r.$html.removeClass(s.join(" ")),r.$page.each(function(){t(this).attr("style",t(this).data(i.style))}),e.vars.opened=!1,e.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),r.$html.removeClass(n.opening),this.trigger("close:after")}},t[e].prototype.closeAllOthers=function(){r.$body.find("."+n.menu+"."+n.offcanvas).not(this.$menu).each(function(){var o=t(this).data(e);o&&o.close&&o.close()})},t[e].prototype.setPage=function(e){this.trigger("setPage:before",e);var i=this,s=this.conf[o];e&&e.length||(e=r.$body.find(s.pageSelector),s.noPageSelector.length&&(e=e.not(s.noPageSelector.join(", "))),e.length>1&&s.wrapPageIfNeeded&&(e=e.wrapAll("<"+this.conf[o].pageNodetype+" />").parent())),e.each(function(){t(this).attr("id",t(this).attr("id")||i.__getUniqueId())}),e.addClass(n.page+" "+n.slideout),r.$page=e,this.trigger("setPage:after",e)},t[e].prototype["_initWindow_"+o]=function(){r.$wndw.off(s.keydown+"-"+o).on(s.keydown+"-"+o,function(t){if(r.$html.hasClass(n.opened)&&9==t.keyCode)return t.preventDefault(),!1});var t=0;r.$wndw.off(s.resize+"-"+o).on(s.resize+"-"+o,function(e,o){if(1==r.$page.length&&(o||r.$html.hasClass(n.opened))){var i=r.$wndw.height();(o||i!=t)&&(t=i,r.$page.css("minHeight",i))}})},t[e].prototype._initBlocker=function(){var e=this;this.opts[o].blockUI&&(r.$blck||(r.$blck=t('<div id="'+n.blocker+'" class="'+n.slideout+'" />')),r.$blck.appendTo(r.$body).off(s.touchstart+"-"+o+" "+s.touchmove+"-"+o).on(s.touchstart+"-"+o+" "+s.touchmove+"-"+o,function(t){t.preventDefault(),t.stopPropagation(),r.$blck.trigger(s.mousedown+"-"+o)}).off(s.mousedown+"-"+o).on(s.mousedown+"-"+o,function(t){t.preventDefault(),r.$html.hasClass(n.modal)||(e.closeAllOthers(),e.close())}))};var n,i,s,r}(jQuery);
/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(o){var t="mmenu",n="scrollBugFix";o[t].addons[n]={setup:function(){var s=this.opts[n];this.conf[n];r=o[t].glbl,o[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof s&&(s={fix:s}),"object"!=typeof s&&(s={}),s=this.opts[n]=o.extend(!0,{},o[t].defaults[n],s),s.fix&&(this.bind("open:start",function(){this.$pnls.children("."+e.opened).scrollTop(0)}),this.bind("initMenu:after",function(){this["_initWindow_"+n]()})))},add:function(){e=o[t]._c,s=o[t]._d,i=o[t]._e},clickAnchor:function(o,t){}},o[t].defaults[n]={fix:!0},o[t].prototype["_initWindow_"+n]=function(){var t=this;r.$docu.off(i.touchmove+"-"+n).on(i.touchmove+"-"+n,function(o){r.$html.hasClass(e.opened)&&o.preventDefault()});var s=!1;r.$body.off(i.touchstart+"-"+n).on(i.touchstart+"-"+n,"."+e.panels+"> ."+e.panel,function(o){r.$html.hasClass(e.opened)&&(s||(s=!0,0===o.currentTarget.scrollTop?o.currentTarget.scrollTop=1:o.currentTarget.scrollHeight===o.currentTarget.scrollTop+o.currentTarget.offsetHeight&&(o.currentTarget.scrollTop-=1),s=!1))}).off(i.touchmove+"-"+n).on(i.touchmove+"-"+n,"."+e.panels+"> ."+e.panel,function(t){r.$html.hasClass(e.opened)&&o(this)[0].scrollHeight>o(this).innerHeight()&&t.stopPropagation()}),r.$wndw.off(i.orientationchange+"-"+n).on(i.orientationchange+"-"+n,function(){t.$pnls.children("."+e.opened).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})};var e,s,i,r}(jQuery);
/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(i){var t="mmenu",n="screenReader";i[t].addons[n]={setup:function(){var a=this,h=this.opts[n],o=this.conf[n];s=i[t].glbl,"boolean"==typeof h&&(h={aria:h,text:h}),"object"!=typeof h&&(h={}),h=this.opts[n]=i.extend(!0,{},i[t].defaults[n],h),h.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+e.listview).children().each(function(){a.__sr_aria(i(this),"hidden",i(this).is("."+e.hidden))})}),this.bind("openPanel:start",function(i){var t=this.$menu.find("."+e.panel).not(i).not(i.parents("."+e.panel)),n=i.add(i.find("."+e.vertical+"."+e.opened).children("."+e.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(i){this.__sr_aria(i,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+e.prev+", ."+e.next).each(function(){a.__sr_aria(i(this),"owns",i(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(i){var t=i.children("."+e.navbar);this.__sr_aria(t,"hidden",!i.hasClass(e.hasnavbar))}),h.text&&(this.bind("initlistview:after",function(i){var t=i.find("."+e.listview).find("."+e.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(i){var t=i.children("."+e.navbar),n=!!t.children("."+e.prev).length;this.__sr_aria(t.children("."+e.title),"hidden",n)}))),h.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var r=n.children("."+e.navbar),a=r.children("."+e.title).text(),s=i[t].i18n(o.text.closeSubmenu);a&&(s+=" ("+a+")"),r.children("."+e.prev).html(this.__sr_text(s))}),this.bind("initListview:after",function(n){var s=n.data(r.parent);if(s&&s.length){var h=s.children("."+e.next),d=h.nextAll("span, a").first().text(),f=i[t].i18n(o.text[h.parent().is("."+e.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(f+=" ("+d+")"),h.html(a.__sr_text(f))}}))},add:function(){e=i[t]._c,r=i[t]._d,a=i[t]._e,e.add("sronly")},clickAnchor:function(i,t){}},i[t].defaults[n]={aria:!0,text:!0},i[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},i[t].prototype.__sr_aria=function(i,t,n){i.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},i[t].prototype.__sr_text=function(i){return'<span class="'+e.sronly+'">'+i+"</span>"};var e,r,a,s}(jQuery);
/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(a){var n="mmenu",t="navbars";a[n].addons[t]={setup:function(){var r=this,s=this.opts[t],o=this.conf[t];if(i=a[n].glbl,"undefined"!=typeof s){s instanceof Array||(s=[s]);var d={},c={};s.length&&(a.each(s,function(i){var h=s[i];"boolean"==typeof h&&h&&(h={}),"object"!=typeof h&&(h={}),"undefined"==typeof h.content&&(h.content=["prev","title"]),h.content instanceof Array||(h.content=[h.content]),h=a.extend(!0,{},r.opts.navbar,h);var l=a('<div class="'+e.navbar+'" />'),f=h.height;"number"!=typeof f&&(f=1),f=Math.min(4,Math.max(1,f)),l.addClass(e.navbar+"-size-"+f);var v=h.position;"bottom"!=v&&(v="top"),d[v]||(d[v]=0),d[v]+=f,c[v]||(c[v]=a('<div class="'+e.navbars+"-"+v+'" />')),c[v].append(l);for(var b=0,p=0,u=h.content.length;p<u;p++){var m=a[n].addons[t][h.content[p]]||!1;m?b+=m.call(r,l,h,o):(m=h.content[p],m instanceof a||(m=a(h.content[p])),l.append(m))}b+=Math.ceil(l.children().not("."+e.btn).length/f),b>1&&l.addClass(e.navbar+"-content-"+b),l.children("."+e.btn).length&&l.addClass(e.hasbtns)}),this.bind("initMenu:after",function(){for(var a in d)this.$menu.addClass(e.hasnavbar+"-"+a+"-"+d[a]),this.$menu["bottom"==a?"append":"prepend"](c[a])}))}},add:function(){e=a[n]._c,r=a[n]._d,s=a[n]._e,e.add("navbars close hasbtns")},clickAnchor:function(a,n){}},a[n].configuration[t]={breadcrumbSeparator:"/"},a[n].configuration.classNames[t]={};var e,r,s,i}(jQuery),/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(a){var n="mmenu",t="navbars",e="breadcrumbs";a[n].addons[t][e]=function(t,e,r){var s=this,i=a[n]._c,o=a[n]._d;i.add("breadcrumbs separator");var d=a('<span class="'+i.breadcrumbs+'" />').appendTo(t);return this.bind("initNavbar:after",function(n){n.removeClass(i.hasnavbar);for(var t=[],e=a('<span class="'+i.breadcrumbs+'"></span>'),s=n,d=!0;s&&s.length;){if(s.is("."+i.panel)||(s=s.closest("."+i.panel)),!s.hasClass(i.vertical)){var c=s.children("."+i.navbar).children("."+i.title).text();t.unshift(d?"<span>"+c+"</span>":'<a href="#'+s.attr("id")+'">'+c+"</a>"),d=!1}s=s.data(o.parent)}e.append(t.join('<span class="'+i.separator+'">'+r.breadcrumbSeparator+"</span>")).appendTo(n.children("."+i.navbar))}),this.bind("openPanel:start",function(a){d.html(a.children("."+i.navbar).children("."+i.breadcrumbs).html()||"")}),this.bind("initNavbar:after:sr-aria",function(n){n.children("."+i.navbar).children("."+i.breadcrumbs).children("a").each(function(){s.__sr_aria(a(this),"owns",a(this).attr("href").slice(1))})}),0}}(jQuery),/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(a){var n="mmenu",t="navbars",e="close";a[n].addons[t][e]=function(t,e){var r=a[n]._c,s=(a[n].glbl,a('<a class="'+r.close+" "+r.btn+'" href="#" />').appendTo(t));return this.bind("setPage:after",function(a){s.attr("href","#"+a.attr("id"))}),this.bind("setPage:after:sr-text",function(t){s.html(this.__sr_text(a[n].i18n(this.conf.screenReader.text.closeMenu))),this.__sr_aria(s,"owns",s.attr("href").slice(1))}),-1}}(jQuery),/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(a){var n="mmenu",t="navbars",e="next";a[n].addons[t][e]=function(e,r){var s,i,o,d=a[n]._c,c=a('<a class="'+d.next+" "+d.btn+'" href="#" />').appendTo(e);return this.bind("openPanel:start",function(a){s=a.find("."+this.conf.classNames[t].panelNext),i=s.attr("href"),o=s.html(),i?c.attr("href",i):c.removeAttr("href"),c[i||o?"removeClass":"addClass"](d.hidden),c.html(o)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(c,"hidden",c.hasClass(d.hidden)),this.__sr_aria(c,"owns",(c.attr("href")||"").slice(1))}),-1},a[n].configuration.classNames[t].panelNext="Next"}(jQuery),/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(a){var n="mmenu",t="navbars",e="prev";a[n].addons[t][e]=function(e,r){var s=a[n]._c,i=a('<a class="'+s.prev+" "+s.btn+'" href="#" />').appendTo(e);this.bind("initNavbar:after",function(a){a.removeClass(s.hasnavbar)});var o,d,c;return this.bind("openPanel:start",function(a){a.hasClass(s.vertical)||(o=a.find("."+this.conf.classNames[t].panelPrev),o.length||(o=a.children("."+s.navbar).children("."+s.prev)),d=o.attr("href"),c=o.html(),d?i.attr("href",d):i.removeAttr("href"),i[d||c?"removeClass":"addClass"](s.hidden),i.html(c))}),this.bind("initNavbar:after:sr-aria",function(a){var n=a.children("."+s.navbar);this.__sr_aria(n,"hidden",!0)}),this.bind("openPanel:start:sr-aria",function(a){this.__sr_aria(i,"hidden",i.hasClass(s.hidden)),this.__sr_aria(i,"owns",(i.attr("href")||"").slice(1))}),-1},a[n].configuration.classNames[t].panelPrev="Prev"}(jQuery),/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(a){var n="mmenu",t="navbars",e="searchfield";a[n].addons[t][e]=function(t,e){var r=a[n]._c,s=a('<div class="'+r.search+'" />').appendTo(t);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=s,0}}(jQuery),/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(a){var n="mmenu",t="navbars",e="title";a[n].addons[t][e]=function(e,r){var s,i,o,d=a[n]._c,c=a('<a class="'+d.title+'" />').appendTo(e);this.bind("openPanel:start",function(a){a.hasClass(d.vertical)||(o=a.find("."+this.conf.classNames[t].panelTitle),o.length||(o=a.children("."+d.navbar).children("."+d.title)),s=o.attr("href"),i=o.html()||r.title,s?c.attr("href",s):c.removeAttr("href"),c[s||i?"removeClass":"addClass"](d.hidden),c.html(i))});var h;return this.bind("openPanel:start:sr-aria",function(a){if(this.opts.screenReader.text&&(h||(h=this.$menu.children("."+d.navbars+"-top, ."+d.navbars+"-bottom").children("."+d.navbar).children("."+d.prev)),h.length)){var n=!0;"parent"==this.opts.navbar.titleLink&&(n=!h.hasClass(d.hidden)),this.__sr_aria(c,"hidden",n)}}),0},a[n].configuration.classNames[t].panelTitle="Title"}(jQuery);
/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(s){var t="mmenu",e="fixedElements";s[t].addons[e]={setup:function(){if(this.opts.offCanvas){var n=this.opts[e],o=this.conf[e];c=s[t].glbl,n=this.opts[e]=s.extend(!0,{},s[t].defaults[e],n);var a=function(t){var n=this.conf.classNames[e].fixed,a=t.find("."+n);this.__refactorClass(a,n,"slideout"),a[o.elemInsertMethod](o.elemInsertSelector);var f=this.conf.classNames[e].sticky,d=t.find("."+f);this.__refactorClass(d,f,"sticky"),d=t.find("."+i.sticky),d.length&&(this.bind("open:before",function(){var t=c.$wndw.scrollTop();d.each(function(){s(this).css("top",parseInt(s(this).css("top"),10)+t)})}),this.bind("close:finish",function(){d.css("top","")}))};this.bind("setPage:after",a)}},add:function(){i=s[t]._c,n=s[t]._d,o=s[t]._e,i.add("sticky")},clickAnchor:function(s,t){}},s[t].configuration[e]={elemInsertMethod:"appendTo",elemInsertSelector:"body"},s[t].configuration.classNames[e]={fixed:"Fixed",sticky:"Sticky"};var i,n,o,c}(jQuery);
/*
 * Olark wrapper for jQuery mmenu
 * Include this file after including the jquery.mmenu plugin for default Olark support.
 */
!function(n){var o="mmenu";n[o].configuration.offCanvas.noPageSelector.push("#olark")}(jQuery);
return true;
}));
