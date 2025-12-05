import z from "zod";
import { requiredString } from "../util/util";

export const resetPassWordSchema = z
  .object({
    newPassword: requiredString("newPassword"),
    confirmPassword: requiredString("confirmPassword"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    error: "Password must match",
    path: ["confirmPassword"],
  });

export type ResetPassWordSchema = z.infer<typeof resetPassWordSchema>;
