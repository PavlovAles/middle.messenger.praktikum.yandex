import './input.css';
export { default as Input } from './input.hbs?raw';
export interface IInput {
    type: string;
    name: string;
    label: string;
    required?: boolean;
    errorMessage?: string;
}
