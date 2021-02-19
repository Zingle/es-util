const titles = [
    'Mr',
    'Mrs',
    'Ms',
    'Mx',
    'Dr',
    'Prof',
    'Dir',
    'Rev',
    'Capt'
];

export default function getInitials(title: string): string {
    if (!title) {
        return '';
    }

    const match = title.match(/\b(\w+)\b/g);
    const parts = match ? match.filter(part => !titles.includes(part)).join(' ') : '';
    const initials = parts.match(/\b\w/g) || [];

    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}