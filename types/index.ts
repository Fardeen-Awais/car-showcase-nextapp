export interface ButtonProps{
    title: string;
    containerStyles?: string;
}
 
export interface CustomFilterProps{
    title:string;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}