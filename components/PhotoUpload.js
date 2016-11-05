import React from 'react';
import cx from 'classnames';
import s from './_photoUpload.css';

const PhotoUpload = React.createClass({
  getInitialState() {
    return {
      draggingOver: false
    };
  },

  onDragOver() {
    this.setState({
      draggingOver: true
    });
  },

  onDragLeave() {
    this.setState({
      draggingOver: false
    });
  },

  render() {
    return (
      <div onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} className={cx(s.photoUpload, {idDraggingOver: this.state.draggingOver, [s.isDraggingOver]: this.state.draggingOver})}>
        Click or Drop a Photo Here
      </div>
    )
  }
});

export default PhotoUpload;
