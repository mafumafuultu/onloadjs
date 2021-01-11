import test from 'ava';
import jsdom from 'jsdom';
import onload from "./onload.js";

const {JSDOM} = jsdom;
const dom = new JSDOM('');
const {document} = dom.window;

test('document.readyState is complete',async t => {
	onload(document).then(() => {
		t.is(document.readyState, 'complete');
	});
});
