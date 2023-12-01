class ListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyList {
    constructor() {
        this.head = null;
    }

    addNodeToFront(data) {
        let node = new ListNode(data);  //Create new node
        if (this.head === null) {  // if head is null, assign new node as head
            this.head = node;
            return;
        }
        node.next = this.head;  // else node's next to head
        this.head.prev = node;  // head's prev to node;
        this.head = node;  // and node as new head;
    }

    addNodeToLast(data) {
        let node = new ListNode(data);
        if (this.head === null) {
            this.head = node;
        } else if (this.head.next === null) {
            this.head.next = node;
            node.prev = this.head;
        } else {
            let start = this.head;
            while (start.next !== null) {
                start = start.next;
            }

            start.next = node;
            node.prev = start;
        }
    }


    deleteNode(val) {
        if (this.head === null) { // if head is null means no element to delete
            console.log("No Element to delete")
            return;
        }

        if (this.head.data === val) { // suppose val is 1
            if (this.head.next === null) {
                this.head=null // Only element, so delete that [1] = null
            } else if (this.head.next !== null) {
                this.head = this.head.next;
                this.head.prev = null; //Move 2nd element to first place.  [1]->[2]->[3] = [2]->[3]
            }
        }

        if(this.head.next===)
        let beforeStart = this.head;
        let start = beforeStart.next;
        let afterStart = start.next;
        while (start.data !== val) {
            beforeStart = beforeStart.next;
            afterStart = afterStart.next;
            start = start.next; 
        }

        beforeStart.next = afterStart;
        afterStart.prev = beforeStart;
    }

    printList() {
        let item = this.head;
        let str = ''
        while (item) {
            str += (item.data + ' ')
            item = item.next;
        }

        console.log(str)
    }
}



let l1 = new DoublyList();

l1.addNodeToLast(12);
l1.addNodeToFront(22);
l1.addNodeToLast(5);
l1.addNodeToLast(50);
l1.addNodeToLast(19);
l1.addNodeToLast(13);

l1.printList()

l1.deleteNode(50);

l1.printList();