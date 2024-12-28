import { z } from "zod";

export const SchemaTaches = z.object({
  titre: z
    .string()
    .trim()
    .min(1, "Titre est requis")
    .min(3, "Minimum 3 caractères")
    .max(35, "Maximum 35 caractères"),
  message: z
    .string()
    .trim()
    .min(1, "Message est requis")
    .min(3, "Minimum 3 caractères")
    .max(255, "Maximum 255 caractères"),
});

export const PatchSchemaTache = z.object({
  titre: z
    .string()
    .trim()
    .min(1, "Titre est requis")
    .min(3, "Minimum 3 caractères")
    .max(35, "Maximum 35 caractères")
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message est requis")
    .min(3, "Minimum 3 caractères")
    .max(255, "Maximum 255 caractères")
    .optional(),

  assignerauserid: z
    .string()
    .min(1, "L'id est requis")
    .max(255, "Max 255 caractères")
    .optional()
    .nullable(),
});
