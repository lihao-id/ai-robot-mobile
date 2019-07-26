import React, { Fragment } from "react";
import * as css from "./css/FrameMainBottom";
import Click from "./FrameClick/FrameClick";
import * as Util from "utils/Util";

function FrameMainBottom(props) {
  let { className, info } = props;
  let rightBlock1, rightBlock2, rightBlock3, rightBlock4;
  rightBlock1 = rightBlock2 = rightBlock3 = rightBlock4 = 0;
  let click = null;
  let rightBlock1Num;
  let rightBlock2Num;
  let rightBlock3Num;
  let rightBlock4Num;
  let minRightBlockWidth = 50;
  let maxRightBlockWidth = 50;

  if (info) {
    let infoList = Util.getInfoList(info);
    rightBlock1 = Util.formatNumber(info.clickTimes);
    rightBlock2 = Util.formatGlanceTime(info.totalGlanceTime);
    if (infoList.length >= 2) {
      rightBlock3 = infoList[0];
      rightBlock4 = infoList[1];
    } else if (infoList.length >= 1) {
      rightBlock3 = infoList[0];
      rightBlock4 = 0;
    } else {
      rightBlock3 = 0;
      rightBlock4 = 0;
    }

    rightBlock1Num = Util.getNumber(rightBlock1);
    rightBlock2Num = Util.getNumber(rightBlock2);
    rightBlock3Num = Util.getNumber(rightBlock3 === 0 ? 0 : rightBlock3.value);
    rightBlock4Num = Util.getNumber(rightBlock4 === 0 ? 0 : rightBlock4.value);

    let rightBlockArr = [
      rightBlock1Num,
      rightBlock2Num,
      rightBlock3Num,
      rightBlock4Num
    ];

    function getRightBlockWidth(num) {
      let max = Math.max(...rightBlockArr);
      if (max === 0) {
        return 0;
      }
      let width = (num / max) * maxRightBlockWidth;
      width = Math.round(width);
      return minRightBlockWidth + width;
    }
    click = {
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
          width: getRightBlockWidth(rightBlock1Num),
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
          width: getRightBlockWidth(rightBlock2Num),
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
          width: getRightBlockWidth(rightBlock3Num),
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
          width: getRightBlockWidth(rightBlock4Num),
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
  }
  return (
    <css.FrameMainBottom className={`FrameMainBottom ${className}`}>
      {info && (
        <Fragment>
          <Click
            style={click.click1}
            data={{ num1: rightBlock1, num2: rightBlock2 }}
            num={{ num1: rightBlock1Num, num2: rightBlock2Num }}
            leftLabel={{ chinese: "数据总计", english: "Total Data" }}
            text={{ num1: "点击量", num2: "浏览时间" }}
            rightWidth={minRightBlockWidth + maxRightBlockWidth + 50}
          />

          <Click
            style={click.click2}
            data={{ num1: rightBlock3.value, num2: rightBlock4.value }}
            num={{ num1: rightBlock3Num, num2: rightBlock4Num }}
            leftLabel={{ chinese: "排名数据", english: "Ranking Data" }}
            text={{ num1: rightBlock3.key, num2: rightBlock4.key }}
            rightWidth={minRightBlockWidth + maxRightBlockWidth + 50}
          />
        </Fragment>
      )}
    </css.FrameMainBottom>
  );
}

export default FrameMainBottom;
