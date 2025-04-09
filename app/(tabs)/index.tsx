import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "../../constants/Colors";
import CategoryButtons from "../../components/CategoryButtons";
import Listings from "@/components/Listings";
import listingData from "@/data/destinations.json";
import groupData from "@/data/groups.json";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import GroupListing from "@/components/GroupListing";
const Page = () => {
  const headerHeight = useHeaderHeight();

  const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    setCategory(category);
    console.log("category", category);
  };

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 20 }}
              >
                <Image
                  source={{
                    uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                  }}
                  style={{ width: 40, height: 40, borderRadius: 10 }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  marginRight: 20,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: "#171717",
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Ionicons name="notifications" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <View style={[styles.container, { paddingTop: headerHeight }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headingText}>Explore the Beautiful World!</Text>
            <View style={styles.searchContainerWrapper}>
              <View style={styles.searchContainer}>
                <Ionicons
                  name="search"
                  size={18}
                  style={{ marginRight: 5 }}
                  color={Colors.black}
                />
                <TextInput placeholder="Search..." />
              </View>
              <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                <Ionicons name="options" size={20} color={Colors.white} />
              </TouchableOpacity>
            </View>
            <CategoryButtons onCategoryChanged={onCatChanged} />
            <Listings listings={listingData} category={category} />
            <GroupListing listings={groupData} />
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchContainerWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 16,
    borderRadius: 10,
    marginLeft: 20,
  },
});
