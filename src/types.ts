export type Story = {
    id: string;
    author: {
        name: string;
        picture?: string;
    }
    header: string;
    text: string;
    date: string;
    likes: number;
    img?: string;
}