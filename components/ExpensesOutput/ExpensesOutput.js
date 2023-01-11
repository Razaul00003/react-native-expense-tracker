import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";

import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "shoes",
    amount: 59.99,
    date: new Date("2023-01-11"),
  },
  {
    id: "e2",
    description: "Laptop",
    amount: 99.99,
    date: new Date("2021-01-11"),
  },
  {
    id: "e3",
    description: "Gadgets",
    amount: 99.99,
    date: new Date("2022-01-11"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
