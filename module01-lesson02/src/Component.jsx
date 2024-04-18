import css from "./Component.module.css";

function Component() {
	const { divStyle, textRight, spacing } = css;
	return (
		<div className={`${divStyle} ${textRight}`}>
			{/* <div className="divStyle "> */}
			<h2 className={spacing}>Second Component1</h2>
		</div>
	);
}

export default Component;
