import axios from "axios";

// url の宣言
const apiUrl = "http://localhost";

// カスタムヘッダー(必要に応じて)
const headers = {};

// 共通部分をexport
export default axios.create({
  baseURL: apiUrl,
  headers: headers,
  responseType: "json"
});
