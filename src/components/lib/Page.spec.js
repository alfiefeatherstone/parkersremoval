import * as PageModule from './Page'

describe('<Page />', () => {
  it('should do something', () => {
    PageModule.__Rewire__('funcA', jest.fn(() => 123))
    expect(PageModule.funcB()).toEqual(123)
  })
})


// productHandlerModule.__Rewire__('fetchById', jest.fn(() => {
//   return {
//     then: jest.fn((reply) => {
//       reply(data)
//       return new Promise((resolve) => { resolve() })
//     })
//   }
// }))
// expect(productHandlerModule.__get__('fetchById')).toHaveBeenCalledTimes(0)
// productHandlerModule.productDetailsHandler(mockedReqArgument, mockedReplyFunction)
// expect(mockedReplyFunction).toHaveBeenCalledTimes(1)
// expect(productHandlerModule.__get__('fetchById')).toHaveBeenCalledTimes(1)
// expect(response).toEqual({ ...data,
//   items: data.productDataQuantity.SKUs.map((p, i) => {
//     return { size: p.value, quantity: data.productDataQuantity.quantities[i], sku: p.partnumber, selected: false }
//   })
// })
