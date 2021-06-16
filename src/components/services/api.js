import axios from "axios";

export default axios.create ({
    baseURL: "https://openexchangerates.org/api/latest.json?app_id=d68cfd5110154f2e91052360092bc210",
})