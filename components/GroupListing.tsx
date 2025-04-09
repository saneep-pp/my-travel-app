import { View, Text, StyleSheet, Image, ListRenderItem } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { GroupTypes } from "@/types/GroupTypes";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const GroupListing = ({ listings }: { listings: GroupTypes[] }) => {
  const renderItem: ListRenderItem<GroupTypes> = ({ item }) => {
    return (
      <View style={Styles.item}>
        <Image source={{ uri: item.image }} style={Styles.image} />
        <View>
          <Text style={Styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" color={Colors.primaryColor} size={20} />
            <Text style={Styles.itemRating}>{item.rating}</Text>
            <Text style={Styles.itemReviews}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Text style={Styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListing;

const Styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: Colors.black,
    marginBottom: 10,
    marginVertical: 20,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  item: {
    backgroundColor: Colors.white,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTxt: {
    color: Colors.black,
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 8,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.black,
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 14,
    marginLeft: 5,
    color: "#999",
  },
});
