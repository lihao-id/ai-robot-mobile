import React from "react";
import * as css from "./css/FrameMainBottom";
import Click from "./FrameClick/FrameClick";

function FrameMainBottom({ className }) {
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
        width: 123,
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
        width: 103,
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
        width: 83,
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
        width: 63,
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
      <Click style={click.click1} />
      <Click style={click.click2} />
    </css.FrameMainBottom>
  );
}

export default FrameMainBottom;
