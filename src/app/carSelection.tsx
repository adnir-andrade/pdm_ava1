import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";

import data from "../services/data";
import HeaderWithTitle from "../components/headers/HeaderWithMenu";
import Background from "../components/ui/Background";
import Card from "../components/containers/Card";

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
        <View style={styles.sectionContainer}>
          <Card>
            <SectionList
              sections={carsByBrand}
              keyExtractor={(item) => item.id.toString()}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.headerContainer}>
                  <Card>
                    <Text style={styles.header}>{title}</Text>
                  </Card>
                </View>
              )}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.title}>ID: {item.id}</Text>
                  <Text style={styles.title}>Model: {item.model}</Text>
                  <Text style={styles.title}>Year: {item.year}</Text>
                </View>
              )}
            />
          </Card>
        </View>
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
    fontSize: 15,
    color: "#fff",
    textShadowColor: "cyan",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  header: {
    fontSize: 32,
    textAlign: "center",
    color: "#fff",
    textShadowColor: "purple",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
  headerContainer: {
    paddingHorizontal: 10,
    marginTop: 15,
  },
  sectionContainer: {
    margin: 50,
  },
});
