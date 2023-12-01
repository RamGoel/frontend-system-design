class Stack{
    constructor() {
        this.arr=[]
    }


    push(item) {
        this.arr.push(item)
    }

    pop() {
        return this.arr.pop()
    }

    getSize() {
        console.log(this.arr.length)
    }


    printStack() {
        console.log(this.arr)
    }

}


let st = new Stack()

st.push(20);
st.push(30);

st.getSize()
st.printStack();