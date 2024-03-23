import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { TodoSchemaType, todoSchema } from "@/lib/validations/todo-schema";

type TodoFormProps = {
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
};
const TodoForm = ({ setReload }: TodoFormProps) => {
  const form = useForm<TodoSchemaType>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      completed: false,
    },
  });

  async function onSubmit(values: TodoSchemaType) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        form.reset();
        setReload((prev) => !prev);
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Title</FormLabel>
              <FormControl>
                <Input placeholder="Task Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write about you task..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default TodoForm;
