import { ADD_COUNT } from "./action";


export const CounterReducer = (store, {type, payload})=>{
    switch(type){
        case ADD_COUNT:
            return {...store, counter: store.counter};
    }

}