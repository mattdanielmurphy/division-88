import React from 'react'
import ToggleButton from '../../ToggleButton'
import NonVideoOptions from '../NonVideoOptions'
import ImageUploader from './ImageUploader'

export default class CellEditor extends React.Component {
  state = {}
  getCell = async (index) => {
    return await this.props.AdminAPI.get(`/grids/index/cells/${index}`).then(
      (r) => r.data,
    )
  }
  updateCell = async (index, cell) => {
    const result = await this.props.AdminAPI.post(
      `/grids/index/cells/${index}`,
      cell,
    ).then((r) => {
      return r.data
    })
    return result
  }

  handleSubmit = async (e) => {
    if (e) e.preventDefault()
    // just submit this modified value
    const result = await this.props.AdminAPI.post(
      `/grids/index/cells/${this.state.index}`,
      this.state.cell,
    ).then((r) => {
      return r.data
    })
    return result
  }
  handleKeyPress = (e) => {
    // if (e.key !== 'Enter') return
    // this.handleSubmit(e)
  }

  updateCellValue = async (path, value) => {
    return await new Promise((resolve) => {
      const cell = Object.assign({}, this.state.cell)

      function set(path, value) {
        let schema = cell // a moving reference to internal objects within obj
        let pList = path.split('.')
        let length = pList.length
        for (let i = 0; i < length - 1; i++) {
          let elem = pList[i]
          if (!schema[elem]) schema[elem] = {}
          schema = schema[elem]
        }

        schema[pList[length - 1]] = value
        console.log(path, value)
      }
      set(path, value)
      let updatedCell = cell
      const cells = this.state.cells.slice()
      cells[this.state.index] = updatedCell
      this.setState({ cells, cell }, () => resolve())
      this.props.updateGrid({ cells })
    })
  }
  handleInputChange = async ({ e, path, value, colorChange }) => {
    if (colorChange) this.setState({ colorChange: true })
    if (e) {
      path = e.target.id
      value = e.target.value
    }

    await this.updateCellValue(path, value)
    this.handleSubmit()
  }
  getCellsFromDatabase = async () => {
    return await this.props.AdminAPI.get('/grids/index/cells').then(
      (r) => r.data,
    )
  }
  componentDidMount = async () => {
    const cell = await this.getCell(this.props.index)
    const cells = await this.getCellsFromDatabase()
    this.setState({
      index: this.props.index,
      cell,
      cells,
      cellFromDatabase: cell,
    })
    window.onbeforeunload = null
    this.setKeyBindings()
  }
  changeIndex = async (index) => {
    this.props.selectCell(index)
    const cell = await this.getCell(index)
    this.setState({
      index,
      cell,
      cellFromDatabase: cell,
    })
  }
  validateCell() {
    const cell = this.state.cell
    const valid = cell.video ? cell.videoSrc : cell.imgSrc
    if (valid) {
      this.setState({ error: undefined })
    } else {
      this.setState({
        error: 'Error: You must provide at least a background image',
      })
    }
    return valid
  }
  setKeyBindings = () => {
    document.onkeypress = (e) => {
      if (
        e.target.hasAttribute('data-slate-editor') ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA'
      )
        return
      else if (e.key === 's') this.handleSubmit()
    }
  }
  newCell = async () => {
    console.log(
      'creating new cell. state of layouts before anything happens:',
      this.state.layouts,
    )
    const result = await this.props.AdminAPI.get('/grids/index/layouts')
    console.log(
      'creating new cell. db layouts before anything happens:',
      result,
    )

    if (this.validateCell()) {
      // const layouts = await this.props.AdminAPI.get('/grids/index/layouts').then((r) => r.data)
      const obj = {
        newLayouts: {
          desktop: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
          tablet: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
          mobile: { w: 12, h: 4, x: 0, minW: 4, minH: 2 },
        },
        newCell: this.state.cell,
      }
      this.props.AdminAPI.post('/grids/index/layouts/newCell', obj).then(
        (r) => {
          const { layouts, cells } = r.data
          console.log(layouts.mobile)
          this.props.updateGrid({ layouts, cells })
          this.changeIndex(r.data.index)
        },
      )
    }
  }
  deleteCell() {
    console.log('del cell', this.state.index)
    this.props.AdminAPI.post(
      `/grids/index/cells/${this.state.index}/delete`,
    ).then((r) => {
      const { layouts, cells } = r.data
      this.props.updateGrid({ layouts, cells })

      // set index to cell that's now in its place or one previous
      if (cells[this.state.index]) {
        this.changeIndex(this.state.index)
      } else {
        const newIndex = this.state.index ? this.state.index - 1 : 0
        this.changeIndex(newIndex)
      }
    })
  }
  toggleVideoMode = () => {
    this.handleInputChange({
      path: 'video',
      value: !this.state.cell.video,
      colorChange: true,
    })
  }
  componentDidUpdate = async (prevProps) => {
    // update index when a new cell is selected
    if (this.props.index !== prevProps.index) this.changeIndex(this.props.index)
  }
  render = () =>
    this.state.cell ? (
      <div id='property-editor'>
        <div className='video-toggle'>
          <ToggleButton
            enabled={this.state.cell.video}
            toggle={this.toggleVideoMode}
          >
            Toggle Video
          </ToggleButton>
        </div>

        <br />

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className='property-input'>
            <label>image</label>
            <ImageUploader
              AdminAPI={this.props.AdminAPI}
              image={this.state.cell.imgSrc}
              setImage={(url) =>
                this.handleInputChange({ path: 'imgSrc', value: url })
              }
            />
          </div>
          <br />
          {this.state.cell.video ? (
            <div className='property-input'>
              <label>video link:</label>
              <input
                onKeyPress={(e) => this.handleKeyPress(e)}
                onChange={(e) => this.handleInputChange({ e })}
                type='text'
                id='videoSrc'
                value={this.state.cell.videoSrc || ''}
              />
            </div>
          ) : (
            <NonVideoOptions
              handleKeyPress={(e) => this.handleKeyPress(e)}
              handleInputChange={(e) => this.handleInputChange(e)}
              state={this.state}
              refreshGrid={() => this.props.refreshGrid()}
            />
          )}
          <br />
          {this.state.error}
        </form>
        <div id='create-new'>
          <button onClick={() => this.newCell()}>Submit as new cell</button>
        </div>
        <button
          onClick={() =>
            window.confirm(
              "Are you sure you want to delete this cell? (There's no going back!)",
            ) && this.deleteCell()
          }
        >
          Delete cell
        </button>
      </div>
    ) : (
      <div />
    )
}
