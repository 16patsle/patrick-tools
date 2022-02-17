import Big, { BigSource } from "big.js"

const convertToKelvin = {
  kelvin: (value: number) => value,
  celsius: (value: number) => value + 273.15,
  fahrenheit: (value: number) => (value + 459.67) * (5 / 9),
  rankine: (value: number) => value * (5 / 9),
  delisle: (value: number) => (373.15 - value) * (3 / 2),
  newton: (value: number) => value * (33 / 100),
  reaumur: (value: number) => value * (4 / 5),
  romer: (value: number) => value * (21 / 40),
}

const convertFromKelvin = {
  kelvin: (value: number) => value,
  celsius: (value: number) => value - 273.15,
  fahrenheit: (value: number) => value * (9 / 5) - 459.67,
  rankine: (value: number) => value * (9 / 5),
  delisle: (value: number) => 373.15 - value * (2 / 3),
  newton: (value: number) => value * (100 / 33),
  reaumur: (value: number) => value * (5 / 4),
  romer: (value: number) => value * (40 / 21),
}

type TemperatureUnit = keyof typeof convertToKelvin & keyof typeof convertFromKelvin

export const convertTemperature = (value: BigSource, from: TemperatureUnit, to: TemperatureUnit) => {
  if (!(value instanceof Big)) {
    try {
      value = new Big(value)
    } catch {
      return false    }
  }
  if (from === to) {
    return value
  }

  value = value.toNumber()
  
  const fromK = convertToKelvin[from](value)
  const toK = convertToKelvin[to](fromK)

  return toK.toString()
}