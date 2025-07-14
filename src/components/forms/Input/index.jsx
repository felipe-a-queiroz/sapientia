const Input = ({ id, label, value, onChange, disabled, ...rest }) => {
    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                {...rest}
            />
        </div>
    );
};

export default Input;
