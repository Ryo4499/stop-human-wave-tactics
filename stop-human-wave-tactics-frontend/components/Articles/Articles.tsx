import { useQuery } from "@apollo/client"

interface IArticlesProps{
    page:number
}
const perPage = parseInt(process.env.PER_PAGE || "10")

export const Articles = ({ page }: IArticlesProps) => {
    return (
        <div></div>
    )
}
