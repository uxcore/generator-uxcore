/**
 * <%= ComponentName %> Component Demo for uxcore
 * @author <%= props.authorName %>
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import <%= ComponentName %> from '../src';
import '../style';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <<%= ComponentName %> />
      </div>
    );
  }
}

export default Demo;
