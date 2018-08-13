/**
 * <%= ComponentName %> Component for uxcore
 * @author <%= props.authorName %>
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class <%= ComponentName %> extends React.Component {
  static displayName = '<%= ComponentName %>';

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: '<%= component_name %>',
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prefixCls, className } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        uxcore-test component
      </div>
    );
  }
}

export default <%= ComponentName %>;

