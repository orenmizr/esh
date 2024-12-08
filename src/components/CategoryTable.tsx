import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EditDialog } from "./EditDialog";
import { DeleteDialog } from "./DeleteDialog";
import { SWPerson } from '@/types/swapi';

interface CategoryTableProps {
  data: SWPerson[];
  onEdit: (item: SWPerson) => void;
  onDelete: (item: SWPerson) => void;
}

export function CategoryTable({ data, onEdit, onDelete }: CategoryTableProps) {
  return (
    <ScrollArea className="h-full border rounded-md">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Height</TableHead>
              <TableHead>Mass</TableHead>
              <TableHead>Hair Color</TableHead>
              <TableHead>Skin Color</TableHead>
              <TableHead>Eye Color</TableHead>
              <TableHead>Birth Year</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Homeworld</TableHead>
              <TableHead className="text-center">Edit</TableHead>
              <TableHead className="text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.height}</TableCell>
                <TableCell>{person.mass}</TableCell>
                <TableCell>{person.hair_color}</TableCell>
                <TableCell>{person.skin_color}</TableCell>
                <TableCell>{person.eye_color}</TableCell>
                <TableCell>{person.birth_year}</TableCell>
                <TableCell>{person.gender}</TableCell>
                <TableCell>{person.homeworld}</TableCell>
                <TableCell>
                  <EditDialog item={person} onEdit={onEdit} />
                </TableCell>
                <TableCell>
                  <DeleteDialog item={person} onDelete={onDelete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ScrollArea>
  );
}
