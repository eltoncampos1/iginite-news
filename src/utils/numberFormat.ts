export function moneyFormat(value) {
    const formatedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    return formatedValue;
}