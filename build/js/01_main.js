const body=$("body"),navToggle=$('[data-element~="navToggle"]'),subNavToggle=$('[data-element~="subNavToggle"]'),toggleNav=()=>{body.hasClass("is-nav-open")?body.removeClass("is-nav-open"):body.addClass("is-nav-open")},handleScroll=()=>{$(window).scrollTop()>0?body.addClass("is-scrolled"):body.removeClass("is-scrolled")};navToggle.on("click",toggleNav),$(window).on("scroll",handleScroll),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=document.querySelector(this.getAttribute("href"));const o=document.querySelector('[data-element="header"]');if(t){let e=o.offsetHeight+30,n=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:n,behavior:"smooth"})}}))}),$(".form__input--tel").each((function(){var e;$(this).on("input focus blur keydown",(function(t){t.keyCode&&(e=t.keyCode),this.selectionStart<3&&t.preventDefault();var o="+7 (___) ___ __ __",n=0,l=o.replace(/\D/g,""),a=$(this).val().replace(/\D/g,""),s=o.replace(/[_\d]/g,(function(e){return n<a.length?a.charAt(n++):l.charAt(n++)}));-1!=(n=s.indexOf("_"))&&(n<5&&(n=3),s=s.slice(0,n));var i=o.substr(0,$(this).val().length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test($(this).val())||$(this).val().length<5||e>47&&e<58)&&$(this).val(s),"blur"==t.type&&$(this).val().length<5&&$(this).val("")}))})),$(document).on("click",'[data-elements~="tabsBtn"]',(function(e){let t=$(this).data("tab");$(this).closest('[data-elements~="tabs"]').find("[data-tab]").each((function(){$(this).toggleClass("is-active",t===$(this).data("tab"))}))})),$(document).ready((function(){$(".faq").length>0&&($("details").first().attr("open",!0),$("details").on("click",(function(e){let t=$(this);t.attr("open")||$("details").not(t).removeAttr("open")})))})),$(document).ready((function(){var e=$(".reviews__slider");e.slick({dots:!0,infinite:!0,speed:500,slidesToShow:5,arrows:!1,centerMode:!0,variableWidth:!0,focusOnSelect:!0,centerPadding:"10px",autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1e3,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:1}}]}),$(".prev").on("click",(function(){e.slick("slickPrev")})),$(".next").on("click",(function(){e.slick("slickNext")}))})),$(document).ready((function(){$(".footer__up").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)}))}));
//# sourceMappingURL=../sourcemaps/01_main.js.map
