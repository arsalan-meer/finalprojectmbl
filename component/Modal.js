import React from 'react';
import { View, Text, Modal as RNModal, Button } from 'react-native';

const Modal = ({ visible, onClose }) => {
  return (
    <RNModal transparent={true} visible={visible} animationType="slide">
      <View>
        <View>
          <Text>Modal Content</Text>
          {/* Add more modal content as needed */}
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
