import { API_URL } from "../services/app-config";

export let sharedUrl = {
    menu_urls: { 
        add: API_URL + "menu/add",
        get: API_URL + "menu/get",
        list: API_URL + "menu/list",
        update: API_URL + "menu/update",
    },
    menu_authorization_urls: {
        add: API_URL + "menuauthorization/add",
        get: API_URL + "menuauthorization/get",
        list: API_URL + "menuauthorization/list",
        update: API_URL + "menuauthorization/update", 
    },
    privileges_urls: {
        add: API_URL + "privileges/add",
        get: API_URL + "privileges/get",
        list: API_URL + "privileges/list",
        update: API_URL + "privileges/update", 
    },
    gender_urls: {
        add: API_URL + "gender/add",
        get: API_URL + "gender/get",
        list: API_URL + "gender/list",
        update: API_URL + "gender/update", 
    },
    payment_method: {
        add: API_URL + "paymentmethod/add",
        get: API_URL + "paymentmethod/get",
        list: API_URL + "paymentmethod/list",
        update: API_URL + "paymentmethod/update", 
    },
    customer: {
        add: API_URL + "customer/add",
        get: API_URL + "customer/get",
        list: API_URL + "customer/list",
        update: API_URL + "customer/update", 
    },
    icons_url: {
        add: API_URL + "icons/add",
        get: API_URL + "icons/get",
        list: API_URL + "icons/list",
        update: API_URL + "icons/update", 
    }
}