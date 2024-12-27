import {z} from "zod"

const SchemaInscription = z.object({
    password: z.string()
        .trim()
        .min(6, "Minimum 6 caractères")
        .max(35, "Maximum 35 caractères"),
    name: z.string()
    .trim()
    .min(6, "Minimum 6 caractères")
    .max(35, "Maximum 35 caractères"),
})

export default SchemaInscription