import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './_layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {

    return (
      <main {...this.props} ref={node => (this.root = node)} className={cx(s.content, this.props.className)}>
      </main>
    );
  }
}

export default Layout;
