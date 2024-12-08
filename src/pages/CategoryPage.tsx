import { AppLayout } from "@/components/AppLayout";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useBrowse } from "@/hooks/use-browse";
import { useState } from "react";
import { AddDialog } from "@/components/AddDialog";
import { CategoryTable } from "@/components/CategoryTable";
import { SWPerson, SWAPICategory } from '@/types/swapi';

export function CategoryPage() {
  const { category } = useParams<{ category: SWAPICategory }>();
  const isSupportedCategory = category === 'people';
  const { data, loading, error } = useBrowse(category as SWAPICategory);
  const [editableList, setEditableList] = useState<SWPerson[]>([]);

  useEffect(() => {
    if (data) {
      // Add unique IDs to each item
      const itemsWithIds = data.map(item => ({
        ...item,
        id: crypto.randomUUID() // Generate unique ID
      }));
      setEditableList(itemsWithIds);
    }
  }, [data]);

  const handleEdit = (editedItem: SWPerson) => {
    const updatedList = editableList.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setEditableList(updatedList);
  };

  const handleDelete = (itemToDelete: SWPerson) => {
    setEditableList(editableList.filter((item) => item.id !== itemToDelete.id));
  };

  const handleAdd = (newItem: SWPerson) => {
    setEditableList([newItem, ...editableList]);
  }

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-4 capitalize">{category}</h1>
      {!isSupportedCategory && (
        <div className="text-red-500">This category is not yet supported. we're still in beta ; )</div>
      )}
      {loading && (
        <div className="flex items-center justify-center h-48">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      )}
      {error && (
        <div className="text-red-500 p-4 rounded-md bg-red-50">
          Error: {error.message || 'Failed to fetch data'}
        </div>
      )}
      {isSupportedCategory && !loading && !error && (
        <>
          <div className="pl-1 mb-4">
            <AddDialog onAdd={handleAdd} />
          </div>
          <div className="relative w-full h-[calc(100vh-26rem)]">
            <CategoryTable 
              data={editableList}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </>
      )}
    </AppLayout>
  );
}