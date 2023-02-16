
export const getBlobFromUri = async (uri: string) => {
    const res = await fetch(uri)
    const blob = res.blob()
    return blob
};

