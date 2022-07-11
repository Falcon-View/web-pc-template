import { useState } from '#app'
export function useA() {
  console.log('AAAAAAAA')
}

function useB() {
  console.log('BBBBBBBB')
}

function _useC() {
  return 'c'
}

export const useD = () => {
  return 'd'
}

export { useB, _useC as useC }

export default function () {
  return useState('foo', () => 'bar')
}
