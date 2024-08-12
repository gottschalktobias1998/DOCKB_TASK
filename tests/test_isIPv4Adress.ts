import { isIPv4Adress } from '../src/utils/isIPv4Adress';

// Define test cases
const testCases = [
    { address: '192.168.1.1', expected: true },
    { address: '0.0.0.0', expected: true },
    { address: '255.255.255.255', expected: true },
    { address: '256.256.256.256', expected: false },
    { address: '192.168.1', expected: false },
    { address: '192.168.1.1.1', expected: false },
    { address: 'abcd', expected: false },
    { address: '123.456.789.0', expected: false },
];

// Run tests
testCases.forEach(({ address, expected }) => {
    const result = isIPv4Adress(address);
    console.log(`Address: ${address}`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
    console.log(`Test ${result === expected ? 'PASSED' : 'FAILED'}`);
    console.log('---');
});
