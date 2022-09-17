// Based on fast-text-encoding by samthor
// Licensed under Apache 2.0
// See: https://github.com/samthor/fast-text-encoding

export class FastTextEncoder {
  // This does not accept an encoding, and always uses UTF-8:
  // https://www.w3.org/TR/encoding/#dom-textencoder
  encoding: BufferEncoding = 'utf-8'

  encode(string: string): Uint8Array {
    return Buffer.from(string)
  }
}

export class FastTextDecoder {
  declare encoding: BufferEncoding
  fatal = false
  ignoreBOM = false

  constructor(utfLabel: string | undefined) {
    utfLabel = utfLabel || 'utf-8'

    if (!Buffer.isEncoding(utfLabel)) {
      throw new RangeError(
        `FastTextDecoder: encoding label provided ('${utfLabel}') is invalid.`
      )
    }

    this.encoding = utfLabel
  }

  decode(buffer: ArrayBuffer | ArrayBufferView): string {
    var bytes

    if (buffer instanceof Uint8Array) {
      // Accept Uint8Array instances as-is. This is also a Node buffer.
      bytes = buffer
      // @ts-expect-error
    } else if (buffer['buffer'] instanceof ArrayBuffer) {
      // Look for ArrayBufferView, which isn't a real type, but basically
      // represents all the valid TypedArray types plus DataView. They all have
      // ".buffer" as an instance of ArrayBuffer.
      bytes = new Uint8Array((buffer as ArrayBufferView).buffer)
    } else {
      // The only other valid argument here is that "buffer" is an ArrayBuffer.
      // We also try to convert anything else passed to a Uint8Array, as this
      // catches anything that's array-like. Native code would throw here.
      bytes = new Uint8Array(buffer as any)
    }

    var b: Buffer
    if (bytes instanceof Buffer) {
      b = bytes
    } else {
      b = Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    }
    return b.toString(this.encoding)
  }
}
