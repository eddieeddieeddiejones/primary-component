

class Tabs {
  constructor (options) {
    let defaultOptions = {
      element: '',
      navSelector: '[data-role="tabs-nav"]',
      panesSelector: '[data-role="tabs-panes"]',
      activeClassName: 'active'
    }
    this.options = Object.assign(defaultOptions, options)
    this.checkOptions().bindEvents().setDefaultTab()
  }
  checkOptions () {
    if (!this.options.element) {
      throw new Error('element is required')
    }
    return this
  }
  bindEvents () {
    dom.on(this.options.element, 'click', `${this.options.navSelector}>li`, (e, el) => {

      var parent = el.parentNode
      var children = parent.children
      dom.toggleClass(el, 'active')

      var index = dom.index(el)

      var panes = document.querySelectorAll(this.options.panesSelector + ' > li')
      dom.toggleClass(panes[index], 'active');
    })
    return this
  }
  setDefaultTab () {
    document.querySelectorAll(`${this.options.navSelector}>li`)[0].click()
  }
}