import {API_URL} from '../services/app-config';
export let priviledgeURL ={
    menu: {
        add:API_URL+'menu/add',
        update:API_URL+'menu/update',
        all:API_URL+'menu/list',
        get:API_URL+'menu/get',
    },

    menuauthorized: {
        add:API_URL+'menuauthorized/add',
        update:API_URL+'menuauthorized/update',
        all:API_URL+'menuauthorized/list',
        get:API_URL+'menuauthorized/get',
    },

    menutype: {
        add:API_URL+'menutype/add',
        update:API_URL+'menutype/update',
        all:API_URL+'menutype/list',
        get:API_URL+'menutype/get',
    },

    priviledge: {
        add:API_URL+'privilege/add',
        update:API_URL+'privilege/update',
        all:API_URL+'privilege/list',
        get:API_URL+'privilege/get',
    },

    priviledgeactivity: {
        add:API_URL+'privilegeactivity/add',
        update:API_URL+'privilegeactivity/update',
        all:API_URL+'privilegeactivity/list',
        get:API_URL+'privilegeactivity/get',
    },

    priviledgeactivitymapping: {
        add:API_URL+'activitymap/add',
        update:API_URL+'activitymap/update',
        all:API_URL+'activitymap/list',
        get:API_URL+'activitymap/get',
    },

    priviledgeassignment: {
        add:API_URL+'privilegeassignment/add',
        update:API_URL+'privilegeassignment/update',
        all:API_URL+'privilegeassignment/list',
        get:API_URL+'privilegeassignment/get',
    },
    
    priviledgeclass: {
        add:API_URL+'privilegeclass/add',
        update:API_URL+'privilegeclass/update',
        all:API_URL+'privilegeclass/list',
        get:API_URL+'privilegeclass/get',
    }
}