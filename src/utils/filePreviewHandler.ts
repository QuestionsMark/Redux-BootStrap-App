export interface Preview {
    name: string;
    size: number;
    link: string;
}

export function filePreviewHandler(setState: Function, file: File): void {
    const name = file.name;
    const size = file.size;
    const link = URL.createObjectURL(file);
    setState({ name, size, link });
}