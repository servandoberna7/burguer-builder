import axios from "axios";

const instance = axios.create({
  baseURL: "https://burguer-builder-8cb88.firebaseio.com/"
});

export default instance;
