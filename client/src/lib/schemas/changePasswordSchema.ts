import z from "zod";
import { requiredString } from "../util/util";

export const changePassWordSchema = z
  .object({
    currentPassword: requiredString("currentPassword"),
    newPassword: requiredString("newPassword"),
    confirmPassword: requiredString("confirmPassword"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    error: "Password must match",
    path: ["confirmPassword"],
  });

export type ChangePassWordSchema = z.infer<typeof changePassWordSchema>;
