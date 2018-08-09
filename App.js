import React, {Component} from 'react'
import {Provider} from 'mobx-react'

import Counter from './Counter';
import CounterStore from './CounterStore';

export default class App extends Component {
    render() {
        return (
            <Provider counterStore={new CounterStore()}>
                <Counter/>
            </Provider>
        )
    }
}


