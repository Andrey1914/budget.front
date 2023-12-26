import React from "react";
import { useGlobalContext } from "../context/globalContext";

import { HistoryStyled, HistoryItem } from "./HistoryStyled";

import { Typography } from "@mui/material";

export default function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Історія</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <HistoryItem key={_id}>
            <Typography
              component="p"
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </Typography>

            <Typography
              component="p"
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </Typography>
          </HistoryItem>
        );
      })}
    </HistoryStyled>
  );
}
