export function mint(props) {
	if (!props || typeof standard !== 'object') {
		throw new TypeError(`Expected an object to be passed into 'mint', got ${typeof props}`);
	}
	const { standard, name, symbol, provider } = props;

	if (standard && typeof standard !== 'string') {
		throw new TypeError(`Expected a string for "standard", got ${typeof standard}`);
	}
	if (name && typeof name !== 'string') {
		throw new TypeError(`Expected a string for "name", got ${typeof name}`);
	}
	if (symbol && typeof symbol !== 'string') {
		throw new TypeError(`Expected a string for "symbol", got ${typeof symbol}`);
	}
	if (provider && typeof provider !== 'object') {
		throw new TypeError(`Expected an object for "provider", got ${typeof provider}`);
	}

	return `0x${name}`;
}
