import React from "react";

import { useGlobalContext } from "context/globalContext";

import { HistoryStyled, HistoryItem } from "history/HistoryStyled";

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
          <HistoryItem key={_id} style={{ background: "var(--bg-box)" }}>
            <Typography
              component="p"
              style={{
                color: type === "expense" ? "red" : "var(--green)",
              }}
            >
              {title}
            </Typography>

            <Typography
              component="p"
              style={{
                color: type === "expense" ? "red" : "var(--green)",
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
