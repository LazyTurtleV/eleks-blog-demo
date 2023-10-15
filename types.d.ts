type Story = {
    id: string;
    author: {
        name: string;
        picture?: string;
    };
    date: string;
    text: string;
    likes: number;
    header: string;
    img?: string;
}

type SetStateAction<T> = T | ((prev: T) => T)

type DataLayer = {
    getArticles(): Promise<Story[]>;
    getArticle(id: string): Promise<Story>;
}