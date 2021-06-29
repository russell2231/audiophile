import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="group">
			{label ? <label className="form-input-label">{label}</label> : null}
			<input className="form-input" onChange={handleChange} {...otherProps} />
		</div>
	);
};

export default FormInput;
