"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import { Noise } from "noisejs";
import { useInView } from "react-intersection-observer";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const noise = new Noise(Math.random());

const BASE_MOTION_RATE = 0.02;
const MOTION_ACCELERATION = 0.005 / 16;

enum MotionMode {
  SpeedUp,
  SlowDown,
  Constant,
}

interface GradientMaskProps {
  uncoloredText?: string;
  rounded?: boolean;
  className: React.ComponentProps<"div">["className"];
  children: ReactNode;
}

export default function GradientMask({
  uncoloredText,
  rounded,
  className,
  children,
}: GradientMaskProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const didSetupAnimation = useRef(false);
  const motionMode = useRef(MotionMode.Constant);
  const inViewRef = useRef(true);
  const { ref, inView } = useInView();
  inViewRef.current = inView;

  useLayoutEffect(() => {
    if (didSetupAnimation.current) return;
    didSetupAnimation.current = true;

    const ctx = canvas.current!.getContext("2d")!;

    let prevFrameTimestamp = Date.now();
    let motionRate = BASE_MOTION_RATE;
    let t = 0;

    function col(x: number, y: number, r: number, g: number, b: number) {
      ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      ctx.fillRect(x, y, 1, 1);
    }

    function G(x: number, y: number) {
      return 100 + (noise.perlin2((x + 10) / 12, (y + 10) / 12) + 1) * 70;
    }

    function B(x: number, y: number) {
      return 100 + (noise.perlin2((x - 10) / 12, (y - 10) / 12) + 1) * 120;
    }

    function run() {
      if (inViewRef.current) {
        for (let x = 0; x <= 32; x++) {
          for (let y = 0; y <= 11; y++) {
            col(
              x,
              y,
              50,
              G(x + t + Math.sin(t) * 100, y - t - Math.cos(t) * 100),
              B(x - t - Math.cos(t) * 80, y + t + Math.sin(t) * 80),
            );
          }
        }

        const elapsed = Date.now() - prevFrameTimestamp;
        prevFrameTimestamp = Date.now();

        if (motionMode.current === MotionMode.SpeedUp) {
          motionRate += MOTION_ACCELERATION * elapsed;
        } else if (motionMode.current === MotionMode.SlowDown) {
          motionRate -= MOTION_ACCELERATION * elapsed;
        }

        if (motionRate > 0.12) {
          motionMode.current = MotionMode.SlowDown;
        } else if (motionRate < 0.02) {
          motionMode.current = MotionMode.Constant;
        }

        t += (motionRate / 10 / 16) * elapsed;
      }

      window.requestAnimationFrame(run);
    }

    run();
  }, [ref]);

  return (
    <div className={className}>
      <span className="relative overflow-hidden" ref={ref}>
        <canvas
          className={`absolute top-[1px] left-[-3px] bg-blue-500 w-[calc(100%+14px)] h-[calc(100%+6px)] ${
            rounded && "rounded-full"
          }`}
          width="32"
          height="11"
          ref={canvas}
        />
        <span
          className={`mix-blend-screen bg-white px-2 pb-2 relative left-[-4px] mr-[-16px] ${
            rounded && "rounded-full"
          }`}
        >
          <span
            className="pr-[2px] z-0 hover:drop-shadow-[0_2px_4px_black] transition-[.4s]"
            onMouseEnter={() => {
              motionMode.current = MotionMode.SpeedUp;
            }}
            ref={textContainer}
          >
            {children}
          </span>
        </span>
      </span>
      <span className="relative">{uncoloredText}</span>
    </div>
  );
}
