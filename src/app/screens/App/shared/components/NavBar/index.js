import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './layout';
import { actionCreators } from '../../../../../../Redux/droppableMenues/actions';
import './styles.css';

class NavBarContainer extends Component {
  toggleShowProfileOptions = () => {
    this.props.dispatch(actionCreators.toggle_show_profile_options());
  };

  toggleShowNotifications = () => {
    this.props.dispatch(actionCreators.toggle_show_notifications());
  };

  render() {
    return (
      <NavBar
        showNotifications={this.props.showNotifications}
        showProfileOptions={this.props.showProfileOptions}
        toggleShowProfileOptions={this.toggleShowProfileOptions}
        toggleShowNotifications={this.toggleShowNotifications}
      />
    );
  }
}

const mapStateToProps = state => ({
  showProfileOptions: state.droppableMenues.showingProfileOptions,
  showNotifications: state.droppableMenues.showingNotifications
});

export default connect(mapStateToProps)(NavBarContainer);
