import { z } from "zod";

const requiredString = (filedName: string) =>
  z
    .string({ error: `${filedName} is required` })
    .min(1, { message: `${filedName} is required` });

export const activitySchema = z.object({
  title: requiredString("Title"),
  description: requiredString("Description"),
  category: requiredString("Category"),
  date: z.coerce.date<Date>({
    error: "Date is required",
  }),
  location: z.object({
    venue: requiredString("Venue"),
    city: z.string().optional(),
    latitude: z.coerce.number<number>(),
    longitude: z.coerce.number<number>(),
  }),
});

export type ActivitySchema = z.infer<typeof activitySchema>;
