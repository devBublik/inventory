import { createStore } from 'vuex'
import { fields } from '@/data/data'

interface fields {
  id: number
  color1: string
  color2: string
}

interface initialState {
  fields: fields[]
}
const lStorage: fields[] = JSON.parse(localStorage.getItem('fields') || '[]')
const initialState = lStorage.length ? lStorage : fields
console.log(initialState)

const store = createStore({
  state: () => {
    return {
      fields: initialState
    }
  },
  getters: {
    getFields(state: initialState) {
      return state.fields
    }
  },
  mutations: {
    updateFields(state: initialState, value: fields[]) {
      state.fields = value
      localStorage.setItem('fields', JSON.stringify(value))
    },
    deleteField(state: initialState, id: number) {
      const findInd = state.fields.filter((field) => {
        if (field.id === id) {
          field.color1 = ''
          field.color2 = ''
        }
      })
      localStorage.setItem('fields', JSON.stringify(state.fields))
    }
  }
})

export default store
