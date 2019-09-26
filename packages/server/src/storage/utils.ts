export const extractData = <T extends { data: any } >({ data }: T):T['data'] => data
