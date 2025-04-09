import {
  View,
  Text,
  ListRenderItem,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ListingType } from "@/types/ListingTypes";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type props = {
  listings: any[];
  category: string;
};

const Listings = ({ listings, category }: props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("category", category);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={Styles.items}>
            <Image source={{ uri: item.image }} style={Styles.image} />
            <View style={Styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </View>
            <Text
              style={Styles.itemText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={Styles.itemLocationText}>{item.location}</Text>
              </View>
              <Text style={Styles.itemPriceText}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  items: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 20,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 10,
  },
  itemLocationText: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.black,
  },
  itemPriceText: {
    fontSize: 12,
    fontWeight: 600,
    color: Colors.primaryColor,
  },
});

export default Listings;
