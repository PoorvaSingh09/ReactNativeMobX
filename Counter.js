import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {View, Text, Button} from 'react-native'

@inject("counterStore")
@observer
export default class Counter extends Component {
    render() {
        return (
        <View style={{flex:1}}>
            <Text style={{padding: 40}}>Count = {this.props.counterStore.count}</Text>
            <Button
                title="Increment"
                onPress={() => {
                    this.props.counterStore.increment()
                }}
            />
            <Button
                title="Decrement"
                onPress={() => {
                    this.props.counterStore.decrement()
                }}
            />
        </View>
            )
    }
}

