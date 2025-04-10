import { createRouteBundle } from 'redux-bundler'
import StatusPage from '../status/LoadableStatusPage.js'
import PinsPage from '../pins/LoadablePinsPage.js'
import WelcomePage from '../welcome/LoadableWelcomePage.js'
import BlankPage from '../blank/BlankPage.js'

export default createRouteBundle({
  /* '/explore': ExplorePageRenderer,
  '/explore*': ExplorePageRenderer, */
  /* '/files*': FilesPage,
  '/ipfs*': FilesPage,
  '/ipns*': FilesPage, */
  '/pins*': PinsPage,
  /* '/peers': PeersPage, */
  /* '/settings/analytics': AnalyticsPage,
  '/settings*': SettingsPage, */
  '/welcome': WelcomePage,
  '/blank': BlankPage,
  '/status*': StatusPage,
  '/': StatusPage,
  '': StatusPage
}, { routeInfoSelector: 'selectHash' })
