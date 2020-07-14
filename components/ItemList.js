import React from 'react'
import Item from './Item'
import {View} from 'react-native'
import {Card} from 'react-native-elements'

const items = [
    {
        name: 'Mac',
    },
    {
        name: 'Cheese',
    },
    {
        name: 'MacandCheese',
    },
]

const ItemList = () => {
    return (
        <View >
        {items.map((u,i) => {
            return(
                <Item key={i} name={u} />
            )
        })}
        </View>
    )
}

export default ItemList
