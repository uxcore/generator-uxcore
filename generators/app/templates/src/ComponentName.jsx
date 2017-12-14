/**
 * <%= ComponentName %> Component for uxcore
 * @author <%= props.authorName %>
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';

class <%= ComponentName %> extends React.Component {

  static defaultProps = {
  };

  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div><%= name %> component</div>
    );
  }
}

<%= ComponentName %>.displayName = '<%= ComponentName %>';

export default <%= ComponentName %>;

