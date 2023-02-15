// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'poor' | 'ok'
import { Weather, Visibility } from './enums'
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// del siguiente modo seleccionar uno o varios atributos y crear
// un nuevo tipo sin estos pero utilizandolos de igual manera.
//* export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'visibility' | 'weather'>

// mientras que con el método "omit" hacemos lo contrario y simplemente omitimos uno.

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

// el uso de interfaces nos facilita la reutilizacion de los mismos
// por ejemplo si queremos un specialDiaryEntry:

export interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: string
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
