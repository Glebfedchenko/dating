import React from 'react'

/*define errors*/
export const required = value => (value ? null : "Required");
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address': undefined

export const maxLength = max => value => value && value.length > max ? `Not more than ${max} ` : undefined
export const maxL = maxLength(150)

export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minL = minLength(10)

export const number = value => value && isNaN(Number(value)) ? '' : undefined