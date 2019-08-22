import API from 'components/js/api'

import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

import Index from '../components/jsx/index/Index'
import Page from '../components/jsx/Page'

export default class ClientIndex extends React.Component {
  state = {}
  getGridFromDatabase = async () => {
    const layouts = await API.get('/grids/index/layouts').then((r) => r.data)
    const cells = await API.get('/grids/index/cells').then((r) => r.data)
    return { layouts, cells }
  }
  componentDidMount() {
    this.getGridFromDatabase().then(({ cells, layouts }) => {
      this.setState({ cells, layouts, layoutsLoaded: true })
    })
  }
  componentDidUpdate(prevProps) {}
  render = () =>
    this.state.cells ? (
      <Page
        headingBackgroundImage={this.props.headingBackgroundImage}
        headingSelected={this.props.headingSelected}
        noHeading
        selectHeading={() => this.props.selectHeading(this.props.pageName)}
      >
        <Index
          layouts={this.state.layouts}
          cells={this.state.cells}
          ResponsiveGridLayout={WidthProvider(Responsive)}
        />
      </Page>
    ) : (
      <div />
    )
}
