!function(name,path,ctx){
  var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('ProdPerfectKeen','https://d1vnucvopbiinv.cloudfront.net/keen-tracking.min.js',this);
ProdPerfectKeen.ready(function(){
  var client = new ProdPerfectKeen({
    projectId: '5adce3eac9e77c0001b895bd',
    writeKey: '0AD5C295946F8E8FE30167600BABBF7109AD0EEE4DAA1970771BA8FC73637C9758B7F4ED5E1AA64034C5B3B7E0C3FE7B9A273A455C11C203CC419238512402821EFB41FA87190840A3D68F271C282C5D50D4808BC0E68BC3252B2ADAF433285D',
    requestType: 'beacon',
    host: 'ti6jgi88s4.execute-api.us-west-2.amazonaws.com/Production'
  });
  client.extendEvents({
    visitor: {
      user_id: null
    }
  });
  var options = {
    ignoreDisabledFormFields: false,
    ignoreFormFieldTypes: ['password', 'email'],
    recordClicks: true,
    recordFormSubmits: false,
    recordInputChanges: true,
    recordPageViews: true,
    recordPageUnloads: true,
    recordScrollState: true
  };
  client.initAutoTracking(options);
  ProdPerfectKeen.utils.listener('*').on('keydown', function (e) {
    var key_type = e.key, acceptable_keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'End', 'Home', 'PageUp',
      'PageDown', ' ', 'Escape', 'Enter'];
    if (acceptable_keys.indexOf(key_type) === -1){
      return;
    }
    var props = {
      key_type: key_type
    };
    client.recordEvent('keyboard_shortcuts', props);
  });
  ProdPerfectKeen.utils.listener('form').on('submit', function (e) {
    var el = e.target;
    var serializerOptions = {
      disabled: options.ignoreDisabledFormFields,
      ignoreTypes: options.ignoreFormFieldTypes
    };
    var fields = ProdPerfectKeen.utils.serializeForm(el, serializerOptions);
    var keys = Object.keys(fields);
    for (var x = 0; x < keys.length; x++) {
      fields[keys[x]] = '---REDACTED---';
    }
    var props = {
      form: {
        action: el.action,
        fields: fields,
        method: el.method
      },
      element: ProdPerfectKeen.helpers.getDomNodeProfile(el),
      local_time_full: new Date(),
      page: {
        scroll_state: ProdPerfectKeen.helpers.getScrollState
      }
    };
    client.recordEvent('form_submissions', props);
  });
});
class Shipyard {
  constructor (el, subClass) {
    if (subClass) {
      this.els = []
      document.querySelectorAll(el).forEach((el) => {
        this.els.push(new subClass(el))
      })
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el)
    } else {
      this.el = el
    }
    return this
  }

  on (events, selector, callback) {
    if (typeof selector != 'string') callback = selector
    let objects = (typeof selector === 'string') ? this.find(selector) : [this]

    objects.forEach((obj) => {
      events.split(' ').forEach((eventName) => {
        obj.el.addEventListener(eventName, callback)
      })
    })
    return this
  }

  trigger () {
    let events = arguments[0]
    events.split(' ').forEach((eventName) => {
      this.el.dispatchEvent(
        new CustomEvent(eventName, { detail: arguments[1] })
      )
    })
    return this
  }

  find (selector) {
    let els = []
    this.el.querySelectorAll(selector).forEach((el) => {
      els.push(new Shipyard(el))
    })
    return els
  }

  filter (selector) {
    let els = this.els.filter(obj => obj.el == document.querySelector(selector))
    return els[0]
  }

  child (selector) {
    return this.el.querySelector(selector)
  }

  data (name) {
    return this.el.dataset[name]
  }

  html (value) {
    this.el.innerHTML = value
    return this
  }

  css (property, value) {
    if (value) {
      this.el.style[property] = value
    } else {
      return window.getComputedStyle(this.el).getPropertyValue(property)
    }
  }

  attr (name) {
    return this.el.getAttribute(name)
  }

  addClass(className) {
    this.el.classList.add(className)
    return this
  }

  removeClass(className) {
    this.el.classList.remove(className)
    return this
  }

  toggleClass(className, condition) {
    this.el.classList.toggle(className, condition)
    return this
  }
}
;
class Scroll extends Shipyard {
  constructor (el) {
    super(el)
    this.on('scroll resize', this.scroll).trigger('scroll')
  }

  scroll () {
    shipyard.toggleClass('scrolling', window.pageYOffset > 0)
    shipyard.toggleClass('scroll-top', window.pageYOffset <= 0)
    shipyard.toggleClass('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight)
  }
}
;
class Hamburger extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', this.toggle)
  }

  toggle (e) {
    e.preventDefault()
    shipyard.toggleClass('hamburger-button-clicked')
  }
}
;
class Alert extends Shipyard {
  constructor (el) {
    super(el)
    this.on('show', (e) => { this.show(e) })
    this.on('close', (e) => { this.close(e) })
    this.on('click', '[shipyard=alert-close]', (e) => { this.close(e) })

    // Initiate the Alert Timer if it exists.
    this.timer = this.child('.alert-timer')
    if (this.timer) this.timer = new AlertTimer(this.timer, this)
  }

  options(options) {
    this.on('afterClose', options.afterClose)
  }

  show (e) {
    this.options(e.detail)
    this.removeClass('alert-closed')
    if (this.timer) this.timer.trigger('start')
  }

  close (e) {
    e.preventDefault()
    this.addClass('alert-closed')
    this.trigger('afterClose')
  }
}
;
class AlertTimer extends Shipyard {
  constructor (el, alert) {
    super(el)
    this.alert = alert
    this.duration = this.data('duration')
    if (this.duration) this.css('animation-duration', `${this.duration}s`)
    this.on('start', () => { this.start() })
  }

  start () {
    setTimeout(() => { this.end() }, this.duration * 1000)
  }

  end () {
    this.alert.trigger('close')
  }
}
;
class Accordion extends Shipyard {
  constructor (el) {
    super(el)
    this.on('toggle', () => { this.toggle() })
  }

  toggle () {
    this.toggleClass('accordion-closed')
  }
}
;
class AccordionTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.accordion = new Accordion(this.attr('accordion'))
    this.on('click', (e) => { this.accordion.trigger('toggle') })
  }
}
;
class Modal extends Shipyard {
  constructor (el) {
    super(el)
    this.on('open', () => { this.open() })
    this.on('click', '[modal-close]', () => { this.close() })
  }

  open () {
    this.removeClass('hidden')
    shipyard.addClass('modal-open')
  }

  close () {
    this.addClass('hidden')
    shipyard.removeClass('modal-open')
  }
}
;
class ModalTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.modal = new Modal(`[modal=${el.getAttribute('modal-trigger')}]`)
    this.on('click', (e) => { this.modal.trigger('open') })
  }
}
;










var shipyard = new Shipyard(document.documentElement)
shipyard.windowScroll = new Scroll(window)
shipyard.hamburger = new Shipyard('[shipyard=hamburger]', Hamburger)
shipyard.alerts = new Shipyard('[shipyard=alert]', Alert)
shipyard.modalTriggers = new Shipyard('[modal-trigger]', ModalTrigger)
shipyard.accordionTriggers = new Shipyard('[accordion]', AccordionTrigger)
;
class AlertTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.alert = shipyard.alerts.filter(this.attr('alert-trigger'))
    this.on('click', (e) => { this.click(e) })
  }

  click (e) {
    e.preventDefault()
    this.addClass('btn-loading')
    this.el.blur()
    this.alert.trigger('show', {
      afterClose: () => { this.reset() }
    })
  }

  reset () {
    this.removeClass('btn-loading')
  }
}
;
class ShadeColor extends Shipyard {
  constructor (el) {
    super(el)
    this.html(this.rgbToHex(this.css('background-color')))
  }

  rgbToHex (rgb) {
    if (rgb.match(/rgba/)) return '#';
    let hex = rgb.substr(4, rgb.indexOf(')') - 4).split(',').map(
                (color) => String('0' + parseInt(color).toString(16)).slice(-2)
              ).join('');
    return `#${hex}`;
  }
}
;





shipyard.alertTriggers = new Shipyard('[alert-trigger]', AlertTrigger)
shipyard.colors = new Shipyard('[shade-color]', ShadeColor)
