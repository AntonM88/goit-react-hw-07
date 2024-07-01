import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://668297504102471fa4c77d77.mockapi.io/";

export const fetchDataThunk = createAsyncThunk(
  "fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
fetchDataThunk();
export const addContactThunk = createAsyncThunk(
  "addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
