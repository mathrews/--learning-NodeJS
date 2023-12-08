// Fibonacci é uma sequência de números inteiros iniciados por zero e um, no qual cada termo subsequente corresponde a soma dos dois números anteriores
const Fibonacci = (x) => {
    if (BigInt(x) == 1 || BigInt(x) == 0) {
        return BigInt(x);
    }
    return Fibonacci(x - 1) + Fibonacci(x - 2);
}

export default Fibonacci;
