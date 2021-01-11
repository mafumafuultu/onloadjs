export default function onload (doc) {
	const d = doc == null ? window.document : doc;
	return d.readyState !== 'complete'
		? new Promise(r => d.addEventListener('readystatechange', () => {
			switch (d.readyState) {
				case 'complete': r();break;
				default:
			}
		}))
		: Promise.resolve();
};