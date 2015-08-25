/**
 * <%= ComponentName %> Component Demo for uxcore
 * @author <%= props.authorName %>
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

var classnames = require('classnames');

var <%= ComponentName %> = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <<%= ComponentName %>/>
            </div>
        );
    }
};

module.exports = Demo;
