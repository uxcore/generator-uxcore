/**
 * <%= ComponentName %> Component Demo for uxcore
 * @author <%= props.authorName %>
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let <%= ComponentName %> = require('../src');

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
