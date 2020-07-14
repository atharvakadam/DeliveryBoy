import React from 'react'
import {TextInput, StyleSheet, Text } from 'react-native'
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const Item = (props) => {
    return (
            <Card
                title={props.name}
                image={require('../assets/Logo.png')}
                containerStyle={{borderRadius:40, backgroundColor:'#fac603', width: 400, height: 300, alignItems: 'center'}}
                imageStyle={{width: 300, height: 100}}
                >
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 30, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
    )
}

export default Item
