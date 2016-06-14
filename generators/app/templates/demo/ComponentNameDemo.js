/**
 * <%= ComponentName %> Component Demo for uxcore
 * @author <%= props.authorName %>
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
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
