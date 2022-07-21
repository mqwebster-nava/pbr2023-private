//https://github.com/mauricevancooten/react-anchor-link-smooth-scroll/blob/master/src/anchor-link.js
//https://www.npmjs.com/package/react-anchor-link-smooth-scroll
import React, {Component} from 'react'


class AnchorLink extends Component {
  constructor(props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
  }
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }
  smoothScroll(e) {
    e.preventDefault()
    let offset = () => 20
    if (typeof this.props.offset !== 'undefined') {
      if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
        offset = this.props.offset
      } else {
        offset = () => parseInt(this.props.offset)
      }
    }
    const id = e.currentTarget.getAttribute('href').slice(1)
    const $anchor = document.getElementById(id);
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop - offset(),
      behavior: 'smooth'
    })
    if (this.props.onClick) {this.props.onClick(e)}
  }
  render() {
    const { offset, ...rest } = this.props;
    const  ariaLabel = this.props.ariaLabel ?? null
    return (
      <a {...rest} onClick={this.smoothScroll} aria-label={ariaLabel} />
    )
  }
}

export default AnchorLink;