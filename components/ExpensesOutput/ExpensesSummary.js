import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.primary500,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary800,
  },
});

export default ExpensesSummary;
