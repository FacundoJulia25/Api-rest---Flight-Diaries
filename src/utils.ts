import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromRequest: any): string => {
  if (typeof commentFromRequest !== 'string') {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromReq
}

const isString = (string: any): boolean => {
  return (typeof string === 'string' || string instanceof String)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
