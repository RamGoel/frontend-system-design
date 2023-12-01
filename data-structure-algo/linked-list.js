
class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    addToEnd(element) {
        this.size++;
        let newNode = new Node(element)

        if (this.head === null) {
            this.head=newNode
        } else {
            let tempHead = this.head
            
            while (tempHead.next) {
                tempHead=tempHead.next
            }

            tempHead.next=newNode

        }
    }

    addToBegin(element) {
        this.size++;
        let elem = this.head;

        let newNode = new Node(element);

        newNode.next = elem;
        this.head=newNode
    }

    printList() {
        if (this.head === null) {
            console.log('No items here')
            return;
        }
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        console.log(str);
    }


    emptyList() {
        this.size = 0;
        this.head = null;
        console.log("List Cleared!")
    }

    getSize() {
        console.log(this.size)
    }

};


let l1 = new LinkedList();
l1.addToEnd(5)
l1.addToEnd(10)
l1.addToEnd(15)
l1.addToEnd(20)
l1.addToEnd(25)
l1.addToBegin(30)
l1


l1.printList()

l1.getSize()


