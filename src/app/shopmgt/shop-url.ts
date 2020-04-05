import { API_URL } from "../services/app-config";

export let shopUrl = {
    shop_types: {
        add: API_URL + "shoptype/add",
        get: API_URL + "shoptype/get",
        list: API_URL + "shoptype/list",
        update: API_URL + "shoptype/update",
    },
    destination_type: {
        add: API_URL + "destinationtype/add",
        get: API_URL + "destinationtype/get",
        list: API_URL + "destinationtype/list",
        update: API_URL + "destinationtype/update",
    },
    transfer_type: {
        add: API_URL + "transfertype/add",
        get: API_URL + "transfertype/get",
        list: API_URL + "transfertype/list",
        update: API_URL + "transfertype/update",
    },
    shops: {
        add: API_URL + "shop/add",
        get: API_URL + "shop/get",
        list: API_URL + "shop/list",
        update: API_URL + "shop/update",
    },
    states: {
        add: API_URL + "state/add",
        get: API_URL + "state/get",
        list: API_URL + "state/list",
        update: API_URL + "state/update",
    },
    lgas: {
        add: API_URL + "lga/add",
        get: API_URL + "lga/get",
        list: API_URL + "lga/list",
        update: API_URL + "lga/update",
    },

    shop_items_url: {
        add: API_URL + "shopitems/add",
        get: API_URL + "shopitems/get",
        list: API_URL + "shopitems/list",
        update: API_URL + "shopitems/update",
    }
}
