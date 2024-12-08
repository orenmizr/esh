import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { type BaseItem, type DialogProps } from '@/types';

interface DeleteDialogProps extends DialogProps<BaseItem> {
  onDelete: (item: BaseItem) => void;
}

export function DeleteDialog({ item, onDelete }: DeleteDialogProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete(item);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="sm"><X /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Confirmation</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {item.name}?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}