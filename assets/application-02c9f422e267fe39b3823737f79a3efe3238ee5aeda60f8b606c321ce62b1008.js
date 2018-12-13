class Shipyard{constructor(t,e){return e?(this.els=[],document.querySelectorAll(t).forEach(t=>{this.els.push(new e(t))})):this.el="string"==typeof t?document.querySelector(t):t,this}on(t,e,r){return"string"!=typeof e&&(r=e),("string"==typeof e?this.find(e):[this]).forEach(e=>{t.split(" ").forEach(t=>{e.el.addEventListener(t,r)})}),this}trigger(){return arguments[0].split(" ").forEach(t=>{this.el.dispatchEvent(new CustomEvent(t,{detail:arguments[1]}))}),this}find(t){let e=[];return this.el.querySelectorAll(t).forEach(t=>{e.push(new Shipyard(t))}),e}filter(t){return this.els.filter(e=>e.el==document.querySelector(t))[0]}child(t){return this.el.querySelector(t)}data(t){return this.el.dataset[t]}html(t){return this.el.innerHTML=t,this}css(t,e){if(!e)return window.getComputedStyle(this.el).getPropertyValue(t);this.el.style[t]=e}attr(t){return this.el.getAttribute(t)}addClass(t){return this.el.classList.add(t),this}removeClass(t){return this.el.classList.remove(t),this}toggleClass(t,e){return this.el.classList.toggle(t,e),this}}class Scroll extends Shipyard{constructor(t){super(t),this.on("scroll resize",this.scroll).trigger("scroll")}scroll(){shipyard.toggleClass("scrolling",window.pageYOffset>0),shipyard.toggleClass("scroll-top",window.pageYOffset<=0),shipyard.toggleClass("scroll-bottom",window.pageYOffset+window.innerHeight>=document.body.scrollHeight)}}class Hamburger extends Shipyard{constructor(t){super(t),this.on("click",this.toggle)}toggle(t){t.preventDefault(),shipyard.toggleClass("hamburger-button-clicked")}}class Alert extends Shipyard{constructor(t){super(t),this.on("show",t=>{this.show(t)}),this.on("close",t=>{this.close(t)}),this.on("click","[shipyard=alert-close]",t=>{this.close(t)}),this.timer=this.child(".alert-timer"),this.timer&&(this.timer=new AlertTimer(this.timer,this))}options(t){this.on("afterClose",t.afterClose)}show(t){this.options(t.detail),this.removeClass("alert-closed"),this.timer&&this.timer.trigger("start")}close(t){t.preventDefault(),this.addClass("alert-closed"),this.trigger("afterClose")}}class AlertTimer extends Shipyard{constructor(t,e){super(t),this.alert=e,this.duration=this.data("duration"),this.duration&&this.css("animation-duration",`${this.duration}s`),this.on("start",()=>{this.start()})}start(){setTimeout(()=>{this.end()},1e3*this.duration)}end(){this.alert.trigger("close")}}class Accordion extends Shipyard{constructor(t){super(t),this.on("toggle",()=>{this.toggle()})}toggle(){this.toggleClass("accordion-closed")}}class AccordionTrigger extends Shipyard{constructor(t){super(t),this.accordion=new Accordion(this.attr("accordion")),this.on("click",()=>{this.accordion.trigger("toggle")})}}class Modal extends Shipyard{constructor(t){super(t),this.on("open",()=>{this.open()}),this.on("click","[modal-close]",()=>{this.close()})}open(){this.removeClass("hidden"),shipyard.addClass("modal-open")}close(){this.addClass("hidden"),shipyard.removeClass("modal-open")}}class ModalTrigger extends Shipyard{constructor(t){super(t),this.modal=new Modal(`[modal=${t.getAttribute("modal-trigger")}]`),this.on("click",()=>{this.modal.trigger("open")})}}var shipyard=new Shipyard(document.documentElement);shipyard.windowScroll=new Scroll(window),shipyard.hamburger=new Shipyard("[shipyard=hamburger]",Hamburger),shipyard.alerts=new Shipyard("[shipyard=alert]",Alert),shipyard.modalTriggers=new Shipyard("[modal-trigger]",ModalTrigger),shipyard.accordionTriggers=new Shipyard("[accordion]",AccordionTrigger);class AlertTrigger extends Shipyard{constructor(t){super(t),this.alert=shipyard.alerts.filter(this.attr("alert-trigger")),this.on("click",t=>{this.click(t)})}click(t){t.preventDefault(),this.addClass("btn-loading"),this.el.blur(),this.alert.trigger("show",{afterClose:()=>{this.reset()}})}reset(){this.removeClass("btn-loading")}}class ShadeColor extends Shipyard{constructor(t){super(t),this.el.children[0].innerHTML=this.rgbToHex(this.css("background-color"))}rgbToHex(t){if(t.match(/rgba/))return"#";return`#${t.substr(4,t.indexOf(")")-4).split(",").map(t=>String("0"+parseInt(t).toString(16)).slice(-2)).join("")}`}}shipyard.alertTriggers=new Shipyard("[alert-trigger]",AlertTrigger),shipyard.colors=new Shipyard("[shade-color]",ShadeColor);