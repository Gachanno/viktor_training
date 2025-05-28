// Решение №1

// const object = (() =>{
//     let _value = null
//     return {
//         getValue: () =>{
//             return _value;
//         },
//         setValue: (value) =>{
//             _value = value;
//         },
//     }
// })();

// Решение №2

class classObject {
    #value = null
    getValue() {
        return this.#value
    }
    setValue(value) {
        this.#value = value
    }
}
object = new classObject()

object.setValue(42);
object._value = 73;
object.getValue();
// console.log(object.getValue())