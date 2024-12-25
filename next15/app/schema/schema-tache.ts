import {z} from "zod"

const SchemaTaches = z.object({
    titre: z.string().trim().min(3, {message : " Minimum 3 caractères "}).max(35, {message : " Maximum 35 caractères"}),
    message : z.string().trim().min(3, {message : " Minimum 3 caractères "}).max(255, {message : " Maximum 255 caractères"}),
})

export default SchemaTaches