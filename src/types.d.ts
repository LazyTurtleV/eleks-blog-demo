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

type DataLayer = {
    getArticles(): Promise<Story[]>;
    getArticle(id: string): Promise<Story>;
}