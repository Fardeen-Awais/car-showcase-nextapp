export interface ButtonProps{
    title: string;
    containerStyles?: string;
}
 
export interface CustomFilterProps{
    title:string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}