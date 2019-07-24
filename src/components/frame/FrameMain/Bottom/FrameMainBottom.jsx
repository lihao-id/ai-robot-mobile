import React from "react";
import * as css from "./css/FrameMainBottom";
import Click from "./FrameClick/FrameClick";

function FrameMainBottom(props) {
  let { className, info } = props;
  let rightBlock1 = 42;
  let rightBlock2 = 32;
  let rightBlock3 = 52;
  let rightBlock4 = 22;

  let rightBlockArr = [rightBlock1, rightBlock2, rightBlock3, rightBlock4];

  function getRightBlockWidth(num) {
    let maxRightBlockWidth = 123;
    let max = Math.max(...rightBlockArr);
    let width = (num / max) * maxRightBlockWidth;
    width = Math.round(width);
    return width;
  }
  const click = {
    click1: {
      height: 60,
      leftText: {
        animate1: {
          duration: 2,
          delay: 2.5
        }
      },
      line: {
        animate1: {
          duration: 1,
          delay: 1.8
        }
      },
      pentagon: {
        animate1: {
          duration: 1,
          delay: 0.9
        }
      },
      rightBlock1: {
        bgColor: "rgba(25,100,113,1)",
        // width: 123,
        width: getRightBlockWidth(rightBlock1),
        animate1: {
          duration: 1,
          delay: 2.9
        },
        animate2: {
          duration: 2,
          delay: 3.9
        },
        animate3: {
          duration: 0.5,
          delay: 5.9
        }
      },
      rightBlock2: {
        bgColor: "rgba(4,22,43,1)",
        width: getRightBlockWidth(rightBlock2),
        animate1: {
          duration: 1,
          delay: 2.6
        },
        animate2: {
          duration: 2,
          delay: 3.6
        },
        animate3: {
          duration: 0.5,
          delay: 5.6
        }
      },
      rightBlockTextWrapper1: {
        animate1: {
          duration: 1,
          delay: 1.9
        }
      },
      rightBlockTextWrapper2: {
        animate1: {
          duration: 1,
          delay: 1.6
        }
      }
    },
    click2: {
      height: 60,
      leftText: {
        animate1: {
          duration: 2,
          delay: 1.5
        }
      },
      line: {
        animate1: {
          duration: 1,
          delay: 0.9
        }
      },
      pentagon: {
        animate1: {
          duration: 1,
          delay: 0
        }
      },
      rightBlock1: {
        bgColor: "rgba(25,100,113,1)",
        width: getRightBlockWidth(rightBlock3),
        animate1: {
          duration: 1,
          delay: 2.5
        },
        animate2: {
          duration: 2,
          delay: 3.3
        },
        animate3: {
          duration: 0.5,
          delay: 5.3
        }
      },
      rightBlock2: {
        bgColor: "rgba(4,22,43,1)",
        width: getRightBlockWidth(rightBlock4),
        animate1: {
          duration: 1,
          delay: 2
        },
        animate2: {
          duration: 2,
          delay: 3
        },
        animate3: {
          duration: 0.5,
          delay: 5
        }
      },
      rightBlockTextWrapper1: {
        animate1: {
          duration: 1,
          delay: 1.3
        }
      },
      rightBlockTextWrapper2: {
        animate1: {
          duration: 1,
          delay: 1
        }
      }
    }
  };
  return (
    <css.FrameMainBottom className={`FrameMainBottom ${className}`}>
      <Click
        style={click.click1}
        data={{ num1: rightBlock1, num2: rightBlock2 }}
      />
      <Click
        style={click.click2}
        data={{ num1: rightBlock3, num2: rightBlock4 }}
      />
    </css.FrameMainBottom>
  );
}

export default FrameMainBottom;
