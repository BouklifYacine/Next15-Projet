import {z} from "zod"

const SchemaTaches = z.object({
    titre: z.string()
        .trim()
        .min(1, "Titre est requis")
        .min(3, "Minimum 3 caractères")
        .max(35, "Maximum 35 caractères"),
    message: z.string()
        .trim()
        .min(1, "Message est requis")
        .min(3, "Minimum 3 caractères")
        .max(255, "Maximum 255 caractères"),
})

export default SchemaTaches