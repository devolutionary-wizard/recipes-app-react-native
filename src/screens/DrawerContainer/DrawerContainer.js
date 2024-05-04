import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  {
    title: "HOME",
    source: require("../../../assets/icons/home.png"),
    navigateTo: "Home",
  },
  {
    title: "CATEGORIES",
    source: require("../../../assets/icons/category.png"),
    navigateTo: "Categories",
  },
  {
    title: "SEARCH",
    source: require("../../../assets/icons/search.png"),
    navigateTo: "Search",
  },
];

export default function DrawerContainer(props) {
  const { navigation } = props;
  const handleMenuButtonPress = (item) => {
    navigation.navigate(item.navigateTo);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
      {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            title={item.title}
            source={item.source}
            onPress={() => handleMenuButtonPress(item)}
          />
        ))}
      </View>
    </SafeAreaView>
    
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
