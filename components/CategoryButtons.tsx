import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "../constants/Colors";
import destinationCategories from "../data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type props = {
  onCategoryChanged: (category: string) => void;
};
const CategoryButtons = ({ onCategoryChanged }: props) => {
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const scrollRef = useRef<ScrollView>(null); // Added null as initial value
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    selected?.measure((x: any) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });
    setActiveIndex(index);
    console.log(index);
    onCategoryChanged(destinationCategories[index].title);
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
        style={{ marginTop: 20 }}
      >
        {destinationCategories.map((category: any, index: number) => (
          <TouchableOpacity
            key={index}
            ref={(ele) => (itemRef.current[index] = ele)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index // Compare index directly
                ? styles.categoryBtnActiveStyle
                : styles.categorybtn
            }
          >
            <MaterialCommunityIcons
              name={category.iconName as any}
              size={20}
              color={activeIndex === index ? Colors.white : Colors.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryBtnActiveTxt
                  : styles.categoryBtnText
              }
            >
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.black,
    marginTop: 10,
  },
  categorybtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  categoryBtnActiveStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  categoryBtnText: {
    marginLeft: 5,
    color: Colors.black,
  },
  categoryBtnActiveTxt: {
    marginLeft: 5,
    color: Colors.white,
  },
});
