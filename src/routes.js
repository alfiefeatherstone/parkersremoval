import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
]
