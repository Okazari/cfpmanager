import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Component from './Navbar'

const mapStateToProps = ({ router: { location }}) => {
  return {
    location,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: route => dispatch(push(route))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
