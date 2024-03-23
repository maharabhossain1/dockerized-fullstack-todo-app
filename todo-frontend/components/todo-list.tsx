import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type TodoList = {
  id: number;
  title: string;
  description: string;
  complete: boolean;
};
type TodoListProps = {
  data: TodoList[];
};

const TodoList = ({ data }: TodoListProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((todo) => {
        return (
          <AccordionItem value={`${todo.id}`} key={todo.id}>
            <AccordionTrigger>{todo.title}</AccordionTrigger>
            <AccordionContent>{todo.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default TodoList;
