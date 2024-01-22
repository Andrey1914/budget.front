import React, { useState } from "react";

import { useGlobalContext } from "../../context/globalContext";

import { plus } from "../../utils/icons";

import { FormStyled } from "../Form/FormStyled";

import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Fab,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <TextField
        id="outlined-basic"
        label="На що були витрачені кошти?"
        variant="outlined"
        value={title}
        name={"title"}
        onChange={handleInput("title")}
      />

      <TextField
        id="outlined-basic"
        label="Сума видатку..."
        variant="outlined"
        value={amount}
        name={"amount"}
        onChange={handleInput("amount")}
      />

      <FormControl>
        <InputLabel id="category">Обери категорію...</InputLabel>
        <Select
          labelId="category"
          id="demo-simple-select"
          value={category}
          label="Обери категорію..."
          onChange={handleInput("category")}
        >
          <MenuItem value={""} disabled>
            Обери категорію...
          </MenuItem>
          <MenuItem value={"food"}>Їжа</MenuItem>
          <MenuItem value={"transport"}>Транспорт</MenuItem>
          <MenuItem value={"clothing"}>Одяг і взуття</MenuItem>
          <MenuItem value={"household-goods"}>Побутові товари</MenuItem>
          <MenuItem value={"communication"}>Зв'язок</MenuItem>
          <MenuItem value={"housing"}>Житло</MenuItem>
          <MenuItem value={"health"}>Медицина</MenuItem>
          <MenuItem value={"donations"}>Добровільні пожертви</MenuItem>
          <MenuItem value={"car"}>Авто</MenuItem>
          <MenuItem value={"travelling"}>Подорожі</MenuItem>
          <MenuItem value={"currency"}>Валюта</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="outlined-multiline-static"
        label="Опиши детальніше..."
        multiline
        rows={8}
        value={description}
        onChange={handleInput("description")}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            id="date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
            label="Введи дату..."
            sx={{ width: "100%" }}
          />
        </DemoContainer>
      </LocalizationProvider>

      <div className="submit-btn" style={{ marginLeft: "auto" }}>
        <Fab
          icon={plus}
          color="secondary"
          aria-label="add"
          onClick={handleSubmit}
        >
          {plus}
        </Fab>
      </div>
    </FormStyled>
  );
}
