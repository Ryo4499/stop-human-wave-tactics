export const getPageSize = (): number => {
    const pagesize = process.env.PAGESIZE
    if (pagesize != null) {
        return parseInt(pagesize, 10)
    } else {
        return 10
    }
}