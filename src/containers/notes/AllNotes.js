import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchNotes } from '../../actions/notesActions';
import Notes from '../../components/notes/Notes';
import { getNotes, getNotesLoading } from '../../selectors/notesSelectors';

class AllNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, notes } = this.props;
    if(loading) return <h1> getting your data ... </h1>;

    return <Notes notes={notes} />;
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state),
  loading: getNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
