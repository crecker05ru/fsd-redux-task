const composition = (...functions: any) => {
  return (cb: any,...args: any[]) => {
    return [...functions].reduceRight((composition,fn) => 
    (...results: any[]) => 
    fn(composition,...results),cb)(...args)
  }
}

export default composition;