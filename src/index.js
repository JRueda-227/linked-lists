import "./styles.css";
import { LinkedList } from "./linked-list";
import { Node } from "./node";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list);
