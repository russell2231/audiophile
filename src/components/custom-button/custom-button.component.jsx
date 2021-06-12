import "./custom-button.styles.scss";

const CustomButton = ({ children, invert, secondary, ...otherProps }) => {
	return (
		<button
			className={`${secondary ? "secondary" : ""} ${
				invert ? "invert" : ""
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
