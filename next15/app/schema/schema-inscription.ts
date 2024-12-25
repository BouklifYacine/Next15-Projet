import {z} from "zod"

const SchemeInscription = z.object({
    password: z.string()
        .trim()
        .min(6, "Minimum 6 caractères")
        .max(35, "Maximum 35 caractères"),
    email: z.string().email()
})

export default SchemeInscription