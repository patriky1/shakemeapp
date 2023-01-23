import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
} from 'react-native';

const tabs = [{ name: 'My Account' }, { name: 'Company' }, { name: 'Team' }];


export default function ButtonGroup() {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.container}>
          {tabs.map((item, index) => {
            const isActive = index === value;
            const isFirst = index === 0;
            const isNotFirst = index !== 0;
            const isLast = index === tabs.length - 1;

            return (
              <View
                style={{ flex: 1, zIndex: isActive ? 1 : 0 }}
                key={item.name}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setValue(index);
                  }}>
                  <View
                    style={[
                      styles.item,
                      isActive && { borderColor: '#6366f1' },
                      isFirst && {
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      },
                      isNotFirst && { marginLeft: -2 },
                      isLast && {
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      },
                    ]}>
                    <Text
                      style={[styles.text, isActive && { color: '#6366f1' }]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: '#e5e7eb',
    borderWidth: 2,
    position: 'relative',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
});