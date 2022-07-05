const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

export default class SPromise {
  // 将执行函数传递进构造函数
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      }
    }
    try {
      // 调用执行函数，把修改状态的方法作为参数传递进执行函数，以便执行函数调用
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled,onRejected){
    onFulfilled=typeof onFulfilled === 'function'?onFulfilled:value=>value
    onRejected=typeof onRejected==='function'?onRejected:reason=>{throw reason}
    if(this.status===FULFILLED) onFulfilled(this.value)
    if(this.status==REJECTED) onRejected(this.reason)
  }
    
}

