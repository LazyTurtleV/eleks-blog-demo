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

//react

type SetStateAction<T> = T | ((prev: T) => T)
type InlineInputProps = {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    errors?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}