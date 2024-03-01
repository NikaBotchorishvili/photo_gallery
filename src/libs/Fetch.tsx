export const fetchImages = async (url: string, key: string): Promise<Image[] | undefined> => {
    try {
        const response = await fetch(
            `${url}/?client_id=${key}&per_page=20`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        return await data;
    } catch (err) {
        console.log(err);
    }
};