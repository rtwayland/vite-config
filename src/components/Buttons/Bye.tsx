import { NAME } from '$constants';
import bye from '$utils/bye';

const Bye = () => {
	const handleBye = () => {
		bye(NAME);
	};

	return (
		<button type="button" onClick={handleBye}>
			Bye
		</button>
	);
};

export default Bye;
