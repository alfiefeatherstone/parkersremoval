import { Component } from 'react'
import PropTypes from 'prop-types'

const childContextTypes = {
  setTitle: PropTypes.func,
}

export default () => {
  const context = {
    title: ''
  }

  class DocumentContextProvider extends Component {
    static childContextTypes = childContextTypes

    getChildContext() {
      return {
        setTitle: (title) => {
          context.title = title
        }
      }
    }

    render () {
      return this.props.children
    }

    get head () {
      return head
    }

    static getContext = () => context
  }

  return DocumentContextProvider
}

export const withDocumentContext = PageComponent => {

  class DocumentContext extends Component {
    static contextTypes = childContextTypes

    render() {
      return (
        <PageComponent {...this.props} {...this.context} />
      )
    }
  }

  return DocumentContext
}
