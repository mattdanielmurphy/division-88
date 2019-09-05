import React from 'react'

export default class AdminControls extends React.Component {
  // handleScaleSelect(e) {
  //   const i = e.target.selectedIndex
  //   const scale = e.target.options[i].value
  //   this.props.setScale(scale)
  // }
  render = () => (
    <div id='change-view'>
      <div>
        <button
          className={this.props.view === 'mobile' ? 'active' : ''}
          onClick={() => this.props.setView('mobile')}
        >
          <strong>M</strong>obile
        </button>
        <button
          className={this.props.view === 'tablet' ? 'active' : ''}
          onClick={() => this.props.setView('tablet')}
        >
          <strong>T</strong>ablet
        </button>
        <button
          className={this.props.view === 'desktop' ? 'active' : ''}
          onClick={() => this.props.setView('desktop')}
        >
          <strong>D</strong>esktop
        </button>
        {/*<div className='change-scale'>*/}
        {/*	<label>Scale: </label>*/}
        {/*	<select onChange={(e) => this.handleScaleSelect(e)}>*/}
        {/*		<option value='1'>100%</option>*/}
        {/*		<option value='0.9'>90%</option>*/}
        {/*		<option value='0.8'>80%</option>*/}
        {/*		<option value='0.7'>70%</option>*/}
        {/*		<option value='0.6'>60%</option>*/}
        {/*		<option value='0.5'>50%</option>*/}
        {/*	</select>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
