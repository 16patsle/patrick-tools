/**
 * Read the contents of a file and return it as a string.
 * @param file The File object to read from
 * @returns The file's contents
 */
export const readStringFromFile = (file: File) => {
  const reader = new FileReader()
  return new Promise<string>((resolve, reject) => {
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsText(file)
  })
}
