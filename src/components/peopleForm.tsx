import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormMessage, Form } from "@/components/ui/form";

export const personSchema = z.object({
  name: z.string().min(1, "Name is required"),
  height: z.string().min(1, "Height is required"),
  mass: z.string().min(1, "Mass is required"),
  hair_color: z.string().min(1, "Hair color is required"),
  skin_color: z.string().min(1, "Skin color is required"),
  eye_color: z.string().min(1, "Eye color is required"),
  birth_year: z.string().min(1, "Birth year is required"),
  gender: z.string().min(1, "Gender is required"),
  homeworld: z.string().min(1, "Homeworld is required"),
});

export type PeopleFormData = z.infer<typeof personSchema>;

type PeopleFormProps = {
  defaultValues?: PeopleFormData;
  onSubmit: (data: PeopleFormData) => void;
  submitLabel?: string;
};

export function PeopleForm({ defaultValues, onSubmit, submitLabel = 'Save changes' }: PeopleFormProps) {
  const form = useForm<PeopleFormData>({
    resolver: zodResolver(personSchema),
    defaultValues
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2">
          <div>
            <Input {...form.register("name")} placeholder="Name" />
            {form.formState.errors.name && <FormMessage>{form.formState.errors.name.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("height")} placeholder="Height" />
            {form.formState.errors.height && <FormMessage>{form.formState.errors.height.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("mass")} placeholder="Mass" />
            {form.formState.errors.mass && <FormMessage>{form.formState.errors.mass.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("hair_color")} placeholder="Hair Color" />
            {form.formState.errors.hair_color && <FormMessage>{form.formState.errors.hair_color.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("skin_color")} placeholder="Skin Color" />
            {form.formState.errors.skin_color && <FormMessage>{form.formState.errors.skin_color.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("eye_color")} placeholder="Eye Color" />
            {form.formState.errors.eye_color && <FormMessage>{form.formState.errors.eye_color.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("birth_year")} placeholder="Birth Year" />
            {form.formState.errors.birth_year && <FormMessage>{form.formState.errors.birth_year.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("gender")} placeholder="Gender" />
            {form.formState.errors.gender && <FormMessage>{form.formState.errors.gender.message}</FormMessage>}
          </div>
          <div>
            <Input {...form.register("homeworld")} placeholder="Homeworld" />
            {form.formState.errors.homeworld && <FormMessage>{form.formState.errors.homeworld.message}</FormMessage>}
          </div>
        </div>
        <Button type="submit">{submitLabel}</Button>
      </form>
    </Form>
  );
}