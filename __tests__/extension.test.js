import { chrome } from "../src";

describe('browser.extension', () => {
    test('getURL', () => {
        expect(jest.isMockFunction(chrome.extension.getURL)).toBe(true);
    });
});
