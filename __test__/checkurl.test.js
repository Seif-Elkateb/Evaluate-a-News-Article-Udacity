import {isURL} from './../src/client/js/checkurl.js'

describe('test the isUrl function ',()=>{
  test('check if isUrl function is defined',()=>{
    expect(isURL).toBeDefined();
  })
  test('isUrl(seif) is false',()=>{
    expect(isURL('seif')).toBeFalsy();
  })
  test('isUrl(https://www.google.com) is true',()=>{
    expect(isURL('https://www.google.com')).toBeTruthy();
  })
})
