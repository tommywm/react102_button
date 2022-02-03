const Button = () => {

	const doMagic = () => {
		console.log('DAMN IT!! Told you not to press it..');
	}

	return (
		<>
			<button type='button' onClick={doMagic}>
				DO NOT PRESS
			</button>
		</>
	);
};

export default Button;