
const dom = {
  on: function (element, eventType, selector, fn) {
    element.addEventListener(eventType, function (e) {
      var el = e.target
      while (!el.matches(selector)) {
        if (el === element) {
          el = null
          break
        }
        el = el.parentNode
      }
      el && fn.call(el, e, el) 
    })
  },
  toggleClass (el, className) {
    dom.every(el, function (item) {
      item.classList.remove(className)
    })
    el.classList.add(className)
  },
  every (el, fn) {
    var parent = el.parentNode
    var children = parent.children
    for (var i = 0; i < children.length; i ++) {
      fn.call(children[i], children[i], i)
    }
  },
  index (el) {
    var index
    dom.every(el, function (item, i) {
      if (item === el) {
        index = i
      }
    })
    return index
  },
  create (string, children) {
    var node = document.createElement('div')
    node.innerHTML = string
    var firstChild = node.firstChild
    if (children) {
      dom.append(firstChild, children)
    }
    return firstChild
  },
  append (parent, children) {
    if (!children.length) {
      children = [children]
    }
    for (var i = 0; i < children.length; i ++) {
      parent.appendChild(children[i])
    }
  }
}