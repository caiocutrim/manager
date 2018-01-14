import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = style
  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => { }} >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>
            Yes
          </Button>
          <Button onPress={onDecline}>
            No
          </Button>
        </CardSection>
      </View>
    </Modal>
  )
}
const style = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    position:'relative',
    justifyContent: 'center'
  }
}
export { Confirm }
