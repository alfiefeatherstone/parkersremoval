import { Component } from 'react'
import { withDocumentContext } from './DocumentContextProvider'

class Page extends Component {
  componentWillMount() {
    this.updatePageMeta()
  }

  updatePageMeta() {
    const {
      title,
      setTitle
    } = this.props

    setTitle(title)
  }

  render () {
    return (
      <section>
        {this.props.children}
      </section>
    )
  }
}


export default withDocumentContext(Page)
