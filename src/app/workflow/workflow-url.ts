import {API_URL} from '../services/app-config';

export let approvalURL={

    approvalinstances:{
        add:API_URL +'approvalinstances/add',
        update:API_URL +'approvalinstances/update',
        all:API_URL +'approvalinstances/list',
        get:API_URL +'approvalinstances/get',
        options:API_URL +'approvalinstances/get-instances',
    },
    approvals: {
        add: API_URL + "approvals/add",
        update: API_URL + "approvals/update",
        get: API_URL + "approvals/get",
        list: API_URL + "approvals/list"
    },
     approvalimit:{
        add:API_URL +'approvalimit/add',
        update:API_URL +'approvalimit/update',
        all:API_URL +'approvalimit/list',
        get:API_URL +'approvalimit/get',

    },

    approvalprocessflow:{
        add:API_URL +'approvalprocessflow/add',
        update:API_URL +'approvalprocessflow/update',
        all:API_URL +'approvalprocessflow/list',
        get:API_URL +'approvalprocessflow/get',

    },

    approvalprocessmodules:{
        add:API_URL +'approvalprocessmodules/add',
        update:API_URL +'approvalprocessmodules/update',
        all:API_URL +'approvalprocessmodules/list',
        get:API_URL +'approvalprocessmodules/get',
    },
    
    approvalprocesstypes:{
        add:API_URL +'approvalprocesstypes/add',
        update:API_URL +'approvalprocesstypes/update',
        all:API_URL +'approvalprocesstypes/list',
        get:API_URL +'approvalprocesstypes/get',

    },
    approvalstage:{
        add:API_URL +'approvalstage/add',
        update:API_URL +'approvalstage/update',
        all:API_URL +'approvalstage/list',
        get:API_URL +'approvalstage/get',

    },
    approvaltype:{
        add:API_URL +'approvaltype/add',
        update:API_URL +'approvaltype/update',
        all:API_URL +'approvaltype/list',
        get:API_URL +'approvaltype/get',

    },


}