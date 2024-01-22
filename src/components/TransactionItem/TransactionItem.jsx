import React from "react";
import { dateFormat } from "../../utils/dateFormat";
import {
  travel,
  calender,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  communication,
  trash,
  euro,
  housing,
  car,
} from "../../utils/icons";

import {
  TransactionCard,
  IconContainer,
  CardContent,
  CardTitle,
  InnerContent,
  TextContainer,
  Text,
  ButtonContainer,
} from "./TransactionItemStyled";

import { Fab } from "@mui/material";

export default function TransactionItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "communication":
        return communication;
      case "food":
        return food;
      case "health":
        return medical;
      case "car":
        return car;
      case "transport":
        return car;
      case "housing":
        return housing;
      case "clothing":
        return clothing;
      case "travelling":
        return travel;
      case "donations":
        return money;
      case "currency":
        return euro;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <TransactionCard
      style={{
        background: "var(--bg-box)",
        border: "1px solid #fff",
      }}
    >
      <IconContainer
        style={{ border: "1px solid #fff", background: "var(--bg-box)" }}
      >
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </IconContainer>
      <CardContent>
        <CardTitle component="h5" variant="h5" indicator={indicatorColor}>
          {title}
        </CardTitle>
        <InnerContent>
          <TextContainer>
            <Text>
              {dollar} {amount}
            </Text>
            <Text>
              {calender} {dateFormat(date)}
            </Text>
            <Text>
              {comment}
              {description}
            </Text>
          </TextContainer>
        </InnerContent>
      </CardContent>
      <ButtonContainer>
        <Fab
          color="secondary"
          aria-label="delete"
          onClick={() => deleteItem(id)}
        >
          {trash}
        </Fab>
      </ButtonContainer>
    </TransactionCard>
  );
}
