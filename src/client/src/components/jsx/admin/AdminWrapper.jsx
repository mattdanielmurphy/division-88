import React from 'react'
import { Link } from 'react-router-dom'

export default class AdminWrapper extends React.Component {
  render = () => (
    <div>
      {this.props.changesMade && (
        <div className='changes-made'>
          <div className='wrapper'>
            <p>You've made some changes. Don't forget to publish them!</p>
            <div className='buttons'>
              <button className='primary'>Publish</button>
              <button>Revert</button>
            </div>
          </div>
        </div>
      )}
      {this.props.children}
    </div>
  )
}
