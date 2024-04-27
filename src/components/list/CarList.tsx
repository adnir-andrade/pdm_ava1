import { View, SectionList, StyleSheet } from "react-native";
import React from "react";
import data from "../../services/data";
import Card from "../../components/containers/Card";
import ListHeader from "../../components/list/ListHeader";
import ListItems from "../../components/list/ListItems";

const uniqueBrands = [...new Set(data.map((car) => car.brand))];

const carsByBrand = uniqueBrands.sort().map((brand) => ({
  title: brand,
  data: data.filter((car) => car.brand === brand),
}));

export default function CarList() {
  return (
    <View style={styles.mainContainer}>
      <Card>
        <SectionList
          sections={carsByBrand}
          keyExtractor={(item) => item.id.toString()}
          renderSectionHeader={({ section: { title } }) => (
            <ListHeader title={title} />
          )}
          renderItem={({ item }) => (
            <ListItems id={item.id} model={item.model} year={item.year} />
          )}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 30,
  },
});
