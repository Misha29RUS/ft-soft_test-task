import style from './Input.module.scss';

export function Input({ ...props }) {
    return (
        <input
            className={`${style.input_text}`}
            {...props}
        />
    );
}