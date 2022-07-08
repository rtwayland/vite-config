import { NAME } from '$constants';
import { hello } from '$utils';

const Hello = () => {
	const handleHello = () => {
		hello(NAME);
	};

	return (
		<button type="button" onClick={handleHello}>
			Hello
		</button>
	);
};

export default Hello;
