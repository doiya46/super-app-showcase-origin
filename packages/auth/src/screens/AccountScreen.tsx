import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Button as AButton} from '@ant-design/react-native';
import {useAuth} from '../contexts/AuthContext';

const AccountScreen = () => {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={signOut}>
        Logout
      </Button>
      <AButton type="primary" onPress={signOut}>
        Logout antd design 0.0.5
      </AButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
