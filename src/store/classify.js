import * as types from './store-types';
import { queryClassify } from '../api/login';
export default {
    namespaced: true,
    state: {
        classifyData: null
    },
    mutations: {
        [types.QUERY_CLASSIFY_LIST](state, payload) {
            state.classifyData = payload;
        }
    },
    actions: {
        [types.QUERY_CLASSIFY_LIST](context) {
            queryClassify().then(result => {
                context.commit(types.QUERY_CLASSIFY_LIST,result)
            })
        }
    }
}