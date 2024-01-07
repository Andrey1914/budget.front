import React from "react";
import { useGlobalContext } from "../context/globalContext";

import { HistoryStyled, HistoryItem } from "./HistoryStyled";

import { Typography } from "@mui/material";

export default function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <Typography component="h2" variant="h4" style={{ textAlign: "center" }}>
        Історія
      </Typography>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <HistoryItem key={_id} style={{ background: "#fcf6f9" }}>
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
