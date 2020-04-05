import { API_URL } from "../services/app-config";

export let SalesUrl = {
    sales_urls: { 
        add: API_URL + "sales/add",
        get: API_URL + "sales/get",
        list: API_URL + "sales/list",
        update: API_URL + "sales/update",
    },
    purchases_url: { 
        add: API_URL + "purchases/add",
        get: API_URL + "purchases/get",
        list: API_URL + "purchases/list",
        update: API_URL + "purchases/update",
    },
    sales_details: { 
        add: API_URL + "salesdetail/add",
        get: API_URL + "salesdetail/get",
        list: API_URL + "salesdetail/list",
        update: API_URL + "salesdetail/update",
    }
}