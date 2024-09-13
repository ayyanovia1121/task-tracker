"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Tasks() {
  const tasks = useQuery(api.task.get);
  return (
    <div>
        <p>Tasks</p>
      {tasks?.map((data, idx) => <p key={idx}>{JSON.stringify(data)}</p>)}
    </div>
  );
}
