export const getPageSize = (): number => {
    if (process.env.PAGESIZE != null) {
        return parseInt(process.env.PAGESIZE, 10)
    } else {
        return 10
    }
}