export default function convertBinartToDecimal(binaryStr) {
  if (!/^[01]+$/.test(binaryStr)) {
    return false
  }
  const digits = binaryStr.split('')
}
