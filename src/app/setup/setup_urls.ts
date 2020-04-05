import { API_URL } from "../services/app-config";

export let setupUrls = {
  banks: {
    add: API_URL + "banks/add",
    get: API_URL + "banks/get",
    list: API_URL + "banks/list",
    update: API_URL + "banks/update",
    listInUse: API_URL + "banks/inuse"
  },

  charges: {
    add: API_URL + "transactioncharges/add",
    list: API_URL + "transactioncharges/list",
    update: API_URL + "transactioncharges/update"
  },

  staff: {
    add: API_URL + "staff/add",
    list: API_URL + "staff/list",
    get: API_URL + "wallettransaction/get",
    getDates: API_URL + "wallettransaction/getdates",
    update: API_URL + "staff/update",
    delete: API_URL + "staff/delete",
    getStaff: API_URL + "staff/get",
    get_collected: API_URL + "wallettransaction/get-collected",
    topup: API_URL + "wallettransaction/topup",
    cashCollected: API_URL + "wallettransaction/cashcollected"
  },
  role: {
    list: API_URL + "role/list",
  }
}
