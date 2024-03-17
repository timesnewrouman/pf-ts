interface InitialTable {
  type: string,
  data: {
    level: number,
    extreme?: number,
    high?: number,
    moderate?: number,
    low?: number,
    terrible?: number,
  }[];
}

export default InitialTable