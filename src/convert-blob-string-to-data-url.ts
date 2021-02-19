export default function toDataURL(url: string): Promise<string|ArrayBuffer|null> {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            const reader = new FileReader();
            reader.onloadend = function() {
                resolve(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    });
}
