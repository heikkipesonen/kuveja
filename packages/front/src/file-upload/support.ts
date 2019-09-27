export const fileId = () => Math.random().toString(32).slice(2)

export const handleUploadError = (e: Error) => console.log(e)