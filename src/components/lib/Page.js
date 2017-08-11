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

export const funcA = () => 123
export const funcB = () => {
  const action = funcA
  return action()
}
