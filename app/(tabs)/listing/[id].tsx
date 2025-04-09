import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ListingDetailss = () => {
  const { id } = useLocalSearchParams();
  console.log("id",id)
  return (
    <View>
      <Text>ListingDetailss</Text>
    </View>
  );
};

export default ListingDetailss;
