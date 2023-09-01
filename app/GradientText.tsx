import { useLayoutEffect, useRef } from "react";
import { Noise } from "noisejs";

// @ts-ignore
const noise = new Noise(Math.random());

const BASE_MOTION_RATE = 0.02;
const MOTION_ACCELERATION = 0.005 / 16;

enum MotionMode {
  SpeedUp,
  SlowDown,
  Constant,
}

interface GradientTextProps {
  text: string;
  uncoloredText?: string;
  rounded?: boolean;
  className: React.ComponentProps<"div">["className"];
}

export default function GradientText({
  text,
  uncoloredText,
  rounded,
  className,
}: GradientTextProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  const didSetupAnimation = useRef(false);
  const motionMode = useRef(MotionMode.Constant);

  useLayoutEffect(() => {
    if (didSetupAnimation.current) return;
    didSetupAnimation.current = true;

    const ctx = canvas.current!.getContext("2d")!;

    let prevFrameTimestamp = Date.now();
    let motionRate = BASE_MOTION_RATE;
    let t = 0;

    canvas.current!.style.width =
      (textContainer.current!.getBoundingClientRect().width + 14).toString() +
      "px";
    canvas.current!.style.height =
      (textContainer.current!.getBoundingClientRect().height + 6).toString() +
      "px";

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
      for (let x = 0; x <= 32; x++) {
        for (let y = 0; y <= 11; y++) {
          col(
            x,
            y,
            50,
            G(x + t + Math.sin(t) * 100, y - t - Math.cos(t) * 100),
            B(x - t - Math.cos(t) * 80, y + t + Math.sin(t) * 80)
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

      t = t + (motionRate / 10 / 16) * elapsed;
      window.requestAnimationFrame(run);
    }

    run();
  }, []);

  return (
    <div className={className}>
      <span className="relative">
        <canvas
          className={`absolute top-[1px] left-[-3px] ${
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
            {text}
          </span>
        </span>
      </span>
      <span className="relative">{uncoloredText}</span>
    </div>
  );
}
