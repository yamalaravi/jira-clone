import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-4 m-3">
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="muted">outline</Button>
    </div>
  );
};

export default page;
