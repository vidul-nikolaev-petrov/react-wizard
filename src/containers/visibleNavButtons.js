import { connect } from 'react-redux'
import NavButtons from '../components/NavButtons'

const mapStateToProps = state => ({
    next: state.navLinks.next || false,
    prev: state.navLinks.prev || false,
    showNext: state.visibilityNavNext,
    showPrev: state.visibilityNavPrev
});

export default connect(mapStateToProps)(NavButtons)