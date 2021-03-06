import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.isEditing) {
      return <NoteEditor
        user={this.props.user}
        displayNote={this.props.displayNote}
        onCancelClick={this.props.onCancelClick}
        updateDisplayNotes={this.props.updateDisplayNotes} />;
    } else if (this.props.displayNote) {
      return <NoteViewer
        displayNote={this.props.displayNote}
        onEditClick={this.props.onEditClick} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
