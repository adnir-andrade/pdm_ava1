import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";

import data from "../services/data";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";

const uniqueBrands = [...new Set(data.map((car) => car.brand))];

const carsByBrand = uniqueBrands.sort().map((brand) => ({
  title: brand,
  data: data.filter((car) => car.brand === brand),
}));

export default function carSelection() {
  return (
    <View>
      <Background>
        <HeaderWithTitle title="Sunshine Autos" />
        <SectionList
          sections={carsByBrand}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>ID: {item.id}</Text>
              <Text style={styles.title}>Model: {item.model}</Text>
              <Text style={styles.title}>Year: {item.year}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 4,
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 12,
  },
  header: { fontSize: 32 },
});
