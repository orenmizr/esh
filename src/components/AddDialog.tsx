import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PeopleForm, type PeopleFormData } from './peopleForm';
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface AddDialogProps {
  onAdd: (data: PeopleFormData) => void;
}

export function AddDialog({ onAdd }: AddDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: PeopleFormData) => {
    onAdd(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="sm"><Plus /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Person</DialogTitle>
          <DialogDescription>
            Enter person details below
          </DialogDescription>
        </DialogHeader>
        <PeopleForm 
          onSubmit={handleSubmit} 
          submitLabel="Add Person"
        />
      </DialogContent>
    </Dialog>
  );
}