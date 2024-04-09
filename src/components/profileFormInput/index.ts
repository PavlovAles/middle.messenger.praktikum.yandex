import './profileFormInput.css';
export { default as ProfileFormInput } from './profileFormInput.hbs?raw';
export interface IProfileFormInput {
    label: string;
    type: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
}
