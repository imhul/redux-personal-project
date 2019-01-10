// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

// Components
import Scheduler from '../../components/Scheduler';
import Spinner from '../../components/Spinner';

// Actions
import { socketActions } from '../../redux/socket/actions';
import { uiActions } from '../../redux/ui/actions';

// WebSocket
import { socket, joinSocketChannel } from '../../init/socket';

const mapStateToProps = (state) => {
    return {
        isFetching: state.ui.get('isFetching'),
    }
};

const mapDispatchToProps = { ...socketActions, ...uiActions };

@hot(module)
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

    componentDidMount() {
        joinSocketChannel();
    };

    render() {
        const { isFetching } = this.props;

        if(isFetching) {
            return <Spinner />;
        }

        return <Scheduler />
    };
};
