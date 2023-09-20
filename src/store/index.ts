import {createStore} from "vuex";
import {fields} from "@/data/data";

const store = createStore({
    state: () => {
        return {
            fields
        }
    },
    mutations: {
        updateFields(state, value) {
            state.fields = value
        }
    }
})

export default store