export const operators = {
  bracketOpen: {
    output: "(",
    token: "(",
    priority: 0
  },
  bracketClose: {
    output: ")",
    token: ")",
    priority: 0
  },
  plus: {
    output: "+",
    token: "+",
    priority: 1
  },
  minus: {
    output: "-",
    token: "-",
    priority: 1
  },
  multiplication: {
    output: "\u00D7",
    token: "*",
    priority: 2,
  },
  division: {
    output: "/",
    token: "/",
    priority: 2
  },
  square: {
    output: "\u221A",
    token: "undefined",
    priority: 0
  },
  comma: {
    output: ",",
    token: ",",
    priority: 10
  },
  percent: {
    output: "%",
    token: "%", 
    priority: 3
  }
};

