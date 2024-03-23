import Navbar from "@/components/nav";
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/`);
        const data = await res.json();
        setData(data);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [reload]);

  return (
    <main>
      <Navbar />
      <section>
        <main className="max-w-8xl m-auto grid justify-between  grid-cols-5 gap-10 p-6">
          <div className="w-full col-span-2">
            <div className="bg-neutral border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <h3 className="pb-4 text-2xl font-semibold text-indigo-700">
                Add New Task
              </h3>
              <TodoForm setReload={setReload} />
            </div>
          </div>
          <div className="w-full col-span-3 ">
            <div className="bg-neutral border border-neutral-200 rounded-2xl p-6 shadow-sm">
              <h3 className="pb-4 text-2xl font-semibold text-indigo-700">
                My Tasks
              </h3>
              <TodoList data={data} />
            </div>
          </div>
        </main>
      </section>
    </main>
  );
}
