import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { PeopleForm, type PeopleFormData } from './peopleForm';
import { type BaseItem, type DialogProps } from '@/types';

interface EditDialogProps extends DialogProps<BaseItem> {
  onEdit: (updatedItem: BaseItem) => void;
}

export function EditDialog({ item, onEdit }: EditDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: PeopleFormData) => {
    onEdit({ ...data, id: item.id });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="sm"><Settings /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Person</DialogTitle>
          <DialogDescription>
            Edit person details below
          </DialogDescription>
        </DialogHeader>
        <PeopleForm 
          defaultValues={item} 
          onSubmit={handleSubmit} 
          submitLabel="Save changes"
        />
      </DialogContent>
    </Dialog>
  );
}