import getParam from './get-param';

test('getParams returns url param', () => {
    expect(getParam('name', '?name=correct')).toBe('correct');
});

test('getParams returns url param when multiple are present', () => {
    expect(getParam('name', '?foo=some&bar=thing&name=correct')).toBe('correct');
});

test('getParams returns boolean param when boolean argument is true', () => {
    expect(getParam('bool', '?bool=true', true)).not.toBe('true');
    expect(getParam('bool', '?bool=true', true)).toBe(true);
});