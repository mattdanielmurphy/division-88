import { Link } from 'react-router-dom'

const React = require('react')

export default class extends React.Component {
  state = {
    fill: this.props.fill || '#242424',
    width: this.props.width || '70px',
  }
  render = () => (
    <div
      id='logo'
      className={this.props.className}
      onMouseOver={() => {
        console.log('mover')
        this.setState({ fill: this.props.hoverFill || '#343434' })
      }}
      onMouseLeave={() => this.setState({ fill: this.props.fill || '#242424' })}
    >
      <Link to={this.props.adminVersion ? '/admin' : '/'}>
        <svg
          width={this.state.width}
          viewBox='0 0 921 921'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g stroke='none'>
            <circle
              style={{ transition: 'fill .4s ease' }}
              fill={this.state.fill}
              cx='460.5'
              cy='460.5'
              r='460.5'
            />
            <path
              d='M296.037374,232.028677 C390.041703,232.028677 432.56851,277.988421 432.56851,355.637118 C432.56851,401.249303 421.378671,436.221131 391.044314,457.314363 C426.374411,479.295865 442.985802,516.86452 442.985802,566.689207 C442.985802,649.352553 403.426071,702 296.190641,702 C188.955212,702 150.973501,648.007654 150.973501,566.689207 C150.973501,517.485716 167.13581,479.648408 202.291425,457.436549 C171.828066,436.166935 160.973922,400.864348 160.973922,355.637118 C160.973922,279.251734 202.033045,232.028677 296.037374,232.028677 Z M633.051572,232.028677 C727.055901,232.028677 769.582708,277.988421 769.582708,355.637118 C769.582708,401.249303 758.392869,436.221131 728.058512,457.314363 C763.388608,479.295865 780,516.86452 780,566.689207 C780,649.352553 740.440268,702 633.204839,702 C525.969409,702 487.987698,648.007654 487.987698,566.689207 C487.987698,517.485716 504.150007,479.648408 539.305622,457.436549 C508.842264,436.166935 497.98812,400.864348 497.98812,355.637118 C497.98812,279.251734 539.047242,232.028677 633.051572,232.028677 Z M301.445567,483.114368 L289.881759,483.114368 C259.503883,483.114368 237.875509,491.507629 219.550499,508.556408 C201.40874,525.434698 199.02213,556.322687 198.976212,561.211398 L198.975523,575.530735 C201.732307,624.153212 231.220009,655.173089 296.303935,655.173089 C360.688599,655.173089 393.319031,625.890744 393.965201,577.017722 L393.974991,575.530735 L393.974991,561.351542 C394.455106,528.766168 375.311586,483.114368 301.445567,483.114368 Z M638.459765,483.114368 L626.895957,483.114368 C596.518081,483.114368 574.889707,491.507629 556.564697,508.556408 C538.422937,525.434698 536.036327,556.322687 535.990409,561.211398 L535.98972,575.530735 C538.746504,624.153212 568.234206,655.173089 633.318133,655.173089 C697.702797,655.173089 730.333228,625.890744 730.979398,577.017722 L730.989189,575.530735 L730.989189,561.351542 C731.469303,528.766168 712.325783,483.114368 638.459765,483.114368 Z M300.95687,279.270601 L290.46391,279.270601 C262.899129,279.270601 243.273617,286.895602 226.645565,302.383856 C210.183795,317.717227 208.018193,345.777948 207.976527,350.219182 L207.975902,350.346497 L207.975902,363.227827 C210.327263,404.748627 234.109992,432.139989 286.005207,435.278384 C289.330648,435.157013 292.727223,435.097981 296.190641,435.097981 C299.757945,435.097981 303.256302,435.158932 306.686133,435.280166 C358.225341,432.261376 384.358379,406.264066 384.908869,364.578706 L384.917753,363.227827 L384.917753,350.346497 C385.353407,320.743758 367.982642,279.270601 300.95687,279.270601 Z M637.971067,279.270601 L627.478108,279.270601 C599.913327,279.270601 580.287814,286.895602 563.659763,302.383856 C547.197992,317.717227 545.032391,345.777948 544.990725,350.219182 L544.9901,363.227827 C547.34146,404.748627 571.124189,432.139989 623.019405,435.278384 C626.344846,435.157013 629.74142,435.097981 633.204839,435.097981 C636.772143,435.097981 640.270499,435.158932 643.70033,435.280166 C695.239539,432.261376 721.372577,406.264066 721.923066,364.578706 L721.93195,363.227827 L721.93195,350.346497 C722.367604,320.743758 704.99684,279.270601 637.971067,279.270601 Z M96.7270491,148 L96.7270491,376.988498 L25,148 L96.7270491,148 Z'
              id='Combined-Shape'
              fill='#FFFFFF'
            />
          </g>
        </svg>
      </Link>
    </div>
  )
}
