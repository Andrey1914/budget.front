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
import Button from "../Button/Button";

import {
  TransactionItemCard,
  IconContainer,
  CardContent,
  CardTitle,
  InnerContent,
  TextContainer,
  Text,
  ButtonContainer,
} from "./TransactionItemStyled";

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
    <TransactionItemCard
      style={{ backgroundColor: "#fcf6f9", border: "1px solid #ffffff" }}
    >
      <IconContainer>
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </IconContainer>
      <CardContent>
        <CardTitle indicator={indicatorColor}>{title}</CardTitle>
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
          <ButtonContainer>
            <Button
              icon={trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-color"}
              color={"#fff"}
              iColor={"#fff"}
              hColor={"var(--color-green)"}
              onClick={() => deleteItem(id)}
            />
          </ButtonContainer>
        </InnerContent>
      </CardContent>
    </TransactionItemCard>
  );
}
