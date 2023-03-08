import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export function getHistories() {
  return instance.get("/histories").then((data: { data: any }) => data.data);
}

export function getDiaries() {
  return instance.get("/diaries").then((data: { data: any }) => data.data);
}

export function getColumns() {
  return instance.get("/columns").then((data: { data: any }) => data.data);
}
